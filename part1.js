module.exports = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🍏',
    title: 'ภาพรวมระบบ NoSQL และ In-Memory Caching (MongoDB & Redis)',
    content: `<h2>ทำความรู้จักกับ NoSQL Database</h2>
<p>ในยุคที่ข้อมูลมีปริมาณมหาศาลและมีการเปลี่ยนแปลงอย่างรวดเร็ว (Big Data) ฐานข้อมูลแบบเดิมที่เป็น Relational Database Management System (RDBMS) เช่น MySQL หรือ PostgreSQL อาจไม่สามารถตอบโจทย์ในทุกสถานการณ์ <strong>NoSQL (Not Only SQL)</strong> จึงถูกออกแบบมาเพื่อแก้ไขข้อจำกัดเหล่านี้ โดยเน้นที่ความยืดหยุ่นของโครงสร้างข้อมูล (Schema Flexibility), การขยายตัวในแนวนอน (Horizontal Scalability) และประสิทธิภาพที่สูงในการจัดการข้อมูลขนาดใหญ่</p>

<h3>เมื่อไหร่ที่ควรเลือกใช้ NoSQL?</h3>
<p>การเลือกใช้ NoSQL มักจะเหมาะสมกับสถานการณ์ต่อไปนี้:</p>
<ul>
  <li><strong>Rapid Development:</strong> เมื่อต้องการพัฒนาแอปพลิเคชันอย่างรวดเร็ว และโครงสร้างข้อมูลยังไม่นิ่ง หรือมีการเปลี่ยนแปลงบ่อย การใช้ Document Database อย่าง MongoDB จะช่วยลดเวลาในการจัดการ Schema หรือการทำ Migration</li>
  <li><strong>High Volume of Data:</strong> เมื่อระบบต้องรองรับข้อมูลระดับ Terabytes หรือ Petabytes ซึ่งการ Scale-up (เพิ่มสเปกเครื่อง) ของ RDBMS มีราคาแพงและมีขีดจำกัด การ Scale-out (เพิ่มจำนวนเครื่อง) ของ NoSQL ทำได้ง่ายและประหยัดกว่า</li>
  <li><strong>Unstructured หรือ Semi-structured Data:</strong> เมื่อข้อมูลไม่มีรูปแบบที่ตายตัว เช่น JSON จาก API ภายนอก, ข้อมูล Log, ข้อมูล Social Media Feed หรือข้อมูลจาก IoT Sensors</li>
  <li><strong>High Throughput:</strong> เมื่อระบบต้องการการอ่าน/เขียน (Read/Write) ข้อมูลจำนวนมากในเสี้ยววินาที เช่น ระบบ Real-time Analytics หรือระบบ Caching</li>
</ul>

<div class='tip-box'><strong>💡 Pro Tip: SQL vs NoSQL Decision</strong><br/>
จำไว้เสมอว่า NoSQL ไม่ได้ถูกสร้างมาเพื่อ "แทนที่" SQL แต่สร้างมาเพื่อ "เติมเต็ม" งานที่ SQL ไม่ถนัด ตัวอย่างเช่น หากระบบของคุณเป็นระบบการเงิน (Banking System) ที่ต้องการความถูกต้องของ Transaction 100% (ACID Properties อย่างเข้มงวด) SQL ย่อมเป็นทางเลือกที่ดีกว่า แต่หากเป็นระบบ Product Catalog ของ E-commerce ที่สินค้าแต่ละประเภทมี Attributes ต่างกันมาก NoSQL จะเหมาะสมกว่ามาก</div>

<h2>ระบบ Caching แบบ In-Memory</h2>
<p>แม้ว่าฐานข้อมูลหลักจะมีความเร็วเพียงใด แต่การต้องดึงข้อมูลซ้ำๆ จาก Disk ย่อมทำให้เกิด Latency และใช้ Resource ของระบบมาก <strong>In-Memory Caching</strong> จึงเข้ามามีบทบาทในการเก็บข้อมูลที่ถูกเรียกใช้บ่อย (Frequently Accessed Data) ไว้ใน RAM (Random Access Memory) เพื่อให้สามารถดึงข้อมูลได้ในระดับไมโครวินาที (Microseconds)</p>

<h3>Redis vs Memcached</h3>
<p>ในตลาด In-Memory Cache มีสองตัวเลือกที่ได้รับความนิยมสูงสุดคือ Redis และ Memcached แม้จุดประสงค์จะคล้ายกัน แต่มีสถาปัตยกรรมและฟีเจอร์ที่แตกต่างกันอย่างมีนัยสำคัญ:</p>

<ol style="padding-left:20px">
  <li><strong>Memcached:</strong>
    <ul>
      <li>ออกแบบมาเพื่อเป็น Simple Key-Value Store เท่านั้น</li>
      <li>รองรับเฉพาะข้อมูลประเภท String (ถ้าเป็น Object ต้องทำ Serialization/Deserialization)</li>
      <li>เหมาะกับงานที่ต้องการ Cache HTML/Page แบบตรงไปตรงมา และต้องการความเรียบง่ายสูงสุด</li>
      <li>ไม่มีระบบ Persistence (ถ้าไฟดับ ข้อมูลหายทั้งหมดทันที)</li>
    </ul>
  </li>
  <li><strong>Redis (Remote Dictionary Server):</strong>
    <ul>
      <li>เป็น Advanced Data Structure Store รองรับข้อมูลหลากหลายประเภท เช่น String, Hash, List, Set, Sorted Set, Bitmaps, และ Streams</li>
      <li>รองรับระบบ Persistence สามารถเซฟข้อมูลลง Disk ได้ (RDB Snapshots และ AOF Logs)</li>
      <li>มีระบบ Pub/Sub, Transactions และ Lua Scripting ในตัว</li>
      <li>เหมาะกับการทำ Session Management, Leaderboards, Real-time Messaging, และ Rate Limiting</li>
    </ul>
  </li>
</ol>

<p>ด้วยความสามารถที่หลากหลายและครบเครื่องกว่า ทำให้ในปัจจุบัน Redis กลายเป็นมาตรฐานของอุตสาหกรรมสำหรับการทำระบบ Caching และ Data Broker ไปแล้ว</p>

<h2>สรุปสถาปัตยกรรม (Architecture Overview)</h2>
<p>ในคอร์สนี้เราจะเรียนรู้การสร้างสถาปัตยกรรมสมัยใหม่ที่ประสานพลังระหว่าง <strong>MongoDB</strong> (ทำหน้าที่เป็น Primary Database สำหรับเก็บข้อมูลแบบ Persistent ด้วยความยืดหยุ่นของ Document Model) และ <strong>Redis</strong> (ทำหน้าที่เป็น High-Performance Cache และ Message Broker) เพื่อสร้างระบบที่มีประสิทธิภาพสูง รองรับผู้ใช้งานจำนวนมาก และลดภาระของฐานข้อมูลหลักได้อย่างมีประสิทธิภาพ</p>`
  },
  {
    number: 1,
    slug: 'mongodb',
    emoji: '🌿',
    title: 'MongoDB Fundamentals: พื้นฐาน Document Model และ MongoDB Atlas',
    content: `<h2>ทำความเข้าใจ Document Model</h2>
<p>MongoDB เป็นฐานข้อมูลประเภท Document-Oriented Database แตกต่างจาก RDBMS อย่างชัดเจน โดยข้อมูลใน MongoDB จะถูกจัดเก็บในรูปแบบที่เรียกว่า <strong>BSON (Binary JSON)</strong> ซึ่งทำให้อ่านง่ายสำหรับนักพัฒนา และเข้ากันได้กับ JavaScript/Node.js เป็นอย่างดี</p>

<h3>โครงสร้างพื้นฐาน</h3>
<ul>
  <li><strong>Database:</strong> คือฐานข้อมูลใหญ่ที่เก็บ Collection หลายๆ ตัว (เทียบเท่ากับ Database ใน SQL)</li>
  <li><strong>Collection:</strong> คือกลุ่มของ Document (เทียบเท่ากับ Table ใน SQL)</li>
  <li><strong>Document:</strong> คือหน่วยข้อมูลพื้นฐานที่อยู่ใน Collection (เทียบเท่ากับ Row หรือ Record ใน SQL) แต่อยู่ในรูปแบบ JSON object</li>
  <li><strong>Field:</strong> คือคู่ Key-Value ใน Document (เทียบเท่ากับ Column ใน SQL)</li>
</ul>

<div class='tip-box'><strong>💡 Pro Tip: Schema-less vs Schema-flexible</strong><br/>
แม้หลายคนจะเรียก MongoDB ว่าเป็น Schema-less (ไม่มีโครงสร้างตายตัว) แต่ในความเป็นจริงเรามักจะเรียกว่า <strong>Schema-flexible</strong> เพราะถึงแม้ MongoDB จะอนุญาตให้ Document ใน Collection เดียวกันมี Field ต่างกันได้ แต่ในทางปฏิบัติ นักพัฒนาก็ควรมีการออกแบบโครงสร้างข้อมูลคร่าวๆ (Schema Design) เพื่อป้องกันความสับสนในการ Query ข้อมูลในภายหลัง</div>

<h2>Data Types ใน BSON</h2>
<p>BSON รองรับ Data Types พื้นฐานเหมือน JSON (String, Number, Boolean, Array, Object) แต่มีการขยายประเภทเพิ่มเติมเพื่อตอบโจทย์ฐานข้อมูล เช่น:</p>
<ol style="padding-left:20px">
  <li><strong>ObjectId:</strong> ชนิดข้อมูลพิเศษขนาด 12-byte สำหรับใช้เป็น Primary Key (ถูกสร้างอัตโนมัติใน Field <code>_id</code> หากเราไม่ได้ระบุ) ประกอบด้วย Timestamp, Machine ID, Process ID, และ Counter ทำให้มั่นใจได้ว่า Unique แน่นอน</li>
  <li><strong>Date:</strong> สำหรับเก็บข้อมูลวันที่และเวลาในรูปแบบ 64-bit integer รองรับระบบ Timezone</li>
  <li><strong>Decimal128:</strong> สำหรับเก็บตัวเลขทศนิยมที่มีความแม่นยำสูง มักใช้ในระบบการเงิน (Financial System) เพื่อป้องกันปัญหา Rounding error จาก Float แบบปกติ</li>
  <li><strong>Binary Data:</strong> ใช้เก็บข้อมูลไฟล์ ภาพ หรือสื่อต่างๆ ในรูปแบบไบนารี</li>
</ol>

<h2>พื้นฐานการ CRUD Operations</h2>
<p>CRUD (Create, Read, Update, Delete) คือหัวใจหลักของการจัดการข้อมูล มาดูคำสั่งพื้นฐานผ่าน MongoDB Shell (mongosh):</p>

<h3>1. Create (การสร้างข้อมูล)</h3>
<pre><code>// แทรกข้อมูล 1 Document
db.users.insertOne({
  name: "สมชาย รักดี",
  age: 28,
  skills: ["Node.js", "MongoDB", "React"],
  status: "active"
});

// แทรกข้อมูลหลาย Document
db.users.insertMany([
  { name: "สมศรี", age: 24, status: "active" },
  { name: "มานะ", age: 35, status: "inactive" }
]);</code></pre>

<h3>2. Read (การอ่านข้อมูล)</h3>
<pre><code>// ดึงข้อมูลทั้งหมดใน Collection
db.users.find();

// ดึงข้อมูลแบบมีเงื่อนไข (อายุมากกว่า 25)
db.users.find({ age: { $gt: 25 } });

// ดึงข้อมูลแค่ 1 รายการ
db.users.findOne({ name: "สมชาย รักดี" });</code></pre>

<h3>3. Update (การแก้ไขข้อมูล)</h3>
<pre><code>// อัปเดตข้อมูล 1 Document
db.users.updateOne(
  { name: "สมชาย รักดี" }, // Filter
  { $set: { age: 29 }, $push: { skills: "Redis" } } // Update operator
);

// อัปเดตหลาย Document (เปลี่ยน status เป็น active ทุกคนที่อายุ < 30)
db.users.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: "active" } }
);</code></pre>

<h3>4. Delete (การลบข้อมูล)</h3>
<pre><code>// ลบ 1 Document
db.users.deleteOne({ name: "มานะ" });

// ลบหลาย Document
db.users.deleteMany({ status: "inactive" });</code></pre>

<h2>การตั้งค่า MongoDB Atlas (Cloud Database)</h2>
<p>ในปัจจุบัน การตั้ง Server MongoDB เองอาจสร้างภาระเรื่อง Maintenance, Security, และ Backup ดังนั้น <strong>MongoDB Atlas</strong> ซึ่งเป็น Database-as-a-Service (DBaaS) แบบ Fully Managed จึงเป็นทางเลือกที่ดีที่สุด</p>
<ol style="padding-left:20px">
  <li>สมัครสมาชิกที่ mongodb.com/cloud/atlas</li>
  <li>สร้าง Cluster ใหม่ (มี Free Tier M0 ให้ใช้งานสำหรับ Development)</li>
  <li>ตั้งค่า Database Access (สร้าง Username/Password)</li>
  <li>ตั้งค่า Network Access (อนุญาต IP Address ให้สามารถเชื่อมต่อได้ แนะนำให้ใช้ 0.0.0.0/0 สำหรับ Dev แต่ห้ามใช้ใน Production)</li>
  <li>รับ Connection String (URI) เพื่อนำไปใช้งานในแอปพลิเคชัน Node.js ต่อไป</li>
</ol>
`
  },
  {
    number: 2,
    slug: 'mongodb-queries',
    emoji: '🔍',
    title: 'MongoDB Queries ครบจบในที่เดียว: Filter, Projection และ Pagination',
    content: `<h2>การ Query ข้อมูลระดับเจาะลึกด้วย find()</h2>
<p>คำสั่งพื้นฐานที่สุดในการดึงข้อมูลจาก MongoDB คือ <code>db.collection.find(query, projection)</code> แต่พลังที่แท้จริงของมันซ่อนอยู่ใน <strong>Query Operators</strong> ที่หลากหลาย ทำให้เราสามารถค้นหาข้อมูลที่มีเงื่อนไขซับซ้อนได้อย่างมีประสิทธิภาพ</p>

<h3>Comparison Operators (ตัวดำเนินการเปรียบเทียบ)</h3>
<p>MongoDB มี Operators สำหรับการเปรียบเทียบค่าที่ใช้บ่อยดังนี้:</p>
<ul>
  <li><code>$eq</code> (Equal): เท่ากับ</li>
  <li><code>$ne</code> (Not Equal): ไม่เท่ากับ</li>
  <li><code>$gt</code> (Greater Than): มากกว่า</li>
  <li><code>$gte</code> (Greater Than or Equal): มากกว่าหรือเท่ากับ</li>
  <li><code>$lt</code> (Less Than): น้อยกว่า</li>
  <li><code>$lte</code> (Less Than or Equal): น้อยกว่าหรือเท่ากับ</li>
  <li><code>$in</code> (In): มีค่าตรงกับสมาชิกใดสมาชิกหนึ่งใน Array ที่กำหนด</li>
  <li><code>$nin</code> (Not In): ไม่มีค่าตรงกับสมาชิกใดๆ ใน Array ที่กำหนด</li>
</ul>

<pre><code>// ค้นหาสินค้าที่ราคามากกว่า 500 แต่ไม่เกิน 2000
db.products.find({ price: { $gt: 500, $lte: 2000 } });

// ค้นหาสินค้าที่อยู่ในหมวดหมู่ "Electronics" หรือ "Books"
db.products.find({ category: { $in: ["Electronics", "Books"] } });</code></pre>

<h3>Logical Operators (ตัวดำเนินการทางตรรกศาสตร์)</h3>
<p>เมื่อต้องการรวมหลายเงื่อนไขเข้าด้วยกัน:</p>
<ul>
  <li><code>$and</code>: ข้อมูลต้องตรงกับ<strong>ทุก</strong>เงื่อนไข (ปกติ MongoDB จะใช้ $and ให้โดยปริยายหากเราระบุหลายฟิลด์)</li>
  <li><code>$or</code>: ข้อมูลตรงกับ<strong>อย่างน้อยหนึ่ง</strong>เงื่อนไข</li>
  <li><code>$not</code>: ปฏิเสธเงื่อนไข (ใช้กับ Operator อื่น)</li>
  <li><code>$nor</code>: ข้อมูลต้อง<strong>ไม่ตรง</strong>กับทุกเงื่อนไข</li>
</ul>

<pre><code>// ค้นหาสินค้าที่หมวดหมู่เป็น Electronics หรือ แบรนด์เป็น Apple และมีสต็อกมากกว่า 0
db.products.find({
  $and: [
    { stock: { $gt: 0 } },
    { $or: [ { category: "Electronics" }, { brand: "Apple" } ] }
  ]
});</code></pre>

<h3>Evaluation Operators (ตัวดำเนินการประเมินผล)</h3>
<p>หนึ่งใน Operator ที่ทรงพลังคือ <code>$regex</code> ใช้สำหรับค้นหาข้อความด้วย Regular Expression</p>
<pre><code>// ค้นหาผู้ใช้ที่มีชื่อเริ่มต้นด้วยคำว่า "สม" (Case-insensitive)
db.users.find({ name: { $regex: /^สม/i } });</code></pre>
<div class='tip-box'><strong>💡 Pro Tip: Performance ของ $regex</strong><br/>
การใช้ <code>$regex</code> โดยไม่มีเครื่องหมาย <code>^</code> (เริ่มต้นคำ) จะทำให้ไม่สามารถใช้ Index ได้ (Full Collection Scan) ซึ่งจะช้ามากเมื่อข้อมูลเยอะ หากต้องการค้นหาข้อความแบบ Full-text แนะนำให้สร้าง <strong>Text Index</strong> และใช้ <code>$text</code> Operator จะเร็วกว่ามาก</div>

<h2>Projection (การเลือกเฉพาะ Field ที่ต้องการ)</h2>
<p>ในหลายครั้ง Document มีขนาดใหญ่และมี Field จำนวนมาก การดึงข้อมูลทั้งหมดมาทั้งที่ไม่ได้ใช้ จะเปลือง Bandwidth และ Memory อย่างหนัก <strong>Projection</strong> คือการระบุว่าเราต้องการ (1) หรือไม่ต้องการ (0) Field ไหนกลับมาบ้าง</p>
<pre><code>// ดึงเฉพาะชื่อและอีเมล (รหัสผ่านไม่เอา) และปิดการแสดง _id
db.users.find(
  { status: "active" }, // Query Filter
  { name: 1, email: 1, _id: 0 } // Projection
);</code></pre>

<h2>Sorting, Pagination: Sort, Limit, Skip</h2>
<p>การแสดงผลข้อมูลใน Web Application มักจะต้องทำ Pagination (การแบ่งหน้า) เพื่อไม่ให้โหลดข้อมูลมามากเกินไปในครั้งเดียว เราสามารถใช้ Cursor Methods ร่วมกันได้:</p>
<ol style="padding-left:20px">
  <li><code>sort()</code>: จัดเรียงข้อมูล (1 = น้อยไปมาก/ASC, -1 = มากไปน้อย/DESC)</li>
  <li><code>skip()</code>: ข้ามข้อมูลจำนวน N รายการ</li>
  <li><code>limit()</code>: จำกัดจำนวนข้อมูลที่จะดึงมาเพียง N รายการ</li>
</ol>

<pre><code>// หน้าที่ 2: สมมติว่าหน้าละ 10 รายการ 
// ข้าม 10 รายการแรก และดึงรายการที่ 11-20 โดยเรียงตามวันที่สร้างจากใหม่ไปเก่า
const page = 2;
const limit = 10;
const skip = (page - 1) * limit;

db.posts.find({ status: "published" })
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(limit);</code></pre>

<div class='tip-box'><strong>💡 Pro Tip: ลำดับการทำงาน (Order of Execution)</strong><br/>
ไม่ว่าคุณจะเขียนโค้ดสลับลำดับอย่างไร เช่น <code>.limit().skip().sort()</code> สุดท้ายแล้ว MongoDB จะทำงานตามลำดับนี้เสมอ: <strong>1. Sort -> 2. Skip -> 3. Limit</strong> แต่เพื่อไม่ให้คนในทีมสับสน ควรเขียนเรียงตามลำดับการทำงานจริงเสมอ</div>

<h3>ข้อควรระวังเรื่อง Pagination ด้วย Skip</h3>
<p>การทำ Pagination ด้วย <code>skip()</code> นั้นทำงานได้ดีในช่วงแรก แต่เมื่อข้อมูลเยอะขึ้นระดับแสนหรือล้าน การข้ามข้อมูล (เช่น <code>skip(500000)</code>) จะทำให้ Database ต้องประมวลผลการนับข้อมูลไปเรื่อยๆ จนถึง 500,000 ซึ่ง<strong>ช้ามาก</strong> สำหรับข้อมูลขนาดใหญ่ แนะนำให้ใช้เทคนิค <strong>Keyset Pagination (หรือ Cursor-based Pagination)</strong> คือการจดจำค่า <code>_id</code> ตัวสุดท้ายของหน้าปัจจุบัน และหน้าถัดไปให้ query โดยใช้เงื่อนไข <code>{ _id: { $gt: lastId } }</code> แทนการ skip</p>`
  }
];
