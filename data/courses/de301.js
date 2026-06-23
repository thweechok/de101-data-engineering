export const chapters = [
  {
    number: 0,
    slug: 'mindset',
    emoji: '💎',
    title: 'จาก Mid สู่ Senior — Mindset Shift',
    content: `
<h2>🎯 ทำไม Senior ถึง "คิดต่าง" จาก Mid?</h2>

<p>สมมติว่าคุณเป็น Mid-level Data Engineer ที่ทำงานมา 2-3 ปี คุณเขียน Pipeline ได้คล่อง, deploy Airflow DAG ได้ไม่มีปัญหา, query SQL ได้เร็ว แต่วันหนึ่ง PM ถามว่า <em>"เราควรใช้ Kafka หรือ Pub/Sub ดี?"</em> — แล้วคุณตอบไม่ได้ หรือตอบได้แต่ไม่มั่นใจ... นั่นคือจุดที่คุณรู้ว่า <strong>ยังไม่ถึง Senior</strong></p>

<p>ความแตกต่างไม่ใช่แค่ "รู้มากกว่า" แต่คือ <strong>วิธีคิด วิธีตัดสินใจ และวิธีรับผิดชอบ</strong> ที่เปลี่ยนไปอย่างสิ้นเชิง</p>

<h2>🧠 T-Shaped Skills — ลึกหนึ่งอย่าง กว้างทุกอย่าง</h2>

<p>แนวคิด T-Shaped Skills คือหัวใจของ Senior Engineer ทุกสาย:</p>

<pre><code class="language-text">
              ┌─────────────────────────────────────────────┐
              │  กว้าง: Cloud, SQL, Python, DevOps, ML,     │
              │  Business, Communication, Security          │
              └──────────────────────┬──────────────────────┘
                                     │
                                     │  ลึก: เช่น
                                     │  Streaming Systems
                                     │  - Kafka internals
                                     │  - Exactly-once semantics
                                     │  - Partition strategy
                                     │  - Consumer group mgmt
                                     │  - Schema evolution
                                     │  - Performance tuning
                                     ▼
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> เลือก "แกนลึก" ของคุณจากสิ่งที่บริษัทต้องการ + สิ่งที่คุณหลงใหล ถ้าบริษัทใช้ Spark เยอะ ก็ลงลึก Spark internals ถ้าใช้ Streaming เยอะ ก็ลงลึก Kafka/Flink — อย่าลงลึกมั่วซั่ว
</div>

<h3>Mid vs Senior — ตารางเปรียบเทียบ</h3>

<pre><code class="language-text">
┌──────────────────────┬───────────────────────────┬───────────────────────────────┐
│ มิติ                 │ Mid-Level                 │ Senior                        │
├──────────────────────┼───────────────────────────┼───────────────────────────────┤
│ Task                 │ รับ Task แล้วทำ            │ หา Task เอง, break down เอง    │
│ Design               │ ทำตาม design ที่ได้รับ      │ ออกแบบ system เอง              │
│ Code Review          │ ส่ง PR รอ approve          │ Review คนอื่น + mentor         │
│ Debugging            │ Fix bug ที่ assign          │ หา root cause ของ systemic issue│
│ Communication        │ Update ใน standup          │ นำ discussion, write RFC/ADR    │
│ Scope                │ Feature-level              │ System-level / Cross-team      │
│ Risk                 │ หลีกเลี่ยง risk             │ จัดการ risk อย่างเป็นระบบ        │
└──────────────────────┴───────────────────────────┴───────────────────────────────┘
</code></pre>

<h2>🔑 Ownership — หัวใจของ Senior</h2>

<p>Ownership ไม่ใช่แค่ "ทำงานให้เสร็จ" แต่คือ:</p>

<pre><code class="language-python">
class SeniorEngineerMindset:
    """แนวคิดของ Senior Engineer ที่ดี"""
    
    def handle_production_incident(self, alert):
        # 1. Own it — ไม่โทษคนอื่น
        self.acknowledge_alert(alert)
        self.notify_stakeholders(
            message=f"รับทราบปัญหาแล้ว กำลังดูอยู่",
            eta_minutes=30
        )
        
        # 2. Fix it — แก้ปัญหาเฉพาะหน้าก่อน
        root_cause = self.investigate(alert)
        self.apply_hotfix(root_cause)
        
        # 3. Prevent it — ทำให้ไม่เกิดซ้ำ
        self.write_postmortem(
            what_happened=root_cause,
            why_it_happened=self.five_whys(root_cause),
            how_to_prevent=[
                "เพิ่ม integration test สำหรับ edge case นี้",
                "เพิ่ม alert ก่อนที่จะ fail จริง (leading indicator)",
                "เขียน runbook สำหรับ on-call engineer"
            ]
        )
        
        # 4. Share it — แชร์บทเรียน
        self.present_at_team_meeting(self.postmortem)
    
    def make_technical_decision(self, options):
        """Senior ตัดสินใจด้วย trade-off analysis ไม่ใช่ gut feeling"""
        analysis = []
        for option in options:
            analysis.append({
                "option": option.name,
                "pros": option.advantages,
                "cons": option.disadvantages,
                "cost": option.estimated_cost,
                "effort": option.engineering_weeks,
                "risk": option.risk_level,
                "reversibility": option.is_reversible
            })
        
        # Document decision ใน ADR (Architecture Decision Record)
        self.write_adr(
            title=f"ADR-{self.next_adr_number}: เลือก {best_option}",
            context="ทำไมต้องตัดสินใจตรงนี้",
            decision=best_option,
            consequences="ผลกระทบที่คาดว่าจะเกิด"
        )
        return best_option
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ทุกครั้งที่เกิด production incident ให้เขียน Postmortem แม้ไม่มีใครบังคับ — นี่คือสัญญาณ ownership ที่ manager จะเห็น
</div>

<h2>🧠 วิธีคิด: Decision Making Framework</h2>

<p>Senior ใช้ framework ในการตัดสินใจ ไม่ใช่ gut feeling:</p>

<pre><code class="language-text">
    ┌─────────────────────────────────────┐
    │     Technical Decision Framework     │
    └─────────────────┬───────────────────┘
                      ▼
    ┌─────────────────────────────────────┐
    │  1. Define the problem clearly       │
    │     "เราต้องการอะไร? ไม่ต้องการอะไร?"  │
    └─────────────────┬───────────────────┘
                      ▼
    ┌─────────────────────────────────────┐
    │  2. List constraints                 │
    │     Budget, timeline, team skills    │
    └─────────────────┬───────────────────┘
                      ▼
    ┌─────────────────────────────────────┐
    │  3. Generate options (≥3)            │
    │     "Buy vs Build vs Hybrid"         │
    └─────────────────┬───────────────────┘
                      ▼
    ┌─────────────────────────────────────┐
    │  4. Evaluate trade-offs              │
    │     Cost, complexity, maintenance    │
    └─────────────────┬───────────────────┘
                      ▼
    ┌─────────────────────────────────────┐
    │  5. Document in ADR                  │
    │     "ทำไมเลือกอันนี้ ไม่เลือกอันนั้น" │
    └─────────────────────────────────────┘
</code></pre>

<h2>📊 Impact vs Effort — คิดแบบ Senior</h2>

<p>Senior ไม่ทำทุกอย่างที่อยากทำ แต่ทำสิ่งที่ <strong>impact สูงสุด</strong>:</p>

<pre><code class="language-python">
def prioritize_work(backlog):
    """Senior prioritize ด้วย Impact/Effort matrix"""
    quadrants = {
        "quick_wins": [],      # High Impact, Low Effort → ทำก่อน!
        "big_bets": [],        # High Impact, High Effort → วางแผนดีๆ
        "fill_ins": [],        # Low Impact, Low Effort → ทำเวลาว่าง
        "money_pits": []       # Low Impact, High Effort → อย่าทำ!
    }
    
    for task in backlog:
        impact = estimate_business_impact(task)  # $$$ saved, users helped
        effort = estimate_engineering_effort(task)  # days, complexity
        
        if impact > 7 and effort < 3:
            quadrants["quick_wins"].append(task)
        elif impact > 7 and effort >= 3:
            quadrants["big_bets"].append(task)
        elif impact <= 7 and effort < 3:
            quadrants["fill_ins"].append(task)
        else:
            quadrants["money_pits"].append(task)
    
    # ⚠️ ข้อผิดพลาดที่พบบ่อย: Junior/Mid มักจะ
    # อยากทำ "big refactor" ที่อยู่ใน money_pit
    # Senior รู้ว่าต้อง justify ด้วย business value
    
    return quadrants
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>Premature Optimization:</strong> ปรับ performance ก่อนที่จะมี bottleneck จริง<br/>
2. <strong>Resume-Driven Development:</strong> เลือก tech เพราะอยากใส่ resume ไม่ใช่เพราะเหมาะกับงาน<br/>
3. <strong>Hero Culture:</strong> คิดว่า Senior ต้องทำทุกอย่างคนเดียว — จริงๆ Senior ที่ดี multiply ผ่านทีม<br/>
4. <strong>Over-engineering:</strong> ออกแบบสำหรับ scale 100x ทั้งที่ปัจจุบันยังไม่มี traffic
</div>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> ฝึกเขียน "1-pager" ทุกสัปดาห์ — สรุปสิ่งที่เรียนรู้, decision ที่ตัดสินใจ, impact ที่เกิดขึ้น นี่คือ material ที่ดีที่สุดสำหรับ promotion document
</div>

<h2>🗺️ Career Roadmap: Senior → Staff → Principal</h2>

<pre><code class="language-text">
Senior Engineer (IC3-IC4)
├── Scope: Team-level / 1-2 systems
├── Skills: Deep technical + communication
├── Output: Design docs, mentoring, complex features
│
Staff Engineer (IC5)
├── Scope: Multi-team / Organization-level
├── Skills: Technical strategy + influence without authority
├── Output: RFCs, cross-team standards, technical vision
│
Principal Engineer (IC6+)
├── Scope: Company-level / Industry
├── Skills: Industry thought leadership
├── Output: Company tech strategy, external talks, open-source
</code></pre>

<h2>🏋️ สิ่งที่ต้องฝึกทุกวัน</h2>

<pre><code class="language-python">
daily_senior_habits = {
    "morning": [
        "อ่าน production alerts/dashboards (15 นาที)",
        "review PR ของทีม (30 นาที)",
        "check architecture fitness functions"
    ],
    "during_work": [
        "เขียน code ที่คนอื่นอ่านง่าย ไม่ใช่แค่ work",
        "ทุก design decision → document trade-offs",
        "pair program กับ junior อย่างน้อย 1 ชม./สัปดาห์"
    ],
    "end_of_day": [
        "update documentation ถ้ามีอะไรเปลี่ยน",
        "review ว่าวันนี้ทำ high-impact work หรือแค่ busy",
        "เขียน TIL (Today I Learned)"
    ]
}
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. เขียน ADR (Architecture Decision Record) สำหรับการเลือก message queue ระหว่าง Kafka, RabbitMQ, และ Cloud Pub/Sub สำหรับ e-commerce platform<br/>
2. สร้าง Impact/Effort matrix สำหรับ backlog 10 items ของ data team<br/>
3. เขียน Postmortem สำหรับ scenario: "Pipeline ล่ม 4 ชั่วโมงเพราะ schema change ที่ไม่ได้ backward compatible"<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
ADR ควรมี: Title, Status, Context, Decision, Consequences<br/>
Matrix ควรให้คะแนน Impact (1-10) และ Effort (1-10) ทุก item<br/>
Postmortem ควรมี: Timeline, Root Cause, 5 Whys, Action Items พร้อม owner
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์ Senior DE:</strong><br/>
1. "เล่าเคสที่คุณต้องตัดสินใจ technical decision ที่สำคัญ — คุณคิดยังไง?"<br/>
2. "คุณเคย push back requirement ของ PM ไหม? ทำยังไง?"<br/>
3. "ถ้า pipeline production ล่มตอนตี 3 แล้วคุณเป็น on-call คุณจะทำอะไรเป็นอย่างแรก?"<br/>
4. "คุณ mentor junior engineer ยังไง? ยกตัวอย่างที่เขา grow ได้เพราะคุณ"<br/>
<em>Tip: คำตอบที่ดีจะมี structure ชัดเจน มี data/metrics สนับสนุน และแสดง impact</em>
</div>
`
  },
  {
    number: 1,
    slug: 'lakehouse',
    emoji: '🏠',
    title: 'Lakehouse Architecture — Delta Lake, Iceberg, Hudi',
    content: `
<h2>🎯 ทำไมต้อง Lakehouse? — จุดจบของ "Data Warehouse vs Data Lake"</h2>

<p>ลองนึกภาพบริษัท e-commerce ที่มี:</p>
<ul>
<li><strong>Data Lake (S3/GCS):</strong> เก็บ raw data ราคาถูก แต่ query ช้า ไม่มี ACID transactions</li>
<li><strong>Data Warehouse (BigQuery/Redshift):</strong> Query เร็ว แต่แพง และ ingest ข้อมูลใหญ่ลำบาก</li>
</ul>
<p>ผลคือต้อง copy data ไปมาระหว่าง 2 ระบบ — เสียเงิน เสียเวลา data ไม่ consistent! <strong>Lakehouse</strong> คือคำตอบ: เอาข้อดีของทั้ง 2 มารวมกัน</p>

<pre><code class="language-text">
    ก่อน Lakehouse:                      หลัง Lakehouse:
    ┌──────────┐    ETL    ┌──────────┐  ┌───────────────────────┐
    │Data Lake │ ───────► │Warehouse │  │     Lakehouse          │
    │(S3/GCS)  │◄──────── │(BQ/RS)   │  │  ┌─────────────────┐  │
    │ Cheap    │   Copy   │ Fast     │  │  │  Object Storage  │  │
    │ No ACID  │   back   │ Expensive│  │  │  + Table Format  │  │
    │ Schema?  │          │ Limited  │  │  │  = Best of Both  │  │
    └──────────┘          └──────────┘  │  └─────────────────┘  │
         Data inconsistency!            │  ACID + Cheap + Fast  │
                                        └───────────────────────┘
</code></pre>

<h2>📐 Table Format — หัวใจของ Lakehouse</h2>

<p>Table Format คือ <strong>metadata layer</strong> ที่อยู่บน object storage ทำให้ Parquet files ธรรมดาๆ กลายเป็น "table" ที่มี ACID transactions, time travel, schema evolution</p>

<h3>1. Delta Lake (Databricks)</h3>

<pre><code class="language-python">
from delta import DeltaTable
from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("DeltaLakehouse") \\
    .config("spark.sql.extensions", "io.delta.sql.DeltaSparkSessionExtension") \\
    .config("spark.sql.catalog.spark_catalog", 
            "org.apache.spark.sql.delta.catalog.DeltaCatalog") \\
    .getOrCreate()

# เขียนข้อมูลแบบ ACID — ไม่มี partial write อีกต่อไป!
orders_df = spark.read.json("s3://raw/orders/2024-01-15/")

orders_df.write \\
    .format("delta") \\
    .mode("append") \\
    .partitionBy("order_date") \\
    .save("s3://lakehouse/bronze/orders")

# MERGE (Upsert) — สิ่งที่ Data Lake ธรรมดาทำไม่ได้
delta_table = DeltaTable.forPath(spark, "s3://lakehouse/bronze/orders")

delta_table.alias("target").merge(
    source=new_orders_df.alias("source"),
    condition="target.order_id = source.order_id"
).whenMatchedUpdate(set={
    "status": "source.status",
    "updated_at": "source.updated_at"
}).whenNotMatchedInsertAll().execute()

# Time Travel — ย้อนเวลากลับไปดู data ก่อน bug!
yesterday_data = spark.read \\
    .format("delta") \\
    .option("timestampAsOf", "2024-01-14") \\
    .load("s3://lakehouse/bronze/orders")

# หรือใช้ version number
v5_data = spark.read \\
    .format("delta") \\
    .option("versionAsOf", 5) \\
    .load("s3://lakehouse/bronze/orders")
</code></pre>

<h3>2. Apache Iceberg (Netflix/Apple)</h3>

<pre><code class="language-python">
from pyspark.sql import SparkSession

spark = SparkSession.builder \\
    .appName("IcebergLakehouse") \\
    .config("spark.sql.catalog.lakehouse", 
            "org.apache.iceberg.spark.SparkCatalog") \\
    .config("spark.sql.catalog.lakehouse.type", "hadoop") \\
    .config("spark.sql.catalog.lakehouse.warehouse", 
            "s3://lakehouse/iceberg/") \\
    .getOrCreate()

# สร้าง table ด้วย Iceberg
spark.sql("""
    CREATE TABLE lakehouse.bronze.orders (
        order_id BIGINT,
        customer_id BIGINT,
        amount DECIMAL(10,2),
        status STRING,
        order_date DATE,
        updated_at TIMESTAMP
    )
    USING iceberg
    PARTITIONED BY (days(order_date))
""")

# Iceberg ฉลาดเรื่อง Partition Evolution!
# เปลี่ยน partition strategy ได้โดย ไม่ต้อง rewrite data เก่า
spark.sql("""
    ALTER TABLE lakehouse.bronze.orders
    ADD PARTITION FIELD months(order_date)
""")
# data เก่า partition by day, data ใหม่ partition by month
# Iceberg จัดการ query planning ให้อัตโนมัติ!

# Schema Evolution — เพิ่ม column ได้ปลอดภัย
spark.sql("""
    ALTER TABLE lakehouse.bronze.orders
    ADD COLUMNS (
        shipping_address STRING,
        discount_code STRING
    )
""")

# Snapshot-based Time Travel
spark.sql("""
    SELECT * FROM lakehouse.bronze.orders
    FOR SYSTEM_TIME AS OF '2024-01-14 10:00:00'
""")
</code></pre>

<h3>3. Apache Hudi (Uber)</h3>

<pre><code class="language-python">
# Hudi — ออกแบบมาสำหรับ incremental processing
hudi_options = {
    'hoodie.table.name': 'orders',
    'hoodie.datasource.write.recordkey.field': 'order_id',
    'hoodie.datasource.write.precombine.field': 'updated_at',
    'hoodie.datasource.write.partitionpath.field': 'order_date',
    'hoodie.datasource.write.operation': 'upsert',
    # Copy-on-Write vs Merge-on-Read
    'hoodie.datasource.write.table.type': 'MERGE_ON_READ'
}

orders_df.write \\
    .format("hudi") \\
    .options(**hudi_options) \\
    .mode("append") \\
    .save("s3://lakehouse/hudi/orders")

# Hudi มี 2 table types:
# COW (Copy-on-Write): write ช้า, read เร็ว → BI/Analytics
# MOR (Merge-on-Read): write เร็ว, read ช้าหน่อย → Near real-time
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> ถ้าเพิ่งเริ่ม Lakehouse ให้เลือก Delta Lake ถ้าใช้ Databricks หรือ Iceberg ถ้าต้องการ engine-agnostic (Spark, Trino, Flink ใช้ร่วมกันได้) — Hudi เหมาะกับ use case ที่ต้อง upsert เยอะมากๆ
</div>

<h2>⚖️ เปรียบเทียบ Delta Lake vs Iceberg vs Hudi</h2>

<pre><code class="language-text">
┌──────────────────────┬──────────────┬──────────────┬──────────────┐
│ Feature              │ Delta Lake   │ Iceberg      │ Hudi         │
├──────────────────────┼──────────────┼──────────────┼──────────────┤
│ ACID Transactions    │ ✅           │ ✅           │ ✅           │
│ Time Travel          │ ✅           │ ✅           │ ✅           │
│ Schema Evolution     │ ✅           │ ✅ (ดีกว่า)  │ ✅           │
│ Partition Evolution  │ ❌ (rewrite) │ ✅ (ไม่ต้อง) │ ❌ (rewrite) │
│ Engine Support       │ Spark-centric│ Multi-engine │ Spark-centric│
│ Upsert Performance   │ ดี           │ ดี           │ ดีมาก        │
│ Community            │ Databricks   │ Netflix/Apple│ Uber         │
│ Catalog              │ Unity Catalog│ REST/Hive/   │ Hive         │
│                      │              │ Nessie/Glue  │              │
│ Open Source Quality  │ ⭐⭐⭐       │ ⭐⭐⭐⭐     │ ⭐⭐⭐       │
│ Cloud Agnostic       │ ปานกลาง      │ ดีมาก        │ ปานกลาง      │
└──────────────────────┴──────────────┴──────────────┴──────────────┘
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ในสัมภาษณ์ ถ้าถูกถามว่าเลือกอันไหน ให้ตอบว่า <em>"ขึ้นอยู่กับ context"</em> แล้วอธิบาย trade-offs — อย่าตอบว่า "Iceberg ดีที่สุด" โดยไม่มีเหตุผล
</div>

<h2>🏗️ Medallion Architecture (Bronze / Silver / Gold)</h2>

<pre><code class="language-text">
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   BRONZE     │     │   SILVER     │     │    GOLD      │
│  Raw Data    │────▶│  Cleansed    │────▶│  Business    │
│              │     │  Conformed   │     │  Aggregated  │
├─────────────┤     ├─────────────┤     ├─────────────┤
│ • Append-only│     │ • Deduped    │     │ • Dim/Fact   │
│ • Schema on  │     │ • Type-cast  │     │ • KPI tables │
│   read       │     │ • Validated  │     │ • ML features│
│ • Full       │     │ • Joined     │     │ • Dashboard  │
│   history    │     │   reference  │     │   ready      │
│              │     │   data       │     │              │
│ Retention:   │     │ Retention:   │     │ Retention:   │
│ 90-365 days  │     │ 1-3 years    │     │ Forever      │
└─────────────┘     └─────────────┘     └─────────────┘
</code></pre>

<pre><code class="language-python">
# Production-grade Medallion Pipeline
class MedallionPipeline:
    def __init__(self, spark, table_format="delta"):
        self.spark = spark
        self.format = table_format
    
    def bronze_ingest(self, source_path, table_name):
        """Bronze: Raw data + metadata"""
        raw_df = self.spark.read.json(source_path)
        
        enriched_df = raw_df \\
            .withColumn("_ingested_at", F.current_timestamp()) \\
            .withColumn("_source_file", F.input_file_name()) \\
            .withColumn("_batch_id", F.lit(str(uuid.uuid4())))
        
        enriched_df.write \\
            .format(self.format) \\
            .mode("append") \\
            .save(f"s3://lakehouse/bronze/{table_name}")
    
    def silver_transform(self, table_name, business_rules):
        """Silver: Cleaned + validated"""
        bronze_df = self.spark.read \\
            .format(self.format) \\
            .load(f"s3://lakehouse/bronze/{table_name}")
        
        silver_df = bronze_df \\
            .dropDuplicates(["order_id"]) \\
            .filter(F.col("amount") > 0) \\
            .withColumn("amount", F.col("amount").cast("decimal(10,2)")) \\
            .withColumn("_processed_at", F.current_timestamp())
        
        # Data quality checks
        assert silver_df.filter(F.col("order_id").isNull()).count() == 0, \\
            "NULL order_ids found!"
        
        silver_df.write \\
            .format(self.format) \\
            .mode("overwrite") \\
            .save(f"s3://lakehouse/silver/{table_name}")
    
    def gold_aggregate(self):
        """Gold: Business-ready aggregations"""
        orders = self.spark.read.format(self.format) \\
            .load("s3://lakehouse/silver/orders")
        
        daily_revenue = orders \\
            .groupBy("order_date") \\
            .agg(
                F.sum("amount").alias("total_revenue"),
                F.countDistinct("customer_id").alias("unique_customers"),
                F.avg("amount").alias("avg_order_value")
            )
        
        daily_revenue.write \\
            .format(self.format) \\
            .mode("overwrite") \\
            .save("s3://lakehouse/gold/daily_revenue")
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> ใน Bronze layer ให้เพิ่ม metadata columns เสมอ: <code>_ingested_at</code>, <code>_source_file</code>, <code>_batch_id</code> — มันจะช่วย debug ได้มหาศาลเมื่อมีปัญหา
</div>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>ไม่ทำ compaction:</strong> Small files problem ทำให้ query ช้ามาก — ต้อง OPTIMIZE เป็นประจำ<br/>
2. <strong>Partition column ผิด:</strong> Partition by high-cardinality column (เช่น user_id) ทำให้มี partition ล้านๆ อัน<br/>
3. <strong>ไม่ set retention policy:</strong> Time travel files เก่าๆ กิน storage ไม่หยุด — ต้อง VACUUM<br/>
4. <strong>ข้าม Silver ไป Gold เลย:</strong> ทำให้ business logic ปนกับ cleaning logic — debug ยาก
</div>

<h2>🧠 วิธีคิด: เลือก Table Format ยังไง?</h2>

<pre><code class="language-text">
เริ่มจากคำถาม:

Q1: ใช้ Databricks เป็น primary engine?
   ├── Yes → Delta Lake (native support)
   └── No → ไปข้อ 2

Q2: ต้องการ multi-engine support (Spark + Trino + Flink)?
   ├── Yes → Apache Iceberg
   └── No → ไปข้อ 3

Q3: Use case หลักคือ heavy upsert/CDC?
   ├── Yes → Apache Hudi (MOR table type)
   └── No → Apache Iceberg (safest bet)
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. ออกแบบ Lakehouse architecture สำหรับ food delivery app ที่มี: order events (10M/day), rider GPS (100M/day), restaurant menu updates (100K/day)<br/>
2. เขียน Delta Lake pipeline ที่ทำ upsert orders แล้ว query time travel ย้อนไป 7 วัน<br/>
3. อธิบายว่า Iceberg Partition Evolution ทำงานอย่างไร ทำไมถึงไม่ต้อง rewrite data เก่า<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. Bronze: append-only raw events, Silver: deduped + joined with rider/restaurant dim, Gold: real-time dashboards (revenue, delivery time), GPS data ใช้ Hudi MOR เพราะ update เยอะ<br/>
2. ใช้ DeltaTable.merge() กับ whenMatchedUpdate + whenNotMatchedInsert<br/>
3. Iceberg เก็บ partition spec เป็น metadata — data files เก่ายังอยู่ partition เดิม แต่ query planner รู้ว่าต้อง map ยังไง
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "Lakehouse ต่างจาก Data Warehouse ยังไง? ทำไมถึงดีกว่า?"<br/>
2. "Delta Lake กับ Iceberg เลือกตัวไหนสำหรับ multi-cloud strategy? เพราะอะไร?"<br/>
3. "อธิบาย ACID transactions ใน Data Lake ทำได้ยังไง?"<br/>
4. "Small file problem คืออะไร? แก้ยังไง?"<br/>
<em>Tip: ตอบด้วย trade-off analysis เสมอ ไม่มี silver bullet</em>
</div>
`
  },
  {
    number: 2,
    slug: 'data-mesh',
    emoji: '🕸️',
    title: 'Data Mesh — Domain-Driven Data',
    content: `
<h2>🎯 ทำไม Data Mesh? — เมื่อ Central Data Team กลายเป็น Bottleneck</h2>

<p>ลองนึกภาพองค์กรใหญ่ที่มี 20 product teams แต่มี Data Team แค่ 5 คน ทุกคนต้องส่ง request มาที่ Data Team เพื่อ:</p>
<ul>
<li>สร้าง pipeline ใหม่ → คิว 3 เดือน</li>
<li>เปลี่ยน schema → ต้องประชุม 5 ครั้ง</li>
<li>แก้ data quality → "ยังไม่ถึงคิว"</li>
</ul>

<p>ผลคือ Data Team กลายเป็น <strong>bottleneck</strong> ของทั้งบริษัท! Data Mesh คือ paradigm shift ที่เปลี่ยนจาก centralized เป็น <strong>decentralized</strong></p>

<pre><code class="language-text">
    ก่อน Data Mesh (Centralized):
    
    Product A ──┐
    Product B ──┼──▶ Central Data Team ──▶ Data Warehouse
    Product C ──┤         (Bottleneck!)
    Product D ──┘
    
    หลัง Data Mesh (Decentralized):
    
    ┌──────────────────────────────────────────────────────┐
    │                  Data Mesh Platform                    │
    │  (Self-serve infra, governance, catalog)              │
    └──────────────────────────────────────────────────────┘
         │              │              │              │
    ┌────▼────┐   ┌─────▼────┐  ┌─────▼────┐  ┌─────▼────┐
    │Domain A  │   │Domain B  │  │Domain C  │  │Domain D  │
    │Own data  │   │Own data  │  │Own data  │  │Own data  │
    │Own pipe  │   │Own pipe  │  │Own pipe  │  │Own pipe  │
    │Own quality│  │Own quality│ │Own quality│ │Own quality│
    └──────────┘  └──────────┘  └──────────┘  └──────────┘
</code></pre>

<h2>📐 4 Principles ของ Data Mesh</h2>

<h3>1. Domain Ownership</h3>

<p>แต่ละ domain เป็นเจ้าของ data ของตัวเอง — ไม่ใช่ Central Data Team</p>

<pre><code class="language-python">
# ตัวอย่าง: E-commerce company
# แต่ละ domain มี data product ของตัวเอง

class OrdersDomain:
    """Domain: Orders — เจ้าของ order data ทั้งหมด"""
    
    def __init__(self):
        self.data_products = {
            "orders_events": DataProduct(
                name="orders.events.v2",
                owner="orders-team",
                sla={"freshness": "5 minutes", "availability": "99.9%"},
                schema="protobuf://schemas/orders/events/v2.proto",
                output_ports=[
                    KafkaPort(topic="orders.events.v2"),
                    IcebergPort(table="lakehouse.orders.events"),
                    APIPort(endpoint="/api/v2/orders/events")
                ]
            ),
            "orders_summary": DataProduct(
                name="orders.daily_summary.v1",
                owner="orders-team",
                sla={"freshness": "1 hour", "availability": "99.5%"},
                schema="avro://schemas/orders/daily_summary/v1.avsc",
                output_ports=[
                    IcebergPort(table="lakehouse.orders.daily_summary")
                ]
            )
        }
    
    def publish_data_product(self, product_name):
        product = self.data_products[product_name]
        product.validate_schema()
        product.check_data_quality()
        product.register_in_catalog()
        product.publish()

class PaymentsDomain:
    """Domain: Payments — เจ้าของ payment data"""
    
    def __init__(self):
        self.data_products = {
            "payment_transactions": DataProduct(
                name="payments.transactions.v1",
                owner="payments-team",
                sla={"freshness": "1 minute", "availability": "99.99%"},
                # Payments domain สามารถ consume orders data
                # แต่ Orders domain เป็นเจ้าของ ไม่ใช่ Payments
                input_ports=[
                    KafkaPort(topic="orders.events.v2")  
                ]
            )
        }
</code></pre>

<h3>2. Data as a Product</h3>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> คิดถึง Data Product เหมือน API — มี versioning, documentation, SLA, deprecation policy ถ้า data product ของคุณไม่มี README คนจะไม่ใช้!
</div>

<pre><code class="language-yaml">
# data-product.yaml — metadata ของ Data Product
name: orders.daily_summary.v1
domain: orders
owner: orders-team
description: |
  สรุปยอดสั่งซื้อรายวัน รวม revenue, จำนวน orders,
  และ average order value แยกตาม region
  
tier: tier-1  # critical business data

schema:
  format: avro
  registry: "https://schema-registry.internal/orders/daily_summary/v1"
  
sla:
  freshness: "data available by 02:00 UTC daily"
  availability: 99.9%
  latency_p99: "30 seconds"
  
quality:
  completeness: ">= 99%"
  uniqueness: "order_id is unique"
  validity: "amount > 0, region IN ('BKK','CNX','HKT')"
  
output_ports:
  - type: iceberg_table
    location: "lakehouse.gold.orders_daily_summary"
  - type: api
    endpoint: "https://data-api.internal/orders/daily-summary"
  - type: dashboard
    url: "https://looker.internal/dashboards/orders-daily"

lineage:
  upstream:
    - "orders.events.v2"
    - "customers.profiles.v1"
  downstream:
    - "finance.revenue_report.v1"
    - "marketing.customer_ltv.v1"

documentation: "https://wiki.internal/data-products/orders-daily-summary"
</code></pre>

<h3>3. Self-Serve Data Platform</h3>

<pre><code class="language-python">
class DataMeshPlatform:
    """Platform ที่ domain teams ใช้สร้าง data product ได้เอง"""
    
    def __init__(self):
        self.catalog = DataCatalog()
        self.quality_engine = DataQualityEngine()
        self.access_control = AccessControl()
        self.infra_provisioner = InfraProvisioner()
    
    def create_data_product(self, config_path):
        """Domain team เรียกเพื่อสร้าง data product ใหม่"""
        config = self.load_config(config_path)
        
        # 1. Provision infrastructure อัตโนมัติ
        self.infra_provisioner.provision(
            storage=IcebergTable(config.schema),
            compute=SparkJob(config.transform_logic),
            monitoring=DatadogDashboard(config.sla)
        )
        
        # 2. Register ใน data catalog
        self.catalog.register(
            name=config.name,
            domain=config.domain,
            owner=config.owner,
            schema=config.schema,
            documentation=config.documentation
        )
        
        # 3. ตั้ง data quality checks อัตโนมัติ
        self.quality_engine.add_checks(
            table=config.output_table,
            checks=config.quality_rules
        )
        
        # 4. ตั้ง access control
        self.access_control.grant(
            resource=config.output_table,
            policies=config.access_policies
        )
        
        print(f"✅ Data product '{config.name}' created!")
        print(f"   Catalog: {self.catalog.url}/{config.name}")
        print(f"   Dashboard: {config.monitoring_url}")
</code></pre>

<h3>4. Federated Computational Governance</h3>

<pre><code class="language-python">
class FederatedGovernance:
    """Governance ที่ enforce โดย platform ไม่ใช่โดยคน"""
    
    def __init__(self):
        self.global_policies = [
            PII_Policy(),          # PII ต้อง encrypt เสมอ
            NamingConvention(),    # ชื่อ table ต้องตาม pattern
            SLA_Policy(),          # ต้องมี SLA ก่อน publish
            QualityGate(),         # ต้องผ่าน quality checks
        ]
    
    def validate_before_publish(self, data_product):
        """ทุก data product ต้องผ่าน global policies"""
        violations = []
        for policy in self.global_policies:
            result = policy.validate(data_product)
            if not result.passed:
                violations.append(result)
        
        if violations:
            raise GovernanceViolation(
                f"Cannot publish: {violations}"
            )
        
        # Global naming convention
        # {domain}.{entity}.{version}
        # เช่น orders.daily_summary.v1
        assert re.match(
            r'^[a-z]+\\.[a-z_]+\\.v\\d+$', 
            data_product.name
        ), f"Name '{data_product.name}' ไม่ตาม convention!"
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> เริ่ม Data Mesh ทีละ domain อย่าทำทีเดียวทั้งบริษัท! เลือก domain ที่ mature ที่สุดเป็น pilot (เช่น Orders หรือ Payments) แล้วค่อยขยาย
</div>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>ทำ Data Mesh โดยไม่มี platform:</strong> ปล่อยให้ domain teams สร้าง infra เอง → chaos<br/>
2. <strong>ไม่มี governance เลย:</strong> data naming convention ไม่มี, PII หลุดไปทั่ว<br/>
3. <strong>บริษัทเล็กเกินไป:</strong> Data Mesh เหมาะกับบริษัทที่มี > 5 domain teams ถ้าเล็กกว่านี้ centralized ง่ายกว่า<br/>
4. <strong>คิดว่า Data Mesh = ไม่ต้องมี Data Team:</strong> ยังต้องมี Platform Team ที่สร้าง self-serve tools!
</div>

<h2>🧠 วิธีคิด: Data Mesh เหมาะกับเราไหม?</h2>

<pre><code class="language-text">
คำถาม Decision Tree:

Q1: องค์กรมี domain teams > 5 ทีม?
   ├── No → ยังไม่ต้อง Data Mesh, ใช้ centralized
   └── Yes → ไปข้อ 2

Q2: Central Data Team เป็น bottleneck จริงไหม?
   ├── No → อาจแค่ต้อง scale team, ไม่ต้อง mesh
   └── Yes → ไปข้อ 3

Q3: Domain teams มี engineering maturity พอไหม?
   ├── No → สร้าง platform ก่อน, train teams, ค่อย mesh
   └── Yes → เริ่ม Data Mesh ได้ (pilot 1 domain ก่อน)
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> ก่อนจะทำ Data Mesh เต็มรูปแบบ ให้เริ่มจาก "Data Product thinking" ก่อน — ให้ทุก dataset มี owner, SLA, documentation แค่นี้ก็ได้ประโยชน์มหาศาลแล้ว ไม่ต้อง reorganize ทั้งบริษัท
</div>

<h2>📊 Case Study: จาก Centralized สู่ Data Mesh</h2>

<pre><code class="language-text">
บริษัท FoodExpress (สมมติ) — Food delivery platform

ก่อน Data Mesh:
├── 1 Data Team (8 engineers) รับ request จาก 15 product teams
├── Backlog: 47 pipeline requests, avg wait time 2.5 months
├── Data quality issues: 12 incidents/month
├── ไม่มี documentation — ต้องถาม Data Team ทุกเรื่อง

หลัง Data Mesh (12 เดือน):
├── Platform Team (4 engineers) สร้าง self-serve tools
├── 6 domain teams สร้าง data products เอง
├── Backlog: domain teams จัดการเอง, avg wait time 2 weeks
├── Data quality: 2 incidents/month (automated checks)
├── Data catalog มี 89 data products พร้อม documentation

Key Metrics:
├── Time-to-data: 2.5 months → 2 weeks (84% faster)
├── Data quality incidents: 12/month → 2/month
├── Data team satisfaction: 3.2 → 4.5 / 5.0
└── Total cost: เพิ่มขึ้น 20% (infra) แต่ ROI สูงกว่ามาก
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. ออกแบบ Data Mesh architecture สำหรับ ride-hailing platform ที่มี 4 domains: Riders, Drivers, Trips, Payments — กำหนด data products สำหรับแต่ละ domain<br/>
2. เขียน data-product.yaml สำหรับ "trips.completed.v1" ให้ครบทุก field<br/>
3. ออกแบบ federated governance policies 5 ข้อ ที่ platform ต้อง enforce<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. Riders: rider_profiles, ride_history | Drivers: driver_profiles, driver_locations | Trips: trip_events, trip_summary | Payments: transactions, settlements<br/>
2. ต้องมี: name, domain, owner, SLA, schema, quality rules, output ports, lineage<br/>
3. PII encryption, naming convention, SLA definition required, schema registry, data quality gates
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "Data Mesh คืออะไร? ต่างจาก Data Warehouse ยังไง?"<br/>
2. "ถ้าบริษัทมี data team 3 คน ควรทำ Data Mesh ไหม? เพราะอะไร?"<br/>
3. "Data as a Product หมายความว่ายังไง? ทำให้เห็นภาพหน่อย"<br/>
4. "Federated governance ต่างจาก centralized governance ยังไง?"<br/>
<em>Tip: คำตอบที่ดีจะพูดถึง 4 principles ได้ครบ และบอก trade-offs ได้</em>
</div>
`
  },
  {
    number: 3,
    slug: 'ml-engineering',
    emoji: '🤖',
    title: 'ML Engineering & MLOps',
    content: `
<h2>🎯 ทำไม Data Engineer ต้องรู้ ML Engineering?</h2>

<p>ในโลกจริง Data Scientist สร้าง model ใน Jupyter Notebook ได้ แต่พอจะ deploy production จะพบว่า:</p>
<ul>
<li>"model.pkl มันอยู่ใน laptop ผม..." → ต้องการ Model Registry</li>
<li>"feature ตอน train กับ serve ไม่เหมือนกัน!" → ต้องการ Feature Store</li>
<li>"model accuracy drop ไม่รู้เพราะอะไร" → ต้องการ Monitoring</li>
</ul>
<p>ทั้งหมดนี้คือหน้าที่ของ <strong>ML Engineer / Data Engineer</strong> ที่ต้องสร้าง infrastructure ให้ ML ทำงานได้จริงใน production</p>

<pre><code class="language-text">
    Data Scientist World          ML Engineering World
    ┌─────────────────┐           ┌──────────────────────────┐
    │ Jupyter Notebook │           │  Production ML System     │
    │ ├── EDA          │           │  ├── Feature Store        │
    │ ├── Feature Eng  │──────────▶│  ├── Training Pipeline    │
    │ ├── Model Train  │  "Deploy  │  ├── Model Registry       │
    │ ├── Evaluation   │   please!"│  ├── Model Serving        │
    │ └── model.pkl    │           │  ├── A/B Testing          │
    └─────────────────┘           │  └── Monitoring            │
                                  └──────────────────────────┘
</code></pre>

<h2>🏪 Feature Store — Single Source of Truth สำหรับ Features</h2>

<p>Feature Store คือ centralized repository ที่เก็บ features เพื่อให้ training และ serving ใช้ features เดียวกัน — ไม่ต้องเขียน feature engineering ซ้ำ!</p>

<pre><code class="language-python">
# Feast Feature Store — Production Setup
# feature_repo/feature_definitions.py

from feast import Entity, Feature, FeatureView, ValueType
from feast.infra.offline_stores.bigquery_source import BigQuerySource
from datetime import timedelta

# Entity = สิ่งที่เราจะทำ prediction
customer = Entity(
    name="customer_id",
    value_type=ValueType.INT64,
    description="Unique customer identifier"
)

# Offline Source (สำหรับ training)
customer_features_source = BigQuerySource(
    table="project.feature_store.customer_features",
    timestamp_field="event_timestamp",
    created_timestamp_column="created_at"
)

# Feature View = กลุ่มของ features ที่ relate กัน
customer_features_view = FeatureView(
    name="customer_features",
    entities=["customer_id"],
    ttl=timedelta(days=90),
    features=[
        Feature(name="total_orders_30d", dtype=ValueType.INT64),
        Feature(name="avg_order_value_30d", dtype=ValueType.DOUBLE),
        Feature(name="days_since_last_order", dtype=ValueType.INT64),
        Feature(name="favorite_category", dtype=ValueType.STRING),
        Feature(name="lifetime_value", dtype=ValueType.DOUBLE),
        Feature(name="is_premium_member", dtype=ValueType.BOOL),
    ],
    online=True,  # sync to online store (Redis) for serving
    source=customer_features_source,
    tags={"team": "customer-domain", "tier": "1"}
)
</code></pre>

<pre><code class="language-python">
# Feature Pipeline — สร้าง features จาก raw data
from feast import FeatureStore

store = FeatureStore(repo_path="feature_repo/")

# ===== TRAINING: ดึง features สำหรับ train model =====
# Point-in-time correct join — ป้องกัน data leakage!
training_df = store.get_historical_features(
    entity_df=training_entities,  # customer_id + event_timestamp
    features=[
        "customer_features:total_orders_30d",
        "customer_features:avg_order_value_30d",
        "customer_features:days_since_last_order",
        "customer_features:lifetime_value",
    ]
).to_df()

# ===== SERVING: ดึง features สำหรับ real-time prediction =====
# จาก Redis — latency < 10ms
online_features = store.get_online_features(
    features=[
        "customer_features:total_orders_30d",
        "customer_features:avg_order_value_30d",
        "customer_features:days_since_last_order",
    ],
    entity_rows=[{"customer_id": 12345}]
).to_dict()

# ผลลัพธ์:
# {
#     "customer_id": [12345],
#     "total_orders_30d": [15],
#     "avg_order_value_30d": [450.50],
#     "days_since_last_order": [3]
# }
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> Feature Store สำคัญที่สุดคือ <strong>point-in-time correct join</strong> — ป้องกัน data leakage ตอน training ถ้าไม่ทำ model accuracy ตอน train จะสูง แต่ production จะต่ำ เพราะ "แอบเห็นอนาคต" ตอน train
</div>

<h2>📦 Model Registry & Versioning</h2>

<pre><code class="language-python">
import mlflow
from mlflow.tracking import MlflowClient

# MLflow — Model Registry
mlflow.set_tracking_uri("https://mlflow.internal.company.com")
mlflow.set_experiment("churn-prediction")

with mlflow.start_run(run_name="xgboost-v3-tuned"):
    # Log parameters
    mlflow.log_params({
        "model_type": "xgboost",
        "n_estimators": 500,
        "max_depth": 6,
        "learning_rate": 0.05,
        "feature_store_version": "v2.3",
        "training_data_date": "2024-01-15"
    })
    
    # Train model
    model = train_xgboost(X_train, y_train, params)
    
    # Log metrics
    predictions = model.predict(X_test)
    mlflow.log_metrics({
        "auc_roc": roc_auc_score(y_test, predictions),
        "precision": precision_score(y_test, predictions > 0.5),
        "recall": recall_score(y_test, predictions > 0.5),
        "f1": f1_score(y_test, predictions > 0.5)
    })
    
    # Log model artifact
    mlflow.xgboost.log_model(
        model, 
        artifact_path="model",
        registered_model_name="churn-prediction",
        input_example=X_test[:5],
        signature=mlflow.models.infer_signature(X_test, predictions)
    )

# Promote model ผ่าน stages
client = MlflowClient()
client.transition_model_version_stage(
    name="churn-prediction",
    version=3,
    stage="Staging"  # None → Staging → Production → Archived
)

# หลัง A/B test ผ่าน → promote to Production
client.transition_model_version_stage(
    name="churn-prediction",
    version=3,
    stage="Production"
)
</code></pre>

<h2>🚀 Model Serving — จาก Model สู่ API</h2>

<pre><code class="language-python">
# FastAPI Model Serving — Production Grade
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mlflow
import numpy as np
from feast import FeatureStore

app = FastAPI(title="Churn Prediction Service")
store = FeatureStore(repo_path="feature_repo/")

# Load model จาก MLflow Registry
model = mlflow.pyfunc.load_model("models:/churn-prediction/Production")

class PredictionRequest(BaseModel):
    customer_id: int

class PredictionResponse(BaseModel):
    customer_id: int
    churn_probability: float
    risk_level: str  # low, medium, high

@app.post("/predict", response_model=PredictionResponse)
async def predict_churn(request: PredictionRequest):
    try:
        # 1. ดึง features จาก Feature Store (Redis, < 10ms)
        features = store.get_online_features(
            features=[
                "customer_features:total_orders_30d",
                "customer_features:avg_order_value_30d",
                "customer_features:days_since_last_order",
                "customer_features:lifetime_value",
            ],
            entity_rows=[{"customer_id": request.customer_id}]
        ).to_dict()
        
        # 2. Predict
        feature_vector = np.array([[
            features["total_orders_30d"][0],
            features["avg_order_value_30d"][0],
            features["days_since_last_order"][0],
            features["lifetime_value"][0],
        ]])
        
        probability = model.predict(feature_vector)[0]
        
        # 3. Map to risk level
        risk = "high" if probability > 0.7 else \\
               "medium" if probability > 0.3 else "low"
        
        return PredictionResponse(
            customer_id=request.customer_id,
            churn_probability=round(float(probability), 4),
            risk_level=risk
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> Model serving มี 3 patterns: <strong>Online</strong> (API, < 100ms), <strong>Batch</strong> (Spark job, รันทุกวัน), <strong>Streaming</strong> (Flink/Kafka, near real-time) — เลือกตาม latency requirement ไม่ต้อง online ทุก use case!
</div>

<h2>📊 ML Monitoring — เมื่อ Model เริ่ม "เน่า"</h2>

<pre><code class="language-python">
# Model Monitoring Pipeline
from evidently import ColumnMapping
from evidently.report import Report
from evidently.metric_preset import (
    DataDriftPreset, 
    TargetDriftPreset,
    ClassificationPreset
)

class ModelMonitor:
    """Monitor model performance & data drift"""
    
    def __init__(self, reference_data, model_name):
        self.reference = reference_data
        self.model_name = model_name
        self.alert_thresholds = {
            "data_drift_score": 0.3,
            "prediction_drift": 0.2,
            "accuracy_drop": 0.05
        }
    
    def check_data_drift(self, current_data):
        """ตรวจว่า input data distribution เปลี่ยนไปไหม"""
        report = Report(metrics=[DataDriftPreset()])
        report.run(
            reference_data=self.reference,
            current_data=current_data
        )
        
        drift_score = report.as_dict()["metrics"][0]["result"]["drift_share"]
        
        if drift_score > self.alert_thresholds["data_drift_score"]:
            self.send_alert(
                severity="WARNING",
                message=f"Data drift detected! Score: {drift_score:.2f}",
                action="Consider retraining the model"
            )
        
        return drift_score
    
    def check_prediction_drift(self, recent_predictions):
        """ตรวจว่า prediction distribution เปลี่ยนไปไหม"""
        # เช่น churn prediction เฉลี่ยเปลี่ยนจาก 15% เป็น 40%
        # → อาจมีปัญหาที่ input data หรือ model
        pass
    
    def check_model_performance(self, predictions, actuals):
        """ตรวจ model accuracy เทียบกับ ground truth"""
        current_accuracy = accuracy_score(actuals, predictions > 0.5)
        baseline_accuracy = 0.85  # from training
        
        if baseline_accuracy - current_accuracy > \\
           self.alert_thresholds["accuracy_drop"]:
            self.send_alert(
                severity="CRITICAL",
                message=f"Model accuracy dropped: {current_accuracy:.2%}",
                action="Retrain model immediately!"
            )
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> Monitor 3 อย่างนี้เสมอ: (1) <strong>Data drift</strong> — input เปลี่ยน, (2) <strong>Prediction drift</strong> — output เปลี่ยน, (3) <strong>Performance</strong> — accuracy ตก ถ้ามี data drift + prediction drift = model กำลังเน่า ต้อง retrain!
</div>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>Training-serving skew:</strong> Features ตอน train คำนวณต่างจากตอน serve — ใช้ Feature Store แก้!<br/>
2. <strong>ไม่ version ข้อมูล:</strong> เปลี่ยน training data แต่ไม่บันทึกว่าใช้ data อะไร reproduce ไม่ได้<br/>
3. <strong>ไม่ monitor model:</strong> Deploy แล้วลืม — model accuracy ตกไปครึ่งปีไม่มีใครรู้<br/>
4. <strong>Over-engineer:</strong> ใช้ Kubernetes + Seldon + KServe สำหรับ model ที่ run batch ได้ — เกินจำเป็น
</div>

<h2>🧠 วิธีคิด: MLOps Maturity Model</h2>

<pre><code class="language-text">
Level 0: Manual — ทำทุกอย่างมือ, notebook-driven
├── Model ใน laptop, deploy ด้วย scp
├── ไม่มี versioning, ไม่มี monitoring
│
Level 1: Pipeline — Automated training
├── Training pipeline (Airflow/Kubeflow)
├── Model registry (MLflow)
├── Feature pipeline แยกจาก training
│
Level 2: CI/CD — Automated deployment
├── Auto-retrain เมื่อ data เปลี่ยน
├── A/B testing framework
├── Model performance monitoring
│
Level 3: Full MLOps — Automated everything
├── Feature Store (Feast/Tecton)
├── Auto-retrain + auto-deploy + auto-rollback
├── Data/model versioning (DVC/MLflow)
├── Drift detection + alerting
└── Governance & lineage
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. ออกแบบ Feature Store สำหรับ recommendation system ของ e-commerce — กำหนด entities, features, online/offline sources<br/>
2. เขียน MLflow pipeline ที่ train model, log metrics, register model, แล้ว promote to production<br/>
3. ออกแบบ monitoring dashboard สำหรับ model ที่ predict fraud — จะ monitor อะไรบ้าง? threshold เท่าไหร่?<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. Entities: user, product, user-product-pair | Features: click_count_7d, purchase_count_30d, category_affinity | Online: Redis, Offline: BigQuery<br/>
2. ใช้ mlflow.start_run(), log_params(), log_metrics(), log_model(), transition_model_version_stage()<br/>
3. Monitor: precision/recall (fraud), false positive rate, data drift (transaction amount distribution), latency
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "Feature Store คืออะไร? ทำไมถึงสำคัญ?"<br/>
2. "Training-serving skew คืออะไร? แก้ยังไง?"<br/>
3. "ถ้า model accuracy ตกลงใน production คุณจะ debug ยังไง?"<br/>
4. "Batch serving vs Online serving — เมื่อไหร่ใช้อะไร?"<br/>
<em>Tip: แสดงให้เห็นว่าคุณเข้าใจ production challenges ไม่ใช่แค่ Jupyter Notebook</em>
</div>
`
  },
  {
    number: 4,
    slug: 'data-contracts',
    emoji: '📝',
    title: 'Data Contracts & Schema Registry',
    content: `
<h2>🎯 ทำไมต้อง Data Contracts? — เมื่อ Schema Change ทำ Pipeline ล่ม</h2>

<p>สถานการณ์จริงที่เกิดบ่อย: Backend team เปลี่ยน column จาก <code>user_name</code> เป็น <code>username</code> ไม่บอกใคร... วันรุ่งขึ้น dashboard ทั้งบริษัทว่างเปล่า! Data pipeline ล่มเงียบๆ เพราะ schema เปลี่ยนโดยไม่มีใครรู้</p>

<p><strong>Data Contract</strong> คือ "สัญญา" ระหว่าง producer และ consumer ที่กำหนดว่า data จะหน้าตาเป็นยังไง, จะส่งเมื่อไหร่, จะมี quality ระดับไหน</p>

<pre><code class="language-text">
    ก่อน Data Contracts:               หลัง Data Contracts:
    
    Producer ────?────▶ Consumer        Producer ──📝──▶ Consumer
    "เปลี่ยน schema      "Pipeline       "ต้องเปลี่ยน     "รู้ล่วงหน้า
     ไม่บอกใคร"          ล่มเงียบ!"       schema ต้อง       migration
                                          แจ้งก่อน"         plan พร้อม"
    
    ┌─────────────────────────────────────────┐
    │          Data Contract                   │
    │  ├── Schema (fields, types, constraints) │
    │  ├── SLA (freshness, availability)       │
    │  ├── Quality (completeness, validity)    │
    │  ├── Semantics (business meaning)        │
    │  └── Evolution rules (breaking/non)      │
    └─────────────────────────────────────────┘
</code></pre>

<h2>📐 Anatomy of a Data Contract</h2>

<pre><code class="language-yaml">
# data-contracts/orders-events.yaml
apiVersion: v1
kind: DataContract
metadata:
  name: orders.events
  version: "2.1.0"  # Semantic versioning!
  domain: orders
  owner: orders-team
  contact: orders-team@company.com

schema:
  type: protobuf
  definition: |
    syntax = "proto3";
    package orders.events;
    
    message OrderEvent {
      string event_id = 1;          // UUID, required
      int64 order_id = 2;           // unique per order
      int64 customer_id = 3;
      OrderStatus status = 4;
      
      // Monetary fields — always use string for precision
      string amount = 5;            // "199.50"
      string currency = 6;          // "THB"
      
      google.protobuf.Timestamp created_at = 7;
      google.protobuf.Timestamp updated_at = 8;
      
      // v2.1.0: added shipping_method
      string shipping_method = 9;   // "standard", "express"
    }
    
    enum OrderStatus {
      ORDER_STATUS_UNSPECIFIED = 0;
      ORDER_STATUS_CREATED = 1;
      ORDER_STATUS_PAID = 2;
      ORDER_STATUS_SHIPPED = 3;
      ORDER_STATUS_DELIVERED = 4;
      ORDER_STATUS_CANCELLED = 5;
    }

quality:
  rules:
    - field: event_id
      check: not_null
    - field: event_id
      check: unique
    - field: amount
      check: "CAST(amount AS DECIMAL) > 0"
    - field: currency
      check: "currency IN ('THB', 'USD', 'SGD')"
    - field: status
      check: not_null
  
  sla:
    freshness: "events available within 5 minutes"
    completeness: ">= 99.5%"
    availability: "99.9%"

delivery:
  channel: kafka
  topic: orders.events.v2
  format: protobuf
  partitioning:
    key: customer_id
    strategy: hash

evolution:
  compatibility: BACKWARD
  # BACKWARD: consumer เก่ายังอ่าน schema ใหม่ได้
  # FORWARD: consumer ใหม่อ่าน schema เก่าได้
  # FULL: ทั้ง backward + forward
  breaking_change_policy: |
    1. แจ้ง consumer ล่วงหน้า 30 วัน
    2. Support schema เก่าอย่างน้อย 90 วัน
    3. ต้องได้ approval จาก data governance team
</code></pre>

<h2>🔧 Schema Registry — Enforcing Contracts</h2>

<h3>Confluent Schema Registry + Protobuf</h3>

<pre><code class="language-python">
# Producer — ส่งข้อมูลที่ validate schema แล้ว
from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.protobuf import ProtobufSerializer

# เชื่อมต่อ Schema Registry
schema_registry_conf = {
    'url': 'https://schema-registry.internal:8081',
    'basic.auth.user.info': 'api-key:api-secret'
}
schema_registry_client = SchemaRegistryClient(schema_registry_conf)

# Protobuf Serializer — จะ validate schema อัตโนมัติ
protobuf_serializer = ProtobufSerializer(
    OrderEvent,  # Generated from .proto file
    schema_registry_client,
    conf={'auto.register.schemas': False}  # Production: ห้าม auto-register!
)

producer_conf = {
    'bootstrap.servers': 'kafka.internal:9092',
    'key.serializer': StringSerializer('utf_8'),
    'value.serializer': protobuf_serializer
}

producer = SerializingProducer(producer_conf)

def publish_order_event(order):
    """Publish event — schema validated by registry"""
    event = OrderEvent(
        event_id=str(uuid.uuid4()),
        order_id=order.id,
        customer_id=order.customer_id,
        status=OrderStatus.ORDER_STATUS_CREATED,
        amount=str(order.amount),
        currency="THB",
        created_at=Timestamp(seconds=int(time.time()))
    )
    
    producer.produce(
        topic='orders.events.v2',
        key=str(order.customer_id),
        value=event,
        on_delivery=delivery_report
    )
    producer.flush()
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> ใน Production ต้องตั้ง <code>auto.register.schemas: false</code> เสมอ! ให้ register schema ผ่าน CI/CD pipeline เท่านั้น — ป้องกันไม่ให้ developer เผลอ push schema ที่ breaking
</div>

<h3>Avro Schema สำหรับ Batch Data</h3>

<pre><code class="language-json">
{
  "type": "record",
  "name": "OrderDailySummary",
  "namespace": "com.company.orders",
  "doc": "Daily aggregated order metrics per region",
  "fields": [
    {
      "name": "report_date",
      "type": "string",
      "doc": "Date in YYYY-MM-DD format"
    },
    {
      "name": "region",
      "type": {
        "type": "enum",
        "name": "Region",
        "symbols": ["BKK", "CNX", "HKT", "UDN"]
      }
    },
    {
      "name": "total_orders",
      "type": "long",
      "doc": "Total number of orders"
    },
    {
      "name": "total_revenue",
      "type": {
        "type": "bytes",
        "logicalType": "decimal",
        "precision": 15,
        "scale": 2
      }
    },
    {
      "name": "avg_order_value",
      "type": ["null", "double"],
      "default": null,
      "doc": "Average order value, null if no orders"
    },
    {
      "name": "new_field_v2",
      "type": ["null", "string"],
      "default": null,
      "doc": "Added in v2 — backward compatible because nullable with default"
    }
  ]
}
</code></pre>

<h2>🔄 Schema Evolution — เปลี่ยน Schema อย่างปลอดภัย</h2>

<pre><code class="language-text">
Schema Evolution Compatibility Modes:

BACKWARD (recommended):
├── consumer ใหม่อ่าน data เก่าได้
├── ✅ เพิ่ม field ที่มี default value
├── ✅ ลบ field ที่ไม่มี default value
├── ❌ ลบ field ที่มี default value
├── ❌ เปลี่ยน type ของ field

FORWARD:
├── consumer เก่าอ่าน data ใหม่ได้
├── ✅ ลบ field ที่มี default value
├── ✅ เพิ่ม field ที่ไม่มี default value
├── ❌ เพิ่ม field ที่มี default value

FULL:
├── ทั้ง backward + forward
├── เข้มงวดที่สุด — เหมาะกับ critical data
├── ✅ เพิ่ม field ที่มี default value
├── ✅ ลบ field ที่มี default value
├── ❌ เปลี่ยน type, rename field
</code></pre>

<pre><code class="language-python">
# CI/CD Pipeline สำหรับ Schema Validation
import requests

class SchemaEvolutionValidator:
    """Validate schema changes ใน CI/CD pipeline"""
    
    def __init__(self, registry_url):
        self.registry_url = registry_url
    
    def validate_compatibility(self, subject, new_schema):
        """ตรวจว่า schema ใหม่ compatible กับ schema เก่า"""
        response = requests.post(
            f"{self.registry_url}/compatibility/subjects/"
            f"{subject}/versions/latest",
            json={"schema": new_schema},
            headers={"Content-Type": "application/vnd.schemaregistry.v1+json"}
        )
        
        result = response.json()
        if not result.get("is_compatible", False):
            raise SchemaBreakingChange(
                f"Schema change is NOT compatible!\\n"
                f"Subject: {subject}\\n"
                f"Errors: {result.get('messages', [])}"
            )
        
        print(f"✅ Schema compatible for {subject}")
        return True
    
    def register_schema(self, subject, schema, dry_run=False):
        """Register schema ใหม่ — เฉพาะเมื่อ compatible"""
        self.validate_compatibility(subject, schema)
        
        if dry_run:
            print("Dry run — schema NOT registered")
            return
        
        response = requests.post(
            f"{self.registry_url}/subjects/{subject}/versions",
            json={"schema": schema}
        )
        
        schema_id = response.json()["id"]
        print(f"✅ Registered schema ID: {schema_id}")
        return schema_id
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ใช้ <strong>Semantic Versioning</strong> กับ data contracts: MAJOR (breaking change) → ต้องเปลี่ยน topic/table ใหม่, MINOR (backward compatible) → เพิ่ม field, PATCH (fix typo ใน doc)
</div>

<h2>⚖️ Protobuf vs Avro vs JSON Schema</h2>

<pre><code class="language-text">
┌──────────────────┬──────────────┬──────────────┬──────────────┐
│ Feature          │ Protobuf     │ Avro         │ JSON Schema  │
├──────────────────┼──────────────┼──────────────┼──────────────┤
│ Serialization    │ Binary       │ Binary       │ Text (JSON)  │
│ Size             │ เล็กที่สุด     │ เล็ก          │ ใหญ่          │
│ Speed            │ เร็วที่สุด     │ เร็ว          │ ช้า           │
│ Schema Evolution │ ดี           │ ดีมาก        │ ปานกลาง      │
│ Human Readable   │ ❌ (binary)  │ ❌ (binary)  │ ✅           │
│ Ecosystem        │ gRPC, Google │ Kafka, Hadoop│ REST APIs     │
│ Best For         │ Microservices│ Kafka/Batch  │ REST/Debug    │
│ Language Support │ ⭐⭐⭐⭐⭐ │ ⭐⭐⭐⭐    │ ⭐⭐⭐⭐⭐  │
└──────────────────┴──────────────┴──────────────┴──────────────┘

แนะนำ:
├── Kafka events → Protobuf หรือ Avro
├── REST APIs → JSON Schema
├── Internal microservices → Protobuf (gRPC)
└── Batch data files → Avro (Hadoop ecosystem friendly)
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> เก็บ .proto / .avsc files ใน Git repo กลาง (mono-repo) แล้วสร้าง CI/CD ที่: (1) validate compatibility, (2) generate code สำหรับแต่ละ language, (3) publish ไปยัง schema registry อัตโนมัติ
</div>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>ใช้ JSON ทุก event:</strong> ไม่มี schema enforcement, ข้อมูลเละ — ใช้ Protobuf/Avro สำหรับ production<br/>
2. <strong>เปลี่ยน field type:</strong> เช่น int → string — นี่คือ breaking change เสมอ!<br/>
3. <strong>ไม่มี schema registry:</strong> producer ส่ง schema อะไรก็ได้ consumer พังแน่<br/>
4. <strong>Rename field:</strong> ใน Protobuf/Avro ให้ deprecate field เก่า + เพิ่ม field ใหม่ อย่า rename!
</div>

<h2>🧠 วิธีคิด: Implementing Data Contracts</h2>

<pre><code class="language-text">
Step 1: เริ่มจาก critical data paths
├── ระบุ top 5 data flows ที่ break บ่อยที่สุด
├── เขียน contract สำหรับ 5 data flows นี้ก่อน

Step 2: ตั้ง Schema Registry
├── Deploy Confluent Schema Registry (หรือ AWS Glue)
├── ตั้ง compatibility mode = BACKWARD (default)
├── ห้าม auto-register ใน production

Step 3: CI/CD Integration
├── Schema validation ใน PR review
├── Automated compatibility check
├── Auto-generate code จาก schema definition

Step 4: ขยายไปทั้งองค์กร
├── Template สำหรับ data contract
├── Training ให้ทุก team
├── Governance team review breaking changes
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. เขียน Protobuf schema สำหรับ payment transaction event ให้ support backward evolution<br/>
2. ออกแบบ CI/CD pipeline สำหรับ schema evolution — มี step อะไรบ้าง?<br/>
3. ยกตัวอย่าง 3 schema changes ที่เป็น breaking และ 3 ที่ไม่เป็น breaking<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. ทุก field ต้องมี field number, monetary ใช้ string, enum ต้องมี UNSPECIFIED=0<br/>
2. PR → lint schema → check compatibility → deploy to staging registry → test consumers → deploy to production<br/>
3. Breaking: remove required field, change type, rename. Non-breaking: add optional field, add enum value, add new message type
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "Data Contract คืออะไร? ต่างจาก schema validation ยังไง?"<br/>
2. "Protobuf vs Avro — เมื่อไหร่ใช้อะไร?"<br/>
3. "ถ้า producer ต้องการเปลี่ยน field type จะทำยังไงให้ไม่ break consumer?"<br/>
4. "Schema Registry มีหน้าที่อะไรใน data pipeline?"<br/>
<em>Tip: ยกตัวอย่าง production incident ที่เกิดจากไม่มี data contracts</em>
</div>
`
  },
  {
    number: 5,
    slug: 'cost-optimization',
    emoji: '💰',
    title: 'Cost Optimization — Cloud Billing',
    content: `
<h2>🎯 ทำไม Cost Optimization สำคัญ? — เมื่อ Cloud Bill ทำให้ CEO ตกใจ</h2>

<p>เรื่องจริง: startup แห่งหนึ่งใช้ BigQuery scan table 50TB ทุก 15 นาทีเพราะ dashboard auto-refresh — สิ้นเดือน bill มา $47,000! ทั้งที่จริงๆ ต้องใช้แค่ $3,000 ถ้าออกแบบถูก</p>

<p>Senior Data Engineer ต้อง <strong>เข้าใจ cost model</strong> ของทุก service ที่ใช้ — ไม่ใช่แค่ทำให้ "ทำงานได้" แต่ต้องทำให้ "ทำงานได้ในงบ"</p>

<h2>💸 Cloud Cost Model — เข้าใจก่อนจะ optimize</h2>

<pre><code class="language-text">
Cloud Cost = Compute + Storage + Network + Operations

┌─────────────────────────────────────────────────────────┐
│                    Cost Breakdown                         │
├──────────────┬──────────────────────────────────────────┤
│  Compute     │ VM instances, Spark clusters, Serverless  │
│  (40-60%)    │ functions — ยิ่งใหญ่/นาน ยิ่งแพง           │
├──────────────┼──────────────────────────────────────────┤
│  Storage     │ S3/GCS objects, database storage          │
│  (10-20%)    │ — ถูก แต่สะสมไม่หยุด!                     │
├──────────────┼──────────────────────────────────────────┤
│  Network     │ Cross-region, internet egress             │
│  (10-20%)    │ — ตัวร้ายที่ถูกมองข้าม                     │
├──────────────┼──────────────────────────────────────────┤
│  Operations  │ API calls, monitoring, logging            │
│  (5-15%)     │ — S3 LIST calls แพงกว่าที่คิด!            │
└──────────────┴──────────────────────────────────────────┘
</code></pre>

<h3>BigQuery Cost Optimization</h3>

<pre><code class="language-sql">
-- ❌ BAD: Scan ทั้ง table ทุกครั้ง = $$$
SELECT *
FROM \`project.dataset.orders\`
WHERE DATE(created_at) = '2024-01-15';
-- ☝️ BigQuery scan ทุก row แล้วค่อย filter!
-- ถ้า table 10TB = scan 10TB = ~$50/query

-- ✅ GOOD: ใช้ partitioned table + partition filter
-- สร้าง table ที่ partition by date
CREATE TABLE \`project.dataset.orders\`
PARTITION BY DATE(created_at)
CLUSTER BY customer_id, status
AS SELECT * FROM \`project.dataset.orders_raw\`;

-- Query ที่ระบุ partition → scan แค่ 1 partition
SELECT order_id, customer_id, amount
FROM \`project.dataset.orders\`
WHERE DATE(created_at) = '2024-01-15'
  AND status = 'COMPLETED';
-- scan แค่ ~100MB แทน 10TB = $0.0005/query!

-- ✅ BETTER: ใช้ Materialized View สำหรับ query ที่ทำซ้ำบ่อย
CREATE MATERIALIZED VIEW \`project.dataset.daily_revenue\`
AS
SELECT
    DATE(created_at) AS order_date,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    AVG(amount) AS avg_order_value
FROM \`project.dataset.orders\`
WHERE status = 'COMPLETED'
GROUP BY DATE(created_at);

-- Query materialized view = scan น้อยมาก + cached
SELECT * FROM \`project.dataset.daily_revenue\`
WHERE order_date = '2024-01-15';
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> BigQuery pricing: On-demand = $6.25/TB scanned, Flat-rate = $2,000/month per 100 slots ถ้าทีมใช้ > 500GB/day ให้เปลี่ยนเป็น flat-rate จะถูกกว่า — คำนวณ break-even point!
</div>

<pre><code class="language-python">
# BigQuery Cost Calculator
def calculate_bq_cost_comparison(daily_scan_tb, working_days=22):
    """เปรียบเทียบ On-demand vs Flat-rate"""
    
    # On-demand pricing
    on_demand_per_tb = 6.25  # USD
    monthly_on_demand = daily_scan_tb * working_days * on_demand_per_tb
    
    # Flat-rate pricing (editions)
    slot_options = {
        "100_slots": {"cost": 2000, "capacity_tb_day": 2},
        "200_slots": {"cost": 4000, "capacity_tb_day": 5},
        "500_slots": {"cost": 10000, "capacity_tb_day": 15},
    }
    
    print(f"Daily scan: {daily_scan_tb} TB")
    print(f"Monthly on-demand cost: \${monthly_on_demand:,.0f}")
    print()
    
    for name, option in slot_options.items():
        savings = monthly_on_demand - option["cost"]
        savings_pct = (savings / monthly_on_demand * 100) if monthly_on_demand > 0 else 0
        recommendation = "✅ SAVE" if savings > 0 else "❌ MORE EXPENSIVE"
        print(f"{name}: \${option['cost']:,}/mo | "
              f"Savings: \${savings:,.0f} ({savings_pct:.0f}%) | "
              f"{recommendation}")

# ตัวอย่าง:
calculate_bq_cost_comparison(daily_scan_tb=3)
# Daily scan: 3 TB
# Monthly on-demand cost: $412
# 100_slots: $2,000/mo | Savings: $-1,588 (-385%) | ❌ MORE EXPENSIVE
# → ยังไม่ถึง break-even, ใช้ on-demand ไปก่อน!

calculate_bq_cost_comparison(daily_scan_tb=50)
# Daily scan: 50 TB
# Monthly on-demand cost: $6,875
# 100_slots: $2,000/mo | Savings: $4,875 (71%) | ✅ SAVE
# → ได้เวลา flat-rate แล้ว!
</code></pre>

<h3>Spark/Databricks Cost Optimization</h3>

<pre><code class="language-python">
# Spark Cost Optimization Techniques

# 1. RIGHT-SIZE CLUSTERS — อย่าใช้ cluster ใหญ่เกินไป
cluster_config = {
    # ❌ BAD: Fixed large cluster
    "bad": {
        "num_workers": 50,
        "instance_type": "r5.4xlarge",  # 128GB RAM each
        "autoscaling": False,
        "cost_per_hour": 50 * 2.44,  # = $122/hr !!!
    },
    # ✅ GOOD: Auto-scaling cluster
    "good": {
        "min_workers": 2,
        "max_workers": 20,
        "instance_type": "m5.2xlarge",  # 32GB RAM each
        "autoscaling": True,
        "spot_instances": True,  # 60-90% cheaper!
        "cost_per_hour": "~$5-20/hr (varies)"
    }
}

# 2. PARTITION PRUNING — อ่านแค่ data ที่ต้องการ
# ❌ BAD: อ่านทุก partition
bad_df = spark.read.parquet("s3://data/events/")
bad_result = bad_df.filter(F.col("date") == "2024-01-15")

# ✅ GOOD: อ่านแค่ partition ที่ต้องการ
good_df = spark.read.parquet("s3://data/events/date=2024-01-15/")

# 3. CACHING — cache ข้อมูลที่ใช้ซ้ำ
frequently_used_df = spark.read.parquet("s3://data/dim_products/")
frequently_used_df.cache()  # เก็บใน memory
frequently_used_df.count()  # trigger cache

# ใช้ซ้ำได้หลายครั้งโดยไม่ต้องอ่านจาก S3 ใหม่
result1 = frequently_used_df.filter(...)
result2 = frequently_used_df.groupBy(...)

# 4. BROADCAST JOIN — สำหรับ small table
from pyspark.sql.functions import broadcast

# ❌ BAD: shuffle join กับ small table
result = big_df.join(small_df, "key")  # shuffle ทั้ง 2 tables

# ✅ GOOD: broadcast small table ไปทุก node
result = big_df.join(broadcast(small_df), "key")  # ไม่มี shuffle!
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ใช้ <strong>Spot Instances / Preemptible VMs</strong> สำหรับ Spark workers ได้ถูกกว่า 60-90% แต่ต้องออกแบบ pipeline ให้ทน instance ถูก reclaim — ใช้ checkpointing + retry logic
</div>

<h2>📊 Cost Monitoring Dashboard</h2>

<pre><code class="language-python">
# Cost Monitoring & Alerting System
class CloudCostMonitor:
    def __init__(self, budget_monthly_usd):
        self.budget = budget_monthly_usd
        self.alert_thresholds = [0.5, 0.75, 0.9, 1.0]
    
    def daily_cost_check(self):
        """ตรวจ cost ทุกวัน เทียบกับ budget"""
        current_spend = self.get_current_month_spend()
        days_elapsed = datetime.now().day
        days_in_month = 30
        
        # Projected monthly spend
        daily_rate = current_spend / days_elapsed
        projected = daily_rate * days_in_month
        budget_usage = current_spend / self.budget
        
        # Anomaly detection — ค่าใช้จ่ายวันนี้ผิดปกติไหม?
        today_cost = self.get_today_spend()
        avg_daily = self.get_avg_daily_cost(days=30)
        
        if today_cost > avg_daily * 2:
            self.alert(
                severity="WARNING",
                message=f"Today's cost \${today_cost:.0f} is "
                        f"{today_cost/avg_daily:.1f}x higher than average "
                        f"(\${avg_daily:.0f}). Investigating..."
            )
        
        # Budget threshold alerts
        for threshold in self.alert_thresholds:
            if budget_usage >= threshold:
                self.alert(
                    severity="CRITICAL" if threshold >= 0.9 else "WARNING",
                    message=f"Budget usage: {budget_usage:.0%} "
                            f"(\${current_spend:,.0f} / \${self.budget:,.0f})"
                )
    
    def find_cost_anomalies(self):
        """หา top cost drivers"""
        breakdown = self.get_cost_by_service()
        
        # Top 5 expensive services
        top_services = sorted(
            breakdown.items(), 
            key=lambda x: x[1], 
            reverse=True
        )[:5]
        
        report = "\\n".join([
            f"  {svc}: \${cost:,.0f}/day" 
            for svc, cost in top_services
        ])
        
        return f"Top cost drivers:\\n{report}"
</code></pre>

<h2>🔧 Quick Wins — ลด cost ได้ทันที</h2>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────────┐
│              Cost Optimization Quick Wins                     │
├───────┬─────────────────────────────┬───────────┬───────────┤
│  #    │ Action                      │ Effort    │ Savings   │
├───────┼─────────────────────────────┼───────────┼───────────┤
│  1    │ ลบ unused resources         │ 1 day     │ 10-30%    │
│  2    │ Right-size instances        │ 2 days    │ 20-40%    │
│  3    │ Spot/Preemptible instances  │ 3 days    │ 60-90%    │
│  4    │ Partition + cluster tables  │ 1 week    │ 50-90%    │
│  5    │ Storage tiering (S3 IA/GL)  │ 1 day     │ 40-70%    │
│  6    │ Reserved instances (1-3yr)  │ 1 day     │ 30-60%    │
│  7    │ Compress data (Parquet/Zstd)│ 3 days    │ 50-80%    │
│  8    │ Cache frequent queries      │ 2 days    │ 30-50%    │
│  9    │ Stop dev clusters at night  │ 1 hour    │ 60%       │
│  10   │ Network: same-region coloc  │ 1 week    │ 20-50%    │
└───────┴─────────────────────────────┴───────────┴───────────┘
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> ตั้ง <strong>auto-shutdown</strong> สำหรับ dev/staging clusters ที่ idle > 30 นาที — หลายทีมลืมปิด cluster ตอนเลิกงาน เสียเงินทุกวัน! ใน Databricks ตั้ง "auto termination" ใน cluster config
</div>

<h2>🧠 วิธีคิด: FinOps Framework</h2>

<pre><code class="language-text">
FinOps Lifecycle:

┌────────────┐     ┌────────────┐     ┌────────────┐
│  INFORM     │────▶│  OPTIMIZE   │────▶│  OPERATE    │
│             │     │             │     │             │
│ • Visibility│     │ • Right-size│     │ • Budget    │
│ • Tagging   │     │ • Spot inst │     │ • Forecast  │
│ • Cost      │     │ • Reserved  │     │ • Chargeback│
│   allocation│     │ • Unused    │     │ • Policy    │
│ • Dashboard │     │   resource  │     │   enforce   │
└────────────┘     └────────────┘     └────────────┘
      ▲                                      │
      └──────────────────────────────────────┘
                  Continuous cycle
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>ไม่ tag resources:</strong> ไม่รู้ว่า cost มาจาก team/project ไหน → ไม่รู้จะ optimize ที่ไหน<br/>
2. <strong>SELECT * ทุก query:</strong> BigQuery คิดเงินตาม data scanned — เลือกแค่ column ที่ต้องการ!<br/>
3. <strong>Cross-region transfer:</strong> S3 bucket อยู่ us-east-1 แต่ Spark cluster อยู่ ap-southeast-1 → network cost สูงมาก<br/>
4. <strong>Log/monitoring ราคาแพง:</strong> ส่ง debug log ทุก record ไป CloudWatch/Datadog → bill พุ่ง ให้ sample!
</div>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. คำนวณ: ถ้าทีมใช้ BigQuery scan 5TB/day, 22 วัน/เดือน ควรใช้ on-demand หรือ flat-rate?<br/>
2. ออกแบบ cost monitoring dashboard — ต้องมี metrics อะไรบ้าง?<br/>
3. ทำ cost optimization plan สำหรับ Spark cluster ที่ใช้ on-demand instances 24/7<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. On-demand: 5 × 22 × $6.25 = $687.50/mo, 100 slots = $2,000/mo → on-demand ถูกกว่า! ยังไม่ถึง break-even<br/>
2. Daily cost trend, cost by service, cost by team (tags), projected monthly, anomaly alerts<br/>
3. Auto-scaling, spot instances สำหรับ workers, auto-shutdown idle, right-size instance types
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "คุณเคยลด cloud cost ได้ยังไง? เล่าให้ฟัง"<br/>
2. "BigQuery on-demand vs flat-rate — เลือกยังไง?"<br/>
3. "ถ้า CEO บอกว่า cloud bill แพงเกินไป 30% คุณจะเริ่มจากตรงไหน?"<br/>
4. "Spot instances เหมาะกับงานแบบไหน? ไม่เหมาะกับงานแบบไหน?"<br/>
<em>Tip: ตอบด้วยตัวเลข — "ลดได้ 40% จาก $X เหลือ $Y โดย..."</em>
</div>
`
  },
  {
    number: 6,
    slug: 'enterprise-design',
    emoji: '🏗️',
    title: 'Enterprise System Design',
    content: `
<h2>🎯 ทำไมต้อง System Design? — ถ้าออกแบบผิด จ่ายแพงมาก</h2>

<p>ลองนึกภาพ: ออกแบบ data pipeline สำหรับ 1M events/day ทำงานดีมาก แต่พอบริษัทโต events เพิ่มเป็น 100M/day → ระบบล่ม! ต้อง rewrite ทั้งหมด เสียเงินเสียเวลา 6 เดือน ถ้าออกแบบดีตั้งแต่แรก จะไม่เจอปัญหานี้</p>

<h2>📐 CAP Theorem — กฎเหล็กของ Distributed Systems</h2>

<pre><code class="language-text">
CAP Theorem: เลือกได้แค่ 2 จาก 3

         Consistency (C)
         ทุก node เห็นข้อมูลเหมือนกัน
              /\\
             /  \\
            /    \\
           / CA   \\  CP
          / (RDBMS)\\(HBase, MongoDB)
         /    ⚠️    \\
        /  ไม่ทน     \\
       /  partition    \\
      /________________\\
  Availability (A) ──── Partition Tolerance (P)
  ทุก request ได้       ทนต่อ network partition
  response เสมอ         (node ติดต่อกันไม่ได้)
        AP
  (Cassandra, DynamoDB)
  
⚠️ ในโลกจริง network partition เกิดแน่ → ต้องเลือก CP หรือ AP
├── CP: ยอม unavailable เพื่อ consistency (Banking, Payment)
├── AP: ยอม inconsistent เพื่อ availability (Social media, Analytics)
└── ส่วนใหญ่ Data Engineering ใช้ AP + eventual consistency
</code></pre>

<pre><code class="language-python">
# ตัวอย่าง: เลือก database ตาม CAP requirements
def choose_database(requirements):
    """เลือก database ตาม CAP requirements"""
    
    if requirements.needs_strong_consistency:
        if requirements.needs_sql:
            return {
                "choice": "PostgreSQL / Cloud Spanner",
                "cap": "CP",
                "reason": "ต้องการ ACID transactions + SQL",
                "trade_off": "Availability อาจลดลงเมื่อ partition"
            }
        else:
            return {
                "choice": "MongoDB (w/ majority write concern)",
                "cap": "CP",
                "reason": "Strong consistency + flexible schema"
            }
    
    elif requirements.needs_high_availability:
        if requirements.is_time_series:
            return {
                "choice": "Apache Cassandra / TimescaleDB",
                "cap": "AP",
                "reason": "High write throughput + always available",
                "trade_off": "Eventual consistency — อาจอ่านข้อมูลเก่า"
            }
        elif requirements.is_key_value:
            return {
                "choice": "DynamoDB / Redis",
                "cap": "AP",
                "reason": "Ultra-low latency + scalable"
            }
    
    elif requirements.is_analytics:
        return {
            "choice": "BigQuery / Snowflake / ClickHouse",
            "cap": "CP (within query)",
            "reason": "Analytical queries, columnar storage"
        }
</code></pre>

<h2>🏗️ System Design Patterns สำหรับ Data Engineering</h2>

<h3>Pattern 1: Lambda Architecture</h3>

<pre><code class="language-text">
                    ┌─────────────────────┐
                    │    Data Sources      │
                    │ (Events, DBs, APIs)  │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             │             ▼
    ┌────────────────┐         │    ┌────────────────┐
    │  Batch Layer    │         │    │  Speed Layer    │
    │  (Spark)        │         │    │  (Flink/Kafka)  │
    │  • Full recomp  │         │    │  • Real-time    │
    │  • Correct      │         │    │  • Approximate  │
    │  • Slow (hours) │         │    │  • Fast (ms)    │
    └───────┬────────┘         │    └───────┬────────┘
            │                  │            │
            ▼                  │            ▼
    ┌────────────────┐         │    ┌────────────────┐
    │  Batch Views    │         │    │  Real-time Views│
    └───────┬────────┘         │    └───────┬────────┘
            │                  │            │
            └──────────┬───────┘────────────┘
                       ▼
              ┌────────────────┐
              │  Serving Layer  │
              │  (Merge batch   │
              │  + real-time)   │
              └────────────────┘

ข้อดี: Correct (batch) + Fast (speed)
ข้อเสีย: ต้อง maintain 2 code paths!
</code></pre>

<h3>Pattern 2: Kappa Architecture (Simpler)</h3>

<pre><code class="language-text">
    ┌─────────────────────┐
    │    Data Sources       │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │  Streaming Layer     │
    │  (Kafka + Flink)     │
    │  • All data as stream│
    │  • Reprocess from    │
    │    beginning if needed│
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │  Serving Layer        │
    │  (Materialized Views) │
    └─────────────────────┘

ข้อดี: 1 code path, simpler
ข้อเสีย: Streaming reprocessing ช้ากว่า batch
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> ถ้าถูกถามในสัมภาษณ์ว่าเลือก Lambda หรือ Kappa — ตอบว่า <strong>Kappa ถ้าเป็นไปได้</strong> (simpler to maintain) แต่ Lambda ถ้าต้องการ complex batch reprocessing ที่ streaming ทำไม่ได้ (เช่น ML training)
</div>

<h2>📊 Scalability Patterns</h2>

<pre><code class="language-python">
# Horizontal vs Vertical Scaling

class ScalabilityDesign:
    """Design patterns สำหรับ scale data systems"""
    
    @staticmethod
    def horizontal_scaling():
        """เพิ่ม node มากขึ้น — preferred for data systems"""
        return {
            "pattern": "Horizontal (Scale Out)",
            "how": "เพิ่ม machines/nodes/partitions",
            "examples": [
                "Kafka: เพิ่ม partitions + brokers",
                "Spark: เพิ่ม worker nodes",
                "Cassandra: เพิ่ม nodes ในcluster",
            ],
            "pros": ["Near-linear scaling", "No single point of failure"],
            "cons": ["Distributed complexity", "Network overhead"],
            "when": "เมื่อ data/traffic เพิ่มเรื่อยๆ"
        }
    
    @staticmethod
    def partitioning_strategies():
        """วิธีแบ่ง data ให้ scale ได้"""
        return {
            "hash_partitioning": {
                "how": "hash(key) % num_partitions",
                "pros": "กระจายสม่ำเสมอ",
                "cons": "range query ทำได้ยาก",
                "best_for": "Key-value lookups"
            },
            "range_partitioning": {
                "how": "แบ่งตาม range (เช่น date)",
                "pros": "range query เร็ว",
                "cons": "hot partition (เช่น วันนี้ data เยอะ)",
                "best_for": "Time-series, analytics"
            },
            "composite": {
                "how": "hash(customer_id) + range(date)",
                "pros": "balanced + range queryable",
                "best_for": "Production data platforms"
            }
        }
</code></pre>

<h2>🏛️ Enterprise Architecture Case Study</h2>

<pre><code class="language-text">
Case: ออกแบบ Real-time Analytics Platform
Requirements:
├── 500M events/day (peak 20K events/sec)
├── < 5 second end-to-end latency
├── 3 years data retention
├── Multi-region (Thailand + Singapore)
├── 99.9% availability

Architecture:
                           ┌──────────────┐
    Mobile/Web ──────────▶ │   API Gateway  │
    (Events)               │   (Kong/Envoy) │
                           └──────┬───────┘
                                  │
                           ┌──────▼───────┐
                           │    Kafka       │
                           │  (3 brokers,   │
                           │   RF=3, ISR=2) │
                           └──┬─────────┬──┘
                              │         │
                    ┌─────────▼──┐  ┌───▼──────────┐
                    │  Flink      │  │  Spark        │
                    │  (Real-time)│  │  (Batch, daily)│
                    │  - Aggregate│  │  - Full recomp │
                    │  - Enrich   │  │  - ML training │
                    └─────────┬──┘  └───┬──────────┘
                              │         │
                    ┌─────────▼─────────▼──────────┐
                    │        Lakehouse               │
                    │  ├── Bronze (Iceberg, raw)      │
                    │  ├── Silver (cleaned, joined)   │
                    │  └── Gold (aggregated, serving) │
                    └──────────┬───────────────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │  ClickHouse   │ │   Redis       │ │  BigQuery     │
    │  (Real-time   │ │  (Feature     │ │  (Ad-hoc      │
    │   dashboard)  │ │   serving)    │ │   analysis)   │
    └──────────────┘ └──────────────┘ └──────────────┘
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ในสัมภาษณ์ System Design ให้เริ่มจาก <strong>requirements</strong> ก่อนเสมอ: (1) Scale? (2) Latency? (3) Consistency? (4) Availability? (5) Budget? — แล้วค่อย design ตาม constraints
</div>

<h2>🔄 Exactly-Once Processing</h2>

<pre><code class="language-python">
# Idempotent Pipeline Design
class IdempotentPipeline:
    """Design pipeline ที่ run ซ้ำได้โดยไม่มี duplicate"""
    
    def __init__(self, checkpoint_store):
        self.checkpoints = checkpoint_store
    
    def process_batch(self, batch_id, records):
        """Idempotent batch processing"""
        
        # 1. Check if already processed
        if self.checkpoints.exists(batch_id):
            print(f"Batch {batch_id} already processed, skipping")
            return
        
        # 2. Process with deduplication
        processed = self.transform(records)
        
        # 3. Write output + checkpoint atomically
        # ใช้ transaction เพื่อให้ atomic
        with self.database.transaction():
            self.write_output(processed)
            self.checkpoints.save(batch_id, {
                "status": "completed",
                "record_count": len(processed),
                "completed_at": datetime.utcnow()
            })
        
        # ถ้า pipeline ล่มกลางทาง → ไม่มี checkpoint
        # → run ใหม่จะ process batch เดิมอีกครั้ง (safe!)
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> "Exactly-once" ใน distributed system ทำได้ยากมาก — ส่วนใหญ่ทำ <strong>"at-least-once + idempotent"</strong> แทน ง่ายกว่าและ result เหมือนกัน!
</div>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>Single point of failure:</strong> ทุก service ต้องมี redundancy — อย่าวาง critical component ไว้ instance เดียว<br/>
2. <strong>ไม่ design for failure:</strong> "ถ้า Kafka ล่มจะเกิดอะไร?" ถ้าตอบไม่ได้ = ยังไม่พร้อม<br/>
3. <strong>Over-engineer:</strong> ออกแบบสำหรับ 1B events/day ทั้งที่มี 1M — เสียเงินและ complexity โดยไม่จำเป็น<br/>
4. <strong>ลืม network latency:</strong> Cross-region calls เพิ่ม 50-200ms ต่อ call — ออกแบบ data locality ให้ดี
</div>

<h2>🧠 วิธีคิด: System Design Interview Framework</h2>

<pre><code class="language-text">
5 ขั้นตอนที่ต้องทำทุกครั้ง (ใน 45 นาที):

1. Requirements (5 min)
   ├── Functional: ระบบต้องทำอะไร?
   ├── Non-functional: Scale, latency, availability?
   └── Constraints: Budget, team size, timeline?

2. Estimation (5 min)
   ├── Data volume: X events/day, Y GB/day
   ├── QPS: peak requests/second
   └── Storage: total over retention period

3. High-Level Design (10 min)
   ├── วาด architecture diagram
   ├── ระบุ components หลัก
   └── อธิบาย data flow

4. Deep Dive (20 min)
   ├── เลือก 2-3 components ที่ complex ที่สุด
   ├── อธิบาย trade-offs ของแต่ละ choice
   └── Handle edge cases, failure scenarios

5. Wrap Up (5 min)
   ├── สรุป design decisions
   ├── Monitoring strategy
   └── Future improvements
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. ออกแบบ real-time fraud detection system สำหรับ payment processing (100K transactions/min, < 200ms latency)<br/>
2. ออกแบบ data platform สำหรับ IoT ที่มี 1M sensors ส่งข้อมูลทุก 10 วินาที<br/>
3. อธิบาย CAP trade-offs ของ system ที่คุณออกแบบในข้อ 1 และ 2<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. Kafka → Flink (feature computation) → Redis (feature store) → Model API → Kafka (results) — CP สำหรับ payment (ยอม slower ไม่ยอม inconsistent)<br/>
2. IoT Gateway → Kafka → Flink (aggregate per sensor) → TimescaleDB/Cassandra → Grafana — AP (sensor data tolerant to eventual consistency)<br/>
3. Fraud: CP (ยอม reject transaction ชั่วคราวไม่ยอม approve fraud), IoT: AP (missing 1 data point ไม่เป็นไร)
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "อธิบาย CAP theorem ให้คนที่ไม่ใช่ engineer ฟัง"<br/>
2. "Lambda vs Kappa architecture — เมื่อไหร่ใช้อะไร?"<br/>
3. "ออกแบบ analytics pipeline ที่รองรับ 1B events/day"<br/>
4. "Exactly-once processing ทำได้จริงไหม? ถ้าไม่ มี alternative อะไร?"<br/>
<em>Tip: วาดรูปเสมอ! System design ที่ไม่มี diagram คือ incomplete</em>
</div>
`
  },
  {
    number: 7,
    slug: 'leadership',
    emoji: '👑',
    title: 'Leadership & Mentoring',
    content: `
<h2>🎯 ทำไม Senior ต้อง Lead? — เพราะ Impact ผ่านคนมากกว่าผ่าน Code</h2>

<p>ความจริงที่หลาย Senior ไม่อยากยอมรับ: <strong>คุณเขียน code ได้วันละ 8 ชั่วโมง แต่ถ้าคุณ mentor junior 3 คนให้เก่งขึ้น 30% — impact ของคุณจะ multiply เป็น 4 เท่า</strong></p>

<p>Leadership ไม่ได้หมายความว่าต้องเป็น "manager" — Individual Contributor (IC) ก็ lead ได้ผ่าน:</p>
<ul>
<li>Technical direction & decision making</li>
<li>Code reviews ที่สอนมากกว่าจับผิด</li>
<li>Architecture Decision Records (ADRs)</li>
<li>Mentoring & pair programming</li>
<li>RFC/Design docs ที่ drive technical strategy</li>
</ul>

<h2>📝 Code Review ที่ดี — สอน ไม่ใช่ จับผิด</h2>

<pre><code class="language-python">
# ❌ BAD Code Review Comments:
# "This is wrong." → ไม่บอกว่าผิดยังไง
# "Why did you do it this way?" → ฟังก้าวร้าว
# "LGTM" → ไม่ได้ review จริง
# "นี่ code อะไร?" → personal attack

# ✅ GOOD Code Review Comments:

# 1. อธิบาย WHY ไม่ใช่แค่ WHAT
"""
💡 Suggestion: ตรงนี้ถ้าใช้ dict comprehension จะ readable กว่า
เพราะ Python community มักจะ prefer comprehension สำหรับ
simple transformations — ทำให้คนอื่นอ่าน intent ได้เร็วขึ้น

แทน:
  result = {}
  for item in items:
      result[item.key] = item.value

ลอง:
  result = {item.key: item.value for item in items}

ถ้าใน loop มี logic ซับซ้อน ก็ใช้ for loop ปกตินะ
comprehension เหมาะแค่ simple cases
"""

# 2. ถามก่อน judge
"""
🤔 Question: ตรงนี้เลือกใช้ list แทน set เพราะอะไร?
ถ้า order ไม่สำคัญ set อาจจะ perform ดีกว่า O(1) lookup
แต่ถ้ามีเหตุผลที่ต้องใช้ list ก็ ok!
"""

# 3. ชมเมื่อเห็นสิ่งดี
"""
✨ Nice! ดีมากที่ handle edge case ตรงนี้
ผมเคยลืม handle null แล้ว production ล่มมาก่อน 😅
"""

# 4. แยก severity ให้ชัด
"""
🔴 MUST FIX: SQL injection vulnerability ตรงนี้
   ต้องใช้ parameterized query แทน string concatenation

🟡 SHOULD FIX: Function นี้ยาว 200 lines ค่อนข้าง
   hard to test — ลอง extract helper functions ดู

🟢 NIT: Typo ใน variable name "custmer" → "customer"
   ไม่ urgent แต่ถ้าแก้ได้จะดี
"""
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #1:</strong> Code review ที่ดีมี ratio ของ praise:suggestion ประมาณ 1:3 — ถ้ามีแต่ criticism คน submit PR จะเสีย confidence ถ้ามีแต่ praise จะไม่ได้ improve
</div>

<h2>📋 Architecture Decision Records (ADRs)</h2>

<pre><code class="language-markdown">
# ADR-007: เลือกใช้ Apache Iceberg แทน Delta Lake

## Status
Accepted (2024-01-15)

## Context
เราต้องเลือก table format สำหรับ Lakehouse architecture ใหม่
ปัจจุบันใช้ raw Parquet files ซึ่งไม่มี ACID transactions
ทำให้เกิด data corruption เมื่อ pipeline fail กลางทาง

Requirements:
- Multi-engine support (Spark, Trino, Flink)
- Partition evolution without data rewrite
- ACID transactions
- Time travel สำหรับ debugging
- Open-source, ไม่ lock-in กับ vendor ใดๆ

## Options Considered

### Option A: Delta Lake
- Pros: Mature, good Spark integration, Databricks support
- Cons: Spark-centric, Unity Catalog lock-in concern,
  partition evolution ต้อง rewrite

### Option B: Apache Iceberg ← SELECTED
- Pros: Engine-agnostic, partition evolution, open governance,
  REST catalog, strong community (Netflix, Apple, LinkedIn)
- Cons: Newer than Delta, fewer tutorials

### Option C: Apache Hudi
- Pros: Best upsert performance (MOR tables)
- Cons: Complex configuration, smaller community

## Decision
เลือก Apache Iceberg เพราะ:
1. เราใช้ทั้ง Spark และ Trino — ต้องการ engine-agnostic
2. Partition evolution ช่วย long-term maintenance
3. ไม่ต้อง lock-in กับ Databricks

## Consequences
- ทีมต้องเรียนรู้ Iceberg APIs (1-2 weeks)
- ต้อง setup Iceberg REST catalog
- Migration จาก raw Parquet → Iceberg ใช้เวลา ~2 sprints
- Monitoring tools อาจต้อง customize
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #2:</strong> ADR ที่ดีต้องบอก <strong>"ทำไมไม่เลือกอันอื่น"</strong> เพราะ 6 เดือนข้างหน้าจะมีคนถามว่า "ทำไมไม่ใช้ Delta Lake?" — ถ้ามี ADR ก็ตอบได้ทันที ไม่ต้องนั่งนึก
</div>

<h2>🧑‍🏫 Mentoring — สร้างคนรุ่นต่อไป</h2>

<pre><code class="language-python">
class EffectiveMentor:
    """Framework สำหรับ mentoring junior/mid engineers"""
    
    def __init__(self, mentee):
        self.mentee = mentee
        self.meeting_cadence = "weekly_1on1"
    
    def weekly_1on1(self):
        """1-on-1 meeting structure"""
        agenda = {
            "check_in": {
                "duration": "5 min",
                "questions": [
                    "สัปดาห์นี้เป็นยังไงบ้าง?",
                    "มีอะไรที่ blocked ไหม?",
                    "มีอะไรที่อยากคุยเป็นพิเศษไหม?"
                ]
            },
            "progress_review": {
                "duration": "15 min",
                "activities": [
                    "Review goals ที่ตั้งไว้",
                    "Discuss challenges ที่เจอ",
                    "ดู code/PR ที่ทำสัปดาห์นี้ด้วยกัน"
                ]
            },
            "teaching_moment": {
                "duration": "15 min",
                "topics_rotation": [
                    "System design: วาด architecture ด้วยกัน",
                    "Code review: review PR ด้วยกัน อธิบาย why",
                    "Debugging: walk through production issue",
                    "Career: discuss growth path"
                ]
            },
            "action_items": {
                "duration": "5 min",
                "template": [
                    "สิ่งที่ mentee จะทำสัปดาห์หน้า",
                    "สิ่งที่ mentor จะช่วย/prepare",
                    "Resources ให้อ่าน/ศึกษา"
                ]
            }
        }
        return agenda
    
    def give_stretch_assignment(self):
        """ให้งานที่ท้าทายกว่าปกตินิดหนึ่ง"""
        assignments = [
            {
                "level": "junior → mid",
                "task": "ให้ design pipeline ใหม่ด้วยตัวเอง",
                "support": "review design ด้วยกัน ก่อน implement",
                "learning": "system thinking, trade-off analysis"
            },
            {
                "level": "mid → senior",
                "task": "ให้ lead technical discussion ใน team meeting",
                "support": "ช่วย prepare content ล่วงหน้า",
                "learning": "communication, influence"
            },
            {
                "level": "mid → senior",
                "task": "ให้เขียน ADR สำหรับ technical decision",
                "support": "review ADR draft, suggest improvements",
                "learning": "decision documentation, trade-off thinking"
            }
        ]
        return assignments
    
    def create_growth_plan(self):
        """สร้าง growth plan 6 เดือน"""
        return {
            "month_1_2": {
                "focus": "Technical depth",
                "goals": [
                    "เข้าใจ Spark internals (partitioning, shuffle)",
                    "อ่าน production code ทั้ง repo",
                    "Fix 5 bugs ด้วยตัวเอง"
                ]
            },
            "month_3_4": {
                "focus": "Design & ownership",
                "goals": [
                    "Design pipeline ใหม่ 1 ตัว end-to-end",
                    "เขียน ADR 1 ฉบับ",
                    "Present technical topic ให้ทีม"
                ]
            },
            "month_5_6": {
                "focus": "Impact & leadership",
                "goals": [
                    "Mentor intern/junior 1 คน",
                    "Improve team process 1 อย่าง",
                    "Lead cross-team project 1 ชิ้น"
                ]
            }
        }
</code></pre>

<div class="tip-box">
<strong>💡 ทริค #3:</strong> Mentoring ที่ดีที่สุดคือ <strong>"ทำให้ดูก่อน แล้วทำด้วยกัน แล้วให้ทำเอง"</strong> (I do, we do, you do) — อย่าแค่บอกให้ไปทำ ต้อง show ก่อน!
</div>

<h2>📄 RFC (Request for Comments) — Drive Technical Direction</h2>

<pre><code class="language-text">
RFC Template สำหรับ Data Engineering:

# RFC: [ชื่อ Proposal]

## Author: [ชื่อ]
## Date: [วันที่]
## Status: Draft / In Review / Accepted / Rejected

## Summary
1-2 ประโยค สรุปว่า propose อะไร

## Motivation
- ปัญหาปัจจุบันคืออะไร?
- ทำไมต้องแก้ตอนนี้?
- Impact ถ้าไม่แก้?

## Proposed Solution
- อธิบาย solution ในภาพใหญ่
- Architecture diagram
- ตัวอย่าง code (ถ้ามี)

## Alternatives Considered
- Option A: [ทำไมไม่เลือก]
- Option B: [ทำไมไม่เลือก]

## Migration Plan
- Phase 1: ...
- Phase 2: ...
- Rollback plan: ...

## Open Questions
- [คำถามที่ยังไม่มีคำตอบ]

## Timeline
- Week 1-2: Design review
- Week 3-6: Implementation
- Week 7-8: Testing + rollout
</code></pre>

<h2>🤝 Influence Without Authority</h2>

<pre><code class="language-python">
class TechnicalInfluence:
    """วิธี influence technical decisions โดยไม่ต้องเป็น manager"""
    
    strategies = {
        "build_credibility": {
            "how": [
                "ส่งมอบงาน quality สูงอย่างสม่ำเสมอ",
                "เขียน blog posts / internal wiki ที่มีประโยชน์",
                "เป็นคนแรกที่ debug production issues",
                "ช่วยทีมอื่นแก้ปัญหา technical"
            ],
            "result": "คนเชื่อถือ opinion ของคุณมากขึ้น"
        },
        "data_driven_proposals": {
            "how": [
                "ทำ benchmark ก่อนเสนอ",
                "ใช้ metrics สนับสนุน argument",
                "แสดง cost-benefit analysis",
                "Prototype ก่อน propose"
            ],
            "result": "ยากที่จะถูก reject ถ้ามี data"
        },
        "build_consensus": {
            "how": [
                "คุยกับ stakeholders ก่อน meeting",
                "รับ feedback แล้วปรับ proposal",
                "ให้ credit คนอื่นที่มี idea ดี",
                "เข้าใจ concern ของทุกฝ่าย"
            ],
            "result": "คนรู้สึก included ไม่ต้อง force"
        },
        "write_it_down": {
            "how": [
                "RFC สำหรับ big decisions",
                "ADR สำหรับ architecture choices",
                "Runbook สำหรับ operations",
                "Post-mortem สำหรับ incidents"
            ],
            "result": "เอกสารที่ดีคือ influence ที่ยั่งยืน"
        }
    }
</code></pre>

<h2>📊 การวัด Impact ของ Senior Engineer</h2>

<pre><code class="language-text">
Impact Framework สำหรับ Senior DE:

Individual Impact:
├── Technical: Pipeline ที่สร้าง process data เท่าไหร่/วัน?
├── Quality: Incidents ลดลงกี่%? Test coverage เพิ่มขึ้นกี่%?
├── Cost: ลด cloud cost ได้เท่าไหร่?
└── Speed: Time-to-deploy ลดลงกี่%?

Team Impact:
├── Mentoring: Junior ที่ mentor ได้ promote กี่คน?
├── Process: Team velocity เพิ่มขึ้นกี่%?
├── Documentation: Onboarding time ลดลงกี่วัน?
└── Culture: Code review quality, knowledge sharing

Organization Impact:
├── Standards: Company-wide standards ที่สร้าง
├── Platform: Self-serve tools ที่ช่วยกี่ทีม?
├── Strategy: Technical direction ที่ influence
└── Hiring: จำนวน interviews ที่ทำ, engineers ที่ hire
</code></pre>

<div class="warning-box">
<strong>⚠️ ข้อผิดพลาดที่พบบ่อย:</strong><br/>
1. <strong>เก็บความรู้ไว้คนเดียว:</strong> Bus factor = 1 ถ้าคุณลาออก ทีมจะพัง — ต้อง document และ share<br/>
2. <strong>Micro-manage ใน code review:</strong> จับผิดทุก style issue แทนที่จะ focus ที่ logic/design — ใช้ linter แทน!<br/>
3. <strong>Skip 1-on-1:</strong> "ยุ่งเกินไป" — จริงๆ 1-on-1 คือ highest ROI activity ของ mentor<br/>
4. <strong>ไม่ give credit:</strong> เอา idea ลูกทีมไปนำเสนอเป็นของตัวเอง — ทำลาย trust ทันที
</div>

<h2>🧠 วิธีคิด: Growth ของ Engineer</h2>

<pre><code class="language-text">
Engineer Growth Path:

Time ──────────────────────────────────────────▶

Junior     │ Mid       │ Senior     │ Staff+
───────────┼───────────┼────────────┼──────────
Learn      │ Execute   │ Design +   │ Strategy +
basics     │ tasks     │ Mentor     │ Influence
           │ well      │ others     │ org
           │           │            │
Code 90%   │ Code 70%  │ Code 40%   │ Code 20%
           │ Review 20%│ Review 20% │ Review 10%
           │ Learn 10% │ Design 20% │ Strategy 40%
           │           │ Mentor 20% │ Mentor 30%
</code></pre>

<div class="exercise-box">
<strong>📝 แบบฝึกหัด:</strong><br/>
1. เขียน ADR สำหรับการเปลี่ยนจาก Airflow 1.x ไป Airflow 2.x ให้ครบทุก section<br/>
2. สร้าง 6-month growth plan สำหรับ junior DE ที่เพิ่งเข้าทีมคุณ<br/>
3. เขียน code review comment สำหรับ PR ที่มี: SQL injection, missing error handling, และ good test coverage — ใช้ severity levels<br/>
<br/>
<strong>เฉลย (แนวทาง):</strong><br/>
1. ADR ต้องมี: Context (ทำไมต้อง migrate), Options (upgrade in-place vs new cluster), Decision + Consequences, Migration plan<br/>
2. Month 1-2: learn codebase + fix bugs, Month 3-4: own 1 pipeline end-to-end, Month 5-6: design new pipeline + present to team<br/>
3. 🔴 SQL injection = MUST FIX + อธิบาย parameterized queries, 🟡 error handling = SHOULD FIX + suggest try/except pattern, ✨ test coverage = praise!
</div>

<div class="interview-box">
<strong>🎯 คำถามสัมภาษณ์:</strong><br/>
1. "คุณ mentor junior engineer ยังไง? เล่าตัวอย่างที่เขา grow ได้"<br/>
2. "คุณเคยไม่เห็นด้วยกับ technical decision ของทีม แล้วทำยังไง?"<br/>
3. "ADR คืออะไร? ทำไมถึงสำคัญ?"<br/>
4. "ถ้า 2 engineers ในทีมเถียงกันเรื่อง tech choice คุณจะ resolve ยังไง?"<br/>
<em>Tip: คำตอบที่ดีจะแสดง empathy, structured thinking, และ focus ที่ team impact</em>
</div>
`
  }
];
