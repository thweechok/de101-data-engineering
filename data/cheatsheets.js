export const cheatsheets = {
  0: {
    title: 'สรุปย่อ: DE คืออะไร',
    items: [
      { label: 'Data Engineer (DE)', desc: 'คนที่ออกแบบและสร้างระบบท่อส่งข้อมูล (Pipeline) ให้พร้อมใช้งาน' },
      { label: 'Data Analyst (DA)', desc: 'คนที่วิเคราะห์ข้อมูลและสร้าง Dashboard เพื่อตอบคำถามทางธุรกิจ' },
      { label: 'Data Scientist (DS)', desc: 'คนที่สร้างโมเดล Machine Learning เพื่อทำนายผลลัพธ์' },
      { label: 'Data Pipeline', desc: 'กระบวนการดึง แปลง และโหลดข้อมูลจากต้นทางไปปลายทางแบบอัตโนมัติ' },
      { label: 'Data Warehouse', desc: 'คลังข้อมูลขนาดใหญ่ที่รวมข้อมูลจากหลายแหล่งเพื่อการวิเคราะห์' },
      { label: 'Data Lake', desc: 'ที่เก็บข้อมูลดิบทุกรูปแบบ (structured/unstructured) ในที่เดียว' },
      { label: 'Batch vs Streaming', desc: 'Batch ประมวลผลเป็นรอบ, Streaming ประมวลผลแบบเรียลไทม์' },
    ]
  },
  1: {
    title: 'สรุปย่อ: พื้นฐานคอมพิวเตอร์',
    items: [
      { label: 'CPU (Processor)', desc: 'สมองของคอมพิวเตอร์ ทำหน้าที่ประมวลผลคำสั่งทั้งหมด' },
      { label: 'RAM (Memory)', desc: 'หน่วยความจำชั่วคราว ยิ่งมากยิ่งเปิดโปรแกรมได้เยอะ' },
      { label: 'Disk (Storage)', desc: 'ที่เก็บข้อมูลถาวร เช่น SSD (เร็ว) หรือ HDD (ถูก)' },
      { label: 'OS (Operating System)', desc: 'ระบบปฏิบัติการ เช่น Windows, macOS, Linux' },
      { label: 'Cloud Computing', desc: 'การใช้ทรัพยากรคอมพิวเตอร์ผ่านอินเทอร์เน็ต เช่น AWS, GCP, Azure' },
      { label: 'Server vs Client', desc: 'Server ให้บริการ, Client คือผู้ใช้ที่ส่งคำร้องขอ' },
      { label: 'CLI vs GUI', desc: 'CLI พิมพ์คำสั่ง, GUI คลิกเมาส์ — DE ใช้ CLI เป็นหลัก' },
    ]
  },
  2: {
    title: 'สรุปย่อ: Git & Terminal',
    items: [
      { label: 'git init', desc: 'สร้าง Git repository ใหม่ในโฟลเดอร์ปัจจุบัน' },
      { label: 'git add .', desc: 'เพิ่มไฟล์ทั้งหมดเข้า staging area เตรียม commit' },
      { label: 'git commit -m "msg"', desc: 'บันทึกการเปลี่ยนแปลงพร้อมข้อความอธิบาย' },
      { label: 'git push origin main', desc: 'ส่งโค้ดขึ้น remote repository (เช่น GitHub)' },
      { label: 'git pull', desc: 'ดึงโค้ดล่าสุดจาก remote มารวมกับ local' },
      { label: 'git branch feature-x', desc: 'สร้าง branch ใหม่เพื่อแยกพัฒนาฟีเจอร์' },
      { label: 'git checkout feature-x', desc: 'สลับไปทำงานบน branch ที่ต้องการ' },
      { label: 'git merge feature-x', desc: 'รวมโค้ดจาก branch อื่นเข้า branch ปัจจุบัน' },
    ]
  },
  3: {
    title: 'สรุปย่อ: Python พื้นฐาน',
    items: [
      { label: 'int, float, str, bool', desc: 'ชนิดข้อมูลพื้นฐาน: จำนวนเต็ม, ทศนิยม, ข้อความ, จริง/เท็จ' },
      { label: 'list = [1, 2, 3]', desc: 'ลิสต์เก็บข้อมูลหลายตัวเรียงลำดับ แก้ไขได้' },
      { label: 'dict = {"key": "val"}', desc: 'ดิกชันนารีเก็บข้อมูลแบบ key-value เข้าถึงด้วย key' },
      { label: 'set = {1, 2, 3}', desc: 'เซ็ตเก็บข้อมูลไม่ซ้ำ ไม่มีลำดับ' },
      { label: 'for item in list:', desc: 'วนลูปทำซ้ำทุกสมาชิกในลิสต์หรือ iterable' },
      { label: 'def func(x): return x', desc: 'สร้างฟังก์ชันเพื่อใช้โค้ดซ้ำได้' },
      { label: 'f"Hello {name}"', desc: 'f-string แทรกตัวแปรลงในข้อความได้สะดวก' },
      { label: 'try: ... except: ...', desc: 'ดักจับ error เพื่อไม่ให้โปรแกรมหยุดทำงาน' },
    ]
  },
  4: {
    title: 'สรุปย่อ: SQL',
    items: [
      { label: 'SELECT col FROM tbl', desc: 'เลือกคอลัมน์ที่ต้องการจากตาราง' },
      { label: 'WHERE condition', desc: 'กรองข้อมูลตามเงื่อนไขที่กำหนด' },
      { label: 'JOIN tbl2 ON key', desc: 'รวมข้อมูลจาก 2 ตารางโดยใช้คีย์ที่ตรงกัน' },
      { label: 'GROUP BY col', desc: 'จัดกลุ่มข้อมูลเพื่อใช้กับ aggregate function เช่น COUNT, SUM' },
      { label: 'HAVING condition', desc: 'กรองผลลัพธ์หลัง GROUP BY (WHERE ใช้ก่อน GROUP)' },
      { label: 'ORDER BY col DESC', desc: 'เรียงลำดับผลลัพธ์ ASC=น้อยไปมาก, DESC=มากไปน้อย' },
      { label: 'Subquery / CTE', desc: 'เขียน query ซ้อนใน query หรือใช้ WITH เพื่อให้อ่านง่าย' },
    ]
  },
  5: {
    title: 'สรุปย่อ: API & Pipeline',
    items: [
      { label: 'requests.get(url)', desc: 'ส่ง HTTP GET request ไปดึงข้อมูลจาก API' },
      { label: 'response.json()', desc: 'แปลง response เป็น Python dict/list (JSON format)' },
      { label: 'API Endpoint', desc: 'URL ที่เปิดให้เข้าถึงข้อมูล เช่น /api/v1/users' },
      { label: 'Headers & API Key', desc: 'ส่ง header เพื่อยืนยันตัวตนหรือระบุรูปแบบข้อมูล' },
      { label: 'Pagination', desc: 'การดึงข้อมูลทีละหน้า (?page=1&limit=100) เมื่อข้อมูลมีเยอะ' },
      { label: 'Status Code 200/400/500', desc: '200=สำเร็จ, 400=request ผิด, 500=server มีปัญหา' },
      { label: 'Rate Limiting', desc: 'ข้อจำกัดจำนวน request ต่อนาที ต้องใส่ sleep() รอ' },
    ]
  },
  6: {
    title: 'สรุปย่อ: Data Modeling',
    items: [
      { label: 'Star Schema', desc: 'โมเดลที่มี Fact table ตรงกลาง ล้อมรอบด้วย Dimension tables' },
      { label: 'Fact Table', desc: 'ตารางเก็บข้อมูลตัวเลข/เหตุการณ์ เช่น ยอดขาย, จำนวนคลิก' },
      { label: 'Dimension Table', desc: 'ตารางเก็บรายละเอียดอธิบาย เช่น ลูกค้า, สินค้า, เวลา' },
      { label: 'Normalization (1NF-3NF)', desc: 'ลดความซ้ำซ้อนของข้อมูลโดยแยกตาราง ลด redundancy' },
      { label: 'Denormalization', desc: 'รวมตารางกลับเพื่อให้ query เร็วขึ้น ใช้ใน Data Warehouse' },
      { label: 'SCD Type 1 & 2', desc: 'Type 1 เขียนทับข้อมูลเก่า, Type 2 เก็บประวัติทุกเวอร์ชัน' },
      { label: 'Surrogate Key', desc: 'คีย์ที่สร้างขึ้นมา (auto-increment) ไม่ผูกกับข้อมูลจริง' },
    ]
  },
  7: {
    title: 'สรุปย่อ: ETL & ELT',
    items: [
      { label: 'ETL (Extract-Transform-Load)', desc: 'แปลงข้อมูลก่อนโหลด เหมาะกับ on-premise' },
      { label: 'ELT (Extract-Load-Transform)', desc: 'โหลดก่อนแล้วแปลงใน warehouse เหมาะกับ cloud' },
      { label: 'Extract Sources', desc: 'ดึงข้อมูลจาก DB, API, CSV, logs, streaming' },
      { label: 'Transform: Clean', desc: 'ล้างข้อมูล เช่น ลบ null, แก้ format วันที่, ลบ duplicate' },
      { label: 'Transform: Enrich', desc: 'เพิ่มข้อมูล เช่น join ตาราง, คำนวณคอลัมน์ใหม่' },
      { label: 'Load: Full vs Incremental', desc: 'Full โหลดทั้งหมดใหม่, Incremental โหลดเฉพาะข้อมูลใหม่' },
      { label: 'Idempotent Pipeline', desc: 'รัน pipeline ซ้ำกี่ครั้งก็ได้ผลลัพธ์เหมือนเดิม' },
    ]
  },
  8: {
    title: 'สรุปย่อ: BigQuery',
    items: [
      { label: 'CREATE TABLE dataset.tbl', desc: 'สร้างตารางใหม่ใน BigQuery dataset' },
      { label: 'SELECT * FROM `project.dataset.tbl`', desc: 'ดึงข้อมูลโดยใช้ fully qualified table name' },
      { label: 'PARTITION BY DATE(col)', desc: 'แบ่งตารางตามวันที่ ช่วยลดค่าใช้จ่ายในการ scan' },
      { label: 'CLUSTER BY col1, col2', desc: 'จัดเรียงข้อมูลในแต่ละ partition เพื่อ query เร็วขึ้น' },
      { label: 'UNNEST(array_col)', desc: 'กระจาย array/struct ออกเป็นแถว เพื่อ query ข้อมูลซ้อน' },
      { label: 'SELECT *, ROW_NUMBER() OVER()', desc: 'ใช้ Window Function ลำดับ/จัดอันดับข้อมูล' },
      { label: 'ประหยัดค่าใช้จ่าย', desc: 'เลือกเฉพาะคอลัมน์ที่ต้องการ, ใช้ LIMIT, filter ด้วย partition' },
    ]
  },
  9: {
    title: 'สรุปย่อ: Airflow',
    items: [
      { label: 'DAG (Directed Acyclic Graph)', desc: 'กราฟกำหนดลำดับการทำงานของ tasks ห้ามวนลูป' },
      { label: 'Task / Operator', desc: 'หน่วยงานย่อยใน DAG เช่น BashOperator, PythonOperator' },
      { label: 'schedule_interval="0 8 * * *"', desc: 'ตั้งเวลารัน DAG ด้วย cron expression (ตัวอย่าง: ทุกวัน 8 โมง)' },
      { label: 'task1 >> task2 >> task3', desc: 'กำหนด dependency ลำดับการทำงานของ tasks' },
      { label: 'XCom (Cross Communication)', desc: 'ส่งข้อมูลขนาดเล็กระหว่าง tasks ภายใน DAG' },
      { label: 'Backfill', desc: 'รัน DAG ย้อนหลังสำหรับวันที่ผ่านมาที่ยังไม่ได้รัน' },
      { label: 'Connections & Variables', desc: 'เก็บ credentials และค่าตั้งต่าง ๆ ไว้ใน Airflow UI อย่างปลอดภัย' },
    ]
  },
  10: {
    title: 'สรุปย่อ: dbt',
    items: [
      { label: 'dbt run', desc: 'รัน SQL models ทั้งหมดเพื่อสร้างตาราง/view ใน warehouse' },
      { label: 'dbt test', desc: 'ทดสอบคุณภาพข้อมูล เช่น not_null, unique, accepted_values' },
      { label: 'source("schema", "tbl")', desc: 'อ้างอิงตารางต้นทางที่ประกาศใน sources.yml' },
      { label: 'ref("model_name")', desc: 'อ้างอิง model อื่น dbt จะจัดลำดับ dependency ให้อัตโนมัติ' },
      { label: 'Staging Model (stg_)', desc: 'โมเดลชั้นแรก ล้างและ rename คอลัมน์จาก source' },
      { label: 'Mart Model (fct_, dim_)', desc: 'โมเดลชั้นสุดท้าย join และ aggregate พร้อมใช้วิเคราะห์' },
      { label: 'dbt docs generate', desc: 'สร้างเอกสาร data catalog อัตโนมัติจาก schema.yml' },
      { label: 'Jinja + Macros', desc: 'เขียน SQL แบบ dynamic ด้วย template {{ }} และ macro ที่ reuse ได้' },
    ]
  },
  11: {
    title: 'สรุปย่อ: Docker & Spark',
    items: [
      { label: 'docker run -p 8080:80 image', desc: 'รัน container จาก image พร้อม map port' },
      { label: 'docker-compose up -d', desc: 'รันหลาย container พร้อมกันจากไฟล์ docker-compose.yml' },
      { label: 'Dockerfile: FROM, COPY, RUN', desc: 'สร้าง image เอง กำหนด base image, copy ไฟล์, รันคำสั่ง' },
      { label: 'docker build -t myapp .', desc: 'สร้าง Docker image จาก Dockerfile ในโฟลเดอร์ปัจจุบัน' },
      { label: 'SparkSession.builder.getOrCreate()', desc: 'สร้าง Spark session เพื่อเริ่มใช้งาน PySpark' },
      { label: 'df = spark.read.csv("file")', desc: 'อ่านไฟล์ CSV เป็น Spark DataFrame' },
      { label: 'df.filter().groupBy().agg()', desc: 'กรอง จัดกลุ่ม และคำนวณ aggregate บน Spark DataFrame' },
      { label: 'df.write.parquet("path")', desc: 'บันทึก DataFrame เป็นไฟล์ Parquet (format ยอดนิยมสำหรับ DE)' },
    ]
  },
  12: {
    title: 'สรุปย่อ: Data Quality',
    items: [
      { label: 'Great Expectations', desc: 'ไลบรารี Python ยอดนิยมสำหรับตรวจสอบคุณภาพข้อมูล' },
      { label: 'expect_column_values_to_not_be_null', desc: 'ตรวจสอบว่าคอลัมน์ไม่มีค่า null' },
      { label: 'expect_column_values_to_be_unique', desc: 'ตรวจสอบว่าค่าในคอลัมน์ไม่ซ้ำกัน' },
      { label: 'Schema Validation', desc: 'ตรวจสอบว่าตารางมีคอลัมน์และ data type ถูกต้อง' },
      { label: 'Freshness Check', desc: 'ตรวจสอบว่าข้อมูลอัปเดตล่าสุดไม่เกินเวลาที่กำหนด' },
      { label: 'Row Count Check', desc: 'ตรวจสอบจำนวนแถวว่าอยู่ในช่วงที่คาดหวัง ไม่หายไป' },
      { label: 'Data Contract', desc: 'ข้อตกลงระหว่างทีมเรื่อง schema, format, SLA ของข้อมูล' },
    ]
  },
  13: {
    title: 'สรุปย่อ: โปรเจกต์จริง',
    items: [
      { label: 'Project Structure', desc: 'จัดโฟลเดอร์ชัดเจน: dags/, models/, tests/, scripts/, docs/' },
      { label: 'CI/CD Pipeline', desc: 'ระบบอัตโนมัติ test → build → deploy ทุกครั้งที่ push โค้ด' },
      { label: 'GitHub Actions', desc: 'เครื่องมือ CI/CD ของ GitHub รัน workflow อัตโนมัติ' },
      { label: 'Monitoring & Alerting', desc: 'ตั้งระบบแจ้งเตือนเมื่อ pipeline ล้มเหลวหรือข้อมูลผิดปกติ' },
      { label: 'Logging', desc: 'บันทึก log ทุกขั้นตอนเพื่อ debug เมื่อเกิดปัญหา' },
      { label: 'README & Documentation', desc: 'เขียนเอกสารอธิบายโปรเจกต์ วิธีติดตั้ง และวิธีใช้งาน' },
      { label: 'Environment Variables', desc: 'เก็บ secrets (API key, password) ใน .env ไม่ hardcode ในโค้ด' },
    ]
  },
  14: {
    title: 'สรุปย่อ: System Design',
    items: [
      { label: 'Batch Processing', desc: 'ประมวลผลข้อมูลเป็นรอบ (ชั่วโมง/วัน) เช่น Spark, Airflow' },
      { label: 'Stream Processing', desc: 'ประมวลผลข้อมูลแบบเรียลไทม์ เช่น Kafka, Flink' },
      { label: 'Lambda Architecture', desc: 'รวม Batch + Stream layer เพื่อความถูกต้องและความเร็ว' },
      { label: 'Kappa Architecture', desc: 'ใช้ Stream layer อย่างเดียว ลดความซับซ้อนของระบบ' },
      { label: 'Horizontal Scaling', desc: 'เพิ่มเครื่องมากขึ้นเพื่อรองรับข้อมูลที่เพิ่มขึ้น (scale out)' },
      { label: 'Data Partitioning', desc: 'แบ่งข้อมูลออกเป็นส่วน ๆ เพื่อประมวลผลแบบขนาน' },
      { label: 'CAP Theorem', desc: 'ระบบกระจายเลือกได้แค่ 2 ใน 3: Consistency, Availability, Partition tolerance' },
    ]
  },
  15: {
    title: 'สรุปย่อ: เส้นทางอาชีพ DE',
    items: [
      { label: 'Resume สำหรับ DE', desc: 'เน้นโปรเจกต์จริง, tech stack ที่ใช้, ผลลัพธ์ที่วัดได้' },
      { label: 'หัวข้อสัมภาษณ์', desc: 'SQL, Python, System Design, Behavioral — เตรียมให้ครบ' },
      { label: 'Portfolio / GitHub', desc: 'สร้าง repo สาธารณะโชว์โปรเจกต์ end-to-end pipeline' },
      { label: 'Certifications', desc: 'GCP Professional DE, AWS Data Engineer, Databricks Spark' },
      { label: 'Networking', desc: 'เข้า community, งาน meetup, LinkedIn เพื่อหาโอกาสงาน' },
      { label: 'Continuous Learning', desc: 'เทคโนโลยีเปลี่ยนเร็ว ต้องเรียนรู้ตลอดเวลา อ่าน blog, ลอง tool ใหม่' },
    ]
  },
};
