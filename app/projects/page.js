'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 'csv-to-bigquery',
    emoji: '📊',
    title: 'Project 1: CSV → BigQuery ETL Pipeline',
    difficulty: 'เริ่มต้น',
    diffColor: '#10b981',
    duration: '~1 ชม.',
    skills: ['Python', 'pandas', 'BigQuery', 'ETL'],
    prereqs: 'บทที่ 3-5, 7-8',
    desc: 'สร้าง Pipeline ดึงข้อมูลจาก CSV ทำความสะอาดด้วย Python แล้วโหลดเข้า BigQuery',
    content: `
<h2>🎯 เป้าหมาย</h2>
<p>สร้าง ETL Pipeline ง่ายๆ ที่ทำสิ่งนี้:</p>
<ol>
<li><strong>Extract</strong> — อ่านไฟล์ CSV (ข้อมูลยอดขาย)</li>
<li><strong>Transform</strong> — ทำความสะอาด + คำนวณสรุป</li>
<li><strong>Load</strong> — อัพโหลดเข้า BigQuery</li>
</ol>

<div class="tip-box">💡 <strong>ทริค:</strong> โปรเจกต์นี้เป็นรูปแบบ ETL ที่ใช้จริงในบริษัท — แค่ data source จะซับซ้อนกว่า CSV</div>

<h2>📁 เตรียมข้อมูล</h2>
<p>สร้างไฟล์ <code>sales_data.csv</code>:</p>
<pre><code class="language-python"># สร้าง sample data
import pandas as pd
import random
from datetime import datetime, timedelta

data = []
products = ['iPhone', 'MacBook', 'iPad', 'AirPods', 'Apple Watch']
regions = ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Khon Kaen']

for i in range(1000):
    date = datetime(2024, 1, 1) + timedelta(days=random.randint(0, 364))
    data.append({
        'order_id': f'ORD-{i+1:05d}',
        'date': date.strftime('%Y-%m-%d'),
        'product': random.choice(products),
        'region': random.choice(regions),
        'quantity': random.randint(1, 5),
        'price': random.randint(1000, 50000),
        'customer_name': f'Customer {random.randint(1,500)}',
        'email': f'user{random.randint(1,500)}@example.com',
    })

df = pd.DataFrame(data)
# ใส่ข้อมูลเสียบ้าง (ของจริงมักมี!)
df.loc[random.sample(range(1000), 50), 'region'] = None
df.loc[random.sample(range(1000), 30), 'price'] = -1
df.to_csv('sales_data.csv', index=False)
print(f'✅ สร้าง {len(df)} rows สำเร็จ')</code></pre>

<h2>🔧 Step 1: Extract (อ่านข้อมูล)</h2>
<pre><code class="language-python">import pandas as pd

def extract(filepath):
    """อ่านไฟล์ CSV"""
    df = pd.read_csv(filepath)
    print(f"📥 Extract: {len(df)} rows, {len(df.columns)} columns")
    print(f"   Columns: {list(df.columns)}")
    print(f"   Nulls: {df.isnull().sum().sum()} cells")
    return df

raw_df = extract('sales_data.csv')</code></pre>

<div class="tip-box">🧠 <strong>วิธีคิด:</strong> ก่อน Transform ต้องเข้าใจข้อมูลก่อนเสมอ — ดู shape, nulls, dtypes, sample rows</div>

<h2>🔧 Step 2: Transform (ทำความสะอาด)</h2>
<pre><code class="language-python">def transform(df):
    """ทำความสะอาด + เพิ่มคอลัมน์"""
    print(f"🔧 Transform: เริ่มจาก {len(df)} rows")
    
    # 1. ลบ rows ที่ price ติดลบ (ข้อมูลเสีย)
    df = df[df['price'] > 0].copy()
    print(f"   → ลบ price ≤ 0: เหลือ {len(df)} rows")
    
    # 2. เติม region ที่ null ด้วย 'Unknown'
    df['region'] = df['region'].fillna('Unknown')
    
    # 3. คำนวณ total_amount
    df['total_amount'] = df['quantity'] * df['price']
    
    # 4. แปลง date เป็น datetime + extract เดือน
    df['date'] = pd.to_datetime(df['date'])
    df['month'] = df['date'].dt.strftime('%Y-%m')
    df['day_of_week'] = df['date'].dt.day_name()
    
    # 5. ลบ PII (ข้อมูลส่วนบุคคล) — PDPA!
    df = df.drop(columns=['customer_name', 'email'])
    
    print(f"   → Final: {len(df)} rows, {len(df.columns)} columns")
    return df

clean_df = transform(raw_df)</code></pre>

<div class="warning-box">⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ลืมลบ PII ก่อนโหลดเข้า data warehouse — อาจผิดกฎหมาย PDPA!</div>

<h2>🔧 Step 3: สร้าง Summary Tables</h2>
<pre><code class="language-python">def create_summaries(df):
    """สร้างตารางสรุป"""
    
    # สรุปยอดขายรายเดือน
    monthly = df.groupby('month').agg(
        total_orders=('order_id', 'count'),
        total_revenue=('total_amount', 'sum'),
        avg_order_value=('total_amount', 'mean'),
    ).reset_index()
    
    # สรุปยอดขายตามสินค้า
    by_product = df.groupby('product').agg(
        total_sold=('quantity', 'sum'),
        total_revenue=('total_amount', 'sum'),
    ).reset_index().sort_values('total_revenue', ascending=False)
    
    # สรุปตามภูมิภาค
    by_region = df.groupby('region').agg(
        total_orders=('order_id', 'count'),
        total_revenue=('total_amount', 'sum'),
    ).reset_index()
    
    print("📊 Summary tables created:")
    print(f"   Monthly: {len(monthly)} rows")
    print(f"   By Product: {len(by_product)} rows")
    print(f"   By Region: {len(by_region)} rows")
    
    return monthly, by_product, by_region

monthly, by_product, by_region = create_summaries(clean_df)</code></pre>

<h2>🔧 Step 4: Load เข้า BigQuery</h2>
<pre><code class="language-python">from google.cloud import bigquery

def load_to_bigquery(df, table_id, write_mode='WRITE_TRUNCATE'):
    """โหลดข้อมูลเข้า BigQuery"""
    client = bigquery.Client()
    
    job_config = bigquery.LoadJobConfig(
        write_disposition=write_mode,
        autodetect=True,
    )
    
    job = client.load_table_from_dataframe(df, table_id, job_config=job_config)
    job.result()  # รอจนเสร็จ
    
    table = client.get_table(table_id)
    print(f"✅ Loaded {table.num_rows} rows to {table_id}")

# โหลดทั้ง 3 ตาราง
PROJECT = 'your-project-id'
DATASET = 'sales_analytics'

load_to_bigquery(clean_df, f'{PROJECT}.{DATASET}.sales_fact')
load_to_bigquery(monthly, f'{PROJECT}.{DATASET}.monthly_summary')
load_to_bigquery(by_product, f'{PROJECT}.{DATASET}.product_summary')</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ถ้ายังไม่มี GCP account ให้บันทึกเป็น <code>.parquet</code> ไว้ก่อน:<br>
<code>clean_df.to_parquet('output/sales_fact.parquet')</code></div>

<h2>🔧 Step 5: รวมเป็น Pipeline เดียว</h2>
<pre><code class="language-python">def run_pipeline():
    """รัน ETL Pipeline ทั้งหมด"""
    print("=" * 50)
    print("🚀 Starting Sales ETL Pipeline")
    print("=" * 50)
    
    # Extract
    raw = extract('sales_data.csv')
    
    # Transform
    clean = transform(raw)
    
    # Create summaries
    monthly, by_product, by_region = create_summaries(clean)
    
    # Load (save as parquet for now)
    clean.to_parquet('output/sales_fact.parquet')
    monthly.to_parquet('output/monthly_summary.parquet')
    by_product.to_parquet('output/product_summary.parquet')
    
    print("=" * 50)
    print("✅ Pipeline completed successfully!")
    print(f"   Total records processed: {len(clean)}")
    print(f"   Output files: 3 parquet files")
    print("=" * 50)

if __name__ == '__main__':
    run_pipeline()</code></pre>

<div class="exercise-box">📝 <strong>แบบฝึกหัดเพิ่มเติม:</strong>
<ol>
<li>เพิ่ม logging แทน print()</li>
<li>เพิ่ม try/except จัดการ error</li>
<li>เพิ่ม data validation (เช็คว่า quantity > 0)</li>
<li>เพิ่ม unit test สำหรับ transform function</li>
<li>ใช้ argparse ให้รับ filepath จาก command line</li>
</ol>
</div>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์:</strong> "ถ้า CSV file มี 10 ล้านแถว จะทำยังไง?"
<br><strong>คำตอบ:</strong> ใช้ <code>pd.read_csv(chunksize=10000)</code> อ่านทีละ chunk, หรือใช้ Spark/Dask แทน pandas</div>
    `,
  },
  {
    id: 'api-pipeline',
    emoji: '🌐',
    title: 'Project 2: API → Database Pipeline',
    difficulty: 'กลาง',
    diffColor: '#3b82f6',
    duration: '~1.5 ชม.',
    skills: ['Python', 'API', 'requests', 'SQLite', 'Scheduling'],
    prereqs: 'บทที่ 3-5, 7',
    desc: 'ดึงข้อมูลจาก Public API ทุกวัน แปลงข้อมูล แล้วเก็บในฐานข้อมูล',
    content: `
<h2>🎯 เป้าหมาย</h2>
<p>สร้าง Data Pipeline ที่:</p>
<ol>
<li>ดึงข้อมูลอัตราแลกเปลี่ยนจาก API ทุกวัน</li>
<li>แปลงและคำนวณค่าสถิติ</li>
<li>บันทึกลง SQLite database</li>
<li>ตั้ง schedule ให้รันอัตโนมัติ</li>
</ol>

<h2>🔧 Step 1: ดึงข้อมูลจาก API</h2>
<pre><code class="language-python">import requests
import json
from datetime import datetime

def fetch_exchange_rates(base='USD'):
    """ดึงอัตราแลกเปลี่ยนจาก API"""
    url = f'https://api.exchangerate-api.com/v4/latest/{base}'
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        print(f"✅ Fetched rates for {base}")
        print(f"   Date: {data.get('date')}")
        print(f"   Currencies: {len(data.get('rates', {}))} pairs")
        return data
    except requests.exceptions.RequestException as e:
        print(f"❌ Error: {e}")
        return None

data = fetch_exchange_rates()
print(f"THB rate: {data['rates']['THB']}")</code></pre>

<div class="tip-box">💡 <strong>ทริค:</strong> ใส่ <code>timeout=10</code> เสมอ — ไม่งั้นถ้า API ไม่ตอบ โปรแกรมจะค้างตลอดไป</div>

<h2>🔧 Step 2: Transform ข้อมูล</h2>
<pre><code class="language-python">def transform_rates(data, target_currencies=None):
    """แปลงข้อมูลอัตราแลกเปลี่ยน"""
    if not data:
        return []
    
    if target_currencies is None:
        target_currencies = ['THB', 'JPY', 'EUR', 'GBP', 'CNY', 'KRW', 'SGD']
    
    records = []
    fetch_time = datetime.now().isoformat()
    
    for currency in target_currencies:
        rate = data['rates'].get(currency)
        if rate:
            records.append({
                'base': data['base'],
                'target': currency,
                'rate': round(rate, 4),
                'date': data['date'],
                'fetched_at': fetch_time,
            })
    
    print(f"🔧 Transformed: {len(records)} currency pairs")
    return records

records = transform_rates(data)</code></pre>

<h2>🔧 Step 3: บันทึกลง SQLite</h2>
<pre><code class="language-python">import sqlite3

def init_database(db_path='exchange_rates.db'):
    """สร้าง database และ table"""
    conn = sqlite3.connect(db_path)
    conn.execute('''
        CREATE TABLE IF NOT EXISTS exchange_rates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            base TEXT NOT NULL,
            target TEXT NOT NULL,
            rate REAL NOT NULL,
            date TEXT NOT NULL,
            fetched_at TEXT NOT NULL,
            UNIQUE(base, target, date)
        )
    ''')
    conn.commit()
    return conn

def load_records(conn, records):
    """บันทึกข้อมูลลง database"""
    inserted = 0
    for r in records:
        try:
            conn.execute(
                'INSERT OR REPLACE INTO exchange_rates (base, target, rate, date, fetched_at) VALUES (?, ?, ?, ?, ?)',
                (r['base'], r['target'], r['rate'], r['date'], r['fetched_at'])
            )
            inserted += 1
        except sqlite3.Error as e:
            print(f"⚠️ Error: {e}")
    conn.commit()
    print(f"✅ Loaded {inserted}/{len(records)} records")

conn = init_database()
load_records(conn, records)</code></pre>

<div class="tip-box">🧠 <strong>วิธีคิด:</strong> ใช้ <code>INSERT OR REPLACE</code> + <code>UNIQUE constraint</code> ทำให้ Pipeline เป็น <strong>idempotent</strong> — รันกี่ครั้งก็ได้ผลเหมือนกัน</div>

<h2>🔧 Step 4: รวมเป็น Pipeline + Schedule</h2>
<pre><code class="language-python">import schedule
import time

def run_pipeline():
    """รัน ETL Pipeline"""
    print(f"\\n{'='*40}")
    print(f"🚀 Pipeline run: {datetime.now()}")
    
    data = fetch_exchange_rates()
    records = transform_rates(data)
    
    conn = init_database()
    load_records(conn, records)
    
    # แสดงสถิติ
    cursor = conn.execute('SELECT COUNT(*) FROM exchange_rates')
    total = cursor.fetchone()[0]
    print(f"📊 Total records in DB: {total}")
    conn.close()

# รัน manual ครั้งแรก
run_pipeline()

# ตั้ง schedule ทุก 6 ชม.
schedule.every(6).hours.do(run_pipeline)
print("⏰ Scheduled: every 6 hours")

while True:
    schedule.run_pending()
    time.sleep(60)</code></pre>

<div class="exercise-box">📝 <strong>ท้าทายเพิ่ม:</strong>
<ol>
<li>เพิ่ม retry logic (ถ้า API fail ลองใหม่ 3 ครั้ง)</li>
<li>เพิ่ม analytics: หาค่าเฉลี่ย/สูงสุด/ต่ำสุดของอัตราแลกเปลี่ยน</li>
<li>เพิ่ม alert ถ้า THB อ่อนค่าเกิน 5%</li>
<li>เปลี่ยนจาก SQLite เป็น PostgreSQL</li>
</ol>
</div>
    `,
  },
  {
    id: 'airflow-dbt-pipeline',
    emoji: '🏗️',
    title: 'Project 3: Airflow + dbt Analytics Pipeline',
    difficulty: 'กลาง-สูง',
    diffColor: '#8b5cf6',
    duration: '~2 ชม.',
    skills: ['Airflow', 'dbt', 'Docker', 'BigQuery', 'Data Modeling'],
    prereqs: 'บทที่ 6-11',
    desc: 'สร้าง Production-grade pipeline ด้วย Airflow orchestration + dbt transformation',
    content: `
<h2>🎯 เป้าหมาย</h2>
<p>สร้าง Analytics Pipeline แบบมืออาชีพ:</p>
<pre><code class="language-bash"># Architecture
Raw Data (CSV/API)
    ↓ [Airflow - Extract & Load]
BigQuery (raw layer)
    ↓ [dbt - Transform]
BigQuery (staging → mart)
    ↓ [Dashboard]
Looker Studio / Metabase</code></pre>

<h2>🔧 Step 1: Setup Docker Compose</h2>
<pre><code class="language-yaml"># docker-compose.yml
version: '3.8'
services:
  airflow:
    image: apache/airflow:2.7.0
    environment:
      - AIRFLOW__CORE__EXECUTOR=LocalExecutor
      - AIRFLOW__DATABASE__SQL_ALCHEMY_CONN=sqlite:////opt/airflow/airflow.db
    volumes:
      - ./dags:/opt/airflow/dags
      - ./data:/opt/airflow/data
    ports:
      - "8080:8080"
    command: >
      bash -c "airflow db init && 
               airflow users create --username admin --password admin --firstname Admin --lastname User --role Admin --email admin@example.com &&
               airflow webserver & airflow scheduler"</code></pre>

<h2>🔧 Step 2: สร้าง Airflow DAG</h2>
<pre><code class="language-python"># dags/sales_pipeline.py
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data_team',
    'depends_on_past': False,
    'email_on_failure': True,
    'retries': 2,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    dag_id='sales_analytics_pipeline',
    default_args=default_args,
    description='Daily sales ETL + dbt transform',
    schedule_interval='0 6 * * *',  # ทุกวัน 6 โมงเช้า
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['sales', 'production'],
) as dag:
    
    extract_task = PythonOperator(
        task_id='extract_sales_data',
        python_callable=extract_and_load,
    )
    
    dbt_run = BashOperator(
        task_id='dbt_run',
        bash_command='cd /opt/airflow/dbt_project && dbt run --profiles-dir .',
    )
    
    dbt_test = BashOperator(
        task_id='dbt_test',
        bash_command='cd /opt/airflow/dbt_project && dbt test --profiles-dir .',
    )
    
    notify = PythonOperator(
        task_id='send_notification',
        python_callable=send_slack_notification,
    )
    
    extract_task >> dbt_run >> dbt_test >> notify</code></pre>

<div class="tip-box">🧠 <strong>วิธีคิด:</strong> Airflow ทำหน้าที่ <strong>orchestrate</strong> (จัดการลำดับงาน) ส่วน dbt ทำหน้าที่ <strong>transform</strong> (แปลงข้อมูล) — แบ่งหน้าที่ชัดเจน</div>

<h2>🔧 Step 3: สร้าง dbt Models</h2>
<pre><code class="language-sql">-- models/staging/stg_sales.sql
WITH raw AS (
    SELECT * FROM {{ source('raw', 'sales_raw') }}
)
SELECT
    order_id,
    PARSE_DATE('%Y-%m-%d', date) AS order_date,
    product,
    region,
    CAST(quantity AS INT64) AS quantity,
    CAST(price AS FLOAT64) AS unit_price,
    quantity * price AS total_amount,
    FORMAT_DATE('%Y-%m', PARSE_DATE('%Y-%m-%d', date)) AS order_month,
    EXTRACT(DAYOFWEEK FROM PARSE_DATE('%Y-%m-%d', date)) AS day_of_week
FROM raw
WHERE price > 0
    AND quantity > 0</code></pre>

<pre><code class="language-sql">-- models/mart/mart_monthly_revenue.sql
SELECT
    order_month,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS avg_order_value,
    COUNT(DISTINCT region) AS regions_active
FROM {{ ref('stg_sales') }}
GROUP BY order_month
ORDER BY order_month</code></pre>

<h2>🔧 Step 4: dbt Tests</h2>
<pre><code class="language-yaml"># models/schema.yml
version: 2
models:
  - name: stg_sales
    description: "Cleaned sales data"
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: unit_price
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 0
      - name: quantity
        tests:
          - not_null
          - dbt_utils.accepted_range:
              min_value: 1
              max_value: 100</code></pre>

<div class="exercise-box">📝 <strong>ท้าทายเพิ่ม:</strong>
<ol>
<li>เพิ่ม SCD Type 2 สำหรับข้อมูล product price ที่เปลี่ยน</li>
<li>เพิ่ม Slack notification เมื่อ pipeline สำเร็จ/ล้มเหลว</li>
<li>เพิ่ม data quality checks ด้วย Great Expectations</li>
<li>สร้าง dashboard ด้วย Looker Studio</li>
</ol>
</div>
    `,
  },
  {
    id: 'portfolio-project',
    emoji: '🏆',
    title: 'Project 4: End-to-End Portfolio Project',
    difficulty: 'สูง',
    diffColor: '#f59e0b',
    duration: '~3 ชม.',
    skills: ['Python', 'SQL', 'Airflow', 'dbt', 'Docker', 'BigQuery', 'Git'],
    prereqs: 'ทุกบท',
    desc: 'โปรเจกต์จบคอร์สแบบ Production-grade ใส่ Portfolio สมัครงานได้เลย!',
    content: `
<h2>🎯 เป้าหมาย</h2>
<p>สร้างโปรเจกต์ End-to-End ที่ <strong>ใส่ Portfolio ได้จริง</strong>:</p>

<h3>📋 โจทย์: Thailand Tourism Analytics Platform</h3>
<p>วิเคราะห์ข้อมูลการท่องเที่ยวไทย — จำนวนนักท่องเที่ยว, รายได้, สถานที่ยอดนิยม</p>

<h2>📁 โครงสร้างโปรเจกต์</h2>
<pre><code class="language-bash">thailand-tourism-analytics/
├── README.md                  # ⭐ สำคัญมาก!
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci.yml             # CI/CD
├── airflow/
│   └── dags/
│       └── tourism_dag.py     # Orchestration
├── dbt_project/
│   ├── models/
│   │   ├── staging/           # Clean raw data
│   │   └── mart/              # Business logic
│   └── tests/
├── scripts/
│   ├── extract_api.py         # Data extraction
│   └── seed_data.py           # Sample data
├── tests/
│   └── test_extract.py        # Unit tests
└── docs/
    └── architecture.md        # Architecture doc</code></pre>

<div class="tip-box">💡 <strong>ทริค Resume:</strong> Recruiter ดู GitHub แค่ 30 วินาที — README.md ต้อง wow ตั้งแต่บรรทัดแรก!</div>

<h2>📝 README.md Template</h2>
<pre><code class="language-bash"># 🇹🇭 Thailand Tourism Analytics Platform

## 📋 Overview
End-to-end data pipeline analyzing Thailand tourism data.
Processes 1M+ records daily using modern data stack.

## 🏗️ Architecture
\`\`\`
API (TAT) → Python Extract → BigQuery (raw)
    → dbt Transform → BigQuery (mart)
    → Looker Studio Dashboard
    
Orchestrated by: Apache Airflow
Containerized with: Docker
CI/CD: GitHub Actions
\`\`\`

## 🛠 Tech Stack
| Tool | Purpose |
|------|---------|
| Python | Data extraction & processing |
| BigQuery | Cloud data warehouse |
| dbt | Data transformation |
| Airflow | Workflow orchestration |
| Docker | Containerization |
| GitHub Actions | CI/CD |

## 📊 Key Metrics
- 1M+ records processed daily
- 5 data models (staging + mart)
- 15 data quality tests
- < 5 min pipeline runtime

## 🚀 Quick Start
\`\`\`bash
git clone https://github.com/yourname/thailand-tourism-analytics.git
cd thailand-tourism-analytics
docker-compose up -d
\`\`\`</code></pre>

<div class="warning-box">⚠️ <strong>สำคัญ:</strong> README ไม่ใช่แค่บอกวิธีรัน — ต้องบอกว่า <strong>ทำไมถึงเลือก tool นี้</strong> และ <strong>design decisions</strong> ด้วย</div>

<h2>✅ Checklist ก่อนใส่ Portfolio</h2>
<ul>
<li>☐ README สมบูรณ์ มี architecture diagram</li>
<li>☐ โค้ดมี docstring + comments</li>
<li>☐ มี unit tests อย่างน้อย 5 test cases</li>
<li>☐ มี CI/CD (GitHub Actions)</li>
<li>☐ มี error handling (try/except)</li>
<li>☐ มี logging (ไม่ใช่แค่ print)</li>
<li>☐ Docker Compose สามารถรันได้จริง</li>
<li>☐ ไม่มี hardcode secrets/credentials</li>
<li>☐ .gitignore ครบ (ไม่มีไฟล์ขยะ)</li>
<li>☐ Commit messages สะอาด (ไม่ใช่ "fix", "update")</li>
</ul>

<div class="interview-box">🎯 <strong>คำถามสัมภาษณ์ที่จะถูกถาม:</strong>
<ol>
<li>"ทำไมเลือก BigQuery แทน Redshift?" → ตอบเรื่อง serverless, pricing model</li>
<li>"Pipeline ล้มเหลวจะทำยังไง?" → ตอบเรื่อง retry, alerting, idempotent</li>
<li>"ถ้าข้อมูลเพิ่มเป็น 100M rows?" → ตอบเรื่อง partitioning, incremental</li>
<li>"ทดสอบ pipeline ยังไง?" → ตอบเรื่อง unit test, data quality test</li>
</ol>
</div>
    `,
  },
];

export default function ProjectsPage() {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('de101-projects-done') || '[]');
      setCompleted(saved);
    } catch {}
  }, []);

  const [activeProject, setActiveProject] = useState(null);

  const toggleComplete = (id) => {
    const updated = completed.includes(id)
      ? completed.filter(x => x !== id)
      : [...completed, id];
    setCompleted(updated);
    try { localStorage.setItem('de101-projects-done', JSON.stringify(updated)); } catch {}
  };

  return (
    <div className="content-wrapper">
      <div style={{ maxWidth: 750, margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 8 }}>
          🛠️ Hands-on Projects
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginBottom: 8 }}>
          เรียนจบแล้วต้องลงมือทำจริง! — โปรเจกต์ step-by-step จากง่ายไปยาก
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 32 }}>
          ✅ {completed.length}/{projects.length} โปรเจกต์สำเร็จ
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {projects.map((p, i) => (
            <div key={p.id} className="dashboard-card" style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, cursor: 'pointer' }}
                   onClick={() => setActiveProject(activeProject === p.id ? null : p.id)}>
                <div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700 }}>{p.emoji} {p.title}</h2>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: 4 }}>{p.desc}</p>
                </div>
                <span style={{ fontSize: '1.2rem' }}>{activeProject === p.id ? '▲' : '▼'}</span>
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: '0.72rem', marginBottom: 8 }}>
                <span style={{ color: p.diffColor, fontWeight: 700 }}>● {p.difficulty}</span>
                <span style={{ color: 'var(--text-muted)' }}>⏱️ {p.duration}</span>
                <span style={{ color: 'var(--text-muted)' }}>📋 ใช้ความรู้: {p.prereqs}</span>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                {p.skills.map(s => <span key={s} className="course-tag">{s}</span>)}
              </div>

              {/* Expandable content */}
              {activeProject === p.id && (
                <div>
                  <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '16px 0' }} />
                  <div className="chapter-content" dangerouslySetInnerHTML={{ __html: p.content }} />
                  <button onClick={() => toggleComplete(p.id)} style={{
                    display: 'block', width: '100%', padding: '12px', marginTop: 20,
                    borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontFamily: 'var(--font-th)',
                    border: completed.includes(p.id) ? '1px solid var(--green-border)' : '1px solid var(--border)',
                    background: completed.includes(p.id) ? 'var(--green-dim)' : 'var(--glass)',
                    color: completed.includes(p.id) ? 'var(--green)' : 'var(--text-dim)',
                    fontSize: '0.88rem', fontWeight: 700, transition: 'all 0.2s',
                  }}>
                    {completed.includes(p.id) ? '✅ ทำเสร็จแล้ว!' : '☐ กดเมื่อทำเสร็จ'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>← กลับหน้าหลัก</Link>
        </div>
      </div>
    </div>
  );
}
