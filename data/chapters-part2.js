export const chaptersPart2 = [
  // ============================================================
  // CHAPTER 8 — Google BigQuery
  // ============================================================
  {
    id: 'chapter-8',
    slug: 'bigquery',
    phase: 3,
    phaseTitle: 'Modern Stack',
    phaseColor: '#8b5cf6',
    number: 8,
    emoji: '☁️',
    title: 'Google BigQuery — Data Warehouse บน Cloud',
    shortTitle: 'BigQuery',
    description: 'เรียนรู้ BigQuery ตั้งแต่พื้นฐานจนถึง Partitioning, Clustering, Scheduled Queries และ Cost Control',
    content: `
<h2>☁️ Google BigQuery — Data Warehouse บน Cloud</h2>

<p>ลองนึกภาพว่าคุณมีข้อมูลการขายของร้านค้า 10 ล้านรายการ แล้วเจ้านายถามว่า <strong>"เดือนที่แล้วขายได้เท่าไหร่ แยกตามจังหวัด?"</strong> — ถ้าข้อมูลอยู่ใน Excel จะใช้เวลาเป็นชั่วโมง แต่ถ้าอยู่ใน BigQuery? <strong>ไม่ถึง 5 วินาที</strong> แม้ข้อมูลจะมีเป็นพันล้าน rows ก็ตาม นี่คือพลังของ Cloud Data Warehouse ที่ Data Engineer ทุกคนต้องรู้จัก</p>

<h3>🏢 BigQuery เหมือนอะไร? — เครื่องคิดเลขยักษ์บน Cloud</h3>

<p>ลองเปรียบเทียบแบบนี้:</p>
<ul>
<li><strong>Database แบบเดิม (PostgreSQL, MySQL)</strong> = เครื่องคิดเลขตั้งโต๊ะ — ดีสำหรับงานเล็กๆ ที่ต้องคิดเร็ว เช่น "คำสั่งซื้อล่าสุดของลูกค้าคนนี้คืออะไร?"</li>
<li><strong>BigQuery</strong> = <strong>ซูเปอร์คอมพิวเตอร์บน Cloud</strong> — ดีสำหรับคำถามใหญ่ๆ เช่น "สรุปยอดขาย 3 ปี แยกตามจังหวัด แยกตามหมวดสินค้า" ข้อมูลหลายพัน GB ก็ตอบได้ในวินาที</li>
</ul>

<p>สิ่งที่พิเศษคือ BigQuery เป็น <strong>Serverless</strong> — หมายความว่าเราไม่ต้องซื้อเครื่อง ไม่ต้อง setup อะไรเลย แค่เขียน SQL แล้วกด Run Google จัดการเครื่องให้หมด เราจ่ายเงินตามที่ใช้จริงเท่านั้น</p>

<img src="/images/bigquery_overview.png" alt="BigQuery hierarchy: Project → Dataset → Table" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>📂 โครงสร้าง: Project → Dataset → Table</h3>

<p>BigQuery จัดข้อมูลเป็น 3 ระดับ เหมือนจัดไฟล์ในคอมพ์:</p>
<ul>
<li><strong>Project</strong> = Folder หลัก (เช่น my-de-project)</li>
<li><strong>Dataset</strong> = Sub-folder แยกหมวด (เช่น raw_data, staging, analytics)</li>
<li><strong>Table</strong> = ไฟล์ข้อมูลจริง (เช่น orders, customers)</li>
</ul>

<pre><code class="language-text">GCP Project (my-de-project)
├── Dataset: raw_data        ← ข้อมูลดิบจาก source
│   ├── Table: orders
│   ├── Table: customers
│   └── Table: products
├── Dataset: staging         ← ข้อมูลที่ clean แล้ว
│   ├── Table: stg_orders
│   └── Table: stg_customers
└── Dataset: analytics       ← ข้อมูลพร้อมใช้วิเคราะห์
    ├── Table: fct_daily_sales
    └── Table: dim_customers
</code></pre>

<div class="tip-box">
💡 <strong>ทำไมต้องแยก Dataset?</strong> เพราะเราสามารถกำหนด permission ได้ตาม dataset เช่น ทีม Analyst เข้าได้แค่ analytics ไม่ต้องเห็น raw data ที่อาจมีข้อมูลส่วนตัวลูกค้า
</div>

<h3>🚀 เริ่มต้นใช้ BigQuery</h3>

<h4>วิธีที่ 1: BigQuery Console (ง่ายที่สุด)</h4>
<p>เข้า <a href="https://console.cloud.google.com/bigquery" target="_blank">BigQuery Console</a> ในเว็บ → เลือก dataset → Create Table → Upload CSV ได้เลย เหมาะสำหรับทดลองครั้งแรก</p>

<h4>วิธีที่ 2: bq CLI (สำหรับ automation)</h4>
<pre><code class="language-bash"># สร้าง dataset
bq mk --dataset --location=US my-de-project:raw_data

# โหลด CSV เข้า BigQuery
bq load \\
  --source_format=CSV \\
  --skip_leading_rows=1 \\
  --autodetect \\
  raw_data.orders \\
  ./orders.csv

# ดู 10 rows แรก
bq head -n 10 raw_data.orders
</code></pre>

<h4>วิธีที่ 3: Python (ใช้บ่อยที่สุดใน pipeline จริง)</h4>
<pre><code class="language-python">from google.cloud import bigquery
import pandas as pd

# สร้าง client เชื่อมต่อ BigQuery
client = bigquery.Client(project="my-de-project")

# อ่าน CSV แล้วโหลดเข้า BigQuery
df = pd.read_csv("orders.csv")
table_id = "my-de-project.raw_data.orders"

job_config = bigquery.LoadJobConfig(
    write_disposition="WRITE_TRUNCATE",  # เขียนทับทุกครั้ง
)

job = client.load_table_from_dataframe(df, table_id, job_config=job_config)
job.result()  # รอจน upload เสร็จ

print(f"✅ Loaded {len(df)} rows to {table_id}")

# Query ข้อมูลด้วย SQL
query = """
SELECT
    DATE(order_date) AS order_date,
    COUNT(*) AS total_orders,
    SUM(total_amount) AS revenue
FROM raw_data.orders
WHERE status = 'completed'
GROUP BY 1
ORDER BY 1 DESC
LIMIT 10
"""

results = client.query(query).to_dataframe()
print(results)
</code></pre>

<h3>💰 Partitioning — แบ่ง Table เพื่อ "ประหยัดเงิน"</h3>

<p>นี่คือสิ่งที่ทำให้ BigQuery ต่างจาก database ทั่วไป — <strong>BigQuery คิดเงินตามจำนวนข้อมูลที่ scan</strong> ($5 ต่อ TB) ไม่ใช่ตามเวลา</p>

<p>ลองนึกแบบนี้: ถ้าเราเก็บบิลร้านอาหาร 3 ปี ไว้ในลิ้นชักเดียว ทุกครั้งที่จะหาบิลเดือนนี้ เราต้องรื้อบิลทั้ง 3 ปี แต่ถ้าเราแยกบิลใส่ลิ้นชัก <strong>ตามเดือน</strong> เราก็แค่เปิดลิ้นชักเดือนนี้ลิ้นชักเดียว — <strong>นี่คือ Partitioning!</strong></p>

<pre><code class="language-sql">-- สร้าง Table ที่แบ่งตามวันที่ (Partitioned Table)
CREATE TABLE analytics.fct_daily_sales
PARTITION BY order_date    -- ← แบ่งลิ้นชักตามวันที่
AS
SELECT
    DATE(order_date) AS order_date,
    product_id,
    COUNT(*) AS num_orders,
    SUM(total_amount) AS revenue
FROM raw_data.orders
GROUP BY 1, 2;

-- ✅ Query นี้ scan แค่ 1 เดือน (ประหยัดเงิน!)
SELECT * FROM analytics.fct_daily_sales
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';

-- ❌ Query นี้ scan ทั้ง table (แพง! ไม่ใช้ partition)
SELECT * FROM analytics.fct_daily_sales
WHERE product_id = 123;
</code></pre>

<h3>🏷️ Clustering — จัดเรียงข้อมูลให้เร็วขึ้นอีก</h3>

<p>ถ้า Partitioning คือ "แบ่งลิ้นชัก" Clustering ก็คือ "จัดเรียงของในลิ้นชัก" เช่น ในลิ้นชักเดือนมกราคม เราเรียงบิลตามชื่อร้าน A-Z ทำให้หาง่ายขึ้นไปอีก</p>

<pre><code class="language-sql">-- Partitioned + Clustered Table (เร็วและประหยัดสุดๆ)
CREATE TABLE analytics.fct_sales
PARTITION BY DATE(order_date)
CLUSTER BY country, product_category   -- ← จัดเรียงภายในแต่ละ partition
AS
SELECT * FROM staging.stg_orders;

-- Query นี้เร็วมาก! (ใช้ทั้ง partition + cluster)
SELECT product_category, SUM(revenue) AS total_revenue
FROM analytics.fct_sales
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'
  AND country = 'TH'
GROUP BY 1;
</code></pre>

<h3>⏰ Scheduled Queries — ตั้งเวลา Query อัตโนมัติ</h3>

<p>แทนที่จะต้องมานั่ง run query ทุกเช้า เราสามารถตั้งเวลาให้ BigQuery run ให้เองอัตโนมัติ เหมือนตั้งนาฬิกาปลุก</p>

<pre><code class="language-sql">-- ตัวอย่าง: สรุปยอดขายทุกวัน ตี 2
-- (ตั้งค่าใน BigQuery Console → Scheduled Queries → New)
CREATE OR REPLACE TABLE analytics.daily_revenue AS
SELECT
    CURRENT_DATE() AS report_date,
    DATE(order_date) AS order_date,
    COUNT(DISTINCT customer_id) AS unique_customers,
    COUNT(*) AS total_orders,
    SUM(total_amount) AS total_revenue
FROM raw_data.orders
WHERE DATE(order_date) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
GROUP BY 1, 2;
</code></pre>

<h3>🛡️ Cost Control — ควบคุมค่าใช้จ่ายไม่ให้บานปลาย</h3>

<table>
<thead><tr><th>ค่าใช้จ่าย</th><th>ราคา</th><th>วิธีประหยัด</th></tr></thead>
<tbody>
<tr><td>Query (On-demand)</td><td>$5 / TB scanned</td><td>Partition, Clustering, SELECT เฉพาะ column ที่ต้องการ</td></tr>
<tr><td>Storage (Active)</td><td>$0.02 / GB / เดือน</td><td>ลบข้อมูลเก่า, ใช้ expiration</td></tr>
<tr><td>Storage (Long-term)</td><td>$0.01 / GB / เดือน</td><td>ข้อมูลที่ไม่ถูกแก้ >90 วัน ลดราคาอัตโนมัติ</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>ก่อน Run Query ให้ใช้ Dry Run เสมอ!</strong><br>
<code>bq query --dry_run 'SELECT * FROM my_table'</code> — จะบอกว่า query นี้จะ scan กี่ bytes โดยไม่ต้อง run จริง (ไม่เสียเงิน) ช่วยป้องกันไม่ให้ query แพงๆ หลุดไป
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดที่มือใหม่ทำบ่อย:</strong><br>
1. <strong>SELECT *</strong> — scan ทุก column = จ่ายเต็ม ให้ SELECT เฉพาะ column ที่ต้องการ<br>
2. <strong>ลืม WHERE clause</strong> บน partitioned table — scan ทั้ง table โดยไม่จำเป็น<br>
3. <strong>ไม่ตั้ง budget alert</strong> — โดนเก็บเงินแล้วค่อยรู้ อาจแพงกว่าที่คิดมาก<br>
4. <strong>ไม่ดู Bytes Processed</strong> — BigQuery แสดงทุกครั้งว่า scan กี่ bytes ให้ดูก่อน run<br>
5. <strong>ใช้ Streaming Insert ตลอด</strong> — ถ้าข้อมูลไม่ต้อง real-time ใช้ batch load ถูกกว่า
</div>

<div class="cheatsheet">
<h4>📋 BigQuery Cheatsheet</h4>
<table>
<thead><tr><th>bq Command</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><code>bq ls</code></td><td>แสดง datasets ทั้งหมด</td></tr>
<tr><td><code>bq ls dataset_name</code></td><td>แสดง tables ใน dataset</td></tr>
<tr><td><code>bq show dataset.table</code></td><td>ดู schema ของ table</td></tr>
<tr><td><code>bq head -n 10 dataset.table</code></td><td>ดู 10 rows แรก</td></tr>
<tr><td><code>bq query --nouse_legacy_sql 'SQL'</code></td><td>รัน query</td></tr>
<tr><td><code>bq query --dry_run 'SQL'</code></td><td>ดู bytes ที่จะ scan (ไม่ run จริง)</td></tr>
</tbody>
</table>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ BigQuery</h4>
<ol>
<li><strong>Partition กับ Clustering ต่างกันอย่างไร?</strong><br>
Partition = แบ่ง table เป็น "ลิ้นชัก" แยกจากกัน ตาม 1 column (เช่น date) — BigQuery skip partitions ที่ไม่ตรง WHERE<br>
Clustering = จัดเรียงข้อมูลภายในลิ้นชัก ตาม 1-4 columns — BigQuery skip data blocks ที่ไม่เกี่ยวข้อง</li>
<li><strong>BigQuery คิดเงินยังไง?</strong><br>
On-demand: $5/TB scanned + Storage cost — ดังนั้น Partition + SELECT เฉพาะ columns ที่ต้องการ = ประหยัดเงินมาก</li>
<li><strong>ทำไมต้อง Separation of Storage and Compute?</strong><br>
Scale แยกกันได้อิสระ — เก็บข้อมูลเยอะแต่ compute น้อยก็ได้ ไม่ต้องจ่าย compute เมื่อไม่ query เหมาะกับ workload ที่ไม่ได้ run 24/7</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สมัคร GCP Free Tier แล้วสร้าง BigQuery dataset ชื่อ <code>ecommerce</code> โหลดไฟล์ CSV ที่มี columns: order_id, customer_id, order_date, product, amount, country</li>
<li>สร้าง partitioned table แบ่งตาม order_date แล้วลอง query ดู Bytes Processed เทียบกับ table ที่ไม่ partition</li>
<li>เขียน query หายอดขายรายเดือนแยกตาม country แล้วลองทำ Scheduled Query</li>
<li>เปรียบเทียบ bytes scanned ระหว่าง <code>SELECT *</code> กับ <code>SELECT order_id, amount</code> ด้วย --dry_run</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 9 — Apache Airflow
  // ============================================================
  {
    id: 'chapter-9',
    slug: 'airflow',
    phase: 3,
    phaseTitle: 'Modern Stack',
    phaseColor: '#8b5cf6',
    number: 9,
    emoji: '🌀',
    title: 'Apache Airflow — Orchestration สำหรับ Data Pipeline',
    shortTitle: 'Airflow',
    description: 'เรียนรู้ Airflow ตั้งแต่แนวคิด DAG, Operator, Sensor จนถึงเขียน DAG จริงด้วย TaskFlow API',
    content: `
<h2>🌀 Apache Airflow — Orchestration สำหรับ Data Pipeline</h2>

<p>สมมติว่าทุกเช้าตี 2 คุณต้องทำ 5 อย่างตามลำดับ: ดึงข้อมูลจาก API → เก็บลง Cloud Storage → โหลดเข้า BigQuery → ตรวจสอบคุณภาพข้อมูล → ส่ง report ให้เจ้านาย ถ้าวันไหนคุณป่วย? ลืม? ทำไม่ทัน? ข้อมูลวันนั้นก็หาย — <strong>Airflow แก้ปัญหานี้ โดยทำทุกอย่างให้อัตโนมัติ</strong></p>

<h3>⏰ Airflow เหมือนอะไร? — นาฬิกาปลุกอัจฉริยะที่ทำงานให้เรา</h3>

<p>ลองนึกภาพ <strong>Daily Planner อัตโนมัติ</strong> ที่ทำงานให้เราทุกวัน:</p>
<ul>
<li>📋 <strong>มี to-do list</strong> — กำหนดว่าต้องทำอะไรบ้าง (tasks)</li>
<li>🔢 <strong>มีลำดับ</strong> — task ไหนทำก่อน-หลัง (dependencies)</li>
<li>⏰ <strong>มีเวลา</strong> — ทำเมื่อไหร่ ทุกวัน ทุกชั่วโมง (schedule)</li>
<li>🔄 <strong>ลองใหม่เองได้</strong> — ถ้า task ไหน fail ก็ retry อัตโนมัติ</li>
<li>🚨 <strong>ส่งแจ้งเตือน</strong> — ถ้าทำไม่สำเร็จ ส่ง email/Slack บอก</li>
<li>👀 <strong>มีหน้าจอดูสถานะ</strong> — ดูได้ว่า task ไหนสำเร็จ ไหน fail ผ่าน Web UI</li>
</ul>

<img src="/images/airflow_architecture.png" alt="Airflow Architecture: Scheduler, Executor, Workers, Web UI, Metadata DB" style="width:100%;border-radius:12px;margin:16px 0" />

<div class="tip-box">
💡 <strong>สำคัญมาก:</strong> Airflow เป็น <strong>Orchestrator</strong> ไม่ใช่ Processing Engine — Airflow <em>สั่งให้คนอื่นทำงาน</em> (เหมือนผู้จัดการ) แต่ไม่ได้ทำงานหนักเอง ตัวทำจริงอาจเป็น BigQuery, Spark, Python script ฯลฯ
</div>

<h3>🧩 Core Concepts — ศัพท์ที่ต้องรู้</h3>

<table>
<thead><tr><th>Concept</th><th>เปรียบเทียบ</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><strong>DAG</strong></td><td>📋 To-do list ทั้งชุด</td><td>Directed Acyclic Graph — workflow ทั้งหมด กำหนดว่า task ไหนทำก่อน-หลัง <em>ห้ามวน loop</em></td></tr>
<tr><td><strong>Task</strong></td><td>✅ ช่อง checkbox แต่ละอัน</td><td>หน่วยงานเดี่ยว เช่น ดึงข้อมูล, รัน SQL, ส่ง email</td></tr>
<tr><td><strong>Operator</strong></td><td>🔧 เครื่องมือแต่ละชนิด</td><td>Template สำเร็จรูปสำหรับ task เช่น PythonOperator, BashOperator</td></tr>
<tr><td><strong>Schedule</strong></td><td>⏰ นาฬิกาปลุก</td><td>กำหนดว่า DAG จะ run เมื่อไหร่ เช่น "@daily", "0 2 * * *"</td></tr>
<tr><td><strong>XCom</strong></td><td>📝 โน้ตส่งต่อ</td><td>กลไกส่งข้อมูลเล็กๆ ระหว่าง task (เช่น row count, file path)</td></tr>
</tbody>
</table>

<h3>✍️ เขียน DAG แรก — ง่ายกว่าที่คิด!</h3>

<p>เราจะเขียน DAG ง่ายๆ ที่ดึงข้อมูล → แปลง → โหลดเข้า BigQuery ใช้ <strong>TaskFlow API</strong> ที่เขียนเหมือน Python ปกติ:</p>

<pre><code class="language-python"># dags/etl_orders.py
from datetime import datetime, timedelta
from airflow.decorators import dag, task

# ตั้งค่าเริ่มต้นสำหรับทุก task
default_args = {
    "owner": "data-team",
    "retries": 3,                          # ถ้า fail ลองใหม่ 3 ครั้ง
    "retry_delay": timedelta(minutes=5),   # รอ 5 นาทีก่อนลองใหม่
    "email_on_failure": True,              # ส่ง email ถ้า fail
    "email": ["de-team@company.com"],
}

@dag(
    dag_id="etl_orders_daily",
    default_args=default_args,
    description="ดึง orders ทุกวัน แปลงแล้วโหลดเข้า BigQuery",
    schedule="@daily",            # run ทุกวัน
    start_date=datetime(2024, 1, 1),
    catchup=False,                # ไม่ต้อง run ย้อนหลัง
    tags=["etl", "orders"],
)
def etl_orders():
    
    @task()
    def extract():
        """ดึงข้อมูลจาก API"""
        import requests
        response = requests.get("https://api.example.com/orders")
        response.raise_for_status()
        data = response.json()
        print(f"📥 Extracted {len(data)} orders")
        return data  # ส่งต่อให้ task ถัดไปผ่าน XCom อัตโนมัติ
    
    @task()
    def transform(raw_data: list):
        """ทำความสะอาดข้อมูล"""
        import pandas as pd
        df = pd.DataFrame(raw_data)
        df["order_date"] = pd.to_datetime(df["order_date"])
        df["total_amount"] = df["total_amount"].astype(float)
        df = df.dropna(subset=["customer_id"])  # ลบ rows ที่ไม่มี customer
        df = df[df["total_amount"] > 0]          # เอาแค่ยอดที่มากกว่า 0
        print(f"🔄 Transformed: {len(df)} clean rows")
        return df.to_dict("records")
    
    @task()
    def load(clean_data: list):
        """โหลดเข้า BigQuery"""
        from google.cloud import bigquery
        import pandas as pd
        
        client = bigquery.Client()
        df = pd.DataFrame(clean_data)
        table_id = "my-project.staging.stg_orders"
        
        job = client.load_table_from_dataframe(df, table_id)
        job.result()
        print(f"✅ Loaded {len(df)} rows to {table_id}")
    
    # กำหนดลำดับ: extract → transform → load
    raw = extract()
    clean = transform(raw)
    load(clean)

# เรียก DAG function เพื่อ register
etl_orders()
</code></pre>

<h3>📐 DAG แบบ Traditional (ใช้ Operators ตรงๆ)</h3>

<p>อีกวิธีหนึ่งที่จะเจอบ่อยในโปรเจกต์จริง คือการใช้ <strong>Operators</strong> และเครื่องหมาย <code>>></code> กำหนดลำดับ:</p>

<pre><code class="language-python"># dags/sql_pipeline.py
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.operators.email import EmailOperator

with DAG(
    dag_id="sql_pipeline",
    start_date=datetime(2024, 1, 1),
    schedule="0 3 * * *",  # ทุกวัน ตี 3
    catchup=False,
    default_args={"retries": 2, "retry_delay": timedelta(minutes=10)},
) as dag:
    
    # Task 1: รัน dbt
    run_dbt = BashOperator(
        task_id="run_dbt_models",
        bash_command="cd /opt/dbt && dbt run --models staging+",
    )
    
    # Task 2: ส่ง email
    send_report = EmailOperator(
        task_id="send_report_email",
        to="manager@company.com",
        subject="Daily Sales Report {{ ds }}",
        html_content="<h3>Report พร้อมดูที่ Looker Studio</h3>",
    )
    
    # กำหนดลำดับด้วย >>
    run_dbt >> send_report
</code></pre>

<h3>🚨 Error Handling — จัดการเมื่องานพัง</h3>

<pre><code class="language-python">default_args = {
    "retries": 3,                          # retry 3 ครั้ง
    "retry_delay": timedelta(minutes=5),   # รอ 5 นาทีก่อน retry
    "retry_exponential_backoff": True,     # เพิ่มเวลารอทีละเท่าตัว
    "email_on_failure": True,
    "email": ["oncall@company.com"],
}

# ถ้า DAG fail ทั้งชุด → ส่ง Slack alert
@dag(
    default_args=default_args,
    on_failure_callback=lambda ctx: send_slack_alert(ctx),
)
def robust_pipeline():
    ...
</code></pre>

<div class="warning-box">
❌ <strong>ข้อผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ส่ง DataFrame ใหญ่ผ่าน XCom</strong> — XCom เก็บใน DB ส่งแค่ข้อมูลเล็กๆ เช่น file path, row count ถ้าจะส่ง data ใหญ่ ให้เขียนลง GCS แล้วส่ง path แทน<br>
2. <strong>Process ข้อมูลใน Airflow</strong> — Airflow เป็นแค่ผู้สั่ง ไม่ควร process data หนักใน task ให้ส่งไป BigQuery/Spark ทำแทน<br>
3. <strong>ไม่ตั้ง catchup=False</strong> — ถ้าลืม Airflow จะ run ย้อนหลังทุกวันตั้งแต่ start_date (อาจเป็นหลายร้อยรอบ!)<br>
4. <strong>DAG ไม่เป็น Idempotent</strong> — run ซ้ำแล้วผลลัพธ์ต้องเหมือนเดิม (ใช้ WRITE_TRUNCATE หรือ MERGE)
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Airflow</h4>
<ol>
<li><strong>DAG คืออะไร? ทำไมต้อง "Acyclic"?</strong><br>
DAG = Directed Acyclic Graph = กราฟมีทิศทางและไม่มี cycle (loop) — ถ้ามี loop จะรันไม่จบ Airflow ใช้ DAG เพื่อกำหนดลำดับ dependency ของ tasks</li>
<li><strong>Airflow เหมาะกับ Real-time Processing ไหม?</strong><br>
ไม่เหมาะ — Airflow ออกแบบมาสำหรับ batch/scheduled workloads ถ้าต้องการ real-time ใช้ Kafka, Flink, Pub/Sub</li>
<li><strong>ทำยังไงให้ DAG เป็น Idempotent?</strong><br>
ใช้ WRITE_TRUNCATE (overwrite) หรือ MERGE (upsert) ใช้ execution_date เป็น partition key ไม่ใช้ CURRENT_DATE() ใน query</li>
<li><strong>XCom ใช้ทำอะไร? มีข้อจำกัดอะไร?</strong><br>
ส่งข้อมูลเล็กๆ ระหว่าง tasks (counts, paths, status) — ข้อจำกัด: เก็บใน DB ส่งข้อมูลใหญ่ไม่ได้</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน DAG ด้วย TaskFlow API ที่: extract ข้อมูลจาก public API (เช่น JSONPlaceholder) → transform → load เข้า CSV</li>
<li>เพิ่ม error handling: retries=3, email notification</li>
<li>ตั้ง schedule ให้ run ทุกวันจันทร์-ศุกร์ ตี 6 (เขียน cron expression: <code>0 6 * * 1-5</code>)</li>
<li>ลองสร้าง docker-compose.yml รัน Airflow + PostgreSQL แล้วเปิด Web UI ดู DAG ที่สร้าง</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 10 — dbt (data build tool)
  // ============================================================
  {
    id: 'chapter-10',
    slug: 'dbt',
    phase: 3,
    phaseTitle: 'Modern Stack',
    phaseColor: '#8b5cf6',
    number: 10,
    emoji: '🔧',
    title: 'dbt — Transform ข้อมูลด้วย SQL + Software Engineering',
    shortTitle: 'dbt',
    description: 'เรียนรู้ dbt ตั้งแต่ Layer Architecture, Models, Tests, Documentation ไปจนถึง Jinja Templates',
    content: `
<h2>🔧 dbt — Transform ข้อมูลด้วย SQL + Software Engineering</h2>

<p>เคยเขียน SQL ยาว 200 บรรทัด แล้วอีก 3 เดือน กลับมาดูไม่รู้ว่ามันทำอะไร? หรือเคยมีคนในทีมแก้ SQL แล้วข้อมูลใน Dashboard พังโดยไม่รู้ตัว? — <strong>dbt แก้ปัญหาเหล่านี้</strong> โดยนำหลัก Software Engineering มาใช้กับ SQL ทำให้ SQL ของเราเป็นระเบียบ test ได้ มี version control และ document ครบ</p>

<h3>🍳 dbt เหมือนอะไร? — สูตรอาหารสำหรับทำข้อมูล</h3>

<p>ลองนึกว่าคุณเป็น <strong>เชฟในครัว</strong>:</p>
<ul>
<li><strong>วัตถุดิบ (Raw Ingredients)</strong> = ข้อมูลดิบจาก database, API (ผัก ผลไม้ เนื้อ ที่ยังไม่ได้ล้าง)</li>
<li><strong>สูตรอาหาร (Recipe)</strong> = SQL model ใน dbt ที่บอกว่าต้อง transform อะไรบ้าง</li>
<li><strong>ขั้นตอนทำครัว</strong> = Layer ต่างๆ — ล้างผัก → หั่น → ผัด → จัดจาน</li>
<li><strong>ตรวจคุณภาพ</strong> = dbt tests — ชิมว่ารสชาติได้หรือยัง? มีเส้นผมตกหรือเปล่า?</li>
</ul>

<p>dbt ทำ <strong>T ใน ELT</strong> — ข้อมูลถูก Extract และ Load เข้า Data Warehouse แล้ว (วัตถุดิบมาถึงครัวแล้ว) dbt จะ <strong>Transform</strong> ข้อมูลด้วย SQL ภายใน warehouse ให้กลายเป็นข้อมูลที่พร้อมใช้งาน (อาหารจานสวย พร้อมเสิร์ฟ)</p>

<img src="/images/dbt_layers.png" alt="dbt Layer Architecture: Source → Staging → Intermediate → Marts" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>🏗️ Layer Architecture — ทำทีละขั้น ไม่ข้ามขั้น</h3>

<p>เหมือนทำอาหารต้องมีขั้นตอน ข้อมูลก็ต้องผ่านทีละ Layer:</p>

<table>
<thead><tr><th>Layer</th><th>Prefix</th><th>ทำอะไร</th><th>เปรียบเทียบ</th></tr></thead>
<tbody>
<tr><td><strong>Staging</strong></td><td>stg_</td><td>ล้าง, เปลี่ยนชื่อ, แปลง type — 1 model ต่อ 1 source</td><td>🧹 ล้างผัก หั่นเตรียม</td></tr>
<tr><td><strong>Intermediate</strong></td><td>int_</td><td>Business logic ซับซ้อน, JOIN ข้าม source</td><td>🍳 ผัด ต้ม ปรุงรส</td></tr>
<tr><td><strong>Facts (fct_)</strong></td><td>fct_</td><td>Events, transactions — สิ่งที่เกิดขึ้น</td><td>🍽️ อาหารจานหลัก</td></tr>
<tr><td><strong>Dimensions (dim_)</strong></td><td>dim_</td><td>Entities — คน, สินค้า, สถานที่</td><td>🧂 เครื่องปรุง ส่วนประกอบ</td></tr>
</tbody>
</table>

<h3>📁 โครงสร้าง dbt Project</h3>
<pre><code class="language-text">my_dbt_project/
├── dbt_project.yml          # config หลัก
├── models/
│   ├── staging/             # Layer 1: ล้างข้อมูล
│   │   ├── _stg_sources.yml
│   │   ├── stg_orders.sql
│   │   └── stg_customers.sql
│   ├── intermediate/        # Layer 2: Business logic
│   │   └── int_customer_orders.sql
│   └── marts/               # Layer 3: พร้อมใช้งาน
│       ├── _marts_models.yml
│       ├── fct_daily_sales.sql
│       └── dim_customers.sql
├── tests/                   # Custom tests
│   └── assert_positive_revenue.sql
└── macros/                  # Reusable SQL functions
    └── cents_to_thb.sql
</code></pre>

<h3>✍️ เขียน Models — เริ่มจากง่ายไปยาก</h3>

<h4>Step 1: บอก dbt ว่า Source อยู่ที่ไหน</h4>
<pre><code class="language-yaml"># models/staging/_stg_sources.yml
version: 2
sources:
  - name: raw
    database: my-gcp-project
    schema: raw_data
    tables:
      - name: orders
        description: "Raw orders จาก transactional database"
      - name: customers
        description: "ข้อมูลลูกค้าดิบ"
</code></pre>

<h4>Step 2: Staging Model — ล้างข้อมูลให้สะอาด</h4>
<pre><code class="language-sql">-- models/staging/stg_orders.sql
-- ทำแค่ clean & standardize — ไม่ใส่ business logic

WITH source AS (
    SELECT * FROM {{ source('raw', 'orders') }}
    -- ↑ source() บอก dbt ว่าข้อมูลมาจากไหน
),

cleaned AS (
    SELECT
        order_id,
        customer_id,
        CAST(order_date AS DATE) AS order_date,
        CAST(amount_satang AS FLOAT64) / 100 AS amount_thb,  -- สตางค์ → บาท
        LOWER(TRIM(status)) AS order_status,
        UPPER(country_code) AS country_code
    FROM source
    WHERE order_id IS NOT NULL
)

SELECT * FROM cleaned
</code></pre>

<h4>Step 3: Intermediate — รวมข้อมูลจากหลาย source</h4>
<pre><code class="language-sql">-- models/intermediate/int_customer_orders.sql
WITH customers AS (
    SELECT * FROM {{ ref('stg_customers') }}
    -- ↑ ref() สร้าง dependency อัตโนมัติ!
),

orders AS (
    SELECT * FROM {{ ref('stg_orders') }}
),

customer_orders AS (
    SELECT
        c.customer_id,
        c.first_name,
        c.email,
        COUNT(o.order_id) AS total_orders,
        SUM(o.amount_thb) AS total_spent,
        MIN(o.order_date) AS first_order_date,
        MAX(o.order_date) AS last_order_date
    FROM customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY 1, 2, 3
)

SELECT * FROM customer_orders
</code></pre>

<h4>Step 4: Mart — ข้อมูลพร้อมใช้วิเคราะห์</h4>
<pre><code class="language-sql">-- models/marts/fct_daily_sales.sql
{{
  config(
    materialized='incremental',     -- เพิ่มข้อมูลใหม่ ไม่ต้อง run ทั้งหมดทุกครั้ง
    unique_key='surrogate_key',
    partition_by={"field": "order_date", "data_type": "date"}
  )
}}

WITH orders AS (
    SELECT * FROM {{ ref('stg_orders') }}
    {% if is_incremental() %}
    WHERE order_date > (SELECT MAX(order_date) FROM {{ this }})
    {% endif %}
),

daily_agg AS (
    SELECT
        {{ dbt_utils.generate_surrogate_key(['order_date', 'country_code']) }}
            AS surrogate_key,
        order_date,
        country_code,
        COUNT(*) AS num_orders,
        SUM(amount_thb) AS total_revenue,
        AVG(amount_thb) AS avg_order_value
    FROM orders
    GROUP BY 2, 3
)

SELECT * FROM daily_agg
</code></pre>

<h3>🧪 Tests — ตรวจสอบข้อมูลอัตโนมัติ</h3>

<pre><code class="language-yaml"># models/marts/_marts_models.yml
version: 2
models:
  - name: fct_daily_sales
    description: "ยอดขายรายวัน"
    columns:
      - name: surrogate_key
        tests:
          - unique        # ← ห้ามซ้ำ!
          - not_null       # ← ห้ามเป็น NULL!
      - name: total_revenue
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 0  # ← ยอดขายต้องไม่ติดลบ
</code></pre>

<h3>⚡ dbt Commands ที่ใช้บ่อย</h3>

<div class="cheatsheet">
<h4>📋 dbt Cheatsheet</h4>
<table>
<thead><tr><th>Command</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><code>dbt run</code></td><td>รัน models ทั้งหมด</td></tr>
<tr><td><code>dbt run --models staging</code></td><td>รันแค่ models ใน folder staging</td></tr>
<tr><td><code>dbt test</code></td><td>รัน tests ทั้งหมด</td></tr>
<tr><td><code>dbt build</code></td><td>run + test ทุก model ตามลำดับ</td></tr>
<tr><td><code>dbt docs generate && dbt docs serve</code></td><td>สร้าง documentation website</td></tr>
</tbody>
</table>
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ไม่แยก Layer</strong> — เขียน SQL ซับซ้อนใน model เดียว ควรแยกเป็น stg → int → fct/dim<br>
2. <strong>ใช้ hardcoded table name</strong> — ต้องใช้ <code>{{ ref('model') }}</code> หรือ <code>{{ source('name', 'table') }}</code> เสมอ ไม่งั้น dbt ไม่รู้ dependency<br>
3. <strong>ไม่เขียน tests</strong> — data อาจเปลี่ยน schema, มี NULL ใหม่ ต้องมี tests จับ<br>
4. <strong>Incremental model ไม่มี unique_key</strong> — ทำให้เกิด duplicate rows<br>
5. <strong>ไม่เขียน documentation</strong> — อีก 3 เดือน ตัวเองก็จำไม่ได้ว่า column หมายถึงอะไร
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ dbt</h4>
<ol>
<li><strong>ref() ทำหน้าที่อะไร? ทำไมสำคัญ?</strong><br>
ref() สร้าง dependency ระหว่าง models ทำให้ dbt รู้ลำดับการ run และสร้าง DAG อัตโนมัติ ถ้าใช้ hardcoded table name dbt จะไม่รู้ dependency</li>
<li><strong>Incremental model ทำงานอย่างไร?</strong><br>
รัน run แรก: สร้าง table เต็ม (full refresh) | รัน run ถัดไป: ใช้ is_incremental() filter เอาเฉพาะ rows ใหม่แล้ว INSERT/MERGE</li>
<li><strong>ทำไมต้องแยก Staging, Intermediate, Marts?</strong><br>
Separation of Concerns — staging ทำ clean, intermediate ทำ business logic, marts ทำ aggregation สำหรับ BI — ง่ายต่อ debug, test, maintain</li>
<li><strong>dbt ต่างจาก Stored Procedure อย่างไร?</strong><br>
dbt: version control ได้, test ได้, modular (ref), auto docs, CI/CD | Stored Procedure: ล็อคอยู่ใน DB, test ยาก, ไม่มี version control</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง dbt project ที่มี 3 layers: staging (stg_orders, stg_customers), intermediate (int_customer_orders), marts (fct_daily_sales, dim_customers)</li>
<li>เขียน schema.yml พร้อม tests: unique, not_null, accepted_values สำหรับทุก model</li>
<li>สร้าง incremental model ที่โหลดเฉพาะ orders ใหม่ตาม order_date</li>
<li>รัน <code>dbt docs generate && dbt docs serve</code> แล้วศึกษา Lineage Graph ที่ได้</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 11 — Docker + Spark/PySpark
  // ============================================================
  {
    id: 'chapter-11',
    slug: 'docker-spark',
    phase: 3,
    phaseTitle: 'Modern Stack',
    phaseColor: '#8b5cf6',
    number: 11,
    emoji: '🐳',
    title: 'Docker + Apache Spark — Container และ Big Data Processing',
    shortTitle: 'Docker + Spark',
    description: 'เรียนรู้ Docker ตั้งแต่ Image, Container, Compose แล้วต่อด้วย Spark/PySpark สำหรับ Big Data',
    content: `
<h2>🐳 Docker + Apache Spark — Container และ Big Data Processing</h2>

<p>เคยติดตั้ง software แล้วมันทำงานได้ในเครื่องเรา แต่พอไปรันในเครื่องเพื่อนหรือ server กลับ error? <strong>"It works on my machine!"</strong> — ทุกคนเคยเจอปัญหานี้ Docker แก้ปัญหานี้ได้เลย แล้วเคยมีข้อมูล 100 GB ที่ Pandas ใช้เวลา 3 ชั่วโมงก็ยัง process ไม่เสร็จ? Spark ทำได้ใน 5 นาที — บทนี้เรียนทั้งคู่!</p>

<h3>📦 Part 1: Docker — แพ็คแล้วรันได้ทุกที่</h3>

<h4>Docker เหมือนอะไร? — ตู้คอนเทนเนอร์ขนส่งสินค้า</h4>

<p>ลองนึกถึง <strong>ตู้คอนเทนเนอร์ขนส่งสินค้า</strong> ที่เห็นตามท่าเรือ:</p>
<ul>
<li>ไม่ว่าจะขนส่งทางเรือ, รถไฟ, หรือรถบรรทุก — ตู้คอนเทนเนอร์มีขนาดมาตรฐาน ใช้ได้กับทุกยานพาหนะ</li>
<li>ข้างในจะบรรจุอะไรก็ได้ — อาหาร เสื้อผ้า เครื่องจักร</li>
<li>ปิดฝาแล้วส่งไปที่ไหนก็ได้ ของข้างในไม่เปลี่ยน</li>
</ul>

<p>Docker ก็เหมือนกัน — เรา <strong>"แพ็ค" application + dependencies ทั้งหมดไว้ใน container</strong> แล้วรันได้เหมือนกันทุกเครื่อง ไม่ว่าจะเป็น Mac, Windows, Linux, หรือ Cloud Server</p>

<img src="/images/docker_concept.png" alt="Docker Container vs Traditional Deployment: Pack once, ship anywhere" style="width:100%;border-radius:12px;margin:16px 0" />

<table>
<thead><tr><th>Docker Concept</th><th>เปรียบเทียบ</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><strong>Image</strong></td><td>📦 กล่องสำเร็จรูป</td><td>Blueprint ของ container (read-only) เหมือนพิมพ์เขียว</td></tr>
<tr><td><strong>Container</strong></td><td>🏠 บ้านที่สร้างจากพิมพ์เขียว</td><td>Instance ที่รันจริงจาก Image</td></tr>
<tr><td><strong>Dockerfile</strong></td><td>📋 สูตรทำอาหาร</td><td>คำสั่งบอกวิธีสร้าง Image ทีละขั้น</td></tr>
<tr><td><strong>Docker Compose</strong></td><td>🍱 สั่ง set อาหาร</td><td>จัดการหลาย containers พร้อมกัน (เช่น Airflow + PostgreSQL)</td></tr>
<tr><td><strong>Volume</strong></td><td>💾 External Hard Drive</td><td>เก็บ data ถาวร แม้ลบ container data ก็ยังอยู่</td></tr>
</tbody>
</table>

<h4>เขียน Dockerfile — สร้าง Image เอง</h4>
<pre><code class="language-dockerfile"># Dockerfile สำหรับ Python Data Pipeline
FROM python:3.11-slim          # เริ่มจาก Python base image

WORKDIR /app                   # ตั้ง working directory

COPY requirements.txt .        # Copy ไฟล์ requirements ก่อน (ใช้ Docker cache)
RUN pip install --no-cache-dir -r requirements.txt

COPY . .                       # Copy source code ทั้งหมด

ENV PYTHONUNBUFFERED=1         # ให้ print() แสดงผลทันที

CMD ["python", "main.py"]     # คำสั่งที่จะรันเมื่อ container start
</code></pre>

<pre><code class="language-bash"># Build image จาก Dockerfile
docker build -t my-pipeline:v1.0 .

# Run container
docker run -d --name pipeline my-pipeline:v1.0

# ดู logs
docker logs -f pipeline

# หยุด & ลบ container
docker stop pipeline && docker rm pipeline
</code></pre>

<h4>Docker Compose — รัน Airflow + PostgreSQL พร้อมกัน</h4>
<pre><code class="language-yaml"># docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: airflow
      POSTGRES_PASSWORD: airflow
      POSTGRES_DB: airflow
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  airflow-webserver:
    image: apache/airflow:2.8.1-python3.11
    depends_on:
      - postgres
    environment:
      AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://airflow:airflow@postgres/airflow
    volumes:
      - ./dags:/opt/airflow/dags
    ports:
      - "8080:8080"
    command: airflow standalone

volumes:
  postgres_data:
</code></pre>

<pre><code class="language-bash"># รัน services ทั้งหมด (ง่ายมาก 1 คำสั่ง!)
docker compose up -d

# เปิด Airflow UI: http://localhost:8080

# หยุดทุก services
docker compose down
</code></pre>

<hr>

<h3>⚡ Part 2: Apache Spark — ทีมงานแบ่งงานกันทำ</h3>

<h4>Spark เหมือนอะไร? — ทีมคนงานที่แบ่งงานกัน</h4>

<p>สมมติคุณต้อง <strong>นับเงินเหรียญ 1 ล้านเหรียญ</strong>:</p>
<ul>
<li><strong>Pandas</strong> = คนเดียวนั่งนับ → ใช้เวลาหลายชั่วโมง</li>
<li><strong>Spark</strong> = <strong>แบ่งเหรียญให้ 100 คนนับพร้อมกัน</strong> → แต่ละคนนับ 10,000 เหรียญ → สรุปรวม → เสร็จใน 5 นาที!</li>
</ul>

<p>นี่คือแนวคิด <strong>Distributed Computing</strong> — กระจายงานไปหลายเครื่อง (cluster) ทำพร้อมกัน</p>

<img src="/images/spark_architecture.png" alt="Spark Architecture: Driver dispatches work to Worker nodes" style="width:100%;border-radius:12px;margin:16px 0" />

<h4>เมื่อไหร่ควรใช้ Spark?</h4>
<table>
<thead><tr><th>ขนาดข้อมูล</th><th>เครื่องมือที่เหมาะ</th></tr></thead>
<tbody>
<tr><td>< 1 GB</td><td>🐼 Pandas (เครื่องเดียว)</td></tr>
<tr><td>1 - 10 GB</td><td>🐼 Pandas (ถ้า RAM พอ) หรือ DuckDB/Polars</td></tr>
<tr><td>10 GB - 1 TB</td><td>⚡ PySpark</td></tr>
<tr><td>> 1 TB</td><td>⚡ PySpark บน cluster (Dataproc, Databricks)</td></tr>
</tbody>
</table>

<h4>PySpark — Spark สำหรับ Python Developer</h4>
<pre><code class="language-python">from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, avg, count, when, year, month

# สร้าง SparkSession (จุดเริ่มต้นทุกอย่าง)
spark = SparkSession.builder \\
    .appName("DE101 Pipeline") \\
    .getOrCreate()

# อ่านข้อมูล (Parquet = format ที่ดีที่สุดสำหรับ Spark)
df = spark.read.parquet("gs://my-bucket/orders/")

# ดู Schema
df.printSchema()

# ดูข้อมูลตัวอย่าง
df.show(5)
</code></pre>

<pre><code class="language-python"># === Transformations (คุ้นเคยถ้าเคยใช้ Pandas!) ===

# Filter
active_orders = df.filter(col("status") == "completed")

# GroupBy + Aggregate (เหมือน SQL GROUP BY)
monthly_sales = df.groupBy(
    year("order_date").alias("year"),
    month("order_date").alias("month"),
).agg(
    count("*").alias("num_orders"),
    sum("amount").alias("total_revenue"),
    avg("amount").alias("avg_order_value"),
)

monthly_sales.orderBy("year", "month").show()

# Join
customers = spark.read.parquet("customers.parquet")
enriched = df.join(customers, on="customer_id", how="left")

# เขียนผลลัพธ์เป็น Parquet แบ่งตาม year/month
monthly_sales.write \\
    .partitionBy("year", "month") \\
    .mode("overwrite") \\
    .parquet("gs://my-bucket/output/monthly_sales/")
</code></pre>

<div class="tip-box">
💡 <strong>Spark SQL:</strong> ถ้าถนัด SQL มากกว่า สามารถใช้ SQL ตรงๆ ใน Spark ได้เลย!
<pre><code class="language-python">df.createOrReplaceTempView("orders")
result = spark.sql("""
    SELECT customer_id, COUNT(*) AS total_orders, SUM(amount) AS total_spent
    FROM orders WHERE status = 'completed'
    GROUP BY customer_id HAVING total_orders >= 5
""")
</code></pre>
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>Docker: ลืม .dockerignore</strong> — copy node_modules, .git เข้า image ทำให้ image ใหญ่มาก<br>
2. <strong>Spark: collect() บน data ใหญ่</strong> — ดึง data ทั้งหมดเข้าเครื่องเดียว → Out of Memory!<br>
3. <strong>Spark: ไม่ cache DataFrame ที่ใช้ซ้ำ</strong> — Spark จะ compute ใหม่ทุกครั้ง ใช้ <code>df.cache()</code><br>
4. <strong>Spark: เขียน Parquet ได้ไฟล์เล็กมาก ๆ จำนวนมาก</strong> — ใช้ <code>df.coalesce(10)</code> ก่อน write
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Docker + Spark</h4>
<ol>
<li><strong>Docker Image กับ Container ต่างกันอย่างไร?</strong><br>
Image = template read-only (เหมือนพิมพ์เขียว) | Container = running instance (เหมือนบ้านที่สร้างจากพิมพ์เขียว) สร้าง container จาก image ได้หลายอัน</li>
<li><strong>Spark ทำงาน in-memory หมายความว่าอะไร?</strong><br>
Spark เก็บ intermediate data ใน RAM แทน disk ทำให้เร็วกว่า Hadoop MapReduce ที่เขียนลง disk ทุก step</li>
<li><strong>Wide vs Narrow Transformation ต่างกันอย่างไร?</strong><br>
Narrow (filter, select): ไม่ต้อง shuffle data ข้าม partitions = เร็ว | Wide (groupBy, join): ต้อง shuffle ข้าม network = ช้ากว่ามาก</li>
<li><strong>repartition() กับ coalesce() ต่างกันอย่างไร?</strong><br>
repartition() = full shuffle (เพิ่ม/ลดได้) | coalesce() = ลดอย่างเดียว ไม่ shuffle เต็ม (เร็วกว่า ใช้ก่อน write ไฟล์)</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน Dockerfile สำหรับ Python pipeline ที่ใช้ pandas + requests แล้ว build และ run</li>
<li>สร้าง docker-compose.yml ที่รัน PostgreSQL + Adminer (web UI) พร้อมกัน ลองเชื่อมต่อดู</li>
<li>เขียน PySpark script อ่าน CSV → filter → groupBy → เขียน Parquet</li>
<li>ลองใช้ <code>df.cache()</code> กับ DataFrame ที่ใช้ 3 ครั้ง แล้วเปรียบเทียบเวลา</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 12 — Data Quality + Governance
  // ============================================================
  {
    id: 'chapter-12',
    slug: 'data-quality',
    phase: 4,
    phaseTitle: 'Production & Career',
    phaseColor: '#f59e0b',
    number: 12,
    emoji: '🛡️',
    title: 'Data Quality & Governance — คุณภาพและธรรมาภิบาลข้อมูล',
    shortTitle: 'Data Quality',
    description: 'เรียนรู้ Data Quality, Great Expectations, Data Observability, PDPA และ Data Governance',
    content: `
<h2>🛡️ Data Quality & Governance — คุณภาพและธรรมาภิบาลข้อมูล</h2>

<p>สมมติคุณสร้าง Dashboard สวยงาม แต่ข้อมูลข้างในผิด — ยอดขายเดือนนี้แสดงว่า 0 บาท ทั้งที่ขายได้ล้าน เพราะ pipeline ดึงข้อมูลมาไม่ครบ ผู้บริหารเห็นตัวเลขนี้แล้วตกใจ โทรถามทีม IT — <strong>ปัญหา Data Quality แบบนี้ทำลายความน่าเชื่อถือทั้งหมดที่สร้างมา</strong> บทนี้จะสอนวิธีป้องกันไม่ให้ข้อมูลเสียหายไปถึงมือผู้ใช้</p>

<h3>🗑️ "Garbage In, Garbage Out" — ทำไม Data Quality สำคัญ?</h3>

<p>ลองนึกแบบนี้: ถ้าร้านอาหารใช้วัตถุดิบเน่า ทำอาหารอร่อยแค่ไหนก็กินไม่ได้ Data ก็เหมือนกัน — <strong>ถ้าข้อมูลไม่ดี ผลวิเคราะห์ทั้งหมดก็ไม่มีค่า</strong></p>

<h3>📏 4 มิติของ Data Quality</h3>

<table>
<thead><tr><th>มิติ</th><th>หมายถึง</th><th>ตัวอย่างปัญหา</th><th>วิธีตรวจ</th></tr></thead>
<tbody>
<tr><td>🎯 <strong>Accuracy</strong></td><td>ข้อมูลถูกต้อง</td><td>อายุลูกค้า = -5 ปี 😱</td><td>Range checks</td></tr>
<tr><td>📋 <strong>Completeness</strong></td><td>ข้อมูลครบถ้วน</td><td>email เป็น NULL 30%</td><td>NULL count, % completeness</td></tr>
<tr><td>⏰ <strong>Timeliness</strong></td><td>ข้อมูลมาทันเวลา</td><td>ข้อมูลวันนี้มาพรุ่งนี้บ่าย</td><td>Freshness monitoring</td></tr>
<tr><td>🔗 <strong>Consistency</strong></td><td>ข้อมูลตรงกันข้าม source</td><td>ยอดขายจาก DB ≠ ยอดจาก API</td><td>Cross-system reconciliation</td></tr>
</tbody>
</table>

<h3>🧪 Great Expectations — Unit Test สำหรับข้อมูล</h3>

<p>เหมือนที่ Software Engineer เขียน unit test เพื่อตรวจว่า code ถูกต้อง <strong>Data Engineer ใช้ Great Expectations เพื่อตรวจว่าข้อมูลถูกต้อง</strong></p>

<pre><code class="language-python"># pip install great-expectations
import great_expectations as gx

context = gx.get_context()

# เชื่อมต่อข้อมูล
datasource = context.sources.add_pandas("my_datasource")
data_asset = datasource.add_csv_asset(name="orders", filepath_or_buffer="orders.csv")
batch_request = data_asset.build_batch_request()

# สร้าง Validator
validator = context.get_validator(
    batch_request=batch_request,
    expectation_suite_name="orders_quality_suite",
)

# เขียน Expectations (กฎตรวจข้อมูล)
validator.expect_column_values_to_not_be_null("order_id")       # ห้าม NULL
validator.expect_column_values_to_be_unique("order_id")          # ห้ามซ้ำ
validator.expect_column_values_to_be_between("amount", min_value=0, max_value=1000000)
validator.expect_column_values_to_be_in_set(
    "status", ["pending", "completed", "cancelled", "refunded"]  # status ต้องอยู่ใน list นี้
)
validator.expect_table_row_count_to_be_between(min_value=1)      # ต้องมีข้อมูลอย่างน้อย 1 row

# รัน validation
result = checkpoint.run()
if not result.success:
    print("❌ Data Quality Check FAILED!")
else:
    print("✅ All checks PASSED!")
</code></pre>

<h3>📡 Data Observability — เฝ้าระวังข้อมูลแบบ Proactive</h3>

<p>แทนที่จะรอให้ผู้ใช้มาบอกว่า "ข้อมูลผิดนะ" เราต้องตรวจจับปัญหาเองก่อนที่จะมีใครสังเกตเห็น:</p>

<table>
<thead><tr><th>Pillar</th><th>คำอธิบาย</th><th>ตัวอย่าง Alert</th></tr></thead>
<tbody>
<tr><td>📊 <strong>Freshness</strong></td><td>ข้อมูลอัพเดทล่าสุดเมื่อไหร่</td><td>"Table orders ไม่ได้อัพเดทมา 6 ชั่วโมง!"</td></tr>
<tr><td>📈 <strong>Volume</strong></td><td>จำนวน rows เปลี่ยนผิดปกติไหม</td><td>"Orders วันนี้น้อยกว่าปกติ 80%!"</td></tr>
<tr><td>🔧 <strong>Schema</strong></td><td>โครงสร้าง table เปลี่ยนไหม</td><td>"Column 'discount' ถูกลบออก!"</td></tr>
<tr><td>📉 <strong>Distribution</strong></td><td>การกระจายข้อมูลเปลี่ยนไหม</td><td>"% cancelled เพิ่มจาก 5% เป็น 40%!"</td></tr>
</tbody>
</table>

<pre><code class="language-python"># ตัวอย่าง: ตรวจ Freshness ของ table
from google.cloud import bigquery
from datetime import datetime

client = bigquery.Client()

def check_freshness(table_id, max_delay_hours=6):
    query = f"""
    SELECT TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), MAX(_loaded_at), HOUR) AS hours_stale
    FROM \`{table_id}\`
    """
    result = client.query(query).to_dataframe()
    hours = result["hours_stale"].iloc[0]
    
    if hours > max_delay_hours:
        send_slack_alert(f"🚨 {table_id} ไม่ได้อัพเดทมา {hours} ชั่วโมง!")
        return False
    print(f"✅ {table_id} — fresh ({hours} hours)")
    return True
</code></pre>

<h3>🔒 PDPA — กฎหมายที่ Data Engineer ต้องรู้</h3>

<p>PDPA (พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล) มีผลต่อ DE โดยตรง:</p>

<table>
<thead><tr><th>หัวข้อ</th><th>สิ่งที่ DE ต้องทำ</th></tr></thead>
<tbody>
<tr><td><strong>PII (ข้อมูลส่วนบุคคล)</strong></td><td>Tag ทุก column ที่เป็น PII (ชื่อ, email, เลขบัตร)</td></tr>
<tr><td><strong>Data Masking</strong></td><td>ซ่อนข้อมูลส่วนตัว เช่น john@email.com → jo***@email.com</td></tr>
<tr><td><strong>RBAC</strong></td><td>กำหนดสิทธิ์ — Analyst ดูได้แค่ analytics dataset ไม่เห็น raw data ที่มี PII</td></tr>
<tr><td><strong>Right to be Forgotten</strong></td><td>ลูกค้าขอลบข้อมูลได้ ต้อง design pipeline ให้ลบ PII ได้ทุก layer</td></tr>
</tbody>
</table>

<pre><code class="language-sql">-- Data Masking ใน BigQuery
SELECT
    customer_id,
    CONCAT(LEFT(email, 2), '***@', SPLIT(email, '@')[SAFE_OFFSET(1)]) AS masked_email,
    CONCAT(LEFT(phone, 3), '-XXX-XXXX') AS masked_phone
FROM customers;
-- john.doe@gmail.com → jo***@gmail.com
-- 089-123-4567 → 089-XXX-XXXX
</code></pre>

<div class="warning-box">
❌ <strong>ผิดพลาดที่พบบ่อย:</strong><br>
1. <strong>ไม่มี data quality checks</strong> — ปล่อยให้ bad data ไหลไปถึง dashboard<br>
2. <strong>ตรวจ quality แค่ตอน develop</strong> — ต้องตรวจทุกครั้งที่ pipeline run ในทุก environment<br>
3. <strong>ไม่มี alerting</strong> — quality fail แต่ไม่มีใครรู้ จนผู้ใช้มาบอก<br>
4. <strong>Copy PII ไปทุก table</strong> — ยากต่อการ comply กับ PDPA<br>
5. <strong>ให้ทุกคน access raw data</strong> — ไม่ทำ RBAC ข้อมูลลูกค้ารั่วไหลง่าย
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Data Quality</h4>
<ol>
<li><strong>Data Quality มีกี่มิติ? อะไรบ้าง?</strong><br>
4 มิติหลัก: Accuracy (ถูกต้อง), Completeness (ครบถ้วน), Timeliness (ทันเวลา), Consistency (สอดคล้อง)</li>
<li><strong>PDPA มีผลต่อ Data Engineer อย่างไร?</strong><br>
ต้อง tag PII, implement data masking, ทำ RBAC, design pipeline ให้ลบ PII ได้ (right to be forgotten), เก็บ consent log</li>
<li><strong>Data Lineage สำคัญอย่างไร?</strong><br>
ช่วยวิเคราะห์ impact analysis (source เปลี่ยน อะไรพัง), debug ข้อมูลผิด (trace ย้อนกลับ), comply กับ PDPA (รู้ว่า PII อยู่ที่ไหนบ้าง)</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน Great Expectations suite สำหรับ orders data ที่ตรวจ: not_null, unique, range, allowed values</li>
<li>เขียน Python function ตรวจ freshness + volume ของ BigQuery table แล้วส่ง alert ถ้าผิดปกติ</li>
<li>เขียน SQL Data Masking function สำหรับ email, phone number</li>
<li>ออกแบบ RBAC สำหรับทีม 3 กลุ่ม: DE (full access), Analyst (read analytics only), Manager (read dashboards only)</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 13 — End-to-End Project
  // ============================================================
  {
    id: 'chapter-13',
    slug: 'project',
    phase: 4,
    phaseTitle: 'Production & Career',
    phaseColor: '#f59e0b',
    number: 13,
    emoji: '🚀',
    title: 'End-to-End Project — สร้าง Pipeline แบบมืออาชีพ',
    shortTitle: 'E2E Project',
    description: 'สร้าง full pipeline จริง: API → GCS → BigQuery → dbt → Looker Studio ด้วย Airflow orchestration',
    content: `
<h2>🚀 End-to-End Project — สร้าง Pipeline แบบมืออาชีพ</h2>

<p>ถ้าเปรียบ Data Engineering เป็นการเรียนทำอาหาร — บทที่ผ่านมาเราเรียนหั่นผัก, ผัดข้าว, ทอดไข่ทีละอย่าง แต่บทนี้เราจะ <strong>ทำอาหาร full course</strong> ตั้งแต่ไปซื้อวัตถุดิบ จนจัดจานเสิร์ฟ — นี่คือสิ่งที่จะทำให้คุณ <strong>ได้งาน</strong> เพราะ recruiter ต้องการเห็นว่าคุณทำงานได้ครบ loop ไม่ใช่แค่ทีละชิ้น</p>

<img src="/images/end_to_end_pipeline.png" alt="End-to-End Pipeline: API → GCS → BigQuery → dbt → Dashboard" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>🏗️ Architecture — ภาพรวมระบบทั้งหมด</h3>

<p>Pipeline ที่เราจะสร้างเป็น <strong>E-commerce Data Pipeline</strong>:</p>

<pre><code class="language-text">📥 Extract     → ดึง orders จาก REST API
💾 Load        → เก็บลง Cloud Storage (GCS) แล้วโหลดเข้า BigQuery
🧪 Quality     → ตรวจสอบข้อมูลด้วย data quality checks
🔄 Transform   → ใช้ dbt แปลงจาก raw → staging → analytics
📊 Visualize   → แสดงผลบน Looker Studio Dashboard
⏰ Orchestrate → ทั้งหมดถูก Airflow สั่งให้ run อัตโนมัติทุกวัน ตี 2
</code></pre>

<h3>📁 โครงสร้าง Project</h3>
<pre><code class="language-text">de101-e2e-project/
├── README.md                    # Portfolio documentation
├── docker-compose.yml           # Airflow + PostgreSQL
├── .env.example                 # Environment variables template
├── .gitignore
│
├── airflow/
│   └── dags/
│       └── etl_ecommerce.py     # Main DAG
│
├── src/
│   ├── extract.py               # ดึงข้อมูลจาก API
│   ├── load.py                  # โหลดเข้า GCS & BigQuery
│   └── quality.py               # ตรวจสอบคุณภาพข้อมูล
│
├── dbt_project/
│   ├── dbt_project.yml
│   └── models/
│       ├── staging/             # stg_orders, stg_customers
│       ├── intermediate/        # int_order_details
│       └── marts/               # fct_daily_sales, dim_customers
│
└── tests/
    └── test_extract.py
</code></pre>

<h3>Step 1: Extract — ดึงข้อมูลจาก API</h3>

<p>เริ่มจากสิ่งที่เราเรียนมาก่อนหน้า — ดึงข้อมูลจาก REST API ด้วย Python พร้อม retry logic:</p>

<pre><code class="language-python"># src/extract.py
import requests
import logging
from tenacity import retry, stop_after_attempt, wait_exponential

logger = logging.getLogger(__name__)

class APIExtractor:
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({"Authorization": f"Bearer {api_key}"})
    
    @retry(stop=stop_after_attempt(3), wait=wait_exponential(min=4, max=60))
    def fetch_orders(self, date: str) -> list:
        """ดึง orders ของวันที่กำหนด พร้อม retry อัตโนมัติ"""
        url = f"{self.base_url}/orders"
        response = self.session.get(url, params={"date": date}, timeout=30)
        response.raise_for_status()
        
        data = response.json()
        logger.info(f"📥 Extracted {len(data)} orders for {date}")
        return data
</code></pre>

<h3>Step 2: Load — โหลดเข้า GCS → BigQuery</h3>

<pre><code class="language-python"># src/load.py
import json
from google.cloud import storage, bigquery

class DataLoader:
    def __init__(self, project_id: str, bucket_name: str):
        self.project_id = project_id
        self.gcs_client = storage.Client(project=project_id)
        self.bq_client = bigquery.Client(project=project_id)
        self.bucket_name = bucket_name
    
    def upload_to_gcs(self, data: list, prefix: str, date: str) -> str:
        """อัพโหลดข้อมูลไป GCS เป็น NDJSON"""
        bucket = self.gcs_client.bucket(self.bucket_name)
        blob_path = f"{prefix}/dt={date}/data.json"
        blob = bucket.blob(blob_path)
        
        ndjson = "\\n".join(json.dumps(record) for record in data)
        blob.upload_from_string(ndjson, content_type="application/json")
        
        gcs_uri = f"gs://{self.bucket_name}/{blob_path}"
        return gcs_uri
    
    def load_to_bigquery(self, gcs_uri: str, table_id: str) -> int:
        """โหลดจาก GCS เข้า BigQuery"""
        job_config = bigquery.LoadJobConfig(
            source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON,
            autodetect=True,
            write_disposition="WRITE_TRUNCATE",
        )
        
        job = self.bq_client.load_table_from_uri(gcs_uri, table_id, job_config=job_config)
        job.result()
        
        table = self.bq_client.get_table(table_id)
        return table.num_rows
</code></pre>

<h3>Step 3: Airflow DAG — รวมทุกอย่างเข้าด้วยกัน</h3>

<pre><code class="language-python"># airflow/dags/etl_ecommerce.py
from datetime import datetime, timedelta
from airflow.decorators import dag, task
from airflow.operators.bash import BashOperator

@dag(
    dag_id="etl_ecommerce_pipeline",
    schedule="0 2 * * *",  # ทุกวัน ตี 2
    start_date=datetime(2024, 1, 1),
    catchup=False,
    default_args={"retries": 3, "retry_delay": timedelta(minutes=5)},
    tags=["production", "ecommerce"],
)
def etl_ecommerce():
    
    @task()
    def extract_orders(**context):
        from src.extract import APIExtractor
        extractor = APIExtractor(base_url="https://api.example.com", api_key="...")
        orders = extractor.fetch_orders(date=context["ds"])
        return {"count": len(orders), "date": context["ds"]}
    
    @task()
    def load_to_warehouse(extract_result, **context):
        from src.load import DataLoader
        loader = DataLoader(project_id="my-de-project", bucket_name="my-data-lake")
        
        gcs_uri = loader.upload_to_gcs(data=[], prefix="orders", date=context["ds"])
        rows = loader.load_to_bigquery(gcs_uri, "my-de-project.raw_data.orders")
        return rows
    
    @task()
    def run_quality_checks():
        from src.quality import DataQualityChecker
        checker = DataQualityChecker(project_id="my-de-project")
        checker.run_all_checks("my-de-project.raw_data.orders", "order_id", "order_date")
    
    run_dbt = BashOperator(
        task_id="run_dbt_models",
        bash_command="cd /opt/dbt && dbt build --profiles-dir /opt/dbt",
    )
    
    @task()
    def notify_success(**context):
        print(f"✅ Pipeline completed for {context['ds']}")
    
    # กำหนดลำดับ: extract → load → quality → dbt → notify
    orders = extract_orders()
    loaded = load_to_warehouse(orders)
    quality = run_quality_checks()
    
    loaded >> quality >> run_dbt >> notify_success()

etl_ecommerce()
</code></pre>

<h3>📝 README.md — สิ่งสำคัญที่สุดของ Portfolio</h3>

<pre><code class="language-markdown"># 🛒 E-Commerce Data Pipeline

## Overview
End-to-end data pipeline ที่ดึงข้อมูล e-commerce จาก REST API,
แปลงด้วย dbt, ตรวจ data quality, แสดงผลบน Looker Studio

## Architecture
![Architecture](docs/architecture.png)

## Tech Stack
| Component | Technology |
|-----------|-----------|
| Orchestration | Apache Airflow 2.8 |
| Warehouse | Google BigQuery |
| Transform | dbt Core 1.7 |
| Quality | Custom Python checks |
| Container | Docker Compose |

## Quick Start
git clone → cp .env.example .env → docker compose up -d
Open http://localhost:8080 for Airflow UI

## Key Decisions
1. GCS as Data Lake — ราคาถูก เก็บ raw data สำรอง
2. Incremental dbt models — ลด compute cost
3. Quality checks before transform — catch bad data เร็วที่สุด
</code></pre>

<div class="tip-box">
💡 <strong>Production Best Practices:</strong><br>
1. <strong>Logging</strong> — ใช้ <code>logging</code> module ไม่ใช่ <code>print()</code> ทุก step ต้อง log<br>
2. <strong>Retry</strong> — ใช้ tenacity สำหรับ API calls ที่อาจ fail<br>
3. <strong>Idempotency</strong> — run ซ้ำกี่ครั้งก็ได้ ผลเหมือนเดิม ใช้ WRITE_TRUNCATE<br>
4. <strong>Config</strong> — ห้าม hardcode credentials ใช้ env variables / Airflow Variables<br>
5. <strong>Monitoring</strong> — ตั้ง alert สำหรับ failure, quality fail, latency สูง
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดที่พบบ่อยในการทำ Portfolio:</strong><br>
1. <strong>ไม่มี README</strong> — recruiter เปิด repo แล้วไม่รู้ว่า project ทำอะไร ปิดทันที<br>
2. <strong>Commit credentials</strong> — ใส่ API key, password ใน code = ตกรอบทันที<br>
3. <strong>ไม่มี architecture diagram</strong> — ภาพหนึ่งภาพสื่อได้มากกว่าข้อความ 1,000 คำ<br>
4. <strong>ไม่มี error handling</strong> — code ที่ทำงานแค่ happy path ไม่ใช่ production-ready<br>
5. <strong>Copy project จากคนอื่น</strong> — ถ้าถูกถามตอนสัมภาษณ์จะตอบไม่ได้
</div>

<div class="interview-box">
<h4>🎤 คำถามที่มักถามเกี่ยวกับ E2E Project</h4>
<ol>
<li><strong>ทำไมเลือก stack นี้?</strong><br>
ต้องตอบได้ว่าเปรียบเทียบอะไรบ้าง เช่น "เลือก BigQuery เพราะ serverless, pay-per-query, ไม่ต้อง manage infra"</li>
<li><strong>ถ้า pipeline fail ตอนตี 2 จะทำอย่างไร?</strong><br>
มี alerting (Slack/email) → ตรวจ logs ใน Airflow UI → retry → fix code → re-run DAG</li>
<li><strong>Pipeline handle data ซ้ำอย่างไร?</strong><br>
ใช้ idempotent approach: WRITE_TRUNCATE สำหรับ daily partition หรือ MERGE (upsert) ด้วย unique key</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง end-to-end pipeline จริงโดยใช้ free public API (เช่น CoinGecko, JSONPlaceholder)</li>
<li>เขียน Airflow DAG ที่มีอย่างน้อย 4 tasks: extract, load, quality_check, dbt_run</li>
<li>สร้าง dbt project ที่มี 3 layers พร้อม tests</li>
<li>เขียน README.md ที่มี architecture diagram, tech stack table, quick start</li>
<li>Push code ขึ้น GitHub แล้ว pin ไว้ที่ profile</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 14 — System Design
  // ============================================================
  {
    id: 'chapter-14',
    slug: 'system-design',
    phase: 4,
    phaseTitle: 'Production & Career',
    phaseColor: '#f59e0b',
    number: 14,
    emoji: '🏗️',
    title: 'System Design — ออกแบบระบบ Data สำหรับสัมภาษณ์งาน',
    shortTitle: 'System Design',
    description: 'เรียนรู้ framework การออกแบบระบบ Data พร้อม 3 ตัวอย่างจริง: E-commerce, Real-time Dashboard, Data Lake',
    content: `
<h2>🏗️ System Design — ออกแบบระบบ Data สำหรับสัมภาษณ์งาน</h2>

<p>ในรอบสัมภาษณ์ Data Engineer ระดับ mid-senior มักจะมีรอบ <strong>System Design</strong> — ผู้สัมภาษณ์จะให้โจทย์เช่น "ออกแบบ data pipeline สำหรับ e-commerce ที่มี 1 ล้าน orders ต่อวัน" แล้วดูวิธีคิดของเรา ไม่มีคำตอบถูก-ผิดเพียงหนึ่งเดียว แต่เขาต้องการเห็นว่า <strong>เราคิดเป็นระบบได้</strong></p>

<h3>🧠 System Design เหมือนอะไร? — การสร้างบ้าน</h3>

<p>เหมือนกับการสร้างบ้าน — ก่อนจะเริ่มก่อสร้าง ต้องถามก่อนว่า:</p>
<ul>
<li>🏠 จะอยู่กี่คน? (Scale)</li>
<li>💰 มี budget เท่าไหร่? (Budget)</li>
<li>📍 จะสร้างที่ไหน? (Cloud/On-premise)</li>
<li>⏰ ต้องเสร็จเมื่อไหร่? (Timeline)</li>
<li>🔌 ต้องมีอะไรบ้าง? น้ำ ไฟ แอร์? (Requirements)</li>
</ul>

<p>System Design ก็เหมือนกัน — <strong>ถามก่อน แล้วค่อย design</strong></p>

<img src="/images/end_to_end_pipeline.png" alt="System Design: Full pipeline architecture example" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>📋 4-Step Framework — ใช้ได้ทุกโจทย์</h3>

<table>
<thead><tr><th>Step</th><th>เวลา</th><th>สิ่งที่ต้องทำ</th></tr></thead>
<tbody>
<tr><td>1️⃣ <strong>Clarify</strong></td><td>5 นาที</td><td>ถามคำถามเพื่อเข้าใจ requirements (ห้ามข้ามขั้นนี้!)</td></tr>
<tr><td>2️⃣ <strong>High-Level Design</strong></td><td>10 นาที</td><td>วาด architecture diagram แสดง components หลัก</td></tr>
<tr><td>3️⃣ <strong>Deep Dive</strong></td><td>15 นาที</td><td>ลงรายละเอียด components สำคัญ</td></tr>
<tr><td>4️⃣ <strong>Trade-offs</strong></td><td>5 นาที</td><td>อธิบายข้อดี-ข้อเสียของ design ที่เลือก</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>คำถามที่ต้องถาม (Step 1: Clarify):</strong><br>
• <strong>Scale:</strong> ข้อมูลวันละเท่าไหร่? กี่ users? เก็บนานแค่ไหน?<br>
• <strong>Latency:</strong> ต้อง real-time ไหม? delay ได้กี่นาที/ชั่วโมง?<br>
• <strong>Sources:</strong> data มาจากไหน? format อะไร?<br>
• <strong>Consumers:</strong> ใครใช้ข้อมูล? analyst? ML model? dashboard?<br>
• <strong>Budget:</strong> มี budget constraints ไหม?
</div>

<hr>

<h3>📝 Problem 1: E-commerce Pipeline — 1M Orders/Day</h3>

<p><strong>โจทย์:</strong> "ออกแบบ data pipeline สำหรับ e-commerce ที่มี 1 ล้าน orders ต่อวัน ต้องการ daily analytics dashboard"</p>

<h4>Step 1: Clarify</h4>
<pre><code class="language-text">• 1M orders/day → ~500 MB/day → ~15 GB/month
• Sources: PostgreSQL (orders, customers), Payments API
• Consumers: BI team (Looker Studio), Management (monthly reports)
• Latency: T+1 (ข้อมูลวันนี้ พร้อมใช้พรุ่งนี้เช้า)
• Budget: prefer managed services
</code></pre>

<h4>Step 2: High-Level Design</h4>
<pre><code class="language-text">┌──────────────┐     ┌───────────┐     ┌──────────────┐
│  PostgreSQL  │────▶│  Cloud    │────▶│  BigQuery    │
│  (Source)    │     │  Storage  │     │  (Raw)       │
└──────────────┘     └───────────┘     └──────────────┘
                                             │
┌──────────────┐                             ▼
│  Payments    │─────────────────────▶ ┌──────────────┐
│  API         │                      │  dbt         │
└──────────────┘                      │  (Transform) │
                                      └──────────────┘
┌──────────────┐                             │
│  Airflow     │  ← Orchestrate all          ▼
│  (Scheduler) │                      ┌──────────────┐
└──────────────┘                      │ Looker Studio│
                                      └──────────────┘
</code></pre>

<h4>Step 4: Trade-offs</h4>
<table>
<thead><tr><th>Decision</th><th>ข้อดี</th><th>ข้อเสีย</th></tr></thead>
<tbody>
<tr><td>Batch (T+1) vs Real-time</td><td>ง่าย, ถูก, เชื่อถือได้</td><td>ข้อมูลไม่ real-time</td></tr>
<tr><td>BigQuery vs Redshift</td><td>Serverless, pay-per-query</td><td>อาจแพงถ้า query เยอะมาก</td></tr>
<tr><td>dbt vs Stored Procedures</td><td>Version control, testable</td><td>ต้อง learn dbt</td></tr>
</tbody>
</table>

<hr>

<h3>📝 Problem 2: Real-time Delivery Dashboard</h3>

<p><strong>โจทย์:</strong> "ออกแบบ real-time dashboard แสดงตำแหน่ง rider 10,000 คน update ทุก 5 วินาที"</p>

<pre><code class="language-text">• 10K riders × update ทุก 5 วิ = 2K events/second
• Latency requirement: < 5 seconds (real-time!)
• ต้องใช้ architecture ที่ต่างจาก batch pipeline
</code></pre>

<pre><code class="language-text">┌──────────────┐     ┌───────────┐     ┌──────────────┐
│  Rider App   │────▶│  Pub/Sub  │────▶│  Dataflow    │
│  (GPS data)  │     │  (Queue)  │     │  (Stream)    │
└──────────────┘     └───────────┘     └──────────────┘
                                         │         │
                                         ▼         ▼
                                  ┌──────────┐  ┌──────────┐
                                  │  Redis   │  │ BigQuery  │
                                  │(Real-time│  │(Historical│
                                  │  Cache)  │  │ Data)     │
                                  └──────────┘  └──────────┘
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  Dashboard   │
                                  │  (WebSocket) │
                                  └──────────────┘
</code></pre>

<h3>⚡ Batch vs Streaming — เลือกตอนไหน?</h3>

<table>
<thead><tr><th>Aspect</th><th>Batch Processing</th><th>Stream Processing</th></tr></thead>
<tbody>
<tr><td><strong>Latency</strong></td><td>นาที → ชั่วโมง</td><td>มิลลิวินาที → วินาที</td></tr>
<tr><td><strong>Complexity</strong></td><td>ง่ายกว่า</td><td>ซับซ้อนกว่า</td></tr>
<tr><td><strong>Cost</strong></td><td>ถูกกว่า (run ตาม schedule)</td><td>แพงกว่า (run ตลอด)</td></tr>
<tr><td><strong>Tools</strong></td><td>Airflow, dbt, Spark</td><td>Kafka, Flink, Pub/Sub</td></tr>
<tr><td><strong>Use Case</strong></td><td>Daily reports, ETL, ML training</td><td>Fraud detection, live dashboard</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>กฎง่ายๆ:</strong> ถ้าข้อมูลมาช้าได้ 1 ชั่วโมงขึ้นไป → ใช้ <strong>Batch</strong> (ง่ายกว่าและถูกกว่ามาก) ถ้าต้อง < 1 นาที → ใช้ <strong>Streaming</strong> — อย่า over-engineer!
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดในการตอบ System Design:</strong><br>
1. <strong>กระโดดไป solution ทันที</strong> — ไม่ถาม requirements ก่อน = ออกแบบผิดทิศ<br>
2. <strong>Over-engineering</strong> — ใช้ Kafka สำหรับ 100 events/day (batch ก็พอ)<br>
3. <strong>ไม่พูดถึง trade-offs</strong> — ทุก design มีข้อเสีย ต้องพูดให้เห็น<br>
4. <strong>ไม่คำนวณ capacity</strong> — ต้องบอกว่า data วันละเท่าไหร่<br>
5. <strong>ลืม monitoring/alerting</strong> — production system ต้องมี observability
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ System Design</h4>
<ol>
<li><strong>Batch กับ Streaming เลือกใช้ตอนไหน?</strong><br>
Batch: T+1 acceptable, ข้อมูลก้อนใหญ่, ถูกกว่า (daily reports, ML training)<br>
Streaming: ต้อง real-time, fraud detection, live dashboard</li>
<li><strong>Data Lake กับ Data Warehouse ต่างกันอย่างไร?</strong><br>
Data Lake: เก็บ raw data ทุก format, schema-on-read (เหมือนโกดัง)<br>
Data Warehouse: structured data ที่ transform แล้ว, optimize for analytics (เหมือนห้างสรรพสินค้าที่จัดหมวดเรียบร้อย)</li>
<li><strong>ถ้า pipeline handle data 100x มากขึ้น จะ design ต่างไปอย่างไร?</strong><br>
ต้องคิดเรื่อง partitioning, horizontal scaling, async processing, caching layer, data tiering</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>ออกแบบ Data Pipeline สำหรับ food delivery app ที่มี 50K orders/day — วาด architecture diagram + อธิบาย trade-offs</li>
<li>ออกแบบ Real-time Fraud Detection system ที่ต้อง flag suspicious transactions ภายใน 3 วินาที</li>
<li>คำนวณ capacity: 5M users, 20 events/day, 500 bytes/event — ต้องใช้ storage เท่าไหร่ต่อปี?</li>
</ol>
</div>
`
  },

  // ============================================================
  // CHAPTER 15 — สมัครงาน DE
  // ============================================================
  {
    id: 'chapter-15',
    slug: 'career',
    phase: 4,
    phaseTitle: 'Production & Career',
    phaseColor: '#f59e0b',
    number: 15,
    emoji: '💼',
    title: 'สมัครงาน Data Engineer — Portfolio, Resume, Interview',
    shortTitle: 'สมัครงาน DE',
    description: 'เตรียมตัวสมัครงาน DE ครบ: GitHub Portfolio, Resume, 25 คำถามสัมภาษณ์พร้อมคำตอบ, ต่อรองเงินเดือน',
    content: `
<h2>💼 สมัครงาน Data Engineer — Portfolio, Resume, Interview</h2>

<p>คุณเรียนมาทั้ง 14 บท ตอนนี้มีทักษะพร้อมแล้ว แต่ทักษะอย่างเดียว <strong>ไม่พอ</strong> — คุณต้อง "แสดงให้เห็น" ด้วย ถ้า recruiter เปิด GitHub ของคุณแล้วเจอ repo ว่างเปล่า หรือดู resume แล้วไม่เห็นตัวเลข ก็อาจพลาดโอกาส — บทนี้จะสอนวิธี <strong>package ตัวเอง</strong> ให้ได้งาน</p>

<img src="/images/de_roadmap.png" alt="Data Engineer Learning Roadmap and Career Path" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>🐙 GitHub Portfolio — ผลงานที่พูดแทนคุณ</h3>

<p>GitHub เป็นเหมือน <strong>portfolio ของศิลปิน</strong> — แค่เปิดดูก็รู้ว่าคนนี้ทำอะไรได้ ทำได้ดีแค่ไหน</p>

<h4>README.md ที่ดีต้องมีอะไร?</h4>
<pre><code class="language-markdown"># 📊 Project Name — สรุปสั้นๆ 1 บรรทัด

## 🎯 Overview
อธิบาย 2-3 ประโยค: project นี้ทำอะไร? แก้ปัญหาอะไร?

## 🏗️ Architecture
![Architecture](docs/architecture.png)
_(วาดด้วย draw.io, Excalidraw, หรือ Mermaid)_

## 🛠️ Tech Stack
| Component | Technology |
|-----------|-----------|
| Orchestration | Airflow 2.8 |
| Warehouse | BigQuery |
| Transform | dbt Core 1.7 |
| Container | Docker Compose |

## 🚀 Quick Start
git clone → cp .env.example .env → docker compose up -d

## 📝 Key Decisions & Lessons Learned
1. เลือก X เพราะ Y (trade-off analysis)
2. เจอปัญหา A แก้ด้วย B
</code></pre>

<div class="tip-box">
💡 <strong>Portfolio Tips:</strong><br>
1. <strong>ควรมี 2-3 projects</strong> — ไม่ต้องเยอะ แต่ต้องลึก<br>
2. <strong>Project หลัก = End-to-End Pipeline</strong> — แสดงว่าทำได้ครบ loop<br>
3. <strong>Pin repositories</strong> — เลือก repos ที่ดีที่สุดไว้หน้า GitHub profile<br>
4. <strong>มี architecture diagram</strong> — ภาพสื่อได้ดีกว่าข้อความ<br>
5. <strong>มี Dashboard screenshot</strong> — แสดง output ที่จับต้องได้<br>
6. <strong>เขียน Lessons Learned</strong> — แสดงว่าคิดวิเคราะห์ได้ ไม่ใช่แค่ copy code
</div>

<h3>📄 Resume — สรุปตัวเองใน 1 หน้า</h3>

<p>Recruiter ใช้เวลาอ่าน resume แค่ <strong>6-10 วินาที</strong> ดังนั้น ต้องกระชับ ชัดเจน มีตัวเลข</p>

<div class="tip-box">
💡 <strong>Resume Tips:</strong><br>
1. <strong>ใช้ตัวเลข</strong> — "processing 2M events/day", "reduced cost by 40%", "50+ models"<br>
2. <strong>ใช้ action verbs</strong> — Built, Designed, Implemented, Optimized, Automated<br>
3. <strong>1 หน้าเท่านั้น</strong> — กระชับ ไม่ต้องใส่ทุกอย่าง<br>
4. <strong>ปรับตาม JD</strong> — แต่ละตำแหน่งเน้น skill ต่างกัน ปรับ resume ให้ตรง<br>
5. <strong>ใส่ link GitHub + LinkedIn</strong> — ให้ recruiter ดูผลงานจริงได้
</div>

<pre><code class="language-text">ตัวอย่าง bullet point ที่ดี:
❌ "ทำ data pipeline"
✅ "Built ETL pipeline processing 2M events/day using Airflow + BigQuery, 
    reducing report latency from 24 hours to 2 hours"

❌ "ใช้ dbt"
✅ "Implemented 50+ dbt models with automated testing, reducing 
    data quality incidents by 60%"
</code></pre>

<h3>🎤 25 คำถามสัมภาษณ์ Data Engineer พร้อมคำตอบ</h3>

<h4>🗃️ SQL (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>INNER JOIN กับ LEFT JOIN ต่างกันอย่างไร?</strong><br>
INNER JOIN: เอาเฉพาะ rows ที่ match ทั้ง 2 tables | LEFT JOIN: เอาทุก rows จากตารางซ้าย + match จากขวา (ไม่ match = NULL)</li>
<li><strong>Window Functions ใช้ทำอะไร?</strong><br>
คำนวณค่าข้าม rows โดยไม่ collapse rows เหมือน GROUP BY เช่น <code>ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)</code></li>
<li><strong>CTE คืออะไร? ทำไมควรใช้?</strong><br>
CTE (Common Table Expression) = WITH clause — เหมือน subquery ที่ตั้งชื่อได้ ทำให้ SQL อ่านง่าย, reuse logic, debug ง่าย</li>
<li><strong>Index ทำงานอย่างไร?</strong><br>
Index = เหมือนสารบัญหนังสือ ช่วย lookup เร็ว — ควรสร้างบน columns ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อย</li>
<li><strong>WHERE กับ HAVING ต่างกันอย่างไร?</strong><br>
WHERE: filter rows ก่อน GROUP BY | HAVING: filter groups หลัง GROUP BY (ทำงานกับ aggregate results)</li>
</ol>
</div>

<h4>🐍 Python (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>List กับ Tuple ต่างกันอย่างไร?</strong><br>
List: mutable (แก้ไขได้) ใช้ [] | Tuple: immutable (แก้ไม่ได้) ใช้ () — Tuple เร็วกว่า เหมาะกับ constants</li>
<li><strong>*args กับ **kwargs คืออะไร?</strong><br>
*args: รับ positional arguments ไม่จำกัด เป็น tuple | **kwargs: รับ keyword arguments ไม่จำกัด เป็น dict</li>
<li><strong>List Comprehension vs Generator Expression?</strong><br>
List [x for x in range(1M)]: สร้าง list ทั้งก้อนใน memory | Generator (x for x in range(1M)): สร้างทีละตัว ประหยัด memory</li>
<li><strong>try/except best practices?</strong><br>
Catch specific exceptions (ไม่ใช่ bare except), ใช้ finally สำหรับ cleanup, log errors อย่าเงียบ</li>
<li><strong>Decorator คืออะไร? ใช้ทำอะไรใน DE?</strong><br>
Function ที่ wrap function อื่นเพื่อเพิ่ม functionality — ใน DE ใช้: @retry, @task (Airflow), @timer (logging)</li>
</ol>
</div>

<h4>📐 Data Modeling (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>Star Schema กับ Snowflake Schema?</strong><br>
Star: fact table ล้อมด้วย denormalized dimensions (ง่าย, query เร็ว) | Snowflake: dimensions ถูก normalize (ประหยัด storage, complex joins)</li>
<li><strong>Fact Table กับ Dimension Table?</strong><br>
Fact: events/transactions ที่เกิดขึ้น (orders, clicks) | Dimension: descriptive attributes (customers, products, time)</li>
<li><strong>SCD Type 1, 2, 3?</strong><br>
Type 1: Overwrite เขียนทับ | Type 2: เพิ่ม row ใหม่ มี valid_from/valid_to (เก็บ history ครบ) | Type 3: เพิ่ม column current/previous</li>
<li><strong>Normalization vs Denormalization?</strong><br>
Normalize: OLTP (ลด redundancy, write-optimized) | Denormalize: OLAP/DW (เพิ่ม redundancy, read-optimized, ลด JOINs)</li>
<li><strong>Data Vault คืออะไร?</strong><br>
Modeling ที่แยกเป็น Hub (business keys), Link (relationships), Satellite (attributes + history) — audit trail ครบ, เพิ่ม source ง่าย</li>
</ol>
</div>

<h4>🏗️ System Design (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>ETL กับ ELT ต่างกันอย่างไร?</strong><br>
ETL: Transform ก่อน Load (traditional) | ELT: Load ก่อน Transform (modern, cloud) — ปัจจุบัน ELT นิยมเพราะ cloud warehouse มี compute power สูง</li>
<li><strong>Data Lake กับ Data Warehouse?</strong><br>
Lake: raw data ทุก format, schema-on-read | Warehouse: structured data ที่ transform แล้ว, optimize for analytics</li>
<li><strong>CAP Theorem คืออะไร?</strong><br>
Distributed system เลือกได้แค่ 2 จาก 3: Consistency, Availability, Partition tolerance</li>
<li><strong>ทำยังไงให้ pipeline เป็น Idempotent?</strong><br>
ใช้ WRITE_TRUNCATE, MERGE/UPSERT ด้วย unique key, ใช้ execution_date เป็น partition key แทน CURRENT_DATE()</li>
<li><strong>Backfilling คืออะไร?</strong><br>
Run pipeline ย้อนหลังสำหรับ data ที่ขาดหรือต้อง reprocess — Pipeline ต้อง idempotent จึงจะ backfill ได้อย่างปลอดภัย</li>
</ol>
</div>

<h4>🤝 Behavioral (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>เล่าประสบการณ์ที่แก้ปัญหา data issue ที่ซับซ้อน</strong><br>
ใช้ STAR method: Situation → Task → Action → Result<br>
ตัวอย่าง: "เจอ data drift ใน production — revenue ลดลง 50% ปรากฏว่า API เปลี่ยน format — แก้โดยเพิ่ม schema validation + alert"</li>
<li><strong>ทำงานร่วมกับทีมที่ไม่ technical ยังไง?</strong><br>
"ใช้ภาษาที่เข้าใจง่าย หลีกเลี่ยงศัพท์ทางเทคนิค สร้าง Dashboard ให้เห็นภาพ ใช้ตัวอย่างจริง"</li>
<li><strong>ถ้า pipeline fail ตอนตี 2 จะทำอย่างไร?</strong><br>
"ตรวจ alert → ดู logs → ถ้า transient error retry → ถ้า bug fix code → re-run → post-mortem สรุปเพื่อป้องกันไม่ให้เกิดอีก"</li>
<li><strong>เคย optimize pipeline ให้เร็วขึ้นไหม?</strong><br>
"ใช้ Partitioning + Clustering ใน BigQuery ลด cost 70% | ใช้ incremental models ใน dbt ลดเวลา run จาก 15 นาที เหลือ 2 นาที"</li>
<li><strong>ทำไมอยากเป็น Data Engineer?</strong><br>
ตอบจริงใจ — เล่าว่าสนใจตรงไหน เคยทำ project อะไร ต้องการพัฒนาตัวเองด้าน data infrastructure</li>
</ol>
</div>

<h3>💰 เงินเดือน Data Engineer ในไทย (2024-2025)</h3>

<table>
<thead><tr><th>Level</th><th>ประสบการณ์</th><th>เงินเดือน (บาท/เดือน)</th></tr></thead>
<tbody>
<tr><td>Junior</td><td>0-2 ปี</td><td>25,000 - 45,000</td></tr>
<tr><td>Mid-level</td><td>2-4 ปี</td><td>45,000 - 80,000</td></tr>
<tr><td>Senior</td><td>4-7 ปี</td><td>80,000 - 130,000</td></tr>
<tr><td>Lead/Principal</td><td>7+ ปี</td><td>120,000 - 200,000+</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>เคล็ดลับต่อรองเงินเดือน:</strong><br>
1. <strong>รู้ market rate</strong> — ดู Glassdoor, LinkedIn Salary Insights, กลุ่ม Data Thai<br>
2. <strong>ให้ตัวเลขเป็น range</strong> — "ผมคาดหวังอยู่ที่ 50,000-65,000 ขึ้นอยู่กับ total package"<br>
3. <strong>พิจารณา total compensation</strong> — bonus, stock, learning budget, WFH, insurance<br>
4. <strong>อย่ารีบตอบ</strong> — "ขอเวลาพิจารณา 2-3 วันได้ไหมครับ" แสดงว่าคุณ serious<br>
5. <strong>มี offer อื่นเปรียบเทียบ</strong> — สมัครหลายที่พร้อมกัน ให้มีตัวเลือก
</div>

<div class="warning-box">
❌ <strong>ผิดพลาดตอนสัมภาษณ์:</strong><br>
1. <strong>ไม่เตรียมตัว</strong> — ไม่ศึกษาบริษัท ไม่อ่าน JD ให้ดี<br>
2. <strong>ตอบ "ไม่รู้" แล้วหยุด</strong> — ควรบอกวิธีที่จะหาคำตอบ "ยังไม่เคยใช้ แต่จากที่อ่านมา..."<br>
3. <strong>ไม่ถามคำถามกลับ</strong> — ควรถามเกี่ยวกับทีม tech stack, culture, growth opportunities<br>
4. <strong>โกหก</strong> — ถ้าบอกว่าใช้ Spark แล้วถามลึกตอบไม่ได้ จะเสียความน่าเชื่อถือ<br>
5. <strong>บอกเงินเดือนเก่าต่ำเกินไป</strong> — focus ที่ market rate ไม่ใช่เงินเดือนปัจจุบัน
</div>

<h3>📊 วิธีอ่านค่าสำคัญ — ทักษะที่ตำราไม่สอน แต่งานจริงต้องใช้</h3>

<p>เรียนเขียนโค้ดเป็น แต่พอ run จริงแล้ว <strong>"อ่านค่าไม่ออก"</strong> คือปัญหาที่มือใหม่ทุกคนเจอ ส่วนนี้จะสอนวิธีอ่านค่าสำคัญจากทุกเครื่องมือ:</p>

<h4>🔍 BigQuery — อ่าน Query Execution Details</h4>
<p>ทุกครั้งที่ run query ใน BigQuery ให้ดู <strong>Execution Details</strong> ที่ด้านล่าง:</p>
<table>
<thead><tr><th>ค่าที่ต้องดู</th><th>หมายถึง</th><th>ดียังไง / แย่ยังไง</th></tr></thead>
<tbody>
<tr><td><strong>Bytes Processed</strong></td><td>ข้อมูลที่ถูก scan</td><td>ยิ่งน้อยยิ่งดี (ประหยัดเงิน) — ใช้ Partition + SELECT เฉพาะ column ที่ต้องการ</td></tr>
<tr><td><strong>Bytes Billed</strong></td><td>ข้อมูลที่ถูกคิดเงิน</td><td>Minimum 10 MB ถ้า scan น้อยกว่า 10 MB ก็คิด 10 MB</td></tr>
<tr><td><strong>Slot Time</strong></td><td>เวลา compute รวมทุก worker</td><td>ถ้า slot time สูงมากแต่ elapsed time ต่ำ = parallelism ดี</td></tr>
<tr><td><strong>Elapsed Time</strong></td><td>เวลาจริงที่ user รอ</td><td>ถ้านานเกิน 30 วิ ควร optimize query</td></tr>
<tr><td><strong>Rows Read vs Output</strong></td><td>อ่านกี่ rows ได้ผลกี่ rows</td><td>ถ้าอ่าน 10M rows แต่ output 100 rows = filter ทำงานช้า ควรใช้ Partition</td></tr>
</tbody>
</table>

<pre><code class="language-sql">-- ✅ ดี: scan แค่ 1 partition + 2 columns
SELECT order_date, SUM(amount)
FROM analytics.fct_sales
WHERE order_date = '2024-01-15'  -- ← ใช้ partition column
GROUP BY 1;
-- Bytes processed: 5 MB ✅

-- ❌ แย่: scan ทั้ง table ทุก column
SELECT * FROM analytics.fct_sales;
-- Bytes processed: 50 GB ❌ (เสียเงิน $0.25 ต่อ query!)
</code></pre>

<h4>🌀 Airflow — อ่าน DAG Runs & Task Logs</h4>
<p>เปิด Airflow Web UI (<code>http://localhost:8080</code>) แล้วดู:</p>
<table>
<thead><tr><th>สิ่งที่ดู</th><th>อยู่ที่ไหน</th><th>ควรสังเกตอะไร</th></tr></thead>
<tbody>
<tr><td><strong>DAG Status</strong></td><td>หน้า DAGs</td><td>🟢 success / 🔴 failed / 🟡 running — ถ้าเห็น 🔴 คลิกดู log ทันที</td></tr>
<tr><td><strong>Task Duration</strong></td><td>Graph View → คลิก task</td><td>ถ้า task ใดใช้เวลานานขึ้นเรื่อยๆ = ข้อมูลโตขึ้น หรือ performance issue</td></tr>
<tr><td><strong>Task Tries</strong></td><td>Task Instance Details</td><td>ถ้า try_number > 1 = task retry แล้ว ตรวจว่าเป็น transient error หรือ bug จริง</td></tr>
<tr><td><strong>Task Log</strong></td><td>Task → Log tab</td><td>ดูบรรทัดสุดท้ายของ log — มักบอกสาเหตุ error</td></tr>
<tr><td><strong>Gantt Chart</strong></td><td>DAG → Gantt tab</td><td>เห็นภาพว่า task ไหน run นาน task ไหนรอ (bottleneck)</td></tr>
<tr><td><strong>Landing Time</strong></td><td>DAG → Landing Times</td><td>ดูว่า pipeline เสร็จกี่โมง — ถ้าเสร็จช้าลงเรื่อยๆ ต้อง optimize</td></tr>
</tbody>
</table>

<h4>⚡ Spark UI — อ่าน Jobs, Stages, Tasks</h4>
<p>เปิด Spark UI (<code>http://localhost:4040</code>) ตอน run PySpark:</p>
<table>
<thead><tr><th>Tab</th><th>ดูอะไร</th><th>ถ้าเห็นแบบนี้ = มีปัญหา</th></tr></thead>
<tbody>
<tr><td><strong>Jobs</strong></td><td>ภาพรวม job ทั้งหมด</td><td>Job ไหนใช้เวลานานผิดปกติ</td></tr>
<tr><td><strong>Stages</strong></td><td>แต่ละ stage ใน job</td><td><strong>Shuffle Read/Write สูง</strong> = มี wide transformation (groupBy, join) มาก → ลองลด</td></tr>
<tr><td><strong>Tasks</strong></td><td>tasks ย่อยในแต่ละ stage</td><td><strong>Data Skew</strong>: task 1 อัน ใช้เวลา 10 นาที ส่วนที่เหลือ 10 วินาที = ข้อมูลกระจายไม่เท่ากัน</td></tr>
<tr><td><strong>Storage</strong></td><td>cached DataFrames</td><td>ถ้า memory ใช้เกือบเต็ม = อาจ spill to disk (ช้า)</td></tr>
<tr><td><strong>Executors</strong></td><td>workers แต่ละตัว</td><td><strong>GC Time สูง</strong> = memory ไม่พอ ต้องเพิ่ม RAM หรือลดข้อมูล</td></tr>
</tbody>
</table>

<h4>🐳 Docker — อ่าน Resource Usage</h4>
<pre><code class="language-bash"># ดู resource ทุก container แบบ real-time
docker stats

# ผลลัพธ์:
# CONTAINER   CPU %   MEM USAGE / LIMIT    MEM %   NET I/O
# airflow     2.5%    512MiB / 4GiB        12.5%   1.2MB / 500KB
# postgres    0.3%    128MiB / 2GiB        6.25%   800KB / 200KB
</code></pre>
<table>
<thead><tr><th>ค่า</th><th>ปกติ</th><th>อันตราย</th></tr></thead>
<tbody>
<tr><td><strong>CPU %</strong></td><td>< 80%</td><td>> 90% ต่อเนื่อง = ต้อง scale up</td></tr>
<tr><td><strong>MEM %</strong></td><td>< 70%</td><td>> 85% = container อาจถูก OOM kill</td></tr>
<tr><td><strong>NET I/O</strong></td><td>ขึ้นกับ workload</td><td>ถ้าสูงผิดปกติ = อาจมี data leak หรือ loop</td></tr>
</tbody>
</table>

<h4>📈 Pipeline KPIs — ตัวชี้วัดสุขภาพ Pipeline</h4>
<table>
<thead><tr><th>KPI</th><th>วัดอะไร</th><th>เป้าหมาย</th><th>เครื่องมือ</th></tr></thead>
<tbody>
<tr><td><strong>Freshness</strong></td><td>ข้อมูลอัปเดตล่าสุดเมื่อไหร่</td><td>ตาม SLA เช่น T+2 ชั่วโมง</td><td>dbt source freshness, Custom SQL</td></tr>
<tr><td><strong>Completeness</strong></td><td>ข้อมูลครบไหม (NULL %)</td><td>< 5% NULL ใน critical columns</td><td>Great Expectations, dbt tests</td></tr>
<tr><td><strong>Volume</strong></td><td>จำนวน rows วันนี้ vs ค่าเฉลี่ย</td><td>ไม่เบี่ยงเบนเกิน 50%</td><td>Custom monitoring query</td></tr>
<tr><td><strong>Duration</strong></td><td>Pipeline ใช้เวลา run นานแค่ไหน</td><td>เสร็จก่อน business hours</td><td>Airflow Landing Time</td></tr>
<tr><td><strong>Error Rate</strong></td><td>% ของ DAG runs ที่ fail</td><td>< 5% failure rate</td><td>Airflow metrics</td></tr>
<tr><td><strong>Cost</strong></td><td>ค่าใช้จ่าย query/storage ต่อเดือน</td><td>ไม่เกิน budget ที่ตั้งไว้</td><td>GCP Billing Dashboard</td></tr>
</tbody>
</table>

<h3>🗺️ เส้นทางหลังจบ DE101 — จะไปทางไหนต่อ?</h3>

<h4>🔀 3 สาย ที่ DE เลือกเดินต่อได้</h4>
<table>
<thead><tr><th>สาย</th><th>เน้นอะไร</th><th>เครื่องมือที่ต้องเรียนเพิ่ม</th><th>ตำแหน่งงาน</th></tr></thead>
<tbody>
<tr><td>⚙️ <strong>Platform / Infra</strong></td><td>สร้าง infrastructure ให้ทีม data ใช้</td><td>Terraform, Kubernetes, CI/CD, Monitoring (Grafana/Prometheus)</td><td>Data Platform Engineer, DevOps for Data</td></tr>
<tr><td>📊 <strong>Analytics Engineering</strong></td><td>Transform data ให้ BI team ใช้</td><td>dbt Cloud, Looker, Semantic Layer, Data Modeling ขั้นสูง</td><td>Analytics Engineer, BI Engineer</td></tr>
<tr><td>🤖 <strong>ML Engineering</strong></td><td>สร้าง pipeline สำหรับ ML models</td><td>MLflow, Feature Store, Vertex AI, Kubeflow</td><td>ML Engineer, MLOps Engineer</td></tr>
</tbody>
</table>

<h4>📚 หัวข้อขั้นสูงที่ควรเรียนต่อ</h4>
<table>
<thead><tr><th>หัวข้อ</th><th>ทำไมต้องเรียน</th><th>แหล่งเรียน (ฟรี)</th></tr></thead>
<tbody>
<tr><td><strong>Streaming (Kafka/Flink)</strong></td><td>Real-time pipeline สำหรับ fraud detection, live dashboard</td><td>Confluent Kafka 101 (ฟรี), Flink docs</td></tr>
<tr><td><strong>Terraform (IaC)</strong></td><td>สร้าง infrastructure ด้วย code ไม่ต้อง click ใน Console</td><td>HashiCorp Learn (ฟรี)</td></tr>
<tr><td><strong>Kubernetes</strong></td><td>จัดการ containers ขนาดใหญ่ (Airflow on K8s, Spark on K8s)</td><td>Kubernetes.io tutorials (ฟรี)</td></tr>
<tr><td><strong>Data Mesh</strong></td><td>Architecture สมัยใหม่ที่แต่ละทีมเป็นเจ้าของ data domain ตัวเอง</td><td>Zhamak Dehghani's book, Martin Fowler's articles</td></tr>
<tr><td><strong>Data Contracts</strong></td><td>ข้อตกลงระหว่าง producer-consumer ป้องกัน schema เปลี่ยนกะทันหัน</td><td>datacontract.com, Andrew Jones' blog</td></tr>
<tr><td><strong>Delta Lake / Iceberg</strong></td><td>Open Table Format — ACID transactions บน Data Lake</td><td>Delta Lake docs (ฟรี), Apache Iceberg docs</td></tr>
</tbody>
</table>

<h4>🏆 Certifications ที่แนะนำ</h4>
<table>
<thead><tr><th>Certificate</th><th>ระดับ</th><th>ค่าสอบ</th><th>เหมาะกับใคร</th></tr></thead>
<tbody>
<tr><td><strong>Google Cloud Professional Data Engineer</strong></td><td>⭐⭐⭐</td><td>$200</td><td>คนที่ใช้ GCP (BigQuery, Dataflow, Pub/Sub)</td></tr>
<tr><td><strong>AWS Data Analytics Specialty</strong></td><td>⭐⭐⭐</td><td>$300</td><td>คนที่ใช้ AWS (Redshift, Glue, Kinesis)</td></tr>
<tr><td><strong>Databricks Data Engineer Associate</strong></td><td>⭐⭐</td><td>$200</td><td>คนที่ใช้ Spark + Delta Lake</td></tr>
<tr><td><strong>dbt Analytics Engineering Certificate</strong></td><td>⭐⭐</td><td>ฟรี!</td><td>ทุกคน — ใช้ dbt ในงานจริงเยอะมาก</td></tr>
<tr><td><strong>Apache Airflow Fundamentals</strong></td><td>⭐</td><td>ฟรี!</td><td>ใครที่ใช้ Airflow เป็น orchestrator</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>แนะนำ:</strong> เริ่มจาก <strong>dbt Certificate (ฟรี!)</strong> → <strong>GCP Professional DE</strong> — สองใบนี้มีค่าในตลาดงานไทยมากที่สุดตอนนี้
</div>

<h4>🌐 Community & แหล่งเรียนรู้ต่อ</h4>
<table>
<thead><tr><th>แหล่ง</th><th>ประเภท</th><th>ภาษา</th></tr></thead>
<tbody>
<tr><td><strong>Data Engineering Thailand (Facebook)</strong></td><td>Community ถาม-ตอบ</td><td>🇹🇭 ไทย</td></tr>
<tr><td><strong>Data TH Meetup</strong></td><td>Event/Meetup รายเดือน</td><td>🇹🇭 ไทย</td></tr>
<tr><td><strong>DataTalksClub</strong></td><td>คอร์สฟรี + Slack community</td><td>🇺🇸 อังกฤษ</td></tr>
<tr><td><strong>Seattle Data Guy (YouTube)</strong></td><td>DE concepts อธิบายง่าย</td><td>🇺🇸 อังกฤษ</td></tr>
<tr><td><strong>Start Data Engineering (Blog)</strong></td><td>Hands-on tutorials</td><td>🇺🇸 อังกฤษ</td></tr>
<tr><td><strong>r/dataengineering (Reddit)</strong></td><td>Discussion, career advice</td><td>🇺🇸 อังกฤษ</td></tr>
</tbody>
</table>

<h3>🤖 ต่อยอดด้วย AI Coding Assistant (Google Antigravity)</h3>

<p>ยุคนี้ Data Engineer ที่เก่ง ไม่ใช่คนที่จำทุกอย่างได้ แต่เป็นคนที่ <strong>รู้วิธีใช้เครื่องมือ</strong> — AI Coding Assistant อย่าง Google Antigravity เป็นเหมือน <strong>เพื่อนร่วมงาน senior ที่นั่งข้างๆ คุณ 24 ชั่วโมง</strong> พร้อมช่วยเขียนโค้ด, อธิบาย, debug, และสร้าง project ให้ทันที</p>

<h4>🛠️ สิ่งที่ AI ช่วยได้จริงในงาน DE</h4>
<table>
<thead><tr><th>สถานการณ์</th><th>สั่ง AI แบบนี้</th><th>ได้ผลลัพธ์</th></tr></thead>
<tbody>
<tr><td>🏗️ สร้าง Project</td><td>"สร้าง ETL pipeline ดึงข้อมูลจาก API แล้วเก็บลง CSV"</td><td>Python script พร้อมรัน + อธิบายทุกบรรทัด</td></tr>
<tr><td>📊 สร้าง Dashboard</td><td>"สร้าง Dashboard ดูยอดขาย แบบสวยๆ"</td><td>เว็บ Dashboard deploy ได้เลย</td></tr>
<tr><td>🐛 Debug</td><td>"Error นี้แก้ยังไง: [วาง error message]"</td><td>วิเคราะห์สาเหตุ + แก้ให้ทันที</td></tr>
<tr><td>📖 อธิบายโค้ด</td><td>"อธิบาย code นี้หน่อย แบบง่ายๆ" + วางโค้ด</td><td>อธิบายทีละบรรทัด พร้อมอุปมา</td></tr>
<tr><td>🎤 ซ้อมสัมภาษณ์</td><td>"ถามคำถามสัมภาษณ์ DE 10 ข้อ แล้วให้ feedback"</td><td>จำลองสัมภาษณ์จริง + ให้คะแนน</td></tr>
<tr><td>🐳 DevOps</td><td>"เขียน Dockerfile + docker-compose สำหรับ Airflow"</td><td>ไฟล์พร้อม run ทันที</td></tr>
<tr><td>📝 Documentation</td><td>"เขียน README ให้ project นี้"</td><td>README สมบูรณ์พร้อม architecture diagram</td></tr>
<tr><td>☁️ Deploy</td><td>"Deploy เว็บนี้ขึ้น Vercel ให้หน่อย"</td><td>เว็บออนไลน์ภายใน 2 นาที</td></tr>
</tbody>
</table>

<h4>🎯 แผนต่อยอด 8 สัปดาห์ (ใช้ AI ช่วย)</h4>
<table>
<thead><tr><th>สัปดาห์</th><th>เรียน</th><th>สั่ง AI สร้าง Project</th></tr></thead>
<tbody>
<tr><td><strong>1-2</strong></td><td>DE101 บทที่ 0-7</td><td>🟢 "สร้าง Python script ดึงข้อมูลอากาศจาก API แล้วเก็บ CSV ทุกวัน"</td></tr>
<tr><td><strong>3-4</strong></td><td>DE101 บทที่ 8-11</td><td>🟡 "สร้าง Dashboard แสดงราคา Crypto แบบ real-time จาก CoinGecko API"</td></tr>
<tr><td><strong>5-6</strong></td><td>DE101 บทที่ 12-13</td><td>🟠 "สร้าง Data Pipeline: API → SQLite → SQL Transform → Dashboard"</td></tr>
<tr><td><strong>7-8</strong></td><td>DE101 บทที่ 14-15</td><td>🔴 "สร้าง E2E Project: Docker + Airflow + dbt + BigQuery + Dashboard"</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>เคล็ดลับใช้ AI อย่างมีประสิทธิภาพ:</strong><br>
1. <strong>อย่าแค่ copy-paste</strong> — อ่านโค้ดที่ AI สร้าง ทำความเข้าใจก่อน แล้วถาม "ทำไมถึงเขียนแบบนี้?"<br>
2. <strong>สั่งให้อธิบาย</strong> — "อธิบาย code บรรทัดที่ 5-10 ให้หน่อย" ช่วยให้เรียนรู้ไปด้วย<br>
3. <strong>ลองแก้เองก่อน</strong> — พยายามเขียนเอง แล้วค่อยให้ AI review: "code นี้มีอะไรปรับปรุงได้บ้าง?"<br>
4. <strong>ใช้ AI เป็น tutor</strong> — "สอน Window Functions แบบละเอียด พร้อมตัวอย่าง 5 แบบ"<br>
5. <strong>สร้าง project จริง</strong> — AI ช่วยสร้าง project ที่ใส่ Portfolio ได้ทันที ไม่ต้องเริ่มจากศูนย์
</div>

<div class="exercise-box">
<h4>💪 Action Plan — ทำตามนี้เลย!</h4>
<ol>
<li>✅ สร้าง GitHub profile ที่สมบูรณ์ — bio, profile README, pin 3-6 repos ที่ดีที่สุด</li>
<li>✅ ทำ End-to-End Project จากบทที่ 13 แล้ว push ขึ้น GitHub พร้อม README ที่ดี</li>
<li>✅ เขียน Resume 1 หน้า — ใช้ตัวเลข, action verbs, ปรับตาม JD</li>
<li>✅ ซ้อมตอบ 25 คำถามข้างบน — อัดเสียงตัวเอง ฟังกลับ ปรับจนพอใจ</li>
<li>✅ ใช้ AI Coding Assistant สร้าง project จากแผน 8 สัปดาห์ — ทำจริง ไม่ใช่แค่อ่าน!</li>
<li>✅ สมัครงาน 5-10 ตำแหน่งพร้อมกัน — เพื่อมีตัวเลือกเปรียบเทียบ</li>
<li>✅ เข้าร่วม community — Data Engineering Thailand, Meetup, LinkedIn groups</li>
</ol>
</div>
`
  },
];
