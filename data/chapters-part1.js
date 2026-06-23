// =============================================================================
// DE101 Course — Chapters 0-7 (Phase 1: พื้นฐาน + Phase 2: Core Skills)
// =============================================================================

export const chaptersPart1 = [

  // ===========================================================================
  // CHAPTER 0 — DE คืออะไร
  // ===========================================================================
  {
    id: 'chapter-0',
    slug: 'de-overview',
    phase: 1,
    phaseTitle: 'พื้นฐาน',
    phaseColor: '#10b981',
    number: 0,
    emoji: '🗺️',
    title: 'DE คืออะไร — ทำไมน่าเรียนที่สุดในสาย Data',
    shortTitle: 'DE คืออะไร',
    description: 'ทำความรู้จัก Data Engineer ตั้งแต่หน้าที่ เครื่องมือ เงินเดือน จนถึง Roadmap ทั้งคอร์ส',
    content: `
<h2>🗺️ ยินดีต้อนรับสู่โลกของ Data Engineer!</h2>

<p>ลองนึกภาพนี้นะ… ทุกครั้งที่เราสั่งอาหารผ่าน Grab, กดซื้อของใน Shopee, หรือเลื่อนดู TikTok — มีข้อมูลเกิดขึ้นมหาศาล แต่ข้อมูลดิบ ๆ เหล่านี้ยังใช้ประโยชน์อะไรไม่ได้เลย จนกว่าจะมีคนมา <strong>"จัดระเบียบ"</strong> มัน</p>

<p>คนที่ทำหน้าที่นี้แหละ คือ <strong>Data Engineer (DE)</strong> 🎉</p>

<p>ถ้าจะเปรียบให้เห็นภาพง่าย ๆ — ลองนึกถึง <strong>ระบบประปา</strong> ในบ้านเรา</p>

<img src="/images/what_is_de.png" alt="เปรียบ Data Engineer กับวิศวกรวางท่อน้ำประปา — ข้อมูลเหมือนน้ำที่ต้องไหลจากต้นทางถึงปลายทาง" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>🚰 Data Engineer = วิศวกรวางท่อน้ำ</h3>
<p>ลองเปรียบเทียบแบบนี้:</p>
<ul>
  <li><strong>น้ำ</strong> = ข้อมูล (data) — ไหลมาจากหลายแหล่ง เช่น database, API, ไฟล์ CSV</li>
  <li><strong>ท่อประปา</strong> = Data Pipeline — ระบบที่ส่งข้อมูลจากต้นทางไปปลายทาง</li>
  <li><strong>โรงกรองน้ำ</strong> = Transform — ทำความสะอาดข้อมูลให้พร้อมใช้</li>
  <li><strong>ก๊อกน้ำที่บ้าน</strong> = Dashboard, Report — สิ่งที่ผู้ใช้เปิดมาใช้งานได้เลย</li>
</ul>
<p><strong>Data Engineer ไม่ใช่คนดื่มน้ำ</strong> (นั่นคือ Analyst/Scientist) แต่เป็น <strong>คนที่ทำให้น้ำไหลมาถึงก๊อก</strong> — ถูกต้อง สะอาด ทันเวลา ไม่รั่ว!</p>

<h3>🤔 แล้ว DE ต่างจากตำแหน่งอื่นยังไง?</h3>
<p>ในโลก Data มีหลายตำแหน่ง แต่หน้าที่ต่างกันชัดเจน ดูภาพนี้จะเข้าใจทันที:</p>

<img src="/images/de_vs_roles.png" alt="เปรียบเทียบ Data Engineer vs Data Analyst vs Data Scientist vs ML Engineer" style="width:100%;border-radius:12px;margin:16px 0" />

<table>
  <thead><tr><th>หัวข้อ</th><th>Data Engineer</th><th>Data Analyst</th><th>Data Scientist</th><th>ML Engineer</th></tr></thead>
  <tbody>
    <tr><td><strong>ทำอะไร?</strong></td><td>สร้าง/ดูแลท่อส่งข้อมูล</td><td>วิเคราะห์ข้อมูล ทำรายงาน</td><td>สร้าง Model ทำนาย</td><td>เอา Model ขึ้น Production</td></tr>
    <tr><td><strong>เปรียบเหมือน</strong></td><td>วิศวกรวางท่อ 🔧</td><td>นักวิเคราะห์ตรวจน้ำ 🔬</td><td>นักวิจัยคิดสูตร 🧪</td><td>โรงงานผลิตยา 🏭</td></tr>
    <tr><td><strong>Skill หลัก</strong></td><td>SQL, Python, Cloud, Pipeline</td><td>SQL, Excel, Tableau, Power BI</td><td>Python, Math, ML Algorithms</td><td>Docker, MLflow, FastAPI</td></tr>
    <tr><td><strong>ต้องเก่ง Math?</strong></td><td>❌ ไม่มาก</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐ มาก</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><strong>เงินเดือนไทย (Mid)</strong></td><td>60-100K</td><td>40-70K</td><td>60-100K</td><td>70-120K</td></tr>
  </tbody>
</table>

<h3>📅 ชีวิตจริง DE — 1 วันทำอะไรบ้าง?</h3>
<p>หลายคนอาจสงสัยว่า DE ทำอะไรทั้งวัน มาดูกัน:</p>
<table>
  <thead><tr><th>เวลา</th><th>ทำอะไร</th><th>เครื่องมือ</th></tr></thead>
  <tbody>
    <tr><td>09:00</td><td>☕ เช็คว่า Pipeline เมื่อคืนรันสำเร็จไหม</td><td>Airflow, Slack</td></tr>
    <tr><td>09:30</td><td>🔧 แก้ pipeline ที่พัง (data source เปลี่ยน format)</td><td>Python, SQL</td></tr>
    <tr><td>10:30</td><td>👥 ประชุมสั้นกับทีม</td><td>Jira</td></tr>
    <tr><td>11:00</td><td>📝 เขียน SQL transform ตาม request จาก Analyst</td><td>dbt, BigQuery</td></tr>
    <tr><td>13:00</td><td>🏗️ ออกแบบตารางสำหรับ feature ใหม่</td><td>dbdiagram.io</td></tr>
    <tr><td>14:30</td><td>👀 Review code เพื่อนร่วมทีม</td><td>GitHub</td></tr>
    <tr><td>15:30</td><td>🔌 เขียน pipeline ดึงข้อมูลจาก API ภายนอก</td><td>Python, Airflow</td></tr>
    <tr><td>17:00</td><td>🚀 Deploy pipeline + เขียน test</td><td>Git, Docker</td></tr>
  </tbody>
</table>

<h3>💰 เงินเดือน Data Engineer ในไทย 2026</h3>
<p>ข่าวดี — สาย DE เงินเดือนค่อนข้างสูงเมื่อเทียบกับสาย Data อื่น ๆ:</p>
<table>
  <thead><tr><th>ระดับ</th><th>ประสบการณ์</th><th>เงินเดือน</th><th>ต้องมี Skill อะไร</th></tr></thead>
  <tbody>
    <tr><td>🟢 Junior</td><td>0-2 ปี</td><td>30,000 - 50,000</td><td>SQL, Python, Git, Basic Cloud</td></tr>
    <tr><td>🟡 Mid</td><td>2-5 ปี</td><td>60,000 - 100,000</td><td>+ Airflow, Spark, Data Modeling</td></tr>
    <tr><td>🔴 Senior</td><td>5+ ปี</td><td>100,000 - 150,000+</td><td>+ System Design, Team Lead</td></tr>
    <tr><td>🟣 Lead</td><td>8+ ปี</td><td>150,000 - 250,000+</td><td>+ Architecture, Strategy</td></tr>
  </tbody>
</table>

<h3>🏢 บริษัทในไทยที่รับ Data Engineer</h3>
<p><strong>Tech:</strong> Agoda, LINE MAN Wongnai, Grab, Shopee, Lazada, SCBX, KBTG, Bitkub</p>
<p><strong>Consulting:</strong> Accenture, Deloitte, PwC, Thoughtworks</p>
<p><strong>Enterprise:</strong> SCG, PTT Digital, CP Group, Bangkok Bank, Krungsri</p>

<h3>📍 Roadmap ของคอร์สนี้</h3>
<p>คอร์สนี้ออกแบบมาให้เรียนตามลำดับ — เหมือนสร้างบ้านจากฐานขึ้นไป ดูภาพ roadmap:</p>

<img src="/images/de_roadmap.png" alt="Roadmap การเรียน Data Engineer ทั้ง 16 บท — จากพื้นฐานไปจนถึง Portfolio Project" style="width:100%;border-radius:12px;margin:16px 0" />

<table>
  <thead><tr><th>Phase</th><th>บท</th><th>หัวข้อ</th></tr></thead>
  <tbody>
    <tr><td rowspan="4">🟢 Phase 1: พื้นฐาน</td><td>0</td><td>DE คืออะไร (บทนี้!)</td></tr>
    <tr><td>1</td><td>คอมพิวเตอร์ + Cloud</td></tr>
    <tr><td>2</td><td>Terminal + Git</td></tr>
    <tr><td>3</td><td>Python เบื้องต้น</td></tr>
    <tr><td rowspan="4">🔵 Phase 2: Core Skills</td><td>4</td><td>SQL Deep Dive</td></tr>
    <tr><td>5</td><td>Python สำหรับ DE</td></tr>
    <tr><td>6</td><td>Data Modeling</td></tr>
    <tr><td>7</td><td>ETL/ELT</td></tr>
    <tr><td rowspan="4">🟡 Phase 3: Tools</td><td>8-11</td><td>Docker, Airflow, BigQuery+dbt, Spark</td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td rowspan="4">🔴 Phase 4: Advanced</td><td>12-15</td><td>Streaming, Data Quality, CI/CD, Portfolio</td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td colspan="2"></td></tr>
    <tr><td colspan="2"></td></tr>
  </tbody>
</table>

<div class="tip-box">
<h4>💡 Tips สำหรับมือใหม่</h4>
<ul>
  <li><strong>ไม่ต้องจบ IT ก็เป็น DE ได้!</strong> — DE หลายคนจบบัญชี, เศรษฐศาสตร์, วิศวกรรม ไม่มี background CS เลย</li>
  <li><strong>เริ่มจาก SQL ก่อน</strong> — ถ้ามีเวลาจำกัด SQL คือ skill ที่ให้ ROI สูงสุด ใช้ได้ทุกสาย Data</li>
  <li><strong>สร้าง Portfolio ตั้งแต่วันแรก</strong> — ทุกบทที่เรียน push code ขึ้น GitHub ทันที</li>
  <li><strong>อย่ารอให้พร้อม 100%</strong> — เรียน 60% แล้วเริ่มสมัครงานได้เลย เรียนรู้จากงานจริงเร็วกว่า</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความเข้าใจผิดที่พบบ่อย</h4>
<ul>
  <li><strong>"DE ต้องเก่ง Math"</strong> — ไม่จริง! Math เป็นของ DS ส่วน DE เน้น Engineering: SQL, Python, Cloud, Pipeline</li>
  <li><strong>"ต้องรู้ทุกเครื่องมือ"</strong> — ไม่ต้อง! รู้แค่ 1 stack ให้ลึก (เช่น GCP + Airflow + dbt) ก็ได้งานแล้ว</li>
  <li><strong>"จบ IT เท่านั้นถึงจะเป็น DE ได้"</strong> — ไม่จริงเลย! ขอแค่มี passion เรียนรู้ + ฝึกทำโปรเจกต์จริง</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ที่ต้องตอบได้</h4>
<ol>
  <li><strong>"Data Engineer ต่างจาก Data Scientist อย่างไร?"</strong><br/>
  ✅ DE สร้างและดูแลท่อข้อมูล (Pipeline) ให้ข้อมูลพร้อมใช้งาน ส่วน DS ใช้ข้อมูลที่ DE เตรียมไว้มาสร้าง Model ทำนาย — DE เน้น Engineering, DS เน้น Math/Statistics</li>
  <li><strong>"Pipeline คืออะไร? ยกตัวอย่าง"</strong><br/>
  ✅ Pipeline คือชุดขั้นตอนอัตโนมัติที่ ดึงข้อมูล → แปลง → โหลดเข้าปลายทาง เช่น ดึง order จาก MySQL → clean ด้วย Python → โหลดเข้า BigQuery ทุกวันตี 3</li>
  <li><strong>"ทำไมถึงอยากเป็น DE?"</strong><br/>
  ✅ ชอบแก้ปัญหาด้าน System + Data ชอบสร้างระบบที่ทำงานอัตโนมัติ มี impact กับทั้งองค์กร</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>เขียน 1 ย่อหน้าอธิบายให้เพื่อนที่ไม่รู้จัก IT ว่า "Data Engineer ทำอะไร" โดยใช้การเปรียบเทียบ</li>
  <li>ไปดู Job Description ของ Data Engineer ใน LinkedIn 3 ตำแหน่ง แล้วสรุปว่า Skill อะไรที่ถูกพูดถึงบ่อยที่สุด</li>
  <li>สร้าง GitHub account (ถ้ายังไม่มี) — เราจะใช้ตลอดทั้งคอร์ส</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 1 — คอมพิวเตอร์ + Cloud
  // ===========================================================================
  {
    id: 'chapter-1',
    slug: 'computer-and-cloud',
    phase: 1,
    phaseTitle: 'พื้นฐาน',
    phaseColor: '#10b981',
    number: 1,
    emoji: '☁️',
    title: 'คอมพิวเตอร์ + Cloud — เข้าใจเครื่องก่อนใช้ Cloud',
    shortTitle: 'คอมพิวเตอร์ + Cloud',
    description: 'เข้าใจ CPU, RAM, Disk, Network ในมุมมอง DE และเริ่มต้นใช้ Cloud',
    content: `
<h2>☁️ ทำไม DE ต้องเข้าใจคอมพิวเตอร์?</h2>

<p>สมมติเราเป็นพ่อครัว 👨‍🍳 ก่อนจะทำอาหารเก่ง ๆ ได้ เราต้องรู้จักเครื่องมือในครัวก่อน — เตา, หม้อ, มีด ทำงานยังไง มีข้อจำกัดอะไร ใช้ผิดวิธีจะเกิดอะไรขึ้น</p>

<p>คอมพิวเตอร์ก็เหมือนกัน! ก่อนจะเป็น DE ที่เก่ง ต้อง<strong>เข้าใจเครื่องมือพื้นฐาน</strong>ก่อน — CPU, RAM, Disk ทำงานยังไง เพราะทุกอย่างที่เราจะทำ (Pipeline, Database, Cloud) มันทำงานบนสิ่งเหล่านี้ทั้งนั้น</p>

<img src="/images/computer_basics.png" alt="เปรียบ CPU เป็นสมอง RAM เป็นโต๊ะทำงาน Disk เป็นตู้เก็บเอกสาร — ช่วยเข้าใจการทำงานของคอมพิวเตอร์" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>🧠 เปรียบเทียบ Hardware กับออฟฟิศ</h3>
<p>ลองนึกภาพว่าคอมพิวเตอร์เป็น <strong>ออฟฟิศ</strong>:</p>

<table>
  <thead><tr><th>Hardware</th><th>เปรียบเหมือน</th><th>หน้าที่</th><th>สำคัญกับ DE ยังไง?</th></tr></thead>
  <tbody>
    <tr><td><strong>CPU</strong></td><td>🧠 สมอง / พนักงาน</td><td>ประมวลผลทุกอย่าง</td><td>Spark ใช้ CPU หลาย core ยิ่งเยอะยิ่งเร็ว</td></tr>
    <tr><td><strong>RAM</strong></td><td>📋 โต๊ะทำงาน</td><td>เก็บข้อมูลชั่วคราว (เร็วมาก)</td><td>Pandas โหลดข้อมูลเข้า RAM ไฟล์ใหญ่ = ต้อง RAM เยอะ</td></tr>
    <tr><td><strong>Disk</strong></td><td>🗄️ ตู้เก็บเอกสาร</td><td>เก็บข้อมูลถาวร (ช้ากว่า)</td><td>Database เก็บข้อมูลบน Disk</td></tr>
    <tr><td><strong>Network</strong></td><td>🛣️ ถนนเชื่อมออฟฟิศ</td><td>ส่งข้อมูลระหว่างเครื่อง</td><td>ดึง API, ส่งข้อมูลไป Cloud ต้องใช้ Network</td></tr>
  </tbody>
</table>

<h4>💡 ทำไมเรื่องนี้สำคัญกับ DE?</h4>
<p>เพราะ <strong>เลือกเครื่องมือผิด = เสียเงินแพง + ทำงานช้า</strong> เช่น:</p>
<ul>
  <li>ใช้ Pandas กับไฟล์ 10GB → RAM 8GB ไม่พอ → <code>MemoryError</code> 💥</li>
  <li>เลือก Cloud VM ที่แพงเกินไป → ค่าใช้จ่ายบานปลาย 💸</li>
  <li>ไม่เข้าใจ Network → ดึง API ช้า pipeline ช้าตาม ⏳</li>
</ul>

<h3>📏 ขนาดข้อมูล — ควรใช้เครื่องมืออะไร?</h3>
<p>กฎง่าย ๆ ที่ DE ใช้เลือกเครื่องมือ:</p>
<table>
  <thead><tr><th>ขนาดข้อมูล</th><th>เครื่องมือที่เหมาะ</th><th>ตัวอย่าง</th></tr></thead>
  <tbody>
    <tr><td>< 1GB</td><td>Pandas, DuckDB</td><td>ไฟล์ CSV เล็ก ๆ</td></tr>
    <tr><td>1-100GB</td><td>Polars, DuckDB, BigQuery</td><td>ข้อมูลขายรายปี</td></tr>
    <tr><td>> 100GB</td><td>Spark, BigQuery</td><td>Log ผู้ใช้ทั้งปี</td></tr>
  </tbody>
</table>

<h3>☁️ Cloud Computing — เช่าคอมคนอื่นแทนซื้อเอง</h3>
<p>สมัยก่อน ถ้าอยากมี server ต้องซื้อเครื่อง ตั้งห้อง server ดูแลเอง (On-premise) แต่สมัยนี้เรา<strong>เช่า</strong>ได้ผ่าน Internet — นี่แหละ Cloud!</p>

<p>ลองนึกว่า Cloud เหมือน <strong>ค่าไฟ</strong> — ไม่ต้องสร้างโรงไฟฟ้าเอง แค่เปิดใช้แล้วจ่ายตามที่ใช้ 💡</p>

<table>
  <thead><tr><th>หัวข้อ</th><th>AWS (Amazon)</th><th>GCP (Google)</th><th>Azure (Microsoft)</th></tr></thead>
  <tbody>
    <tr><td><strong>Market Share</strong></td><td>~31% 🥇</td><td>~12%</td><td>~25% 🥈</td></tr>
    <tr><td><strong>จุดเด่น DE</strong></td><td>Ecosystem ใหญ่สุด</td><td>BigQuery ดีมาก ⭐</td><td>Enterprise / Microsoft Stack</td></tr>
    <tr><td><strong>Data Warehouse</strong></td><td>Redshift</td><td>BigQuery</td><td>Synapse</td></tr>
    <tr><td><strong>Storage</strong></td><td>S3</td><td>GCS</td><td>Blob Storage</td></tr>
    <tr><td><strong>Free Tier</strong></td><td>12 เดือน</td><td>$300 credit + Always Free</td><td>$200 credit + 12 เดือน</td></tr>
  </tbody>
</table>

<p>🎯 <strong>ในคอร์สนี้เราจะใช้ GCP</strong> เพราะ BigQuery ดีมากสำหรับ DE, Free tier เยอะ, UI ใช้ง่าย</p>

<h3>🛠️ มาติดตั้งเครื่องมือกัน!</h3>
<p>ก่อนเริ่มเรียนบทถัดไป ลงโปรแกรมเหล่านี้ให้เรียบร้อย:</p>

<h4>1. VS Code — Text Editor ที่ DE ทุกคนใช้</h4>
<pre><code class="language-text">
1. ไปที่ https://code.visualstudio.com → Download → Install
2. ติดตั้ง Extensions ที่จำเป็น:
   - Python (Microsoft) ← เขียน Python
   - Pylance ← ช่วยแนะนำ code
   - GitLens ← ดู Git history
   - Rainbow CSV ← อ่าน CSV สะดวก
</code></pre>

<h4>2. Python 3.11+</h4>
<pre><code class="language-bash">
# Windows: download จาก python.org
# ✅ ตอน install ต้องเลือก "Add Python to PATH" ด้วยนะ!

# ตรวจสอบว่าติดตั้งสำเร็จ
python --version    # ควรเห็น Python 3.11.x
pip --version       # ควรเห็นเลข version
</code></pre>

<h4>3. Git</h4>
<pre><code class="language-bash">
# Windows: download จาก git-scm.com → Install
git --version

# ตั้งค่าตัวตน (ใส่ชื่อ + email ของเรา)
git config --global user.name "ชื่อของคุณ"
git config --global user.email "email@example.com"
</code></pre>

<h4>4. สร้าง GCP Account (ฟรี!)</h4>
<pre><code class="language-text">
1. ไปที่ https://cloud.google.com
2. Sign in ด้วย Google Account
3. เปิด Free Trial → ได้ $300 credit ใช้ 90 วัน
4. สร้าง Project ใหม่ ชื่อ "de101-course"
5. เข้า BigQuery → ลอง: SELECT 1 + 1 AS result
   ถ้าได้ผลลัพธ์ = 2 แสดงว่าพร้อมแล้ว! 🎉
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>Cloud Free Tier เพียงพอสำหรับเรียน:</strong> BigQuery ฟรี 1TB query/เดือน ไม่ต้องจ่ายตังค์</li>
  <li><strong>ตั้ง Budget Alert ทันที:</strong> GCP → Billing → Budgets → ตั้ง alert ที่ $10 ป้องกันค่าใช้จ่ายบาน</li>
  <li><strong>จำกฎง่าย ๆ:</strong> RAM ≥ 2x ขนาดข้อมูลที่จะ process (ไฟล์ 4GB ต้อง RAM อย่างน้อย 8GB)</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>"ลืมปิด VM บน Cloud"</strong> — เคยมีคนลืมปิดแล้วโดนเก็บเงินหลายพันบาท → ตั้ง Budget Alert เสมอ!</li>
  <li><strong>"ใช้ Pandas กับไฟล์ 10GB"</strong> — Pandas โหลดทั้งหมดเข้า RAM ถ้า RAM 8GB จะพัง → ใช้ Polars หรือ DuckDB แทน</li>
  <li><strong>"ไม่ Add Python to PATH ตอน install"</strong> — จะรัน <code>python</code> ใน Terminal ไม่ได้ ต้อง reinstall</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"RAM ต่างจาก Disk อย่างไร? ส่งผลต่อ Pipeline อย่างไร?"</strong><br/>
  ✅ RAM เร็วแต่ข้อมูลหายเมื่อปิดเครื่อง, Disk ช้าแต่เก็บถาวร Pipeline ที่ process ข้อมูลใน RAM (Spark) จะเร็วกว่ามาก แต่ถ้าข้อมูลใหญ่กว่า RAM ต้อง spill ลง disk ทำให้ช้า</li>
  <li><strong>"Cloud ดีกว่า On-premise อย่างไร?"</strong><br/>
  ✅ ไม่ต้องซื้อเครื่อง, scale ได้ตาม demand, จ่ายเท่าที่ใช้ (pay-as-you-go) แต่ถ้า workload คงที่ 24/7 Cloud อาจแพงกว่า</li>
  <li><strong>"ทำไมถึงเลือก GCP/AWS/Azure?"</strong><br/>
  ✅ ขึ้นกับ use case — GCP มี BigQuery ดีมากสำหรับ analytics, AWS ecosystem ใหญ่สุด, Azure เหมาะองค์กรที่ใช้ Microsoft อยู่แล้ว</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ติดตั้ง VS Code + Python + Git ให้เรียบร้อย แล้ว screenshot หน้าจอ Terminal ที่รันได้ทั้ง 3</li>
  <li>สร้าง GCP account + Project "de101-course" → เข้า BigQuery → รัน <code>SELECT 'Hello DE101' AS greeting</code></li>
  <li>เปิด Terminal แล้วรัน <code>python -c "import sys; print(sys.version)"</code> → เอา output มาส่ง</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 2 — Terminal + Git
  // ===========================================================================
  {
    id: 'chapter-2',
    slug: 'terminal-and-git',
    phase: 1,
    phaseTitle: 'พื้นฐาน',
    phaseColor: '#10b981',
    number: 2,
    emoji: '⌨️',
    title: 'Terminal + Git — เครื่องมือที่ DE ใช้ทุกวัน',
    shortTitle: 'Terminal + Git',
    description: 'เรียนรู้ Terminal commands และ Git version control ที่ DE ใช้ทุกวัน',
    content: `
<h2>⌨️ Terminal + Git — ทำไมต้องเรียน?</h2>

<p>ลองนึกภาพว่าเราเป็น <strong>เชฟ</strong> 🧑‍🍳 — เชฟมือใหม่อาจใช้หม้อหุงข้าวอัตโนมัติได้ก็พอ แต่เชฟระดับมืออาชีพต้องรู้จักใช้เตาแก๊ส มีด ครก ทำทุกอย่างได้เอง ไม่ต้องพึ่งเครื่องอัตโนมัติ</p>

<p><strong>Terminal</strong> ก็เหมือนกัน — GUI สวยก็จริง แต่ Terminal เร็วกว่า ทำ automation ได้ และ server ส่วนใหญ่ไม่มี GUI เลย! DE ทุกคนต้องใช้ Terminal คล่อง</p>

<p>ส่วน <strong>Git</strong> ก็เหมือน <strong>ปุ่ม Undo สุดยอด</strong> — ย้อนกลับได้ทุกเวลา รู้ว่าใครแก้อะไร เมื่อไร ทุกบริษัทบนโลกนี้ใช้ Git!</p>

<h3>📂 Terminal — อาวุธหลักของ Engineer</h3>
<p>เริ่มจากคำสั่งง่าย ๆ ที่ใช้ทุกวัน:</p>

<h4>🗂️ จัดการไฟล์/โฟลเดอร์</h4>
<pre><code class="language-bash">
# ดูไฟล์ในโฟลเดอร์ปัจจุบัน
ls              # ดูรายชื่อไฟล์
ls -la          # ดูแบบละเอียด + ไฟล์ที่ซ่อนอยู่
ls -lh          # แสดงขนาดแบบอ่านง่าย (KB, MB)

# เปลี่ยนโฟลเดอร์
cd /home/user   # ไปที่ path ที่กำหนด
cd ..           # ขึ้น 1 ระดับ (ย้อนกลับ)
cd ~            # กลับ home
cd -            # กลับไปที่เดิม

# สร้าง/ลบ
mkdir data              # สร้างโฟลเดอร์ชื่อ data
mkdir -p data/raw/csv   # สร้าง nested folders (ลึกหลายชั้น)
rm file.txt             # ลบไฟล์
rm -r folder/           # ลบทั้งโฟลเดอร์
# ⚠️ rm -rf folder/     # ลบแบบไม่ถาม — ระวังมาก!

# คัดลอก/ย้าย
cp file.txt backup.txt            # copy ไฟล์
mv old_name.txt new_name.txt      # เปลี่ยนชื่อ
mv file.txt /other/path/          # ย้ายไฟล์
</code></pre>

<h4>📖 อ่านไฟล์ — สำหรับดูข้อมูลเบื้องต้น</h4>
<pre><code class="language-bash">
head -5 data.csv        # ดู 5 บรรทัดแรก (เช็ค header)
tail -5 data.csv        # ดู 5 บรรทัดสุดท้าย
wc -l data.csv          # นับจำนวนบรรทัด (เช็คว่ามีข้อมูลกี่แถว)
tail -f app.log         # ดู log แบบ real-time (สำคัญมาก!)
</code></pre>

<h4>🔍 ค้นหา — ใช้เมื่อ debug pipeline</h4>
<pre><code class="language-bash">
# grep — ค้นหาข้อความในไฟล์ (ใช้บ่อยมาก!)
grep "ERROR" app.log                 # หาบรรทัดที่มี ERROR
grep -i "error" app.log              # ค้นแบบไม่สนพิมพ์เล็ก/ใหญ่
grep -c "ERROR" app.log              # นับจำนวนที่เจอ
grep -rn "TODO" ./src/               # ค้นหาในทุกไฟล์ + แสดงเลขบรรทัด

# find — ค้นหาไฟล์
find . -name "*.csv"                 # หาไฟล์ .csv ทั้งหมด
find . -size +100M                   # หาไฟล์ที่ใหญ่กว่า 100MB
</code></pre>

<h4>🔗 Pipe ( | ) — พลังที่แท้จริงของ Terminal!</h4>
<p>Pipe ต่อ output ของคำสั่งหนึ่ง → เป็น input ของอีกคำสั่ง เหมือน<strong>ต่อท่อน้ำ</strong>!</p>
<pre><code class="language-bash">
# ตัวอย่างจริง: วิเคราะห์ log ไฟล์
cat app.log | grep "ERROR" | wc -l
# อ่าน log → กรองเฉพาะ ERROR → นับจำนวน

# ดู top 5 IP ที่ request เยอะสุด
cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -5

# หา Python file ที่มี import pandas
grep -r "import pandas" --include="*.py" .
</code></pre>

<hr/>

<h2>🔀 Git — ระบบ Save/Undo สุดยอดสำหรับ Code</h2>
<p>เคยเจอปัญหานี้ไหม? 🤦</p>
<ul>
  <li><code>report_final.py</code></li>
  <li><code>report_final_v2.py</code></li>
  <li><code>report_final_v2_fixed.py</code></li>
  <li><code>report_final_v2_fixed_REAL_FINAL.py</code></li>
</ul>
<p>Git แก้ปัญหานี้! มันเก็บ <strong>ประวัติการเปลี่ยนแปลงทุกครั้ง</strong> ย้อนกลับได้ทุกเมื่อ ไม่ต้อง copy ไฟล์เอง</p>

<img src="/images/git_workflow.png" alt="Git workflow — Working Directory → Staging → Repository ขั้นตอนการ add, commit, push" style="width:100%;border-radius:12px;margin:16px 0" />

<h3>📌 Git พื้นฐาน — 5 คำสั่งที่ใช้ทุกวัน</h3>
<pre><code class="language-bash">
# 1. เริ่มต้น repo ใหม่
git init

# 2. ดู status — ไฟล์ไหนเปลี่ยน ไฟล์ไหนยังไม่ add
git status

# 3. เพิ่มไฟล์เข้า staging (เลือกว่าจะ save อะไร)
git add file.py          # เพิ่มไฟล์เดียว
git add .                # เพิ่มทุกไฟล์ที่เปลี่ยน

# 4. Commit — บันทึก snapshot (เหมือนกด Save)
git commit -m "Add data pipeline script"

# 5. ดู history — เห็นทุกการเปลี่ยนแปลง
git log --oneline
</code></pre>

<h3>🌿 Branching — ทำงานแบบแยกสำเนา</h3>
<p>ลองนึกว่า branch เหมือน<strong>สำเนาเอกสาร</strong> — เราแก้สำเนาได้เต็มที่ พอแก้เสร็จค่อยรวมกลับเข้าต้นฉบับ ไม่ต้องกลัวพังของเดิม!</p>
<pre><code class="language-bash">
# สร้าง branch ใหม่ + สลับไปใช้
git checkout -b feature/add-pipeline

# ดู branch ทั้งหมด
git branch -a

# สลับกลับ main
git checkout main

# รวม branch เข้า main (Merge)
git checkout main
git merge feature/add-pipeline

# ลบ branch ที่ merge แล้ว
git branch -d feature/add-pipeline
</code></pre>

<h3>🌐 GitHub — เก็บ code บน Cloud</h3>
<pre><code class="language-bash">
# เชื่อม repo ของเรากับ GitHub
git remote add origin https://github.com/username/repo.git

# Push code ขึ้น GitHub
git push -u origin main

# Pull code ล่าสุดจาก GitHub
git pull origin main

# Clone repo คนอื่นมาใช้
git clone https://github.com/username/repo.git
</code></pre>

<h3>🔄 Pull Request (PR) — วิธีทำงานร่วมกันในทีม</h3>
<p>ในบริษัทจริง ไม่มีใครแก้ code บน main branch ตรง ๆ ต้องผ่าน PR เสมอ:</p>
<pre><code class="language-text">
1. สร้าง branch ใหม่:  git checkout -b feature/xxx
2. เขียนโค้ด + commit
3. Push branch:  git push -u origin feature/xxx
4. ไป GitHub → สร้าง Pull Request
5. เพื่อนร่วมทีม Review code
6. แก้ไขตาม feedback (ถ้ามี)
7. Merge PR เข้า main
8. ลบ branch ✅
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>Commit message ที่ดี:</strong> ใช้ pattern <code>type: description</code> เช่น <code>feat: add daily sales pipeline</code> หรือ <code>fix: handle null values</code></li>
  <li><strong>อย่า commit ไฟล์ลับ!</strong> สร้าง <code>.gitignore</code> ใส่ <code>.env</code>, <code>*.csv</code>, <code>__pycache__/</code> ป้องกัน API key หลุด</li>
  <li><strong>ดู git status ก่อน add ทุกครั้ง</strong> — อาจ add ไฟล์ที่ไม่ต้องการโดยไม่รู้ตัว</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong><code>rm -rf /</code></strong> — ลบทุกอย่างในเครื่อง ห้ามพิมพ์เด็ดขาด!</li>
  <li><strong>Commit ไฟล์ <code>.env</code> ที่มี password</strong> — แม้ลบทีหลัง มันยังอยู่ใน git history! ต้องใช้ BFG เพื่อลบจริง ๆ</li>
  <li><strong>ทำงานบน main branch ตรง ๆ</strong> — ต้องสร้าง branch แยกเสมอ แล้ว merge ผ่าน PR</li>
  <li><strong>git add . โดยไม่ดู status ก่อน</strong> — อาจ add ไฟล์ที่ไม่ต้องการเข้าไป</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"git merge กับ git rebase ต่างกันอย่างไร?"</strong><br/>
  ✅ <code>merge</code> สร้าง commit ใหม่ที่รวม 2 branch เก็บ history ทั้งหมด ส่วน <code>rebase</code> ย้าย commits ไปอยู่บน branch ปลายทาง ทำให้ history เป็นเส้นตรง — ใช้ rebase สำหรับ local branch, merge สำหรับ shared branch</li>
  <li><strong>"git reset กับ git revert ต่างกันไหม?"</strong><br/>
  ✅ <code>reset</code> ลบ commits ออกจาก history (อันตรายถ้า push แล้ว), <code>revert</code> สร้าง commit ใหม่ที่ undo การเปลี่ยนแปลง (ปลอดภัย ใช้กับ shared branch ได้)</li>
  <li><strong>"ใช้ Terminal command อะไรในการวิเคราะห์ log?"</strong><br/>
  ✅ <code>tail -f</code> ดู log real-time, <code>grep "ERROR" app.log</code> กรอง error, <code>grep -c</code> นับ, pipe ต่อกันเพื่อวิเคราะห์</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด: สร้าง First Repo!</h4>
<ol>
  <li>สร้างโฟลเดอร์ <code>de101-exercises</code> → <code>git init</code></li>
  <li>สร้างไฟล์ <code>README.md</code> เขียน "# DE101 Exercises"</li>
  <li>สร้าง <code>.gitignore</code> ใส่ <code>.env</code>, <code>*.csv</code>, <code>__pycache__/</code></li>
  <li><code>git add .</code> → <code>git commit -m "Initial commit"</code></li>
  <li>สร้าง repo บน GitHub → push ขึ้นไป</li>
  <li>สร้าง branch <code>feature/add-hello</code> → สร้างไฟล์ <code>hello.py</code> → commit → push → สร้าง PR</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 3 — Python เบื้องต้น
  // ===========================================================================
  {
    id: 'chapter-3',
    slug: 'python-basics',
    phase: 1,
    phaseTitle: 'พื้นฐาน',
    phaseColor: '#10b981',
    number: 3,
    emoji: '🐍',
    title: 'Python เบื้องต้น — เขียน Python ให้เป็นใน 1 บท',
    shortTitle: 'Python เบื้องต้น',
    description: 'ตั้งแต่ตัวแปร, ลูป, ฟังก์ชัน, ไฟล์ ไปจนถึงเขียน script จัดการ CSV',
    content: `
<h2>🐍 Python — ทำไมต้อง Python?</h2>

<p>ถ้าต้องเลือกเรียนภาษาเดียวสำหรับสาย Data — <strong>คำตอบคือ Python</strong> ทุกครั้ง เพราะ:</p>
<ul>
  <li>🎓 <strong>เรียนง่าย</strong> — อ่านเข้าใจเหมือนภาษาอังกฤษ</li>
  <li>📚 <strong>Library เยอะ</strong> — Pandas, PySpark, Airflow ทุกเครื่องมือ DE รองรับ Python</li>
  <li>🏢 <strong>ทุกบริษัทใช้</strong> — 100% ของ Data team ใช้ Python</li>
</ul>

<p>ลองเปรียบ Python เป็น <strong>มีดสวิส</strong> 🔪 — เครื่องมือเดียวที่ทำได้ทุกอย่าง ตั้งแต่อ่านไฟล์ ดึง API เขียน Pipeline ไปจนถึง deploy ขึ้น production!</p>

<h3>📦 เริ่มจากตัวแปร — กล่องเก็บของ</h3>
<p>ตัวแปรใน Python เหมือน<strong>กล่องที่มีป้ายชื่อ</strong> — เราใส่ข้อมูลอะไรก็ได้ลงไป แล้วเรียกใช้จากชื่อ</p>
<pre><code class="language-python">
# ไม่ต้องบอกว่าเป็น type อะไร Python จัดการให้!
name = "สมชาย"           # str (ข้อความ)
age = 25                 # int (จำนวนเต็ม)
salary = 45000.50        # float (ทศนิยม)
is_active = True         # bool (จริง/เท็จ)
data = None              # None (ไม่มีค่า)

# ดู type
type(name)    # <class 'str'>
type(age)     # <class 'int'>

# แปลง type
str(25)       # "25" (ตัวเลข → ข้อความ)
int("25")     # 25 (ข้อความ → ตัวเลข)
float("3.14") # 3.14
</code></pre>

<h3>📝 f-string — วิธีสร้างข้อความที่ดีที่สุด</h3>
<pre><code class="language-python">
name = "สมชาย"
salary = 45000

# f-string — ใส่ตัวแปรลงในข้อความได้เลย!
print(f"ชื่อ: {name}, เงินเดือน: {salary:,.0f} บาท")
# → ชื่อ: สมชาย, เงินเดือน: 45,000 บาท

# Format ตัวเลข
pi = 3.14159
print(f"Pi = {pi:.2f}")         # Pi = 3.14 (2 ทศนิยม)
print(f"Revenue: {1234567:,}")  # Revenue: 1,234,567 (ใส่ comma)
</code></pre>

<h3>🔀 if/elif/else — ตัดสินใจ</h3>
<pre><code class="language-python">
score = 75

if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B

# แบบบรรทัดเดียว (ternary)
status = "pass" if score >= 50 else "fail"
</code></pre>

<h3>🔄 Loop — ทำซ้ำ</h3>
<pre><code class="language-python">
# for loop — ทำซ้ำตามจำนวนที่กำหนด
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

# วนลูปกับ list
for name in ["Alice", "Bob", "Charlie"]:
    print(f"Hello {name}")

# enumerate — ได้ทั้ง index + value
for i, name in enumerate(["Alice", "Bob"], start=1):
    print(f"{i}. {name}")
# 1. Alice
# 2. Bob

# while loop — ทำซ้ำจนกว่าจะหยุด
count = 0
while count < 3:
    print(count)
    count += 1
</code></pre>

<h3>📋 Data Structures — 4 ชนิดที่ต้องรู้</h3>
<p>Python มีโครงสร้างข้อมูล 4 แบบหลัก — แต่ละแบบเหมาะกับสถานการณ์ต่างกัน:</p>

<img src="/images/python_data_structures.png" alt="เปรียบเทียบ List, Dict, Set, Tuple — ใช้เมื่อไร ต่างกันอย่างไร" style="width:100%;border-radius:12px;margin:16px 0" />

<h4>📋 List — รายการ (ซ้ำได้ แก้ได้)</h4>
<pre><code class="language-python">
# เหมือนรายการซื้อของ — เพิ่ม/ลบ/แก้ได้
fruits = ["apple", "banana", "cherry"]
fruits.append("date")          # เพิ่มท้าย
fruits.insert(0, "avocado")    # แทรกที่ตำแหน่ง 0
fruits.remove("banana")        # ลบตาม value
print(len(fruits))             # จำนวนสมาชิก

# Slicing — ตัดส่วนที่ต้องการ
nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])   # [1, 2, 3]
print(nums[:3])    # [0, 1, 2]
print(nums[-2:])   # [4, 5]

# ⭐ List Comprehension — สร้าง list แบบกระชับ (DE ใช้บ่อยมาก!)
squares = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]
</code></pre>

<h4>📖 Dict — พจนานุกรม (key → value)</h4>
<pre><code class="language-python">
# เหมือนสมุดโทรศัพท์ — หาจากชื่อ (key) ได้เลย
user = {
    "name": "สมชาย",
    "age": 25,
    "role": "DE"
}

# เข้าถึง
print(user["name"])              # สมชาย
print(user.get("salary", 0))    # 0 (ถ้าไม่มี key ไม่ error!)

# เพิ่ม/แก้ไข
user["salary"] = 50000

# วนลูป
for key, value in user.items():
    print(f"{key}: {value}")

# Dict comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
</code></pre>

<h4>🎯 Set & Tuple</h4>
<pre><code class="language-python">
# Set — ไม่ซ้ำ! เหมาะ deduplicate
ids = {1, 2, 3, 2, 1}   # {1, 2, 3} ← ตัดซ้ำให้อัตโนมัติ
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # {2, 3}  intersection (ส่วนที่ซ้ำกัน)
print(a | b)  # {1, 2, 3, 4}  union (รวมทั้งหมด)

# Tuple — เหมือน list แต่แก้ไม่ได้ (ปลอดภัยกว่า)
point = (10, 20)
x, y = point    # unpacking
</code></pre>

<h4>📊 สรุป — เมื่อไรใช้อะไร?</h4>
<table>
  <thead><tr><th>Type</th><th>ลำดับ?</th><th>แก้ได้?</th><th>ซ้ำได้?</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><code>list</code></td><td>✅</td><td>✅</td><td>✅</td><td>เก็บข้อมูลทั่วไป</td></tr>
    <tr><td><code>dict</code></td><td>✅</td><td>✅</td><td>key ไม่ซ้ำ</td><td>key-value lookup (เร็วมาก!)</td></tr>
    <tr><td><code>set</code></td><td>❌</td><td>✅</td><td>❌</td><td>ตัดค่าซ้ำ, เช็คสมาชิก</td></tr>
    <tr><td><code>tuple</code></td><td>✅</td><td>❌</td><td>✅</td><td>ข้อมูลคงที่, return หลายค่า</td></tr>
  </tbody>
</table>

<h3>🔧 Functions — สร้างคำสั่งของเราเอง</h3>
<pre><code class="language-python">
# ฟังก์ชันง่าย ๆ
def greet(name):
    return f"สวัสดี {name}!"

print(greet("สมชาย"))  # สวัสดี สมชาย!

# Default parameter
def calculate_tax(income, rate=0.15):
    return income * rate

print(calculate_tax(50000))        # 7500.0 (ใช้ rate default)
print(calculate_tax(50000, 0.07))  # 3500.0 (กำหนด rate เอง)

# Return หลายค่า
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = get_stats([10, 20, 30, 40])

# Lambda — ฟังก์ชันบรรทัดเดียว
square = lambda x: x ** 2
users = [{"name": "A", "age": 30}, {"name": "B", "age": 25}]
sorted_users = sorted(users, key=lambda u: u["age"])
</code></pre>

<h3>📁 อ่าน/เขียนไฟล์ — งานหลักของ DE</h3>
<pre><code class="language-python">
import csv
import json

# ========== CSV ==========
# อ่าน CSV
with open("data.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"])

# เขียน CSV
with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerow({"name": "สมชาย", "age": 25})

# ========== JSON ==========
# อ่าน JSON
with open("config.json", "r") as f:
    config = json.load(f)

# เขียน JSON
with open("output.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
</code></pre>

<h3>🛡️ Error Handling — กันไม่ให้ Pipeline พัง</h3>
<pre><code class="language-python">
# try/except — จับ error ไม่ให้โปรแกรมพัง
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("จบการทำงาน")  # ทำทุกกรณี

# ตัวอย่างจริงใน DE — อ่านไฟล์แบบปลอดภัย
def safe_read_csv(filepath):
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return list(csv.DictReader(f))
    except FileNotFoundError:
        print(f"ไม่พบไฟล์: {filepath}")
        return []
    except csv.Error as e:
        print(f"CSV error: {e}")
        return []
</code></pre>

<h3>📦 Virtual Environment — แยก Library แต่ละโปรเจกต์</h3>
<pre><code class="language-bash">
# สร้าง virtual environment (ทำทุกโปรเจกต์!)
python -m venv venv

# เปิดใช้งาน
# Windows:
venv\\Scripts\\activate
# Mac/Linux:
source venv/bin/activate

# ติดตั้ง package
pip install pandas requests

# บันทึก dependencies (เพื่อให้คนอื่น install ได้เหมือนกัน)
pip freeze > requirements.txt
pip install -r requirements.txt

# ออกจาก venv
deactivate
</code></pre>

<h3>🏆 โปรเจกต์: อ่าน CSV → Filter → เขียนไฟล์ใหม่</h3>
<p>มาลองเขียนโปรแกรม Python ตัวแรกที่ทำงานแบบ DE จริง ๆ กัน!</p>
<pre><code class="language-python">
"""
โจทย์: อ่านไฟล์ sales.csv → กรองเฉพาะยอดขาย > 1000 → เขียนเป็น big_sales.csv
"""
import csv

def filter_big_sales(input_path, output_path, threshold=1000):
    """อ่าน CSV กรองยอดขายที่เกิน threshold แล้วเขียนไฟล์ใหม่"""
    big_sales = []

    # อ่าน
    with open(input_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            if float(row["amount"]) > threshold:
                big_sales.append(row)

    # เขียน
    if big_sales:
        with open(output_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=big_sales[0].keys())
            writer.writeheader()
            writer.writerows(big_sales)

    print(f"พบ {len(big_sales)} รายการที่ยอดขาย > {threshold}")
    return big_sales

# ใช้งาน
filter_big_sales("sales.csv", "big_sales.csv", threshold=1000)
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>ใช้ f-string เสมอ</strong> — อย่าใช้ <code>+</code> ต่อ string ช้าและอ่านยาก</li>
  <li><strong>ใช้ <code>with</code> เปิดไฟล์เสมอ</strong> — ปิดไฟล์ให้อัตโนมัติแม้เกิด error</li>
  <li><strong>ใช้ list comprehension แทน for loop + append</strong> — เร็วกว่า ~20-30%</li>
  <li><strong>สร้าง venv ทุกโปรเจกต์</strong> — ป้องกัน library version ชนกัน</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong><code>== vs is</code></strong>: ใช้ <code>==</code> เปรียบเทียบค่า, ใช้ <code>is</code> เฉพาะ <code>None</code> (<code>if x is None</code>)</li>
  <li><strong>Mutable default argument:</strong> อย่าใช้ <code>def func(data=[])</code> → ใช้ <code>def func(data=None)</code> แทน</li>
  <li><strong>ลืม encoding="utf-8":</strong> ถ้ามีภาษาไทยในไฟล์ ต้องระบุ encoding เสมอ ไม่งั้น error!</li>
  <li><strong>ไม่ใช้ try/except:</strong> Pipeline ที่ไม่มี error handling จะพังเงียบ ๆ โดยไม่รู้สาเหตุ</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"List กับ Tuple ต่างกันอย่างไร?"</strong><br/>
  ✅ List mutable (แก้ได้), Tuple immutable (แก้ไม่ได้) Tuple เร็วกว่าเล็กน้อย ใช้เป็น dict key ได้ ใช้เมื่อข้อมูลไม่ควรถูกเปลี่ยน</li>
  <li><strong>"*args กับ **kwargs คืออะไร?"</strong><br/>
  ✅ <code>*args</code> รับ arguments ไม่จำกัดเป็น tuple, <code>**kwargs</code> รับ keyword arguments เป็น dict ใช้สร้างฟังก์ชันที่ยืดหยุ่น</li>
  <li><strong>"List comprehension ดีกว่า for loop อย่างไร?"</strong><br/>
  ✅ กระชับกว่า อ่านง่ายกว่า เร็วกว่า ~20-30% เพราะ optimized ใน CPython แต่ถ้าซับซ้อนเกินควรใช้ for loop แทน</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>เขียนฟังก์ชัน <code>word_count(text)</code> ที่รับ string แล้ว return dict นับจำนวนคำ เช่น <code>{"hello": 2, "world": 1}</code></li>
  <li>เขียน script อ่านไฟล์ JSON ที่มี list of users → กรองเฉพาะ <code>age &gt; 30</code> → เขียนเป็น JSON ไฟล์ใหม่</li>
  <li>สร้าง venv → ติดตั้ง <code>requests</code> → เขียน script ดึงข้อมูลจาก <code>https://api.github.com/users/octocat</code> → print ชื่อ, bio, public repos</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 4 — SQL (DEEP DIVE)
  // ===========================================================================
  {
    id: 'chapter-4',
    slug: 'sql-deep-dive',
    phase: 2,
    phaseTitle: 'Core Skills',
    phaseColor: '#3b82f6',
    number: 4,
    emoji: '🗄️',
    title: 'SQL Deep Dive — ทักษะสำคัญที่สุดของ DE',
    shortTitle: 'SQL Deep Dive',
    description: 'SQL ตั้งแต่พื้นฐานจนถึง Window Functions, CTE, Optimization — ทักษะที่ใช้ทุกวัน',
    content: `
<h2>🗄️ SQL — ทักษะ #1 ที่ Data Engineer ต้องมี</h2>

<p>ถ้ามีเวลาเรียนแค่สิ่งเดียวในคอร์สนี้ — <strong>เรียน SQL</strong> ไม่ว่าจะสมัครงาน DE, DA, DS ที่ไหน ทุกที่ถาม SQL ทุกที่!</p>

<p>ลองเปรียบ SQL เหมือน<strong>ภาษาที่ใช้คุยกับข้อมูล</strong> — เราบอกว่าอยากได้อะไร แล้วฐานข้อมูลก็จัดหามาให้ ง่ายมาก!</p>

<p>เราจะเรียน SQL เป็น 6 ระดับ จากง่ายไปยาก:</p>

<hr/>

<h3>📊 Level 1: SELECT — เลือกข้อมูล</h3>
<p>สมมติเรามีตาราง <code>orders</code> เก็บข้อมูลการสั่งซื้อ:</p>
<table>
  <thead><tr><th>order_id</th><th>customer_name</th><th>product</th><th>amount</th><th>order_date</th><th>status</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>สมชาย</td><td>Laptop</td><td>35000</td><td>2026-01-15</td><td>completed</td></tr>
    <tr><td>2</td><td>สมหญิง</td><td>Mouse</td><td>500</td><td>2026-01-16</td><td>completed</td></tr>
    <tr><td>3</td><td>สมชาย</td><td>Keyboard</td><td>1500</td><td>2026-01-17</td><td>pending</td></tr>
    <tr><td>4</td><td>วิชัย</td><td>Monitor</td><td>12000</td><td>2026-01-18</td><td>completed</td></tr>
    <tr><td>5</td><td>สมหญิง</td><td>Laptop</td><td>35000</td><td>2026-01-20</td><td>cancelled</td></tr>
  </tbody>
</table>

<pre><code class="language-sql">
-- เลือกทุก column (ไม่แนะนำในงานจริง — ช้า!)
SELECT * FROM orders;

-- ✅ เลือกเฉพาะ column ที่ต้องการ (best practice!)
SELECT order_id, customer_name, amount FROM orders;

-- Alias — ตั้งชื่อใหม่ให้อ่านง่าย
SELECT customer_name AS ชื่อลูกค้า, amount AS ยอดขาย FROM orders;

-- WHERE — กรองข้อมูล
SELECT * FROM orders WHERE amount > 10000;
SELECT * FROM orders WHERE status = 'completed';

-- AND, OR, IN, BETWEEN
SELECT * FROM orders WHERE status = 'completed' AND amount > 5000;
SELECT * FROM orders WHERE customer_name IN ('สมชาย', 'สมหญิง');
SELECT * FROM orders WHERE order_date BETWEEN '2026-01-15' AND '2026-01-18';

-- LIKE — ค้นหาแบบ pattern
SELECT * FROM orders WHERE product LIKE 'L%';    -- ขึ้นต้นด้วย L

-- ORDER BY + LIMIT
SELECT * FROM orders ORDER BY amount DESC LIMIT 3;  -- Top 3 ยอดขายสูงสุด
</code></pre>

<hr/>

<h3>🔗 Level 2: JOINs — รวมข้อมูลจากหลายตาราง</h3>
<p>ในงานจริง ข้อมูลไม่ได้อยู่ในตารางเดียว — ต้อง JOIN ตารางเข้าด้วยกัน ลองนึกว่า JOIN เหมือน<strong>เอาจิ๊กซอว์มาต่อกัน</strong> 🧩</p>

<img src="/images/sql_joins.png" alt="Venn Diagram ของ SQL JOINs — INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN" style="width:100%;border-radius:12px;margin:16px 0" />

<pre><code class="language-sql">
-- INNER JOIN — เอาเฉพาะที่ match ทั้ง 2 ฝั่ง
SELECT o.order_id, c.name, c.city, o.product, o.amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;

-- LEFT JOIN ⭐ — เก็บข้อมูลฝั่งซ้ายไว้ครบ (ใช้บ่อยที่สุด!)
SELECT c.name, c.city, o.product, o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;
-- ลูกค้าที่ไม่มี order ก็ยังแสดง (product = NULL)

-- CROSS JOIN — ทุก combination (ระวัง! ข้อมูลบวมมาก)
SELECT c.name, p.product_name
FROM customers c CROSS JOIN products p;

-- SELF JOIN — join ตารางกับตัวเอง (หาพนักงาน-หัวหน้า)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
</code></pre>

<table>
  <thead><tr><th>JOIN Type</th><th>ผลลัพธ์</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td>INNER JOIN</td><td>เฉพาะแถวที่ match ทั้ง 2 ฝั่ง</td><td>ต้องการข้อมูลสมบูรณ์เท่านั้น</td></tr>
    <tr><td>LEFT JOIN ⭐</td><td>ทุกแถวจากซ้าย + match จากขวา</td><td>ใช้บ่อยที่สุด — เก็บข้อมูลหลักครบ</td></tr>
    <tr><td>FULL OUTER JOIN</td><td>ทุกแถวจากทั้ง 2 ฝั่ง</td><td>เห็นข้อมูลทั้งหมดรวม unmatched</td></tr>
    <tr><td>CROSS JOIN</td><td>ทุก combination (m × n แถว)</td><td>สร้าง date spine</td></tr>
  </tbody>
</table>

<hr/>

<h3>📊 Level 3: GROUP BY + HAVING + CASE WHEN</h3>
<pre><code class="language-sql">
-- GROUP BY — สรุปข้อมูลเป็นกลุ่ม
SELECT
    customer_name,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_spent,
    AVG(amount) AS avg_order
FROM orders
GROUP BY customer_name;

-- HAVING — กรองหลัง GROUP BY (WHERE กรองก่อน GROUP)
SELECT customer_name, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_name
HAVING COUNT(*) > 2;  -- เฉพาะลูกค้าที่สั่ง > 2 ครั้ง

-- CASE WHEN — เงื่อนไขใน SQL (เหมือน if/else)
SELECT
    order_id, amount,
    CASE
        WHEN amount >= 30000 THEN 'High'
        WHEN amount >= 5000 THEN 'Medium'
        ELSE 'Low'
    END AS order_tier
FROM orders;

-- COALESCE — จัดการ NULL
SELECT customer_name, COALESCE(phone, email, 'N/A') AS contact
FROM customers;
</code></pre>

<hr/>

<h3>🏗️ Level 4: CTE — ทำให้ SQL อ่านง่าย</h3>
<p>CTE (Common Table Expression) คือ<strong>ตารางชั่วคราว</strong>ที่สร้างด้วย <code>WITH</code> — ทำให้ SQL ซับซ้อนกลายเป็นอ่านง่าย</p>

<pre><code class="language-sql">
-- ตัวอย่าง: หาลูกค้าที่ซื้อเยอะกว่าค่าเฉลี่ย
WITH customer_spending AS (
    SELECT
        customer_name,
        SUM(amount) AS total_spent,
        COUNT(*) AS total_orders
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_name
),
avg_spending AS (
    SELECT AVG(total_spent) AS avg_spent FROM customer_spending
)
SELECT
    cs.customer_name, cs.total_spent, cs.total_orders
FROM customer_spending cs
CROSS JOIN avg_spending a
WHERE cs.total_spent > a.avg_spent
ORDER BY cs.total_spent DESC;
</code></pre>

<hr/>

<h3>🪟 Level 5: Window Functions — อาวุธลับของ DE</h3>
<p>Window Functions คือ<strong>ท่าไม้ตาย</strong>ที่ทำให้ SQL ทรงพลังมาก — ประมวลผลข้ามแถวโดย<strong>ไม่ยุบแถว</strong> (ต่างจาก GROUP BY) สัมภาษณ์ถามทุกครั้ง!</p>

<pre><code class="language-sql">
-- ROW_NUMBER — ลำดับแถว (สำคัญมาก!)
SELECT
    order_id, customer_name, amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) AS rank
FROM orders;

-- ⭐ Deduplication — ดึงแถวล่าสุดของแต่ละกลุ่ม (ใช้บ่อยที่สุดใน DE!)
WITH ranked AS (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS rn
    FROM raw_customers
)
SELECT * FROM ranked WHERE rn = 1;

-- LAG / LEAD — ดูแถวก่อนหน้า/ถัดไป (วัด growth)
WITH daily_revenue AS (
    SELECT order_date, SUM(amount) AS revenue
    FROM orders GROUP BY order_date
)
SELECT
    order_date, revenue,
    LAG(revenue) OVER (ORDER BY order_date) AS prev_day,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY order_date)) * 100.0
        / LAG(revenue) OVER (ORDER BY order_date), 2
    ) AS pct_change
FROM daily_revenue;

-- Running Total — ยอดสะสม
SELECT
    order_date, amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
</code></pre>

<table>
  <thead><tr><th>Function</th><th>ทำอะไร</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><code>ROW_NUMBER()</code></td><td>ลำดับ 1,2,3 (ไม่ซ้ำ)</td><td>Dedup, Top N ⭐</td></tr>
    <tr><td><code>RANK()</code></td><td>ลำดับ (ซ้ำได้, ข้ามลำดับ)</td><td>Ranking</td></tr>
    <tr><td><code>LAG(col, n)</code></td><td>ค่าจากแถวก่อนหน้า</td><td>Period-over-period</td></tr>
    <tr><td><code>LEAD(col, n)</code></td><td>ค่าจากแถวถัดไป</td><td>ดูค่าอนาคต</td></tr>
    <tr><td><code>SUM() OVER</code></td><td>Running total</td><td>ยอดสะสม</td></tr>
    <tr><td><code>AVG() OVER</code></td><td>Moving average</td><td>Rolling avg 7/30 วัน</td></tr>
    <tr><td><code>NTILE(n)</code></td><td>แบ่ง n กลุ่มเท่ากัน</td><td>Percentile, Quartile</td></tr>
  </tbody>
</table>

<hr/>

<h3>⚡ Level 6: Optimization — ทำให้ SQL เร็ว</h3>
<table>
  <thead><tr><th>❌ ช้า</th><th>✅ เร็ว</th><th>ทำไม</th></tr></thead>
  <tbody>
    <tr><td><code>SELECT *</code></td><td><code>SELECT col1, col2</code></td><td>อ่านเฉพาะ column ที่ต้องการ</td></tr>
    <tr><td><code>WHERE YEAR(date) = 2026</code></td><td><code>WHERE date >= '2026-01-01'</code></td><td>function กับ column ทำให้ใช้ index ไม่ได้</td></tr>
    <tr><td><code>NOT IN (subquery)</code></td><td><code>NOT EXISTS (subquery)</code></td><td>NOT EXISTS หยุดเมื่อเจอ match แรก</td></tr>
    <tr><td>join ก่อน filter</td><td>filter ก่อน join</td><td>ลดจำนวนแถวที่ต้อง join</td></tr>
  </tbody>
</table>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>เขียน CTE ก่อนเสมอ</strong> — แม้ subquery ทำได้เหมือนกัน CTE อ่านง่ายกว่ามาก</li>
  <li><strong>อย่า SELECT *</strong> — BigQuery คิดเงินตาม data scanned!</li>
  <li><strong>ท่องจำ ROW_NUMBER + PARTITION BY</strong> — ใช้ได้ทุกที่: dedup, top N, latest record</li>
  <li><strong>ฝึก SQL ทุกวัน:</strong> LeetCode, HackerRank อย่างน้อยวันละ 1 ข้อ</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>ลืม GROUP BY column</strong> — ทุก column ใน SELECT ที่ไม่ใช่ aggregate ต้องอยู่ใน GROUP BY</li>
  <li><strong>ใช้ WHERE กับ aggregate</strong> — <code>WHERE SUM(amount) > 1000</code> ❌ ต้องใช้ <code>HAVING</code> ✅</li>
  <li><strong>NULL comparison</strong> — <code>WHERE col = NULL</code> ❌ ต้องใช้ <code>WHERE col IS NULL</code> ✅</li>
  <li><strong>JOIN ไม่ใส่ ON</strong> — จะกลายเป็น CROSS JOIN ข้อมูลบวมมาก!</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์ SQL (ถามแน่นอน!)</h4>
<ol>
  <li><strong>"หา Top 3 สินค้าขายดีที่สุดในแต่ละ category"</strong><br/>
  ✅ ใช้ ROW_NUMBER() OVER (PARTITION BY category ORDER BY SUM(qty) DESC) แล้ว WHERE rn <= 3</li>
  <li><strong>"Dedup ข้อมูล — เก็บแถวล่าสุด"</strong><br/>
  ✅ ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY updated_at DESC) แล้ว WHERE rn = 1</li>
  <li><strong>"WHERE กับ HAVING ต่างกันอย่างไร?"</strong><br/>
  ✅ WHERE กรองก่อน GROUP BY, HAVING กรองหลัง GROUP BY — HAVING ใช้กับ aggregate functions</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>สร้างตาราง <code>employees</code> (id, name, department, salary) 10 แถว → หาพนักงานเงินเดือนสูงสุดในแต่ละ department</li>
  <li>เขียน CTE คำนวณ monthly revenue + month-over-month growth %</li>
  <li>ใช้ Window Function เขียน query dedup ข้อมูล เก็บ event ล่าสุดของแต่ละ user</li>
  <li>ไปทำ <a href="https://leetcode.com/studyplan/top-sql-50/" target="_blank">LeetCode SQL 50</a> อย่างน้อย 10 ข้อ</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 5 — Python สำหรับ DE
  // ===========================================================================
  {
    id: 'chapter-5',
    slug: 'python-for-de',
    phase: 2,
    phaseTitle: 'Core Skills',
    phaseColor: '#3b82f6',
    number: 5,
    emoji: '🐍',
    title: 'Python สำหรับ DE — Pandas, API, File Formats',
    shortTitle: 'Python สำหรับ DE',
    description: 'ใช้ Python ในงาน DE จริง: Pandas, API requests, file formats, logging',
    content: `
<h2>🐍 Python ในงาน Data Engineer</h2>

<p>ในบทที่ 3 เราเรียน Python พื้นฐาน — ตัวแปร, loop, function ตอนนี้เราจะเอา Python ไปใช้<strong>งาน DE จริง ๆ!</strong></p>

<p>ลองนึกว่าบทที่ 3 เราเรียนขับรถ 🚗 บทนี้เราจะ<strong>ขับไปส่งของจริง</strong> — ดึงข้อมูลจาก API, จัดการไฟล์ข้อมูล, เขียน log ทุกอย่างที่ DE ทำทุกวัน!</p>

<h3>🐼 Pandas — เครื่องมือจัดการข้อมูลอันดับ 1</h3>
<p>Pandas เหมือน <strong>Excel ที่เขียน code ได้</strong> — อ่าน, กรอง, แปลง, สรุปข้อมูลได้ทุกอย่าง แต่ทำได้เป็นล้านแถวโดยไม่พัง!</p>

<h4>📖 อ่านข้อมูล</h4>
<pre><code class="language-python">
import pandas as pd

# อ่านจากหลายแหล่ง
df = pd.read_csv("sales.csv")
df = pd.read_json("data.json")
df = pd.read_parquet("data.parquet")     # ⭐ format ที่ DE ชอบที่สุด

# ดูข้อมูลเบื้องต้น (สิ่งแรกที่ต้องทำเสมอ!)
df.head()              # 5 แถวแรก
df.shape               # (rows, cols) — กี่แถว กี่คอลัมน์
df.dtypes              # ชนิดข้อมูลแต่ละ column
df.isnull().sum()      # นับ null แต่ละ column
df.describe()          # สถิติพื้นฐาน (min, max, mean)
</code></pre>

<h4>🔍 กรองข้อมูล</h4>
<pre><code class="language-python">
# กรองเงื่อนไขเดียว
big_orders = df[df["amount"] > 10000]

# กรองหลายเงื่อนไข (& = AND, | = OR)
result = df[(df["amount"] > 1000) & (df["status"] == "completed")]

# isin — เหมือน SQL IN
result = df[df["city"].isin(["กรุงเทพ", "เชียงใหม่"])]

# query — อ่านง่ายกว่า
result = df.query("amount > 1000 and status == 'completed'")
</code></pre>

<h4>📊 GroupBy — สรุปข้อมูล (เหมือน SQL GROUP BY)</h4>
<pre><code class="language-python">
summary = df.groupby("customer_name").agg(
    total_orders=("order_id", "count"),
    total_spent=("amount", "sum"),
    avg_order=("amount", "mean"),
    first_order=("order_date", "min")
).reset_index()
</code></pre>

<h4>🔗 Merge — JOIN ตาราง</h4>
<pre><code class="language-python">
result = pd.merge(
    orders_df,
    customers_df,
    on="customer_id",       # join key
    how="left"              # left, right, inner, outer
)
</code></pre>

<h4>💾 เขียนข้อมูล</h4>
<pre><code class="language-python">
df.to_csv("output.csv", index=False, encoding="utf-8")
df.to_parquet("output.parquet", index=False)        # ⭐ แนะนำ!
df.to_json("output.json", orient="records", force_ascii=False)
</code></pre>

<h3>🌐 API Requests — ดึงข้อมูลจาก Internet</h3>
<p>DE มักต้องดึงข้อมูลจาก API ภายนอก — เช่น ข้อมูลลูกค้าจาก CRM, ข้อมูลสินค้าจาก platform ต่าง ๆ</p>
<pre><code class="language-python">
import requests
import time

# GET Request — ดึงข้อมูล
response = requests.get("https://api.github.com/users/octocat")
response.raise_for_status()  # ❗ ถ้า error จะ raise exception
data = response.json()
print(data["name"], data["public_repos"])

# Pagination — ดึงข้อมูลทุกหน้า
def fetch_all_pages(base_url):
    all_data = []
    page = 1
    while True:
        resp = requests.get(base_url, params={"page": page, "per_page": 100})
        resp.raise_for_status()
        data = resp.json()
        if not data:
            break
        all_data.extend(data)
        page += 1
        time.sleep(0.5)  # ⚠️ อย่าลืม rate limiting!
    return all_data

# Retry Logic — ป้องกัน API fail
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
retries = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503])
session.mount("https://", HTTPAdapter(max_retries=retries))
response = session.get("https://api.example.com/data")
</code></pre>

<h3>📁 File Formats — ใช้ format ไหนดี?</h3>
<table>
  <thead><tr><th>Format</th><th>ขนาด</th><th>ความเร็ว</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><strong>CSV</strong></td><td>ใหญ่</td><td>ช้า</td><td>แลกเปลี่ยนข้อมูลง่าย ๆ</td></tr>
    <tr><td><strong>JSON</strong></td><td>ใหญ่</td><td>ช้า</td><td>API response, nested data</td></tr>
    <tr><td><strong>Parquet ⭐</strong></td><td>เล็กมาก</td><td>เร็วมาก</td><td>Analytics, Data Lake — DE ใช้มากที่สุด!</td></tr>
    <tr><td><strong>Avro</strong></td><td>เล็ก</td><td>เร็ว</td><td>Streaming, Kafka</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
# ⭐ Parquet — format โปรดของ DE
# ข้อดี: เล็กกว่า CSV 5-10 เท่า, เร็วกว่า 10-100 เท่า, มี schema ในตัว!
df.to_parquet("data.parquet", index=False, compression="snappy")
df = pd.read_parquet("data.parquet", columns=["name", "amount"])  # อ่านเฉพาะ column
</code></pre>

<h3>📝 Logging — ดีกว่า print() มาก!</h3>
<pre><code class="language-python">
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("pipeline.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ใช้งาน
logger.info("Pipeline started")
logger.info(f"Loaded {len(df)} rows")
logger.warning("Found 5 null values")
logger.error(f"Failed to connect: {e}")
# ❌ อย่าใช้ print() ใน production → ใช้ logging แทน!
</code></pre>

<h3>🔐 Environment Variables — เก็บ secret ให้ปลอดภัย</h3>
<pre><code class="language-python">
import os
from dotenv import load_dotenv

load_dotenv()  # อ่านจาก .env file
api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("API_KEY is not set!")

# .env file:
# API_KEY=sk-abc123xyz
# DB_HOST=production-db.example.com
# ⚠️ อย่าลืมใส่ .env ใน .gitignore!
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>ใช้ Parquet เป็น default</strong> — เล็กกว่า CSV 5-10 เท่า เร็วกว่า 10-100 เท่า</li>
  <li><strong>API ต้อง pagination เสมอ</strong> — API ส่วนใหญ่ limit 100-1000 records ต่อ request</li>
  <li><strong>ใช้ logging แทน print()</strong> — มี timestamp, log level, เขียนลงไฟล์ได้</li>
  <li><strong>เก็บ secret ใน env var</strong> — ห้ามเขียน password, API key ลงใน code เด็ดขาด!</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>SettingWithCopyWarning:</strong> ใช้ <code>df.loc[...]</code> แทน <code>df[...][...]</code> เพื่อแก้ค่า</li>
  <li><strong>ไม่จัดการ timezone:</strong> API มักส่งเป็น UTC แต่ business ใช้ Asia/Bangkok → ต้อง convert</li>
  <li><strong>ไม่เช็ค API response:</strong> ต้อง <code>response.raise_for_status()</code> เสมอ</li>
  <li><strong>Hardcode credentials:</strong> password, API key ต้องอยู่ใน .env ไม่ใช่ใน code!</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"Parquet ดีกว่า CSV อย่างไร?"</strong><br/>
  ✅ Parquet เป็น columnar — อ่านเฉพาะ column ที่ต้องการ, compressed เล็กกว่า 5-10 เท่า, มี schema ในตัว CSV ไม่มีสิ่งเหล่านี้</li>
  <li><strong>"Pandas กับ Polars ต่างกันอย่างไร?"</strong><br/>
  ✅ Pandas single-threaded + NumPy, Polars multi-threaded + Rust + lazy eval Polars เร็วกว่า 5-10 เท่า แต่ Pandas ecosystem ใหญ่กว่า</li>
  <li><strong>"จัดการ API rate limit อย่างไร?"</strong><br/>
  ✅ ใช้ time.sleep(), batch requests, exponential backoff, เก็บ progress กรณีต้อง resume</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ดาวน์โหลด CSV จาก <a href="https://www.kaggle.com/datasets" target="_blank">Kaggle</a> → โหลดด้วย Pandas → สรุปด้วย groupby → เขียนเป็น Parquet</li>
  <li>เขียน script ดึงข้อมูลจาก GitHub API repos ของ 5 users → บันทึกเป็น JSON</li>
  <li>เขียน script ที่ใช้ logging module → log ทุกขั้นตอน (start, loaded, filtered, saved, done)</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 6 — Data Modeling
  // ===========================================================================
  {
    id: 'chapter-6',
    slug: 'data-modeling',
    phase: 2,
    phaseTitle: 'Core Skills',
    phaseColor: '#3b82f6',
    number: 6,
    emoji: '🏗️',
    title: 'Data Modeling — ออกแบบโครงสร้างข้อมูลที่ถูกต้อง',
    shortTitle: 'Data Modeling',
    description: 'Star Schema, Fact/Dimension, SCD, Normalization — หัวใจของ Data Warehouse',
    content: `
<h2>🏗️ Data Modeling — ทำไมต้องออกแบบ?</h2>

<p>ลองนึกว่าเราจะสร้างบ้าน 🏠 — ถ้าไม่มีแปลนบ้าน ก่อนสร้างเลย จะเกิดอะไรขึ้น? ห้องน้ำอยู่กลางห้องครัว บันไดไปไม่ถึงชั้น 2 น้ำรั่ว ไฟช็อต... วุ่นวายมาก!</p>

<p>Data Modeling คือการ <strong>"วาดแปลนบ้าน" สำหรับข้อมูล</strong> — ออกแบบก่อนว่าจะเก็บข้อมูลยังไง ตารางไหนเชื่อมกับตารางไหน ออกแบบดี = query ง่าย เร็ว ไม่ซ้ำซ้อน ออกแบบแย่ = ปวดหัวไปตลอด!</p>

<h3>📊 ก่อนอื่น — ข้อมูลเก็บที่ไหนได้บ้าง?</h3>

<img src="/images/data_warehouse_vs_lake.png" alt="เปรียบเทียบ Database vs Data Warehouse vs Data Lake vs Lakehouse" style="width:100%;border-radius:12px;margin:16px 0" />

<table>
  <thead><tr><th>หัวข้อ</th><th>Database (OLTP)</th><th>Data Warehouse (OLAP)</th><th>Data Lake</th><th>Lakehouse</th></tr></thead>
  <tbody>
    <tr><td><strong>เปรียบเหมือน</strong></td><td>🗄️ ตู้เก็บเอกสาร</td><td>📊 ห้องสมุดวิจัย</td><td>🏊 สระเก็บน้ำ</td><td>🏠 บ้านอัจฉริยะ</td></tr>
    <tr><td><strong>วัตถุประสงค์</strong></td><td>Transaction (อ่าน/เขียนเร็ว)</td><td>Analytics (query ซับซ้อน)</td><td>เก็บข้อมูลดิบทุกรูปแบบ</td><td>รวม Lake + Warehouse</td></tr>
    <tr><td><strong>ข้อมูล</strong></td><td>Structured</td><td>Structured</td><td>Raw ทุกรูปแบบ</td><td>ทุกรูปแบบ + ACID</td></tr>
    <tr><td><strong>ตัวอย่าง</strong></td><td>PostgreSQL, MySQL</td><td>BigQuery, Snowflake</td><td>S3, GCS</td><td>Delta Lake, Iceberg</td></tr>
    <tr><td><strong>ขนาด</strong></td><td>GB</td><td>TB</td><td>PB</td><td>PB</td></tr>
  </tbody>
</table>

<h3>⭐ Star Schema — รูปแบบที่นิยมที่สุด</h3>
<p>Star Schema เหมือน<strong>ดาว ⭐</strong> — มี Fact Table อยู่ตรงกลาง ล้อมรอบด้วย Dimension Tables</p>

<img src="/images/star_schema.png" alt="Star Schema — Fact Table อยู่ตรงกลาง ล้อมรอบด้วย Dimension Tables เป็นรูปดาว" style="width:100%;border-radius:12px;margin:16px 0" />

<h4>Fact Table vs Dimension Table</h4>
<table>
  <thead><tr><th>หัวข้อ</th><th>Fact Table 📈</th><th>Dimension Table 📋</th></tr></thead>
  <tbody>
    <tr><td><strong>เก็บอะไร</strong></td><td>เหตุการณ์/ตัวเลข (metrics)</td><td>ข้อมูลอธิบาย (attributes)</td></tr>
    <tr><td><strong>เปรียบเหมือน</strong></td><td>ใบเสร็จ (order #123, 35000 บาท)</td><td>รายละเอียดลูกค้า (สมชาย, กรุงเทพ)</td></tr>
    <tr><td><strong>ขนาด</strong></td><td>ใหญ่มาก (ล้าน-พันล้านแถว)</td><td>เล็ก (หลักพัน-แสนแถว)</td></tr>
    <tr><td><strong>เปลี่ยนแปลง</strong></td><td>เพิ่มเรื่อย ๆ (append)</td><td>เปลี่ยนช้า ๆ (update)</td></tr>
  </tbody>
</table>

<h4>ตัวอย่าง: Star Schema สำหรับ E-Commerce</h4>
<pre><code class="language-sql">
-- Dimension Tables
CREATE TABLE dim_customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(50),
    tier VARCHAR(20)
);

CREATE TABLE dim_products (
    product_id INT PRIMARY KEY,
    name VARCHAR(200),
    category VARCHAR(50),
    brand VARCHAR(50),
    unit_price DECIMAL(10,2)
);

CREATE TABLE dim_dates (
    date_key INT PRIMARY KEY,      -- format: 20260115
    full_date DATE,
    year INT,
    quarter INT,
    month INT,
    month_name VARCHAR(20),
    day_name VARCHAR(20),
    is_weekend BOOLEAN
);

-- Fact Table (ตรงกลาง — เชื่อมกับทุก Dimension)
CREATE TABLE fact_orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES dim_customers(customer_id),
    product_id INT REFERENCES dim_products(product_id),
    date_key INT REFERENCES dim_dates(date_key),
    quantity INT,
    total_amount DECIMAL(10,2),
    status VARCHAR(20)
);

-- Query ตัวอย่าง: ยอดขายรายเดือนแยกตาม category
SELECT
    d.year, d.month_name, p.category,
    SUM(f.total_amount) AS revenue,
    COUNT(DISTINCT f.customer_id) AS unique_customers
FROM fact_orders f
JOIN dim_dates d ON f.date_key = d.date_key
JOIN dim_products p ON f.product_id = p.product_id
WHERE d.year = 2026
GROUP BY d.year, d.month_name, p.category
ORDER BY d.month, revenue DESC;
</code></pre>

<h3>🔄 SCD (Slowly Changing Dimensions)</h3>
<p>ลูกค้าย้ายเมือง สินค้าเปลี่ยนราคา — Dimension เปลี่ยนช้า ๆ จะจัดการยังไง?</p>

<h4>SCD Type 1 — ทับเลย (ไม่เก็บ history)</h4>
<pre><code class="language-sql">
UPDATE dim_customers SET city = 'เชียงใหม่' WHERE customer_id = 1;
-- ❌ ไม่รู้ว่าเคยอยู่กรุงเทพ
-- ✅ ง่าย ไม่เปลือง storage
</code></pre>

<h4>SCD Type 2 — เพิ่มแถวใหม่ (เก็บ history) ⭐ ใช้บ่อยที่สุด</h4>
<pre><code class="language-sql">
-- ก่อน:
-- | customer_id | city    | is_current | valid_from | valid_to   |
-- | 101         | กรุงเทพ | true       | 2025-01-01 | 9999-12-31 |

-- หลัง:
-- | customer_id | city      | is_current | valid_from | valid_to   |
-- | 101         | กรุงเทพ   | false      | 2025-01-01 | 2026-06-22 |
-- | 101         | เชียงใหม่  | true       | 2026-06-23 | 9999-12-31 |

-- ✅ เก็บ history ครบ — รู้ว่าลูกค้าอยู่กรุงเทพตอนสั่งซื้อ
</code></pre>

<h3>🎯 Grain — ระดับความละเอียดของ Fact Table</h3>
<p><strong>Grain</strong> = "1 แถวใน Fact Table แทนอะไร?" — ต้องตอบให้ได้ก่อนสร้างตาราง!</p>
<table>
  <thead><tr><th>Fact Table</th><th>Grain</th><th>ตัวอย่าง 1 แถว</th></tr></thead>
  <tbody>
    <tr><td>fact_orders</td><td>1 order</td><td>Order #123 ของสมชาย</td></tr>
    <tr><td>fact_order_items</td><td>1 สินค้าใน 1 order</td><td>Order #123 → Laptop 1 ชิ้น</td></tr>
    <tr><td>fact_daily_sales</td><td>1 วัน 1 สินค้า</td><td>Laptop ขาย 5 ชิ้น วันที่ 15 ม.ค.</td></tr>
  </tbody>
</table>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>เริ่มจาก Grain ก่อน</strong> — ตอบ "1 แถวคืออะไร?" ให้ได้ก่อนสร้างตาราง</li>
  <li><strong>ใช้ Star Schema เป็น default</strong> — ง่าย, query เร็ว, BI tools support ดี</li>
  <li><strong>SCD Type 2 คือ standard</strong> — ถ้าต้องเก็บ history ให้ใช้ Type 2</li>
  <li><strong>สร้าง dim_dates เสมอ</strong> — filter ตาม year, month, is_weekend ได้สะดวก</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>ไม่กำหนด Grain ชัดเจน:</strong> ตาราง fact มีทั้ง order-level และ item-level ปนกัน → ตัวเลข aggregate ผิด!</li>
  <li><strong>Normalize ใน Data Warehouse:</strong> DW ต้อง denormalize! ถ้า normalize query จะช้าและซับซ้อน</li>
  <li><strong>ใส่ข้อมูลที่เปลี่ยนบ่อยใน Dimension:</strong> เช่น "last_login_date" ไม่ควรอยู่ใน dim → เป็น fact</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"Star Schema คืออะไร?"</strong><br/>
  ✅ มี Fact Table ตรงกลาง + Dimension Tables ล้อมรอบ Fact เก็บ metrics, Dim เก็บ attributes ง่ายและ query เร็ว</li>
  <li><strong>"SCD Type 2 ทำงานอย่างไร?"</strong><br/>
  ✅ เพิ่มแถวใหม่ + ปิดแถวเก่า (valid_to, is_current=false) เก็บ history ครบ</li>
  <li><strong>"Fact Table กับ Dimension Table ต่างกันอย่างไร?"</strong><br/>
  ✅ Fact เก็บ events/metrics (amount, quantity) ใหญ่ เพิ่มเรื่อย ๆ Dimension เก็บ attributes (name, city) เล็ก เปลี่ยนช้า</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ออกแบบ Star Schema สำหรับร้านกาแฟ: orders, customers, products, stores, dates → วาด diagram + เขียน CREATE TABLE</li>
  <li>กำหนด Grain ของ Fact Table 3 แบบ → เปรียบเทียบข้อดี/ข้อเสีย</li>
  <li>เขียน SQL สำหรับ SCD Type 2: ลูกค้าเปลี่ยน city → ปิดแถวเก่า + เพิ่มแถวใหม่</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 7 — ETL/ELT
  // ===========================================================================
  {
    id: 'chapter-7',
    slug: 'etl-elt',
    phase: 2,
    phaseTitle: 'Core Skills',
    phaseColor: '#3b82f6',
    number: 7,
    emoji: '🔄',
    title: 'ETL/ELT — หัวใจของ Data Pipeline',
    shortTitle: 'ETL/ELT',
    description: 'เข้าใจ ETL vs ELT, Extract-Transform-Load, Idempotency, และเขียน Pipeline จริง',
    content: `
<h2>🔄 ETL/ELT — งานหลักที่ DE ทำทุกวัน</h2>

<p>จำเรื่อง<strong>ท่อประปา</strong>ในบทแรกได้ไหม? ETL/ELT คือ<strong>กระบวนการที่ท่อทำงาน</strong> — ดึงน้ำจากแหล่ง (Extract) → กรอง/ทำสะอาด (Transform) → ส่งไปที่ก๊อก (Load)</p>

<p>บทนี้เราจะเรียนรู้กระบวนการนี้ตั้งแต่ต้นจนจบ พร้อมเขียน Pipeline จริง!</p>

<h3>📊 ETL vs ELT — ต่างกันยังไง?</h3>

<img src="/images/etl_vs_elt.png" alt="เปรียบเทียบ ETL กับ ELT — แปลงก่อนโหลด vs โหลดก่อนแปลง" style="width:100%;border-radius:12px;margin:16px 0" />

<p>ง่าย ๆ เลย:</p>
<ul>
  <li><strong>ETL:</strong> ดึงข้อมูล → <strong>แปลงก่อน</strong> → แล้วค่อยโหลดเข้า Data Warehouse</li>
  <li><strong>ELT:</strong> ดึงข้อมูล → <strong>โหลดเข้า DW ก่อน</strong> → แล้วค่อยแปลงใน DW</li>
</ul>

<table>
  <thead><tr><th>หัวข้อ</th><th>ETL</th><th>ELT</th></tr></thead>
  <tbody>
    <tr><td><strong>แปลงที่ไหน</strong></td><td>Server กลาง (Python, Spark)</td><td>ใน Data Warehouse (SQL, dbt)</td></tr>
    <tr><td><strong>เปรียบเหมือน</strong></td><td>🍳 ทำกับข้าวที่บ้านก่อนเอาไปส่ง</td><td>📦 ส่งวัตถุดิบไปร้าน ให้ร้านทำ</td></tr>
    <tr><td><strong>ข้อดี</strong></td><td>ควบคุมละเอียด ลด load บน DW</td><td>ง่าย เร็ว ใช้ DW power ทำ transform</td></tr>
    <tr><td><strong>เครื่องมือ</strong></td><td>Python, Spark, Airflow</td><td>dbt, BigQuery, Snowflake SQL</td></tr>
    <tr><td><strong>แนวโน้ม</strong></td><td>ยังใช้อยู่</td><td>⭐ นิยมขึ้นเรื่อย ๆ (Modern Data Stack)</td></tr>
  </tbody>
</table>

<hr/>

<h3>📥 E = Extract — ดึงข้อมูลจากต้นทาง</h3>
<p>ข้อมูลมาจากหลายแหล่ง — DB, API, ไฟล์, Streaming:</p>

<pre><code class="language-python">
import pandas as pd
import requests
import logging

logger = logging.getLogger(__name__)

# Extract จาก Database
def extract_from_db(query, connection_string):
    """ดึงข้อมูลจาก Database"""
    from sqlalchemy import create_engine
    engine = create_engine(connection_string)
    df = pd.read_sql(query, engine)
    logger.info(f"Extracted {len(df)} rows from DB")
    return df

# Extract จาก API
def extract_from_api(url, headers=None):
    """ดึงข้อมูลจาก REST API พร้อม pagination"""
    all_data = []
    page = 1
    while True:
        resp = requests.get(url, params={"page": page}, headers=headers)
        resp.raise_for_status()
        data = resp.json().get("results", [])
        if not data:
            break
        all_data.extend(data)
        page += 1
    logger.info(f"Extracted {len(all_data)} records from API")
    return all_data
</code></pre>

<hr/>

<h3>🔧 T = Transform — แปลงข้อมูล</h3>
<p>ข้อมูลดิบเหมือน<strong>ผักที่เพิ่งเก็บจากไร่</strong> 🥬 — ต้องล้าง ตัดแต่ง หั่น ก่อนเอาไปทำอาหาร!</p>

<table>
  <thead><tr><th>ประเภท</th><th>ตัวอย่าง</th></tr></thead>
  <tbody>
    <tr><td><strong>Clean</strong></td><td>ลบ null, ลบ whitespace, แก้ format วันที่</td></tr>
    <tr><td><strong>Validate</strong></td><td>เช็ค email format, range check (age 0-150)</td></tr>
    <tr><td><strong>Deduplicate</strong></td><td>ลบแถวซ้ำ (เก็บล่าสุด)</td></tr>
    <tr><td><strong>Enrich</strong></td><td>เพิ่ม column คำนวณ (age จาก birthdate)</td></tr>
    <tr><td><strong>Aggregate</strong></td><td>สรุปยอดรายวัน, นับจำนวนต่อ category</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
def transform_orders(df):
    """แปลงข้อมูล orders"""
    logger.info(f"Transforming {len(df)} rows...")
    original_count = len(df)

    # 1. Clean
    df["customer_name"] = df["customer_name"].str.strip()
    df["order_date"] = pd.to_datetime(df["order_date"])
    df["amount"] = pd.to_numeric(df["amount"], errors="coerce")

    # 2. Validate
    df = df[df["amount"] > 0]
    df = df[df["customer_name"].notna()]

    # 3. Deduplicate
    df = df.sort_values("updated_at", ascending=False)
    df = df.drop_duplicates(subset=["order_id"], keep="first")

    # 4. Enrich
    df["year"] = df["order_date"].dt.year
    df["month"] = df["order_date"].dt.month
    df["order_tier"] = df["amount"].apply(
        lambda x: "High" if x >= 10000 else "Medium" if x >= 1000 else "Low"
    )

    removed = original_count - len(df)
    logger.info(f"Transform done: {len(df)} rows ({removed} removed)")
    return df
</code></pre>

<hr/>

<h3>📤 L = Load — โหลดเข้าปลายทาง</h3>
<table>
  <thead><tr><th>Strategy</th><th>วิธี</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><strong>Full Load</strong></td><td>ลบข้อมูลเก่า โหลดใหม่ทั้งหมด</td><td>ข้อมูลน้อย, Dimension tables</td></tr>
    <tr><td><strong>Incremental ⭐</strong></td><td>โหลดเฉพาะข้อมูลใหม่/เปลี่ยน</td><td>ใช้บ่อยที่สุด — Fact tables</td></tr>
    <tr><td><strong>CDC</strong></td><td>จับ changes จาก DB log</td><td>Real-time pipeline</td></tr>
  </tbody>
</table>

<h3>🔒 Idempotency — กฎข้อที่ 1 ของ Pipeline!</h3>
<p><strong>Idempotent</strong> = รันกี่ครั้งก็ได้ ผลลัพธ์เหมือนเดิม — ไม่มีข้อมูลซ้ำ ไม่พลาด</p>
<p>ทำไมสำคัญ? เพราะ Pipeline อาจ fail กลางทาง ต้อง rerun ได้โดยไม่ทำข้อมูลพัง!</p>

<pre><code class="language-python">
# ❌ ไม่ Idempotent — รันซ้ำ = ข้อมูลซ้ำ!
def bad_load(df, table_name, engine):
    df.to_sql(table_name, engine, if_exists="append", index=False)

# ✅ Idempotent — รันกี่ครั้งก็ OK!
def idempotent_load(df, table_name, engine, partition_date):
    """ลบข้อมูลของวันนั้นก่อน แล้วโหลดใหม่"""
    with engine.connect() as conn:
        conn.execute(f"DELETE FROM {table_name} WHERE date = '{partition_date}'")
    df.to_sql(table_name, engine, if_exists="append", index=False)
    logger.info(f"Loaded {len(df)} rows for {partition_date}")
</code></pre>

<hr/>

<h3>🏆 โปรเจกต์: Simple Python ETL Pipeline</h3>
<p>มาเขียน Pipeline จริง ๆ กัน! ดึงจาก CSV → Transform → โหลดเข้า SQLite</p>
<pre><code class="language-python">
"""ETL Pipeline: CSV → Transform → SQLite"""
import pandas as pd
import sqlite3
import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger(__name__)


def extract(filepath):
    logger.info(f"Extracting from {filepath}")
    df = pd.read_csv(filepath)
    logger.info(f"Extracted {len(df)} rows")
    return df


def transform(df):
    logger.info("Transforming...")
    original = len(df)
    df = df.dropna(subset=["order_id", "amount"])
    df["customer_name"] = df["customer_name"].str.strip().str.title()
    df["order_date"] = pd.to_datetime(df["order_date"])
    df["amount"] = pd.to_numeric(df["amount"], errors="coerce")
    df = df[df["amount"] > 0]
    df = df.drop_duplicates(subset=["order_id"], keep="last")
    df["year_month"] = df["order_date"].dt.to_period("M").astype(str)
    df["processed_at"] = datetime.now()
    logger.info(f"Transform done: {len(df)} rows ({original - len(df)} removed)")
    return df


def load(df, db_path, table_name):
    """Idempotent load — ลบ partition ก่อน แล้วค่อย insert"""
    logger.info(f"Loading {len(df)} rows to {table_name}")
    conn = sqlite3.connect(db_path)
    for partition in df["year_month"].unique():
        conn.execute(f"DELETE FROM {table_name} WHERE year_month = ?", (str(partition),))
    df.to_sql(table_name, conn, if_exists="append", index=False)
    conn.commit()
    conn.close()
    logger.info("Load complete ✅")


def run_pipeline():
    logger.info("=" * 50)
    logger.info("Pipeline started")
    start = datetime.now()
    try:
        raw = extract("data/raw/orders.csv")
        clean = transform(raw)
        load(clean, "data/warehouse.db", "fact_orders")
        logger.info(f"Pipeline completed in {(datetime.now() - start).total_seconds():.2f}s")
    except Exception as e:
        logger.error(f"Pipeline FAILED: {e}")
        raise


if __name__ == "__main__":
    run_pipeline()
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>Idempotency คือ rule #1</strong> — Pipeline ต้องรันซ้ำได้ ใช้ DELETE+INSERT หรือ MERGE</li>
  <li><strong>แยก E-T-L เป็นฟังก์ชันชัดเจน</strong> — test แยกได้ debug ง่าย</li>
  <li><strong>Log ทุกขั้นตอน</strong> — จำนวนแถว input/output, rows removed, เวลาที่ใช้</li>
  <li><strong>เก็บ raw data ไว้เสมอ</strong> — ถ้า transform logic ผิด จะได้ reprocess ได้!</li>
  <li><strong>ELT นิยมมากขึ้น</strong> — โหลด raw เข้า DW ก่อน แล้ว transform ด้วย dbt (SQL)</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>Pipeline ไม่ idempotent:</strong> รันซ้ำแล้วข้อมูลซ้ำ! → ต้อง DELETE ก่อน INSERT</li>
  <li><strong>ไม่มี retry:</strong> API fail 1 ครั้ง pipeline พังทั้งหมด → ใช้ retry + exponential backoff</li>
  <li><strong>ไม่ validate ข้อมูล:</strong> ข้อมูลเสียไหลเข้า DW → ต้อง validate ก่อน load</li>
  <li><strong>Full load ทุกวัน:</strong> ข้อมูลเยอะแล้ว full load ทุกวัน ช้าและแพง → ใช้ incremental</li>
  <li><strong>ไม่เก็บ raw data:</strong> transform แล้วทิ้ง raw → ถ้า logic ผิดแก้ไม่ได้!</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"ETL กับ ELT ต่างกันอย่างไร?"</strong><br/>
  ✅ ETL แปลงก่อนโหลด (บน server กลาง), ELT โหลดก่อนแปลง (ใน DW) ELT นิยมขึ้นเพราะ Cloud DW แรงพอ + ง่ายกว่า + เก็บ raw ได้</li>
  <li><strong>"Idempotency คืออะไร? ทำไมสำคัญ?"</strong><br/>
  ✅ รันกี่ครั้งก็ผลลัพธ์เหมือนเดิม สำคัญเพราะ pipeline อาจ fail ต้อง rerun ได้ ทำด้วย DELETE+INSERT, MERGE, หรือ partition overwrite</li>
  <li><strong>"Incremental Load ทำงานอย่างไร?"</strong><br/>
  ✅ ใช้ watermark (updated_at) เก็บค่า max ที่โหลดล่าสุด ครั้งถัดไปดึงเฉพาะ updated_at > watermark เร็วกว่า full load มาก</li>
  <li><strong>"Dead Letter Queue คืออะไร?"</strong><br/>
  ✅ ที่เก็บ record ที่ process ไม่สำเร็จ แยกออกมาเพื่อ investigate ทีหลัง record ที่สำเร็จยังไหลต่อได้</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>เขียน ETL pipeline: ดึงจาก <code>https://jsonplaceholder.typicode.com/posts</code> → เพิ่ม word_count, title_length → save เป็น Parquet</li>
  <li>แก้ pipeline ให้ Idempotent (ใช้ DELETE+INSERT หรือ overwrite file)</li>
  <li>เพิ่ม retry logic: retry 3 ครั้ง + exponential backoff เมื่อ API fail</li>
  <li>เพิ่ม logging: บันทึกเวลาเริ่ม, แถวที่ดึง, แถวหลัง transform, เวลาทั้งหมด</li>
</ol>
</div>
`
  }
];
