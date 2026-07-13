module.exports = [
  {
    number: 3,
    slug: 'aggregation',
    emoji: '📊',
    title: 'ระบบ MongoDB Aggregation Pipeline สำหรับการวิเคราะห์ข้อมูลขั้นสูง',
    content: `<h2>ทำความรู้จักกับ Aggregation Pipeline</h2>
<p>ในขณะที่ <code>find()</code> มีประโยชน์มากสำหรับการค้นหาและกรองข้อมูลเบื้องต้น แต่ถ้าคุณต้องการ <strong>วิเคราะห์ข้อมูล</strong> (Data Analysis), คำนวณผลรวม (Sum, Average), หรือแปลงโครงสร้างข้อมูล (Transform) คุณต้องพึ่งพา <strong>Aggregation Pipeline</strong></p>
<p>แนวคิดของ Pipeline นั้นคล้ายกับท่อประกอบรถยนต์ในโรงงาน (Assembly Line) โดยที่ข้อมูล Document จะไหลเข้าไปในท่อ (Pipeline) และจะถูกประมวลผลทีละขั้นตอนผ่าน <strong>Stages</strong> ต่างๆ ผลลัพธ์จาก Stage แรกจะถูกส่งต่อไปเป็น Input ของ Stage ถัดไปเรื่อยๆ จนสิ้นสุด Pipeline</p>

<h3>Stages ที่สำคัญใน Aggregation Pipeline</h3>
<p>MongoDB มี Stages ให้เลือกใช้มากมาย แต่ตัวที่ถูกใช้งานบ่อยที่สุดในเกือบทุกแอปพลิเคชันมีดังนี้:</p>

<ol style="padding-left:20px">
  <li><strong>$match:</strong> กรองข้อมูล (คล้ายกับเงื่อนไขใน find) ควรใช้เป็น Stage แรกเสมอเพื่อลดจำนวน Document ที่จะต้องส่งไปประมวลผลต่อ (และเพื่อให้สามารถใช้ประโยชน์จาก Index ได้)</li>
  <li><strong>$group:</strong> จัดกลุ่มข้อมูลและทำการคำนวณต่างๆ (Aggregations) เช่น นับจำนวน, หาผลรวม, ค่าเฉลี่ย</li>
  <li><strong>$sort:</strong> จัดเรียงข้อมูล</li>
  <li><strong>$project:</strong> เลือก Field ที่ต้องการส่งออก หรือสร้าง Field ใหม่จากการคำนวณ</li>
  <li><strong>$lookup:</strong> เป็นสิ่งที่ใกล้เคียงกับการทำ JOIN ใน SQL โดยจะดึงข้อมูลจาก Collection อื่นมาประกอบรวมด้วย</li>
  <li><strong>$unwind:</strong> แตก Array ออกเป็น Document ย่อยๆ (Deconstruct)</li>
</ol>

<h2>ตัวอย่างการใช้งานแบบ Real-world Scenarios</h2>

<h3>1. การสรุปยอดขาย (Sales Summary)</h3>
<p>สมมติว่าเรามี Collection <code>orders</code> และเราต้องการหายอดขายรวมของแต่ละสินค้า เฉพาะสินค้าที่สถานะการสั่งซื้อเสร็จสมบูรณ์ และเรียงลำดับสินค้าที่ขายดีที่สุด</p>
<pre><code>db.orders.aggregate([
  // 1. กรองเฉพาะออเดอร์ที่สถานะเสร็จสมบูรณ์
  { $match: { status: "completed" } },
  
  // 2. จัดกลุ่มตาม productId และคำนวณยอดขายรวม
  { $group: {
      _id: "$productId", // สิ่งที่ใช้เป็นเงื่อนไขในการจัดกลุ่ม
      totalSold: { $sum: "$quantity" }, // บวกจำนวนที่ขายได้
      totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } } // (จำนวน * ราคา)
  }},
  
  // 3. เรียงลำดับจากยอดขายรวมมากไปน้อย
  { $sort: { totalRevenue: -1 } }
]);</code></pre>

<h3>2. การทำ JOIN ด้วย $lookup และ $unwind</h3>
<p>ข้อจำกัดหนึ่งของ Document Database คือบางครั้งเราอาจต้องเก็บข้อมูลแยก Collection เพื่อป้องกันความซ้ำซ้อน สมมติว่าจากตัวอย่างแรก ผลลัพธ์ได้ <code>_id</code> ของสินค้ามาเป็น String ซึ่งไม่สื่อความหมาย เราต้องการดึง <strong>ชื่อสินค้า</strong> จาก Collection <code>products</code> มาด้วย</p>
<pre><code>db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
      _id: "$productId",
      totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
  }},
  // ใช้ $lookup เพื่อ JOIN กับ Collection products
  { $lookup: {
      from: "products", // Collection ปลายทางที่จะ Join
      localField: "_id", // Field ในผลลัพธ์ปัจจุบัน
      foreignField: "_id", // Field ใน Collection ปลายทาง
      as: "productDetail" // ชื่อ Field ใหม่ที่จะรับข้อมูลกลับมา (จะได้มาเป็น Array เสมอ)
  }},
  // ใช้ $unwind เพื่อแตก Array 'productDetail' ออกมาเป็น Object ปกติ
  { $unwind: "$productDetail" },
  // จัดหน้าตาผลลัพธ์ใหม่ด้วย $project
  { $project: {
      _id: 0,
      productId: "$_id",
      productName: "$productDetail.name",
      category: "$productDetail.category",
      revenue: "$totalRevenue"
  }},
  { $sort: { revenue: -1 } }
]);</code></pre>

<div class='tip-box'><strong>💡 Pro Tip: Performance ของ $lookup</strong><br/>
แม้ว่า MongoDB จะรองรับ <code>$lookup</code> (การ JOIN) แต่การทำงานของมันกินทรัพยากร (Memory & CPU) สูงมากเมื่อเทียบกับการ JOIN ใน SQL แบบ Native หากในแอปพลิเคชันของคุณมีการทำ $lookup บ่อยๆ นี่เป็นสัญญาณบ่งบอกว่าคุณอาจ <strong>ออกแบบ Schema ผิดพลาด</strong> แนะนำให้ใช้หลักการ <strong>Denormalization</strong> (หรือการ Embed Data ฝังข้อมูลชื่อสินค้าลงไปใน order เลยตั้งแต่แรก) จะเหมาะสมกับบริบทของ NoSQL มากกว่า</div>

<h2>ตัวแปรและ Expression ภายใน Pipeline</h2>
<p>สังเกตว่าในตัวอย่างเราใช้ตัวแปรที่นำหน้าด้วย <code>$</code> เสมอเมื่ออ้างอิงถึง Field (เช่น <code>"$quantity"</code>) นี่คือ Syntax สำหรับบอก MongoDB ให้ดึง <strong>ค่า (Value)</strong> ของฟิลด์นั้นมาใช้คำนวณ แทนที่จะตีความเป็นแค่ String ธรรมดา นอกจากนี้ยังมี Expression อย่าง <code>$year</code>, <code>$month</code> ที่ใช้ดึงค่าวันที่จาก Data Type แบบ Date มาจัดกลุ่มตามเดือน/ปีได้อย่างง่ายดายอีกด้วย</p>`
  },
  {
    number: 4,
    slug: 'mongoose',
    emoji: '🐍',
    title: 'การใช้งาน Mongoose ODM (Object Data Modeling) ใน Node.js',
    content: `<h2>Mongoose คืออะไร ทำไมต้องใช้?</h2>
<p>หากคุณเขียนแอปพลิเคชันด้วย Node.js (Express, NestJS) คุณสามารถใช้ MongoDB Native Driver เพื่อสั่งคำสั่ง CRUD ได้โดยตรง แต่ในโปรเจคขนาดกลางถึงขนาดใหญ่ การปล่อยให้ MongoDB ไม่มี Schema ตายตัวเลย (Schema-less) มักก่อให้เกิดบั๊กของข้อมูลขยะ, ฟิลด์ตกหล่น, หรืองาน validation ที่ซ้ำซ้อน</p>
<p><strong>Mongoose</strong> เป็นไลบรารีประเภท <strong>ODM (Object Data Modeling)</strong> ยอดฮิตที่ทำหน้าที่เป็นตัวกลางระหว่าง Node.js และ MongoDB โดยเพิ่มฟีเจอร์สำคัญอย่าง การกำหนด Schema, Data Validation แบบเข้มงวด, Middleware (Hooks), และการเชื่อมโยง Relation เข้ามาให้ใช้งาน</p>

<h2>การนิยาม Schema (Schema Definition) และ Data Types</h2>
<p>Schema ใน Mongoose คือพิมพ์เขียว (Blueprint) ที่กำหนดว่าแต่ละ Document ใน Collection จะต้องมี Field อะไรบ้าง และเป็น Type แบบใด</p>
<pre><code>const mongoose = require('mongoose');

// กำหนด Schema ให้กับ User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'กรุณาระบุ Username'],
    unique: true,
    trim: true,
    minlength: [4, 'Username ต้องมีอย่างน้อย 4 ตัวอักษร']
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'รูปแบบ Email ไม่ถูกต้อง'] // Regex Validation
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'], // จำกัดค่าที่ใส่ได้
    default: 'user'
  },
  age: {
    type: Number,
    min: [18, 'ต้องมีอายุ 18 ปีขึ้นไป']
  }
}, { 
  timestamps: true // สร้าง createdAt และ updatedAt ให้อัตโนมัติ
});

// สร้าง Model จาก Schema
const User = mongoose.model('User', userSchema);
module.exports = User;</code></pre>

<h2>Virtuals, Methods, และ Statics</h2>
<p>Mongoose เปิดโอกาสให้เราใส่ Logic ทางธุรกิจ (Business Logic) เข้าไปในระดับ Data Model ได้โดยตรง ทำให้โค้ดที่ Controller สะอาดขึ้น:</p>

<ol style="padding-left:20px">
  <li><strong>Virtuals:</strong> เป็น Field พิเศษที่จะไม่ถูกบันทึกลงใน MongoDB จริงๆ แต่เราสามารถเรียกดูได้ (คล้ายๆ Getter/Setter) มีประโยชน์มากในการคำนวณข้อมูล on-the-fly
<pre><code>userSchema.virtual('profileUrl').get(function() {
  return \`https://myapp.com/users/\${this.username}\`;
});</code></pre>
  </li>
  <li><strong>Instance Methods:</strong> สร้างฟังก์ชันเพื่อให้แต่ละ Document (Instance) เรียกใช้ได้โดยตรง
<pre><code>userSchema.methods.checkPassword = async function(candidatePassword) {
  // this อ้างอิงถึง document ปัจจุบัน
  return await bcrypt.compare(candidatePassword, this.password);
};
// ใช้งาน: const isMatch = await user.checkPassword('123456');</code></pre>
  </li>
  <li><strong>Static Methods:</strong> สร้างฟังก์ชันผูกไว้กับตัว Model ตรงๆ (มักใช้สำหรับการค้นหาแบบพิเศษ)
<pre><code>userSchema.statics.findByRole = function(role) {
  return this.find({ role: role });
};
// ใช้งาน: const admins = await User.findByRole('admin');</code></pre>
  </li>
</ol>

<h2>Middleware (Hooks): Pre และ Post</h2>
<p>Middleware หรือ Hooks คือฟังก์ชันที่ดักจับจังหวะก่อน (Pre) หรือ หลัง (Post) การทำงานของ Mongoose เช่น การ <code>save</code>, <code>update</code>, หรือ <code>remove</code></p>
<pre><code>// เข้ารหัสผ่านก่อนบันทึกลง Database (Pre-save hook)
userSchema.pre('save', async function(next) {
  // ตรวจสอบว่าฟิลด์ password ถูกปรับเปลี่ยนหรือไม่? ถ้าไม่ ก็ข้ามไป
  if (!this.isModified('password')) return next();
  
  // ทำการ Hash Password
  this.password = await bcrypt.hash(this.password, 12);
  next();
});</code></pre>

<h2>Population (การจำลองฟีเจอร์ JOIN)</h2>
<p>หากเราออกแบบ Schema แบบ Normalized (ใช้ Object ID โยงไปหากัน) เราสามารถใช้ <code>populate()</code> ของ Mongoose เพื่อดึงข้อมูลปลายทางมาแทนที่ Object ID ได้แบบแนบเนียน (เบื้องหลังคือ Mongoose จะไป Query เพิ่มให้อีกรอบโดยอัตโนมัติ)</p>
<pre><code>const postSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // อ้างอิง Model 'User'
});

// การใช้งาน
const post = await Post.findById(postId).populate('author', 'username email');
console.log(post.author.username); // ได้ชื่อจริงมาเลย ไม่ใช่แค่ ID</code></pre>

<div class='tip-box'><strong>💡 Pro Tip: ปัญหา N+1 ใน Populate</strong><br/>
แม้ว่า <code>populate()</code> จะสะดวกมาก แต่จงระวังเมื่อใช้ดึงข้อมูลทีละหลายๆ รายการแบบลึกหลายระดับชั้น (Deep population) เพราะเบื้องหลังมันสร้าง Query จำนวนมากยิงเข้าฐานข้อมูลจนระบบล่มได้ หากจำเป็นจริงๆ ควรใช้ <code>$lookup</code> ของ Aggregation Pipeline จะเร็วกว่าการให้ Mongoose มานั่ง map ข้อมูลใน Node.js</div>`
  },
  {
    number: 5,
    slug: 'mongodb-performance',
    emoji: '⚡',
    title: 'การจูนประสิทธิภาพ MongoDB (Performance, Indexing & Schema Design)',
    content: `<h2>ความสำคัญของ Indexing</h2>
<p>เมื่อฐานข้อมูล MongoDB ของคุณมีข้อมูลหลักล้าน Document การใช้ <code>find()</code> แบบปกติเพื่อค้นหาข้อมูลอาจใช้เวลาหลายวินาทีหรือเป็นนาที เพราะฐานข้อมูลต้องอ่านข้อมูลทีละตัวตั้งแต่ตัวแรกจนถึงตัวสุดท้าย (พฤติกรรมนี้เรียกว่า <strong>Collection Scan</strong> หรือ <strong>COLLSCAN</strong>) ซึ่งกิน CPU และ I/O อย่างรุนแรง</p>
<p>การสร้าง <strong>Index (ดัชนี)</strong> คือการสร้างโครงสร้างข้อมูลแบบ B-Tree พิเศษที่เก็บเพียงแค่ข้อมูลฟิลด์ที่คุณระบุ พร้อมกับพอยน์เตอร์ชี้ไปยัง Document จริง ช่วยลดเวลาการค้นหาลงเหลือระดับมิลลิวินาที (พฤติกรรมนี้เรียกว่า <strong>Index Scan</strong> หรือ <strong>IXSCAN</strong>)</p>

<h3>ประเภทของ Index ใน MongoDB</h3>
<ol style="padding-left:20px">
  <li><strong>Single Field Index:</strong> อินเด็กซ์บนฟิลด์เดียว
<pre><code>// สร้าง Index สำหรับฟิลด์ email (เลข 1 คือเรียงน้อยไปมาก, -1 เรียงมากไปน้อย)
db.users.createIndex({ email: 1 });</code></pre>
  </li>
  <li><strong>Compound Index:</strong> อินเด็กซ์ที่จับคู่หลายฟิลด์เข้าด้วยกัน มีประโยชน์มากเวลาที่คุณ Query มากกว่าหนึ่งเงื่อนไขบ่อยๆ
<pre><code>// ใช้กรณีหา user จาก role และ status พร้อมกัน
db.users.createIndex({ role: 1, status: 1 });</code></pre>
    <em>ข้อควรระวัง: Compound Index มีเรื่องของ "Prefix" ลำดับของ Field มีผล! หากคุณสร้าง <code>{ role: 1, status: 1 }</code> คุณสามารถ Query หา role เดี่ยวๆ ได้เร็ว แต่ถ้า Query หา status เดี่ยวๆ ตัว Index นี้จะไม่ถูกใช้งานเลย (Rule of thumb: สร้าง Index เรียงตามฟิลด์ที่มีการใช้งานบ่อยไปน้อย และ Equality, Sort, Range - กฎ ESR)</em>
  </li>
  <li><strong>Text Index:</strong> อินเด็กซ์สำหรับทำ Full-text search บนข้อความ (รองรับเรื่องการตัดคำ, หาส่วนประกอบของคำ)
<pre><code>db.articles.createIndex({ title: "text", content: "text" });
// การค้นหา
db.articles.find({ $text: { $search: "MongoDB Performance" } });</code></pre>
  </li>
  <li><strong>Geospatial Index:</strong> อินเด็กซ์พิเศษสำหรับการค้นหาเชิงพื้นที่ เช่น หาสถานที่ที่อยู่ใกล้ตัวคุณที่สุด หรือสถานที่ที่อยู่ในรัศมี 10 กิโลเมตร (ใช้ร่วมกับข้อมูลพิกัดแบบ GeoJSON)</li>
  <li><strong>TTL Index (Time-To-Live):</strong> อินเด็กซ์ที่สามารถ "ลบตัวเองอัตโนมัติ" ตามเวลาที่กำหนด เหมาะสำหรับข้อมูลชั่วคราว เช่น OTP, Session logs
<pre><code>// ข้อมูลจะถูกลบอัตโนมัติหลังสร้างมา 3600 วินาที (1 ชั่วโมง)
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });</code></pre>
  </li>
</ol>

<h2>การอ่าน Explain Plan</h2>
<p>การจะรู้ว่าคิวรีของเราทำงานช้าหรือเร็ว และใช้ Index หรือไม่นั้น ต้องใช้ฟังก์ชัน <code>explain()</code> ต่อท้ายคำสั่ง <code>find()</code> เสมอเพื่อดูแผนการทำงาน</p>
<pre><code>db.users.find({ status: "active", age: { $gt: 25 } }).explain("executionStats");</code></pre>
<p>สิ่งที่คุณควรมองหาในผลลัพธ์ของ explain():</p>
<ul>
  <li><code>winningPlan.stage</code>: ควรเป็น <strong>IXSCAN</strong> ไม่ใช่ <strong>COLLSCAN</strong></li>
  <li><code>totalDocsExamined</code>: จำนวน Document ที่ระบบต้องโหลดขึ้นมาตรวจสอบ ยิ่งน้อยยิ่งดี อุดมคติคือเท่ากับ <code>nReturned</code></li>
  <li><code>nReturned</code>: จำนวน Document ที่ตรงเงื่อนไขและถูกส่งคืนกลับไป</li>
  <li><code>executionTimeMillis</code>: เวลาที่ใช้ทั้งหมด (มิลลิวินาที)</li>
</ul>

<h2>Schema Design Patterns ใน NoSQL</h2>
<p>ใน SQL เรามีเรื่องของ Normalization (1NF, 2NF, 3NF) เพื่อลดความซ้ำซ้อน แต่ในโลกของ MongoDB เรามักยอมให้ข้อมูลซ้ำซ้อน (Denormalization) เพื่อแลกกับความเร็วในการอ่าน (Read Performance) นี่คือ 2 แนวทางหลักในการออกแบบความสัมพันธ์:</p>

<h3>1. Embedding (ฝังข้อมูล) - Denormalization</h3>
<p>เหมาะสำหรับ <strong>One-to-Few</strong> relationship และข้อมูลที่มักจะถูกเรียกใช้พร้อมกันเสมอ</p>
<pre><code>// ตัวอย่าง: User 1 คน มีที่อยู่หลายแห่ง
{
  _id: 1,
  name: "สมชาย",
  addresses: [
    { type: "home", street: "123 Main St", city: "BKK" },
    { type: "work", street: "456 Office Rd", city: "CNX" }
  ]
}</code></pre>
<p><em>ข้อดี: Query ครั้งเดียวได้ข้อมูลครบทั้งหมด เร็วมาก</em><br/>
<em>ข้อเสีย: Document มีขนาดจำกัด (MongoDB Limit ที่ 16MB) ถ้า Array บวมเรื่อยๆ (Unbounded array) ระบบจะพังได้</em></p>

<h3>2. Referencing (อ้างอิง) - Normalization</h3>
<p>เหมาะสำหรับ <strong>One-to-Many</strong> (ที่ฝั่ง Many มีจำนวนมาก), <strong>Many-to-Many</strong> หรือข้อมูลที่มีการแก้ไขบ่อยๆ</p>
<pre><code>// ตัวอย่าง: โพสต์ และ คอมเมนต์ที่มีเป็นพันๆ รายการ
// Post Collection
{ _id: 10, title: "เรียน MongoDB", body: "..." }

// Comment Collection
{ _id: 101, postId: 10, user: "A", text: "เยี่ยมมาก" }
{ _id: 102, postId: 10, user: "B", text: "ขอบคุณครับ" }</code></pre>
<p><em>ข้อดี: Document มีขนาดเล็ก ไม่อ้วน ลดปัญหา 16MB Limit, การแก้ไขทำได้ง่ายไม่ต้องตามแก้ทุกที่</em><br/>
<em>ข้อเสีย: ต้องใช้ Application Level Join ($lookup / Mongoose populate) หรือยิง Query 2 รอบ ซึ่งช้ากว่า</em></p>

<div class='tip-box'><strong>💡 Pro Tip: Extended Reference Pattern</strong><br/>
ในชีวิตจริง เรามักใช้แบบลูกผสม ตัวอย่างเช่น ออเดอร์ซื้อสินค้า แทนที่จะ Reference ไปที่ตาราง User เฉยๆ เราจะดึงข้อมูลที่สำคัญมาฝังไว้ด้วย (เช่น เอาชื่อ user กับที่อยู่ ณ ตอนซื้อ มาแปะฝังไว้ใน Order เลย) เพื่อให้ตอนดึงรายงาน Order ไม่ต้อง join กับ User (แถมถ้ายูสเซอร์เปลี่ยนชื่อทีหลัง ใบเสร็จในอดีตก็ยังใช้ชื่อเดิมได้ ซึ่งถูกต้องตามหลัก Business Logic)</div>`
  }
];
