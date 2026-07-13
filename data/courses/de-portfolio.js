export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🏆',
    title: 'ทำไม Portfolio สำคัญกว่า Certification',
    content: '<h2>Portfolio vs Certification: อะไรสำคัญกว่า</h2><p>ในวงการ Data Engineering คำถามที่พบบ่อยคือ ควรเรียน Certification หรือทำ Portfolio ก่อน คำตอบสั้นๆ คือ Portfolio สำคัญกว่ามากในการหางาน เพราะ Hiring Manager ต้องการเห็นว่าคุณทำงานจริงได้ ไม่ใช่แค่ผ่านข้อสอบ</p><p>ลองคิดดูจากมุมมองของ Hiring Manager ถ้าเห็น Resume 2 ใบ ใบแรกมี AWS, GCP, Databricks Certifications แต่ไม่มีงานที่แสดงให้เห็น ใบที่สองมี GitHub ที่แสดง End-to-End Pipeline ที่ดึงข้อมูลจาก API ผ่าน Airflow ไปเก็บใน BigQuery แล้ว Transform ด้วย dbt และ Visualize ใน Looker Studio แน่นอนว่าใบที่สองน่าสนใจกว่า</p><p>Certification มีประโยชน์ในบางกรณี เช่น ช่วยเพิ่มความน่าเชื่อถือ ช่วยให้ผ่าน ATS (Applicant Tracking System) ในบางองค์กร หรือเป็นเครื่องมือในการเรียนรู้ Technology ใหม่ แต่ไม่ควรทำ Certification แทน Portfolio</p><p>สิ่งที่ DE Portfolio ที่ดีต้องแสดงให้เห็น: ความสามารถในการออกแบบและสร้าง Pipeline จริง, การใช้ Tools ที่ Industry ใช้ (Airflow, dbt, Spark), ทักษะการเขียน Code ที่สะอาดและมี Documentation ที่ดี, การแก้ปัญหาจริงๆ ไม่ใช่แค่ Tutorial, และ Architecture Thinking ว่าทำไมถึงเลือก Design นี้ ในหลักสูตรนี้เราจะสร้าง Portfolio ที่ทำให้คุณโดดเด่นกว่าคนอื่นอย่างแท้จริง</p>'
  },
  {
    number: 1,
    slug: 'github-profile',
    emoji: '👾',
    title: 'GitHub Profile: README, Pinned Repos, และ Contributions',
    content: '<h2>GitHub Profile: หน้าต่างแรกที่ Recruiter เห็น</h2><p>GitHub Profile คือ Portfolio หน้าแรกของ Developer ทุกคน เมื่อ Recruiter หรือ Hiring Manager สนใจในตัวคุณ สิ่งแรกที่มักทำคือ Google ชื่อและดู GitHub สิ่งสำคัญคือต้องทำให้ Profile ดูดีและแสดงความเป็นมืออาชีพ</p><p>Profile README คือไฟล์พิเศษที่แสดงบน GitHub Profile ของคุณ สร้างได้โดยสร้าง Repository ชื่อเดียวกับ Username เช่น github.com/yourname/yourname ใส่ README.md ที่ดี ควรประกอบด้วย: Brief Introduction บอกว่าคุณเป็นใคร ทำอะไร, Current Focus บอกว่าตอนนี้กำลังเรียนรู้หรือทำงานอะไร, Tech Stack แสดง Icons ของ Tools ที่ใช้, GitHub Stats ใช้ github-readme-stats เพื่อแสดง Contribution Graph และ Language Stats</p><p>Pinned Repositories เลือก Pin 4-6 Projects ที่ดีที่สุด แต่ละ Project ต้องมี Description ที่ดี แสดง Topics/Tags ที่เกี่ยวข้อง เช่น python, airflow, dbt, bigquery และมี README ที่อธิบายว่า Project นี้คืออะไร ทำไมถึงสร้าง และใช้ Technology อะไร</p><p>Contribution Graph ที่สม่ำเสมอแสดงให้เห็นว่าคุณ Active ใน Open-source หรือ Personal Projects เป้าหมายคือ Commit ทุกวันหรือเกือบทุกวัน ถึงแม้จะเป็นแค่การแก้ไขเล็กน้อย, เพิ่ม Documentation หรือ Refactor Code ก็ตาม ความสม่ำเสมอสำคัญกว่าจำนวน และ Graph สีเขียวเต็มจะสร้างความประทับใจแรกที่ดีมาก</p>'
  },
  {
    number: 2,
    slug: 'project-ideas',
    emoji: '💡',
    title: '5 Project Ideas สำหรับ DE Portfolio ที่ได้งาน',
    content: '<h2>5 Project Ideas ที่ Hiring Manager ชอบ</h2><p>การเลือก Project ที่ดีสำหรับ Portfolio ต้องคำนึงถึงสิ่งที่ Industry ต้องการ ไม่ใช่แค่สิ่งที่ง่ายหรือน่าสนใจส่วนตัว มาดู 5 Project Ideas ที่จะทำให้ Portfolio ของคุณโดดเด่น</p><p><strong>1. Real-time Crypto/Stock Price Pipeline</strong>: ดึงข้อมูลจาก API (Binance, Alpha Vantage) ทุก 1 นาที ผ่าน Kafka หรือ Kinesis ประมวลผลด้วย Spark Streaming หรือ Flink เก็บใน TimescaleDB หรือ BigQuery แล้ว Visualize ด้วย Grafana หรือ Looker Studio แสดงทักษะ Streaming Processing</p><p><strong>2. E-commerce Data Platform</strong>: จำลองระบบ E-commerce ด้วย Faker library สร้าง Batch Pipeline ด้วย Airflow ดึงข้อมูล Orders, Products, Customers เข้า Data Warehouse Transform ด้วย dbt สร้าง Dashboard ที่แสดง Sales Metrics แสดงทักษะ Batch Processing และ SQL Modeling</p><p><strong>3. Social Media Analytics Pipeline</strong>: ดึงข้อมูลจาก Reddit หรือ YouTube API วิเคราะห์ Sentiment ด้วย Simple NLP สร้าง Trend Dashboard แสดงทักษะ API Integration และ Data Enrichment</p><p><strong>4. Data Quality Framework</strong>: สร้าง Framework ที่รัน Great Expectations Checks อัตโนมัติ สร้าง Quality Dashboard ที่แสดง Pass/Fail Rate ตามเวลา แสดงทักษะ Data Quality ที่หลายองค์กรขาดแคลน</p><p><strong>5. Open Data Platform</strong>: ดึงข้อมูล Open Data จากรัฐบาลหรือ WHO สร้าง Analytical Platform พร้อม API ให้คนอื่น Query ได้ แสดงทักษะ End-to-End Thinking ที่ครบวงจร</p>'
  },
  {
    number: 3,
    slug: 'end-to-end',
    emoji: '🔄',
    title: 'สร้าง E2E Pipeline: จาก Source ถึง Dashboard',
    content: '<h2>End-to-End Pipeline: แสดงทักษะทั้งหมดในโปรเจกต์เดียว</h2><p>E2E (End-to-End) Pipeline คือโปรเจกต์ที่แสดงทักษะ DE ครบทุกด้านในโปรเจกต์เดียว ตั้งแต่การดึงข้อมูลจาก Source ไปจนถึง Dashboard ที่ Business User ใช้งานได้ นี่คือ Project ที่ Hiring Manager ให้ความสำคัญมากที่สุด</p><p>สถาปัตยกรรมของ E2E Pipeline ที่ดี: Source Layer ดึงข้อมูลจาก API หรือ Database ด้วย Python, Ingestion Layer ใช้ Airflow เพื่อ Schedule และ Orchestrate, Storage Layer เก็บ Raw Data ใน Data Lake (S3 หรือ GCS) และ Processed Data ใน Data Warehouse (BigQuery หรือ Snowflake), Transformation Layer ใช้ dbt สร้าง Staging, Intermediate และ Mart Models, Quality Layer รัน dbt Tests และ Great Expectations, Serving Layer Visualize ด้วย Looker Studio, Superset หรือ Metabase</p><p>Stack ที่แนะนำสำหรับมือใหม่เพราะ Free Tier พอใช้งานได้: Python + Airflow (Docker) + BigQuery (Free 1TB/month) + dbt Core (Free) + Looker Studio (Free) Stack นี้ใกล้เคียงกับที่ใช้จริงใน Industry มากและ CV จะดูน่าประทับใจ</p><p>สิ่งสำคัญที่ต้องทำให้ Project โดดเด่น: มี Makefile หรือ Script ที่รัน Project ได้ด้วยคำสั่งเดียว, มี Docker Compose เพื่อให้คนอื่น Setup ได้ง่าย, มี Tests ทั้ง Unit Test และ dbt Tests, มี CI/CD ด้วย GitHub Actions ที่รัน Tests อัตโนมัติเมื่อ Push Code ทำให้ดูเป็นมืออาชีพมาก</p>'
  },
  {
    number: 4,
    slug: 'documentation',
    emoji: '📝',
    title: 'Documentation: README และ Architecture Diagram',
    content: '<h2>Documentation: ทำให้ Project ดูมืออาชีพ</h2><p>Documentation ที่ดีคือสิ่งที่แยก Portfolio ระดับ Junior ออกจากระดับ Senior เพราะแสดงให้เห็นว่าคุณคิดถึงผู้อื่น ไม่ใช่แค่ตัวเอง ใน Real Project การ Document ที่ดีช่วยให้ทีมทำงานร่วมกันได้ง่ายขึ้นมาก</p><p>โครงสร้าง README ที่ดีต้องมี: Project Title และ Badge (Build Status, License, Python Version), Overview บอกว่า Project นี้คืออะไรและแก้ปัญหาอะไร, Architecture Diagram แสดงภาพรวมของระบบ, Tech Stack List Technology ที่ใช้, Prerequisites บอก Dependency ที่ต้องติดตั้งก่อน, Quick Start คำสั่งสั้นๆ ที่รัน Project ได้, Configuration อธิบาย Environment Variables, Data Flow อธิบาย Pipeline Flow, และ Known Issues หรือ Roadmap</p><p>Architecture Diagram ที่ดีใช้เครื่องมือฟรีอย่าง draw.io หรือ Lucidchart ควรแสดง Data Flow ชัดเจน มี Color Coding แยก Layer เช่น Source, Ingestion, Storage, Transform, Serving ระบุ Technology ที่ใช้ในแต่ละ Component และไม่ซับซ้อนเกินไปจนดูไม่รู้เรื่อง</p><p>ADR (Architecture Decision Record) คือการบันทึกว่าทำไมถึงตัดสินใจเลือก Technology หรือ Design นี้ เช่น ทำไมถึงเลือก BigQuery แทน Redshift เป็น Document สั้นๆ ที่แสดงให้เห็น Architecture Thinking ซึ่งเป็นทักษะที่หายากและมีค่ามากในตำแหน่ง Senior</p>'
  },
  {
    number: 5,
    slug: 'data-sources',
    emoji: '🗄️',
    title: 'Free Data Sources: API และ Kaggle',
    content: '<h2>Free Data Sources: หาข้อมูลฟรีสำหรับ Portfolio</h2><p>หนึ่งในอุปสรรคใหญ่ในการสร้าง Portfolio คือการหาข้อมูลที่น่าสนใจและมีคุณภาพ โชคดีที่มี Free Data Sources มากมายให้ใช้งาน</p><p><strong>Public APIs (Real-time/Recent Data)</strong>: Open-Meteo API ข้อมูลสภาพอากาศ ไม่ต้องใช้ API Key, CoinGecko API ข้อมูล Cryptocurrency ฟรี 10-30 calls/minute, Reddit API ข้อมูลโพสต์และ Comment, GitHub API ข้อมูล Repository และ Contribution, REST Countries ข้อมูลประเทศต่างๆ, TheSportsDB ข้อมูลกีฬา</p><p><strong>Kaggle Datasets</strong>: Kaggle มี Dataset มากกว่า 50,000 ชุดในทุกหัวข้อ ที่นิยมสำหรับ DE Portfolio: NYC Taxi Trips (ขนาดใหญ่ดีสำหรับ Batch Processing), Stack Overflow Annual Survey (ข้อมูลหลายปีสำหรับ Trend Analysis), Airbnb Listings (ข้อมูลหลายเมืองสำหรับ Geographic Analysis)</p><p><strong>Government Open Data</strong>: data.go.th ข้อมูลเปิดภาครัฐไทย, WHO Open Data ข้อมูลสุขภาพ, World Bank Open Data ข้อมูลเศรษฐกิจโลก</p><p><strong>Tips สำหรับการเลือก Data Source</strong>: เลือกข้อมูลที่มีหลาย Table เพื่อแสดงทักษะ Join และ Modeling, เลือกข้อมูลที่มี Time Dimension เพื่อทำ Trend Analysis, เลือกข้อมูลที่คุณสนใจจริงๆ เพราะจะทำให้มี Energy ในการพัฒนา และเลือกข้อมูลที่มีขนาดใหญ่พอสมควร เช่นมากกว่า 1 ล้าน Rows เพื่อแสดงทักษะ Performance Optimization</p>'
  },
  {
    number: 6,
    slug: 'presentation',
    emoji: '🎤',
    title: 'นำเสนอ Portfolio ใน Interview',
    content: '<h2>นำเสนอ Portfolio ใน Interview อย่างมีประสิทธิภาพ</h2><p>การมี Portfolio ที่ดีเป็นแค่ครึ่งทาง อีกครึ่งคือการนำเสนอให้ Interviewer เข้าใจและประทับใจ การนำเสนอ Portfolio ที่ดีคือการเล่าเรื่องราว (Storytelling) ไม่ใช่แค่แสดงโค้ด</p><p>โครงสร้างการนำเสนอที่ดี: Problem Statement บอกก่อนว่าโปรเจกต์นี้แก้ปัญหาอะไร ทำไมถึงสร้าง (ควรเป็น Real Problem ที่น่าสนใจ), Architecture Walk-through อธิบาย Architecture โดยใช้ Diagram ระบุ Trade-offs ที่ตัดสินใจ เช่น ทำไมเลือก BigQuery แทน PostgreSQL, Challenges บอกว่าเจอปัญหาอะไรและแก้อย่างไร นี่คือส่วนที่แสดงทักษะ Problem-solving มากที่สุด, Results แสดงผลลัพธ์ เช่น Pipeline รัน 1,000 Records ใน 5 วินาที, Demo ถ้าทำได้ Live Demo ดีที่สุด</p><p>คำถามที่ Interviewer มักถาม: ถ้า Data Volume เพิ่มขึ้น 100 เท่าจะ Scale อย่างไร, ถ้า Pipeline ล้มเหลวกลางคันจะทำอย่างไร (Idempotency), ทำไมถึงเลือก Technology X แทน Y, จะ Monitor Pipeline นี้อย่างไร เตรียมคำตอบสำหรับคำถามเหล่านี้ไว้ล่วงหน้า</p><p>หลีกเลี่ยงสิ่งเหล่านี้: อย่า Apologize สำหรับ Project ที่ยังไม่สมบูรณ์ ให้บอกแทนว่ากำลังปรับปรุงอะไรอยู่, อย่าจำโค้ดทุกบรรทัด แต่ต้องเข้าใจ Logic และ Design Decision, อย่าพูดถึงแต่ Technology โดยไม่บอก Business Value ที่สร้างได้</p>'
  },
  {
    number: 7,
    slug: 'resume',
    emoji: '📄',
    title: 'Resume/CV Format สำหรับ Data Engineer',
    content: '<h2>Resume DE: เขียนให้ได้ Interview</h2><p>Resume ที่ดีสำหรับ Data Engineer ต้องผ่านทั้ง ATS (Applicant Tracking System) และดึงดูดสายตาของ Human Recruiter ซึ่งใช้เวลาเฉลี่ยแค่ 7 วินาทีในการ Scan Resume แต่ละใบ</p><p>โครงสร้าง Resume DE ที่แนะนำ: Contact Information ด้านบนสุด ใส่ LinkedIn URL และ GitHub URL, Professional Summary 2-3 ประโยคที่สรุปประสบการณ์และ Value Proposition, Technical Skills จัดกลุ่มตาม Category เช่น Languages (Python, SQL, Scala), Orchestration (Airflow, Prefect), Cloud (GCP, AWS), Data Warehouse (BigQuery, Snowflake), Transformation (dbt), Work Experience เรียงจากล่าสุด ใช้ Bullet Points แสดง Quantifiable Achievement เช่น ลด Pipeline Runtime จาก 4 ชั่วโมงเป็น 30 นาที, Projects ใส่ 2-3 Projects สำคัญพร้อม Link GitHub, Education ใส่ที่สุดท้าย</p><p>Keywords ที่ ATS ชอบ: Apache Airflow, Apache Spark, dbt, ETL/ELT, Data Pipeline, BigQuery, Snowflake, Kafka, Python, SQL, Data Modeling, Data Warehouse, Data Lake สิ่งสำคัญคือต้องใส่ Keywords ที่ตรงกับ Job Description ของแต่ละบริษัทที่สมัคร Tailor Resume สำหรับแต่ละตำแหน่ง</p><p>ความยาวของ Resume: ถ้าประสบการณ์น้อยกว่า 5 ปี ควรจำกัดที่ 1 หน้า ถ้ามากกว่า 5 ปีสามารถมี 2 หน้าได้ อย่าใส่ข้อมูลที่ไม่เกี่ยวข้องเพื่อยืด Resume</p>'
  },
  {
    number: 8,
    slug: 'linkedin',
    emoji: '💼',
    title: 'LinkedIn Profile สำหรับ Data Engineer',
    content: '<h2>LinkedIn Profile: สร้าง Personal Brand สำหรับ DE</h2><p>LinkedIn คือแหล่ง Recruit อันดับหนึ่งสำหรับตำแหน่ง Tech รวมถึง Data Engineer Profile ที่ดีจะทำให้ Recruiter หา Reach out มาหาคุณโดยที่คุณไม่ต้องสมัครงานเอง</p><p>ส่วนสำคัญของ LinkedIn Profile DE: Headline ใต้ชื่อ ควรบอก Specialty ชัดเจน เช่น Data Engineer | Python Airflow dbt BigQuery | Building Scalable Pipelines อย่าใช้แค่ Data Engineer อย่างเดียว, About Section เขียน 3-5 ย่อหน้า บอกว่าคุณช่วยอะไรให้กับองค์กร ใช้ Keywords ที่ Recruiter ค้นหา, Featured Section Pin โปรเจกต์ที่ดีที่สุด GitHub Link บทความที่เขียน หรือ Presentation, Skills Section ใส่ Skills ทางเทคนิคทุกอย่างที่ใช้จริง ขอ Endorsement จากเพื่อนร่วมงาน</p><p>กิจกรรมที่ช่วย Boost Profile: โพสต์ Content เกี่ยวกับ DE สัปดาห์ละ 1-2 ครั้ง เช่น สิ่งที่เรียนรู้ ปัญหาที่แก้ได้ Tips and Tricks, Comment ใน Post ของ Thought Leaders ใน DE Community, Share บทความที่น่าสนใจพร้อม Commentary ของตัวเอง, Connect กับ DE ในบริษัทที่อยากทำงานด้วย และส่ง Personalized Connection Message</p><p>Open to Work Feature: เปิด Open to Work แบบ Visible to Recruiters Only หรือ Everyone ขึ้นอยู่กับ Situation ถ้ายังทำงานอยู่ที่เดิมให้ใช้ Visible to Recruiters Only เพื่อความปลอดภัย</p>'
  },
  {
    number: 9,
    slug: 'common-mistakes',
    emoji: '⚠️',
    title: 'ข้อผิดพลาด Portfolio ที่พบบ่อย',
    content: '<h2>Portfolio Mistakes: สิ่งที่ทำให้ Portfolio อ่อนแอ</h2><p>การสร้าง Portfolio ที่ผิดทิศทางอาจทำให้เสียเวลาเป็นเดือนโดยไม่ได้ผลลัพธ์ที่ต้องการ มาดูข้อผิดพลาดที่พบบ่อยและวิธีหลีกเลี่ยง</p><p><strong>ข้อผิดพลาดที่ 1: Tutorial Projects เท่านั้น</strong> การทำตาม YouTube Tutorial ทุกขั้นตอนแล้วนำมาใส่ใน Portfolio เป็นสิ่งที่ Interviewer ตรวจพบได้ง่าย เพราะทุกคนทำ Project เดียวกัน ให้ดัดแปลง Tutorial Project ให้เป็นของตัวเองโดยเปลี่ยน Data Source, เพิ่ม Feature ใหม่ หรือปรับปรุง Architecture</p><p><strong>ข้อผิดพลาดที่ 2: ไม่มี README</strong> Project ที่ไม่มี README หรือมีแค่ README ว่างๆ ทำให้ดูไม่มืออาชีพ Interviewer จะไม่เสียเวลาพยายามเข้าใจโค้ดที่ไม่มีคำอธิบาย</p><p><strong>ข้อผิดพลาดที่ 3: Hard-code Credentials</strong> การ Commit API Keys หรือ Password เข้า GitHub เป็นสัญญาณที่แย่มากด้าน Security Awareness ใช้ .env files และ .gitignore เสมอ</p><p><strong>ข้อผิดพลาดที่ 4: Project ไม่รันได้</strong> ถ้า Interviewer Clone Project แล้วรันไม่ได้เพราะ Dependency ไม่ครบหรือ Configuration ไม่ถูกต้อง จะสร้างความประทับใจที่แย่มาก ใช้ Docker Compose เพื่อให้ Setup ง่าย</p><p><strong>ข้อผิดพลาดที่ 5: ทำหลายโปรเจกต์แต่ทุกอันยังไม่สมบูรณ์</strong> 1 Project ที่ดีและสมบูรณ์ดีกว่า 10 Project ที่ครึ่งๆ กลางๆ มาก Focus ที่ Quality ไม่ใช่ Quantity ตั้งเป้าทำ 2-3 Project ที่แสดงทักษะต่างกัน และแต่ละอันต้องสมบูรณ์และน่าประทับใจ</p>'
  }
];
