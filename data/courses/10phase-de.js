export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🎯',
    title: 'ภาพรวม — 1 Page Summary',
    content: `
<h2>🎯 เส้นทางการเป็น Data Engineer</h2>

<p><strong>Data Engineer</strong> คือคนที่ <strong>"สร้างระบบ"</strong> ให้ข้อมูลไหลจากต้นทาง (Source) ไปยังปลายทาง (Destination) ได้อย่าง <strong>เสถียร, ถูกต้อง, ทันเวลา</strong> และ <strong>scale ได้</strong></p>

<h3>🔑 หน้าที่หลักของ Data Engineer</h3>
<ul>
  <li>🏗️ <strong>สร้าง Data Pipeline</strong> — ระบบที่ดึง, แปลง, และส่งข้อมูลอัตโนมัติ</li>
  <li>📦 <strong>ออกแบบ Data Storage</strong> — เลือกว่าจะเก็บข้อมูลที่ไหน อย่างไร</li>
  <li>⚡ <strong>ดูแล Performance</strong> — ให้ระบบรันเร็ว ไม่ล่ม ไม่ค้าง</li>
  <li>🔒 <strong>จัดการ Data Quality</strong> — ข้อมูลต้องถูกต้อง ครบถ้วน ไม่ซ้ำ</li>
  <li>🤝 <strong>ทำงานร่วมกับทีม</strong> — Data Analyst, Data Scientist, Business</li>
</ul>

<h3>💰 เงินเดือน Data Engineer ในไทย (2024-2025)</h3>
<table>
  <tr><th>ระดับ</th><th>เงินเดือน</th></tr>
  <tr><td>Junior (0-2 ปี)</td><td>25,000 - 50,000 บาท</td></tr>
  <tr><td>Mid (2-5 ปี)</td><td>50,000 - 100,000 บาท</td></tr>
  <tr><td>Senior (5+ ปี)</td><td>100,000 - 200,000+ บาท</td></tr>
</table>

<div class="tip-box">💡 Data Engineer เป็นตำแหน่งที่ <strong>ขาดแคลนมากที่สุด</strong> ในสาย Data ของไทย ความต้องการเพิ่มขึ้นทุกปี!</div>

<h3>🗺️ 10 Phase ที่จะเรียน</h3>
<table>
  <tr><th>Phase</th><th>หัวข้อ</th><th>ระดับ</th></tr>
  <tr><td>0</td><td>จุดเริ่มต้น & Career Overview</td><td>เริ่มต้น</td></tr>
  <tr><td>1</td><td>SQL Fundamentals</td><td>เริ่มต้น</td></tr>
  <tr><td>2</td><td>Python for Data Engineering</td><td>เริ่มต้น-กลาง</td></tr>
  <tr><td>3</td><td>Storage Fundamentals</td><td>กลาง</td></tr>
  <tr><td>4</td><td>Compute Fundamentals</td><td>กลาง</td></tr>
  <tr><td>5</td><td>ETL / ELT Pipelines</td><td>กลาง</td></tr>
  <tr><td>6</td><td>Orchestration</td><td>กลาง-สูง</td></tr>
  <tr><td>7</td><td>Infra Basics</td><td>กลาง</td></tr>
  <tr><td>8</td><td>Data Modeling</td><td>กลาง-สูง</td></tr>
  <tr><td>9</td><td>Portfolio & Getting Hired</td><td>ทุกระดับ</td></tr>
</table>

<div class="tip-box">💡 <strong>แนะนำ:</strong> เรียนตามลำดับ Phase จะเข้าใจง่ายที่สุด แต่ถ้ามีพื้นฐานแล้ว สามารถข้ามไปบทที่สนใจได้เลย!</div>
`,
  },
  {
    number: 1,
    slug: 'career-overview',
    emoji: '📌',
    title: 'จุดเริ่มต้น & Career Overview',
    content: `
<h2>📌 DE คืออะไร? ทำอะไร? ต่างจากสายอื่นยังไง?</h2>

<p>ก่อนจะเริ่มเรียนเทคนิคใดๆ เราต้องเข้าใจก่อนว่า <strong>Data Engineer (DE)</strong> คือใคร ทำงานอะไร และต่างจากสาย Data อื่นๆ ยังไง</p>

<h3>🔍 Data Engineer vs สายอื่น</h3>
<table>
  <tr><th></th><th>Data Engineer</th><th>Data Analyst</th><th>Data Scientist</th></tr>
  <tr><td><strong>หน้าที่หลัก</strong></td><td>สร้างระบบข้อมูล</td><td>วิเคราะห์ข้อมูล</td><td>สร้างโมเดล ML</td></tr>
  <tr><td><strong>เครื่องมือ</strong></td><td>Python, SQL, Airflow, Spark</td><td>SQL, Tableau, Excel</td><td>Python, TensorFlow</td></tr>
  <tr><td><strong>Output</strong></td><td>Pipeline, Data Warehouse</td><td>Dashboard, Report</td><td>ML Model</td></tr>
  <tr><td><strong>เปรียบเทียบ</strong></td><td>🔧 ช่างประปา (วางท่อน้ำ)</td><td>🚿 ผู้ใช้น้ำ (เปิดก๊อก)</td><td>🔬 นักวิทย์ (วิเคราะห์น้ำ)</td></tr>
</table>

<h3>🗺️ Roadmap แนะนำ</h3>
<pre><code>เดือน 1-2:  SQL + Python พื้นฐาน
เดือน 3-4:  Storage + ETL Concepts
เดือน 5-6:  Airflow + Docker + Cloud
เดือน 7-8:  Data Modeling + dbt
เดือน 9-10: Portfolio + สัมภาษณ์</code></pre>

<h3>✅ Mindset ที่ต้องมี</h3>
<ul>
  <li><strong>คิดแบบ Production</strong> — ไม่ใช่แค่รันได้บน Notebook แต่ต้องรัน 24/7 ได้</li>
  <li><strong>คิดแบบ Scale</strong> — ถ้าข้อมูล x100 เท่า ระบบยังรับไหวไหม?</li>
  <li><strong>คิดแบบ Cost-aware</strong> — Cloud คิดเงินทุก query, ทุก byte ที่ process</li>
  <li><strong>คิดแบบ Debug</strong> — เมื่อระบบพัง ต้องหาสาเหตุได้เร็ว</li>
</ul>

<div class="warning-box">⚠️ <strong>หลุมพราง:</strong> หลายคนเริ่มจากเรียนเครื่องมือมากมาย (Spark, Kafka, Airflow) โดยไม่เข้าใจ "ทำไม" — ให้เริ่มจากเข้าใจปัญหาธุรกิจก่อนเสมอ</div>

<h3>📚 ทรัพยากรที่ต้องมี</h3>
<ul>
  <li>คอมพิวเตอร์ที่รัน Docker ได้ (RAM 8GB+)</li>
  <li>อินเทอร์เน็ต</li>
  <li>Cloud Free Tier (GCP / AWS)</li>
  <li>GitHub Account</li>
</ul>
`,
  },
  {
    number: 2,
    slug: 'sql-fundamentals',
    emoji: '🗄️',
    title: 'SQL Fundamentals',
    content: `
<h2>🗄️ เขียน SQL ได้ระดับมืออาชีพ</h2>

<p>SQL คือ <strong>"ภาษาแม่"</strong> ของ Data Engineer ไม่ว่าจะใช้เครื่องมืออะไร (Spark, dbt, Airflow) ล้วนต้องใช้ SQL เป็นพื้นฐาน <strong>ทุกสัมภาษณ์ DE จะถาม SQL</strong></p>

<h3>1.1 JOIN — การรวมตาราง</h3>
<p>ข้อมูลจริงไม่เคยอยู่ในตารางเดียว ต้อง JOIN กันเสมอ</p>

<pre><code>-- INNER JOIN: เอาเฉพาะที่ match กันทั้ง 2 ตาราง
SELECT o.order_id, c.customer_name, o.total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- LEFT JOIN: เอาทั้งหมดจากตารางซ้าย + match จากขวา
SELECT c.customer_name, COUNT(o.order_id) AS total_orders
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.customer_name;

-- FULL OUTER JOIN: เอาทั้งหมดจากทั้ง 2 ตาราง
SELECT COALESCE(a.date, b.date) AS date,
       a.revenue, b.expense
FROM revenue a
FULL OUTER JOIN expenses b ON a.date = b.date;</code></pre>

<div class="tip-box">💡 ในงาน DE จริง <strong>LEFT JOIN</strong> ใช้บ่อยที่สุด เพราะเราต้องการข้อมูลทั้งหมดจากตารางหลัก</div>

<h3>1.2 Window Functions</h3>
<p>ใช้คำนวณ ranking, running total โดยไม่ต้อง GROUP BY</p>

<pre><code>-- ROW_NUMBER: ใส่ลำดับให้แต่ละแถว
SELECT employee_name, department, salary,
  ROW_NUMBER() OVER (
    PARTITION BY department ORDER BY salary DESC
  ) AS rank_in_dept
FROM employees;

-- LAG / LEAD: เปรียบเทียบกับแถวก่อน/หลัง
SELECT date, revenue,
  LAG(revenue, 1) OVER (ORDER BY date) AS prev_day,
  revenue - LAG(revenue, 1) OVER (ORDER BY date) AS daily_change
FROM daily_sales;

-- Running Total (ยอดสะสม)
SELECT date, amount,
  SUM(amount) OVER (
    ORDER BY date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total
FROM transactions;</code></pre>

<h3>1.3 CTE (Common Table Expression)</h3>
<pre><code>WITH monthly_sales AS (
  SELECT DATE_TRUNC('month', order_date) AS month,
         SUM(total) AS revenue
  FROM orders GROUP BY 1
),
growth AS (
  SELECT month, revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month,
    ROUND((revenue - LAG(revenue) OVER (ORDER BY month)) /
      NULLIF(LAG(revenue) OVER (ORDER BY month), 0) * 100, 2) AS growth_pct
  FROM monthly_sales
)
SELECT * FROM growth WHERE growth_pct > 10;</code></pre>

<h3>1.4 EXPLAIN & Index</h3>
<pre><code>-- ดูว่า Database วางแผนรัน query ยังไง
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 12345;
-- ถ้าเห็น "Seq Scan" = scan ทั้งตาราง (ช้า!)
-- ถ้าเห็น "Index Scan" = ใช้ index (เร็ว!)

-- สร้าง Index ให้ query เร็วขึ้น 100 เท่า
CREATE INDEX idx_orders_customer_date
ON orders (customer_id, order_date);</code></pre>

<div class="warning-box">⚠️ Index ไม่ใช่ยิ่งเยอะยิ่งดี! ทุก Index จะทำให้ INSERT/UPDATE ช้าลง เพราะ Database ต้อง update Index ด้วย</div>
`,
  },
  {
    number: 3,
    slug: 'python-de',
    emoji: '🐍',
    title: 'Python for Data Engineering',
    content: `
<h2>🐍 เขียน Python แบบ Production-ready</h2>

<p>Python คือ <strong>"มีดสวิส"</strong> ของ DE — ใช้ได้ทุกอย่างตั้งแต่ scripting, ETL, integration จนถึง PySpark</p>

<h3>2.1 File Handling — อ่านไฟล์ขนาดใหญ่</h3>
<pre><code>import csv

# ✅ อ่านทีละบรรทัด ไม่ว่า 100GB ก็รับได้
def process_large_csv(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        batch = []
        for i, row in enumerate(reader):
            batch.append(row)
            if len(batch) >= 10000:
                process_batch(batch)
                batch = []
                print(f"Processed {i+1:,} rows...")
        if batch:
            process_batch(batch)</code></pre>

<div class="warning-box">⚠️ <strong>ห้ามทำแบบนี้!</strong> <code>data = open('huge_file.csv').readlines()</code> — RAM จะระเบิดถ้าไฟล์ใหญ่</div>

<h3>2.2 API Integration — ดึงข้อมูลจาก REST API</h3>
<pre><code>import requests
from time import sleep

def fetch_with_retry(url, max_retries=3):
    """ดึงข้อมูลจาก API พร้อม retry logic"""
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            wait_time = 2 ** attempt  # exponential backoff
            print(f"⚠️ Attempt {attempt+1} failed: {e}")
            sleep(wait_time)
    raise Exception(f"❌ Failed after {max_retries} attempts")

# ดึงข้อมูล paginated API
def fetch_all_pages(base_url, headers):
    all_data = []
    page = 1
    while True:
        data = fetch_with_retry(f"{base_url}?page={page}&limit=100")
        if not data['results']:
            break
        all_data.extend(data['results'])
        page += 1
    return all_data</code></pre>

<h3>2.3 Error Handling</h3>
<pre><code>import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler(f'pipeline_{datetime.now():%Y%m%d}.log'),
        logging.StreamHandler()
    ])
logger = logging.getLogger(__name__)

def safe_transform(record):
    try:
        return {
            'id': record['id'],
            'amount': float(record.get('amount', 0)),
            'status': record.get('status', 'unknown').lower(),
        }
    except (ValueError, KeyError) as e:
        logger.warning(f"⚠️ Bad record: {record.get('id')} | {e}")
        return None</code></pre>

<h3>2.4 Database Connector</h3>
<pre><code>import psycopg2
from contextlib import contextmanager

@contextmanager
def get_db_connection():
    conn = psycopg2.connect(
        host="localhost", database="warehouse",
        user="etl_user", password="secret"
    )
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()

def bulk_insert(table, records, batch_size=5000):
    """Insert ทีละ batch เร็วกว่าทีละแถว 100x"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            for i in range(0, len(records), batch_size):
                batch = records[i:i+batch_size]
                args = ','.join(cur.mogrify(
                    "(%s, %s, %s)", (r['id'], r['name'], r['value'])
                ).decode() for r in batch)
                cur.execute(f"INSERT INTO {table} VALUES {args}")</code></pre>

<div class="tip-box">💡 <strong>Best Practice:</strong> ใช้ <code>@contextmanager</code> สำหรับ database connection เสมอ — ป้องกัน connection leak!</div>
`,
  },
  {
    number: 4,
    slug: 'storage',
    emoji: '💾',
    title: 'Storage Fundamentals',
    content: `
<h2>💾 เข้าใจว่าข้อมูลเก็บที่ไหน ในรูปแบบไหน</h2>

<h3>3.1 OLTP vs OLAP</h3>
<table>
  <tr><th></th><th>OLTP</th><th>OLAP</th></tr>
  <tr><td><strong>ใช้ทำอะไร</strong></td><td>ธุรกรรม (สั่งซื้อ, จ่ายเงิน)</td><td>วิเคราะห์ (รายงาน, Dashboard)</td></tr>
  <tr><td><strong>ลักษณะ Query</strong></td><td>INSERT/UPDATE ทีละแถว</td><td>SELECT + GROUP BY ล้านแถว</td></tr>
  <tr><td><strong>ความเร็ว</strong></td><td>ตอบสนองเร็ว (ms)</td><td>วิเคราะห์เร็ว (วินาที-นาที)</td></tr>
  <tr><td><strong>ตัวอย่าง</strong></td><td>MySQL, PostgreSQL</td><td>BigQuery, Snowflake</td></tr>
</table>

<div class="warning-box">⛔ <strong>กฎเหล็ก:</strong> ห้ามรัน Analytics Query บน OLTP Database! มันจะ lock ตาราง ทำให้ระบบธุรกรรมค้าง</div>

<h3>3.2 Warehouse vs Lake vs Lakehouse</h3>
<pre><code>Data Warehouse (คลังสินค้าเรียบร้อย)
├── Schema-on-Write, ข้อมูล clean แล้ว
├── Query เร็วมาก
└── เช่น: BigQuery, Snowflake, Redshift

Data Lake (ทะเลสาบเก็บทุกอย่าง)
├── Schema-on-Read, ข้อมูลดิบทุกรูปแบบ
├── ราคาถูกมาก (Object Storage)
└── เช่น: S3, GCS, ADLS

Data Lakehouse (ดีที่สุดจากทั้ง 2 โลก)
├── ACID transactions บน file storage
├── Open format (ไม่ vendor lock-in)
└── เช่น: Delta Lake, Apache Iceberg</code></pre>

<h3>3.3 File Formats</h3>
<table>
  <tr><th>Format</th><th>ชนิด</th><th>ใช้เมื่อ</th><th>ข้อดี</th></tr>
  <tr><td><strong>CSV</strong></td><td>Row-based</td><td>ส่ง/รับง่ายๆ</td><td>มนุษย์อ่านได้</td></tr>
  <tr><td><strong>JSON</strong></td><td>Semi-structured</td><td>API, log</td><td>ยืดหยุ่นสูง</td></tr>
  <tr><td><strong>Parquet</strong></td><td>Column-based</td><td>Analytics</td><td>เร็ว, บีบอัดดี</td></tr>
  <tr><td><strong>Avro</strong></td><td>Row + Schema</td><td>Streaming</td><td>Schema evolution</td></tr>
</table>

<h3>3.4 Partitioning</h3>
<pre><code>data/
├── year=2024/
│   ├── month=01/
│   │   ├── day=01/part-00000.parquet
│   │   └── day=02/part-00000.parquet
│   ├── month=02/
│   └── ...

# Query WHERE date = '2024-01-15'
# อ่านแค่ folder เดียว แทน scan ข้อมูลทั้ง TB!</code></pre>

<div class="tip-box">💡 <strong>เลือก Partition Key ยังไง?</strong> ใช้ column ที่ถูก filter บ่อยที่สุด เช่น วันที่, region, customer_type</div>
`,
  },
  {
    number: 5,
    slug: 'compute',
    emoji: '⚡',
    title: 'Compute Fundamentals',
    content: `
<h2>⚡ Batch vs Streaming, เมื่อไหร่ใช้อะไร</h2>

<h3>4.1 Batch vs Streaming</h3>
<table>
  <tr><th></th><th>Batch Processing</th><th>Stream Processing</th></tr>
  <tr><td><strong>เมื่อไหร่?</strong></td><td>ทุกชั่วโมง / ทุกวัน</td><td>เรียลไทม์ (วินาที)</td></tr>
  <tr><td><strong>เครื่องมือ</strong></td><td>Spark, dbt, SQL</td><td>Kafka, Flink, Spark Streaming</td></tr>
  <tr><td><strong>ตัวอย่าง</strong></td><td>Daily report, monthly billing</td><td>Fraud detection, live dashboard</td></tr>
  <tr><td><strong>Complexity</strong></td><td>ต่ำ-กลาง</td><td>กลาง-สูง</td></tr>
  <tr><td><strong>Cost</strong></td><td>จ่ายตาม batch</td><td>จ่ายตลอด 24/7</td></tr>
</table>

<div class="tip-box">💡 <strong>กฎง่ายๆ:</strong> เริ่มจาก Batch ก่อนเสมอ! 90% ของ use case ไม่ต้องการ real-time จริงๆ</div>

<h3>4.2 Apache Spark — Big Data Processing</h3>
<pre><code>from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, count, avg

spark = SparkSession.builder \\
    .appName("SalesAnalysis") \\
    .config("spark.sql.adaptive.enabled", "true") \\
    .getOrCreate()

# อ่าน Parquet (เร็วกว่า CSV 10-100x)
df = spark.read.parquet("gs://data-lake/sales/year=2024/")

result = (df
    .filter(col("status") == "completed")
    .groupBy("product_category", "region")
    .agg(
        sum("revenue").alias("total_revenue"),
        count("order_id").alias("total_orders"),
        avg("revenue").alias("avg_order_value")
    )
    .orderBy(col("total_revenue").desc())
)

result.write \\
    .mode("overwrite") \\
    .partitionBy("region") \\
    .parquet("gs://data-warehouse/sales_summary/")</code></pre>

<h3>4.3 Apache Kafka — Real-time Streaming</h3>
<pre><code>from confluent_kafka import Producer, Consumer
import json

# Producer: ส่งข้อมูลเข้า Kafka
producer = Producer({'bootstrap.servers': 'kafka:9092'})
producer.produce('transactions', key='tx001',
                 value=json.dumps({'amount': 5000, 'type': 'purchase'}))
producer.flush()

# Consumer: รับข้อมูลจาก Kafka แบบ real-time
consumer = Consumer({
    'bootstrap.servers': 'kafka:9092',
    'group.id': 'fraud-detection-group',
    'auto.offset.reset': 'latest'
})
consumer.subscribe(['transactions'])

while True:
    msg = consumer.poll(timeout=1.0)
    if msg and not msg.error():
        transaction = json.loads(msg.value())
        if is_suspicious(transaction):
            alert_fraud_team(transaction)</code></pre>

<div class="warning-box">⚠️ <strong>อย่า over-engineer!</strong> ถ้า business ต้องการรายงานวันละครั้ง ไม่ต้องใช้ Kafka — ใช้ Airflow + SQL ก็พอ</div>
`,
  },
  {
    number: 6,
    slug: 'etl-pipeline',
    emoji: '🔄',
    title: 'ETL / ELT Pipelines',
    content: `
<h2>🔄 สร้าง Data Pipeline แบบมืออาชีพ</h2>

<h3>5.1 ETL vs ELT</h3>
<table>
  <tr><th></th><th>ETL</th><th>ELT ⭐</th></tr>
  <tr><td><strong>ลำดับ</strong></td><td>Extract → Transform → Load</td><td>Extract → Load → Transform</td></tr>
  <tr><td><strong>ยุค</strong></td><td>แบบดั้งเดิม (On-premise)</td><td>แบบสมัยใหม่ (Cloud)</td></tr>
  <tr><td><strong>ข้อดี</strong></td><td>ข้อมูลใน Warehouse สะอาด</td><td>เร็ว, ยืดหยุ่น</td></tr>
  <tr><td><strong>ข้อเสีย</strong></td><td>Transform ช้า, ไม่ยืดหยุ่น</td><td>Warehouse ต้องใหญ่</td></tr>
</table>

<div class="tip-box">💡 ปี 2024-2025 <strong>ELT เป็นมาตรฐาน</strong> เพราะ Cloud Warehouse อย่าง BigQuery มีพลัง transform สูงมาก ราคาถูก</div>

<h3>5.2 Medallion Architecture (Bronze / Silver / Gold)</h3>
<pre><code>🥉 Bronze Layer (Raw)
├── ข้อมูลดิบจาก source ไม่แก้ไขอะไรเลย
├── เก็บทุกอย่างไว้ สำหรับ audit / replay
└── Format: JSON, CSV, Parquet as-is

🥈 Silver Layer (Cleaned)
├── ลบ duplicate, แก้ค่า null, standardize format
├── Join ข้อมูลจากหลาย source
└── พร้อมใช้งานสำหรับ analyst

🥇 Gold Layer (Business)
├── Aggregate, summarize ตาม business logic
├── พร้อมสำหรับ Dashboard, Report, ML Model
└── Format: Fact & Dimension tables</code></pre>

<h3>5.3 Data Quality</h3>
<pre><code>def validate_sales_data(df):
    """Data Quality Checks ก่อน load เข้า Gold Layer"""
    checks = [
        df['order_id'].notnull().all(),     # ห้ามว่าง
        (df['amount'] > 0).all(),            # ราคา > 0
        df['order_id'].is_unique,            # ไม่ซ้ำ
        len(df) > 0,                         # มีข้อมูล
    ]

    if all(checks):
        logger.info("✅ Data quality checks passed!")
        return True
    else:
        logger.error("❌ Data quality checks FAILED!")
        alert_data_team()
        return False</code></pre>

<h3>5.4 Incremental Load</h3>
<pre><code>-- ✅ เอาเฉพาะข้อมูลใหม่/อัพเดท (ไม่ full refresh)
MERGE INTO target_table t
USING (
  SELECT * FROM source_table
  WHERE updated_at > (SELECT MAX(updated_at) FROM target_table)
) s
ON t.id = s.id
WHEN MATCHED THEN
  UPDATE SET t.name = s.name, t.amount = s.amount
WHEN NOT MATCHED THEN
  INSERT (id, name, amount) VALUES (s.id, s.name, s.amount);</code></pre>

<div class="warning-box">⚠️ <strong>Full Load</strong> (TRUNCATE + INSERT) ง่ายกว่า แต่ช้ามากเมื่อข้อมูลเยอะ — ใช้ Incremental Load สำหรับตารางที่มี 1M+ rows</div>
`,
  },
  {
    number: 7,
    slug: 'orchestration',
    emoji: '⚙️',
    title: 'Orchestration',
    content: `
<h2>⚙️ จัดการ Pipeline ให้ทำงานอัตโนมัติ</h2>

<h3>6.1 DAG — Directed Acyclic Graph</h3>
<p><strong>DAG</strong> คือ "แผนผังงาน" ที่กำหนดว่า task ไหนต้องทำก่อน/หลัง — ไม่มี cycle, ไหลไปทางเดียว</p>

<pre><code>extract_api → transform_data → load_warehouse → notify_team
                                      ↓
                              run_data_quality</code></pre>

<h3>6.2 Apache Airflow</h3>
<pre><code>from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'email_on_failure': True,
    'email': ['data-team@company.com'],
}

with DAG(
    dag_id='daily_sales_pipeline',
    description='ดึงข้อมูลยอดขายรายวัน',
    schedule='0 6 * * *',  # ทุกวัน 6:00 AM
    start_date=datetime(2024, 1, 1),
    catchup=False,
    default_args=default_args,
    tags=['production', 'sales'],
) as dag:

    extract = PythonOperator(
        task_id='extract_from_api',
        python_callable=extract_sales_data,
    )
    transform = PythonOperator(
        task_id='transform_and_clean',
        python_callable=transform_data,
    )
    quality_check = PythonOperator(
        task_id='data_quality_check',
        python_callable=run_quality_checks,
    )
    load = PythonOperator(
        task_id='load_to_warehouse',
        python_callable=load_to_bigquery,
    )
    notify = BashOperator(
        task_id='notify_slack',
        bash_command='curl -X POST -d "Pipeline สำเร็จ!" $SLACK_WEBHOOK',
    )

    # กำหนดลำดับ
    extract >> transform >> quality_check >> load >> notify</code></pre>

<h3>6.3 Backfill — ย้อนรัน Pipeline</h3>
<pre><code># Pipeline วันที่ 15-20 มกราคม ล้มเหลว? ย้อนรันได้!
airflow dags backfill daily_sales_pipeline \\
    --start-date 2024-01-15 \\
    --end-date 2024-01-20</code></pre>

<div class="tip-box">💡 <strong>สำคัญ:</strong> Tasks ต้องเป็น <strong>idempotent</strong> — รันซ้ำกี่ครั้งก็ได้ผลลัพธ์เหมือนเดิม ไม่เกิดข้อมูลซ้ำ</div>

<h3>6.4 Airflow vs Dagster</h3>
<table>
  <tr><th></th><th>Apache Airflow</th><th>Dagster</th></tr>
  <tr><td><strong>แนวคิด</strong></td><td>Task-centric</td><td>Asset-centric</td></tr>
  <tr><td><strong>ตลาดงาน</strong></td><td>มากที่สุด ⭐</td><td>กำลังเติบโต</td></tr>
  <tr><td><strong>Backfill</strong></td><td>CLI command</td><td>ง่ายกว่า (partition-based)</td></tr>
  <tr><td><strong>Testing</strong></td><td>ต้องเขียนเอง</td><td>Built-in type system</td></tr>
</table>
`,
  },
  {
    number: 8,
    slug: 'infra-basics',
    emoji: '🖥️',
    title: 'Infra Basics',
    content: `
<h2>🖥️ เครื่องมือพื้นฐานที่ DE ต้องรู้</h2>

<h3>7.1 Linux CLI — คำสั่งที่ใช้บ่อย</h3>
<pre><code># ดูไฟล์ขนาดใหญ่
head -n 100 data.csv       # 100 บรรทัดแรก
tail -f pipeline.log       # ดู log แบบ real-time
wc -l data.csv             # นับบรรทัด

# ค้นหา error ใน log
grep -i "error" pipeline.log | tail -20

# ดู disk usage
df -h                      # ดูพื้นที่ disk
du -sh /data/*             # ดูขนาดแต่ละ folder</code></pre>

<h3>7.2 Git — Version Control</h3>
<pre><code># สร้าง branch สำหรับ feature ใหม่
git checkout -b feature/add-customer-pipeline

# Commit ด้วย message ที่ดี
git commit -m "feat: add customer data pipeline with quality checks"

# Push + สร้าง Pull Request
git push origin feature/add-customer-pipeline

# กลับไป version ก่อนหน้า
git revert HEAD</code></pre>

<h3>7.3 Docker — Containerization</h3>
<pre><code># Dockerfile สำหรับ ETL Pipeline
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY src/ ./src/
COPY config/ ./config/
HEALTHCHECK CMD python -c "print('OK')"
CMD ["python", "src/main.py"]</code></pre>

<pre><code># docker-compose.yml
version: '3.8'
services:
  etl-pipeline:
    build: .
    environment:
      - DB_HOST=postgres
      - WAREHOUSE_URL=\${WAREHOUSE_URL}
    volumes:
      - ./data:/app/data
    depends_on:
      - postgres

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: pipeline_db
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:</code></pre>

<h3>7.4 Cloud Services</h3>
<table>
  <tr><th>บริการ</th><th>GCP</th><th>AWS</th><th>Azure</th></tr>
  <tr><td><strong>Object Storage</strong></td><td>Cloud Storage</td><td>S3</td><td>Blob Storage</td></tr>
  <tr><td><strong>Data Warehouse</strong></td><td>BigQuery</td><td>Redshift</td><td>Synapse</td></tr>
  <tr><td><strong>Compute</strong></td><td>Dataproc</td><td>EMR</td><td>HDInsight</td></tr>
  <tr><td><strong>Orchestration</strong></td><td>Cloud Composer</td><td>MWAA</td><td>Data Factory</td></tr>
  <tr><td><strong>Streaming</strong></td><td>Pub/Sub</td><td>Kinesis</td><td>Event Hubs</td></tr>
</table>

<div class="tip-box">💡 <strong>แนะนำ:</strong> เริ่มจาก Cloud เดียวก่อน — GCP (BigQuery ใช้ง่ายที่สุด) หรือ AWS (ตลาดงานกว้างที่สุด)</div>
`,
  },
  {
    number: 9,
    slug: 'data-modeling',
    emoji: '📐',
    title: 'Data Modeling',
    content: `
<h2>📐 ออกแบบโครงสร้างข้อมูลให้ query ง่าย เร็ว ถูกต้อง</h2>

<h3>8.1 Star Schema — Fact & Dimension</h3>
<pre><code>-- Fact Table: เก็บ "เหตุการณ์" ที่วัดได้
CREATE TABLE fact_sales (
    sale_id         BIGINT PRIMARY KEY,
    date_key        INT REFERENCES dim_date(date_key),
    product_key     INT REFERENCES dim_product(product_key),
    customer_key    INT REFERENCES dim_customer(customer_key),
    store_key       INT REFERENCES dim_store(store_key),
    quantity        INT,
    unit_price      DECIMAL(10,2),
    total_amount    DECIMAL(12,2),
    discount_amount DECIMAL(10,2)
);

-- Dimension Table: เก็บ "บริบท"
CREATE TABLE dim_product (
    product_key     INT PRIMARY KEY,
    product_id      VARCHAR(20),
    product_name    VARCHAR(200),
    category        VARCHAR(100),
    brand           VARCHAR(100),
    unit_cost       DECIMAL(10,2)
);

CREATE TABLE dim_date (
    date_key        INT PRIMARY KEY,
    full_date       DATE,
    day_of_week     VARCHAR(10),
    month_name      VARCHAR(10),
    quarter         INT,
    year            INT,
    is_holiday      BOOLEAN
);</code></pre>

<h3>8.2 Slowly Changing Dimensions (SCD)</h3>
<table>
  <tr><th>Type</th><th>วิธีการ</th><th>เก็บประวัติ?</th><th>ใช้เมื่อ</th></tr>
  <tr><td><strong>SCD Type 1</strong></td><td>Overwrite เขียนทับ</td><td>❌ ไม่เก็บ</td><td>แก้ typo</td></tr>
  <tr><td><strong>SCD Type 2</strong></td><td>เพิ่มแถวใหม่ ⭐</td><td>✅ เก็บทั้งหมด</td><td>ลูกค้าเปลี่ยนที่อยู่</td></tr>
  <tr><td><strong>SCD Type 3</strong></td><td>เก็บค่าเก่า/ใหม่ในแถวเดียว</td><td>⚠️ จำกัด</td><td>ต้องการแค่ค่าล่าสุดกับก่อนหน้า</td></tr>
</table>

<h3>8.3 Grain — กำหนดระดับความละเอียด</h3>
<pre><code>❓ Grain คืออะไร?
= "1 แถวใน Fact Table หมายถึงอะไร?"

📦 fact_sales:       1 แถว = 1 รายการสินค้าในใบเสร็จ
📊 fact_daily_visits: 1 แถว = จำนวนเข้าชมต่อเว็บต่อวัน
💳 fact_transactions: 1 แถว = 1 ธุรกรรมการเงิน

⚠️ ห้ามมี Grain ปนกัน!
❌ บางแถว = รายวัน, บางแถว = รายเดือน (aggregate ผิด!)</code></pre>

<h3>8.4 dbt — Data Build Tool</h3>
<pre><code>-- models/marts/sales/fact_sales.sql
{{ config(
    materialized='incremental',
    unique_key='sale_id',
    partition_by={'field': 'order_date', 'data_type': 'date'}
) }}

WITH source_data AS (
    SELECT * FROM {{ ref('stg_orders') }}
    {% if is_incremental() %}
    WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
    {% endif %}
),
enriched AS (
    SELECT
        s.order_id AS sale_id,
        d.date_key,
        p.product_key,
        c.customer_key,
        s.quantity,
        s.unit_price,
        s.quantity * s.unit_price AS total_amount
    FROM source_data s
    JOIN {{ ref('dim_date') }} d ON s.order_date = d.full_date
    JOIN {{ ref('dim_product') }} p ON s.product_id = p.product_id
    JOIN {{ ref('dim_customer') }} c ON s.customer_id = c.customer_id
)
SELECT * FROM enriched</code></pre>

<div class="tip-box">💡 <strong>dbt</strong> ทำให้ SQL เป็น version-controlled, testable, และ documented — เหมือนเขียน software แต่เป็น SQL!</div>
`,
  },
  {
    number: 10,
    slug: 'portfolio-career',
    emoji: '🏆',
    title: 'Portfolio & Getting Hired',
    content: `
<h2>🏆 สร้าง Portfolio + เตรียมสัมภาษณ์ให้ได้ Offer</h2>

<h3>9.1 Portfolio — สร้างยังไงให้โดดเด่น</h3>
<p>Portfolio ที่ดีต้องมี <strong>3 โปรเจค</strong> ที่แสดงทักษะครบ:</p>

<table>
  <tr><th>โปรเจค</th><th>ทักษะที่แสดง</th><th>เครื่องมือ</th></tr>
  <tr><td><strong>🔹 End-to-End Pipeline</strong></td><td>ETL, Orchestration, Docker</td><td>Airflow + Python + Docker</td></tr>
  <tr><td><strong>🔹 Real-time Dashboard</strong></td><td>Streaming, Visualization</td><td>Kafka + Looker/Superset</td></tr>
  <tr><td><strong>🔹 Data Modeling with dbt</strong></td><td>Modeling, Testing, Cloud</td><td>dbt + BigQuery/Snowflake</td></tr>
</table>

<h3>9.2 คำถามสัมภาษณ์ที่ถามบ่อย</h3>
<ol>
  <li><strong>"อธิบาย ETL Pipeline ที่เคยทำ"</strong> — ใช้ STAR Method: Situation → Task → Action → Result</li>
  <li><strong>"Batch vs Streaming ใช้เมื่อไหร่?"</strong> — Batch: daily report | Streaming: fraud detection</li>
  <li><strong>"ออกแบบ Pipeline สำหรับ e-commerce"</strong> — Source → Ingestion → Transform (Medallion) → Serve</li>
  <li><strong>"เจอ data quality issue ทำยังไง?"</strong> — Detect → Alert → Quarantine → Fix → Backfill</li>
</ol>

<h3>9.3 เรซูเม่ — เทคนิคเขียนให้ดึงดูด</h3>
<pre><code>❌ แบบนี้: "สร้าง ETL Pipeline"

✅ แบบนี้: "ออกแบบและ deploy ETL Pipeline ที่ process
   ข้อมูล 50M+ records/day ด้วย Airflow + Spark
   ลดเวลา processing จาก 4 ชม. เหลือ 45 นาที"</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> เขียน Resume แบบ <strong>Impact-driven</strong> — ไม่ใช่แค่บอกว่า "ใช้อะไร" แต่ต้องบอกว่า "สร้าง impact อะไร"</div>

<h3>9.4 Cloud Certifications แนะนำ</h3>
<table>
  <tr><th>Cert</th><th>ผู้ออก</th><th>ค่าสอบ</th><th>ความยาก</th></tr>
  <tr><td><strong>GCP Professional DE</strong></td><td>Google</td><td>~$200</td><td>⭐⭐⭐⭐</td></tr>
  <tr><td><strong>AWS DE Associate</strong></td><td>AWS</td><td>~$150</td><td>⭐⭐⭐</td></tr>
  <tr><td><strong>Databricks DE</strong></td><td>Databricks</td><td>~$200</td><td>⭐⭐⭐</td></tr>
  <tr><td><strong>Azure DP-203</strong></td><td>Microsoft</td><td>~$165</td><td>⭐⭐⭐⭐</td></tr>
</table>

<div class="tip-box">💡 <strong>Cert ไม่ "จำเป็น" แต่เป็น "ตัวเร่ง"</strong> — ช่วยผ่าน HR screening, แสดงความมุ่งมั่น, และบังคับตัวเองเรียนอย่างเป็นระบบ</div>

<h3>🎉 ขอแสดงความยินดี!</h3>
<p>ถ้าคุณเรียนจบทั้ง 10 Phase นี้ คุณมีความรู้เพียงพอที่จะเริ่มสมัครงาน Data Engineer ได้แล้ว!</p>
<ul>
  <li>✅ เข้าใจ Career Path ของ DE</li>
  <li>✅ เขียน SQL + Python ได้ระดับ Production</li>
  <li>✅ เข้าใจ Storage, Compute, ETL Pipeline</li>
  <li>✅ ใช้ Airflow, Docker, Cloud ได้</li>
  <li>✅ ออกแบบ Data Model + ใช้ dbt</li>
  <li>✅ มี Portfolio + พร้อมสัมภาษณ์</li>
</ul>
`,
  },
];
