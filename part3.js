module.exports = [
  {
    number: 6,
    slug: 'redis',
    emoji: '🔴',
    title: 'พื้นฐาน Redis และ Data Structures (In-Memory Database)',
    content: `<h2>Redis ไม่ใช่แค่ Key-Value Store ธรรมดา</h2>
<p>Redis (Remote Dictionary Server) เป็น Open-source In-Memory Data Structure Store ซึ่งหมายความว่ามันเก็บข้อมูลทั้งหมดไว้ใน RAM (เพื่อความเร็วสูงสุด) และต่างจาก Memcached ตรงที่ Redis รองรับ <strong>โครงสร้างข้อมูล (Data Structures)</strong> ที่หลากหลายและซับซ้อน ทำให้สามารถประยุกต์ใช้งานได้มากกว่าแค่ระบบ Cache ธรรมดา</p>

<h2>การทำงานกับ Redis CLI และ Data Structures หลัก</h2>
<p>การสื่อสารกับ Redis มักจะทำผ่านคำสั่งแบบบรรทัดเดียว (Command-line) คุณสามารถใช้เครื่องมือ <code>redis-cli</code> ในการทดสอบคำสั่งต่างๆ ได้ทันที</p>

<h3>1. String</h3>
<p>เป็นประเภทข้อมูลพื้นฐานที่สุด แม้จะเรียกว่า String แต่ก็สามารถเก็บตัวเลข หรือข้อมูล Binary (เช่น ภาพขนาดเล็กสูงสุด 512MB) ได้ นิยมใช้สำหรับทำ Caching ทั่วไป หรือทำระบบ Counter</p>
<pre><code>> SET mykey "Hello World"
OK
> GET mykey
"Hello World"

// ทำระบบนับยอดวิว (Atomic operation - ไม่พังแม้มีหลาย Request ยิงมาพร้อมกัน)
> INCR page_views
(integer) 1
> INCR page_views
(integer) 2</code></pre>

<h3>2. Hash</h3>
<p>เก็บข้อมูลในลักษณะคล้ายกับ Object ใน JavaScript หรือ Dictionary ใน Python (คือมี Field ย่อยๆ ภายใน Key เดียว) เหมาะอย่างยิ่งสำหรับการเก็บข้อมูล User Profile หรือ Session</p>
<pre><code>> HSET user:1001 name "สมชาย" age "30" role "admin"
(integer) 3
> HGET user:1001 name
"สมชาย"
> HGETALL user:1001
1) "name"
2) "สมชาย"
3) "age"
4) "30"
5) "role"
6) "admin"</code></pre>

<h3>3. List</h3>
<p>เก็บ Array ของ String โดยเรียงลำดับตามการเพิ่มข้อมูล (เป็น Linked List) เหมาะสำหรับการทำ Message Queue เบื้องต้น, ระบบ Timeline, หรือการเก็บ Recent items (ของที่ถูกใช้งานล่าสุด)</p>
<pre><code>// เติมข้อมูลลงด้านซ้าย (หัวแถว)
> LPUSH mylist "apple"
> LPUSH mylist "banana"

// เติมข้อมูลลงด้านขวา (ท้ายแถว)
> RPUSH mylist "cherry"

// ดึงข้อมูลตั้งแต่ตัวแรก (0) ถึงตัวสุดท้าย (-1)
> LRANGE mylist 0 -1
1) "banana"
2) "apple"
3) "cherry"</code></pre>

<h3>4. Set</h3>
<p>คล้ายกับ List แต่ <strong>ข้อมูลภายในห้ามซ้ำกัน (Unique)</strong> และไม่มีการเรียงลำดับ เหมาะสำหรับการหาความสัมพันธ์ระหว่างผู้ใช้ (เช่น ระบบ Follower), การจัดเก็บ Tag ของบทความ</p>
<pre><code>> SADD user:A:tags "nodejs" "mongodb" "redis"
> SADD user:B:tags "react" "nodejs"

// หาจุดร่วม (Intersection) ว่า 2 คนนี้มี Tag อะไรเหมือนกันบ้าง
> SINTER user:A:tags user:B:tags
1) "nodejs"</code></pre>

<h3>5. Sorted Set (ZSet)</h3>
<p>เหมือน Set แต่ข้อมูลแต่ละตัวจะมีคะแนน (Score) แปะติดมาด้วย ทำให้ข้อมูลถูก <strong>จัดเรียงอัตโนมัติ</strong> ตามคะแนนนี้ เหมาะสำหรับการทำ Leaderboard หรือ Ranking system</p>
<pre><code>> ZADD leaderboard 1500 "Player_A"
> ZADD leaderboard 2000 "Player_B"
> ZADD leaderboard 1200 "Player_C"

// ดึง 3 อันดับแรก (เรียงจากคะแนนมากไปน้อยแบบย้อนกลับ)
> ZREVRANGE leaderboard 0 2 WITHSCORES
1) "Player_B"
2) "2000"
3) "Player_A"
4) "1500"
5) "Player_C"
6) "1200"</code></pre>

<h3>6. Stream</h3>
<p>Data Structure แบบ Log-based (เพิ่มข้อมูลต่อท้ายไปเรื่อยๆ) ที่ถูกออกแบบมาเพื่อทำ Message Broker โดยเฉพาะ (นำมาสู้กับ Kafka) นิยมใช้ทำระบบ Event Sourcing หรือ Log Collection (ซึ่งเราจะเจาะลึกในบทที่ 8)</p>

<div class='tip-box'><strong>💡 Pro Tip: Naming Convention ใน Redis</strong><br/>
เนื่องจาก Redis ไม่มีระบบตาราง (Tables) หรือ Collections การตั้งชื่อ Key จึงสำคัญมาก รูปแบบที่นิยมคือการใช้ <code>:</code> (Colon) คั่นระหว่าง Namespace เช่น <code>entity:id:attribute</code> -> <code>user:1001:profile</code> หรือ <code>product:th:8402:stock</code> สิ่งนี้ช่วยให้คุณแบ่งหมวดหมู่ข้อมูลในใจและป้องกัน Key ทับกันได้</div>`
  },
  {
    number: 7,
    slug: 'caching',
    emoji: '💨',
    title: 'รูปแบบ Caching Patterns ด้วย Redis สำหรับระบบ Production',
    content: `<h2>ทำไมต้องมี Pattern ในการทำ Cache?</h2>
<p>การเอาข้อมูลยัดลง Redis นั้นง่าย แต่ความท้าทายที่แท้จริงของการทำ Caching คือคำถามที่ว่า: <em>"เราจะรู้ได้อย่างไรว่าข้อมูลใน Cache กับใน Database หลักยังตรงกันอยู่?"</em> (ปัญหาเรื่อง Data Consistency) การเลือกใช้ <strong>Caching Pattern</strong> ที่เหมาะสมจะช่วยแก้ปัญหานี้ได้</p>

<h3>1. Cache-Aside Pattern (Lazy Loading)</h3>
<p>เป็นรูปแบบที่นิยมมากที่สุดในโลกของการทำเว็บ (รวมถึง Facebook ก็ใช้คอนเซ็ปต์นี้ช่วงเริ่มแรกกับ Memcached) หลักการคือ แอปพลิเคชัน (Application) จะเป็นตัวกลางคุยกับทั้ง Cache และ Database</p>
<p><strong>ขั้นตอนการอ่าน (Read):</strong></p>
<ol style="padding-left:20px">
  <li>แอปพลิเคชันค้นหาข้อมูลจาก Redis ก่อน</li>
  <li>ถ้าเจอ (Cache Hit) -> ส่งข้อมูลกลับให้ User ทันที (เร็วมาก)</li>
  <li>ถ้าไม่เจอ (Cache Miss) -> แอปพลิเคชันจะไปดึงข้อมูลจาก MongoDB</li>
  <li>นำข้อมูลที่ได้มาเขียนลงใน Redis (พร้อมตั้งเวลาหมดอายุ - TTL)</li>
  <li>ส่งข้อมูลกลับให้ User</li>
</ol>

<p><strong>ข้อดี:</strong> Redis จะเก็บเฉพาะข้อมูลที่ถูกเรียกใช้งานจริงๆ ประหยัด RAM<br/>
<strong>ข้อเสีย:</strong> คนแรกที่เข้ามาขอข้อมูลในขณะที่ไม่มี Cache (Cache Miss) จะเจอ Latency ที่สูงกว่าปกติ เพราะต้องรอคิวรี Database</p>

<h3>2. Write-Through Pattern</h3>
<p>ในรูปแบบนี้ แอปพลิเคชันจะมอง Cache เป็นเสมือน Main Database เลย ทุกครั้งที่มีการเขียนข้อมูล จะเขียนลง Cache และ Database ไปพร้อมๆ กัน</p>
<p><strong>ขั้นตอนการเขียน (Write):</strong></p>
<ol style="padding-left:20px">
  <li>แอปพลิเคชันสั่งบันทึกข้อมูล (เช่น User สมัครสมาชิกใหม่)</li>
  <li>ข้อมูลถูกเขียนลง MongoDB และถูกเขียนลง Redis พร้อมๆ กัน (หรือใน Transaction เดียวกัน)</li>
</ol>

<p><strong>ข้อดี:</strong> ข้อมูลใน Cache จะตรงกับ Database เสมอ (100% Consistency) และการอ่านจะเร็วมากๆ ไม่เคยเจอ Cache Miss<br/>
<strong>ข้อเสีย:</strong> เปลือง RAM มหาศาล เพราะข้อมูลบางอย่างถูกเขียนแต่แทบจะไม่เคยถูกอ่านเลย (เช่น Log หรือ Audit data)</p>

<h2>การจัดการอายุของ Cache (TTL และ Eviction)</h2>
<p>RAM มีราคาแพงกว่า Disk (SSD) มาก เราไม่สามารถเก็บทุกอย่างใน Redis ตลอดไปได้</p>

<h3>TTL (Time-To-Live)</h3>
<p>คือการกำหนด "อายุขัย" ของ Key เมื่อหมดเวลา Key นั้นจะถูกลบออกจาก Redis อัตโนมัติ</p>
<pre><code>// บันทึกข้อมูลและตั้งค่าให้อยู่รอด 60 วินาที
> SETEX product:502 60 "{ 'name': 'MacBook', 'price': 45000 }"</code></pre>
<div class='tip-box'><strong>💡 Pro Tip: Cache Stampede (Thundering Herd Problem)</strong><br/>
หากตั้ง TTL ของข้อมูลที่คนเข้าดูเยอะๆ ให้หมดอายุพร้อมกัน (เช่น หน้าแรกช้อปปี้) เมื่อหมดเวลาปุ๊บ Request จำนวนมหาศาลจะวิ่งทะลุเข้า Database พร้อมกัน (Cache Miss หมู่) จน Database รับไม่ไหวและล่ม วิธีแก้คือการบวกค่า Random เล็กน้อยลงใน TTL (เช่น 60 นาที + random(1 ถึง 5) นาที) เพื่อให้ Cache ค่อยๆ ทยอยหมดอายุ ไม่พร้อมกันทีเดียว เรียกว่าเทคนิค <strong>Jitter</strong></div>

<h3>Eviction Policies (นโยบายเมื่อ RAM เต็ม)</h3>
<p>เมื่อหน่วยความจำใกล้เต็ม Redis จะต้องเลือกลบ Key เก่าทิ้ง คุณสามารถตั้งค่า Policy ได้ (ใน <code>redis.conf</code>) เช่น:</p>
<ul>
  <li><strong>noeviction:</strong> ไม่ลบอะไรเลย (ถ้าเขียนข้อมูลใหม่ จะคืนค่า Error ทันที - เหมาะสำหรับงานที่ไม่ใช่แค่ Cache เช่น งาน Queue)</li>
  <li><strong>allkeys-lru (Least Recently Used):</strong> ลบ Key ที่<strong>ไม่ถูกเรียกใช้งานมานานที่สุด</strong>ทิ้งไป (ได้รับความนิยมสูงสุดสำหรับการทำ Caching ทั่วไป)</li>
  <li><strong>allkeys-lfu (Least Frequently Used):</strong> ลบ Key ที่<strong>ถูกเรียกใช้น้อยครั้งที่สุด</strong>ทิ้งไป</li>
</ul>

<h2>Session Storage แบบ Distributed</h2>
<p>ในยุค Microservices ที่เรามี Node.js รันหลายเครื่องพร้อมกันผ่าน Load Balancer การเก็บ Session ไว้ที่ Memory ของตัวโปรแกรม (Local Memory) จะมีปัญหาทันที เพราะถ้า User Login ที่เซิร์ฟเวอร์ A แต่ Request ถัดไปถูกส่งไปเซิร์ฟเวอร์ B ยูสเซอร์ก็จะหลุดจากระบบ (Logged out)</p>
<p><strong>ทางแก้:</strong> ใช้ Redis เป็นส่วนกลางในการเก็บ Session (Centralized Session Storage) เพราะเร็วพอที่จะเช็ค Session ในทุกๆ Request ได้โดยไม่หน่วงระบบ</p>`
  },
  {
    number: 8,
    slug: 'pubsub',
    emoji: '📡',
    title: 'ระบบ Messaging ด้วย Redis Pub/Sub และ Streams',
    content: `<h2>การสื่อสารแบบ Real-time ข้ามเซิร์ฟเวอร์</h2>
<p>นอกจากการเป็นฐานข้อมูลและระบบ Cache แล้ว Redis ยังมีความสามารถในการทำหน้าที่เป็น <strong>Message Broker</strong> หรือไปรษณีย์กลางที่คอยรับส่งข้อความระหว่างแอปพลิเคชัน (Microservices) หรือระหว่างฝั่ง Server กับฝั่ง Client (ผ่าน WebSockets)</p>

<h2>Redis Pub/Sub (Publish/Subscribe)</h2>
<p>Pub/Sub เป็นรูปแบบการส่งข้อความแบบ <strong>Fire-and-Forget</strong> (ยิงแล้วลืม) หลักการคือ ผู้ส่ง (Publisher) ส่งข้อความไปยังช่องทาง (Channel) และผู้รับ (Subscriber) ที่มารอรับฟังช่องทางนั้นอยู่ จะได้รับข้อความทันทีพร้อมกันทุกคน</p>

<h3>ลักษณะเด่นของ Pub/Sub</h3>
<ul>
  <li><strong>ไม่มีการเก็บประวัติ (No Persistence):</strong> หาก Subscriber ไม่ได้เชื่อมต่ออยู่ในขณะที่ Publisher ส่งข้อความ ข้อความนั้นจะสูญหายไปทันที (ไม่มีการเก็บไว้ให้รออ่านย้อนหลัง)</li>
  <li><strong>ความเร็วสูงสุด (Ultra-Low Latency):</strong> เนื่องจากไม่เก็บประวัติลง Disk ข้อมูลจึงวิ่งผ่าน Network สู่ผู้รับทันที เหมาะกับงานที่ต้องการความเร็วระดับเสี้ยววินาที</li>
  <li><strong>One-to-Many:</strong> ผู้ส่ง 1 คน ส่งให้ผู้รับ 10,000 คนพร้อมกันได้สบายๆ</li>
</ul>

<h3>ตัวอย่างการใช้งานใน Redis CLI</h3>
<pre><code>// ฝั่ง Subscriber (เปิด terminal หน้าต่างแรก)
> SUBSCRIBE news:tech
Reading messages... (waiting)

// ฝั่ง Publisher (เปิด terminal อีกหน้าต่าง)
> PUBLISH news:tech "Apple ประกาศเปิดตัวชิป M4 ใหม่ล่าสุด!"
(integer) 1 // ส่งสำเร็จ 1 คน

// กลับไปดูฝั่ง Subscriber จะเห็นข้อความเด้งขึ้นมาทันที
1) "message"
2) "news:tech"
3) "Apple ประกาศเปิดตัวชิป M4 ใหม่ล่าสุด!"</code></pre>

<p><strong>Use Cases:</strong> ห้องแชทส่วนตัว, การบรอดแคสต์สถานะการแข่งขันฟุตบอลสด (Live Scores), การสั่งเคลียร์ Cache พร้อมกันหลายเครื่อง (Cache Invalidation Broadcasting)</p>

<h2>Redis Streams (การเก็บประวัติแบบ Log)</h2>
<p>เนื่องจากจุดอ่อนของ Pub/Sub คือข้อมูลที่หายไปเมื่อไม่ได้ออนไลน์ Redis 5.0 จึงเปิดตัวฟีเจอร์ <strong>Streams</strong> ซึ่งถูกออกแบบมาให้เป็น Append-only Log ทำงานคล้ายคลึงกับ <strong>Apache Kafka</strong> มากๆ</p>

<h3>ลักษณะเด่นของ Streams</h3>
<ul>
  <li><strong>Persistence:</strong> ข้อความที่ส่งเข้ามาจะถูกบันทึกเรียงต่อกันเป็น Log (อยู่ในหน่วยความจำ และสามารถเซฟลง Disk ได้) หากแอปพลิเคชันล่ม พอบูทกลับมาก็สามารถอ่านข้อความย้อนหลัง (Playback) ที่ค้างอยู่ได้</li>
  <li><strong>Consumer Groups:</strong> สามารถแบ่งกลุ่มคนงาน (Workers) มาช่วยกันอ่านข้อความจาก Stream เดียวกันได้ (Load Balancing) โดย Redis จะจำไว้ให้ว่ากลุ่มนี้อ่านถึงข้อความไหนแล้ว และรับประกันว่าข้อความนึงจะถูกประมวลผลโดยคนงานเพียงคนเดียวเท่านั้น (ป้องกันการประมวลผลซ้ำซ้อน)</li>
</ul>

<h3>ตัวอย่างการใช้งานแบบเบสิค</h3>
<pre><code>// XADD - เพิ่ม Event ลงใน stream ชื่อ "sensor_data" 
// (สัญลักษณ์ * แปลว่าให้ Redis สร้าง ID ให้เองอัตโนมัติตามเวลา)
> XADD sensor_data * temp 25 humidity 60
"1680001234567-0" (Stream ID ที่ได้กลับมา)

// XRANGE - ดูประวัติทั้งหมดใน Stream
> XRANGE sensor_data - +
1) 1) "1680001234567-0"
   2) 1) "temp"
      2) "25"
      3) "humidity"
      4) "60"</code></pre>

<div class='tip-box'><strong>💡 Pro Tip: Redis Streams vs Kafka เลือกอะไรดี?</strong><br/>
ถ้าโจทย์ของคุณคือการทำ Big Data หรือ Data Pipeline ที่มีข้อมูลไหลเข้ามาหลัก "หลายแสนข้อความต่อวินาที" และต้องการเก็บประวัติย้อนหลังเป็นเดือนๆ <strong>Kafka</strong> (ซึ่งเก็บข้อมูลลง Disk แบบ Sequential) ย่อมรับมือได้ดีกว่า<br/>
แต่ถ้าระบบของคุณเป็นระดับกลางๆ ต้องการความรวดเร็ว จัดการง่าย (ไม่ต้องตั้ง Zookeeper/KRaft) และคุณใช้ Redis อยู่แล้ว การใช้ <strong>Redis Streams</strong> จะประหยัดงบประมาณ เวลา และ Resource ได้อย่างมหาศาล</div>`
  }
];
