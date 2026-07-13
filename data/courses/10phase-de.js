export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🎯',
    title: 'ภาพรวม — 1 Page Summary',
    content: `
<h2>🎯 เส้นทางการเป็น Data Engineer</h2>

<img src="/images/de101/overview.png" alt="DE Roadmap Overview" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>Data Engineer</strong> พูดง่ายๆ คือ <strong>"คนที่สร้างท่อส่งข้อมูล"</strong></p>

<p>ลองนึกภาพแบบนี้ครับ: ข้อมูลก็เหมือน "น้ำ" ที่ไหลจากหลายแหล่ง (เช่น เว็บไซต์, แอป, ฐานข้อมูล) แล้ว Data Engineer ก็คือ <strong>"ช่างประปา"</strong> ที่ต่อท่อน้ำให้น้ำไหลจากต้นทางไปยังปลายทาง (เช่น Dashboard, รายงาน) ได้อย่างไม่รั่ว ไม่อุดตัน!</p>

<h3>🔑 หน้าที่หลักของ Data Engineer</h3>
<ul>
  <li>🏗️ <strong>สร้าง Data Pipeline</strong> — ระบบที่ดึงข้อมูล → แปลงข้อมูล → ส่งข้อมูล โดยอัตโนมัติ</li>
  <li>📦 <strong>ออกแบบที่เก็บข้อมูล</strong> — เลือกว่าจะเก็บข้อมูลที่ไหน ยังไงให้เหมาะสม</li>
  <li>⚡ <strong>ดูแลให้ระบบเร็ว</strong> — ให้ข้อมูลไหลลื่น ไม่ค้าง ไม่ล่ม</li>
  <li>🔒 <strong>ดูแลคุณภาพข้อมูล</strong> — ข้อมูลต้องถูก ครบ ไม่ซ้ำ</li>
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
  <tr><td>1</td><td>SQL พื้นฐาน</td><td>เริ่มต้น</td></tr>
  <tr><td>2</td><td>Python สำหรับ DE</td><td>เริ่มต้น-กลาง</td></tr>
  <tr><td>3</td><td>ที่เก็บข้อมูล (Storage)</td><td>กลาง</td></tr>
  <tr><td>4</td><td>การประมวลผล (Compute)</td><td>กลาง</td></tr>
  <tr><td>5</td><td>สร้าง Pipeline จริง</td><td>กลาง</td></tr>
  <tr><td>6</td><td>ระบบอัตโนมัติ (Orchestration)</td><td>กลาง-สูง</td></tr>
  <tr><td>7</td><td>เครื่องมือพื้นฐาน</td><td>กลาง</td></tr>
  <tr><td>8</td><td>ออกแบบโครงสร้างข้อมูล</td><td>กลาง-สูง</td></tr>
  <tr><td>9</td><td>Portfolio & หางาน</td><td>ทุกระดับ</td></tr>
</table>

<div class="tip-box">💡 <strong>แนะนำ:</strong> เรียนตามลำดับ Phase จะเข้าใจง่ายที่สุด แต่ถ้ามีพื้นฐานแล้ว สามารถข้ามไปบทที่สนใจได้เลย!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Data Engineer คือ "ช่างประปาข้อมูล" ที่สร้างท่อส่งข้อมูลจากต้นทางไปปลายทางอัตโนมัติ</li>
  <li>✅ หน้าที่หลักคือ สร้าง Pipeline, ออกแบบ Storage, ดูแลคุณภาพข้อมูล และทำงานร่วมกับทีม Data อื่นๆ</li>
  <li>✅ สายอาชีพนี้มีความต้องการสูงมากในไทย เงินเดือนเริ่มต้น 25,000-50,000 บาท ไปจนถึง 200,000+ บาท</li>
  <li>✅ คอร์สนี้แบ่งเป็น 10 Phase ครอบคลุมตั้งแต่พื้นฐานจนถึงพร้อมสมัครงาน</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ไปบทถัดไปเพื่อทำความเข้าใจ Career Path ของ DE ให้ชัดเจน พร้อมเตรียมเครื่องมือพื้นฐาน (Python + VS Code)
</div>
`,
  },
  {
    number: 1,
    slug: 'career-overview',
    emoji: '📌',
    title: 'จุดเริ่มต้น & Career Overview',
    content: `
<h2>📌 DE คืออะไร? ทำอะไร? ต่างจากสายอื่นยังไง?</h2>

<img src="/images/de101/career.png" alt="DE Career Overview" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ก่อนจะเริ่มเรียนอะไร เรามาทำความเข้าใจกันก่อนว่า สาย Data มีกี่สาย แล้วเราจะเลือกสายไหนดี</p>

<h3>🔍 เปรียบเทียบให้เห็นภาพง่ายๆ</h3>
<p>ลองจินตนาการว่า "ข้อมูล" คือ "น้ำ" นะครับ:</p>
<table>
  <tr><th></th><th>Data Engineer 🔧</th><th>Data Analyst 🚿</th><th>Data Scientist 🔬</th></tr>
  <tr><td><strong>เปรียบเทียบ</strong></td><td>ช่างประปา (ต่อท่อน้ำ)</td><td>ผู้ใช้น้ำ (เปิดก๊อก ใช้น้ำ)</td><td>นักวิทย์ (ตรวจสอบคุณภาพน้ำ)</td></tr>
  <tr><td><strong>ทำอะไร</strong></td><td>สร้างระบบส่งข้อมูล</td><td>ดูข้อมูล ทำรายงาน</td><td>สร้างโมเดล AI/ML</td></tr>
  <tr><td><strong>เครื่องมือ</strong></td><td>Python, SQL, Airflow</td><td>SQL, Tableau, Excel</td><td>Python, TensorFlow</td></tr>
  <tr><td><strong>ผลงาน</strong></td><td>Pipeline, Data Warehouse</td><td>Dashboard, Report</td><td>ML Model</td></tr>
</table>

<h3>🗺️ แผนการเรียนแนะนำ (10 เดือน)</h3>
<p>ไม่ต้องรู้ทุกอย่างวันเดียว! ค่อยๆ เรียนตามแผนนี้:</p>
<pre><code>เดือน 1-2:  เริ่มจาก SQL + Python พื้นฐาน (สำคัญที่สุด!)
เดือน 3-4:  เรียนรู้เรื่องที่เก็บข้อมูล + ETL
เดือน 5-6:  ลองใช้ Airflow + Docker + Cloud
เดือน 7-8:  ออกแบบโครงสร้างข้อมูล + dbt
เดือน 9-10: สร้าง Portfolio + ฝึกสัมภาษณ์</code></pre>

<h3>✅ Mindset ที่ควรมี</h3>
<ul>
  <li><strong>ไม่ต้องเก่งทุกอย่าง</strong> — เรียนทีละเรื่อง ทำซ้ำจนคล่อง</li>
  <li><strong>ลองทำจริง</strong> — อ่านอย่างเดียวไม่พอ ต้องลงมือเขียนโค้ดเอง</li>
  <li><strong>อย่ากลัวผิด</strong> — Error คือครู ยิ่งเจอเยอะ ยิ่งเก่งเร็ว</li>
  <li><strong>เข้าใจ "ทำไม" ก่อน "ทำยังไง"</strong> — รู้ว่าทำไปเพื่ออะไร สำคัญกว่าท่องจำคำสั่ง</li>
</ul>

<div class="warning-box">⚠️ <strong>หลุมพราง:</strong> อย่าเพิ่งไปเรียนเครื่องมือเยอะๆ (Spark, Kafka, Airflow) ตั้งแต่แรก! เริ่มจาก SQL + Python ให้แน่นก่อน แล้วค่อยขยาย</div>

<h3>📚 เตรียมเครื่องมือ (พร้อมลิงก์ดาวน์โหลด)</h3>
<p>ก่อนเริ่มเรียน เรามาทำความรู้จักเครื่องมือแต่ละตัวกันก่อนว่ามันคืออะไร:</p>
<ul>
  <li>🐍 <strong>Python</strong> — ภาษาโปรแกรมที่เขียนง่ายที่สุด ใช้สั่งให้คอมทำงานแทนเรา เช่น ดึงข้อมูล, คำนวณ, ส่งอีเมลอัตโนมัติ → <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">ดาวน์โหลด Python</a></li>
  <li>📝 <strong>VS Code</strong> — โปรแกรมสำหรับเขียนโค้ด (เหมือน Word แต่สำหรับเขียนโปรแกรม) มีสี highlight ช่วยอ่านโค้ดง่าย → <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">ดาวน์โหลด VS Code</a>
    <br><img src="/images/tools/vscode.png" alt="หน้าตาโปรแกรม VS Code" style="max-width:100%;border-radius:8px;margin-top:8px;border:1px solid rgba(255,255,255,0.1)" />
  </li>
  <li>🐳 <strong>Docker Desktop</strong> — โปรแกรมที่ช่วย "บรรจุ" แอปของเราลงกล่อง ย้ายไปเครื่องไหนก็ทำงานได้เหมือนเดิม (ยังไม่ต้องติดตั้งตอนนี้ก็ได้ เอาไว้ Phase 7) → <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener">ดาวน์โหลด Docker Desktop</a>
    <br><img src="/images/tools/docker.png" alt="หน้าตาโปรแกรม Docker Desktop" style="max-width:100%;border-radius:8px;margin-top:8px;border:1px solid rgba(255,255,255,0.1)" />
  </li>
  <li>💻 <strong>Terminal</strong> — หน้าจอสีดำที่ใช้พิมพ์คำสั่งให้คอมทำงาน แทนที่จะกดเมาส์ (Windows มีให้อยู่แล้ว พิมพ์ "cmd" หรือ "PowerShell" ที่ช่องค้นหาได้เลย)
    <br><img src="/images/tools/terminal.png" alt="หน้าตาโปรแกรม Terminal / PowerShell" style="max-width:100%;border-radius:8px;margin-top:8px;border:1px solid rgba(255,255,255,0.1)" />
  </li>
  <li>🌐 <strong>Git</strong> — โปรแกรมที่ช่วย "บันทึกประวัติ" ของโค้ด เหมือน Save Game ถ้าเขียนพลาดก็ย้อนกลับได้ → <a href="https://git-scm.com/downloads" target="_blank" rel="noopener">ดาวน์โหลด Git</a></li>
  <li>🐙 <strong>GitHub</strong> — เว็บไซต์สำหรับเก็บโค้ดออนไลน์ เหมือน Google Drive แต่สำหรับโค้ด ใช้โชว์ผลงานให้บริษัทดูได้ → <a href="https://github.com/signup" target="_blank" rel="noopener">สมัคร GitHub</a></li>
  <li>☁️ <strong>Cloud (คลาวด์)</strong> — คอมพิวเตอร์ที่อยู่บนอินเทอร์เน็ต เราเช่าใช้ได้โดยไม่ต้องซื้อเครื่องเอง สมัครฟรีได้เลย:
    <ul>
      <li>Google Cloud → <a href="https://cloud.google.com/free" target="_blank" rel="noopener">สมัครฟรี (ได้ $300 credit)</a></li>
      <li>AWS → <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener">สมัครฟรี (ใช้ได้ 12 เดือน)</a></li>
    </ul>
  </li>
</ul>

<div class="tip-box">💡 <strong>ยังไม่ต้องติดตั้งทั้งหมดตอนนี้!</strong> เริ่มจากโหลดแค่ Python + VS Code ก่อน แล้วค่อยติดตั้งตัวอื่นเมื่อเรียนถึงบทนั้นๆ</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ สาย Data มี 3 สายหลัก: DE (สร้างท่อข้อมูล), DA (วิเคราะห์ข้อมูล), DS (สร้างโมเดล AI) — เลือกสายที่ชอบแล้วเจาะลึก</li>
  <li>✅ แผนการเรียน 10 เดือน: เริ่มจาก SQL + Python → Storage + ETL → Airflow + Docker + Cloud → Data Modeling → Portfolio</li>
  <li>✅ Mindset สำคัญ: เรียนทีละเรื่อง ลงมือทำจริง ไม่กลัว Error และเข้าใจ "ทำไม" ก่อน "ทำยังไง"</li>
  <li>✅ เครื่องมือเริ่มต้น: Python + VS Code ก่อน ค่อยเพิ่ม Docker, Git, Cloud ทีหลัง</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ติดตั้ง Python + VS Code ให้เรียบร้อย แล้วไปบทถัดไปเพื่อเริ่มเรียน SQL ซึ่งเป็นทักษะสำคัญที่สุดของ DE!
</div>
`,
  },
  {
    number: 2,
    slug: 'sql-fundamentals',
    emoji: '🗄️',
    title: 'SQL Fundamentals',
    content: `
<h2>🗄️ SQL — อาวุธที่ DE ต้องเก่งที่สุด</h2>

<img src="/images/de101/sql.png" alt="SQL Fundamentals" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🤔 SQL คืออะไร? (อ่านว่า "เอส-คิว-แอล")</h3>
<p><strong>SQL</strong> คือ <strong>"ภาษาที่ใช้คุยกับฐานข้อมูล"</strong></p>
<p>ลองนึกว่าเรามี <strong>ตาราง Excel ขนาดยักษ์</strong> ที่มีข้อมูลเป็นล้านแถว SQL คือภาษาที่เราใช้ "ถามคำถาม" กับตารางนั้น แล้วมันจะตอบกลับมาให้ทันที เช่น:</p>
<ul>
  <li>"ลูกค้าคนไหนซื้อของเยอะที่สุด?" → SQL ตอบได้!</li>
  <li>"เดือนนี้ยอดขายเท่าไหร่?" → SQL ตอบได้!</li>
  <li>"สินค้าไหนขายดีในภาคอีสาน?" → SQL ตอบได้!</li>
</ul>

<h3>🤔 ฐานข้อมูล (Database) คืออะไร?</h3>
<p><strong>ฐานข้อมูล</strong> คือที่เก็บข้อมูลแบบเป็นระเบียบ เหมือน Excel ที่มีหลายชีต (Sheet) แต่เก็บข้อมูลได้มากกว่า เร็วกว่า และหลายคนเข้าถึงพร้อมกันได้ ตัวอย่างเช่น MySQL, PostgreSQL</p>

<div class="tip-box">💡 <strong>ทุกสัมภาษณ์ Data Engineer จะถาม SQL!</strong> ถ้าเก่ง SQL = ได้เปรียบมาก</div>

<h3>1.1 JOIN — รวมตารางเข้าด้วยกัน</h3>

<p><strong>ทำไมต้องรู้?</strong> ข้อมูลจริงไม่เคยอยู่ในตารางเดียว เช่น ข้อมูลลูกค้าอยู่ตาราง customers แต่ข้อมูลออเดอร์อยู่ตาราง orders เราต้อง "รวม" มันเข้าด้วยกัน</p>

<p><strong>เปรียบเทียบ:</strong> JOIN เหมือนการ "จับคู่" ข้อมูลจาก 2 ตาราง เหมือน VLOOKUP ใน Excel นั่นเอง!</p>

<pre><code>-- ตัวอย่าง: อยากรู้ว่าลูกค้าแต่ละคนสั่งซื้ออะไรบ้าง
-- เราจับคู่ตาราง orders กับ customers โดยใช้ customer_id

SELECT 
  c.customer_name,    -- ชื่อลูกค้า (จากตาราง customers)
  o.order_id,         -- เลขออเดอร์ (จากตาราง orders)
  o.total             -- ยอดเงิน (จากตาราง orders)
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;
-- INNER JOIN = เอาเฉพาะข้อมูลที่ "จับคู่ได้" ทั้ง 2 ตาราง</code></pre>

<p><strong>JOIN มีหลายแบบ ดูตารางนี้:</strong></p>
<table>
  <tr><th>ชนิด JOIN</th><th>ทำอะไร</th><th>ใช้เมื่อไหร่</th></tr>
  <tr><td><strong>INNER JOIN</strong></td><td>เอาเฉพาะที่จับคู่ได้ทั้ง 2 ฝั่ง</td><td>ต้องการเฉพาะข้อมูลที่ครบ</td></tr>
  <tr><td><strong>LEFT JOIN ⭐</strong></td><td>เอาทั้งหมดจากตารางซ้าย + จับคู่จากขวา</td><td>ใช้บ่อยที่สุด! ต้องการข้อมูลทั้งหมดจากตารางหลัก</td></tr>
  <tr><td><strong>RIGHT JOIN</strong></td><td>เหมือน LEFT แต่กลับด้าน</td><td>ไม่ค่อยใช้ เขียน LEFT JOIN กลับด้านดีกว่า</td></tr>
  <tr><td><strong>FULL OUTER JOIN</strong></td><td>เอาทั้งหมดจากทั้ง 2 ตาราง</td><td>เปรียบเทียบข้อมูล 2 ชุด</td></tr>
</table>

<pre><code>-- ตัวอย่าง LEFT JOIN: อยากรู้ว่าลูกค้าแต่ละคนสั่งกี่ครั้ง
-- (รวมลูกค้าที่ยังไม่เคยสั่งด้วย → จะแสดง 0)

SELECT 
  c.customer_name,                         -- ชื่อลูกค้า
  COUNT(o.order_id) AS total_orders        -- นับจำนวนออเดอร์
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id -- LEFT = เอาลูกค้าทุกคน
GROUP BY c.customer_name;                  -- จัดกลุ่มตามชื่อ</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ถ้าไม่รู้จะใช้ JOIN แบบไหน → ใช้ LEFT JOIN ไว้ก่อน! เพราะมันให้ข้อมูลจากตารางหลักทุกแถว ไม่หายไปไหน</div>

<h3>1.2 Window Functions — คำนวณแบบไม่ต้องรวมกลุ่ม</h3>

<p><strong>ทำไมต้องรู้?</strong> บางทีเราอยากใส่ "ลำดับ" หรือ "ยอดสะสม" ลงไปในตาราง โดยไม่ต้องยุบข้อมูล</p>

<p><strong>เปรียบเทียบ:</strong> ลองนึกถึงการแข่งวิ่ง — ทุกคนวิ่งเสร็จแล้ว เราอยากใส่ "อันดับ" ให้ทุกคน แต่ไม่ได้ลบใครออก นั่นคือ Window Function!</p>

<pre><code>-- ตัวอย่าง: จัดอันดับเงินเดือนในแต่ละแผนก
-- แต่ละแถวยังอยู่ครบ แค่เพิ่มคอลัมน์ "อันดับ" เข้าไป

SELECT 
  employee_name,                            -- ชื่อพนักงาน
  department,                                -- แผนก
  salary,                                    -- เงินเดือน
  ROW_NUMBER() OVER (
    PARTITION BY department                  -- แบ่งกลุ่มตามแผนก
    ORDER BY salary DESC                     -- เรียงเงินเดือนมาก→น้อย
  ) AS rank_in_dept                          -- ผลลัพธ์: อันดับในแผนก
FROM employees;</code></pre>

<pre><code>-- ตัวอย่าง: ยอดขายวันนี้ เทียบกับเมื่อวาน
-- LAG = "ดึงค่าจากแถวก่อนหน้า"

SELECT 
  date,                                      -- วันที่
  revenue,                                   -- ยอดขายวันนี้
  LAG(revenue, 1) OVER (ORDER BY date)       -- ยอดขายเมื่อวาน
    AS prev_day,
  revenue - LAG(revenue, 1) OVER (ORDER BY date)  -- ผลต่าง
    AS daily_change
FROM daily_sales;</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> Window Functions เหมือน "เพิ่มคอลัมน์พิเศษ" ลงในตาราง โดยข้อมูลเดิมไม่หาย — ต่างจาก GROUP BY ที่ยุบแถวรวมกัน</div>

<h3>1.3 CTE — แบ่ง Query ยาวๆ ให้อ่านง่าย</h3>

<p><strong>ทำไมต้องรู้?</strong> Query จริงๆ มักยาวมาก CTE ช่วยแบ่งเป็นขั้นตอนเล็กๆ อ่านง่ายขึ้น</p>

<p><strong>เปรียบเทียบ:</strong> CTE เหมือน "การแบ่งสูตรอาหาร" เป็นขั้นตอนย่อยๆ แทนที่จะทำทุกอย่างรวดเดียว</p>

<pre><code>-- แทนที่จะเขียน query ยาว ซ้อนกัน 5 ชั้น...
-- เราใช้ CTE แบ่งเป็นขั้นตอนง่ายๆ:

-- ขั้นตอน 1: หายอดขายรายเดือน
WITH monthly_sales AS (
  SELECT 
    DATE_TRUNC('month', order_date) AS month,  -- ตัดให้เหลือแค่เดือน
    SUM(total) AS revenue                       -- รวมยอดขาย
  FROM orders 
  GROUP BY 1
),

-- ขั้นตอน 2: คำนวณอัตราเติบโต
growth AS (
  SELECT 
    month, 
    revenue,
    LAG(revenue) OVER (ORDER BY month) AS prev_month,   -- เดือนก่อน
    ROUND(
      (revenue - LAG(revenue) OVER (ORDER BY month)) /
      NULLIF(LAG(revenue) OVER (ORDER BY month), 0) * 100
    , 2) AS growth_pct                                   -- % เติบโต
  FROM monthly_sales
)

-- ขั้นตอน 3: แสดงเฉพาะเดือนที่เติบโต > 10%
SELECT * FROM growth WHERE growth_pct > 10;</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ใช้ <code>WITH ... AS (...)</code> แบ่ง Query ยาวๆ เป็นขั้นตอนย่อยๆ อ่านง่าย แก้ง่าย debug ง่าย!</div>

<h3>1.4 EXPLAIN — ดูว่า Query ช้าเพราะอะไร</h3>

<p><strong>เปรียบเทียบ:</strong> EXPLAIN เหมือน "เปิด GPS ดูเส้นทาง" — มันบอกว่า Database กำลังจะทำอะไร ใช้ทางไหน ก่อนที่จะรัน query จริง</p>

<pre><code>-- แค่ใส่ EXPLAIN ข้างหน้า query เดิม
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 12345;

-- ดูผลลัพธ์:
-- ถ้าเห็น "Seq Scan" = กำลังอ่านทั้งตาราง (ช้ามาก! ⛔)
-- ถ้าเห็น "Index Scan" = ใช้ทางลัด (เร็วมาก! ✅)</code></pre>

<pre><code>-- ถ้า query ช้า → สร้าง Index (ทางลัด) ให้ Database
-- เหมือนสร้าง "สารบัญ" ให้หนังสือ แทนที่จะอ่านทุกหน้า

CREATE INDEX idx_orders_customer
ON orders (customer_id);</code></pre>

<div class="warning-box">⚠️ <strong>ข้อควรระวัง:</strong> Index ไม่ใช่ยิ่งเยอะยิ่งดี! ทุก Index ทำให้การเพิ่ม/แก้ข้อมูลช้าลง เพราะ Database ต้องอัปเดต Index ด้วย — ใส่เฉพาะ column ที่ถูกค้นหาบ่อยๆ</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ JOIN ใช้รวมข้อมูลจากหลายตาราง — ถ้าไม่แน่ใจให้ใช้ LEFT JOIN เพราะเก็บข้อมูลจากตารางหลักครบทุกแถว</li>
  <li>✅ Window Functions ช่วยคำนวณ (จัดอันดับ, ยอดสะสม, เทียบค่าก่อนหน้า) โดยไม่ยุบแถวเหมือน GROUP BY</li>
  <li>✅ CTE (WITH ... AS) ช่วยแบ่ง Query ยาวๆ เป็นขั้นตอนย่อยๆ อ่านง่าย debug ง่าย</li>
  <li>✅ EXPLAIN ช่วยวิเคราะห์ว่า Query ช้าเพราะอะไร และใช้ Index เป็น "สารบัญ" ช่วยค้นหาเร็วขึ้น</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ฝึกเขียน SQL ด้วยตัวเองใน PostgreSQL หรือ BigQuery ลองใช้ JOIN, Window Functions, CTE กับข้อมูลจริง แล้วไปบทถัดไปเรียน Python!
</div>
`,
  },
  {
    number: 3,
    slug: 'python-de',
    emoji: '🐍',
    title: 'Python for Data Engineering',
    content: `
<h2>🐍 Python — เขียนโค้ดจัดการข้อมูล</h2>

<img src="/images/de101/python.png" alt="Python for DE" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🤔 Python คืออะไร?</h3>
<p><strong>Python</strong> คือ <strong>ภาษาโปรแกรม</strong> ที่ใช้เขียนคำสั่งให้คอมพิวเตอร์ทำงานแทนเรา เช่น อ่านไฟล์ 10 ล้านแถว, ดึงข้อมูลจากเว็บ, ส่งข้อมูลเข้าฐานข้อมูล — ทั้งหมดนี้ทำอัตโนมัติโดยไม่ต้องนั่งทำเอง!</p>
<p>Python เป็นภาษาที่ <strong>เขียนง่ายที่สุด</strong> ในบรรดาภาษาโปรแกรมทั้งหมด อ่านแล้วเข้าใจได้เกือบเหมือนภาษาอังกฤษ</p>

<div class="tip-box">🔗 <strong>เตรียมเครื่องมือ:</strong>
<ul>
  <li>ดาวน์โหลด Python — <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">python.org/downloads</a> (ตอนติดตั้ง ✅ ติ๊กช่อง "Add Python to PATH" ด้วยนะ!)</li>
  <li>ดาวน์โหลด VS Code — <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">code.visualstudio.com</a></li>
  <li>ติดตั้ง Library (เหมือนปลั๊กอินเสริมความสามารถ): เปิด Terminal แล้วพิมพ์ <code>pip install requests psycopg2-binary pandas</code></li>
</ul>
</div>

<h3>🤔 Library / pip คืออะไร?</h3>
<p><strong>Library</strong> คือ "ชุดเครื่องมือสำเร็จรูป" ที่คนอื่นเขียนไว้แล้ว เราเอามาใช้ได้เลย ไม่ต้องเขียนเอง เช่น <code>requests</code> ช่วยดึงข้อมูลจากเว็บ, <code>pandas</code> ช่วยจัดการตาราง</p>
<p><strong>pip</strong> คือ "ตัวช่วยติดตั้ง Library" แค่พิมพ์ <code>pip install ชื่อ</code> ใน Terminal ก็ได้ Library มาใช้แล้ว!</p>

<h3>2.1 อ่านไฟล์ขนาดใหญ่ — ทีละนิด ไม่ล่ม!</h3>

<p><strong>ปัญหา:</strong> ถ้าไฟล์มีข้อมูล 10 ล้านแถว แล้วเราสั่ง "อ่านทั้งหมดทีเดียว" คอมจะ RAM เต็มแล้วค้างเลย!</p>
<p><strong>วิธีแก้:</strong> อ่านทีละ 10,000 แถว ประมวลผลเสร็จ แล้วค่อยอ่านชุดต่อไป</p>

<pre><code>import csv

def process_large_csv(filepath):
    """อ่านไฟล์ CSV ขนาดใหญ่ โดยไม่กิน RAM เยอะ"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)          # อ่านเป็น dictionary
        batch = []                           # เก็บข้อมูลชั่วคราว
        
        for i, row in enumerate(reader):     # อ่านทีละแถว
            batch.append(row)                # เก็บเข้า batch
            
            if len(batch) >= 10000:          # ครบ 10,000 แถวแล้ว?
                process_batch(batch)         # ส่งไปประมวลผล
                batch = []                   # เคลียร์ batch
                print(f"ประมวลผลแล้ว {i+1:,} แถว...")
        
        if batch:                            # แถวที่เหลือ (ไม่ครบ 10,000)
            process_batch(batch)</code></pre>

<div class="warning-box">⚠️ <strong>ห้ามทำแบบนี้!</strong> <code>data = open('huge_file.csv').readlines()</code> — ถ้าไฟล์ใหญ่ 10GB จะกิน RAM 10GB แล้วค้างทันที!</div>

<h3>2.2 ดึงข้อมูลจาก API — ระบบ retry อัตโนมัติ</h3>

<h4>🤔 API คืออะไร?</h4>
<p><strong>API</strong> (อ่านว่า "เอ-พี-ไอ") คือ <strong>"ช่องทางที่แอปคุยกัน"</strong> — เหมือนหน้าต่างสั่งอาหารร้าน drive-through: เราสั่ง (ส่งคำขอ) → ร้านทำ (ประมวลผล) → ร้านส่งอาหารกลับมา (ส่งข้อมูลกลับ)</p>
<p>เช่น เราอยากรู้สภาพอากาศวันนี้ → ส่งคำขอไปยัง API ของ กรมอุตุ → API ส่งข้อมูลอุณหภูมิ, ความชื้น กลับมาให้เรา</p>

<p><strong>ทำไมต้องรู้?</strong> งาน DE ต้องดึงข้อมูลจาก API ภายนอกบ่อยมาก เช่น ข้อมูลสภาพอากาศ, ข้อมูลหุ้น, ข้อมูลจาก LINE/Facebook</p>
<p><strong>ปัญหา:</strong> API อาจล่มชั่วคราว ถ้าเราไม่มีระบบ retry โปรแกรมจะพังทันที</p>

<pre><code>import requests
from time import sleep

def fetch_with_retry(url, max_retries=3):
    """ดึงข้อมูลจาก API ถ้าล้มเหลวจะลองใหม่อัตโนมัติ"""
    
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=30)  # รอไม่เกิน 30 วินาที
            response.raise_for_status()                # เช็คว่าสำเร็จไหม
            return response.json()                     # ส่งข้อมูลกลับ
            
        except requests.exceptions.RequestException as e:
            wait_time = 2 ** attempt     # รอ 1, 2, 4 วินาที (นานขึ้นเรื่อยๆ)
            print(f"⚠️ ครั้งที่ {attempt+1} ล้มเหลว: {e}")
            print(f"   รออีก {wait_time} วินาทีแล้วลองใหม่...")
            sleep(wait_time)
    
    raise Exception(f"❌ ล้มเหลวทั้ง {max_retries} ครั้ง")</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> เทคนิค "exponential backoff" (รอนานขึ้นเรื่อยๆ) เป็นมาตรฐานที่ทุกบริษัทใช้ เพราะไม่อยากถล่ม API ด้วยการ retry ถี่เกินไป</div>

<h3>2.3 Error Handling — จับ error ไม่ให้โปรแกรมตาย</h3>

<p><strong>เปรียบเทียบ:</strong> เหมือนการขับรถ — ถ้าเจอหลุมบ่อ เราหลบ ไม่ใช่ขับลงหลุมแล้วหยุด! Error Handling ทำให้โปรแกรมยังทำงานต่อได้แม้เจอข้อมูลแปลกๆ</p>

<pre><code>import logging

# ตั้งค่าให้บันทึก log ทุกอย่างที่เกิดขึ้น
logging.basicConfig(level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s')
logger = logging.getLogger(__name__)

def safe_transform(record):
    """แปลงข้อมูล 1 แถว ถ้าแถวนี้มีปัญหา → ข้ามไป ไม่หยุดทั้งหมด"""
    try:
        return {
            'id': record['id'],
            'amount': float(record.get('amount', 0)),      # แปลงเป็นตัวเลข
            'status': record.get('status', 'unknown').lower(),
        }
    except (ValueError, KeyError) as e:
        logger.warning(f"⚠️ ข้อมูลมีปัญหา: {record.get('id')} | {e}")
        return None   # ส่ง None กลับ → ข้ามแถวนี้ไป</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ใช้ <code>try/except</code> ครอบทุกจุดที่อาจมี error — อย่าปล่อยให้ข้อมูลเสีย 1 แถว ทำให้ Pipeline ทั้งหมดหยุดทำงาน!</div>

<h3>2.4 เชื่อมต่อ Database — อ่าน/เขียนข้อมูลจาก Python</h3>

<pre><code>import psycopg2

# เชื่อมต่อ PostgreSQL
conn = psycopg2.connect(
    host="localhost",        # ที่อยู่ Database
    database="warehouse",    # ชื่อ Database
    user="etl_user",         # Username
    password="secret"        # Password
)

# อ่านข้อมูล
cursor = conn.cursor()
cursor.execute("SELECT * FROM customers LIMIT 10")
rows = cursor.fetchall()    # ดึงผลลัพธ์ทั้งหมด
for row in rows:
    print(row)

# ปิดการเชื่อมต่อ (สำคัญมาก!)
cursor.close()
conn.close()</code></pre>

<div class="warning-box">⚠️ <strong>อย่าลืมปิดการเชื่อมต่อ!</strong> ถ้าเปิดทิ้งไว้เยอะๆ Database จะรับไม่ไหวแล้วล่ม — ใช้ <code>with</code> statement จะปิดให้อัตโนมัติ</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ อ่านไฟล์ขนาดใหญ่ต้องอ่านทีละ batch (เช่น ทีละ 10,000 แถว) ไม่งั้น RAM เต็มแล้วค้าง</li>
  <li>✅ ดึงข้อมูลจาก API ต้องมีระบบ retry + exponential backoff (รอนานขึ้นเรื่อยๆ) เพื่อไม่ถล่ม API</li>
  <li>✅ ใช้ try/except จับ error ทุกจุดที่อาจมีปัญหา อย่าปล่อยให้ข้อมูลเสีย 1 แถวทำ Pipeline ทั้งหมดหยุด</li>
  <li>✅ เชื่อมต่อ Database ด้วย psycopg2 และอย่าลืมปิด connection เสมอ</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองเขียน Python อ่านไฟล์ CSV ขนาดใหญ่ และลองเรียก API จริง (เช่น API สภาพอากาศ) พร้อมระบบ retry แล้วไปบทถัดไปเรียนเรื่อง Storage!
</div>
`,
  },
  {
    number: 4,
    slug: 'storage',
    emoji: '💾',
    title: 'Storage Fundamentals',
    content: `
<h2>📦 เก็บข้อมูลยังไงดี รูปแบบไหนเหมาะอะไร</h2>

<img src="/images/de101/storage.png" alt="Storage Fundamentals" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ข้อมูลที่ DE จัดการนั้นมีหลายล้านแถว ต้องเก็บให้ถูกที่ ถูกรูปแบบ ไม่งั้นจะค้นหาช้ามากหรือเปลืองเงินโดยไม่จำเป็น!</p>

<h3>3.1 OLTP vs OLAP — 2 ระบบที่ต่างกันโดยสิ้นเชิง</h3>

<p><strong>เปรียบเทียบ:</strong></p>
<ul>
  <li><strong>OLTP</strong> เหมือน <strong>"แคชเชียร์"</strong> — รับเงิน ออกใบเสร็จ ทีละรายการ เร็วมาก</li>
  <li><strong>OLAP</strong> เหมือน <strong>"นักบัญชี"</strong> — นั่งวิเคราะห์ว่าเดือนนี้ขายได้เท่าไหร่ สินค้าไหนขายดี</li>
</ul>

<table>
  <tr><th></th><th>OLTP (ระบบธุรกรรม)</th><th>OLAP (ระบบวิเคราะห์)</th></tr>
  <tr><td><strong>ใช้ทำอะไร</strong></td><td>สั่งซื้อ, จ่ายเงิน, สมัครสมาชิก</td><td>ทำรายงาน, Dashboard</td></tr>
  <tr><td><strong>ลักษณะการใช้</strong></td><td>แก้ไขทีละ 1 แถว</td><td>อ่านทีละล้านแถว</td></tr>
  <tr><td><strong>ตัวอย่าง</strong></td><td>MySQL, PostgreSQL</td><td>BigQuery, Snowflake</td></tr>
</table>

<div class="warning-box">⛔ <strong>กฎเหล็ก:</strong> ห้ามรัน Query วิเคราะห์หนักๆ บน Database ที่ใช้รับออเดอร์ลูกค้า! มันจะทำให้ระบบช้า ลูกค้าสั่งซื้อไม่ได้ — ต้องแยก Database กัน</div>

<h3>3.2 เก็บข้อมูลที่ไหนดี?</h3>

<p>มี 3 แบบหลักๆ เปรียบเทียบง่ายๆ:</p>

<pre><code>📦 Data Warehouse (คลังสินค้าจัดเรียบร้อย)
   → ข้อมูลถูกจัดระเบียบแล้ว ค้นหาเร็วมาก
   → เหมือน: ห้องสมุดที่จัดหมวดหมู่ดี
   → เช่น: BigQuery, Snowflake, Redshift

🌊 Data Lake (ทะเลสาบเก็บทุกอย่าง)
   → เก็บข้อมูลดิบทุกรูปแบบ ราคาถูก
   → เหมือน: โกดังเก็บของ เอาอะไรมาก็ใส่ได้
   → เช่น: AWS S3, Google Cloud Storage

🏠 Data Lakehouse (รวมข้อดีจากทั้ง 2 แบบ)
   → เก็บข้อมูลดิบได้ + ค้นหาเร็ว
   → เหมือน: โกดังที่มีระบบจัดเก็บดี
   → เช่น: Delta Lake, Apache Iceberg</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> เริ่มต้นแนะนำ BigQuery (ของ Google) เพราะใช้ง่าย ฟรี 1TB/เดือน ไม่ต้องติดตั้งอะไร แค่มี Google Account!</div>

<h3>3.3 รูปแบบไฟล์ข้อมูล — ใช้แบบไหนดี?</h3>

<table>
  <tr><th>รูปแบบ</th><th>ลักษณะ</th><th>ใช้เมื่อ</th><th>เหมือน</th></tr>
  <tr><td><strong>CSV</strong></td><td>ข้อความธรรมดา</td><td>ส่งให้คนอื่นดูง่ายๆ</td><td>สมุดจด</td></tr>
  <tr><td><strong>JSON</strong></td><td>โครงสร้างยืดหยุ่น</td><td>ข้อมูลจาก API</td><td>แฟ้มเอกสาร</td></tr>
  <tr><td><strong>Parquet ⭐</strong></td><td>บีบอัด เร็วมาก</td><td>งาน Analytics</td><td>ฐานข้อมูลย่อส่วน</td></tr>
</table>

<div class="tip-box">💡 <strong>จำแค่นี้:</strong> ถ้าเก็บข้อมูลเพื่อวิเคราะห์ → ใช้ <strong>Parquet</strong> เสมอ! เร็วกว่า CSV 10-100 เท่า เพราะมันบีบอัดข้อมูลและอ่านได้เฉพาะคอลัมน์ที่ต้องการ</div>

<h3>3.4 Partitioning — แบ่งข้อมูลเป็นกล่องย่อยๆ</h3>

<p><strong>เปรียบเทียบ:</strong> ลองนึกถึงตู้เก็บเอกสาร — ถ้าเราแบ่งเป็นลิ้นชักตามเดือน เวลาจะหาเอกสารเดือน มี.ค. ก็เปิดแค่ลิ้นชักเดียว ไม่ต้องค้นทั้งตู้!</p>

<pre><code>data/
├── year=2024/
│   ├── month=01/   → ข้อมูลเดือน ม.ค.
│   ├── month=02/   → ข้อมูลเดือน ก.พ.
│   └── month=03/   → ข้อมูลเดือน มี.ค.

# เวลา query WHERE date = '2024-03-15'
# ระบบจะอ่านแค่โฟลเดอร์ month=03 โฟลเดอร์เดียว!
# ไม่ต้อง scan ข้อมูลทั้ง TB → เร็วขึ้นมากและประหยัดเงิน</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> Partition ตาม column ที่ถูก filter บ่อยที่สุด — ส่วนใหญ่คือ <strong>วันที่</strong></div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ OLTP (แคชเชียร์) ใช้รับธุรกรรมทีละรายการ ส่วน OLAP (นักบัญชี) ใช้วิเคราะห์ข้อมูลล้านแถว — ห้ามรัน Query หนักๆ บน OLTP!</li>
  <li>✅ Data Warehouse (จัดระเบียบ, เร็ว), Data Lake (เก็บดิบทุกอย่าง, ถูก), Lakehouse (รวมข้อดีทั้งคู่) — เริ่มจาก BigQuery ฟรี!</li>
  <li>✅ เก็บข้อมูลเพื่อวิเคราะห์ → ใช้ Parquet เสมอ เร็วกว่า CSV 10-100 เท่า</li>
  <li>✅ Partitioning แบ่งข้อมูลเป็นกล่องย่อย (ส่วนใหญ่ตามวันที่) ช่วยให้ query เร็วขึ้นมากและประหยัดเงิน</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> สมัคร Google Cloud ฟรี แล้วลองใช้ BigQuery query ข้อมูล public dataset ไปบทถัดไปเรียนเรื่อง Compute (Batch vs Streaming)!
</div>
`,
  },
  {
    number: 5,
    slug: 'compute',
    emoji: '⚡',
    title: 'Compute Fundamentals',
    content: `
<h2>⚡ Batch vs Streaming — เข้าใจแบบง่ายๆ</h2>

<img src="/images/de101/compute.png" alt="Batch vs Streaming" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ข้อมูลมี 2 แบบใหญ่ๆ ในการประมวลผล:</p>
<ul>
  <li><strong>Batch</strong> = รอสะสมแล้วทำทีเดียว เหมือน <strong>"ซักผ้ารวม"</strong></li>
  <li><strong>Streaming</strong> = ทำทันทีที่ข้อมูลมา เหมือน <strong>"ล้างจานทันทีหลังกิน"</strong></li>
</ul>

<table>
  <tr><th></th><th>Batch Processing</th><th>Stream Processing</th></tr>
  <tr><td><strong>ทำเมื่อไหร่?</strong></td><td>ทุกชั่วโมง / ทุกวัน</td><td>ทันที (ภายในวินาที)</td></tr>
  <tr><td><strong>เครื่องมือ</strong></td><td>Spark, dbt, SQL</td><td>Kafka, Flink</td></tr>
  <tr><td><strong>ตัวอย่าง</strong></td><td>รายงานยอดขายประจำวัน</td><td>ตรวจจับการฉ้อโกงทันที</td></tr>
  <tr><td><strong>ความยาก</strong></td><td>ง่ายกว่า ✅</td><td>ยากกว่า ⚠️</td></tr>
  <tr><td><strong>ค่าใช้จ่าย</strong></td><td>จ่ายตาม batch</td><td>จ่ายตลอด 24/7</td></tr>
</table>

<div class="tip-box">💡 <strong>กฎง่ายๆ:</strong> เริ่มจาก Batch ก่อนเสมอ! 90% ของงานจริงไม่ต้องการ real-time — ถ้า business บอก "ขอรายงานวันละครั้ง" ก็ใช้ Batch พอ ง่ายกว่าเยอะ!</div>

<h3>4.2 Apache Spark — ประมวลผลข้อมูลขนาดใหญ่</h3>

<p><strong>ทำไมต้องรู้?</strong> ถ้าข้อมูลมีหลายร้อยล้านแถว Python ธรรมดาจะช้ามาก Spark แบ่งงานให้หลายเครื่องทำพร้อมกัน เร็วขึ้นมหาศาล!</p>

<p><strong>เปรียบเทียบ:</strong> ถ้าต้องนับเงินเหรียญ 1 ล้านเหรียญ คนเดียุนับ = 1 สัปดาห์ แต่ถ้าแบ่งให้ 100 คนนับคนละส่วน = เสร็จใน 1 ชั่วโมง นั่นคือ Spark!</p>

<pre><code>from pyspark.sql import SparkSession

# สร้าง Spark Session (เหมือนเปิดโปรแกรม)
spark = SparkSession.builder \\
    .appName("SalesAnalysis") \\
    .getOrCreate()

# อ่านไฟล์ Parquet (เร็วกว่า CSV มาก!)
df = spark.read.parquet("gs://data-lake/sales/")

# วิเคราะห์: ยอดขายแต่ละหมวดสินค้า
result = (df
    .filter(col("status") == "completed")            # กรอง: เฉพาะที่สำเร็จ
    .groupBy("product_category")                      # จัดกลุ่ม: ตามหมวด
    .agg(
        sum("revenue").alias("total_revenue"),        # รวมยอดขาย
        count("order_id").alias("total_orders"),      # นับจำนวนออเดอร์
    )
    .orderBy(col("total_revenue").desc())             # เรียง: มากไปน้อย
)

# บันทึกผลลัพธ์
result.write.mode("overwrite").parquet("gs://warehouse/sales_summary/")</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> Spark เขียนคล้ายๆ Pandas แต่ทำงานได้เร็วกว่าเป็น 100 เท่า เพราะแบ่งงานให้หลายเครื่องทำพร้อมกัน — ถ้าข้อมูลเกิน 1 ล้านแถว ลองใช้ Spark!</div>

<h3>4.3 Apache Kafka — ส่งข้อมูลแบบ Real-time</h3>

<p><strong>เปรียบเทียบ:</strong> Kafka เหมือน <strong>"สายพานลำเลียง"</strong> ในโรงงาน — ข้อมูลวิ่งผ่านสายพานตลอดเวลา ใครอยากรับก็มาหยิบได้เลย</p>

<pre><code># ส่งข้อมูลเข้า Kafka (Producer = คนส่งของขึ้นสายพาน)
from confluent_kafka import Producer
import json

producer = Producer({'bootstrap.servers': 'kafka:9092'})
producer.produce(
    'transactions',                                    # ชื่อสายพาน (topic)
    value=json.dumps({'amount': 5000, 'type': 'purchase'})  # ข้อมูลที่ส่ง
)

# รับข้อมูลจาก Kafka (Consumer = คนหยิบของจากสายพาน)
from confluent_kafka import Consumer

consumer = Consumer({
    'bootstrap.servers': 'kafka:9092',
    'group.id': 'my-group',
})
consumer.subscribe(['transactions'])   # บอกว่าจะรับจากสายพานไหน

while True:
    msg = consumer.poll(timeout=1.0)   # รอรับข้อมูล
    if msg and not msg.error():
        data = json.loads(msg.value()) # แปลงเป็น Python dict
        print(f"ได้รับข้อมูล: {data}")</code></pre>

<div class="warning-box">⚠️ <strong>อย่า over-engineer!</strong> ถ้า business ต้องการรายงานวันละครั้ง ไม่ต้องใช้ Kafka — ใช้ Airflow + SQL ง่ายกว่า ถูกกว่า ดูแลง่ายกว่า</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Batch = รอสะสมแล้วทำทีเดียว (ง่าย ถูก 90% ของงาน), Streaming = ทำทันที (ยาก แพง ใช้เมื่อจำเป็นจริงๆ)</li>
  <li>✅ Spark ช่วยประมวลผลข้อมูลหลายร้อยล้านแถวโดยแบ่งงานให้หลายเครื่องทำพร้อมกัน เขียนคล้าย Pandas</li>
  <li>✅ Kafka เหมือน "สายพานลำเลียง" ส่งข้อมูลแบบ real-time มี Producer (ส่ง) และ Consumer (รับ)</li>
  <li>✅ กฎสำคัญ: เริ่มจาก Batch เสมอ! อย่า over-engineer ถ้า business ไม่ได้ต้องการ real-time</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองเขียน PySpark อ่านไฟล์ CSV/Parquet แบบง่ายๆ แล้วไปบทถัดไปเรียนเรื่อง ETL Pipeline ซึ่งเป็นหัวใจของงาน DE!
</div>
`,
  },
  {
    number: 6,
    slug: 'etl-pipeline',
    emoji: '🔄',
    title: 'ETL / ELT Pipelines',
    content: `
<h2>🚧 สร้าง Data Pipeline — หัวใจของงาน DE</h2>

<img src="/images/de101/etl.png" alt="ETL Pipeline" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>Data Pipeline</strong> คือ ระบบอัตโนมัติที่ <strong>ดึงข้อมูล → แปลง → ส่ง</strong> จากต้นทางไปยังปลายทาง</p>

<p><strong>เปรียบเทียบ:</strong> เหมือน "โรงงานผลิตน้ำดื่ม" — ดึงน้ำจากแหล่งน้ำ (Extract) → กรองให้สะอาด (Transform) → บรรจุขวดส่งลูกค้า (Load)</p>

<h3>5.1 ETL vs ELT — ต่างกันยังไง?</h3>

<table>
  <tr><th></th><th>ETL (แบบเก่า)</th><th>ELT ⭐ (แบบใหม่)</th></tr>
  <tr><td><strong>ขั้นตอน</strong></td><td>ดึง → <strong>แปลงก่อน</strong> → โหลด</td><td>ดึง → <strong>โหลดก่อน</strong> → แปลงทีหลัง</td></tr>
  <tr><td><strong>แปลงที่ไหน</strong></td><td>ใน Server กลาง</td><td>ใน Data Warehouse (เช่น BigQuery)</td></tr>
  <tr><td><strong>ข้อดี</strong></td><td>ข้อมูลเข้าสะอาด</td><td>เร็วกว่า ยืดหยุ่นกว่า</td></tr>
</table>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ปี 2024-2025 ใช้ <strong>ELT</strong> เป็นมาตรฐาน เพราะ Cloud Warehouse (เช่น BigQuery) มีพลังในการแปลงข้อมูลสูงมาก ไม่ต้องแปลงก่อน โหลดเข้าไปก่อนแล้วค่อยแปลงทีหลัง</div>

<h3>5.2 Medallion Architecture — จัดระเบียบข้อมูลเป็น 3 ชั้น</h3>

<p><strong>เปรียบเทียบ:</strong> เหมือนโรงครัว → ของสดดิบ (Bronze) → หั่นล้างสะอาด (Silver) → จานอาหารพร้อมเสิร์ฟ (Gold)</p>

<pre><code>🥉 ชั้นที่ 1: Bronze (ข้อมูลดิบ)
   → เก็บข้อมูลจากต้นทาง "ดิบๆ" ไม่แก้ไขอะไรเลย
   → เหมือน: วัตถุดิบสดจากตลาด

🥈 ชั้นที่ 2: Silver (ข้อมูลสะอาด)
   → ลบข้อมูลซ้ำ, แก้ค่าว่าง, จัดรูปแบบให้เหมือนกัน
   → เหมือน: หั่นผัก ล้างเนื้อ เตรียมพร้อม

🥇 ชั้นที่ 3: Gold (ข้อมูลพร้อมใช้)
   → สรุปตามที่ธุรกิจต้องการ พร้อมทำ Dashboard
   → เหมือน: จานอาหารที่พร้อมเสิร์ฟลูกค้า</code></pre>

<div class="tip-box">💡 <strong>ทำไมต้องแบ่ง 3 ชั้น?</strong> เพราะถ้ามีปัญหา เราสามารถย้อนกลับไปดูข้อมูลดิบ (Bronze) ได้เสมอ ไม่ต้องดึงใหม่ตั้งแต่ต้น!</div>

<h3>5.3 Data Quality — ตรวจสอบคุณภาพข้อมูล</h3>

<p><strong>ทำไมต้องตรวจ?</strong> ถ้าข้อมูลผิด → รายงานผิด → ตัดสินใจผิด → บริษัทเสียหาย!</p>

<pre><code>def validate_sales_data(df):
    """ตรวจสอบข้อมูลก่อนส่งเข้า Gold Layer"""
    
    errors = []
    
    # ✅ เช็ค 1: order_id ห้ามว่าง
    if df['order_id'].isnull().any():
        errors.append("พบ order_id ที่เป็นค่าว่าง!")
    
    # ✅ เช็ค 2: ราคาต้องมากกว่า 0
    if (df['amount'] <= 0).any():
        errors.append("พบราคาที่ไม่ถูกต้อง (≤ 0)!")
    
    # ✅ เช็ค 3: ไม่มีข้อมูลซ้ำ
    if not df['order_id'].is_unique:
        errors.append("พบ order_id ซ้ำ!")
    
    if errors:
        for e in errors:
            print(f"❌ {e}")
        return False
    else:
        print("✅ ข้อมูลผ่านการตรวจสอบ!")
        return True</code></pre>

<h3>5.4 Incremental Load — โหลดแค่ข้อมูลใหม่</h3>

<p><strong>เปรียบเทียบ:</strong> แทนที่จะลบข้อมูลทั้งหมดแล้วโหลดใหม่ทุกวัน (ช้ามาก!) เราโหลดเฉพาะข้อมูลที่ "เพิ่ม" หรือ "เปลี่ยน" ตั้งแต่ครั้งที่แล้ว — เหมือนอัปเดตแอปแค่ส่วนที่เปลี่ยน ไม่ต้องโหลดใหม่ทั้งหมด</p>

<pre><code>-- MERGE: ถ้ามีอยู่แล้ว → อัปเดต, ถ้ายังไม่มี → เพิ่มใหม่
MERGE INTO target_table t
USING (
  -- ดึงเฉพาะข้อมูลที่อัปเดตหลังจากครั้งล่าสุด
  SELECT * FROM source_table
  WHERE updated_at > (SELECT MAX(updated_at) FROM target_table)
) s
ON t.id = s.id
WHEN MATCHED THEN
  UPDATE SET t.name = s.name, t.amount = s.amount   -- อัปเดต
WHEN NOT MATCHED THEN
  INSERT (id, name, amount) VALUES (s.id, s.name, s.amount);  -- เพิ่มใหม่</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ถ้าตารางมีไม่กี่พันแถว → Full Load (ลบแล้วโหลดใหม่) ก็โอเค ง่ายดี แต่ถ้ามีเป็นล้านแถว → ใช้ Incremental Load จะเร็วกว่ามาก!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ETL (แปลงก่อนโหลด) vs ELT (โหลดก่อนแปลง) — ปัจจุบันใช้ ELT เป็นมาตรฐาน เพราะ Cloud Warehouse มีพลังแปลงข้อมูลได้เอง</li>
  <li>✅ Medallion Architecture: Bronze (ดิบ) → Silver (สะอาด) → Gold (พร้อมใช้) ช่วยจัดระเบียบและย้อนกลับได้</li>
  <li>✅ Data Quality ต้องตรวจสอบทุกครั้ง (null check, range check, duplicate check) ก่อนส่งเข้า Gold</li>
  <li>✅ Incremental Load โหลดเฉพาะข้อมูลใหม่ เร็วกว่า Full Load มากเมื่อข้อมูลมีเป็นล้านแถว</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองออกแบบ Pipeline ง่ายๆ ที่ดึงข้อมูลจาก API → แปลง → โหลดเข้า Database แล้วไปบทถัดไปเรียนเรื่อง Orchestration เพื่อให้ Pipeline ทำงานอัตโนมัติ!
</div>
`,
  },
  {
    number: 7,
    slug: 'orchestration',
    emoji: '⚙️',
    title: 'Orchestration',
    content: `
<h2>🤖 ให้ Pipeline ทำงานอัตโนมัติ</h2>

<img src="/images/de101/orchestration.png" alt="Orchestration" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>ปัญหา:</strong> เรามี Pipeline หลายตัว เช่น ดึงข้อมูล → แปลง → โหลด → แจ้งเตือน จะให้มานั่ง "กดรัน" เองทุกวันไม่ได้!</p>
<p><strong>ทางออก:</strong> ใช้ <strong>Orchestrator</strong> = "ผู้ควบคุมวง" ที่คอยสั่งให้แต่ละ task ทำงานตามลำดับ ตามเวลาที่กำหนด</p>

<h3>6.1 DAG — แผนผังลำดับงาน</h3>

<p><strong>DAG</strong> คือ "แผนผัง" ที่กำหนดว่า task ไหนต้องทำก่อน/หลัง — เหมือนสูตรทำอาหาร: ต้องหั่นผักก่อนผัด ต้องผัดก่อนตักใส่จาน</p>

<pre><code>ดึงข้อมูล → แปลงข้อมูล → ตรวจคุณภาพ → โหลดเข้าคลัง → แจ้งเตือน
                                                ↓
                                        ส่งรายงานอีเมล</code></pre>

<h3>6.2 Apache Airflow — เครื่องมือยอดนิยมที่สุด</h3>

<p><strong>Airflow</strong> คือ "นาฬิกาปลุกอัจฉริยะ" ที่ไม่ใช่แค่ปลุกเรา แต่ยังบอกว่าต้องทำอะไรบ้าง ทำเสร็จแล้วหรือยัง ถ้าพลาดก็ลองใหม่ให้อัตโนมัติ!</p>

<pre><code>from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

# ตั้งค่าพื้นฐาน
default_args = {
    'owner': 'data-team',           # ทีมที่ดูแล
    'retries': 3,                    # ลองใหม่ 3 ครั้งถ้าล้มเหลว
    'retry_delay': timedelta(minutes=5),  # รอ 5 นาทีก่อนลองใหม่
}

# สร้าง DAG (แผนงาน)
with DAG(
    dag_id='daily_sales_pipeline',      # ชื่อ Pipeline
    description='ดึงข้อมูลยอดขายรายวัน',
    schedule='0 6 * * *',               # ทุกวัน ตอน 6 โมงเช้า
    start_date=datetime(2024, 1, 1),
    default_args=default_args,
) as dag:

    # สร้าง Tasks (แต่ละขั้นตอน)
    extract = PythonOperator(
        task_id='extract',              # ขั้นตอน: ดึงข้อมูล
        python_callable=extract_data,
    )
    transform = PythonOperator(
        task_id='transform',            # ขั้นตอน: แปลงข้อมูล
        python_callable=transform_data,
    )
    load = PythonOperator(
        task_id='load',                 # ขั้นตอน: โหลดเข้าคลัง
        python_callable=load_to_warehouse,
    )

    # กำหนดลำดับ: ดึง → แปลง → โหลด
    extract >> transform >> load</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> Airflow เหมือน "Cron ที่ฉลาดขึ้น" — มี UI ให้ดูสถานะ, retry อัตโนมัติ, บอกว่า task ไหนล้มเหลว — เป็นเครื่องมือที่ <strong>ทุกบริษัทที่ทำ Data ใช้</strong></div>

<h3>6.3 Backfill — ย้อนรัน Pipeline</h3>

<p><strong>สถานการณ์:</strong> Pipeline ล่มไป 5 วัน ข้อมูลหายไป 5 วัน! ทำไงดี?</p>
<p><strong>คำตอบ:</strong> ใช้ Backfill สั่งให้ Airflow ย้อนรัน Pipeline ย้อนหลังได้!</p>

<pre><code># สั่ง Airflow ย้อนรัน Pipeline วันที่ 15-20 ม.ค.
airflow dags backfill daily_sales_pipeline \\
    --start-date 2024-01-15 \\
    --end-date 2024-01-20</code></pre>

<div class="warning-box">⚠️ <strong>สำคัญ:</strong> Pipeline ต้อง <strong>"idempotent"</strong> = รันซ้ำกี่ครั้งก็ได้ผลลัพธ์เหมือนเดิม ไม่เกิดข้อมูลซ้ำ — ถ้าไม่ทำแบบนี้ การ Backfill จะสร้างข้อมูลซ้ำเต็มไปหมด!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Orchestrator คือ "ผู้ควบคุมวง" ที่สั่งให้แต่ละ task ทำงานตามลำดับและเวลาที่กำหนด</li>
  <li>✅ DAG คือแผนผังลำดับงาน กำหนดว่า task ไหนทำก่อน/หลัง</li>
  <li>✅ Airflow เป็น "Cron ที่ฉลาดขึ้น" มี UI, retry อัตโนมัติ, แจ้งเตือน — ทุกบริษัทที่ทำ Data ใช้</li>
  <li>✅ Backfill ช่วยย้อนรัน Pipeline ได้ แต่ Pipeline ต้อง idempotent (รันซ้ำไม่เกิดข้อมูลซ้ำ)</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองติดตั้ง Airflow แล้วสร้าง DAG ง่ายๆ ที่มี 3 tasks (ดึง → แปลง → โหลด) แล้วไปบทถัดไปเรียนเครื่องมือพื้นฐาน (Docker, Git, Terminal, Cloud)!
</div>
`,
  },
  {
    number: 8,
    slug: 'infra-basics',
    emoji: '🖥️',
    title: 'Infra Basics',
    content: `
<h2>🖥️ เครื่องมือพื้นฐานที่ DE ต้องรู้</h2>

<p>ในบทนี้เราจะมาทำความรู้จักเครื่องมือที่ DE ใช้ทุกวัน ผมจะอธิบายว่าแต่ละตัวคืออะไรก่อน แล้วค่อยสอนใช้งานครับ</p>

<h3>📖 อธิบายศัพท์ก่อนเริ่ม</h3>
<table>
  <tr><th>คำศัพท์</th><th>คืออะไร?</th><th>เปรียบเทียบ</th></tr>
  <tr><td><strong>Terminal / CLI</strong></td><td>หน้าจอสีดำที่ใช้พิมพ์คำสั่งให้คอมทำงาน แทนการกดเมาส์</td><td>เหมือนส่ง "ข้อความสั่งงาน" ให้คอม</td></tr>
  <tr><td><strong>Git</strong></td><td>โปรแกรมบันทึกประวัติโค้ด ถ้าเขียนพลาดย้อนกลับได้</td><td>เหมือน Save Game / Ctrl+Z ที่ย้อนได้ตลอด</td></tr>
  <tr><td><strong>GitHub</strong></td><td>เว็บเก็บโค้ดออนไลน์ ใช้โชว์ผลงานให้บริษัทดู</td><td>เหมือน Google Drive สำหรับโค้ด</td></tr>
  <tr><td><strong>Docker</strong></td><td>โปรแกรมที่ "บรรจุ" แอปเราลงกล่อง ย้ายเครื่องไหนก็รันได้</td><td>เหมือน "กล่องสำเร็จรูป" ที่ใส่ทุกอย่างครบ</td></tr>
  <tr><td><strong>Cloud</strong></td><td>คอมพิวเตอร์บนอินเทอร์เน็ต เราเช่าใช้ ไม่ต้องซื้อเครื่องเอง</td><td>เหมือนเช่า Office แทนซื้อตึก</td></tr>
  <tr><td><strong>Linux</strong></td><td>ระบบปฏิบัติการ (เหมือน Windows) ที่ Server ส่วนใหญ่ใช้</td><td>เหมือน Windows แต่ไม่มีหน้าจอ ต้องพิมพ์คำสั่ง</td></tr>
  <tr><td><strong>WSL2</strong></td><td>ตัวช่วยให้ Windows รันคำสั่ง Linux ได้ ไม่ต้องลงเครื่องใหม่</td><td>เหมือนเปิด Linux ใน Windows</td></tr>
</table>

<div class="tip-box">🔗 <strong>ดาวน์โหลดเครื่องมือ:</strong>
<ul>
  <li>🐳 Docker Desktop — <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener">docker.com/products/docker-desktop</a></li>
  <li>🌐 Git — <a href="https://git-scm.com/downloads" target="_blank" rel="noopener">git-scm.com/downloads</a></li>
  <li>📝 VS Code — <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">code.visualstudio.com</a></li>
  <li>🐧 WSL2 (สำหรับ Windows) — <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noopener">ติดตั้ง WSL2</a></li>
  <li>💻 Terminal แนะนำ — <a href="https://apps.microsoft.com/detail/9n0dx20hk701" target="_blank" rel="noopener">Windows Terminal</a></li>
</ul>
</div>

<h3>7.1 Terminal / CLI — พิมพ์คำสั่งให้คอมทำงาน</h3>

<h4>🤔 Terminal คืออะไร?</h4>
<p><strong>Terminal</strong> (หรือ CLI = Command Line Interface) คือ <strong>"หน้าจอสีดำ" ที่เราพิมพ์คำสั่งเข้าไป</strong> แล้วคอมจะทำงานตามที่สั่ง ไม่ต้องกดเมาส์เลย</p>
<p>ตัวอย่าง: แทนที่จะเปิด File Explorer คลิกเข้าโฟลเดอร์ แล้วดับเบิลคลิกเปิดไฟล์ เราแค่พิมพ์ <code>head data.csv</code> ก็ดูข้อมูลในไฟล์ได้เลย!</p>

<p><strong>วิธีเปิด Terminal:</strong></p>
<ul>
  <li><strong>Windows:</strong> กด <code>Win + R</code> → พิมพ์ <code>cmd</code> → Enter (หรือค้นหา "PowerShell" ในเมนู Start)</li>
  <li><strong>Mac:</strong> กด <code>Cmd + Space</code> → พิมพ์ "Terminal" → Enter</li>
</ul>

<p><strong>ทำไมต้องรู้?</strong> Server ส่วนใหญ่ใช้ Linux ไม่มีหน้าจอกราฟิก ต้องพิมพ์คำสั่งอย่างเดียว</p>

<pre><code># ดูข้อมูลในไฟล์
head -n 10 data.csv        # ดู 10 บรรทัดแรก
tail -f pipeline.log       # ดู log แบบ real-time (อัปเดตเรื่อยๆ)
wc -l data.csv             # นับจำนวนบรรทัด

# ค้นหาคำในไฟล์
grep "error" pipeline.log  # หาคำว่า "error" ใน log

# ดูพื้นที่เครื่อง
df -h                      # ดูพื้นที่ disk เหลือเท่าไหร่
du -sh /data/*             # ดูว่าแต่ละโฟลเดอร์ใช้พื้นที่เท่าไหร่</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ไม่ต้องจำทุกคำสั่ง แค่จำ 5-6 คำสั่งที่ใช้บ่อย (head, tail, grep, wc, ls, cd) แล้วค่อยเรียนเพิ่มตามที่ต้องใช้งานจริง</div>

<h3>7.2 Git — บันทึก version ของโค้ด</h3>

<p><strong>เปรียบเทียบ:</strong> Git เหมือน "Save Game" ในเกม — ถ้าเราทำพลาดก็โหลดเซฟย้อนกลับได้!</p>

<pre><code># 1. สร้าง branch (เหมือนสร้างห้องทดลอง)
git checkout -b feature/add-pipeline

# 2. เพิ่มไฟล์ที่แก้ไข
git add .

# 3. บันทึก (เหมือน Save Game)
git commit -m "เพิ่ม pipeline ดึงข้อมูลลูกค้า"

# 4. ส่งขึ้น GitHub
git push origin feature/add-pipeline

# 5. ถ้าพลาด? ย้อนกลับได้!
git revert HEAD</code></pre>

<h3>7.3 Docker — "กล่อง" ใส่โปรแกรม</h3>

<p><strong>ปัญหา:</strong> "ในเครื่องผมรันได้นะ!" แต่พอไปรันเครื่องเพื่อนร่วมงานกลับ error!</p>
<p><strong>ทางออก:</strong> Docker เหมือน "กล่องสำเร็จรูป" ที่ใส่โปรแกรม + ทุกอย่างที่ต้องใช้ ย้ายไปเครื่องไหนก็ทำงานได้เหมือนกัน</p>

<div class="tip-box">🐳 ยังไม่มี Docker? <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener">ดาวน์โหลด Docker Desktop ที่นี่</a> (รองรับ Windows, Mac, Linux)</div>

<pre><code># สร้าง Dockerfile (เหมือนสูตรทำกล่อง)
FROM python:3.11-slim        # เริ่มจาก Python 3.11
WORKDIR /app                 # ตั้งโฟลเดอร์ทำงาน
COPY requirements.txt .      # คัดลอกรายชื่อ library
RUN pip install -r requirements.txt  # ติดตั้ง library
COPY src/ ./src/             # คัดลอกโค้ดของเรา
CMD ["python", "src/main.py"]  # สั่งให้รันโปรแกรม</code></pre>

<pre><code># คำสั่ง Docker ที่ใช้บ่อย
docker build -t my-pipeline .    # สร้างกล่อง
docker run my-pipeline           # รันกล่อง
docker ps                        # ดูกล่องที่กำลังรันอยู่
docker logs my-pipeline          # ดู log ของกล่อง</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> Docker = "ทำให้โปรแกรมรันได้ทุกเครื่อง" — ไม่ต้องกลัวว่า "ในเครื่องผมรันได้แต่เครื่องอื่นรันไม่ได้" อีกต่อไป</div>

<h3>7.4 Cloud Services — บริการ Cloud ที่ DE ต้องรู้</h3>

<table>
  <tr><th>บริการ</th><th>GCP</th><th>AWS</th><th>Azure</th></tr>
  <tr><td><strong>เก็บไฟล์</strong></td><td>Cloud Storage</td><td>S3</td><td>Blob Storage</td></tr>
  <tr><td><strong>Data Warehouse</strong></td><td>BigQuery ⭐</td><td>Redshift</td><td>Synapse</td></tr>
  <tr><td><strong>ประมวลผล</strong></td><td>Dataproc</td><td>EMR</td><td>HDInsight</td></tr>
  <tr><td><strong>Pipeline อัตโนมัติ</strong></td><td>Cloud Composer</td><td>MWAA</td><td>Data Factory</td></tr>
</table>

<div class="tip-box">🔗 <strong>สมัคร Cloud Free Tier (ใช้ฟรี!):</strong>
<ul>
  <li>☁️ GCP — <a href="https://cloud.google.com/free" target="_blank" rel="noopener">cloud.google.com/free</a> (ฟรี $300 credit + BigQuery 1TB/เดือน)</li>
  <li>☁️ AWS — <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener">aws.amazon.com/free</a> (ฟรี 12 เดือน)</li>
  <li>☁️ Azure — <a href="https://azure.microsoft.com/free/" target="_blank" rel="noopener">azure.microsoft.com/free</a> (ฟรี $200 credit)</li>
</ul>
</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Terminal/CLI คือหน้าจอพิมพ์คำสั่ง จำแค่ head, tail, grep, wc ใช้ทำงานบน Server ที่ไม่มีหน้าจอกราฟิก</li>
  <li>✅ Git เหมือน Save Game บันทึกประวัติโค้ด ย้อนกลับได้ถ้าพลาด + GitHub ใช้เก็บโค้ดออนไลน์และโชว์ผลงาน</li>
  <li>✅ Docker ทำให้โปรแกรมรันได้ทุกเครื่อง แก้ปัญหา "เครื่องผมรันได้ เครื่องอื่นรันไม่ได้"</li>
  <li>✅ Cloud (เช่น GCP, AWS, Azure) คือคอมพิวเตอร์บนอินเทอร์เน็ตที่เช่าใช้ได้ มี Free Tier ให้เริ่มต้นฟรี</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ติดตั้ง Docker Desktop + Git แล้วลองสร้าง Dockerfile ง่ายๆ พร้อมสมัคร Cloud Free Tier แล้วไปบทถัดไปเรียน Data Modeling!
</div>
`,
  },
  {
    number: 9,
    slug: 'data-modeling',
    emoji: '📐',
    title: 'Data Modeling',
    content: `
<h2>🏛️ ออกแบบโครงสร้างข้อมูล — สร้างอย่างถูกต้อง</h2>

<img src="/images/de101/modeling.png" alt="Data Modeling" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>ทำไมต้องออกแบบ?</strong> ถ้าเก็บข้อมูลแบบมั่วๆ ไม่มีโครงสร้าง → query จะช้ามาก + ข้อมูลจะผิดพลาดง่าย</p>

<p><strong>เปรียบเทียบ:</strong> เหมือนการจัดห้อง — ถ้าโยนของมั่วจะหาอะไรไม่เจอ แต่ถ้าจัดเป็นหมวดหมู่ (เสื้อผ้าอยู่ตู้นี้ หนังสืออยู่ชั้นนี้) จะหาอะไรก็เร็ว!</p>

<h3>8.1 Star Schema — โครงสร้างยอดนิยม</h3>

<p>แบ่งตารางเป็น 2 ประเภท:</p>
<ul>
  <li><strong>Fact Table (ตารางข้อเท็จจริง)</strong> — เก็บ "เหตุการณ์" ที่เกิดขึ้น เช่น ยอดขาย, จำนวนสินค้า (มีตัวเลขที่วัดได้)</li>
  <li><strong>Dimension Table (ตารางมิติ)</strong> — เก็บ "รายละเอียด" เช่น ชื่อสินค้า, ชื่อลูกค้า, วันที่</li>
</ul>

<pre><code>-- ตาราง Fact: เก็บยอดขายทุกรายการ
CREATE TABLE fact_sales (
    sale_id         BIGINT PRIMARY KEY,    -- รหัสการขาย
    date_key        INT,                    -- เชื่อมกับตารางวันที่
    product_key     INT,                    -- เชื่อมกับตารางสินค้า
    customer_key    INT,                    -- เชื่อมกับตารางลูกค้า
    quantity        INT,                    -- จำนวนชิ้น
    total_amount    DECIMAL(12,2)           -- ยอดเงิน
);

-- ตาราง Dimension: เก็บรายละเอียดสินค้า
CREATE TABLE dim_product (
    product_key     INT PRIMARY KEY,
    product_name    VARCHAR(200),           -- ชื่อสินค้า
    category        VARCHAR(100),           -- หมวดหมู่
    brand           VARCHAR(100)            -- แบรนด์
);

-- ตาราง Dimension: เก็บรายละเอียดวันที่
CREATE TABLE dim_date (
    date_key        INT PRIMARY KEY,
    full_date       DATE,                   -- วันที่เต็ม
    month_name      VARCHAR(10),            -- ชื่อเดือน
    quarter         INT,                    -- ไตรมาส
    year            INT,                    -- ปี
    is_holiday      BOOLEAN                 -- วันหยุดไหม?
);</code></pre>

<div class="tip-box">💡 <strong>ทำไมใช้ Star Schema?</strong> เพราะ query ง่ายมาก! แค่ JOIN จาก Fact ไปหา Dimension ที่ต้องการ เช่น "ยอดขายแยกตามหมวดสินค้า แยกตามเดือน" เขียน SQL ไม่กี่บรรทัดก็ได้</div>

<h3>8.2 SCD — เมื่อข้อมูลเปลี่ยน ทำยังไง?</h3>

<p><strong>ปัญหา:</strong> ลูกค้าเปลี่ยนที่อยู่ เราจะ "เขียนทับ" หรือ "เก็บประวัติ" ไว้?</p>

<table>
  <tr><th>แบบ</th><th>วิธีทำ</th><th>ตัวอย่าง</th></tr>
  <tr><td><strong>Type 1</strong></td><td>เขียนทับเลย (ไม่เก็บประวัติ)</td><td>แก้ typo ชื่อลูกค้า</td></tr>
  <tr><td><strong>Type 2 ⭐</strong></td><td>เพิ่มแถวใหม่ (เก็บประวัติทั้งหมด)</td><td>ลูกค้าย้ายที่อยู่ → เก็บทั้งที่อยู่เก่า+ใหม่</td></tr>
</table>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> ถ้าไม่แน่ใจ → ใช้ <strong>Type 2</strong> (เก็บประวัติไว้) ดีกว่า เพราะเขียนทับแล้วกู้คืนไม่ได้!</div>

<h3>8.3 dbt — เครื่องมือจัดการ Data Model</h3>

<div class="tip-box">🔗 <strong>ติดตั้ง dbt:</strong>
<ul>
  <li>📦 dbt Core (ฟรี) — <code>pip install dbt-core dbt-bigquery</code> หรือ <a href="https://docs.getdbt.com/docs/core/installation-overview" target="_blank" rel="noopener">ดูวิธีติดตั้ง</a></li>
  <li>☁️ dbt Cloud (มี Free Plan) — <a href="https://www.getdbt.com/signup/" target="_blank" rel="noopener">สมัคร dbt Cloud</a></li>
</ul>
</div>

<p><strong>dbt คืออะไร?</strong> คือเครื่องมือที่ทำให้เราเขียน SQL แบบเป็นระบบ มี version control, test ได้, เหมือนเขียนซอฟต์แวร์!</p>

<pre><code>-- ตัวอย่างไฟล์ dbt (เขียนเป็น SQL ธรรมดา + เพิ่มฟีเจอร์พิเศษ)
-- ไฟล์: models/marts/sales/fact_sales.sql

{{ config(
    materialized='incremental',     -- อัปเดตเฉพาะข้อมูลใหม่
    unique_key='sale_id'
) }}

SELECT
    s.order_id AS sale_id,
    d.date_key,
    p.product_key,
    s.quantity,
    s.quantity * s.unit_price AS total_amount
FROM {{ ref('stg_orders') }} s                   -- อ้างอิงตาราง staging
JOIN {{ ref('dim_date') }} d ON s.order_date = d.full_date
JOIN {{ ref('dim_product') }} p ON s.product_id = p.product_id

{% if is_incremental() %}
-- ถ้าเป็น incremental → ดึงเฉพาะข้อมูลใหม่
WHERE s.updated_at > (SELECT MAX(updated_at) FROM {{ this }})
{% endif %}</code></pre>

<div class="tip-box">💡 <strong>สรุปง่ายๆ:</strong> dbt ทำให้ SQL เป็น "ระบบ" — มี test, documentation, version control — ไม่ต้องจำว่า query ไหนรันก่อน/หลัง dbt จัดการให้หมด!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Star Schema แบ่งตารางเป็น Fact (เหตุการณ์/ตัวเลข) และ Dimension (รายละเอียด) ทำให้ query ง่ายและเร็ว</li>
  <li>✅ SCD Type 1 (เขียนทับ) vs Type 2 (เก็บประวัติ) — ถ้าไม่แน่ใจให้ใช้ Type 2 เพราะกู้คืนได้</li>
  <li>✅ dbt ทำให้เขียน SQL เป็นระบบ มี test, documentation, version control, incremental load ในตัว</li>
  <li>✅ การออกแบบโครงสร้างดี = query เร็ว + ข้อมูลถูกต้อง + ดูแลรักษาง่าย</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองออกแบบ Star Schema สำหรับร้านค้าออนไลน์หรือระบบที่คุ้นเคย แล้วไปบทสุดท้ายเพื่อสร้าง Portfolio และเตรียมตัวสมัครงาน!
</div>
`,
  },
  {
    number: 10,
    slug: 'portfolio-career',
    emoji: '🏆',
    title: 'Portfolio & Getting Hired',
    content: `
<h2>🏆 สร้าง Portfolio + อัดความสู่ Offer</h2>

<img src="/images/de101/portfolio.png" alt="Portfolio & Career" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>9.1 Portfolio — ต้องมีอะไรบ้าง?</h3>

<p>ไม่ต้องทำเยอะ แค่ <strong>3 โปรเจค</strong> ที่แสดงทักษะครบ:</p>

<table>
  <tr><th>โปรเจค</th><th>ทำอะไร</th><th>เครื่องมือ</th></tr>
  <tr><td><strong>🔹 Pipeline ครบวงจร</strong></td><td>ดึงข้อมูล → แปลง → โหลด → แจ้งเตือน</td><td>Airflow + Python + Docker</td></tr>
  <tr><td><strong>🔹 Dashboard แบบ Real-time</strong></td><td>แสดงข้อมูลอัปเดตอัตโนมัติ</td><td>Kafka + Looker/Superset</td></tr>
  <tr><td><strong>🔹 Data Model ด้วย dbt</strong></td><td>ออกแบบโครงสร้างข้อมูล + test</td><td>dbt + BigQuery</td></tr>
</table>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> เอาโปรเจคขึ้น <a href="https://github.com/signup" target="_blank" rel="noopener">GitHub</a> + เขียน README อธิบายให้ดี = บริษัทเห็นแล้วประทับใจทันที!</div>

<h3>9.2 คำถามสัมภาษณ์ที่ถามบ่อยมาก</h3>

<ol>
  <li><strong>"อธิบาย Pipeline ที่เคยทำ"</strong>
    <br>→ ตอบแบบ STAR: สถานการณ์ → หน้าที่ → สิ่งที่ทำ → ผลลัพธ์
    <br>→ ตัวอย่าง: "สร้าง Pipeline ดึงข้อมูลจาก API ทุกวัน โหลดเข้า BigQuery ลดเวลาทำรายงานจาก 3 ชม. เหลือ 10 นาที"</li>

  <li><strong>"Batch vs Streaming ใช้เมื่อไหร่?"</strong>
    <br>→ Batch: รายงานรายวัน, รายเดือน (90% ของงาน)
    <br>→ Streaming: ตรวจจับทุจริตทันที, live dashboard</li>

  <li><strong>"เจอข้อมูลเสียทำยังไง?"</strong>
    <br>→ ตอบ 5 ขั้นตอน: ตรวจจับ → แจ้งเตือน → กักกัน → แก้ไข → รันย้อนหลัง</li>
</ol>

<h3>9.3 เรซูเม่ — เทคนิคเขียนให้ดึงดูด</h3>

<pre><code>❌ เขียนแบบนี้:
   "สร้าง ETL Pipeline"
   (ไม่รู้ว่าทำอะไร ใช้อะไร ผลลัพธ์ยังไง)

✅ เขียนแบบนี้:
   "ออกแบบ ETL Pipeline ดึงข้อมูล 50M+ records/day
    ด้วย Airflow + Spark → ลดเวลา processing
    จาก 4 ชม. เหลือ 45 นาที"
   (เห็นภาพชัด มีตัวเลข มี impact!)</code></pre>

<div class="tip-box">💡 <strong>หลักการสำคัญ:</strong> ไม่ใช่แค่บอกว่า "ใช้อะไร" แต่ต้องบอกว่า <strong>"สร้าง impact อะไร"</strong> — ใส่ตัวเลขเสมอ!</div>

<h3>9.4 Cloud Certifications แนะนำ</h3>
<table>
  <tr><th>Cert</th><th>ผู้ออก</th><th>ค่าสอบ</th><th>ความยาก</th><th>สมัครสอบ</th></tr>
  <tr><td><strong>GCP Professional DE</strong></td><td>Google</td><td>~$200</td><td>⭐⭐⭐⭐</td><td><a href="https://cloud.google.com/learn/certification/data-engineer" target="_blank" rel="noopener">สมัครสอบ →</a></td></tr>
  <tr><td><strong>AWS DE Associate</strong></td><td>AWS</td><td>~$150</td><td>⭐⭐⭐</td><td><a href="https://aws.amazon.com/certification/certified-data-engineer-associate/" target="_blank" rel="noopener">สมัครสอบ →</a></td></tr>
  <tr><td><strong>Databricks DE</strong></td><td>Databricks</td><td>~$200</td><td>⭐⭐⭐</td><td><a href="https://www.databricks.com/learn/certification/data-engineer-associate" target="_blank" rel="noopener">สมัครสอบ →</a></td></tr>
  <tr><td><strong>Azure DP-203</strong></td><td>Microsoft</td><td>~$165</td><td>⭐⭐⭐⭐</td><td><a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-engineer/" target="_blank" rel="noopener">สมัครสอบ →</a></td></tr>
</table>

<div class="tip-box">💡 <strong>Cert ไม่ "จำเป็น" แต่เป็น "ตัวเร่ง"</strong> — ช่วยผ่าน HR screening, แสดงความมุ่งมั่น, และบังคับตัวเองเรียนอย่างเป็นระบบ</div>

<h3>🎉 ขอแสดงความยินดี!</h3>
<p>ถ้าคุณเรียนจบทั้ง 10 Phase นี้ คุณมีความรู้เพียงพอที่จะเริ่มสมัครงาน Data Engineer ได้แล้ว!</p>
<ul>
  <li>✅ เข้าใจ Career Path ของ DE</li>
  <li>✅ เขียน SQL + Python ได้</li>
  <li>✅ เข้าใจ Storage, Compute, ETL Pipeline</li>
  <li>✅ ใช้ Airflow, Docker, Cloud ได้</li>
  <li>✅ ออกแบบ Data Model + ใช้ dbt</li>
  <li>✅ มี Portfolio + พร้อมสัมภาษณ์</li>
</ul>

<div class="tip-box">🚀 <strong>ขั้นตอนต่อไป:</strong> สร้าง Portfolio 3 โปรเจค → อัปโหลดขึ้น GitHub → ปรับ Resume ใส่ตัวเลข → เริ่มสมัครงาน! คุณทำได้! 💪</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Portfolio ต้องมีอย่างน้อย 3 โปรเจค: Pipeline ครบวงจร, Dashboard, และ Data Model ด้วย dbt</li>
  <li>✅ Resume ต้องมีตัวเลขและ impact ชัดเจน ไม่ใช่แค่บอกว่า "ใช้อะไร" แต่ต้องบอกว่า "สร้าง impact อะไร"</li>
  <li>✅ คำถามสัมภาษณ์ที่ออกบ่อย: Pipeline ที่เคยทำ, Batch vs Streaming, จัดการข้อมูลเสีย — ตอบแบบ STAR</li>
  <li>✅ Cloud Certification (เช่น GCP, AWS, Databricks) ช่วยผ่าน HR screening และบังคับตัวเองเรียน</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> เริ่มสร้าง Portfolio โปรเจคแรกวันนี้เลย! อัปขึ้น GitHub + เขียน README ให้ดี + ปรับ Resume ใส่ตัวเลข + เริ่มสมัครงาน Data Engineer ได้เลย! 💪
</div>
`,
  },
];
