export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🎯',
    title: 'ภาพรวมสัมภาษณ์ DE',
    content: `
<h2>🎯 ภาพรวมกระบวนการสัมภาษณ์ Data Engineer</h2>

<p>ก่อนจะไปลุยเตรียมตัว พี่อยากให้น้องเข้าใจ <strong>"สนามรบ"</strong> ก่อน — การสัมภาษณ์ Data Engineer ไม่เหมือนกับ Software Engineer ทั่วไป มันมีความเฉพาะตัวมาก เพราะต้องวัดทั้ง SQL, Python, System Design, Cloud และ Soft Skills ภายในเวลาจำกัด ถ้าน้องรู้ว่าแต่ละรอบเขาวัดอะไร น้องจะเตรียมตัวได้ตรงจุดมากขึ้น</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> บริษัทใหญ่ ๆ อย่าง Google, Meta, Grab, LINE มักมี 4-6 รอบสัมภาษณ์ ส่วน Startup อาจ 2-3 รอบ แต่ทุกที่จะมี SQL + System Design เป็น core แน่นอน
</div>

<h3>📋 Interview Pipeline — ขั้นตอนทั่วไป</h3>

<p>กระบวนการสัมภาษณ์ DE ทั่วไปจะมีลำดับประมาณนี้:</p>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────────┐
│                  DE Interview Pipeline                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1️⃣ Resume Screening (1-3 วัน)                              │
│     └─> HR/Recruiter คัดกรองจาก Resume                      │
│                                                             │
│  2️⃣ Phone Screen / Recruiter Call (30 นาที)                  │
│     └─> คุยภาพรวม, ถามเงินเดือน, ความสนใจ                   │
│                                                             │
│  3️⃣ Technical Screen (45-60 นาที)                            │
│     └─> SQL + Python coding online                          │
│                                                             │
│  4️⃣ System Design Round (45-60 นาที)                         │
│     └─> ออกแบบ Data Pipeline, Data Platform                  │
│                                                             │
│  5️⃣ Behavioral / Culture Fit (30-45 นาที)                    │
│     └─> STAR method, teamwork, conflict                     │
│                                                             │
│  6️⃣ Hiring Manager Round (30-45 นาที)                        │
│     └─> Vision, expectation, team fit                       │
│                                                             │
│  7️⃣ Offer / Negotiation (1-2 สัปดาห์)                       │
│     └─> เงินเดือน, benefits, signing bonus                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h3>⏱️ Timeline ที่ควรคาดหวัง</h3>

<table>
<thead>
<tr><th>ขั้นตอน</th><th>ระยะเวลา</th><th>สิ่งที่ต้องเตรียม</th></tr>
</thead>
<tbody>
<tr><td>Resume → Phone Screen</td><td>3-7 วัน</td><td>Resume, LinkedIn ที่อัปเดต</td></tr>
<tr><td>Phone Screen → Technical</td><td>3-5 วัน</td><td>SQL ขั้นกลาง-สูง, Python basics</td></tr>
<tr><td>Technical → Onsite</td><td>5-10 วัน</td><td>System Design, Deep SQL, Python</td></tr>
<tr><td>Onsite → Offer</td><td>3-14 วัน</td><td>References, เตรียม negotiate</td></tr>
<tr><td><strong>รวมทั้งหมด</strong></td><td><strong>2-6 สัปดาห์</strong></td><td></td></tr>
</tbody>
</table>

<h3>🏢 ประเภทบริษัทกับรูปแบบสัมภาษณ์</h3>

<h4>Big Tech (Google, Meta, Amazon, Microsoft)</h4>
<ul>
<li>5-6 รอบ, มี coding challenge จริงจัง</li>
<li>SQL: Window Functions, Recursive CTE, Query Optimization</li>
<li>Python: Data Structures, Algorithm (ระดับ Medium)</li>
<li>System Design: ต้องวาด architecture ได้</li>
<li>มี "Bar Raiser" round — คนจากทีมอื่นมาสัมภาษณ์</li>
</ul>

<h4>Unicorn / Scale-up (Grab, GoTo, LINE, Agoda)</h4>
<ul>
<li>4-5 รอบ, เน้น practical มากกว่า</li>
<li>SQL: Real business problems, data modeling</li>
<li>Python: ETL coding, Spark concepts</li>
<li>System Design: Real-world pipeline scenarios</li>
</ul>

<h4>Startup (Seed - Series B)</h4>
<ul>
<li>2-3 รอบ, มักมี take-home assignment</li>
<li>เน้น breadth — ต้องทำได้หลายอย่าง</li>
<li>อาจถาม Cloud, DevOps, CI/CD ด้วย</li>
</ul>

<h4>Enterprise / Bank / Telco</h4>
<ul>
<li>3-4 รอบ, มีแบบทดสอบ online ก่อน</li>
<li>เน้น SQL, ETL tools (Informatica, DataStage, SSIS)</li>
<li>ถามเรื่อง data governance, security มาก</li>
</ul>

<h3>🧠 วิธีคิด: สิ่งที่ผู้สัมภาษณ์มองหาจริง ๆ</h3>

<div class="tip-box">
🧠 <strong>วิธีคิด:</strong> ผู้สัมภาษณ์ไม่ได้มองหาคนที่ตอบถูก 100% — เขามองหาคนที่ <strong>คิดเป็นระบบ</strong>, <strong>สื่อสารได้ชัด</strong>, และ <strong>รับ feedback ได้ดี</strong>
</div>

<p>สิ่งที่ interviewer ให้คะแนนจริง ๆ:</p>

<pre><code class="language-python">
# Interviewer Scoring Rubric (ตัวอย่างจาก Big Tech จริง)
scoring_criteria = {
    "technical_competency": {
        "weight": 0.35,
        "factors": [
            "Correct solution",
            "Optimal time/space complexity",
            "Edge case handling",
            "Code quality & readability"
        ]
    },
    "problem_solving": {
        "weight": 0.30,
        "factors": [
            "Clarifying questions asked",
            "Breaking down the problem",
            "Considering multiple approaches",
            "Trade-off analysis"
        ]
    },
    "communication": {
        "weight": 0.20,
        "factors": [
            "Explaining thought process",
            "Responding to hints",
            "Structured presentation",
            "Asking good questions"
        ]
    },
    "culture_fit": {
        "weight": 0.15,
        "factors": [
            "Collaboration mindset",
            "Growth mentality",
            "Handling ambiguity",
            "Ownership & accountability"
        ]
    }
}
</code></pre>

<h3>📚 แผนเตรียมตัว 4 สัปดาห์</h3>

<table>
<thead>
<tr><th>สัปดาห์</th><th>Focus Area</th><th>เวลา/วัน</th><th>เป้าหมาย</th></tr>
</thead>
<tbody>
<tr><td>Week 1</td><td>SQL Mastery</td><td>2-3 ชม.</td><td>ทำโจทย์ SQL 50 ข้อ</td></tr>
<tr><td>Week 2</td><td>Python + Coding</td><td>2-3 ชม.</td><td>ทำ coding challenge 30 ข้อ</td></tr>
<tr><td>Week 3</td><td>System Design</td><td>2-3 ชม.</td><td>ฝึกวาด 5 system designs</td></tr>
<tr><td>Week 4</td><td>Behavioral + Mock</td><td>1-2 ชม.</td><td>ซ้อม mock 3 รอบ</td></tr>
</tbody>
</table>

<h3>🔑 DE-Specific Skills ที่ต้องเตรียม</h3>

<pre><code class="language-yaml">
core_skills:
  sql:
    - Window Functions (ROW_NUMBER, RANK, LAG, LEAD)
    - CTEs and Recursive CTEs
    - Query Optimization (EXPLAIN ANALYZE)
    - Data Modeling (Star Schema, Snowflake)
    
  python:
    - Collections, Itertools, Functools
    - File I/O, JSON/CSV parsing
    - PySpark basics
    - Unit testing (pytest)
    
  system_design:
    - Batch vs Streaming architecture
    - Data Lake vs Data Warehouse
    - ETL vs ELT patterns
    - Data quality & monitoring
    
  cloud:
    - AWS: S3, Glue, Redshift, Athena, EMR
    - GCP: BigQuery, Dataflow, Cloud Composer
    - Azure: Data Factory, Synapse, Databricks
    
  tools:
    - Airflow / Dagster / Prefect
    - Spark / Flink
    - Kafka / Kinesis
    - Docker / Kubernetes basics
    - dbt / Great Expectations
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>เตรียมแต่ technical ลืม behavioral — หลายคนตกรอบนี้!</li>
<li>ไม่ศึกษาบริษัทก่อนสัมภาษณ์ — ถามกลับไม่ได้เลย</li>
<li>ไม่ฝึก "คิดออกเสียง" — interviewer ต้องการเห็น thought process</li>
<li>Resume ไม่ ATS-friendly — ถูกกรองออกตั้งแต่ยังไม่ถึงคน</li>
</ul>
</div>

<h3>🎯 เป้าหมายของ Course นี้</h3>

<p>เมื่อจบ course นี้ น้องจะ:</p>
<ol>
<li>✅ ตอบคำถาม SQL ระดับ Hard ได้อย่างมั่นใจ</li>
<li>✅ แก้ Python coding challenge ได้ภายในเวลา</li>
<li>✅ ออกแบบ Data Pipeline ได้ครบ end-to-end</li>
<li>✅ ตอบ Behavioral questions ด้วย STAR method</li>
<li>✅ มี Resume ที่ ATS-friendly</li>
<li>✅ ผ่าน Mock Interview 3 รอบ</li>
<li>✅ Negotiate เงินเดือนได้อย่างมืออาชีพ</li>
</ol>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong> Self-Assessment ก่อนเริ่ม
<br><br>
ให้คะแนนตัวเอง 1-5 ในแต่ละด้าน:
<ol>
<li>SQL (Window Functions, CTEs, Optimization)</li>
<li>Python (Data Structures, File I/O, Testing)</li>
<li>System Design (Architecture, Trade-offs)</li>
<li>Communication (Explaining ideas clearly)</li>
<li>Behavioral (STAR stories prepared)</li>
</ol>
<br>
<strong>เฉลย:</strong> ถ้าด้านไหนได้ต่ำกว่า 3 → focus ที่นั่นก่อน ถ้า 4-5 → ใช้เวลาน้อยลงแล้วไปเพิ่มด้านอื่น ไม่ต้องเก่งทุกอย่างเท่ากัน แต่ต้องไม่มีจุดอ่อนที่ร้ายแรง
</div>

<div class="interview-box">
🎤 <strong>คำถามที่มักถูกถามรอบแรก:</strong>
<br><br>
<strong>Q: "Tell me about yourself and your experience with data engineering."</strong>
<br><br>
<strong>แนวตอบ:</strong> ใช้สูตร <strong>Present → Past → Future</strong>
<br>
"ปัจจุบันผมเป็น Data Engineer ที่ [บริษัท] ดูแล pipeline ที่ process ข้อมูล X ล้าน records/วัน ก่อนหน้านี้ผมทำ [ประสบการณ์ที่เกี่ยวข้อง] ซึ่งทำให้ผมมีความเชี่ยวชาญด้าน [skills] ตอนนี้ผมสนใจ [สิ่งที่บริษัทนี้ทำ] เพราะ [เหตุผลที่จริงใจ]"
</div>
`
  },
  {
    number: 1,
    slug: 'sql-interview',
    emoji: '📊',
    title: 'SQL Interview',
    content: `
<h2>📊 SQL Interview — 20 คำถามยอดนิยมพร้อมเฉลยละเอียด</h2>

<p>SQL เป็น <strong>ด่านแรก</strong> ที่ทุกบริษัทใช้กรอง Data Engineer — ไม่ว่าจะ Big Tech หรือ Startup ถ้า SQL ไม่แข็ง ก็จบตั้งแต่รอบแรก พี่จะพาน้องผ่าน 20 คำถามยอดนิยมที่ออกจริง พร้อมเฉลยละเอียดและวิธีคิด</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> ในห้องสัมภาษณ์ ให้ <strong>ถามคำถามก่อนเขียน SQL เสมอ</strong>: "ข้อมูลมี NULL ไหม?", "ต้องการ deduplicate หรือเปล่า?", "Time zone เป็นอะไร?" — สิ่งนี้แสดง seniority
</div>

<h3>📦 Schema สำหรับฝึก</h3>

<pre><code class="language-sql">
-- สมมติเรามี e-commerce database
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    created_at TIMESTAMP,
    country VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    order_date DATE,
    total_amount DECIMAL(10,2),
    status VARCHAR(20)  -- 'completed', 'cancelled', 'pending'
);

CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE user_logins (
    login_id INT PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    login_date DATE,
    device_type VARCHAR(20)
);
</code></pre>

<h3>🔥 กลุ่มที่ 1: Window Functions (ออกบ่อยที่สุด!)</h3>

<div class="interview-box">
🎤 <strong>Q1: หา Top 3 สินค้าขายดีที่สุดในแต่ละ category</strong>
<br><br>
<strong>เฉลย:</strong>
<pre><code class="language-sql">
WITH product_sales AS (
    SELECT 
        p.category,
        p.product_name,
        SUM(oi.quantity) AS total_sold,
        SUM(oi.quantity * oi.unit_price) AS total_revenue,
        ROW_NUMBER() OVER (
            PARTITION BY p.category 
            ORDER BY SUM(oi.quantity) DESC
        ) AS rank_in_category
    FROM order_items oi
    JOIN products p ON oi.product_id = p.product_id
    JOIN orders o ON oi.order_id = o.order_id
    WHERE o.status = 'completed'
    GROUP BY p.category, p.product_name
)
SELECT category, product_name, total_sold, total_revenue
FROM product_sales
WHERE rank_in_category <= 3
ORDER BY category, rank_in_category;
</code></pre>
<strong>💡 จุดที่ต้องพูด:</strong> อธิบายว่าทำไมใช้ ROW_NUMBER() แทน RANK() (ถ้าต้องการ exactly 3 ไม่ว่าจะ tie), กรอง status = 'completed' ก่อน aggregate
</div>

<div class="interview-box">
🎤 <strong>Q2: หายอดขายแบบ Running Total ตาม month</strong>
<br><br>
<pre><code class="language-sql">
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    SUM(total_amount) AS monthly_revenue,
    SUM(SUM(total_amount)) OVER (
        ORDER BY DATE_TRUNC('month', order_date)
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM orders
WHERE status = 'completed'
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;
</code></pre>
<strong>💡 จุดสำคัญ:</strong> SUM ซ้อน SUM — ชั้นในคือ GROUP BY, ชั้นนอกคือ Window Function ต้องอธิบาย ROWS vs RANGE ได้ด้วย
</div>

<div class="interview-box">
🎤 <strong>Q3: หา Month-over-Month growth rate</strong>
<br><br>
<pre><code class="language-sql">
WITH monthly_revenue AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS month,
        SUM(total_amount) AS revenue
    FROM orders
    WHERE status = 'completed'
    GROUP BY DATE_TRUNC('month', order_date)
)
SELECT 
    month,
    revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY month)) 
        / NULLIF(LAG(revenue) OVER (ORDER BY month), 0) * 100, 
        2
    ) AS mom_growth_pct
FROM monthly_revenue
ORDER BY month;
</code></pre>
<strong>💡 จุดสำคัญ:</strong> ใช้ NULLIF เพื่อป้องกัน division by zero, LAG คือ function ที่ออกสอบบ่อยมาก
</div>

<div class="interview-box">
🎤 <strong>Q4: หา user ที่ซื้อของติดกัน 3 วัน (Consecutive Days)</strong>
<br><br>
<pre><code class="language-sql">
WITH user_order_dates AS (
    SELECT DISTINCT 
        user_id,
        order_date,
        order_date - INTERVAL '1 day' * ROW_NUMBER() OVER (
            PARTITION BY user_id 
            ORDER BY order_date
        ) AS grp
    FROM orders
    WHERE status = 'completed'
)
SELECT 
    user_id,
    MIN(order_date) AS streak_start,
    MAX(order_date) AS streak_end,
    COUNT(*) AS consecutive_days
FROM user_order_dates
GROUP BY user_id, grp
HAVING COUNT(*) >= 3
ORDER BY user_id, streak_start;
</code></pre>
<strong>💡 เทคนิค:</strong> "Island and Gaps" pattern — ลบ ROW_NUMBER จากวันที่จริง ถ้าเป็นวันติดกันจะได้ group เดียวกัน คำถามนี้ออกที่ Meta, Grab บ่อยมาก!
</div>

<h3>🔥 กลุ่มที่ 2: Aggregation & Grouping</h3>

<div class="interview-box">
🎤 <strong>Q5: หา users ที่มียอดสั่งมากกว่าค่าเฉลี่ยของ country ตัวเอง</strong>
<br><br>
<pre><code class="language-sql">
WITH user_totals AS (
    SELECT 
        u.user_id,
        u.username,
        u.country,
        SUM(o.total_amount) AS user_total
    FROM users u
    JOIN orders o ON u.user_id = o.user_id
    WHERE o.status = 'completed'
    GROUP BY u.user_id, u.username, u.country
),
country_avg AS (
    SELECT 
        country,
        AVG(user_total) AS avg_total
    FROM user_totals
    GROUP BY country
)
SELECT 
    ut.user_id,
    ut.username,
    ut.country,
    ut.user_total,
    ca.avg_total
FROM user_totals ut
JOIN country_avg ca ON ut.country = ca.country
WHERE ut.user_total > ca.avg_total
ORDER BY ut.country, ut.user_total DESC;
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q6: Retention Rate — หา % user ที่กลับมาซื้อในเดือนถัดไป</strong>
<br><br>
<pre><code class="language-sql">
WITH monthly_users AS (
    SELECT DISTINCT
        user_id,
        DATE_TRUNC('month', order_date) AS active_month
    FROM orders
    WHERE status = 'completed'
)
SELECT 
    a.active_month AS cohort_month,
    COUNT(DISTINCT a.user_id) AS active_users,
    COUNT(DISTINCT b.user_id) AS retained_users,
    ROUND(
        COUNT(DISTINCT b.user_id)::DECIMAL 
        / NULLIF(COUNT(DISTINCT a.user_id), 0) * 100, 
        2
    ) AS retention_rate_pct
FROM monthly_users a
LEFT JOIN monthly_users b 
    ON a.user_id = b.user_id
    AND b.active_month = a.active_month + INTERVAL '1 month'
GROUP BY a.active_month
ORDER BY a.active_month;
</code></pre>
<strong>💡 นี่คือ classic retention query — ต้องเข้าใจ self-join กับ LEFT JOIN</strong>
</div>

<div class="interview-box">
🎤 <strong>Q7: หา products ที่ถูกสั่งคู่กันบ่อยที่สุด (Frequently Bought Together)</strong>
<br><br>
<pre><code class="language-sql">
SELECT 
    oi1.product_id AS product_a,
    oi2.product_id AS product_b,
    COUNT(DISTINCT oi1.order_id) AS times_bought_together
FROM order_items oi1
JOIN order_items oi2 
    ON oi1.order_id = oi2.order_id
    AND oi1.product_id < oi2.product_id  -- ป้องกัน duplicate pairs
GROUP BY oi1.product_id, oi2.product_id
ORDER BY times_bought_together DESC
LIMIT 10;
</code></pre>
<strong>💡 ใช้ < แทน != เพื่อไม่ให้ได้ pair ซ้ำ (A,B) กับ (B,A)</strong>
</div>

<h3>🔥 กลุ่มที่ 3: Subqueries & CTEs</h3>

<div class="interview-box">
🎤 <strong>Q8: หา user ที่สั่งซื้อครั้งแรกและครั้งล่าสุด พร้อม lifetime value</strong>
<br><br>
<pre><code class="language-sql">
SELECT 
    u.user_id,
    u.username,
    MIN(o.order_date) AS first_order,
    MAX(o.order_date) AS last_order,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS lifetime_value,
    MAX(o.order_date) - MIN(o.order_date) AS customer_lifespan,
    CASE 
        WHEN MAX(o.order_date) >= CURRENT_DATE - INTERVAL '90 days' THEN 'Active'
        WHEN MAX(o.order_date) >= CURRENT_DATE - INTERVAL '180 days' THEN 'At Risk'
        ELSE 'Churned'
    END AS customer_status
FROM users u
JOIN orders o ON u.user_id = o.user_id
WHERE o.status = 'completed'
GROUP BY u.user_id, u.username
ORDER BY lifetime_value DESC;
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q9: Pivot Table — สรุปยอดขายรายเดือนตาม category</strong>
<br><br>
<pre><code class="language-sql">
SELECT 
    DATE_TRUNC('month', o.order_date) AS month,
    SUM(CASE WHEN p.category = 'Electronics' 
             THEN oi.quantity * oi.unit_price ELSE 0 END) AS electronics,
    SUM(CASE WHEN p.category = 'Clothing' 
             THEN oi.quantity * oi.unit_price ELSE 0 END) AS clothing,
    SUM(CASE WHEN p.category = 'Food' 
             THEN oi.quantity * oi.unit_price ELSE 0 END) AS food,
    SUM(oi.quantity * oi.unit_price) AS total
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
WHERE o.status = 'completed'
GROUP BY DATE_TRUNC('month', o.order_date)
ORDER BY month;
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q10: Recursive CTE — Organization hierarchy</strong>
<br><br>
<pre><code class="language-sql">
-- สมมติมี employees table
WITH RECURSIVE org_tree AS (
    -- Base case: CEO (manager_id IS NULL)
    SELECT 
        employee_id, name, manager_id, 
        1 AS level,
        name::TEXT AS path
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case
    SELECT 
        e.employee_id, e.name, e.manager_id,
        ot.level + 1,
        ot.path || ' > ' || e.name
    FROM employees e
    JOIN org_tree ot ON e.manager_id = ot.employee_id
)
SELECT * FROM org_tree ORDER BY path;
</code></pre>
<strong>💡 Recursive CTE ออกบ่อยมากในตำแหน่ง Senior — ต้องอธิบาย Base Case vs Recursive Case ได้</strong>
</div>

<h3>🔥 กลุ่มที่ 4: Performance & Optimization</h3>

<div class="interview-box">
🎤 <strong>Q11: Query นี้ช้ามาก ช่วย optimize หน่อย</strong>
<br><br>
<pre><code class="language-sql">
-- ❌ SLOW Query
SELECT * FROM orders o
WHERE o.user_id IN (
    SELECT user_id FROM users WHERE country = 'Thailand'
)
AND o.order_date BETWEEN '2024-01-01' AND '2024-12-31';

-- ✅ OPTIMIZED Query
SELECT o.order_id, o.user_id, o.order_date, o.total_amount
FROM orders o
INNER JOIN users u ON o.user_id = u.user_id
WHERE u.country = 'Thailand'
  AND o.order_date >= '2024-01-01'
  AND o.order_date < '2025-01-01';  -- sargable!

-- สร้าง index ที่เหมาะสม
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);
CREATE INDEX idx_users_country ON users(country);
</code></pre>
<strong>💡 ต้องพูดได้:</strong> SELECT * ไม่ดี, IN subquery เปลี่ยนเป็น JOIN, BETWEEN เปลี่ยนเป็น >= และ < (sargable), เสนอ index
</div>

<div class="interview-box">
🎤 <strong>Q12: EXPLAIN ANALYZE — อ่าน query plan</strong>
<br><br>
<pre><code class="language-sql">
EXPLAIN ANALYZE
SELECT u.country, COUNT(*) AS order_count
FROM orders o
JOIN users u ON o.user_id = u.user_id
WHERE o.order_date >= '2024-01-01'
GROUP BY u.country
ORDER BY order_count DESC;

-- ต้องอ่านได้:
-- Seq Scan → ไม่ดี ควรมี Index Scan
-- Hash Join vs Nested Loop → Hash Join ดีกว่าสำหรับ large tables
-- Sort → ถ้าข้อมูลเยอะ อาจต้อง index
-- Actual Time vs Planning Time
</code></pre>
</div>

<h3>🔥 กลุ่มที่ 5: Data Quality & Edge Cases</h3>

<div class="interview-box">
🎤 <strong>Q13: หาข้อมูลซ้ำ (Duplicates) และลบออก</strong>
<br><br>
<pre><code class="language-sql">
-- หา duplicates
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- ลบ duplicates เก็บ row ที่ user_id น้อยที่สุด
DELETE FROM users
WHERE user_id NOT IN (
    SELECT MIN(user_id)
    FROM users
    GROUP BY email
);

-- วิธีที่ดีกว่า (ใช้ CTE)
WITH duplicates AS (
    SELECT user_id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) AS rn
    FROM users
)
DELETE FROM users 
WHERE user_id IN (SELECT user_id FROM duplicates WHERE rn > 1);
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q14: Handle NULL อย่างถูกต้อง</strong>
<br><br>
<pre><code class="language-sql">
-- ❌ พลาดบ่อย: NULL comparison
SELECT * FROM users WHERE country != 'Thailand';
-- จะไม่ได้ rows ที่ country IS NULL!

-- ✅ ถูกต้อง
SELECT * FROM users 
WHERE country != 'Thailand' OR country IS NULL;

-- ✅ ใช้ COALESCE
SELECT 
    user_id,
    COALESCE(country, 'Unknown') AS country,
    COALESCE(total_amount, 0) AS total_amount
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id;
</code></pre>
</div>

<h3>🔥 กลุ่มที่ 6: Advanced Patterns</h3>

<div class="interview-box">
🎤 <strong>Q15: Sessionization — แบ่ง user activity เป็น sessions (gap > 30 นาที = session ใหม่)</strong>
<br><br>
<pre><code class="language-sql">
WITH login_gaps AS (
    SELECT 
        user_id,
        login_timestamp,
        LAG(login_timestamp) OVER (
            PARTITION BY user_id ORDER BY login_timestamp
        ) AS prev_login,
        CASE 
            WHEN login_timestamp - LAG(login_timestamp) OVER (
                PARTITION BY user_id ORDER BY login_timestamp
            ) > INTERVAL '30 minutes'
            OR LAG(login_timestamp) OVER (
                PARTITION BY user_id ORDER BY login_timestamp
            ) IS NULL
            THEN 1 ELSE 0
        END AS new_session
    FROM user_activity
),
sessions AS (
    SELECT *,
        SUM(new_session) OVER (
            PARTITION BY user_id 
            ORDER BY login_timestamp
        ) AS session_id
    FROM login_gaps
)
SELECT 
    user_id,
    session_id,
    MIN(login_timestamp) AS session_start,
    MAX(login_timestamp) AS session_end,
    COUNT(*) AS events_in_session
FROM sessions
GROUP BY user_id, session_id;
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q16: Funnel Analysis</strong>
<br><br>
<pre><code class="language-sql">
WITH funnel AS (
    SELECT 
        COUNT(DISTINCT CASE WHEN event = 'page_view' 
              THEN user_id END) AS step1_view,
        COUNT(DISTINCT CASE WHEN event = 'add_to_cart' 
              THEN user_id END) AS step2_cart,
        COUNT(DISTINCT CASE WHEN event = 'checkout' 
              THEN user_id END) AS step3_checkout,
        COUNT(DISTINCT CASE WHEN event = 'purchase' 
              THEN user_id END) AS step4_purchase
    FROM user_events
    WHERE event_date >= CURRENT_DATE - INTERVAL '30 days'
)
SELECT 
    step1_view,
    step2_cart,
    ROUND(step2_cart::DECIMAL / NULLIF(step1_view, 0) * 100, 1) AS view_to_cart_pct,
    step3_checkout,
    ROUND(step3_checkout::DECIMAL / NULLIF(step2_cart, 0) * 100, 1) AS cart_to_checkout_pct,
    step4_purchase,
    ROUND(step4_purchase::DECIMAL / NULLIF(step1_view, 0) * 100, 1) AS overall_conversion_pct
FROM funnel;
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q17-20: Quick Fire Questions</strong>
<br><br>
<strong>Q17:</strong> INNER JOIN vs LEFT JOIN vs CROSS JOIN ต่างกันอย่างไร?
<br>→ INNER: เฉพาะ match, LEFT: ทุก row จากซ้าย + match จากขวา, CROSS: ทุก combination (Cartesian product)
<br><br>
<strong>Q18:</strong> WHERE vs HAVING ต่างกันอย่างไร?
<br>→ WHERE กรองก่อน GROUP BY, HAVING กรองหลัง GROUP BY (ใช้กับ aggregate functions)
<br><br>
<strong>Q19:</strong> UNION vs UNION ALL?
<br>→ UNION ลบ duplicate (ช้ากว่า), UNION ALL เก็บทั้งหมด (เร็วกว่า) — ใน production ใช้ UNION ALL เป็นหลัก
<br><br>
<strong>Q20:</strong> DELETE vs TRUNCATE vs DROP?
<br>→ DELETE: ลบ rows (can rollback, triggers fire), TRUNCATE: ลบทุก rows (เร็ว, reset identity), DROP: ลบทั้ง table
</div>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อยในห้องสัมภาษณ์:</strong>
<ul>
<li>ลืม GROUP BY เมื่อใช้ aggregate — "Column must appear in GROUP BY clause"</li>
<li>ใช้ WHERE กับ alias ของ Window Function — ต้องใช้ CTE ครอบก่อน</li>
<li>ไม่ handle NULL ใน JOIN, comparison, หรือ aggregation</li>
<li>เขียน SELECT * ในห้องสอบ — ต้องระบุ column เสมอ</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัดเพิ่มเติม:</strong>
<ol>
<li>เขียน SQL หา user ที่สั่งซื้อทุกเดือนในปี 2024 (Customers with orders every month)</li>
<li>เขียน SQL หา median ของ order total (ไม่ใช้ PERCENTILE_CONT)</li>
<li>เขียน query แสดง Year-over-Year growth by category</li>
</ol>
</div>
`
  },
  {
    number: 2,
    slug: 'python-interview',
    emoji: '🐍',
    title: 'Python Interview',
    content: `
<h2>🐍 Python Interview — Coding Challenges for Data Engineers</h2>

<p>Python interview สำหรับ DE <strong>ไม่เหมือน</strong> SWE ทั่วไป — ไม่ต้อง implement Red-Black Tree หรือ Dynamic Programming ระดับ Hard แต่ต้องเก่งเรื่อง <strong>data manipulation, file processing, ETL logic, และ testing</strong> มากกว่า พี่จะพาน้องลุยโจทย์ที่ออกจริงกัน</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> ในห้องสัมภาษณ์ Python ให้ทำตามลำดับ: 1) ถามคำถาม clarify 2) เขียน pseudocode/approach 3) code จริง 4) test ด้วย edge cases 5) วิเคราะห์ complexity
</div>

<h3>🔥 กลุ่มที่ 1: Data Processing & Manipulation</h3>

<div class="interview-box">
🎤 <strong>Q1: เขียนฟังก์ชัน flatten nested dictionary</strong>
<br><br>
<pre><code class="language-python">
def flatten_dict(d: dict, parent_key: str = '', sep: str = '.') -> dict:
    """
    Flatten a nested dictionary.
    
    Example:
        Input:  {'a': 1, 'b': {'c': 2, 'd': {'e': 3}}}
        Output: {'a': 1, 'b.c': 2, 'b.d.e': 3}
    """
    items = []
    for key, value in d.items():
        new_key = f"{parent_key}{sep}{key}" if parent_key else key
        if isinstance(value, dict):
            items.extend(flatten_dict(value, new_key, sep).items())
        elif isinstance(value, list):
            for i, item in enumerate(value):
                if isinstance(item, dict):
                    items.extend(
                        flatten_dict(item, f"{new_key}[{i}]", sep).items()
                    )
                else:
                    items.append((f"{new_key}[{i}]", item))
        else:
            items.append((new_key, value))
    return dict(items)


# Test
data = {
    'user': {
        'name': 'John',
        'address': {
            'city': 'Bangkok',
            'zip': '10110'
        },
        'tags': ['admin', 'active']
    },
    'score': 95
}
print(flatten_dict(data))
# {'user.name': 'John', 'user.address.city': 'Bangkok', 
#  'user.address.zip': '10110', 'user.tags[0]': 'admin',
#  'user.tags[1]': 'active', 'score': 95}
</code></pre>
<strong>💡 ต้องพูดได้:</strong> Time complexity O(n) โดย n = total number of leaf nodes, ใช้ recursion ระวัง stack overflow กับข้อมูลที่ nested ลึกมาก
</div>

<div class="interview-box">
🎤 <strong>Q2: Parse log file แล้วหา top 10 IP addresses</strong>
<br><br>
<pre><code class="language-python">
from collections import Counter
import re
from typing import List, Tuple


def parse_access_log(filepath: str, top_n: int = 10) -> List[Tuple[str, int]]:
    """
    Parse Apache/Nginx access log and return top N IP addresses.
    
    Log format: 
    192.168.1.1 - - [01/Jan/2024:00:00:01 +0700] "GET /api/data HTTP/1.1" 200 1234
    """
    ip_pattern = re.compile(r'^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})')
    ip_counter = Counter()
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            for line in f:  # ใช้ iterator ไม่โหลดทั้งไฟล์
                match = ip_pattern.match(line)
                if match:
                    ip_counter[match.group(1)] += 1
    except FileNotFoundError:
        raise FileNotFoundError(f"Log file not found: {filepath}")
    except PermissionError:
        raise PermissionError(f"No permission to read: {filepath}")
    
    return ip_counter.most_common(top_n)


# สำหรับไฟล์ขนาดใหญ่มาก ใช้ chunked reading
def parse_large_log(filepath: str, chunk_size: int = 8192) -> Counter:
    """Parse very large log files efficiently."""
    ip_pattern = re.compile(r'^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})')
    ip_counter = Counter()
    buffer = ''
    
    with open(filepath, 'r') as f:
        while True:
            chunk = f.read(chunk_size)
            if not chunk:
                break
            buffer += chunk
            lines = buffer.split('\\n')
            buffer = lines[-1]  # เก็บ incomplete line ไว้
            
            for line in lines[:-1]:
                match = ip_pattern.match(line)
                if match:
                    ip_counter[match.group(1)] += 1
    
    return ip_counter
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q3: Implement simple ETL pipeline class</strong>
<br><br>
<pre><code class="language-python">
import csv
import json
from datetime import datetime
from typing import List, Dict, Callable, Any
from dataclasses import dataclass, field


@dataclass
class ETLResult:
    records_read: int = 0
    records_written: int = 0
    records_failed: int = 0
    errors: List[str] = field(default_factory=list)
    start_time: datetime = field(default_factory=datetime.now)
    end_time: datetime = None

    @property
    def duration_seconds(self) -> float:
        if self.end_time:
            return (self.end_time - self.start_time).total_seconds()
        return 0


class SimpleETL:
    """
    Simple ETL pipeline with extract, transform, load pattern.
    Supports multiple transformations chained together.
    """
    
    def __init__(self):
        self._transformations: List[Callable] = []
        self._filters: List[Callable] = []
        self.result = ETLResult()
    
    def add_transform(self, func: Callable[[Dict], Dict]) -> 'SimpleETL':
        """Add a transformation function (chainable)."""
        self._transformations.append(func)
        return self
    
    def add_filter(self, func: Callable[[Dict], bool]) -> 'SimpleETL':
        """Add a filter function (chainable)."""
        self._filters.append(func)
        return self
    
    def extract_csv(self, filepath: str) -> List[Dict]:
        """Extract data from CSV file."""
        records = []
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                self.result.records_read += 1
                records.append(dict(row))
        return records
    
    def _apply_pipeline(self, records: List[Dict]) -> List[Dict]:
        """Apply all transformations and filters."""
        output = []
        for record in records:
            try:
                # Apply filters
                if all(f(record) for f in self._filters):
                    # Apply transformations
                    for transform in self._transformations:
                        record = transform(record)
                    output.append(record)
                    self.result.records_written += 1
            except Exception as e:
                self.result.records_failed += 1
                self.result.errors.append(
                    f"Error processing record: {e}"
                )
        return output
    
    def load_json(self, records: List[Dict], filepath: str) -> None:
        """Load data to JSON file."""
        processed = self._apply_pipeline(records)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(processed, f, indent=2, default=str)
        self.result.end_time = datetime.now()
    
    def run(self, source: str, destination: str) -> ETLResult:
        """Run the full ETL pipeline."""
        records = self.extract_csv(source)
        self.load_json(records, destination)
        return self.result


# Usage example
etl = SimpleETL()
etl.add_filter(lambda r: r.get('status') == 'active')
etl.add_transform(lambda r: {**r, 'name': r['name'].strip().title()})
etl.add_transform(lambda r: {**r, 'processed_at': datetime.now().isoformat()})

result = etl.run('users.csv', 'users_clean.json')
print(f"Read: {result.records_read}, Written: {result.records_written}, "
      f"Failed: {result.records_failed}, Duration: {result.duration_seconds}s")
</code></pre>
</div>

<h3>🔥 กลุ่มที่ 2: Data Structures & Algorithms (DE-focused)</h3>

<div class="interview-box">
🎤 <strong>Q4: Implement LRU Cache (ใช้ใน data pipeline caching)</strong>
<br><br>
<pre><code class="language-python">
from collections import OrderedDict
from typing import Any, Optional


class LRUCache:
    """
    LRU Cache implementation — ใช้บ่อยใน pipeline
    เพื่อ cache lookup table, API responses ฯลฯ
    """
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()
        self.hits = 0
        self.misses = 0
    
    def get(self, key: str) -> Optional[Any]:
        if key in self.cache:
            self.cache.move_to_end(key)  # O(1)
            self.hits += 1
            return self.cache[key]
        self.misses += 1
        return None
    
    def put(self, key: str, value: Any) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Remove LRU item
    
    @property
    def hit_rate(self) -> float:
        total = self.hits + self.misses
        return self.hits / total if total > 0 else 0.0
    
    def __len__(self):
        return len(self.cache)
    
    def __repr__(self):
        return (f"LRUCache(capacity={self.capacity}, size={len(self)}, "
                f"hit_rate={self.hit_rate:.2%})")


# Test
cache = LRUCache(3)
cache.put("user:1", {"name": "Alice"})
cache.put("user:2", {"name": "Bob"})
cache.put("user:3", {"name": "Charlie"})
cache.get("user:1")  # Access user:1 → moves to end
cache.put("user:4", {"name": "Dave"})  # Evicts user:2 (LRU)
assert cache.get("user:2") is None  # ✅ evicted
assert cache.get("user:1") is not None  # ✅ still here
</code></pre>
</div>

<div class="interview-box">
🎤 <strong>Q5: Merge sorted iterators (เหมือน merge phase ใน MapReduce)</strong>
<br><br>
<pre><code class="language-python">
import heapq
from typing import Iterator, List, TypeVar

T = TypeVar('T')


def merge_sorted_iterators(*iterators: Iterator) -> Iterator:
    """
    Merge multiple sorted iterators into one sorted iterator.
    Memory efficient — O(k) where k = number of iterators.
    
    Use case: merging sorted partition files in MapReduce.
    """
    heap = []
    
    for i, it in enumerate(iterators):
        try:
            value = next(it)
            heapq.heappush(heap, (value, i, it))
        except StopIteration:
            pass
    
    while heap:
        value, idx, it = heapq.heappop(heap)
        yield value
        try:
            next_value = next(it)
            heapq.heappush(heap, (next_value, idx, it))
        except StopIteration:
            pass


# Test
iter1 = iter([1, 4, 7, 10])
iter2 = iter([2, 5, 8, 11])
iter3 = iter([3, 6, 9, 12])

result = list(merge_sorted_iterators(iter1, iter2, iter3))
print(result)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
</code></pre>
<strong>💡 ต้องบอกได้:</strong> Time O(N log K), Space O(K) — ดีมากสำหรับ merge ไฟล์ sorted หลายๆ ไฟล์
</div>

<div class="interview-box">
🎤 <strong>Q6: Implement Rate Limiter (Token Bucket Algorithm)</strong>
<br><br>
<pre><code class="language-python">
import time
from threading import Lock


class TokenBucketRateLimiter:
    """
    Rate limiter using Token Bucket algorithm.
    Use case: API calls in ETL pipeline ป้องกัน rate limit.
    """
    
    def __init__(self, rate: float, capacity: int):
        self.rate = rate          # tokens per second
        self.capacity = capacity  # max tokens
        self.tokens = capacity
        self.last_refill = time.monotonic()
        self._lock = Lock()
    
    def _refill(self):
        now = time.monotonic()
        elapsed = now - self.last_refill
        new_tokens = elapsed * self.rate
        self.tokens = min(self.capacity, self.tokens + new_tokens)
        self.last_refill = now
    
    def acquire(self, tokens: int = 1) -> bool:
        """Try to acquire tokens. Returns True if allowed."""
        with self._lock:
            self._refill()
            if self.tokens >= tokens:
                self.tokens -= tokens
                return True
            return False
    
    def wait_and_acquire(self, tokens: int = 1) -> None:
        """Block until tokens are available."""
        while not self.acquire(tokens):
            time.sleep(1.0 / self.rate)


# Usage in ETL
limiter = TokenBucketRateLimiter(rate=10, capacity=20)  # 10 req/sec

def fetch_api_with_rate_limit(urls: list):
    results = []
    for url in urls:
        limiter.wait_and_acquire()
        # response = requests.get(url)
        # results.append(response.json())
    return results
</code></pre>
</div>

<h3>🔥 กลุ่มที่ 3: Testing & Code Quality</h3>

<div class="interview-box">
🎤 <strong>Q7: เขียน unit tests สำหรับ data validation function</strong>
<br><br>
<pre><code class="language-python">
import pytest
from datetime import datetime, date
from typing import Optional


def validate_user_record(record: dict) -> dict:
    """Validate and clean a user record. Raises ValueError if invalid."""
    errors = []
    
    # Required fields
    required = ['user_id', 'email', 'created_at']
    for field in required:
        if field not in record or record[field] is None:
            errors.append(f"Missing required field: {field}")
    
    # Email validation
    if 'email' in record and record['email']:
        if '@' not in record['email'] or '.' not in record['email']:
            errors.append(f"Invalid email: {record['email']}")
        record['email'] = record['email'].lower().strip()
    
    # Date parsing
    if 'created_at' in record and isinstance(record['created_at'], str):
        try:
            record['created_at'] = datetime.fromisoformat(
                record['created_at']
            )
        except ValueError:
            errors.append(f"Invalid date: {record['created_at']}")
    
    # Age validation
    if 'age' in record and record['age'] is not None:
        if not isinstance(record['age'], int) or record['age'] < 0 or record['age'] > 150:
            errors.append(f"Invalid age: {record['age']}")
    
    if errors:
        raise ValueError(f"Validation errors: {'; '.join(errors)}")
    
    return record


# ===== Unit Tests =====
class TestValidateUserRecord:
    
    def test_valid_record(self):
        record = {
            'user_id': 1,
            'email': 'Test@Example.COM',
            'created_at': '2024-01-15T10:30:00'
        }
        result = validate_user_record(record)
        assert result['email'] == 'test@example.com'
        assert isinstance(result['created_at'], datetime)
    
    def test_missing_required_field(self):
        with pytest.raises(ValueError, match="Missing required field"):
            validate_user_record({'user_id': 1})
    
    def test_invalid_email(self):
        with pytest.raises(ValueError, match="Invalid email"):
            validate_user_record({
                'user_id': 1, 
                'email': 'not-an-email',
                'created_at': '2024-01-15'
            })
    
    def test_invalid_age(self):
        with pytest.raises(ValueError, match="Invalid age"):
            validate_user_record({
                'user_id': 1,
                'email': 'a@b.com', 
                'created_at': '2024-01-15',
                'age': -5
            })
    
    def test_null_email(self):
        with pytest.raises(ValueError):
            validate_user_record({
                'user_id': 1,
                'email': None,
                'created_at': '2024-01-15'
            })
    
    @pytest.mark.parametrize("age", [0, 1, 50, 100, 150])
    def test_valid_ages(self, age):
        record = {
            'user_id': 1,
            'email': 'a@b.com',
            'created_at': '2024-01-15',
            'age': age
        }
        result = validate_user_record(record)
        assert result['age'] == age
</code></pre>
</div>

<h3>🔥 กลุ่มที่ 4: Concurrency & Performance</h3>

<div class="interview-box">
🎤 <strong>Q8: Process files concurrently</strong>
<br><br>
<pre><code class="language-python">
import concurrent.futures
import json
from pathlib import Path
from typing import List, Dict
from dataclasses import dataclass


@dataclass
class ProcessingResult:
    filename: str
    records: int
    status: str
    error: str = None


def process_single_file(filepath: Path) -> ProcessingResult:
    """Process a single JSON file."""
    try:
        with open(filepath, 'r') as f:
            data = json.load(f)
        
        # Simulate processing
        cleaned = [
            {k: v for k, v in record.items() if v is not None}
            for record in data
        ]
        
        output_path = filepath.parent / 'processed' / filepath.name
        output_path.parent.mkdir(exist_ok=True)
        
        with open(output_path, 'w') as f:
            json.dump(cleaned, f)
        
        return ProcessingResult(
            filename=filepath.name,
            records=len(cleaned),
            status='success'
        )
    except Exception as e:
        return ProcessingResult(
            filename=filepath.name,
            records=0,
            status='failed',
            error=str(e)
        )


def process_files_concurrent(
    directory: str, 
    max_workers: int = 4
) -> List[ProcessingResult]:
    """Process multiple files concurrently using ThreadPoolExecutor."""
    files = list(Path(directory).glob('*.json'))
    results = []
    
    with concurrent.futures.ThreadPoolExecutor(
        max_workers=max_workers
    ) as executor:
        future_to_file = {
            executor.submit(process_single_file, f): f 
            for f in files
        }
        
        for future in concurrent.futures.as_completed(future_to_file):
            result = future.result()
            results.append(result)
            print(f"[{result.status}] {result.filename}: "
                  f"{result.records} records")
    
    success = sum(1 for r in results if r.status == 'success')
    failed = sum(1 for r in results if r.status == 'failed')
    print(f"\\nTotal: {len(results)}, Success: {success}, Failed: {failed}")
    
    return results
</code></pre>
<strong>💡 ต้องตอบได้:</strong> ใช้ ThreadPool สำหรับ I/O-bound, ProcessPool สำหรับ CPU-bound, GIL ทำให้ threading ไม่ช่วย CPU-bound
</div>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>ไม่ handle exceptions ใน concurrent code → process ค้างหรือ crash</li>
<li>ใช้ mutable default arguments (เช่น def f(lst=[])) → shared state bug</li>
<li>ลืม close file handles / connections → resource leak</li>
<li>ไม่เขียน type hints → interviewer มองว่า code quality ต่ำ</li>
</ul>
</div>

<h3>🧠 วิธีคิด: Framework ในการแก้ปัญหา</h3>

<div class="tip-box">
🧠 <strong>วิธีคิด UMPIRE:</strong>
<ol>
<li><strong>U</strong>nderstand — ถามคำถาม, ยืนยัน input/output</li>
<li><strong>M</strong>atch — จับคู่กับ pattern ที่รู้จัก (hash map, sorting, etc.)</li>
<li><strong>P</strong>lan — วาง pseudocode, อธิบาย approach</li>
<li><strong>I</strong>mplement — เขียน code จริง</li>
<li><strong>R</strong>eview — ตรวจ edge cases</li>
<li><strong>E</strong>valuate — วิเคราะห์ Time/Space complexity</li>
</ol>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>เขียน function ที่อ่าน CSV file แล้ว deduplicate by email (เก็บ record ล่าสุด)</li>
<li>Implement simple schema validator ที่รับ schema dict กับ data dict แล้ว validate type ของแต่ละ field</li>
<li>เขียน decorator ที่ retry function 3 ครั้ง กับ exponential backoff</li>
</ol>
</div>
`
  },
  {
    number: 3,
    slug: 'system-design',
    emoji: '🏗️',
    title: 'System Design',
    content: `
<h2>🏗️ System Design — Pipeline Design & Trade-offs</h2>

<p>System Design คือรอบที่ <strong>แยก Junior ออกจาก Senior</strong> — ไม่มีคำตอบถูกผิด 100% แต่ interviewer ดูว่าน้องคิดเป็นระบบหรือเปล่า รู้จัก trade-offs ไหม และ communicate ได้ชัดแค่ไหน ถ้าน้องผ่านรอบนี้ได้ดี โอกาสได้ offer จะสูงมาก</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <strong>Framework 4 ขั้นตอน</strong> เสมอ: 1) Clarify Requirements 2) High-Level Design 3) Deep Dive 4) Wrap Up & Trade-offs — อย่าโดดไปเขียน architecture เลย!
</div>

<h3>📋 System Design Framework สำหรับ DE</h3>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────┐
│           DE System Design Framework (45 min)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Step 1: Clarify Requirements (5 min)                   │
│  ├─ Data volume? (GB/day? TB/day?)                     │
│  ├─ Latency requirements? (Real-time? Hourly? Daily?)  │
│  ├─ Data sources? (APIs, DBs, Files, Streaming?)       │
│  ├─ End users? (Analysts, ML models, Dashboards?)      │
│  └─ SLA? (99.9%? Reprocessing needs?)                  │
│                                                         │
│  Step 2: High-Level Design (10 min)                     │
│  ├─ Draw source → ingestion → processing → serving     │
│  ├─ Choose batch vs streaming vs hybrid                │
│  ├─ Pick storage layer (Lake, Warehouse, Both)         │
│  └─ Define data model (Star, OBT, etc.)                │
│                                                         │
│  Step 3: Deep Dive (20 min)                             │
│  ├─ Ingestion: how to handle schema changes?           │
│  ├─ Processing: idempotency, exactly-once?             │
│  ├─ Quality: validation, monitoring, alerting          │
│  ├─ Scaling: partitioning, parallelism                 │
│  └─ Recovery: backfill, dead letter queue              │
│                                                         │
│  Step 4: Wrap Up (10 min)                               │
│  ├─ Trade-offs summary                                 │
│  ├─ What would you do differently with more time?      │
│  ├─ Monitoring & observability                         │
│  └─ Cost considerations                                │
│                                                         │
└─────────────────────────────────────────────────────────┘
</code></pre>

<h3>🎯 Design Question 1: Real-time Analytics Pipeline</h3>

<div class="interview-box">
🎤 <strong>"ออกแบบ pipeline สำหรับ real-time dashboard ของ e-commerce ที่แสดง revenue, active users, top products — update ทุก 5 วินาที"</strong>
</div>

<h4>Step 1: Clarify</h4>
<pre><code class="language-yaml">
clarifying_questions:
  - "Data volume: เท่าไหร่ events/sec?" → 50K events/sec peak
  - "Latency: ยอมรับ delay ได้เท่าไหร่?" → ≤ 10 seconds
  - "History: ต้องการ historical data ด้วยไหม?" → Yes, 90 days
  - "Accuracy: ยอมรับ approximate ได้ไหม?" → Active users ได้, revenue ต้อง exact
</code></pre>

<h4>Step 2: High-Level Architecture</h4>
<pre><code class="language-text">
┌──────────┐    ┌──────────┐    ┌───────────┐    ┌──────────┐
│  Web App │───>│  Kafka   │───>│  Flink    │───>│  Redis   │──> Dashboard
│  Mobile  │    │ (Events) │    │ (Process) │    │ (Cache)  │   (WebSocket)
└──────────┘    └────┬─────┘    └─────┬─────┘    └──────────┘
                     │                │
                     v                v
               ┌──────────┐    ┌──────────┐
               │   S3     │    │ ClickHouse│──> Ad-hoc queries
               │ (Raw)    │    │ (OLAP)   │
               └──────────┘    └──────────┘
</code></pre>

<h4>Step 3: Deep Dive</h4>

<pre><code class="language-python">
# Flink Processing Logic (Pseudocode)
"""
Stream Processing Pipeline:

1. Source: Kafka Consumer
   - Topic: 'user_events'  
   - Deserialization: JSON
   - Watermark: 10 seconds (allowed lateness)

2. Transformations:
   a. Filter invalid events (missing user_id, timestamp)
   b. Enrich with user dimension (async lookup from Redis)
   c. Compute windows:
      - Tumbling Window 5s: current metrics
      - Sliding Window 1h: trending products
      - Session Window 30min: active users

3. Aggregations per window:
   - Revenue: SUM(amount) — exact, use DECIMAL
   - Active Users: COUNT(DISTINCT user_id) — HyperLogLog OK
   - Top Products: TopN aggregation

4. Sinks:
   - Redis: current metrics (TTL 60s)
   - ClickHouse: historical aggregates
   - S3: raw events (Parquet, partitioned by date/hour)
"""

# Data Quality Rules
quality_rules = {
    "completeness": {
        "required_fields": ["event_id", "user_id", "timestamp", "event_type"],
        "action": "route_to_dead_letter_queue"
    },
    "timeliness": {
        "max_delay_seconds": 300,  # events > 5 min old → flag
        "action": "process_but_flag"
    },
    "uniqueness": {
        "dedup_key": "event_id",
        "dedup_window": "1 hour",
        "action": "skip_duplicate"
    }
}
</code></pre>

<h4>Step 4: Trade-offs</h4>

<table>
<thead>
<tr><th>Decision</th><th>เลือก</th><th>ข้อดี</th><th>ข้อเสีย</th></tr>
</thead>
<tbody>
<tr><td>Stream Processing</td><td>Flink</td><td>Low latency, exactly-once</td><td>Complex, ต้อง manage cluster</td></tr>
<tr><td>Message Queue</td><td>Kafka</td><td>Durable, replayable</td><td>Operational overhead</td></tr>
<tr><td>Real-time Store</td><td>Redis</td><td>Ultra-fast reads</td><td>Limited storage, cost</td></tr>
<tr><td>OLAP Store</td><td>ClickHouse</td><td>Fast aggregations</td><td>Not good for updates</td></tr>
</tbody>
</table>

<h3>🎯 Design Question 2: Data Lake Architecture</h3>

<div class="interview-box">
🎤 <strong>"ออกแบบ Data Lake สำหรับบริษัทที่มี 50 data sources, 200 analysts, data 10TB/day"</strong>
</div>

<pre><code class="language-text">
Data Lake Architecture (Medallion / Multi-Hop)

┌─────────────────────────────────────────────────────────────────┐
│                        DATA SOURCES                             │
│  [MySQL] [PostgreSQL] [APIs] [Kafka] [S3 Files] [SaaS Apps]   │
└──────────────┬──────────────────────────────────────────────────┘
               │
               v
┌──────────────────────────────┐
│     INGESTION LAYER          │
│  ┌─────────┐  ┌───────────┐ │
│  │  Airbyte │  │  Kafka    │ │
│  │  (Batch) │  │  Connect  │ │
│  └─────────┘  └───────────┘ │
└──────────────┬───────────────┘
               │
    ┌──────────┼──────────┐
    v          v          v
┌────────┐ ┌────────┐ ┌────────┐
│ BRONZE │ │ SILVER │ │  GOLD  │
│ (Raw)  │ │(Clean) │ │(Business│
│        │ │        │ │ Ready)  │
│ S3/    │ │ Delta  │ │ Delta  │
│ Parquet│ │ Lake   │ │ Lake   │
│        │ │        │ │        │
│ Schema │ │ Dedup, │ │ Star   │
│ on Read│ │ Type   │ │ Schema │
│        │ │ Cast,  │ │ Agg    │
│        │ │ Clean  │ │ Tables │
└────────┘ └────────┘ └────┬───┘
                           │
                    ┌──────┼──────┐
                    v      v      v
              ┌──────┐ ┌─────┐ ┌──────┐
              │  BI  │ │ ML  │ │  API │
              │Tools │ │Train│ │Serving│
              └──────┘ └─────┘ └──────┘
</code></pre>

<pre><code class="language-python">
# Medallion Architecture Implementation with dbt + Airflow

# Bronze Layer — Raw Ingestion
"""
- Format: Parquet (append-only)
- Partitioning: date/source_system
- Schema: schema-on-read, keep ALL fields
- Retention: 1 year
- No transformations, just raw data
"""

# Silver Layer — Cleaned & Conformed
"""
- Deduplication: based on primary key + updated_at
- Data types: cast to correct types
- Null handling: COALESCE, default values
- Naming: snake_case, consistent naming convention
- SCD Type 2: for dimension tables
- Quality checks: Great Expectations / dbt tests
"""

# Gold Layer — Business-Ready
"""
- Star Schema: fact + dimension tables
- Pre-aggregated: daily, weekly, monthly
- Business logic: revenue recognition, user segmentation
- Access control: column-level, row-level security
- Performance: materialized views, indexes
"""

# dbt model example (Silver layer)
# models/silver/users_cleaned.sql
silver_users_sql = """
WITH source AS (
    SELECT * FROM {{ source('bronze', 'raw_users') }}
),
deduped AS (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY user_id 
            ORDER BY _ingested_at DESC
        ) AS rn
    FROM source
),
cleaned AS (
    SELECT
        user_id,
        LOWER(TRIM(email)) AS email,
        COALESCE(NULLIF(TRIM(name), ''), 'Unknown') AS name,
        CAST(created_at AS TIMESTAMP) AS created_at,
        COALESCE(country, 'Unknown') AS country,
        _ingested_at
    FROM deduped
    WHERE rn = 1
)
SELECT * FROM cleaned
"""
</code></pre>

<h3>🎯 Design Question 3: CDC Pipeline</h3>

<div class="interview-box">
🎤 <strong>"ออกแบบ Change Data Capture (CDC) pipeline จาก Production MySQL ไป Data Warehouse แบบ near real-time"</strong>
</div>

<pre><code class="language-text">
CDC Pipeline Architecture:

┌──────────┐    ┌───────────┐    ┌─────────┐    ┌───────────┐
│ MySQL    │───>│ Debezium  │───>│  Kafka  │───>│  Flink/   │
│ (Source) │    │ (CDC)     │    │         │    │  Spark    │
│          │    │           │    │         │    │ Streaming │
└──────────┘    └───────────┘    └────┬────┘    └─────┬─────┘
                                     │                │
                                     │           ┌────v─────┐
                                     │           │ BigQuery │
                                     │           │ / Redshift│
                                     │           └──────────┘
                                     v
                               ┌──────────┐
                               │  S3      │
                               │ (Archive)│
                               └──────────┘
</code></pre>

<pre><code class="language-python">
# Key Design Decisions for CDC Pipeline

cdc_design = {
    "capture_method": {
        "chosen": "Log-based CDC (Debezium)",
        "why": "No impact on source DB performance",
        "alternatives": [
            "Query-based (polling) — simpler but slower, impacts source",
            "Trigger-based — real-time but high overhead on source"
        ]
    },
    
    "schema_evolution": {
        "strategy": "Schema Registry (Confluent)",
        "handle_add_column": "Auto-add to target (backward compatible)",
        "handle_rename_column": "Manual migration required",
        "handle_delete_column": "Keep in target, mark as deprecated"
    },
    
    "exactly_once_delivery": {
        "approach": "Idempotent writes with primary key",
        "dedup_strategy": "MERGE/UPSERT based on PK + event timestamp",
        "example_sql": """
            MERGE INTO target t
            USING staging s
            ON t.id = s.id
            WHEN MATCHED AND s.updated_at > t.updated_at THEN
                UPDATE SET ...
            WHEN NOT MATCHED THEN
                INSERT ...
        """
    },
    
    "monitoring": {
        "lag_monitoring": "Kafka consumer lag < 1000",
        "data_freshness": "Max delay < 5 minutes",
        "row_count_reconciliation": "Source vs Target daily",
        "alerting": "PagerDuty for lag > 10 minutes"
    }
}
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อยใน System Design:</strong>
<ul>
<li><strong>ไม่ถาม requirements ก่อน</strong> — โดดไปวาด architecture เลย → interviewer ให้คะแนนต่ำ</li>
<li><strong>Over-engineering</strong> — ใช้ Kafka + Flink กับงานที่ cron job ธรรมดาก็พอ</li>
<li><strong>ไม่พูดถึง failure handling</strong> — ถ้า pipeline fail จะเกิดอะไร? retry? dead letter queue?</li>
<li><strong>ลืม monitoring</strong> — ทุก production system ต้องมี observability</li>
<li><strong>ไม่คิดเรื่อง cost</strong> — ถ้าพูด cost optimization ได้ → ดูเป็น Senior</li>
</ul>
</div>

<div class="tip-box">
🧠 <strong>วิธีคิด — Trade-off Cheat Sheet:</strong>
<table>
<thead><tr><th>Decision</th><th>Option A</th><th>Option B</th></tr></thead>
<tbody>
<tr><td>Processing</td><td>Batch (cheaper, simpler)</td><td>Streaming (faster, complex)</td></tr>
<tr><td>Storage</td><td>Data Lake (flexible, cheap)</td><td>Data Warehouse (fast, costly)</td></tr>
<tr><td>Format</td><td>Parquet (read-heavy)</td><td>Avro (write-heavy, schema evolution)</td></tr>
<tr><td>Consistency</td><td>Eventual (scalable)</td><td>Strong (correct but slower)</td></tr>
<tr><td>Orchestration</td><td>Airflow (mature, huge community)</td><td>Dagster (modern, better testing)</td></tr>
</tbody>
</table>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>ออกแบบ pipeline สำหรับ process clickstream data 1 billion events/day ไป data warehouse</li>
<li>ออกแบบ data quality monitoring system ที่ alert เมื่อข้อมูลผิดปกติ</li>
<li>ออกแบบ ML Feature Store ที่ serve features ได้ทั้ง batch และ real-time</li>
</ol>
</div>
`
  },
  {
    number: 4,
    slug: 'behavioral',
    emoji: '🗣️',
    title: 'Behavioral Interview',
    content: `
<h2>🗣️ Behavioral Interview — STAR Method & 15 คำถามพร้อมแนวตอบ</h2>

<p>หลายคนคิดว่า behavioral "ไม่สำคัญ" แต่ความจริงคือ <strong>มันเป็นรอบที่ทำให้คนตก offer มากที่สุด</strong> เพราะแม้ technical ดีมาก แต่ถ้า culture fit ไม่ผ่าน ก็ไม่ได้งาน Big Tech อย่าง Amazon เน้น behavioral มากถึง 50% ของ overall score!</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> เตรียม <strong>6-8 เรื่องจากประสบการณ์จริง</strong> ที่ cover หลาย themes (leadership, conflict, failure, collaboration, innovation) แล้ว reuse กับคำถามต่าง ๆ ไม่ต้องเตรียมเรื่องใหม่ทุกคำถาม
</div>

<h3>⭐ STAR Method — Framework ที่ต้องใช้</h3>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────┐
│                    STAR Method                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  S — Situation (10-15%)                                 │
│  ├─ ตั้งฉาก: ทีมอะไร? ทำอะไร? ขนาดไหน?                 │
│  └─ ให้ context แต่อย่ายาวเกิน                          │
│                                                         │
│  T — Task (10-15%)                                      │
│  ├─ หน้าที่ของเราคืออะไร?                               │
│  └─ เป้าหมายที่ต้องทำให้สำเร็จ                           │
│                                                         │
│  A — Action (60-70%) ⭐ ส่วนสำคัญที่สุด!                │
│  ├─ ทำอะไรบ้าง? (ใช้ "ผม/ฉัน" ไม่ใช่ "เรา")             │
│  ├─ ทำไมถึงเลือกทำแบบนั้น?                              │
│  ├─ มีอุปสรรคอะไร? แก้ยังไง?                            │
│  └─ ทำอะไรที่ beyond expectations?                       │
│                                                         │
│  R — Result (10-15%)                                    │
│  ├─ ผลลัพธ์เป็นยังไง? (ตัวเลขยิ่งดี!)                    │
│  └─ เรียนรู้อะไร? จะทำอะไรต่างถ้าทำใหม่?                 │
│                                                         │
└─────────────────────────────────────────────────────────┘

เวลาตอบ: 2-3 นาที/คำถาม (ไม่เกิน 4 นาที!)
</code></pre>

<h3>🔥 15 คำถาม Behavioral ยอดนิยมพร้อมแนวตอบ</h3>

<h4>Theme 1: Technical Challenge / Problem Solving</h4>

<div class="interview-box">
🎤 <strong>Q1: "Tell me about a time you faced a difficult technical challenge."</strong>
<br><br>
<strong>แนวตอบ (STAR):</strong>
<br><br>
<strong>S:</strong> "ที่บริษัทเดิม ผมดูแล data pipeline ที่ process ข้อมูล 500 ล้าน rows/วัน ด้วย Airflow + Spark"
<br>
<strong>T:</strong> "วันหนึ่ง pipeline เริ่ม fail เป็นระยะ ๆ ทำให้ dashboard ของ business team อัปเดตช้า ผมต้องหาสาเหตุและแก้ไขภายใน 2 วัน"
<br>
<strong>A:</strong> "ผม approach ปัญหาเป็นขั้นตอน: ก่อนอื่นผมดู logs ใน Airflow พบว่า Spark job OOM เป็น intermittent ผมวิเคราะห์ data profile พบว่ามี data skew — มี partition key บางตัวที่มีข้อมูลมากกว่าปกติ 100 เท่า ผมแก้โดยเพิ่ม salting technique ให้กับ skewed keys แล้วปรับ Spark configuration เพิ่ม shuffle partitions จาก 200 เป็น 2000 และเพิ่ม adaptive query execution"
<br>
<strong>R:</strong> "Pipeline กลับมา stable 100%, processing time ลดลง 40% จาก 6 ชั่วโมงเหลือ 3.5 ชั่วโมง และผมเขียน runbook ให้ทีมเพื่อ handle data skew ในอนาคต"
</div>

<div class="interview-box">
🎤 <strong>Q2: "Tell me about a time you had to make a decision with incomplete information."</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
<strong>S:</strong> "ต้องเลือกระหว่าง migrate ไป cloud A หรือ cloud B แต่ยังไม่มีข้อมูล cost projection ที่ชัดเจน"
<br>
<strong>T:</strong> "ต้องตัดสินใจภายใน 2 สัปดาห์เพราะ contract เดิมจะหมด"
<br>
<strong>A:</strong> "ผมทำ spike/POC เล็ก ๆ 3 วัน กับทั้งสอง cloud, สร้าง cost model จาก workload จริง 1 เดือน, ปรึกษากับ 3 tech leads ที่มีประสบการณ์ กับทำ weighted scoring matrix"
<br>
<strong>R:</strong> "เลือก cloud A — หลังจาก 6 เดือน cost ต่ำกว่า estimate 15% และทีมพอใจกับ developer experience"
</div>

<div class="interview-box">
🎤 <strong>Q3: "Describe a time you improved a process or system significantly."</strong>
<br><br>
<strong>Key points ที่ต้องพูด:</strong>
<ul>
<li>สังเกตปัญหาเอง ไม่ใช่ถูกสั่ง (shows initiative)</li>
<li>วัดผล before/after ด้วยตัวเลข</li>
<li>บอกว่า team ได้ประโยชน์อะไร</li>
</ul>
</div>

<h4>Theme 2: Collaboration & Communication</h4>

<div class="interview-box">
🎤 <strong>Q4: "Tell me about a time you had a disagreement with a teammate."</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
<strong>S:</strong> "ผมกับ Senior DE อีกคนไม่เห็นด้วยเรื่อง data modeling approach — ผมเสนอ Star Schema แต่เขาต้องการ One Big Table (OBT)"
<br>
<strong>A:</strong> "แทนที่จะเถียง ผมเสนอให้ทำ pros/cons analysis ด้วยกัน แล้วดู actual query patterns ของ analysts ปรากฏว่า 80% ของ queries เป็น simple aggregation ที่ OBT ตอบได้เร็วกว่า แต่ 20% ต้องการ flexibility ของ Star Schema"
<br>
<strong>R:</strong> "เราเลือก hybrid — Gold layer เป็น OBT สำหรับ common queries แต่มี Silver layer ที่เป็น normalized สำหรับ ad-hoc ทั้งสองฝ่ายพอใจ และ query performance ดีขึ้น 60%"
<br><br>
<strong>💡 Key:</strong> แสดงว่าเราใช้ data ตัดสินใจ ไม่ใช่ ego และหาทาง compromise ได้
</div>

<div class="interview-box">
🎤 <strong>Q5: "How do you explain technical concepts to non-technical stakeholders?"</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
"ผมใช้ <strong>analogy</strong> เสมอ ตัวอย่างเช่น ตอนอธิบาย data pipeline ให้ Marketing team ผมเปรียบเทียบกับ <strong>ระบบน้ำประปา</strong>: source คือแหล่งน้ำ, pipe คือท่อ, filter คือระบบกรอง, warehouse คือถังเก็บ — ถ้าท่อตัน (pipeline fail) น้ำก็ไม่ไหล (data ไม่ update) แต่เรามี valve (circuit breaker) ไม่ให้น้ำเสียปนเปื้อนทั้งระบบ. ผมเห็นว่า stakeholders เข้าใจทันทีและเริ่มใช้ analogy เดียวกันในการ communicate กับทีมอื่น"
</div>

<div class="interview-box">
🎤 <strong>Q6: "Tell me about a time you mentored or helped a junior team member."</strong>
<br><br>
<strong>Key points:</strong>
<ul>
<li>สอนวิธีคิด ไม่ใช่แค่ให้คำตอบ</li>
<li>ให้ feedback ที่ constructive</li>
<li>ผลลัพธ์: junior เติบโตอย่างไร</li>
</ul>
</div>

<h4>Theme 3: Failure & Learning</h4>

<div class="interview-box">
🎤 <strong>Q7: "Tell me about a time you failed."</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
<strong>S:</strong> "ผมเคย deploy pipeline ใหม่ที่ overwrite production table โดยไม่มี backup"
<br>
<strong>T:</strong> "ต้อง recover ข้อมูล 3 วันที่หายไป และต้องทำให้ไม่เกิดซ้ำ"
<br>
<strong>A:</strong> "ผมยอมรับความผิดทันที ไม่โทษคนอื่น แจ้ง manager ภายใน 10 นาที ทำ recovery จาก transaction log ภายใน 4 ชั่วโมง จากนั้นเสนอให้ทีมทำ: 1) mandatory staging environment 2) PR review สำหรับทุก production change 3) automated backup ก่อน deploy"
<br>
<strong>R:</strong> "ข้อมูลกลับมา 100%, ไม่เคยเกิดเหตุการณ์แบบนี้อีก และ 3 measures ที่เสนอกลายเป็น team standard"
<br><br>
<strong>💡 Key:</strong> แสดงว่ารับผิดชอบ, แก้ปัญหาเร็ว, เรียนรู้จากความผิดพลาด, ทำให้ระบบดีขึ้น
</div>

<div class="interview-box">
🎤 <strong>Q8: "Tell me about a time you received critical feedback."</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
"Manager feedback ว่า code ผมอ่านยาก ไม่มี documentation → ผมไม่ defensive แต่ขอตัวอย่างว่าจุดไหนที่อ่านยาก → เรียนรู้ว่า naming convention ผมไม่ consistent → เริ่มใช้ linter, เขียน docstring ทุก function, ทำ code review checklist → หลังจากนั้น 3 เดือน manager พูดว่า code quality ดีขึ้นมาก"
</div>

<h4>Theme 4: Leadership & Ownership</h4>

<div class="interview-box">
🎤 <strong>Q9: "Tell me about a time you took ownership beyond your role."</strong>
<br><br>
<strong>แนวตอบ:</strong>
<br>
"สังเกตว่า data quality issues เกิดซ้ำทุกสัปดาห์ → ไม่มีใครเป็น owner → ผมเสนอตัว own data quality project → สร้าง Great Expectations suite, Slack alerts, weekly report → data issues ลดลง 80% ใน 2 เดือน → กลายเป็น KPI ของทีม"
</div>

<div class="interview-box">
🎤 <strong>Q10: "Tell me about a time you had to prioritize between multiple urgent tasks."</strong>
<br><br>
<strong>Key framework:</strong>
<ul>
<li>ใช้ Impact vs Effort matrix</li>
<li>communicate กับ stakeholders ว่าอะไรจะ delay</li>
<li>delegate ถ้าเป็นไปได้</li>
<li>ตัดสินใจเร็ว ไม่ procrastinate</li>
</ul>
</div>

<h4>Theme 5: Amazon Leadership Principles (สำคัญมากถ้าสมัคร Amazon/AWS)</h4>

<div class="interview-box">
🎤 <strong>Q11: "Customer Obsession — Tell me about a time you went above and beyond for a customer/stakeholder."</strong>
<br><br>
<strong>Q12: "Dive Deep — Tell me about a time you had to dig deep into data to find the root cause."</strong>
<br><br>
<strong>Q13: "Bias for Action — Tell me about a time you made a decision quickly without having all the information."</strong>
<br><br>
<strong>Q14: "Earn Trust — Tell me about a time you had to earn trust from a skeptical stakeholder."</strong>
<br><br>
<strong>Q15: "Deliver Results — Tell me about a time you delivered a project under tight deadline."</strong>
</div>

<h3>🏗️ Story Bank — เตรียมเรื่องเล่า</h3>

<pre><code class="language-python">
# Template สำหรับเตรียม Story Bank
story_bank = [
    {
        "story_title": "Pipeline Performance Optimization",
        "situation": "Pipeline ช้า 6 ชั่วโมง, business ต้องการ < 2 ชั่วโมง",
        "task": "Optimize pipeline ภายใน 1 sprint",
        "action": [
            "Profile ทุก stage หา bottleneck",
            "พบ data skew ใน join operation",
            "Apply salting + repartition strategy",
            "เพิ่ม caching layer สำหรับ dimension tables"
        ],
        "result": "ลดเวลาจาก 6 ชม. เหลือ 1.5 ชม. (-75%)",
        "applicable_to": [
            "Technical Challenge",
            "Problem Solving", 
            "Deliver Results",
            "Dive Deep"
        ]
    },
    {
        "story_title": "Cross-team Data Platform Migration",
        "situation": "Migrate จาก on-premise ไป cloud, 5 ทีมใช้ data",
        "task": "Lead migration project, zero downtime",
        "action": [
            "Stakeholder meetings กับทุกทีม",
            "สร้าง migration plan 3 phases",
            "Dual-write strategy ระหว่าง migrate",
            "สร้าง runbook สำหรับ rollback"
        ],
        "result": "Migrate สำเร็จ 0 downtime, cost ลด 30%",
        "applicable_to": [
            "Leadership",
            "Collaboration",
            "Earn Trust",
            "Ownership"
        ]
    }
]
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li><strong>พูดว่า "เรา" แทน "ผม/ฉัน"</strong> — interviewer อยากรู้ว่า <em>คุณ</em> ทำอะไร ไม่ใช่ทีม</li>
<li><strong>ไม่มีตัวเลข</strong> — "ดีขึ้นมาก" vs "ลดลง 40%" → อันหลังทรงพลังกว่า</li>
<li><strong>เลือกเรื่องที่ตัวเองไม่ได้ทำจริง</strong> — interviewer จะถาม deep dive แล้วจับโกหกได้</li>
<li><strong>ตอบยาวเกิน 4 นาที</strong> — จะถูกตัด และดูไม่ดี</li>
<li><strong>ไม่เตรียม "คำถามกลับ"</strong> — ตอนถูกถามว่า "มีคำถามอะไรไหม?" → ต้องมีเสมอ!</li>
</ul>
</div>

<h3>❓ คำถามที่ควรถามกลับ Interviewer</h3>

<pre><code class="language-text">
คำถามที่ดี:
✅ "Data stack ของทีมตอนนี้เป็นยังไง? มีแผนจะเปลี่ยนอะไรใน 6 เดือนข้างหน้า?"
✅ "ทีม DE มีกี่คน? แบ่ง responsibility ยังไง?"
✅ "Biggest challenge ที่ทีมกำลังเผชิญตอนนี้คืออะไร?"
✅ "DE interact กับ team อื่น (DS, Analytics, SWE) ยังไง?"
✅ "What does success look like in the first 90 days?"

คำถามที่ไม่ควรถาม:
❌ "เงินเดือนเท่าไหร่?" (ถามตอน offer stage)
❌ "ต้องทำ on-call ไหม?" (ดูไม่ committed)
❌ "ทำงานกี่โมงถึงกี่โมง?" (ถามได้ แต่ต้อง phrase ให้ดี)
</code></pre>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>เขียน Story Bank 6 เรื่องของตัวเอง ใช้ STAR format</li>
<li>ฝึกเล่าแต่ละเรื่องให้จบใน 2-3 นาที จับเวลาจริง</li>
<li>ให้เพื่อนถามคำถาม follow-up — ฝึกตอบแบบ spontaneous</li>
<li>เตรียมคำถามกลับ 5 ข้อ สำหรับบริษัทที่อยากสมัคร</li>
</ol>
</div>
`
  },
  {
    number: 5,
    slug: 'resume-portfolio',
    emoji: '📄',
    title: 'Resume & Portfolio',
    content: `
<h2>📄 Resume & Portfolio — ATS-Friendly Resume & GitHub Portfolio</h2>

<p>Resume คือ <strong>"ประตูบานแรก"</strong> — ถ้า resume ไม่ผ่าน ATS (Applicant Tracking System) หรือ recruiter ดูแล้วไม่สนใจ ก็จะไม่มีโอกาสได้แสดงฝีมือ ไม่ว่า technical จะเก่งแค่ไหน ในสมัยนี้ <strong>75% ของ resume ถูก reject โดย ATS ก่อนถึงมือคน</strong> พี่จะสอนให้น้องทำ resume ที่ผ่าน ATS ได้ชัวร์</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> Recruiter ดู resume เฉลี่ย <strong>6-7 วินาที</strong> ต่อใบ! ดังนั้น resume ต้องอ่านง่าย, มีตัวเลข, และ highlight skills ที่ตรงกับ JD ชัดเจน
</div>

<h3>📋 ATS-Friendly Resume Structure</h3>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────┐
│                    RESUME STRUCTURE                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. HEADER (ชื่อ, ติดต่อ, LinkedIn, GitHub)              │
│                                                         │
│  2. PROFESSIONAL SUMMARY (2-3 บรรทัด)                   │
│     "Data Engineer with X years of experience           │
│      building scalable data pipelines processing        │
│      X million records/day using Spark, Airflow,        │
│      and cloud platforms (AWS/GCP)."                    │
│                                                         │
│  3. TECHNICAL SKILLS (จัดเป็นหมวด)                      │
│     Languages: Python, SQL, Scala                       │
│     Big Data: Spark, Kafka, Flink                       │
│     Cloud: AWS (S3, Glue, Redshift, EMR)                │
│     Tools: Airflow, dbt, Docker, Terraform              │
│     Databases: PostgreSQL, MongoDB, Redis               │
│                                                         │
│  4. EXPERIENCE (2-4 ตำแหน่งล่าสุด)                      │
│     แต่ละตำแหน่ง 3-5 bullet points                      │
│     ใช้ formula: Action Verb + Task + Impact(ตัวเลข)    │
│                                                         │
│  5. PROJECTS (ถ้าเป็น junior หรือ career changer)       │
│                                                         │
│  6. EDUCATION                                           │
│                                                         │
│  7. CERTIFICATIONS (ถ้ามี)                              │
│                                                         │
└─────────────────────────────────────────────────────────┘

📏 ความยาว:
  - Junior (0-3 ปี): 1 หน้า
  - Mid (3-7 ปี): 1-2 หน้า  
  - Senior (7+ ปี): 2 หน้า
</code></pre>

<h3>✍️ วิธีเขียน Bullet Points ที่ทรงพลัง</h3>

<pre><code class="language-text">
สูตร: [Strong Action Verb] + [สิ่งที่ทำ] + [ด้วยเครื่องมืออะไร] + [ผลลัพธ์ตัวเลข]

❌ แย่:
  "Responsible for data pipeline maintenance"
  "Worked on ETL processes"
  "Helped with data warehouse"

✅ ดี:
  "Designed and deployed 15+ automated ETL pipelines using 
   Airflow and Spark, processing 500M+ records/day with 99.9% uptime"
  
  "Reduced data warehouse query costs by 40% ($50K/month savings)
   by implementing partition pruning and materialized views in BigQuery"
  
  "Built real-time fraud detection pipeline using Kafka and Flink,
   processing 10K events/second with <2 second latency,
   preventing $2M+ in fraudulent transactions annually"
  
  "Led migration of 30+ legacy ETL jobs from on-premise Informatica
   to cloud-native Airflow + dbt stack, reducing processing time by 60%"
</code></pre>

<h3>📝 Action Verbs สำหรับ DE</h3>

<pre><code class="language-python">
action_verbs_by_category = {
    "building": [
        "Architected", "Built", "Designed", "Developed",
        "Engineered", "Implemented", "Created", "Deployed"
    ],
    "improving": [
        "Optimized", "Reduced", "Streamlined", "Accelerated",
        "Enhanced", "Improved", "Refactored", "Modernized"
    ],
    "leading": [
        "Led", "Spearheaded", "Mentored", "Coordinated",
        "Directed", "Managed", "Drove", "Championed"
    ],
    "analyzing": [
        "Analyzed", "Identified", "Diagnosed", "Investigated",
        "Evaluated", "Assessed", "Benchmarked", "Profiled"
    ],
    "automating": [
        "Automated", "Orchestrated", "Scheduled", "Programmed",
        "Scripted", "Configured", "Provisioned", "Containerized"
    ]
}
</code></pre>

<div class="warning-box">
⚠️ <strong>ATS Killers — สิ่งที่ทำให้ Resume ไม่ผ่าน ATS:</strong>
<ul>
<li>❌ ใช้ template ที่มีรูป, icons, หรือ columns ซับซ้อน</li>
<li>❌ ส่งเป็น PDF ที่ scan จากรูป (ต้องเป็น text-based PDF)</li>
<li>❌ ใช้ header/footer สำหรับข้อมูลสำคัญ (ATS อ่านไม่ได้)</li>
<li>❌ ไม่มี keywords จาก JD → ต้อง tailor ทุกครั้ง!</li>
<li>❌ ใช้ตาราง — ATS หลายตัวอ่านตารางไม่ได้</li>
<li>❌ ไม่ใส่ชื่อเต็มของ tool (เช่น ใส่แค่ "GCE" แทน "Google Compute Engine")</li>
</ul>
</div>

<h3>💻 GitHub Portfolio ที่โดดเด่น</h3>

<div class="tip-box">
💡 <strong>ทริค:</strong> Recruiter ดู GitHub จริง! โดยเฉพาะบริษัท tech สิ่งที่เขาดู: README quality, code organization, commit history, ความ consistent ของ activity
</div>

<h4>Portfolio Projects ที่ควรมี (เลือก 3-5 อัน):</h4>

<pre><code class="language-yaml">
recommended_projects:
  1_etl_pipeline:
    name: "End-to-End ETL Pipeline"
    tech: [Airflow, Python, PostgreSQL, Docker]
    description: >
      Pipeline ที่ extract ข้อมูลจาก API, 
      transform ด้วย Python, load ไป PostgreSQL
      deploy ด้วย Docker Compose
    must_have:
      - Docker Compose for easy setup
      - .env.example for configuration
      - Tests (pytest)
      - CI/CD (GitHub Actions)
      - Architecture diagram in README

  2_data_warehouse:
    name: "Data Warehouse with dbt"
    tech: [dbt, BigQuery/Snowflake, SQL]
    description: >
      Medallion architecture (Bronze→Silver→Gold)
      with dbt models, tests, and documentation
    must_have:
      - dbt project structure
      - Data quality tests
      - Generated documentation
      - Lineage graph screenshot

  3_streaming:
    name: "Real-time Data Pipeline"
    tech: [Kafka, Python, Docker]
    description: >
      Streaming pipeline ที่ process events
      real-time ด้วย Kafka
    must_have:
      - Docker Compose (Kafka + Zookeeper)
      - Producer and Consumer code
      - Schema Registry
      - Monitoring dashboard

  4_data_quality:
    name: "Data Quality Framework"
    tech: [Great Expectations, Python, Airflow]
    description: >
      Automated data quality checks
      with alerting

  5_web_scraping_pipeline:
    name: "Web Scraping to Dashboard"
    tech: [Scrapy, Airflow, Streamlit]
    description: >
      Scrape → Clean → Store → Visualize
      end-to-end project
</code></pre>

<h4>README Template ที่ดี:</h4>

<pre><code class="language-markdown">
# 🚀 Project Name

Brief description (1-2 sentences)

## 🏗️ Architecture
![Architecture Diagram](docs/architecture.png)

## ✨ Features
- Feature 1
- Feature 2

## 🛠️ Tech Stack
| Component | Technology |
|-----------|-----------|
| Orchestration | Airflow 2.x |
| Processing | Python 3.11 + Pandas |
| Storage | PostgreSQL 15 |
| Containerization | Docker |

## 🚀 Quick Start
<pre><code class="language-bash">git clone https://github.com/username/project
cd project
cp .env.example .env
docker-compose up -d
</code></pre>

## 📊 Data Model
(ERD diagram or description)

## 🧪 Testing
<pre><code class="language-bash">pytest tests/ -v
</code></pre>

## 📈 Results / Screenshots
(Dashboard screenshots, metrics)

## 🤔 Design Decisions
- Why Airflow over Prefect? → ...
- Why PostgreSQL over MongoDB? → ...

## 📝 Lessons Learned
- ...
</code></pre>

<h3>🔗 LinkedIn Optimization</h3>

<pre><code class="language-text">
LinkedIn Checklist สำหรับ DE:
✅ Professional photo (ไม่ต้องสูท แค่ดูเป็นมืออาชีพ)
✅ Headline: "Data Engineer | Python, SQL, Spark, Airflow | Building Scalable Data Pipelines"
   (ไม่ใช่แค่ "Data Engineer at XYZ")
✅ Summary: 3-4 paragraphs — What you do, Key achievements, What you're looking for
✅ Experience: เหมือน resume แต่ละเอียดกว่าได้
✅ Skills: ใส่ครบ 50 skills (มันช่วย search ranking)
✅ Recommendations: ขอจาก manager/colleagues อย่างน้อย 3 อัน
✅ Activity: แชร์บทความ, เขียน post สัปดาห์ละครั้ง
✅ Open to Work: เปิดแบบ "Recruiters only" (ไม่แสดงต่อทุกคน)
</code></pre>

<h3>📧 Cold Email / Message Template</h3>

<pre><code class="language-text">
Subject: Data Engineer interested in [Company]'s data platform

Hi [Name],

I'm a Data Engineer with [X] years of experience building 
data pipelines with [relevant tech stack]. I noticed [Company] 
is [specific thing you know about their data work — e.g., 
"migrating to a lakehouse architecture" or "building a 
real-time analytics platform"].

I recently [specific achievement relevant to them], and I'd 
love to learn more about the challenges your data team is 
tackling.

Would you be open to a 15-minute chat? I'm also happy to 
share some of my work: [GitHub link]

Best regards,
[Name]
</code></pre>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>เขียน resume ใหม่ตาม format ข้างบน — ทุก bullet point ต้องมีตัวเลข</li>
<li>สร้าง GitHub portfolio project 1 อัน แบบ end-to-end (README ต้องครบ)</li>
<li>อัปเดต LinkedIn: headline, summary, skills, ขอ recommendation 2 อัน</li>
<li>หา JD จากบริษัทที่อยากสมัคร แล้ว tailor resume ให้ match keywords</li>
</ol>
</div>
`
  },
  {
    number: 6,
    slug: 'mock-interview',
    emoji: '🎭',
    title: 'Mock Interview',
    content: `
<h2>🎭 Mock Interview — 3 รอบจำลองสมบูรณ์</h2>

<p>การเตรียมตัวที่ดีที่สุดคือ <strong>ซ้อมเหมือนจริง</strong> — รู้ทฤษฎีไม่พอ ต้อง "ฝึกพูด" ด้วย เพราะในห้องสัมภาษณ์จริงจะมีความกดดัน เวลาจำกัด และต้อง multitask ระหว่างคิด เขียน และพูด พร้อมกัน พี่จะจำลอง 3 รอบสัมภาษณ์ให้น้องฝึก พร้อมเฉลยละเอียด</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> ฝึกกับเพื่อน, หรืออัดวิดีโอตัวเอง แล้วดูย้อนหลัง — จะเห็นจุดที่ต้องปรับปรุงชัดเจน (พูดเร็วเกิน, ไม่มองกล้อง, ไม่ structure คำตอบ ฯลฯ)
</div>

<h3>🎬 Round 1: Technical Screen — SQL + Python (45 นาที)</h3>

<pre><code class="language-text">
Mock Interview Script — Round 1

[00:00-02:00] Introduction
Interviewer: "Hi, thanks for joining. I'm [name], a Senior DE 
at [company]. Today we'll do a 45-minute technical screen 
covering SQL and Python. Feel free to ask clarifying questions. 
Ready?"

[02:00-20:00] SQL Questions (2 questions, 9 min each)
[20:00-40:00] Python Questions (2 questions, 10 min each)  
[40:00-45:00] Your questions for me
</code></pre>

<h4>SQL Question 1 (9 minutes):</h4>

<div class="interview-box">
🎤 <strong>"Given a table of user transactions, find users whose spending increased every month for at least 3 consecutive months in 2024."</strong>

<pre><code class="language-sql">
-- Table: transactions(user_id, amount, transaction_date)

-- Step 1: Monthly spending per user
WITH monthly_spending AS (
    SELECT 
        user_id,
        DATE_TRUNC('month', transaction_date) AS month,
        SUM(amount) AS total_spent
    FROM transactions
    WHERE transaction_date >= '2024-01-01' 
      AND transaction_date < '2025-01-01'
    GROUP BY user_id, DATE_TRUNC('month', transaction_date)
),

-- Step 2: Compare with previous month
spending_with_prev AS (
    SELECT *,
        LAG(total_spent) OVER (
            PARTITION BY user_id ORDER BY month
        ) AS prev_month_spent,
        CASE 
            WHEN total_spent > LAG(total_spent) OVER (
                PARTITION BY user_id ORDER BY month
            ) THEN 1 ELSE 0
        END AS increased
    FROM monthly_spending
),

-- Step 3: Find consecutive increases (Island & Gap)
consecutive_groups AS (
    SELECT *,
        month - INTERVAL '1 month' * ROW_NUMBER() OVER (
            PARTITION BY user_id 
            ORDER BY month
        ) AS grp
    FROM spending_with_prev
    WHERE increased = 1
)

-- Step 4: Filter users with 3+ consecutive increases
SELECT DISTINCT user_id
FROM consecutive_groups
GROUP BY user_id, grp
HAVING COUNT(*) >= 3;
</code></pre>

<strong>💡 Scoring Rubric:</strong>
<ul>
<li>✅ ถาม clarifying question (NULL handling, timezone) → +1</li>
<li>✅ อธิบาย approach ก่อนเขียน → +1</li>
<li>✅ ใช้ CTE ทำ step-by-step → +1</li>
<li>✅ ใช้ Window Functions ถูกต้อง → +2</li>
<li>✅ Handle edge cases (first month has no LAG) → +1</li>
<li>✅ อธิบาย Island & Gap technique → +1</li>
</ul>
</div>

<h4>SQL Question 2 (9 minutes):</h4>

<div class="interview-box">
🎤 <strong>"Write a query to compute a 7-day rolling average of daily revenue, but only for business days (Mon-Fri)."</strong>

<pre><code class="language-sql">
WITH daily_revenue AS (
    SELECT 
        order_date,
        EXTRACT(DOW FROM order_date) AS day_of_week,
        SUM(total_amount) AS revenue
    FROM orders
    WHERE status = 'completed'
    GROUP BY order_date
),
business_days_only AS (
    SELECT 
        order_date,
        revenue,
        ROW_NUMBER() OVER (ORDER BY order_date) AS biz_day_num
    FROM daily_revenue
    WHERE day_of_week NOT IN (0, 6)  -- Exclude Sun(0), Sat(6)
)
SELECT 
    order_date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY biz_day_num
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7_biz_day_avg
FROM business_days_only
ORDER BY order_date;
</code></pre>
<strong>💡 Key insight:</strong> ต้องใช้ ROWS BETWEEN (ไม่ใช่ RANGE) กับ biz_day_num (ไม่ใช่ calendar date) เพราะ business days ไม่ต่อเนื่อง
</div>

<h4>Python Question 1 (10 minutes):</h4>

<div class="interview-box">
🎤 <strong>"Write a function that validates and transforms a batch of user records. Handle errors gracefully and return a report."</strong>

<pre><code class="language-python">
from dataclasses import dataclass, field
from typing import List, Dict, Tuple
from datetime import datetime
import re


@dataclass
class ValidationReport:
    total: int = 0
    valid: int = 0
    invalid: int = 0
    errors: Dict[str, List[str]] = field(default_factory=dict)


def process_user_batch(
    records: List[Dict]
) -> Tuple[List[Dict], ValidationReport]:
    """
    Validate and transform user records.
    Returns (valid_records, report).
    """
    report = ValidationReport(total=len(records))
    valid_records = []
    
    email_pattern = re.compile(
        r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    )
    
    for i, record in enumerate(records):
        record_errors = []
        
        # Validate required fields
        for field_name in ['user_id', 'email', 'name']:
            if not record.get(field_name):
                record_errors.append(f"Missing {field_name}")
        
        # Validate email format
        email = record.get('email', '')
        if email and not email_pattern.match(email):
            record_errors.append(f"Invalid email: {email}")
        
        # Validate age
        age = record.get('age')
        if age is not None:
            if not isinstance(age, (int, float)) or age < 0 or age > 150:
                record_errors.append(f"Invalid age: {age}")
        
        if record_errors:
            report.invalid += 1
            report.errors[f"record_{i}"] = record_errors
        else:
            # Transform
            transformed = {
                'user_id': record['user_id'],
                'email': record['email'].lower().strip(),
                'name': record['name'].strip().title(),
                'age': int(age) if age else None,
                'processed_at': datetime.utcnow().isoformat()
            }
            valid_records.append(transformed)
            report.valid += 1
    
    return valid_records, report


# Test
test_records = [
    {"user_id": 1, "email": " John@Gmail.COM ", "name": " john doe ", "age": 30},
    {"user_id": 2, "email": "invalid-email", "name": "Jane", "age": -5},
    {"user_id": None, "email": "test@test.com", "name": "Test"},
]

valid, report = process_user_batch(test_records)
print(f"Valid: {report.valid}, Invalid: {report.invalid}")
print(f"Errors: {report.errors}")
# Valid: 1, Invalid: 2
</code></pre>
</div>

<h4>Python Question 2 (10 minutes):</h4>

<div class="interview-box">
🎤 <strong>"Implement a retry decorator with exponential backoff for API calls."</strong>

<pre><code class="language-python">
import time
import functools
import logging
from typing import Type, Tuple

logger = logging.getLogger(__name__)


def retry_with_backoff(
    max_retries: int = 3,
    base_delay: float = 1.0,
    max_delay: float = 60.0,
    exceptions: Tuple[Type[Exception], ...] = (Exception,),
    backoff_factor: float = 2.0
):
    """
    Retry decorator with exponential backoff.
    
    Args:
        max_retries: Maximum number of retry attempts
        base_delay: Initial delay between retries (seconds)
        max_delay: Maximum delay cap (seconds)
        exceptions: Tuple of exceptions to catch
        backoff_factor: Multiplier for delay each retry
    """
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            delay = base_delay
            last_exception = None
            
            for attempt in range(max_retries + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    if attempt == max_retries:
                        logger.error(
                            f"{func.__name__} failed after "
                            f"{max_retries + 1} attempts: {e}"
                        )
                        raise
                    
                    logger.warning(
                        f"{func.__name__} attempt {attempt + 1} "
                        f"failed: {e}. Retrying in {delay:.1f}s..."
                    )
                    time.sleep(delay)
                    delay = min(delay * backoff_factor, max_delay)
            
            raise last_exception
        return wrapper
    return decorator


# Usage
@retry_with_backoff(
    max_retries=3,
    base_delay=1.0,
    exceptions=(ConnectionError, TimeoutError)
)
def fetch_api_data(url: str) -> dict:
    """Fetch data from API with retry."""
    import requests
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    return response.json()
</code></pre>
</div>

<h3>🎬 Round 2: System Design (45 นาที)</h3>

<pre><code class="language-text">
Mock Interview Script — Round 2

[00:00-02:00] Introduction
"Today we'll do a system design round. I'll give you a problem 
and we'll discuss the design together. There's no single right 
answer — I want to see how you think."

[02:00-07:00] Problem Statement & Clarification
[07:00-17:00] High-Level Design  
[17:00-37:00] Deep Dive
[37:00-42:00] Trade-offs & Wrap Up
[42:00-45:00] Questions
</code></pre>

<div class="interview-box">
🎤 <strong>"Design a data pipeline that processes clickstream data from a website with 10M daily active users. The data should power both real-time dashboards and daily batch reports."</strong>
<br><br>
<strong>แนวตอบ (สรุป):</strong>
<pre><code class="language-text">
Clarifications to ask:
- Events/sec at peak? → ~50K/sec
- Types of events? → page_view, click, scroll, purchase
- Real-time dashboard latency? → <30 seconds
- Batch report schedule? → Daily 6 AM
- Retention period? → Real-time: 7 days, Batch: 2 years
- Data governance requirements? → PII masking needed

Architecture:
[Client] → [API Gateway] → [Kafka] → [Flink (real-time)]  → [Redis] → [Dashboard]
                                    → [S3 Raw]             → [Spark (batch)] → [BigQuery] → [Reports]
                                    
Key Design Decisions:
1. Lambda Architecture (separate batch + speed layer)
2. Kafka for durability + replay capability  
3. Flink for real-time: windowed aggregations
4. Spark for batch: daily fact tables
5. PII masking at ingestion layer
6. Schema Registry for event evolution
</code></pre>
</div>

<h3>🎬 Round 3: Behavioral (30 นาที)</h3>

<pre><code class="language-text">
Mock Interview Script — Round 3

[00:00-02:00] Introduction & Rapport Building
[02:00-25:00] 4-5 Behavioral Questions (5 min each)
[25:00-30:00] Your Questions
</code></pre>

<div class="interview-box">
🎤 <strong>จำลองคำถาม 5 ข้อ:</strong>
<br><br>
<strong>Q1:</strong> "Walk me through a project you're most proud of." (5 min)
<br>→ ใช้ STAR, เน้น impact + ตัวเลข
<br><br>
<strong>Q2:</strong> "Tell me about a time you had to work with messy data." (5 min)
<br>→ เล่า approach: assess → clean → validate → document
<br><br>
<strong>Q3:</strong> "How do you handle a situation where stakeholders keep changing requirements?" (5 min)
<br>→ แสดง empathy + structured approach (document requirements, regular sync)
<br><br>
<strong>Q4:</strong> "Tell me about a time you had to learn a new technology quickly." (5 min)
<br>→ แสดง learning ability + resourcefulness
<br><br>
<strong>Q5:</strong> "Where do you see yourself in 3 years?" (3 min)
<br>→ แสดง ambition ที่ align กับบริษัท (IC track หรือ management track)
</div>

<h3>📊 Self-Assessment Scorecard</h3>

<pre><code class="language-text">
Mock Interview Scorecard (ให้คะแนนตัวเอง 1-5)

Technical Screen:
[ ] ถาม clarifying questions ก่อนเริ่ม?
[ ] อธิบาย approach ก่อน code?
[ ] Code ถูกต้องและ efficient?
[ ] Handle edge cases?
[ ] อธิบาย time/space complexity?
[ ] จบภายในเวลา?

System Design:
[ ] Clarify requirements (5 min)?
[ ] Draw clear high-level architecture?
[ ] Deep dive ที่ meaningful?
[ ] พูดถึง trade-offs?
[ ] พูดถึง monitoring & failure handling?
[ ] ตอบ follow-up questions ได้?

Behavioral:
[ ] ใช้ STAR method ชัดเจน?
[ ] มีตัวเลข/metrics ใน Result?
[ ] จบแต่ละคำตอบใน 2-3 นาที?
[ ] มีคำถามกลับที่ insightful?
[ ] แสดง self-awareness?

Overall:
[ ] Communication ชัดเจน?
[ ] มั่นใจแต่ไม่ arrogant?
[ ] ยิ้ม, eye contact, positive energy?
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อยในการซ้อม:</strong>
<ul>
<li>ซ้อมแค่ในหัว ไม่ได้ "พูดออกเสียง" จริง → ตอนจริงจะติดขัด</li>
<li>ไม่จับเวลา → ตอนจริง 45 นาทีหมดเร็วมาก</li>
<li>ไม่ฝึกเขียน code บน whiteboard/shared editor → typing ใน IDE ง่ายกว่ามาก</li>
<li>ซ้อมครั้งเดียวแล้วหยุด → ต้องซ้อมอย่างน้อย 3-5 ครั้ง</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>จับเวลา 45 นาทีแล้วทำ Round 1 (SQL + Python) ข้างบนให้ครบ — ห้ามดูเฉลย!</li>
<li>วาด System Design จากโจทย์ Round 2 บน whiteboard/กระดาษ</li>
<li>อัดวิดีโอตัวเองตอบ Behavioral 5 ข้อ แล้วดูย้อนหลัง ให้คะแนนตัวเอง</li>
<li>หาเพื่อน/mentor mock interview แล้วขอ feedback ตรง ๆ</li>
</ol>
</div>
`
  },
  {
    number: 7,
    slug: 'salary-career',
    emoji: '💰',
    title: 'Salary Negotiation & Career Growth',
    content: `
<h2>💰 Salary Negotiation & Career Growth</h2>

<p>น้องผ่านทุกรอบมาแล้ว 🎉 ตอนนี้คือ <strong>ช่วงที่สำคัญที่สุด</strong> — Salary Negotiation หลายคน "ขอบคุณ" แล้วรับ offer แรกเลย แต่ความจริง <strong>87% ของ hiring managers คาดหวังให้ negotiate</strong> ถ้าไม่ negotiate แสดงว่าน้องอาจกำลังทิ้งเงิน 10-30% บนโต๊ะ!</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> Negotiate ไม่ใช่เรื่อง "โลภ" — มันคือ <strong>professional skill</strong> ที่ทุกคนควรมี บริษัท budget ไว้สำหรับ negotiation อยู่แล้ว ถ้าน้อง negotiate อย่างมืออาชีพ บริษัทจะ respect มากขึ้น
</div>

<h3>💵 Salary Benchmark สำหรับ DE ในไทย (2024-2025)</h3>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────┐
│          DE Salary Benchmark (Thailand, THB/month)       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Junior DE (0-2 years)                                  │
│  ├─ Startup:     25,000 - 40,000                       │
│  ├─ Corporate:   30,000 - 50,000                       │
│  └─ Tech/MNC:    40,000 - 65,000                       │
│                                                         │
│  Mid-level DE (2-5 years)                               │
│  ├─ Startup:     45,000 - 70,000                       │
│  ├─ Corporate:   55,000 - 85,000                       │
│  └─ Tech/MNC:    70,000 - 120,000                      │
│                                                         │
│  Senior DE (5-8 years)                                  │
│  ├─ Startup:     70,000 - 100,000                      │
│  ├─ Corporate:   80,000 - 130,000                      │
│  └─ Tech/MNC:    100,000 - 180,000                     │
│                                                         │
│  Staff/Lead DE (8+ years)                               │
│  ├─ Corporate:   120,000 - 180,000                     │
│  └─ Tech/MNC:    150,000 - 250,000+                    │
│                                                         │
│  Singapore / Remote (for comparison)                    │
│  ├─ Mid:         SGD 6,000 - 10,000                    │
│  └─ Senior:      SGD 10,000 - 16,000                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
Note: ไม่รวม bonus, RSU, benefits
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อควรระวัง:</strong> ตัวเลขข้างบนเป็นค่าประมาณ ขึ้นอยู่กับหลายปัจจัย: industry, company size, funding stage, your skill set, และ market conditions ให้ใช้เป็น reference point ไม่ใช่ข้อเท็จจริงตายตัว
</div>

<h3>🎯 Negotiation Framework — PREP Method</h3>

<pre><code class="language-text">
PREP Method สำหรับ Salary Negotiation:

P — Prepare (ก่อนเจรจา)
├─ Research ตลาด: Glassdoor, levels.fyi, LinkedIn Salary
├─ รู้ range ของตำแหน่ง (min - mid - max)
├─ รู้ BATNA (Best Alternative) — มี offer อื่นไหม?
├─ กำหนด "walk-away number" — ต่ำกว่านี้ไม่รับ
└─ เตรียม justification: ทำไมคุณ deserve มากกว่า

R — Range (เสนอ range ไม่ใช่ตัวเลขเดียว)
├─ "Based on my research and experience, I'm looking 
│    for something in the range of X to Y"
├─ ตั้ง range ที่ low end = target ของคุณ
└─ อย่าพูดตัวเลขก่อน! ให้บริษัทเสนอก่อนถ้าทำได้

E — Evaluate (ประเมิน Total Compensation)
├─ Base salary
├─ Bonus (annual, sign-on)
├─ Equity/RSU (ถ้ามี)
├─ Benefits (insurance, WFH, learning budget)
├─ PTO/Leave
└─ Career growth opportunity

P — Professional (เจรจาอย่างมืออาชีพ)
├─ ขอบคุณ offer ก่อนเสมอ
├─ ไม่ ultimatum หรือ aggressive
├─ ใช้ "I" statements ไม่ใช่ demands
└─ Win-win mindset
</code></pre>

<h3>💬 Scripts สำหรับทุกสถานการณ์</h3>

<h4>สถานการณ์ 1: HR ถามเงินเดือนปัจจุบัน/ที่ต้องการ (Phone Screen)</h4>

<pre><code class="language-text">
❌ ไม่ดี: "ตอนนี้ได้ 50,000 ครับ"
→ ทำให้ anchor ที่ตัวเลขปัจจุบัน

❌ ไม่ดี: "ผม flexible ครับ"  
→ ให้อำนาจบริษัท 100%

✅ ดี (ถ้าถามเงินเดือนปัจจุบัน):
"I'd prefer to focus on the value I can bring to this role 
rather than my current compensation. Could you share the 
budgeted range for this position?"

✅ ดี (ถ้าถามที่ต้องการ):
"Based on my research and experience level, I'm targeting 
a total compensation in the range of [X] to [Y]. But I'm 
also very interested in the growth opportunity and would 
love to understand the full package."

✅ ดี (ภาษาไทย):
"ผมอยากให้โฟกัสที่คุณค่าที่ผมสามารถส่งมอบให้ตำแหน่งนี้มากกว่าครับ 
ไม่ทราบว่าทาง HR มี range ของตำแหน่งนี้ประมาณเท่าไหร่ครับ?"
</code></pre>

<h4>สถานการณ์ 2: ได้รับ Offer แล้ว ต้องการ Negotiate</h4>

<pre><code class="language-text">
Script (ทาง email ดีกว่า — ให้เวลาเรียบเรียง):

Subject: RE: Offer for Data Engineer Position

Hi [Recruiter Name],

Thank you so much for the offer! I'm really excited about 
the opportunity to join [Company] and work on [specific 
project/challenge you discussed].

After reviewing the offer and considering my experience 
in [specific skills], including [specific achievement 
with numbers], I was hoping we could discuss the base 
salary component.

Based on my market research and the value I believe I 
can bring — particularly my expertise in [relevant skill] 
which directly relates to [company's need] — I was hoping 
for a base salary closer to [target number].

I'm confident that I can make an immediate impact, and 
I'd love to find a package that works well for both of us.

Would you be open to discussing this?

Best regards,
[Name]
</code></pre>

<h4>สถานการณ์ 3: บริษัทบอกว่า "นี่คือ final offer"</h4>

<pre><code class="language-text">
"I understand and appreciate the transparency. If the base 
salary is fixed, would it be possible to explore other 
parts of the package?"

สิ่งที่ negotiate ได้นอกจาก base salary:
✅ Signing bonus (one-time)
✅ Annual bonus target (%)
✅ RSU/Stock options (vesting schedule)
✅ Remote work flexibility
✅ Learning & conference budget
✅ Start date (อาจจะขอเลื่อนเพื่อพักก่อน)
✅ Title (Senior vs. mid — affects future salary)
✅ Review timeline (6 months แทน 12 months)
✅ PTO/Leave days
✅ Relocation assistance
</code></pre>

<h3>🧠 วิธีคิด: Total Compensation Calculator</h3>

<pre><code class="language-python">
def compare_offers(offers: list) -> None:
    """Compare total compensation across multiple offers."""
    
    for offer in offers:
        annual_base = offer['monthly_base'] * 12
        annual_bonus = annual_base * offer.get('bonus_pct', 0) / 100
        signing = offer.get('signing_bonus', 0)
        rsu_annual = offer.get('rsu_total', 0) / offer.get('vesting_years', 4)
        benefits_value = offer.get('benefits_annual', 0)
        
        # First year TC
        tc_year1 = annual_base + annual_bonus + signing + rsu_annual + benefits_value
        
        # Annual TC (steady state, no signing)
        tc_annual = annual_base + annual_bonus + rsu_annual + benefits_value
        
        print(f"\\n{'='*50}")
        print(f"Company: {offer['company']}")
        print(f"  Base (annual):   {annual_base:>12,.0f} THB")
        print(f"  Bonus:           {annual_bonus:>12,.0f} THB")
        print(f"  Signing:         {signing:>12,.0f} THB")
        print(f"  RSU (annual):    {rsu_annual:>12,.0f} THB")
        print(f"  Benefits:        {benefits_value:>12,.0f} THB")
        print(f"  ─────────────────────────────")
        print(f"  Year 1 TC:       {tc_year1:>12,.0f} THB")
        print(f"  Annual TC:       {tc_annual:>12,.0f} THB")


# Example
offers = [
    {
        "company": "Big Corp",
        "monthly_base": 90000,
        "bonus_pct": 15,
        "signing_bonus": 100000,
        "rsu_total": 0,
        "benefits_annual": 50000
    },
    {
        "company": "Tech Startup",
        "monthly_base": 80000,
        "bonus_pct": 10,
        "signing_bonus": 0,
        "rsu_total": 800000,
        "vesting_years": 4,
        "benefits_annual": 30000
    },
    {
        "company": "MNC",
        "monthly_base": 100000,
        "bonus_pct": 20,
        "signing_bonus": 200000,
        "rsu_total": 1200000,
        "vesting_years": 4,
        "benefits_annual": 80000
    }
]
compare_offers(offers)
</code></pre>

<h3>📈 Career Growth Path สำหรับ DE</h3>

<pre><code class="language-text">
Data Engineering Career Ladder:

IC (Individual Contributor) Track:
├─ L1: Junior DE (0-2 yrs)
│   └─ Execute tasks, learn tools, write basic pipelines
├─ L2: DE (2-4 yrs)  
│   └─ Own end-to-end pipelines, mentor juniors
├─ L3: Senior DE (4-7 yrs)
│   └─ Design systems, influence tech decisions
├─ L4: Staff DE (7-10 yrs)
│   └─ Cross-team impact, define standards
└─ L5: Principal DE (10+ yrs)
    └─ Company-wide impact, industry thought leader

Management Track:
├─ Tech Lead (5-7 yrs)
│   └─ 50% hands-on, 50% people management
├─ Engineering Manager (7-10 yrs)
│   └─ People management, hiring, team performance
├─ Director of DE (10+ yrs)
│   └─ Multiple teams, strategy, budget
└─ VP of Data / CDO
    └─ C-suite, company data strategy

Specialist Tracks:
├─ Data Platform Engineer → Cloud/Infra specialization
├─ ML Engineer → Bridge between DE and DS
├─ Analytics Engineer → dbt, metrics, business-focused
└─ Data Architect → Enterprise data strategy
</code></pre>

<h3>🎯 สร้าง Career Growth Plan</h3>

<pre><code class="language-python">
# 90-Day Plan Template สำหรับงานใหม่
plan_90_days = {
    "days_1_30": {
        "theme": "Learn & Observe",
        "goals": [
            "เข้าใจ data architecture ปัจจุบัน",
            "รู้จักทุกคนในทีมและ stakeholders",
            "อ่าน documentation ทั้งหมด",
            "Setup dev environment",
            "Fix 2-3 small bugs/tasks → quick wins"
        ]
    },
    "days_31_60": {
        "theme": "Contribute",
        "goals": [
            "Own 1 pipeline end-to-end",
            "เข้าร่วม on-call rotation",
            "เสนอ improvement 1 อย่าง",
            "เขียน documentation ที่ขาด",
            "Build relationships กับ cross-team"
        ]
    },
    "days_61_90": {
        "theme": "Impact",
        "goals": [
            "Deliver 1 meaningful project",
            "Present tech talk หรือ share knowledge",
            "ตั้ง 6-month goals กับ manager",
            "Identify 1 strategic initiative to propose",
            "ขอ feedback จาก peers"
        ]
    }
}
</code></pre>

<h3>📚 Continuous Learning Roadmap</h3>

<pre><code class="language-yaml">
learning_roadmap:
  year_1:
    focus: "Foundation & Depth"
    skills:
      - Advanced SQL (optimization, internals)
      - Python (advanced patterns, testing)
      - One cloud platform deeply (AWS/GCP/Azure)
      - Airflow/Orchestration mastery
    certifications:
      - AWS Data Engineer Associate
      - OR GCP Professional Data Engineer
    community:
      - เข้า Meetup / Conference 2-3 ครั้ง
      - เขียน blog 1 บทความ/เดือน

  year_2:
    focus: "Breadth & Architecture"
    skills:
      - Streaming (Kafka, Flink)
      - Data Modeling (Kimball, Data Vault)
      - Infrastructure as Code (Terraform)
      - Cost optimization
    projects:
      - Lead 1 major project
      - Mentor 1 junior

  year_3:
    focus: "Leadership & Impact"
    skills:
      - System Design at scale
      - Cross-functional collaboration
      - Presentation & communication
      - Strategic thinking
    goals:
      - Tech talk at conference
      - Define team standards/best practices
      - Open source contribution
</code></pre>

<div class="tip-box">
💡 <strong>ทริค Career Growth:</strong>
<ul>
<li><strong>T-shaped skills:</strong> ลึก 1-2 อย่าง + กว้างหลายอย่าง ดีกว่า "เก่งทุกอย่างนิดหน่อย"</li>
<li><strong>จด impact ทุกเดือน:</strong> ตอน review/หางานใหม่ จะมีข้อมูลพร้อม</li>
<li><strong>Network is net worth:</strong> ไปงาน meetup, ช่วยคนในชุมชน, ตอบคำถามใน forum</li>
<li><strong>เปลี่ยนงานทุก 2-3 ปี</strong> (ในช่วง early career) → salary growth เฉลี่ย 20-40% ต่อครั้ง</li>
</ul>
</div>

<div class="warning-box">
⚠️ <strong>Red Flags เวลารับ Offer:</strong>
<ul>
<li>❌ กดดันให้ตอบภายใน 24 ชม. (ปกติ 3-7 วัน)</li>
<li>❌ Offer แค่ verbal ไม่มี written → ขอเป็นลายลักษณ์อักษรเสมอ</li>
<li>❌ เงินเดือน "ดี" แต่ทีมมี turnover สูง</li>
<li>❌ ไม่มี learning budget หรือ career growth path</li>
<li>❌ Interview process ไม่ professional → สะท้อน company culture</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
<li>Research เงินเดือน DE ในตลาด — ใช้ Glassdoor, LinkedIn Salary, levels.fyi</li>
<li>กำหนด "target salary" และ "walk-away number" ของตัวเอง</li>
<li>เขียน negotiation script สำหรับ 3 สถานการณ์ข้างบน</li>
<li>สร้าง 90-day plan สำหรับตำแหน่งที่ต้องการ</li>
<li>เขียน 3-year career roadmap ของตัวเอง</li>
</ol>
</div>

<div class="interview-box">
🎤 <strong>Final Wisdom — สิ่งที่พี่อยากฝากน้อง:</strong>
<br><br>
<ol>
<li><strong>Interview เป็น skill ที่ฝึกได้</strong> — ยิ่งซ้อมยิ่งเก่ง ไม่ต้องเป็น genius</li>
<li><strong>Rejection ≠ Failure</strong> — ทุกคนเคยถูก reject แม้แต่คนเก่งที่สุด มันคือ data point ไม่ใช่ verdict</li>
<li><strong>Prepare > Talent</strong> — คนที่เตรียมตัว 2 สัปดาห์ ชนะคนเก่งกว่าที่ไม่เตรียม ทุกครั้ง</li>
<li><strong>Your career is a marathon</strong> — ไม่ต้องรีบ ให้ consistent ในการเรียนรู้และเติบโต</li>
<li><strong>Help others</strong> — สอนคนอื่น ตอบคำถามใน community มันจะ come back สิบเท่า</li>
</ol>
<br>
<strong>ขอให้น้องประสบความสำเร็จทุกคนครับ! 🚀</strong>
</div>
`
  }
];
