module.exports = [
  {
    number: 9,
    slug: 'project',
    emoji: '🛠️',
    title: 'โปรเจคประยุกต์: Full Caching System (API ด้วย MongoDB + Redis)',
    content: `<h2>ออกแบบโปรเจค (Project Architecture)</h2>
<p>ในบทนี้เราจะนำความรู้ทั้งหมดมาผสานกันเพื่อสร้าง RESTful API ของ <strong>ระบบจัดการแคตตาล็อกสินค้า (Product Catalog System)</strong> ด้วย Node.js (Express), MongoDB (Primary DB), และ Redis (Caching Layer)</p>
<p><strong>เป้าหมายของระบบ:</strong></p>
<ol style="padding-left:20px">
  <li>รองรับการ Query ดึงรายการสินค้าทั้งหมด (Read-heavy operation)</li>
  <li>ลดภาระของ MongoDB โดยใช้ <strong>Cache-aside Pattern</strong> สำหรับข้อมูลสินค้า</li>
  <li>เมื่อมีการสร้างหรืออัปเดตสินค้า (Write operation) จะต้องทำ <strong>Cache Invalidation</strong> (ลบแคชเก่าทิ้ง) อัตโนมัติเพื่อให้ข้อมูลไม่อัปเดตช้ากว่าความจริง (Stale Data)</li>
</ol>

<h2>เตรียมพร้อม (Setup Environment)</h2>
<p>เราจะต้องลง Package ที่สำคัญผ่าน npm:</p>
<pre><code>npm install express mongoose redis dotenv</code></pre>

<h2>โครงสร้างโค้ดส่วนควบคุม (Controller) ผสมผสาน Cache</h2>

<h3>1. ฟังก์ชันการดึงข้อมูลสินค้าทั้งหมด (GET /products)</h3>
<p>เราจะเช็คที่ Redis ก่อน ถ้ามีส่งกลับทันที ถ้าไม่มีให้ไปควานหาจาก MongoDB</p>
<pre><code>const express = require('express');
const mongoose = require('mongoose');
const { createClient } = require('redis');

// สมมติว่า Schema ของ Mongoose สร้างไว้แล้วชื่อ Product
const Product = require('./models/Product');

const app = express();
app.use(express.json());

// สร้าง Redis Client (เชื่อมต่อ Redis Server)
const redisClient = createClient({ url: 'redis://localhost:6379' });
redisClient.connect().catch(console.error);

// ----------------------------------------------------
// Route: Get All Products
// ----------------------------------------------------
app.get('/api/products', async (req, res) => {
  try {
    const cacheKey = 'api:products:all';
    
    // 1. ลองดึงจาก Redis ก่อน (Cache Hit)
    const cachedProducts = await redisClient.get(cacheKey);
    
    if (cachedProducts) {
      console.log('✅ ส่งข้อมูลจาก Redis Cache');
      // ข้อมูลใน Redis เก็บเป็น String ต้องแปลงกลับเป็น JSON
      return res.json({ source: 'cache', data: JSON.parse(cachedProducts) });
    }
    
    // 2. ถ้าใน Redis ไม่มี (Cache Miss) ไปดึงจาก MongoDB
    console.log('❌ ไปดึงข้อมูลจาก MongoDB');
    // ใช้ lean() ใน Mongoose ช่วยลด overhead เพราะเราไม่ต้องการ Mongoose Document Methods แค่ต้องการ JSON ธรรมดา
    const products = await Product.find({}).lean();
    
    // 3. เอาข้อมูลไปยัดลง Redis ตั้ง TTL ไว้ 1 ชั่วโมง (3600 วิ)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));
    
    return res.json({ source: 'database', data: products });
    
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});</code></pre>

<h3>2. ฟังก์ชันการดึงสินค้าแบบมีเงื่อนไข เช่น Pagination</h3>
<p>ความท้าทายคือ ถ้า URL เป็น <code>/api/products?page=2&limit=10</code> คีย์ใน Redis ต้องเปลี่ยนตามด้วย!</p>
<pre><code>app.get('/api/products/paginate', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  // สร้าง Cache Key แบบ Dynamic ตามพารามิเตอร์
  const cacheKey = \`api:products:page:\${page}:limit:\${limit}\`;
  
  const cachedData = await redisClient.get(cacheKey);
  if (cachedData) return res.json(JSON.parse(cachedData));

  // Skip และ Limit ใน MongoDB
  const skip = (page - 1) * limit;
  const products = await Product.find().skip(skip).limit(Number(limit)).lean();
  
  await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));
  res.json({ source: 'db', data: products });
});</code></pre>

<h3>3. ฟังก์ชันการเพิ่มสินค้า (POST /products) และการลบ Cache</h3>
<p>เมื่อมีการเพิ่มสินค้าใหม่ <code>api:products:all</code> ที่แคชไว้จะเก่าทันที (มีข้อมูลไม่ครบ) เราต้องลบทิ้ง (Invalidate)</p>
<pre><code>app.post('/api/products', async (req, res) => {
  try {
    // 1. บันทึกลง MongoDB
    const newProduct = await Product.create(req.body);
    
    // 2. ลบ Cache ที่เกี่ยวข้องทิ้ง (Cache Invalidation)
    await redisClient.del('api:products:all');
    
    // ถ้าเรามี Cache แบบ Paginate เราจะใช้คำสั่ง KEYS เพื่อลบแบบ Pattern (ระวัง! KEYS ห้ามใช้ใน Production ยามพีค ควรใช้ SCAN แทน)
    // สำหรับระบบใหญ่ๆ การลบแบบ Pattern จะนิยมใช้การสร้าง Hash Group แทน
    
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});</code></pre>

<div class='tip-box'><strong>💡 Pro Tip: การใช้ Mongoose Middleware เพื่อจัดการ Cache (Advanced)</strong><br/>
แทนที่คุณจะต้องมานั่งพิมพ์ <code>redisClient.del(...)</code> ในทุกๆ Controller ที่มีการอัปเดตข้อมูล คุณสามารถย้ายตรรกะนี้ไปไว้ใน Mongoose Middleware (Post-save hook) เพื่อบอกว่า "ทุกครั้งที่ Model Product มีการเปลี่ยนแปลง ให้ไปเตะ Redis ทิ้งอัตโนมัติ" ช่วยให้โค้ดสะอาดขึ้น ลดความผิดพลาดจากคนลืมลบ Cache (Human Error) ได้อย่างสมบูรณ์แบบ</div>

<h2>บทสรุปคอร์ส</h2>
<p>ในสถาปัตยกรรมระดับ Enterprise การเลือกใช้ฐานข้อมูลเพียงตัวเดียวไม่เคยเพียงพอ <strong>MongoDB</strong> มอบความยืดหยุ่นในการจัดเก็บข้อมูลที่ซับซ้อนและการ Scale-out อย่างไร้รอยต่อ ในขณะที่ <strong>Redis</strong> อุดช่องโหว่เรื่องความเร็วและ Latency ด้วยความแรงระดับ Memory ช่วยแบ่งเบาภาระของฐานข้อมูลหลักได้อย่างมหาศาล การประสานพลังของเทคโนโลยีทั้งสอง (NoSQL & In-Memory Cache) จึงเป็นกลยุทธ์ที่สำคัญที่สุดสำหรับนักพัฒนาระบบ Backend ในยุคปัจจุบัน</p>`
  }
];
