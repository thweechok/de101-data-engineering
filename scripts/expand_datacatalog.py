#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
expand_datacatalog.py
Generates an expanded data-catalog.js file (~60KB+) with 10 chapters,
each 3000+ characters, following strict JS single-quote format rules.
"""

import os

OUTPUT_PATH = r'd:\AI\ขาย\de-course\data\courses\data-catalog.js'

def q(text):
    """Ensure text uses single quotes and escape apostrophes."""
    return text.replace("'", "\\'")

# ─────────────────────────────────────────────────────────────
# CHAPTER CONTENT DEFINITIONS
# Each chapter content is a plain Python string (no backticks in output JS).
# Apostrophes in Thai/English text are escaped via q().
# HTML uses &lt; &gt; &amp; entities inside code blocks.
# Newlines inside content are written as \n literal.
# ─────────────────────────────────────────────────────────────

chapters = []

# ══════════════════════════════════════════════════════════════
# CHAPTER 0: overview
# ══════════════════════════════════════════════════════════════
ch0_content = (
    '<h2>Data Catalog คืออะไร?</h2>'
    '<p>Data Catalog คือระบบกลางที่รวบรวม Metadata ขององค์กรไว้ในที่เดียว เปรียบได้กับ <strong>ห้องสมุดดิจิทัล</strong> ที่มีบรรณารักษ์อัจฉริยะคอยจัดระเบียบหนังสือทุกเล่ม ทำให้ผู้ใช้งานสามารถค้นหาข้อมูลที่ต้องการได้รวดเร็ว รู้ว่าข้อมูลนั้นเชื่อถือได้ไหม มาจากไหน และใครเป็นผู้ดูแล ในยุคที่องค์กรมีข้อมูลหลายพัน Table กระจายอยู่ใน Data Lake, Data Warehouse, และระบบต่างๆ หลายสิบระบบ Data Catalog คือ Single Source of Truth สำหรับ Metadata ทั้งหมด</p>'
    '<h3>5 ปัญหาที่ Data Catalog แก้ได้</h3>'
    '<p><strong>1. ปัญหา "ไม่รู้ว่าข้อมูลอยู่ที่ไหน"</strong> — Data Analyst ต้องส่งอีเมลถาม Data Engineer ว่า Table sales_v2 กับ sales_final ต่างกันอย่างไร ใช้เวลาหลายวัน Data Catalog ให้ค้นหาและเข้าใจข้อมูลได้เองใน 5 นาที</p>'
    '<p><strong>2. ปัญหา "ไม่รู้ว่าข้อมูลน่าเชื่อถือแค่ไหน"</strong> — ไม่รู้ว่า Table นี้ Update ล่าสุดเมื่อไร มี Quality Score เท่าไร และใครเป็น Owner ที่รับผิดชอบ Catalog แสดง Freshness, Quality Score และ Owner ชัดเจน</p>'
    '<p><strong>3. ปัญหา "ข้อมูล Silo"</strong> — แต่ละ Team มีนิยาม KPI ต่างกัน ทีม Marketing นับ Active User แบบหนึ่ง ทีม Product นับอีกแบบหนึ่ง Business Glossary ใน Catalog กำหนดนิยามกลางที่ทุกทีมเห็นตรงกัน</p>'
    '<p><strong>4. ปัญหา Compliance และ Governance</strong> — ไม่รู้ว่า Column ไหนมี PII บ้าง ใครเข้าถึงข้อมูลส่วนตัวลูกค้าได้ Catalog ช่วย Classify และ Audit Access โดยอัตโนมัติ</p>'
    '<p><strong>5. ปัญหา Duplicate Work</strong> — ทีม A สร้าง Pipeline อยู่แล้ว แต่ทีม B ไม่รู้ เลยสร้างซ้ำอีกครั้ง Catalog แสดง Dataset ที่มีอยู่แล้วพร้อม Lineage ทำให้ Reuse ได้</p>'
    '<h3>Real-world Examples: Netflix, LinkedIn, Airbnb</h3>'
    '<p><strong>Netflix</strong> ใช้ Metacat ซึ่งเป็น Internal Catalog ที่จัดการ Metadata สำหรับข้อมูลหลายพัน TB มีการ Integrate กับ Spark, Hive, Iceberg และ Presto ทำให้ Data Scientist ค้นหา Dataset ที่ต้องการสำหรับ Recommendation Model ได้รวดเร็ว ลดเวลา Data Discovery จาก ชั่วโมง เป็น นาที</p>'
    '<p><strong>LinkedIn</strong> สร้าง DataHub ซึ่งต่อมากลายเป็น Open-source ที่ใช้งานกันทั่วโลก ปัจจุบัน LinkedIn มี Dataset มากกว่า 100,000 ชุด ที่ถูก Catalog ไว้ใน DataHub ทำให้ทีม Data Science กว่า 1,000 คน ทำงานร่วมกันได้อย่างมีประสิทธิภาพ</p>'
    '<p><strong>Airbnb</strong> ใช้ Dataportal ซึ่งเป็น Internal Catalog ที่มี Social Features เช่น การ Rate Dataset และ Leave Comments ทำให้ Data Culture ดีขึ้นอย่างมาก Analyst สามารถรู้ว่า Table ไหน "Popular" และ "Trusted" จากชุมชนผู้ใช้จริง</p>'
    '<h3>ROI Statistics ที่น่าสนใจ</h3>'
    '<p>จากการศึกษาของ Gartner พบว่าองค์กรที่มี Data Catalog ที่ดี สามารถลดเวลาในการค้นหาข้อมูลได้ถึง <strong>70%</strong> และลด Duplicate Data Projects ได้ถึง <strong>40%</strong> IDC รายงานว่า Data Scientist ใช้เวลา 80% ไปกับการค้นหาและเตรียมข้อมูล ซึ่ง Data Catalog ลดส่วนนี้ได้อย่างมีนัยสำคัญ Forrester พบว่าการลงทุนใน Data Catalog ให้ ROI เฉลี่ย 250% ใน 3 ปี เนื่องจากลด Cost ของ Data Discovery และเพิ่ม Velocity ของ Data Projects</p>'
    '<h3>Comparison Table: With vs Without Data Catalog</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>สถานการณ์</th><th>ไม่มี Catalog</th><th>มี Catalog</th></tr><tr><td>ค้นหา Table ที่ต้องการ</td><td>ถามคน / ดู Confluence ที่ Outdated (2-3 วัน)</td><td>Search ใน Catalog (5 นาที)</td></tr><tr><td>เข้าใจความหมาย Column</td><td>อ่าน Code หรือถาม Developer</td><td>อ่าน Description และ Examples ใน Catalog</td></tr><tr><td>ตรวจสอบ Data Freshness</td><td>ดู Pipeline Log (ถ้าหาเจอ)</td><td>ดู Last Updated และ SLA ใน Catalog</td></tr><tr><td>หา Data Owner</td><td>ถามทั่ว Slack ไม่รู้ว่าถามใคร</td><td>ดู Owner ใน Catalog และ Contact ได้เลย</td></tr><tr><td>PDPA Compliance Audit</td><td>Manual Spreadsheet (หลายสัปดาห์)</td><td>Export Report จาก Catalog (ชั่วโมง)</td></tr><tr><td>Impact Analysis ก่อนเปลี่ยน Schema</td><td>ไม่รู้ว่ากระทบอะไรบ้าง</td><td>ดู Lineage และ Downstream ใน Catalog</td></tr></table></p>'
    '<h3>Key Features ของ Data Catalog ที่ดี</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Feature</th><th>คำอธิบาย</th><th>ประโยชน์</th></tr><tr><td>Metadata Search</td><td>ค้นหา Dataset, Column, Business Term</td><td>ลดเวลา Discovery</td></tr><tr><td>Data Lineage</td><td>แสดง Upstream/Downstream ของ Dataset</td><td>Impact Analysis, Root Cause</td></tr><tr><td>Business Glossary</td><td>นิยามคำศัพท์ธุรกิจกลาง</td><td>ลด Ambiguity</td></tr><tr><td>Data Classification</td><td>Tag PII, Sensitive, Public</td><td>PDPA/GDPR Compliance</td></tr><tr><td>Data Quality Score</td><td>แสดง Completeness, Freshness, Accuracy</td><td>Trust Assessment</td></tr><tr><td>Access Control</td><td>กำหนด Policy ตาม Classification</td><td>Security & Governance</td></tr><tr><td>Social Features</td><td>Rating, Comments, Endorsement</td><td>Data Culture</td></tr><tr><td>API Integration</td><td>REST API สำหรับ Automation</td><td>CI/CD Integration</td></tr></table></p>'
    '<h3>Data Catalog vs Data Dictionary</h3>'
    '<p>หลายคนสับสนระหว่าง Data Catalog และ Data Dictionary แม้จะมีความคล้ายคลึงกัน แต่มีความแตกต่างที่สำคัญ <strong>Data Dictionary</strong> เป็นเอกสาร (มักเป็น Spreadsheet หรือ Wiki) ที่อธิบาย Schema ของ Database โดย Manual ไม่มี Search, ไม่มี Lineage, ไม่มี Access Control และ Outdated เร็วมากเพราะต้อง Update ด้วยมือ <strong>Data Catalog</strong> เป็นระบบ Software ที่ Auto-harvest Metadata, มี Search Engine, มี Lineage Graph, มี Access Control และ Update อัตโนมัติเมื่อ Schema เปลี่ยน Data Catalog คือวิวัฒนาการของ Data Dictionary ที่ Scale ได้สำหรับ Enterprise</p>'
    '<div class=\'tip-box\'><strong>💡</strong> เริ่มต้นง่ายๆ ด้วยการ Catalog แค่ 10-20 Dataset ที่สำคัญที่สุดก่อน แล้วขยายออกไปเรื่อยๆ ดีกว่าพยายาม Catalog ทุกอย่างพร้อมกันแล้วไม่เสร็จสักที</div>'
    '<h3>Data Democratization</h3>'
    '<p>เป้าหมายสูงสุดของ Data Catalog คือ <strong>Data Democratization</strong> ซึ่งหมายถึงการทำให้ทุกคนในองค์กร ไม่ว่าจะเป็น Business User, Analyst, หรือ Executive สามารถเข้าถึงและเข้าใจข้อมูลได้ด้วยตนเองโดยไม่ต้องพึ่ง Data Engineer ตลอดเวลา Catalog ที่ดีทำให้ Self-service Analytics เป็นไปได้จริง เพราะ User มีบริบทที่เพียงพอในการเลือก Dataset ที่ถูกต้องและเชื่อถือได้</p>'
)

chapters.append({
    'number': 0,
    'slug': 'overview',
    'emoji': '📚',
    'title': 'Data Catalog คืออะไร และทำไม Org ใหญ่ถึงต้องการ',
    'content': ch0_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 1: concepts
# ══════════════════════════════════════════════════════════════
ch1_content = (
    '<h2>Metadata Deep Dive: ประเภทและ Lifecycle</h2>'
    '<p>Metadata คือ "ข้อมูลที่อธิบายข้อมูล" และเป็นหัวใจของ Data Catalog ทั้งหมด ความเข้าใจประเภทต่างๆ ของ Metadata และ Lifecycle จะช่วยให้ออกแบบ Catalog ที่ตอบโจทย์ผู้ใช้ทุกกลุ่ม</p>'
    '<h3>1. Technical Metadata</h3>'
    '<p>Technical Metadata คือข้อมูลทางเทคนิคที่ระบบสร้างและ Harvest โดยอัตโนมัติ ประกอบด้วย:</p>'
    '<p><strong>Schema Information:</strong> ชื่อ Table/Column, Data Type (VARCHAR, INTEGER, TIMESTAMP), Nullable หรือไม่, Primary Key, Foreign Key, Indexes, Partitioning Keys และ Clustering Keys สิ่งเหล่านี้ถูก Extract จาก Database Catalog (INFORMATION_SCHEMA) อัตโนมัติ</p>'
    '<p><strong>Statistics:</strong> จำนวน Row ทั้งหมด, ขนาดของ Table (MB/GB), Distribution ของค่าใน Column (Min, Max, Mean, Median, Percentiles), จำนวน Distinct Values, Null Percentage สถิติเหล่านี้ช่วยให้ Query Optimizer ทำงานได้ดีขึ้น และช่วยให้ User ประเมิน Data Quality เบื้องต้น</p>'
    '<p><strong>Schema Evolution History:</strong> ประวัติการเปลี่ยนแปลง Schema ว่า Column ไหนถูกเพิ่ม/ลบ/เปลี่ยนชื่อ/เปลี่ยน Type เมื่อไร การมีประวัตินี้ช่วยให้ Analyst เข้าใจว่าทำไม Query เก่าถึง Break และช่วยใน Impact Analysis</p>'
    '<h3>2. Business Metadata</h3>'
    '<p>Business Metadata คือคำอธิบายที่มนุษย์เขียนเพื่ออธิบายความหมายทางธุรกิจ ซึ่งต้องอาศัยความร่วมมือจาก Domain Experts:</p>'
    '<p><strong>Dataset/Column Descriptions:</strong> คำอธิบายว่า Table หรือ Column นี้คืออะไร ใช้สำหรับอะไร มีข้อควรระวังอะไร ตัวอย่างเช่น "revenue คือยอดขายสุทธิหลังหักส่วนลดทุกชนิดและค่าจัดส่ง แต่ก่อนหักภาษี VAT และ Withholding Tax คำนวณจากสูตร gross_amount - discount_amount - return_amount"</p>'
    '<p><strong>Business Terms / Glossary:</strong> นิยามคำศัพท์ธุรกิจที่ใช้ในองค์กร เช่น "Active User" หมายถึงผู้ใช้ที่ Login ภายใน 30 วันที่ผ่านมา Glossary Term นี้จะถูก Link ไปยัง Column หรือ Table ที่เกี่ยวข้องทั้งหมดใน Catalog</p>'
    '<p><strong>Usage Examples:</strong> ตัวอย่างการใช้งาน Dataset เช่น Query ตัวอย่างที่ดึงข้อมูล Sales รายวัน พร้อม Filter ที่ถูกต้อง สิ่งนี้ช่วยลด Learning Curve สำหรับผู้ใช้ใหม่อย่างมาก</p>'
    '<p><strong>Data Owners and Stewards:</strong> ระบุว่าใครคือ Business Owner (ทีมใด, ชื่อใคร) และ Data Steward (ผู้ดูแล Quality) ทำให้รู้ว่าต้องติดต่อใครเมื่อมีคำถาม</p>'
    '<h3>3. Operational Metadata</h3>'
    '<p>Operational Metadata คือข้อมูลที่บอกสถานะ "ณ ปัจจุบัน" ของข้อมูล:</p>'
    '<p><strong>Data Freshness:</strong> Last Updated Timestamp, Update Frequency (Hourly/Daily/Weekly), Freshness SLA (เช่น "ต้องอัพเดทภายใน 6 ชั่วโมงหลังเที่ยงคืน") และ SLA Breach Alert ถ้าข้อมูล Stale</p>'
    '<p><strong>Data Quality Score:</strong> คะแนนที่รวมหลายมิติเช่น Completeness (% ของ Non-null values), Uniqueness (% ที่ไม่ซ้ำใน Unique Key), Validity (% ที่ผ่าน Validation Rules), Timeliness (ข้อมูลสดพอไหม) สามารถ Integrate กับ Great Expectations หรือ dbt Tests</p>'
    '<p><strong>Usage Statistics:</strong> จำนวนครั้งที่ Table ถูก Query ใน 30 วัน, รายชื่อ User ที่ Query บ่อย, Dashboard และ Reports ที่ใช้ Table นี้ สถิติเหล่านี้ช่วยในการจัดลำดับความสำคัญ ว่า Table ไหนควรได้รับการดูแลมากที่สุด</p>'
    '<h3>Active Metadata Concept</h3>'
    '<p>แนวคิดใหม่ที่กำลังเป็นที่นิยมคือ <strong>Active Metadata</strong> ซึ่งหมายถึงการใช้ Metadata ไม่ใช่แค่เพื่อ Documentation แต่เพื่อ <em>Drive Action</em> อัตโนมัติ ตัวอย่างเช่น ถ้า Quality Score ต่ำกว่า Threshold → Auto-notify Data Owner, ถ้า Table ไม่ถูก Query เลยใน 90 วัน → Recommend สำหรับ Archive, ถ้า PII Column ถูก Export ออกไป → Trigger Security Alert</p>'
    '<h3>Metadata Quality Scoring</h3>'
    '<p>Catalog ที่ดีต้องมี Metadata Quality Score ด้วย ไม่ใช่แค่ Data Quality Score ตัวอย่าง Scoring Framework:<br/>'
    '- Has Description: 30 คะแนน<br/>'
    '- Has Owner: 20 คะแนน<br/>'
    '- Has Classification Tag (PII/Public/etc): 20 คะแนน<br/>'
    '- Has Column-level Descriptions (&gt;80%): 20 คะแนน<br/>'
    '- Has Usage Examples: 10 คะแนน<br/>'
    'Dataset ที่ได้คะแนนต่ำจะถูก Flag ว่า "Needs Attention" และ Steward จะได้รับ Notification สัปดาห์ละครั้ง</p>'
    '<h3>Metadata Harvesting Process</h3>'
    '<p>กระบวนการ Harvest Metadata เข้า Catalog มี 3 แบบหลัก: <strong>Push</strong> คือ Application หรือ Pipeline ส่ง Metadata มาเองเมื่อมีเหตุการณ์เกิดขึ้น (เหมาะกับ Real-time), <strong>Pull</strong> คือ Catalog ไปดึง Metadata จาก Source ตามตาราง Schedule (เหมาะกับ Batch), <strong>Event-driven</strong> คือ Subscribe กับ Event Stream เช่น Kafka เมื่อมี Schema Change (เหมาะกับ Near-realtime)</p>'
    '<h3>Schema Registry Overview</h3>'
    '<p>Schema Registry เช่น Confluent Schema Registry หรือ AWS Glue Schema Registry เป็นระบบที่จัดการ Schema สำหรับ Event Streaming ทำงานร่วมกับ Data Catalog ได้โดย Catalog ดึง Schema จาก Registry เพื่อแสดง Structure ของ Kafka Topics ให้ผู้ใช้เข้าใจโดยไม่ต้องรู้ Avro หรือ Protobuf สิ่งนี้ทำให้ Streaming Data มีความโปร่งใสไม่แพ้ Batch Data ใน Warehouse</p>'
    '<div class=\'tip-box\'><strong>💡</strong> เริ่ม Metadata Journey ด้วย Business Metadata ก่อน Technical Metadata จะได้มาเองจากการ Harvest อัตโนมัติ แต่ Business Metadata ต้องการการลงทุนจากคนในองค์กร การมี Business Metadata ที่ดีทำให้ Catalog มีคุณค่าจริงๆ สำหรับ User ทั่วไป</div>'
)

chapters.append({
    'number': 1,
    'slug': 'concepts',
    'emoji': '🧩',
    'title': 'Metadata: Technical, Business, และ Operational',
    'content': ch1_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 2: datahub
# ══════════════════════════════════════════════════════════════
ch2_content = (
    '<h2>DataHub: Open-source Data Catalog จาก LinkedIn</h2>'
    '<p>DataHub คือ Open-source Metadata Platform ที่ LinkedIn พัฒนาและ Open-source ในปี 2020 ปัจจุบันเป็นหนึ่งใน Data Catalog ที่ Feature-rich และ Active Community ที่สุดในโลก Open-source โดยมีผู้ใช้งานจากองค์กรชั้นนำอย่าง Airbnb, Slack, Saxo Bank, Coursera และอีกหลายร้อยองค์กร</p>'
    '<h3>Full Architecture</h3>'
    '<p><strong>GMS (Generalized Metadata Service)</strong> — Backend API Service ที่เป็น Core ของ DataHub รับผิดชอบ CRUD Operations สำหรับ Metadata ทั้งหมด เปิดเผย REST API และ GraphQL API ให้ Frontend และ External Systems เรียกใช้</p>'
    '<p><strong>Kafka</strong> — Message Queue สำหรับ Event Streaming เมื่อมี Metadata เปลี่ยนแปลง เช่น Dataset ใหม่ถูก Ingest หรือ Tag ถูก Apply จะมี Event ถูกส่งผ่าน Kafka ทำให้ Components อื่นๆ สามารถ React ได้แบบ Realtime</p>'
    '<p><strong>Elasticsearch</strong> — Search Engine ที่ Index Metadata ทั้งหมดเพื่อรองรับ Full-text Search รวมถึง Faceted Search และ Autocomplete ข้อมูล Metadata จาก GMS จะถูก Sync เข้า Elasticsearch อัตโนมัติผ่าน Kafka Events</p>'
    '<p><strong>MySQL / PostgreSQL</strong> — Persistent Storage สำหรับ Metadata ทั้งหมด DataHub ใช้ MySQL เป็น Default แต่รองรับ PostgreSQL ด้วย เก็บข้อมูลทุกอย่างตั้งแต่ Dataset Metadata ไปจนถึง User Profiles, Tags, Glossary Terms</p>'
    '<p><strong>React Frontend</strong> — UI ที่สร้างด้วย React.js ให้ประสบการณ์การใช้งานที่ดี รองรับ Search, Lineage Visualization, Governance Dashboard, และ Admin Panel</p>'
    '<h3>Docker Compose Quickstart</h3>'
    '<p>วิธีเร็วที่สุดในการรัน DataHub ในเครื่อง:</p>'
    '<p><code># Install DataHub CLI<br/>pip install acryl-datahub<br/><br/># Start DataHub with Docker Compose (ใช้เวลา 3-5 นาที)<br/>datahub docker quickstart<br/><br/># ตรวจสอบ Status<br/>datahub docker check<br/><br/># เปิด UI ที่ http://localhost:9002<br/># Default credentials: datahub / datahub</code></p>'
    '<h3>50+ Connectors ที่รองรับ</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Category</th><th>Connectors</th></tr><tr><td>Data Warehouses</td><td>BigQuery, Snowflake, Redshift, Synapse, Databricks, Teradata</td></tr><tr><td>Databases</td><td>PostgreSQL, MySQL, Oracle, SQL Server, MongoDB, Cassandra</td></tr><tr><td>Data Lakes</td><td>AWS S3 (Glue), Azure Data Lake, GCS, Delta Lake, Apache Iceberg</td></tr><tr><td>BI Tools</td><td>Looker, Tableau, Power BI, Metabase, Superset, Sigma</td></tr><tr><td>Orchestration</td><td>Airflow, Prefect, Dagster, dbt, Azure Data Factory</td></tr><tr><td>Messaging</td><td>Kafka (Confluent), AWS MSK, Azure Event Hubs</td></tr><tr><td>ML Platforms</td><td>MLflow, SageMaker, Vertex AI, Feast</td></tr><tr><td>Other</td><td>dbt, Great Expectations, Monte Carlo, DBT Cloud</td></tr></table></p>'
    '<h3>YAML Ingestion Config Examples</h3>'
    '<p><strong>BigQuery Ingestion:</strong></p>'
    '<p><code>source:\n  type: bigquery\n  config:\n    project_id: my-gcp-project\n    credentials_path: /path/to/service-account.json\n    include_tables: true\n    include_views: true\n    include_table_lineage: true\n    include_usage_statistics: true\nsink:\n  type: datahub-rest\n  config:\n    server: \'http://localhost:8080\'</code></p>'
    '<p><strong>PostgreSQL Ingestion:</strong></p>'
    '<p><code>source:\n  type: postgres\n  config:\n    host_port: localhost:5432\n    database: production_db\n    username: readonly_user\n    password: ${POSTGRES_PASSWORD}\n    include_tables: true\n    include_views: true\n    schema_pattern:\n      allow:\n        - public\n        - analytics\nsink:\n  type: datahub-rest\n  config:\n    server: \'http://localhost:8080\'</code></p>'
    '<p><strong>Snowflake Ingestion:</strong></p>'
    '<p><code>source:\n  type: snowflake\n  config:\n    account_id: myaccount.us-east-1\n    username: DATAHUB_USER\n    password: ${SNOWFLAKE_PASSWORD}\n    role: DATAHUB_ROLE\n    warehouse: DATAHUB_WH\n    database_pattern:\n      allow:\n        - PRODUCTION\n    include_table_lineage: true\n    include_column_lineage: true\nsink:\n  type: datahub-rest\n  config:\n    server: \'http://localhost:8080\'</code></p>'
    '<p><strong>dbt Ingestion:</strong></p>'
    '<p><code>source:\n  type: dbt\n  config:\n    manifest_path: /path/to/target/manifest.json\n    catalog_path: /path/to/target/catalog.json\n    target_platform: bigquery\n    include_column_lineage: true\nsink:\n  type: datahub-rest\n  config:\n    server: \'http://localhost:8080\'</code></p>'
    '<p><strong>Airflow Ingestion (via Plugin):</strong></p>'
    '<p><code># ติดตั้ง Plugin\npip install acryl-datahub-airflow-plugin\n\n# เพิ่มใน airflow.cfg\n[datahub]\nenabled = true\nconnection_id = datahub_rest_default\n\n# สร้าง Airflow Connection\ndatahub_rest_default:\n  type: http\n  host: localhost\n  port: 8080</code></p>'
    '<h3>Python SDK Examples</h3>'
    '<p><code>from datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.schema_classes import *\n\n# สร้าง Emitter\nemitter = DatahubRestEmitter(gms_server="http://localhost:8080")\n\n# สร้าง Dataset Metadata\ndataset_urn = "urn:li:dataset:(urn:li:dataPlatform:postgres,mydb.public.orders,PROD)"\n\n# Emit Description\nemitter.emit_mcp(\n    MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=DatasetPropertiesClass(\n            description="ตาราง Orders หลักของระบบ e-commerce",\n            customProperties={"team": "data-platform", "sla": "6h"}\n        )\n    )\n)</code></p>'
    '<h3>REST API Examples</h3>'
    '<p><code># ค้นหา Dataset\ncurl -X POST http://localhost:8080/entities?action=search \\\n  -H "Content-Type: application/json" \\\n  -d \'{"input":"orders","entity":"dataset","start":0,"count":10}\'\n\n# ดู Lineage\ncurl http://localhost:8080/lineage?urn=urn:li:dataset:(...) \\\n  &amp;direction=UPSTREAM&amp;count=10\n\n# Add Tag\ncurl -X POST http://localhost:8080/entities?action=batchAddTags \\\n  -H "Content-Type: application/json" \\\n  -d \'{"tagUrns":["urn:li:tag:PII"],"resources":[{"resourceUrn":"urn:li:dataset:(...)"}]}\'</code></p>'
    '<div class=\'tip-box\'><strong>💡</strong> ใช้ datahub check ingestion -c config.yml ก่อน Ingest จริงเพื่อ Validate Config และดูว่า Connector เชื่อมต่อ Source ได้สำเร็จหรือไม่ โดยไม่ต้อง Ingest จริง ประหยัดเวลา Debug มาก</div>'
    '<h3>Scheduling Ingestion</h3>'
    '<p>DataHub รองรับการตั้ง Schedule Ingestion ใน UI โดยไปที่ Ingestion &gt; Create Ingestion Source แล้วตั้ง Schedule เป็น Cron Expression เช่น 0 2 * * * สำหรับ Ingest ทุกวันตี 2 หรือจะ Integrate กับ Airflow DAG ก็ได้เช่น:</p>'
    '<p><code>from airflow.operators.bash import BashOperator\n\ningestion_task = BashOperator(\n    task_id="datahub_ingest_bigquery",\n    bash_command="datahub ingest -c /config/bigquery_ingestion.yml",\n    dag=dag\n)</code></p>'
)

chapters.append({
    'number': 2,
    'slug': 'datahub',
    'emoji': '🌐',
    'title': 'DataHub: Setup และ Ingestion',
    'content': ch2_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 3: dbt-catalog
# ══════════════════════════════════════════════════════════════
ch3_content = (
    '<h2>dbt Catalog: Documentation as Code</h2>'
    '<p>dbt (data build tool) มีความสามารถในการสร้าง Data Catalog อัตโนมัติจาก Code โดยใช้คำสั่ง <code>dbt docs generate</code> และ <code>dbt docs serve</code> ทำให้ทีมมี Self-updating Catalog ที่สะท้อนสถานะปัจจุบันของ Data Models เสมอ โดยไม่ต้อง Maintain เอกสารแยกต่างหาก</p>'
    '<h3>Complete schema.yml Example</h3>'
    '<p>ไฟล์ schema.yml เป็นหัวใจของ dbt Documentation การเขียน Description ที่ดีสำหรับทุก Column ทำให้ Catalog มีคุณค่ามหาศาล:</p>'
    '<p><code>version: 2\n\nmodels:\n  - name: fct_orders\n    description: &gt;\n      ตารางข้อเท็จจริงหลักของ Order ทุกรายการในระบบ e-commerce\n      อัพเดทด้วย dbt run ทุกชั่วโมง ใช้เป็น Source of Truth\n      สำหรับ Revenue และ Order Volume Metrics\n    meta:\n      owner: data-platform-team\n      tags: [finance, operations, core]\n    columns:\n      - name: order_id\n        description: Primary Key, UUID สร้างโดย application ตอน checkout\n        tests:\n          - unique\n          - not_null\n      - name: customer_id\n        description: &gt;\n          Foreign Key ไปยัง dim_customers ระบุ Customer ที่สั่งซื้อ\n          หากเป็น NULL หมายถึง Guest Checkout (ไม่ Login)\n        tests:\n          - not_null\n      - name: order_date\n        description: วันที่ Order ถูกสร้างใน Timezone Asia/Bangkok (UTC+7)\n        tests:\n          - not_null\n      - name: status\n        description: &gt;\n          สถานะ Order ปัจจุบัน ค่าที่เป็นไปได้: pending, confirmed,\n          processing, shipped, delivered, cancelled, refunded\n        tests:\n          - not_null\n          - accepted_values:\n              values: [pending, confirmed, processing, shipped,\n                       delivered, cancelled, refunded]\n      - name: gross_amount\n        description: ยอดรวมก่อนหักส่วนลดและก่อน VAT (หน่วย: บาท)\n        tests:\n          - not_null\n      - name: discount_amount\n        description: ยอดส่วนลดรวมทุกชนิด (Coupon, Loyalty Points, Promotion)\n      - name: net_amount\n        description: &gt;\n          ยอดสุทธิที่ลูกค้าจ่ายจริง = gross_amount - discount_amount\n          ยังไม่รวม VAT 7% ใช้เป็น Revenue Metric หลัก\n        tests:\n          - not_null\n      - name: vat_amount\n        description: VAT 7% คำนวณจาก net_amount\n      - name: total_amount\n        description: ยอดรวมสุดท้ายที่ลูกค้าชำระ = net_amount + vat_amount</code></p>'
    '<h3>Docs Blocks ใน .md Files</h3>'
    '<p>สำหรับ Description ที่ยาวและใช้ซ้ำในหลาย Model ให้ใช้ docs blocks:</p>'
    '<p><code># models/docs/finance_terms.md\n\n{% docs revenue_definition %}\n## Revenue Definition\nRevenue ในระบบนี้หมายถึง **Net Revenue** ซึ่งคำนวณดังนี้:\n- เริ่มจาก Gross Amount (ราคาขายรวม)\n- หัก Discount Amount (ส่วนลดทุกชนิด)\n- หัก Return Amount (ยอดคืนสินค้า)\n= **Net Revenue**\n\nหมายเหตุ: ยังไม่รวม VAT 7% และ Withholding Tax\nใช้ตัวเลขนี้สำหรับ P&amp;L Reporting ทุกประเภท\n{% enddocs %}\n\n{% docs active_user_definition %}\nActive User หมายถึงผู้ใช้ที่มี Session อย่างน้อย 1 ครั้งใน 30 วันที่ผ่านมา\nนับจาก event_timestamp ใน events table (Timezone: UTC)\n{% enddocs %}</code></p>'
    '<p>จากนั้นใน schema.yml ใช้:</p>'
    '<p><code>- name: net_revenue\n  description: "{{ doc(\'revenue_definition\') }}"</code></p>'
    '<h3>Sources Documentation</h3>'
    '<p>อย่าลืม Document Source Tables ด้วย ซึ่งเป็นข้อมูล Raw ที่ dbt ดึงมา:</p>'
    '<p><code>version: 2\n\nsources:\n  - name: ecommerce_raw\n    description: Raw data จาก Application Database (PostgreSQL) Replicated ผ่าน Debezium CDC\n    database: data_warehouse\n    schema: raw_ecommerce\n    freshness:\n      warn_after: {count: 1, period: hour}\n      error_after: {count: 6, period: hour}\n    loaded_at_field: _extracted_at\n    tables:\n      - name: orders\n        description: Raw orders table จาก Application DB อัพเดทแบบ CDC realtime\n        columns:\n          - name: id\n            description: Primary Key ของ Order\n            tests:\n              - unique\n              - not_null\n      - name: customers\n        description: Raw customers table ข้อมูล PII ต้องใช้อย่างระมัดระวัง\n        meta:\n          contains_pii: true\n          pii_columns: [email, phone, address, national_id]</code></p>'
    '<h3>Exposures: Document Downstream Consumers</h3>'
    '<p>Exposures บอก dbt ว่า Model ถูกนำไปใช้ที่ไหน ทำให้ Lineage สมบูรณ์:</p>'
    '<p><code>exposures:\n  - name: executive_revenue_dashboard\n    type: dashboard\n    maturity: high\n    url: https://looker.company.com/dashboards/12\n    description: &gt;\n      Dashboard หลักสำหรับ Executive Team แสดง Revenue\n      รายวัน/รายสัปดาห์/รายเดือน อัพเดททุกชั่วโมง\n    depends_on:\n      - ref(\'fct_orders\')\n      - ref(\'dim_customers\')\n    owner:\n      name: Analytics Team\n      email: analytics@company.com</code></p>'
    '<h3>dbt docs generate Output</h3>'
    '<p>คำสั่ง <code>dbt docs generate</code> สร้างไฟล์ 2 ไฟล์หลัก: <strong>manifest.json</strong> รวมข้อมูลทุกอย่างเกี่ยวกับ dbt Project: Models, Sources, Tests, Macros, Exposures, Lineage Graph ขนาดไฟล์อาจใหญ่ถึง 50MB+ ในโปรเจกต์ใหญ่ และ <strong>catalog.json</strong> รวม Schema Information จาก Database จริง (Column Names, Types, Stats) ที่ถูก Merge เข้ากับข้อมูลจาก schema.yml</p>'
    '<h3>Deployment Options</h3>'
    '<p><strong>Option 1: S3 + CloudFront (แนะนำสำหรับทีมที่ใช้ AWS)</strong></p>'
    '<p><code># Build docs\ndbt docs generate\n\n# Upload to S3\naws s3 sync ./target s3://my-dbt-docs-bucket/ --acl public-read\n\n# ตั้ง CloudFront Distribution ให้ชี้ไปที่ S3 Bucket</code></p>'
    '<p><strong>Option 2: GitHub Pages (ง่ายที่สุด สำหรับทีมเล็ก)</strong></p>'
    '<p><code># .github/workflows/dbt-docs.yml\njobs:\n  deploy-docs:\n    steps:\n      - run: dbt docs generate\n      - uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./target</code></p>'
    '<p><strong>Option 3: dbt Cloud (ง่ายที่สุดสำหรับ dbt Cloud Users)</strong></p>'
    '<p>dbt Cloud มี Docs Hosting ในตัว เพียง Enable "Generate docs on run" ใน Job Settings แล้ว dbt Cloud จะ Publish Docs อัตโนมัติทุกครั้งที่ Run Job</p>'
    '<h3>DataHub Integration</h3>'
    '<p>ส่ง dbt Catalog เข้า DataHub เพื่อรวม Lineage และ Governance:</p>'
    '<p><code>source:\n  type: dbt\n  config:\n    manifest_path: target/manifest.json\n    catalog_path: target/catalog.json\n    target_platform: snowflake\n    include_column_lineage: true\n    tag_prefix: "dbt:"\nsink:\n  type: datahub-rest\n  config:\n    server: http://datahub:8080</code></p>'
    '<div class=\'tip-box\'><strong>💡</strong> Best Practice: เขียน Description ใน schema.yml เหมือนกำลังอธิบายให้ Business User ที่ไม่รู้เรื่อง Database ฟัง อย่าเขียนแค่ "order_id: ID of the order" แต่ให้เขียนว่า "order_id: รหัสเฉพาะของ Order สร้างโดยระบบ ณ เวลา Checkout รูปแบบ UUID v4 ตัวอย่าง: 550e8400-e29b-41d4-a716-446655440000"</div>'
)

chapters.append({
    'number': 3,
    'slug': 'dbt-catalog',
    'emoji': '📖',
    'title': 'dbt Catalog: docs generate และ serve',
    'content': ch3_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 4: data-lineage
# ══════════════════════════════════════════════════════════════
ch4_content = (
    '<h2>Data Lineage: ติดตามเส้นทางข้อมูลทุกขั้นตอน</h2>'
    '<p>Data Lineage คือความสามารถในการติดตามว่าข้อมูล "เดินทาง" อย่างไรตั้งแต่ Source System ต้นทางไปจนถึง Dashboard หรือ ML Model ปลายทาง ผ่านทุก Transformation และ Pipeline ที่อยู่ระหว่างทาง Lineage ที่ดีทำให้ทีมสามารถทำ Impact Analysis, Root Cause Analysis และ Data Audit ได้รวดเร็วและแม่นยำ</p>'
    '<h3>Column-level Lineage Deep Dive</h3>'
    '<p>Table-level Lineage บอกว่า Table A ถูกใช้ใน Table B แต่ <strong>Column-level Lineage</strong> บอกได้ละเอียดกว่า เช่น revenue ใน fct_orders_daily มาจากการ SUM(net_amount) จาก fct_orders ซึ่ง net_amount = gross_amount - discount_amount จาก raw.orders Column-level Lineage มีประโยชน์อย่างยิ่งสำหรับ:</p>'
    '<p>- <strong>PII Audit:</strong> ตรวจสอบว่า Column ที่มีข้อมูลส่วนตัว (เช่น email) ถูกส่งต่อไปถึง Dashboard หรือ Report ใดบ้าง<br/>'
    '- <strong>Metric Accuracy:</strong> Trace ว่า Revenue ที่แสดงใน Dashboard คำนวณมาจากอะไรบ้าง ทำให้ Audit และ Validate ได้ง่าย<br/>'
    '- <strong>Schema Change Impact:</strong> ถ้าเปลี่ยน Data Type ของ Column ต้นทาง รู้ได้ทันทีว่า Downstream Columns ใดได้รับผลกระทบ</p>'
    '<h3>OpenLineage Standard</h3>'
    '<p>OpenLineage เป็น Open Standard สำหรับ Collecting Lineage Events จากหลาย Tools ทำให้สามารถ Aggregate Lineage ข้าม Platform ได้ในที่เดียว ตัวอย่าง OpenLineage Event Payload:</p>'
    '<p><code>{\n  "eventType": "START",\n  "eventTime": "2024-01-15T08:00:00Z",\n  "run": {"runId": "uuid-here"},\n  "job": {"namespace": "airflow", "name": "transform_orders"},\n  "inputs": [{"namespace": "bigquery", "name": "raw.orders"}],\n  "outputs": [{"namespace": "bigquery", "name": "analytics.fct_orders"}]\n}</code></p>'
    '<p>Tools ที่รองรับ OpenLineage แล้ว: Apache Airflow (ผ่าน openlineage-airflow), Apache Spark (ผ่าน openlineage-spark), dbt, Flink, Dagster, Prefect</p>'
    '<h3>Airflow Plugin Setup</h3>'
    '<p>ติดตั้ง OpenLineage Plugin สำหรับ Airflow:</p>'
    '<p><code># ติดตั้ง Package\npip install openlineage-airflow\n\n# airflow.cfg หรือ Environment Variables\nOPENLINEAGE_URL=http://datahub:8080/openapi/openlineage\nOPENLINEAGE_NAMESPACE=production\n\n# ไม่ต้องเปลี่ยน DAG Code เลย\n# Plugin จะ Auto-capture Input/Output ของ Operators\n# ที่รองรับ เช่น BigQueryOperator, SnowflakeOperator</code></p>'
    '<h3>Spark Lineage</h3>'
    '<p>สำหรับ Spark Jobs ติดตั้ง openlineage-spark เพื่อ Auto-capture Lineage:</p>'
    '<p><code>spark-submit \\\n  --conf spark.extraListeners=io.openlineage.spark.agent.OpenLineageSparkListener \\\n  --conf spark.openlineage.transport.type=http \\\n  --conf spark.openlineage.transport.url=http://datahub:8080 \\\n  --conf spark.openlineage.namespace=spark-production \\\n  my_spark_job.py\n\n# Spark จะส่ง Lineage ทุกครั้งที่อ่าน/เขียน Dataset\n# รองรับ Hive, Delta Lake, Iceberg, JDBC</code></p>'
    '<h3>dbt manifest.json Parsing for Lineage</h3>'
    '<p>dbt เก็บ Lineage ทั้งหมดไว้ใน manifest.json ตัวอย่างการ Parse:</p>'
    '<p><code>import json\n\nwith open("target/manifest.json") as f:\n    manifest = json.load(f)\n\n# ดู Lineage ของ fct_orders\nmodel_id = "model.my_project.fct_orders"\nnode = manifest["nodes"][model_id]\n\n# Upstream dependencies\nprint("Depends on:", node["depends_on"]["nodes"])\n# Output: [\'model.my_project.stg_orders\', \'ref.dim_customers\']\n\n# Column-level Lineage (ถ้ามี)\nfor col_name, col_info in node["columns"].items():\n    print(f"{col_name}: {col_info}")</code></p>'
    '<h3>DataHub Lineage UI Walkthrough</h3>'
    '<p>ใน DataHub UI คลิกที่ Dataset แล้วไปแท็บ "Lineage" จะเห็น:</p>'
    '<p>- <strong>Upstream tab:</strong> แสดง Tables และ Transformations ที่เป็นต้นทางข้อมูล<br/>'
    '- <strong>Downstream tab:</strong> แสดง Tables, Dashboards, และ ML Models ที่ใช้ข้อมูลนี้<br/>'
    '- <strong>Column lineage toggle:</strong> Switch เป็น Column-level View เพื่อดูว่าแต่ละ Column มาจากไหน<br/>'
    '- <strong>Time-based lineage:</strong> ดูว่า Lineage เปลี่ยนแปลงอย่างไรตาม Version ของ Pipeline</p>'
    '<h3>Cross-platform Lineage Examples</h3>'
    '<p>ตัวอย่าง End-to-end Lineage ข้ามหลาย Platform:</p>'
    '<p>PostgreSQL (raw orders) → Kafka (CDC Stream) → Spark Job (cleansing) → Delta Lake (cleaned_orders) → dbt (fct_orders) → BigQuery (analytics.fct_orders) → Looker (Revenue Dashboard)</p>'
    '<p>DataHub สามารถแสดง Lineage ข้ามทุก Platform เหล่านี้ได้ในหน้าเดียว ทำให้เห็นภาพรวมได้ทันที</p>'
    '<h3>Impact Analysis Workflow</h3>'
    '<p>เมื่อต้องการเปลี่ยน Schema ของ Table ต้นทาง ทำตาม Workflow นี้:</p>'
    '<p>1. เปิด DataHub และค้นหา Table ที่จะเปลี่ยน<br/>'
    '2. ไปแท็บ Lineage → Downstream เพื่อดูว่ากระทบอะไรบ้าง<br/>'
    '3. Export รายการ Downstream ทั้งหมด<br/>'
    '4. ติดต่อ Owner ของแต่ละ Downstream Dataset<br/>'
    '5. วางแผน Migration และ Deprecation Timeline<br/>'
    '6. ทำการเปลี่ยนแปลงพร้อม Notify ทุก Stakeholder</p>'
    '<h3>Lineage API Query Examples</h3>'
    '<p><code># GraphQL Query สำหรับ Lineage\nquery GetLineage {\n  dataset(urn: "urn:li:dataset:(...)") {\n    upstream {\n      relationships {\n        type\n        entity {\n          ... on Dataset {\n            name\n            platform { name }\n          }\n        }\n      }\n    }\n    downstream {\n      relationships {\n        type\n        entity {\n          ... on Dataset { name }\n          ... on Dashboard { title }\n        }\n      }\n    }\n  }\n}</code></p>'
    '<div class=\'tip-box\'><strong>💡</strong> เริ่มเก็บ Lineage จาก dbt ก่อนเพราะง่ายที่สุด แค่รัน dbt ingestion เข้า DataHub จะได้ Lineage ของ dbt Models ทั้งหมดฟรี จากนั้นค่อยๆ เพิ่ม Airflow Lineage และ Spark Lineage ทีละขั้น</div>'
)

chapters.append({
    'number': 4,
    'slug': 'data-lineage',
    'emoji': '🔗',
    'title': 'Data Lineage: ตามเส้นทางจาก Source ถึง Dashboard',
    'content': ch4_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 5: governance
# ══════════════════════════════════════════════════════════════
ch5_content = (
    '<h2>Data Governance ผ่าน Catalog</h2>'
    '<p>Data Governance คือชุดของ Policy, Process และ Responsibility ที่กำหนดว่าข้อมูลขององค์กรจะถูกจัดการ ดูแล และใช้งานอย่างไร Data Catalog คือ Operational Hub ของ Governance เพราะเป็นจุดที่ Metadata ทั้งหมดอยู่รวมกัน</p>'
    '<h3>DAMA-DMBOK Framework Overview</h3>'
    '<p>DAMA-DMBOK (Data Management Body of Knowledge) คือ Framework มาตรฐานสากลสำหรับ Data Governance ประกอบด้วย 11 Knowledge Areas:</p>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Knowledge Area</th><th>คำอธิบาย</th><th>Catalog Role</th></tr><tr><td>Data Governance</td><td>Policy, Roles, Responsibilities</td><td>Owner/Steward Assignment</td></tr><tr><td>Data Architecture</td><td>Data Models, Standards</td><td>Schema Documentation</td></tr><tr><td>Data Modeling</td><td>Logical/Physical Data Models</td><td>Table/Column Metadata</td></tr><tr><td>Data Storage</td><td>Storage Platforms, Management</td><td>Platform Tracking</td></tr><tr><td>Data Security</td><td>Access Control, Encryption</td><td>Classification, Access Policy</td></tr><tr><td>Data Integration</td><td>ETL/ELT, API</td><td>Lineage, Pipeline Metadata</td></tr><tr><td>Document Management</td><td>Unstructured Data</td><td>Extended Catalog</td></tr><tr><td>Reference Data</td><td>Code Tables, Lookups</td><td>Reference Dataset Catalog</td></tr><tr><td>Master Data</td><td>Customer, Product MDM</td><td>Golden Record Tracking</td></tr><tr><td>Data Warehousing</td><td>DW, BI Reporting</td><td>DW Table Documentation</td></tr><tr><td>Metadata Management</td><td>Metadata Strategy</td><td>Core Catalog Function</td></tr><tr><td>Data Quality</td><td>Quality Rules, Monitoring</td><td>Quality Score Display</td></tr></table></p>'
    '<h3>Governance Committee Structure</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Role</th><th>ตำแหน่ง</th><th>ความรับผิดชอบ</th><th>Meeting Frequency</th></tr><tr><td>Chief Data Officer (CDO)</td><td>Executive Sponsor</td><td>Strategy, Budget, Final Decisions</td><td>Monthly</td></tr><tr><td>Data Governance Council</td><td>VP/Director Level</td><td>Policy Approval, Dispute Resolution</td><td>Bi-weekly</td></tr><tr><td>Data Domain Owner</td><td>Manager/Lead</td><td>Domain Policy, Owner Accountability</td><td>Weekly</td></tr><tr><td>Data Steward</td><td>Senior Analyst/DE</td><td>Daily Catalog Maintenance, Quality</td><td>Daily</td></tr><tr><td>Data Custodian</td><td>Data Engineer/DBA</td><td>Technical Implementation, Access</td><td>As needed</td></tr></table></p>'
    '<h3>PDPA Compliance Checklist</h3>'
    '<p>พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA) กำหนดให้องค์กรต้องดำเนินการดังนี้ ซึ่ง Data Catalog ช่วยได้มาก:</p>'
    '<p>☑ <strong>Inventory PII Data:</strong> ระบุว่า Column ใดมีข้อมูลส่วนบุคคล → ใช้ Auto-classification ใน DataHub<br/>'
    '☑ <strong>Document Data Purpose:</strong> บันทึกว่าเก็บ PII นั้นเพื่ออะไร → เพิ่มใน Dataset Description<br/>'
    '☑ <strong>Track Data Retention:</strong> กำหนด Retention Period สำหรับแต่ละ PII Dataset → Retention Policy ใน Catalog<br/>'
    '☑ <strong>Monitor Access:</strong> รู้ว่าใครเข้าถึง PII บ้าง → Usage Statistics ใน Catalog<br/>'
    '☑ <strong>Right to Erasure:</strong> เมื่อลูกค้าขอลบข้อมูล ต้องรู้ว่าต้องลบที่ไหนบ้าง → Lineage ใน Catalog<br/>'
    '☑ <strong>Data Breach Response:</strong> เมื่อมี Breach ต้องรู้ทันทีว่าข้อมูลอะไรถูก Expose → Classification ใน Catalog<br/>'
    '☑ <strong>DPIA Documentation:</strong> บันทึก Data Protection Impact Assessment → Custom Metadata Fields</p>'
    '<h3>GDPR Rights Implementation</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>GDPR Right</th><th>วิธี Implement ด้วย Catalog</th></tr><tr><td>Right to Access</td><td>Export Dataset list ที่มี PII ของลูกค้าคนนั้น ผ่าน Catalog API</td></tr><tr><td>Right to Rectification</td><td>ใช้ Lineage หาทุก System ที่ต้องแก้ไขข้อมูล</td></tr><tr><td>Right to Erasure</td><td>ใช้ Lineage หาทุก Table/Column ที่เก็บข้อมูลลูกค้าคนนั้น</td></tr><tr><td>Right to Portability</td><td>Export Metadata เพื่อระบุว่าข้อมูลอยู่ที่ไหน รูปแบบอะไร</td></tr><tr><td>Right to Object</td><td>Tag Dataset ว่ากำลังอยู่ระหว่าง Processing Objection</td></tr></table></p>'
    '<h3>Data Classification Framework</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Level</th><th>คำอธิบาย</th><th>ตัวอย่าง</th><th>Access Control</th></tr><tr><td>🟢 Public</td><td>เปิดเผยได้ทั่วไป</td><td>ราคาสินค้า, ข้อมูลบนเว็บ</td><td>Everyone</td></tr><tr><td>🔵 Internal</td><td>ใช้ภายในองค์กร</td><td>รายงานประจำเดือน, KPI Dashboard</td><td>All Employees</td></tr><tr><td>🟡 Confidential</td><td>เฉพาะทีมที่เกี่ยวข้อง</td><td>ยอดขาย, กลยุทธ์, HR Data</td><td>Team + Approval</td></tr><tr><td>🔴 Restricted</td><td>ละเอียดอ่อนสูงสุด</td><td>PII ลูกค้า, บัตรเครดิต, รหัสผ่าน</td><td>Specific Roles Only</td></tr></table></p>'
    '<h3>Governance KPIs Table</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>KPI</th><th>เป้าหมาย</th><th>วิธีวัด</th></tr><tr><td>% Datasets with Owner</td><td>&gt;90%</td><td>Catalog API Query</td></tr><tr><td>% Datasets with Description</td><td>&gt;80%</td><td>Catalog API Query</td></tr><tr><td>% PII Columns Classified</td><td>100%</td><td>Auto-classification Report</td></tr><tr><td>Metadata Quality Score (avg)</td><td>&gt;75/100</td><td>Weighted Score ตาม Framework</td></tr><tr><td>Stale Metadata (&gt;30 days)</td><td>&lt;5%</td><td>Last Updated Timestamp</td></tr><tr><td>Access Review Completion</td><td>100% quarterly</td><td>Access Control Audit Log</td></tr></table></p>'
    '<h3>Governance Maturity Model 5 Levels</h3>'
    '<p><strong>Level 1 - Initial:</strong> ไม่มี Formal Process, Data ถูกจัดการแบบ Ad-hoc, ไม่มีใครรับผิดชอบชัดเจน<br/>'
    '<strong>Level 2 - Managed:</strong> มี Basic Policies, มี Data Owner แต่ยังไม่ครบทุก Dataset, มี Data Dictionary บาง Table<br/>'
    '<strong>Level 3 - Defined:</strong> มี Formal Governance Framework, Catalog ครอบคลุม &gt;70% ของ Key Datasets, มี Regular Review Process<br/>'
    '<strong>Level 4 - Quantitatively Managed:</strong> วัด Governance KPIs ได้, มี Automation ช่วย Enforce Policies, Compliance &gt;90%<br/>'
    '<strong>Level 5 - Optimizing:</strong> Continuous Improvement, AI/ML ช่วย Auto-classify และ Auto-remediate, Data Governance เป็น Culture</p>'
    '<h3>Common Failures and Fixes</h3>'
    '<p><strong>Failure: "Nobody updates the Catalog"</strong> → Fix: ทำ Automated Metadata Harvesting ให้ Technical Metadata Update อัตโนมัติ และสร้าง Incentive สำหรับ Business Metadata เช่น Gamification หรือ OKR</p>'
    '<p><strong>Failure: "Too many Tags, nobody knows which to use"</strong> → Fix: สร้าง Controlled Vocabulary สำหรับ Tags กำหนดว่า Tag ไหนใช้เมื่อไร และมี Tag Governance Process</p>'
    '<p><strong>Failure: "Governance คือ Bureaucracy"</strong> → Fix: เน้น Self-service และ Automation ลด Manual Approval Steps ให้เหลือเฉพาะ High-risk Actions</p>'
    '<div class=\'tip-box\'><strong>💡</strong> Data Governance ที่ดีต้องทำให้ "ถูกต้อง" เป็นเรื่องง่ายกว่า "ไม่ถูกต้อง" ถ้า Governance Process ยุ่งยากมาก คนจะหา Workaround แทน</div>'
)

chapters.append({
    'number': 5,
    'slug': 'governance',
    'emoji': '⚖️',
    'title': 'Data Governance: Policy, Owner, และ Steward',
    'content': ch5_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 6: discovery
# ══════════════════════════════════════════════════════════════
ch6_content = (
    '<h2>Data Discovery: ค้นหาข้อมูลในองค์กร</h2>'
    '<p>Data Discovery คือกระบวนการที่ผู้ใช้งานค้นหาข้อมูลที่ต้องการภายในองค์กร เป้าหมายคือทำให้ง่ายเหมือน Google Search — ค้นหาด้วยภาษาธรรมชาติ ได้ผลลัพธ์ที่เกี่ยวข้องมากที่สุดก่อน พร้อม Context ที่เพียงพอในการตัดสินใจเลือกใช้ข้อมูล</p>'
    '<h3>Search Architecture ของ DataHub</h3>'
    '<p>DataHub ใช้ Elasticsearch เป็น Search Engine โดยมี Architecture ดังนี้:</p>'
    '<p>- <strong>Indexing Pipeline:</strong> เมื่อมี Metadata ใหม่หรืออัพเดท จะถูกส่งผ่าน Kafka ไปยัง Elasticsearch Indexer ซึ่งสร้าง/อัพเดท Document ใน Index<br/>'
    '- <strong>Search Query Processing:</strong> Query ของผู้ใช้ถูกแปลงเป็น Elasticsearch Query ที่ค้นหาข้ามหลาย Fields พร้อมกัน<br/>'
    '- <strong>Relevance Scoring:</strong> ผลลัพธ์ถูก Rank ตาม Text Match Score + Popularity Score + Freshness Score + Completeness Score<br/>'
    '- <strong>Faceted Filtering:</strong> ผลลัพธ์ถูก Group และ Filter ได้ตาม Platform, Type, Domain, Owner, Tag, Quality Score</p>'
    '<h3>DataHub Search Syntax: 10+ Examples</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Query</th><th>ความหมาย</th></tr><tr><td>orders</td><td>ค้นหาทุก Entity ที่มีคำว่า "orders"</td></tr><tr><td>platform:bigquery orders</td><td>ค้นหาใน BigQuery เท่านั้น</td></tr><tr><td>owner:john.doe@company.com</td><td>ค้นหา Dataset ที่ John เป็น Owner</td></tr><tr><td>tag:PII platform:snowflake</td><td>หา PII Tables ใน Snowflake</td></tr><tr><td>domain:finance revenue</td><td>หา Revenue Data ใน Finance Domain</td></tr><tr><td>type:dashboard sales</td><td>หา Dashboard เกี่ยวกับ Sales</td></tr><tr><td>platform:dbt status:active</td><td>หา dbt Models ที่ Active อยู่</td></tr><tr><td>tag:Confidential -platform:redshift</td><td>หา Confidential Data ยกเว้นใน Redshift</td></tr><tr><td>name:fct_*</td><td>หา Tables ที่ชื่อขึ้นต้นด้วย fct_</td></tr><tr><td>description:"net revenue" platform:bigquery</td><td>หา Description ที่มีคำว่า "net revenue"</td></tr><tr><td>hasOwner:false domain:marketing</td><td>หา Marketing Datasets ที่ยังไม่มี Owner</td></tr><tr><td>hasDescription:false type:dataset</td><td>หา Datasets ที่ยังไม่มี Description</td></tr></table></p>'
    '<h3>Recommendation Engine</h3>'
    '<p>DataHub มี Recommendation Engine ที่แนะนำ Datasets โดยอิงจาก:</p>'
    '<p>- <strong>Collaborative Filtering:</strong> "User ที่ดู Dataset นี้ยังดู..." (คล้าย Netflix)<br/>'
    '- <strong>Content-based:</strong> Dataset ที่คล้ายกันตาม Tags, Domain, Schema<br/>'
    '- <strong>Usage-based:</strong> Dataset ยอดนิยมใน Domain เดียวกัน<br/>'
    '- <strong>Recency:</strong> Dataset ที่เพิ่งถูกอัพเดทหรือสร้างใหม่</p>'
    '<h3>Social Features ใน DataHub</h3>'
    '<p>Social Features ช่วยสร้าง Data Culture และ Trust:</p>'
    '<p>- <strong>Likes/Upvotes:</strong> ผู้ใช้ Vote Dataset ที่มีประโยชน์เพื่อช่วย Rank<br/>'
    '- <strong>Comments:</strong> เพิ่ม Context เพิ่มเติม เช่น "ระวัง: Column นี้มี Null เยอะในช่วง 2022-01 เพราะมีการ Migrate System"<br/>'
    '- <strong>Slack Integration:</strong> Notify ทีมเมื่อ Dataset ที่ Follow ถูกอัพเดท<br/>'
    '- <strong>Endorsement:</strong> Data Expert Endorse Dataset ว่าน่าเชื่อถือ เพิ่ม Trust Signal</p>'
    '<h3>Data Observability Integration</h3>'
    '<p>เชื่อม Data Catalog กับ Data Observability Tools เพื่อแสดง Quality Status ใน Catalog:</p>'
    '<p><code># Great Expectations Integration\nfrom datahub.integrations.great_expectations import DataHubValidationAction\n\n# เพิ่มใน Great Expectations Checkpoint\naction_list:\n  - name: datahub_action\n    action:\n      class_name: DataHubValidationAction\n      module_name: datahub.integrations.great_expectations\n      server_url: http://datahub:8080\n\n# ผล Validation จะถูก Sync เข้า DataHub อัตโนมัติ\n# และแสดงใน Dataset Page ว่า Quality Status เป็นอะไร</code></p>'
    '<h3>Curation Workflow</h3>'
    '<p>Curation คือกระบวนการที่ Data Steward ดูแลคุณภาพของ Catalog สม่ำเสมอ ประกอบด้วย:</p>'
    '<p>1. <strong>Weekly Review:</strong> ดู Datasets ที่เพิ่งถูก Ingest ใหม่ ตรวจว่า Metadata ครบถ้วนไหม<br/>'
    '2. <strong>Search Analytics Review:</strong> ดู Queries ที่ไม่พบผลลัพธ์ แล้วเพิ่ม Keywords หรือ Description ที่เกี่ยวข้อง<br/>'
    '3. <strong>Stale Dataset Cleanup:</strong> Flag Datasets ที่ไม่ถูกใช้นาน 90 วัน ให้ Owner Review<br/>'
    '4. <strong>Owner Assignment:</strong> ติดตาม Datasets ที่ยังไม่มี Owner และ Assign ให้ครบ</p>'
    '<h3>Featured / Verified Datasets</h3>'
    '<p>ใน DataHub สามารถ Mark Dataset ว่าเป็น <strong>Verified</strong> (ผ่านการตรวจสอบโดย Data Steward) หรือ <strong>Featured</strong> (แนะนำสำหรับ Use Case ทั่วไป) ทำให้ User ใหม่รู้ว่าควรเริ่มจาก Dataset ไหน สร้าง Confidence ในการใช้ข้อมูล</p>'
    '<h3>Search Ranking Factors</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Factor</th><th>น้ำหนัก</th><th>คำอธิบาย</th></tr><tr><td>Text Match Score</td><td>40%</td><td>ความตรงกับ Query ใน Name, Description, Tags</td></tr><tr><td>Popularity Score</td><td>25%</td><td>จำนวนครั้งที่ถูก View, Query, Liked</td></tr><tr><td>Completeness Score</td><td>20%</td><td>มี Description, Owner, Tags ครบแค่ไหน</td></tr><tr><td>Freshness Score</td><td>10%</td><td>อัพเดทล่าสุดเมื่อไร</td></tr><tr><td>Verified Boost</td><td>5%</td><td>ถ้า Verified จะได้ Boost พิเศษ</td></tr></table></p>'
    '<h3>Search Analytics</h3>'
    '<p>Track Search Analytics เพื่อปรับปรุง Catalog อย่างต่อเนื่อง:</p>'
    '<p>- <strong>Zero-result Queries:</strong> Queries ที่ไม่พบผลลัพธ์ → ต้องเพิ่ม Synonyms หรือ Missing Datasets<br/>'
    '- <strong>Click-through Rate:</strong> ผลลัพธ์ไหนที่ User คลิกบ่อยสุด → ใช้ปรับ Ranking<br/>'
    '- <strong>Search-to-success Rate:</strong> % ของ Searches ที่นำไปสู่การใช้งาน Dataset จริง</p>'
    '<div class=\'tip-box\'><strong>💡</strong> เพิ่ม Synonyms สำหรับ Business Terms ที่ใช้หลายแบบ เช่น "revenue", "sales", "income" ควร Map ไปที่ Dataset เดียวกัน เพื่อให้ User ค้นด้วยคำไหนก็เจอ</div>'
)

chapters.append({
    'number': 6,
    'slug': 'discovery',
    'emoji': '🔎',
    'title': 'Data Discovery: ค้นหาข้อมูลในองค์กร',
    'content': ch6_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 7: classification
# ══════════════════════════════════════════════════════════════
ch7_content = (
    '<h2>Data Classification: PII, Sensitive, และ Public</h2>'
    '<p>Data Classification คือกระบวนการจัดหมวดหมู่ข้อมูลตามระดับความละเอียดอ่อนและข้อกำหนดในการป้องกัน เป็นพื้นฐานของ Data Governance และ Compliance กับกฎหมาย PDPA และ GDPR</p>'
    '<h3>Full PII Taxonomy Table</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>PII Category</th><th>ตัวอย่าง Column Names</th><th>ตัวอย่างข้อมูล</th><th>PDPA Article</th><th>Risk Level</th></tr><tr><td>ชื่อ-นามสกุล</td><td>first_name, last_name, full_name</td><td>สมชาย ใจดี</td><td>มาตรา 6</td><td>🟡 Medium</td></tr><tr><td>เลขประจำตัว</td><td>national_id, citizen_id, ssn</td><td>1-2345-67890-12-3</td><td>มาตรา 26</td><td>🔴 High</td></tr><tr><td>ที่อยู่</td><td>address, street, zip_code</td><td>123 ถนนสุขุมวิท</td><td>มาตรา 6</td><td>🟡 Medium</td></tr><tr><td>โทรศัพท์</td><td>phone, mobile, tel</td><td>081-234-5678</td><td>มาตรา 6</td><td>🟡 Medium</td></tr><tr><td>อีเมล</td><td>email, email_address</td><td>user@example.com</td><td>มาตรา 6</td><td>🟡 Medium</td></tr><tr><td>ข้อมูลสุขภาพ</td><td>diagnosis, health_condition, disease</td><td>เบาหวาน</td><td>มาตรา 26 (Sensitive)</td><td>🔴 Very High</td></tr><tr><td>ข้อมูลการเงิน</td><td>bank_account, credit_card, salary</td><td>เลขบัญชี 123-4-56789-0</td><td>มาตรา 26</td><td>🔴 Very High</td></tr><tr><td>ข้อมูลชีวมิติ</td><td>fingerprint_hash, face_encoding</td><td>Hash ของลายนิ้วมือ</td><td>มาตรา 26 (Sensitive)</td><td>🔴 Very High</td></tr><tr><td>Location Data</td><td>latitude, longitude, gps_coordinates</td><td>13.7563, 100.5018</td><td>มาตรา 6</td><td>🟡 Medium</td></tr><tr><td>IP Address</td><td>ip_address, client_ip</td><td>192.168.1.100</td><td>มาตรา 6</td><td>🟢 Low-Medium</td></tr><tr><td>Device ID</td><td>device_id, advertising_id, imei</td><td>AEBE52E7-03EE-455A-B3C4</td><td>มาตรา 6</td><td>🟢 Low-Medium</td></tr></table></p>'
    '<h3>Automated Detection</h3>'
    '<p><strong>Regex Pattern Detection:</strong></p>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>PII Type</th><th>Regex Pattern</th><th>Example Match</th></tr><tr><td>Thai National ID</td><td>^[0-9]{13}$</td><td>1234567890123</td></tr><tr><td>Email</td><td>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}</td><td>user@email.com</td></tr><tr><td>Thai Phone</td><td>^(0[689][0-9]{8})$</td><td>0812345678</td></tr><tr><td>Credit Card (Luhn)</td><td>^[0-9]{13,19}$</td><td>4111111111111111</td></tr><tr><td>IP Address v4</td><td>^([0-9]{1,3}\.){3}[0-9]{1,3}$</td><td>192.168.1.1</td></tr><tr><td>Thai Bank Account</td><td>^[0-9]{3}-[0-9]-[0-9]{5}-[0-9]$</td><td>123-4-56789-0</td></tr></table></p>'
    '<p><strong>NER (Named Entity Recognition):</strong> ใช้ SpaCy หรือ Pythainlp สำหรับ Thai Language เพื่อ Detect ชื่อ, สถานที่, องค์กร ใน Text Columns อัตโนมัติ เหมาะสำหรับ Unstructured Data เช่น Customer Comments หรือ Support Tickets</p>'
    '<p><strong>ML-based Classification:</strong> Train Model โดยใช้ Column Names, Sample Values และ Statistics เป็น Features ทำให้ Detect PII ได้แม้ Column ชื่อไม่ชัดเจน เช่น Column ชื่อ "col_a" แต่ค่าใน Column ตรงกับ Email Pattern</p>'
    '<h3>PDPA Article Mapping to Catalog Features</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>PDPA Article</th><th>ข้อกำหนด</th><th>Catalog Feature</th></tr><tr><td>มาตรา 6</td><td>ข้อมูลส่วนบุคคล</td><td>PII Classification Tag</td></tr><tr><td>มาตรา 26</td><td>ข้อมูลอ่อนไหว (Sensitive PII)</td><td>Sensitive Tag + Restricted Access</td></tr><tr><td>มาตรา 21</td><td>การเก็บรวบรวมต้องมีวัตถุประสงค์</td><td>Purpose Field ใน Dataset Metadata</td></tr><tr><td>มาตรา 37</td><td>ผู้ควบคุมต้องมีมาตรการความปลอดภัย</td><td>Access Control Policy ใน Catalog</td></tr><tr><td>มาตรา 33</td><td>สิทธิในการลบข้อมูล</td><td>Lineage สำหรับหา Table ที่ต้องลบ</td></tr><tr><td>มาตรา 30</td><td>บันทึกกิจกรรมการประมวลผล</td><td>Usage Audit Log ใน Catalog</td></tr></table></p>'
    '<h3>Data Masking Strategies Comparison</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Strategy</th><th>วิธีการ</th><th>ข้อดี</th><th>ข้อเสีย</th><th>Use Case</th></tr><tr><td>Masking</td><td>แทนค่าด้วย * หรือ XXXX</td><td>ง่าย, รวดเร็ว</td><td>ไม่สามารถ Join กับ Real Data ได้</td><td>Display ใน UI</td></tr><tr><td>Pseudonymization</td><td>แทนด้วย Token ที่ Map กับของจริง</td><td>Re-identifiable เมื่อต้องการ</td><td>ต้องดูแล Mapping Table</td><td>Testing, Analytics</td></tr><tr><td>Anonymization</td><td>ลบ PII ออกถาวร ไม่สามารถ Re-identify</td><td>PDPA/GDPR Safe สูงสุด</td><td>ไม่สามารถ Restore ได้</td><td>Public Datasets</td></tr><tr><td>Tokenization</td><td>แทนด้วย Random Token ผ่าน Vault</td><td>Secure สูง, Reversible</td><td>ต้องมี Token Vault Service</td><td>Payment Data</td></tr><tr><td>Generalization</td><td>ทำให้ข้อมูลกว้างขึ้น เช่น อายุ 25 → 20-30</td><td>ยังมีประโยชน์สำหรับ Analytics</td><td>สูญเสีย Precision</td><td>Statistical Analysis</td></tr></table></p>'
    '<h3>Right to Erasure Implementation Steps</h3>'
    '<p>เมื่อลูกค้าขอใช้สิทธิ์ "ลบข้อมูล" (Right to Erasure / Right to be Forgotten):</p>'
    '<p>1. ระบุ customer_id หรือ identifier ของลูกค้าคนนั้น<br/>'
    '2. Query DataHub API หาทุก Dataset ที่มี Tag ว่า "contains_customer_pii"<br/>'
    '3. ใช้ Column-level Lineage หาทุก Column ที่มี customer_id หรือ PII ที่เชื่อมกัน<br/>'
    '4. สร้าง Deletion Job ที่ลบหรือ Anonymize ข้อมูลในทุก Table<br/>'
    '5. บันทึก Audit Log ว่าได้ดำเนินการลบที่ Table ใดบ้าง เมื่อใด<br/>'
    '6. Update Catalog เพื่อบันทึกว่า Erasure Request ได้รับการดำเนินการแล้ว</p>'
    '<h3>Sensitivity Label Comparison Table</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Label</th><th>Microsoft Purview</th><th>DataHub Tag</th><th>ตัวอย่างข้อมูล</th></tr><tr><td>Non-Business</td><td>Non-Business</td><td>public</td><td>ข้อมูลทั่วไปบนเว็บ</td></tr><tr><td>General</td><td>General</td><td>internal</td><td>รายงานภายในทั่วไป</td></tr><tr><td>Confidential</td><td>Confidential</td><td>confidential</td><td>ยอดขาย, งบประมาณ</td></tr><tr><td>Highly Confidential</td><td>Highly Confidential</td><td>restricted</td><td>PII, รหัสผ่าน, Key</td></tr></table></p>'
    '<div class=\'tip-box\'><strong>💡</strong> เริ่ม Auto-classification ด้วย Column Name Matching ก่อน (เร็วและแม่นยำ ~80%) จากนั้นค่อยเพิ่ม Value Sampling สำหรับ Column ที่ Name ไม่ชัดเจน อย่าพยายาม Build ML Model ตั้งแต่แรกถ้ายังไม่มี Labeled Training Data</div>'
)

chapters.append({
    'number': 7,
    'slug': 'classification',
    'emoji': '🏷️',
    'title': 'Data Classification: PII, Sensitive, และ Public',
    'content': ch7_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 8: tools
# ══════════════════════════════════════════════════════════════
ch8_content = (
    '<h2>เปรียบเทียบ Tools: Data Catalog ตัวไหนดีที่สุด?</h2>'
    '<p>ตลาด Data Catalog มีตัวเลือกมากมาย ทั้ง Open-source และ Commercial แต่ละตัวมีจุดเด่นและจุดด้อยต่างกัน การเลือกที่เหมาะสมขึ้นอยู่กับ Tech Stack, Team Size, Budget และ Compliance Requirements ของแต่ละองค์กร</p>'
    '<h3>Full Feature Comparison Matrix</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%">'
    '<tr><th>Feature</th><th>DataHub</th><th>Apache Atlas</th><th>Dataplex</th><th>Alation</th><th>Collibra</th><th>Atlan</th></tr>'
    '<tr><td>License</td><td>Open-source (Apache 2)</td><td>Open-source (Apache 2)</td><td>Commercial (GCP)</td><td>Commercial</td><td>Commercial</td><td>Commercial (Freemium)</td></tr>'
    '<tr><td>Deployment</td><td>On-prem / Cloud</td><td>On-prem</td><td>GCP Only</td><td>Cloud / On-prem</td><td>Cloud / On-prem</td><td>Cloud (SaaS)</td></tr>'
    '<tr><td>Setup Complexity</td><td>🟡 Medium-High</td><td>🔴 High</td><td>🟢 Low</td><td>🟢 Low</td><td>🟢 Low</td><td>🟢 Low</td></tr>'
    '<tr><td>Data Lineage</td><td>✅ Column-level</td><td>✅ Table-level</td><td>✅ Table-level</td><td>✅ Column-level</td><td>✅ Column-level</td><td>✅ Column-level</td></tr>'
    '<tr><td>Search Quality</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>'
    '<tr><td>Business Glossary</td><td>✅</td><td>✅</td><td>⚠️ Basic</td><td>✅</td><td>✅ Advanced</td><td>✅</td></tr>'
    '<tr><td>Auto-classification</td><td>✅ (DataHub Cloud)</td><td>⚠️ Limited</td><td>✅</td><td>✅ AI-powered</td><td>✅</td><td>✅ AI-powered</td></tr>'
    '<tr><td>dbt Integration</td><td>✅ Native</td><td>❌</td><td>⚠️ Limited</td><td>✅</td><td>✅</td><td>✅ Native</td></tr>'
    '<tr><td>Airflow Integration</td><td>✅ Native Plugin</td><td>✅</td><td>⚠️ Limited</td><td>✅</td><td>✅</td><td>✅</td></tr>'
    '<tr><td>REST API</td><td>✅ Full</td><td>✅ Full</td><td>✅ Full</td><td>✅ Full</td><td>✅ Full</td><td>✅ Full</td></tr>'
    '<tr><td>GraphQL API</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>✅</td></tr>'
    '<tr><td>Governance Features</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>'
    '<tr><td>Connectors Count</td><td>50+</td><td>15+</td><td>10+ (GCP focus)</td><td>50+</td><td>70+</td><td>100+</td></tr>'
    '<tr><td>AI/ML Features</td><td>⚠️ Limited</td><td>❌</td><td>⚠️ Basic</td><td>✅ Advanced</td><td>✅</td><td>✅ Advanced</td></tr>'
    '<tr><td>Community Size</td><td>🔴 Large (8k+ GitHub stars)</td><td>🟡 Medium (declining)</td><td>N/A (Google)</td><td>N/A (Commercial)</td><td>N/A (Commercial)</td><td>🟢 Growing</td></tr>'
    '<tr><td>Price</td><td>Free (Self-hosted) / $$ (Cloud)</td><td>Free (Self-hosted)</td><td>Pay-per-use</td><td>$$$</td><td>$$$$</td><td>$ (Freemium)</td></tr>'
    '<tr><td>Thai Language Support</td><td>✅ UTF-8</td><td>✅ UTF-8</td><td>✅ UTF-8</td><td>✅ UTF-8</td><td>✅ UTF-8</td><td>✅ UTF-8</td></tr>'
    '<tr><td>Slack Integration</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>'
    '</table></p>'
    '<h3>TCO Analysis (Total Cost of Ownership)</h3>'
    '<p>ต้นทุนแท้จริงในการใช้งานแต่ละ Tool (สำหรับทีม 50 คน, 3 ปี):</p>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Tool</th><th>License Cost</th><th>Infrastructure</th><th>Implementation</th><th>Maintenance</th><th>Total 3Y</th></tr><tr><td>DataHub (Self-hosted)</td><td>$0</td><td>~$500/mo</td><td>$30,000 (1-time)</td><td>0.5 FTE/yr</td><td>~$120,000</td></tr><tr><td>DataHub Cloud</td><td>$2,000/mo</td><td>Included</td><td>$10,000</td><td>0.1 FTE/yr</td><td>~$90,000</td></tr><tr><td>Dataplex</td><td>Pay-per-use ~$1,000/mo</td><td>Included (GCP)</td><td>$5,000</td><td>0.2 FTE/yr</td><td>~$60,000</td></tr><tr><td>Alation</td><td>~$5,000/mo</td><td>Included</td><td>$20,000</td><td>0.2 FTE/yr</td><td>~$230,000</td></tr><tr><td>Collibra</td><td>~$8,000/mo</td><td>Included</td><td>$50,000</td><td>0.3 FTE/yr</td><td>~$390,000</td></tr><tr><td>Atlan</td><td>~$2,000/mo</td><td>Included</td><td>$10,000</td><td>0.1 FTE/yr</td><td>~$100,000</td></tr></table></p>'
    '<h3>Community Activity Metrics</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Tool</th><th>GitHub Stars</th><th>Contributors</th><th>Releases/Year</th><th>Slack Members</th><th>Trend</th></tr><tr><td>DataHub</td><td>9,000+</td><td>500+</td><td>12+</td><td>5,000+</td><td>📈 Growing</td></tr><tr><td>Apache Atlas</td><td>1,700+</td><td>100+</td><td>2-3</td><td>N/A</td><td>📉 Declining</td></tr><tr><td>OpenMetadata</td><td>5,000+</td><td>200+</td><td>12+</td><td>3,000+</td><td>📈 Fast Growing</td></tr><tr><td>Amundsen</td><td>4,000+</td><td>150+</td><td>4-6</td><td>2,000+</td><td>→ Stable</td></tr><tr><td>Atlan</td><td>N/A</td><td>N/A</td><td>N/A</td><td>2,000+</td><td>📈 Growing</td></tr></table></p>'
    '<h3>Decision Framework by Organization Size</h3>'
    '<p><strong>Startup / Small Team (&lt; 20 คน):</strong><br/>'
    '→ เริ่มจาก dbt Docs (ฟรี, ง่าย, Integrate กับ dbt ที่มีอยู่แล้ว) หรือ Atlan Free Tier (มี UI สวย, ติดตั้งง่าย, ไม่ต้องดูแล Infrastructure)</p>'
    '<p><strong>Mid-size Company (20-200 คน):</strong><br/>'
    '→ DataHub Self-hosted ถ้ามี DevOps Team แข็งแกร่ง หรือ Atlan / DataHub Cloud ถ้าต้องการ Managed Service</p>'
    '<p><strong>Enterprise (&gt; 200 คน, Compliance-heavy):</strong><br/>'
    '→ Collibra ถ้า Governance เป็น Priority สูงสุด, DataHub Cloud ถ้าต้องการ Open-source แต่ Managed, Alation ถ้า User Experience และ AI Features สำคัญที่สุด</p>'
    '<p><strong>All-in GCP:</strong><br/>'
    '→ Google Dataplex เป็น Native Choice ง่ายที่สุด แต่ Lock-in กับ GCP</p>'
    '<h3>Migration Considerations</h3>'
    '<p>ถ้าต้องการ Migrate จาก Tool หนึ่งไปอีก Tool: Export Metadata ผ่าน API, Map Tags และ Classifications ให้ตรงกัน, Migrate Business Glossary ก่อน (มีคุณค่าสูงสุด), Lineage มักต้อง Re-capture จาก Source เพราะ Format ต่างกัน, วางแผน Parallel Run 1-3 เดือนก่อน Cutover</p>'
    '<div class=\'tip-box\'><strong>💡</strong> อย่าเลือก Tool จาก Feature List เพียงอย่างเดียว ให้ทำ Proof of Concept (POC) 2-4 สัปดาห์กับ Tool 2-3 ตัวโดยใช้ Real Data จริงในองค์กร แล้วให้ทีม Analyst และ Data Engineer ทดลองใช้จริงๆ ความ Fit กับ Culture ของทีมสำคัญไม่แพ้ Feature</div>'
)

chapters.append({
    'number': 8,
    'slug': 'tools',
    'emoji': '🛠️',
    'title': 'เปรียบเทียบ Tools: DataHub vs Atlas vs Google Catalog',
    'content': ch8_content,
})

# ══════════════════════════════════════════════════════════════
# CHAPTER 9: implementation
# ══════════════════════════════════════════════════════════════
ch9_content = (
    '<h2>Implementation Guide: สร้าง Data Catalog จากศูนย์</h2>'
    '<p>การ Implement Data Catalog ที่ประสบความสำเร็จต้องการ People + Process + Platform ทำงานร่วมกัน ไม่ใช่แค่ติดตั้ง Tool แล้วจบ บทนี้จะให้ Roadmap ละเอียดสำหรับ Implement Catalog ใน 4 Phases</p>'
    '<h3>4-Phase Roadmap</h3>'
    '<h4>Phase 1: Foundation (เดือนที่ 1-2)</h4>'
    '<p><strong>เป้าหมาย:</strong> ระบบ Catalog ทำงานได้พื้นฐาน และ Ingest Metadata จาก Priority Sources แล้ว</p>'
    '<p><strong>Tasks:</strong><br/>'
    '- สัปดาห์ 1-2: เลือก Tool (DataHub หรืออื่นๆ) และทำ POC ขนาดเล็ก<br/>'
    '- สัปดาห์ 2-3: ติดตั้ง DataHub ด้วย Docker Compose และ Configure<br/>'
    '- สัปดาห์ 3-4: Setup Ingestion Pipeline สำหรับ Data Warehouse หลัก (Snowflake/BigQuery/Redshift)<br/>'
    '- สัปดาห์ 5-6: Setup dbt Ingestion เพื่อได้ Lineage จาก dbt Models<br/>'
    '- สัปดาห์ 7-8: กำหนด Domain Structure และ Assign Owner เบื้องต้น</p>'
    '<p><strong>Milestone:</strong> มี Catalog ที่ดู Metadata ของ 100+ Tables ได้ และมี Lineage จาก dbt</p>'
    '<h4>Phase 2: Content (เดือนที่ 3-5)</h4>'
    '<p><strong>เป้าหมาย:</strong> Catalog มี Business Metadata ที่ครบถ้วนสำหรับ Priority Datasets</p>'
    '<p><strong>Tasks:</strong><br/>'
    '- จัด Data Cataloging Workshop กับ Domain Experts (Finance, Marketing, Product) อย่างน้อย 2 Workshop<br/>'
    '- เขียน Description สำหรับ Top 50 Most Used Tables<br/>'
    '- สร้าง Business Glossary สำหรับ Core KPIs: Revenue, Active User, Conversion Rate<br/>'
    '- Run Auto-classification เพื่อ Tag PII Columns ทั้งหมด Review และ Confirm<br/>'
    '- Setup Airflow Ingestion เพื่อได้ Pipeline Lineage<br/>'
    '- สร้าง Data Quality Integration กับ Great Expectations หรือ dbt Tests</p>'
    '<p><strong>Milestone:</strong> Top 50 Tables มี Description ครบ, PII ทั้งหมดถูก Tagged</p>'
    '<h4>Phase 3: Adoption (เดือนที่ 6-9)</h4>'
    '<p><strong>เป้าหมาย:</strong> ทีม Analyst ใช้ Catalog เป็น First Stop ก่อน Query ข้อมูล</p>'
    '<p><strong>Tasks:</strong><br/>'
    '- จัด Training Session สำหรับ Data Analyst (2-3 ชั่วโมง + Hands-on)<br/>'
    '- เพิ่ม Catalog Link เข้า Slack Channel #data-help เพื่อลด Q&A<br/>'
    '- ทำ Internal Marketing: Newsletter, Show-and-tell, Success Stories<br/>'
    '- ตั้ง Catalog Usage Dashboard เพื่อ Track Adoption Metrics<br/>'
    '- สร้าง "Catalog Champion" Program ให้ Power Users ช่วย Spread Adoption<br/>'
    '- Gamification: Leaderboard ของทีมที่ Contribute Metadata มากที่สุด</p>'
    '<p><strong>Milestone:</strong> Catalog DAU &gt; 30% ของ Data Team</p>'
    '<h4>Phase 4: Mature (เดือนที่ 10+)</h4>'
    '<p><strong>เป้าหมาย:</strong> Catalog เป็น "สถานที่แรก" ที่ทุกคนไปหาข้อมูล</p>'
    '<p><strong>Tasks:</strong><br/>'
    '- Auto-tagging ด้วย ML สำหรับ Column ที่ยังไม่ได้ Classify<br/>'
    '- Integrate กับ Data Observability Tool (Monte Carlo, Bigeye)<br/>'
    '- ขยาย Ingestion ให้ครอบคลุม 100% ของ Data Sources<br/>'
    '- สร้าง Governance Automation: Alert เมื่อ Dataset ไม่มี Owner &gt; 30 วัน<br/>'
    '- Integrate กับ Data Access Management Tool<br/>'
    '- Measure ROI อย่างเป็นทางการ</p>'
    '<p><strong>Milestone:</strong> Catalog Adoption &gt; 80% ของ Data Users, 90%+ Datasets มี Owner</p>'
    '<h3>Stakeholder Map</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Stakeholder</th><th>บทบาท</th><th>Pain Point</th><th>วิธี Engage</th></tr><tr><td>CDO / VP Data</td><td>Executive Sponsor</td><td>ROI, Compliance Risk</td><td>Show ROI Numbers, Risk Reduction</td></tr><tr><td>Data Engineer</td><td>Catalog Builder</td><td>เพิ่ม Workload ไม่มีเวลา</td><td>Automation Tools, ลด Manual Work</td></tr><tr><td>Data Analyst</td><td>Power User</td><td>หา Table ไม่เจอ, ไม่รู้จะใช้อะไร</td><td>Demo Search Feature, Quick Win Stories</td></tr><tr><td>Business User</td><td>Casual User</td><td>ไม่เข้าใจ Technical Terms</td><td>Business-friendly UI, Glossary</td></tr><tr><td>Legal / Compliance</td><td>Governance Champion</td><td>PDPA Risk, Audit Prep</td><td>PII Classification, Audit Report Feature</td></tr><tr><td>IT Security</td><td>Access Control Owner</td><td>Who has access to what</td><td>Access Audit Log, Classification</td></tr></table></p>'
    '<h3>Budget Estimation Table</h3>'
    '<p><table border="1" style="border-collapse:collapse;width:100%"><tr><th>Item</th><th>Small (10 DE)</th><th>Medium (30 DE)</th><th>Enterprise (100+ DE)</th></tr><tr><td>Tool License</td><td>$0 (DataHub OSS)</td><td>$2,000/mo (Cloud)</td><td>$5,000+/mo</td></tr><tr><td>Infrastructure</td><td>$200/mo</td><td>$500/mo</td><td>$2,000/mo</td></tr><tr><td>Implementation Labor</td><td>$15,000</td><td>$30,000</td><td>$100,000+</td></tr><tr><td>Training</td><td>$2,000</td><td>$5,000</td><td>$20,000</td></tr><tr><td>Ongoing Maintenance (FTE)</td><td>0.2 FTE</td><td>0.5 FTE</td><td>2+ FTE</td></tr></table></p>'
    '<h3>Training Plan</h3>'
    '<p><strong>Data Engineers (4 ชั่วโมง):</strong> DataHub Architecture, Ingestion YAML Config, Python SDK, REST API, Troubleshooting Common Issues</p>'
    '<p><strong>Data Analysts (2 ชั่วโมง):</strong> Search Syntax, Understanding Lineage, Reading Quality Score, Adding Business Metadata, Using Glossary</p>'
    '<p><strong>Business Users (1 ชั่วโมง):</strong> Basic Search, Reading Dataset Profiles, Requesting Access, Following Datasets, Leaving Comments</p>'
    '<h3>10 Common Pitfalls and Solutions</h3>'
    '<p><strong>1. Pitfall: "Big Bang" Approach</strong> → พยายาม Catalog ทุกอย่างพร้อมกัน → <em>Solution: Crawl-Walk-Run เริ่มจาก Top 10% ของ Datasets ที่สำคัญที่สุด</em></p>'
    '<p><strong>2. Pitfall: เน้น Technical Metadata อย่างเดียว</strong> → Schema ครบแต่ไม่มี Description ที่ Business User เข้าใจ → <em>Solution: Invest ใน Workshop กับ Domain Experts</em></p>'
    '<p><strong>3. Pitfall: ไม่มี Executive Sponsorship</strong> → Catalog กลายเป็น Side Project ที่ไม่มีใคร Prioritize → <em>Solution: สร้าง Business Case และ ROI Projection ก่อนเริ่ม</em></p>'
    '<p><strong>4. Pitfall: Metadata Stale ทันที</strong> → Ingest ครั้งเดียวแล้วไม่ Update → <em>Solution: ตั้ง Auto-ingestion Schedule และ Monitor Staleness</em></p>'
    '<p><strong>5. Pitfall: "Ghost Town" Catalog</strong> → ไม่มี User มาใช้ → <em>Solution: เพิ่ม Catalog Link ทุก Data Communication Channel</em></p>'
    '<p><strong>6. Pitfall: Tags ไม่มี Standard</strong> → ทุกคน Tag ตามใจตัวเอง → <em>Solution: สร้าง Tag Governance Policy และ Controlled Vocabulary</em></p>'
    '<p><strong>7. Pitfall: Overcomplicate Governance</strong> → Process ยุ่งยากมาก ทำให้คนหนีไปใช้ Workaround → <em>Solution: Start Simple ปรับ Process ทีหลัง</em></p>'
    '<p><strong>8. Pitfall: ไม่ Measure Adoption</strong> → ไม่รู้ว่า Catalog ถูกใช้จริงไหม → <em>Solution: ตั้ง Adoption Dashboard ตั้งแต่วันแรก</em></p>'
    '<p><strong>9. Pitfall: Forget Business Users</strong> → Build Catalog สำหรับ Engineer แต่ไม่ตอบโจทย์ Analyst และ Business → <em>Solution: Include Business User ในทุก Design Decision</em></p>'
    '<p><strong>10. Pitfall: One-time Project</strong> → คิดว่า Catalog เสร็จแล้วก็จบ → <em>Solution: Catalog คือ Living System ต้องมี Dedicated Team ดูแลต่อเนื่อง</em></p>'
    '<h3>Go-live Checklist</h3>'
    '<p>☑ Catalog ถูก Deploy และ Accessible สำหรับทุกคนในทีม<br/>'
    '☑ Ingestion Pipeline รันสม่ำเสมอตาม Schedule<br/>'
    '☑ Top 50 Tables มี Description, Owner และ Tags<br/>'
    '☑ PII Columns ทั้งหมดถูก Classify<br/>'
    '☑ Business Glossary มี Core KPIs อย่างน้อย 10 Terms<br/>'
    '☑ Training จัดให้ทีม Analyst และ DE เสร็จแล้ว<br/>'
    '☑ Catalog Link ถูกเพิ่มใน Slack #data และ Confluence<br/>'
    '☑ Monitoring Dashboard สำหรับ Ingestion Failures ทำงาน<br/>'
    '☑ Adoption Tracking Dashboard พร้อมแล้ว<br/>'
    '☑ Feedback Channel สำหรับ User (เช่น #catalog-feedback) ถูกตั้งขึ้น</p>'
    '<div class=\'tip-box\'><strong>💡</strong> ความสำเร็จของ Catalog วัดจากการ "เปลี่ยน Behavior" ของทีม ไม่ใช่จำนวน Features ที่ Implement ถ้า Analyst ยังส่งอีเมลถาม DE อยู่แทนที่จะค้นใน Catalog แสดงว่ายังไม่ Success ไม่ว่า Catalog จะสวยงามแค่ไหน</div>'
)

chapters.append({
    'number': 9,
    'slug': 'implementation',
    'emoji': '🚀',
    'title': 'สร้าง Data Catalog ให้ทีม: Implementation Guide',
    'content': ch9_content,
})

# ─────────────────────────────────────────────────────────────
# GENERATE JS FILE
# ─────────────────────────────────────────────────────────────

def escape_for_js(text):
    """Escape text for single-quoted JS string."""
    # Escape backslashes first
    text = text.replace('\\', '\\\\')
    # Escape single quotes
    text = text.replace("'", "\\'")
    # Replace actual newlines with literal \n
    text = text.replace('\n', '\\n')
    return text

lines = ['export const chapters = [']

for ch in chapters:
    content_escaped = escape_for_js(ch['content'])
    line = (
        f"  {{ number: {ch['number']}, "
        f"slug: '{ch['slug']}', "
        f"emoji: '{ch['emoji']}', "
        f"title: '{q(ch['title'])}', "
        f"content: '{content_escaped}' }}"
    )
    if ch['number'] < len(chapters) - 1:
        line += ','
    lines.append(line)

lines.append('];')
lines.append('')

output = '\n'.join(lines)

# Write output
with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    f.write(output)

size = os.path.getsize(OUTPUT_PATH)
print(f"✅ Generated: {OUTPUT_PATH}")
print(f"📏 File size: {size:,} bytes ({size/1024:.1f} KB)")
print(f"📚 Chapters: {len(chapters)}")
for ch in chapters:
    ch_size = len(ch['content'].encode('utf-8'))
    print(f"  Ch{ch['number']} ({ch['slug']}): {ch_size:,} chars content")

if size >= 60 * 1024:
    print(f"\n🎉 SUCCESS: File is {size/1024:.1f}KB (target: 60KB+)")
else:
    print(f"\n⚠️  WARNING: File is only {size/1024:.1f}KB (target: 60KB+)")
