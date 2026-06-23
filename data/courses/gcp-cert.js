export const chapters = [
  {
    number: 0,
    slug: 'study-plan',
    emoji: '☁️',
    title: 'แนะนำ GCP Certification',
    content: `
<h2>☁️ ทำไมต้องสอบ GCP Professional Data Engineer?</h2>

<p>สมมติว่าน้องทำงาน Data Engineering มา 2-3 ปี สร้าง pipeline, เขียน SQL, ใช้ Airflow เป็น แต่พอไปสมัครงานบริษัทใหญ่ๆ ที่ใช้ GCP เช่น LINE, Agoda, Grab — เขาถามว่า "มี cert ไหม?" ถ้ามี GCP Professional Data Engineer Certificate จะช่วยให้น้อง <strong>โดดเด่นจากผู้สมัครคนอื่น</strong> ทันที เพราะ cert นี้เป็นที่ยอมรับทั่วโลก</p>

<p>ข้อสอบนี้ไม่ได้แค่ท่องจำ — มันทดสอบว่าน้อง <strong>ออกแบบระบบ Data ได้จริงไหม</strong> ซึ่งทำให้คนที่ผ่านได้รับความเชื่อถือสูง</p>

<h2>📋 รูปแบบข้อสอบ (Exam Format)</h2>

<h3>ข้อมูลพื้นฐาน</h3>
<table>
<tr><th>รายละเอียด</th><th>ข้อมูล</th></tr>
<tr><td>ชื่อเต็ม</td><td>Google Cloud Professional Data Engineer</td></tr>
<tr><td>จำนวนข้อ</td><td>50-60 ข้อ (Multiple Choice / Multiple Select)</td></tr>
<tr><td>เวลาสอบ</td><td>2 ชั่วโมง</td></tr>
<tr><td>คะแนนผ่าน</td><td>ไม่ประกาศ (ประมาณ 70-80%)</td></tr>
<tr><td>ค่าสอบ</td><td>$200 USD (~7,000 บาท)</td></tr>
<tr><td>อายุ cert</td><td>2 ปี (ต้อง renew)</td></tr>
<tr><td>สอบที่ไหน</td><td>Kryterion Test Center หรือ Online Proctored</td></tr>
</table>

<h3>Exam Domains (สัดส่วนข้อสอบ)</h3>
<table>
<tr><th>Domain</th><th>สัดส่วน</th><th>หัวข้อหลัก</th></tr>
<tr><td>1. Designing Data Processing Systems</td><td>~22%</td><td>เลือก storage, compute, pipeline design</td></tr>
<tr><td>2. Ingesting and Processing Data</td><td>~25%</td><td>Batch/Streaming, Dataflow, Pub/Sub</td></tr>
<tr><td>3. Storing Data</td><td>~20%</td><td>BigQuery, Bigtable, Spanner, GCS</td></tr>
<tr><td>4. Preparing and Using Data for Analysis</td><td>~15%</td><td>Data Catalog, DLP, Dataprep</td></tr>
<tr><td>5. Maintaining and Automating</td><td>~18%</td><td>Monitoring, Security, IAM, Composer</td></tr>
</table>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะมี Case Study 2 ตัว (Flowlogistic, MJTelco) ที่ต้องอ่านก่อนสอบ Google เผยแพร่ Case Study ล่วงหน้า — อ่านให้เข้าใจก่อนวันสอบจริง จะได้ประหยัดเวลาในห้องสอบ!
</div>

<h2>🗺️ GCP Data Services Landscape</h2>

<p>ก่อนจะเริ่มอ่าน ให้น้องเข้าใจภาพรวมของบริการ GCP ที่เกี่ยวกับ Data Engineering:</p>

<h3>🧠 วิธีคิด: แบ่งตาม Data Lifecycle</h3>
<pre><code class="language-text">
Ingest          →    Process         →    Store           →    Analyze
─────────────────────────────────────────────────────────────────────
Pub/Sub              Dataflow             BigQuery             Looker
Cloud Storage        Dataproc             Cloud SQL            Data Studio
Transfer Service     Dataprep             Bigtable             BigQuery ML
IoT Core             Cloud Functions      Spanner              Vertex AI
                                          Firestore
                                          Memorystore

Orchestrate: Cloud Composer (Airflow), Workflows
Govern:      Data Catalog, DLP API, IAM
Monitor:     Cloud Monitoring, Cloud Logging, Audit Logs
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong> หลายคนจำบริการได้แต่ <strong>เลือกไม่ถูกว่าเมื่อไหร่ใช้อะไร</strong> ข้อสอบจะเน้น "why this service over that?" มากกว่าถามว่า service นี้ทำอะไร
</div>

<h2>📅 แผนการเตรียมสอบ (Study Timeline)</h2>

<h3>4 สัปดาห์ (สำหรับคนมีพื้นฐาน)</h3>
<table>
<tr><th>สัปดาห์</th><th>หัวข้อ</th><th>เป้าหมาย</th></tr>
<tr><td>Week 1</td><td>BigQuery, Cloud Storage, Data Transfer</td><td>เข้าใจ Storage layer ทั้งหมด</td></tr>
<tr><td>Week 2</td><td>Pub/Sub, Dataflow, Streaming</td><td>เข้าใจ Ingest + Process layer</td></tr>
<tr><td>Week 3</td><td>Composer, Dataproc, Catalog, DLP, IAM</td><td>เข้าใจ Orchestration + Governance</td></tr>
<tr><td>Week 4</td><td>Architecture Patterns, Case Studies, Practice Exam</td><td>ฝึกตัดสินใจเลือกสถาปัตยกรรม</td></tr>
</table>

<h3>8 สัปดาห์ (สำหรับคนเริ่มใหม่)</h3>
<p>ใช้ตารางเดียวกัน แต่ขยายแต่ละ week เป็น 2 สัปดาห์ บวกเวลาทำ hands-on labs บน Qwiklabs/Cloud Skills Boost</p>

<div class="tip-box">
<strong>💡 ทริค:</strong> Google มี <strong>Cloud Skills Boost (Qwiklabs)</strong> ที่ให้ทำ lab ฟรีทุกเดือน ใช้ประโยชน์จากตรงนี้ให้เต็มที่ เพราะ hands-on จะช่วยจำได้ดีกว่าอ่านอย่างเดียว
</div>

<h2>🔑 กุญแจสำคัญในการสอบผ่าน</h2>

<h3>1. เข้าใจ "เมื่อไหร่ใช้อะไร" (When to use what)</h3>
<pre><code class="language-text">
┌─────────────────────────────────────────────────────┐
│  ข้อมูลมาแบบ Streaming?                             │
│  ├── Yes → Pub/Sub + Dataflow                       │
│  └── No  → Batch?                                    │
│            ├── Structured → BigQuery (SQL-based)     │
│            ├── Unstructured → GCS + Dataflow         │
│            └── Hadoop/Spark → Dataproc               │
│                                                       │
│  ต้องการ SQL Analytics?                              │
│  ├── Petabytes → BigQuery                            │
│  ├── OLTP + Strong Consistency → Cloud Spanner       │
│  ├── OLTP + Single Region → Cloud SQL                │
│  └── Key-Value + Low Latency → Bigtable              │
│                                                       │
│  ต้อง Orchestrate?                                   │
│  ├── Complex DAGs → Cloud Composer                   │
│  └── Simple API Chain → Workflows                    │
└─────────────────────────────────────────────────────┘
</code></pre>

<h3>2. อ่าน Case Study ให้เข้าใจ</h3>
<p>Case Study ในข้อสอบจะให้สถานการณ์จริงของบริษัท เช่น:</p>
<ul>
<li><strong>Flowlogistic</strong> — บริษัท logistics ที่ต้อง track real-time shipment data</li>
<li><strong>MJTelco</strong> — บริษัท telco ที่ต้อง process network data ขนาดใหญ่</li>
</ul>
<p>อ่านล่วงหน้าได้ที่ <strong>cloud.google.com/certification/data-engineer</strong></p>

<h3>3. เข้าใจ Cost Optimization</h3>
<p>ข้อสอบจะถามเรื่อง cost บ่อย — ต้องรู้ว่าอะไรถูก อะไรแพง เมื่อไหร่ใช้ Flat-rate vs On-demand</p>

<h2>🛠️ เครื่องมือที่ต้องติดตั้ง</h2>

<pre><code class="language-bash">
# ติดตั้ง Google Cloud SDK
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
gcloud init

# ตรวจสอบ project
gcloud config list project
gcloud projects list

# ตั้งค่า default region
gcloud config set compute/region asia-southeast1

# เปิด API ที่จำเป็น
gcloud services enable bigquery.googleapis.com
gcloud services enable dataflow.googleapis.com
gcloud services enable pubsub.googleapis.com
gcloud services enable composer.googleapis.com
gcloud services enable datacatalog.googleapis.com
gcloud services enable dlp.googleapis.com
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> สร้าง GCP account ใหม่จะได้ <strong>$300 free credit</strong> ใช้ได้ 90 วัน ใช้ทำ lab ระหว่างเตรียมสอบได้สบายๆ
</div>

<h2>📖 ทรัพยากรแนะนำ</h2>

<ul>
<li><strong>Official Guide:</strong> cloud.google.com/certification/data-engineer</li>
<li><strong>Cloud Skills Boost:</strong> cloudskillsboost.google (Qwiklabs)</li>
<li><strong>Google Cloud Documentation:</strong> cloud.google.com/docs</li>
<li><strong>YouTube:</strong> Google Cloud Tech channel</li>
<li><strong>หนังสือ:</strong> "Official Google Cloud Certified Professional Data Engineer Study Guide" by Dan Sullivan</li>
</ul>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สมัคร GCP free trial account และ setup gcloud CLI</li>
<li>เปิด API ทั้งหมดที่แสดงด้านบน</li>
<li>ลอง run <code>gcloud services list --enabled</code> แล้ว screenshot ผลลัพธ์</li>
<li>อ่าน Case Study ทั้ง 2 ตัวจากเว็บ Google แล้วจดสรุปแต่ละตัวไม่เกิน 5 บรรทัด</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: GCP Professional Data Engineer Certification ครอบคลุมหัวข้ออะไรบ้าง?</strong><br/>A: ครอบคลุม 5 domains: Designing data processing systems, Ingesting/processing data, Storing data, Preparing data for analysis, และ Maintaining/automating data pipelines</li>
<li><strong>Q: ถ้าคุณต้องเลือกระหว่าง BigQuery กับ Bigtable สำหรับ analytics workload คุณจะเลือกอะไร?</strong><br/>A: BigQuery สำหรับ OLAP/analytics workload เพราะรองรับ SQL, columnar storage, serverless BigQuery เหมาะกับ ad-hoc query ส่วน Bigtable เหมาะกับ key-based lookup ที่ต้องการ low latency สูงมาก (< 10ms)</li>
</ol>
</div>
`
  },
  {
    number: 1,
    slug: 'bigquery-advanced',
    emoji: '📊',
    title: 'BigQuery Advanced',
    content: `
<h2>📊 ทำไม BigQuery ถึงเป็นหัวใจของ GCP Data Engineering?</h2>

<p>ลองนึกภาพว่าน้องทำงานที่บริษัท e-commerce ขนาดใหญ่ ข้อมูล order ทุกวันมี <strong>500 ล้าน rows</strong> ถ้าใช้ PostgreSQL ก็ query ช้ามาก แต่ BigQuery สามารถ scan ข้อมูล petabyte-scale ได้ใน <strong>วินาที</strong> เพราะมันเป็น serverless, columnar, massively parallel processing (MPP) engine ที่ Google ออกแบบมาโดยเฉพาะ</p>

<p>ในข้อสอบ GCP DE, <strong>BigQuery จะออกมากที่สุด</strong> ประมาณ 30-40% ของข้อสอบจะเกี่ยวกับ BigQuery ไม่ทางใดก็ทางหนึ่ง</p>

<h2>🏗️ BigQuery Architecture Deep Dive</h2>

<h3>Dremel + Colossus + Borg + Jupiter</h3>
<pre><code class="language-text">
┌─────────────────────────────────────────────────────┐
│                   BigQuery                           │
│                                                       │
│  ┌──────────┐   ┌──────────┐   ┌──────────────────┐ │
│  │  Dremel   │   │ Colossus │   │   Jupiter        │ │
│  │(Execution)│──▶│(Storage) │◀──│  (Network)       │ │
│  │  Engine   │   │Columnar  │   │  1 Petabit/sec   │ │
│  └──────────┘   │  Format  │   └──────────────────┘ │
│       │          └──────────┘                        │
│  ┌──────────┐                                        │
│  │   Borg   │  (Cluster Management)                  │
│  └──────────┘                                        │
└─────────────────────────────────────────────────────┘

Key: Storage และ Compute แยกกัน (Separated)
→ น้องจ่ายค่า storage ตามที่เก็บ
→ จ่ายค่า compute ตามที่ query
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> BigQuery แยก storage กับ compute ออกจากกัน นี่คือเหตุผลที่มัน scale ได้ดี ข้อสอบชอบถามเรื่องนี้มาก — "Why is BigQuery suitable for large-scale analytics?" คำตอบคือ separated storage and compute architecture
</div>

<h2>⚡ Query Optimization</h2>

<h3>1. Partitioning (แบ่งข้อมูลเป็นส่วนๆ)</h3>
<pre><code class="language-sql">
-- สร้างตาราง partition ตาม date
CREATE TABLE \`project.dataset.orders_partitioned\`
PARTITION BY DATE(order_date)
CLUSTER BY customer_id, product_category
AS
SELECT * FROM \`project.dataset.orders_raw\`;

-- Query ที่ใช้ partition pruning (scan น้อยลง = ถูกลง)
SELECT
  customer_id,
  SUM(amount) as total_spent
FROM \`project.dataset.orders_partitioned\`
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31'  -- partition pruning!
  AND product_category = 'Electronics'                     -- cluster pruning!
GROUP BY customer_id
ORDER BY total_spent DESC
LIMIT 100;

-- ตรวจสอบ partition info
SELECT
  table_name,
  partition_id,
  total_rows,
  total_logical_bytes
FROM \`project.dataset.INFORMATION_SCHEMA.PARTITIONS\`
WHERE table_name = 'orders_partitioned';
</code></pre>

<h3>ประเภทของ Partitioning</h3>
<table>
<tr><th>ประเภท</th><th>ใช้เมื่อไหร่</th><th>ตัวอย่าง</th></tr>
<tr><td>Time-unit (DAY/HOUR/MONTH/YEAR)</td><td>มี date/timestamp column</td><td>PARTITION BY DATE(created_at)</td></tr>
<tr><td>Integer range</td><td>มี integer column ที่กระจายดี</td><td>PARTITION BY RANGE_BUCKET(user_id, ...)</td></tr>
<tr><td>Ingestion time (_PARTITIONTIME)</td><td>ไม่มี date column ในข้อมูล</td><td>PARTITION BY _PARTITIONDATE</td></tr>
</table>

<h3>2. Clustering (จัดเรียงข้อมูลภายใน Partition)</h3>
<pre><code class="language-sql">
-- Cluster ได้สูงสุด 4 columns
-- ลำดับสำคัญ! column ที่ filter บ่อยสุดใส่ก่อน
CREATE TABLE \`project.dataset.events\`
PARTITION BY DATE(event_date)
CLUSTER BY event_type, country, user_id, device_type
AS SELECT * FROM \`project.dataset.events_raw\`;
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>Partition column ต้องเป็น DATE, TIMESTAMP, DATETIME หรือ INTEGER เท่านั้น</li>
<li>ตาราง 1 ตัวมีได้สูงสุด <strong>4,000 partitions</strong></li>
<li>Clustering ไม่ guarantee data ordering ทั้งหมด — แค่ช่วย eliminate blocks ที่ไม่เกี่ยว</li>
<li><strong>อย่า partition ด้วย column ที่มี cardinality สูงเกินไป</strong> เช่น user_id (จะได้ partition เล็กมากเกินไป)</li>
</ul>
</div>

<h2>💰 Pricing Models & Slots</h2>

<h3>On-demand vs Capacity (Flat-rate)</h3>
<pre><code class="language-text">
On-demand Pricing:
├── $6.25 per TB scanned (ข้อมูลที่ query อ่าน)
├── ข้อดี: ไม่ต้อง commit, จ่ายตามใช้
├── ข้อเสีย: ค่าใช้จ่ายผันผวน, ไม่ guarantee performance
└── เหมาะ: ทีมเล็ก, workload ไม่แน่นอน

Capacity Pricing (Editions):
├── Standard Edition: ~$0.04/slot/hour
├── Enterprise Edition: ~$0.06/slot/hour  
├── Enterprise Plus: ~$0.10/slot/hour
├── ข้อดี: ค่าใช้จ่ายคาดการณ์ได้, guaranteed compute
├── ข้อเสีย: ต้อง commit, อาจเกินความต้องการ
└── เหมาะ: ทีมใหญ่, query เยอะ, ต้องการ performance guarantee

Slots = หน่วยของ compute
├── 1 slot ≈ 1 vCPU + RAM
├── On-demand: shared pool (2,000 slots max/project)
└── Capacity: dedicated/reserved slots
</code></pre>

<h3>ตรวจสอบ Slot Usage</h3>
<pre><code class="language-sql">
-- ดู slot utilization ผ่าน INFORMATION_SCHEMA
SELECT
  period_start,
  period_slot_ms,
  project_id,
  reservation_id,
  SAFE_DIVIDE(period_slot_ms, 60000) as slot_minutes
FROM \`region-asia-southeast1\`.INFORMATION_SCHEMA.JOBS_TIMELINE
WHERE period_start > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR)
ORDER BY period_start DESC;
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะถามว่า "บริษัท query BigQuery วันละ 100 TB ควรใช้ pricing model ไหน?" — ถ้า query เยอะประจำ ให้ตอบ <strong>Capacity pricing (Editions)</strong> ถ้า query น้อยไม่สม่ำเสมอ ให้ตอบ <strong>On-demand</strong>
</div>

<h2>🤖 BigQuery ML</h2>

<p>BigQuery ML ให้น้องสร้าง ML model ได้ <strong>ด้วย SQL</strong> ไม่ต้องเขียน Python ไม่ต้องย้ายข้อมูลออกจาก BigQuery</p>

<pre><code class="language-sql">
-- สร้าง model ทำนาย customer churn
CREATE OR REPLACE MODEL \`project.dataset.churn_model\`
OPTIONS(
  model_type='LOGISTIC_REG',
  input_label_cols=['is_churned'],
  auto_class_weights=TRUE,
  data_split_method='AUTO_SPLIT'
) AS
SELECT
  total_purchases,
  days_since_last_order,
  avg_order_value,
  total_support_tickets,
  account_age_days,
  is_churned
FROM \`project.dataset.customer_features\`
WHERE signup_date < '2024-01-01';

-- ประเมิน model
SELECT * FROM ML.EVALUATE(MODEL \`project.dataset.churn_model\`);

-- ทำนาย
SELECT
  customer_id,
  predicted_is_churned,
  predicted_is_churned_probs
FROM ML.PREDICT(
  MODEL \`project.dataset.churn_model\`,
  (SELECT * FROM \`project.dataset.customer_features\`
   WHERE signup_date >= '2024-01-01')
);

-- Export model ไป Vertex AI ได้ด้วย!
-- ALTER MODEL \`project.dataset.churn_model\`
-- SET OPTIONS (vertex_ai_model_id='churn_v1');
</code></pre>

<h3>BQML Model Types ที่ต้องรู้</h3>
<table>
<tr><th>Model Type</th><th>ใช้งาน</th><th>ตัวอย่าง</th></tr>
<tr><td>LINEAR_REG</td><td>Regression</td><td>ทำนายราคา</td></tr>
<tr><td>LOGISTIC_REG</td><td>Classification</td><td>ทำนาย churn</td></tr>
<tr><td>KMEANS</td><td>Clustering</td><td>แบ่ง segment ลูกค้า</td></tr>
<tr><td>ARIMA_PLUS</td><td>Time Series</td><td>พยากรณ์ยอดขาย</td></tr>
<tr><td>TENSORFLOW</td><td>Import TF model</td><td>ใช้ custom model ใน BQ</td></tr>
<tr><td>BOOSTED_TREE_CLASSIFIER</td><td>XGBoost Classification</td><td>Fraud detection</td></tr>
</table>

<h2>📊 BI Engine</h2>

<p>BI Engine คือ in-memory analysis service ที่ทำให้ Looker, Data Studio, Connected Sheets query BigQuery ได้ <strong>ภายใน 1 วินาที</strong></p>

<pre><code class="language-sql">
-- BI Engine จะ cache query results โดยอัตโนมัติ
-- เปิดใช้ผ่าน Console: BigQuery > BI Engine > Create Reservation

-- ตรวจสอบ BI Engine utilization
SELECT * FROM \`region-asia-southeast1\`.INFORMATION_SCHEMA.BI_CAPACITIES;
</code></pre>

<pre><code class="language-bash">
# สร้าง BI Engine reservation ด้วย bq CLI
bq update \\
  --project_id=my-project \\
  --bi_reservation_size=10GB \\
  --location=asia-southeast1
</code></pre>

<h2>🔧 การจัดการข้อมูลใน BigQuery</h2>

<h3>Materialized Views</h3>
<pre><code class="language-sql">
-- Materialized View = pre-computed, auto-refreshed
CREATE MATERIALIZED VIEW \`project.dataset.daily_revenue_mv\`
PARTITION BY report_date
CLUSTER BY region
AS
SELECT
  DATE(order_timestamp) as report_date,
  region,
  product_category,
  COUNT(*) as order_count,
  SUM(revenue) as total_revenue,
  AVG(revenue) as avg_revenue
FROM \`project.dataset.orders_partitioned\`
GROUP BY 1, 2, 3;

-- BigQuery จะ automatic rewrite queries ที่ match กับ MV
-- = ไม่ต้องแก้ query เดิม ก็ได้ performance boost!
</code></pre>

<h3>Scheduled Queries</h3>
<pre><code class="language-bash">
# สร้าง scheduled query ด้วย bq CLI
bq query \\
  --use_legacy_sql=false \\
  --destination_table=project:dataset.daily_report \\
  --schedule='every 24 hours' \\
  --display_name='Daily Revenue Report' \\
  'SELECT DATE(order_date) as dt, SUM(revenue) as total
   FROM \`project.dataset.orders\`
   WHERE order_date = CURRENT_DATE() - 1
   GROUP BY 1'
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบชอบถาม: "ควรใช้ Materialized View หรือ Scheduled Query?" — <strong>Materialized View</strong> ดีกว่าเพราะ auto-refresh, auto query rewrite แต่มีข้อจำกัดคือรองรับแค่ aggregate queries และไม่รองรับ JOINs ที่ซับซ้อน ถ้า query ซับซ้อนมากให้ใช้ <strong>Scheduled Query</strong>
</div>

<h2>🔐 BigQuery Security</h2>

<pre><code class="language-sql">
-- Column-level security
-- สร้าง policy tag taxonomy ก่อน
-- แล้ว assign policy tag ให้กับ column ที่มี sensitive data

-- Row-level security
CREATE ROW ACCESS POLICY region_filter
ON \`project.dataset.sales\`
GRANT TO ('user:analyst@company.com')
FILTER USING (region = 'APAC');

-- Authorized Views (ให้ดู view ได้แต่ไม่ให้ดู table ตรงๆ)
-- 1. สร้าง view ใน dataset อื่น
-- 2. Authorize view ใน source dataset settings
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้างตาราง BigQuery partition ด้วย DATE column และ cluster ด้วย 2 columns</li>
<li>เปรียบเทียบ bytes scanned ระหว่าง query ที่ใช้ partition filter กับไม่ใช้ (ดูที่ Query Results → Job Information)</li>
<li>สร้าง BQML model ด้วย model_type='LINEAR_REG' จาก public dataset <code>bigquery-public-data.austin_bikeshare.bikeshare_trips</code></li>
<li>สร้าง Materialized View สำหรับ aggregate query ที่ใช้บ่อย</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: Partitioning กับ Clustering ต่างกันอย่างไร?</strong><br/>A: Partitioning แบ่งข้อมูลเป็น segments ใหญ่ๆ ตาม column value (date, integer range) ช่วย eliminate partitions ทั้งก้อน ส่วน Clustering จัดเรียงข้อมูล <em>ภายใน</em> partition ช่วย skip blocks ที่ไม่เกี่ยวข้อง ใช้ร่วมกันจะ optimize ได้ดีที่สุด</li>
<li><strong>Q: เมื่อไหร่ควรใช้ BigQuery ML แทน Vertex AI?</strong><br/>A: BQML เหมาะกับ standard ML models ที่ data analysts ทำได้เอง ข้อมูลอยู่ใน BQ อยู่แล้ว ไม่ต้อง export ส่วน Vertex AI เหมาะกับ custom models, deep learning, หรือ model ที่ต้อง fine-tune มาก</li>
<li><strong>Q: BigQuery On-demand vs Capacity pricing เลือกอย่างไร?</strong><br/>A: ดูที่ monthly scan volume ถ้า scan > 250 TB/month → Capacity คุ้มกว่า ถ้า scan < 100 TB/month → On-demand ถูกกว่า ช่วงกลางต้องคำนวณดู</li>
</ol>
</div>
`
  },
  {
    number: 2,
    slug: 'cloud-storage',
    emoji: '📦',
    title: 'Cloud Storage & Transfer',
    content: `
<h2>📦 ทำไมต้องเข้าใจ Cloud Storage ให้ลึก?</h2>

<p>Cloud Storage (GCS) เป็นเหมือน <strong>"ห้องเก็บของ universal"</strong> ของ GCP ทุกอย่างเริ่มต้นที่นี่ — raw data จาก source systems, Dataflow temp files, BigQuery export, ML training data ถ้าน้องเข้าใจ GCS ดี จะตอบคำถามข้อสอบได้อีกหลายข้อ</p>

<h2>🗂️ Storage Classes</h2>

<table>
<tr><th>Class</th><th>Min Storage</th><th>Access Cost</th><th>Use Case</th></tr>
<tr><td><strong>Standard</strong></td><td>ไม่มี</td><td>ถูก (free retrieval)</td><td>Hot data, ใช้บ่อย</td></tr>
<tr><td><strong>Nearline</strong></td><td>30 วัน</td><td>$0.01/GB read</td><td>เข้าถึง ≤ 1 ครั้ง/เดือน</td></tr>
<tr><td><strong>Coldline</strong></td><td>90 วัน</td><td>$0.02/GB read</td><td>เข้าถึง ≤ 1 ครั้ง/ไตรมาส</td></tr>
<tr><td><strong>Archive</strong></td><td>365 วัน</td><td>$0.05/GB read</td><td>เข้าถึง < 1 ครั้ง/ปี</td></tr>
</table>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะถาม "ข้อมูล log เก่า 3 ปี เข้าถึงน้อยมาก ควรเก็บ class ไหน?" — ตอบ <strong>Archive</strong> ถ้าถาม "ข้อมูล backup ที่ต้อง restore ได้ภายใน 1 ชม." — ตอบ <strong>Nearline หรือ Coldline</strong> (ทุก class access ได้ทันที ไม่ต้อง restore delay เหมือน AWS Glacier!)
</div>

<h3>🧠 วิธีคิด: เลือก Storage Class</h3>
<pre><code class="language-text">
ใช้ข้อมูลบ่อยแค่ไหน?
├── ทุกวัน / ทุกชั่วโมง → Standard
├── เดือนละครั้ง → Nearline  
├── ไตรมาสละครั้ง → Coldline
└── ปีละครั้ง / เก็บตาม compliance → Archive

⚠️ สำคัญ: ค่า storage ถูกลง แต่ค่า retrieval แพงขึ้น!
ต้องชั่ง trade-off ระหว่าง storage cost vs access cost
</code></pre>

<h2>📋 Lifecycle Management</h2>

<p>Lifecycle rules ช่วยย้ายข้อมูลไปยัง class ที่ถูกกว่าโดยอัตโนมัติ หรือลบข้อมูลเก่าทิ้ง</p>

<pre><code class="language-json">
{
  "lifecycle": {
    "rule": [
      {
        "action": {
          "type": "SetStorageClass",
          "storageClass": "NEARLINE"
        },
        "condition": {
          "age": 30,
          "matchesStorageClass": ["STANDARD"]
        }
      },
      {
        "action": {
          "type": "SetStorageClass",
          "storageClass": "COLDLINE"
        },
        "condition": {
          "age": 90,
          "matchesStorageClass": ["NEARLINE"]
        }
      },
      {
        "action": {
          "type": "SetStorageClass",
          "storageClass": "ARCHIVE"
        },
        "condition": {
          "age": 365,
          "matchesStorageClass": ["COLDLINE"]
        }
      },
      {
        "action": {
          "type": "Delete"
        },
        "condition": {
          "age": 2555,
          "matchesStorageClass": ["ARCHIVE"]
        }
      }
    ]
  }
}
</code></pre>

<pre><code class="language-bash">
# Apply lifecycle rule
gsutil lifecycle set lifecycle.json gs://my-data-bucket/

# ดู lifecycle ปัจจุบัน
gsutil lifecycle get gs://my-data-bucket/
</code></pre>

<h2>🛠️ gsutil Commands ที่ต้องรู้</h2>

<pre><code class="language-bash">
# สร้าง bucket (dual-region สำหรับ high availability)
gsutil mb -l ASIA -c STANDARD gs://my-data-lake-prod/

# Upload ไฟล์ (parallel upload สำหรับไฟล์ใหญ่)
gsutil -m cp -r ./local_data/ gs://my-data-lake-prod/raw/

# Parallel composite upload (ไฟล์ > 150MB)
gsutil -o GSUtil:parallel_composite_upload_threshold=150M \\
  cp large_file.parquet gs://my-data-lake-prod/raw/

# Sync directory (เหมือน rsync)
gsutil -m rsync -r -d ./local/ gs://my-data-lake-prod/synced/

# ตั้งค่า ACL
gsutil iam ch user:analyst@company.com:objectViewer gs://my-data-lake-prod/

# ดู metadata
gsutil stat gs://my-data-lake-prod/raw/data.parquet

# ดู size ของ bucket
gsutil du -sh gs://my-data-lake-prod/

# เปิด versioning
gsutil versioning set on gs://my-data-lake-prod/

# เปิด requester pays
gsutil requesterpays set on gs://my-shared-data/
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li><code>gsutil cp</code> กับ <code>gsutil rsync</code> ต่างกัน — rsync จะลบไฟล์ที่ไม่อยู่ใน source (ถ้าใช้ -d flag)</li>
<li>Bucket name ต้อง <strong>globally unique</strong> ทั่วทั้ง GCP</li>
<li>เปิด versioning ก่อนถ้ากลัวข้อมูลหาย — แต่จะเพิ่มค่า storage</li>
<li><strong>gsutil -m</strong> flag = multi-threaded สำคัญมากสำหรับ upload/download ไฟล์เยอะๆ</li>
</ul>
</div>

<h2>🔄 Data Transfer Solutions</h2>

<h3>เลือก Transfer Solution ที่เหมาะสม</h3>
<pre><code class="language-text">
ข้อมูลอยู่ที่ไหน? ขนาดเท่าไหร่?
│
├── Online (Internet) ──┬── < 1 TB     → gsutil / gcloud storage cp
│                       ├── 1-10 TB    → Storage Transfer Service
│                       └── > 10 TB    → Storage Transfer Service (scheduled)
│
├── Other Cloud ────────── AWS S3 / Azure → Storage Transfer Service
│                          (built-in connector, ไม่ต้อง download ก่อน)
│
├── On-premise ─────────┬── < 20 TB    → Storage Transfer Service (agent)
│                       ├── 20TB-1PB   → Transfer Appliance
│                       └── > 1 PB     → Transfer Appliance (multiple)
│
└── HDFS ───────────────── Hadoop cluster → DistCp with Cloud Storage Connector
</code></pre>

<h3>Storage Transfer Service</h3>
<pre><code class="language-bash">
# Transfer จาก AWS S3 ไป GCS
gcloud transfer jobs create \\
  s3://source-bucket/data/ \\
  gs://destination-bucket/data/ \\
  --source-creds-file=aws-creds.json \\
  --name=s3-to-gcs-daily \\
  --schedule-starts='2024-01-01T00:00:00Z' \\
  --schedule-repeats-every='24h'

# Transfer ระหว่าง GCS buckets
gcloud transfer jobs create \\
  gs://source-bucket/ \\
  gs://dest-bucket/ \\
  --include-prefixes='raw/2024/' \\
  --delete-from='source-after-transfer'

# ดูสถานะ
gcloud transfer jobs list
gcloud transfer jobs describe JOB_NAME
</code></pre>

<h2>🔐 Security & Access Control</h2>

<pre><code class="language-bash">
# Uniform bucket-level access (แนะนำ! ง่ายกว่า ACL)
gsutil uniformbucketlevelaccess set on gs://my-bucket/

# Customer-managed encryption keys (CMEK)
gsutil kms authorize -p my-project -k \\
  projects/my-project/locations/global/keyRings/my-ring/cryptoKeys/my-key

gsutil -o 'GSUtil:encryption_key=projects/...' cp data.csv gs://my-bucket/

# Signed URLs (ให้ external user access ชั่วคราว)
gsutil signurl -d 1h service-account-key.json gs://my-bucket/shared-report.pdf
# จะได้ URL ที่ใช้ได้ 1 ชั่วโมง
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะถามเรื่อง <strong>Signed URLs</strong> เมื่อต้องแชร์ข้อมูลกับ external partner โดยไม่ต้องให้ GCP account — คำตอบคือ Signed URL เสมอ! ถ้าต้องแชร์ทั้ง bucket ให้ใช้ <strong>Signed Policy Document</strong>
</div>

<h2>🏗️ Data Lake Pattern บน GCS</h2>

<pre><code class="language-text">
gs://company-data-lake/
├── raw/                    ← ข้อมูลดิบจาก source (immutable!)
│   ├── orders/2024/01/01/
│   ├── customers/2024/01/01/
│   └── events/2024/01/01/
├── staging/                ← ข้อมูลที่ transform แล้ว
│   ├── orders_cleaned/
│   └── customers_deduped/
├── curated/                ← ข้อมูลพร้อมใช้งาน (gold layer)
│   ├── dim_customer/
│   └── fact_orders/
├── temp/                   ← Dataflow temp files
│   └── dataflow-staging/
└── archive/                ← ข้อมูลเก่า (Archive class)
    └── raw_2022/
</code></pre>

<pre><code class="language-bash">
# สร้าง bucket structure
for prefix in raw staging curated temp archive; do
  gsutil mb -l asia-southeast1 gs://company-data-lake-\${prefix}/
done

# หรือใช้ bucket เดียวกับ prefix ต่างกัน
gsutil mb -l asia-southeast1 gs://company-data-lake/
</code></pre>

<h2>🔔 Object Notifications</h2>

<pre><code class="language-bash">
# แจ้งเตือนเมื่อมีไฟล์ใหม่ → trigger Cloud Function
gsutil notification create \\
  -t projects/my-project/topics/gcs-events \\
  -f json \\
  -e OBJECT_FINALIZE \\
  gs://my-data-lake/raw/

# ดู notifications ที่ตั้งไว้
gsutil notification list gs://my-data-lake/
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง GCS bucket ชื่อ <code>[your-name]-data-lake-lab</code> region asia-southeast1</li>
<li>Upload ไฟล์ขนาด > 10MB ด้วย <code>gsutil -m cp</code> พร้อม parallel upload</li>
<li>สร้าง lifecycle rule: Standard → Nearline หลัง 30 วัน → Coldline หลัง 90 วัน → Delete หลัง 365 วัน</li>
<li>สร้าง Pub/Sub notification สำหรับ OBJECT_FINALIZE event</li>
<li>สร้าง Signed URL ที่หมดอายุใน 2 ชั่วโมง</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: ถ้าต้อง migrate ข้อมูล 50TB จาก on-premise มา GCS ควรใช้วิธีไหน?</strong><br/>A: ใช้ <strong>Transfer Appliance</strong> เพราะ upload ผ่าน internet 50TB จะช้ามาก (ต้องใช้เวลาหลายวันถึงสัปดาห์) Transfer Appliance เป็นอุปกรณ์จริงที่ Google ส่งมาให้ copy ข้อมูลลง แล้วส่งกลับไป</li>
<li><strong>Q: Standard กับ Nearline ต่างกันอย่างไร? เมื่อไหร่ถึงคุ้มที่จะใช้ Nearline?</strong><br/>A: Standard ค่า storage แพงกว่าแต่ retrieval ฟรี Nearline ค่า storage ถูกกว่าแต่มี retrieval cost $0.01/GB ถ้าเข้าถึงข้อมูลน้อยกว่าเดือนละครั้ง Nearline คุ้มกว่า</li>
<li><strong>Q: Uniform bucket-level access คืออะไร? ทำไมควรใช้?</strong><br/>A: แทนที่จะ manage ACL ระดับ object (ซับซ้อน) ใช้ IAM ระดับ bucket แทน ง่ายกว่า audit ง่ายกว่า ป้องกัน misconfiguration</li>
</ol>
</div>
`
  },
  {
    number: 3,
    slug: 'pubsub-dataflow',
    emoji: '🌊',
    title: 'Pub/Sub & Dataflow',
    content: `
<h2>🌊 ทำไม Streaming ถึงสำคัญมากในข้อสอบ?</h2>

<p>นึกภาพว่าน้องทำระบบ fraud detection ให้ธนาคาร ทุก transaction ที่เกิดขึ้นต้อง <strong>วิเคราะห์ภายใน 5 วินาที</strong> ถ้าน้องรอ batch process ตอนดึก ลูกค้าอาจโดนโกงไปแล้ว 1 ล้านบาท! นี่คือเหตุผลที่ <strong>Pub/Sub + Dataflow</strong> เป็นคู่หูที่ออกข้อสอบบ่อยที่สุด</p>

<h2>📨 Cloud Pub/Sub Deep Dive</h2>

<h3>Core Concepts</h3>
<pre><code class="language-text">
Publisher → Topic → Subscription → Subscriber

                   ┌──── Sub A (Pull) ──── Worker 1
                   │                       Worker 2
Topic ────────────┤
  (messages)       │
                   ├──── Sub B (Push) ──── Cloud Run endpoint
                   │
                   └──── Sub C (BigQuery) ── BigQuery table (direct!)
                   
Messages:
├── Data (payload, base64 encoded)
├── Attributes (key-value metadata)
├── Message ID (unique, assigned by Pub/Sub)
├── Publish Time
└── Ordering Key (optional, สำหรับ ordered delivery)
</code></pre>

<h3>Pub/Sub Commands</h3>
<pre><code class="language-bash">
# สร้าง topic
gcloud pubsub topics create transactions

# สร้าง subscription (Pull)
gcloud pubsub subscriptions create txn-processor \\
  --topic=transactions \\
  --ack-deadline=60 \\
  --message-retention-duration=7d \\
  --expiration-period=never

# สร้าง subscription (Push ไปยัง Cloud Run)
gcloud pubsub subscriptions create txn-push \\
  --topic=transactions \\
  --push-endpoint=https://my-service-xxx.run.app/process

# สร้าง BigQuery subscription (direct write!)
gcloud pubsub subscriptions create txn-bq \\
  --topic=transactions \\
  --bigquery-table=project:dataset.transactions \\
  --use-topic-schema

# Publish message
gcloud pubsub topics publish transactions \\
  --message='{"txn_id":"T001","amount":5000,"merchant":"shop_a"}' \\
  --attribute=region=apac,type=purchase

# Pull messages
gcloud pubsub subscriptions pull txn-processor \\
  --limit=10 --auto-ack
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> Pub/Sub BigQuery Subscription คือฟีเจอร์ใหม่ที่ข้อสอบ update ล่าสุดออกมา! มันเขียนข้อมูลจาก Pub/Sub ลง BigQuery <strong>โดยไม่ต้องใช้ Dataflow</strong> เหมาะกับกรณีที่แค่ต้องการ store ข้อมูล ไม่ต้อง transform อะไร = ง่ายกว่า + ถูกกว่า
</div>

<h3>Dead Letter Topics</h3>
<pre><code class="language-bash">
# สร้าง dead letter topic สำหรับ message ที่ process ไม่สำเร็จ
gcloud pubsub topics create transactions-dlq

gcloud pubsub subscriptions update txn-processor \\
  --dead-letter-topic=transactions-dlq \\
  --max-delivery-attempts=5
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>Pub/Sub guarantee <strong>at-least-once delivery</strong> — message อาจมาซ้ำ! ต้องทำ deduplication ด้วยตัวเอง</li>
<li>Message retention default = <strong>7 วัน</strong> ถ้าไม่มี subscriber มารับ message จะหาย</li>
<li>Ordering guarantee ได้แค่ภายใน <strong>ordering key เดียวกัน</strong> ไม่ guarantee ข้าม key</li>
<li>Message size limit = <strong>10 MB</strong> ถ้าข้อมูลใหญ่กว่า ให้เก็บใน GCS แล้วส่ง reference ผ่าน Pub/Sub</li>
</ul>
</div>

<h2>🌊 Dataflow (Apache Beam)</h2>

<h3>ทำไมต้อง Dataflow?</h3>
<p>Dataflow คือ <strong>fully managed</strong> service สำหรับ run Apache Beam pipelines ทั้ง batch และ streaming ใช้ codebase เดียวกัน เปลี่ยนแค่ runner</p>

<h3>Dataflow Pipeline: Streaming Example</h3>
<pre><code class="language-python">
import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions, StandardOptions
from apache_beam.transforms.window import FixedWindows, SlidingWindows, Sessions
from apache_beam.transforms.trigger import AfterWatermark, AfterProcessingTime, AccumulationMode
import json

class ParseTransaction(beam.DoFn):
    """Parse JSON message จาก Pub/Sub"""
    def process(self, element):
        try:
            record = json.loads(element.decode('utf-8'))
            # Validate required fields
            required = ['txn_id', 'amount', 'merchant', 'timestamp']
            if all(k in record for k in required):
                yield record
            else:
                # ส่งไป dead letter
                yield beam.pvalue.TaggedOutput('failed', element)
        except json.JSONDecodeError:
            yield beam.pvalue.TaggedOutput('failed', element)


class DetectFraud(beam.DoFn):
    """ตรวจจับ fraud: ยอดสูงผิดปกติ"""
    def process(self, element):
        if element['amount'] > 50000:
            element['is_fraud'] = True
            element['fraud_reason'] = 'high_amount'
        else:
            element['is_fraud'] = False
        yield element


def run():
    options = PipelineOptions([
        '--project=my-project',
        '--region=asia-southeast1',
        '--runner=DataflowRunner',
        '--temp_location=gs://my-bucket/temp/',
        '--staging_location=gs://my-bucket/staging/',
        '--streaming',
        '--autoscaling_algorithm=THROUGHPUT_BASED',
        '--max_num_workers=10',
        '--machine_type=n1-standard-4',
    ])
    options.view_as(StandardOptions).streaming = True

    with beam.Pipeline(options=options) as p:
        # อ่านจาก Pub/Sub
        messages = (
            p
            | 'ReadPubSub' >> beam.io.ReadFromPubSub(
                topic='projects/my-project/topics/transactions',
                timestamp_attribute='event_timestamp'
            )
        )

        # Parse + tag failed messages
        parsed = messages | 'Parse' >> beam.ParDo(
            ParseTransaction()
        ).with_outputs('failed', main='parsed')

        # Detect fraud
        processed = (
            parsed['parsed']
            | 'DetectFraud' >> beam.ParDo(DetectFraud())
        )

        # Windowing: 5-minute fixed windows
        windowed = (
            processed
            | 'Window' >> beam.WindowInto(
                FixedWindows(5 * 60),  # 5 minutes
                trigger=AfterWatermark(
                    early=AfterProcessingTime(60),  # early firing ทุก 1 นาที
                    late=AfterProcessingTime(3600)   # late data ยอมรับ 1 ชม.
                ),
                accumulation_mode=AccumulationMode.ACCUMULATING,
                allowed_lateness=3600
            )
        )

        # เขียนลง BigQuery
        windowed | 'WriteBQ' >> beam.io.WriteToBigQuery(
            table='my-project:dataset.transactions_processed',
            schema='txn_id:STRING,amount:FLOAT,merchant:STRING,'
                   'timestamp:TIMESTAMP,is_fraud:BOOLEAN,fraud_reason:STRING',
            write_disposition=beam.io.BigQueryDisposition.WRITE_APPEND,
            create_disposition=beam.io.BigQueryDisposition.CREATE_IF_NEEDED,
            method='STREAMING_INSERTS'
        )

        # Dead letter → GCS
        parsed['failed'] | 'WriteDeadLetter' >> beam.io.WriteToText(
            'gs://my-bucket/dead-letter/failed',
            file_name_suffix='.json'
        )

if __name__ == '__main__':
    run()
</code></pre>

<h2>🪟 Windowing Deep Dive</h2>

<pre><code class="language-text">
1. Fixed Windows (Tumbling)
   |----5min----|----5min----|----5min----|
   ไม่ overlap, ไม่มี gap

2. Sliding Windows
   |----5min----| 
      |----5min----|
         |----5min----|
   overlap ตาม slide period (เช่น slide ทุก 1 นาที)

3. Session Windows  
   |--events--|  gap  |--events--|  gap  |--events--|
   จบ session เมื่อไม่มี event เข้ามาเกิน gap duration

4. Global Window (default)
   |────────── ทั้งหมดอยู่ใน window เดียว ──────────|
   ใช้กับ batch processing
</code></pre>

<pre><code class="language-python">
# Sliding Window: คำนวณ running average ทุก 1 นาที ย้อนหลัง 5 นาที
from apache_beam.transforms.window import SlidingWindows

windowed = (
    events
    | 'SlidingWindow' >> beam.WindowInto(
        SlidingWindows(size=300, period=60)  # 5min window, 1min slide
    )
    | 'CalcAvg' >> beam.CombineGlobally(
        beam.combiners.MeanCombineFn()
    ).without_defaults()
)

# Session Window: group events per user session (gap 30 นาที)
from apache_beam.transforms.window import Sessions

windowed = (
    events
    | 'AddKey' >> beam.Map(lambda x: (x['user_id'], x))
    | 'SessionWindow' >> beam.WindowInto(Sessions(30 * 60))
    | 'GroupByKey' >> beam.GroupByKey()
)
</code></pre>

<h2>⏰ Triggers & Watermarks</h2>

<h3>🧠 วิธีคิด: Watermark คืออะไร?</h3>
<pre><code class="language-text">
Watermark = "ระบบมั่นใจว่าได้รับข้อมูลทั้งหมดก่อนเวลานี้แล้ว"

Timeline:
─────|──────────|──────────|──────────|────────▶
     10:00      10:05      10:10      10:15    (Event Time)
                      ↑
                 Watermark ณ ตอนนี้
                 = "ได้รับ event ก่อน 10:05 ครบแล้ว"

Late data = event ที่มี timestamp < watermark
เช่น event เวลา 10:03 แต่มาถึงตอน watermark อยู่ที่ 10:08
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบชอบถามเรื่อง <strong>late data handling</strong> จำไว้:
<ul>
<li><strong>AfterWatermark</strong> = fire เมื่อ watermark ผ่าน end of window</li>
<li><strong>early firing</strong> = ให้ผลลัพธ์บางส่วนก่อน watermark ถึง</li>
<li><strong>late firing</strong> = ยอมรับ late data และ update ผลลัพธ์</li>
<li><strong>ACCUMULATING</strong> = late data รวมกับ data เก่า / <strong>DISCARDING</strong> = คิดแค่ late data ใหม่</li>
</ul>
</div>

<h2>🚀 Dataflow Deployment</h2>

<pre><code class="language-bash">
# Deploy streaming pipeline
python pipeline.py \\
  --runner=DataflowRunner \\
  --project=my-project \\
  --region=asia-southeast1 \\
  --temp_location=gs://my-bucket/temp/ \\
  --staging_location=gs://my-bucket/staging/ \\
  --streaming \\
  --max_num_workers=20 \\
  --autoscaling_algorithm=THROUGHPUT_BASED \\
  --experiments=enable_streaming_engine

# Update streaming pipeline (ไม่ต้อง stop!)
python pipeline.py \\
  --runner=DataflowRunner \\
  --update \\
  --job_name=existing-job-name \\
  --transform_name_mapping='{"OldTransform":"NewTransform"}'

# Drain pipeline (process remaining แล้ว stop)
gcloud dataflow jobs drain JOB_ID --region=asia-southeast1

# Cancel pipeline (stop ทันที)
gcloud dataflow jobs cancel JOB_ID --region=asia-southeast1
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li><strong>Drain vs Cancel:</strong> Drain = ให้ process message ที่ค้างอยู่จนเสร็จก่อน stop / Cancel = หยุดทันที อาจสูญเสียข้อมูล ข้อสอบถามบ่อย!</li>
<li>Update pipeline ได้แค่เมื่อ <strong>pipeline graph compatible</strong> ถ้า change graph structure ต้อง drain + deploy ใหม่</li>
<li>Streaming Engine ช่วยลด worker resource usage — เปิดเสมอสำหรับ streaming jobs</li>
</ul>
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง Pub/Sub topic และ subscription แล้ว publish 10 messages</li>
<li>เขียน Dataflow pipeline (DirectRunner) ที่อ่านจาก Pub/Sub, parse JSON, เขียนลง BigQuery</li>
<li>ทดลอง FixedWindows 2 นาที แล้ว aggregate count</li>
<li>เพิ่ม Dead Letter Queue สำหรับ message ที่ parse ไม่ได้</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: Pub/Sub pull กับ push subscription ต่างกันอย่างไร?</strong><br/>A: Pull = subscriber เป็นฝ่าย poll message เอง เหมาะกับ consumer ที่ control rate ได้ Push = Pub/Sub ส่ง HTTP request ไปยัง endpoint เหมาะกับ serverless (Cloud Run, Functions)</li>
<li><strong>Q: Watermark คืออะไร? ทำไมถึงสำคัญใน streaming?</strong><br/>A: Watermark คือ estimate ว่าระบบได้รับ event ทั้งหมดก่อนเวลาหนึ่งๆ แล้ว ใช้ตัดสินว่าเมื่อไหร่ window result ครบ และ data ไหนเป็น late data</li>
<li><strong>Q: Dataflow Drain vs Cancel ต่างกันอย่างไร?</strong><br/>A: Drain = graceful shutdown ที่ process in-flight messages จนเสร็จ Cancel = immediate stop ที่อาจสูญเสียข้อมูล ใน production ควรใช้ Drain เสมอ</li>
</ol>
</div>
`
  },
  {
    number: 4,
    slug: 'composer-workflows',
    emoji: '🎵',
    title: 'Cloud Composer & Workflows',
    content: `
<h2>🎵 ทำไมต้อง Orchestration?</h2>

<p>สมมติน้องมี data pipeline ที่ต้องทำ 5 ขั้นตอน: ดึงข้อมูลจาก API → เก็บใน GCS → Load เข้า BigQuery → Run transformation → ส่ง report ถ้าขั้นตอนที่ 3 fail ต้องทำยังไง? retry? alert? skip? นี่คือเหตุผลที่ต้องมี <strong>orchestrator</strong></p>

<p>GCP มี 2 ตัวเลือกหลัก: <strong>Cloud Composer</strong> (managed Airflow) สำหรับ complex pipelines และ <strong>Workflows</strong> สำหรับ simple API orchestration</p>

<h2>🎼 Cloud Composer (Managed Airflow)</h2>

<h3>Architecture</h3>
<pre><code class="language-text">
Cloud Composer Environment
├── GKE Cluster (runs Airflow workers)
│   ├── Airflow Webserver
│   ├── Airflow Scheduler  
│   ├── Airflow Workers (CeleryExecutor)
│   └── Redis (message broker)
├── Cloud SQL (Airflow metadata DB)
├── GCS Bucket (DAGs, plugins, data)
│   ├── /dags/           ← DAG files
│   ├── /plugins/        ← custom operators
│   ├── /data/           ← small data files
│   └── /logs/           ← task logs
└── Cloud Monitoring (metrics & alerts)

Composer 2 (recommended):
├── Autopilot GKE (ลด management)
├── Better autoscaling
└── ถูกกว่า Composer 1
</code></pre>

<h3>สร้าง Composer Environment</h3>
<pre><code class="language-bash">
# สร้าง Composer 2 environment
gcloud composer environments create my-prod-composer \\
  --location=asia-southeast1 \\
  --image-version=composer-2.9.0-airflow-2.9.3 \\
  --environment-size=medium \\
  --node-count=3 \\
  --scheduler-count=2 \\
  --web-server-machine-type=composer-n1-webserver-4 \\
  --service-account=composer-sa@my-project.iam.gserviceaccount.com

# ดู DAGs bucket
gcloud composer environments describe my-prod-composer \\
  --location=asia-southeast1 \\
  --format="value(config.dagGcsPrefix)"

# Upload DAG
gcloud composer environments storage dags import \\
  --environment=my-prod-composer \\
  --location=asia-southeast1 \\
  --source=./my_dag.py

# ตั้ง Airflow variable
gcloud composer environments run my-prod-composer \\
  --location=asia-southeast1 \\
  variables set -- BQ_DATASET production_data

# Trigger DAG manually
gcloud composer environments run my-prod-composer \\
  --location=asia-southeast1 \\
  dags trigger -- my_etl_pipeline
</code></pre>

<h3>Production-grade DAG</h3>
<pre><code class="language-python">
"""
Production ETL Pipeline for Daily Sales Processing
Composer 2 + Airflow 2.x
"""
from datetime import datetime, timedelta
from airflow import DAG
from airflow.decorators import task
from airflow.providers.google.cloud.operators.bigquery import (
    BigQueryInsertJobOperator,
    BigQueryCheckOperator,
)
from airflow.providers.google.cloud.operators.gcs import (
    GCSListObjectsOperator,
)
from airflow.providers.google.cloud.transfers.gcs_to_bigquery import (
    GCSToBigQueryOperator,
)
from airflow.providers.google.cloud.operators.dataflow import (
    DataflowStartFlexTemplateOperator,
)
from airflow.operators.email import EmailOperator
from airflow.utils.task_group import TaskGroup

# Default args สำหรับ production
default_args = {
    'owner': 'data-engineering',
    'depends_on_past': False,
    'email': ['data-team@company.com'],
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'retry_exponential_backoff': True,
    'max_retry_delay': timedelta(minutes=30),
    'execution_timeout': timedelta(hours=2),
    'sla': timedelta(hours=4),
}

with DAG(
    dag_id='daily_sales_pipeline',
    default_args=default_args,
    description='ETL: GCS → BigQuery → Transform → Quality Check',
    schedule_interval='0 2 * * *',  # ทุกวัน ตี 2
    start_date=datetime(2024, 1, 1),
    catchup=False,
    max_active_runs=1,
    tags=['production', 'sales', 'daily'],
) as dag:

    # Step 1: List files in GCS
    list_files = GCSListObjectsOperator(
        task_id='list_raw_files',
        bucket='company-data-lake',
        prefix='raw/sales/{{ ds_nodash }}/',
        delimiter='.csv',
    )

    # Step 2: Load raw data to BigQuery
    load_to_bq = GCSToBigQueryOperator(
        task_id='load_raw_to_bq',
        bucket='company-data-lake',
        source_objects=['raw/sales/{{ ds_nodash }}/*.csv'],
        destination_project_dataset_table=
            'my-project.staging.sales_raw\${{ ds_nodash }}',
        source_format='CSV',
        skip_leading_rows=1,
        write_disposition='WRITE_TRUNCATE',
        autodetect=True,
        time_partitioning={
            'type': 'DAY',
            'field': 'sale_date',
        },
    )

    # Step 3: Transform with SQL
    with TaskGroup(group_id='transformations') as transform_group:
        clean_data = BigQueryInsertJobOperator(
            task_id='clean_and_dedupe',
            configuration={
                'query': {
                    'query': """
                        CREATE OR REPLACE TABLE
                          \`my-project.curated.sales_cleaned\`
                        PARTITION BY sale_date
                        CLUSTER BY region, product_id
                        AS
                        SELECT DISTINCT
                          sale_id,
                          PARSE_DATE('%Y%m%d', sale_date_str) as sale_date,
                          UPPER(TRIM(region)) as region,
                          product_id,
                          CAST(quantity AS INT64) as quantity,
                          CAST(unit_price AS FLOAT64) as unit_price,
                          quantity * unit_price as total_amount
                        FROM \`my-project.staging.sales_raw\`
                        WHERE _PARTITIONDATE = '{{ ds }}'
                          AND sale_id IS NOT NULL
                    """,
                    'useLegacySql': False,
                }
            },
        )

        aggregate = BigQueryInsertJobOperator(
            task_id='build_daily_summary',
            configuration={
                'query': {
                    'query': """
                        INSERT INTO \`my-project.curated.daily_sales_summary\`
                        SELECT
                          sale_date,
                          region,
                          COUNT(DISTINCT sale_id) as total_orders,
                          SUM(total_amount) as total_revenue,
                          AVG(total_amount) as avg_order_value
                        FROM \`my-project.curated.sales_cleaned\`
                        WHERE sale_date = '{{ ds }}'
                        GROUP BY 1, 2
                    """,
                    'useLegacySql': False,
                }
            },
        )

        clean_data >> aggregate

    # Step 4: Data quality check
    quality_check = BigQueryCheckOperator(
        task_id='data_quality_check',
        sql="""
            SELECT COUNT(*) > 0
            FROM \`my-project.curated.daily_sales_summary\`
            WHERE sale_date = '{{ ds }}'
        """,
        use_legacy_sql=False,
    )

    # Step 5: Notification
    notify = EmailOperator(
        task_id='send_notification',
        to=['stakeholders@company.com'],
        subject='Daily Sales Pipeline Complete - {{ ds }}',
        html_content='Pipeline completed for {{ ds }}',
    )

    # DAG dependency
    list_files >> load_to_bq >> transform_group >> quality_check >> notify
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะถาม "ควรใช้ Cloud Composer หรือ Workflows?" จำง่ายๆ:
<ul>
<li><strong>Composer</strong> = pipeline ซับซ้อน, มี dependencies เยอะ, ต้อง backfill, ต้อง UI monitor, ทีมคุ้นเคย Airflow</li>
<li><strong>Workflows</strong> = เรียก API ต่อกัน, logic ไม่ซับซ้อน, ไม่ต้อง infrastructure เปิดตลอด, จ่ายต่อ execution</li>
</ul>
</div>

<h2>🔄 Cloud Workflows</h2>

<p>Workflows เหมาะสำหรับ orchestrate GCP APIs แบบ serverless — ไม่ต้อง manage infrastructure ไม่มี idle cost</p>

<pre><code class="language-yaml">
# daily_report_workflow.yaml
main:
  params: [args]
  steps:
    - init:
        assign:
          - project_id: \${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
          - dataset: "production"
          - date: \${text.substring(time.format(sys.now()), 0, 10)}

    - extract_data:
        call: googleapis.bigquery.v2.jobs.insert
        args:
          projectId: \${project_id}
          body:
            configuration:
              query:
                query: >
                  SELECT region, SUM(revenue) as total
                  FROM production.daily_sales
                  WHERE date = @date
                  GROUP BY region
                useLegacySql: false
                destinationTable:
                  projectId: \${project_id}
                  datasetId: "reports"
                  tableId: \${"daily_summary_" + text.replace_all(date, "-", "")}
                writeDisposition: "WRITE_TRUNCATE"
        result: query_result

    - check_result:
        switch:
          - condition: \${query_result.status.state == "DONE"}
            next: export_report
          - condition: \${query_result.status.state == "ERROR"}
            next: handle_error

    - export_report:
        call: googleapis.bigquery.v2.jobs.insert
        args:
          projectId: \${project_id}
          body:
            configuration:
              extract:
                sourceTable:
                  projectId: \${project_id}
                  datasetId: "reports"
                  tableId: \${"daily_summary_" + text.replace_all(date, "-", "")}
                destinationUris:
                  - \${"gs://reports-bucket/daily/" + date + "/report.csv"}
                destinationFormat: "CSV"
        result: export_result
        next: send_notification

    - send_notification:
        call: http.post
        args:
          url: https://hooks.slack.com/services/xxx/yyy/zzz
          body:
            text: \${"Daily report ready for " + date}
        result: slack_result
        next: end_workflow

    - handle_error:
        call: http.post
        args:
          url: https://hooks.slack.com/services/xxx/yyy/zzz
          body:
            text: \${"ERROR in daily report pipeline for " + date}
        next: fail_workflow

    - fail_workflow:
        raise: "Pipeline failed"

    - end_workflow:
        return: \${"Completed for " + date}
</code></pre>

<pre><code class="language-bash">
# Deploy workflow
gcloud workflows deploy daily-report \\
  --source=daily_report_workflow.yaml \\
  --location=asia-southeast1 \\
  --service-account=workflow-sa@my-project.iam.gserviceaccount.com

# Execute workflow
gcloud workflows execute daily-report \\
  --location=asia-southeast1 \\
  --data='{"date":"2024-01-15"}'

# Schedule workflow ด้วย Cloud Scheduler
gcloud scheduler jobs create http daily-report-trigger \\
  --schedule="0 6 * * *" \\
  --uri="https://workflowexecutions.googleapis.com/v1/projects/my-project/locations/asia-southeast1/workflows/daily-report/executions" \\
  --message-body='{}' \\
  --oauth-service-account-email=scheduler-sa@my-project.iam.gserviceaccount.com \\
  --time-zone="Asia/Bangkok"
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>Cloud Composer <strong>มี idle cost สูง</strong> (GKE cluster ทำงานตลอด) — ถ้า DAG น้อย/ไม่ซับซ้อน อาจเกินความจำเป็น</li>
<li>Composer 2 ถูกกว่า Composer 1 มาก — ข้อสอบถ้าถาม "optimize cost for Composer" ให้ตอบ upgrade เป็น Composer 2</li>
<li>Workflows มี execution time limit <strong>1 ปี</strong> แต่ single HTTP call timeout = <strong>30 นาที</strong></li>
<li>อย่าใช้ Composer สำหรับ pipeline ง่ายๆ แค่ 2-3 steps — ใช้ Workflows หรือ Cloud Scheduler + Cloud Functions แทน</li>
</ul>
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง Composer 2 environment (ใช้ smallest size เพื่อประหยัด credit)</li>
<li>เขียน DAG ที่ทำ: list GCS files → load to BQ → run SQL query → send notification</li>
<li>ตั้ง retry 3 ครั้ง พร้อม exponential backoff</li>
<li>สร้าง Workflow ที่เรียก BigQuery API แล้ว export ผลไป GCS</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: Cloud Composer vs Workflows เลือกอย่างไร?</strong><br/>A: Composer เหมาะกับ complex data pipelines ที่มี dependencies, backfill, monitoring UI ส่วน Workflows เหมาะกับ serverless API orchestration ที่ไม่ซับซ้อน ไม่มี idle cost</li>
<li><strong>Q: ทำไม Composer 2 ดีกว่า Composer 1?</strong><br/>A: Composer 2 ใช้ GKE Autopilot, autoscaling ดีกว่า, ค่าใช้จ่ายต่ำกว่า, startup เร็วกว่า, environment size flexible กว่า</li>
</ol>
</div>
`
  },
  {
    number: 5,
    slug: 'dataproc-dataprep',
    emoji: '✨',
    title: 'Dataproc & Dataprep',
    content: `
<h2>✨ ทำไมยังต้องรู้ Spark บน GCP?</h2>

<p>ถึงแม้ BigQuery จะทรงพลังมาก แต่มีหลายสถานการณ์ที่ต้องใช้ <strong>Apache Spark</strong>: ML pipeline ที่ต้อง custom transformations, migrate Hadoop workloads, หรือ process ที่ต้อง custom code ซับซ้อน <strong>Dataproc</strong> คือ managed Spark/Hadoop service ของ GCP ที่สร้าง cluster ได้ใน 90 วินาที!</p>

<h2>🔥 Dataproc Architecture</h2>

<pre><code class="language-text">
Dataproc Cluster
├── Master Node (1-3 nodes)
│   ├── YARN Resource Manager
│   ├── HDFS NameNode
│   ├── Spark History Server
│   └── Jupyter Notebook (optional)
├── Worker Nodes (N nodes)
│   ├── YARN NodeManager
│   ├── HDFS DataNode
│   └── Spark Executors
├── Preemptible/Spot Workers (cost saving!)
│   ├── No HDFS (compute only)
│   └── อาจถูก reclaim ได้ทุกเมื่อ
└── Autoscaling Policy
    ├── Scale up/down based on YARN metrics
    └── Graceful decommission
</code></pre>

<h3>สร้าง Cluster</h3>
<pre><code class="language-bash">
# สร้าง Dataproc cluster สำหรับ production
gcloud dataproc clusters create prod-spark-cluster \\
  --region=asia-southeast1 \\
  --zone=asia-southeast1-b \\
  --master-machine-type=n1-standard-4 \\
  --master-boot-disk-size=500GB \\
  --num-workers=4 \\
  --worker-machine-type=n1-standard-8 \\
  --worker-boot-disk-size=500GB \\
  --num-secondary-workers=4 \\
  --secondary-worker-type=spot \\
  --image-version=2.1-debian11 \\
  --optional-components=JUPYTER,ZEPPELIN \\
  --enable-component-gateway \\
  --initialization-actions=gs://goog-dataproc-initialization-actions-asia-southeast1/python/pip-install.sh \\
  --metadata='PIP_PACKAGES=pandas pyarrow google-cloud-bigquery' \\
  --autoscaling-policy=my-autoscaling-policy \\
  --max-idle=30m \\
  --properties='spark:spark.sql.adaptive.enabled=true,spark:spark.dynamicAllocation.enabled=true'

# Autoscaling policy
gcloud dataproc autoscaling-policies import my-autoscaling-policy \\
  --region=asia-southeast1 \\
  --source=autoscaling-policy.yaml
</code></pre>

<pre><code class="language-yaml">
# autoscaling-policy.yaml
workerConfig:
  minInstances: 2
  maxInstances: 10
  weight: 1
secondaryWorkerConfig:
  minInstances: 0
  maxInstances: 20
  weight: 1
basicAlgorithm:
  yarnConfig:
    scaleUpFactor: 1.0
    scaleDownFactor: 1.0
    scaleUpMinWorkerFraction: 0.0
    scaleDownMinWorkerFraction: 0.0
    cooldownPeriod: 120s
    gracefulDecommissionTimeout: 3600s
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบถาม "optimize Dataproc cost" บ่อยมาก! จำ 3 กลยุทธ์:
<ol>
<li><strong>Spot/Preemptible VMs</strong> สำหรับ secondary workers (ประหยัด 60-80%)</li>
<li><strong>--max-idle</strong> flag = auto-delete cluster เมื่อไม่ใช้งาน</li>
<li><strong>Ephemeral clusters</strong> = สร้าง cluster → run job → delete cluster (ดีที่สุดสำหรับ batch)</li>
</ol>
</div>

<h3>Submit Spark Jobs</h3>
<pre><code class="language-bash">
# Submit PySpark job
gcloud dataproc jobs submit pyspark \\
  gs://my-bucket/spark-jobs/etl_pipeline.py \\
  --cluster=prod-spark-cluster \\
  --region=asia-southeast1 \\
  --jars=gs://spark-lib/bigquery/spark-bigquery-latest.jar \\
  --py-files=gs://my-bucket/spark-jobs/utils.py \\
  --properties='spark.executor.memory=4g,spark.executor.cores=2' \\
  -- --input=gs://my-bucket/raw/ --output=project.dataset.table

# Submit Spark SQL
gcloud dataproc jobs submit spark-sql \\
  --cluster=prod-spark-cluster \\
  --region=asia-southeast1 \\
  -e "SELECT count(*) FROM my_table WHERE dt='2024-01-01'"

# Workflow Template (Ephemeral cluster pattern)
gcloud dataproc workflow-templates create daily-etl \\
  --region=asia-southeast1

gcloud dataproc workflow-templates set-managed-cluster daily-etl \\
  --region=asia-southeast1 \\
  --master-machine-type=n1-standard-4 \\
  --num-workers=4 \\
  --worker-machine-type=n1-standard-8 \\
  --max-idle=10m

gcloud dataproc workflow-templates add-job pyspark \\
  gs://my-bucket/spark-jobs/etl.py \\
  --step-id=etl-step \\
  --workflow-template=daily-etl \\
  --region=asia-southeast1

# Instantiate = สร้าง cluster → run → delete
gcloud dataproc workflow-templates instantiate daily-etl \\
  --region=asia-southeast1
</code></pre>

<h3>PySpark with BigQuery Connector</h3>
<pre><code class="language-python">
"""
Production PySpark ETL: Read from GCS, Transform, Write to BigQuery
"""
from pyspark.sql import SparkSession
from pyspark.sql import functions as F
from pyspark.sql.window import Window

def create_spark_session():
    return SparkSession.builder \\
        .appName("DailyETL") \\
        .config("spark.sql.adaptive.enabled", "true") \\
        .config("spark.sql.adaptive.coalescePartitions.enabled", "true") \\
        .config("temporaryGcsBucket", "my-temp-bucket") \\
        .getOrCreate()

def main():
    spark = create_spark_session()

    # อ่านข้อมูลจาก GCS (Parquet)
    raw_df = spark.read.parquet("gs://data-lake/raw/events/2024/01/*")

    # Transform: clean + enrich
    cleaned_df = (
        raw_df
        .filter(F.col("event_type").isNotNull())
        .withColumn("event_date", F.to_date("event_timestamp"))
        .withColumn("hour", F.hour("event_timestamp"))
        .dropDuplicates(["event_id"])
    )

    # Window function: running total per user
    window_spec = Window.partitionBy("user_id").orderBy("event_timestamp")
    enriched_df = cleaned_df.withColumn(
        "cumulative_events",
        F.count("*").over(window_spec)
    )

    # Aggregate: daily summary
    daily_summary = (
        enriched_df
        .groupBy("event_date", "event_type", "country")
        .agg(
            F.countDistinct("user_id").alias("unique_users"),
            F.count("*").alias("event_count"),
            F.avg("duration_sec").alias("avg_duration"),
        )
    )

    # เขียนลง BigQuery ด้วย connector
    daily_summary.write \\
        .format("bigquery") \\
        .option("table", "my-project.analytics.daily_event_summary") \\
        .option("partitionField", "event_date") \\
        .option("clusteredFields", "event_type,country") \\
        .mode("overwrite") \\
        .save()

    # เขียน enriched data กลับ GCS เป็น Parquet
    enriched_df.write \\
        .partitionBy("event_date") \\
        .mode("overwrite") \\
        .parquet("gs://data-lake/curated/events/")

    spark.stop()

if __name__ == "__main__":
    main()
</code></pre>

<h2>🆚 Dataproc vs Dataflow vs BigQuery</h2>

<table>
<tr><th>เกณฑ์</th><th>Dataproc</th><th>Dataflow</th><th>BigQuery</th></tr>
<tr><td>Engine</td><td>Spark/Hadoop</td><td>Apache Beam</td><td>Dremel</td></tr>
<tr><td>Best for</td><td>Spark workloads, ML, Hadoop migration</td><td>Streaming, ETL pipelines</td><td>SQL analytics, ad-hoc query</td></tr>
<tr><td>Management</td><td>Cluster (ต้อง size)</td><td>Fully serverless</td><td>Fully serverless</td></tr>
<tr><td>Language</td><td>Python, Scala, Java, R</td><td>Python, Java</td><td>SQL</td></tr>
<tr><td>Streaming</td><td>Spark Streaming</td><td>Native streaming</td><td>BI Engine, Streaming insert</td></tr>
<tr><td>Cost model</td><td>Per cluster (VM hours)</td><td>Per vCPU/GB hours</td><td>Per TB scanned or slots</td></tr>
</table>

<h2>✨ Dataprep (by Trifacta / Alteryx)</h2>

<p>Dataprep เป็น visual data preparation tool — เหมาะสำหรับ <strong>business analysts</strong> ที่ไม่เขียน code ใช้ UI ทำ cleaning, transformation, profiling</p>

<pre><code class="language-text">
Dataprep Workflow:
1. Connect → GCS, BigQuery, or upload files
2. Explore → Auto-profiling, data quality stats
3. Transform → Visual recipes (wrangle steps)  
4. Run Job → Executes on Dataflow backend!
5. Output → BigQuery, GCS, or download

Key features:
├── Auto-suggest transformations
├── Data profiling & anomaly detection
├── Visual join, pivot, unpivot
├── Recipe versioning
└── Schedule recurring jobs
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>Dataprep <strong>ไม่ใช่ของ Google โดยตรง</strong> — เป็น managed service จาก Trifacta/Alteryx ที่ run บน Dataflow</li>
<li>Dataprep เหมาะกับ <strong>exploration & ad-hoc cleaning</strong> ไม่เหมาะกับ production pipeline ที่ต้อง version control</li>
<li>ข้อสอบถ้าถาม "non-technical user ต้องทำ data wrangling" → ตอบ <strong>Dataprep</strong></li>
<li>Dataproc Serverless เป็นอีกตัวเลือก — run Spark jobs โดย <strong>ไม่ต้องสร้าง cluster</strong></li>
</ul>
</div>

<h3>Dataproc Serverless (ทางเลือกใหม่)</h3>
<pre><code class="language-bash">
# Submit PySpark job แบบ serverless (ไม่ต้องสร้าง cluster!)
gcloud dataproc batches submit pyspark \\
  gs://my-bucket/spark-jobs/etl.py \\
  --region=asia-southeast1 \\
  --version=2.1 \\
  --subnet=default \\
  --properties='spark.executor.memory=4g' \\
  --jars=gs://spark-lib/bigquery/spark-bigquery-latest.jar \\
  -- --date=2024-01-01
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง Dataproc cluster ที่มี 2 primary workers + 2 spot secondary workers</li>
<li>Submit PySpark job ที่อ่าน public dataset จาก GCS, transform, เขียนลง BigQuery</li>
<li>ลองใช้ Dataproc Serverless สำหรับ job เดียวกัน แล้วเปรียบเทียบ startup time</li>
<li>สร้าง Workflow Template ที่ทำ ephemeral cluster pattern</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: เมื่อไหร่ควรเลือก Dataproc แทน Dataflow?</strong><br/>A: เมื่อมี existing Spark/Hadoop code ที่ต้อง migrate, ต้อง interactive analysis (Jupyter), หรือใช้ Spark MLlib สำหรับ ML ส่วน Dataflow เหมาะกับ new development โดยเฉพาะ streaming</li>
<li><strong>Q: Ephemeral cluster คืออะไร? ทำไมถึงประหยัด?</strong><br/>A: สร้าง cluster เฉพาะเวลา run job เสร็จแล้วลบทิ้ง ไม่มี idle cost เหมาะกับ batch jobs ใช้ Workflow Template หรือ Composer จัดการได้</li>
<li><strong>Q: Preemptible VMs ใน Dataproc มีข้อจำกัดอะไร?</strong><br/>A: อาจถูก Google reclaim ได้ตลอดเวลา ไม่เก็บ HDFS data ไม่ควรใช้เป็น primary worker ใช้เป็น secondary worker เพื่อเพิ่ม compute เท่านั้น</li>
</ol>
</div>
`
  },
  {
    number: 6,
    slug: 'data-catalog-dlp',
    emoji: '📚',
    title: 'Data Catalog & DLP',
    content: `
<h2>📚 ทำไม Data Governance ถึงเป็นเรื่องสำคัญ?</h2>

<p>สมมติน้องทำงานบริษัทที่มี <strong>500 datasets</strong> ใน BigQuery คนในทีมไม่รู้ว่า table ไหนมีข้อมูลอะไร table ไหน updated ล่าสุดเมื่อไหร่ table ไหนมี PII (Personally Identifiable Information) ที่ห้ามเข้าถึง — นี่คือปัญหาที่ <strong>Data Catalog</strong> และ <strong>DLP API</strong> มาแก้!</p>

<h2>📖 Data Catalog</h2>

<h3>Core Concepts</h3>
<pre><code class="language-text">
Data Catalog
├── Entry (ข้อมูล metadata ของ resource)
│   ├── BigQuery tables (auto-discovered)
│   ├── Pub/Sub topics (auto-discovered)
│   ├── GCS filesets (manual)
│   └── Custom entries (สำหรับ non-GCP sources)
├── Tag Templates (โครงสร้างของ metadata tags)
│   ├── field: data_owner (string)
│   ├── field: data_quality_score (double)
│   ├── field: pii_classification (enum)
│   └── field: last_validated (timestamp)
├── Tags (metadata values ที่ attach กับ entries)
├── Entry Groups (จัดกลุ่ม entries)
└── Policy Tags (column-level security)
    ├── Taxonomy → Policy Tag hierarchy
    └── ใช้ควบคุม BigQuery column access
</code></pre>

<h3>สร้าง Tag Template & Tag</h3>
<pre><code class="language-bash">
# สร้าง Tag Template
gcloud data-catalog tag-templates create data_governance \\
  --location=asia-southeast1 \\
  --display-name="Data Governance" \\
  --field=id=data_owner,display-name="Data Owner",type=string,required=true \\
  --field=id=data_steward,display-name="Data Steward",type=string \\
  --field=id=quality_score,display-name="Quality Score",type=double \\
  --field=id=pii_level,display-name="PII Level",type='enum(NONE|LOW|MEDIUM|HIGH|CRITICAL)' \\
  --field=id=refresh_frequency,display-name="Refresh Frequency",type='enum(REAL_TIME|HOURLY|DAILY|WEEKLY|MONTHLY)' \\
  --field=id=last_validated,display-name="Last Validated",type=timestamp

# Search entries
gcloud data-catalog search "tag:data_governance.pii_level=HIGH" \\
  --include-project-ids=my-project

# ค้นหา table ด้วยชื่อ
gcloud data-catalog search "type=TABLE system=bigquery name:sales" \\
  --include-project-ids=my-project
</code></pre>

<h3>Python API สำหรับ Tag Management</h3>
<pre><code class="language-python">
"""
Auto-tag BigQuery tables with Data Catalog
"""
from google.cloud import datacatalog_v1

client = datacatalog_v1.DataCatalogClient()

PROJECT_ID = "my-project"
LOCATION = "asia-southeast1"
TEMPLATE_ID = "data_governance"


def tag_bigquery_table(dataset_id: str, table_id: str, metadata: dict):
    """Attach governance tag to a BigQuery table"""

    # Lookup the Data Catalog entry for the BQ table
    resource_name = (
        f"//bigquery.googleapis.com/projects/{PROJECT_ID}"
        f"/datasets/{dataset_id}/tables/{table_id}"
    )
    entry = client.lookup_entry(
        request={"linked_resource": resource_name}
    )

    # Build tag template path
    tag_template = (
        f"projects/{PROJECT_ID}/locations/{LOCATION}"
        f"/tagTemplates/{TEMPLATE_ID}"
    )

    # Create tag
    tag = datacatalog_v1.Tag()
    tag.template = tag_template
    tag.fields["data_owner"] = datacatalog_v1.TagField(
        string_value=metadata["owner"]
    )
    tag.fields["quality_score"] = datacatalog_v1.TagField(
        double_value=metadata.get("quality_score", 0.0)
    )
    tag.fields["pii_level"] = datacatalog_v1.TagField(
        enum_value=datacatalog_v1.TagField.EnumValue(
            display_name=metadata.get("pii_level", "NONE")
        )
    )

    created_tag = client.create_tag(
        parent=entry.name, tag=tag
    )
    print(f"Created tag: {created_tag.name}")
    return created_tag


# ตัวอย่างการใช้งาน
tables_metadata = [
    {
        "dataset": "production",
        "table": "customers",
        "owner": "customer-team@company.com",
        "quality_score": 0.95,
        "pii_level": "HIGH",
    },
    {
        "dataset": "production",
        "table": "orders",
        "owner": "sales-team@company.com",
        "quality_score": 0.98,
        "pii_level": "MEDIUM",
    },
    {
        "dataset": "analytics",
        "table": "daily_metrics",
        "owner": "analytics-team@company.com",
        "quality_score": 0.92,
        "pii_level": "NONE",
    },
]

for meta in tables_metadata:
    tag_bigquery_table(meta["dataset"], meta["table"], meta)
</code></pre>

<h3>Policy Tags (Column-level Security)</h3>
<pre><code class="language-bash">
# สร้าง taxonomy สำหรับ data classification
gcloud data-catalog taxonomies create \\
  --display-name="Data Classification" \\
  --description="Company-wide data classification" \\
  --location=asia-southeast1

# เพิ่ม policy tags (hierarchy)
# Sensitive
#   ├── PII
#   │   ├── Email
#   │   ├── Phone
#   │   └── National ID
#   └── Financial
#       ├── Salary
#       └── Revenue

gcloud data-catalog taxonomies policy-tags create \\
  --taxonomy=TAXONOMY_ID \\
  --display-name="Sensitive" \\
  --location=asia-southeast1

gcloud data-catalog taxonomies policy-tags create \\
  --taxonomy=TAXONOMY_ID \\
  --parent-policy-tag=SENSITIVE_TAG_ID \\
  --display-name="PII" \\
  --location=asia-southeast1
</code></pre>

<pre><code class="language-sql">
-- ใช้ Policy Tag กับ BigQuery column
ALTER TABLE \`project.dataset.customers\`
ALTER COLUMN email
SET OPTIONS (
  policy_tags = 'projects/my-project/locations/asia-southeast1/taxonomies/TAXONOMY_ID/policyTags/PII_EMAIL_TAG_ID'
);

-- ผู้ที่ไม่มีสิทธิ์จะ query column นี้ไม่ได้
-- ERROR: Access Denied: BigQuery BigQuery: User does not have
-- permission to access policy tag "PII" on column "email"
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบจะถาม "restrict access to specific columns in BigQuery" — คำตอบคือ <strong>Policy Tags ใน Data Catalog</strong> ไม่ใช่ row-level security (ซึ่งเป็นอีกเรื่อง) จำง่ายๆ: Column = Policy Tags, Row = Row Access Policy
</div>

<h2>🔍 Cloud DLP (Data Loss Prevention)</h2>

<h3>DLP คืออะไร?</h3>
<p>DLP API สแกนข้อมูลเพื่อ <strong>ค้นหาและปกป้อง sensitive data</strong> เช่น เลขบัตรเครดิต, เลขบัตรประชาชน, อีเมล, เบอร์โทร — แล้วทำ de-identification อัตโนมัติ</p>

<h3>InfoTypes ที่ต้องรู้</h3>
<pre><code class="language-text">
Built-in InfoTypes:
├── CREDIT_CARD_NUMBER
├── EMAIL_ADDRESS
├── PHONE_NUMBER
├── PERSON_NAME
├── STREET_ADDRESS
├── DATE_OF_BIRTH
├── THAILAND_NATIONAL_ID_NUMBER  ← เลขบัตร ปชช. ไทย!
├── PASSPORT
├── IP_ADDRESS
├── DOMAIN_NAME
└── Custom InfoType (regex pattern ที่กำหนดเอง)
</code></pre>

<h3>Inspect & De-identify</h3>
<pre><code class="language-python">
"""
DLP API: Inspect & De-identify sensitive data
"""
from google.cloud import dlp_v2

dlp_client = dlp_v2.DlpServiceClient()
PROJECT_ID = "my-project"


def inspect_text(text: str) -> list:
    """ตรวจจับ sensitive data ในข้อความ"""
    inspect_config = {
        "info_types": [
            {"name": "CREDIT_CARD_NUMBER"},
            {"name": "EMAIL_ADDRESS"},
            {"name": "PHONE_NUMBER"},
            {"name": "THAILAND_NATIONAL_ID_NUMBER"},
            {"name": "PERSON_NAME"},
        ],
        "min_likelihood": "LIKELY",
        "include_quote": True,
        "limits": {"max_findings_per_request": 100},
    }

    item = {"value": text}

    response = dlp_client.inspect_content(
        request={
            "parent": f"projects/{PROJECT_ID}/locations/global",
            "inspect_config": inspect_config,
            "item": item,
        }
    )

    findings = []
    for finding in response.result.findings:
        findings.append({
            "info_type": finding.info_type.name,
            "likelihood": finding.likelihood.name,
            "quote": finding.quote,
        })
        print(f"Found: {finding.info_type.name} "
              f"({finding.likelihood.name}): {finding.quote}")
    return findings


def deidentify_text(text: str) -> str:
    """De-identify sensitive data ด้วยหลายวิธี"""
    deidentify_config = {
        "info_type_transformations": {
            "transformations": [
                {
                    # Mask เลขบัตรเครดิต: 4532-****-****-1234
                    "info_types": [{"name": "CREDIT_CARD_NUMBER"}],
                    "primitive_transformation": {
                        "character_mask_config": {
                            "masking_character": "*",
                            "number_to_mask": 8,
                            "characters_to_ignore": [
                                {"characters_to_skip": "-"}
                            ],
                        }
                    },
                },
                {
                    # Replace email ด้วย [EMAIL_REMOVED]
                    "info_types": [{"name": "EMAIL_ADDRESS"}],
                    "primitive_transformation": {
                        "replace_config": {
                            "new_value": {"string_value": "[EMAIL_REMOVED]"}
                        }
                    },
                },
                {
                    # Hash เลขบัตร ปชช. (deterministic)
                    "info_types": [{"name": "THAILAND_NATIONAL_ID_NUMBER"}],
                    "primitive_transformation": {
                        "crypto_hash_config": {
                            "crypto_key": {
                                "transient": {"name": "my-key"}
                            }
                        }
                    },
                },
            ]
        }
    }

    response = dlp_client.deidentify_content(
        request={
            "parent": f"projects/{PROJECT_ID}/locations/global",
            "deidentify_config": deidentify_config,
            "inspect_config": {
                "info_types": [
                    {"name": "CREDIT_CARD_NUMBER"},
                    {"name": "EMAIL_ADDRESS"},
                    {"name": "THAILAND_NATIONAL_ID_NUMBER"},
                ]
            },
            "item": {"value": text},
        }
    )
    return response.item.value


# ตัวอย่าง
sample = (
    "ลูกค้า สมชาย ใจดี email: somchai@email.com "
    "บัตรเครดิต: 4532-1234-5678-9012 "
    "เลขบัตร ปชช: 1-1234-56789-01-2"
)

print("=== Inspect ===")
inspect_text(sample)

print("\\n=== De-identify ===")
cleaned = deidentify_text(sample)
print(cleaned)
</code></pre>

<h3>DLP กับ BigQuery</h3>
<pre><code class="language-bash">
# สร้าง DLP inspection job สำหรับ BigQuery table
gcloud dlp jobs create \\
  --project=my-project \\
  --inspect-config='{"infoTypes":[{"name":"CREDIT_CARD_NUMBER"},{"name":"EMAIL_ADDRESS"},{"name":"THAILAND_NATIONAL_ID_NUMBER"}],"minLikelihood":"LIKELY"}' \\
  --storage-config='{"bigQueryOptions":{"tableReference":{"projectId":"my-project","datasetId":"production","tableId":"customers"},"sampleMethod":"TOP","rowsLimit":10000}}' \\
  --actions='[{"saveFindings":{"outputConfig":{"table":{"projectId":"my-project","datasetId":"dlp_results","tableId":"inspection_findings"}}}}]'
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>DLP API <strong>คิดเงินตาม volume ที่ scan</strong> — อย่า scan ข้อมูลทั้งหมดถ้าไม่จำเป็น ใช้ sampling!</li>
<li><strong>De-identification ≠ Anonymization</strong> — de-id อาจ reversible ได้ (เช่น tokenization) ส่วน anonymization ทำกลับไม่ได้</li>
<li>DLP <strong>ไม่ได้ auto-apply</strong> — ต้อง setup job/trigger เพื่อ scan เป็นระยะ</li>
<li>ข้อสอบถ้าถาม "ค้นหา PII ใน BigQuery" → ตอบ <strong>DLP API</strong> ถ้าถาม "ป้องกัน access PII column" → ตอบ <strong>Policy Tags</strong></li>
</ul>
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง Data Catalog tag template ที่มี fields: owner, team, pii_level, refresh_frequency</li>
<li>Tag BigQuery table 3 ตัว ด้วย Python API</li>
<li>ใช้ DLP API inspect ข้อความที่มี email, phone, credit card</li>
<li>ทดลอง de-identify ด้วย 3 วิธี: masking, replacement, hashing</li>
<li>สร้าง Policy Tag taxonomy สำหรับ column-level security</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: Data Catalog มีประโยชน์อย่างไร?</strong><br/>A: ช่วย data discovery (ค้นหา dataset), data governance (จัดการ metadata, ownership, classification), column-level security (Policy Tags) ทำให้องค์กรรู้ว่า data อยู่ที่ไหน เป็นของใคร sensitive แค่ไหน</li>
<li><strong>Q: DLP de-identification มีกี่วิธี? แต่ละวิธีเหมาะกับอะไร?</strong><br/>A: หลักๆ มี masking (ซ่อนบางส่วน), replacement (แทนที่ด้วยค่าอื่น), tokenization (แทนที่ด้วย token ที่ reversible), hashing (one-way), bucketing (แปลงเป็น range) เลือกตามว่าต้อง reversible ไหม</li>
</ol>
</div>
`
  },
  {
    number: 7,
    slug: 'iam-security',
    emoji: '🔐',
    title: 'IAM, Security & Compliance',
    content: `
<h2>🔐 ทำไม Security ถึงสำคัญในข้อสอบ?</h2>

<p>ข้อสอบ GCP DE จะมีคำถามเรื่อง security ประมาณ <strong>15-20%</strong> เพราะ Data Engineer ในโลกจริงต้องรู้ว่า ใครเข้าถึงข้อมูลอะไรได้บ้าง ข้อมูล sensitive ป้องกันยังไง — ถ้าตอบผิดข้อนึงอาจทำให้ข้อมูลลูกค้ารั่ว!</p>

<h2>👤 IAM (Identity and Access Management)</h2>

<h3>Core Concepts</h3>
<pre><code class="language-text">
IAM Model: Who (Member) + Can do what (Role) + On which resource (Resource)

Members (Who):
├── Google Account (user@gmail.com)
├── Service Account (sa@project.iam.gserviceaccount.com)
├── Google Group (group@googlegroups.com)
├── Google Workspace domain (company.com)
└── allAuthenticatedUsers / allUsers (⚠️ อันตราย!)

Roles (Can do what):
├── Basic Roles (ควรหลีกเลี่ยง!)
│   ├── roles/viewer      ← อ่านได้อย่างเดียว
│   ├── roles/editor      ← อ่าน+แก้ไข
│   └── roles/owner       ← ทุกอย่าง + จัดการ IAM
├── Predefined Roles (แนะนำ!)
│   ├── roles/bigquery.dataViewer
│   ├── roles/bigquery.dataEditor
│   ├── roles/bigquery.jobUser
│   ├── roles/storage.objectViewer
│   └── roles/dataflow.developer
└── Custom Roles (granular control)
    └── กำหนด permissions เอง

Resource Hierarchy:
Organization → Folder → Project → Resource
     ↓            ↓        ↓         ↓
  IAM policy   inherits  inherits  inherits
  (ระดับสูงสุด)
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> หลัก <strong>Least Privilege</strong> = ให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น ข้อสอบถ้าถาม "user ต้อง query BigQuery ได้อย่างเดียว" ให้ตอบ <code>roles/bigquery.dataViewer</code> + <code>roles/bigquery.jobUser</code> ไม่ใช่ <code>roles/bigquery.admin</code>!
</div>

<h3>Service Accounts</h3>
<pre><code class="language-bash">
# สร้าง service account สำหรับ data pipeline
gcloud iam service-accounts create data-pipeline-sa \\
  --display-name="Data Pipeline Service Account" \\
  --description="Used by Dataflow and Composer"

# ให้ roles ที่จำเป็น (Least Privilege!)
SA_EMAIL="data-pipeline-sa@my-project.iam.gserviceaccount.com"

# BigQuery: อ่านและเขียนข้อมูล
gcloud projects add-iam-policy-binding my-project \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/bigquery.dataEditor"

gcloud projects add-iam-policy-binding my-project \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/bigquery.jobUser"

# GCS: อ่านและเขียน objects
gcloud projects add-iam-policy-binding my-project \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/storage.objectAdmin"

# Dataflow: สร้างและ manage jobs
gcloud projects add-iam-policy-binding my-project \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/dataflow.worker"

# Pub/Sub: subscribe
gcloud projects add-iam-policy-binding my-project \\
  --member="serviceAccount:\${SA_EMAIL}" \\
  --role="roles/pubsub.subscriber"

# Service Account Impersonation (แนะนำแทน key download!)
gcloud iam service-accounts add-iam-policy-binding \${SA_EMAIL} \\
  --member="user:developer@company.com" \\
  --role="roles/iam.serviceAccountTokenCreator"
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li><strong>อย่าใช้ Basic Roles</strong> (viewer/editor/owner) ในข้อสอบ — เกือบทุกกรณีคำตอบจะเป็น Predefined Role</li>
<li><strong>อย่า download service account key</strong> ถ้าเลี่ยงได้ — ใช้ Workload Identity, Service Account Impersonation, หรือ Attached Service Account แทน</li>
<li>IAM policies <strong>inherit จากระดับสูงลงล่าง</strong> — policy ที่ตั้งระดับ Organization จะ apply ทุก project</li>
<li><strong>allUsers</strong> และ <strong>allAuthenticatedUsers</strong> เป็นสิ่งที่ security audit จะ flag เสมอ</li>
</ul>
</div>

<h2>🔑 Encryption</h2>

<pre><code class="language-text">
Encryption Layers:
├── Encryption at rest (ข้อมูลที่เก็บ)
│   ├── Google-managed (default, ไม่ต้องทำอะไร)
│   ├── CMEK (Customer-Managed Encryption Keys)
│   │   └── ใช้ Cloud KMS สร้าง key เอง
│   └── CSEK (Customer-Supplied Encryption Keys)
│       └── ลูกค้าส่ง key มาเอง (GCS only)
│
├── Encryption in transit (ข้อมูลระหว่างส่ง)
│   ├── TLS 1.3 (default, ทุก GCP service)
│   └── mTLS (mutual TLS, สำหรับ service-to-service)
│
└── Application-level encryption
    └── encrypt ก่อนส่งเข้า GCP (client-side)
</code></pre>

<h3>CMEK กับ BigQuery</h3>
<pre><code class="language-bash">
# สร้าง key ring และ key
gcloud kms keyrings create data-keys \\
  --location=asia-southeast1

gcloud kms keys create bq-encryption-key \\
  --keyring=data-keys \\
  --location=asia-southeast1 \\
  --purpose=encryption \\
  --rotation-period=90d \\
  --next-rotation-time=$(date -u -d "+1 day" +%Y-%m-%dT%H:%M:%SZ)

# ให้ BigQuery service account ใช้ key ได้
BQ_SA="bq-PROJECT_NUMBER@bigquery-encryption.iam.gserviceaccount.com"

gcloud kms keys add-iam-policy-binding bq-encryption-key \\
  --keyring=data-keys \\
  --location=asia-southeast1 \\
  --member="serviceAccount:\${BQ_SA}" \\
  --role="roles/cloudkms.cryptoKeyEncrypterDecrypter"
</code></pre>

<pre><code class="language-sql">
-- สร้าง BigQuery table ด้วย CMEK
CREATE TABLE \`project.dataset.sensitive_data\`
(
  customer_id STRING,
  name STRING,
  email STRING,
  purchase_amount FLOAT64
)
OPTIONS(
  kms_key_name='projects/my-project/locations/asia-southeast1/keyRings/data-keys/cryptoKeys/bq-encryption-key'
);
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบถ้าถาม "ลูกค้าต้อง control encryption key เอง แต่ Google manage infrastructure" → ตอบ <strong>CMEK</strong> ถ้าถาม "ลูกค้าจะเก็บ key เองทั้งหมด ไม่ให้ Google เห็น" → ตอบ <strong>CSEK</strong> (GCS only) ถ้าไม่มี requirement พิเศษ → <strong>Google-managed</strong> (default) ก็เพียงพอ
</div>

<h2>🛡️ VPC Service Controls</h2>

<pre><code class="language-text">
VPC Service Controls = สร้าง "กำแพง" รอบ GCP resources

ปกติ:
  Internet ──→ BigQuery API ──→ ข้อมูล
  (ใครมีสิทธิ์ก็ query ได้จากทุกที่)

ด้วย VPC Service Controls:
  Internet ──✕── BigQuery API (blocked!)
  VPC Network ──→ BigQuery API ──→ ข้อมูล
  (query ได้แค่จาก approved network/device)

Service Perimeter:
├── Protected Services (BigQuery, GCS, Pub/Sub, etc.)
├── Access Levels (IP ranges, device policy, identity)
├── Ingress Rules (อนุญาต traffic เข้า)
└── Egress Rules (อนุญาต traffic ออก)
</code></pre>

<pre><code class="language-bash">
# สร้าง Access Level
gcloud access-context-manager levels create corp-network \\
  --title="Corporate Network" \\
  --basic-level-spec=corp-network-spec.yaml \\
  --policy=POLICY_ID

# สร้าง Service Perimeter
gcloud access-context-manager perimeters create data-perimeter \\
  --title="Data Platform Perimeter" \\
  --resources="projects/PROJECT_NUMBER" \\
  --restricted-services="bigquery.googleapis.com,storage.googleapis.com" \\
  --access-levels="corp-network" \\
  --policy=POLICY_ID
</code></pre>

<h2>📝 Audit Logging</h2>

<pre><code class="language-text">
Cloud Audit Logs Types:
├── Admin Activity (เปิดเสมอ, ฟรี)
│   └── เช่น สร้าง/ลบ table, เปลี่ยน IAM
├── Data Access (ต้องเปิดเอง, มีค่าใช้จ่าย)
│   ├── ADMIN_READ (อ่าน metadata)
│   ├── DATA_READ (อ่าน data)
│   └── DATA_WRITE (เขียน data)
├── System Event (เปิดเสมอ, ฟรี)
│   └── เช่น auto-scaling, maintenance
└── Policy Denied (เปิดเสมอ, ฟรี)
    └── เช่น IAM denied access
</code></pre>

<pre><code class="language-bash">
# ดู audit logs ใน BigQuery
# Logs จะถูก route ไป BigQuery ผ่าน Log Sink

# สร้าง Log Sink ส่ง audit logs ไป BigQuery
gcloud logging sinks create bq-audit-sink \\
  bigquery.googleapis.com/projects/my-project/datasets/audit_logs \\
  --log-filter='logName:"cloudaudit.googleapis.com"'

# ดู who accessed what
# (query ใน BigQuery หลังจาก logs ถูก route มา)
</code></pre>

<pre><code class="language-sql">
-- Query audit logs ใน BigQuery
-- ดูว่าใครเข้าถึง sensitive table บ้าง
SELECT
  timestamp,
  protopayload_auditlog.authenticationInfo.principalEmail as who,
  protopayload_auditlog.methodName as action,
  protopayload_auditlog.resourceName as resource,
  protopayload_auditlog.status.code as status_code
FROM \`my-project.audit_logs.cloudaudit_googleapis_com_data_access\`
WHERE protopayload_auditlog.resourceName LIKE '%sensitive_table%'
  AND timestamp > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
ORDER BY timestamp DESC
LIMIT 100;
</code></pre>

<h2>🏢 Compliance & Data Residency</h2>

<pre><code class="language-text">
Data Residency Considerations:
├── Region selection: เลือก region ที่ข้อมูลต้องอยู่
│   ├── asia-southeast1 (Singapore)
│   ├── asia-southeast2 (Jakarta) ← ถ้า data residency Indonesia
│   └── Multi-region: ห้ามใช้ถ้ามี strict data residency
├── BigQuery dataset location ← lock เมื่อสร้างแล้วเปลี่ยนไม่ได้!
├── GCS bucket location ← lock เช่นกัน
└── Organization Policy Constraints
    └── constraints/gcp.resourceLocations = allow only specific regions
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
<li>BigQuery dataset location <strong>เปลี่ยนไม่ได้หลังสร้าง</strong> — เลือกให้ดีตั้งแต่แรก!</li>
<li>Cross-region query ใน BigQuery <strong>ทำไม่ได้</strong> — source table และ destination ต้องอยู่ region เดียวกัน</li>
<li>VPC Service Controls <strong>ไม่ใช่ firewall rules</strong> — มันเป็น API-level perimeter ที่ทำงานคนละชั้นกัน</li>
<li>Audit Logs สำหรับ Data Access <strong>ต้องเปิดเอง</strong> ไม่ได้เปิด default และมีค่าใช้จ่าย storage</li>
</ul>
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>สร้าง Service Account พร้อม roles ที่ต้องใช้สำหรับ Dataflow pipeline (least privilege)</li>
<li>สร้าง CMEK key ด้วย Cloud KMS แล้วใช้กับ BigQuery dataset</li>
<li>เปิด Data Access audit logging แล้ว query logs ผ่าน Cloud Logging</li>
<li>สร้าง Custom Role ที่มีแค่ bigquery.tables.list + bigquery.tables.getData</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: อธิบาย Principle of Least Privilege และตัวอย่างการใช้งานใน GCP</strong><br/>A: ให้สิทธิ์น้อยที่สุดเท่าที่จำเป็น เช่น Data Analyst ต้องแค่ query BQ → ให้ dataViewer + jobUser ไม่ให้ dataEditor หรือ admin ใช้ Predefined Roles แทน Basic Roles เสมอ</li>
<li><strong>Q: CMEK กับ CSEK ต่างกันอย่างไร?</strong><br/>A: CMEK = key อยู่ใน Cloud KMS ลูกค้า manage lifecycle (rotate, disable) แต่ Google ยังเป็นคน encrypt/decrypt CSEK = ลูกค้าส่ง key มาเอง Google ไม่เก็บ key ต้อง supply ทุกครั้งที่ access</li>
<li><strong>Q: VPC Service Controls ป้องกันอะไร?</strong><br/>A: ป้องกัน data exfiltration ที่ API level เช่น ป้องกันไม่ให้คน copy BigQuery data ไปยัง project อื่น แม้จะมี IAM permission ก็ถูก perimeter block</li>
</ol>
</div>
`
  },
  {
    number: 8,
    slug: 'architecture-patterns',
    emoji: '🏗️',
    title: 'Architecture Patterns & Case Studies',
    content: `
<h2>🏗️ ทำไม Architecture ถึงสำคัญที่สุดในข้อสอบ?</h2>

<p>ข้อสอบ GCP DE ไม่ได้ถามว่า "Pub/Sub คืออะไร?" แต่ถามว่า "บริษัท X มีปัญหา Y ควรออกแบบ architecture ยังไง?" ถ้าน้องจำ service ได้แต่ <strong>ประกอบร่างไม่เป็น</strong> จะตอบไม่ได้ Chapter นี้จะสอนให้น้อง <strong>คิดแบบ architect</strong></p>

<h2>📐 Pattern 1: Batch Analytics Platform</h2>

<h3>Scenario: E-commerce Daily Analytics</h3>
<pre><code class="language-text">
Requirement:
- รับ order data จาก MySQL (on-premise) วันละ 10M rows
- Transform + aggregate สำหรับ dashboard
- ต้อง query ย้อนหลังได้ 3 ปี
- Analysts ใช้ SQL เป็นหลัก

Architecture:
┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  MySQL       │────▶│  Cloud      │────▶│  BigQuery    │
│  (On-prem)   │     │  Storage    │     │  (Raw)       │
│              │     │  (GCS)      │     │              │
└──────────────┘     └─────────────┘     └──────┬───────┘
                                                │ Scheduled
                                                │ Query/dbt
                                          ┌─────▼────────┐
                                          │  BigQuery     │
                                          │  (Curated)    │
                                          │  Partitioned  │
                                          │  + Clustered  │
                                          └──────┬────────┘
                                                 │
                                          ┌──────▼────────┐
                                          │  Looker /     │
                                          │  Data Studio  │
                                          └───────────────┘

Components:
├── Transfer: Cloud SQL → GCS (DataStream CDC) or Federated query
├── Ingest: GCS → BigQuery (scheduled load)
├── Transform: BigQuery SQL / dbt
├── Orchestrate: Cloud Composer
├── Serve: Looker Studio (dashboard)
├── Storage class: Standard (hot) → Nearline (> 90 days)
└── Security: CMEK, Column-level security, VPC SC
</code></pre>

<h3>🧠 วิธีคิด: เลือก Architecture</h3>
<pre><code class="language-text">
ถามตัวเอง 5 คำถาม:
1. ข้อมูลมาแบบ Batch หรือ Streaming?
2. ขนาดข้อมูลเท่าไหร่? (MB/GB/TB/PB)
3. Latency ที่ยอมรับได้? (real-time / minutes / hours)
4. ใครเป็น consumer? (analysts / ML engineers / applications)
5. มี compliance requirement ไหม? (data residency, encryption)
</code></pre>

<h2>📐 Pattern 2: Real-time Streaming Pipeline</h2>

<h3>Scenario: Fraud Detection System</h3>
<pre><code class="language-text">
Requirement:
- รับ transaction events 100K events/sec
- ตรวจจับ fraud ภายใน 5 วินาที
- เก็บ historical data สำหรับ ML training
- Alert ทีม fraud analyst เมื่อพบ suspicious activity

Architecture:
┌──────────┐    ┌──────────┐    ┌──────────────────┐
│ Payment  │───▶│ Pub/Sub  │───▶│    Dataflow      │
│ Gateway  │    │ (Topic)  │    │ (Streaming)      │
│ (Events) │    │          │    │  ├── Parse        │
└──────────┘    └──────────┘    │  ├── Enrich       │
                                │  ├── Window (5s)  │
                                │  ├── Score (BQML) │
                                │  └── Route        │
                                └───┬────────┬──────┘
                                    │        │
                              ┌─────▼──┐ ┌───▼──────────┐
                              │BigQuery│ │ Pub/Sub      │
                              │(Store) │ │ (Alert Topic)│
                              │        │ └───┬──────────┘
                              └────────┘     │
                                        ┌────▼─────────┐
                                        │ Cloud Run    │
                                        │ (Send Alert) │
                                        │ Slack/Email  │
                                        └──────────────┘

Key Decisions:
├── Pub/Sub: durable message queue, handles 100K/sec easily
├── Dataflow: exactly-once processing, auto-scaling
├── Windowing: Fixed 5-second windows for fraud scoring
├── BQML: inline prediction using ML.PREDICT
├── Dead Letter: failed messages → DLQ for investigation
└── Replay: Pub/Sub seek to replay historical messages
</code></pre>

<h2>📐 Pattern 3: Data Lake + Lakehouse</h2>

<h3>Scenario: Multi-team Data Platform</h3>
<pre><code class="language-text">
Requirement:
- 5 teams contribute data (marketing, sales, product, finance, ML)
- ต้อง centralize data แต่แยก access control
- รองรับ raw data หลายรูปแบบ (JSON, CSV, Parquet, images)
- ML team ต้อง access raw data สำหรับ training
- Business teams ต้อง clean, curated data

Architecture:
┌─────────────────────────────────────────────────────────┐
│                    Data Lake (GCS)                       │
│                                                          │
│  gs://company-lake/                                      │
│  ├── raw/        (Bronze) ← immutable, all formats      │
│  ├── staging/    (Silver) ← cleaned, Parquet             │
│  └── curated/    (Gold)   ← business-ready, BQ-linked   │
│                                                          │
│  Lifecycle: Standard → Nearline (90d) → Archive (1yr)   │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
   ┌────▼────┐   ┌─────▼─────┐  ┌────▼──────┐
   │BigQuery │   │ Dataproc  │  │ Vertex AI │
   │(Analytics│   │ (Spark ML)│  │ (Training)│
   │ + BI)   │   │           │  │           │
   └─────────┘   └───────────┘  └───────────┘
        │
   ┌────▼──────┐
   │ Looker /  │
   │ Connected │
   │ Sheets    │
   └───────────┘

Governance:
├── Data Catalog: tag every dataset (owner, pii, freshness)
├── DLP: scan for PII in raw layer
├── IAM: team-based access (marketing can't see finance)
├── Policy Tags: column-level security on PII columns
├── BigQuery Authorized Views: expose only safe views
└── Audit Logs: track all data access
</code></pre>

<h2>📐 Pattern 4: IoT Data Pipeline</h2>

<h3>Scenario: Smart Factory Monitoring</h3>
<pre><code class="language-text">
Requirement:
- 10,000 sensors ส่ง data ทุก 1 วินาที
- ตรวจจับ anomaly แบบ real-time (เครื่องจักรจะเสีย)
- เก็บ historical data สำหรับ predictive maintenance ML
- Dashboard แสดงสถานะเครื่องจักร real-time

Architecture:
┌──────────┐    ┌──────────┐    ┌──────────────────┐
│ Sensors  │───▶│ Pub/Sub  │───▶│    Dataflow      │
│ (10K)    │    │          │    │ (Streaming)      │
│ MQTT     │    │          │    │                  │
└──────────┘    └──────────┘    └───┬──────────┬───┘
                                   │          │
                              ┌────▼───┐ ┌────▼────────┐
                              │Bigtable│ │  BigQuery   │
                              │(Hot)   │ │ (Analytics) │
                              │< 10ms  │ │             │
                              └────┬───┘ └─────────────┘
                                   │
                              ┌────▼───────────┐
                              │ Grafana /      │
                              │ Custom Dashboard│
                              │ (real-time)    │
                              └────────────────┘

Why Bigtable (not BigQuery) for hot path:
├── Single-digit ms latency (BigQuery = seconds)
├── High write throughput (millions of writes/sec)
├── Time-series data: row key = sensor_id#timestamp
├── Wide column: readings for each sensor metric
└── Auto-scaling nodes based on load
</code></pre>

<div class="tip-box">
<strong>💡 ทริค:</strong> ข้อสอบถ้าเห็น keywords เหล่านี้ ให้เลือก Bigtable:
<ul>
<li>"low latency" (< 10ms)</li>
<li>"time-series data"</li>
<li>"IoT sensor data"</li>
<li>"high write throughput"</li>
<li>"key-value access pattern"</li>
</ul>
ถ้าเห็น "SQL analytics", "ad-hoc query", "dashboard" → BigQuery
</div>

<h2>📐 Pattern 5: Hadoop Migration</h2>

<pre><code class="language-text">
On-premise Hadoop → GCP Migration:

Phase 1: Lift & Shift
├── Hadoop HDFS → Cloud Storage (GCS connector)
├── Hive → Dataproc + Hive metastore
├── MapReduce → Dataproc Spark
├── Oozie → Cloud Composer
└── Kafka → Pub/Sub

Phase 2: Modernize
├── Hive queries → BigQuery
├── Persistent cluster → Ephemeral Dataproc
├── HDFS storage → GCS (separate storage/compute)
├── Custom Spark jobs → Dataflow (where applicable)
└── On-premise scheduler → Cloud Composer

Key Principles:
├── แยก Storage กับ Compute (ข้อดีหลักของ cloud)
├── ใช้ Ephemeral clusters (ประหยัด + ไม่ต้อง maintain)
├── Migrate SQL workloads ไป BigQuery (serverless)
├── เก็บ raw data ใน GCS (ถูก + durable)
└── ใช้ Cloud Storage Connector แทน HDFS
</code></pre>

<h2>📋 Case Study: Flowlogistic</h2>
<pre><code class="language-text">
Flowlogistic (Logistics Company)

Business:
├── Global shipping & logistics
├── Track shipments real-time across 50 countries
├── Predict delivery times accurately
└── Optimize routing based on historical data

Current State:
├── On-premise Hadoop cluster (aging, expensive)
├── Data in Hive tables (petabytes)
├── Real-time GPS data from trucks
└── Manual reporting process

Requirements:
├── Migrate to cloud with minimal disruption
├── Real-time tracking dashboard
├── ML for delivery time prediction
├── Cost reduction
└── Comply with regional data regulations

Solution Design:
├── GPS data → Pub/Sub → Dataflow → Bigtable (real-time)
├── Historical Hive → GCS → BigQuery (analytics)
├── Spark ML jobs → Dataproc (ephemeral)
├── Orchestration → Cloud Composer
├── Dashboard → Looker
├── Data residency → Regional buckets + BQ datasets
└── ML predictions → BigQuery ML or Vertex AI
</code></pre>

<h2>🔧 Architecture Decision Cheat Sheet</h2>

<table>
<tr><th>ถ้าโจทย์บอกว่า...</th><th>เลือก...</th></tr>
<tr><td>SQL analytics, petabyte scale</td><td>BigQuery</td></tr>
<tr><td>Sub-second latency, key-value</td><td>Bigtable</td></tr>
<tr><td>OLTP, relational, global</td><td>Cloud Spanner</td></tr>
<tr><td>OLTP, single region, MySQL/PostgreSQL</td><td>Cloud SQL</td></tr>
<tr><td>Document store, mobile/web</td><td>Firestore</td></tr>
<tr><td>Streaming ingestion</td><td>Pub/Sub</td></tr>
<tr><td>Streaming processing</td><td>Dataflow</td></tr>
<tr><td>Batch processing, Spark</td><td>Dataproc</td></tr>
<tr><td>Simple ETL, no-code</td><td>Dataprep</td></tr>
<tr><td>Complex orchestration</td><td>Cloud Composer</td></tr>
<tr><td>Simple API orchestration</td><td>Workflows</td></tr>
<tr><td>Object storage</td><td>Cloud Storage</td></tr>
<tr><td>In-memory cache</td><td>Memorystore</td></tr>
<tr><td>Find PII data</td><td>DLP API</td></tr>
<tr><td>Data discovery + governance</td><td>Data Catalog</td></tr>
<tr><td>Column-level security</td><td>Policy Tags</td></tr>
<tr><td>API-level security perimeter</td><td>VPC Service Controls</td></tr>
</table>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong>
<ol>
<li>ออกแบบ architecture สำหรับ: "ร้านค้า online ที่มี order 1M/day ต้องการ real-time inventory tracking + daily sales dashboard" วาด diagram พร้อมระบุ GCP service ทุกตัว</li>
<li>ออกแบบ architecture สำหรับ: "ธนาคารที่ต้อง migrate data warehouse จาก Oracle ไป GCP โดยมี compliance requirement ว่าข้อมูลต้องอยู่ใน Southeast Asia เท่านั้น"</li>
<li>เปรียบเทียบ Bigtable vs BigQuery สำหรับ IoT time-series data แบบละเอียด</li>
</ol>
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong>
<ol>
<li><strong>Q: ออกแบบ data pipeline สำหรับ e-commerce ที่ต้อง real-time recommendation</strong><br/>A: User events → Pub/Sub → Dataflow (enrich + feature engineering) → split: (1) Bigtable สำหรับ serve predictions real-time (2) BigQuery สำหรับ training data ML model train บน Vertex AI/Dataproc deploy model endpoint เรียกจาก application</li>
<li><strong>Q: เมื่อไหร่ใช้ Bigtable แทน BigQuery?</strong><br/>A: Bigtable เมื่อต้องการ low latency reads/writes (< 10ms), high throughput, key-based access ส่วน BigQuery เมื่อต้องการ SQL analytics, complex joins, ad-hoc queries ทั้งสองมักใช้คู่กัน (Bigtable for serving, BigQuery for analytics)</li>
</ol>
</div>
`
  },
  {
    number: 9,
    slug: 'practice-exam',
    emoji: '📝',
    title: 'Practice Exam & Tips',
    content: `
<h2>📝 Practice Exam — 20 ข้อ พร้อมคำอธิบาย</h2>

<p>ข้อสอบชุดนี้จำลองรูปแบบจริงของ GCP Professional Data Engineer Exam แต่ละข้อมีคำอธิบายว่าทำไมถึงเลือกคำตอบนั้น เหมาะสำหรับฝึกก่อนสอบจริง!</p>

<div class="tip-box">
<strong>💡 ทริค:</strong> ในข้อสอบจริง ถ้าไม่แน่ใจให้ <strong>เลือกคำตอบที่ "managed" และ "serverless" ที่สุด</strong> Google ชอบ push managed services มากกว่า self-managed เสมอ
</div>

<h2>ข้อ 1-5: Storage & BigQuery</h2>

<div class="exercise-box">
<strong>ข้อ 1:</strong> บริษัทของคุณมีข้อมูล log ขนาด 5 PB ใน BigQuery ข้อมูลเก่ากว่า 90 วัน ถูก query น้อยมาก (เดือนละครั้ง) แต่ต้องเก็บไว้ 7 ปีตาม compliance คุณจะ optimize cost อย่างไร?

<p>A) Export ข้อมูลเก่าไป GCS Coldline แล้วลบออกจาก BigQuery<br/>
B) ใช้ BigQuery long-term storage pricing (ข้อมูลที่ไม่ถูก modify > 90 วัน จะลดราคาอัตโนมัติ)<br/>
C) ย้ายข้อมูลไป Bigtable เพราะถูกกว่า<br/>
D) ใช้ BigQuery Capacity pricing แทน On-demand</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> BigQuery มี <strong>long-term storage pricing</strong> ที่ลดราคา ~50% โดยอัตโนมัติเมื่อ table/partition ไม่ถูก modify > 90 วัน ไม่ต้องทำอะไรเลย! ข้อมูลยังคง query ได้เหมือนเดิม A อาจดีสำหรับ cost แต่ต้อง manage + query จาก GCS ยากกว่า C ผิดเพราะ Bigtable ไม่เหมาะกับ analytics D ไม่ตอบโจทย์ storage cost</p>
</div>

<div class="exercise-box">
<strong>ข้อ 2:</strong> Analyst ต้อง query BigQuery table ที่มี 10 TB แต่ query ของเธอ filter แค่ 1 วัน ในคอลัมน์ created_date ทำยังไงให้ query ถูกลง?

<p>A) ใช้ LIMIT clause<br/>
B) Partition table ด้วย created_date<br/>
C) ใช้ BigQuery BI Engine<br/>
D) Switch ไป Cloud SQL</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Partitioning ด้วย created_date จะทำให้ BigQuery scan แค่ partition ของวันที่ต้องการ แทนที่จะ scan ทั้ง 10 TB LIMIT ไม่ลด bytes scanned (ข้อผิดพลาดที่คนเข้าใจผิดบ่อย!) BI Engine ช่วยเรื่อง speed ไม่ใช่ cost Cloud SQL ไม่รองรับ 10 TB analytics</p>
</div>

<div class="exercise-box">
<strong>ข้อ 3:</strong> คุณมี 50 TB data ใน AWS S3 ต้อง migrate มา GCS โดย sync ทุกวันจนกว่า migration จะเสร็จ ควรใช้เครื่องมือไหน?

<p>A) gsutil rsync<br/>
B) Storage Transfer Service<br/>
C) Transfer Appliance<br/>
D) Cloud Interconnect</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Storage Transfer Service รองรับ transfer จาก AWS S3 โดยตรง + schedule ได้ + optimized สำหรับ large-scale cross-cloud transfer gsutil ช้าเกินไปสำหรับ 50 TB Transfer Appliance เหมาะกับ on-premise ไม่ใช่ cloud-to-cloud Cloud Interconnect เป็น network connection ไม่ใช่ transfer tool</p>
</div>

<div class="exercise-box">
<strong>ข้อ 4:</strong> คุณต้องเก็บ ML training images (JPEG, PNG) ขนาดรวม 2 TB ที่ ML team ใช้ทุกวัน ควรเก็บที่ไหน?

<p>A) BigQuery<br/>
B) Cloud SQL<br/>
C) Cloud Storage (Standard class)<br/>
D) Bigtable</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> GCS Standard เหมาะที่สุดสำหรับ unstructured data (images) ที่เข้าถึงบ่อย BigQuery ไม่เหมาะกับ binary files Cloud SQL มี size limit Bigtable เหมาะกับ key-value ไม่ใช่ large files</p>
</div>

<div class="exercise-box">
<strong>ข้อ 5:</strong> คุณต้องแชร์ BigQuery dataset results กับ external partner ที่ไม่มี GCP account โดยส่งเป็นไฟล์ CSV ครั้งเดียว ควรทำอย่างไร?

<p>A) ให้ partner สร้าง GCP account แล้ว grant access<br/>
B) Export ไป GCS แล้วสร้าง Signed URL<br/>
C) ส่ง email attachment<br/>
D) ใช้ Pub/Sub ส่งข้อมูลให้</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Export to GCS + Signed URL เป็นวิธีที่ secure และ scalable ที่สุด partner ไม่ต้องมี GCP account URL มี expiration สร้าง account ให้ partner ซับซ้อนเกินไป Email มี attachment size limit Pub/Sub ไม่เหมาะกับ file sharing</p>
</div>

<h2>ข้อ 6-10: Streaming & Processing</h2>

<div class="exercise-box">
<strong>ข้อ 6:</strong> ระบบรับ clickstream events 50K events/sec ต้อง aggregate ทุก 5 นาที แล้วเขียนลง BigQuery late data ยอมรับได้ 1 ชั่วโมง ควรออกแบบอย่างไร?

<p>A) Pub/Sub → Cloud Functions → BigQuery<br/>
B) Pub/Sub → Dataflow (Fixed Window 5min, allowed lateness 1hr) → BigQuery<br/>
C) Kafka → Dataproc Streaming → BigQuery<br/>
D) Pub/Sub → BigQuery Subscription (direct)</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Dataflow รองรับ windowing + late data handling ได้ native Cloud Functions ไม่มี windowing concept Kafka + Dataproc เป็น over-engineering BigQuery Subscription ไม่ทำ aggregation ให้</p>
</div>

<div class="exercise-box">
<strong>ข้อ 7:</strong> Dataflow streaming job ต้อง update code แต่ห้าม data loss ควรทำอย่างไร?

<p>A) Cancel job แล้ว start ใหม่<br/>
B) ใช้ --update flag กับ compatible pipeline graph<br/>
C) Drain job แล้ว start ใหม่<br/>
D) ลด num_workers เหลือ 0</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> --update flag ทำ in-place update โดยไม่สูญเสียข้อมูล Pub/Sub จะ ack messages ต่อเนื่อง Cancel อาจ lose data Drain ทำงานได้แต่ช้ากว่าและมี gap ระหว่าง drain กับ start ใหม่</p>
</div>

<div class="exercise-box">
<strong>ข้อ 8:</strong> Pub/Sub message มี ordering requirement (messages จาก user เดียวกันต้องเรียงตามลำดับ) ควรทำอย่างไร?

<p>A) ใช้ single subscriber<br/>
B) ใช้ ordering key = user_id<br/>
C) ใช้ Kafka แทน<br/>
D) Sort ที่ consumer side</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Pub/Sub ordering key guarantee order ภายใน key เดียวกัน ไม่ต้อง Kafka ไม่ต้อง single subscriber (ยังขยายได้) Consumer-side sort ไม่ guarantee correctness</p>
</div>

<div class="exercise-box">
<strong>ข้อ 9:</strong> คุณต้อง process CSV files ที่ถูก upload เข้า GCS bucket ทุกชั่วโมง ทำ simple transformation (add timestamp, rename columns) แล้วเขียนลง BigQuery ต้อง cost-effective ที่สุด ควรใช้อะไร?

<p>A) Dataflow batch pipeline<br/>
B) Dataproc Spark job<br/>
C) Cloud Functions triggered by GCS event<br/>
D) Cloud Composer DAG</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> สำหรับ simple transformation ที่ trigger จาก file upload Cloud Functions ถูกที่สุด (pay-per-invocation) Dataflow และ Dataproc เป็น overkill สำหรับงานง่ายๆ Composer มี idle cost สูง</p>
</div>

<div class="exercise-box">
<strong>ข้อ 10:</strong> Dataflow pipeline ของคุณมี hot keys (80% ของ data มี key เดียวกัน) ทำให้ workers บางตัวทำงานหนักมาก ควรแก้อย่างไร?

<p>A) เพิ่มจำนวน workers<br/>
B) ใช้ .withFanout() หรือ combiner สำหรับ hot keys<br/>
C) ลด window size<br/>
D) ใช้ Session windows แทน</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Hot keys ทำให้ data skew → ต้อง fan-out computation ก่อน combine withFanout() จะ pre-aggregate ที่ multiple workers ก่อนรวมผลลัพธ์ เพิ่ม workers ไม่ช่วยเพราะ hot key ยังไปที่ worker เดียว</p>
</div>

<h2>ข้อ 11-15: Orchestration, Governance & Security</h2>

<div class="exercise-box">
<strong>ข้อ 11:</strong> คุณมี data pipeline 15 steps ที่ต้อง run ทุกวัน มี dependencies ซับซ้อน ต้อง backfill 30 วันย้อนหลัง ควรใช้เครื่องมืออะไร?

<p>A) Cloud Scheduler + Cloud Functions<br/>
B) Cloud Workflows<br/>
C) Cloud Composer<br/>
D) Cron job บน Compute Engine</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> Cloud Composer (Airflow) รองรับ complex DAGs, dependencies, backfill, monitoring UI Workflows ไม่มี backfill native Scheduler + Functions ไม่เหมาะกับ complex dependencies Cron on CE ต้อง manage เอง</p>
</div>

<div class="exercise-box">
<strong>ข้อ 12:</strong> ทีม data science ต้อง access BigQuery table ที่มี PII column (email, phone) แต่ไม่ควรเห็น PII คุณจะทำอย่างไร?

<p>A) สร้าง view ที่ไม่ include PII columns<br/>
B) ใช้ Policy Tags เพื่อ restrict PII columns<br/>
C) สร้าง copy ของ table โดยลบ PII columns<br/>
D) ใช้ Row-level security</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Policy Tags (Data Catalog) ให้ column-level access control ใน BigQuery — เป็นวิธีที่ scalable ที่สุด ไม่ต้อง maintain views หรือ copies แยก A ใช้ได้แต่ต้อง maintain view ตลอด C ต้อง maintain copy D เป็น row-level ไม่ใช่ column-level</p>
</div>

<div class="exercise-box">
<strong>ข้อ 13:</strong> ลูกค้าต้องการให้ encryption keys อยู่ภายใต้การควบคุมของตัวเอง แต่ยังใช้ BigQuery ได้ปกติ ควรใช้อะไร?

<p>A) Default Google-managed encryption<br/>
B) CMEK (Customer-Managed Encryption Keys)<br/>
C) CSEK (Customer-Supplied Encryption Keys)<br/>
D) Client-side encryption</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> CMEK ใช้ Cloud KMS ให้ลูกค้า control key lifecycle (rotate, disable, destroy) แต่ BigQuery ยังทำงานปกติ CSEK ไม่รองรับ BigQuery (GCS only) Client-side encryption ทำให้ BigQuery ไม่สามารถ process data ได้</p>
</div>

<div class="exercise-box">
<strong>ข้อ 14:</strong> บริษัทต้องปฏิบัติตาม PDPA (กฎหมายข้อมูลส่วนบุคคลไทย) คุณจะ scan BigQuery tables เพื่อหา PII ได้อย่างไร?

<p>A) เขียน SQL query ค้นหา pattern เอง<br/>
B) ใช้ DLP API scan BigQuery tables<br/>
C) ใช้ Data Catalog search<br/>
D) ใช้ Cloud Monitoring</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> DLP API มี built-in InfoTypes สำหรับ PII (รวมถึง THAILAND_NATIONAL_ID_NUMBER) สามารถ scan BigQuery tables โดยตรง + de-identify ได้อัตโนมัติ SQL query ไม่ครอบคลุม Data Catalog เป็น metadata management ไม่ใช่ content scanning</p>
</div>

<div class="exercise-box">
<strong>ข้อ 15:</strong> คุณต้องป้องกันไม่ให้พนักงาน copy BigQuery data ออกไปยัง project อื่น แม้จะมี IAM permission ควรใช้อะไร?

<p>A) IAM deny policies<br/>
B) Organization policies<br/>
C) VPC Service Controls<br/>
D) Firewall rules</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> VPC Service Controls สร้าง security perimeter ที่ป้องกัน data exfiltration ที่ API level แม้มี IAM permission ก็ถูก perimeter block IAM deny ป้องกัน specific actions แต่ไม่ป้องกัน cross-project copy ทั้งหมด Organization policies ทำได้บางส่วน Firewall rules เป็น network level</p>
</div>

<h2>ข้อ 16-20: Architecture & Design</h2>

<div class="exercise-box">
<strong>ข้อ 16:</strong> ต้อง migrate Apache Hive warehouse ขนาด 500TB มา GCP โดยต้อง backward compatible กับ HiveQL queries ระหว่าง migration ควรทำอย่างไร?

<p>A) ย้ายตรงไป BigQuery ทันที<br/>
B) ใช้ Dataproc + Hive metastore service แล้วค่อยๆ migrate ไป BigQuery<br/>
C) ย้ายไป Cloud SQL<br/>
D) เขียน Dataflow pipeline แปลง Hive tables</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> Dataproc + Hive metastore service ให้ backward compatibility กับ HiveQL ทันที เปลี่ยนแค่ compute layer แล้ว migrate ไป BigQuery ทีละ table ลดความเสี่ยง A เร็วเกินไป อาจ break queries C ไม่รองรับ 500TB D ไม่ช่วยเรื่อง HiveQL compatibility</p>
</div>

<div class="exercise-box">
<strong>ข้อ 17:</strong> ระบบ IoT มี 100K sensors ส่ง data ทุก 1 วินาที ต้อง serve real-time dashboard ที่แสดงค่าล่าสุดของแต่ละ sensor (latency < 10ms) ควรเก็บข้อมูลที่ไหน?

<p>A) BigQuery<br/>
B) Cloud SQL<br/>
C) Bigtable<br/>
D) Memorystore (Redis)</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> Bigtable ออกแบบมาสำหรับ time-series data, high write throughput, low latency reads (< 10ms) Row key = sensor_id#timestamp BigQuery latency เป็นวินาที Cloud SQL ไม่ scale สำหรับ 100K writes/sec Memorystore ได้แต่ไม่ persistent + จำกัด memory</p>
</div>

<div class="exercise-box">
<strong>ข้อ 18:</strong> Data pipeline ของคุณต้อง join BigQuery table (1TB) กับ Cloud SQL table (10GB) ทุกวัน ควรทำอย่างไร?

<p>A) Export BigQuery ไป Cloud SQL แล้ว join ที่ Cloud SQL<br/>
B) ใช้ BigQuery federated query เพื่อ query Cloud SQL โดยตรง<br/>
C) Export Cloud SQL ไป BigQuery แล้ว join ที่ BigQuery<br/>
D) ใช้ Dataflow อ่านทั้ง 2 sources แล้ว join</p>

<p><strong>✅ คำตอบ: C</strong></p>
<p><strong>อธิบาย:</strong> Export ข้อมูลเล็ก (Cloud SQL 10GB) ไปยังระบบที่รองรับข้อมูลใหญ่ (BigQuery) แล้ว join ที่ BQ A ไม่ feasible (1TB > Cloud SQL capacity) B ใช้ federated query ได้แต่ช้า + แพง (query ข้าม network ทุกครั้ง) สำหรับ daily job C ดีกว่า D over-engineering สำหรับ case นี้</p>
</div>

<div class="exercise-box">
<strong>ข้อ 19:</strong> คุณต้องสร้าง ML model ทำนาย customer churn ข้อมูลอยู่ใน BigQuery ทีมมีแต่ SQL analysts ไม่มี Python developer ควรใช้เครื่องมือไหน?

<p>A) Vertex AI AutoML<br/>
B) BigQuery ML<br/>
C) Dataproc + Spark MLlib<br/>
D) TensorFlow on Compute Engine</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> BQML ให้สร้าง ML model ด้วย SQL ไม่ต้อง Python ข้อมูลอยู่ใน BQ อยู่แล้ว ไม่ต้อง export Vertex AI ต้อง setup เพิ่ม Spark MLlib ต้อง Scala/Python TensorFlow ต้อง deep learning expertise</p>
</div>

<div class="exercise-box">
<strong>ข้อ 20:</strong> บริษัทต้องการให้ data ของแต่ละ department อยู่แยกกันใน BigQuery แต่ยังต้อง share บาง tables ข้าม department ควรจัดโครงสร้างอย่างไร?

<p>A) Project เดียว, dataset แยกตาม department, ใช้ Authorized Views<br/>
B) Project แยกตาม department, ใช้ Analytics Hub สำหรับ sharing<br/>
C) Project เดียว, ใช้ IAM ควบคุม table-level access<br/>
D) ทุก department ใช้ dataset เดียวกัน, ใช้ Row-level security</p>

<p><strong>✅ คำตอบ: B</strong></p>
<p><strong>อธิบาย:</strong> แยก project ตาม department ให้ isolation ที่ดีที่สุด (billing, IAM, quotas แยกกัน) ใช้ Analytics Hub สำหรับ cross-project data sharing แบบ governed A มี blast radius กว้างเกินไป C table-level IAM ซับซ้อนเมื่อ scale D ไม่แยก department เลย</p>
</div>

<h2>📊 สรุปคะแนนและการประเมิน</h2>

<table>
<tr><th>คะแนน</th><th>ระดับ</th><th>คำแนะนำ</th></tr>
<tr><td>18-20</td><td>🟢 พร้อมสอบ!</td><td>ลงทะเบียนสอบได้เลย ทบทวน Case Study อีกรอบ</td></tr>
<tr><td>14-17</td><td>🟡 เกือบพร้อม</td><td>ทบทวนหัวข้อที่ผิด อ่าน documentation เพิ่มเติม</td></tr>
<tr><td>10-13</td><td>🟠 ต้องทบทวนเพิ่ม</td><td>กลับไปอ่าน chapter ที่เกี่ยวข้อง ทำ lab เพิ่ม</td></tr>
<tr><td>0-9</td><td>🔴 ยังไม่พร้อม</td><td>เรียนคอร์สนี้ทั้งหมดใหม่ ทำ hands-on lab ให้ครบ</td></tr>
</table>

<h2>🎯 เคล็ดลับวันสอบ</h2>

<div class="tip-box">
<strong>💡 ทริค วันสอบ:</strong>
<ol>
<li><strong>อ่าน Case Study ก่อนสอบ</strong> — Google เผยแพร่ล่วงหน้า อ่าน summarize ไว้ ไม่ต้องเสียเวลาอ่านในห้องสอบ</li>
<li><strong>Flag ข้อไม่แน่ใจ</strong> — ทำข้อง่ายก่อน flag ข้อยากไว้กลับมาทีหลัง</li>
<li><strong>หลัก elimination</strong> — ตัดตัวเลือกที่ผิดชัดๆ ออก แล้วเลือกจากที่เหลือ</li>
<li><strong>เลือก managed > self-managed</strong> — Google ชอบ serverless solution</li>
<li><strong>เลือก simple > complex</strong> — ถ้า 2 ตัวเลือกทำได้เหมือนกัน เลือกตัวที่ง่ายกว่า</li>
<li><strong>ระวังคำว่า "cost-effective"</strong> — หมายถึงถูกที่สุดที่ทำได้ ไม่ใช่ดีที่สุด</li>
<li><strong>ระวังคำว่า "minimal operational overhead"</strong> — หมายถึง managed/serverless</li>
<li><strong>บริหารเวลา</strong> — 2 ชม. / 50 ข้อ = 2.4 นาที/ข้อ อย่าใช้เวลามากกับข้อเดียว</li>
</ol>
</div>

<h2>📚 ทรัพยากรเพิ่มเติมก่อนสอบ</h2>

<div class="warning-box">
<strong>⚠️ สิ่งที่ควรทำก่อนสอบ 1 สัปดาห์:</strong>
<ul>
<li>ทำ <strong>Google Official Practice Exam</strong> (ฟรีบน cloud.google.com)</li>
<li>ทบทวน <strong>Case Studies</strong> ทั้ง 2 ตัว</li>
<li>อ่าน <strong>Google Cloud Solutions documentation</strong> (architecture patterns)</li>
<li>ทบทวน <strong>Pricing models</strong> ของทุก service หลัก</li>
<li>นอนให้พอ พักผ่อนให้เต็มที่ก่อนวันสอบ!</li>
</ul>
</div>

<div class="interview-box">
<strong>🎯 ข้อคิดสุดท้าย:</strong>
<p>ข้อสอบ GCP Professional Data Engineer ไม่ใช่แค่เรื่องท่องจำ แต่เป็นการทดสอบ <strong>ความสามารถในการตัดสินใจ</strong> ว่าในสถานการณ์จริง น้องจะเลือก service ไหน ออกแบบ architecture ยังไง ป้องกัน data ยังไง</p>
<p>ถ้าน้องเข้าใจ <strong>WHY</strong> ไม่ใช่แค่ WHAT — น้องจะผ่านได้แน่นอน 💪</p>
<p><strong>ขอให้โชคดีในการสอบ! 🍀</strong></p>
</div>
`
  }
];
