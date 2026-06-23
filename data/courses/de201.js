export const chapters = [
  {
    number: 0,
    slug: 'intro',
    emoji: '🚀',
    title: 'ทบทวน DE201 (จาก Junior สู่ Mid)',
    content: `
<h2>🚀 ยินดีต้อนรับสู่ DE201 — ก้าวจาก Junior สู่ Mid-Level Data Engineer</h2>

<p>ถ้าคุณผ่าน DE101 มาแล้ว คุณรู้จัก SQL พื้นฐาน, ETL อย่างง่าย, Airflow เบื้องต้น และ dbt เบื้องต้น ตอนนี้คำถามคือ — <strong>อะไรที่ทำให้ Mid-Level DE ต่างจาก Junior?</strong></p>

<p>คำตอบไม่ใช่แค่ "รู้เครื่องมือมากขึ้น" แต่คือ <strong>ความสามารถในการออกแบบ, ตัดสินใจ, และรับผิดชอบระบบที่ทำงานจริงใน Production</strong> ได้</p>

<h3>📍 Junior vs Mid-Level — ความแตกต่างที่ชัดเจน</h3>

<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%;">
<tr style="background:#1a1a2e;color:#fff;">
  <th>หัวข้อ</th><th>Junior DE</th><th>Mid-Level DE</th>
</tr>
<tr><td><strong>SQL</strong></td><td>SELECT, JOIN, GROUP BY</td><td>Window Functions, Recursive CTE, Query Optimization</td></tr>
<tr><td><strong>Airflow</strong></td><td>DAG เดี่ยว, BashOperator</td><td>Dynamic DAGs, TaskGroups, Custom Sensors, SLA</td></tr>
<tr><td><strong>dbt</strong></td><td>Model + Test พื้นฐาน</td><td>Macros, Incremental Models, Snapshots, Packages</td></tr>
<tr><td><strong>Streaming</strong></td><td>ไม่เคยทำ</td><td>Kafka Architecture, Producer/Consumer Design</td></tr>
<tr><td><strong>Cloud</strong></td><td>กดปุ่มบน Console</td><td>IaC (Terraform), Multi-service Architecture</td></tr>
<tr><td><strong>CI/CD</strong></td><td>Deploy ด้วยมือ</td><td>Automated Pipeline, Testing, GitHub Actions</td></tr>
<tr><td><strong>Data Quality</strong></td><td>ตรวจแบบ ad-hoc</td><td>Systematic Monitoring, SLA/SLO, Alerting</td></tr>
<tr><td><strong>Security</strong></td><td>ไม่ค่อยคิดถึง</td><td>PDPA/GDPR, Column-level encryption, IAM</td></tr>
</table>

<h3>🧠 วิธีคิด: The "Ownership Mindset"</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> Junior DE ได้รับ task แล้วทำ — Mid-Level DE มองภาพรวม ถามว่า "ทำไมเราถึงต้องทำแบบนี้?" และเสนอทางเลือกที่ดีกว่าได้ นี่คือ <strong>Ownership Mindset</strong> ที่ทุกบริษัทต้องการ
</div>

<h3>📋 สิ่งที่คุณจะได้เรียนใน DE201</h3>

<pre><code class="language-text">DE201 Course Roadmap
=====================

Chapter 1: Advanced SQL
  → Window Functions, Recursive CTE, Pivot/Unpivot
  → Query Optimization & Execution Plans

Chapter 2: Advanced Airflow
  → Dynamic DAGs, TaskGroups, Custom Sensors
  → XCom, Connection Management, SLA

Chapter 3: Advanced dbt
  → Jinja Macros, Incremental Models, Snapshots
  → dbt Packages, Custom Tests, Hooks

Chapter 4: Kafka & Streaming
  → Kafka Architecture (Brokers, Topics, Partitions)
  → Producer/Consumer Patterns, Schema Registry

Chapter 5: Cloud Architecture (GCP Deep Dive)
  → BigQuery Advanced, Dataflow, Pub/Sub
  → Cost Optimization, Multi-region Design

Chapter 6: CI/CD for Data
  → GitHub Actions for dbt & Airflow
  → Terraform for Infrastructure as Code

Chapter 7: Data Governance & Security
  → PDPA/GDPR Compliance
  → Column-level Security, Data Catalog

Chapter 8: Monitoring & Observability
  → Grafana Dashboards, SLA/SLO/SLI
  → Data Quality Monitoring, Alerting

Chapter 9: Intermediate Capstone Project
  → End-to-end Production Pipeline
  → Streaming + Batch + Monitoring</code></pre>

<h3>⚙️ Prerequisites Check</h3>

<p>ก่อนเริ่ม DE201 ลองเช็คว่าคุณมีพื้นฐานเหล่านี้:</p>

<pre><code class="language-python"># Self-assessment checklist
prerequisites = {
    "SQL": [
        "เขียน JOIN ได้ทั้ง INNER, LEFT, RIGHT, FULL",
        "ใช้ GROUP BY + HAVING ได้",
        "เข้าใจ Subquery vs CTE",
        "รู้จัก Data Types พื้นฐาน",
    ],
    "Python": [
        "เขียน function, class ได้",
        "ใช้ requests, json library ได้",
        "เข้าใจ try/except",
        "รู้จัก virtual environment",
    ],
    "Airflow": [
        "สร้าง DAG อย่างง่ายได้",
        "รู้จัก Operator พื้นฐาน",
        "เข้าใจ schedule_interval",
    ],
    "dbt": [
        "สร้าง model ได้",
        "เขียน test พื้นฐานได้",
        "รู้จัก ref() function",
    ],
    "Cloud": [
        "ใช้ GCP Console ได้",
        "รู้จัก BigQuery เบื้องต้น",
        "เข้าใจ concept ของ Cloud Storage",
    ],
}

# ถ้า check ได้ 80%+ → พร้อมเรียน DE201!
score = sum(len(v) for v in prerequisites.values())
print(f"Total checkpoints: {score}")
print("ถ้าผ่าน 80% ขึ้นไป → มาเริ่ม DE201 กันเลย! 🚀")</code></pre>

<h3>🗂️ Course Format & Structure</h3>

<p>ทุก chapter ใน DE201 จะมีโครงสร้างดังนี้:</p>

<ul>
  <li>🎯 <strong>Why This Matters</strong> — ทำไมหัวข้อนี้สำคัญในงานจริง</li>
  <li>📖 <strong>Core Concepts</strong> — ทฤษฎีและ concept สำคัญ</li>
  <li>💻 <strong>Hands-on Code</strong> — Production-grade code examples</li>
  <li>💡 <strong>Tips & Tricks</strong> — เทคนิคจากประสบการณ์จริง</li>
  <li>🧠 <strong>วิธีคิด</strong> — Framework ในการตัดสินใจ</li>
  <li>⚠️ <strong>Common Mistakes</strong> — ข้อผิดพลาดที่พบบ่อย</li>
  <li>📝 <strong>Exercises</strong> — แบบฝึกหัดพร้อมเฉลย</li>
  <li>🎤 <strong>Interview Questions</strong> — คำถามสัมภาษณ์งาน</li>
</ul>

<div class="warning-box">
<strong>⚠️ สิ่งที่ต้องระวัง:</strong> DE201 เป็นคอร์สที่เข้มข้นกว่า DE101 มาก — แต่ละ chapter จะมี code ที่ใกล้เคียง Production จริง ไม่ใช่ toy examples อีกต่อไป ถ้าติดตรงไหน ให้กลับไปทบทวน prerequisites ก่อนนะ
</div>

<h3>🎯 เป้าหมายหลังจบ DE201</h3>

<p>เมื่อคุณจบ DE201 คุณจะสามารถ:</p>

<ol>
  <li><strong>ออกแบบ Data Pipeline</strong> ที่ Production-ready ได้ด้วยตัวเอง</li>
  <li><strong>เขียน Advanced SQL</strong> ที่ optimize performance ได้</li>
  <li><strong>จัดการ Airflow + dbt</strong> ในระดับ intermediate-advanced</li>
  <li><strong>ทำ Streaming Pipeline</strong> ด้วย Kafka ได้</li>
  <li><strong>ออกแบบ Cloud Architecture</strong> บน GCP ที่ cost-effective</li>
  <li><strong>ตั้งค่า CI/CD</strong> สำหรับ Data Pipeline ได้</li>
  <li><strong>Implement Data Governance</strong> ตาม PDPA/GDPR ได้</li>
  <li><strong>สร้าง Monitoring Dashboard</strong> ที่ track SLA/SLO ได้</li>
  <li><strong>สัมภาษณ์งานตำแหน่ง Mid-Level DE</strong> ได้อย่างมั่นใจ</li>
</ol>

<div class="exercise-box">
<strong>📝 แบบฝึกหัดก่อนเริ่ม:</strong><br><br>
<strong>ลองตอบคำถามเหล่านี้:</strong><br>
1. ถ้าให้คุณออกแบบ pipeline สำหรับ e-commerce ที่มี 10M orders/day คุณจะเลือก batch หรือ streaming? ทำไม?<br>
2. Data Quality ควรตรวจที่ layer ไหนของ pipeline? มีกี่แบบ?<br>
3. PDPA ส่งผลต่อการออกแบบ Data Pipeline อย่างไร?<br><br>
<em>ถ้ายังตอบไม่ได้ — ไม่เป็นไร! หลังจบ DE201 คุณจะตอบได้ทุกข้อ 💪</em>
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์ที่มักถามตำแหน่ง Mid-Level DE:</strong><br><br>
<strong>Q: Junior กับ Mid-Level DE ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> Junior DE ทำ task ที่ได้รับมอบหมายได้ — Mid-Level DE มองภาพรวม ออกแบบ solution ได้เอง รู้จัก trade-offs ของแต่ละ approach สื่อสารกับ stakeholders ได้ และรับผิดชอบ pipeline ทั้ง lifecycle ตั้งแต่ design → deploy → monitor → maintain
</div>
`
  },
  {
    number: 1,
    slug: 'advanced-sql',
    emoji: '📊',
    title: 'Advanced SQL (Window Functions, Recursive CTE, Pivot)',
    content: `
<h2>📊 Advanced SQL — อาวุธลับของ Data Engineer ระดับ Mid</h2>

<p>ในงาน DE จริง คุณจะพบว่า <strong>80% ของ data transformation ทำด้วย SQL</strong> ไม่ใช่ Python ทำไม? เพราะ SQL ทำงานบน engine ของ database โดยตรง — เร็วกว่า pull data ออกมาแปลงด้วย Python เป็น 10-100 เท่า</p>

<p>แต่ SQL ที่ Junior DE เขียนกับที่ Mid-Level DE เขียนนั้นต่างกันราวฟ้ากับดิน เรามาดูกันว่า Advanced SQL มีอะไรบ้าง</p>

<h3>🪟 Window Functions — ทำ Analytics ระดับ Pro</h3>

<p>Window Functions คือ feature ที่ทรงพลังที่สุดใน SQL สมัยใหม่ — มันทำให้คุณคำนวณ <strong>across rows</strong> ได้โดยไม่ต้อง GROUP BY (ซึ่งจะ collapse rows)</p>

<div class="tip-box">
<strong>💡 ทริค:</strong> จำง่ายๆ — GROUP BY = "รวมแล้วยุบ" | Window Function = "รวมแต่ไม่ยุบ" ทุก row ยังอยู่ครบ แต่เพิ่มคอลัมน์ผลลัพธ์ใหม่เข้าไป
</div>

<pre><code class="language-sql">-- ============================================
-- Window Functions: Core Syntax
-- ============================================
-- function_name() OVER (
--   PARTITION BY column     -- แบ่งกลุ่ม (เหมือน GROUP BY แต่ไม่ยุบ)
--   ORDER BY column         -- เรียงลำดับภายในกลุ่ม
--   ROWS/RANGE frame        -- กำหนดขอบเขตของ window
-- )

-- ============================================
-- 1. ROW_NUMBER, RANK, DENSE_RANK
-- ============================================
-- สมมติเรามี table orders ของ e-commerce

SELECT
    order_id,
    customer_id,
    order_date,
    total_amount,
    
    -- ลำดับที่ของ order แต่ละ customer (เรียงตามวันที่)
    ROW_NUMBER() OVER (
        PARTITION BY customer_id 
        ORDER BY order_date
    ) AS order_sequence,
    
    -- อันดับยอดซื้อ (ถ้าเท่ากัน ข้ามอันดับ)
    RANK() OVER (
        PARTITION BY customer_id 
        ORDER BY total_amount DESC
    ) AS amount_rank,
    
    -- อันดับยอดซื้อ (ถ้าเท่ากัน ไม่ข้ามอันดับ)
    DENSE_RANK() OVER (
        PARTITION BY customer_id 
        ORDER BY total_amount DESC
    ) AS amount_dense_rank
    
FROM orders
WHERE order_date >= '2024-01-01';

-- ============================================
-- 2. LAG / LEAD — ดูข้อมูลแถวก่อน/หลัง
-- ============================================
-- Use case: คำนวณ day-over-day revenue change

SELECT
    sale_date,
    daily_revenue,
    
    -- Revenue ของวันก่อนหน้า
    LAG(daily_revenue, 1) OVER (ORDER BY sale_date) AS prev_day_revenue,
    
    -- Revenue ของวันถัดไป
    LEAD(daily_revenue, 1) OVER (ORDER BY sale_date) AS next_day_revenue,
    
    -- % เปลี่ยนแปลงจากวันก่อนหน้า
    ROUND(
        (daily_revenue - LAG(daily_revenue, 1) OVER (ORDER BY sale_date))
        / NULLIF(LAG(daily_revenue, 1) OVER (ORDER BY sale_date), 0) * 100,
        2
    ) AS pct_change
    
FROM daily_sales
ORDER BY sale_date;</code></pre>

<h3>📊 Running Totals & Moving Averages</h3>

<pre><code class="language-sql">-- ============================================
-- 3. Running Total & Moving Average
-- ============================================
-- Use case: Dashboard ยอดขายสะสม + ค่าเฉลี่ยเคลื่อนที่ 7 วัน

SELECT
    sale_date,
    daily_revenue,
    
    -- ยอดสะสมตั้งแต่ต้นเดือน (MTD - Month to Date)
    SUM(daily_revenue) OVER (
        PARTITION BY DATE_TRUNC('month', sale_date)
        ORDER BY sale_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS mtd_revenue,
    
    -- ค่าเฉลี่ยเคลื่อนที่ 7 วัน (7-day Moving Average)
    AVG(daily_revenue) OVER (
        ORDER BY sale_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS moving_avg_7d,
    
    -- ค่าเฉลี่ยเคลื่อนที่ 30 วัน
    AVG(daily_revenue) OVER (
        ORDER BY sale_date
        ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
    ) AS moving_avg_30d
    
FROM daily_sales
ORDER BY sale_date;

-- ============================================
-- 4. FIRST_VALUE / LAST_VALUE / NTH_VALUE
-- ============================================
-- Use case: หาสินค้าที่ขายดีที่สุด/แย่ที่สุดในแต่ละ category

SELECT
    category,
    product_name,
    total_sold,
    
    FIRST_VALUE(product_name) OVER (
        PARTITION BY category
        ORDER BY total_sold DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS best_seller,
    
    LAST_VALUE(product_name) OVER (
        PARTITION BY category
        ORDER BY total_sold DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS worst_seller,
    
    -- สินค้าที่ขายดีอันดับ 3
    NTH_VALUE(product_name, 3) OVER (
        PARTITION BY category
        ORDER BY total_sold DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS third_best
    
FROM product_sales;</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong> LAST_VALUE จะให้ค่าผิดถ้าไม่กำหนด frame เป็น <code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code> เพราะ default frame คือ <code>ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> ซึ่งจะทำให้ LAST_VALUE = current row เสมอ!
</div>

<h3>🔄 Recursive CTE — สำหรับ Hierarchical Data</h3>

<p>Recursive CTE ใช้สำหรับข้อมูลที่มีโครงสร้างแบบ tree เช่น organizational chart, category hierarchy, หรือ bill of materials</p>

<pre><code class="language-sql">-- ============================================
-- Recursive CTE: Organizational Hierarchy
-- ============================================

-- Table: employees
-- | emp_id | emp_name    | manager_id | department |
-- |--------|-------------|------------|------------|
-- | 1      | สมชาย (CEO)| NULL       | Executive  |
-- | 2      | สมหญิง     | 1          | Tech       |
-- | 3      | สมศักดิ์    | 1          | Sales      |
-- | 4      | สมปอง      | 2          | Tech       |
-- | 5      | สมใจ       | 2          | Tech       |
-- | 6      | สมบัติ      | 3          | Sales      |

WITH RECURSIVE org_tree AS (
    -- Base case: CEO (ไม่มี manager)
    SELECT 
        emp_id,
        emp_name,
        manager_id,
        department,
        0 AS level,
        emp_name::TEXT AS hierarchy_path,
        ARRAY[emp_id] AS path_ids
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: หา subordinates ทุกระดับ
    SELECT 
        e.emp_id,
        e.emp_name,
        e.manager_id,
        e.department,
        t.level + 1,
        t.hierarchy_path || ' → ' || e.emp_name,
        t.path_ids || e.emp_id
    FROM employees e
    INNER JOIN org_tree t ON e.manager_id = t.emp_id
)
SELECT 
    REPEAT('  ', level) || emp_name AS org_chart,
    level,
    hierarchy_path,
    department
FROM org_tree
ORDER BY path_ids;

-- ผลลัพธ์:
-- org_chart          | level | hierarchy_path              | department
-- สมชาย (CEO)       | 0     | สมชาย (CEO)                | Executive
--   สมหญิง          | 1     | สมชาย (CEO) → สมหญิง       | Tech
--     สมปอง          | 2     | สมชาย (CEO) → สมหญิง → สมปอง | Tech
--     สมใจ           | 2     | สมชาย (CEO) → สมหญิง → สมใจ  | Tech
--   สมศักดิ์          | 1     | สมชาย (CEO) → สมศักดิ์       | Sales
--     สมบัติ          | 2     | สมชาย (CEO) → สมศักดิ์ → สมบัติ | Sales</code></pre>

<h3>🔀 Recursive CTE: Date Series Generation</h3>

<pre><code class="language-sql">-- ============================================
-- Recursive CTE: สร้าง Date Dimension Table
-- ============================================
-- Use case: สร้างตาราง calendar สำหรับ join กับ fact tables

WITH RECURSIVE date_series AS (
    SELECT DATE '2024-01-01' AS dt
    UNION ALL
    SELECT dt + INTERVAL '1 day'
    FROM date_series
    WHERE dt < DATE '2024-12-31'
)
SELECT
    dt AS date_key,
    EXTRACT(YEAR FROM dt) AS year,
    EXTRACT(QUARTER FROM dt) AS quarter,
    EXTRACT(MONTH FROM dt) AS month,
    EXTRACT(DOW FROM dt) AS day_of_week,
    TO_CHAR(dt, 'Day') AS day_name,
    TO_CHAR(dt, 'Month') AS month_name,
    CASE 
        WHEN EXTRACT(DOW FROM dt) IN (0, 6) THEN TRUE 
        ELSE FALSE 
    END AS is_weekend,
    -- Thai fiscal year (ปีงบประมาณไทย เริ่ม ต.ค.)
    CASE 
        WHEN EXTRACT(MONTH FROM dt) >= 10 
        THEN EXTRACT(YEAR FROM dt) + 544 
        ELSE EXTRACT(YEAR FROM dt) + 543 
    END AS thai_fiscal_year
FROM date_series;</code></pre>

<h3>🔄 PIVOT / UNPIVOT — แปลง Rows ↔ Columns</h3>

<pre><code class="language-sql">-- ============================================
-- PIVOT: Rows → Columns (Cross-tab)
-- ============================================
-- Use case: แปลง monthly sales เป็น columns

-- วิธี Manual Pivot (ใช้ได้ทุก database)
SELECT
    product_name,
    SUM(CASE WHEN sale_month = 1 THEN revenue ELSE 0 END) AS jan,
    SUM(CASE WHEN sale_month = 2 THEN revenue ELSE 0 END) AS feb,
    SUM(CASE WHEN sale_month = 3 THEN revenue ELSE 0 END) AS mar,
    SUM(CASE WHEN sale_month = 4 THEN revenue ELSE 0 END) AS apr,
    SUM(CASE WHEN sale_month = 5 THEN revenue ELSE 0 END) AS may,
    SUM(CASE WHEN sale_month = 6 THEN revenue ELSE 0 END) AS jun,
    SUM(CASE WHEN sale_month = 7 THEN revenue ELSE 0 END) AS jul,
    SUM(CASE WHEN sale_month = 8 THEN revenue ELSE 0 END) AS aug,
    SUM(CASE WHEN sale_month = 9 THEN revenue ELSE 0 END) AS sep,
    SUM(CASE WHEN sale_month = 10 THEN revenue ELSE 0 END) AS oct,
    SUM(CASE WHEN sale_month = 11 THEN revenue ELSE 0 END) AS nov,
    SUM(CASE WHEN sale_month = 12 THEN revenue ELSE 0 END) AS dec_rev,
    SUM(revenue) AS total_year
FROM monthly_sales
WHERE sale_year = 2024
GROUP BY product_name
ORDER BY total_year DESC;

-- ============================================
-- BigQuery PIVOT syntax (native)
-- ============================================
SELECT *
FROM (
    SELECT product_name, sale_month, revenue
    FROM monthly_sales
    WHERE sale_year = 2024
)
PIVOT (
    SUM(revenue) 
    FOR sale_month IN (1 AS jan, 2 AS feb, 3 AS mar, 4 AS apr,
                       5 AS may, 6 AS jun, 7 AS jul, 8 AS aug,
                       9 AS sep, 10 AS oct, 11 AS nov, 12 AS dec_rev)
);

-- ============================================
-- UNPIVOT: Columns → Rows
-- ============================================
-- Use case: แปลง wide format เป็น long format สำหรับ analytics

SELECT product_name, month_name, revenue
FROM product_monthly_wide
UNPIVOT (
    revenue FOR month_name IN (
        jan, feb, mar, apr, may, jun,
        jul, aug, sep, oct, nov, dec_rev
    )
)
ORDER BY product_name, month_name;</code></pre>

<h3>⚡ Query Optimization Techniques</h3>

<pre><code class="language-sql">-- ============================================
-- Query Optimization: EXPLAIN ANALYZE
-- ============================================

-- ❌ Bad: Correlated subquery (ช้ามาก กับ table ใหญ่)
SELECT 
    o.order_id,
    o.total_amount,
    (SELECT AVG(total_amount) 
     FROM orders o2 
     WHERE o2.customer_id = o.customer_id) AS avg_customer_amount
FROM orders o;

-- ✅ Good: ใช้ Window Function แทน
SELECT 
    order_id,
    total_amount,
    AVG(total_amount) OVER (PARTITION BY customer_id) AS avg_customer_amount
FROM orders;

-- ============================================
-- Optimization: Materialized CTE (PostgreSQL 12+)
-- ============================================
-- Force PostgreSQL to materialize CTE (ป้องกัน query planner inline CTE)
WITH expensive_calc AS MATERIALIZED (
    SELECT 
        customer_id,
        COUNT(*) AS order_count,
        SUM(total_amount) AS lifetime_value,
        AVG(total_amount) AS avg_order_value
    FROM orders
    WHERE order_date >= '2024-01-01'
    GROUP BY customer_id
)
SELECT 
    c.customer_name,
    c.segment,
    ec.order_count,
    ec.lifetime_value,
    ec.avg_order_value
FROM customers c
JOIN expensive_calc ec ON c.customer_id = ec.customer_id
WHERE ec.lifetime_value > 100000;</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ใน BigQuery ให้ใช้ <code>EXPLAIN</code> (ไม่ใช่ EXPLAIN ANALYZE) เพื่อดู query plan ก่อน run จริง — จะได้เห็นว่ามันจะ scan กี่ bytes ช่วยประหยัดค่า query ได้เยอะมาก
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> เขียน SQL หายอดซื้อสะสม (running total) ของแต่ละ customer เรียงตาม order_date<br>
<strong>ข้อ 2:</strong> เขียน Recursive CTE หา category hierarchy ที่มี 4 ระดับ (Department → Category → Subcategory → Product)<br>
<strong>ข้อ 3:</strong> เขียน Pivot query แสดงยอดขายรายเดือนของแต่ละ region<br><br>
<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-sql">-- ข้อ 1
SELECT customer_id, order_date, total_amount,
  SUM(total_amount) OVER (
    PARTITION BY customer_id ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total
FROM orders;

-- ข้อ 2
WITH RECURSIVE cat_tree AS (
  SELECT id, name, parent_id, 0 AS level
  FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, ct.level + 1
  FROM categories c JOIN cat_tree ct ON c.parent_id = ct.id
  WHERE ct.level < 3
)
SELECT REPEAT('  ', level) || name AS hierarchy, level
FROM cat_tree ORDER BY id;

-- ข้อ 3
SELECT region,
  SUM(CASE WHEN EXTRACT(MONTH FROM sale_date) = 1 THEN amount ELSE 0 END) AS jan,
  SUM(CASE WHEN EXTRACT(MONTH FROM sale_date) = 2 THEN amount ELSE 0 END) AS feb,
  SUM(CASE WHEN EXTRACT(MONTH FROM sale_date) = 3 THEN amount ELSE 0 END) AS mar
FROM sales GROUP BY region;</code></pre>
</details>
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: ROW_NUMBER, RANK, DENSE_RANK ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> ROW_NUMBER ให้เลข unique ทุก row (1,2,3,4...) / RANK ให้เลขเท่ากันถ้าค่าเท่ากันแล้วข้ามอันดับ (1,2,2,4) / DENSE_RANK ให้เลขเท่ากันแต่ไม่ข้ามอันดับ (1,2,2,3)<br><br>
<strong>Q: เมื่อไหร่ควรใช้ Window Function แทน GROUP BY?</strong><br>
<strong>A:</strong> เมื่อต้องการผลลัพธ์ aggregate ร่วมกับ detail rows — เช่น แสดงยอดขายแต่ละ order พร้อมกับ % ของยอดรวมทั้ง customer
</div>
`
  },
  {
    number: 2,
    slug: 'advanced-airflow',
    emoji: '🌬️',
    title: 'Advanced Airflow (Dynamic DAGs, TaskGroups, Sensors)',
    content: `
<h2>🌬️ Advanced Airflow — จัดการ Pipeline ระดับ Production</h2>

<p>ใน DE101 เราเรียนสร้าง DAG อย่างง่าย — แต่ในโลกจริง บริษัทมี <strong>หลายร้อย DAGs</strong> ที่ต้องจัดการ มี dependencies ซับซ้อน มี dynamic data sources ที่เปลี่ยนได้ และต้องมี SLA guarantees ที่ชัดเจน</p>

<p>Chapter นี้จะพาคุณไปสู่ Airflow ระดับ Production — เรามาดูเทคนิคที่ Mid-Level DE ต้องรู้</p>

<h3>🔁 Dynamic DAGs — สร้าง DAG อัตโนมัติจาก Config</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> ถ้าคุณมี 50 tables ที่ต้อง ingest จาก MySQL → BigQuery คุณจะเขียน 50 DAG files? ไม่! คุณเขียน DAG factory ที่อ่าน config แล้วสร้าง DAGs อัตโนมัติ
</div>

<pre><code class="language-yaml"># config/table_ingestion.yaml
tables:
  - name: users
    source_schema: production
    source_table: users
    schedule: "0 2 * * *"
    primary_key: user_id
    incremental_column: updated_at
    sla_minutes: 60
    
  - name: orders
    source_schema: production
    source_table: orders
    schedule: "0 */4 * * *"
    primary_key: order_id
    incremental_column: created_at
    sla_minutes: 30
    
  - name: products
    source_schema: production
    source_table: products
    schedule: "0 6 * * *"
    primary_key: product_id
    incremental_column: updated_at
    sla_minutes: 120
    
  - name: payments
    source_schema: production
    source_table: payments
    schedule: "0 */2 * * *"
    primary_key: payment_id
    incremental_column: processed_at
    sla_minutes: 20</code></pre>

<pre><code class="language-python"># dags/dynamic_ingestion_factory.py
"""
Dynamic DAG Factory สำหรับ Table Ingestion
สร้าง DAG อัตโนมัติจาก YAML config
"""
import yaml
from datetime import datetime, timedelta
from pathlib import Path
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.providers.google.cloud.transfers.mysql_to_gcs import MySQLToGCSOperator
from airflow.providers.google.cloud.transfers.gcs_to_bigquery import GCSToBigQueryOperator
from airflow.operators.empty import EmptyOperator


def load_config():
    """โหลด config จาก YAML file"""
    config_path = Path(__file__).parent / "config" / "table_ingestion.yaml"
    with open(config_path, "r") as f:
        return yaml.safe_load(f)


def create_ingestion_dag(table_config: dict) -> DAG:
    """สร้าง DAG สำหรับ ingest table หนึ่งตัว"""
    
    table_name = table_config["name"]
    dag_id = f"ingest_mysql_to_bq__{table_name}"
    
    default_args = {
        "owner": "data-engineering",
        "depends_on_past": False,
        "email": ["data-team@company.com"],
        "email_on_failure": True,
        "email_on_retry": False,
        "retries": 3,
        "retry_delay": timedelta(minutes=5),
        "retry_exponential_backoff": True,
        "max_retry_delay": timedelta(minutes=30),
        "sla": timedelta(minutes=table_config.get("sla_minutes", 60)),
    }
    
    dag = DAG(
        dag_id=dag_id,
        default_args=default_args,
        description=f"Ingest {table_name} from MySQL to BigQuery",
        schedule_interval=table_config["schedule"],
        start_date=datetime(2024, 1, 1),
        catchup=False,
        tags=["ingestion", "mysql", table_name],
        max_active_runs=1,
    )
    
    with dag:
        start = EmptyOperator(task_id="start")
        
        # Step 1: Extract from MySQL → GCS
        extract = MySQLToGCSOperator(
            task_id="extract_to_gcs",
            mysql_conn_id="mysql_production",
            sql=f"""
                SELECT * FROM {table_config['source_schema']}.{table_config['source_table']}
                WHERE {table_config['incremental_column']} >= '{{{{ ds }}}}'
                  AND {table_config['incremental_column']} < '{{{{ next_ds }}}}'
            """,
            bucket="company-data-lake",
            filename=f"raw/{table_name}/{{{{ ds }}}}/{table_name}.json",
            schema_filename=f"schemas/{table_name}_schema.json",
            export_format="NEWLINE_DELIMITED_JSON",
        )
        
        # Step 2: Load GCS → BigQuery
        load = GCSToBigQueryOperator(
            task_id="load_to_bigquery",
            bucket="company-data-lake",
            source_objects=[f"raw/{table_name}/{{{{ ds }}}}/*.json"],
            destination_project_dataset_table=f"warehouse.raw_{table_name}",
            source_format="NEWLINE_DELIMITED_JSON",
            write_disposition="WRITE_APPEND",
            create_disposition="CREATE_IF_NEEDED",
            autodetect=True,
        )
        
        # Step 3: Data Quality Check
        quality_check = PythonOperator(
            task_id="data_quality_check",
            python_callable=run_quality_checks,
            op_kwargs={
                "table_name": table_name,
                "primary_key": table_config["primary_key"],
            },
        )
        
        end = EmptyOperator(task_id="end")
        
        start >> extract >> load >> quality_check >> end
    
    return dag


def run_quality_checks(table_name: str, primary_key: str, **context):
    """ตรวจสอบ Data Quality หลัง load"""
    from google.cloud import bigquery
    
    client = bigquery.Client()
    ds = context["ds"]
    
    checks = {
        "row_count": f"""
            SELECT COUNT(*) as cnt 
            FROM warehouse.raw_{table_name}
            WHERE DATE({primary_key}_loaded_at) = '{ds}'
        """,
        "null_pk": f"""
            SELECT COUNT(*) as cnt 
            FROM warehouse.raw_{table_name}
            WHERE {primary_key} IS NULL 
              AND DATE(_loaded_at) = '{ds}'
        """,
        "duplicates": f"""
            SELECT COUNT(*) as cnt FROM (
                SELECT {primary_key}, COUNT(*) as c
                FROM warehouse.raw_{table_name}
                WHERE DATE(_loaded_at) = '{ds}'
                GROUP BY {primary_key}
                HAVING c > 1
            )
        """,
    }
    
    for check_name, query in checks.items():
        result = client.query(query).result()
        row = list(result)[0]
        
        if check_name == "row_count" and row.cnt == 0:
            raise ValueError(f"❌ {table_name}: No rows loaded for {ds}")
        if check_name in ("null_pk", "duplicates") and row.cnt > 0:
            raise ValueError(f"❌ {table_name}: {check_name} found {row.cnt} issues")
    
    print(f"✅ All quality checks passed for {table_name} on {ds}")


# สร้าง DAGs จาก config
config = load_config()
for table_config in config["tables"]:
    dag = create_ingestion_dag(table_config)
    globals()[dag.dag_id] = dag</code></pre>

<h3>📦 TaskGroups — จัดกลุ่ม Tasks ให้ดูเป็นระเบียบ</h3>

<pre><code class="language-python"># dags/ecommerce_daily_pipeline.py
"""
E-commerce Daily Pipeline with TaskGroups
แบ่งเป็น: Extract → Transform → Data Quality → Load to Mart
"""
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.empty import EmptyOperator
from airflow.utils.task_group import TaskGroup


default_args = {
    "owner": "data-engineering",
    "retries": 2,
    "retry_delay": timedelta(minutes=5),
    "sla": timedelta(hours=2),
}

with DAG(
    dag_id="ecommerce_daily_pipeline",
    default_args=default_args,
    schedule_interval="0 3 * * *",
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=["ecommerce", "daily", "production"],
) as dag:
    
    start = EmptyOperator(task_id="start")
    
    # ── TaskGroup 1: Extract ──────────────────────────
    with TaskGroup("extract", tooltip="Extract from sources") as extract_group:
        
        extract_orders = PythonOperator(
            task_id="extract_orders",
            python_callable=lambda: print("Extracting orders..."),
        )
        extract_users = PythonOperator(
            task_id="extract_users",
            python_callable=lambda: print("Extracting users..."),
        )
        extract_products = PythonOperator(
            task_id="extract_products",
            python_callable=lambda: print("Extracting products..."),
        )
        # Tasks ภายใน group สามารถ run parallel ได้
        [extract_orders, extract_users, extract_products]
    
    # ── TaskGroup 2: Transform ────────────────────────
    with TaskGroup("transform", tooltip="Transform data") as transform_group:
        
        with TaskGroup("staging", tooltip="Staging models") as staging:
            stg_orders = PythonOperator(
                task_id="stg_orders",
                python_callable=lambda: print("Staging orders..."),
            )
            stg_users = PythonOperator(
                task_id="stg_users",
                python_callable=lambda: print("Staging users..."),
            )
        
        with TaskGroup("intermediate", tooltip="Intermediate models") as intermediate:
            int_order_items = PythonOperator(
                task_id="int_order_items",
                python_callable=lambda: print("Building order items..."),
            )
        
        staging >> intermediate
    
    # ── TaskGroup 3: Data Quality ─────────────────────
    with TaskGroup("data_quality", tooltip="Run quality checks") as dq_group:
        
        check_completeness = PythonOperator(
            task_id="check_completeness",
            python_callable=lambda: print("Checking completeness..."),
        )
        check_freshness = PythonOperator(
            task_id="check_freshness",
            python_callable=lambda: print("Checking freshness..."),
        )
        check_uniqueness = PythonOperator(
            task_id="check_uniqueness",
            python_callable=lambda: print("Checking uniqueness..."),
        )
    
    end = EmptyOperator(task_id="end")
    
    # ── DAG Flow ──────────────────────────────────────
    start >> extract_group >> transform_group >> dq_group >> end</code></pre>

<h3>🔍 Sensors — รอเงื่อนไขก่อนทำงาน</h3>

<pre><code class="language-python"># dags/sensor_examples.py
"""
Sensor Examples: รอเงื่อนไขต่างๆ ก่อนเริ่ม pipeline
"""
from datetime import datetime, timedelta
from airflow import DAG
from airflow.sensors.external_task import ExternalTaskSensor
from airflow.providers.google.cloud.sensors.gcs import GCSObjectExistenceSensor
from airflow.sensors.sql import SqlSensor
from airflow.sensors.python import PythonSensor
from airflow.operators.python import PythonOperator


def check_api_health(**context):
    """Custom sensor: ตรวจว่า API พร้อมใช้งานหรือยัง"""
    import requests
    try:
        response = requests.get(
            "https://api.company.com/health",
            timeout=10
        )
        return response.status_code == 200
    except Exception:
        return False


with DAG(
    dag_id="pipeline_with_sensors",
    schedule_interval="0 6 * * *",
    start_date=datetime(2024, 1, 1),
    catchup=False,
) as dag:
    
    # Sensor 1: รอ DAG อื่นทำเสร็จก่อน
    wait_for_ingestion = ExternalTaskSensor(
        task_id="wait_for_ingestion",
        external_dag_id="ingest_mysql_to_bq__orders",
        external_task_id="end",
        mode="reschedule",       # ปล่อย worker slot ระหว่างรอ
        timeout=3600,            # timeout 1 ชม.
        poke_interval=300,       # เช็คทุก 5 นาที
        allowed_states=["success"],
    )
    
    # Sensor 2: รอไฟล์บน GCS
    wait_for_file = GCSObjectExistenceSensor(
        task_id="wait_for_file",
        bucket="partner-data-drop",
        object="daily/{{ ds }}/transactions.csv",
        mode="reschedule",
        timeout=7200,
        poke_interval=600,
    )
    
    # Sensor 3: รอจนข้อมูลใน DB พร้อม
    wait_for_data = SqlSensor(
        task_id="wait_for_data_ready",
        conn_id="postgres_warehouse",
        sql="""
            SELECT COUNT(*) 
            FROM raw.orders 
            WHERE DATE(created_at) = '{{ ds }}'
            HAVING COUNT(*) > 0
        """,
        mode="reschedule",
        timeout=3600,
        poke_interval=120,
    )
    
    # Sensor 4: Custom Python Sensor
    wait_for_api = PythonSensor(
        task_id="wait_for_api",
        python_callable=check_api_health,
        mode="reschedule",
        timeout=1800,
        poke_interval=60,
    )
    
    # เมื่อทุกเงื่อนไขพร้อม → เริ่มทำงาน
    process_data = PythonOperator(
        task_id="process_data",
        python_callable=lambda: print("Processing data..."),
    )
    
    [wait_for_ingestion, wait_for_file, 
     wait_for_data, wait_for_api] >> process_data</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong> Sensor ใช้ <code>mode="poke"</code> เป็น default ซึ่งจะ<strong>ยึด worker slot ตลอดเวลาที่รอ!</strong> ในระบบ Production ที่มี DAG เยอะ ให้ใช้ <code>mode="reschedule"</code> เสมอ — มันจะปล่อย worker slot ระหว่างที่รอ แล้วค่อยกลับมาเช็คใหม่
</div>

<div class="tip-box">
<strong>💡 ทริค:</strong> ใน Airflow 2.4+ ให้ใช้ <code>Deferrable Operators</code> แทน Sensors ได้เลย — มันจะใช้ <strong>Triggerer</strong> ที่เบากว่า Worker มาก ลด resource usage ได้อย่างมีนัยสำคัญ
</div>

<h3>📡 XCom — ส่งข้อมูลระหว่าง Tasks</h3>

<pre><code class="language-python"># XCom: ส่งข้อมูลขนาดเล็กระหว่าง tasks
# ⚠️ อย่าส่งข้อมูลใหญ่ผ่าน XCom! ใช้แค่ metadata เช่น file path, row count

def extract_and_report(**context):
    """Extract data แล้วส่ง metadata ไปให้ task ถัดไป"""
    # ... extract logic ...
    
    metadata = {
        "rows_extracted": 150_000,
        "file_path": f"gs://bucket/raw/orders/{context['ds']}/data.parquet",
        "extract_timestamp": datetime.now().isoformat(),
    }
    
    # Push XCom
    context["ti"].xcom_push(key="extract_metadata", value=metadata)
    return metadata


def transform_with_metadata(**context):
    """ดึง metadata จาก extract task"""
    
    # Pull XCom
    metadata = context["ti"].xcom_pull(
        task_ids="extract_task",
        key="extract_metadata"
    )
    
    print(f"Processing {metadata['rows_extracted']} rows")
    print(f"From file: {metadata['file_path']}")
    
    # ... transform logic ...</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> สร้าง Dynamic DAG Factory ที่อ่าน list ของ API endpoints จาก JSON config แล้วสร้าง DAG สำหรับ ingest แต่ละ endpoint<br>
<strong>ข้อ 2:</strong> สร้าง DAG ที่มี TaskGroups 3 กลุ่ม (Extract → Transform → Load) พร้อม SLA 2 ชั่วโมง<br>
<strong>ข้อ 3:</strong> เขียน Custom PythonSensor ที่เช็คว่า row count ในตาราง BigQuery มากกว่า threshold ที่กำหนด<br>
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: mode="poke" กับ mode="reschedule" ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> poke จะยึด worker slot ตลอดเวลาที่รอ (นอนรอในหน่วยความจำ) ส่วน reschedule จะปล่อย slot แล้ว schedule task ใหม่ทุก poke_interval — reschedule เหมาะกับ Production ที่มี DAGs เยอะ<br><br>
<strong>Q: Dynamic DAG มีข้อเสียอะไรบ้าง?</strong><br>
<strong>A:</strong> 1) Debug ยากขึ้นเพราะ DAG ไม่ได้อยู่ใน file ตรงๆ 2) Config ผิดอาจทำให้ทุก DAG พังหมด 3) DAG parsing time อาจนานขึ้นถ้า config file ใหญ่มาก ควรมี validation layer สำหรับ config
</div>
`
  },
  {
    number: 3,
    slug: 'advanced-dbt',
    emoji: '🛠️',
    title: 'Advanced dbt (Macros, Incremental, Snapshots)',
    content: `
<h2>🛠️ Advanced dbt — Transform Data อย่างมืออาชีพ</h2>

<p>dbt ระดับ Junior คือ สร้าง model แล้ว <code>dbt run</code> จบ — แต่ dbt ระดับ Mid-Level คือ การสร้าง <strong>reusable macros</strong>, จัดการ <strong>incremental models</strong> ที่ process เฉพาะข้อมูลใหม่, และใช้ <strong>snapshots</strong> เพื่อ track ประวัติการเปลี่ยนแปลง</p>

<h3>🧩 Jinja Macros — DRY Principle ใน SQL</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> Macro ใน dbt เหมือน "function ใน SQL" — ถ้าคุณเขียน SQL pattern ซ้ำๆ เช่น date filtering, null handling, audit columns → ทำเป็น macro แล้วเรียกใช้ซ้ำได้ทุก model
</div>

<pre><code class="language-sql">-- macros/generate_schema_name.sql
-- Override default schema naming strategy
{% macro generate_schema_name(custom_schema_name, node) %}
    {%- set default_schema = target.schema -%}
    
    {%- if target.name == 'prod' -%}
        {# Production: ใช้ custom schema name ตรงๆ #}
        {{ custom_schema_name | default(default_schema, true) }}
    {%- else -%}
        {# Dev/Staging: prefix ด้วย target schema #}
        {{ default_schema }}_{{ custom_schema_name | default(default_schema, true) }}
    {%- endif -%}
{% endmacro %}


-- macros/audit_columns.sql
-- เพิ่ม audit columns ให้ทุก model อัตโนมัติ
{% macro audit_columns() %}
    CURRENT_TIMESTAMP() AS _loaded_at,
    '{{ invocation_id }}' AS _dbt_invocation_id,
    '{{ this.name }}' AS _model_name,
    '{{ target.name }}' AS _target_env
{% endmacro %}


-- macros/cents_to_baht.sql
-- แปลงสตางค์เป็นบาท (ใช้บ่อยในระบบ payment)
{% macro cents_to_baht(column_name) %}
    ROUND(CAST({{ column_name }} AS NUMERIC) / 100, 2)
{% endmacro %}


-- macros/safe_divide.sql
-- หารอย่างปลอดภัย (ไม่ error เมื่อหารด้วย 0)
{% macro safe_divide(numerator, denominator, default_value=0) %}
    CASE 
        WHEN {{ denominator }} = 0 OR {{ denominator }} IS NULL 
        THEN {{ default_value }}
        ELSE CAST({{ numerator }} AS FLOAT64) / {{ denominator }}
    END
{% endmacro %}


-- macros/date_spine.sql
-- สร้าง date range อัตโนมัติ
{% macro date_spine(start_date, end_date) %}
    SELECT date
    FROM UNNEST(
        GENERATE_DATE_ARRAY(
            DATE('{{ start_date }}'),
            DATE('{{ end_date }}'),
            INTERVAL 1 DAY
        )
    ) AS date
{% endmacro %}</code></pre>

<pre><code class="language-sql">-- macros/test_macros.sql
-- Custom test: ตรวจว่า column มีค่าอยู่ใน accepted range
{% test accepted_range(model, column_name, min_value, max_value) %}

SELECT {{ column_name }}
FROM {{ model }}
WHERE {{ column_name }} < {{ min_value }}
   OR {{ column_name }} > {{ max_value }}

{% endtest %}


-- macros/generate_surrogate_key.sql
-- สร้าง surrogate key จากหลาย columns
{% macro generate_surrogate_key(columns) %}
    TO_HEX(MD5(CONCAT(
        {%- for column in columns %}
            COALESCE(CAST({{ column }} AS STRING), '_null_')
            {%- if not loop.last %}, '||', {% endif -%}
        {%- endfor %}
    )))
{% endmacro %}</code></pre>

<h3>การใช้ Macros ใน Models</h3>

<pre><code class="language-sql">-- models/marts/fct_orders.sql
{{ config(
    materialized='table',
    schema='marts',
    tags=['daily', 'finance'],
    meta={'owner': 'data-team', 'sla': '6am'}
) }}

WITH orders AS (
    SELECT * FROM {{ ref('stg_orders') }}
),

order_items AS (
    SELECT * FROM {{ ref('stg_order_items') }}
),

final AS (
    SELECT
        {{ generate_surrogate_key(['o.order_id', 'o.order_date']) }} AS order_key,
        o.order_id,
        o.customer_id,
        o.order_date,
        o.order_status,
        
        -- ใช้ macro แปลงสตางค์ → บาท
        {{ cents_to_baht('o.subtotal_cents') }} AS subtotal_baht,
        {{ cents_to_baht('o.discount_cents') }} AS discount_baht,
        {{ cents_to_baht('o.shipping_cents') }} AS shipping_baht,
        {{ cents_to_baht('o.total_cents') }} AS total_baht,
        
        -- ใช้ macro หารอย่างปลอดภัย
        {{ safe_divide('o.discount_cents', 'o.subtotal_cents') }} AS discount_rate,
        
        oi.item_count,
        
        -- ใช้ macro เพิ่ม audit columns
        {{ audit_columns() }}
    
    FROM orders o
    LEFT JOIN (
        SELECT order_id, COUNT(*) AS item_count
        FROM order_items
        GROUP BY order_id
    ) oi ON o.order_id = oi.order_id
)

SELECT * FROM final</code></pre>

<h3>📈 Incremental Models — Process แค่ข้อมูลใหม่</h3>

<pre><code class="language-sql">-- models/marts/fct_events.sql
-- Incremental: process เฉพาะ events ที่เข้ามาใหม่
-- ประหยัดเวลาและค่า query มหาศาลเมื่อ table มีหลายพันล้าน rows

{{ config(
    materialized='incremental',
    schema='marts',
    unique_key='event_id',
    partition_by={
        'field': 'event_date',
        'data_type': 'date',
        'granularity': 'day'
    },
    cluster_by=['event_type', 'user_id'],
    incremental_strategy='merge',
    on_schema_change='append_new_columns',
    tags=['hourly', 'high-volume'],
) }}

WITH source_events AS (
    SELECT
        event_id,
        user_id,
        event_type,
        event_properties,
        event_timestamp,
        DATE(event_timestamp) AS event_date,
        
        -- Parse JSON properties
        JSON_EXTRACT_SCALAR(event_properties, '$.page_url') AS page_url,
        JSON_EXTRACT_SCALAR(event_properties, '$.device_type') AS device_type,
        JSON_EXTRACT_SCALAR(event_properties, '$.campaign_id') AS campaign_id,
        
        {{ audit_columns() }}
    
    FROM {{ source('raw', 'user_events') }}
    
    {% if is_incremental() %}
    -- เมื่อ run incremental: ดึงเฉพาะ events ใหม่
    -- ใช้ lookback window 3 ชม. เพื่อจับ late-arriving data
    WHERE event_timestamp >= (
        SELECT TIMESTAMP_SUB(MAX(event_timestamp), INTERVAL 3 HOUR)
        FROM {{ this }}
    )
    {% endif %}
)

SELECT * FROM source_events</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ลืม unique_key</strong> → ข้อมูลซ้ำทุกครั้งที่ run<br>
2. <strong>Lookback window สั้นเกินไป</strong> → late-arriving data หายไป<br>
3. <strong>ไม่ partition table</strong> → ทุกครั้งที่ run incremental ต้อง scan ทั้ง table เพื่อหา MAX timestamp<br>
4. <strong>ใช้ on_schema_change='fail'</strong> → pipeline พังเมื่อ source เพิ่ม column ใหม่
</div>

<h3>📸 Snapshots — Track ประวัติการเปลี่ยนแปลง (SCD Type 2)</h3>

<pre><code class="language-sql">-- snapshots/snap_customers.sql
-- Snapshot: เก็บประวัติการเปลี่ยนแปลงของ customer data
-- ใช้สำหรับ SCD Type 2 (Slowly Changing Dimensions)

{% snapshot snap_customers %}

{{ config(
    target_schema='snapshots',
    unique_key='customer_id',
    strategy='timestamp',
    updated_at='updated_at',
    invalidate_hard_deletes=True,
) }}

SELECT
    customer_id,
    customer_name,
    email,
    phone_number,
    membership_tier,    -- Gold, Silver, Bronze → เปลี่ยนได้
    credit_limit,       -- เปลี่ยนตามประวัติ
    address_province,   -- ย้ายที่อยู่ได้
    is_active,
    updated_at
FROM {{ source('raw', 'customers') }}

{% endsnapshot %}</code></pre>

<pre><code class="language-sql">-- snapshots/snap_product_prices.sql
-- Track ประวัติราคาสินค้า
{% snapshot snap_product_prices %}

{{ config(
    target_schema='snapshots',
    unique_key='product_id',
    strategy='check',
    check_cols=['price', 'discount_pct', 'is_on_sale'],
) }}

SELECT
    product_id,
    product_name,
    category,
    price,
    discount_pct,
    is_on_sale,
    CURRENT_TIMESTAMP() AS checked_at
FROM {{ source('raw', 'products') }}

{% endsnapshot %}</code></pre>

<pre><code class="language-sql">-- models/marts/dim_customers.sql
-- ใช้ snapshot data สร้าง SCD Type 2 dimension table

{{ config(materialized='table', schema='marts') }}

SELECT
    {{ generate_surrogate_key(['customer_id', 'dbt_valid_from']) }} AS customer_key,
    customer_id,
    customer_name,
    email,
    membership_tier,
    credit_limit,
    address_province,
    is_active,
    
    -- SCD Type 2 columns
    dbt_valid_from AS valid_from,
    COALESCE(dbt_valid_to, TIMESTAMP('9999-12-31')) AS valid_to,
    CASE 
        WHEN dbt_valid_to IS NULL THEN TRUE 
        ELSE FALSE 
    END AS is_current,
    
    {{ audit_columns() }}

FROM {{ ref('snap_customers') }}</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> เลือก snapshot strategy ให้ถูก:<br>
• <code>timestamp</code> → ใช้เมื่อ source table มี updated_at column (เร็วกว่า)<br>
• <code>check</code> → ใช้เมื่อไม่มี updated_at ต้อง compare ค่าจริง (ช้ากว่า แต่ accurate)<br>
• Production tip: ถ้าเป็นไปได้ ให้ขอ Data Source Team เพิ่ม updated_at column เสมอ
</div>

<h3>📦 dbt Packages & Hooks</h3>

<pre><code class="language-yaml"># packages.yml
packages:
  - package: dbt-labs/dbt_utils
    version: [">=1.0.0", "<2.0.0"]
    
  - package: dbt-labs/codegen
    version: "0.12.1"
    
  - package: calogica/dbt_expectations
    version: "0.10.1"
    
  - package: dbt-labs/audit_helper
    version: "0.9.0"</code></pre>

<pre><code class="language-sql">-- ใช้ dbt_utils ใน model
-- models/marts/fct_orders.sql

SELECT
    -- surrogate key จาก dbt_utils
    {{ dbt_utils.generate_surrogate_key(['order_id', 'order_date']) }} AS order_key,
    
    -- Pivot order status เป็น columns
    {{ dbt_utils.pivot(
        'order_status',
        dbt_utils.get_column_values(
            table=ref('stg_orders'),
            column='order_status'
        ),
        agg='count',
        then_value=1,
        else_value=0,
        prefix='status_'
    ) }},
    
    -- Star/Snowflake schema helper
    {{ dbt_utils.star(
        from=ref('stg_orders'),
        except=['_loaded_at', '_source_file']
    ) }}
    
FROM {{ ref('stg_orders') }}
GROUP BY 1</code></pre>

<pre><code class="language-yaml"># dbt_project.yml — On-run hooks
on-run-start:
  - "{{ log('🚀 dbt run started at ' ~ run_started_at, info=True) }}"
  - "CREATE SCHEMA IF NOT EXISTS {{ target.schema }}_staging"
  - "CREATE SCHEMA IF NOT EXISTS {{ target.schema }}_marts"

on-run-end:
  - "{{ log('✅ dbt run completed. ' ~ results|length ~ ' models processed.', info=True) }}"
  - "GRANT SELECT ON ALL TABLES IN SCHEMA {{ target.schema }}_marts TO GROUP analysts"

models:
  my_project:
    staging:
      +materialized: view
      +schema: staging
      +tags: ['staging']
      
    intermediate:
      +materialized: ephemeral
      +tags: ['intermediate']
      
    marts:
      +materialized: table
      +schema: marts
      +tags: ['marts']
      +post-hook:
        - "ALTER TABLE {{ this }} SET OPTIONS(description='Built by dbt')"</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> เขียน macro ชื่อ <code>thai_date_parts(column)</code> ที่แปลง timestamp เป็น columns: thai_year (พ.ศ.), thai_month_name, thai_day_name<br>
<strong>ข้อ 2:</strong> สร้าง incremental model สำหรับ clickstream data ที่มี 500M rows/day พร้อม lookback window 6 ชม.<br>
<strong>ข้อ 3:</strong> สร้าง snapshot สำหรับ table subscription_plans ที่ track การเปลี่ยนแปลงราคา
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: Incremental model มีข้อเสียอะไรบ้าง?</strong><br>
<strong>A:</strong> 1) ซับซ้อนกว่า full-refresh 2) อาจมี late-arriving data ตกหล่น 3) Schema changes จัดการยากกว่า 4) ต้องมี unique_key ที่ถูกต้อง 5) Full-refresh ยังต้องทำเป็นระยะเพื่อ "reset" ข้อมูล<br><br>
<strong>Q: Snapshot strategy "timestamp" vs "check" ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> timestamp ใช้ updated_at column ตรวจว่ามีการเปลี่ยนแปลงหรือไม่ (เร็ว, efficient) / check compare ค่าจริงของ columns ที่ระบุ (ช้ากว่า, แต่ใช้ได้เมื่อไม่มี updated_at)
</div>
`
  },
  {
    number: 4,
    slug: 'kafka-streaming',
    emoji: '🔥',
    title: 'Kafka & Streaming (Architecture, Producer, Consumer)',
    content: `
<h2>🔥 Kafka & Streaming — จาก Batch สู่ Real-time</h2>

<p>ทุกอย่างที่เราทำมาจนถึงตอนนี้เป็น <strong>Batch Processing</strong> — รัน schedule ทุก X ชั่วโมง แล้ว process ข้อมูลเป็นก้อน แต่ในโลกจริง มี use cases ที่ต้องการข้อมูล <strong>real-time หรือ near real-time</strong></p>

<p>ตัวอย่าง: Fraud detection ที่ต้องตรวจจับภายใน 5 วินาที, Real-time recommendation, Live dashboard ที่อัพเดททุกวินาที</p>

<h3>🏗️ Kafka Architecture — ภาพรวม</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> คิดว่า Kafka เหมือน <strong>"ท่อส่งน้ำขนาดใหญ่"</strong> ที่:<br>
• <strong>Producer</strong> = ก๊อกน้ำ (ปล่อยน้ำ/data เข้าท่อ)<br>
• <strong>Topic</strong> = ท่อหลัก (แบ่งเป็น partitions = ท่อย่อย)<br>
• <strong>Consumer</strong> = ปลายทาง (รับน้ำ/data ไปใช้)<br>
• <strong>Broker</strong> = สถานีปั๊ม (server ที่เก็บและส่งต่อ data)<br>
• <strong>Zookeeper/KRaft</strong> = ผู้ดูแลระบบท่อทั้งหมด
</div>

<pre><code class="language-text">┌────────────────────────────────────────────────────────────┐
│                    Kafka Cluster                           │
│                                                            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                    │
│  │Broker 1 │  │Broker 2 │  │Broker 3 │                    │
│  │         │  │         │  │         │                    │
│  │ P0(L)   │  │ P1(L)   │  │ P2(L)   │  ← Leader         │
│  │ P1(R)   │  │ P2(R)   │  │ P0(R)   │  ← Replica        │
│  └────┬────┘  └────┬────┘  └────┬────┘                    │
│       │            │            │                          │
│  Topic: "orders" ─ 3 partitions, replication-factor=2     │
└────────────────────────────────────────────────────────────┘
        ▲                                    │
        │                                    ▼
  ┌─────┴─────┐                     ┌───────────────┐
  │ Producers  │                     │  Consumers    │
  │ (App/API)  │                     │ (Consumer     │
  │            │                     │  Group)       │
  └────────────┘                     └───────────────┘</code></pre>

<h3>📝 Key Concepts ที่ต้องเข้าใจ</h3>

<pre><code class="language-text">Kafka Core Concepts:

1. Topic
   - "หมวดหมู่" ของ messages
   - เช่น: orders, user_events, payments
   - แต่ละ topic แบ่งเป็นหลาย partitions

2. Partition
   - หน่วยย่อยของ topic
   - Messages ภายใน partition เรียงลำดับ (ordered)
   - ข้าม partition ไม่ guarantee ลำดับ
   - Key-based partitioning: messages ที่มี key เดียวกัน → partition เดียวกัน

3. Offset
   - "ตำแหน่ง" ของ message ใน partition
   - Consumer ใช้ offset track ว่าอ่านถึงไหนแล้ว
   - offset 0 → message แรก, offset 1 → message ที่สอง, ...

4. Consumer Group
   - กลุ่มของ consumers ที่ "แบ่งงาน" กันอ่าน
   - แต่ละ partition ถูกอ่านโดย consumer เดียวใน group
   - Scale consumer ได้ แต่ไม่เกินจำนวน partitions

5. Replication Factor
   - จำนวน copies ของแต่ละ partition
   - Leader: partition หลักที่ให้ service
   - Follower: สำเนาที่พร้อม takeover</code></pre>

<h3>🐍 Python Producer — ส่งข้อมูลเข้า Kafka</h3>

<pre><code class="language-python"># producers/order_producer.py
"""
Production-grade Kafka Producer
ส่ง order events เข้า Kafka topic
"""
import json
import logging
from datetime import datetime
from typing import Optional
from confluent_kafka import Producer, KafkaError
from confluent_kafka.serialization import (
    StringSerializer,
    SerializationContext,
    MessageField,
)
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


# ============================================
# Basic Producer (JSON)
# ============================================

class OrderProducer:
    """Production Kafka Producer สำหรับ Order Events"""
    
    def __init__(self, bootstrap_servers: str, topic: str):
        self.topic = topic
        self.producer = Producer({
            "bootstrap.servers": bootstrap_servers,
            
            # Performance tuning
            "linger.ms": 50,            # รอ 50ms รวม messages ก่อนส่ง
            "batch.size": 65536,        # Batch size 64KB
            "compression.type": "snappy",  # Compress ลด network
            
            # Reliability
            "acks": "all",              # รอ ALL replicas confirm
            "retries": 5,
            "retry.backoff.ms": 1000,
            "enable.idempotence": True,  # ป้องกัน duplicate
            
            # Monitoring
            "statistics.interval.ms": 60000,
        })
        
        self.string_serializer = StringSerializer("utf-8")
    
    def delivery_callback(self, err, msg):
        """Callback เมื่อ message ถูกส่งสำเร็จ/ล้มเหลว"""
        if err:
            logger.error(
                f"❌ Delivery failed for {msg.key()}: {err}"
            )
        else:
            logger.info(
                f"✅ Delivered to {msg.topic()} "
                f"[partition={msg.partition()}] "
                f"@ offset {msg.offset()}"
            )
    
    def send_order(self, order: dict):
        """ส่ง order event เข้า Kafka"""
        try:
            # ใช้ customer_id เป็น key
            # → orders ของ customer เดียวกัน → partition เดียวกัน
            # → guarantee ordering per customer
            key = str(order["customer_id"])
            
            # เพิ่ม metadata
            order["event_timestamp"] = datetime.utcnow().isoformat()
            order["event_type"] = "order_created"
            
            self.producer.produce(
                topic=self.topic,
                key=self.string_serializer(key),
                value=json.dumps(order, default=str).encode("utf-8"),
                callback=self.delivery_callback,
                headers={
                    "source": "order-service",
                    "version": "1.0",
                },
            )
            
            # Non-blocking: ไม่รอ delivery
            # ใช้ poll() เพื่อ trigger callbacks
            self.producer.poll(0)
            
        except BufferError:
            logger.warning("⚠️ Producer queue full, waiting...")
            self.producer.flush(timeout=30)
            self.send_order(order)  # retry
    
    def flush(self):
        """รอจนทุก message ถูกส่งเสร็จ"""
        remaining = self.producer.flush(timeout=30)
        if remaining > 0:
            logger.warning(f"⚠️ {remaining} messages not delivered")
    
    def close(self):
        """ปิด producer อย่างสมบูรณ์"""
        self.flush()
        logger.info("Producer closed gracefully")


# ============================================
# Usage Example
# ============================================
if __name__ == "__main__":
    producer = OrderProducer(
        bootstrap_servers="kafka-broker-1:9092,kafka-broker-2:9092",
        topic="ecommerce.orders"
    )
    
    # Simulate order events
    orders = [
        {
            "order_id": "ORD-2024-001",
            "customer_id": "CUST-1001",
            "items": [
                {"product_id": "P-100", "qty": 2, "price": 599.00},
                {"product_id": "P-200", "qty": 1, "price": 1290.00},
            ],
            "total_amount": 2488.00,
            "payment_method": "credit_card",
        },
        {
            "order_id": "ORD-2024-002",
            "customer_id": "CUST-1002",
            "items": [
                {"product_id": "P-300", "qty": 3, "price": 150.00},
            ],
            "total_amount": 450.00,
            "payment_method": "promptpay",
        },
    ]
    
    for order in orders:
        producer.send_order(order)
    
    producer.close()</code></pre>

<h3>🔽 Python Consumer — รับข้อมูลจาก Kafka</h3>

<pre><code class="language-python"># consumers/order_consumer.py
"""
Production-grade Kafka Consumer
อ่าน order events แล้ว process ลง Data Warehouse
"""
import json
import signal
import logging
from datetime import datetime
from typing import List, Dict
from confluent_kafka import Consumer, KafkaError, KafkaException

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class OrderConsumer:
    """Production Kafka Consumer with batch processing"""
    
    def __init__(
        self,
        bootstrap_servers: str,
        group_id: str,
        topics: List[str],
        batch_size: int = 100,
        batch_timeout_ms: int = 5000,
    ):
        self.consumer = Consumer({
            "bootstrap.servers": bootstrap_servers,
            "group.id": group_id,
            
            # Offset management
            "auto.offset.reset": "earliest",
            "enable.auto.commit": False,  # Manual commit!
            
            # Performance
            "fetch.min.bytes": 1024,
            "fetch.max.wait.ms": 500,
            "max.poll.interval.ms": 300000,
            
            # Session management
            "session.timeout.ms": 30000,
            "heartbeat.interval.ms": 10000,
        })
        
        self.consumer.subscribe(topics)
        self.batch_size = batch_size
        self.batch_timeout_ms = batch_timeout_ms
        self.running = True
        self.message_buffer: List[Dict] = []
        
        # Graceful shutdown
        signal.signal(signal.SIGINT, self._shutdown)
        signal.signal(signal.SIGTERM, self._shutdown)
    
    def _shutdown(self, signum, frame):
        """Handle graceful shutdown"""
        logger.info("🛑 Shutting down consumer gracefully...")
        self.running = False
    
    def process_batch(self, messages: List[Dict]):
        """Process batch ของ messages ลง BigQuery"""
        if not messages:
            return
        
        logger.info(f"📦 Processing batch of {len(messages)} messages")
        
        try:
            # ในงานจริง: เขียนลง BigQuery, PostgreSQL, etc.
            from google.cloud import bigquery
            
            client = bigquery.Client()
            table_ref = "project.warehouse.raw_orders"
            
            # Transform messages สำหรับ BigQuery
            rows = []
            for msg in messages:
                rows.append({
                    "order_id": msg["order_id"],
                    "customer_id": msg["customer_id"],
                    "total_amount": msg["total_amount"],
                    "payment_method": msg["payment_method"],
                    "items": json.dumps(msg.get("items", [])),
                    "event_timestamp": msg["event_timestamp"],
                    "kafka_topic": msg["_kafka_topic"],
                    "kafka_partition": msg["_kafka_partition"],
                    "kafka_offset": msg["_kafka_offset"],
                    "processed_at": datetime.utcnow().isoformat(),
                })
            
            errors = client.insert_rows_json(table_ref, rows)
            
            if errors:
                logger.error(f"❌ BigQuery insert errors: {errors}")
                raise Exception(f"BigQuery insert failed: {errors}")
            
            logger.info(f"✅ Inserted {len(rows)} rows to BigQuery")
            
        except Exception as e:
            logger.error(f"❌ Batch processing failed: {e}")
            # ใน production: ส่ง failed messages ไป Dead Letter Queue
            self._send_to_dlq(messages)
            raise
    
    def _send_to_dlq(self, messages: List[Dict]):
        """ส่ง failed messages ไป Dead Letter Queue"""
        logger.warning(
            f"📨 Sending {len(messages)} messages to DLQ"
        )
        # Implement DLQ logic here
    
    def run(self):
        """Main consumer loop"""
        logger.info("🚀 Consumer started, waiting for messages...")
        
        try:
            while self.running:
                msg = self.consumer.poll(timeout=1.0)
                
                if msg is None:
                    # ถ้ามี messages ใน buffer → process
                    if self.message_buffer:
                        self.process_batch(self.message_buffer)
                        self.consumer.commit()
                        self.message_buffer = []
                    continue
                
                if msg.error():
                    if msg.error().code() == KafkaError._PARTITION_EOF:
                        logger.debug(f"End of partition {msg.partition()}")
                        continue
                    else:
                        raise KafkaException(msg.error())
                
                # Parse message
                try:
                    value = json.loads(msg.value().decode("utf-8"))
                    value["_kafka_topic"] = msg.topic()
                    value["_kafka_partition"] = msg.partition()
                    value["_kafka_offset"] = msg.offset()
                    
                    self.message_buffer.append(value)
                except json.JSONDecodeError as e:
                    logger.error(f"❌ Invalid JSON: {e}")
                    continue
                
                # ถ้า buffer เต็ม → process batch
                if len(self.message_buffer) >= self.batch_size:
                    self.process_batch(self.message_buffer)
                    self.consumer.commit()
                    self.message_buffer = []
        
        except Exception as e:
            logger.error(f"❌ Consumer error: {e}")
            raise
        finally:
            # Process remaining messages
            if self.message_buffer:
                self.process_batch(self.message_buffer)
                self.consumer.commit()
            
            self.consumer.close()
            logger.info("Consumer closed")


if __name__ == "__main__":
    consumer = OrderConsumer(
        bootstrap_servers="kafka-1:9092,kafka-2:9092",
        group_id="order-to-warehouse",
        topics=["ecommerce.orders"],
        batch_size=100,
    )
    consumer.run()</code></pre>

<h3>🐳 Kafka Setup with Docker Compose</h3>

<pre><code class="language-yaml"># docker-compose.kafka.yml
version: "3.8"
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"

  kafka-broker-1:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-broker-1:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_NUM_PARTITIONS: 6
      KAFKA_DEFAULT_REPLICATION_FACTOR: 2
      KAFKA_LOG_RETENTION_HOURS: 168  # 7 days
      KAFKA_LOG_RETENTION_BYTES: 10737418240  # 10GB

  kafka-broker-2:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    ports:
      - "9093:9093"
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-broker-2:29093,PLAINTEXT_HOST://localhost:9093
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT

  schema-registry:
    image: confluentinc/cp-schema-registry:7.5.0
    depends_on:
      - kafka-broker-1
    ports:
      - "8081:8081"
    environment:
      SCHEMA_REGISTRY_HOST_NAME: schema-registry
      SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS: kafka-broker-1:29092

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka-broker-1:29092
      KAFKA_CLUSTERS_0_SCHEMAREGISTRY: http://schema-registry:8081</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ใช้ enable.auto.commit=True</strong> → อาจสูญเสียข้อมูลเมื่อ consumer crash ก่อน process เสร็จ<br>
2. <strong>ไม่ตั้ง acks=all</strong> → message อาจหายถ้า leader broker ล่ม<br>
3. <strong>Partition มากเกินไป</strong> → เพิ่ม overhead จาก metadata management<br>
4. <strong>Consumer ช้ากว่า Producer</strong> → lag สะสม ต้อง monitor consumer lag เสมอ
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> เขียน Kafka Producer ที่ส่ง user clickstream events (page_view, click, scroll) โดยใช้ user_id เป็น partition key<br>
<strong>ข้อ 2:</strong> เขียน Consumer ที่ aggregate click count ทุก 1 นาที แล้ว print ผลลัพธ์<br>
<strong>ข้อ 3:</strong> อธิบายว่าทำไม acks=all ถึงสำคัญสำหรับ payment transactions<br>
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: Kafka guarantee ordering อย่างไร?</strong><br>
<strong>A:</strong> Kafka guarantee ordering เฉพาะภายใน partition เดียวกัน ถ้าต้องการ ordering ของ entity เดียวกัน (เช่น orders ของ customer คนเดียว) ต้องใช้ entity ID เป็น partition key เพื่อให้ messages ไปอยู่ partition เดียวกัน<br><br>
<strong>Q: Consumer Group คืออะไร? ทำไมต้องมี?</strong><br>
<strong>A:</strong> Consumer Group คือกลุ่ม consumers ที่ "แบ่งงาน" กันอ่าน — แต่ละ partition ถูก assign ให้ consumer เดียวใน group ทำให้ scale horizontally ได้ และ track progress (offset) ร่วมกัน ถ้า consumer ตัวหนึ่ง fail partitions จะถูก rebalance ไปยัง consumer ที่เหลือ
</div>
`
  },
  {
    number: 5,
    slug: 'cloud-architecture',
    emoji: '☁️',
    title: 'Cloud Architecture (GCP Deep Dive)',
    content: `
<h2>☁️ Cloud Architecture — ออกแบบ Data Platform บน GCP</h2>

<p>ใน DE101 เราใช้ GCP เป็นแค่ "ที่เก็บของ" — ตอนนี้เราจะเรียนรู้การ <strong>ออกแบบ Data Platform</strong> บน GCP อย่างจริงจัง ครอบคลุมตั้งแต่ ingestion → processing → serving → monitoring</p>

<h3>🏗️ Reference Architecture: Modern Data Platform on GCP</h3>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────┐
│                    GCP Data Platform Architecture               │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Data Sources                                                    │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐                 │
│  │ MySQL  │  │  APIs  │  │  Kafka │  │  Files │                 │
│  └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘                 │
│      │           │           │           │                       │
│  ── Ingestion Layer ─────────────────────────────────────        │
│  ┌────────────────────────────────────────────────────┐          │
│  │  Cloud Composer (Airflow)  │  Pub/Sub  │  Dataflow │          │
│  └───────────────────┬────────────────────────────────┘          │
│                      │                                           │
│  ── Storage Layer ───┼──────────────────────────────────         │
│  ┌───────────────────┴────────────────────────────────┐          │
│  │  Cloud Storage (GCS)  │  BigQuery (Raw/Staging)    │          │
│  │  (Data Lake)          │  (Data Warehouse)          │          │
│  └───────────────────┬────────────────────────────────┘          │
│                      │                                           │
│  ── Transform Layer ─┼──────────────────────────────────         │
│  ┌───────────────────┴────────────────────────────────┐          │
│  │  dbt (SQL transforms)  │  Dataflow (streaming)     │          │
│  └───────────────────┬────────────────────────────────┘          │
│                      │                                           │
│  ── Serving Layer ───┼──────────────────────────────────         │
│  ┌───────────────────┴────────────────────────────────┐          │
│  │  BigQuery (Marts)  │  Looker  │  Cloud SQL (app)   │          │
│  └────────────────────────────────────────────────────┘          │
│                                                                  │
│  ── Cross-cutting ──────────────────────────────────────         │
│  │  IAM  │  Cloud Monitoring  │  Data Catalog  │  DLP  │         │
└──────────────────────────────────────────────────────────────────┘</code></pre>

<h3>🔍 BigQuery Advanced — ไม่ใช่แค่ SELECT</h3>

<pre><code class="language-sql">-- ============================================
-- BigQuery: Partitioning & Clustering
-- ============================================
-- Production table design ที่ optimize cost & performance

CREATE TABLE IF NOT EXISTS \`project.warehouse.fct_orders\`
(
    order_key STRING NOT NULL,
    order_id STRING NOT NULL,
    customer_id STRING,
    order_date DATE NOT NULL,
    order_status STRING,
    total_amount_baht NUMERIC,
    item_count INT64,
    payment_method STRING,
    region STRING,
    _loaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
)
PARTITION BY order_date           -- Partition by date (ลด scan cost)
CLUSTER BY region, payment_method -- Cluster by query patterns
OPTIONS(
    description = "Fact table for orders - partitioned daily",
    labels = [("team", "data-engineering"), ("env", "prod")],
    partition_expiration_days = 365,  -- Auto-delete data หลัง 1 ปี
    require_partition_filter = TRUE   -- บังคับ filter partition
);

-- ============================================
-- BigQuery: Materialized View
-- ============================================
-- Auto-refresh aggregation สำหรับ dashboard queries

CREATE MATERIALIZED VIEW \`project.marts.mv_daily_revenue\`
OPTIONS(
    enable_refresh = TRUE,
    refresh_interval_minutes = 30,
    max_staleness = INTERVAL "1" HOUR
)
AS
SELECT
    order_date,
    region,
    payment_method,
    COUNT(*) AS order_count,
    SUM(total_amount_baht) AS total_revenue,
    AVG(total_amount_baht) AS avg_order_value,
    APPROX_COUNT_DISTINCT(customer_id) AS unique_customers
FROM \`project.warehouse.fct_orders\`
GROUP BY order_date, region, payment_method;

-- ============================================
-- BigQuery: Scheduled Queries
-- ============================================
-- สร้าง scheduled query สำหรับ aggregate ที่ซับซ้อน

-- ใน BigQuery Console → Scheduled Queries
-- หรือใช้ bq CLI:
-- bq query --use_legacy_sql=false \\
--   --schedule="every 24 hours" \\
--   --display_name="daily_customer_metrics" \\
--   --destination_table="project:marts.customer_daily_metrics" \\
--   --replace=true</code></pre>

<h3>💰 Cost Optimization — ประหยัดค่า Cloud ได้เป็นล้าน</h3>

<pre><code class="language-python"># tools/bigquery_cost_analyzer.py
"""
BigQuery Cost Analyzer
วิเคราะห์ cost ของ queries เพื่อหาจุดที่ optimize ได้
"""
from google.cloud import bigquery


def analyze_query_costs(project_id: str, days_back: int = 30):
    """วิเคราะห์ query costs จาก INFORMATION_SCHEMA"""
    
    client = bigquery.Client(project=project_id)
    
    query = f"""
    SELECT
        user_email,
        DATE(creation_time) AS query_date,
        COUNT(*) AS query_count,
        
        -- Total bytes processed (ค่า query)
        SUM(total_bytes_processed) / POW(1024, 4) AS total_tb_processed,
        
        -- ค่า query ($6.25/TB for on-demand)
        ROUND(SUM(total_bytes_processed) / POW(1024, 4) * 6.25, 2) AS estimated_cost_usd,
        ROUND(SUM(total_bytes_processed) / POW(1024, 4) * 6.25 * 35, 2) AS estimated_cost_thb,
        
        -- Average query time
        AVG(TIMESTAMP_DIFF(end_time, start_time, SECOND)) AS avg_duration_sec,
        
        -- Slot usage
        AVG(total_slot_ms / 1000) AS avg_slot_seconds,
        
    FROM \`region-asia-southeast1\`.INFORMATION_SCHEMA.JOBS
    WHERE creation_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL {days_back} DAY)
      AND job_type = 'QUERY'
      AND state = 'DONE'
      AND error_result IS NULL
    GROUP BY user_email, query_date
    ORDER BY estimated_cost_usd DESC
    LIMIT 50
    """
    
    results = client.query(query).result()
    
    print("=" * 80)
    print("BigQuery Cost Analysis Report")
    print("=" * 80)
    
    total_cost = 0
    for row in results:
        print(f"User: {row.user_email}")
        print(f"  Date: {row.query_date}")
        print(f"  Queries: {row.query_count}")
        print(f"  TB Processed: {row.total_tb_processed:.4f}")
        print(f"  Cost: \${row.estimated_cost_usd} (฿{row.estimated_cost_thb})")
        print(f"  Avg Duration: {row.avg_duration_sec:.1f}s")
        print()
        total_cost += row.estimated_cost_usd
    
    print(f"Total estimated cost: \${total_cost:.2f}")
    return total_cost


def find_expensive_queries(project_id: str, min_tb: float = 0.1):
    """หา queries ที่แพงที่สุด"""
    
    client = bigquery.Client(project=project_id)
    
    query = f"""
    SELECT
        job_id,
        user_email,
        creation_time,
        query,
        total_bytes_processed / POW(1024, 4) AS tb_processed,
        ROUND(total_bytes_processed / POW(1024, 4) * 6.25, 2) AS cost_usd,
        TIMESTAMP_DIFF(end_time, start_time, SECOND) AS duration_sec,
        total_slot_ms,
        
        -- ตรวจว่ามี partition filter หรือไม่
        CASE 
            WHEN query LIKE '%WHERE%' THEN 'Has WHERE'
            ELSE '⚠️ No WHERE clause!'
        END AS filter_check
        
    FROM \`region-asia-southeast1\`.INFORMATION_SCHEMA.JOBS
    WHERE creation_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
      AND job_type = 'QUERY'
      AND total_bytes_processed / POW(1024, 4) > {min_tb}
    ORDER BY total_bytes_processed DESC
    LIMIT 20
    """
    
    results = client.query(query).result()
    
    for row in results:
        print(f"💸 \${row.cost_usd} | {row.tb_processed:.3f} TB | {row.user_email}")
        print(f"   Query: {row.query[:120]}...")
        print(f"   {row.filter_check}")
        print()


if __name__ == "__main__":
    analyze_query_costs("my-gcp-project", days_back=30)
    find_expensive_queries("my-gcp-project", min_tb=0.01)</code></pre>

<div class="tip-box">
<strong>💡 ทริค Cost Optimization:</strong><br>
1. <strong>Partition + Cluster</strong> = ลด scan bytes ได้ 90%+<br>
2. <strong>SELECT เฉพาะ columns ที่ต้องการ</strong> อย่า SELECT *<br>
3. <strong>ใช้ Materialized Views</strong> สำหรับ aggregation ที่ query บ่อย<br>
4. <strong>BigQuery BI Engine</strong> สำหรับ dashboard queries<br>
5. <strong>Flat-rate pricing</strong> ถ้าใช้มากกว่า ~$10K/month<br>
6. <strong>Export ไป Parquet</strong> ก่อนทำ heavy processing
</div>

<h3>📡 Pub/Sub + Dataflow — Streaming Pipeline บน GCP</h3>

<pre><code class="language-python"># streaming/pubsub_to_bigquery.py
"""
GCP Streaming Pipeline: Pub/Sub → Dataflow → BigQuery
ใช้ Apache Beam SDK
"""
import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions
from apache_beam.io.gcp.pubsub import ReadFromPubSub
from apache_beam.io.gcp.bigquery import WriteToBigQuery
import json
import logging

logger = logging.getLogger(__name__)


class ParseEvent(beam.DoFn):
    """Parse JSON event จาก Pub/Sub"""
    
    def process(self, element):
        try:
            event = json.loads(element.decode("utf-8"))
            
            # Validate required fields
            required = ["event_id", "user_id", "event_type", "timestamp"]
            if not all(k in event for k in required):
                logger.warning(f"Missing required fields: {event}")
                return
            
            yield {
                "event_id": event["event_id"],
                "user_id": event["user_id"],
                "event_type": event["event_type"],
                "event_timestamp": event["timestamp"],
                "properties": json.dumps(event.get("properties", {})),
                "processed_at": beam.utils.timestamp.Timestamp.now().to_rfc3339(),
            }
            
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON: {e}")


def run_pipeline():
    """Run Dataflow streaming pipeline"""
    
    options = PipelineOptions([
        "--project=my-gcp-project",
        "--region=asia-southeast1",
        "--runner=DataflowRunner",
        "--streaming",
        "--temp_location=gs://my-bucket/temp/",
        "--staging_location=gs://my-bucket/staging/",
        "--job_name=events-to-bigquery",
        "--num_workers=2",
        "--max_num_workers=10",
        "--autoscaling_algorithm=THROUGHPUT_BASED",
        "--experiments=enable_streaming_engine",
    ])
    
    table_schema = {
        "fields": [
            {"name": "event_id", "type": "STRING", "mode": "REQUIRED"},
            {"name": "user_id", "type": "STRING", "mode": "REQUIRED"},
            {"name": "event_type", "type": "STRING", "mode": "REQUIRED"},
            {"name": "event_timestamp", "type": "TIMESTAMP", "mode": "REQUIRED"},
            {"name": "properties", "type": "STRING", "mode": "NULLABLE"},
            {"name": "processed_at", "type": "TIMESTAMP", "mode": "REQUIRED"},
        ]
    }
    
    with beam.Pipeline(options=options) as p:
        (
            p
            | "Read from Pub/Sub" >> ReadFromPubSub(
                topic="projects/my-project/topics/user-events"
            )
            | "Parse Events" >> beam.ParDo(ParseEvent())
            | "Write to BigQuery" >> WriteToBigQuery(
                table="my-project:warehouse.raw_events",
                schema=table_schema,
                write_disposition="WRITE_APPEND",
                create_disposition="CREATE_IF_NEEDED",
                method="STREAMING_INSERTS",
            )
        )


if __name__ == "__main__":
    run_pipeline()</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> ออกแบบ BigQuery table schema สำหรับ clickstream data ที่มี 1B events/day โดยเลือก partition + cluster strategy ที่เหมาะสม<br>
<strong>ข้อ 2:</strong> เขียน Python script ที่วิเคราะห์ BigQuery usage แล้ว suggest tables ที่ควรเพิ่ม partition/clustering<br>
<strong>ข้อ 3:</strong> เปรียบเทียบ cost ระหว่าง on-demand pricing vs flat-rate สำหรับ workload ที่ scan 50TB/month
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: BigQuery Partitioning กับ Clustering ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> Partitioning แบ่ง table เป็น segments ตาม column value (date, integer range) — ลด bytes scanned โดย prune partitions ทั้งอัน / Clustering เรียง data ภายใน partition ตาม columns ที่กำหนด — optimize filter/aggregation บน clustered columns ใช้ร่วมกันได้เสมอ<br><br>
<strong>Q: เมื่อไหร่ควรใช้ Cloud Composer vs Cloud Functions?</strong><br>
<strong>A:</strong> Composer (Airflow) = complex workflows ที่มี dependencies หลาย steps, scheduling, monitoring / Cloud Functions = single task, event-driven, ไม่ซับซ้อน เช่น trigger เมื่อ file upload
</div>
`
  },
  {
    number: 6,
    slug: 'cicd-data',
    emoji: '🔄',
    title: 'CI/CD for Data (GitHub Actions, Terraform)',
    content: `
<h2>🔄 CI/CD for Data — Deploy Pipeline อย่างมืออาชีพ</h2>

<p>Junior DE deploy ด้วยมือ: SSH เข้า server แล้ว git pull — Mid-Level DE ตั้งค่า <strong>CI/CD pipeline</strong> ที่ทำทุกอย่างอัตโนมัติ ตั้งแต่ test → lint → deploy → monitor</p>

<p>ทำไม CI/CD ถึงสำคัญ? เพราะการ deploy ด้วยมือ = <strong>ความเสี่ยง</strong> — ลืม run tests, deploy ผิด branch, config ไม่ตรง environment ทุกอย่างแก้ได้ด้วย automation</p>

<h3>🔧 GitHub Actions สำหรับ dbt</h3>

<pre><code class="language-yaml"># .github/workflows/dbt-ci.yml
# CI Pipeline: ทุกครั้งที่เปิด PR → test dbt models อัตโนมัติ

name: dbt CI Pipeline

on:
  pull_request:
    branches: [main, develop]
    paths:
      - 'dbt/**'
      - '.github/workflows/dbt-ci.yml'

env:
  DBT_PROFILES_DIR: ./dbt
  GCP_PROJECT: my-project-prod

jobs:
  dbt-lint:
    name: "🔍 Lint & Format Check"
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: 'pip'
      
      - name: Install dependencies
        run: |
          pip install sqlfluff dbt-core dbt-bigquery
      
      - name: Run SQLFluff lint
        run: |
          sqlfluff lint dbt/models/ \\
            --dialect bigquery \\
            --rules L001,L002,L003,L004,L010,L014,L030,L031 \\
            --format github-annotation-native
      
      - name: Check model naming conventions
        run: |
          # Staging models ต้องขึ้นต้นด้วย stg_
          INVALID_STAGING=$(find dbt/models/staging -name "*.sql" ! -name "stg_*" ! -name "_*" | head -5)
          if [ -n "$INVALID_STAGING" ]; then
            echo "❌ Staging models must start with stg_:"
            echo "$INVALID_STAGING"
            exit 1
          fi
          
          # Mart models ต้องขึ้นต้นด้วย fct_ หรือ dim_
          INVALID_MARTS=$(find dbt/models/marts -name "*.sql" ! -name "fct_*" ! -name "dim_*" ! -name "_*" | head -5)
          if [ -n "$INVALID_MARTS" ]; then
            echo "❌ Mart models must start with fct_ or dim_:"
            echo "$INVALID_MARTS"
            exit 1
          fi
          
          echo "✅ All naming conventions pass"

  dbt-test:
    name: "🧪 dbt Test"
    runs-on: ubuntu-latest
    needs: dbt-lint
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: pip install dbt-core dbt-bigquery
      
      - name: Authenticate to GCP
        uses: google-github-actions/auth@v2
        with:
          credentials_json: \${{ secrets.GCP_SA_KEY }}
      
      - name: dbt deps
        run: cd dbt && dbt deps
      
      - name: dbt compile (check syntax)
        run: cd dbt && dbt compile --target ci
      
      - name: dbt run (CI environment)
        run: |
          cd dbt
          # Run เฉพาะ models ที่เปลี่ยน + downstream
          dbt run --target ci \\
            --select state:modified+ \\
            --defer --state ./prod-manifest/ \\
            --full-refresh
      
      - name: dbt test
        run: |
          cd dbt
          dbt test --target ci \\
            --select state:modified+
      
      - name: Comment PR with results
        if: always()
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const results = fs.readFileSync('dbt/target/run_results.json', 'utf8');
            const parsed = JSON.parse(results);
            
            const summary = parsed.results.reduce((acc, r) => {
              acc[r.status] = (acc[r.status] || 0) + 1;
              return acc;
            }, {});
            
            const body = [
              '## 🧪 dbt CI Results',
              '',
              '| Status | Count |',
              '|--------|-------|',
              ...Object.entries(summary).map(([k, v]) => 
                \`| \${k === 'pass' ? '✅' : '❌'} \${k} | \${v} |\`
              ),
              '',
              \`Total: \${parsed.results.length} models\`,
            ].join('\\n');
            
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: body
            });

  dbt-deploy:
    name: "🚀 Deploy to Production"
    runs-on: ubuntu-latest
    needs: dbt-test
    if: github.event.pull_request.merged == true
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup & Auth
        # ... setup steps ...
        run: echo "Setting up..."
      
      - name: dbt run (Production)
        run: |
          cd dbt
          dbt run --target prod --full-refresh
          dbt test --target prod
      
      - name: Save manifest for slim CI
        run: |
          cp dbt/target/manifest.json dbt/prod-manifest/manifest.json
      
      - name: Notify Slack
        uses: 8398a7/action-slack@v3
        with:
          status: \${{ job.status }}
          text: "dbt deployment to Production completed!"
          webhook_url: \${{ secrets.SLACK_WEBHOOK }}</code></pre>

<h3>🏗️ Terraform — Infrastructure as Code</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> Terraform คือ "พิมพ์เขียว" ของ infrastructure — แทนที่จะกดปุ่มสร้าง resource บน GCP Console คุณเขียน code ที่อธิบายว่าต้องการอะไร แล้ว Terraform สร้างให้ ข้อดีคือ: 1) version controlled 2) reproducible 3) reviewable 4) สร้าง/ทำลายได้ง่าย
</div>

<pre><code class="language-hcl"># terraform/main.tf
# Data Platform Infrastructure on GCP

terraform {
  required_version = ">= 1.5"
  
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
  
  backend "gcs" {
    bucket = "company-terraform-state"
    prefix = "data-platform"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# ============================================
# Variables
# ============================================
variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP Region"
  type        = string
  default     = "asia-southeast1"
}

variable "environment" {
  description = "Environment (dev/staging/prod)"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod"
  }
}

# ============================================
# BigQuery Datasets
# ============================================
resource "google_bigquery_dataset" "raw" {
  dataset_id    = "raw_\${var.environment}"
  friendly_name = "Raw Data (\${var.environment})"
  description   = "Raw ingested data from sources"
  location      = var.region
  
  default_table_expiration_ms    = var.environment == "dev" ? 2592000000 : null  # 30 days in dev
  default_partition_expiration_ms = var.environment == "prod" ? 31536000000 : null  # 1 year in prod
  
  labels = {
    environment = var.environment
    team        = "data-engineering"
    managed_by  = "terraform"
  }
  
  access {
    role          = "OWNER"
    special_group = "projectOwners"
  }
  
  access {
    role           = "READER"
    group_by_email = "data-analysts@company.com"
  }
}

resource "google_bigquery_dataset" "staging" {
  dataset_id    = "staging_\${var.environment}"
  friendly_name = "Staging Data (\${var.environment})"
  location      = var.region
  
  labels = {
    environment = var.environment
    team        = "data-engineering"
  }
}

resource "google_bigquery_dataset" "marts" {
  dataset_id    = "marts_\${var.environment}"
  friendly_name = "Data Marts (\${var.environment})"
  location      = var.region
  
  labels = {
    environment = var.environment
    team        = "data-engineering"
  }
}

# ============================================
# Cloud Storage Buckets
# ============================================
resource "google_storage_bucket" "data_lake" {
  name          = "\${var.project_id}-data-lake-\${var.environment}"
  location      = var.region
  storage_class = "STANDARD"
  
  uniform_bucket_level_access = true
  
  versioning {
    enabled = var.environment == "prod"
  }
  
  lifecycle_rule {
    condition {
      age = 90
    }
    action {
      type          = "SetStorageClass"
      storage_class = "NEARLINE"
    }
  }
  
  lifecycle_rule {
    condition {
      age = 365
    }
    action {
      type          = "SetStorageClass"
      storage_class = "COLDLINE"
    }
  }
  
  labels = {
    environment = var.environment
    team        = "data-engineering"
  }
}

# ============================================
# Service Accounts
# ============================================
resource "google_service_account" "airflow_sa" {
  account_id   = "airflow-\${var.environment}"
  display_name = "Airflow Service Account (\${var.environment})"
  description  = "SA for Cloud Composer / Airflow"
}

resource "google_project_iam_member" "airflow_bq" {
  project = var.project_id
  role    = "roles/bigquery.dataEditor"
  member  = "serviceAccount:\${google_service_account.airflow_sa.email}"
}

resource "google_project_iam_member" "airflow_gcs" {
  project = var.project_id
  role    = "roles/storage.objectAdmin"
  member  = "serviceAccount:\${google_service_account.airflow_sa.email}"
}

# ============================================
# Cloud Composer (Airflow)
# ============================================
resource "google_composer_environment" "airflow" {
  count  = var.environment == "prod" ? 1 : 0
  name   = "data-pipeline-\${var.environment}"
  region = var.region
  
  config {
    software_config {
      image_version = "composer-2.7.1-airflow-2.7.3"
      
      pypi_packages = {
        "dbt-core"     = "==1.7.0"
        "dbt-bigquery" = "==1.7.0"
        "soda-core"    = ">=3.0.0"
      }
      
      env_variables = {
        ENVIRONMENT = var.environment
        GCP_PROJECT = var.project_id
      }
    }
    
    workloads_config {
      scheduler {
        cpu        = 2
        memory_gb  = 4
        storage_gb = 10
        count      = 2
      }
      web_server {
        cpu        = 1
        memory_gb  = 2
        storage_gb = 5
      }
      worker {
        cpu        = 2
        memory_gb  = 4
        storage_gb = 10
        min_count  = 2
        max_count  = 6
      }
    }
    
    node_config {
      service_account = google_service_account.airflow_sa.email
    }
  }
}

# ============================================
# Outputs
# ============================================
output "data_lake_bucket" {
  value = google_storage_bucket.data_lake.name
}

output "bigquery_datasets" {
  value = {
    raw     = google_bigquery_dataset.raw.dataset_id
    staging = google_bigquery_dataset.staging.dataset_id
    marts   = google_bigquery_dataset.marts.dataset_id
  }
}</code></pre>

<pre><code class="language-bash"># Terraform workflow
# ============================================

# 1. Initialize Terraform
terraform init

# 2. Plan (ดูว่าจะสร้าง/เปลี่ยนอะไร)
terraform plan -var="project_id=my-project" -var="environment=prod"

# 3. Apply (สร้าง/เปลี่ยน infrastructure จริง)
terraform apply -var="project_id=my-project" -var="environment=prod"

# 4. Destroy (ทำลาย — ระวัง!)
terraform destroy -var="project_id=my-project" -var="environment=dev"</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ลืมใช้ remote backend</strong> → terraform state file อยู่ใน local เครื่องเดียว ถ้าเครื่องพัง = จบ<br>
2. <strong>Hardcode secrets ใน .tf files</strong> → ใช้ Secret Manager หรือ environment variables แทน<br>
3. <strong>ไม่ lock state</strong> → สอง developer apply พร้อมกัน = infrastructure เพี้ยน<br>
4. <strong>ไม่แยก environment</strong> → terraform destroy dev แล้วลบ prod ไปด้วย
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> เขียน GitHub Actions workflow สำหรับ Airflow DAGs ที่: lint Python, validate DAGs, deploy ไป Cloud Composer<br>
<strong>ข้อ 2:</strong> เขียน Terraform config สร้าง BigQuery dataset + GCS bucket + Service Account สำหรับ staging environment<br>
<strong>ข้อ 3:</strong> ออกแบบ branching strategy สำหรับ data team (feature branches → develop → main)
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: ทำไมต้องใช้ Terraform แทนการกดปุ่มบน Cloud Console?</strong><br>
<strong>A:</strong> 1) Version controlled — review changes ก่อน apply 2) Reproducible — สร้าง environment ใหม่ได้เหมือนเดิมทุกครั้ง 3) Auditable — ดู history ของ infrastructure changes 4) Consistent — ลด human error 5) Scalable — manage หลาย environments จาก code เดียว<br><br>
<strong>Q: CI/CD สำหรับ data pipeline ต่างจาก software อย่างไร?</strong><br>
<strong>A:</strong> ต้องเพิ่ม data-specific testing: schema validation, data quality checks, freshness checks, backward compatibility ของ schema changes, และ slim CI ที่ test เฉพาะ models ที่เปลี่ยน
</div>
`
  },
  {
    number: 7,
    slug: 'data-governance',
    emoji: '🔐',
    title: 'Data Governance & Security (PDPA/GDPR)',
    content: `
<h2>🔐 Data Governance & Security — เรื่องที่ Data Engineer ต้องรู้</h2>

<p>หลายคนคิดว่า Data Governance เป็นเรื่องของ Legal หรือ Compliance team — แต่จริงๆ แล้ว <strong>Data Engineer คือคนที่ implement มัน</strong> ถ้าคุณออกแบบ pipeline ที่ไม่คำนึงถึง privacy ตั้งแต่แรก วันหนึ่งอาจถูกปรับเป็น "ล้านบาท" ตาม PDPA</p>

<h3>📜 PDPA (พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล) — สิ่งที่ DE ต้องรู้</h3>

<pre><code class="language-text">PDPA คืออะไร?
==============
• พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
• บังคับใช้เต็มรูปแบบ 1 มิ.ย. 2565
• คล้าย GDPR ของ EU แต่ปรับให้เหมาะกับบริบทไทย
• โทษ: ปรับสูงสุด 5 ล้านบาท + จำคุกไม่เกิน 1 ปี

ข้อมูลส่วนบุคคล (Personal Data):
• ชื่อ-นามสกุล, เลขบัตรประชาชน
• เบอร์โทรศัพท์, อีเมล, ที่อยู่
• IP Address, Cookie ID, Device ID
• ข้อมูล GPS/Location
• รูปถ่าย, ลายนิ้วมือ (Biometric)

ข้อมูลอ่อนไหว (Sensitive Data):
• เชื้อชาติ, ศาสนา
• ข้อมูลสุขภาพ
• ประวัติอาชญากรรม
• ข้อมูลพันธุกรรม
• รสนิยมทางเพศ

สิทธิของเจ้าของข้อมูล:
1. Right to Access — ขอดูข้อมูลของตัวเอง
2. Right to Rectification — ขอแก้ไขข้อมูล
3. Right to Erasure — ขอลบข้อมูล ("Right to be forgotten")
4. Right to Portability — ขอย้ายข้อมูลไปที่อื่น
5. Right to Object — ปฏิเสธการใช้ข้อมูล</code></pre>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> เวลาออกแบบ pipeline ให้ถามตัวเอง 3 คำถาม:<br>
1. <strong>"ข้อมูลนี้เป็น Personal Data ไหม?"</strong><br>
2. <strong>"ใครมีสิทธิ์เห็นข้อมูลนี้?"</strong><br>
3. <strong>"ถ้าลูกค้าขอลบข้อมูล เราทำได้ไหม?"</strong><br>
ถ้าตอบไม่ได้ → pipeline ยังออกแบบไม่ดีพอ
</div>

<h3>🛡️ Data Classification & Column-Level Security</h3>

<pre><code class="language-python"># data_governance/classifier.py
"""
Data Classification System
จัดประเภทข้อมูลตามระดับความอ่อนไหว
"""
import re
from enum import Enum
from typing import Dict, List, Optional
from dataclasses import dataclass


class DataClassification(Enum):
    PUBLIC = "PUBLIC"               # เปิดเผยได้
    INTERNAL = "INTERNAL"           # ภายในบริษัท
    CONFIDENTIAL = "CONFIDENTIAL"   # ข้อมูลลับ
    RESTRICTED = "RESTRICTED"       # ข้อมูลอ่อนไหว (PDPA)


@dataclass
class ColumnClassification:
    column_name: str
    classification: DataClassification
    pii_type: Optional[str]
    masking_rule: str
    retention_days: int


# กฎการจัดประเภทข้อมูลอัตโนมัติ
CLASSIFICATION_RULES = {
    # RESTRICTED — ต้อง mask/encrypt เสมอ
    DataClassification.RESTRICTED: {
        "patterns": [
            r"citizen_id", r"national_id", r"id_card",
            r"passport", r"credit_card", r"bank_account",
            r"salary", r"health", r"medical",
            r"religion", r"ethnicity", r"biometric",
        ],
        "masking_rule": "SHA256_HASH",
        "retention_days": 365,
    },
    
    # CONFIDENTIAL — จำกัดการเข้าถึง
    DataClassification.CONFIDENTIAL: {
        "patterns": [
            r"email", r"phone", r"mobile", r"address",
            r"birth_date", r"dob", r"age",
            r"full_name", r"first_name", r"last_name",
            r"ip_address", r"device_id", r"location",
        ],
        "masking_rule": "PARTIAL_MASK",
        "retention_days": 730,
    },
    
    # INTERNAL — เข้าถึงได้ภายในบริษัท
    DataClassification.INTERNAL: {
        "patterns": [
            r"user_id", r"customer_id", r"order_id",
            r"session_id", r"cookie",
        ],
        "masking_rule": "PSEUDONYMIZE",
        "retention_days": 1095,  # 3 years
    },
}


def classify_column(column_name: str) -> ColumnClassification:
    """จัดประเภท column อัตโนมัติจากชื่อ"""
    
    col_lower = column_name.lower()
    
    for classification, rules in CLASSIFICATION_RULES.items():
        for pattern in rules["patterns"]:
            if re.search(pattern, col_lower):
                return ColumnClassification(
                    column_name=column_name,
                    classification=classification,
                    pii_type=pattern,
                    masking_rule=rules["masking_rule"],
                    retention_days=rules["retention_days"],
                )
    
    # Default: PUBLIC
    return ColumnClassification(
        column_name=column_name,
        classification=DataClassification.PUBLIC,
        pii_type=None,
        masking_rule="NONE",
        retention_days=-1,  # No expiry
    )


def classify_table(columns: List[str]) -> Dict[str, ColumnClassification]:
    """จัดประเภททุก columns ในตาราง"""
    return {col: classify_column(col) for col in columns}


# Usage
if __name__ == "__main__":
    columns = [
        "order_id", "customer_name", "email", "phone_number",
        "citizen_id", "credit_card_number", "order_total",
        "product_name", "ip_address", "birth_date"
    ]
    
    results = classify_table(columns)
    for col, cls in results.items():
        icon = {
            DataClassification.RESTRICTED: "🔴",
            DataClassification.CONFIDENTIAL: "🟡",
            DataClassification.INTERNAL: "🔵",
            DataClassification.PUBLIC: "🟢",
        }[cls.classification]
        
        print(f"{icon} {col:25s} → {cls.classification.value:15s} | Mask: {cls.masking_rule}")</code></pre>

<h3>🔒 Data Masking & Encryption in SQL</h3>

<pre><code class="language-sql">-- ============================================
-- BigQuery: Column-Level Security with Policy Tags
-- ============================================

-- 1. สร้าง Policy Tag Taxonomy
-- (ทำผ่าน Data Catalog → Policy Tags)

-- 2. สร้าง View ที่ mask ข้อมูลตาม role
CREATE OR REPLACE VIEW \`project.marts.v_customers_masked\` AS
SELECT
    customer_id,
    
    -- Mask ชื่อ: "สมชาย ใจดี" → "สม*** ใจ**"
    CONCAT(
        SUBSTR(first_name, 1, 2), 
        REPEAT('*', LENGTH(first_name) - 2)
    ) AS first_name_masked,
    
    -- Mask email: "somchai@gmail.com" → "som***@gmail.com"
    CONCAT(
        SUBSTR(email, 1, 3),
        REPEAT('*', STRPOS(email, '@') - 4),
        SUBSTR(email, STRPOS(email, '@'))
    ) AS email_masked,
    
    -- Mask phone: "0891234567" → "089***4567"
    CONCAT(
        SUBSTR(phone_number, 1, 3),
        '***',
        SUBSTR(phone_number, -4)
    ) AS phone_masked,
    
    -- Hash citizen_id (ใช้สำหรับ join ได้แต่ไม่เปิดเผยค่าจริง)
    TO_HEX(SHA256(CAST(citizen_id AS BYTES))) AS citizen_id_hashed,
    
    -- ข้อมูลที่ไม่ต้อง mask
    membership_tier,
    registration_date,
    total_orders,
    lifetime_value

FROM \`project.warehouse.dim_customers\`
WHERE is_current = TRUE;


-- ============================================
-- Row-Level Security: ให้แต่ละ region เห็นเฉพาะข้อมูลตัวเอง
-- ============================================
CREATE OR REPLACE ROW ACCESS POLICY region_filter
ON \`project.marts.fct_orders\`
GRANT TO (
    "group:data-analysts-bkk@company.com"
)
FILTER USING (region = "Bangkok");

CREATE OR REPLACE ROW ACCESS POLICY region_filter_north
ON \`project.marts.fct_orders\`
GRANT TO (
    "group:data-analysts-cm@company.com"
)
FILTER USING (region = "Chiang Mai");</code></pre>

<h3>🗑️ Data Retention & Right to be Forgotten</h3>

<pre><code class="language-python"># data_governance/data_retention.py
"""
Data Retention & Deletion Pipeline
รองรับ PDPA Right to be Forgotten
"""
import logging
from datetime import datetime, timedelta
from google.cloud import bigquery

logger = logging.getLogger(__name__)


class DataRetentionManager:
    """จัดการ Data Retention ตาม PDPA/GDPR"""
    
    def __init__(self, project_id: str):
        self.client = bigquery.Client(project=project_id)
        self.project_id = project_id
    
    def process_deletion_request(
        self, customer_id: str, request_id: str
    ):
        """ลบข้อมูลลูกค้าจากทุก table (Right to be Forgotten)"""
        
        logger.info(
            f"Processing deletion request {request_id} "
            f"for customer {customer_id}"
        )
        
        # Tables ที่มีข้อมูลลูกค้า
        tables_with_customer_data = [
            ("warehouse.dim_customers", "customer_id"),
            ("warehouse.fct_orders", "customer_id"),
            ("warehouse.fct_events", "user_id"),
            ("warehouse.raw_user_profiles", "user_id"),
            ("marts.customer_360", "customer_id"),
        ]
        
        deletion_log = []
        
        for table, id_column in tables_with_customer_data:
            try:
                # Count rows ก่อนลบ
                count_query = f"""
                    SELECT COUNT(*) as cnt 
                    FROM \`{self.project_id}.{table}\`
                    WHERE {id_column} = '{customer_id}'
                """
                count_result = list(
                    self.client.query(count_query).result()
                )[0].cnt
                
                if count_result > 0:
                    # ลบข้อมูล
                    delete_query = f"""
                        DELETE FROM \`{self.project_id}.{table}\`
                        WHERE {id_column} = '{customer_id}'
                    """
                    self.client.query(delete_query).result()
                    
                    logger.info(
                        f"✅ Deleted {count_result} rows from {table}"
                    )
                    
                    deletion_log.append({
                        "table": table,
                        "rows_deleted": count_result,
                        "timestamp": datetime.utcnow().isoformat(),
                    })
                else:
                    logger.info(f"ℹ️ No data found in {table}")
                    
            except Exception as e:
                logger.error(f"❌ Error deleting from {table}: {e}")
                raise
        
        # บันทึก deletion log (สำหรับ audit)
        self._save_deletion_log(request_id, customer_id, deletion_log)
        
        return deletion_log
    
    def enforce_retention_policy(self):
        """ลบข้อมูลที่เกิน retention period"""
        
        retention_policies = {
            "raw.user_events": {"column": "event_timestamp", "days": 365},
            "raw.clickstream": {"column": "created_at", "days": 90},
            "raw.api_logs": {"column": "log_timestamp", "days": 30},
        }
        
        for table, policy in retention_policies.items():
            cutoff_date = (
                datetime.utcnow() - timedelta(days=policy["days"])
            ).strftime("%Y-%m-%d")
            
            delete_query = f"""
                DELETE FROM \`{self.project_id}.{table}\`
                WHERE {policy['column']} < '{cutoff_date}'
            """
            
            result = self.client.query(delete_query).result()
            logger.info(
                f"🗑️ Retention cleanup: {table} "
                f"(deleted records before {cutoff_date})"
            )
    
    def _save_deletion_log(self, request_id, customer_id, log):
        """บันทึก audit log ของการลบข้อมูล"""
        rows = [{
            "request_id": request_id,
            "customer_id": customer_id,
            "deletion_details": str(log),
            "processed_at": datetime.utcnow().isoformat(),
            "processed_by": "data-retention-service",
        }]
        
        table_ref = f"{self.project_id}.audit.deletion_log"
        self.client.insert_rows_json(table_ref, rows)</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>เก็บ PII ใน log files</strong> → ลืมไปว่า log ก็ต้องลบตาม Right to be Forgotten<br>
2. <strong>ไม่ทำ data lineage</strong> → ไม่รู้ว่า personal data ไหลไปอยู่ที่ไหนบ้าง<br>
3. <strong>ใช้ citizen_id เป็น primary key</strong> → ลบแล้ว reference integrity พัง<br>
4. <strong>ลืม backup/snapshot</strong> → ลบจาก main table แต่ยังอยู่ใน backup
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> ออกแบบ data pipeline ที่ anonymize PII data ก่อนส่งเข้า analytics layer<br>
<strong>ข้อ 2:</strong> เขียน SQL view ที่ mask ข้อมูลตาม role ของ user (admin เห็นหมด, analyst เห็นแค่ masked)<br>
<strong>ข้อ 3:</strong> ออกแบบ process สำหรับ Right to be Forgotten ที่ครอบคลุมทั้ง Data Lake, Data Warehouse, และ Backups
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: PDPA ส่งผลต่อการออกแบบ Data Pipeline อย่างไร?</strong><br>
<strong>A:</strong> 1) ต้อง classify ข้อมูลตามระดับความอ่อนไหว 2) ต้อง mask/encrypt PII ทุก layer 3) ต้องออกแบบให้ลบข้อมูลรายบุคคลได้ 4) ต้องมี audit log 5) ต้องมี consent management 6) ต้องกำหนด retention period<br><br>
<strong>Q: Pseudonymization กับ Anonymization ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> Pseudonymization = แทนที่ identifier ด้วย pseudo-ID ที่สามารถ map กลับได้ (reversible) / Anonymization = ลบ identifier ออกจนไม่สามารถระบุตัวบุคคลได้เลย (irreversible) — PDPA ถือว่า pseudonymized data ยังเป็น personal data อยู่
</div>
`
  },
  {
    number: 8,
    slug: 'monitoring',
    emoji: '📊',
    title: 'Monitoring & Observability (Grafana, SLA/SLO)',
    content: `
<h2>📊 Monitoring & Observability — เห็นปัญหาก่อนที่ user จะบ่น</h2>

<p>Pipeline ที่ดีที่สุดก็พังได้ — สิ่งที่แยก team ที่ดีออกจาก team ที่เก่ง คือ <strong>"รู้ว่าพังก่อนที่ user จะรู้ และแก้ได้เร็ว"</strong> Chapter นี้จะสอนคุณสร้างระบบ monitoring ที่ครอบคลุม</p>

<h3>📏 SLA / SLO / SLI — ตกลงกับ Stakeholders ก่อน</h3>

<div class="tip-box">
<strong>🧠 วิธีคิด:</strong> คิดเหมือนสั่งอาหารเดลิเวอรี่:<br>
• <strong>SLA (Service Level Agreement)</strong> = สัญญา: "ส่งภายใน 30 นาที ไม่งั้นคืนเงิน"<br>
• <strong>SLO (Service Level Objective)</strong> = เป้า internal: "ตั้งเป้าส่งภายใน 20 นาที"<br>
• <strong>SLI (Service Level Indicator)</strong> = ตัวชี้วัดจริง: "เวลาเฉลี่ยที่ส่ง = 18 นาที"<br><br>
SLO ต้อง strict กว่า SLA เสมอ — ถ้ารอให้ SLA พัง แปลว่าสายเกินแก้แล้ว
</div>

<pre><code class="language-yaml"># monitoring/sla_definitions.yaml
# Data Pipeline SLA/SLO Definitions

pipelines:
  daily_revenue_report:
    description: "รายงานยอดขายรายวัน"
    stakeholders: ["finance-team", "c-level"]
    
    sla:
      freshness: "Data available by 8:00 AM ICT"
      completeness: "99.9% of orders included"
      accuracy: "Revenue matches source within 0.01%"
    
    slo:
      freshness_target: "6:00 AM ICT"       # Buffer 2 ชม.
      completeness_target: "99.99%"
      pipeline_success_rate: "99.5%"
      max_pipeline_duration_minutes: 120
    
    sli:
      - metric: "pipeline_completion_time"
        measurement: "Timestamp when dbt mart model completes"
      - metric: "row_count_delta"
        measurement: "ABS(today_count - yesterday_count) / yesterday_count"
      - metric: "revenue_reconciliation"
        measurement: "ABS(bq_total - source_total) / source_total"
    
    alerting:
      warning_threshold: "6:30 AM ICT"     # SLO เริ่มตก
      critical_threshold: "7:30 AM ICT"     # ใกล้ SLA
      breach_threshold: "8:00 AM ICT"       # SLA พัง!
      channels: ["slack-data-alerts", "pagerduty"]

  realtime_events:
    description: "Streaming user events pipeline"
    
    sla:
      latency: "Events available within 5 minutes"
      availability: "99.9% uptime"
    
    slo:
      latency_target_p95: "2 minutes"
      latency_target_p99: "4 minutes"
      consumer_lag_max: 10000
    
    alerting:
      warning_consumer_lag: 5000
      critical_consumer_lag: 8000</code></pre>

<h3>📊 Grafana Dashboard — สร้าง Data Pipeline Dashboard</h3>

<pre><code class="language-python"># monitoring/metrics_collector.py
"""
Data Pipeline Metrics Collector
เก็บ metrics แล้วส่งไป Prometheus/Grafana
"""
import time
import logging
from datetime import datetime, timedelta
from prometheus_client import (
    Counter, Gauge, Histogram, Summary,
    start_http_server, CollectorRegistry
)
from google.cloud import bigquery

logger = logging.getLogger(__name__)


# ============================================
# Define Prometheus Metrics
# ============================================

# Pipeline execution metrics
PIPELINE_RUNS = Counter(
    'data_pipeline_runs_total',
    'Total pipeline executions',
    ['pipeline_name', 'status']  # labels
)

PIPELINE_DURATION = Histogram(
    'data_pipeline_duration_seconds',
    'Pipeline execution duration',
    ['pipeline_name'],
    buckets=[60, 300, 600, 1800, 3600, 7200]
)

# Data quality metrics
ROW_COUNT = Gauge(
    'data_table_row_count',
    'Current row count per table',
    ['dataset', 'table_name']
)

DATA_FRESHNESS = Gauge(
    'data_freshness_seconds',
    'Seconds since last data update',
    ['dataset', 'table_name']
)

NULL_RATE = Gauge(
    'data_null_rate',
    'Percentage of NULL values',
    ['dataset', 'table_name', 'column_name']
)

DUPLICATE_COUNT = Gauge(
    'data_duplicate_count',
    'Number of duplicate rows',
    ['dataset', 'table_name']
)

# Kafka consumer metrics
CONSUMER_LAG = Gauge(
    'kafka_consumer_lag',
    'Consumer group lag',
    ['consumer_group', 'topic', 'partition']
)

# Cost metrics
BQ_BYTES_SCANNED = Counter(
    'bigquery_bytes_scanned_total',
    'Total bytes scanned by queries',
    ['user', 'dataset']
)


class DataQualityMonitor:
    """Monitor Data Quality metrics สำหรับ Grafana"""
    
    def __init__(self, project_id: str):
        self.client = bigquery.Client(project=project_id)
        self.project_id = project_id
    
    def check_freshness(self, dataset: str, table: str, 
                         timestamp_column: str):
        """เช็คว่าข้อมูลล่าสุดเก่าแค่ไหน"""
        
        query = f"""
            SELECT 
                TIMESTAMP_DIFF(
                    CURRENT_TIMESTAMP(),
                    MAX({timestamp_column}),
                    SECOND
                ) AS freshness_seconds
            FROM \`{self.project_id}.{dataset}.{table}\`
        """
        
        result = list(self.client.query(query).result())[0]
        freshness = result.freshness_seconds or 999999
        
        DATA_FRESHNESS.labels(
            dataset=dataset, table_name=table
        ).set(freshness)
        
        return freshness
    
    def check_row_count(self, dataset: str, table: str):
        """เช็ค row count และเปรียบเทียบกับวันก่อน"""
        
        query = f"""
            WITH today AS (
                SELECT COUNT(*) AS cnt
                FROM \`{self.project_id}.{dataset}.{table}\`
                WHERE DATE(_loaded_at) = CURRENT_DATE()
            ),
            yesterday AS (
                SELECT COUNT(*) AS cnt
                FROM \`{self.project_id}.{dataset}.{table}\`
                WHERE DATE(_loaded_at) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
            )
            SELECT 
                t.cnt AS today_count,
                y.cnt AS yesterday_count,
                SAFE_DIVIDE(ABS(t.cnt - y.cnt), y.cnt) * 100 AS pct_change
            FROM today t, yesterday y
        """
        
        result = list(self.client.query(query).result())[0]
        
        ROW_COUNT.labels(
            dataset=dataset, table_name=table
        ).set(result.today_count)
        
        return {
            "today": result.today_count,
            "yesterday": result.yesterday_count,
            "pct_change": result.pct_change,
        }
    
    def check_null_rates(self, dataset: str, table: str,
                          columns: list):
        """เช็ค null rate ของ critical columns"""
        
        null_checks = ", ".join([
            f"ROUND(COUNTIF({col} IS NULL) / COUNT(*) * 100, 2) AS {col}_null_pct"
            for col in columns
        ])
        
        query = f"""
            SELECT {null_checks}
            FROM \`{self.project_id}.{dataset}.{table}\`
            WHERE DATE(_loaded_at) = CURRENT_DATE()
        """
        
        result = list(self.client.query(query).result())[0]
        
        rates = {}
        for col in columns:
            rate = getattr(result, f"{col}_null_pct", 0)
            NULL_RATE.labels(
                dataset=dataset, table_name=table, column_name=col
            ).set(rate)
            rates[col] = rate
        
        return rates
    
    def run_all_checks(self):
        """Run ทุก checks แล้วอัพเดท Prometheus metrics"""
        
        tables_to_monitor = [
            {
                "dataset": "warehouse",
                "table": "fct_orders",
                "timestamp_col": "_loaded_at",
                "critical_columns": ["order_id", "customer_id", "total_amount"],
            },
            {
                "dataset": "warehouse",
                "table": "dim_customers",
                "timestamp_col": "_loaded_at",
                "critical_columns": ["customer_id", "customer_name", "email"],
            },
        ]
        
        for table_config in tables_to_monitor:
            ds = table_config["dataset"]
            tbl = table_config["table"]
            
            logger.info(f"Checking {ds}.{tbl}...")
            
            freshness = self.check_freshness(
                ds, tbl, table_config["timestamp_col"]
            )
            row_counts = self.check_row_count(ds, tbl)
            null_rates = self.check_null_rates(
                ds, tbl, table_config["critical_columns"]
            )
            
            logger.info(
                f"  Freshness: {freshness}s | "
                f"Rows: {row_counts['today']} | "
                f"Nulls: {null_rates}"
            )


def main():
    """Start metrics collector"""
    # Start Prometheus HTTP server
    start_http_server(8000)
    logger.info("Prometheus metrics server on :8000")
    
    monitor = DataQualityMonitor("my-gcp-project")
    
    # Run checks ทุก 5 นาที
    while True:
        try:
            monitor.run_all_checks()
        except Exception as e:
            logger.error(f"Check failed: {e}")
        
        time.sleep(300)  # 5 minutes


if __name__ == "__main__":
    main()</code></pre>

<h3>🚨 Alerting — แจ้งเตือนเมื่อมีปัญหา</h3>

<pre><code class="language-python"># monitoring/alerting.py
"""
Smart Alerting System
แจ้งเตือนแบบฉลาด — ไม่ spam alert จนคนชินชา
"""
import requests
from datetime import datetime
from enum import Enum


class AlertSeverity(Enum):
    INFO = "info"
    WARNING = "warning"
    CRITICAL = "critical"
    BREACH = "breach"


class AlertManager:
    """จัดการ alerts อย่างเป็นระบบ"""
    
    def __init__(self, slack_webhook: str, pagerduty_key: str = None):
        self.slack_webhook = slack_webhook
        self.pagerduty_key = pagerduty_key
        self.alert_history = {}
    
    def send_alert(
        self,
        pipeline_name: str,
        severity: AlertSeverity,
        message: str,
        details: dict = None,
    ):
        """ส่ง alert ตาม severity"""
        
        # De-duplication: ไม่ส่ง alert ซ้ำภายใน 15 นาที
        alert_key = f"{pipeline_name}:{severity.value}"
        now = datetime.utcnow()
        
        if alert_key in self.alert_history:
            last_sent = self.alert_history[alert_key]
            if (now - last_sent).seconds < 900:
                return  # Skip duplicate
        
        self.alert_history[alert_key] = now
        
        # Severity-based routing
        if severity == AlertSeverity.INFO:
            self._send_slack(pipeline_name, severity, message, details)
            
        elif severity == AlertSeverity.WARNING:
            self._send_slack(pipeline_name, severity, message, details)
            
        elif severity == AlertSeverity.CRITICAL:
            self._send_slack(pipeline_name, severity, message, details)
            if self.pagerduty_key:
                self._send_pagerduty(pipeline_name, message)
                
        elif severity == AlertSeverity.BREACH:
            self._send_slack(pipeline_name, severity, message, details)
            if self.pagerduty_key:
                self._send_pagerduty(pipeline_name, message)
    
    def _send_slack(self, pipeline, severity, message, details):
        """ส่ง Slack notification"""
        
        emoji = {
            AlertSeverity.INFO: "ℹ️",
            AlertSeverity.WARNING: "⚠️",
            AlertSeverity.CRITICAL: "🔴",
            AlertSeverity.BREACH: "🚨",
        }[severity]
        
        color = {
            AlertSeverity.INFO: "#36a64f",
            AlertSeverity.WARNING: "#ff9900",
            AlertSeverity.CRITICAL: "#ff0000",
            AlertSeverity.BREACH: "#8b0000",
        }[severity]
        
        payload = {
            "attachments": [{
                "color": color,
                "title": f"{emoji} [{severity.value.upper()}] {pipeline}",
                "text": message,
                "fields": [
                    {"title": k, "value": str(v), "short": True}
                    for k, v in (details or {}).items()
                ],
                "footer": "Data Pipeline Monitor",
                "ts": int(datetime.utcnow().timestamp()),
            }]
        }
        
        requests.post(self.slack_webhook, json=payload)
    
    def _send_pagerduty(self, pipeline, message):
        """ส่ง PagerDuty alert สำหรับ critical issues"""
        
        payload = {
            "routing_key": self.pagerduty_key,
            "event_action": "trigger",
            "payload": {
                "summary": f"Data Pipeline Alert: {pipeline}",
                "severity": "critical",
                "source": "data-monitoring",
                "custom_details": {"message": message},
            },
        }
        
        requests.post(
            "https://events.pagerduty.com/v2/enqueue",
            json=payload
        )</code></pre>

<div class="tip-box">
<strong>💡 ทริค Alerting ที่ดี:</strong><br>
1. <strong>Alert fatigue คือศัตรู</strong> — ถ้าส่ง alert มากเกินไป คนจะเมินหมด<br>
2. <strong>ทุก alert ต้อง actionable</strong> — ได้รับแล้วต้องรู้ว่าทำอะไรต่อ<br>
3. <strong>De-duplicate</strong> — ไม่ส่ง alert เรื่องเดิมซ้ำภายใน 15 นาที<br>
4. <strong>Severity routing</strong> — INFO → Slack เฉยๆ, CRITICAL → PagerDuty ปลุกคน on-call<br>
5. <strong>Include runbook link</strong> — ทุก alert ควรมี link ไปหา runbook ที่บอกวิธีแก้
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br><br>
<strong>ข้อ 1:</strong> กำหนด SLA/SLO/SLI สำหรับ pipeline ที่ส่ง daily marketing report (stakeholder = marketing team)<br>
<strong>ข้อ 2:</strong> เขียน Data Quality Monitor ที่เช็ค: row count anomaly (เทียบ 7-day average), null rate spike, schema drift<br>
<strong>ข้อ 3:</strong> ออกแบบ Grafana dashboard layout สำหรับ Data Platform ที่แสดง: pipeline status, data freshness, cost, consumer lag
</div>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์:</strong><br><br>
<strong>Q: SLA, SLO, SLI ต่างกันอย่างไร?</strong><br>
<strong>A:</strong> SLA = สัญญากับ stakeholder (external promise), SLO = เป้าหมาย internal ที่ strict กว่า SLA, SLI = ตัวชี้วัดจริงที่วัดได้ ความสัมพันธ์: SLI วัด → เทียบกับ SLO → ถ้า SLO ตก → เสี่ยง SLA breach<br><br>
<strong>Q: Alert fatigue คืออะไร? แก้ยังไง?</strong><br>
<strong>A:</strong> Alert fatigue = ส่ง alert มากจนคนเมินไม่สนใจ แก้โดย: 1) ลด false positive 2) จัด severity ให้ถูก 3) De-duplicate alerts 4) ทุก alert ต้อง actionable 5) Review alerts ทุกสัปดาห์ ลบ alerts ที่ไม่มีคน action
</div>
`
  },
  {
    number: 9,
    slug: 'project-201',
    emoji: '🏆',
    title: 'Intermediate Project',
    content: `
<h2>🏆 Intermediate Project — สร้าง Production-Ready Data Platform</h2>

<p>ถึงเวลาเอาทุกอย่างที่เรียนมาทั้ง 9 chapters มารวมกันเป็น <strong>End-to-End Project</strong> ที่ใกล้เคียงกับงานจริงมากที่สุด โปรเจคนี้จะเป็น portfolio piece ที่แสดงให้เห็นว่าคุณพร้อมเป็น Mid-Level DE</p>

<h3>📋 Project Brief: E-commerce Real-time Analytics Platform</h3>

<pre><code class="language-text">Project: E-commerce Real-time Analytics Platform
=================================================

บริษัท ShopThai (สมมติ) เป็น e-commerce platform ที่มี:
• 500K active users/month
• 50K orders/day
• 10M events/day (clickstream, search, etc.)

Requirements:
1. Batch Pipeline: Daily sales report พร้อมใช้ก่อน 8:00 AM
2. Streaming Pipeline: Real-time order tracking & fraud detection
3. Data Quality: Automated checks ทุก layer
4. Monitoring: Grafana dashboard + alerting
5. Security: PDPA-compliant data handling
6. CI/CD: Automated testing & deployment
7. Infrastructure: Terraform-managed GCP resources

Tech Stack:
• Orchestration: Airflow (Cloud Composer)
• Transformation: dbt
• Streaming: Kafka + Python consumers
• Warehouse: BigQuery
• Storage: Cloud Storage (GCS)
• CI/CD: GitHub Actions
• IaC: Terraform
• Monitoring: Prometheus + Grafana
• Language: Python 3.11, SQL</code></pre>

<h3>🏗️ Architecture Design</h3>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────────────┐
│              ShopThai Data Platform Architecture                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────── Real-time Path ──────────────────────┐     │
│  │                                                       │     │
│  │  Order API ──→ Kafka ──→ Python Consumer ──→ BigQuery  │     │
│  │  Events    ──→ Kafka ──→ Python Consumer ──→ BigQuery  │     │
│  │                  │                                     │     │
│  │                  └──→ Fraud Detection Service          │     │
│  └───────────────────────────────────────────────────────┘     │
│                                                                 │
│  ┌───────────────── Batch Path ──────────────────────────┐     │
│  │                                                       │     │
│  │  MySQL ──→ Airflow ──→ GCS ──→ BigQuery (raw)        │     │
│  │                                    │                   │     │
│  │                              dbt (transform)          │     │
│  │                                    │                   │     │
│  │                        ┌───────────┴──────────┐       │     │
│  │                        │                      │       │     │
│  │                   staging              marts          │     │
│  │                   models            ┌────────┐       │     │
│  │                                     │fct_orders│      │     │
│  │                                     │dim_customers│   │     │
│  │                                     │fct_events  │    │     │
│  │                                     └────────┘       │     │
│  └───────────────────────────────────────────────────────┘     │
│                                                                 │
│  ┌────────────────── Serving ────────────────────────────┐     │
│  │  Looker/Metabase │ API (Cloud Functions) │ ML Models  │     │
│  └───────────────────────────────────────────────────────┘     │
│                                                                 │
│  ┌────────────────── Cross-cutting ─────────────────────┐     │
│  │  Monitoring (Grafana) │ CI/CD │ Data Governance       │     │
│  └───────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘</code></pre>

<h3>📁 Project Structure</h3>

<pre><code class="language-text">shopthai-data-platform/
├── README.md
├── docker-compose.yml
│
├── terraform/                    # Infrastructure as Code
│   ├── main.tf
│   ├── variables.tf
│   ├── bigquery.tf
│   ├── storage.tf
│   ├── iam.tf
│   └── outputs.tf
│
├── airflow/                      # Orchestration
│   ├── dags/
│   │   ├── config/
│   │   │   └── tables.yaml
│   │   ├── ingestion_factory.py
│   │   ├── dbt_daily_pipeline.py
│   │   └── data_quality_dag.py
│   └── plugins/
│       └── custom_sensors.py
│
├── dbt/                          # Transformation
│   ├── dbt_project.yml
│   ├── packages.yml
│   ├── profiles.yml
│   ├── macros/
│   │   ├── audit_columns.sql
│   │   ├── cents_to_baht.sql
│   │   ├── safe_divide.sql
│   │   └── generate_surrogate_key.sql
│   ├── models/
│   │   ├── staging/
│   │   │   ├── _staging_models.yml
│   │   │   ├── stg_orders.sql
│   │   │   ├── stg_customers.sql
│   │   │   └── stg_products.sql
│   │   ├── intermediate/
│   │   │   ├── int_order_items_agg.sql
│   │   │   └── int_customer_orders.sql
│   │   └── marts/
│   │       ├── _marts_models.yml
│   │       ├── fct_orders.sql
│   │       ├── fct_daily_revenue.sql
│   │       ├── dim_customers.sql
│   │       └── dim_products.sql
│   ├── snapshots/
│   │   └── snap_customers.sql
│   └── tests/
│       └── assert_positive_revenue.sql
│
├── streaming/                    # Kafka Streaming
│   ├── docker-compose.kafka.yml
│   ├── producers/
│   │   ├── order_producer.py
│   │   └── event_producer.py
│   ├── consumers/
│   │   ├── order_consumer.py
│   │   └── event_consumer.py
│   └── schemas/
│       ├── order_event.avsc
│       └── user_event.avsc
│
├── monitoring/                   # Monitoring & Alerting
│   ├── prometheus/
│   │   └── prometheus.yml
│   ├── grafana/
│   │   └── dashboards/
│   │       └── data_platform.json
│   ├── metrics_collector.py
│   └── alerting.py
│
├── data_governance/              # Governance & Security
│   ├── classifier.py
│   ├── data_retention.py
│   └── masking_rules.yaml
│
├── tests/                        # Tests
│   ├── test_producer.py
│   ├── test_consumer.py
│   ├── test_data_quality.py
│   └── test_governance.py
│
├── .github/
│   └── workflows/
│       ├── dbt-ci.yml
│       ├── streaming-ci.yml
│       └── terraform-plan.yml
│
├── requirements.txt
└── Makefile</code></pre>

<h3>📝 Implementation Milestones</h3>

<pre><code class="language-text">Week 1: Foundation
==================
□ Setup project structure
□ Write Terraform config (BigQuery, GCS, IAM)
□ terraform apply → สร้าง infrastructure
□ Setup Docker Compose for local development
□ Create sample data generator (Python)

Week 2: Batch Pipeline
======================
□ Create Airflow DAGs for MySQL → GCS → BigQuery ingestion
□ Use Dynamic DAG Factory pattern
□ Build dbt staging models (stg_orders, stg_customers, stg_products)
□ Build dbt intermediate models
□ Build dbt mart models (fct_orders, dim_customers)
□ Add dbt tests (not_null, unique, accepted_values, custom)
□ Create snapshot for SCD Type 2 (snap_customers)
□ Write custom macros (audit_columns, cents_to_baht, etc.)

Week 3: Streaming Pipeline
==========================
□ Setup Kafka cluster (Docker Compose)
□ Build Order Producer (with idempotence, acks=all)
□ Build Order Consumer (batch processing → BigQuery)
□ Build Event Consumer (clickstream → BigQuery)
□ Implement Dead Letter Queue for failed messages
□ Add Schema Registry for Avro schemas

Week 4: Quality, Security, Monitoring
======================================
□ Implement Data Classification system
□ Create masked views for analysts
□ Build Data Retention pipeline (Right to be Forgotten)
□ Setup Prometheus metrics collector
□ Create Grafana dashboard
□ Implement smart alerting (Slack + PagerDuty)
□ Define SLA/SLO/SLI for key pipelines
□ Setup GitHub Actions CI/CD for dbt and streaming
□ Write comprehensive README with architecture docs</code></pre>

<h3>⭐ Grading Rubric</h3>

<pre><code class="language-text">Evaluation Criteria (100 points total)
========================================

1. Architecture & Design (15 pts)
   □ Clear architecture diagram
   □ Proper separation of concerns (batch vs streaming)
   □ Scalable design decisions documented
   □ Trade-offs explained in README

2. Batch Pipeline (20 pts)
   □ Dynamic DAG factory (not hardcoded DAGs)
   □ Proper error handling & retries
   □ dbt models follow naming conventions
   □ Incremental model + snapshot implemented
   □ Custom macros for reusable logic

3. Streaming Pipeline (20 pts)
   □ Kafka producer with proper configs (acks, idempotence)
   □ Consumer with batch processing & manual commit
   □ Dead Letter Queue implementation
   □ Schema evolution strategy

4. Data Quality & Governance (15 pts)
   □ Automated data quality checks
   □ PII classification system
   □ Data masking/encryption
   □ Right to be Forgotten implementation

5. Monitoring & Alerting (15 pts)
   □ Prometheus metrics defined
   □ Grafana dashboard created
   □ SLA/SLO/SLI defined
   □ Smart alerting (severity-based routing)

6. CI/CD & Infrastructure (10 pts)
   □ GitHub Actions for dbt CI
   □ Terraform for infrastructure
   □ Proper secret management

7. Code Quality (5 pts)
   □ Clean, documented code
   □ Type hints in Python
   □ SQL follows style guide
   □ Comprehensive README</code></pre>

<div class="tip-box">
<strong>💡 ทริค Project:</strong><br>
1. <strong>เริ่มจาก simple → complex</strong> — ทำ batch pipeline ให้เสร็จก่อน แล้วค่อยเพิ่ม streaming<br>
2. <strong>ใช้ Docker Compose ทำ local dev</strong> — ไม่ต้องเสีย cloud cost ตอน develop<br>
3. <strong>เขียน README ให้ดี</strong> — recruiter อ่าน README ก่อนดู code เสมอ<br>
4. <strong>Include sample outputs</strong> — screenshot ของ Grafana dashboard, dbt docs, etc.<br>
5. <strong>Document trade-offs</strong> — อธิบายว่าทำไมเลือก design นี้ แสดง engineering maturity
</div>

<h3>🎤 Interview Preparation — คำถามที่มักถูกถามจาก Project</h3>

<div class="interview-box">
<strong>🎤 คำถามสัมภาษณ์จาก Project:</strong><br><br>

<strong>Q: อธิบาย Architecture ของ project นี้</strong><br>
<strong>A:</strong> แบ่งเป็น 2 paths หลัก: Batch path ใช้ Airflow orchestrate การ ingest จาก MySQL → GCS → BigQuery แล้วใช้ dbt transform เป็น staging → mart / Streaming path ใช้ Kafka รับ events จาก application แล้ว Python consumer batch write ลง BigQuery — ทั้งสอง paths ใช้ BigQuery เป็น central warehouse มี Grafana monitor pipeline health<br><br>

<strong>Q: ถ้า traffic เพิ่ม 10 เท่า ต้องปรับอะไรบ้าง?</strong><br>
<strong>A:</strong> 1) เพิ่ม Kafka partitions + consumers 2) ใช้ BigQuery streaming insert แทน batch 3) เพิ่ม Airflow workers (auto-scale) 4) เปลี่ยน dbt materialization เป็น incremental ทุก model 5) ใช้ BigQuery flat-rate pricing 6) เพิ่ม caching layer (Redis)<br><br>

<strong>Q: ถ้า pipeline พังตอนตี 3 คุณจะทำอย่างไร?</strong><br>
<strong>A:</strong> 1) ดู alert ว่า severity อะไร 2) เช็ค Grafana dashboard ว่าปัญหาอยู่ที่ layer ไหน 3) ดู Airflow logs / Kafka consumer lag 4) ถ้าเป็น transient error → retry อัตโนมัติ 5) ถ้าเป็น data issue → run dbt test หา root cause 6) แก้ไข → deploy → verify → post-mortem document<br><br>

<strong>Q: อธิบาย dbt model layers ที่ใช้</strong><br>
<strong>A:</strong> staging (views, 1:1 กับ source, rename + cast), intermediate (ephemeral, business logic), marts (tables, สำหรับ stakeholders ใช้งาน) — staging เป็น view เพราะไม่ต้อง store ซ้ำ, intermediate เป็น ephemeral เพราะเป็น stepping stone, marts เป็น table เพราะ query บ่อย
</div>

<h3>🎓 จบ DE201 — แล้วไปต่อ?</h3>

<pre><code class="language-text">Your Learning Path After DE201:
================================

✅ DE201 Complete
   │
   ├── 🎯 Apply for Mid-Level DE positions
   │     • ตำแหน่ง: Data Engineer, Analytics Engineer
   │     • เงินเดือน: 50K-90K THB (Thai market)
   │     • เงินเดือน: $80K-$120K (US remote)
   │
   ├── 📚 Continue Learning
   │     • DE301: Advanced (Spark, Data Mesh, Platform Engineering)
   │     • ML Engineering: Feature Store, Model Serving
   │     • Specialization: Real-time Systems, DataOps
   │
   └── 💼 Build Portfolio
         • Open source contributions
         • Tech blog / Medium articles
         • Kaggle competitions
         • Community meetups & talks</code></pre>

<div class="exercise-box">
<strong>📝 Final Exercise — สร้าง Project Proposal:</strong><br><br>
ก่อนเริ่ม code ให้เขียน 1-page proposal ที่มี:<br>
1. <strong>Problem Statement</strong> — ปัญหาที่จะแก้<br>
2. <strong>Architecture Diagram</strong> — ภาพรวมระบบ<br>
3. <strong>Tech Stack Justification</strong> — ทำไมเลือกเครื่องมือเหล่านี้<br>
4. <strong>SLA Definition</strong> — สัญญาที่ให้กับ stakeholders<br>
5. <strong>Timeline</strong> — แผน 4 สัปดาห์<br>
6. <strong>Risk & Mitigation</strong> — ความเสี่ยงและวิธีรับมือ<br><br>
<em>นี่คือสิ่งที่ Senior DE / Tech Lead ทำก่อนเริ่ม project ทุกครั้ง — ฝึกตั้งแต่ตอนนี้!</em>
</div>

<p>🎉 <strong>ยินดีด้วย!</strong> ถ้าคุณทำ project นี้เสร็จ คุณพร้อมสำหรับตำแหน่ง Mid-Level Data Engineer แล้ว เจอกันใน DE301! 🚀</p>
`
  }
];
