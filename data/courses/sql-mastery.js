export const chapters = [
  {
    number: 0,
    slug: 'intro',
    emoji: '📊',
    title: 'SQL คืออะไร?',
    content: `
<h2>📊 SQL คืออะไร? — ทำไมยังเป็นทักษะ #1 ของสาย Data</h2>
<div style="text-align:center;margin:20px 0"><img src="/images/courses/sql-mastery-cover.png" alt="SQL Mastery — เก่ง SQL สุดทาง" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>

<p>สมมุติว่าน้องเปิดร้านขายของออนไลน์ มีออเดอร์วันละ 10,000 รายการ ข้อมูลลูกค้า สินค้า การชำระเงิน ทั้งหมดอยู่ในฐานข้อมูล ถ้าเจ้านายถามว่า <strong>"เดือนนี้ยอดขาย Top 5 จังหวัดคืออะไร?"</strong> — น้องจะตอบยังไง? เปิด Excel นับทีละแถว? ไม่ไหวแน่ นี่คือเหตุผลที่ SQL เกิดมา</p>

<p>SQL (Structured Query Language) คือภาษาสำหรับ <strong>พูดคุยกับฐานข้อมูล</strong> มันเป็น declarative language คือเราบอกว่า <strong>"ต้องการอะไร"</strong> ไม่ต้องบอกว่า <strong>"ทำยังไง"</strong> — Database Engine จะหาวิธีที่เร็วที่สุดให้เอง</p>

<h3>🏗️ Relational Model — โมเดลที่ครองโลกมา 50 ปี</h3>

<p>Edgar Codd เสนอ Relational Model ในปี 1970 แนวคิดหลักคือ:</p>

<ul>
  <li><strong>Table (Relation)</strong> — ข้อมูลถูกจัดเก็บเป็นตาราง มี rows (แถว) และ columns (คอลัมน์)</li>
  <li><strong>Row (Tuple)</strong> — แต่ละแถวคือ 1 record เช่น 1 ลูกค้า, 1 ออเดอร์</li>
  <li><strong>Column (Attribute)</strong> — แต่ละคอลัมน์คือ 1 คุณสมบัติ เช่น ชื่อ, อีเมล, ราคา</li>
  <li><strong>Primary Key (PK)</strong> — คอลัมน์ที่ใช้ระบุแถวแบบไม่ซ้ำ เช่น user_id</li>
  <li><strong>Foreign Key (FK)</strong> — คอลัมน์ที่เชื่อมไปยังตารางอื่น เช่น order.user_id → users.id</li>
</ul>

<div class="tip-box">💡 <strong>ทริค:</strong> คิดว่า Table เหมือน Google Sheet — แต่ละ Sheet คือ 1 ตาราง, แต่ละแถวคือ 1 record, แต่ละคอลัมน์คือ 1 field แต่ Database มีพลังมากกว่า Sheet หลายร้อยเท่า!</div>

<h3>🗄️ RDBMS ยอดนิยม — เลือกอะไรดี?</h3>

<table>
  <tr><th>RDBMS</th><th>ใช้ทำอะไร</th><th>จุดเด่น</th></tr>
  <tr><td>PostgreSQL</td><td>Backend, Analytics</td><td>Open-source, Feature-rich</td></tr>
  <tr><td>MySQL</td><td>Web Apps</td><td>เร็ว, ง่าย, Community ใหญ่</td></tr>
  <tr><td>BigQuery</td><td>Data Warehouse, Analytics</td><td>Serverless, Petabyte-scale</td></tr>
  <tr><td>SQL Server</td><td>Enterprise</td><td>Integration กับ Microsoft</td></tr>
  <tr><td>SQLite</td><td>Mobile, Embedded</td><td>ไม่ต้อง setup server</td></tr>
</table>

<div class="tip-box">💡 <strong>ทริค:</strong> ในคอร์สนี้จะใช้ <strong>BigQuery SQL syntax</strong> เป็นหลัก เพราะเป็น tool ที่ Data Engineer ใช้จริงในงาน แต่ syntax 90% เหมือนกันทุก database — เรียนที่เดียวใช้ได้ทุกที่!</div>

<h3>🧠 วิธีคิด: เมื่อไหร่ควรใช้ SQL?</h3>

<p>ใช้ SQL เมื่อ:</p>
<ul>
  <li>✅ ข้อมูลมีโครงสร้างชัดเจน (structured data)</li>
  <li>✅ ต้องการ JOIN ข้อมูลจากหลายตาราง</li>
  <li>✅ ต้องการ Aggregate (SUM, AVG, COUNT) ข้อมูลจำนวนมาก</li>
  <li>✅ ต้องการทำ Analytics / Reporting</li>
  <li>✅ ต้องการ ACID Transactions (เช่น โอนเงิน)</li>
</ul>

<p>ไม่ควรใช้ SQL เมื่อ:</p>
<ul>
  <li>❌ ข้อมูลไม่มีโครงสร้าง (images, videos, unstructured text)</li>
  <li>❌ ต้องการ real-time streaming (ใช้ Kafka / Flink แทน)</li>
  <li>❌ ข้อมูลเป็น graph structure (ใช้ Neo4j แทน)</li>
</ul>

<h3>🏢 ตัวอย่าง Schema ที่ใช้ตลอดคอร์ส — E-Commerce Database</h3>

<p>ตลอดคอร์สนี้จะใช้ schema ของร้านค้าออนไลน์ ประกอบด้วย:</p>

<pre><code class="language-sql">-- ตาราง users: ข้อมูลลูกค้า
CREATE TABLE IF NOT EXISTS ecommerce.users (
  user_id       INT64 NOT NULL,
  username      STRING,
  email         STRING,
  city          STRING,
  signup_date   DATE,
  is_premium    BOOL
);

-- ตาราง products: สินค้า
CREATE TABLE IF NOT EXISTS ecommerce.products (
  product_id    INT64 NOT NULL,
  product_name  STRING,
  category      STRING,
  price         NUMERIC,
  stock_qty     INT64
);

-- ตาราง orders: คำสั่งซื้อ
CREATE TABLE IF NOT EXISTS ecommerce.orders (
  order_id      INT64 NOT NULL,
  user_id       INT64,
  order_date    DATE,
  total_amount  NUMERIC,
  status        STRING  -- 'completed', 'pending', 'cancelled'
);

-- ตาราง order_items: รายการสินค้าในแต่ละ order
CREATE TABLE IF NOT EXISTS ecommerce.order_items (
  item_id       INT64 NOT NULL,
  order_id      INT64,
  product_id    INT64,
  quantity      INT64,
  unit_price    NUMERIC
);</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ก่อนเขียน SQL ต้อง <strong>เข้าใจ Schema ก่อนเสมอ!</strong> ดูว่ามีตารางอะไรบ้าง, PK/FK คืออะไร, แต่ละคอลัมน์เก็บข้อมูลอะไร — เหมือนต้องอ่านแผนที่ก่อนออกเดินทาง</div>

<h3>⚡ SQL Query Execution Order — ลำดับที่ Database ประมวลผลจริง</h3>

<p>หลายคนคิดว่า SQL ทำงานตามลำดับที่เราเขียน (SELECT → FROM → WHERE) แต่จริงๆ แล้ว Database ทำงานตามลำดับนี้:</p>

<pre><code class="language-sql">-- ลำดับที่เราเขียน:
SELECT columns       -- 5. เลือก columns
FROM table           -- 1. เริ่มจากตาราง
WHERE condition      -- 2. กรองแถว
GROUP BY column      -- 3. จัดกลุ่ม
HAVING condition     -- 4. กรองกลุ่ม
ORDER BY column      -- 6. เรียงลำดับ
LIMIT n;             -- 7. จำกัดจำนวน</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> หลายคนใช้ column alias ใน WHERE clause แล้วได้ error เพราะ WHERE ทำงาน <strong>ก่อน</strong> SELECT — alias ยังไม่ถูกสร้าง!
<pre><code class="language-sql">-- ❌ ผิด — ใช้ alias ใน WHERE
SELECT total_amount * 0.07 AS vat
FROM orders
WHERE vat > 100;  -- Error! vat ยังไม่มี

-- ✅ ถูก — ใช้ expression จริง
SELECT total_amount * 0.07 AS vat
FROM orders
WHERE total_amount * 0.07 > 100;

-- ✅ หรือใช้ subquery / CTE
WITH t AS (
  SELECT *, total_amount * 0.07 AS vat
  FROM orders
)
SELECT * FROM t WHERE vat > 100;</code></pre>
</div>

<h3>🎯 SQL ในสายงาน Data Engineering</h3>

<p>ในฐานะ Data Engineer ที่ทำงานจริง SQL ไม่ใช่แค่ SELECT — น้องจะต้องใช้ SQL ในหลากหลาย context:</p>

<ul>
  <li><strong>ETL/ELT Pipelines:</strong> เขียน transformation ด้วย SQL ใน dbt, Dataform, Stored Procedures</li>
  <li><strong>Data Quality Checks:</strong> เขียน SQL ตรวจสอบคุณภาพข้อมูล (null checks, duplicate checks)</li>
  <li><strong>Dashboard Queries:</strong> สร้าง dataset สำหรับ Looker, Metabase, Tableau</li>
  <li><strong>Ad-hoc Analysis:</strong> ตอบคำถาม business ที่เข้ามาแบบฉับไว</li>
  <li><strong>Schema Design:</strong> ออกแบบ schema, partitioning, clustering</li>
</ul>

<h3>🚀 เริ่มต้นกับ BigQuery — Setup ใน 5 นาที</h3>

<pre><code class="language-sql">-- 1. เปิด BigQuery Console: console.cloud.google.com/bigquery
-- 2. สร้าง Dataset
CREATE SCHEMA IF NOT EXISTS \`your-project.ecommerce\`;

-- 3. ลองรัน Query แรก
SELECT 'Hello, SQL Mastery!' AS greeting, CURRENT_DATE() AS today;

-- 4. สำรวจ public dataset
SELECT *
FROM \`bigquery-public-data.samples.shakespeare\`
LIMIT 10;</code></pre>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. บอกความแตกต่างระหว่าง SQL (ภาษา) กับ RDBMS (ระบบฐานข้อมูล)
<br>2. จากตาราง schema ด้านบน ถ้าต้องการ "หายอดขายรวมของแต่ละ user" ต้อง JOIN ตารางอะไรบ้าง?
<br>3. อธิบาย Execution Order ของ SQL ว่าทำไม WHERE ทำงานก่อน SELECT
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: SQL เป็น declarative หรือ imperative? ต่างกันอย่างไร?</strong>
<br>A: SQL เป็น declarative — เราบอกว่า <em>"ต้องการอะไร"</em> (เช่น SELECT ชื่อลูกค้าที่สั่งซื้อเกิน 5 ครั้ง) ไม่ต้องบอกว่า <em>"ทำยังไง"</em> (เช่น loop ทุกแถว, เช็คทีละ record) ต่างจาก imperative language เช่น Python ที่เราต้องเขียนทุกขั้นตอน Database optimizer จะหาวิธีที่เร็วที่สุดให้เอง
<br><br><strong>Q: ACID คืออะไร? ทำไมถึงสำคัญ?</strong>
<br>A: Atomicity (ทำทั้งหมดหรือไม่ทำเลย), Consistency (ข้อมูลถูกต้องตาม rules), Isolation (transactions ไม่กระทบกัน), Durability (commit แล้วไม่หาย) สำคัญมากในระบบที่ต้องการความถูกต้อง เช่น ระบบการเงิน
</div>
`
  },
  {
    number: 1,
    slug: 'select-where',
    emoji: '🔍',
    title: 'SELECT, WHERE, ORDER BY, LIMIT',
    content: `
<h2>🔍 SELECT, WHERE, ORDER BY, LIMIT — พื้นฐานที่ต้องแม่น</h2>
<div style="text-align:center;margin:20px 0"><img src="/images/courses/sql-execution-order.png" alt="SQL Query Execution Order" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>

<p>ลองนึกภาพว่าน้องเป็น Data Engineer ที่เพิ่งเข้าทำงานวันแรก PM วิ่งมาถามว่า <strong>"ช่วยดึงรายชื่อลูกค้า Premium ที่สั่งซื้อเกิน 5,000 บาท เรียงจากยอดสูงสุดหน่อย"</strong> — นี่คือ query แรกที่น้องต้องเขียนได้ภายใน 30 วินาที</p>

<h3>📋 SELECT — เลือกข้อมูลที่ต้องการ</h3>

<pre><code class="language-sql">-- 1. เลือกทุกคอลัมน์
SELECT *
FROM ecommerce.users
LIMIT 10;

-- 2. เลือกเฉพาะคอลัมน์ที่ต้องการ (Best Practice!)
SELECT user_id, username, email, city
FROM ecommerce.users;

-- 3. ใช้ Alias ตั้งชื่อใหม่
SELECT
  user_id AS id,
  username AS name,
  UPPER(city) AS city_upper
FROM ecommerce.users;

-- 4. คำนวณคอลัมน์ใหม่
SELECT
  product_name,
  price,
  price * 1.07 AS price_with_vat,
  ROUND(price * 0.1, 2) AS discount_10pct
FROM ecommerce.products;

-- 5. DISTINCT — เอาเฉพาะค่าที่ไม่ซ้ำ
SELECT DISTINCT city
FROM ecommerce.users
ORDER BY city;

-- 6. DISTINCT หลายคอลัมน์ — ไม่ซ้ำกันเป็นชุด
SELECT DISTINCT category, status
FROM ecommerce.products p
JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
JOIN ecommerce.orders o ON oi.order_id = o.order_id;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ <code>SELECT *</code> ใน production! ใน BigQuery คิดเงินตามจำนวนข้อมูลที่ scan — SELECT * จากตาราง 1TB จะเสียเงินเป็นพันบาท ทั้งๆ ที่ต้องการแค่ 2-3 คอลัมน์
<pre><code class="language-sql">-- ❌ แพง! scan ทั้งตาราง
SELECT * FROM ecommerce.orders;

-- ✅ ประหยัด! scan เฉพาะคอลัมน์ที่ต้องการ
SELECT order_id, user_id, total_amount
FROM ecommerce.orders;</code></pre>
</div>

<h3>🔍 WHERE — กรองข้อมูลด้วยเงื่อนไข</h3>

<pre><code class="language-sql">-- 7. เปรียบเทียบพื้นฐาน
SELECT * FROM ecommerce.orders
WHERE total_amount > 5000;

-- 8. หลายเงื่อนไขด้วย AND / OR
SELECT * FROM ecommerce.orders
WHERE total_amount > 1000
  AND status = 'completed'
  AND order_date >= '2024-01-01';

-- 9. IN — เช็คว่าอยู่ในชุดค่า
SELECT * FROM ecommerce.users
WHERE city IN ('Bangkok', 'Chiang Mai', 'Phuket');

-- 10. BETWEEN — ช่วงค่า (inclusive ทั้ง 2 ฝั่ง)
SELECT * FROM ecommerce.orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31';

-- 11. LIKE — Pattern Matching
SELECT * FROM ecommerce.users
WHERE email LIKE '%@gmail.com';  -- ลงท้ายด้วย @gmail.com

SELECT * FROM ecommerce.products
WHERE product_name LIKE '%iPhone%';  -- มีคำว่า iPhone

-- 12. IS NULL / IS NOT NULL
SELECT * FROM ecommerce.users
WHERE email IS NOT NULL
  AND city IS NOT NULL;

-- 13. NOT — กลับเงื่อนไข
SELECT * FROM ecommerce.orders
WHERE status NOT IN ('cancelled', 'refunded')
  AND total_amount IS NOT NULL;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใน BigQuery ใช้ <code>LIKE</code> สำหรับ pattern ง่ายๆ แต่ถ้าต้องการ pattern ซับซ้อน ใช้ <code>REGEXP_CONTAINS()</code> แทน:
<pre><code class="language-sql">-- หา email ที่เป็น gmail หรือ hotmail
SELECT * FROM ecommerce.users
WHERE REGEXP_CONTAINS(email, r'@(gmail|hotmail)\\.com$');</code></pre>
</div>

<h3>📊 ORDER BY — เรียงลำดับผลลัพธ์</h3>

<pre><code class="language-sql">-- 14. เรียงจากน้อยไปมาก (ASC = default)
SELECT product_name, price
FROM ecommerce.products
ORDER BY price ASC;

-- 15. เรียงจากมากไปน้อย
SELECT user_id, total_amount
FROM ecommerce.orders
WHERE status = 'completed'
ORDER BY total_amount DESC;

-- 16. เรียงหลายคอลัมน์
SELECT user_id, order_date, total_amount
FROM ecommerce.orders
ORDER BY user_id ASC, order_date DESC;

-- 17. เรียงด้วย expression
SELECT product_name, price, stock_qty,
       price * stock_qty AS inventory_value
FROM ecommerce.products
ORDER BY price * stock_qty DESC;

-- 18. NULLS FIRST / NULLS LAST (BigQuery)
SELECT user_id, city
FROM ecommerce.users
ORDER BY city ASC NULLS LAST;</code></pre>

<h3>📏 LIMIT & OFFSET — จำกัดจำนวนผลลัพธ์</h3>

<pre><code class="language-sql">-- 19. Top 5 ออเดอร์ที่มียอดสูงสุด
SELECT order_id, user_id, total_amount
FROM ecommerce.orders
WHERE status = 'completed'
ORDER BY total_amount DESC
LIMIT 5;

-- 20. Pagination — หน้าที่ 2 (แสดงหน้าละ 10)
SELECT order_id, user_id, total_amount
FROM ecommerce.orders
ORDER BY order_id
LIMIT 10 OFFSET 10;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ OFFSET สำหรับ pagination ในข้อมูลขนาดใหญ่ — BigQuery ต้อง scan ข้อมูลทั้งหมดก่อนแล้วค่อย skip! ใน production ใช้ <strong>keyset pagination</strong> แทน:
<pre><code class="language-sql">-- ❌ ช้า! OFFSET ต้อง scan ทั้งหมด
SELECT * FROM ecommerce.orders
ORDER BY order_id LIMIT 10 OFFSET 100000;

-- ✅ เร็ว! ใช้ WHERE กับ key แทน
SELECT * FROM ecommerce.orders
WHERE order_id > 100000
ORDER BY order_id
LIMIT 10;</code></pre>
</div>

<h3>🧠 วิธีคิด: อ่านโจทย์แล้วเขียน SQL</h3>

<p>เมื่อได้โจทย์ให้คิดเป็นขั้นตอน:</p>
<ol>
  <li><strong>FROM:</strong> ข้อมูลอยู่ในตารางไหน?</li>
  <li><strong>WHERE:</strong> มีเงื่อนไขกรองอะไรบ้าง?</li>
  <li><strong>SELECT:</strong> ต้องการคอลัมน์อะไร?</li>
  <li><strong>ORDER BY:</strong> ต้องเรียงลำดับไหม?</li>
  <li><strong>LIMIT:</strong> ต้องจำกัดจำนวนไหม?</li>
</ol>

<p><strong>ตัวอย่างโจทย์:</strong> "หาลูกค้า Premium ในกรุงเทพ ที่สมัครในปี 2024 เรียงตามวันสมัคร แสดง 20 คนล่าสุด"</p>

<pre><code class="language-sql">-- Step-by-step
SELECT user_id, username, email, signup_date    -- ต้องการคอลัมน์เหล่านี้
FROM ecommerce.users                            -- จากตาราง users
WHERE is_premium = TRUE                         -- เป็น Premium
  AND city = 'Bangkok'                           -- อยู่กรุงเทพ
  AND signup_date >= '2024-01-01'                -- สมัครในปี 2024
ORDER BY signup_date DESC                        -- เรียงตามวันสมัคร (ล่าสุดก่อน)
LIMIT 20;                                        -- แสดง 20 คน</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใช้ <code>QUALIFY</code> ใน BigQuery เพื่อกรองผลลัพธ์จาก Window Function ได้โดยตรง — ไม่ต้องเขียน subquery:
<pre><code class="language-sql">-- Top 3 orders ของแต่ละ user
SELECT user_id, order_id, total_amount
FROM ecommerce.orders
QUALIFY ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY total_amount DESC) <= 3;</code></pre>
</div>

<h3>💎 Conditional Expressions</h3>

<pre><code class="language-sql">-- CASE WHEN — สร้างคอลัมน์ตามเงื่อนไข
SELECT
  order_id,
  total_amount,
  CASE
    WHEN total_amount >= 10000 THEN 'VIP'
    WHEN total_amount >= 5000 THEN 'Gold'
    WHEN total_amount >= 1000 THEN 'Silver'
    ELSE 'Bronze'
  END AS customer_tier
FROM ecommerce.orders
WHERE status = 'completed';

-- IF (BigQuery shortcut)
SELECT
  user_id,
  IF(is_premium, 'Premium', 'Free') AS plan_type
FROM ecommerce.users;

-- COALESCE — ใช้ค่า default เมื่อ NULL
SELECT
  user_id,
  COALESCE(city, 'Unknown') AS city,
  COALESCE(email, 'no-email@example.com') AS email
FROM ecommerce.users;

-- NULLIF — แปลงค่าเป็น NULL (ป้องกัน division by zero)
SELECT
  order_id,
  total_amount / NULLIF(quantity, 0) AS avg_unit_price
FROM (
  SELECT oi.order_id, o.total_amount, SUM(oi.quantity) AS quantity
  FROM ecommerce.order_items oi
  JOIN ecommerce.orders o ON oi.order_id = o.order_id
  GROUP BY oi.order_id, o.total_amount
);</code></pre>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. หาสินค้าที่ราคาอยู่ระหว่าง 500-2000 บาท ในหมวด 'Electronics' เรียงจากราคาสูงสุด
<br>2. หาลูกค้าที่ email เป็น Gmail และยังไม่ได้กรอก city (city IS NULL)
<br>3. แสดง 10 ออเดอร์ล่าสุดที่ status เป็น completed หรือ pending พร้อมแสดง tier (VIP/Gold/Silver/Bronze)
<br>4. หาสินค้าที่ stock_qty เหลือน้อยกว่า 10 ชิ้น เรียงตาม stock จากน้อยสุด
<br>5. หา user ที่ชื่อขึ้นต้นด้วย 'A' หรือ 'B' และเป็น Premium
<br><br><strong>เฉลย:</strong>
<pre><code class="language-sql">-- 1.
SELECT product_name, category, price
FROM ecommerce.products
WHERE price BETWEEN 500 AND 2000
  AND category = 'Electronics'
ORDER BY price DESC;

-- 2.
SELECT user_id, username, email
FROM ecommerce.users
WHERE email LIKE '%@gmail.com'
  AND city IS NULL;

-- 3.
SELECT order_id, user_id, total_amount, status,
  CASE
    WHEN total_amount >= 10000 THEN 'VIP'
    WHEN total_amount >= 5000 THEN 'Gold'
    WHEN total_amount >= 1000 THEN 'Silver'
    ELSE 'Bronze'
  END AS tier
FROM ecommerce.orders
WHERE status IN ('completed', 'pending')
ORDER BY order_date DESC
LIMIT 10;

-- 4.
SELECT product_name, stock_qty, price
FROM ecommerce.products
WHERE stock_qty < 10
ORDER BY stock_qty ASC;

-- 5.
SELECT user_id, username
FROM ecommerce.users
WHERE (username LIKE 'A%' OR username LIKE 'B%')
  AND is_premium = TRUE;</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: WHERE กับ HAVING ต่างกันอย่างไร?</strong>
<br>A: WHERE กรองแถว <strong>ก่อน</strong> GROUP BY (กรอง individual rows), HAVING กรอง <strong>หลัง</strong> GROUP BY (กรอง groups/aggregated results)
<br><br><strong>Q: NULL = NULL ได้ผลเป็น TRUE หรือ FALSE?</strong>
<br>A: ไม่ใช่ทั้งสอง — ได้ผลเป็น <strong>NULL</strong> (unknown) ดังนั้นต้องใช้ IS NULL / IS NOT NULL เสมอ
</div>
`
  },
  {
    number: 2,
    slug: 'joins',
    emoji: '🔗',
    title: 'JOINs Deep Dive',
    content: `
<h2>🔗 JOINs Deep Dive — เชื่อมตารางแบบมืออาชีพ</h2>
<div style="text-align:center;margin:20px 0"><img src="/images/courses/sql-joins-venn.png" alt="SQL JOINs — Venn Diagram" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>

<p>สมมุติว่าเจ้านายถามว่า <strong>"ลูกค้าคนไหนซื้อสินค้าอะไรบ้าง ในเดือนที่แล้ว?"</strong> ข้อมูลลูกค้าอยู่ตาราง <code>users</code> ข้อมูลออเดอร์อยู่ตาราง <code>orders</code> ข้อมูลสินค้าอยู่ตาราง <code>products</code> — จะรวมข้อมูลจาก 3 ตารางยังไง? นี่คือพลังของ JOIN!</p>

<h3>🧠 วิธีคิด: JOIN คือการจับคู่แถว</h3>

<p>คิดง่ายๆ ว่า JOIN คือการ <strong>จับคู่แถวจาก 2 ตาราง</strong> โดยใช้เงื่อนไขบางอย่าง (มักเป็น FK = PK) เหมือนกับจับคู่ระหว่าง "ใบสั่งซื้อ" กับ "ข้อมูลลูกค้า" — ดูว่า user_id ตรงกันไหม</p>

<h3>1️⃣ INNER JOIN — เอาเฉพาะที่จับคู่ได้</h3>

<p>เหมือนหาคู่ที่ "ทั้งสองฝ่ายต้องมี" — ถ้าฝ่ายใดฝ่ายหนึ่งไม่มี ก็ไม่เอา</p>

<pre><code class="language-sql">-- หาชื่อลูกค้าและยอดสั่งซื้อ (เฉพาะลูกค้าที่เคยสั่งซื้อ)
SELECT
  u.user_id,
  u.username,
  o.order_id,
  o.total_amount,
  o.order_date
FROM ecommerce.users u
INNER JOIN ecommerce.orders o
  ON u.user_id = o.user_id
WHERE o.status = 'completed'
ORDER BY o.total_amount DESC;

-- JOIN 3 ตาราง: ลูกค้า → ออเดอร์ → รายการสินค้า → สินค้า
SELECT
  u.username,
  p.product_name,
  p.category,
  oi.quantity,
  oi.unit_price,
  oi.quantity * oi.unit_price AS line_total
FROM ecommerce.users u
INNER JOIN ecommerce.orders o ON u.user_id = o.user_id
INNER JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
INNER JOIN ecommerce.products p ON oi.product_id = p.product_id
WHERE o.order_date >= '2024-01-01'
ORDER BY line_total DESC;</code></pre>

<h3>2️⃣ LEFT JOIN — เอาทุกแถวจากตารางซ้าย</h3>

<p>เหมือน <strong>"เอาลูกค้าทุกคน ถ้ามีออเดอร์ก็แสดง ถ้าไม่มีก็แสดง NULL"</strong></p>

<pre><code class="language-sql">-- หาลูกค้าทุกคน + จำนวนออเดอร์ (รวมคนที่ไม่เคยสั่ง)
SELECT
  u.user_id,
  u.username,
  COUNT(o.order_id) AS order_count,
  COALESCE(SUM(o.total_amount), 0) AS total_spent
FROM ecommerce.users u
LEFT JOIN ecommerce.orders o
  ON u.user_id = o.user_id
  AND o.status = 'completed'
GROUP BY u.user_id, u.username
ORDER BY total_spent DESC;

-- หาลูกค้าที่ยังไม่เคยสั่งซื้อเลย (anti-join pattern)
SELECT u.user_id, u.username, u.email, u.signup_date
FROM ecommerce.users u
LEFT JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.order_id IS NULL;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> <strong>Anti-join</strong> (LEFT JOIN + WHERE right.key IS NULL) เป็น pattern สำคัญมาก ใช้หา "สิ่งที่ไม่มี" เช่น ลูกค้าที่ไม่เคยสั่ง, สินค้าที่ไม่เคยถูกขาย, user ที่ไม่เคย login</div>

<h3>3️⃣ RIGHT JOIN — เอาทุกแถวจากตารางขวา</h3>

<pre><code class="language-sql">-- หาทุกสินค้า + ยอดขาย (รวมสินค้าที่ไม่เคยถูกขาย)
SELECT
  p.product_id,
  p.product_name,
  COALESCE(SUM(oi.quantity), 0) AS total_sold
FROM ecommerce.order_items oi
RIGHT JOIN ecommerce.products p
  ON oi.product_id = p.product_id
GROUP BY p.product_id, p.product_name
ORDER BY total_sold ASC;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ในทางปฏิบัติ Data Engineer ใช้ <strong>LEFT JOIN</strong> เป็นหลัก แทบไม่ใช้ RIGHT JOIN — เพราะสามารถสลับตารางแล้วใช้ LEFT JOIN แทนได้ ทำให้อ่านง่ายกว่า</div>

<h3>4️⃣ FULL OUTER JOIN — เอาทุกแถวจากทั้ง 2 ตาราง</h3>

<pre><code class="language-sql">-- เปรียบเทียบ users กับ orders - ดูว่ามี orphan records ไหม
SELECT
  u.user_id AS user_table_id,
  o.user_id AS order_table_id,
  u.username,
  o.order_id,
  CASE
    WHEN u.user_id IS NULL THEN 'Order has no matching user (orphan)'
    WHEN o.order_id IS NULL THEN 'User has no orders'
    ELSE 'Matched'
  END AS match_status
FROM ecommerce.users u
FULL OUTER JOIN ecommerce.orders o
  ON u.user_id = o.user_id
WHERE u.user_id IS NULL OR o.order_id IS NULL;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> FULL OUTER JOIN ใช้เยอะใน <strong>Data Quality checks</strong> — เช็คว่ามี orphan records ไหม (เช่น ออเดอร์ที่ user_id ไม่มีในตาราง users)</div>

<h3>5️⃣ CROSS JOIN — จับคู่ทุกแถวกับทุกแถว (Cartesian Product)</h3>

<pre><code class="language-sql">-- สร้างตาราง calendar × product สำหรับ report (ให้มีทุกวัน แม้วันที่ไม่มียอดขาย)
WITH date_range AS (
  SELECT date
  FROM UNNEST(
    GENERATE_DATE_ARRAY('2024-01-01', '2024-12-31')
  ) AS date
),
categories AS (
  SELECT DISTINCT category FROM ecommerce.products
)
SELECT
  d.date,
  c.category,
  COALESCE(daily.total_sales, 0) AS total_sales
FROM date_range d
CROSS JOIN categories c
LEFT JOIN (
  SELECT
    o.order_date,
    p.category,
    SUM(oi.quantity * oi.unit_price) AS total_sales
  FROM ecommerce.orders o
  JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
  JOIN ecommerce.products p ON oi.product_id = p.product_id
  WHERE o.status = 'completed'
  GROUP BY o.order_date, p.category
) daily ON d.date = daily.order_date AND c.category = daily.category
ORDER BY d.date, c.category;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> CROSS JOIN ทำให้จำนวนแถวเป็น M × N — ถ้าตาราง A มี 1 ล้านแถว และ B มี 1 ล้านแถว จะได้ <strong>1 ล้านล้านแถว!</strong> ใช้อย่างระวัง ใช้กับตารางเล็กเท่านั้น (เช่น calendar, lookup tables)</div>

<h3>6️⃣ SELF JOIN — ตาราง JOIN กับตัวเอง</h3>

<pre><code class="language-sql">-- หาลูกค้าที่อยู่เมืองเดียวกัน (เพื่อทำ referral program)
SELECT
  u1.username AS user1,
  u2.username AS user2,
  u1.city
FROM ecommerce.users u1
INNER JOIN ecommerce.users u2
  ON u1.city = u2.city
  AND u1.user_id < u2.user_id  -- ป้องกันคู่ซ้ำ (A,B) กับ (B,A)
ORDER BY u1.city;

-- หา orders ที่มียอดมากกว่า order ก่อนหน้าของ user เดียวกัน
SELECT
  curr.user_id,
  curr.order_id AS current_order,
  curr.total_amount AS current_amount,
  prev.order_id AS previous_order,
  prev.total_amount AS previous_amount,
  curr.total_amount - prev.total_amount AS amount_diff
FROM ecommerce.orders curr
INNER JOIN ecommerce.orders prev
  ON curr.user_id = prev.user_id
  AND curr.order_date > prev.order_date
WHERE curr.total_amount > prev.total_amount
ORDER BY amount_diff DESC
LIMIT 20;</code></pre>

<h3>⚠️ JOIN Pitfalls ที่ต้องระวัง</h3>

<pre><code class="language-sql">-- ❌ Pitfall 1: JOIN ทำให้แถวเพิ่มขึ้น (fan-out)
-- ถ้า 1 user มี 5 orders, JOIN จะได้ 5 แถวสำหรับ user คนนั้น
-- ระวังเมื่อทำ aggregation!

-- ❌ ผิด: SUM จะผิดเพราะ user info ซ้ำ
SELECT
  u.city,
  SUM(o.total_amount) AS city_revenue,
  COUNT(*) AS row_count  -- จะได้จำนวน orders ไม่ใช่จำนวน users!
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
GROUP BY u.city;

-- ✅ ถูก: Aggregate ก่อน แล้วค่อย JOIN
SELECT
  u.city,
  uo.total_revenue,
  uo.order_count
FROM (
  SELECT user_id, SUM(total_amount) AS total_revenue, COUNT(*) AS order_count
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY user_id
) uo
JOIN ecommerce.users u ON uo.user_id = u.user_id;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อยมาก:</strong> <strong>Fan-out problem</strong> — เมื่อ JOIN แล้วจำนวนแถวเพิ่มขึ้น ทำให้ SUM/COUNT ผิด! แก้โดย aggregate ใน subquery ก่อน แล้วค่อย JOIN</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. หา Top 10 สินค้าที่ขายดีที่สุด (ตาม quantity) พร้อมแสดงชื่อสินค้าและหมวดหมู่
<br>2. หาลูกค้าที่สมัครแล้ว 30 วัน แต่ยังไม่เคยสั่งซื้อเลย (anti-join)
<br>3. สร้าง report แสดงยอดขายรายวันของทุก category (รวมวันที่ยอดเป็น 0)
<br>4. หาคู่สินค้าที่อยู่ในหมวดเดียวกันแต่ราคาต่างกันเกิน 50% (self-join)
<br><br><strong>เฉลยข้อ 2:</strong>
<pre><code class="language-sql">SELECT u.user_id, u.username, u.signup_date,
       DATE_DIFF(CURRENT_DATE(), u.signup_date, DAY) AS days_since_signup
FROM ecommerce.users u
LEFT JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.order_id IS NULL
  AND u.signup_date <= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
ORDER BY u.signup_date;</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: อธิบายความแตกต่างระหว่าง INNER JOIN, LEFT JOIN, FULL OUTER JOIN</strong>
<br>A: INNER JOIN คืนเฉพาะแถวที่จับคู่ได้ทั้ง 2 ฝ่าย, LEFT JOIN คืนทุกแถวจากตารางซ้าย + แถวที่จับคู่ได้จากขวา (ไม่ได้ใส่ NULL), FULL OUTER JOIN คืนทุกแถวจากทั้ง 2 ตาราง ไม่ว่าจะจับคู่ได้หรือไม่
<br><br><strong>Q: CROSS JOIN ใช้ตอนไหน?</strong>
<br>A: ใช้เมื่อต้องการ Cartesian product เช่น สร้างตาราง calendar × dimension สำหรับ report ที่ต้องแสดงทุก combination แม้ไม่มีข้อมูล ระวังเรื่อง data explosion
</div>
`
  },
  {
    number: 3,
    slug: 'aggregation',
    emoji: '📊',
    title: 'GROUP BY, HAVING, Aggregate Functions',
    content: `
<h2>📊 GROUP BY, HAVING, Aggregate Functions — สรุปข้อมูลแบบมืออาชีพ</h2>

<p>PM ส่ง Slack มาถามว่า <strong>"ช่วยทำ report สรุปยอดขายรายเดือน แยกตามหมวดสินค้า เอาเฉพาะหมวดที่ยอดรวมเกิน 1 แสน"</strong> — ถ้าไม่มี GROUP BY น้องจะต้องนั่งบวกเลขเอง นี่คือพลังของ Aggregation!</p>

<h3>📈 Aggregate Functions พื้นฐาน</h3>

<pre><code class="language-sql">-- COUNT — นับจำนวน
SELECT
  COUNT(*) AS total_rows,                    -- นับทุกแถว (รวม NULL)
  COUNT(email) AS with_email,                -- นับเฉพาะที่ไม่ NULL
  COUNT(DISTINCT city) AS unique_cities,     -- นับค่าที่ไม่ซ้ำ
  COUNT(DISTINCT user_id) AS unique_users
FROM ecommerce.users;

-- SUM — รวมค่า
SELECT
  SUM(total_amount) AS total_revenue,
  SUM(CASE WHEN status = 'completed' THEN total_amount ELSE 0 END) AS completed_revenue,
  SUM(CASE WHEN status = 'cancelled' THEN total_amount ELSE 0 END) AS cancelled_revenue
FROM ecommerce.orders;

-- AVG — ค่าเฉลี่ย
SELECT
  AVG(total_amount) AS avg_order_value,
  AVG(CASE WHEN is_premium THEN total_amount END) AS avg_premium_order
FROM ecommerce.orders o
JOIN ecommerce.users u ON o.user_id = u.user_id;

-- MIN / MAX — ค่าต่ำสุด / สูงสุด
SELECT
  MIN(price) AS cheapest,
  MAX(price) AS most_expensive,
  MAX(price) - MIN(price) AS price_range
FROM ecommerce.products;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> <code>COUNT(*)</code> นับรวม NULL ด้วย แต่ <code>COUNT(column)</code> ข้าม NULL! ถ้าน้องต้องการนับจำนวนลูกค้าที่กรอก email ต้องใช้ <code>COUNT(email)</code> ไม่ใช่ <code>COUNT(*)</code>
<pre><code class="language-sql">-- ถ้ามี users 100 คน แต่ 20 คนไม่กรอก email
SELECT COUNT(*) AS total, COUNT(email) AS with_email
FROM ecommerce.users;
-- ผลลัพธ์: total = 100, with_email = 80</code></pre>
</div>

<h3>👥 GROUP BY — จัดกลุ่มข้อมูล</h3>

<pre><code class="language-sql">-- 1. ยอดขายรายเดือน
SELECT
  FORMAT_DATE('%Y-%m', order_date) AS month,
  COUNT(*) AS order_count,
  SUM(total_amount) AS revenue,
  AVG(total_amount) AS avg_order_value,
  COUNT(DISTINCT user_id) AS unique_customers
FROM ecommerce.orders
WHERE status = 'completed'
GROUP BY FORMAT_DATE('%Y-%m', order_date)
ORDER BY month;

-- 2. ยอดขายแยกตามหมวดสินค้า
SELECT
  p.category,
  COUNT(DISTINCT o.order_id) AS order_count,
  SUM(oi.quantity) AS units_sold,
  SUM(oi.quantity * oi.unit_price) AS revenue,
  ROUND(AVG(oi.unit_price), 2) AS avg_price
FROM ecommerce.order_items oi
JOIN ecommerce.products p ON oi.product_id = p.product_id
JOIN ecommerce.orders o ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY p.category
ORDER BY revenue DESC;

-- 3. GROUP BY หลาย columns
SELECT
  u.city,
  p.category,
  COUNT(*) AS transaction_count,
  SUM(oi.quantity * oi.unit_price) AS revenue
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
JOIN ecommerce.products p ON oi.product_id = p.product_id
WHERE o.status = 'completed'
GROUP BY u.city, p.category
ORDER BY u.city, revenue DESC;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใน BigQuery ใช้ <code>GROUP BY 1, 2</code> อ้างอิงตำแหน่ง column ใน SELECT ได้ แต่ <strong>ไม่แนะนำ</strong> ในงาน production — เพราะอ่านยาก ถ้ามีคนเพิ่ม column จะทำให้ GROUP BY ผิด!</div>

<h3>🔒 HAVING — กรองผลลัพธ์หลัง GROUP BY</h3>

<pre><code class="language-sql">-- 4. หาหมวดสินค้าที่มียอดขายรวมเกิน 100,000
SELECT
  p.category,
  SUM(oi.quantity * oi.unit_price) AS revenue
FROM ecommerce.order_items oi
JOIN ecommerce.products p ON oi.product_id = p.product_id
JOIN ecommerce.orders o ON oi.order_id = o.order_id
WHERE o.status = 'completed'
GROUP BY p.category
HAVING SUM(oi.quantity * oi.unit_price) > 100000
ORDER BY revenue DESC;

-- 5. หา user ที่สั่งซื้อมากกว่า 5 ครั้ง และยอดรวมเกิน 10,000
SELECT
  u.user_id,
  u.username,
  COUNT(o.order_id) AS order_count,
  SUM(o.total_amount) AS total_spent
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.status = 'completed'
GROUP BY u.user_id, u.username
HAVING COUNT(o.order_id) > 5 AND SUM(o.total_amount) > 10000
ORDER BY total_spent DESC;</code></pre>

<h3>🧠 วิธีคิด: WHERE vs HAVING</h3>

<pre><code class="language-sql">-- WHERE = กรองแถวดิบ (ก่อน GROUP BY)
-- HAVING = กรองกลุ่มที่ aggregate แล้ว (หลัง GROUP BY)

-- ตัวอย่าง: หาเมืองที่มีลูกค้า Premium มากกว่า 10 คน
SELECT
  city,
  COUNT(*) AS premium_count
FROM ecommerce.users
WHERE is_premium = TRUE       -- กรองเฉพาะ Premium ก่อน
GROUP BY city
HAVING COUNT(*) > 10          -- แล้วค่อยกรองเมืองที่มีมากกว่า 10
ORDER BY premium_count DESC;</code></pre>

<h3>🎲 Aggregate Functions ขั้นสูง (BigQuery)</h3>

<pre><code class="language-sql">-- COUNTIF — นับตามเงื่อนไข (BigQuery specific)
SELECT
  FORMAT_DATE('%Y-%m', order_date) AS month,
  COUNTIF(status = 'completed') AS completed,
  COUNTIF(status = 'cancelled') AS cancelled,
  COUNTIF(status = 'pending') AS pending,
  ROUND(COUNTIF(status = 'completed') / COUNT(*) * 100, 1) AS completion_rate
FROM ecommerce.orders
GROUP BY month
ORDER BY month;

-- ARRAY_AGG — รวมค่าเป็น array
SELECT
  u.user_id,
  u.username,
  ARRAY_AGG(DISTINCT p.category ORDER BY p.category) AS categories_bought,
  ARRAY_AGG(p.product_name ORDER BY o.order_date DESC LIMIT 3) AS last_3_products
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
JOIN ecommerce.products p ON oi.product_id = p.product_id
GROUP BY u.user_id, u.username;

-- STRING_AGG — รวมข้อความ
SELECT
  o.order_id,
  STRING_AGG(p.product_name, ', ' ORDER BY p.product_name) AS products_in_order
FROM ecommerce.order_items oi
JOIN ecommerce.products p ON oi.product_id = p.product_id
JOIN ecommerce.orders o ON oi.order_id = o.order_id
GROUP BY o.order_id;

-- APPROX_COUNT_DISTINCT — ประมาณค่า unique count (เร็วกว่า COUNT DISTINCT มาก)
SELECT
  FORMAT_DATE('%Y-%m', order_date) AS month,
  APPROX_COUNT_DISTINCT(user_id) AS approx_unique_buyers
FROM ecommerce.orders
GROUP BY month
ORDER BY month;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> <code>APPROX_COUNT_DISTINCT</code> เร็วกว่า <code>COUNT(DISTINCT)</code> ถึง 10 เท่าในข้อมูลขนาดใหญ่ ใช้ HyperLogLog++ algorithm ค่าคลาดเคลื่อนประมาณ 1% — ยอมรับได้สำหรับ dashboard!</div>

<div class="tip-box">💡 <strong>ทริค GROUPING SETS:</strong> ใน BigQuery ใช้ <code>ROLLUP</code> และ <code>GROUPING SETS</code> สร้าง subtotal ได้:
<pre><code class="language-sql">-- ROLLUP — สร้าง subtotal อัตโนมัติ
SELECT
  COALESCE(p.category, 'ALL CATEGORIES') AS category,
  COALESCE(FORMAT_DATE('%Y-%m', o.order_date), 'ALL MONTHS') AS month,
  SUM(oi.quantity * oi.unit_price) AS revenue
FROM ecommerce.order_items oi
JOIN ecommerce.products p ON oi.product_id = p.product_id
JOIN ecommerce.orders o ON oi.order_id = o.order_id
GROUP BY ROLLUP(p.category, FORMAT_DATE('%Y-%m', o.order_date))
ORDER BY category, month;</code></pre>
</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด 5 ข้อ:</strong>
<br><br><strong>ข้อ 1:</strong> หายอดขายรวม (revenue), จำนวน orders, ค่าเฉลี่ยต่อ order ของแต่ละเมือง เรียงตาม revenue สูงสุด
<br><strong>ข้อ 2:</strong> หาเดือนที่มีจำนวน unique customers มากที่สุด
<br><strong>ข้อ 3:</strong> หาสินค้าที่ถูกสั่งซื้อมากกว่า 100 ชิ้น แต่ stock เหลือน้อยกว่า 50
<br><strong>ข้อ 4:</strong> สร้าง report แสดง completion rate ของแต่ละเดือน (completed / total * 100)
<br><strong>ข้อ 5:</strong> หา Top 3 ลูกค้าที่ซื้อหมวดสินค้าหลากหลายที่สุด (จำนวน distinct categories)

<br><br><strong>เฉลย:</strong>
<pre><code class="language-sql">-- ข้อ 1
SELECT u.city,
  SUM(o.total_amount) AS revenue,
  COUNT(o.order_id) AS order_count,
  ROUND(AVG(o.total_amount), 2) AS avg_order_value
FROM ecommerce.orders o
JOIN ecommerce.users u ON o.user_id = u.user_id
WHERE o.status = 'completed'
GROUP BY u.city
ORDER BY revenue DESC;

-- ข้อ 2
SELECT FORMAT_DATE('%Y-%m', order_date) AS month,
  COUNT(DISTINCT user_id) AS unique_customers
FROM ecommerce.orders
WHERE status = 'completed'
GROUP BY month
ORDER BY unique_customers DESC
LIMIT 1;

-- ข้อ 3
SELECT p.product_id, p.product_name, p.stock_qty,
  SUM(oi.quantity) AS total_ordered
FROM ecommerce.products p
JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name, p.stock_qty
HAVING SUM(oi.quantity) > 100 AND p.stock_qty < 50;

-- ข้อ 4
SELECT FORMAT_DATE('%Y-%m', order_date) AS month,
  COUNT(*) AS total_orders,
  COUNTIF(status = 'completed') AS completed_orders,
  ROUND(COUNTIF(status = 'completed') / COUNT(*) * 100, 1) AS completion_rate
FROM ecommerce.orders
GROUP BY month
ORDER BY month;

-- ข้อ 5
SELECT u.user_id, u.username,
  COUNT(DISTINCT p.category) AS categories_count
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
JOIN ecommerce.products p ON oi.product_id = p.product_id
GROUP BY u.user_id, u.username
ORDER BY categories_count DESC
LIMIT 3;</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: COUNT(*) กับ COUNT(column) ต่างกันอย่างไร?</strong>
<br>A: COUNT(*) นับทุกแถว รวม NULL, COUNT(column) นับเฉพาะแถวที่ column นั้นไม่เป็น NULL
<br><br><strong>Q: ทำไม GROUP BY ไม่สามารถใช้ column alias ได้ใน SQL มาตรฐาน?</strong>
<br>A: เพราะ GROUP BY ทำงาน <strong>ก่อน</strong> SELECT ตาม execution order ดังนั้น alias ที่ตั้งใน SELECT ยังไม่ถูกสร้าง (แต่ BigQuery อนุญาตให้ใช้ alias ใน GROUP BY เป็น extension พิเศษ)
</div>
`
  },
  {
    number: 4,
    slug: 'subqueries-cte',
    emoji: '🧩',
    title: 'Subqueries & CTEs',
    content: `
<h2>🧩 Subqueries & CTEs — เขียน SQL ซับซ้อนแบบอ่านง่าย</h2>

<p>ลองนึกภาพว่าน้องต้องตอบคำถามนี้: <strong>"หาลูกค้าที่ยอดซื้อรวมมากกว่าค่าเฉลี่ยของทุกลูกค้า"</strong> — ปัญหาคือต้องรู้ค่าเฉลี่ยก่อน แล้วค่อยเอาไปเปรียบเทียบ ทำใน query เดียวยังไง? นี่คือที่มาของ Subquery!</p>

<h3>📦 Subquery คืออะไร?</h3>

<p>Subquery คือ <strong>query ที่อยู่ข้างใน query อีกทีหนึ่ง</strong> — เหมือนกล่องซ้อนกล่อง มี 3 แบบหลัก:</p>

<h3>1️⃣ Scalar Subquery — คืนค่าเดียว</h3>

<pre><code class="language-sql">-- หาลูกค้าที่ยอดซื้อมากกว่าค่าเฉลี่ย
SELECT user_id, username, total_spent
FROM (
  SELECT u.user_id, u.username, SUM(o.total_amount) AS total_spent
  FROM ecommerce.users u
  JOIN ecommerce.orders o ON u.user_id = o.user_id
  WHERE o.status = 'completed'
  GROUP BY u.user_id, u.username
)
WHERE total_spent > (
  SELECT AVG(total_amount) FROM ecommerce.orders WHERE status = 'completed'
)
ORDER BY total_spent DESC;

-- หาสินค้าที่ราคาสูงกว่าค่าเฉลี่ยของหมวดเดียวกัน
SELECT
  product_name,
  category,
  price,
  (SELECT AVG(price) FROM ecommerce.products p2 WHERE p2.category = p1.category) AS category_avg,
  price - (SELECT AVG(price) FROM ecommerce.products p2 WHERE p2.category = p1.category) AS diff_from_avg
FROM ecommerce.products p1
ORDER BY diff_from_avg DESC;</code></pre>

<h3>2️⃣ Table Subquery — คืนเป็นตาราง</h3>

<pre><code class="language-sql">-- ใช้ subquery ใน FROM (Derived Table)
SELECT
  city,
  avg_order_value,
  total_customers,
  CASE
    WHEN avg_order_value > 5000 THEN 'High Value City'
    WHEN avg_order_value > 2000 THEN 'Medium Value City'
    ELSE 'Low Value City'
  END AS city_tier
FROM (
  SELECT
    u.city,
    ROUND(AVG(o.total_amount), 2) AS avg_order_value,
    COUNT(DISTINCT u.user_id) AS total_customers
  FROM ecommerce.users u
  JOIN ecommerce.orders o ON u.user_id = o.user_id
  WHERE o.status = 'completed'
  GROUP BY u.city
) city_stats
WHERE total_customers >= 10
ORDER BY avg_order_value DESC;

-- ใช้ subquery ใน IN
SELECT user_id, username, email
FROM ecommerce.users
WHERE user_id IN (
  SELECT DISTINCT user_id
  FROM ecommerce.orders
  WHERE total_amount > 10000 AND status = 'completed'
);</code></pre>

<h3>3️⃣ Correlated Subquery — อ้างอิงตารางนอก</h3>

<pre><code class="language-sql">-- หา order ล่าสุดของแต่ละ user
SELECT o.*
FROM ecommerce.orders o
WHERE o.order_date = (
  SELECT MAX(o2.order_date)
  FROM ecommerce.orders o2
  WHERE o2.user_id = o.user_id  -- อ้างอิง o จากข้างนอก!
);

-- หาสินค้าที่ขายได้มากกว่าค่าเฉลี่ยของหมวดตัวเอง
SELECT p.product_name, p.category, p.price
FROM ecommerce.products p
WHERE p.price > (
  SELECT AVG(p2.price)
  FROM ecommerce.products p2
  WHERE p2.category = p.category
);</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> Correlated subquery ทำงาน <strong>ทีละแถว</strong> — ถ้าตารางนอกมี 1 ล้านแถว subquery จะถูกรัน 1 ล้านครั้ง! ช้ามาก ให้ใช้ <strong>JOIN หรือ Window Function</strong> แทนเมื่อทำได้</div>

<h3>4️⃣ EXISTS / NOT EXISTS</h3>

<pre><code class="language-sql">-- หา user ที่เคยซื้อสินค้าหมวด 'Electronics' (EXISTS)
SELECT u.user_id, u.username
FROM ecommerce.users u
WHERE EXISTS (
  SELECT 1
  FROM ecommerce.orders o
  JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
  JOIN ecommerce.products p ON oi.product_id = p.product_id
  WHERE o.user_id = u.user_id
    AND p.category = 'Electronics'
);

-- หา user ที่ไม่เคยซื้อสินค้าเลย (NOT EXISTS)
SELECT u.user_id, u.username, u.signup_date
FROM ecommerce.users u
WHERE NOT EXISTS (
  SELECT 1
  FROM ecommerce.orders o
  WHERE o.user_id = u.user_id
);</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> <code>EXISTS</code> เร็วกว่า <code>IN</code> ในกรณีที่ subquery คืนผลลัพธ์จำนวนมาก เพราะ EXISTS หยุดทันทีที่เจอแถวแรก แต่ IN ต้องสร้าง list ทั้งหมดก่อน</div>

<h3>🏆 CTE (Common Table Expression) — WITH clause</h3>

<p>CTE ทำให้ SQL ที่ซับซ้อนอ่านง่ายขึ้นมาก — เหมือนการ <strong>แบ่ง query ใหญ่ออกเป็นขั้นตอนย่อยๆ</strong></p>

<pre><code class="language-sql">-- แบบ Subquery ซ้อนกัน (อ่านยาก!)
SELECT * FROM (
  SELECT * FROM (
    SELECT user_id, SUM(total_amount) AS total
    FROM ecommerce.orders GROUP BY user_id
  ) WHERE total > 10000
) WHERE user_id IN (SELECT user_id FROM ecommerce.users WHERE is_premium);

-- ✅ แบบ CTE (อ่านง่าย!)
WITH user_spending AS (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY user_id
),
high_spenders AS (
  SELECT * FROM user_spending WHERE total_spent > 10000
)
SELECT
  hs.user_id,
  u.username,
  u.email,
  hs.total_spent
FROM high_spenders hs
JOIN ecommerce.users u ON hs.user_id = u.user_id
WHERE u.is_premium = TRUE
ORDER BY hs.total_spent DESC;</code></pre>

<h3>🔄 Multiple CTEs & CTE ต่อเนื่อง</h3>

<pre><code class="language-sql">-- Customer Segmentation Report ด้วย CTEs
WITH order_summary AS (
  -- Step 1: สรุปยอดสั่งซื้อของแต่ละ user
  SELECT
    user_id,
    COUNT(*) AS order_count,
    SUM(total_amount) AS total_spent,
    MIN(order_date) AS first_order,
    MAX(order_date) AS last_order,
    DATE_DIFF(MAX(order_date), MIN(order_date), DAY) AS customer_lifetime_days
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY user_id
),
customer_segments AS (
  -- Step 2: แบ่ง segment ตาม RFM (simplified)
  SELECT *,
    CASE
      WHEN total_spent >= 50000 AND order_count >= 10 THEN 'VIP'
      WHEN total_spent >= 20000 AND order_count >= 5 THEN 'Loyal'
      WHEN total_spent >= 5000 THEN 'Regular'
      WHEN order_count = 1 THEN 'One-time'
      ELSE 'Low-value'
    END AS segment
  FROM order_summary
),
segment_summary AS (
  -- Step 3: สรุปตาม segment
  SELECT
    segment,
    COUNT(*) AS customer_count,
    ROUND(AVG(total_spent), 2) AS avg_spent,
    ROUND(AVG(order_count), 1) AS avg_orders,
    ROUND(AVG(customer_lifetime_days), 0) AS avg_lifetime_days
  FROM customer_segments
  GROUP BY segment
)
-- Step 4: แสดงผล
SELECT
  segment,
  customer_count,
  ROUND(customer_count * 100.0 / SUM(customer_count) OVER (), 1) AS pct_of_total,
  avg_spent,
  avg_orders,
  avg_lifetime_days
FROM segment_summary
ORDER BY avg_spent DESC;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> CTE เหมือน <strong>ตัวแปรใน SQL</strong> — ตั้งชื่อให้สื่อความหมาย เช่น <code>active_users</code>, <code>monthly_revenue</code> — ทำให้ SQL อ่านเหมือนเรื่องเล่าจากบนลงล่าง</div>

<h3>🔁 Recursive CTE</h3>

<pre><code class="language-sql">-- สร้าง date series (BigQuery ใช้ GENERATE_DATE_ARRAY ได้เลย แต่นี่คือ concept)
WITH RECURSIVE date_series AS (
  -- Base case
  SELECT DATE '2024-01-01' AS dt
  UNION ALL
  -- Recursive case
  SELECT DATE_ADD(dt, INTERVAL 1 DAY)
  FROM date_series
  WHERE dt < '2024-12-31'
)
SELECT dt FROM date_series;

-- ใน BigQuery ใช้ GENERATE_DATE_ARRAY แทน (เร็วกว่า)
SELECT date
FROM UNNEST(GENERATE_DATE_ARRAY('2024-01-01', '2024-12-31')) AS date;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> BigQuery ไม่รองรับ Recursive CTE โดยตรง แต่มี functions ที่ทดแทนได้ เช่น <code>GENERATE_DATE_ARRAY</code>, <code>GENERATE_ARRAY</code> สำหรับ use cases ทั่วไป</div>

<h3>🧠 วิธีคิด: Subquery vs CTE vs JOIN</h3>

<table>
  <tr><th>สถานการณ์</th><th>แนะนำ</th><th>เหตุผล</th></tr>
  <tr><td>เปรียบเทียบกับค่า aggregate</td><td>Scalar Subquery / CTE</td><td>ต้องคำนวณค่ารวมก่อน</td></tr>
  <tr><td>กรองด้วยชุดค่าจากตารางอื่น</td><td>EXISTS / IN</td><td>เหมาะกับ semi-join</td></tr>
  <tr><td>Query ซับซ้อนหลายขั้นตอน</td><td>CTE (WITH)</td><td>อ่านง่าย maintain ง่าย</td></tr>
  <tr><td>ต้องการ columns จากหลายตาราง</td><td>JOIN</td><td>ดึงข้อมูลจากหลายแหล่ง</td></tr>
  <tr><td>ใช้ result ซ้ำหลายครั้ง</td><td>CTE / Temp Table</td><td>ไม่ต้องคำนวณซ้ำ</td></tr>
</table>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. ใช้ CTE หา Top 5 สินค้าขายดีของแต่ละ category
<br>2. ใช้ EXISTS หา users ที่เคยซื้อทั้ง 'Electronics' และ 'Clothing'
<br>3. เขียน Customer Lifetime Value (CLV) report ด้วย CTEs 3 ขั้นตอน
<br><br><strong>เฉลยข้อ 1:</strong>
<pre><code class="language-sql">WITH product_sales AS (
  SELECT p.product_id, p.product_name, p.category,
    SUM(oi.quantity) AS total_sold,
    ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) AS rn
  FROM ecommerce.products p
  JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
  GROUP BY p.product_id, p.product_name, p.category
)
SELECT product_name, category, total_sold
FROM product_sales
WHERE rn <= 5
ORDER BY category, total_sold DESC;</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: CTE กับ Subquery ต่างกันยังไง? อันไหนเร็วกว่า?</strong>
<br>A: CTE (WITH clause) ทำให้อ่านง่ายกว่า reuse ได้ แต่ performance มักเท่ากับ subquery เพราะ optimizer ส่วนใหญ่จะ inline CTE เป็น subquery อยู่ดี ข้อได้เปรียบของ CTE คือ <strong>readability และ maintainability</strong>
<br><br><strong>Q: EXISTS กับ IN ต่างกันอย่างไร?</strong>
<br>A: EXISTS หยุดทำงานเมื่อเจอแถวแรกที่ตรง (short-circuit) ส่วน IN ต้องสร้าง list ทั้งหมด EXISTS เร็วกว่าเมื่อ subquery มี result มาก นอกจากนี้ IN มีปัญหากับ NULL (NULL IN (...) ให้ผลเป็น NULL ไม่ใช่ FALSE)
</div>
`
  },
  {
    number: 5,
    slug: 'window-functions',
    emoji: '🌟',
    title: 'Window Functions',
    content: `
<h2>🌟 Window Functions — ทักษะที่แยก Junior ออกจาก Senior</h2>
<div style="text-align:center;margin:20px 0"><img src="/images/courses/sql-window-functions.png" alt="SQL Window Functions" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>

<p>ถ้าน้องต้องหา <strong>"อันดับยอดขายของแต่ละสินค้าภายในหมวดเดียวกัน"</strong> หรือ <strong>"เปรียบเทียบยอดขายเดือนนี้กับเดือนก่อน"</strong> — GROUP BY ทำไม่ได้! เพราะ GROUP BY ยุบแถว แต่เราต้องการ <strong>คำนวณโดยไม่ยุบแถว</strong> นี่คือ Window Functions</p>

<h3>🧠 วิธีคิด: Window Function ทำงานยังไง</h3>

<p>คิดว่า Window Function เหมือน <strong>"หน้าต่าง"</strong> ที่มองไปยังกลุ่มแถวที่เกี่ยวข้อง แล้วคำนวณ — แต่ <strong>ไม่ยุบแถว</strong></p>

<pre><code class="language-sql">-- Syntax ทั่วไป
function_name() OVER (
  PARTITION BY column    -- แบ่งกลุ่ม (เหมือน GROUP BY แต่ไม่ยุบแถว)
  ORDER BY column        -- เรียงลำดับภายในกลุ่ม
  ROWS/RANGE frame       -- กำหนดขอบเขตหน้าต่าง (optional)
)</code></pre>

<h3>1️⃣ ROW_NUMBER / RANK / DENSE_RANK</h3>

<pre><code class="language-sql">-- ROW_NUMBER: ลำดับที่ไม่ซ้ำ (1, 2, 3, 4)
-- RANK: ลำดับที่ข้ามเมื่อซ้ำ (1, 2, 2, 4)
-- DENSE_RANK: ลำดับที่ไม่ข้ามเมื่อซ้ำ (1, 2, 2, 3)

-- ตัวอย่าง 1: อันดับสินค้าขายดีในแต่ละ category
SELECT
  p.category,
  p.product_name,
  SUM(oi.quantity) AS total_sold,
  ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) AS row_num,
  RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) AS rank_num,
  DENSE_RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) AS dense_rank_num
FROM ecommerce.products p
JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
GROUP BY p.category, p.product_name;

-- ตัวอย่าง 2: Top 3 สินค้าของแต่ละ category (ใช้ QUALIFY!)
SELECT
  p.category,
  p.product_name,
  SUM(oi.quantity) AS total_sold
FROM ecommerce.products p
JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
GROUP BY p.category, p.product_name
QUALIFY ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) <= 3;

-- ตัวอย่าง 3: อันดับลูกค้า VIP ตามยอดซื้อ
SELECT
  u.user_id,
  u.username,
  SUM(o.total_amount) AS total_spent,
  RANK() OVER (ORDER BY SUM(o.total_amount) DESC) AS spending_rank,
  ROUND(PERCENT_RANK() OVER (ORDER BY SUM(o.total_amount) DESC) * 100, 1) AS percentile
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.status = 'completed'
GROUP BY u.user_id, u.username;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใช้ <code>QUALIFY</code> (BigQuery exclusive) แทน subquery สำหรับกรอง window function — สั้นกว่า อ่านง่ายกว่ามาก!</div>

<h3>2️⃣ LAG / LEAD — ดูแถวก่อน/หลัง</h3>

<pre><code class="language-sql">-- ตัวอย่าง 4: เปรียบเทียบยอดขายเดือนนี้ vs เดือนก่อน (MoM)
WITH monthly_revenue AS (
  SELECT
    FORMAT_DATE('%Y-%m', order_date) AS month,
    SUM(total_amount) AS revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY month
)
SELECT
  month,
  revenue,
  LAG(revenue, 1) OVER (ORDER BY month) AS prev_month_revenue,
  LEAD(revenue, 1) OVER (ORDER BY month) AS next_month_revenue,
  revenue - LAG(revenue, 1) OVER (ORDER BY month) AS mom_change,
  ROUND(
    (revenue - LAG(revenue, 1) OVER (ORDER BY month))
    / LAG(revenue, 1) OVER (ORDER BY month) * 100, 1
  ) AS mom_growth_pct
FROM monthly_revenue
ORDER BY month;

-- ตัวอย่าง 5: ระยะห่างระหว่าง orders ของแต่ละ user
SELECT
  user_id,
  order_id,
  order_date,
  LAG(order_date) OVER (PARTITION BY user_id ORDER BY order_date) AS prev_order_date,
  DATE_DIFF(
    order_date,
    LAG(order_date) OVER (PARTITION BY user_id ORDER BY order_date),
    DAY
  ) AS days_between_orders
FROM ecommerce.orders
WHERE status = 'completed'
ORDER BY user_id, order_date;

-- ตัวอย่าง 6: First order vs latest order ของ user
SELECT DISTINCT
  user_id,
  FIRST_VALUE(order_date) OVER w AS first_order_date,
  LAST_VALUE(order_date) OVER w AS latest_order_date,
  FIRST_VALUE(total_amount) OVER w AS first_order_amount,
  LAST_VALUE(total_amount) OVER w AS latest_order_amount
FROM ecommerce.orders
WHERE status = 'completed'
WINDOW w AS (
  PARTITION BY user_id
  ORDER BY order_date
  ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
);</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> <code>LAST_VALUE()</code> ต้องระบุ frame <code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code> ไม่งั้นจะได้ค่าปัจจุบัน ไม่ใช่ค่าสุดท้ายจริงๆ! เพราะ default frame คือ <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code></div>

<h3>3️⃣ Running Aggregates — ค่าสะสม</h3>

<pre><code class="language-sql">-- ตัวอย่าง 7: ยอดขายสะสม (Cumulative Sum)
WITH daily_revenue AS (
  SELECT order_date, SUM(total_amount) AS daily_revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY order_date
)
SELECT
  order_date,
  daily_revenue,
  SUM(daily_revenue) OVER (ORDER BY order_date) AS cumulative_revenue,
  AVG(daily_revenue) OVER (ORDER BY order_date) AS running_avg
FROM daily_revenue
ORDER BY order_date;

-- ตัวอย่าง 8: Moving Average (ค่าเฉลี่ยเคลื่อนที่ 7 วัน)
WITH daily_revenue AS (
  SELECT order_date, SUM(total_amount) AS daily_revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY order_date
)
SELECT
  order_date,
  daily_revenue,
  ROUND(AVG(daily_revenue) OVER (
    ORDER BY order_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 2) AS moving_avg_7d,
  ROUND(AVG(daily_revenue) OVER (
    ORDER BY order_date
    ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
  ), 2) AS moving_avg_30d
FROM daily_revenue
ORDER BY order_date;

-- ตัวอย่าง 9: สัดส่วนต่อ total (% of total)
SELECT
  p.category,
  p.product_name,
  SUM(oi.quantity * oi.unit_price) AS revenue,
  SUM(SUM(oi.quantity * oi.unit_price)) OVER (PARTITION BY p.category) AS category_total,
  ROUND(
    SUM(oi.quantity * oi.unit_price)
    / SUM(SUM(oi.quantity * oi.unit_price)) OVER (PARTITION BY p.category) * 100, 1
  ) AS pct_of_category
FROM ecommerce.products p
JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
GROUP BY p.category, p.product_name
ORDER BY p.category, revenue DESC;</code></pre>

<h3>4️⃣ NTILE & Percentile</h3>

<pre><code class="language-sql">-- ตัวอย่าง 10: แบ่งลูกค้าเป็น 4 กลุ่ม (quartile) ตามยอดซื้อ
SELECT
  user_id,
  total_spent,
  NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile,
  CASE NTILE(4) OVER (ORDER BY total_spent DESC)
    WHEN 1 THEN 'Top 25%'
    WHEN 2 THEN '25-50%'
    WHEN 3 THEN '50-75%'
    WHEN 4 THEN 'Bottom 25%'
  END AS segment
FROM (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM ecommerce.orders WHERE status = 'completed'
  GROUP BY user_id
);

-- ตัวอย่าง 11: Percentile
SELECT
  category,
  PERCENTILE_CONT(price, 0.5) OVER (PARTITION BY category) AS median_price,
  PERCENTILE_CONT(price, 0.9) OVER (PARTITION BY category) AS p90_price
FROM ecommerce.products
QUALIFY ROW_NUMBER() OVER (PARTITION BY category ORDER BY product_id) = 1;</code></pre>

<h3>5️⃣ Named Window — ลดการเขียนซ้ำ</h3>

<pre><code class="language-sql">-- ตัวอย่าง 12: ใช้ WINDOW clause
SELECT
  user_id,
  order_date,
  total_amount,
  ROW_NUMBER() OVER user_orders AS order_sequence,
  LAG(total_amount) OVER user_orders AS prev_amount,
  SUM(total_amount) OVER user_orders AS running_total,
  AVG(total_amount) OVER user_orders AS running_avg
FROM ecommerce.orders
WHERE status = 'completed'
WINDOW user_orders AS (PARTITION BY user_id ORDER BY order_date)
ORDER BY user_id, order_date;</code></pre>

<h3>🔥 Real-World Use Cases</h3>

<pre><code class="language-sql">-- ตัวอย่าง 13: Funnel Analysis — Retention Day 1, 7, 30
WITH user_first_order AS (
  SELECT user_id, MIN(order_date) AS first_order_date
  FROM ecommerce.orders
  GROUP BY user_id
),
subsequent_orders AS (
  SELECT
    ufo.user_id,
    ufo.first_order_date,
    o.order_date,
    DATE_DIFF(o.order_date, ufo.first_order_date, DAY) AS days_since_first
  FROM user_first_order ufo
  JOIN ecommerce.orders o ON ufo.user_id = o.user_id
  WHERE o.order_date > ufo.first_order_date
)
SELECT
  FORMAT_DATE('%Y-%m', first_order_date) AS cohort_month,
  COUNT(DISTINCT user_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN days_since_first <= 7 THEN user_id END) AS retained_7d,
  COUNT(DISTINCT CASE WHEN days_since_first <= 30 THEN user_id END) AS retained_30d,
  ROUND(COUNT(DISTINCT CASE WHEN days_since_first <= 7 THEN user_id END)
    / COUNT(DISTINCT user_id) * 100, 1) AS retention_7d_pct
FROM subsequent_orders
GROUP BY cohort_month
ORDER BY cohort_month;

-- ตัวอย่าง 14: Session Gap Analysis
WITH ordered_events AS (
  SELECT *,
    LAG(order_date) OVER (PARTITION BY user_id ORDER BY order_date) AS prev_date,
    DATE_DIFF(order_date,
      LAG(order_date) OVER (PARTITION BY user_id ORDER BY order_date), DAY
    ) AS gap_days
  FROM ecommerce.orders
)
SELECT
  user_id,
  order_date,
  gap_days,
  CASE
    WHEN gap_days IS NULL THEN 'First Order'
    WHEN gap_days <= 7 THEN 'Active (≤7d)'
    WHEN gap_days <= 30 THEN 'Warm (8-30d)'
    WHEN gap_days <= 90 THEN 'Cooling (31-90d)'
    ELSE 'Churned (>90d)'
  END AS engagement_status
FROM ordered_events
ORDER BY user_id, order_date;

-- ตัวอย่าง 15: Year-over-Year Growth
WITH monthly_stats AS (
  SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    SUM(total_amount) AS revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY year, month
)
SELECT
  year, month, revenue,
  LAG(revenue) OVER (PARTITION BY month ORDER BY year) AS prev_year_revenue,
  ROUND(
    (revenue - LAG(revenue) OVER (PARTITION BY month ORDER BY year))
    / LAG(revenue) OVER (PARTITION BY month ORDER BY year) * 100, 1
  ) AS yoy_growth_pct
FROM monthly_stats
ORDER BY year, month;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> Window Functions ไม่ลด row count — ถ้าต้องการ <strong>กรอง</strong> ผลลัพธ์จาก window function ต้องใช้ <code>QUALIFY</code> (BigQuery) หรือ wrap ใน subquery/CTE</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. หา Top 2 ลูกค้าที่ใช้จ่ายสูงสุดในแต่ละเมือง
<br>2. คำนวณ Moving Average 7 วันของยอดขายรายวัน
<br>3. หา Month-over-Month growth rate ของ revenue
<br>4. แบ่ง products เป็น 5 กลุ่มตามราคา (quintile)
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: ROW_NUMBER กับ RANK ต่างกันอย่างไร?</strong>
<br>A: ROW_NUMBER ให้ลำดับที่ <strong>ไม่ซ้ำเสมอ</strong> (1,2,3,4) ถ้าค่าเท่ากันจะสุ่มเลือก RANK ให้ลำดับ <strong>ซ้ำได้</strong> และข้ามลำดับ (1,2,2,4) DENSE_RANK ซ้ำได้แต่ไม่ข้าม (1,2,2,3)
<br><br><strong>Q: Window Function กับ GROUP BY ต่างกันอย่างไร?</strong>
<br>A: GROUP BY <strong>ยุบแถว</strong> — 100 แถวอาจเหลือ 10 กลุ่ม Window Function <strong>ไม่ยุบแถว</strong> — ยังคง 100 แถว แต่เพิ่ม column ที่คำนวณจากกลุ่มแถวที่เกี่ยวข้อง
</div>
`
  },
  {
    number: 6,
    slug: 'string-date',
    emoji: '📅',
    title: 'String & Date Functions',
    content: `
<h2>📅 String & Date Functions — จัดการข้อความและวันเวลาใน SQL</h2>

<p>ในโลกจริง ข้อมูลไม่เคยสะอาด — ชื่อลูกค้ามีช่องว่างเกินมา, วันที่อยู่ในรูปแบบต่างกัน, email มีตัวใหญ่ปนเล็ก ถ้าไม่จัดการ string กับ date ให้ดี pipeline จะพัง!</p>

<h3>📝 String Functions</h3>

<pre><code class="language-sql">-- 1. ตัดช่องว่าง & แปลงตัวพิมพ์
SELECT
  TRIM(username) AS trimmed_name,           -- ตัดช่องว่างหัวท้าย
  LTRIM(username) AS left_trimmed,          -- ตัดช่องว่างด้านซ้าย
  UPPER(username) AS upper_name,            -- แปลงเป็นตัวใหญ่
  LOWER(email) AS lower_email,              -- แปลงเป็นตัวเล็ก
  INITCAP(username) AS title_case           -- ตัวใหญ่ตัวแรก
FROM ecommerce.users;

-- 2. ตัด & เชื่อม String
SELECT
  CONCAT(username, ' (', city, ')') AS user_with_city,
  username || ' — ' || email AS user_info,  -- || เป็น shorthand
  SUBSTR(email, 1, STRPOS(email, '@') - 1) AS email_username,
  SPLIT(email, '@')[OFFSET(1)] AS email_domain,
  LEFT(username, 3) AS first_3_chars,
  LENGTH(username) AS name_length
FROM ecommerce.users;

-- 3. ค้นหา & แทนที่
SELECT
  product_name,
  STRPOS(product_name, 'Pro') AS pro_position,  -- ตำแหน่งที่เจอ (0 = ไม่เจอ)
  CONTAINS_SUBSTR(product_name, 'pro') AS has_pro,  -- case-insensitive search
  REPLACE(product_name, 'Old', 'New') AS replaced,
  REGEXP_REPLACE(email, r'@.*', '@***hidden***') AS masked_email
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
JOIN ecommerce.order_items oi ON o.order_id = oi.order_id
JOIN ecommerce.products p ON oi.product_id = p.product_id
LIMIT 20;

-- 4. REGEXP — Regular Expressions
SELECT
  email,
  REGEXP_CONTAINS(email, r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') AS is_valid_email,
  REGEXP_EXTRACT(email, r'@([a-zA-Z0-9.-]+)') AS domain,
  REGEXP_EXTRACT_ALL(product_name, r'[A-Z][a-z]+') AS capitalized_words
FROM ecommerce.users
CROSS JOIN (SELECT product_name FROM ecommerce.products LIMIT 5)
LIMIT 20;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใน BigQuery ใช้ <code>SAFE_CAST</code> แทน <code>CAST</code> เมื่อไม่แน่ใจว่า data สะอาด — SAFE_CAST คืน NULL แทนที่จะ error:
<pre><code class="language-sql">SELECT
  SAFE_CAST('123' AS INT64) AS valid_num,      -- 123
  SAFE_CAST('abc' AS INT64) AS invalid_num;    -- NULL (ไม่ error!)</code></pre>
</div>

<h3>📅 Date & Time Functions</h3>

<pre><code class="language-sql">-- 5. สร้าง & ดึงส่วนประกอบวันที่
SELECT
  CURRENT_DATE() AS today,
  CURRENT_TIMESTAMP() AS now_utc,
  CURRENT_DATETIME() AS now_local,
  EXTRACT(YEAR FROM CURRENT_DATE()) AS year,
  EXTRACT(MONTH FROM CURRENT_DATE()) AS month,
  EXTRACT(DAY FROM CURRENT_DATE()) AS day,
  EXTRACT(DAYOFWEEK FROM CURRENT_DATE()) AS dow,  -- 1=Sun, 7=Sat
  EXTRACT(QUARTER FROM CURRENT_DATE()) AS quarter;

-- 6. คำนวณวันที่
SELECT
  order_date,
  DATE_ADD(order_date, INTERVAL 30 DAY) AS plus_30_days,
  DATE_SUB(order_date, INTERVAL 1 MONTH) AS minus_1_month,
  DATE_DIFF(CURRENT_DATE(), order_date, DAY) AS days_ago,
  DATE_DIFF(CURRENT_DATE(), order_date, MONTH) AS months_ago,
  DATE_TRUNC(order_date, MONTH) AS month_start,
  DATE_TRUNC(order_date, WEEK(MONDAY)) AS week_start,  -- สัปดาห์เริ่มวันจันทร์
  LAST_DAY(order_date, MONTH) AS month_end
FROM ecommerce.orders
LIMIT 10;

-- 7. Format วันที่
SELECT
  order_date,
  FORMAT_DATE('%Y-%m-%d', order_date) AS iso_format,
  FORMAT_DATE('%d/%m/%Y', order_date) AS thai_format,
  FORMAT_DATE('%B %Y', order_date) AS month_year,
  FORMAT_DATE('%A', order_date) AS day_name
FROM ecommerce.orders
LIMIT 10;

-- 8. Parse string เป็น date
SELECT
  PARSE_DATE('%d/%m/%Y', '25/12/2024') AS parsed_date,
  PARSE_DATETIME('%Y-%m-%d %H:%M:%S', '2024-12-25 14:30:00') AS parsed_datetime,
  SAFE.PARSE_DATE('%Y-%m-%d', 'invalid') AS safe_parsed;  -- NULL ไม่ error</code></pre>

<h3>🔥 Real-World Date Patterns</h3>

<pre><code class="language-sql">-- 9. รายงานยอดขายรายสัปดาห์ (เริ่มวันจันทร์)
SELECT
  DATE_TRUNC(order_date, WEEK(MONDAY)) AS week_start,
  COUNT(*) AS orders,
  SUM(total_amount) AS revenue,
  COUNT(DISTINCT user_id) AS unique_buyers
FROM ecommerce.orders
WHERE status = 'completed'
  AND order_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 12 WEEK)
GROUP BY week_start
ORDER BY week_start;

-- 10. Cohort ลูกค้าตามเดือนที่สมัคร
SELECT
  FORMAT_DATE('%Y-%m', u.signup_date) AS cohort_month,
  DATE_DIFF(o.order_date, u.signup_date, MONTH) AS months_since_signup,
  COUNT(DISTINCT u.user_id) AS active_users
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.status = 'completed'
GROUP BY cohort_month, months_since_signup
ORDER BY cohort_month, months_since_signup;

-- 11. Business Hours Only (จันทร์-ศุกร์)
SELECT *
FROM ecommerce.orders
WHERE EXTRACT(DAYOFWEEK FROM order_date) BETWEEN 2 AND 6  -- จันทร์=2, ศุกร์=6
ORDER BY order_date DESC;

-- 12. Rolling 30-Day Active Users
WITH daily_users AS (
  SELECT
    order_date,
    COUNT(DISTINCT user_id) AS daily_active_users
  FROM ecommerce.orders
  GROUP BY order_date
)
SELECT
  order_date,
  daily_active_users,
  SUM(daily_active_users) OVER (
    ORDER BY order_date
    ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
  ) AS rolling_30d_users
FROM daily_users
ORDER BY order_date;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> เรื่อง Timezone! BigQuery เก็บ TIMESTAMP เป็น UTC เสมอ ถ้าต้องการเวลาไทย ต้องแปลง:
<pre><code class="language-sql">-- ❌ เวลา UTC (ผิด timezone)
SELECT CURRENT_TIMESTAMP();  -- 2024-06-15 03:00:00 UTC

-- ✅ แปลงเป็นเวลาไทย
SELECT DATETIME(CURRENT_TIMESTAMP(), 'Asia/Bangkok');  -- 2024-06-15 10:00:00</code></pre>
</div>

<h3>🧹 Data Cleaning Patterns</h3>

<pre><code class="language-sql">-- 13. ทำความสะอาดข้อมูลชื่อ
SELECT
  user_id,
  username AS original,
  TRIM(REGEXP_REPLACE(LOWER(username), r'\\s+', ' ')) AS cleaned_name
FROM ecommerce.users;

-- 14. Standardize phone numbers
SELECT
  REGEXP_REPLACE(phone, r'[^0-9]', '') AS digits_only,
  CONCAT('+66', SUBSTR(REGEXP_REPLACE(phone, r'[^0-9]', ''), 2)) AS intl_format
FROM (SELECT '089-123-4567' AS phone UNION ALL SELECT '(089) 123 4567');

-- 15. Handle mixed date formats
SELECT
  raw_date,
  COALESCE(
    SAFE.PARSE_DATE('%Y-%m-%d', raw_date),
    SAFE.PARSE_DATE('%d/%m/%Y', raw_date),
    SAFE.PARSE_DATE('%m-%d-%Y', raw_date)
  ) AS parsed_date
FROM (
  SELECT '2024-01-15' AS raw_date UNION ALL
  SELECT '15/01/2024' UNION ALL
  SELECT '01-15-2024'
);</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> <code>SAFE.</code> prefix ใน BigQuery ใช้ได้กับทุก function — ถ้า error จะคืน NULL แทน เหมาะมากสำหรับ data cleaning ที่ข้อมูลไม่สะอาด</div>

<div class="tip-box">💡 <strong>ทริค:</strong> ใช้ <code>GENERATE_DATE_ARRAY</code> สร้าง calendar table สำหรับ fill gaps:
<pre><code class="language-sql">SELECT date, EXTRACT(DAYOFWEEK FROM date) AS dow,
  FORMAT_DATE('%A', date) AS day_name,
  IF(EXTRACT(DAYOFWEEK FROM date) IN (1, 7), TRUE, FALSE) AS is_weekend
FROM UNNEST(GENERATE_DATE_ARRAY('2024-01-01', '2024-12-31')) AS date;</code></pre>
</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. ดึง domain จาก email ของ user ทุกคน แล้วนับว่าแต่ละ domain มีกี่คน
<br>2. สร้าง report ยอดขายรายสัปดาห์ย้อนหลัง 8 สัปดาห์ รวมสัปดาห์ที่ยอดเป็น 0
<br>3. หาอายุของ user ตั้งแต่วันสมัครถึงวันนี้ (ปี, เดือน, วัน)
<br><br><strong>เฉลยข้อ 1:</strong>
<pre><code class="language-sql">SELECT
  SPLIT(LOWER(email), '@')[OFFSET(1)] AS domain,
  COUNT(*) AS user_count
FROM ecommerce.users
WHERE email IS NOT NULL
GROUP BY domain
ORDER BY user_count DESC;</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: DATE, DATETIME, TIMESTAMP ใน BigQuery ต่างกันยังไง?</strong>
<br>A: DATE เก็บเฉพาะวัน (2024-01-15), DATETIME เก็บวัน+เวลา ไม่มี timezone (2024-01-15 10:30:00), TIMESTAMP เก็บวัน+เวลา+timezone เป็น UTC เสมอ ใช้ TIMESTAMP เมื่อต้องการความแม่นยำข้าม timezone
<br><br><strong>Q: ทำไมถึงไม่ควรเก็บวันที่เป็น STRING?</strong>
<br>A: 1) ไม่สามารถใช้ date functions ได้โดยตรง 2) เรียงลำดับอาจผิด (เช่น '9/1/2024' มาก่อน '10/1/2024' ตาม string sort) 3) ไม่มี validation ว่าเป็นวันที่จริง 4) partition by date ไม่ได้
</div>
`
  },
  {
    number: 7,
    slug: 'dml-transactions',
    emoji: '✏️',
    title: 'INSERT/UPDATE/DELETE & Transactions',
    content: `
<h2>✏️ INSERT, UPDATE, DELETE & Transactions — เปลี่ยนแปลงข้อมูลอย่างปลอดภัย</h2>

<p>จนถึงตอนนี้เราแค่ <strong>อ่าน</strong> ข้อมูล (SELECT) แต่ Data Engineer ต้อง <strong>เขียน</strong> ข้อมูลด้วย! ไม่ว่าจะเป็นการโหลดข้อมูลเข้า warehouse, อัปเดต dimension table, หรือลบข้อมูลที่หมดอายุ — ทั้งหมดนี้คือ DML (Data Manipulation Language)</p>

<h3>➕ INSERT — เพิ่มข้อมูล</h3>

<pre><code class="language-sql">-- 1. INSERT แถวเดียว
INSERT INTO ecommerce.users (user_id, username, email, city, signup_date, is_premium)
VALUES (1001, 'somchai', 'somchai@gmail.com', 'Bangkok', '2024-06-15', FALSE);

-- 2. INSERT หลายแถว
INSERT INTO ecommerce.users (user_id, username, email, city, signup_date, is_premium)
VALUES
  (1002, 'somying', 'somying@hotmail.com', 'Chiang Mai', '2024-06-15', TRUE),
  (1003, 'somsak', 'somsak@gmail.com', 'Phuket', '2024-06-16', FALSE),
  (1004, 'somsri', 'somsri@yahoo.com', 'Bangkok', '2024-06-16', TRUE);

-- 3. INSERT ... SELECT — เอาข้อมูลจาก query มาใส่
INSERT INTO ecommerce.daily_revenue_snapshot (snapshot_date, revenue, order_count)
SELECT
  CURRENT_DATE() AS snapshot_date,
  SUM(total_amount) AS revenue,
  COUNT(*) AS order_count
FROM ecommerce.orders
WHERE status = 'completed'
  AND order_date = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY);

-- 4. CREATE TABLE AS SELECT (CTAS) — สร้างตารางใหม่จาก query
CREATE OR REPLACE TABLE ecommerce.user_summary AS
SELECT
  u.user_id,
  u.username,
  u.city,
  COUNT(o.order_id) AS total_orders,
  COALESCE(SUM(o.total_amount), 0) AS total_spent,
  MAX(o.order_date) AS last_order_date
FROM ecommerce.users u
LEFT JOIN ecommerce.orders o ON u.user_id = o.user_id AND o.status = 'completed'
GROUP BY u.user_id, u.username, u.city;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใน BigQuery ใช้ <code>CREATE OR REPLACE TABLE</code> สำหรับ full refresh pattern — ลบแล้วสร้างใหม่ทั้งตาราง เหมาะกับ summary tables ที่ต้อง rebuild ทุกวัน</div>

<h3>✏️ UPDATE — แก้ไขข้อมูล</h3>

<pre><code class="language-sql">-- 5. UPDATE พื้นฐาน
UPDATE ecommerce.users
SET is_premium = TRUE
WHERE user_id = 1001;

-- 6. UPDATE หลาย columns
UPDATE ecommerce.users
SET
  city = 'Chiang Mai',
  email = 'somchai.new@gmail.com'
WHERE user_id = 1001;

-- 7. UPDATE ด้วย subquery
UPDATE ecommerce.users u
SET is_premium = TRUE
WHERE u.user_id IN (
  SELECT user_id
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY user_id
  HAVING SUM(total_amount) > 50000
);

-- 8. UPDATE จากตารางอื่น (BigQuery syntax)
UPDATE ecommerce.products p
SET p.stock_qty = p.stock_qty - sold.total_sold
FROM (
  SELECT product_id, SUM(quantity) AS total_sold
  FROM ecommerce.order_items
  WHERE order_id IN (
    SELECT order_id FROM ecommerce.orders
    WHERE order_date = CURRENT_DATE() AND status = 'completed'
  )
  GROUP BY product_id
) sold
WHERE p.product_id = sold.product_id;</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> <strong>ลืมใส่ WHERE ใน UPDATE!</strong> จะอัปเดตทุกแถวในตาราง
<pre><code class="language-sql">-- ❌ อันตราย! อัปเดตทุก user เป็น Premium
UPDATE ecommerce.users SET is_premium = TRUE;

-- ✅ ปลอดภัย! อัปเดตเฉพาะ user ที่ต้องการ
UPDATE ecommerce.users SET is_premium = TRUE WHERE user_id = 1001;</code></pre>
<strong>Pro tip:</strong> ก่อน UPDATE ให้รัน SELECT ก่อนเสมอ เพื่อเช็คว่าจะกระทบกี่แถว!</div>

<h3>🗑️ DELETE — ลบข้อมูล</h3>

<pre><code class="language-sql">-- 9. DELETE พื้นฐาน
DELETE FROM ecommerce.orders
WHERE status = 'cancelled'
  AND order_date < DATE_SUB(CURRENT_DATE(), INTERVAL 1 YEAR);

-- 10. DELETE ด้วย subquery
DELETE FROM ecommerce.order_items
WHERE order_id IN (
  SELECT order_id
  FROM ecommerce.orders
  WHERE status = 'cancelled'
    AND order_date < '2023-01-01'
);

-- 11. TRUNCATE — ลบทุกแถว (เร็วกว่า DELETE)
TRUNCATE TABLE ecommerce.temp_staging;</code></pre>

<h3>🔄 MERGE — Upsert (INSERT + UPDATE ในคำสั่งเดียว)</h3>

<pre><code class="language-sql">-- 12. MERGE — Pattern ที่ใช้เยอะมากใน Data Engineering!
MERGE INTO ecommerce.products AS target
USING (
  SELECT product_id, product_name, category, price, stock_qty
  FROM ecommerce.staging_products
) AS source
ON target.product_id = source.product_id
WHEN MATCHED THEN
  UPDATE SET
    target.product_name = source.product_name,
    target.price = source.price,
    target.stock_qty = source.stock_qty
WHEN NOT MATCHED THEN
  INSERT (product_id, product_name, category, price, stock_qty)
  VALUES (source.product_id, source.product_name, source.category, source.price, source.stock_qty);

-- 13. MERGE with DELETE
MERGE INTO ecommerce.user_summary AS target
USING (
  SELECT user_id, SUM(total_amount) AS total_spent
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY user_id
) AS source
ON target.user_id = source.user_id
WHEN MATCHED AND source.total_spent = 0 THEN
  DELETE
WHEN MATCHED THEN
  UPDATE SET target.total_spent = source.total_spent
WHEN NOT MATCHED THEN
  INSERT (user_id, total_spent)
  VALUES (source.user_id, source.total_spent);</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> <code>MERGE</code> เป็นคำสั่งที่ Data Engineer ใช้มากที่สุดใน ETL pipeline! ใช้สำหรับ <strong>Slowly Changing Dimension (SCD)</strong> — อัปเดตข้อมูลที่มีอยู่ เพิ่มข้อมูลใหม่ ในขั้นตอนเดียว</div>

<h3>🔒 Transactions & ACID</h3>

<p><strong>ACID</strong> คือคุณสมบัติของ transaction ที่ปลอดภัย:</p>
<ul>
  <li><strong>A</strong>tomicity — ทำทั้งหมดหรือไม่ทำเลย (all or nothing)</li>
  <li><strong>C</strong>onsistency — ข้อมูลถูกต้องตาม rules/constraints เสมอ</li>
  <li><strong>I</strong>solation — transactions ที่ทำพร้อมกันไม่กระทบกัน</li>
  <li><strong>D</strong>urability — commit แล้วข้อมูลไม่หายแม้ระบบล่ม</li>
</ul>

<pre><code class="language-sql">-- Transaction ใน PostgreSQL (BigQuery ไม่มี explicit transactions)
BEGIN TRANSACTION;

-- โอนเงิน: หักจากบัญชี A เพิ่มให้บัญชี B
UPDATE accounts SET balance = balance - 1000 WHERE account_id = 'A';
UPDATE accounts SET balance = balance + 1000 WHERE account_id = 'B';

-- ถ้าทั้ง 2 คำสั่งสำเร็จ → commit
COMMIT;

-- ถ้ามี error → rollback ทั้งหมด
-- ROLLBACK;</code></pre>

<div class="tip-box">💡 <strong>ทริค BigQuery:</strong> BigQuery ใช้ <strong>multi-statement transactions</strong> ได้:
<pre><code class="language-sql">-- BigQuery multi-statement transaction
BEGIN TRANSACTION;

DELETE FROM ecommerce.daily_metrics WHERE date = '2024-06-15';

INSERT INTO ecommerce.daily_metrics (date, revenue, orders)
SELECT '2024-06-15', SUM(total_amount), COUNT(*)
FROM ecommerce.orders
WHERE order_date = '2024-06-15' AND status = 'completed';

COMMIT TRANSACTION;</code></pre>
</div>

<h3>🧠 วิธีคิด: DML Patterns ใน Data Engineering</h3>

<table>
  <tr><th>Pattern</th><th>วิธีทำ</th><th>เมื่อไหร่</th></tr>
  <tr><td>Full Refresh</td><td>TRUNCATE + INSERT หรือ CREATE OR REPLACE</td><td>ตารางเล็ก, ต้องการ rebuild ทั้งหมด</td></tr>
  <tr><td>Incremental Load</td><td>INSERT WHERE date > last_loaded</td><td>ตารางใหญ่, append-only</td></tr>
  <tr><td>Upsert</td><td>MERGE</td><td>Dimension tables, SCD</td></tr>
  <tr><td>Soft Delete</td><td>UPDATE SET is_deleted = TRUE</td><td>ต้องเก็บ audit trail</td></tr>
  <tr><td>Partition Overwrite</td><td>DELETE partition + INSERT</td><td>ข้อมูล partition ที่ต้อง reprocess</td></tr>
</table>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> DML ใน BigQuery <strong>มี quota limit</strong> — ทำได้ไม่เกิน 1,500 DML statements ต่อตารางต่อวัน! ถ้าต้องการ insert บ่อยๆ ให้ใช้ streaming insert หรือ batch load แทน</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. เขียน MERGE statement สำหรับ upsert ข้อมูล user จาก staging table
<br>2. เขียน SQL ลบออเดอร์ที่ status เป็น 'cancelled' และเก่ากว่า 6 เดือน
<br>3. เขียน incremental load: INSERT ข้อมูลออเดอร์ใหม่ที่ยังไม่อยู่ในตาราง summary
<br><br><strong>เฉลยข้อ 1:</strong>
<pre><code class="language-sql">MERGE INTO ecommerce.users AS target
USING ecommerce.staging_users AS source
ON target.user_id = source.user_id
WHEN MATCHED THEN
  UPDATE SET
    target.username = source.username,
    target.email = source.email,
    target.city = source.city,
    target.is_premium = source.is_premium
WHEN NOT MATCHED THEN
  INSERT (user_id, username, email, city, signup_date, is_premium)
  VALUES (source.user_id, source.username, source.email,
          source.city, source.signup_date, source.is_premium);</code></pre>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: DELETE กับ TRUNCATE ต่างกันยังไง?</strong>
<br>A: DELETE ลบทีละแถว สามารถใส่ WHERE ได้ สามารถ rollback ได้ (ใน traditional DB), มี transaction log ช้ากว่า. TRUNCATE ลบทุกแถวทันที เร็วกว่ามาก ไม่มี WHERE rollback ไม่ได้ reset auto-increment
<br><br><strong>Q: MERGE ใช้ตอนไหน? ทำไมถึงสำคัญใน DE?</strong>
<br>A: ใช้เมื่อต้อง upsert — อัปเดตถ้ามีอยู่แล้ว insert ถ้าเป็นข้อมูลใหม่ สำคัญใน DE สำหรับ Slowly Changing Dimension (SCD), incremental data loading, และ data reconciliation
</div>
`
  },
  {
    number: 8,
    slug: 'optimization',
    emoji: '⚡',
    title: 'Indexes, EXPLAIN, Optimization',
    content: `
<h2>⚡ Query Optimization — ทำให้ SQL เร็ว 100 เท่า</h2>

<p>น้องเขียน query ได้ถูกต้องแล้ว แต่รันนาน 30 นาที ใช้ slot ไป 2,000 — เจ้านายบอกว่า <strong>"ลดเวลาเหลือ 30 วินาที ได้ไหม?"</strong> นี่คือที่ Query Optimization เข้ามา — ทักษะที่ทำให้ค่า cloud ลดลงหลายแสนต่อเดือน!</p>

<h3>🔍 EXPLAIN — อ่าน Query Plan</h3>

<p>ก่อนจะ optimize ต้อง <strong>วินิจฉัย</strong> ก่อน — เหมือนหมอต้องตรวจก่อนรักษา</p>

<pre><code class="language-sql">-- PostgreSQL: EXPLAIN ANALYZE
EXPLAIN ANALYZE
SELECT u.username, COUNT(o.order_id) AS order_count
FROM users u
JOIN orders o ON u.user_id = o.user_id
WHERE o.order_date >= '2024-01-01'
GROUP BY u.username
ORDER BY order_count DESC;

-- ผลลัพธ์ (ตัวอย่าง):
-- Sort (cost=1234.56..1234.78 rows=100)
--   -> HashAggregate (cost=1200.00..1210.00 rows=100)
--       -> Hash Join (cost=50.00..1100.00 rows=5000)
--           -> Seq Scan on orders (cost=0.00..800.00 rows=10000)
--               Filter: (order_date >= '2024-01-01')
--           -> Hash (cost=30.00..30.00 rows=1000)
--               -> Seq Scan on users (cost=0.00..30.00 rows=1000)</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ดูสิ่งเหล่านี้ใน query plan:
<br>• <strong>Seq Scan</strong> — full table scan (อาจช้า ต้องมี index)
<br>• <strong>Nested Loop</strong> — อาจช้าถ้าตารางใหญ่
<br>• <strong>rows</strong> — ถ้า estimated rows ต่างจาก actual rows มาก → statistics ไม่ update
<br>• <strong>cost</strong> — ยิ่งน้อยยิ่งดี</div>

<h3>📊 BigQuery Execution Details</h3>

<pre><code class="language-sql">-- BigQuery: ดู Execution Details ใน Console
-- ข้อมูลที่ต้องดู:
-- 1. Bytes Processed — จำนวนข้อมูลที่ scan (ยิ่งน้อยยิ่งถูก)
-- 2. Slot Time — จำนวน CPU time ที่ใช้
-- 3. Bytes Shuffled — ข้อมูลที่ย้ายระหว่าง workers

-- ใช้ INFORMATION_SCHEMA ดู query stats
SELECT
  job_id,
  query,
  total_bytes_processed,
  total_slot_ms,
  ROUND(total_bytes_processed / POW(1024, 3), 2) AS gb_processed,
  ROUND(total_slot_ms / 1000, 1) AS slot_seconds,
  creation_time
FROM \`region-us\`.INFORMATION_SCHEMA.JOBS_BY_PROJECT
WHERE creation_time > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 DAY)
  AND job_type = 'QUERY'
ORDER BY total_bytes_processed DESC
LIMIT 20;</code></pre>

<h3>🏗️ Indexes (PostgreSQL / MySQL)</h3>

<pre><code class="language-sql">-- สร้าง Index
CREATE INDEX idx_orders_user_date ON orders (user_id, order_date);
CREATE INDEX idx_orders_status ON orders (status);
CREATE INDEX idx_products_category ON products (category);

-- Unique Index
CREATE UNIQUE INDEX idx_users_email ON users (email);

-- Partial Index (PostgreSQL) — index เฉพาะข้อมูลที่เข้าเงื่อนไข
CREATE INDEX idx_orders_active ON orders (user_id, order_date)
WHERE status = 'completed';

-- ตรวจสอบว่า index ถูกใช้ไหม
EXPLAIN SELECT * FROM orders WHERE user_id = 100 AND order_date >= '2024-01-01';
-- ถ้าเห็น "Index Scan" แสดงว่า index ถูกใช้
-- ถ้าเห็น "Seq Scan" แสดงว่า index ไม่ถูกใช้</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> สร้าง index เยอะเกินไป! ทุก index ทำให้ INSERT/UPDATE <strong>ช้าลง</strong> เพราะต้อง maintain index ด้วย ควรสร้างเฉพาะ columns ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อยๆ</div>

<h3>📦 Partitioning — แบ่งตารางเป็นส่วนๆ</h3>

<pre><code class="language-sql">-- BigQuery: Partition by date (ลด cost ได้มหาศาล!)
CREATE OR REPLACE TABLE ecommerce.orders_partitioned
PARTITION BY order_date
CLUSTER BY user_id, status
AS SELECT * FROM ecommerce.orders;

-- Query ที่ใช้ partition filter → scan เฉพาะ partition ที่ต้องการ
SELECT *
FROM ecommerce.orders_partitioned
WHERE order_date BETWEEN '2024-06-01' AND '2024-06-30'  -- scan เฉพาะเดือน มิ.ย.
  AND status = 'completed';

-- ตรวจสอบ partition info
SELECT table_name, partition_id, total_rows, total_logical_bytes
FROM \`ecommerce.INFORMATION_SCHEMA.PARTITIONS\`
WHERE table_name = 'orders_partitioned'
ORDER BY partition_id DESC
LIMIT 30;</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใน BigQuery ถ้าไม่ใส่ partition filter จะได้ warning: <em>"This query will process X bytes"</em> ตั้ง <code>require_partition_filter = true</code> บังคับให้ใส่ filter เสมอ:
<pre><code class="language-sql">ALTER TABLE ecommerce.orders_partitioned
SET OPTIONS (require_partition_filter = true);</code></pre>
</div>

<h3>🎯 Clustering — จัดเรียงข้อมูลภายใน Partition</h3>

<pre><code class="language-sql">-- Clustering ทำให้ BigQuery scan เฉพาะ block ที่ต้องการ
CREATE OR REPLACE TABLE ecommerce.order_items_optimized
PARTITION BY DATE(order_date)
CLUSTER BY product_id, user_id
AS
SELECT oi.*, o.order_date, o.user_id
FROM ecommerce.order_items oi
JOIN ecommerce.orders o ON oi.order_id = o.order_id;

-- Query ที่ได้ประโยชน์จาก clustering
SELECT product_id, SUM(quantity) AS total_sold
FROM ecommerce.order_items_optimized
WHERE order_date BETWEEN '2024-01-01' AND '2024-06-30'  -- partition pruning
  AND product_id IN (101, 102, 103)                       -- cluster pruning
GROUP BY product_id;</code></pre>

<h3>🚀 Optimization Techniques</h3>

<pre><code class="language-sql">-- 1. เลือกเฉพาะ columns ที่ต้องการ
-- ❌ SELECT * FROM orders;
-- ✅ SELECT order_id, user_id, total_amount FROM orders;

-- 2. ใช้ Approximate functions
-- ❌ (ช้า) COUNT(DISTINCT user_id) — exact
-- ✅ (เร็ว) APPROX_COUNT_DISTINCT(user_id) — ±1% error

-- 3. หลีกเลี่ยง SELECT DISTINCT ทั้งตาราง
-- ❌ SELECT DISTINCT * FROM orders;
-- ✅ ใช้ GROUP BY หรือ QUALIFY แทน

-- 4. Filter เร็วที่สุด (push down predicates)
-- ❌ (filter หลัง JOIN)
SELECT * FROM orders o
JOIN users u ON o.user_id = u.user_id
WHERE o.order_date = '2024-06-15';

-- ✅ (filter ก่อน JOIN)
SELECT * FROM (
  SELECT * FROM orders WHERE order_date = '2024-06-15'
) o
JOIN users u ON o.user_id = u.user_id;

-- 5. ใช้ WITH clause แทน subquery ซ้อนลึก (ช่วย optimizer)

-- 6. หลีกเลี่ยง functions ใน WHERE (ทำให้ใช้ index ไม่ได้)
-- ❌ WHERE EXTRACT(YEAR FROM order_date) = 2024
-- ✅ WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'

-- 7. ใช้ EXISTS แทน IN สำหรับ large subquery
-- ❌ WHERE user_id IN (SELECT user_id FROM big_table)
-- ✅ WHERE EXISTS (SELECT 1 FROM big_table b WHERE b.user_id = u.user_id)</code></pre>

<h3>🧠 วิธีคิด: Optimization Checklist</h3>

<ol>
  <li>✅ เลือกเฉพาะ columns ที่ต้องการ (ไม่ใช้ SELECT *)</li>
  <li>✅ ใส่ partition filter (ใน BigQuery)</li>
  <li>✅ Filter ข้อมูลให้เร็วที่สุด (WHERE ก่อน JOIN)</li>
  <li>✅ ใช้ approximate functions เมื่อยอมรับ error เล็กน้อยได้</li>
  <li>✅ หลีกเลี่ยง functions ใน JOIN/WHERE conditions</li>
  <li>✅ ใช้ EXPLAIN/Execution Details ตรวจสอบ</li>
  <li>✅ พิจารณา materialized views สำหรับ query ที่รันบ่อย</li>
  <li>✅ ใช้ staging tables สำหรับ intermediate results ที่ใหญ่</li>
</ol>

<div class="tip-box">💡 <strong>ทริค Materialized View:</strong>
<pre><code class="language-sql">-- BigQuery Materialized View — auto-refresh, query accelerator
CREATE MATERIALIZED VIEW ecommerce.mv_daily_revenue AS
SELECT
  order_date,
  COUNT(*) AS order_count,
  SUM(total_amount) AS revenue,
  COUNT(DISTINCT user_id) AS unique_buyers
FROM ecommerce.orders
WHERE status = 'completed'
GROUP BY order_date;

-- Query จาก base table จะถูก redirect ไปใช้ MV อัตโนมัติ!</code></pre>
</div>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> <strong>Data Skew</strong> — เมื่อข้อมูลกระจุกตัวอยู่ใน key บางค่า (เช่น user_id = NULL มีล้านแถว) ทำให้ worker บางตัวทำงานหนักกว่า → query ช้ามาก แก้โดย filter NULL ออกก่อน หรือใช้ FARM_FINGERPRINT เพื่อกระจายข้อมูล</div>

<div class="exercise-box">📝 <strong>แบบฝึกหัด:</strong>
<br>1. ออกแบบ partitioning และ clustering strategy สำหรับตาราง orders ที่มี 100M rows
<br>2. Optimize query นี้ให้เร็วขึ้น:
<pre><code class="language-sql">SELECT * FROM orders o
JOIN users u ON o.user_id = u.user_id
JOIN products p ON o.product_id = p.product_id
WHERE YEAR(o.order_date) = 2024
  AND u.city = 'Bangkok'
ORDER BY o.total_amount DESC;</code></pre>
<br>3. ตอบว่าทำไม WHERE UPPER(email) = 'TEST@GMAIL.COM' ถึงช้ากว่า WHERE email = 'test@gmail.com'
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong>
<br><strong>Q: Partitioning กับ Clustering ต่างกันยังไงใน BigQuery?</strong>
<br>A: Partitioning แบ่งตารางเป็นส่วนย่อยตามค่า (เช่น วันที่) ช่วยให้ <strong>ไม่ต้อง scan ทั้งตาราง</strong> Clustering จัดเรียงข้อมูลภายใน partition ตาม columns ที่กำหนด ช่วย <strong>ลดจำนวน block ที่ต้องอ่าน</strong> ใช้ร่วมกันได้
<br><br><strong>Q: ถ้า query ช้า จะ debug ยังไง?</strong>
<br>A: 1) ดู Execution Details (bytes processed, slot time) 2) เช็ค partition pruning 3) ดู data skew 4) ตรวจสอบว่ามี unnecessary JOIN ไหม 5) ลอง break query เป็นขั้นตอนเพื่อหา bottleneck 6) พิจารณา materialized view หรือ pre-aggregation
</div>
`
  },
  {
    number: 9,
    slug: 'interview-sql',
    emoji: '🎯',
    title: 'SQL Interview 20 คำถามพร้อมเฉลย',
    content: `
<h2>🎯 SQL Interview 20 คำถามพร้อมเฉลย — เตรียมสัมภาษณ์แบบจัดเต็ม</h2>

<p>บทนี้รวม 20 คำถาม SQL ที่ถูกถามบ่อยที่สุดในการสัมภาษณ์งาน Data Engineer ตั้งแต่ระดับ Junior จนถึง Senior — ทุกข้อมีเฉลยพร้อมคำอธิบาย!</p>

<h3>🧠 วิธีคิด: แนวทางตอบคำถาม SQL สัมภาษณ์</h3>

<ol>
  <li><strong>ฟังโจทย์ให้ครบ</strong> — อย่าเพิ่งเขียน SQL ให้ถามกลับ clarify ก่อน</li>
  <li><strong>คิด schema</strong> — ถามว่ามี table อะไร, column อะไรบ้าง</li>
  <li><strong>เขียน pseudocode</strong> — อธิบายลำดับขั้นตอนก่อนเขียน SQL จริง</li>
  <li><strong>เขียน SQL</strong> — เริ่มจาก simple แล้วค่อย optimize</li>
  <li><strong>Test mentally</strong> — ลองนึกว่าผลลัพธ์จะเป็นยังไง edge cases?</li>
</ol>

<h3>📋 Level 1: Foundation (Junior)</h3>

<div class="interview-box">🎯 <strong>Q1: หาลูกค้าที่สั่งซื้อมากกว่า 3 ครั้ง แสดงชื่อ, จำนวนครั้ง, ยอดรวม เรียงจากยอดสูงสุด</strong>
<pre><code class="language-sql">SELECT
  u.username,
  COUNT(o.order_id) AS order_count,
  SUM(o.total_amount) AS total_spent
FROM ecommerce.users u
JOIN ecommerce.orders o ON u.user_id = o.user_id
WHERE o.status = 'completed'
GROUP BY u.username
HAVING COUNT(o.order_id) > 3
ORDER BY total_spent DESC;</code></pre>
<strong>Key point:</strong> ใช้ HAVING (ไม่ใช่ WHERE) เพราะกรอง aggregate result
</div>

<div class="interview-box">🎯 <strong>Q2: หา duplicate emails ในตาราง users</strong>
<pre><code class="language-sql">SELECT email, COUNT(*) AS cnt
FROM ecommerce.users
WHERE email IS NOT NULL
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY cnt DESC;</code></pre>
<strong>Key point:</strong> ต้อง filter NULL ออกก่อน เพราะ NULL ≠ NULL (ไม่ใช่ duplicate)
</div>

<div class="interview-box">🎯 <strong>Q3: หา Second Highest Salary (คำถามคลาสสิค!)</strong>
<pre><code class="language-sql">-- วิธี 1: OFFSET
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- วิธี 2: Subquery
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- วิธี 3: DENSE_RANK (flexible — หา Nth ได้)
SELECT salary
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
)
WHERE rnk = 2;</code></pre>
<strong>Key point:</strong> ใช้ DENSE_RANK ดีที่สุดเพราะ handle กรณี salary ซ้ำได้ถูกต้อง
</div>

<div class="interview-box">🎯 <strong>Q4: เขียน query หายอดขายรวมของแต่ละเดือน พร้อม Month-over-Month growth %</strong>
<pre><code class="language-sql">WITH monthly AS (
  SELECT
    FORMAT_DATE('%Y-%m', order_date) AS month,
    SUM(total_amount) AS revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY month
)
SELECT
  month,
  revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_revenue,
  ROUND(
    (revenue - LAG(revenue) OVER (ORDER BY month))
    / LAG(revenue) OVER (ORDER BY month) * 100, 1
  ) AS mom_growth_pct
FROM monthly
ORDER BY month;</code></pre>
<strong>Key point:</strong> ใช้ LAG window function + CTE ให้อ่านง่าย
</div>

<h3>📋 Level 2: Intermediate</h3>

<div class="interview-box">🎯 <strong>Q5: หาสินค้าที่ขายดีที่สุดในแต่ละ category (Top 1 per group)</strong>
<pre><code class="language-sql">WITH product_sales AS (
  SELECT
    p.category,
    p.product_name,
    SUM(oi.quantity) AS total_sold,
    ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity) DESC) AS rn
  FROM ecommerce.products p
  JOIN ecommerce.order_items oi ON p.product_id = oi.product_id
  GROUP BY p.category, p.product_name
)
SELECT category, product_name, total_sold
FROM product_sales
WHERE rn = 1;</code></pre>
<strong>Key point:</strong> Top-N per group ใช้ ROW_NUMBER + PARTITION BY เสมอ
</div>

<div class="interview-box">🎯 <strong>Q6: หา users ที่สั่งซื้อติดต่อกันทุกเดือน (consecutive months)</strong>
<pre><code class="language-sql">WITH user_months AS (
  SELECT DISTINCT
    user_id,
    DATE_TRUNC(order_date, MONTH) AS order_month
  FROM ecommerce.orders
  WHERE status = 'completed'
),
with_gaps AS (
  SELECT *,
    DATE_DIFF(
      order_month,
      LAG(order_month) OVER (PARTITION BY user_id ORDER BY order_month),
      MONTH
    ) AS month_gap
  FROM user_months
),
consecutive AS (
  SELECT user_id,
    SUM(CASE WHEN month_gap != 1 THEN 1 ELSE 0 END)
      OVER (PARTITION BY user_id ORDER BY order_month) AS grp
  FROM with_gaps
)
SELECT user_id, COUNT(*) AS consecutive_months
FROM consecutive
GROUP BY user_id, grp
HAVING COUNT(*) >= 3
ORDER BY consecutive_months DESC;</code></pre>
<strong>Key point:</strong> ใช้ gaps-and-islands technique — หา group ของแถวที่ต่อเนื่อง
</div>

<div class="interview-box">🎯 <strong>Q7: Pivot: แปลง rows เป็น columns</strong>
<pre><code class="language-sql">-- แสดงยอดขายแยกตาม status เป็น columns
SELECT
  FORMAT_DATE('%Y-%m', order_date) AS month,
  SUM(CASE WHEN status = 'completed' THEN total_amount ELSE 0 END) AS completed_revenue,
  SUM(CASE WHEN status = 'pending' THEN total_amount ELSE 0 END) AS pending_revenue,
  SUM(CASE WHEN status = 'cancelled' THEN total_amount ELSE 0 END) AS cancelled_revenue
FROM ecommerce.orders
GROUP BY month
ORDER BY month;</code></pre>
<strong>Key point:</strong> ใช้ CASE WHEN ภายใน aggregate function สำหรับ pivot
</div>

<div class="interview-box">🎯 <strong>Q8: หา running total และ % of total</strong>
<pre><code class="language-sql">WITH daily_revenue AS (
  SELECT order_date, SUM(total_amount) AS revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY order_date
)
SELECT
  order_date,
  revenue,
  SUM(revenue) OVER (ORDER BY order_date) AS running_total,
  ROUND(revenue / SUM(revenue) OVER () * 100, 2) AS pct_of_total
FROM daily_revenue
ORDER BY order_date;</code></pre>
<strong>Key point:</strong> <code>SUM() OVER ()</code> ไม่มี ORDER BY = total ทั้งหมด, มี ORDER BY = running total
</div>

<h3>📋 Level 3: Advanced (Senior)</h3>

<div class="interview-box">🎯 <strong>Q9: Retention Analysis — หา Day-1, Day-7, Day-30 retention rate</strong>
<pre><code class="language-sql">WITH first_purchase AS (
  SELECT user_id, MIN(order_date) AS first_date
  FROM ecommerce.orders GROUP BY user_id
),
cohort_activity AS (
  SELECT
    fp.user_id,
    DATE_TRUNC(fp.first_date, MONTH) AS cohort_month,
    DATE_DIFF(o.order_date, fp.first_date, DAY) AS day_n
  FROM first_purchase fp
  JOIN ecommerce.orders o ON fp.user_id = o.user_id
)
SELECT
  cohort_month,
  COUNT(DISTINCT user_id) AS cohort_size,
  COUNT(DISTINCT CASE WHEN day_n BETWEEN 1 AND 1 THEN user_id END) AS d1_retained,
  COUNT(DISTINCT CASE WHEN day_n BETWEEN 1 AND 7 THEN user_id END) AS d7_retained,
  COUNT(DISTINCT CASE WHEN day_n BETWEEN 1 AND 30 THEN user_id END) AS d30_retained,
  ROUND(COUNT(DISTINCT CASE WHEN day_n BETWEEN 1 AND 7 THEN user_id END)
    / COUNT(DISTINCT user_id) * 100, 1) AS d7_rate
FROM cohort_activity
GROUP BY cohort_month
ORDER BY cohort_month;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q10: Sessionization — จัดกลุ่ม events เป็น sessions (gap > 30 min = new session)</strong>
<pre><code class="language-sql">WITH events_with_gap AS (
  SELECT *,
    TIMESTAMP_DIFF(
      event_timestamp,
      LAG(event_timestamp) OVER (PARTITION BY user_id ORDER BY event_timestamp),
      MINUTE
    ) AS gap_minutes
  FROM analytics.events
),
sessions AS (
  SELECT *,
    SUM(CASE WHEN gap_minutes > 30 OR gap_minutes IS NULL THEN 1 ELSE 0 END)
      OVER (PARTITION BY user_id ORDER BY event_timestamp) AS session_id
  FROM events_with_gap
)
SELECT
  user_id,
  session_id,
  MIN(event_timestamp) AS session_start,
  MAX(event_timestamp) AS session_end,
  COUNT(*) AS event_count,
  TIMESTAMP_DIFF(MAX(event_timestamp), MIN(event_timestamp), MINUTE) AS session_duration_min
FROM sessions
GROUP BY user_id, session_id;</code></pre>
<strong>Key point:</strong> ใช้ conditional SUM + window function สร้าง session_id
</div>

<div class="interview-box">🎯 <strong>Q11: Market Basket Analysis — หาคู่สินค้าที่ถูกซื้อด้วยกันบ่อยที่สุด</strong>
<pre><code class="language-sql">WITH order_products AS (
  SELECT DISTINCT oi.order_id, p.product_name
  FROM ecommerce.order_items oi
  JOIN ecommerce.products p ON oi.product_id = p.product_id
)
SELECT
  a.product_name AS product_a,
  b.product_name AS product_b,
  COUNT(*) AS co_purchase_count
FROM order_products a
JOIN order_products b
  ON a.order_id = b.order_id
  AND a.product_name < b.product_name  -- ป้องกันคู่ซ้ำ
GROUP BY a.product_name, b.product_name
HAVING COUNT(*) >= 5
ORDER BY co_purchase_count DESC
LIMIT 20;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q12: Funnel Analysis — Conversion rate ของแต่ละ step</strong>
<pre><code class="language-sql">WITH funnel AS (
  SELECT
    user_id,
    MAX(CASE WHEN event = 'page_view' THEN 1 ELSE 0 END) AS step1_view,
    MAX(CASE WHEN event = 'add_to_cart' THEN 1 ELSE 0 END) AS step2_cart,
    MAX(CASE WHEN event = 'checkout' THEN 1 ELSE 0 END) AS step3_checkout,
    MAX(CASE WHEN event = 'purchase' THEN 1 ELSE 0 END) AS step4_purchase
  FROM analytics.events
  WHERE event_date >= '2024-01-01'
  GROUP BY user_id
)
SELECT
  COUNT(*) AS total_users,
  SUM(step1_view) AS viewed,
  SUM(step2_cart) AS added_to_cart,
  SUM(step3_checkout) AS checkout,
  SUM(step4_purchase) AS purchased,
  ROUND(SUM(step2_cart) / SUM(step1_view) * 100, 1) AS view_to_cart_pct,
  ROUND(SUM(step4_purchase) / SUM(step1_view) * 100, 1) AS overall_conversion_pct
FROM funnel;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q13: เปรียบเทียบ DELETE vs TRUNCATE vs DROP</strong>
<br>
<table>
  <tr><th>Feature</th><th>DELETE</th><th>TRUNCATE</th><th>DROP</th></tr>
  <tr><td>ลบข้อมูล</td><td>ทีละแถว</td><td>ทั้งตาราง</td><td>ทั้งตาราง+โครงสร้าง</td></tr>
  <tr><td>WHERE</td><td>✅ ได้</td><td>❌ ไม่ได้</td><td>❌ ไม่ได้</td></tr>
  <tr><td>Rollback</td><td>✅ ได้</td><td>❌ ส่วนใหญ่ไม่ได้</td><td>❌ ไม่ได้</td></tr>
  <tr><td>Speed</td><td>ช้า</td><td>เร็วมาก</td><td>เร็วมาก</td></tr>
  <tr><td>ตารางยังอยู่</td><td>✅</td><td>✅</td><td>❌</td></tr>
</table>
</div>

<div class="interview-box">🎯 <strong>Q14: อธิบาย Normalization (1NF, 2NF, 3NF)</strong>
<br><strong>1NF:</strong> ทุก cell มีค่าเดียว (atomic), มี primary key
<br><strong>2NF:</strong> 1NF + ทุก non-key column ขึ้นอยู่กับ PK ทั้งหมด (ไม่ใช่แค่บางส่วน)
<br><strong>3NF:</strong> 2NF + ไม่มี transitive dependency (non-key column ไม่ขึ้นอยู่กับ non-key column อื่น)
<br><strong>ใน Data Warehouse</strong> มักใช้ denormalized schema (Star/Snowflake) เพื่อ read performance
</div>

<div class="interview-box">🎯 <strong>Q15: เขียน SQL หา Median (ค่ากลาง)</strong>
<pre><code class="language-sql">-- BigQuery
SELECT
  PERCENTILE_CONT(total_amount, 0.5) OVER () AS median_order_value
FROM ecommerce.orders
WHERE status = 'completed'
LIMIT 1;

-- หรือใช้ APPROX_QUANTILES
SELECT APPROX_QUANTILES(total_amount, 100)[OFFSET(50)] AS approx_median
FROM ecommerce.orders
WHERE status = 'completed';</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q16: Year-over-Year comparison</strong>
<pre><code class="language-sql">WITH yearly AS (
  SELECT
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    SUM(total_amount) AS revenue
  FROM ecommerce.orders
  WHERE status = 'completed'
  GROUP BY year, month
)
SELECT
  curr.year, curr.month,
  curr.revenue AS current_revenue,
  prev.revenue AS prev_year_revenue,
  ROUND((curr.revenue - prev.revenue) / prev.revenue * 100, 1) AS yoy_growth
FROM yearly curr
LEFT JOIN yearly prev ON curr.month = prev.month AND curr.year = prev.year + 1
ORDER BY curr.year, curr.month;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q17: Find gaps in sequential data</strong>
<pre><code class="language-sql">-- หา order_id ที่หายไป (gaps)
WITH id_range AS (
  SELECT
    order_id,
    LEAD(order_id) OVER (ORDER BY order_id) AS next_id
  FROM ecommerce.orders
)
SELECT
  order_id AS gap_starts_after,
  next_id AS gap_ends_before,
  next_id - order_id - 1 AS missing_count
FROM id_range
WHERE next_id - order_id > 1
ORDER BY missing_count DESC;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q18: Self JOIN — หา manager ของแต่ละ employee</strong>
<pre><code class="language-sql">SELECT
  e.employee_name,
  e.department,
  m.employee_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id
ORDER BY e.department, e.employee_name;</code></pre>
</div>

<div class="interview-box">🎯 <strong>Q19: Explain Query Optimization strategy</strong>
<br><strong>คำตอบที่ดี:</strong>
<br>1. <strong>SELECT</strong> เฉพาะ columns ที่ต้องการ (ลด I/O)
<br>2. <strong>Partition pruning</strong> — ใส่ filter บน partition column
<br>3. <strong>Pre-filter</strong> ก่อน JOIN (ลดข้อมูลที่ต้อง join)
<br>4. <strong>Avoid functions</strong> บน JOIN/WHERE columns (ใช้ index ไม่ได้)
<br>5. <strong>Use approximate</strong> functions เมื่อ exactness ไม่จำเป็น
<br>6. <strong>Materialized views</strong> สำหรับ query patterns ที่ซ้ำบ่อย
<br>7. <strong>Monitor</strong> execution plan (EXPLAIN) และ bytes processed
</div>

<div class="interview-box">🎯 <strong>Q20: Design a data model for e-commerce platform</strong>
<pre><code class="language-sql">-- Fact table: orders (partitioned by order_date)
-- Dimension tables: users, products, stores, promotions

-- Star Schema
-- fact_orders: order_id, user_id, product_id, store_id, promo_id,
--              order_date, quantity, unit_price, total_amount, status

-- dim_users: user_id, username, email, city, signup_date, segment
-- dim_products: product_id, name, category, subcategory, brand, price
-- dim_stores: store_id, store_name, city, region
-- dim_promotions: promo_id, promo_name, discount_pct, start_date, end_date
-- dim_date: date, year, quarter, month, week, day_name, is_holiday

CREATE TABLE ecommerce.fact_orders (
  order_id      INT64,
  user_key      INT64,
  product_key   INT64,
  order_date    DATE,
  quantity      INT64,
  unit_price    NUMERIC,
  total_amount  NUMERIC,
  status        STRING
)
PARTITION BY order_date
CLUSTER BY user_key, product_key;</code></pre>
<strong>Key point:</strong> Fact table เก็บ metrics + FK ไปยัง dimension tables Partition ตาม date, Cluster ตาม FK ที่ query บ่อย
</div>

<h3>💡 เทคนิคสัมภาษณ์</h3>

<div class="tip-box">💡 <strong>ทริค #1:</strong> เมื่อได้โจทย์ <strong>อย่าเพิ่งเขียน SQL</strong> — ถามกลับก่อน: ข้อมูลมี NULL ไหม? ต้อง handle duplicates ไหม? ผลลัพธ์ต้องเรียงลำดับไหม?</div>

<div class="tip-box">💡 <strong>ทริค #2:</strong> เขียน CTE ให้มีชื่อสื่อความหมาย — ผู้สัมภาษณ์จะเห็นว่าน้อง <strong>คิดเป็นขั้นตอน</strong> ไม่ใช่เขียน query ยาวๆ ก้อนเดียว</div>

<div class="tip-box">💡 <strong>ทริค #3:</strong> หลังเขียนเสร็จ <strong>บอก edge cases</strong> เอง เช่น "query นี้จะมีปัญหาถ้ามี NULL ใน user_id" — แสดงว่า คิดรอบคอบ</div>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อยในสัมภาษณ์:</strong>
<br>• ไม่ handle NULL values (NULL ใน JOIN, aggregate)
<br>• ใช้ GROUP BY แล้ว SELECT column ที่ไม่ได้อยู่ใน GROUP BY หรือ aggregate
<br>• ไม่พิจารณา performance (SELECT *, ไม่ filter ก่อน JOIN)
<br>• เขียนถูกแต่อธิบายไม่ได้ว่าทำงานยังไง
</div>

<div class="exercise-box">📝 <strong>ฝึกเพิ่มเติม:</strong> ลองทำ SQL challenges เหล่านี้:
<br>• <strong>LeetCode SQL</strong> — Database section (Easy → Hard)
<br>• <strong>HackerRank SQL</strong> — ฝึก syntax ได้ดี
<br>• <strong>StrataScratch</strong> — คำถามจากบริษัทจริง (Google, Meta, Amazon)
<br>• <strong>DataLemur</strong> — เน้น Data Engineer interview
<br><br>เป้าหมาย: ทำให้ได้อย่างน้อย 50 ข้อ ก่อนวันสัมภาษณ์!
</div>
`
  }
];
