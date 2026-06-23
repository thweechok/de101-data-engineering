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

<h3>BigQuery คืออะไร?</h3>
<p>BigQuery คือ <strong>Serverless Data Warehouse</strong> ของ Google Cloud Platform (GCP) ที่สามารถ query ข้อมูลระดับ Petabyte ได้ภายในวินาที โดยเราไม่ต้องจัดการ server เอง ไม่ต้อง provision hardware ไม่ต้อง tune index — Google จัดการให้หมด</p>

<table>
<thead><tr><th>Feature</th><th>BigQuery</th><th>Traditional DW (On-premise)</th></tr></thead>
<tbody>
<tr><td>Server Management</td><td>ไม่ต้อง (Serverless)</td><td>ต้อง setup/maintain เอง</td></tr>
<tr><td>Scaling</td><td>Auto-scale ทันที</td><td>ต้อง plan capacity ล่วงหน้า</td></tr>
<tr><td>Pricing</td><td>จ่ายตาม usage (query + storage)</td><td>Fixed cost สูง</td></tr>
<tr><td>Query Speed</td><td>วินาที (Columnar + Dremel engine)</td><td>ขึ้นกับ hardware/indexing</td></tr>
<tr><td>Storage Format</td><td>Columnar (Capacitor)</td><td>Row-based หรือ Columnar</td></tr>
</tbody>
</table>

<h3>สถาปัตยกรรมของ BigQuery</h3>
<p>BigQuery ใช้สถาปัตยกรรม <strong>Separation of Storage and Compute</strong>:</p>
<ul>
<li><strong>Storage Layer (Colossus)</strong> — เก็บข้อมูลในรูปแบบ Columnar บน distributed file system ของ Google</li>
<li><strong>Compute Layer (Dremel)</strong> — query engine ที่ทำ massively parallel processing</li>
<li><strong>Network (Jupiter)</strong> — เชื่อม storage กับ compute ด้วย bandwidth สูงมาก</li>
</ul>

<h3>โครงสร้าง: Project → Dataset → Table</h3>
<pre><code class="language-text">GCP Project (my-de-project)
├── Dataset: raw_data
│   ├── Table: orders
│   ├── Table: customers
│   └── Table: products
├── Dataset: staging
│   ├── Table: stg_orders
│   └── Table: stg_customers
└── Dataset: analytics
    ├── Table: fct_daily_sales
    └── Table: dim_customers
</code></pre>

<div class="tip-box">
💡 <strong>Naming Convention:</strong> ใช้ snake_case สำหรับ dataset และ table เสมอ แยก dataset ตาม layer (raw, staging, analytics) เพื่อจัดการ permission ง่าย
</div>

<h3>สร้าง Project และ Dataset</h3>
<pre><code class="language-bash"># 1. สร้าง project (ทำผ่าน GCP Console ก่อน)
gcloud projects create my-de-project --name="DE101 Project"

# 2. ตั้ง project เป็น default
gcloud config set project my-de-project

# 3. สร้าง dataset ด้วย bq CLI
bq mk --dataset \\
  --description "Raw data from source systems" \\
  --location=US \\
  my-de-project:raw_data

# 4. สร้าง dataset อื่นๆ
bq mk --dataset --location=US my-de-project:staging
bq mk --dataset --location=US my-de-project:analytics
</code></pre>

<h3>วิธีโหลดข้อมูลเข้า BigQuery</h3>

<h4>วิธีที่ 1: BigQuery UI</h4>
<p>เหมาะสำหรับไฟล์เล็ก ทดสอบ หรือ ad-hoc upload — ไปที่ BigQuery Console → เลือก dataset → Create Table → Upload CSV</p>

<h4>วิธีที่ 2: bq CLI</h4>
<pre><code class="language-bash"># โหลด CSV เข้า BigQuery
bq load \\
  --source_format=CSV \\
  --skip_leading_rows=1 \\
  --autodetect \\
  raw_data.orders \\
  ./orders.csv

# โหลด JSON (newline-delimited)
bq load \\
  --source_format=NEWLINE_DELIMITED_JSON \\
  raw_data.events \\
  gs://my-bucket/events/*.json

# โหลดจาก Google Cloud Storage (GCS)
bq load \\
  --source_format=PARQUET \\
  raw_data.transactions \\
  gs://my-de-bucket/transactions/*.parquet
</code></pre>

<h4>วิธีที่ 3: Python google-cloud-bigquery</h4>
<pre><code class="language-python">from google.cloud import bigquery
import pandas as pd

# สร้าง client
client = bigquery.Client(project="my-de-project")

# === วิธี A: โหลดจาก DataFrame ===
df = pd.read_csv("orders.csv")

table_id = "my-de-project.raw_data.orders"

job_config = bigquery.LoadJobConfig(
    write_disposition="WRITE_TRUNCATE",  # overwrite ทั้ง table
    schema=[
        bigquery.SchemaField("order_id", "INTEGER"),
        bigquery.SchemaField("customer_id", "INTEGER"),
        bigquery.SchemaField("order_date", "DATE"),
        bigquery.SchemaField("total_amount", "FLOAT"),
        bigquery.SchemaField("status", "STRING"),
    ],
)

job = client.load_table_from_dataframe(df, table_id, job_config=job_config)
job.result()  # รอจนเสร็จ

table = client.get_table(table_id)
print(f"Loaded {table.num_rows} rows to {table_id}")

# === วิธี B: โหลดจาก GCS ===
table_id = "my-de-project.raw_data.events"
uri = "gs://my-de-bucket/events/2024-01-*.json"

job_config = bigquery.LoadJobConfig(
    source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON,
    autodetect=True,
    write_disposition="WRITE_APPEND",  # เพิ่มข้อมูล
)

job = client.load_table_from_uri(uri, table_id, job_config=job_config)
job.result()
print(f"Loaded {job.output_rows} rows")

# === วิธี C: Query แล้วเก็บผลลัพธ์ ===
query = """
SELECT
    DATE(order_date) AS order_date,
    COUNT(*) AS total_orders,
    SUM(total_amount) AS revenue
FROM raw_data.orders
WHERE status = 'completed'
GROUP BY 1
"""

query_job = client.query(query)
results = query_job.to_dataframe()
print(results.head())
</code></pre>

<h3>Partitioning — แบ่ง Table เพื่อประหยัดเงิน</h3>
<p>Partitioning คือการแบ่ง table ออกเป็นส่วนย่อยๆ ตาม column ที่เลือก เวลา query ถ้ามี WHERE clause ที่ตรงกับ partition column BigQuery จะ scan แค่ partition ที่เกี่ยวข้อง <strong>ลดข้อมูลที่ scan = ลดค่าใช้จ่าย</strong></p>

<pre><code class="language-sql">-- สร้าง Partitioned Table (by date)
CREATE TABLE analytics.fct_daily_sales
PARTITION BY order_date
AS
SELECT
    DATE(order_date) AS order_date,
    product_id,
    COUNT(*) AS num_orders,
    SUM(total_amount) AS revenue
FROM raw_data.orders
GROUP BY 1, 2;

-- Query ที่ใช้ partition (ประหยัดเงิน ✅)
SELECT * FROM analytics.fct_daily_sales
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';

-- Query ที่ไม่ใช้ partition (scan ทั้ง table ❌)
SELECT * FROM analytics.fct_daily_sales
WHERE product_id = 123;
</code></pre>

<table>
<thead><tr><th>Partition Type</th><th>ใช้กับ</th><th>ตัวอย่าง</th></tr></thead>
<tbody>
<tr><td>Time-unit (DAY/HOUR/MONTH/YEAR)</td><td>DATE, TIMESTAMP column</td><td>PARTITION BY DATE(created_at)</td></tr>
<tr><td>Integer Range</td><td>INTEGER column</td><td>PARTITION BY RANGE_BUCKET(user_id, ...)</td></tr>
<tr><td>Ingestion Time</td><td>เวลาที่โหลดข้อมูล</td><td>PARTITION BY _PARTITIONDATE</td></tr>
</tbody>
</table>

<h3>Clustering — จัดเรียงข้อมูลเพิ่มประสิทธิภาพ</h3>
<p>Clustering จัดเรียงข้อมูลภายใน partition ตาม column ที่เลือก (สูงสุด 4 columns) ช่วยให้ BigQuery skip data blocks ที่ไม่เกี่ยวข้อง</p>

<pre><code class="language-sql">-- Partitioned + Clustered Table
CREATE TABLE analytics.fct_sales
PARTITION BY DATE(order_date)
CLUSTER BY country, product_category
AS
SELECT * FROM staging.stg_orders;

-- Query นี้จะเร็วมาก (ใช้ทั้ง partition + cluster)
SELECT
    product_category,
    SUM(revenue) AS total_revenue
FROM analytics.fct_sales
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'
  AND country = 'TH'
GROUP BY 1;
</code></pre>

<div class="tip-box">
💡 <strong>Partition vs Clustering:</strong><br>
• Partition = แบ่งข้อมูลเป็น "ลิ้นชัก" แยกจากกัน (hard cut)<br>
• Clustering = จัดเรียงข้อมูลภายในลิ้นชัก (sort order)<br>
• ใช้ Partition กับ column ที่ filter บ่อย (เช่น date)<br>
• ใช้ Clustering กับ column ที่ filter/group by เพิ่มเติม
</div>

<h3>Scheduled Queries — ตั้งเวลา Query อัตโนมัติ</h3>
<pre><code class="language-sql">-- ตัวอย่าง: สร้าง daily summary ทุกวัน ตี 2
-- ตั้งค่าใน BigQuery Console → Scheduled Queries → New

-- Query ที่จะ schedule
CREATE OR REPLACE TABLE analytics.daily_revenue AS
SELECT
    CURRENT_DATE() AS report_date,
    DATE(order_date) AS order_date,
    COUNT(DISTINCT customer_id) AS unique_customers,
    COUNT(*) AS total_orders,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS avg_order_value
FROM raw_data.orders
WHERE DATE(order_date) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
GROUP BY 1, 2;
</code></pre>

<pre><code class="language-python"># สร้าง Scheduled Query ด้วย Python
from google.cloud import bigquery_datatransfer

client = bigquery_datatransfer.DataTransferServiceClient()
parent = f"projects/my-de-project/locations/US"

transfer_config = bigquery_datatransfer.TransferConfig(
    destination_dataset_id="analytics",
    display_name="Daily Revenue Summary",
    data_source_id="scheduled_query",
    params={
        "query": """
        INSERT INTO analytics.daily_revenue
        SELECT CURRENT_DATE(), DATE(order_date),
               COUNT(DISTINCT customer_id),
               COUNT(*), SUM(total_amount), AVG(total_amount)
        FROM raw_data.orders
        WHERE DATE(order_date) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
        GROUP BY 1, 2
        """,
        "write_disposition": "WRITE_APPEND",
    },
    schedule="every day 02:00",
)

response = client.create_transfer_config(
    parent=parent,
    transfer_config=transfer_config,
)
print(f"Created: {response.name}")
</code></pre>

<h3>Cost Control — ควบคุมค่าใช้จ่าย</h3>

<table>
<thead><tr><th>ประเภทค่าใช้จ่าย</th><th>ราคา (US Region)</th><th>วิธีประหยัด</th></tr></thead>
<tbody>
<tr><td>Query (On-demand)</td><td>$5 / TB scanned</td><td>Partition, Clustering, SELECT เฉพาะ column ที่ต้องการ</td></tr>
<tr><td>Storage (Active)</td><td>$0.02 / GB / month</td><td>ลบข้อมูลที่ไม่ใช้, ใช้ expiration</td></tr>
<tr><td>Storage (Long-term)</td><td>$0.01 / GB / month</td><td>ข้อมูลที่ไม่ถูก modify >90 วัน ลดราคาอัตโนมัติ</td></tr>
<tr><td>Streaming Insert</td><td>$0.01 / 200 MB</td><td>ใช้ batch load แทนถ้าได้</td></tr>
</tbody>
</table>

<pre><code class="language-python"># ตั้ง Budget Alert ด้วย Python
from google.cloud import billing_budgets

client = billing_budgets.BudgetServiceClient()

budget = billing_budgets.Budget(
    display_name="BigQuery Monthly Budget",
    budget_filter=billing_budgets.Filter(
        projects=[f"projects/my-de-project"],
        services=["services/24E6-581D-38E5"],  # BigQuery service ID
    ),
    amount=billing_budgets.BudgetAmount(
        specified_amount={"units": 100, "currency_code": "USD"}
    ),
    threshold_rules=[
        billing_budgets.ThresholdRule(threshold_percent=0.5),  # 50%
        billing_budgets.ThresholdRule(threshold_percent=0.8),  # 80%
        billing_budgets.ThresholdRule(threshold_percent=1.0),  # 100%
    ],
)

# สร้าง budget
response = client.create_budget(
    parent=f"billingAccounts/YOUR_BILLING_ACCOUNT",
    budget=budget,
)
</code></pre>

<div class="warning-box">
❌ <strong>Common Mistakes:</strong><br>
1. <strong>SELECT *</strong> — scan ทุก column = ค่าใช้จ่ายสูง ให้ SELECT เฉพาะ column ที่ต้องการ<br>
2. <strong>ลืม WHERE clause</strong> บน partitioned table — scan ทั้ง table โดยไม่จำเป็น<br>
3. <strong>ไม่ตั้ง budget alert</strong> — โดนเก็บเงินแล้วค่อยรู้ แพงมาก<br>
4. <strong>ใช้ Streaming Insert ตลอด</strong> — ถ้าข้อมูลไม่ real-time ใช้ batch load ถูกกว่ามาก<br>
5. <strong>ไม่ดู Query Execution Details</strong> — ดู Bytes processed ก่อน run query จริง ใช้ Dry Run
</div>

<h3>เชื่อมต่อ Looker Studio (Data Studio เดิม)</h3>
<p>Looker Studio เป็น free BI tool ของ Google เชื่อมกับ BigQuery ได้ตรง:</p>
<ol>
<li>เปิด <a href="https://lookerstudio.google.com" target="_blank">lookerstudio.google.com</a></li>
<li>สร้าง Report → Add Data → BigQuery</li>
<li>เลือก Project → Dataset → Table</li>
<li>ลาก field มาสร้าง Chart</li>
</ol>

<pre><code class="language-sql">-- สร้าง View สำหรับ Looker Studio (ดีกว่าชี้ table ตรง)
CREATE VIEW analytics.v_dashboard_sales AS
SELECT
    order_date,
    country,
    product_category,
    COUNT(*) AS orders,
    SUM(revenue) AS revenue,
    COUNT(DISTINCT customer_id) AS customers
FROM analytics.fct_sales
WHERE order_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
GROUP BY 1, 2, 3;
</code></pre>

<div class="cheatsheet">
<h4>📋 BigQuery Cheatsheet</h4>
<table>
<thead><tr><th>bq Command</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><code>bq ls</code></td><td>แสดง datasets</td></tr>
<tr><td><code>bq ls dataset_name</code></td><td>แสดง tables ใน dataset</td></tr>
<tr><td><code>bq show dataset.table</code></td><td>ดู schema ของ table</td></tr>
<tr><td><code>bq head -n 10 dataset.table</code></td><td>ดู 10 rows แรก</td></tr>
<tr><td><code>bq query --nouse_legacy_sql 'SQL'</code></td><td>รัน query</td></tr>
<tr><td><code>bq query --dry_run 'SQL'</code></td><td>ดู bytes ที่จะ scan (ไม่ run จริง)</td></tr>
<tr><td><code>bq extract dataset.table gs://bucket/file.csv</code></td><td>export table ไปยัง GCS</td></tr>
</tbody>
</table>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ BigQuery</h4>
<ol>
<li><strong>Partition กับ Clustering ต่างกันอย่างไร?</strong><br>
Partition = แบ่ง table เป็นส่วนแยก ตาม 1 column (date/integer) — BigQuery จะ skip partitions ที่ไม่ตรง WHERE<br>
Clustering = จัดเรียงข้อมูลภายใน partition ตาม 1-4 columns — BigQuery จะ skip data blocks ที่ไม่เกี่ยวข้อง</li>
<li><strong>BigQuery คิดเงินยังไง?</strong><br>
On-demand: $5/TB scanned + Storage cost ($0.02/GB active, $0.01/GB long-term) + Streaming insert ถ้ามี<br>
Flat-rate: จ่ายตาม slot (compute unit) ต่อเดือน เหมาะกับ workload สูงต่อเนื่อง</li>
<li><strong>ทำไมต้อง Separation of Storage and Compute?</strong><br>
Scale แยกกันได้อิสระ — เก็บข้อมูลเยอะแต่ compute น้อยก็ได้ ไม่ต้องจ่าย compute เมื่อไม่ query</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง BigQuery dataset ชื่อ <code>ecommerce</code> แล้วโหลดไฟล์ CSV ที่มี columns: order_id, customer_id, order_date, product, amount, country</li>
<li>สร้าง partitioned table แบ่งตาม order_date และ clustered ตาม country</li>
<li>เขียน query หายอดขายรายเดือนแยกตาม country แล้วสร้าง Scheduled Query ให้ run ทุกวัน</li>
<li>เปรียบเทียบ bytes scanned ระหว่าง SELECT * กับ SELECT เฉพาะ column ด้วย --dry_run</li>
<li>สร้าง View สำหรับ Dashboard แล้วเชื่อมกับ Looker Studio</li>
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

<h3>Airflow คืออะไร?</h3>
<p>ลองนึกภาพ <strong>วาทยกร (Orchestra Conductor)</strong> ที่ควบคุมนักดนตรีทั้งวงให้เล่นถูกจังหวะ ถูกลำดับ — Airflow ก็ทำหน้าที่เดียวกันกับ Data Pipeline ของเรา:</p>
<ul>
<li>กำหนด<strong>ลำดับ</strong>ว่า task ไหนทำก่อน-หลัง</li>
<li>กำหนด<strong>เวลา</strong>ว่า run เมื่อไหร่ (schedule)</li>
<li>จัดการ<strong>ข้อผิดพลาด</strong> retry, alert ถ้า fail</li>
<li><strong>Monitor</strong> ดูสถานะทุก task ผ่าน Web UI</li>
</ul>

<div class="tip-box">
💡 <strong>Airflow เป็น Orchestrator ไม่ใช่ Processing Engine</strong> — Airflow สั่งให้ทำงาน (trigger) แต่ไม่ได้ process ข้อมูลเอง ตัว process จริงอาจเป็น BigQuery, Spark, Python script ฯลฯ
</div>

<h3>Core Concepts</h3>

<table>
<thead><tr><th>Concept</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr></thead>
<tbody>
<tr><td><strong>DAG</strong></td><td>Directed Acyclic Graph — กราฟที่มีทิศทาง ไม่มี loop กำหนด workflow ทั้งหมด</td><td>ETL pipeline ที่ extract → transform → load</td></tr>
<tr><td><strong>Task</strong></td><td>หน่วยงานเดี่ยวใน DAG</td><td>ดึงข้อมูลจาก API, รัน SQL, ส่ง email</td></tr>
<tr><td><strong>Operator</strong></td><td>Template สำหรับ task ที่ทำงานแต่ละประเภท</td><td>PythonOperator, BashOperator, BigQueryOperator</td></tr>
<tr><td><strong>Schedule</strong></td><td>กำหนดว่า DAG จะ run เมื่อไหร่</td><td>"@daily", "0 2 * * *" (cron)</td></tr>
<tr><td><strong>Sensor</strong></td><td>Operator พิเศษที่รอจน condition เป็นจริง</td><td>FileSensor (รอไฟล์มาถึง), ExternalTaskSensor</td></tr>
<tr><td><strong>XCom</strong></td><td>กลไกส่งข้อมูลเล็กๆ ระหว่าง task</td><td>ส่ง row count จาก task A ไป task B</td></tr>
<tr><td><strong>Connection</strong></td><td>การตั้งค่าเชื่อมต่อ external system</td><td>PostgreSQL connection, GCP credentials</td></tr>
</tbody>
</table>

<h3>สถาปัตยกรรม Airflow</h3>
<pre><code class="language-text">┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  Scheduler  │────▶│   Executor   │────▶│   Workers    │
│ (parse DAGs │     │ (queue tasks)│     │ (run tasks)  │
│  & schedule)│     └──────────────┘     └──────────────┘
└─────────────┘              │
       │                     │
       ▼                     ▼
┌─────────────┐     ┌──────────────┐
│  Metadata   │     │   Web UI     │
│  Database   │     │ (monitoring) │
│ (PostgreSQL)│     └──────────────┘
└─────────────┘
</code></pre>

<h3>เขียน DAG แรกด้วย TaskFlow API</h3>
<pre><code class="language-python"># dags/etl_orders.py
from datetime import datetime, timedelta
from airflow.decorators import dag, task

default_args = {
    "owner": "data-team",
    "retries": 3,
    "retry_delay": timedelta(minutes=5),
    "email": ["de-team@company.com"],
    "email_on_failure": True,
}

@dag(
    dag_id="etl_orders_daily",
    default_args=default_args,
    description="ETL pipeline สำหรับ orders data",
    schedule="@daily",          # run ทุกวัน
    start_date=datetime(2024, 1, 1),
    catchup=False,              # ไม่ backfill วันที่ผ่านมา
    tags=["etl", "orders"],
)
def etl_orders():
    
    @task()
    def extract():
        """ดึงข้อมูลจาก API"""
        import requests
        
        response = requests.get(
            "https://api.example.com/orders",
            params={"date": "{{ ds }}"},  # ds = execution date (YYYY-MM-DD)
            headers={"Authorization": "Bearer {{ var.value.api_token }}"}
        )
        response.raise_for_status()
        data = response.json()
        print(f"Extracted {len(data)} orders")
        return data  # ส่งผ่าน XCom อัตโนมัติ
    
    @task()
    def transform(raw_data: list):
        """แปลงข้อมูล"""
        import pandas as pd
        
        df = pd.DataFrame(raw_data)
        
        # Clean & Transform
        df["order_date"] = pd.to_datetime(df["order_date"])
        df["total_amount"] = df["total_amount"].astype(float)
        df = df.dropna(subset=["customer_id"])
        df = df[df["total_amount"] > 0]
        
        # Enrich
        df["order_month"] = df["order_date"].dt.to_period("M").astype(str)
        
        print(f"Transformed: {len(df)} clean rows")
        return df.to_dict("records")
    
    @task()
    def load(clean_data: list):
        """โหลดเข้า BigQuery"""
        from google.cloud import bigquery
        import pandas as pd
        
        client = bigquery.Client()
        df = pd.DataFrame(clean_data)
        
        table_id = "my-project.staging.stg_orders"
        job_config = bigquery.LoadJobConfig(
            write_disposition="WRITE_APPEND",
        )
        
        job = client.load_table_from_dataframe(df, table_id, job_config=job_config)
        job.result()
        print(f"Loaded {len(df)} rows to {table_id}")
    
    @task()
    def notify(clean_data: list):
        """ส่ง notification"""
        row_count = len(clean_data)
        print(f"✅ ETL completed: {row_count} rows loaded")
        # ส่ง Slack notification, email, etc.
    
    # กำหนด dependency (data flow)
    raw = extract()
    clean = transform(raw)
    load(clean)
    notify(clean)

# เรียก DAG function เพื่อ register
etl_orders()
</code></pre>

<h3>ตัวอย่าง DAG แบบ Traditional (ใช้ Operators ตรงๆ)</h3>
<pre><code class="language-python"># dags/sql_pipeline.py
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.providers.google.cloud.operators.bigquery import (
    BigQueryInsertJobOperator,
    BigQueryCheckOperator,
)
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
    
    # Task 2: ตรวจสอบข้อมูล
    check_data = BigQueryCheckOperator(
        task_id="check_row_count",
        sql="SELECT COUNT(*) > 0 FROM analytics.fct_daily_sales WHERE date = '{{ ds }}'",
        use_legacy_sql=False,
    )
    
    # Task 3: สร้าง report
    create_report = BigQueryInsertJobOperator(
        task_id="create_daily_report",
        configuration={
            "query": {
                "query": """
                    CREATE OR REPLACE TABLE analytics.daily_report AS
                    SELECT * FROM analytics.fct_daily_sales
                    WHERE date = '{{ ds }}'
                """,
                "useLegacySql": False,
            }
        },
    )
    
    # Task 4: ส่ง email
    send_report = EmailOperator(
        task_id="send_report_email",
        to="manager@company.com",
        subject="Daily Sales Report {{ ds }}",
        html_content="<h3>Report พร้อมดูที่ Looker Studio</h3>",
    )
    
    # กำหนดลำดับ
    run_dbt >> check_data >> create_report >> send_report
</code></pre>

<h3>Connections — เชื่อมต่อ External Systems</h3>
<pre><code class="language-bash"># เพิ่ม connection ผ่าน CLI
airflow connections add 'my_postgres' \\
    --conn-type 'postgres' \\
    --conn-host 'db.example.com' \\
    --conn-port 5432 \\
    --conn-login 'airflow_user' \\
    --conn-password 'secret' \\
    --conn-schema 'production'

# หรือเพิ่มผ่าน Environment Variable
export AIRFLOW_CONN_MY_POSTGRES='postgresql://airflow_user:secret@db.example.com:5432/production'
</code></pre>

<h3>XCom — ส่งข้อมูลระหว่าง Tasks</h3>
<pre><code class="language-python"># TaskFlow API (XCom อัตโนมัติผ่าน return value)
@task()
def get_row_count():
    return 1500  # push XCom อัตโนมัติ

@task()
def log_count(count: int):
    print(f"Rows: {count}")  # pull XCom อัตโนมัติ

count = get_row_count()
log_count(count)

# Traditional way (manual XCom)
def push_func(**context):
    context["ti"].xcom_push(key="row_count", value=1500)

def pull_func(**context):
    count = context["ti"].xcom_pull(task_ids="push_task", key="row_count")
    print(f"Rows: {count}")
</code></pre>

<div class="warning-box">
❌ <strong>XCom ไม่เหมาะกับข้อมูลใหญ่!</strong> XCom เก็บใน metadata database (PostgreSQL) — ใช้ส่งแค่ข้อมูลเล็กๆ เช่น row count, file path, status<br>
ถ้าจะส่ง DataFrame ใหญ่ ให้เขียนลง GCS/S3 แล้วส่ง path ผ่าน XCom แทน
</div>

<h3>Error Handling — จัดการข้อผิดพลาด</h3>
<pre><code class="language-python">from airflow.decorators import dag, task
from datetime import datetime, timedelta

default_args = {
    "retries": 3,                          # retry 3 ครั้ง
    "retry_delay": timedelta(minutes=5),   # รอ 5 นาทีก่อน retry
    "retry_exponential_backoff": True,     # เพิ่มเวลารอ exponentially
    "max_retry_delay": timedelta(hours=1), # retry ห่างสุด 1 ชม.
    "email_on_failure": True,              # ส่ง email เมื่อ fail
    "email_on_retry": False,               # ไม่ส่งตอน retry
    "email": ["oncall@company.com"],
}

@dag(
    default_args=default_args,
    schedule="@daily",
    start_date=datetime(2024, 1, 1),
    catchup=False,
    on_failure_callback=lambda context: send_slack_alert(context),
)
def robust_pipeline():
    
    @task(
        retries=5,  # override default สำหรับ task นี้
        execution_timeout=timedelta(hours=2),  # timeout ถ้า run นานเกิน
    )
    def flaky_api_call():
        """Task ที่อาจ fail ได้"""
        import requests
        response = requests.get("https://api.example.com/data", timeout=30)
        response.raise_for_status()
        return response.json()
    
    flaky_api_call()

robust_pipeline()

def send_slack_alert(context):
    """ส่ง alert ไป Slack เมื่อ DAG fail"""
    from airflow.providers.slack.hooks.slack_webhook import SlackWebhookHook
    
    task_instance = context["task_instance"]
    dag_id = context["dag"].dag_id
    
    message = f"""
    🚨 *DAG Failed!*
    DAG: {dag_id}
    Task: {task_instance.task_id}
    Execution Date: {context['ds']}
    Log: {task_instance.log_url}
    """
    
    hook = SlackWebhookHook(slack_webhook_conn_id="slack_webhook")
    hook.send(text=message)
</code></pre>

<h3>Best Practices</h3>
<div class="tip-box">
💡 <strong>Airflow Best Practices:</strong><br>
1. <strong>Idempotent DAGs</strong> — run ซ้ำกี่ครั้งก็ได้ ผลลัพธ์เหมือนเดิม (ใช้ WRITE_TRUNCATE หรือ MERGE)<br>
2. <strong>Atomic Tasks</strong> — แต่ละ task ทำงานเดียว ไม่ยิง 10 APIs ใน task เดียว<br>
3. <strong>ไม่ process ข้อมูลใน Airflow</strong> — ใช้ Airflow สั่ง BigQuery/Spark ทำงาน<br>
4. <strong>ใช้ Jinja Templates</strong> — <code>{{ ds }}</code>, <code>{{ var.value.key }}</code>, <code>{{ conn.my_db.host }}</code><br>
5. <strong>ตั้ง catchup=False</strong> — ถ้าไม่ต้องการ backfill ข้อมูลย้อนหลัง<br>
6. <strong>Tag DAGs</strong> — จัดหมวด DAG ด้วย tags=["etl", "team-a"]<br>
7. <strong>ใช้ TaskGroup</strong> — จัดกลุ่ม tasks ที่เกี่ยวข้อง ดู UI ง่ายขึ้น
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Airflow</h4>
<ol>
<li><strong>DAG คืออะไร? ทำไมต้อง "Acyclic"?</strong><br>
DAG = Directed Acyclic Graph = กราฟมีทิศทางและไม่มี cycle (loop) ถ้ามี loop จะรันไม่จบ Airflow ใช้ DAG เพื่อกำหนดลำดับ dependency ของ tasks</li>
<li><strong>Airflow เหมาะกับ Real-time Processing ไหม?</strong><br>
ไม่เหมาะ — Airflow ออกแบบมาสำหรับ batch/scheduled workloads ถ้าต้องการ real-time ใช้ Kafka, Flink, Pub/Sub</li>
<li><strong>ทำยังไงให้ DAG เป็น Idempotent?</strong><br>
ใช้ WRITE_TRUNCATE (overwrite) หรือ MERGE (upsert), ใช้ execution_date เป็น partition key ไม่ใช้ CURRENT_DATE() ใน query</li>
<li><strong>XCom ใช้ทำอะไร? มีข้อจำกัดอะไร?</strong><br>
ใช้ส่งข้อมูลเล็กๆ ระหว่าง tasks (metadata, counts, paths) ข้อจำกัด: เก็บใน DB ส่งข้อมูลใหญ่ไม่ได้</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน DAG ด้วย TaskFlow API ที่: extract ข้อมูลจาก public API (เช่น JSONPlaceholder) → transform (filter, clean) → load เข้า CSV</li>
<li>เพิ่ม error handling: retries=3, email notification, Slack alert callback</li>
<li>ใช้ XCom ส่ง row count จาก transform task ไป notify task</li>
<li>ตั้ง schedule ให้ run ทุกวันจันทร์-ศุกร์ ตี 6 (เขียน cron expression)</li>
<li>สร้าง DAG ที่มี TaskGroup แบ่งเป็น "extract_group" และ "transform_group"</li>
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

<h3>dbt คืออะไร?</h3>
<p><strong>dbt (data build tool)</strong> คือเครื่องมือที่นำหลักการ Software Engineering มาใช้กับ SQL Transformation:</p>

<table>
<thead><tr><th>Software Engineering</th><th>dbt</th></tr></thead>
<tbody>
<tr><td>Source Code</td><td>SQL SELECT statements (Models)</td></tr>
<tr><td>Version Control</td><td>Git — track ทุกการเปลี่ยนแปลง</td></tr>
<tr><td>Unit Testing</td><td>Tests (unique, not_null, accepted_values)</td></tr>
<tr><td>Documentation</td><td>schema.yml + auto-generated docs site</td></tr>
<tr><td>Code Review</td><td>Pull Request — ทีมรีวิว SQL ก่อน merge</td></tr>
<tr><td>CI/CD</td><td>Run tests อัตโนมัติก่อน deploy</td></tr>
<tr><td>Modularity</td><td>ref() function — เชื่อม models เข้าด้วยกัน</td></tr>
</tbody>
</table>

<p>dbt ทำ <strong>T ใน ELT</strong> — ข้อมูลถูก Extract และ Load เข้า Data Warehouse แล้ว dbt จะ Transform ข้อมูลด้วย SQL ภายใน warehouse</p>

<h3>Layer Architecture — สถาปัตยกรรมแบบชั้น</h3>
<pre><code class="language-text">Source Tables (raw)
    │
    ▼
┌──────────────────┐
│  Staging (stg_)  │  ← Clean & Rename (1:1 กับ source)
│  stg_orders      │
│  stg_customers   │
│  stg_products    │
└──────────────────┘
    │
    ▼
┌──────────────────┐
│ Intermediate     │  ← Business Logic & Join
│ (int_)           │
│ int_order_items  │
│ int_customer_ltv │
└──────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│ Marts (fct_ / dim_)            │  ← Final tables for BI/Analytics
│ fct_daily_sales                │
│ fct_monthly_revenue            │
│ dim_customers                  │
│ dim_products                   │
└─────────────────────────────────┘
</code></pre>

<table>
<thead><tr><th>Layer</th><th>Prefix</th><th>Materialization</th><th>วัตถุประสงค์</th></tr></thead>
<tbody>
<tr><td>Staging</td><td>stg_</td><td>view</td><td>Clean, rename, cast type — 1 model ต่อ 1 source table</td></tr>
<tr><td>Intermediate</td><td>int_</td><td>ephemeral / view</td><td>Business logic ซับซ้อน, JOIN ข้าม source</td></tr>
<tr><td>Facts</td><td>fct_</td><td>table / incremental</td><td>Events, transactions — อะไรที่เกิดขึ้น</td></tr>
<tr><td>Dimensions</td><td>dim_</td><td>table</td><td>Entities — คน, สินค้า, สถานที่</td></tr>
</tbody>
</table>

<h3>โครงสร้าง dbt Project</h3>
<pre><code class="language-text">my_dbt_project/
├── dbt_project.yml          # config หลัก
├── profiles.yml             # connection settings (อยู่ ~/.dbt/)
├── models/
│   ├── staging/
│   │   ├── _stg_sources.yml    # declare sources
│   │   ├── _stg_models.yml     # tests & docs for staging
│   │   ├── stg_orders.sql
│   │   ├── stg_customers.sql
│   │   └── stg_products.sql
│   ├── intermediate/
│   │   ├── int_order_items.sql
│   │   └── int_customer_orders.sql
│   └── marts/
│       ├── _marts_models.yml
│       ├── fct_daily_sales.sql
│       ├── fct_monthly_revenue.sql
│       └── dim_customers.sql
├── tests/
│   └── assert_positive_revenue.sql
├── macros/
│   └── cents_to_dollars.sql
└── seeds/
    └── country_codes.csv
</code></pre>

<h3>เขียน Models</h3>

<h4>1. Source Declaration</h4>
<pre><code class="language-yaml"># models/staging/_stg_sources.yml
version: 2

sources:
  - name: raw
    database: my-gcp-project
    schema: raw_data
    tables:
      - name: orders
        description: "Raw orders from transactional database"
        loaded_at_field: _loaded_at
        freshness:
          warn_after: {count: 12, period: hour}
          error_after: {count: 24, period: hour}
      - name: customers
        description: "Raw customer data"
      - name: products
        description: "Product catalog"
</code></pre>

<h4>2. Staging Models</h4>
<pre><code class="language-sql">-- models/staging/stg_orders.sql
-- Staging model: clean & standardize raw orders

WITH source AS (
    SELECT * FROM {{ source('raw', 'orders') }}
),

renamed AS (
    SELECT
        -- IDs
        order_id,
        customer_id,
        product_id,

        -- Dates
        CAST(order_date AS DATE) AS order_date,
        CAST(created_at AS TIMESTAMP) AS created_at,

        -- Measures (แปลงจาก สตางค์ เป็น บาท)
        CAST(amount_satang AS FLOAT64) / 100 AS amount_thb,

        -- Dimensions
        LOWER(TRIM(status)) AS order_status,
        UPPER(country_code) AS country_code,

        -- Metadata
        _loaded_at

    FROM source
    WHERE order_id IS NOT NULL
)

SELECT * FROM renamed
</code></pre>

<pre><code class="language-sql">-- models/staging/stg_customers.sql
WITH source AS (
    SELECT * FROM {{ source('raw', 'customers') }}
),

cleaned AS (
    SELECT
        customer_id,
        TRIM(first_name) AS first_name,
        TRIM(last_name) AS last_name,
        LOWER(TRIM(email)) AS email,
        CAST(registered_at AS DATE) AS registered_date,
        CASE
            WHEN tier IN ('gold', 'silver', 'bronze') THEN tier
            ELSE 'standard'
        END AS customer_tier
    FROM source
    WHERE customer_id IS NOT NULL
      AND email IS NOT NULL
)

SELECT * FROM cleaned
</code></pre>

<h4>3. Intermediate Model</h4>
<pre><code class="language-sql">-- models/intermediate/int_customer_orders.sql
-- รวมข้อมูล customer กับ order history

WITH customers AS (
    SELECT * FROM {{ ref('stg_customers') }}
),

orders AS (
    SELECT * FROM {{ ref('stg_orders') }}
),

customer_orders AS (
    SELECT
        c.customer_id,
        c.first_name,
        c.last_name,
        c.email,
        c.customer_tier,
        c.registered_date,
        COUNT(o.order_id) AS total_orders,
        SUM(o.amount_thb) AS total_spent,
        AVG(o.amount_thb) AS avg_order_value,
        MIN(o.order_date) AS first_order_date,
        MAX(o.order_date) AS last_order_date,
        DATE_DIFF(MAX(o.order_date), MIN(o.order_date), DAY) AS customer_lifespan_days
    FROM customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY 1, 2, 3, 4, 5, 6
)

SELECT * FROM customer_orders
</code></pre>

<h4>4. Mart Models (Fact & Dimension)</h4>
<pre><code class="language-sql">-- models/marts/fct_daily_sales.sql
-- config: materialized as incremental table
{{
  config(
    materialized='incremental',
    unique_key='surrogate_key',
    partition_by={
      "field": "order_date",
      "data_type": "date",
      "granularity": "day"
    }
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
        {{ dbt_utils.generate_surrogate_key(['order_date', 'country_code', 'product_id']) }}
            AS surrogate_key,
        order_date,
        country_code,
        product_id,
        COUNT(*) AS num_orders,
        COUNT(DISTINCT customer_id) AS unique_customers,
        SUM(amount_thb) AS total_revenue,
        AVG(amount_thb) AS avg_order_value
    FROM orders
    GROUP BY 2, 3, 4
)

SELECT * FROM daily_agg
</code></pre>

<pre><code class="language-sql">-- models/marts/dim_customers.sql
{{
  config(materialized='table')
}}

WITH customer_orders AS (
    SELECT * FROM {{ ref('int_customer_orders') }}
),

final AS (
    SELECT
        customer_id,
        first_name,
        last_name,
        email,
        customer_tier,
        registered_date,
        total_orders,
        total_spent,
        avg_order_value,
        first_order_date,
        last_order_date,
        customer_lifespan_days,
        CASE
            WHEN total_spent >= 10000 THEN 'high_value'
            WHEN total_spent >= 3000 THEN 'medium_value'
            WHEN total_spent > 0 THEN 'low_value'
            ELSE 'no_purchase'
        END AS value_segment,
        CASE
            WHEN DATE_DIFF(CURRENT_DATE(), last_order_date, DAY) <= 30 THEN 'active'
            WHEN DATE_DIFF(CURRENT_DATE(), last_order_date, DAY) <= 90 THEN 'at_risk'
            ELSE 'churned'
        END AS activity_status
    FROM customer_orders
)

SELECT * FROM final
</code></pre>

<h3>Tests — ทดสอบคุณภาพข้อมูล</h3>
<pre><code class="language-yaml"># models/marts/_marts_models.yml
version: 2

models:
  - name: fct_daily_sales
    description: "Daily sales aggregation by country and product"
    columns:
      - name: surrogate_key
        description: "Unique key for each row"
        tests:
          - unique
          - not_null

      - name: order_date
        tests:
          - not_null

      - name: num_orders
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 1

      - name: total_revenue
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 0

  - name: dim_customers
    description: "Customer dimension with value segmentation"
    columns:
      - name: customer_id
        tests:
          - unique
          - not_null

      - name: email
        tests:
          - unique
          - not_null

      - name: value_segment
        tests:
          - accepted_values:
              values: ['high_value', 'medium_value', 'low_value', 'no_purchase']

      - name: activity_status
        tests:
          - accepted_values:
              values: ['active', 'at_risk', 'churned']
</code></pre>

<h4>Custom Test (Singular Test)</h4>
<pre><code class="language-sql">-- tests/assert_positive_revenue.sql
-- Test จะ FAIL ถ้า query นี้ return rows (เจอ revenue ติดลบ)

SELECT
    order_date,
    total_revenue
FROM {{ ref('fct_daily_sales') }}
WHERE total_revenue < 0
</code></pre>

<h3>Jinja Templates + Macros</h3>
<pre><code class="language-sql">-- macros/cents_to_dollars.sql
{% macro cents_to_thb(column_name, precision=2) %}
    ROUND(CAST({{ column_name }} AS FLOAT64) / 100, {{ precision }})
{% endmacro %}

-- ใช้ใน model:
-- SELECT {{ cents_to_thb('amount_satang') }} AS amount_thb
</code></pre>

<pre><code class="language-sql">-- macros/generate_date_spine.sql
{% macro limit_by_date(column, days_back=30) %}
    WHERE {{ column }} >= DATE_SUB(CURRENT_DATE(), INTERVAL {{ days_back }} DAY)
{% endmacro %}

-- ใช้ใน model:
-- SELECT * FROM {{ ref('stg_orders') }}
-- {{ limit_by_date('order_date', 90) }}
</code></pre>

<h3>dbt Commands</h3>
<div class="cheatsheet">
<h4>📋 dbt Cheatsheet</h4>
<table>
<thead><tr><th>Command</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><code>dbt init my_project</code></td><td>สร้าง project ใหม่</td></tr>
<tr><td><code>dbt run</code></td><td>รัน models ทั้งหมด</td></tr>
<tr><td><code>dbt run --models staging</code></td><td>รันแค่ models ใน folder staging</td></tr>
<tr><td><code>dbt run --models stg_orders+</code></td><td>รัน stg_orders และ models ที่ depend กับมัน</td></tr>
<tr><td><code>dbt run --models +fct_daily_sales</code></td><td>รัน fct_daily_sales และ models ที่มัน depend กับ</td></tr>
<tr><td><code>dbt test</code></td><td>รัน tests ทั้งหมด</td></tr>
<tr><td><code>dbt test --models fct_daily_sales</code></td><td>รัน tests เฉพาะ model นี้</td></tr>
<tr><td><code>dbt build</code></td><td>run + test ทุก model ตามลำดับ</td></tr>
<tr><td><code>dbt docs generate</code></td><td>สร้าง documentation</td></tr>
<tr><td><code>dbt docs serve</code></td><td>เปิด docs website ใน browser</td></tr>
<tr><td><code>dbt source freshness</code></td><td>ตรวจ freshness ของ source</td></tr>
<tr><td><code>dbt seed</code></td><td>โหลด CSV ใน seeds/ เข้า warehouse</td></tr>
<tr><td><code>dbt compile</code></td><td>compile Jinja → SQL แต่ไม่ run</td></tr>
</tbody>
</table>
</div>

<h3>dbt Core vs dbt Cloud</h3>
<table>
<thead><tr><th>Feature</th><th>dbt Core (Open Source)</th><th>dbt Cloud (SaaS)</th></tr></thead>
<tbody>
<tr><td>ราคา</td><td>ฟรี</td><td>Free tier + Paid plans</td></tr>
<tr><td>Run Method</td><td>CLI (command line)</td><td>Web IDE + Scheduler</td></tr>
<tr><td>Scheduling</td><td>ต้องใช้ Airflow/Cron</td><td>Built-in scheduler</td></tr>
<tr><td>IDE</td><td>VS Code + extension</td><td>Web-based IDE</td></tr>
<tr><td>CI/CD</td><td>ต้อง setup เอง (GitHub Actions)</td><td>Built-in CI on PR</td></tr>
<tr><td>Documentation</td><td>dbt docs serve (self-host)</td><td>Hosted docs site</td></tr>
<tr><td>เหมาะกับ</td><td>ทีมที่มี infra เอง</td><td>ทีมที่ต้องการ managed service</td></tr>
</tbody>
</table>

<div class="warning-box">
❌ <strong>Common Mistakes:</strong><br>
1. <strong>ไม่แยก Layer</strong> — เขียน SQL ซับซ้อนใน model เดียว ควรแยกเป็น stg → int → fct/dim<br>
2. <strong>ใช้ hardcoded table name</strong> — ต้องใช้ <code>{{ ref('model_name') }}</code> หรือ <code>{{ source('name', 'table') }}</code> เสมอ<br>
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
รัน run แรก: สร้าง table เต็ม (full refresh) รัน run ถัดไป: ใช้ is_incremental() filter เอาเฉพาะ rows ใหม่แล้ว INSERT/MERGE เข้า table</li>
<li><strong>ทำไมต้องแยก Staging, Intermediate, Marts?</strong><br>
Separation of Concerns — staging ทำ clean อย่างเดียว, intermediate ทำ business logic, marts ทำ aggregation สำหรับ BI — ง่ายต่อ debug, test, maintain</li>
<li><strong>dbt ต่างจาก Stored Procedure อย่างไร?</strong><br>
dbt: version control ได้, test ได้, modular (ref), auto docs, CI/CD<br>Stored Procedure: ล็อคอยู่ใน DB, test ยาก, ไม่มี version control, debug ยาก</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง dbt project ที่มี 3 layers: staging (stg_orders, stg_customers), intermediate (int_customer_orders), marts (fct_daily_sales, dim_customers)</li>
<li>เขียน schema.yml พร้อม tests: unique, not_null, accepted_values สำหรับทุก model</li>
<li>สร้าง custom macro ที่แปลง satang เป็น baht แล้วใช้ใน staging model</li>
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

<h3>Part 1: Docker</h3>

<h4>Docker คืออะไร?</h4>
<p>Docker คือ <strong>Containerization Platform</strong> ที่ทำให้เราสามารถ "แพ็ค" application พร้อม dependencies ทั้งหมดไว้ใน <strong>Container</strong> — ทำให้รันได้เหมือนกันทุกเครื่อง ไม่มีปัญหา "It works on my machine"</p>

<table>
<thead><tr><th>Concept</th><th>คำอธิบาย</th><th>เปรียบเทียบ</th></tr></thead>
<tbody>
<tr><td><strong>Image</strong></td><td>Blueprint/แม่พิมพ์ของ container (read-only)</td><td>เหมือนไฟล์ ISO ของ OS</td></tr>
<tr><td><strong>Container</strong></td><td>Instance ที่รันจริงจาก Image</td><td>เหมือน VM ที่สร้างจาก ISO</td></tr>
<tr><td><strong>Dockerfile</strong></td><td>สูตร/คำสั่งสร้าง Image</td><td>เหมือน recipe ทำอาหาร</td></tr>
<tr><td><strong>Docker Compose</strong></td><td>เครื่องมือจัดการหลาย containers พร้อมกัน</td><td>เหมือนสั่ง set อาหาร (ข้าว+กับ+น้ำ)</td></tr>
<tr><td><strong>Volume</strong></td><td>เก็บ data ถาวร (container ลบ data ยังอยู่)</td><td>เหมือน external hard drive</td></tr>
<tr><td><strong>Registry</strong></td><td>ที่เก็บ Images (Docker Hub, GCR)</td><td>เหมือน App Store สำหรับ Images</td></tr>
</tbody>
</table>

<h4>Dockerfile — สร้าง Image เอง</h4>
<pre><code class="language-dockerfile"># Dockerfile สำหรับ Python Data Pipeline
FROM python:3.11-slim

# ตั้ง working directory
WORKDIR /app

# Copy requirements ก่อน (ใช้ Docker cache)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# ตั้ง environment variables
ENV PYTHONUNBUFFERED=1
ENV ENV=production

# คำสั่งที่จะรันเมื่อ container start
CMD ["python", "main.py"]
</code></pre>

<pre><code class="language-bash"># Build image
docker build -t my-pipeline:v1.0 .

# Run container
docker run -d --name pipeline my-pipeline:v1.0

# ดู logs
docker logs -f pipeline

# เข้าไปใน container
docker exec -it pipeline bash

# หยุด & ลบ container
docker stop pipeline && docker rm pipeline
</code></pre>

<div class="cheatsheet">
<h4>📋 Docker Cheatsheet</h4>
<table>
<thead><tr><th>Command</th><th>คำอธิบาย</th></tr></thead>
<tbody>
<tr><td><code>docker images</code></td><td>แสดง images ทั้งหมด</td></tr>
<tr><td><code>docker ps</code></td><td>แสดง containers ที่รันอยู่</td></tr>
<tr><td><code>docker ps -a</code></td><td>แสดง containers ทั้งหมด (รวมที่หยุดแล้ว)</td></tr>
<tr><td><code>docker pull image:tag</code></td><td>ดึง image จาก registry</td></tr>
<tr><td><code>docker build -t name:tag .</code></td><td>สร้าง image จาก Dockerfile</td></tr>
<tr><td><code>docker run -d -p 8080:80 image</code></td><td>รัน container แบบ detached + port mapping</td></tr>
<tr><td><code>docker exec -it container bash</code></td><td>เข้า shell ใน container</td></tr>
<tr><td><code>docker logs -f container</code></td><td>ดู logs แบบ streaming</td></tr>
<tr><td><code>docker volume create vol_name</code></td><td>สร้าง volume สำหรับเก็บ data</td></tr>
<tr><td><code>docker system prune -a</code></td><td>ลบ images/containers ที่ไม่ใช้</td></tr>
</tbody>
</table>
</div>

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
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "airflow"]
      interval: 10s
      retries: 5

  airflow-webserver:
    image: apache/airflow:2.8.1-python3.11
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      AIRFLOW__CORE__EXECUTOR: LocalExecutor
      AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://airflow:airflow@postgres/airflow
      AIRFLOW__CORE__LOAD_EXAMPLES: 'false'
    volumes:
      - ./dags:/opt/airflow/dags
      - ./logs:/opt/airflow/logs
      - ./plugins:/opt/airflow/plugins
    ports:
      - "8080:8080"
    command: >
      bash -c "
        airflow db init &&
        airflow users create --role Admin --username admin --password admin
          --firstname Admin --lastname User --email admin@example.com &&
        airflow webserver
      "

  airflow-scheduler:
    image: apache/airflow:2.8.1-python3.11
    depends_on:
      - airflow-webserver
    environment:
      AIRFLOW__CORE__EXECUTOR: LocalExecutor
      AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: postgresql+psycopg2://airflow:airflow@postgres/airflow
    volumes:
      - ./dags:/opt/airflow/dags
      - ./logs:/opt/airflow/logs
    command: airflow scheduler

volumes:
  postgres_data:
</code></pre>

<pre><code class="language-bash"># รัน services ทั้งหมด
docker compose up -d

# ดู logs
docker compose logs -f airflow-webserver

# หยุดทุก services
docker compose down

# หยุดพร้อมลบ volumes (data หายหมด!)
docker compose down -v
</code></pre>

<hr>

<h3>Part 2: Apache Spark / PySpark</h3>

<h4>Spark คืออะไร?</h4>
<p>Apache Spark คือ <strong>Distributed Computing Engine</strong> สำหรับประมวลผลข้อมูลขนาดใหญ่ (Big Data) โดยกระจายงานไปหลายเครื่อง (cluster) พร้อมกัน — เร็วกว่า MapReduce ของ Hadoop ถึง 100 เท่า (in-memory)</p>

<h4>เมื่อไหร่ควรใช้ Spark?</h4>
<table>
<thead><tr><th>ขนาดข้อมูล</th><th>เครื่องมือที่เหมาะ</th></tr></thead>
<tbody>
<tr><td>< 1 GB</td><td>Pandas (เครื่องเดียว)</td></tr>
<tr><td>1 GB - 10 GB</td><td>Pandas (ถ้า RAM พอ) หรือ Polars/DuckDB</td></tr>
<tr><td>10 GB - 1 TB</td><td>PySpark (single node หรือ small cluster)</td></tr>
<tr><td>> 1 TB</td><td>PySpark / Spark บน cluster (Dataproc, EMR, Databricks)</td></tr>
</tbody>
</table>

<h4>PySpark Basics</h4>
<pre><code class="language-python">from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, avg, count, when, year, month

# สร้าง SparkSession
spark = SparkSession.builder \\
    .appName("DE101 Pipeline") \\
    .config("spark.sql.adaptive.enabled", "true") \\
    .getOrCreate()

# === อ่านข้อมูล ===
# CSV
df = spark.read.csv("orders.csv", header=True, inferSchema=True)

# Parquet (format ที่ดีที่สุดสำหรับ Spark)
df = spark.read.parquet("gs://my-bucket/orders/")

# JSON
df = spark.read.json("events.json")

# ดู Schema
df.printSchema()
# root
#  |-- order_id: integer
#  |-- customer_id: integer
#  |-- order_date: date
#  |-- amount: double
#  |-- status: string

# ดูข้อมูลตัวอย่าง
df.show(5)
df.count()  # นับ rows
</code></pre>

<pre><code class="language-python"># === Transformations ===
# Filter
active_orders = df.filter(col("status") == "completed")

# Select + Rename
result = df.select(
    col("order_id"),
    col("customer_id"),
    col("amount").alias("order_amount"),
    year("order_date").alias("order_year"),
    month("order_date").alias("order_month"),
)

# Add Column
df2 = df.withColumn(
    "is_high_value",
    when(col("amount") > 1000, True).otherwise(False)
)

# Group By + Aggregate
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

# Window Functions
from pyspark.sql.window import Window

window_spec = Window.partitionBy("customer_id").orderBy("order_date")
df_with_rank = df.withColumn(
    "order_rank",
    row_number().over(window_spec)
)

# === เขียนผลลัพธ์ ===
# Parquet (partitioned by year/month)
monthly_sales.write \\
    .partitionBy("year", "month") \\
    .mode("overwrite") \\
    .parquet("gs://my-bucket/output/monthly_sales/")

# BigQuery
monthly_sales.write \\
    .format("bigquery") \\
    .option("table", "my-project.analytics.monthly_sales") \\
    .option("temporaryGcsBucket", "my-temp-bucket") \\
    .mode("overwrite") \\
    .save()
</code></pre>

<h4>Spark SQL</h4>
<pre><code class="language-python"># ลงทะเบียน DataFrame เป็น temp view
df.createOrReplaceTempView("orders")

# ใช้ SQL ตรงๆ
result = spark.sql("""
    SELECT
        customer_id,
        COUNT(*) AS total_orders,
        SUM(amount) AS total_spent,
        AVG(amount) AS avg_order
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_id
    HAVING total_orders >= 5
    ORDER BY total_spent DESC
    LIMIT 100
""")

result.show()
</code></pre>

<h4>Partitioning ใน Spark</h4>
<pre><code class="language-python"># ดูจำนวน partitions ปัจจุบัน
print(df.rdd.getNumPartitions())  # e.g., 200

# Repartition — กระจาย data ใหม่ (shuffle ทั้งหมด)
df = df.repartition(50)  # แบ่งเป็น 50 partitions

# Repartition by column
df = df.repartition("country")  # แบ่งตาม country

# Coalesce — ลดจำนวน partitions (ไม่ shuffle เต็ม)
df = df.coalesce(10)  # ลดเหลือ 10 partitions (เร็วกว่า repartition)
</code></pre>

<div class="tip-box">
💡 <strong>กฎง่ายๆ:</strong> repartition() ใช้ตอนต้องการเพิ่มจำนวน partitions หรือกระจายข้อมูลตาม column | coalesce() ใช้ตอนต้องการลดจำนวน partitions (เช่น ก่อนเขียนไฟล์ เพื่อไม่ให้ได้ไฟล์เล็กจำนวนมาก)
</div>

<h4>Caching</h4>
<pre><code class="language-python"># Cache DataFrame ที่ใช้บ่อย
df.cache()  # เก็บใน memory
# หรือ
df.persist()  # เก็บใน memory + disk ถ้า memory ไม่พอ

# ใช้ df ได้เร็วขึ้นในครั้งต่อๆ ไป
df.count()
df.filter(col("status") == "completed").count()

# ปลดปล่อย cache
df.unpersist()
</code></pre>

<h4>Wide vs Narrow Transformations</h4>
<table>
<thead><tr><th>Narrow Transformations</th><th>Wide Transformations</th></tr></thead>
<tbody>
<tr><td>ไม่ต้อง shuffle data ข้าม partitions</td><td>ต้อง shuffle data ข้าม partitions (ช้า!)</td></tr>
<tr><td>filter(), select(), map(), withColumn()</td><td>groupBy(), join(), repartition(), orderBy()</td></tr>
<tr><td>เร็ว — process partition เดียวเสร็จ</td><td>ช้า — ต้องส่ง data ข้าม network</td></tr>
</tbody>
</table>

<div class="warning-box">
❌ <strong>Common Mistakes:</strong><br>
1. <strong>Docker: ลืม .dockerignore</strong> — ทำให้ copy node_modules, .git เข้า image (ขนาดใหญ่มาก)<br>
2. <strong>Docker: ไม่ใช้ multi-stage build</strong> — image ใหญ่เกินจำเป็น<br>
3. <strong>Spark: collect() บน data ใหญ่</strong> — ดึง data ทั้งหมดเข้า driver เครื่องเดียว → OOM<br>
4. <strong>Spark: ไม่ cache DataFrame ที่ใช้ซ้ำ</strong> — compute ซ้ำทุกครั้ง<br>
5. <strong>Spark: เขียน Parquet ได้ไฟล์เล็กจำนวนมาก</strong> — ใช้ coalesce() ก่อน write<br>
6. <strong>Spark: ใช้ UDF (User Defined Functions) แทน built-in functions</strong> — UDF ช้ากว่ามาก เพราะต้อง serialize/deserialize
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Docker + Spark</h4>
<ol>
<li><strong>Docker Image กับ Container ต่างกันอย่างไร?</strong><br>
Image = template (read-only, เหมือนพิมพ์เขียว) | Container = running instance ที่สร้างจาก image (เหมือนบ้านที่สร้างจากพิมพ์เขียว)</li>
<li><strong>Spark ทำงาน in-memory หมายความว่าอะไร?</strong><br>
Spark เก็บ intermediate data ใน RAM แทน disk ทำให้เร็วกว่า Hadoop MapReduce ที่เขียนลง disk ทุก step</li>
<li><strong>Wide vs Narrow Transformation ต่างกันอย่างไร? อันไหนช้ากว่า?</strong><br>
Narrow ไม่ต้อง shuffle (filter, map) | Wide ต้อง shuffle ข้าม network (groupBy, join) | Wide ช้ากว่ามาก</li>
<li><strong>repartition() กับ coalesce() ต่างกันอย่างไร?</strong><br>
repartition() = full shuffle (เพิ่ม/ลดได้) | coalesce() = ลดอย่างเดียว ไม่ shuffle เต็ม (เร็วกว่า)</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน Dockerfile สำหรับ Python pipeline ที่ใช้ pandas + requests แล้ว build และ run</li>
<li>สร้าง docker-compose.yml ที่รัน PostgreSQL + Adminer (web UI) พร้อมกัน</li>
<li>เขียน PySpark script อ่าน CSV → filter → groupBy → เขียน Parquet แบ่งตาม year/month</li>
<li>เปรียบเทียบเวลาทำงาน: Pandas vs PySpark กับไฟล์ขนาด 1GB (ใช้ fake data)</li>
<li>ใช้ cache() กับ DataFrame ที่ใช้ 3 ครั้งในโปรแกรม แล้วเปรียบเทียบ execution time</li>
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

<h3>ทำไม Data Quality สำคัญ?</h3>
<p><strong>"Garbage In, Garbage Out"</strong> — ถ้าข้อมูลไม่ดี ผลลัพธ์จาก analytics, ML model, dashboard ก็ไม่มีค่า การตัดสินใจที่มาจากข้อมูลผิดอาจทำให้บริษัทเสียเงินหลายล้าน</p>

<h3>4 มิติของ Data Quality</h3>

<table>
<thead><tr><th>มิติ</th><th>คำอธิบาย</th><th>ตัวอย่างปัญหา</th><th>วิธีตรวจ</th></tr></thead>
<tbody>
<tr><td>🎯 <strong>Accuracy</strong></td><td>ข้อมูลถูกต้องตรงกับความเป็นจริง</td><td>อายุลูกค้า = -5 ปี, ยอดขาย = ∞</td><td>Range checks, Cross-reference</td></tr>
<tr><td>📋 <strong>Completeness</strong></td><td>ข้อมูลครบถ้วน ไม่มี missing values</td><td>email = NULL 30%, ที่อยู่หาย</td><td>NULL count, % completeness</td></tr>
<tr><td>⏰ <strong>Timeliness</strong></td><td>ข้อมูลมาถึงทันเวลาที่ต้องใช้</td><td>ข้อมูลวันนี้มาตอนพรุ่งนี้บ่าย</td><td>Freshness monitoring, SLA</td></tr>
<tr><td>🔗 <strong>Consistency</strong></td><td>ข้อมูลตรงกันข้าม sources</td><td>ยอดขายจาก DB ≠ ยอดจาก API</td><td>Cross-system reconciliation</td></tr>
</tbody>
</table>

<h3>Great Expectations — Data Quality Testing Framework</h3>
<p>Great Expectations (GX) คือ open-source Python framework สำหรับเขียน data quality tests — เหมือน unit test แต่สำหรับข้อมูล</p>

<pre><code class="language-python"># ติดตั้ง
# pip install great-expectations

import great_expectations as gx

# สร้าง context
context = gx.get_context()

# เชื่อมต่อ data source
datasource = context.sources.add_pandas("my_datasource")
data_asset = datasource.add_csv_asset(
    name="orders",
    filepath_or_buffer="orders.csv",
)

# สร้าง batch request
batch_request = data_asset.build_batch_request()
</code></pre>

<pre><code class="language-python"># === เขียน Expectations ===

# สร้าง Expectation Suite
suite = context.add_expectation_suite("orders_quality_suite")

# สร้าง Validator
validator = context.get_validator(
    batch_request=batch_request,
    expectation_suite_name="orders_quality_suite",
)

# 1. ตรวจว่า column ต้องมี (schema check)
validator.expect_table_columns_to_match_ordered_list(
    column_list=["order_id", "customer_id", "order_date", "amount", "status"]
)

# 2. ตรวจว่า order_id ไม่มี NULL
validator.expect_column_values_to_not_be_null("order_id")

# 3. ตรวจว่า order_id ไม่ซ้ำ
validator.expect_column_values_to_be_unique("order_id")

# 4. ตรวจว่า amount > 0
validator.expect_column_values_to_be_between(
    "amount", min_value=0, max_value=1000000
)

# 5. ตรวจว่า status อยู่ใน list ที่กำหนด
validator.expect_column_values_to_be_in_set(
    "status", ["pending", "completed", "cancelled", "refunded"]
)

# 6. ตรวจว่า NULL ของ email ไม่เกิน 5%
validator.expect_column_values_to_not_be_null(
    "email", mostly=0.95  # ยอมให้ NULL ได้ 5%
)

# 7. ตรวจ format ของ email
validator.expect_column_values_to_match_regex(
    "email", regex=r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    mostly=0.99
)

# 8. ตรวจจำนวน rows (ไม่ควรเป็น 0)
validator.expect_table_row_count_to_be_between(
    min_value=1, max_value=10000000
)

# 9. ตรวจ freshness (order_date ไม่ควรเก่าเกิน 2 วัน)
from datetime import datetime, timedelta
validator.expect_column_max_to_be_between(
    "order_date",
    min_value=(datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d"),
    parse_strings_as_datetimes=True,
)

# Save suite
validator.save_expectation_suite(discard_failed_expectations=False)
</code></pre>

<pre><code class="language-python"># === รัน Validation ===
checkpoint = context.add_or_update_checkpoint(
    name="orders_checkpoint",
    validations=[
        {
            "batch_request": batch_request,
            "expectation_suite_name": "orders_quality_suite",
        }
    ],
)

result = checkpoint.run()

# ดูผลลัพธ์
if not result.success:
    print("❌ Data Quality Check FAILED!")
    for validation_result in result.run_results.values():
        for r in validation_result["validation_result"]["results"]:
            if not r["success"]:
                print(f"  FAILED: {r['expectation_config']['expectation_type']}")
                print(f"    Column: {r['expectation_config'].get('kwargs', {}).get('column')}")
                print(f"    Details: {r['result']}")
else:
    print("✅ All Data Quality Checks PASSED!")

# สร้าง HTML report
context.build_data_docs()
context.open_data_docs()
</code></pre>

<h3>Data Observability</h3>
<p>Data Observability คือการ monitor ข้อมูลแบบ proactive — เหมือน APM (Application Performance Monitoring) แต่สำหรับ data pipelines</p>

<table>
<thead><tr><th>Pillar</th><th>คำอธิบาย</th><th>ตัวอย่าง Alert</th></tr></thead>
<tbody>
<tr><td>📊 <strong>Freshness</strong></td><td>ข้อมูลอัพเดทล่าสุดเมื่อไหร่</td><td>"Table orders ไม่ได้อัพเดทมา 6 ชั่วโมง"</td></tr>
<tr><td>📈 <strong>Volume</strong></td><td>จำนวน rows/size เปลี่ยนผิดปกติไหม</td><td>"Orders วันนี้น้อยกว่าปกติ 80%"</td></tr>
<tr><td>🔧 <strong>Schema</strong></td><td>โครงสร้าง table เปลี่ยนไหม</td><td>"Column 'discount' ถูกลบออก"</td></tr>
<tr><td>📉 <strong>Distribution</strong></td><td>การกระจายของข้อมูลเปลี่ยนไหม</td><td>"% ของ status=cancelled เพิ่มจาก 5% เป็น 40%"</td></tr>
<tr><td>🔗 <strong>Lineage</strong></td><td>ข้อมูลมาจากไหน ไปไหน</td><td>"Source table เปลี่ยน → 15 downstream tables อาจได้รับผลกระทบ"</td></tr>
</tbody>
</table>

<pre><code class="language-python"># ตัวอย่าง: Data Observability Checks ง่ายๆ
from datetime import datetime, timedelta
from google.cloud import bigquery

client = bigquery.Client()

def check_freshness(table_id, max_delay_hours=6):
    """ตรวจว่า table อัพเดทล่าสุดไม่เกิน X ชั่วโมง"""
    query = f"""
    SELECT MAX(_loaded_at) AS last_update
    FROM \`{table_id}\`
    """
    result = client.query(query).to_dataframe()
    last_update = result["last_update"].iloc[0]
    
    hours_since_update = (datetime.now() - last_update).total_seconds() / 3600
    
    if hours_since_update > max_delay_hours:
        alert(f"🚨 Table {table_id} ไม่ได้อัพเดทมา {hours_since_update:.1f} ชั่วโมง!")
        return False
    return True

def check_volume(table_id, min_rows=100, max_deviation_pct=50):
    """ตรวจว่า row count ไม่ผิดปกติ"""
    query = f"""
    WITH daily_counts AS (
        SELECT DATE(created_at) AS dt, COUNT(*) AS cnt
        FROM \`{table_id}\`
        WHERE DATE(created_at) >= DATE_SUB(CURRENT_DATE(), INTERVAL 7 DAY)
        GROUP BY 1
    )
    SELECT
        MAX(CASE WHEN dt = CURRENT_DATE() THEN cnt END) AS today_count,
        AVG(CASE WHEN dt < CURRENT_DATE() THEN cnt END) AS avg_count
    FROM daily_counts
    """
    result = client.query(query).to_dataframe()
    today = result["today_count"].iloc[0]
    avg = result["avg_count"].iloc[0]
    
    if today < min_rows:
        alert(f"🚨 Table {table_id} มี {today} rows วันนี้ (ต่ำกว่า minimum {min_rows})")
        return False
    
    if avg and abs(today - avg) / avg * 100 > max_deviation_pct:
        alert(f"🚨 Table {table_id}: วันนี้ {today} rows vs ค่าเฉลี่ย {avg:.0f} rows")
        return False
    
    return True

def check_schema(table_id, expected_columns):
    """ตรวจว่า schema ไม่เปลี่ยน"""
    table = client.get_table(table_id)
    actual_columns = {field.name for field in table.schema}
    
    missing = expected_columns - actual_columns
    extra = actual_columns - expected_columns
    
    if missing or extra:
        alert(f"🚨 Schema change in {table_id}! Missing: {missing}, Extra: {extra}")
        return False
    return True
</code></pre>

<h3>Data Lineage — สายเลือดของข้อมูล</h3>
<p>Data Lineage ตอบคำถาม: ข้อมูลนี้มาจากไหน? ผ่านกระบวนการอะไรบ้าง? ใครใช้ข้อมูลนี้?</p>
<pre><code class="language-text">┌─────────┐     ┌──────────┐     ┌──────────────┐     ┌──────────────┐
│ MySQL   │────▶│ raw_data │────▶│ stg_orders   │────▶│ fct_sales    │
│ (source)│     │ (GCS)    │     │ (BigQuery)   │     │ (BigQuery)   │
└─────────┘     └──────────┘     └──────────────┘     └──────────────┘
                                                            │
                                                            ▼
                                                      ┌──────────────┐
                                                      │ Looker Studio│
                                                      │ (Dashboard)  │
                                                      └──────────────┘
</code></pre>
<p>เครื่องมือ: <strong>dbt Lineage Graph</strong> (ฟรี, ทำงานร่วมกับ dbt), Google Data Catalog, Apache Atlas, Atlan</p>

<h3>PDPA — พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล</h3>
<p>PDPA (Personal Data Protection Act) คือกฎหมายคุ้มครองข้อมูลส่วนบุคคลของไทย มีผลบังคับใช้ 1 มิ.ย. 2565</p>

<table>
<thead><tr><th>หัวข้อ</th><th>รายละเอียด</th><th>สิ่งที่ DE ต้องทำ</th></tr></thead>
<tbody>
<tr><td><strong>ข้อมูลส่วนบุคคล</strong></td><td>ชื่อ, เลขบัตร, email, IP, phone</td><td>ระบุว่า table/column ไหนเป็น PII</td></tr>
<tr><td><strong>Consent</strong></td><td>ต้องได้รับความยินยอมก่อนเก็บ/ใช้</td><td>เก็บ consent log, filter เฉพาะ consented data</td></tr>
<tr><td><strong>Data Minimization</strong></td><td>เก็บเท่าที่จำเป็น</td><td>ไม่ copy PII ไปทุก table, ลบเมื่อหมดความจำเป็น</td></tr>
<tr><td><strong>Right to be Forgotten</strong></td><td>ลูกค้าขอลบข้อมูลได้</td><td>ต้อง design pipeline ให้ลบ PII ได้ทุก layer</td></tr>
<tr><td><strong>Data Breach</strong></td><td>ต้องแจ้ง สคส. ภายใน 72 ชั่วโมง</td><td>มี incident response plan, logging</td></tr>
</tbody>
</table>

<h3>Data Masking & RBAC</h3>
<pre><code class="language-sql">-- Data Masking ใน BigQuery
-- 1. Column-level security
-- สร้าง policy tag ใน Data Catalog แล้วกำหนดว่าใครเข้าถึง column ไหนได้

-- 2. Dynamic Data Masking (BigQuery)
CREATE FUNCTION my_dataset.mask_email(email STRING)
RETURNS STRING
AS (
    CONCAT(
        LEFT(email, 2),
        '***@',
        SPLIT(email, '@')[SAFE_OFFSET(1)]
    )
);

-- ใช้งาน
SELECT
    customer_id,
    my_dataset.mask_email(email) AS masked_email,
    -- john.doe@gmail.com → jo***@gmail.com
    CONCAT(LEFT(phone, 3), '-XXX-XXXX') AS masked_phone
FROM customers;

-- 3. Row-level security
CREATE ROW ACCESS POLICY region_filter
ON analytics.fct_sales
GRANT TO ("group:th-team@company.com")
FILTER USING (country = 'TH');
-- th-team เห็นแค่ข้อมูลของ Thailand
</code></pre>

<pre><code class="language-sql">-- RBAC (Role-Based Access Control) ใน BigQuery
-- 1. สร้าง role ต่างๆ
-- Analyst: อ่าน analytics dataset ได้
GRANT \`roles/bigquery.dataViewer\`
ON SCHEMA analytics
TO "group:analysts@company.com";

-- Engineer: read/write staging + analytics
GRANT \`roles/bigquery.dataEditor\`
ON SCHEMA staging
TO "group:de-team@company.com";

GRANT \`roles/bigquery.dataEditor\`
ON SCHEMA analytics
TO "group:de-team@company.com";

-- Admin: full access
GRANT \`roles/bigquery.admin\`
ON SCHEMA raw_data
TO "group:de-leads@company.com";
</code></pre>

<div class="tip-box">
💡 <strong>Best Practices:</strong><br>
1. <strong>PII Tagging</strong> — tag ทุก column ที่เป็น PII ด้วย Data Catalog<br>
2. <strong>Principle of Least Privilege</strong> — ให้ access เท่าที่จำเป็น<br>
3. <strong>Separate Raw from Analytics</strong> — raw dataset มี PII ให้แค่ DE เข้าถึง, analytics dataset mask PII แล้ว<br>
4. <strong>Audit Logging</strong> — เปิด audit log ใน BigQuery ดูว่าใคร query อะไร เมื่อไหร่<br>
5. <strong>Data Retention Policy</strong> — กำหนดว่าเก็บข้อมูลนานแค่ไหน แล้วลบอัตโนมัติ
</div>

<div class="warning-box">
❌ <strong>Common Mistakes:</strong><br>
1. <strong>ไม่มี data quality checks</strong> — ปล่อยให้ bad data ไหลไปถึง dashboard<br>
2. <strong>ตรวจ quality แค่ตอน develop</strong> — ต้องตรวจทุกครั้งที่ pipeline run (production checks)<br>
3. <strong>ไม่มี alerting</strong> — quality fail แต่ไม่มีใครรู้ จนผู้ใช้มาบอก<br>
4. <strong>Copy PII ไปทุก table</strong> — ยากต่อการ comply กับ PDPA<br>
5. <strong>ให้ทุกคน access raw data</strong> — ไม่ทำ RBAC ข้อมูลลูกค้ารั่วไหลง่าย
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ Data Quality</h4>
<ol>
<li><strong>Data Quality มีกี่มิติ? อะไรบ้าง?</strong><br>
4 มิติหลัก: Accuracy (ถูกต้อง), Completeness (ครบถ้วน), Timeliness (ทันเวลา), Consistency (สอดคล้อง)</li>
<li><strong>Great Expectations คืออะไร? ต่างจาก dbt tests อย่างไร?</strong><br>
GX = Python framework สำหรับ data quality testing แบบละเอียด มี data profiling, HTML report, หลาย data sources<br>
dbt tests = built-in ใน dbt, ง่ายกว่า, ทำงานเฉพาะใน warehouse — ใช้ร่วมกันได้ดี</li>
<li><strong>PDPA มีผลต่อ Data Engineer อย่างไร?</strong><br>
ต้อง tag PII, implement data masking, ทำ RBAC, design pipeline ให้ลบ PII ได้ (right to be forgotten), เก็บ consent log</li>
<li><strong>Data Lineage สำคัญอย่างไร?</strong><br>
ช่วยวิเคราะห์ impact analysis (ถ้า source เปลี่ยน อะไรพัง), debug ข้อมูลผิด (trace ย้อนกลับ), comply กับ PDPA (รู้ว่า PII อยู่ที่ไหนบ้าง)</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>เขียน Great Expectations suite สำหรับ orders data ที่ตรวจ: not_null, unique, range, allowed values, regex pattern</li>
<li>เขียน Python function ตรวจ freshness + volume ของ BigQuery table แล้วส่ง Slack alert ถ้าผิดปกติ</li>
<li>เขียน SQL Data Masking function สำหรับ email, phone number, เลขบัตรประชาชน</li>
<li>ออกแบบ RBAC สำหรับทีม 3 กลุ่ม: DE (full access), Analyst (read analytics only), Manager (read dashboards only)</li>
<li>วาด Data Lineage diagram สำหรับ pipeline: API → GCS → BigQuery raw → staging → analytics → Looker Studio</li>
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

<h3>ภาพรวม Architecture</h3>
<pre><code class="language-text">┌──────────────┐     ┌─────────┐     ┌──────────────┐     ┌─────────────┐
│  REST API    │────▶│  GCS    │────▶│  BigQuery    │────▶│   dbt       │
│  (Source)    │     │ (Lake)  │     │  (raw_data)  │     │ (Transform) │
└──────────────┘     └─────────┘     └──────────────┘     └─────────────┘
       │                                                        │
       │              ┌──────────────────────┐                  │
       │              │   Apache Airflow     │                  │
       └──────────────│   (Orchestration)    │──────────────────┘
                      │   ┌──────────────┐   │
                      │   │ Great        │   │
                      │   │ Expectations │   │
                      │   └──────────────┘   │
                      └──────────────────────┘
                                │
                                ▼
                      ┌──────────────────┐
                      │  Looker Studio   │
                      │  (Dashboard)     │
                      └──────────────────┘
</code></pre>

<h3>โครงสร้าง Project</h3>
<pre><code class="language-text">de101-e2e-project/
├── README.md                    # Portfolio documentation
├── docker-compose.yml           # Airflow + PostgreSQL
├── Makefile                     # Common commands
├── .env.example                 # Environment variables template
├── .gitignore
│
├── airflow/
│   └── dags/
│       ├── etl_ecommerce.py     # Main DAG
│       └── data_quality_dag.py  # Quality checks DAG
│
├── src/
│   ├── __init__.py
│   ├── extract.py               # Extract from API
│   ├── load.py                  # Load to GCS & BigQuery
│   └── quality.py               # Great Expectations checks
│
├── dbt_project/
│   ├── dbt_project.yml
│   ├── models/
│   │   ├── staging/
│   │   │   ├── _sources.yml
│   │   │   ├── stg_orders.sql
│   │   │   ├── stg_customers.sql
│   │   │   └── stg_products.sql
│   │   ├── intermediate/
│   │   │   └── int_order_details.sql
│   │   └── marts/
│   │       ├── _schema.yml
│   │       ├── fct_daily_sales.sql
│   │       └── dim_customers.sql
│   └── tests/
│       └── assert_revenue_positive.sql
│
├── great_expectations/
│   ├── great_expectations.yml
│   └── expectations/
│       └── orders_suite.json
│
├── terraform/                   # Infrastructure as Code (optional)
│   ├── main.tf
│   └── variables.tf
│
└── tests/
    ├── test_extract.py
    └── test_load.py
</code></pre>

<h3>Step 1: Extract — ดึงข้อมูลจาก API</h3>
<pre><code class="language-python"># src/extract.py
import requests
import json
import logging
from datetime import datetime
from typing import Optional
from tenacity import retry, stop_after_attempt, wait_exponential

logger = logging.getLogger(__name__)

class APIExtractor:
    """Extract data from REST API with retry logic"""
    
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        })
    
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=60),
    )
    def fetch_orders(self, date: str, page: int = 1) -> dict:
        """ดึง orders ของวันที่กำหนด"""
        url = f"{self.base_url}/orders"
        params = {"date": date, "page": page, "per_page": 1000}
        
        logger.info(f"Fetching orders: date={date}, page={page}")
        response = self.session.get(url, params=params, timeout=30)
        response.raise_for_status()
        
        return response.json()
    
    def fetch_all_orders(self, date: str) -> list:
        """ดึง orders ทั้งหมดของวันนั้น (pagination)"""
        all_orders = []
        page = 1
        
        while True:
            data = self.fetch_orders(date, page)
            orders = data.get("orders", [])
            
            if not orders:
                break
            
            all_orders.extend(orders)
            
            if page >= data.get("total_pages", 1):
                break
            
            page += 1
        
        logger.info(f"Total orders extracted for {date}: {len(all_orders)}")
        return all_orders
    
    def fetch_customers(self) -> list:
        """ดึงข้อมูลลูกค้าทั้งหมด"""
        url = f"{self.base_url}/customers"
        response = self.session.get(url, timeout=30)
        response.raise_for_status()
        return response.json()["customers"]
</code></pre>

<h3>Step 2: Load — โหลดเข้า GCS แล้วต่อไป BigQuery</h3>
<pre><code class="language-python"># src/load.py
import json
import logging
from datetime import datetime
from google.cloud import storage, bigquery

logger = logging.getLogger(__name__)

class DataLoader:
    """Load data to GCS and BigQuery"""
    
    def __init__(self, project_id: str, bucket_name: str):
        self.project_id = project_id
        self.bucket_name = bucket_name
        self.gcs_client = storage.Client(project=project_id)
        self.bq_client = bigquery.Client(project=project_id)
    
    def upload_to_gcs(self, data: list, prefix: str, date: str) -> str:
        """อัพโหลดข้อมูลไป GCS เป็น NDJSON"""
        bucket = self.gcs_client.bucket(self.bucket_name)
        blob_path = f"{prefix}/dt={date}/data.json"
        blob = bucket.blob(blob_path)
        
        # เขียนเป็น newline-delimited JSON
        ndjson = "\\n".join(json.dumps(record) for record in data)
        blob.upload_from_string(ndjson, content_type="application/json")
        
        gcs_uri = f"gs://{self.bucket_name}/{blob_path}"
        logger.info(f"Uploaded {len(data)} records to {gcs_uri}")
        return gcs_uri
    
    def load_gcs_to_bigquery(
        self, gcs_uri: str, table_id: str, 
        write_disposition: str = "WRITE_TRUNCATE"
    ) -> int:
        """โหลดจาก GCS เข้า BigQuery"""
        job_config = bigquery.LoadJobConfig(
            source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON,
            autodetect=True,
            write_disposition=write_disposition,
        )
        
        job = self.bq_client.load_table_from_uri(
            gcs_uri, table_id, job_config=job_config
        )
        job.result()  # Wait for completion
        
        table = self.bq_client.get_table(table_id)
        logger.info(f"Loaded to {table_id}: {table.num_rows} rows")
        return table.num_rows
</code></pre>

<h3>Step 3: Data Quality — ตรวจสอบข้อมูล</h3>
<pre><code class="language-python"># src/quality.py
import logging
from google.cloud import bigquery

logger = logging.getLogger(__name__)

class DataQualityChecker:
    """Simple data quality checks"""
    
    def __init__(self, project_id: str):
        self.client = bigquery.Client(project=project_id)
    
    def check_not_null(self, table_id: str, column: str) -> bool:
        query = f"""
        SELECT COUNT(*) AS null_count
        FROM \`{table_id}\`
        WHERE {column} IS NULL
        """
        result = self.client.query(query).to_dataframe()
        null_count = result["null_count"].iloc[0]
        
        if null_count > 0:
            logger.error(f"❌ {table_id}.{column} has {null_count} NULL values")
            return False
        logger.info(f"✅ {table_id}.{column} — no NULLs")
        return True
    
    def check_unique(self, table_id: str, column: str) -> bool:
        query = f"""
        SELECT {column}, COUNT(*) AS cnt
        FROM \`{table_id}\`
        GROUP BY 1 HAVING cnt > 1
        LIMIT 5
        """
        result = self.client.query(query).to_dataframe()
        
        if len(result) > 0:
            logger.error(f"❌ {table_id}.{column} has duplicates: {result.to_dict()}")
            return False
        logger.info(f"✅ {table_id}.{column} — all unique")
        return True
    
    def check_freshness(self, table_id: str, date_column: str, max_hours: int = 24) -> bool:
        query = f"""
        SELECT TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), MAX({date_column}), HOUR) AS hours_stale
        FROM \`{table_id}\`
        """
        result = self.client.query(query).to_dataframe()
        hours_stale = result["hours_stale"].iloc[0]
        
        if hours_stale > max_hours:
            logger.error(f"❌ {table_id} stale: {hours_stale} hours since last update")
            return False
        logger.info(f"✅ {table_id} — fresh ({hours_stale} hours)")
        return True
    
    def check_row_count(self, table_id: str, min_rows: int = 1) -> bool:
        query = f"SELECT COUNT(*) AS cnt FROM \`{table_id}\`"
        result = self.client.query(query).to_dataframe()
        cnt = result["cnt"].iloc[0]
        
        if cnt < min_rows:
            logger.error(f"❌ {table_id} has {cnt} rows (min: {min_rows})")
            return False
        logger.info(f"✅ {table_id} — {cnt} rows")
        return True
    
    def run_all_checks(self, table_id: str, key_column: str, date_column: str):
        """Run all quality checks"""
        results = {
            "not_null": self.check_not_null(table_id, key_column),
            "unique": self.check_unique(table_id, key_column),
            "freshness": self.check_freshness(table_id, date_column),
            "row_count": self.check_row_count(table_id),
        }
        
        all_passed = all(results.values())
        if not all_passed:
            failed = [k for k, v in results.items() if not v]
            raise ValueError(f"Data quality checks failed: {failed}")
        
        return results
</code></pre>

<h3>Step 4: Airflow DAG — รวมทุกอย่างเข้าด้วยกัน</h3>
<pre><code class="language-python"># airflow/dags/etl_ecommerce.py
from datetime import datetime, timedelta
from airflow.decorators import dag, task
from airflow.operators.bash import BashOperator

default_args = {
    "owner": "data-engineering",
    "retries": 3,
    "retry_delay": timedelta(minutes=5),
    "email_on_failure": True,
    "email": ["de-oncall@company.com"],
}

@dag(
    dag_id="etl_ecommerce_pipeline",
    default_args=default_args,
    description="End-to-end e-commerce data pipeline",
    schedule="0 2 * * *",  # ทุกวันตี 2
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=["production", "ecommerce"],
)
def etl_ecommerce():
    
    @task()
    def extract_orders(**context):
        """ดึง orders จาก API"""
        from src.extract import APIExtractor
        
        ds = context["ds"]  # execution date
        extractor = APIExtractor(
            base_url="https://api.example.com/v1",
            api_key="{{ var.value.api_key }}",
        )
        
        orders = extractor.fetch_all_orders(date=ds)
        return {"count": len(orders), "date": ds}
    
    @task()
    def extract_customers():
        """ดึง customers (full refresh)"""
        from src.extract import APIExtractor
        
        extractor = APIExtractor(
            base_url="https://api.example.com/v1",
            api_key="{{ var.value.api_key }}",
        )
        
        customers = extractor.fetch_customers()
        return {"count": len(customers)}
    
    @task()
    def load_to_gcs(extract_result, entity, **context):
        """โหลดข้อมูลไป GCS"""
        from src.load import DataLoader
        
        loader = DataLoader(
            project_id="my-de-project",
            bucket_name="my-de-data-lake",
        )
        
        # Re-extract for loading (ส่ง path ผ่าน XCom ดีกว่าส่ง data)
        gcs_uri = loader.upload_to_gcs(
            data=[],  # ในจริงจะ extract ใหม่หรือส่ง path
            prefix=entity,
            date=context["ds"],
        )
        return gcs_uri
    
    @task()
    def load_to_bigquery(gcs_uri, table_id):
        """โหลดจาก GCS เข้า BigQuery"""
        from src.load import DataLoader
        
        loader = DataLoader(
            project_id="my-de-project",
            bucket_name="my-de-data-lake",
        )
        
        rows = loader.load_gcs_to_bigquery(gcs_uri, table_id)
        return rows
    
    @task()
    def run_quality_checks(**context):
        """ตรวจสอบคุณภาพข้อมูล"""
        from src.quality import DataQualityChecker
        
        checker = DataQualityChecker(project_id="my-de-project")
        
        checker.run_all_checks(
            table_id="my-de-project.raw_data.orders",
            key_column="order_id",
            date_column="order_date",
        )
        
        checker.run_all_checks(
            table_id="my-de-project.raw_data.customers",
            key_column="customer_id",
            date_column="registered_at",
        )
    
    # dbt run
    run_dbt = BashOperator(
        task_id="run_dbt_models",
        bash_command="cd /opt/dbt && dbt build --profiles-dir /opt/dbt",
    )
    
    @task()
    def notify_success(**context):
        """ส่ง notification สำเร็จ"""
        print(f"✅ Pipeline completed for {context['ds']}")
    
    # === Define Task Dependencies ===
    orders_result = extract_orders()
    customers_result = extract_customers()
    
    orders_gcs = load_to_gcs(orders_result, "orders")
    customers_gcs = load_to_gcs(customers_result, "customers")
    
    orders_bq = load_to_bigquery(orders_gcs, "my-de-project.raw_data.orders")
    customers_bq = load_to_bigquery(customers_gcs, "my-de-project.raw_data.customers")
    
    quality = run_quality_checks()
    
    # Set dependencies
    [orders_bq, customers_bq] >> quality >> run_dbt >> notify_success()

etl_ecommerce()
</code></pre>

<h3>Best Practices สำหรับ Production Pipeline</h3>

<div class="tip-box">
💡 <strong>Production Best Practices:</strong><br>
<strong>1. Logging</strong><br>
<code>import logging; logger = logging.getLogger(__name__)</code> — ใช้ structured logging ทุก step ไม่ใช้ print()<br><br>

<strong>2. Retry</strong><br>
ใช้ library เช่น tenacity สำหรับ retry กับ API calls / external systems<br><br>

<strong>3. Idempotency</strong><br>
Run pipeline ซ้ำกี่ครั้งก็ได้ ผลลัพธ์เหมือนเดิม — ใช้ WRITE_TRUNCATE, MERGE, หรือ DELETE+INSERT<br><br>

<strong>4. Configuration</strong><br>
ใช้ environment variables / Airflow Variables — ห้าม hardcode credentials<br><br>

<strong>5. Monitoring</strong><br>
ตั้ง alert สำหรับ: pipeline failure, data quality fail, latency สูงผิดปกติ<br><br>

<strong>6. Documentation</strong><br>
README.md + dbt docs + inline comments — ทำให้คนอื่นรัน project ได้ภายใน 30 นาที
</div>

<h3>README.md สำหรับ Portfolio</h3>
<pre><code class="language-markdown"># 🛒 E-Commerce Data Pipeline

## Overview
End-to-end data pipeline ที่ดึงข้อมูล e-commerce จาก REST API,
แปลงด้วย dbt, ตรวจสอบ data quality, และแสดงผลบน Looker Studio

## Architecture
![Architecture Diagram](docs/architecture.png)

## Tech Stack
| Component | Technology |
|-----------|-----------|
| Orchestration | Apache Airflow 2.8 |
| Data Warehouse | Google BigQuery |
| Transformation | dbt Core 1.7 |
| Data Quality | Great Expectations + Custom checks |
| Visualization | Looker Studio |
| Infrastructure | Docker Compose, GCP |
| Language | Python 3.11, SQL |

## Quick Start
\`\`\`bash
# 1. Clone repository
git clone https://github.com/yourname/de101-pipeline.git
cd de101-pipeline

# 2. Setup environment
cp .env.example .env
# แก้ไข .env ใส่ credentials

# 3. Start services
docker compose up -d

# 4. Access Airflow UI
open http://localhost:8080  # admin/admin

# 5. Trigger pipeline
airflow dags trigger etl_ecommerce_pipeline
\`\`\`

## Data Model (dbt Lineage)
\`\`\`
raw.orders ──▶ stg_orders ──▶ int_order_details ──▶ fct_daily_sales
raw.customers ──▶ stg_customers ──────────────────▶ dim_customers
\`\`\`

## Key Decisions
1. **GCS as Data Lake** — ราคาถูก, เก็บ raw data ก่อนโหลดเข้า BQ
2. **Incremental dbt models** — ลด compute cost สำหรับ fact tables
3. **Data quality before transform** — catch bad data เร็วที่สุด

## Dashboard
[Looker Studio Dashboard](https://lookerstudio.google.com/xxx)

## Lessons Learned
- API rate limiting ทำให้ต้องเพิ่ม retry + backoff
- BigQuery partitioning ลด query cost ลง 70%
- dbt incremental models ลดเวลา run จาก 15 นาที เหลือ 2 นาที
</code></pre>

<div class="warning-box">
❌ <strong>Common Mistakes ในการทำ Portfolio:</strong><br>
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
ต้องตอบได้ว่าเปรียบเทียบอะไรบ้าง ข้อดีข้อเสียอะไร เช่น "เลือก BigQuery เพราะ serverless ไม่ต้อง manage infra, pay-per-query เหมาะกับ workload ที่ไม่ได้ run 24/7"</li>
<li><strong>ถ้า pipeline fail ตอนตี 2 จะทำอย่างไร?</strong><br>
มี alerting (Slack/email) → ตรวจ logs ใน Airflow UI → retry ถ้าเป็น transient error → fix code ถ้าเป็น bug → re-run DAG</li>
<li><strong>Pipeline handle data ซ้ำอย่างไร?</strong><br>
ใช้ idempotent approach: WRITE_TRUNCATE สำหรับ daily partition หรือ MERGE (upsert) ด้วย unique key</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง end-to-end pipeline จริงโดยใช้ free public API (เช่น OpenWeatherMap, CoinGecko, JSONPlaceholder)</li>
<li>เขียน Airflow DAG ที่มีอย่างน้อย 5 tasks: extract, load_gcs, load_bq, quality_check, dbt_run</li>
<li>สร้าง dbt project ที่มี 3 layers (staging, intermediate, marts) พร้อม tests</li>
<li>เขียน README.md ที่มี architecture diagram, tech stack table, quick start, data model</li>
<li>Deploy pipeline บน GCP ด้วย Docker Compose แล้ว push code ขึ้น GitHub</li>
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

<h3>System Design Interview คืออะไร?</h3>
<p>System Design Interview เป็นการทดสอบความสามารถในการ<strong>ออกแบบระบบขนาดใหญ่</strong> — ไม่มีคำตอบที่ถูกต้องเพียงหนึ่งเดียว ผู้สัมภาษณ์ต้องการเห็น:</p>
<ul>
<li><strong>Structured Thinking</strong> — คิดเป็นขั้นตอน ไม่กระโดดไปเขียน solution ทันที</li>
<li><strong>Trade-off Analysis</strong> — เลือก A ดีกว่า B เพราะอะไร? มีข้อเสียอะไร?</li>
<li><strong>Scale Awareness</strong> — รู้ว่า 100 users กับ 100M users ต้อง design ต่างกัน</li>
<li><strong>Communication</strong> — อธิบายความคิดชัดเจน ถาม-ตอบกับผู้สัมภาษณ์</li>
</ul>

<h3>4-Step Framework</h3>

<table>
<thead><tr><th>Step</th><th>เวลา</th><th>สิ่งที่ต้องทำ</th></tr></thead>
<tbody>
<tr><td>1️⃣ <strong>Clarify</strong></td><td>5 นาที</td><td>ถามคำถามเพื่อเข้าใจ requirements ให้ชัด</td></tr>
<tr><td>2️⃣ <strong>High-Level Design</strong></td><td>10 นาที</td><td>วาด architecture diagram แสดง components หลัก</td></tr>
<tr><td>3️⃣ <strong>Deep Dive</strong></td><td>15 นาที</td><td>ลงรายละเอียด components สำคัญ</td></tr>
<tr><td>4️⃣ <strong>Trade-offs</strong></td><td>5 นาที</td><td>อธิบายข้อดี-ข้อเสียของ design, alternatives</td></tr>
</tbody>
</table>

<h4>Step 1: Clarify — ถามให้ชัดก่อน Design</h4>
<div class="tip-box">
💡 <strong>คำถามที่ต้องถาม:</strong><br>
• <strong>Scale:</strong> ข้อมูลวันละเท่าไหร่? กี่ users? เก็บนานแค่ไหน?<br>
• <strong>Latency:</strong> ต้อง real-time ไหม? delay ได้กี่วินาที/นาที/ชั่วโมง?<br>
• <strong>Sources:</strong> data sources มีอะไรบ้าง? format อะไร?<br>
• <strong>Consumers:</strong> ใครใช้ข้อมูล? analyst? ML model? dashboard?<br>
• <strong>Budget:</strong> มี budget constraints ไหม? cloud/on-premise?<br>
• <strong>Team:</strong> ทีมมีกี่คน? skill set อะไร?
</div>

<hr>

<h3>Problem 1: E-commerce Pipeline — 1M Orders/Day</h3>

<h4>📝 โจทย์:</h4>
<p>"ออกแบบ data pipeline สำหรับ e-commerce platform ที่มี 1 ล้าน orders ต่อวัน ต้องการ daily analytics dashboard และ monthly reports"</p>

<h4>Step 1: Clarify</h4>
<pre><code class="language-text">• 1M orders/day ≈ 42K/hour ≈ 12/second (average)
• Data size: ~500 bytes/order → 500 MB/day → ~15 GB/month
• Sources: PostgreSQL (orders, customers, products), Payments API
• Consumers: BI team (Looker Studio), Management (monthly reports)
• Latency: T+1 (ข้อมูลวันนี้ พร้อมใช้พรุ่งนี้เช้า)
• Retention: 3 years
• Budget: moderate (prefer managed services)
</code></pre>

<h4>Step 2: High-Level Design</h4>
<pre><code class="language-text">┌──────────────┐     ┌───────────────┐     ┌──────────────┐
│  PostgreSQL  │────▶│  Cloud        │────▶│  BigQuery    │
│  (OLTP)      │     │  Storage      │     │  (Raw)       │
│              │     │  (Data Lake)  │     │              │
└──────────────┘     └───────────────┘     └──────────────┘
                                                  │
┌──────────────┐                                  ▼
│  Payments    │─────────────────────────▶ ┌──────────────┐
│  API         │                           │  dbt         │
└──────────────┘                           │  (Transform) │
                                           └──────────────┘
┌──────────────┐                                  │
│  Airflow     │  ← Orchestrate ทุก step          ▼
│  (Scheduler) │                           ┌──────────────┐
└──────────────┘                           │  BigQuery    │
                                           │  (Analytics) │
                                           └──────────────┘
                                                  │
                                                  ▼
                                           ┌──────────────┐
                                           │ Looker Studio│
                                           │ (Dashboard)  │
                                           └──────────────┘
</code></pre>

<h4>Step 3: Deep Dive</h4>
<pre><code class="language-text">Ingestion:
  - ใช้ CDC (Change Data Capture) จาก PostgreSQL via Debezium
  - หรือ batch extract ด้วย SELECT WHERE updated_at > last_run
  - Payments API: batch pull ทุกชั่วโมง ด้วย retry logic

Storage:
  - GCS: เก็บ raw data เป็น Parquet (compressed, columnar)
  - Partition by date: gs://bucket/orders/dt=2024-01-15/
  - BigQuery: raw_data dataset (external table ชี้ GCS) → staging → analytics

Transform (dbt):
  - stg_orders: clean, cast, rename
  - stg_payments: join payment status
  - int_order_payments: merge orders + payments
  - fct_daily_sales: daily aggregation (partitioned by date, clustered by country)
  - dim_customers: customer attributes + lifetime value

Quality:
  - Great Expectations: check nulls, uniqueness, ranges
  - dbt tests: schema tests on every model
  - Anomaly detection: row count deviation > 50%

Orchestration:
  - Airflow DAG: run daily at 2 AM
  - Tasks: extract → load_gcs → load_bq → quality_check → dbt_run → notify
</code></pre>

<h4>Step 4: Trade-offs</h4>
<table>
<thead><tr><th>Decision</th><th>ข้อดี</th><th>ข้อเสีย</th></tr></thead>
<tbody>
<tr><td>Batch (T+1) vs Real-time</td><td>ง่าย, ถูก, เชื่อถือได้</td><td>ข้อมูลไม่ real-time</td></tr>
<tr><td>BigQuery vs Redshift</td><td>Serverless, ไม่ต้อง manage, pay-per-query</td><td>อาจแพงถ้า query เยอะมาก</td></tr>
<tr><td>dbt vs Stored Procedures</td><td>Version control, testable, modular</td><td>ต้อง learn dbt, overhead ของ project setup</td></tr>
<tr><td>GCS as Data Lake</td><td>ราคาถูก, เก็บ raw data สำรอง</td><td>เพิ่ม complexity (2 storage layers)</td></tr>
</tbody>
</table>

<hr>

<h3>Problem 2: Real-time Delivery Dashboard</h3>

<h4>📝 โจทย์:</h4>
<p>"ออกแบบ real-time dashboard แสดงตำแหน่ง rider 10,000 คน, update ทุก 5 วินาที พร้อม ETA สำหรับลูกค้า"</p>

<h4>Step 1: Clarify</h4>
<pre><code class="language-text">• 10K riders × update ทุก 5 วิ = 2K events/second
• Each event: rider_id, lat, lng, timestamp, order_id, status (~200 bytes)
• Data rate: ~400 KB/s ≈ 34 GB/day
• Latency requirement: < 5 seconds (real-time)
• Consumers: Operations team dashboard, Customer app (ETA)
• Retention: real-time data 7 days, aggregated data 1 year
</code></pre>

<h4>Step 2: High-Level Design</h4>
<pre><code class="language-text">┌──────────────┐     ┌───────────────┐     ┌──────────────┐
│  Rider App   │────▶│  Pub/Sub      │────▶│  Dataflow    │
│  (GPS data)  │     │  (Message     │     │  (Stream     │
│              │     │   Queue)      │     │   Processing)│
└──────────────┘     └───────────────┘     └──────────────┘
                                                  │
                                          ┌───────┴───────┐
                                          ▼               ▼
                                   ┌──────────┐    ┌──────────────┐
                                   │  Redis   │    │  BigQuery    │
                                   │(Real-time│    │(Historical   │
                                   │  Cache)  │    │  Analytics)  │
                                   └──────────┘    └──────────────┘
                                          │
                                          ▼
                                   ┌──────────────┐
                                   │  Dashboard   │
                                   │  (WebSocket) │
                                   └──────────────┘
</code></pre>

<h4>Step 3: Deep Dive</h4>
<pre><code class="language-text">Ingestion:
  - Rider app ส่ง GPS coordinates ทุก 5 วินาที ผ่าน HTTPS → Cloud Pub/Sub
  - Pub/Sub: managed message queue, at-least-once delivery, auto-scale

Stream Processing (Dataflow / Apache Beam):
  - Windowing: 30-second tumbling windows
  - Per window: aggregate rider positions, calculate speed
  - Enrich: join กับ order data เพื่อคำนวณ ETA
  - Output ไป 2 ที่:
    1. Redis (real-time) — current position ของแต่ละ rider
    2. BigQuery (analytics) — historical data สำหรับ reporting

Real-time Layer (Redis):
  - Key: rider:{rider_id} → {lat, lng, speed, eta, order_id, timestamp}
  - TTL: 5 minutes (ถ้าไม่ update ถือว่า offline)
  - Pub/Sub channel: dashboard subscribe เพื่อ push updates

Historical Layer (BigQuery):
  - Partitioned by date, clustered by rider_id
  - Daily aggregation: avg delivery time, rider performance
  - Monthly reports สำหรับ management

Dashboard:
  - WebSocket connection ไป backend
  - Backend subscribe Redis Pub/Sub → push to connected clients
  - Map visualization: Mapbox/Google Maps
</code></pre>

<h4>Step 4: Trade-offs</h4>
<table>
<thead><tr><th>Decision</th><th>Alternative</th><th>เหตุผลที่เลือก</th></tr></thead>
<tbody>
<tr><td>Pub/Sub</td><td>Kafka</td><td>Managed service, ไม่ต้อง maintain cluster, auto-scale</td></tr>
<tr><td>Dataflow</td><td>Flink</td><td>Managed, integrate กับ GCP, Apache Beam portable</td></tr>
<tr><td>Redis</td><td>Memcached</td><td>Redis มี Pub/Sub + data structures ที่เหมาะกว่า</td></tr>
<tr><td>WebSocket</td><td>Polling</td><td>WebSocket = push ทันที, polling = delay + overhead</td></tr>
</tbody>
</table>

<hr>

<h3>Problem 3: Data Lake สำหรับ 10 Sources</h3>

<h4>📝 โจทย์:</h4>
<p>"ออกแบบ Data Lake ที่รวมข้อมูลจาก 10 sources (3 databases, 4 APIs, 2 file uploads, 1 streaming) ให้ทีม Data Science, Analytics, และ ML ใช้"</p>

<h4>Step 2: High-Level Design</h4>
<pre><code class="language-text">┌─────────────────────────────────────────────────────┐
│                    SOURCES                           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌──────┐ │
│  │MySQL│ │Postgres│ │Mongo│ │APIs │ │Files│ │Kafka │ │
│  └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬───┘ │
└─────┼───────┼───────┼───────┼───────┼───────┼───────┘
      │       │       │       │       │       │
      ▼       ▼       ▼       ▼       ▼       ▼
┌─────────────────────────────────────────────────────┐
│              INGESTION LAYER                         │
│  ┌──────────┐  ┌───────────┐  ┌──────────────────┐  │
│  │ Airbyte  │  │  Custom   │  │  Pub/Sub +       │  │
│  │ (DB sync)│  │  Python   │  │  Dataflow        │  │
│  └──────────┘  └───────────┘  └──────────────────┘  │
└─────────────────────┬───────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────┐
│              DATA LAKE (GCS)                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  Bronze  │  │  Silver  │  │   Gold   │          │
│  │  (Raw)   │  │ (Cleaned)│  │(Enriched)│          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────┬───────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────┐
│              DATA WAREHOUSE (BigQuery)               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  raw_    │  │  staging  │  │analytics │          │
│  │  data    │  │  (dbt)    │  │  (dbt)   │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────┬───────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────────────┐
│              CONSUMERS                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │Looker    │  │Jupyter   │  │ML Model  │          │
│  │Studio    │  │Notebooks │  │Training  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└─────────────────────────────────────────────────────┘
</code></pre>

<h3>Batch vs Streaming</h3>
<table>
<thead><tr><th>Aspect</th><th>Batch Processing</th><th>Stream Processing</th></tr></thead>
<tbody>
<tr><td><strong>Latency</strong></td><td>นาที → ชั่วโมง</td><td>มิลลิวินาที → วินาที</td></tr>
<tr><td><strong>Data Size</strong></td><td>ประมวลผลก้อนใหญ่</td><td>ประมวลผลทีละ event</td></tr>
<tr><td><strong>Complexity</strong></td><td>ง่ายกว่า</td><td>ซับซ้อนกว่า (ordering, exactly-once)</td></tr>
<tr><td><strong>Cost</strong></td><td>ถูกกว่า (run ตาม schedule)</td><td>แพงกว่า (run ตลอด)</td></tr>
<tr><td><strong>Tools</strong></td><td>Airflow, dbt, Spark</td><td>Kafka, Flink, Dataflow, Pub/Sub</td></tr>
<tr><td><strong>Use Case</strong></td><td>Daily reports, ETL, ML training</td><td>Fraud detection, live dashboard, IoT</td></tr>
</tbody>
</table>

<h3>Lambda vs Kappa Architecture</h3>
<table>
<thead><tr><th>Aspect</th><th>Lambda Architecture</th><th>Kappa Architecture</th></tr></thead>
<tbody>
<tr><td><strong>Concept</strong></td><td>แยก Batch layer + Speed layer รวมที่ Serving layer</td><td>ทุกอย่างเป็น Stream (batch = bounded stream)</td></tr>
<tr><td><strong>ข้อดี</strong></td><td>Batch ให้ accuracy, Stream ให้ speed</td><td>สถาปัตยกรรมง่ายกว่า, codebase เดียว</td></tr>
<tr><td><strong>ข้อเสีย</strong></td><td>ต้อง maintain 2 codebases (batch + stream)</td><td>Stream processing ซับซ้อน, reprocessing ยาก</td></tr>
<tr><td><strong>เหมาะกับ</strong></td><td>ต้องการทั้ง real-time + accurate batch</td><td>Stream processing ตอบโจทย์ทุกอย่างได้</td></tr>
<tr><td><strong>Tools</strong></td><td>Spark (batch) + Flink (stream)</td><td>Kafka + Flink/Kafka Streams</td></tr>
</tbody>
</table>

<pre><code class="language-text">Lambda Architecture:
┌────────────┐     ┌───────────────┐
│  Source    │────▶│ Batch Layer   │──▶ Batch Views (accurate, slow)
│  Data      │     │ (Spark/BQ)    │          │
│            │     └───────────────┘          ▼
│            │                         ┌──────────────┐
│            │     ┌───────────────┐   │ Serving      │
│            │────▶│ Speed Layer   │──▶│ Layer        │──▶ Query
│            │     │ (Flink/Kafka) │   │ (merge both) │
└────────────┘     └───────────────┘   └──────────────┘

Kappa Architecture:
┌────────────┐     ┌───────────────┐     ┌──────────────┐
│  Source    │────▶│ Stream Layer  │────▶│ Serving      │──▶ Query
│  Data      │     │ (Kafka+Flink) │     │ Layer        │
└────────────┘     └───────────────┘     └──────────────┘
</code></pre>

<div class="warning-box">
❌ <strong>Common Mistakes ในการตอบ System Design:</strong><br>
1. <strong>กระโดดไป solution ทันที</strong> — ไม่ถาม requirements ก่อน = ออกแบบผิดทิศ<br>
2. <strong>Over-engineering</strong> — ใช้ Kafka สำหรับ 100 events/day (batch ก็พอ)<br>
3. <strong>ไม่พูดถึง trade-offs</strong> — ทุก design มีข้อเสีย ต้องพูดให้ผู้สัมภาษณ์เห็นว่ารู้<br>
4. <strong>ไม่คำนวณ capacity</strong> — ไม่บอกว่า data วันละเท่าไหร่ ต้องใช้ resource อะไร<br>
5. <strong>ลืม monitoring/alerting</strong> — production system ต้องมี observability
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ System Design</h4>
<ol>
<li><strong>Batch กับ Streaming เลือกใช้ตอนไหน?</strong><br>
Batch: T+1 acceptable, ข้อมูลก้อนใหญ่, ถูกกว่า (daily reports, ML training)<br>
Streaming: ต้อง real-time, fraud detection, live dashboard, IoT monitoring</li>
<li><strong>Lambda vs Kappa เลือกอันไหน?</strong><br>
Lambda: ต้องการทั้ง real-time + accurate batch data (แต่ complex กว่า)<br>
Kappa: stream processing ตอบโจทย์ทุกอย่างได้ ไม่ต้อง maintain 2 systems</li>
<li><strong>ถ้า pipeline ของคุณ handle data 100x มากขึ้น จะ design ต่างไปอย่างไร?</strong><br>
ต้องคิดเรื่อง: partitioning strategy, horizontal scaling, async processing, caching layer, data tiering (hot/warm/cold)</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>ออกแบบ Data Pipeline สำหรับ food delivery app ที่มี 50K orders/day — วาด architecture diagram + อธิบาย trade-offs</li>
<li>ออกแบบ Real-time Fraud Detection system ที่ต้อง flag suspicious transactions ภายใน 3 วินาที</li>
<li>ออกแบบ Data Lake สำหรับ hospital ที่มีข้อมูลจาก: HIS, Lab, Pharmacy, Insurance API — คำนึงถึง PDPA/HIPAA</li>
<li>เปรียบเทียบ Lambda vs Kappa architecture สำหรับ e-commerce recommendation system</li>
<li>คำนวณ capacity planning: ถ้ามี 5M users, แต่ละคน generate 20 events/day, แต่ละ event 500 bytes — ต้องใช้ storage เท่าไหร่ต่อปี?</li>
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

<h3>GitHub Portfolio — สร้างผลงานที่น่าสนใจ</h3>

<h4>README.md ที่ดีต้องมีอะไร?</h4>
<pre><code class="language-markdown"># 📊 Project Name — One-liner Description

![Python](https://img.shields.io/badge/Python-3.11-blue)
![Airflow](https://img.shields.io/badge/Airflow-2.8-green)
![BigQuery](https://img.shields.io/badge/BigQuery-GCP-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🎯 Overview
อธิบาย 2-3 ประโยค: project นี้ทำอะไร? แก้ปัญหาอะไร? ใช้ data อะไร?

## 🏗️ Architecture
![Architecture](docs/architecture.png)
_(วาดด้วย draw.io, Excalidraw, หรือ Mermaid)_

## 🛠️ Tech Stack
| Component | Technology |
|-----------|-----------|
| Orchestration | Airflow 2.8 |
| Warehouse | BigQuery |
| Transform | dbt Core 1.7 |
| Quality | Great Expectations |
| Container | Docker Compose |
| Language | Python 3.11, SQL |

## 📦 Data Model
\`\`\`
source → stg_orders → fct_daily_sales → Dashboard
source → stg_customers → dim_customers ↗
\`\`\`

## 🚀 Quick Start
\`\`\`bash
git clone https://github.com/you/project.git
cd project
cp .env.example .env
docker compose up -d
# Open http://localhost:8080 for Airflow UI
\`\`\`

## 📊 Dashboard
[Live Dashboard on Looker Studio](https://lookerstudio.google.com/xxx)
![Dashboard Screenshot](docs/dashboard.png)

## 📝 Key Decisions & Lessons Learned
1. เลือก X เพราะ Y (trade-off analysis)
2. เจอปัญหา A แก้ด้วย B
3. ถ้าทำใหม่จะเปลี่ยน C เป็น D เพราะ...

## 📧 Contact
**Your Name** — [LinkedIn](https://linkedin.com/in/you) — your@email.com
</code></pre>

<div class="tip-box">
💡 <strong>Portfolio Tips:</strong><br>
1. <strong>ควรมี 2-3 projects</strong> — ไม่ต้องเยอะ แต่ต้องลึก<br>
2. <strong>Project หลัก = End-to-End Pipeline</strong> — แสดงว่าทำได้ครบ loop<br>
3. <strong>Pin repositories</strong> — เลือก 6 repos ที่ดีที่สุดไว้หน้า GitHub profile<br>
4. <strong>มี architecture diagram</strong> — ภาพสื่อได้ดีกว่าข้อความ<br>
5. <strong>มี Dashboard screenshot</strong> — แสดง output ที่จับต้องได้<br>
6. <strong>เขียน Lessons Learned</strong> — แสดงว่าคุณคิดวิเคราะห์ได้ ไม่ใช่แค่ copy code
</div>

<h3>Resume สำหรับ Data Engineer</h3>

<div class="cheatsheet">
<h4>📋 Resume Format (1 หน้า)</h4>
<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                    ชื่อ นามสกุล                              │
│  📧 email@gmail.com | 📱 0xx-xxx-xxxx                      │
│  💼 linkedin.com/in/you | 🐙 github.com/you                │
├─────────────────────────────────────────────────────────────┤
│  SUMMARY (2-3 บรรทัด)                                      │
│  Data Engineer with 2 years of experience building          │
│  scalable data pipelines on GCP. Skilled in Python, SQL,    │
│  Airflow, dbt, and BigQuery.                                │
├─────────────────────────────────────────────────────────────┤
│  SKILLS                                                     │
│  Languages: Python, SQL, Bash                               │
│  Tools: Airflow, dbt, Docker, Git, Spark                   │
│  Cloud: GCP (BigQuery, GCS, Dataflow, Pub/Sub)             │
│  Databases: PostgreSQL, MongoDB, Redis                      │
├─────────────────────────────────────────────────────────────┤
│  EXPERIENCE                                                 │
│                                                             │
│  Data Engineer — Company ABC          Jan 2023 - Present    │
│  • Built ETL pipeline processing 2M events/day using        │
│    Airflow + BigQuery, reducing report latency by 80%       │
│  • Implemented dbt models (50+ models) with automated       │
│    testing, reducing data quality incidents by 60%           │
│  • Designed real-time dashboard using Pub/Sub + Dataflow,   │
│    serving 100+ internal users                              │
│  • Reduced BigQuery cost by 40% through partitioning,       │
│    clustering, and query optimization                       │
│                                                             │
│  Junior Developer — Company XYZ     Jun 2021 - Dec 2022     │
│  • Developed REST APIs using FastAPI, serving 50K req/day   │
│  • Wrote Python scripts to automate data extraction from    │
│    5 sources, saving 20 hours/week of manual work           │
├─────────────────────────────────────────────────────────────┤
│  PROJECTS                                                   │
│                                                             │
│  E-Commerce Data Pipeline (github.com/you/project)          │
│  • End-to-end pipeline: API → GCS → BigQuery → dbt →       │
│    Looker Studio, orchestrated by Airflow                   │
│  • Implemented data quality checks with Great Expectations  │
│  • Tech: Python, Airflow, dbt, BigQuery, Docker            │
├─────────────────────────────────────────────────────────────┤
│  EDUCATION                                                  │
│  B.Eng. Computer Engineering — มหาวิทยาลัย ABC  2021       │
│                                                             │
│  CERTIFICATIONS                                             │
│  • Google Cloud Professional Data Engineer (2024)           │
│  • dbt Analytics Engineering Certificate (2024)             │
└─────────────────────────────────────────────────────────────┘
</code></pre>
</div>

<div class="tip-box">
💡 <strong>Resume Tips:</strong><br>
1. <strong>ใช้ตัวเลข</strong> — "processing 2M events/day", "reduced cost by 40%", "50+ models"<br>
2. <strong>ใช้ action verbs</strong> — Built, Designed, Implemented, Optimized, Automated<br>
3. <strong>1 หน้าเท่านั้น</strong> — recruiter ใช้เวลาอ่าน resume แค่ 6-10 วินาที<br>
4. <strong>ปรับตาม JD</strong> — แต่ละตำแหน่งเน้น skill ที่ต่างกัน ปรับ resume ให้ตรง<br>
5. <strong>ไม่ต้องใส่ทุก skill</strong> — ใส่แค่ที่เกี่ยวข้องกับตำแหน่งที่สมัคร
</div>

<h3>25 คำถามสัมภาษณ์ Data Engineer พร้อมคำตอบ</h3>

<h4>🗃️ SQL (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>INNER JOIN กับ LEFT JOIN ต่างกันอย่างไร?</strong><br>
INNER JOIN: return เฉพาะ rows ที่ match ทั้ง 2 tables<br>
LEFT JOIN: return ทุก rows จากตาราง ซ้าย + match จากตารางขวา (ไม่ match = NULL)</li>

<li><strong>Window Functions ใช้ทำอะไร? ต่างจาก GROUP BY อย่างไร?</strong><br>
Window Functions คำนวณค่าข้าม rows โดยไม่ collapse rows เหมือน GROUP BY<br>
<code>ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)</code><br>
GROUP BY: 1 row per group | Window: ทุก row ยังอยู่ + เพิ่ม column คำนวณ</li>

<li><strong>CTE คืออะไร? ทำไมควรใช้?</strong><br>
CTE (Common Table Expression) = WITH clause — เหมือน subquery ที่ตั้งชื่อได้<br>
ทำให้ SQL อ่านง่าย, reuse logic, debug ง่าย (run CTE เดี่ยวได้)</li>

<li><strong>Indexing ทำงานอย่างไร? เมื่อไหร่ควรสร้าง Index?</strong><br>
Index = data structure (B-tree) ที่เร่ง lookup — เหมือนสารบัญหนังสือ<br>
ควรสร้าง: columns ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อย<br>
ไม่ควร: tables เล็ก, columns ที่ update บ่อย (index ต้อง rebuild)</li>

<li><strong>อธิบายความแตกต่างระหว่าง HAVING กับ WHERE</strong><br>
WHERE: filter rows ก่อน GROUP BY (ทำงานกับ raw rows)<br>
HAVING: filter groups หลัง GROUP BY (ทำงานกับ aggregate results)</li>
</ol>
</div>

<h4>🐍 Python (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>List กับ Tuple ต่างกันอย่างไร?</strong><br>
List: mutable (แก้ไขได้), ใช้ [] — เหมาะกับข้อมูลที่เปลี่ยนแปลง<br>
Tuple: immutable (แก้ไขไม่ได้), ใช้ () — เหมาะกับ constants, dict keys, เร็วกว่า list</li>

<li><strong>*args กับ **kwargs คืออะไร?</strong><br>
*args: รับ positional arguments จำนวนไม่จำกัด เป็น tuple<br>
**kwargs: รับ keyword arguments จำนวนไม่จำกัด เป็น dict<br>
<code>def func(*args, **kwargs): pass</code></li>

<li><strong>List Comprehension vs Generator Expression ต่างกันอย่างไร?</strong><br>
List Comprehension [x for x in range(1M)]: สร้าง list ทั้งก้อนใน memory<br>
Generator Expression (x for x in range(1M)): สร้างทีละตัว (lazy) ประหยัด memory<br>
ใช้ Generator เมื่อ data ใหญ่และ iterate ครั้งเดียว</li>

<li><strong>try/except ใน Python ใช้ยังไง? มี best practices อะไร?</strong><br>
ใช้ handle errors อย่าง graceful — catch specific exceptions (ไม่ใช่ bare except)<br>
<code>try: risky_operation() except ValueError as e: handle_error(e) finally: cleanup()</code></li>

<li><strong>Decorator คืออะไร? ใช้ทำอะไรใน Data Engineering?</strong><br>
Decorator = function ที่ wrap function อื่น เพื่อเพิ่ม functionality<br>
ใน DE ใช้: @retry (retry logic), @task (Airflow), @timer (logging), @cache (memoization)</li>
</ol>
</div>

<h4>📐 Data Modeling (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>Star Schema กับ Snowflake Schema ต่างกันอย่างไร?</strong><br>
Star: fact table ล้อมรอบด้วย denormalized dimension tables (ง่าย, query เร็ว)<br>
Snowflake: dimension tables ถูก normalize ออก (ประหยัด storage, complex joins)</li>

<li><strong>Fact Table กับ Dimension Table ต่างกันอย่างไร?</strong><br>
Fact: เก็บ events/transactions (measures ที่วัดได้) — orders, payments, clicks<br>
Dimension: เก็บ descriptive attributes — customers, products, time, location</li>

<li><strong>SCD Type 1, 2, 3 ต่างกันอย่างไร?</strong><br>
Type 1: Overwrite — เขียนทับค่าเก่า (ไม่เก็บ history)<br>
Type 2: Add new row — เพิ่ม row ใหม่พร้อม valid_from/valid_to (เก็บ history ครบ)<br>
Type 3: Add new column — เพิ่ม column current/previous (เก็บ history จำกัด)</li>

<li><strong>Normalization vs Denormalization เลือกใช้ตอนไหน?</strong><br>
Normalization (3NF): OLTP systems — ลด redundancy, write-optimized<br>
Denormalization: OLAP/DW — เพิ่ม redundancy, read-optimized, ลด JOINs</li>

<li><strong>Data Vault คืออะไร?</strong><br>
Modeling methodology ที่แยกเป็น: Hub (business keys), Link (relationships), Satellite (attributes + history)<br>
ข้อดี: audit trail ครบ, เพิ่ม source ง่าย, parallel loading | ข้อเสีย: complex, query ยาก</li>
</ol>
</div>

<h4>🏗️ System Design (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>ETL กับ ELT ต่างกันอย่างไร? เมื่อไหร่ใช้อะไร?</strong><br>
ETL: Transform ก่อน Load (traditional, on-premise) — ข้อมูลเข้า warehouse ที่ clean แล้ว<br>
ELT: Load ก่อน Transform (modern, cloud) — load raw ก่อน แล้ว transform ใน warehouse<br>
ปัจจุบัน ELT เป็นที่นิยมเพราะ cloud warehouse มี compute power สูง</li>

<li><strong>Data Lake กับ Data Warehouse ต่างกันอย่างไร?</strong><br>
Data Lake: เก็บ raw data ทุก format (structured + unstructured), schema-on-read<br>
Data Warehouse: เก็บ structured data ที่ transform แล้ว, schema-on-write, optimize for analytics</li>

<li><strong>CAP Theorem คืออะไร?</strong><br>
Distributed system เลือกได้แค่ 2 จาก 3: Consistency (ข้อมูลเหมือนกันทุก node), Availability (ตอบ request ได้เสมอ), Partition tolerance (ทำงานได้แม้ network แบ่ง)<br>
จริงๆ ต้องเลือกระหว่าง C กับ A เมื่อเกิด network partition</li>

<li><strong>ทำยังไงให้ pipeline เป็น Idempotent?</strong><br>
ใช้ WRITE_TRUNCATE (overwrite partition), MERGE/UPSERT ด้วย unique key, ใช้ execution_date เป็น partition key แทน CURRENT_DATE()</li>

<li><strong>Backfilling คืออะไร? ทำยังไง?</strong><br>
Backfilling = การ run pipeline ย้อนหลังสำหรับ data ที่ขาดหรือต้องการ reprocess<br>
ใน Airflow: <code>airflow dags backfill -s 2024-01-01 -e 2024-01-31 dag_id</code><br>
Pipeline ต้อง idempotent จึงจะ backfill ได้อย่างปลอดภัย</li>
</ol>
</div>

<h4>🤝 Behavioral (5 ข้อ)</h4>
<div class="interview-box">
<ol>
<li><strong>เล่าประสบการณ์ที่คุณแก้ปัญหา data issue ที่ซับซ้อน</strong><br>
ใช้ STAR method: Situation (สถานการณ์) → Task (หน้าที่) → Action (สิ่งที่ทำ) → Result (ผลลัพธ์)<br>
ตัวอย่าง: "เจอ data drift ใน production — revenue ลดลง 50% ปรากฏว่า upstream API เปลี่ยน format — แก้โดยเพิ่ม schema validation + alert system"</li>

<li><strong>ทำงานร่วมกับทีมที่ไม่ technical ยังไง?</strong><br>
"ใช้ภาษาที่เข้าใจง่าย หลีกเลี่ยงศัพท์เทคนิค ให้ตัวอย่างที่จับต้องได้ เช่น แทนที่จะพูดว่า 'partitioned table' ก็พูดว่า 'แบ่งข้อมูลเป็นลิ้นชักตามวันที่ เปิดแค่ลิ้นชักที่ต้องการ'"</li>

<li><strong>ทำยังไงเมื่อ deadline จำกัด แต่งานเยอะ?</strong><br>
"Prioritize ตาม impact — ทำ MVP ก่อน, สื่อสารกับ stakeholder ว่าอะไรทำได้/ไม่ได้ภายใน deadline, ตัด scope ที่ไม่จำเป็น"</li>

<li><strong>เคย fail ในงาน DE ไหม? เรียนรู้อะไร?</strong><br>
"เคย deploy pipeline ที่ไม่ idempotent — run ซ้ำแล้ว data duplicate — เรียนรู้ว่าต้อง design for re-runnability ตั้งแต่ต้น"</li>

<li><strong>ทำไมอยากเป็น Data Engineer?</strong><br>
ตอบจากใจจริง + แสดงว่าเข้าใจ role — "ชอบการสร้าง infrastructure ที่ scale ได้, ชอบแก้ปัญหา data ที่ซับซ้อน, ชอบเห็น impact ของ data ต่อ business decisions"</li>
</ol>
</div>

<h3>เตรียมตัวสอบ Technical</h3>
<table>
<thead><tr><th>Platform</th><th>ใช้เตรียมอะไร</th><th>แนะนำ</th></tr></thead>
<tbody>
<tr><td><strong>LeetCode</strong></td><td>SQL problems (Easy-Medium)</td><td>ทำ Database section 50+ ข้อ</td></tr>
<tr><td><strong>HackerRank</strong></td><td>SQL + Python challenges</td><td>ทำ SQL (Medium), Python (Easy-Medium)</td></tr>
<tr><td><strong>DataLemur</strong></td><td>SQL interview questions จาก FAANG</td><td>ฟรี, เน้น window functions + CTEs</td></tr>
<tr><td><strong>StrataScratch</strong></td><td>Real interview questions</td><td>มี Python + SQL questions จากบริษัทจริง</td></tr>
<tr><td><strong>Mode Analytics</strong></td><td>SQL tutorial + practice</td><td>Free SQL course ที่ดีมาก</td></tr>
</tbody>
</table>

<div class="tip-box">
💡 <strong>แนะนำแผนเตรียมตัว 4 สัปดาห์:</strong><br>
<strong>สัปดาห์ 1-2:</strong> SQL 3 ข้อ/วัน (LeetCode Easy → Medium) + ทบทวน Python basics<br>
<strong>สัปดาห์ 3:</strong> System Design 1 problem/วัน + ทบทวน Data Modeling concepts<br>
<strong>สัปดาห์ 4:</strong> Mock interviews + Polish portfolio + เตรียม Behavioral questions (STAR method)
</div>

<h3>เงินเดือน Data Engineer ในไทย (2024-2025)</h3>
<table>
<thead><tr><th>Level</th><th>ประสบการณ์</th><th>เงินเดือน (บาท/เดือน)</th><th>สิ่งที่คาดหวัง</th></tr></thead>
<tbody>
<tr><td>Junior</td><td>0-2 ปี</td><td>25,000 - 50,000</td><td>SQL, Python, basic ETL, เรียนรู้เร็ว</td></tr>
<tr><td>Mid</td><td>2-4 ปี</td><td>50,000 - 90,000</td><td>Airflow, dbt, Cloud, data modeling</td></tr>
<tr><td>Senior</td><td>4-7 ปี</td><td>80,000 - 150,000</td><td>System design, mentoring, architecture</td></tr>
<tr><td>Lead/Staff</td><td>7+ ปี</td><td>120,000 - 200,000+</td><td>Tech strategy, team leadership</td></tr>
</tbody>
</table>
<p><em>* ตัวเลขเป็นช่วงประมาณ ขึ้นกับบริษัท ทักษะ และ location (กรุงเทพฯ สูงกว่าต่างจังหวัด)</em></p>

<div class="tip-box">
💡 <strong>Tips ต่อรองเงินเดือน:</strong><br>
1. <strong>ทำการบ้าน</strong> — รู้ range ของตลาด (Glassdoor, JobsDB, กลุ่ม Facebook DE ไทย)<br>
2. <strong>อย่าบอกเงินเดือนปัจจุบัน</strong> — บอก range ที่คาดหวังแทน<br>
3. <strong>เน้น value ที่คุณจะสร้าง</strong> — "ผมสามารถ optimize pipeline ลด cost ได้ 40%"<br>
4. <strong>ต่อรอง total package</strong> — เงินเดือน + bonus + สวัสดิการ + WFH + ค่าเรียน<br>
5. <strong>ให้มี offer อื่นเปรียบเทียบ</strong> — leverage ที่ดีที่สุดคือ competing offers<br>
6. <strong>อย่ากลัวที่จะบอก "ขอคิดก่อน"</strong> — อย่ารีบตอบรับ ให้เวลาตัวเองคิด
</div>

<div class="warning-box">
❌ <strong>ข้อผิดพลาดในการสมัครงาน:</strong><br>
1. <strong>ส่ง resume เหมือนกันทุกที่</strong> — ต้องปรับตาม JD ของแต่ละตำแหน่ง<br>
2. <strong>GitHub ว่าง</strong> — ไม่มี project ให้ดู = ไม่มี proof of skill<br>
3. <strong>ไม่เตรียม behavioral questions</strong> — คิดว่าแค่ technical ก็พอ (ไม่จริง!)<br>
4. <strong>ไม่ถามคำถามกลับ</strong> — ตอนท้ายสัมภาษณ์ต้องถามเกี่ยวกับทีม tech stack challenges<br>
5. <strong>Oversell ตัวเอง</strong> — บอกว่าเก่งทุกอย่าง แต่ถามลึกตอบไม่ได้ = ตกทันที<br>
6. <strong>ไม่ follow up</strong> — ส่ง thank you email หลังสัมภาษณ์ภายใน 24 ชั่วโมง
</div>

<h3>คำถามที่ควรถามผู้สัมภาษณ์กลับ</h3>
<div class="interview-box">
<h4>🎤 คำถามกลับที่แสดงว่าคิดเป็น:</h4>
<ol>
<li>"ทีม Data Engineering มี stack อะไรบ้าง? กำลังจะ migrate ไปอะไรไหม?"</li>
<li>"Data pipeline ที่ซับซ้อนที่สุดในทีมเป็นแบบไหน?"</li>
<li>"ถ้า data quality issue เกิดขึ้น process ในการ handle เป็นยังไง?"</li>
<li>"ทีมมี on-call rotation ไหม? ถ้า pipeline fail ตอนกลางคืนทำยังไง?"</li>
<li>"สิ่งที่ท้าทายที่สุดของทีม DE ตอนนี้คืออะไร?"</li>
<li>"มี budget สำหรับ learning & development (เช่น conference, certification) ไหม?"</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
<li>สร้าง GitHub Portfolio ที่มี 3 projects: (1) E2E Pipeline (2) SQL Analysis (3) Python ETL script — แต่ละ project มี README ที่ดี</li>
<li>เขียน Resume 1 หน้า โดยใช้ format ด้านบน ใส่ตัวเลขให้มากที่สุด</li>
<li>ทำ LeetCode SQL 30 ข้อ (10 Easy + 15 Medium + 5 Hard) ภายใน 2 สัปดาห์</li>
<li>ฝึกตอบ Behavioral questions 5 ข้อ ด้วย STAR method — เขียนคำตอบก่อน แล้วซ้อมพูด</li>
<li>Mock interview กับเพื่อน: คนหนึ่งเป็นผู้สัมภาษณ์ถาม System Design + SQL + Behavioral</li>
</ol>
</div>
`
  }
];
