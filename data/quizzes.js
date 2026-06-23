export const quizzes = {
  0: [
    {
      q: 'Data Engineer มีหน้าที่หลักคืออะไร?',
      options: [
        'ออกแบบ UI ให้สวยงาม',
        'สร้างและดูแลระบบ Pipeline สำหรับจัดการข้อมูล',
        'เขียนบทความวิเคราะห์ข้อมูล',
        'ขายสินค้าออนไลน์',
      ],
      answer: 1,
      explain:
        'Data Engineer มีหน้าที่หลักในการสร้าง ดูแล และพัฒนาระบบ Data Pipeline เพื่อให้ข้อมูลพร้อมใช้งานสำหรับทีม Data ทั้งหมด',
    },
    {
      q: 'ข้อใดคือความแตกต่างหลักระหว่าง Data Engineer กับ Data Scientist?',
      options: [
        'Data Engineer เน้นสร้างโมเดล ML ส่วน Data Scientist เน้นสร้าง Pipeline',
        'ทั้งสองตำแหน่งทำงานเหมือนกันทุกประการ',
        'Data Engineer เน้นจัดการระบบข้อมูล ส่วน Data Scientist เน้นวิเคราะห์และสร้างโมเดล',
        'Data Scientist ไม่จำเป็นต้องเขียนโค้ด',
      ],
      answer: 2,
      explain:
        'Data Engineer โฟกัสที่การสร้างระบบโครงสร้างพื้นฐานข้อมูล ในขณะที่ Data Scientist โฟกัสที่การวิเคราะห์ข้อมูลและสร้าง Machine Learning Model',
    },
    {
      q: 'ทำไมบทบาท Data Engineer จึงมีความสำคัญมากขึ้นในปัจจุบัน?',
      options: [
        'เพราะบริษัทต้องการคนทำ Graphic Design มากขึ้น',
        'เพราะปริมาณข้อมูลเพิ่มขึ้นมหาศาล และจำเป็นต้องมีระบบจัดการข้อมูลที่ดี',
        'เพราะ Data Engineer เงินเดือนสูงที่สุดในทุกสายงาน',
        'เพราะไม่มีใครอยากเป็น Data Scientist แล้ว',
      ],
      answer: 1,
      explain:
        'ปริมาณข้อมูลที่เพิ่มขึ้นอย่างมหาศาลทำให้องค์กรต้องการ Data Engineer ที่สามารถออกแบบและดูแลระบบจัดการข้อมูลที่มีประสิทธิภาพ',
    },
  ],

  1: [
    {
      q: 'RAM (Random Access Memory) มีคุณสมบัติอย่างไร?',
      options: [
        'เก็บข้อมูลได้ถาวรแม้ปิดเครื่อง',
        'เป็นหน่วยความจำชั่วคราวที่เร็วมาก แต่ข้อมูลหายเมื่อปิดเครื่อง',
        'ทำหน้าที่ประมวลผลคำสั่งแทน CPU',
        'มีความจุมากกว่า Hard Disk เสมอ',
      ],
      answer: 1,
      explain:
        'RAM เป็นหน่วยความจำชั่วคราว (Volatile) ที่มีความเร็วสูง ใช้เก็บข้อมูลระหว่างประมวลผล แต่ข้อมูลจะหายไปเมื่อปิดเครื่อง',
    },
    {
      q: 'CPU ทำหน้าที่อะไรในคอมพิวเตอร์?',
      options: [
        'เก็บข้อมูลถาวร',
        'แสดงผลภาพบนหน้าจอ',
        'ประมวลผลคำสั่งและคำนวณ',
        'เชื่อมต่ออินเทอร์เน็ต',
      ],
      answer: 2,
      explain:
        'CPU (Central Processing Unit) คือหน่วยประมวลผลกลาง ทำหน้าที่รับคำสั่ง ประมวลผล และคำนวณ เปรียบเสมือนสมองของคอมพิวเตอร์',
    },
    {
      q: 'ข้อใดเรียงลำดับความเร็วในการเข้าถึงข้อมูลจากเร็วที่สุดไปช้าที่สุดได้ถูกต้อง?',
      options: [
        'Disk → RAM → CPU Cache',
        'CPU Cache → RAM → Disk',
        'RAM → Disk → CPU Cache',
        'CPU Cache → Disk → RAM',
      ],
      answer: 1,
      explain:
        'CPU Cache เร็วที่สุดเพราะอยู่ใกล้ตัวประมวลผลที่สุด ตามด้วย RAM และ Disk ซึ่งช้าที่สุดแต่เก็บข้อมูลได้มากที่สุด',
    },
  ],

  2: [
    {
      q: 'คำสั่ง git commit ทำหน้าที่อะไร?',
      options: [
        'ส่งโค้ดไปยัง Remote Repository',
        'บันทึก Snapshot ของการเปลี่ยนแปลงไว้ใน Local Repository',
        'ดาวน์โหลดโค้ดจาก GitHub',
        'ลบไฟล์ที่ไม่ต้องการออก',
      ],
      answer: 1,
      explain:
        'git commit ใช้บันทึกการเปลี่ยนแปลง (Snapshot) ที่ Stage ไว้แล้วลงใน Local Repository พร้อม Commit Message อธิบายว่าเปลี่ยนอะไร',
    },
    {
      q: 'คำสั่ง Terminal ใดใช้สำหรับแสดงรายการไฟล์ในไดเรกทอรี?',
      options: ['cd', 'ls', 'mkdir', 'rm'],
      answer: 1,
      explain:
        'ls (list) ใช้แสดงรายการไฟล์และโฟลเดอร์ในไดเรกทอรีปัจจุบัน ถ้าอยู่บน Windows จะใช้คำสั่ง dir แทน',
    },
    {
      q: 'ถ้าต้องการดึงโค้ดล่าสุดจาก Remote Repository มาอัปเดตที่เครื่องตัวเอง ควรใช้คำสั่งใด?',
      options: ['git push', 'git pull', 'git add', 'git init'],
      answer: 1,
      explain:
        'git pull ใช้ดึง (Fetch) และรวม (Merge) การเปลี่ยนแปลงล่าสุดจาก Remote Repository มายัง Local Repository ของเรา',
    },
  ],

  3: [
    {
      q: 'ข้อใดคือความแตกต่างระหว่าง List กับ Tuple ใน Python?',
      options: [
        'List เก็บได้เฉพาะตัวเลข แต่ Tuple เก็บได้ทุกชนิด',
        'List แก้ไขได้ (Mutable) แต่ Tuple แก้ไขไม่ได้ (Immutable)',
        'Tuple เร็วกว่า List เสมอ 10 เท่า',
        'ไม่มีความแตกต่าง ใช้แทนกันได้เลย',
      ],
      answer: 1,
      explain:
        'List เป็น Mutable สามารถเพิ่ม ลบ หรือแก้ไขสมาชิกได้ ส่วน Tuple เป็น Immutable เมื่อสร้างแล้วแก้ไขไม่ได้ ทำให้ปลอดภัยและเร็วกว่าเล็กน้อย',
    },
    {
      q: 'Dictionary ใน Python ใช้โครงสร้างข้อมูลแบบใด?',
      options: [
        'เก็บข้อมูลเป็นลำดับเหมือน Array',
        'เก็บข้อมูลเป็นคู่ Key-Value',
        'เก็บข้อมูลได้เฉพาะตัวเลขเท่านั้น',
        'เก็บข้อมูลแบบ Tree Structure',
      ],
      answer: 1,
      explain:
        'Dictionary เก็บข้อมูลเป็นคู่ Key-Value ทำให้สามารถเข้าถึงข้อมูลผ่าน Key ได้อย่างรวดเร็ว เหมาะสำหรับการ Mapping ข้อมูล',
    },
    {
      q: 'Virtual Environment ใน Python มีประโยชน์อย่างไร?',
      options: [
        'ทำให้โค้ด Python รันเร็วขึ้น 2 เท่า',
        'แยก Dependencies ของแต่ละโปรเจกต์ไม่ให้ปนกัน',
        'ป้องกันไวรัสในโค้ด Python',
        'ทำให้สามารถเขียน Python ได้โดยไม่ต้องติดตั้ง',
      ],
      answer: 1,
      explain:
        'Virtual Environment ช่วยแยก Dependencies ของแต่ละโปรเจกต์ออกจากกัน ทำให้แต่ละโปรเจกต์ใช้ Library เวอร์ชันที่แตกต่างกันได้โดยไม่ขัดแย้งกัน',
    },
  ],

  4: [
    {
      q: 'คำสั่ง SQL ใดใช้สำหรับกรองข้อมูลหลังจากทำ GROUP BY แล้ว?',
      options: ['WHERE', 'HAVING', 'FILTER', 'GROUP FILTER'],
      answer: 1,
      explain:
        'HAVING ใช้กรองข้อมูลหลังจาก GROUP BY ในขณะที่ WHERE ใช้กรองข้อมูลก่อน GROUP BY ซึ่งเป็นความแตกต่างสำคัญที่ต้องเข้าใจ',
    },
    {
      q: 'JOIN ประเภทใดจะแสดงเฉพาะแถวที่มีข้อมูลตรงกันในทั้งสองตาราง?',
      options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
      answer: 2,
      explain:
        'INNER JOIN จะ Return เฉพาะแถวที่มี Key ตรงกันในทั้งสองตาราง ถ้าไม่ตรงกันจะไม่แสดงผล',
    },
    {
      q: 'ข้อใดอธิบายความแตกต่างระหว่าง WHERE กับ HAVING ได้ถูกต้อง?',
      options: [
        'WHERE และ HAVING ใช้แทนกันได้เสมอ',
        'WHERE กรองก่อน GROUP BY ส่วน HAVING กรองหลัง GROUP BY',
        'HAVING ใช้ได้กับทุกคำสั่ง SQL แต่ WHERE ใช้ได้เฉพาะ SELECT',
        'WHERE เร็วกว่า HAVING เสมอ จึงควรใช้ WHERE แทนทุกกรณี',
      ],
      answer: 1,
      explain:
        'WHERE กรองข้อมูลในระดับแถวก่อนทำ GROUP BY ส่วน HAVING กรองผลลัพธ์หลังจากทำ Aggregation แล้ว เช่น กรองกลุ่มที่มี COUNT > 5',
    },
  ],

  5: [
    {
      q: 'API แบบ REST ใช้ HTTP Method ใดสำหรับดึงข้อมูล?',
      options: ['POST', 'PUT', 'GET', 'DELETE'],
      answer: 2,
      explain:
        'GET Method ใช้สำหรับดึง (Read) ข้อมูลจาก Server โดยไม่เปลี่ยนแปลงข้อมูลบน Server ซึ่งเป็นหลักการของ REST API',
    },
    {
      q: 'Data Pipeline คืออะไร?',
      options: [
        'สายเคเบิลที่ใช้เชื่อมต่อ Server',
        'ชุดขั้นตอนอัตโนมัติในการย้ายและแปลงข้อมูลจากต้นทางไปปลายทาง',
        'ซอฟต์แวร์สำหรับวาดกราฟข้อมูล',
        'ภาษาโปรแกรมสำหรับจัดการข้อมูล',
      ],
      answer: 1,
      explain:
        'Data Pipeline คือชุดกระบวนการอัตโนมัติที่ย้ายข้อมูลจากแหล่งต้นทาง (Source) ผ่านการแปลง (Transform) ไปยังปลายทาง (Destination) อย่างเป็นระบบ',
    },
    {
      q: 'JSON เป็นรูปแบบข้อมูลที่นิยมใช้กับ API เพราะเหตุใด?',
      options: [
        'เพราะมีขนาดเล็กที่สุดในทุกรูปแบบ',
        'เพราะอ่านเข้าใจง่ายทั้งคนและเครื่อง และรองรับโครงสร้างข้อมูลซับซ้อน',
        'เพราะเป็นรูปแบบเดียวที่ API รองรับ',
        'เพราะ JSON ถูกประดิษฐ์มาเฉพาะสำหรับ Data Engineering',
      ],
      answer: 1,
      explain:
        'JSON (JavaScript Object Notation) เป็นที่นิยมเพราะมี Format ที่อ่านง่ายทั้งคนและเครื่อง รองรับโครงสร้างซ้อน (Nested) และแทบทุกภาษาโปรแกรมมี Library รองรับ',
    },
  ],

  6: [
    {
      q: 'Star Schema ประกอบด้วยตารางประเภทใดบ้าง?',
      options: [
        'Master Table และ Transaction Table',
        'Fact Table และ Dimension Table',
        'Source Table และ Target Table',
        'Input Table และ Output Table',
      ],
      answer: 1,
      explain:
        'Star Schema ประกอบด้วย Fact Table (เก็บข้อมูลที่วัดได้ เช่น ยอดขาย) อยู่ตรงกลาง ล้อมรอบด้วย Dimension Table (เก็บรายละเอียด เช่น สินค้า ลูกค้า วันที่)',
    },
    {
      q: 'Normalization มีจุดประสงค์หลักเพื่ออะไร?',
      options: [
        'ทำให้ Query ทำงานเร็วขึ้นเสมอ',
        'ลดความซ้ำซ้อนของข้อมูลและรักษาความถูกต้อง',
        'เพิ่มจำนวนแถวในตาราง',
        'แปลงข้อมูลจาก CSV เป็น SQL',
      ],
      answer: 1,
      explain:
        'Normalization ช่วยลดความซ้ำซ้อน (Redundancy) ของข้อมูลและรักษา Data Integrity ทำให้อัปเดตข้อมูลได้สะดวกและไม่เกิดความขัดแย้ง',
    },
    {
      q: 'Slowly Changing Dimension (SCD) Type 2 จัดการการเปลี่ยนแปลงอย่างไร?',
      options: [
        'เขียนทับข้อมูลเดิมทันที',
        'เพิ่มแถวใหม่พร้อมเก็บประวัติการเปลี่ยนแปลง',
        'ลบข้อมูลเก่าทิ้งแล้วใส่ข้อมูลใหม่',
        'ไม่ทำอะไรเลย ปล่อยข้อมูลเดิมไว้',
      ],
      answer: 1,
      explain:
        'SCD Type 2 เก็บประวัติการเปลี่ยนแปลงโดยเพิ่มแถวใหม่ พร้อมระบุวันที่เริ่มต้นและสิ้นสุด ทำให้สามารถย้อนดูข้อมูลในอดีตได้',
    },
  ],

  7: [
    {
      q: 'ETL ย่อมาจากอะไร?',
      options: [
        'Export, Transfer, Load',
        'Extract, Transform, Load',
        'Enter, Test, Launch',
        'Evaluate, Track, Log',
      ],
      answer: 1,
      explain:
        'ETL ย่อมาจาก Extract (ดึงข้อมูล), Transform (แปลงข้อมูล), Load (โหลดเข้าปลายทาง) ซึ่งเป็นกระบวนการพื้นฐานในการจัดการข้อมูล',
    },
    {
      q: 'ข้อใดคือความแตกต่างหลักระหว่าง ETL กับ ELT?',
      options: [
        'ETL เร็วกว่า ELT เสมอ',
        'ETL แปลงข้อมูลก่อนโหลด ส่วน ELT โหลดข้อมูลดิบก่อนแล้วค่อยแปลงในปลายทาง',
        'ELT ใช้ได้เฉพาะกับ NoSQL เท่านั้น',
        'ETL และ ELT เป็นสิ่งเดียวกัน แค่เรียกต่างกัน',
      ],
      answer: 1,
      explain:
        'ETL แปลงข้อมูลระหว่างทาง (ก่อนโหลด) ส่วน ELT โหลดข้อมูลดิบเข้า Data Warehouse ก่อน แล้วใช้พลังของ Warehouse ในการแปลงข้อมูล ซึ่งเป็นที่นิยมในยุค Cloud',
    },
    {
      q: 'Incremental Load มีข้อดีอย่างไรเมื่อเทียบกับ Full Load?',
      options: [
        'เขียนโค้ดง่ายกว่า Full Load เสมอ',
        'โหลดเฉพาะข้อมูลที่เปลี่ยนแปลง ทำให้ประหยัดเวลาและทรัพยากร',
        'ข้อมูลมีความถูกต้อง 100% เสมอ',
        'ไม่ต้องเชื่อมต่อกับ Database ต้นทาง',
      ],
      answer: 1,
      explain:
        'Incremental Load โหลดเฉพาะข้อมูลใหม่หรือที่เปลี่ยนแปลง ทำให้ใช้เวลาและทรัพยากรน้อยกว่า Full Load ที่ต้องโหลดข้อมูลทั้งหมดทุกครั้ง',
    },
  ],

  8: [
    {
      q: 'BigQuery เป็นบริการประเภทใดของ Google Cloud?',
      options: [
        'บริการเก็บไฟล์แบบ Object Storage',
        'Serverless Data Warehouse สำหรับวิเคราะห์ข้อมูลขนาดใหญ่',
        'บริการ Virtual Machine สำหรับรันแอปพลิเคชัน',
        'เครื่องมือสร้าง Dashboard อย่างเดียว',
      ],
      answer: 1,
      explain:
        'BigQuery เป็น Serverless Data Warehouse ของ Google Cloud ที่สามารถวิเคราะห์ข้อมูลขนาดใหญ่ได้อย่างรวดเร็วโดยไม่ต้องจัดการ Infrastructure เอง',
    },
    {
      q: 'Partitioning ใน BigQuery ช่วยเรื่องอะไร?',
      options: [
        'ทำให้ข้อมูลเข้ารหัสปลอดภัยขึ้น',
        'ลดปริมาณข้อมูลที่ต้อง Scan ทำให้ Query เร็วขึ้นและประหยัดค่าใช้จ่าย',
        'เพิ่มจำนวนคอลัมน์ที่รองรับได้',
        'ทำให้สามารถ Query ข้อมูลแบบ Real-time ได้',
      ],
      answer: 1,
      explain:
        'Partitioning แบ่งตารางออกเป็นส่วนย่อย (เช่น ตามวันที่) ทำให้ BigQuery Scan เฉพาะ Partition ที่ต้องการ ลดค่าใช้จ่ายและเพิ่มความเร็ว',
    },
    {
      q: 'BigQuery คิดค่าใช้จ่ายตามอะไรเป็นหลักในโหมด On-demand?',
      options: [
        'จำนวนตารางที่สร้าง',
        'ปริมาณข้อมูลที่ Query ประมวลผล (Bytes Scanned)',
        'จำนวนผู้ใช้ที่เข้าถึง',
        'ระยะเวลาที่ใช้ Query',
      ],
      answer: 1,
      explain:
        'BigQuery โหมด On-demand คิดค่าใช้จ่ายตามปริมาณข้อมูลที่ Scan (Bytes Processed) ดังนั้นการใช้ SELECT * บนตารางใหญ่จึงมีค่าใช้จ่ายสูง',
    },
  ],

  9: [
    {
      q: 'Apache Airflow ใช้แนวคิดอะไรในการกำหนด Workflow?',
      options: [
        'Spreadsheet',
        'DAG (Directed Acyclic Graph)',
        'Kanban Board',
        'Flowchart แบบวนลูปได้',
      ],
      answer: 1,
      explain:
        'Airflow ใช้ DAG (Directed Acyclic Graph) ซึ่งเป็นกราฟทิศทางที่ไม่มีวงวน เพื่อกำหนดลำดับการทำงานของ Task ต่างๆ อย่างชัดเจน',
    },
    {
      q: 'Operator ใน Airflow คืออะไร?',
      options: [
        'คนที่ดูแลระบบ Airflow',
        'Template สำหรับสร้าง Task ที่กำหนดว่าจะทำอะไร',
        'เครื่อง Server ที่รัน Airflow',
        'ไฟล์ Config สำหรับตั้งค่า Airflow',
      ],
      answer: 1,
      explain:
        'Operator เป็น Template ที่กำหนดว่า Task จะทำงานอะไร เช่น PythonOperator สำหรับรัน Python, BashOperator สำหรับรันคำสั่ง Bash',
    },
    {
      q: 'ทำไม DAG ใน Airflow จึงต้องเป็น Acyclic (ไม่มีวงวน)?',
      options: [
        'เพื่อให้เขียนโค้ดง่ายขึ้น',
        'เพื่อป้องกันการวนซ้ำไม่สิ้นสุดและให้ลำดับการทำงานชัดเจน',
        'เพราะ Python ไม่รองรับ Loop',
        'เพื่อประหยัดพื้นที่เก็บข้อมูล',
      ],
      answer: 1,
      explain:
        'การเป็น Acyclic (ไม่มีวงวน) ทำให้มั่นใจว่า Workflow จะไม่วนซ้ำไม่สิ้นสุด และสามารถกำหนดลำดับ Dependencies ได้อย่างชัดเจน',
    },
  ],

  10: [
    {
      q: 'dbt (Data Build Tool) ใช้ภาษาอะไรในการ Transform ข้อมูล?',
      options: ['Python เท่านั้น', 'SQL เป็นหลัก', 'Java', 'Scala'],
      answer: 1,
      explain:
        'dbt ใช้ SQL เป็นหลักในการ Transform ข้อมูล ทำให้ Data Analyst ที่ถนัด SQL สามารถสร้าง Data Pipeline ได้โดยไม่ต้องเขียน Python',
    },
    {
      q: 'dbt Model คืออะไร?',
      options: [
        'โมเดล Machine Learning',
        'ไฟล์ SQL ที่กำหนดว่าจะ Transform ข้อมูลอย่างไร โดยผลลัพธ์เป็นตารางหรือ View',
        'ER Diagram ของ Database',
        'ไฟล์ CSV ที่เก็บข้อมูลตัวอย่าง',
      ],
      answer: 1,
      explain:
        'dbt Model คือไฟล์ SQL ที่มี SELECT Statement กำหนดวิธี Transform ข้อมูล โดย dbt จะสร้างเป็น Table หรือ View ใน Data Warehouse ให้อัตโนมัติ',
    },
    {
      q: 'ข้อดีหลักของ dbt Test คืออะไร?',
      options: [
        'ทำให้ Query เร็วขึ้น',
        'ตรวจสอบคุณภาพข้อมูลอัตโนมัติ เช่น ค่าซ้ำ ค่า Null',
        'สร้าง Dashboard อัตโนมัติ',
        'ลดค่าใช้จ่าย Cloud',
      ],
      answer: 1,
      explain:
        'dbt Test ช่วยตรวจสอบคุณภาพข้อมูลแบบอัตโนมัติ เช่น ตรวจว่า Primary Key ไม่ซ้ำ (unique), ไม่มี Null, หรือค่าอยู่ในช่วงที่กำหนด',
    },
  ],

  11: [
    {
      q: 'Docker Container แตกต่างจาก Virtual Machine (VM) อย่างไร?',
      options: [
        'Container ช้ากว่า VM เสมอ',
        'Container ใช้ OS ร่วมกับ Host ทำให้เบาและเร็วกว่า VM ที่ต้องมี OS ของตัวเอง',
        'VM ใช้ RAM น้อยกว่า Container',
        'Container รันได้เฉพาะบน Linux เท่านั้น',
      ],
      answer: 1,
      explain:
        'Docker Container แชร์ OS Kernel กับ Host Machine ทำให้ใช้ทรัพยากรน้อยและเริ่มต้นเร็ว ในขณะที่ VM ต้องมี Guest OS ของตัวเองทำให้หนักกว่า',
    },
    {
      q: 'Apache Spark เหมาะกับงานประเภทใดมากที่สุด?',
      options: [
        'สร้างเว็บไซต์',
        'ประมวลผลข้อมูลขนาดใหญ่แบบกระจาย (Distributed Processing)',
        'แก้ไขรูปภาพ',
        'เขียน Unit Test',
      ],
      answer: 1,
      explain:
        'Apache Spark ออกแบบมาสำหรับประมวลผลข้อมูลขนาดใหญ่แบบกระจาย (Distributed) บนหลายเครื่องพร้อมกัน ทำให้รวดเร็วกว่าการประมวลผลบนเครื่องเดียว',
    },
    {
      q: 'Dockerfile ทำหน้าที่อะไร?',
      options: [
        'เก็บข้อมูล Log ของ Container',
        'เป็น Blueprint ที่กำหนดวิธีสร้าง Docker Image',
        'เก็บรหัสผ่านสำหรับเข้า Container',
        'เป็นไฟล์ Config สำหรับ Kubernetes',
      ],
      answer: 1,
      explain:
        'Dockerfile เป็นไฟล์ที่กำหนดขั้นตอนการสร้าง Docker Image เช่น ใช้ Base Image อะไร ติดตั้ง Library อะไรบ้าง และรันคำสั่งอะไร',
    },
  ],

  12: [
    {
      q: 'Data Quality หมายถึงอะไร?',
      options: [
        'ปริมาณข้อมูลที่เก็บได้มากที่สุด',
        'ระดับความถูกต้อง ครบถ้วน สม่ำเสมอ และทันเวลาของข้อมูล',
        'ความเร็วในการ Query ข้อมูล',
        'จำนวน Dashboard ที่สร้างจากข้อมูล',
      ],
      answer: 1,
      explain:
        'Data Quality วัดจากหลายมิติ เช่น Accuracy (ถูกต้อง), Completeness (ครบถ้วน), Consistency (สม่ำเสมอ), Timeliness (ทันเวลา) ซึ่งล้วนส่งผลต่อความน่าเชื่อถือของข้อมูล',
    },
    {
      q: 'Data Validation ควรทำในขั้นตอนใดของ Pipeline?',
      options: [
        'ทำตอนสุดท้ายหลังส่งรายงานแล้ว',
        'ทำทุกขั้นตอน ทั้งต้นทาง ระหว่างทาง และปลายทาง',
        'ทำเฉพาะตอนดึงข้อมูลจาก Source เท่านั้น',
        'ไม่จำเป็นต้องทำถ้ามี Unit Test แล้ว',
      ],
      answer: 1,
      explain:
        'Data Validation ควรทำทุกขั้นตอน (Source, Transform, Load) เพื่อตรวจจับปัญหาให้เร็วที่สุด ยิ่งพบปัญหาเร็วเท่าไหร่ ยิ่งแก้ไขได้ง่ายขึ้น',
    },
    {
      q: 'Great Expectations เป็นเครื่องมือที่ใช้ทำอะไร?',
      options: [
        'สร้าง Dashboard แบบอัตโนมัติ',
        'ตรวจสอบและทดสอบคุณภาพข้อมูลแบบอัตโนมัติ',
        'จัดการ Version Control ของ SQL',
        'สร้าง Machine Learning Model',
      ],
      answer: 1,
      explain:
        'Great Expectations เป็น Python Library สำหรับกำหนดกฎ (Expectations) เพื่อตรวจสอบคุณภาพข้อมูลอัตโนมัติ เช่น ค่าต้องไม่เป็น Null, ค่าต้องอยู่ในช่วงที่กำหนด',
    },
  ],

  13: [
    {
      q: 'ในการทำ Data Engineering Project ควรเริ่มต้นจากขั้นตอนใดก่อน?',
      options: [
        'เขียนโค้ดทันทีเลย',
        'ทำความเข้าใจ Business Requirements และวางแผนสถาปัตยกรรมข้อมูล',
        'สร้าง Dashboard ให้ดูก่อน',
        'ติดตั้ง Tools ทั้งหมดที่รู้จัก',
      ],
      answer: 1,
      explain:
        'การเริ่มต้นจาก Business Requirements ทำให้เข้าใจเป้าหมายและออกแบบระบบได้ตรงจุด ไม่เสียเวลาสร้างสิ่งที่ไม่จำเป็น',
    },
    {
      q: 'Version Control มีความสำคัญอย่างไรในโปรเจกต์ Data Engineering?',
      options: [
        'ไม่จำเป็น ถ้าทำงานคนเดียว',
        'ช่วยติดตามการเปลี่ยนแปลง ทำงานร่วมกับทีม และย้อนกลับได้หากมีปัญหา',
        'ใช้เฉพาะสำหรับเก็บ Documentation เท่านั้น',
        'ช่วยให้โค้ดรันเร็วขึ้น',
      ],
      answer: 1,
      explain:
        'Version Control (เช่น Git) ช่วยติดตามทุกการเปลี่ยนแปลง ทำให้ทำงานร่วมกับทีมได้ง่าย และสามารถ Rollback กลับไปเวอร์ชันก่อนหน้าได้หากเกิดปัญหา',
    },
    {
      q: 'CI/CD มีประโยชน์อย่างไรกับ Data Pipeline?',
      options: [
        'ทำให้ข้อมูลถูกต้องขึ้นโดยอัตโนมัติ',
        'ช่วย Test และ Deploy Pipeline อัตโนมัติ ลดความผิดพลาดจากการทำ Manual',
        'ลดค่าใช้จ่าย Cloud ได้ 50%',
        'ทำให้ไม่ต้องเขียน Test เลย',
      ],
      answer: 1,
      explain:
        'CI/CD ช่วยรัน Test อัตโนมัติทุกครั้งที่มีการเปลี่ยนแปลงโค้ด และ Deploy ไปยัง Production อัตโนมัติ ลดความผิดพลาดจาก Human Error',
    },
  ],

  14: [
    {
      q: 'Batch Processing กับ Streaming Processing ต่างกันอย่างไร?',
      options: [
        'Batch Processing เร็วกว่า Streaming เสมอ',
        'Batch ประมวลผลข้อมูลเป็นชุดตามเวลาที่กำหนด ส่วน Streaming ประมวลผลแบบ Real-time',
        'Streaming Processing ใช้ได้เฉพาะกับข้อมูลขนาดเล็ก',
        'ทั้งสองแบบเหมือนกัน แค่เรียกชื่อต่าง',
      ],
      answer: 1,
      explain:
        'Batch Processing ประมวลผลข้อมูลเป็นชุดๆ ตามช่วงเวลา (เช่น ทุกชั่วโมง) ส่วน Streaming Processing ประมวลผลข้อมูลแบบ Real-time ทันทีที่ข้อมูลเข้ามา',
    },
    {
      q: 'หลักการ "Separation of Concerns" ในการออกแบบระบบหมายถึงอะไร?',
      options: [
        'แยก Server ออกเป็นหลายเครื่องเสมอ',
        'แยกส่วนต่างๆ ของระบบให้รับผิดชอบเรื่องเฉพาะ ทำให้ดูแลและแก้ไขง่าย',
        'แยกทีมพัฒนาไม่ให้คุยกัน',
        'แยกข้อมูลเก่าออกจากข้อมูลใหม่',
      ],
      answer: 1,
      explain:
        'Separation of Concerns คือการแยกส่วนต่างๆ ของระบบให้ทำหน้าที่เฉพาะ เช่น แยก Ingestion, Transform, Serving ทำให้ระบบดูแลและพัฒนาต่อได้ง่าย',
    },
    {
      q: 'ทำไมจึงควรออกแบบระบบแบบ Idempotent?',
      options: [
        'เพื่อให้ระบบรันได้เร็วที่สุด',
        'เพื่อให้ผลลัพธ์เหมือนเดิมไม่ว่าจะรันกี่ครั้ง ป้องกันข้อมูลซ้ำเมื่อต้อง Retry',
        'เพื่อให้ใช้ RAM น้อยที่สุด',
        'เพื่อให้รองรับผู้ใช้จำนวนมากขึ้น',
      ],
      answer: 1,
      explain:
        'Idempotent Design ทำให้ไม่ว่าจะรันซ้ำกี่ครั้งก็ได้ผลลัพธ์เหมือนเดิม ซึ่งสำคัญมากเมื่อ Pipeline ล้มเหลวแล้วต้อง Retry จะไม่เกิดข้อมูลซ้ำ',
    },
  ],

  15: [
    {
      q: 'ทักษะใดสำคัญที่สุดสำหรับ Junior Data Engineer?',
      options: [
        'รู้ทุก Tools ในตลาด',
        'มีพื้นฐาน SQL, Python ที่แข็ง และเข้าใจแนวคิดพื้นฐานของ Data Engineering',
        'จบปริญญาเอกสาขา Computer Science',
        'เคยทำงานบริษัทใหญ่มาก่อน',
      ],
      answer: 1,
      explain:
        'สำหรับ Junior DE พื้นฐานที่แข็งใน SQL และ Python สำคัญที่สุด ควบคู่กับความเข้าใจแนวคิด Data Pipeline, Data Modeling ซึ่งสำคัญกว่าการรู้จัก Tools มากมาย',
    },
    {
      q: 'Portfolio สำหรับสมัครงาน Data Engineer ควรแสดงอะไร?',
      options: [
        'จำนวน Certificate ที่ได้มากที่สุด',
        'โปรเจกต์จริงที่แสดงทักษะ End-to-End ตั้งแต่ดึงข้อมูลจนถึงสร้าง Insight',
        'คะแนนสอบที่สูงที่สุด',
        'รายชื่อ Course ที่เรียนมาทั้งหมด',
      ],
      answer: 1,
      explain:
        'Portfolio ที่ดีควรแสดงโปรเจกต์ End-to-End ที่สะท้อนทักษะจริง เช่น การสร้าง Pipeline, Data Modeling, Automation ซึ่งมีน้ำหนักมากกว่า Certificate',
    },
    {
      q: 'การเรียนรู้อย่างต่อเนื่อง (Continuous Learning) สำคัญอย่างไรในสาย Data Engineering?',
      options: [
        'ไม่สำคัญ ถ้าเก่งแล้วไม่ต้องเรียนเพิ่ม',
        'สำคัญมาก เพราะเทคโนโลยีและ Best Practices เปลี่ยนแปลงตลอดเวลา',
        'สำคัญเฉพาะ 2 ปีแรกเท่านั้น',
        'สำคัญเฉพาะตอนจะเปลี่ยนงาน',
      ],
      answer: 1,
      explain:
        'สาย Data Engineering มีเทคโนโลยีใหม่เกิดขึ้นตลอดเวลา การเรียนรู้อย่างต่อเนื่องช่วยให้ทันสมัยและสามารถเลือกใช้เครื่องมือที่เหมาะสมที่สุด',
    },
  ],
};
