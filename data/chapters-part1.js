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
<h2>🗺️ Data Engineer คืออะไร?</h2>
<p><strong>Data Engineer (DE)</strong> คือคนที่ <em>สร้างและดูแลท่อส่งข้อมูล (Data Pipeline)</em> เพื่อให้ข้อมูลไหลจากแหล่งต้นทาง ไปยังปลายทางที่ Data Analyst, Data Scientist, หรือ Business User สามารถใช้งานได้ — ถูกต้อง, ทันเวลา, และเชื่อถือได้</p>

<p>ถ้าเปรียบข้อมูลเป็น <strong>น้ำ</strong> → DE คือ <strong>วิศวกรวางท่อประปา</strong> ไม่ใช่คนดื่มน้ำ</p>

<h3>📅 ชีวิตจริง DE — ตารางเวลา 1 วัน</h3>
<table>
  <thead><tr><th>เวลา</th><th>กิจกรรม</th><th>เครื่องมือที่ใช้</th></tr></thead>
  <tbody>
    <tr><td>09:00</td><td>เช็ค Pipeline status — มี job fail ไหม?</td><td>Airflow UI, Slack alerts</td></tr>
    <tr><td>09:30</td><td>แก้ pipeline ที่พังเมื่อคืน (data source เปลี่ยน schema)</td><td>Python, SQL, Git</td></tr>
    <tr><td>10:30</td><td>Stand-up meeting กับทีม</td><td>Jira, Confluence</td></tr>
    <tr><td>11:00</td><td>เขียน SQL transform ใหม่ ตาม request จาก Analyst</td><td>dbt, BigQuery</td></tr>
    <tr><td>12:00</td><td>🍜 พักเที่ยง</td><td>—</td></tr>
    <tr><td>13:00</td><td>Design data model สำหรับ feature ใหม่</td><td>dbdiagram.io, Draw.io</td></tr>
    <tr><td>14:30</td><td>Code review PR ของเพื่อนร่วมทีม</td><td>GitHub, dbt</td></tr>
    <tr><td>15:30</td><td>เขียน pipeline ดึงข้อมูลจาก API ภายนอก</td><td>Python, requests, Airflow</td></tr>
    <tr><td>17:00</td><td>เขียน test + documentation</td><td>pytest, Confluence</td></tr>
    <tr><td>17:30</td><td>Deploy pipeline ขึ้น staging → production</td><td>Git, CI/CD, Docker</td></tr>
  </tbody>
</table>

<h3>⚔️ DE vs DA vs DS vs MLE — เปรียบเทียบชัด ๆ</h3>
<table>
  <thead><tr><th>หัวข้อ</th><th>Data Engineer</th><th>Data Analyst</th><th>Data Scientist</th><th>ML Engineer</th></tr></thead>
  <tbody>
    <tr><td><strong>หน้าที่หลัก</strong></td><td>สร้าง/ดูแล Pipeline ข้อมูล</td><td>วิเคราะห์ข้อมูล ทำ Dashboard</td><td>สร้าง Model ทำนาย</td><td>Deploy Model ขึ้น Production</td></tr>
    <tr><td><strong>SQL</strong></td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
    <tr><td><strong>Python</strong></td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td><strong>Cloud</strong></td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><strong>Math/Stats</strong></td><td>⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td><strong>เครื่องมือหลัก</strong></td><td>Airflow, Spark, dbt, Docker</td><td>Tableau, Power BI, Excel</td><td>Jupyter, Scikit-learn, TensorFlow</td><td>Docker, K8s, MLflow, FastAPI</td></tr>
    <tr><td><strong>เงินเดือนไทย (Mid)</strong></td><td>60K-100K</td><td>40K-70K</td><td>60K-100K</td><td>70K-120K</td></tr>
  </tbody>
</table>

<h3>💰 เงินเดือน Data Engineer ไทย 2026</h3>
<table>
  <thead><tr><th>ระดับ</th><th>ประสบการณ์</th><th>เงินเดือน (THB/เดือน)</th><th>Skill ที่ต้องมี</th></tr></thead>
  <tbody>
    <tr><td>🟢 Junior</td><td>0-2 ปี</td><td>30,000 - 50,000</td><td>SQL, Python, Git, Basic Cloud</td></tr>
    <tr><td>🟡 Mid-level</td><td>2-5 ปี</td><td>60,000 - 100,000</td><td>+ Airflow, Spark, Data Modeling, Docker</td></tr>
    <tr><td>🔴 Senior</td><td>5+ ปี</td><td>100,000 - 150,000+</td><td>+ System Design, Team Lead, Cost Optimization</td></tr>
    <tr><td>🟣 Lead/Principal</td><td>8+ ปี</td><td>150,000 - 250,000+</td><td>+ Architecture, Strategy, Mentoring</td></tr>
  </tbody>
</table>

<h3>🏢 บริษัทในไทยที่รับ Data Engineer</h3>
<p><strong>Tech Companies:</strong> Agoda, LINE MAN Wongnai, Grab, Shopee, Lazada, True Digital, AIS, SCBX, KBTG, Bitkub</p>
<p><strong>Consulting:</strong> Accenture, Deloitte, PwC, EY, Thoughtworks</p>
<p><strong>Startups:</strong> Finnomena, Jitta, Arincare, Claim Di, FlowAccount</p>
<p><strong>Enterprise:</strong> SCG, PTT Digital, CP Group, Bangkok Bank, Krungsri</p>

<h3>📍 Roadmap ของคอร์สนี้ — 16 บท</h3>
<table>
  <thead><tr><th>Phase</th><th>บท</th><th>หัวข้อ</th></tr></thead>
  <tbody>
    <tr><td rowspan="4">🟢 Phase 1: พื้นฐาน</td><td>0</td><td>DE คืออะไร</td></tr>
    <tr><td>1</td><td>คอมพิวเตอร์ + Cloud</td></tr>
    <tr><td>2</td><td>Terminal + Git</td></tr>
    <tr><td>3</td><td>Python เบื้องต้น</td></tr>
    <tr><td rowspan="4">🔵 Phase 2: Core Skills</td><td>4</td><td>SQL (Deep Dive)</td></tr>
    <tr><td>5</td><td>Python สำหรับ DE</td></tr>
    <tr><td>6</td><td>Data Modeling</td></tr>
    <tr><td>7</td><td>ETL/ELT</td></tr>
    <tr><td rowspan="4">🟡 Phase 3: Tools</td><td>8</td><td>Docker</td></tr>
    <tr><td>9</td><td>Airflow</td></tr>
    <tr><td>10</td><td>BigQuery + dbt</td></tr>
    <tr><td>11</td><td>Spark</td></tr>
    <tr><td rowspan="4">🔴 Phase 4: Advanced</td><td>12</td><td>Streaming</td></tr>
    <tr><td>13</td><td>Data Quality</td></tr>
    <tr><td>14</td><td>CI/CD + Monitoring</td></tr>
    <tr><td>15</td><td>Portfolio Project</td></tr>
  </tbody>
</table>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>เริ่มจาก SQL ก่อน</strong> — ถ้ามีเวลาจำกัด SQL คือ skill ที่ให้ ROI สูงสุด ใช้ได้ทุกสาย Data</li>
  <li><strong>สร้าง Portfolio ตั้งแต่วันแรก</strong> — ทุกบทที่เรียน ให้ push code ขึ้น GitHub ทันที</li>
  <li><strong>อย่ารอให้พร้อม 100%</strong> — เรียน 60% แล้วเริ่มสมัครงานได้เลย เรียนรู้จากงานจริงเร็วกว่า</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความเข้าใจผิดที่พบบ่อย</h4>
<ul>
  <li><strong>"DE ต้องเก่ง Math"</strong> — ไม่จริง! Math เป็นของ DS ส่วน DE เน้น Engineering: SQL, Python, Cloud, Pipeline</li>
  <li><strong>"ต้องรู้ทุกเครื่องมือ"</strong> — ไม่ต้อง รู้แค่ 1 stack ให้ลึก (เช่น GCP + Airflow + dbt) ก็ได้งานแล้ว</li>
  <li><strong>"จบ IT เท่านั้นถึงจะเป็น DE ได้"</strong> — DE หลายคนจบบัญชี, เศรษฐศาสตร์, วิศวกรรม ไม่มี Background CS</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"Data Engineer ต่างจาก Data Scientist อย่างไร?"</strong><br/>
  ตอบ: DE สร้างและดูแลท่อข้อมูล (Pipeline) ให้ข้อมูลพร้อมใช้งาน ส่วน DS ใช้ข้อมูลที่ DE เตรียมไว้มาสร้าง Model ทำนาย — DE เน้น Engineering, DS เน้น Math/Statistics</li>
  <li><strong>"Pipeline คืออะไร? ยกตัวอย่าง"</strong><br/>
  ตอบ: Pipeline คือชุดขั้นตอนอัตโนมัติที่ดึงข้อมูลจากต้นทาง → แปลง → โหลดเข้าปลายทาง เช่น ดึง order จาก MySQL → clean + aggregate ด้วย Python → โหลดเข้า BigQuery ทุกวันตี 3</li>
  <li><strong>"ทำไมถึงอยากเป็น DE?"</strong><br/>
  ตอบ: ชอบแก้ปัญหาด้าน System + Data ไม่ใช่แค่วิเคราะห์ ชอบสร้างระบบที่ทำงานอัตโนมัติ มี impact กับทั้งองค์กร</li>
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
<h2>☁️ ทำไม DE ต้องเข้าใจ Hardware?</h2>
<p>ก่อนจะใช้ Cloud ได้ดี ต้องเข้าใจพื้นฐานก่อนว่า <strong>CPU, RAM, Disk, Network</strong> ทำงานอย่างไร เพราะ Cloud ก็คือคอมพิวเตอร์ของคนอื่น — เลือกผิด จ่ายแพง ทำงานช้า</p>

<h3>🖥️ Hardware Components ในมุม Data Engineer</h3>

<h4>CPU (Central Processing Unit)</h4>
<p>สมองของคอมพิวเตอร์ — ประมวลผลทุกอย่าง</p>
<ul>
  <li><strong>Core</strong> = จำนวนสมองที่ทำงานพร้อมกันได้ → 4 cores = ทำ 4 งานพร้อมกัน</li>
  <li><strong>Clock Speed (GHz)</strong> = ความเร็วต่อ core</li>
  <li><strong>ในงาน DE:</strong> Spark ใช้ CPU หลาย core ในการ process ข้อมูล → ยิ่ง core เยอะ ยิ่งเร็ว</li>
</ul>

<h4>RAM (Memory)</h4>
<p>หน่วยความจำชั่วคราว — เร็วมากแต่หายเมื่อปิดเครื่อง</p>
<ul>
  <li>RAM เร็วกว่า Disk <strong>100,000 เท่า</strong></li>
  <li><strong>ในงาน DE:</strong> Pandas โหลดข้อมูลทั้งหมดเข้า RAM → ไฟล์ 4GB ต้องมี RAM อย่างน้อย 8GB (rule of thumb: RAM ≥ 2x ขนาดข้อมูล)</li>
  <li>ถ้า RAM ไม่พอ → <code>MemoryError</code> หรือเครื่องช้ามาก (swap to disk)</li>
</ul>

<h4>Disk (Storage)</h4>
<p>เก็บข้อมูลถาวร — ช้ากว่า RAM แต่เก็บได้เยอะ</p>
<table>
  <thead><tr><th>ประเภท</th><th>ความเร็ว</th><th>ราคา</th><th>ใช้เมื่อไร</th></tr></thead>
  <tbody>
    <tr><td>HDD</td><td>~100 MB/s</td><td>ถูก</td><td>Archive, Backup</td></tr>
    <tr><td>SSD</td><td>~500 MB/s</td><td>ปานกลาง</td><td>Database, App ทั่วไป</td></tr>
    <tr><td>NVMe SSD</td><td>~3,500 MB/s</td><td>แพง</td><td>High-performance DB</td></tr>
  </tbody>
</table>

<h4>Network</h4>
<p>ท่อส่งข้อมูลระหว่างเครื่อง — DE ต้องสนใจเรื่อง Bandwidth กับ Latency</p>
<ul>
  <li><strong>Bandwidth</strong> = ปริมาณข้อมูลต่อวินาที (เช่น 1 Gbps)</li>
  <li><strong>Latency</strong> = เวลาที่ข้อมูลใช้เดินทาง (เช่น 5ms)</li>
  <li><strong>ในงาน DE:</strong> ดึงข้อมูล 10GB จาก API → ถ้า network ช้า pipeline ช้าตาม</li>
</ul>

<h3>⚡ Memory vs Disk I/O — ทำไม DE ต้องสนใจ</h3>
<pre><code class="language-text">
Operation                    | Time
-----------------------------|----------------
L1 Cache Reference           | 0.5 ns
RAM Reference                | 100 ns
SSD Random Read              | 150,000 ns
HDD Random Read              | 10,000,000 ns
Network: TH → US round trip  | 300,000,000 ns
</code></pre>
<p><strong>สรุป:</strong> RAM เร็วกว่า SSD ~1,500 เท่า, เร็วกว่า HDD ~100,000 เท่า → นี่คือเหตุผลว่าทำไม Spark พยายามทำทุกอย่างใน memory</p>

<h3>☁️ Cloud Computing — AWS vs GCP vs Azure</h3>
<p>Cloud = เช่าคอมพิวเตอร์ของคนอื่นผ่าน Internet แทนการซื้อเครื่องเอง</p>

<table>
  <thead><tr><th>หัวข้อ</th><th>AWS</th><th>GCP</th><th>Azure</th></tr></thead>
  <tbody>
    <tr><td><strong>เจ้าของ</strong></td><td>Amazon</td><td>Google</td><td>Microsoft</td></tr>
    <tr><td><strong>Market Share</strong></td><td>~31%</td><td>~12%</td><td>~25%</td></tr>
    <tr><td><strong>Compute</strong></td><td>EC2</td><td>Compute Engine</td><td>Virtual Machines</td></tr>
    <tr><td><strong>Storage</strong></td><td>S3</td><td>Cloud Storage (GCS)</td><td>Blob Storage</td></tr>
    <tr><td><strong>Data Warehouse</strong></td><td>Redshift</td><td>BigQuery ⭐</td><td>Synapse</td></tr>
    <tr><td><strong>Serverless Functions</strong></td><td>Lambda</td><td>Cloud Functions</td><td>Azure Functions</td></tr>
    <tr><td><strong>Container Orchestration</strong></td><td>EKS</td><td>GKE</td><td>AKS</td></tr>
    <tr><td><strong>จุดเด่นสำหรับ DE</strong></td><td>บริการเยอะ, Ecosystem ใหญ่</td><td>BigQuery ดีมาก, ราคาดี</td><td>Enterprise, Microsoft Stack</td></tr>
    <tr><td><strong>Free Tier</strong></td><td>12 เดือน</td><td>$300 credit + Always Free</td><td>$200 credit + 12 เดือน</td></tr>
    <tr><td><strong>ใช้เยอะในไทย</strong></td><td>✅ อันดับ 1</td><td>✅ Startup ชอบ</td><td>✅ Enterprise/ราชการ</td></tr>
  </tbody>
</table>

<p>🎯 <strong>ในคอร์สนี้เราจะใช้ GCP</strong> เพราะ BigQuery ดีมากสำหรับ DE, Free tier เยอะ, UI ใช้ง่าย</p>

<h3>🛠️ ติดตั้งเครื่องมือที่จำเป็น</h3>

<h4>1. VS Code</h4>
<pre><code class="language-text">
1. ไปที่ https://code.visualstudio.com
2. Download → Install
3. ติดตั้ง Extensions:
   - Python (Microsoft)
   - Pylance
   - GitLens
   - Rainbow CSV
   - SQL formatter
</code></pre>

<h4>2. Python 3.11+</h4>
<pre><code class="language-bash">
# Windows: download จาก python.org
# ✅ ต้องเลือก "Add Python to PATH"

# ตรวจสอบ
python --version
pip --version
</code></pre>

<h4>3. Git</h4>
<pre><code class="language-bash">
# Windows: download จาก git-scm.com
git --version

# ตั้งค่าตัวตน
git config --global user.name "ชื่อของคุณ"
git config --global user.email "email@example.com"
</code></pre>

<h4>4. สร้าง GCP Account</h4>
<pre><code class="language-text">
1. ไปที่ https://cloud.google.com
2. Sign in ด้วย Google Account
3. เปิด Free Trial → ได้ $300 credit (ใช้ 90 วัน)
4. สร้าง Project ใหม่ ชื่อ "de101-course"
5. เปิด BigQuery → ลองรัน: SELECT 1 + 1 AS result
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>ดูขนาดข้อมูลก่อนเลือกเครื่องมือ:</strong> &lt;1GB ใช้ Pandas, 1-100GB ใช้ Polars/DuckDB, &gt;100GB ใช้ Spark/BigQuery</li>
  <li><strong>Cloud Free Tier เพียงพอสำหรับเรียน:</strong> BigQuery ฟรี 1TB query/เดือน, GCS ฟรี 5GB</li>
  <li><strong>ตั้ง Budget Alert:</strong> ใน GCP → Billing → Budgets → ตั้ง alert ที่ $10 ป้องกันค่าใช้จ่ายบาน</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>"ลืมปิด VM บน Cloud"</strong> — เคยมีคนลืมปิด VM แล้วโดนเก็บเงินหลายพันบาท → ตั้ง Budget Alert เสมอ!</li>
  <li><strong>"ใช้ Pandas กับไฟล์ 10GB"</strong> — Pandas โหลดทั้งหมดเข้า RAM → ถ้า RAM 8GB จะพัง ใช้ Polars หรือ DuckDB แทน</li>
  <li><strong>"ไม่ Add Python to PATH ตอน install"</strong> — จะรันคำสั่ง python ไม่ได้ ต้อง reinstall</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"RAM ต่างจาก Disk อย่างไร? ส่งผลต่อ Pipeline อย่างไร?"</strong><br/>
  ตอบ: RAM เร็วแต่ข้อมูลหายเมื่อปิดเครื่อง, Disk ช้าแต่เก็บถาวร Pipeline ที่ process ข้อมูลใน RAM จะเร็วกว่ามาก (เช่น Spark in-memory) แต่ถ้าข้อมูลใหญ่กว่า RAM ต้อง spill ลง disk ทำให้ช้า</li>
  <li><strong>"ทำไมถึงเลือก GCP/AWS/Azure?"</strong><br/>
  ตอบ: ขึ้นกับ use case — GCP มี BigQuery ที่ดีมากสำหรับ analytics, AWS มี ecosystem ใหญ่ที่สุด, Azure เหมาะกับองค์กรที่ใช้ Microsoft Stack อยู่แล้ว</li>
  <li><strong>"Cloud ดีกว่า On-premise อย่างไร?"</strong><br/>
  ตอบ: ไม่ต้องลงทุนซื้อเครื่อง, scale ได้ตาม demand, จ่ายเท่าที่ใช้ (pay-as-you-go), ไม่ต้องดูแล hardware เอง แต่ Cloud แพงกว่าถ้า workload คงที่และใช้ 24/7</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ติดตั้ง VS Code + Python + Git ให้เรียบร้อย แล้ว screenshot หน้าจอ terminal ที่รันได้ทั้ง 3</li>
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
<h2>⌨️ Terminal — อาวุธหลักของ Engineer</h2>
<p>GUI สวยก็จริง แต่ <strong>Terminal เร็วกว่า, ทำ automation ได้, และ server ไม่มี GUI</strong> — DE ทุกคนต้องใช้ Terminal คล่อง</p>

<h3>📂 คำสั่งจัดการไฟล์</h3>
<pre><code class="language-bash">
# ดูไฟล์/โฟลเดอร์
ls              # list files
ls -la          # list ทั้งหมด + hidden + detail
ls -lh          # แสดงขนาดแบบอ่านง่าย (KB, MB)

# เปลี่ยน directory
cd /home/user   # ไปที่ path ที่กำหนด
cd ..           # ขึ้น 1 ระดับ
cd ~            # กลับ home
cd -            # กลับไป directory ก่อนหน้า

# สร้าง/ลบ
mkdir data              # สร้างโฟลเดอร์
mkdir -p data/raw/csv   # สร้าง nested folders
rm file.txt             # ลบไฟล์
rm -r folder/           # ลบโฟลเดอร์ (recursive)
rm -rf folder/          # ⚠️ ลบแบบไม่ถาม — ระวัง!

# คัดลอก/ย้าย
cp file.txt backup.txt           # copy
cp -r folder/ folder_backup/     # copy folder
mv old_name.txt new_name.txt     # rename
mv file.txt /other/path/         # move
</code></pre>

<h3>📖 คำสั่งอ่านไฟล์</h3>
<pre><code class="language-bash">
cat data.csv            # แสดงทั้งไฟล์ (ไม่ดีถ้าไฟล์ใหญ่)
head -5 data.csv        # 5 บรรทัดแรก
tail -5 data.csv        # 5 บรรทัดสุดท้าย
tail -f app.log         # ดู log แบบ real-time (follow)
less data.csv           # เปิดอ่านแบบ scroll ได้ (q เพื่อออก)
wc -l data.csv          # นับจำนวนบรรทัด
wc -w data.csv          # นับจำนวนคำ
</code></pre>

<h3>🔍 คำสั่งค้นหาและกรอง</h3>
<pre><code class="language-bash">
# grep — ค้นหาข้อความในไฟล์
grep "ERROR" app.log                 # หาบรรทัดที่มี ERROR
grep -i "error" app.log              # case insensitive
grep -c "ERROR" app.log              # นับจำนวนที่เจอ
grep -r "TODO" ./src/                # ค้นหาใน folder (recursive)
grep -n "ERROR" app.log              # แสดงเลขบรรทัด

# find — ค้นหาไฟล์
find . -name "*.csv"                 # หาไฟล์ .csv ใน folder ปัจจุบัน
find . -name "*.log" -mtime -1       # หา .log ที่แก้ไขใน 1 วัน
find . -size +100M                   # หาไฟล์ขนาด > 100MB

# sort & uniq
sort data.txt                        # เรียงลำดับ
sort -r data.txt                     # เรียงย้อนกลับ
sort data.txt | uniq                 # ลบบรรทัดซ้ำ
sort data.txt | uniq -c              # นับจำนวนซ้ำ
</code></pre>

<h3>🔧 awk — เครื่องมือจัดการข้อมูลใน Terminal</h3>
<pre><code class="language-bash">
# awk ใช้จัดการข้อมูลแบบ column
awk -F',' '{print $1, $3}' data.csv     # แสดง column 1 กับ 3
awk -F',' 'NR>1 {sum+=$3} END {print sum}' data.csv   # sum column 3 (ข้าม header)
awk -F',' '$3 > 1000' data.csv          # กรองแถวที่ column 3 > 1000
</code></pre>

<h3>🔗 Pipe ( | ) — ต่อคำสั่งเข้าด้วยกัน</h3>
<p>Pipe คือ <strong>พลังที่แท้จริง</strong>ของ Terminal — ต่อ output ของคำสั่งหนึ่งเป็น input ของอีกคำสั่ง</p>
<pre><code class="language-bash">
# ตัวอย่างจริง: วิเคราะห์ log ไฟล์
cat app.log | grep "ERROR" | wc -l
# อ่าน log → กรองเฉพาะ ERROR → นับจำนวน

# ดู top 5 IP ที่ request เยอะสุด
cat access.log | awk '{print $1}' | sort | uniq -c | sort -rn | head -5

# นับจำนวน record ในแต่ละ CSV file
wc -l *.csv | sort -rn

# หา Python file ที่มีคำว่า "import pandas"
grep -r "import pandas" --include="*.py" .
</code></pre>

<hr/>

<h2>🔀 Git — Version Control สำหรับทุก Engineer</h2>
<p>Git คือระบบ <strong>Version Control</strong> ที่ช่วยให้:</p>
<ul>
  <li>ดูว่าใครเปลี่ยนอะไร เมื่อไร (history)</li>
  <li>ย้อนกลับไปเวอร์ชันเก่าได้</li>
  <li>หลายคนทำงานพร้อมกันได้ (branching)</li>
  <li>ทุกบริษัทใช้ Git 100%</li>
</ul>

<h3>📌 Git พื้นฐาน</h3>
<pre><code class="language-bash">
# เริ่มต้น repo ใหม่
git init

# ดู status
git status

# เพิ่มไฟล์เข้า staging
git add file.py          # เพิ่มไฟล์เดียว
git add .                # เพิ่มทุกไฟล์

# Commit — บันทึก snapshot
git commit -m "Add data pipeline script"

# ดู history
git log --oneline

# ดูความเปลี่ยนแปลง
git diff                 # ดูสิ่งที่เปลี่ยนแต่ยังไม่ add
git diff --staged        # ดูสิ่งที่ add แล้วแต่ยังไม่ commit
</code></pre>

<h3>🌿 Branching — ทำงานแบบแยก branch</h3>
<pre><code class="language-bash">
# สร้าง branch ใหม่
git branch feature/add-pipeline

# สลับ branch
git checkout feature/add-pipeline
# หรือ (Git 2.23+)
git switch feature/add-pipeline

# สร้าง + สลับในคำสั่งเดียว
git checkout -b feature/add-pipeline

# ดู branch ทั้งหมด
git branch -a

# Merge branch กลับเข้า main
git checkout main
git merge feature/add-pipeline

# ลบ branch ที่ merge แล้ว
git branch -d feature/add-pipeline
</code></pre>

<h3>🌐 GitHub — Remote Repository</h3>
<pre><code class="language-bash">
# เชื่อมต่อ remote repo
git remote add origin https://github.com/username/repo.git

# Push ขึ้น remote
git push -u origin main

# Pull จาก remote
git pull origin main

# Clone repo
git clone https://github.com/username/repo.git
</code></pre>

<h3>🔑 SSH Keys — เชื่อมต่อ GitHub แบบไม่ต้องกรอก password</h3>
<pre><code class="language-bash">
# สร้าง SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"
# กด Enter 3 ครั้ง (ใช้ default ทั้งหมด)

# คัดลอก public key
cat ~/.ssh/id_ed25519.pub

# ไปที่ GitHub → Settings → SSH Keys → New SSH Key → วาง public key

# ทดสอบ
ssh -T git@github.com
# ควรเห็น: "Hi username! You've successfully authenticated"
</code></pre>

<h3>🔄 Pull Request (PR) — วิธีทำงานในทีม</h3>
<pre><code class="language-text">
1. สร้าง branch ใหม่:  git checkout -b feature/xxx
2. เขียนโค้ด + commit
3. Push branch:  git push -u origin feature/xxx
4. ไปที่ GitHub → สร้าง Pull Request
5. เพื่อนร่วมทีม Review code
6. แก้ไขตาม feedback (ถ้ามี)
7. Merge PR เข้า main
8. ลบ branch
</code></pre>

<div class="cheatsheet">
<h4>📋 Git Cheatsheet</h4>
<table>
  <thead><tr><th>คำสั่ง</th><th>ทำอะไร</th></tr></thead>
  <tbody>
    <tr><td><code>git init</code></td><td>สร้าง repo ใหม่</td></tr>
    <tr><td><code>git add .</code></td><td>เพิ่มทุกไฟล์เข้า staging</td></tr>
    <tr><td><code>git commit -m "msg"</code></td><td>บันทึก snapshot</td></tr>
    <tr><td><code>git push</code></td><td>อัพขึ้น remote</td></tr>
    <tr><td><code>git pull</code></td><td>ดึงจาก remote</td></tr>
    <tr><td><code>git checkout -b name</code></td><td>สร้าง + สลับ branch</td></tr>
    <tr><td><code>git merge name</code></td><td>รวม branch</td></tr>
    <tr><td><code>git log --oneline</code></td><td>ดู history</td></tr>
    <tr><td><code>git stash</code></td><td>เก็บงานชั่วคราว</td></tr>
    <tr><td><code>git stash pop</code></td><td>เอางานที่เก็บกลับมา</td></tr>
  </tbody>
</table>
</div>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>Commit message ที่ดี:</strong> ใช้ pattern <code>type: description</code> เช่น <code>feat: add daily sales pipeline</code>, <code>fix: handle null values in transform</code></li>
  <li><strong>อย่า commit ไฟล์ลับ:</strong> สร้าง <code>.gitignore</code> ใส่ <code>.env</code>, <code>*.csv</code>, <code>__pycache__/</code> ป้องกัน API key หลุด</li>
  <li><strong>alias ช่วยพิมพ์เร็ว:</strong> <code>alias gs='git status'</code>, <code>alias gc='git commit -m'</code></li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong><code>rm -rf /</code></strong> — ลบทุกอย่างในเครื่อง ห้ามพิมพ์เด็ดขาด!</li>
  <li><strong>Commit ไฟล์ <code>.env</code> ที่มี password</strong> — แม้ลบทีหลัง มันยังอยู่ใน git history ต้องใช้ git filter-branch หรือ BFG เพื่อลบจริง ๆ</li>
  <li><strong>ทำงานบน main branch ตรง ๆ</strong> — ต้องสร้าง branch แยกเสมอ แล้ว merge ผ่าน PR</li>
  <li><strong><code>git add .</code> โดยไม่ดู status ก่อน</strong> — อาจ add ไฟล์ที่ไม่ต้องการเข้าไป ดู <code>git status</code> ก่อนทุกครั้ง</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"git merge กับ git rebase ต่างกันอย่างไร?"</strong><br/>
  ตอบ: <code>merge</code> สร้าง commit ใหม่ที่รวม 2 branch เก็บ history ทั้งหมด ส่วน <code>rebase</code> ย้าย commits ไปอยู่บน branch ปลายทาง ทำให้ history เป็นเส้นตรง — ใช้ rebase สำหรับ local branch, merge สำหรับ shared branch</li>
  <li><strong>"git reset กับ git revert ต่างกันไหม?"</strong><br/>
  ตอบ: <code>reset</code> ลบ commits ออกจาก history (อันตราย ถ้า push แล้ว), <code>revert</code> สร้าง commit ใหม่ที่ undo การเปลี่ยนแปลง (ปลอดภัย ใช้กับ shared branch ได้)</li>
  <li><strong>"ใช้ Terminal command อะไรบ้างในการดู/วิเคราะห์ log ไฟล์?"</strong><br/>
  ตอบ: <code>tail -f</code> ดู log real-time, <code>grep "ERROR" app.log</code> กรอง error, <code>grep -c</code> นับ, <code>awk</code> ดึง field ที่ต้องการ, pipe ต่อกันเพื่อวิเคราะห์</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด: สร้าง First Repo</h4>
<ol>
  <li>สร้างโฟลเดอร์ <code>de101-exercises</code></li>
  <li><code>git init</code> ใน folder นั้น</li>
  <li>สร้างไฟล์ <code>README.md</code> เขียน "# DE101 Exercises"</li>
  <li>สร้าง <code>.gitignore</code> ใส่ <code>.env</code>, <code>*.csv</code>, <code>__pycache__/</code></li>
  <li><code>git add . → git commit -m "Initial commit"</code></li>
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
<h2>🐍 Python — ภาษาหลักของ Data Engineer</h2>
<p>Python เป็นภาษาที่ใช้มากที่สุดในสาย Data เพราะ: เรียนง่าย, Library เยอะ (Pandas, PySpark, Airflow), ทุกบริษัทใช้</p>

<h3>📦 ตัวแปรและชนิดข้อมูล</h3>
<pre><code class="language-python">
# ไม่ต้องประกาศ type — Python จัดการให้
name = "สมชาย"           # str
age = 25                 # int
salary = 45000.50        # float
is_active = True         # bool
data = None              # NoneType

# ตรวจ type
type(name)    # &lt;class 'str'&gt;

# Type conversion
str(25)       # "25"
int("25")     # 25
float("3.14") # 3.14
</code></pre>

<h3>📝 f-string — จัดรูปแบบ string</h3>
<pre><code class="language-python">
name = "สมชาย"
salary = 45000

# f-string (Python 3.6+) — วิธีที่ดีที่สุด
print(f"ชื่อ: {name}, เงินเดือน: {salary:,.0f} บาท")
# ชื่อ: สมชาย, เงินเดือน: 45,000 บาท

# Format ตัวเลข
pi = 3.14159
print(f"Pi = {pi:.2f}")         # Pi = 3.14
print(f"Revenue: {1234567:,}")  # Revenue: 1,234,567
print(f"{'hello':>20}")         # จัดขวา 20 ช่อง
</code></pre>

<h3>🔀 เงื่อนไข if/elif/else</h3>
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

# Ternary (เงื่อนไขบรรทัดเดียว)
status = "pass" if score >= 50 else "fail"
</code></pre>

<h3>🔄 Loop: for / while</h3>
<pre><code class="language-python">
# for loop
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for name in ["Alice", "Bob", "Charlie"]:
    print(f"Hello {name}")

# enumerate — ได้ index + value
for i, name in enumerate(["Alice", "Bob"], start=1):
    print(f"{i}. {name}")

# while loop
count = 0
while count < 3:
    print(count)
    count += 1

# break & continue
for i in range(10):
    if i == 3:
        continue    # ข้าม 3
    if i == 7:
        break       # หยุดที่ 7
    print(i)
</code></pre>

<h3>📋 Data Structures</h3>

<h4>List — ลำดับ, แก้ได้, ซ้ำได้</h4>
<pre><code class="language-python">
fruits = ["apple", "banana", "cherry"]
fruits.append("date")          # เพิ่มท้าย
fruits.insert(0, "avocado")    # แทรกที่ index 0
fruits.remove("banana")        # ลบตาม value
popped = fruits.pop()          # ลบ + return ตัวสุดท้าย
fruits.sort()                  # เรียงลำดับ
print(len(fruits))             # จำนวนสมาชิก

# Slicing
nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])   # [1, 2, 3]
print(nums[:3])    # [0, 1, 2]
print(nums[-2:])   # [4, 5]
</code></pre>

<h4>List Comprehension — สร้าง list แบบกระชับ</h4>
<pre><code class="language-python">
# ปกติ
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension — สั้นกว่า, เร็วกว่า
squares = [x ** 2 for x in range(10)]

# + เงื่อนไข
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]

# ใช้กับ string
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
</code></pre>

<h4>Dictionary — key-value, เร็วมากในการค้นหา</h4>
<pre><code class="language-python">
user = {
    "name": "สมชาย",
    "age": 25,
    "role": "DE"
}

# เข้าถึง
print(user["name"])              # สมชาย
print(user.get("salary", 0))    # 0 (ถ้าไม่มี key ไม่ error)

# เพิ่ม/แก้ไข
user["salary"] = 50000
user["age"] = 26

# วนลูป
for key, value in user.items():
    print(f"{key}: {value}")

# Dict comprehension
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
</code></pre>

<h4>Set & Tuple</h4>
<pre><code class="language-python">
# Set — ไม่ซ้ำ, ไม่มีลำดับ → เหมาะกับ deduplicate
ids = {1, 2, 3, 2, 1}   # {1, 2, 3}
ids.add(4)
ids.discard(1)
# Set operations
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # {2, 3}  intersection
print(a | b)  # {1, 2, 3, 4}  union

# Tuple — เหมือน list แต่แก้ไขไม่ได้ (immutable)
# ใช้เมื่อข้อมูลไม่ควรถูกเปลี่ยน
point = (10, 20)
x, y = point    # unpacking
</code></pre>

<div class="cheatsheet">
<h4>📋 เมื่อไรใช้ Data Structure ไหน?</h4>
<table>
  <thead><tr><th>Type</th><th>ลำดับ?</th><th>แก้ได้?</th><th>ซ้ำได้?</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><code>list</code></td><td>✅</td><td>✅</td><td>✅</td><td>เก็บข้อมูลเรียงลำดับทั่วไป</td></tr>
    <tr><td><code>dict</code></td><td>✅ (3.7+)</td><td>✅</td><td>key ไม่ซ้ำ</td><td>key-value lookup (เร็วมาก O(1))</td></tr>
    <tr><td><code>set</code></td><td>❌</td><td>✅</td><td>❌</td><td>ตัดค่าซ้ำ, เช็คสมาชิก (เร็ว O(1))</td></tr>
    <tr><td><code>tuple</code></td><td>✅</td><td>❌</td><td>✅</td><td>ข้อมูลคงที่, return หลายค่า</td></tr>
  </tbody>
</table>
</div>

<h3>🔧 Functions</h3>
<pre><code class="language-python">
# Basic function
def greet(name):
    return f"สวัสดี {name}!"

# Default parameter
def calculate_tax(income, rate=0.15):
    return income * rate

# Multiple return
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers) / len(numbers)

low, high, avg = get_stats([10, 20, 30, 40])

# *args — รับ argument ไม่จำกัดจำนวน
def total(*args):
    return sum(args)

total(1, 2, 3, 4)  # 10

# **kwargs — รับ keyword arguments ไม่จำกัด
def create_user(**kwargs):
    return kwargs

user = create_user(name="สมชาย", age=25, role="DE")
# {'name': 'สมชาย', 'age': 25, 'role': 'DE'}

# Lambda — ฟังก์ชันบรรทัดเดียว
square = lambda x: x ** 2
sorted_users = sorted(users, key=lambda u: u["age"])
</code></pre>

<h3>📁 File I/O: อ่านเขียน CSV & JSON</h3>
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

<h3>🛡️ Error Handling</h3>
<pre><code class="language-python">
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("จบการทำงาน")  # ทำทุกกรณี

# ใช้จริงใน DE
def safe_read_csv(filepath):
    try:
        with open(filepath, "r") as f:
            return list(csv.DictReader(f))
    except FileNotFoundError:
        print(f"ไม่พบไฟล์: {filepath}")
        return []
    except csv.Error as e:
        print(f"CSV error: {e}")
        return []
</code></pre>

<h3>📦 Virtual Environment + pip</h3>
<pre><code class="language-bash">
# สร้าง virtual environment
python -m venv venv

# เปิดใช้งาน
# Windows:
venv\\Scripts\\activate
# Mac/Linux:
source venv/bin/activate

# ติดตั้ง package
pip install pandas requests

# บันทึก dependencies
pip freeze > requirements.txt

# ติดตั้งจากไฟล์
pip install -r requirements.txt

# ออกจาก venv
deactivate
</code></pre>

<h3>🏆 โปรเจกต์: อ่าน CSV → Filter → เขียนไฟล์ใหม่</h3>
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
  <li><strong>ใช้ f-string เสมอ</strong> — อย่าใช้ <code>+</code> ต่อ string หรือ <code>.format()</code> ช้ากว่าและอ่านยากกว่า</li>
  <li><strong>ใช้ <code>with</code> เปิดไฟล์เสมอ</strong> — จะปิดไฟล์ให้อัตโนมัติแม้เกิด error</li>
  <li><strong>ใช้ list comprehension แทน for loop + append</strong> — เร็วกว่า ~20-30%</li>
  <li><strong>สร้าง venv ทุกโปรเจกต์</strong> — ป้องกัน library version ชนกัน</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong><code>== vs is</code></strong>: ใช้ <code>==</code> เปรียบเทียบค่า, ใช้ <code>is</code> เฉพาะ <code>None</code> เท่านั้น (<code>if x is None</code>)</li>
  <li><strong>Mutable default argument:</strong> อย่าใช้ <code>def func(data=[])</code> → ใช้ <code>def func(data=None)</code> แทน</li>
  <li><strong>ลืม encoding="utf-8":</strong> ถ้ามีภาษาไทยในไฟล์ ต้องระบุ encoding เสมอ ไม่งั้น error</li>
  <li><strong>ไม่ใช้ try/except:</strong> pipeline ที่ไม่มี error handling จะพังเงียบ ๆ โดยไม่รู้สาเหตุ</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"List กับ Tuple ต่างกันอย่างไร?"</strong><br/>
  ตอบ: List mutable (แก้ไขได้), Tuple immutable (แก้ไม่ได้) Tuple เร็วกว่าเล็กน้อย ใช้เป็น dict key ได้ ใช้เมื่อข้อมูลไม่ควรถูกเปลี่ยน</li>
  <li><strong>"*args กับ **kwargs คืออะไร?"</strong><br/>
  ตอบ: <code>*args</code> รับ positional arguments ไม่จำกัดจำนวนเป็น tuple, <code>**kwargs</code> รับ keyword arguments เป็น dict ใช้สร้างฟังก์ชันที่ยืดหยุ่น</li>
  <li><strong>"List comprehension ดีกว่า for loop อย่างไร?"</strong><br/>
  ตอบ: กระชับกว่า อ่านง่ายกว่า (เมื่อคุ้นเคย) และเร็วกว่า ~20-30% เพราะ optimized ใน CPython แต่ถ้าซับซ้อนเกินไป ควรใช้ for loop แทนเพื่อความอ่านง่าย</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>เขียนฟังก์ชัน <code>word_count(text)</code> ที่รับ string แล้ว return dict นับจำนวนคำ เช่น <code>{"hello": 2, "world": 1}</code></li>
  <li>เขียน script อ่านไฟล์ JSON ที่มี list of users → กรองเฉพาะ user ที่ <code>age &gt; 30</code> → เขียนเป็น JSON ไฟล์ใหม่</li>
  <li>สร้าง venv → ติดตั้ง <code>requests</code> → เขียน script ดึงข้อมูลจาก <code>https://api.github.com/users/octocat</code> → print ชื่อ, bio, public repos</li>
</ol>
</div>
`
  },

  // ===========================================================================
  // CHAPTER 4 — SQL (DEEP DIVE — LONGEST CHAPTER)
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
<h2>🗄️ SQL — ทักษะ #1 ของ Data Engineer</h2>
<p>ถ้าจะเรียนแค่สิ่งเดียวในคอร์สนี้ — <strong>เรียน SQL</strong> ทุกบริษัท ทุกตำแหน่ง Data ใช้ SQL ทุกวัน ไม่ว่าจะเป็น BigQuery, PostgreSQL, MySQL, Snowflake, หรือ Spark SQL</p>

<p>เราจะเรียน SQL เป็น 6 ระดับ จากง่ายไปยาก:</p>

<hr/>

<h3>📊 Level 1: SELECT — เลือกข้อมูล</h3>
<p>สมมติเรามีตาราง <code>orders</code>:</p>
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
-- เลือกทุก column
SELECT * FROM orders;

-- เลือกเฉพาะ column ที่ต้องการ (best practice!)
SELECT order_id, customer_name, amount
FROM orders;

-- Alias — ตั้งชื่อใหม่
SELECT
    customer_name AS ชื่อลูกค้า,
    amount AS ยอดขาย,
    amount * 0.07 AS vat
FROM orders;

-- DISTINCT — ค่าไม่ซ้ำ
SELECT DISTINCT customer_name FROM orders;
SELECT DISTINCT status FROM orders;

-- WHERE — กรองเงื่อนไข
SELECT * FROM orders WHERE amount > 10000;
SELECT * FROM orders WHERE status = 'completed';
SELECT * FROM orders WHERE status != 'cancelled';

-- AND, OR, NOT
SELECT * FROM orders
WHERE status = 'completed' AND amount > 5000;

SELECT * FROM orders
WHERE customer_name = 'สมชาย' OR customer_name = 'วิชัย';

-- IN — เหมือน OR หลายค่า
SELECT * FROM orders
WHERE customer_name IN ('สมชาย', 'สมหญิง');

-- BETWEEN
SELECT * FROM orders
WHERE order_date BETWEEN '2026-01-15' AND '2026-01-18';

-- LIKE — ค้นหาแบบ pattern
SELECT * FROM orders WHERE product LIKE 'L%';       -- ขึ้นต้นด้วย L
SELECT * FROM orders WHERE product LIKE '%board';    -- ลงท้ายด้วย board
SELECT * FROM orders WHERE product LIKE '%top%';     -- มี top อยู่ตรงไหนก็ได้

-- IS NULL / IS NOT NULL
SELECT * FROM orders WHERE status IS NOT NULL;

-- ORDER BY — เรียงลำดับ
SELECT * FROM orders ORDER BY amount DESC;           -- มากไปน้อย
SELECT * FROM orders ORDER BY order_date ASC;        -- น้อยไปมาก (default)

-- LIMIT — จำกัดจำนวนแถว
SELECT * FROM orders ORDER BY amount DESC LIMIT 3;   -- Top 3
</code></pre>

<hr/>

<h3>🔗 Level 2: JOINs — รวมข้อมูลจากหลายตาราง</h3>
<p>สมมติมีตาราง <code>customers</code> เพิ่ม:</p>
<table>
  <thead><tr><th>customer_id</th><th>name</th><th>city</th><th>tier</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>สมชาย</td><td>กรุงเทพ</td><td>Gold</td></tr>
    <tr><td>2</td><td>สมหญิง</td><td>เชียงใหม่</td><td>Silver</td></tr>
    <tr><td>3</td><td>วิชัย</td><td>กรุงเทพ</td><td>Gold</td></tr>
    <tr><td>4</td><td>มานี</td><td>ภูเก็ต</td><td>Bronze</td></tr>
  </tbody>
</table>
<p>ตาราง <code>orders</code> มี <code>customer_id</code> ที่ link ไป <code>customers</code>:</p>

<pre><code class="language-sql">
-- ============================================
-- INNER JOIN — เฉพาะแถวที่ match ทั้ง 2 ตาราง
-- ============================================
SELECT
    o.order_id,
    c.name,
    c.city,
    o.product,
    o.amount
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;
-- ❌ ลูกค้า "มานี" ไม่มี order → ไม่แสดง
-- ❌ order ที่ customer_id ไม่มีในตาราง customers → ไม่แสดง

-- ============================================
-- LEFT JOIN — ทุกแถวจากตารางซ้าย + match จากขวา
-- ============================================
SELECT
    c.name,
    c.city,
    o.product,
    o.amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id;
-- ✅ "มานี" แสดง แม้ไม่มี order (product, amount = NULL)

-- ============================================
-- RIGHT JOIN — ทุกแถวจากตารางขวา + match จากซ้าย
-- ============================================
-- ใช้น้อย — เขียน LEFT JOIN สลับตารางแทนได้

-- ============================================
-- FULL OUTER JOIN — ทุกแถวจากทั้ง 2 ตาราง
-- ============================================
SELECT
    c.name,
    o.product,
    o.amount
FROM customers c
FULL OUTER JOIN orders o ON c.customer_id = o.customer_id;
-- ✅ ลูกค้าไม่มี order → แสดง (product = NULL)
-- ✅ order ไม่มี customer → แสดง (name = NULL)

-- ============================================
-- CROSS JOIN — ทุก combination
-- ============================================
SELECT
    c.name,
    p.product_name
FROM customers c
CROSS JOIN products p;
-- 4 customers × 3 products = 12 แถว

-- ============================================
-- SELF JOIN — join ตารางกับตัวเอง
-- ============================================
-- ตัวอย่าง: หาพนักงานกับหัวหน้า
SELECT
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
</code></pre>

<div class="cheatsheet">
<h4>📋 JOIN Cheatsheet</h4>
<table>
  <thead><tr><th>JOIN Type</th><th>ผลลัพธ์</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td>INNER JOIN</td><td>เฉพาะแถวที่ match ทั้ง 2 ฝั่ง</td><td>ต้องการข้อมูลที่สมบูรณ์เท่านั้น</td></tr>
    <tr><td>LEFT JOIN</td><td>ทุกแถวจากซ้าย + match จากขวา</td><td>ใช้บ่อยที่สุด — เก็บข้อมูลหลักไว้ครบ</td></tr>
    <tr><td>RIGHT JOIN</td><td>ทุกแถวจากขวา + match จากซ้าย</td><td>ใช้น้อย — สลับ LEFT JOIN แทน</td></tr>
    <tr><td>FULL OUTER JOIN</td><td>ทุกแถวจากทั้ง 2 ฝั่ง</td><td>ต้องการเห็นข้อมูลทั้งหมดรวม unmatched</td></tr>
    <tr><td>CROSS JOIN</td><td>ทุก combination (m × n แถว)</td><td>สร้าง date spine, ทุก combination</td></tr>
    <tr><td>SELF JOIN</td><td>ตารางกับตัวเอง</td><td>Hierarchy (พนักงาน-หัวหน้า)</td></tr>
  </tbody>
</table>
</div>

<hr/>

<h3>📊 Level 3: GROUP BY, HAVING, CASE WHEN</h3>

<pre><code class="language-sql">
-- ============================================
-- GROUP BY — จัดกลุ่ม + Aggregate
-- ============================================
-- Aggregate Functions: COUNT, SUM, AVG, MIN, MAX

-- จำนวน order ของแต่ละลูกค้า
SELECT
    customer_name,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_spent,
    AVG(amount) AS avg_order,
    MIN(amount) AS min_order,
    MAX(amount) AS max_order
FROM orders
GROUP BY customer_name;

-- ยอดขายรายเดือน
SELECT
    DATE_TRUNC('month', order_date) AS month,
    COUNT(*) AS total_orders,
    SUM(amount) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY month;

-- ============================================
-- HAVING — กรองหลัง GROUP BY
-- ============================================
-- WHERE กรองก่อน GROUP, HAVING กรองหลัง GROUP

-- ลูกค้าที่สั่งซื้อมากกว่า 2 ครั้ง
SELECT
    customer_name,
    COUNT(*) AS total_orders,
    SUM(amount) AS total_spent
FROM orders
GROUP BY customer_name
HAVING COUNT(*) > 2;

-- เดือนที่มี revenue มากกว่า 100,000
SELECT
    DATE_TRUNC('month', order_date) AS month,
    SUM(amount) AS revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date)
HAVING SUM(amount) > 100000;

-- ============================================
-- CASE WHEN — เงื่อนไขใน SQL
-- ============================================
SELECT
    order_id,
    amount,
    CASE
        WHEN amount >= 30000 THEN 'High'
        WHEN amount >= 5000 THEN 'Medium'
        ELSE 'Low'
    END AS order_tier
FROM orders;

-- CASE WHEN กับ GROUP BY — pivot-like
SELECT
    customer_name,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed_orders,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) AS pending_orders,
    COUNT(CASE WHEN status = 'cancelled' THEN 1 END) AS cancelled_orders
FROM orders
GROUP BY customer_name;

-- ⚡ COALESCE — จัดการ NULL
SELECT
    customer_name,
    COALESCE(phone, email, 'N/A') AS contact
FROM customers;
-- ใช้ค่าแรกที่ไม่ใช่ NULL
</code></pre>

<hr/>

<h3>🏗️ Level 4: CTE (Common Table Expression)</h3>
<p>CTE = ตารางชั่วคราวที่สร้างด้วย <code>WITH</code> — ทำให้ SQL อ่านง่าย ใช้ซ้ำได้</p>

<pre><code class="language-sql">
-- ============================================
-- ตัวอย่างจริง: หา Top Customers ที่ซื้อเยอะกว่าค่าเฉลี่ย
-- ============================================

-- ❌ ไม่ใช้ CTE — อ่านยาก, subquery ซ้อน
SELECT customer_name, total_spent
FROM (
    SELECT customer_name, SUM(amount) AS total_spent
    FROM orders
    WHERE status = 'completed'
    GROUP BY customer_name
) sub
WHERE total_spent > (
    SELECT AVG(total_spent)
    FROM (
        SELECT customer_name, SUM(amount) AS total_spent
        FROM orders
        WHERE status = 'completed'
        GROUP BY customer_name
    ) sub2
);

-- ✅ ใช้ CTE — อ่านง่าย, สะอาด
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
    SELECT AVG(total_spent) AS avg_spent
    FROM customer_spending
)
SELECT
    cs.customer_name,
    cs.total_spent,
    cs.total_orders,
    a.avg_spent
FROM customer_spending cs
CROSS JOIN avg_spending a
WHERE cs.total_spent > a.avg_spent
ORDER BY cs.total_spent DESC;

-- ============================================
-- ตัวอย่าง: Monthly Revenue Growth
-- ============================================
WITH monthly_revenue AS (
    SELECT
        DATE_TRUNC('month', order_date) AS month,
        SUM(amount) AS revenue
    FROM orders
    WHERE status = 'completed'
    GROUP BY DATE_TRUNC('month', order_date)
),
revenue_with_prev AS (
    SELECT
        month,
        revenue,
        LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue
    FROM monthly_revenue
)
SELECT
    month,
    revenue,
    prev_month_revenue,
    ROUND((revenue - prev_month_revenue) * 100.0 / prev_month_revenue, 2)
        AS growth_pct
FROM revenue_with_prev
ORDER BY month;
</code></pre>

<hr/>

<h3>🪟 Level 5: Window Functions — อาวุธลับของ DE</h3>
<p>Window Functions ประมวลผลข้ามแถวโดย <strong>ไม่ยุบแถว</strong> (ต่างจาก GROUP BY ที่ยุบ) — เป็นหัวข้อที่สัมภาษณ์ถามทุกครั้ง!</p>

<pre><code class="language-sql">
-- ============================================
-- ROW_NUMBER — ลำดับแถว (ไม่ซ้ำ)
-- ============================================
SELECT
    order_id,
    customer_name,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) AS rank
FROM orders;
-- rank: 1, 2, 3, 4, 5

-- ROW_NUMBER กับ PARTITION BY — ลำดับภายในกลุ่ม
SELECT
    order_id,
    customer_name,
    product,
    amount,
    ROW_NUMBER() OVER (
        PARTITION BY customer_name
        ORDER BY amount DESC
    ) AS rank_per_customer
FROM orders;

-- 🏆 ใช้บ่อยมาก: ดึงแถวล่าสุดของแต่ละกลุ่ม (Deduplication)
WITH ranked AS (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY updated_at DESC
        ) AS rn
    FROM raw_customers
)
SELECT * FROM ranked WHERE rn = 1;

-- ============================================
-- RANK & DENSE_RANK
-- ============================================
SELECT
    product,
    amount,
    ROW_NUMBER() OVER (ORDER BY amount DESC) AS row_num,    -- 1,2,3,4,5
    RANK() OVER (ORDER BY amount DESC) AS rank,              -- 1,2,2,4,5 (ข้ามลำดับ)
    DENSE_RANK() OVER (ORDER BY amount DESC) AS dense_rank   -- 1,2,2,3,4 (ไม่ข้าม)
FROM orders;

-- ============================================
-- LAG & LEAD — ดูแถวก่อนหน้า/ถัดไป
-- ============================================
SELECT
    order_date,
    amount,
    LAG(amount, 1) OVER (ORDER BY order_date) AS prev_amount,
    LEAD(amount, 1) OVER (ORDER BY order_date) AS next_amount,
    amount - LAG(amount, 1) OVER (ORDER BY order_date) AS diff_from_prev
FROM orders;

-- LAG ใช้จริง: วัด Day-over-Day change
WITH daily_revenue AS (
    SELECT
        order_date,
        SUM(amount) AS revenue
    FROM orders
    GROUP BY order_date
)
SELECT
    order_date,
    revenue,
    LAG(revenue) OVER (ORDER BY order_date) AS prev_day,
    revenue - LAG(revenue) OVER (ORDER BY order_date) AS change,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY order_date)) * 100.0
        / LAG(revenue) OVER (ORDER BY order_date), 2
    ) AS pct_change
FROM daily_revenue;

-- ============================================
-- Running Total — ยอดสะสม
-- ============================================
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    SUM(amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7day_total,
    AVG(amount) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7day_avg
FROM orders
ORDER BY order_date;

-- ============================================
-- NTILE — แบ่งข้อมูลเป็น N กลุ่มเท่า ๆ กัน
-- ============================================
SELECT
    customer_name,
    total_spent,
    NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile
FROM customer_spending;
-- quartile 1 = Top 25%, 4 = Bottom 25%

-- ============================================
-- FIRST_VALUE & LAST_VALUE
-- ============================================
SELECT
    customer_name,
    order_date,
    amount,
    FIRST_VALUE(amount) OVER (
        PARTITION BY customer_name ORDER BY order_date
    ) AS first_order_amount,
    LAST_VALUE(amount) OVER (
        PARTITION BY customer_name ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS last_order_amount
FROM orders;
</code></pre>

<div class="cheatsheet">
<h4>📋 Window Functions Cheatsheet</h4>
<table>
  <thead><tr><th>Function</th><th>ทำอะไร</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><code>ROW_NUMBER()</code></td><td>ลำดับ 1,2,3,... (ไม่ซ้ำ)</td><td>Dedup, Top N per group</td></tr>
    <tr><td><code>RANK()</code></td><td>ลำดับ (ซ้ำได้, ข้ามลำดับ)</td><td>Ranking ที่ยอมให้เท่ากัน</td></tr>
    <tr><td><code>DENSE_RANK()</code></td><td>ลำดับ (ซ้ำได้, ไม่ข้ามลำดับ)</td><td>ลำดับไม่มีช่องว่าง</td></tr>
    <tr><td><code>LAG(col, n)</code></td><td>ค่าจากแถวก่อนหน้า n แถว</td><td>เปรียบเทียบ period-over-period</td></tr>
    <tr><td><code>LEAD(col, n)</code></td><td>ค่าจากแถวถัดไป n แถว</td><td>ดูค่าในอนาคต</td></tr>
    <tr><td><code>SUM() OVER</code></td><td>Running total</td><td>ยอดสะสม</td></tr>
    <tr><td><code>AVG() OVER</code></td><td>Moving average</td><td>Rolling average 7/30 วัน</td></tr>
    <tr><td><code>NTILE(n)</code></td><td>แบ่ง n กลุ่มเท่ากัน</td><td>Percentile, Quartile</td></tr>
    <tr><td><code>FIRST_VALUE()</code></td><td>ค่าแรกของ window</td><td>First purchase, first event</td></tr>
  </tbody>
</table>
</div>

<hr/>

<h3>⚡ Level 6: EXPLAIN, Index, Optimization</h3>

<pre><code class="language-sql">
-- ============================================
-- EXPLAIN — ดูว่า Database ทำงานอย่างไร
-- ============================================
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 123;

-- ผลลัพธ์จะบอก:
-- - Seq Scan = อ่านทุกแถว (ช้า!)
-- - Index Scan = ใช้ index (เร็ว!)
-- - cost, rows, actual time

-- ============================================
-- Index — ทำให้ค้นหาเร็วขึ้น
-- ============================================
-- สร้าง Index
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);

-- Composite Index
CREATE INDEX idx_orders_customer_date
ON orders(customer_id, order_date);

-- เมื่อไรควรสร้าง Index?
-- ✅ column ที่ใช้ใน WHERE, JOIN, ORDER BY บ่อย ๆ
-- ✅ column ที่มีค่าหลากหลาย (high cardinality)
-- ❌ ตารางเล็ก (ไม่คุ้ม)
-- ❌ column ที่ INSERT/UPDATE บ่อย (index ช้าลงเมื่อเขียน)
</code></pre>

<h4>🚀 SQL Optimization Tips</h4>
<table>
  <thead><tr><th>❌ ช้า</th><th>✅ เร็ว</th><th>ทำไม</th></tr></thead>
  <tbody>
    <tr><td><code>SELECT *</code></td><td><code>SELECT col1, col2</code></td><td>อ่านเฉพาะ column ที่ต้องการ</td></tr>
    <tr><td><code>WHERE YEAR(date) = 2026</code></td><td><code>WHERE date >= '2026-01-01'</code></td><td>ใช้ function กับ column ทำให้ใช้ index ไม่ได้</td></tr>
    <tr><td><code>NOT IN (subquery)</code></td><td><code>NOT EXISTS (subquery)</code></td><td>NOT EXISTS หยุดเมื่อเจอ match แรก</td></tr>
    <tr><td><code>LIKE '%keyword%'</code></td><td><code>LIKE 'keyword%'</code></td><td>% ข้างหน้าใช้ index ไม่ได้</td></tr>
    <tr><td><code>SELECT DISTINCT col</code></td><td><code>GROUP BY col</code></td><td>บางกรณี GROUP BY optimize ได้ดีกว่า</td></tr>
    <tr><td>join ก่อน filter</td><td>filter ก่อน join</td><td>ลดจำนวนแถวที่ต้อง join</td></tr>
  </tbody>
</table>

<hr/>

<h3>🎤 10 SQL Interview Problems + Solutions</h3>

<div class="interview-box">
<h4>🎤 Problem 1: หา Top 3 สินค้าขายดีที่สุดในแต่ละ category</h4>
<pre><code class="language-sql">
WITH product_sales AS (
    SELECT
        category,
        product_name,
        SUM(quantity) AS total_sold,
        ROW_NUMBER() OVER (
            PARTITION BY category
            ORDER BY SUM(quantity) DESC
        ) AS rn
    FROM order_items oi
    JOIN products p ON oi.product_id = p.product_id
    GROUP BY category, product_name
)
SELECT category, product_name, total_sold
FROM product_sales
WHERE rn <= 3;
</code></pre>

<h4>🎤 Problem 2: หาลูกค้าที่สั่งซื้อ 3 เดือนติดต่อกัน</h4>
<pre><code class="language-sql">
WITH monthly_orders AS (
    SELECT DISTINCT
        customer_id,
        DATE_TRUNC('month', order_date) AS order_month
    FROM orders
),
with_prev AS (
    SELECT
        customer_id,
        order_month,
        LAG(order_month, 1) OVER (PARTITION BY customer_id ORDER BY order_month) AS prev_1,
        LAG(order_month, 2) OVER (PARTITION BY customer_id ORDER BY order_month) AS prev_2
    FROM monthly_orders
)
SELECT DISTINCT customer_id
FROM with_prev
WHERE order_month = prev_1 + INTERVAL '1 month'
  AND prev_1 = prev_2 + INTERVAL '1 month';
</code></pre>

<h4>🎤 Problem 3: Deduplicate — เก็บแถวล่าสุดของแต่ละ record</h4>
<pre><code class="language-sql">
-- วิธีที่ใช้บ่อยที่สุดใน DE
WITH ranked AS (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY user_id
            ORDER BY updated_at DESC
        ) AS rn
    FROM raw_users
)
SELECT * FROM ranked WHERE rn = 1;
</code></pre>

<h4>🎤 Problem 4: คำนวณ Retention Rate รายเดือน</h4>
<pre><code class="language-sql">
WITH first_order AS (
    SELECT
        customer_id,
        DATE_TRUNC('month', MIN(order_date)) AS cohort_month
    FROM orders
    GROUP BY customer_id
),
monthly_activity AS (
    SELECT DISTINCT
        customer_id,
        DATE_TRUNC('month', order_date) AS active_month
    FROM orders
)
SELECT
    f.cohort_month,
    ma.active_month,
    DATE_DIFF('month', f.cohort_month, ma.active_month) AS month_number,
    COUNT(DISTINCT ma.customer_id) AS active_users,
    COUNT(DISTINCT ma.customer_id) * 100.0
        / COUNT(DISTINCT f.customer_id) AS retention_pct
FROM first_order f
JOIN monthly_activity ma ON f.customer_id = ma.customer_id
GROUP BY f.cohort_month, ma.active_month
ORDER BY f.cohort_month, ma.active_month;
</code></pre>

<h4>🎤 Problem 5: Running Total ยอดขายสะสมรายวัน</h4>
<pre><code class="language-sql">
SELECT
    order_date,
    SUM(amount) AS daily_revenue,
    SUM(SUM(amount)) OVER (ORDER BY order_date) AS cumulative_revenue
FROM orders
WHERE status = 'completed'
GROUP BY order_date
ORDER BY order_date;
</code></pre>

<h4>🎤 Problem 6: Pivot — แปลงแถวเป็น column</h4>
<pre><code class="language-sql">
SELECT
    customer_name,
    SUM(CASE WHEN EXTRACT(MONTH FROM order_date) = 1 THEN amount ELSE 0 END) AS jan,
    SUM(CASE WHEN EXTRACT(MONTH FROM order_date) = 2 THEN amount ELSE 0 END) AS feb,
    SUM(CASE WHEN EXTRACT(MONTH FROM order_date) = 3 THEN amount ELSE 0 END) AS mar
FROM orders
WHERE EXTRACT(YEAR FROM order_date) = 2026
GROUP BY customer_name;
</code></pre>

<h4>🎤 Problem 7: Gap Analysis — หาวันที่ขาดหายไป</h4>
<pre><code class="language-sql">
WITH date_spine AS (
    SELECT generate_series(
        '2026-01-01'::date,
        '2026-12-31'::date,
        '1 day'::interval
    )::date AS date
),
order_dates AS (
    SELECT DISTINCT order_date FROM orders
)
SELECT ds.date AS missing_date
FROM date_spine ds
LEFT JOIN order_dates od ON ds.date = od.order_date
WHERE od.order_date IS NULL;
</code></pre>

<h4>🎤 Problem 8: Year-over-Year Growth</h4>
<pre><code class="language-sql">
WITH yearly AS (
    SELECT
        EXTRACT(YEAR FROM order_date) AS year,
        SUM(amount) AS revenue
    FROM orders
    GROUP BY EXTRACT(YEAR FROM order_date)
)
SELECT
    year,
    revenue,
    LAG(revenue) OVER (ORDER BY year) AS prev_year,
    ROUND(
        (revenue - LAG(revenue) OVER (ORDER BY year)) * 100.0
        / LAG(revenue) OVER (ORDER BY year), 2
    ) AS yoy_growth_pct
FROM yearly;
</code></pre>

<h4>🎤 Problem 9: Median (ไม่มี built-in function)</h4>
<pre><code class="language-sql">
WITH ordered AS (
    SELECT
        amount,
        ROW_NUMBER() OVER (ORDER BY amount) AS rn,
        COUNT(*) OVER () AS total
    FROM orders
)
SELECT AVG(amount) AS median
FROM ordered
WHERE rn IN (FLOOR((total + 1) / 2.0), CEIL((total + 1) / 2.0));
</code></pre>

<h4>🎤 Problem 10: Session Analysis — กำหนด session จาก events</h4>
<pre><code class="language-sql">
-- Session = gap > 30 นาทีถือเป็น session ใหม่
WITH events_with_gap AS (
    SELECT
        user_id,
        event_time,
        LAG(event_time) OVER (
            PARTITION BY user_id ORDER BY event_time
        ) AS prev_event_time,
        CASE
            WHEN event_time - LAG(event_time) OVER (
                PARTITION BY user_id ORDER BY event_time
            ) > INTERVAL '30 minutes'
            OR LAG(event_time) OVER (
                PARTITION BY user_id ORDER BY event_time
            ) IS NULL
            THEN 1 ELSE 0
        END AS new_session
    FROM events
),
sessions AS (
    SELECT
        user_id,
        event_time,
        SUM(new_session) OVER (
            PARTITION BY user_id ORDER BY event_time
        ) AS session_id
    FROM events_with_gap
)
SELECT
    user_id,
    session_id,
    MIN(event_time) AS session_start,
    MAX(event_time) AS session_end,
    COUNT(*) AS events_in_session
FROM sessions
GROUP BY user_id, session_id;
</code></pre>
</div>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>เขียน CTE ก่อน เสมอ</strong> — แม้ subquery ทำได้เหมือนกัน CTE อ่านง่ายกว่ามาก debug ง่ายกว่า</li>
  <li><strong>อย่า SELECT *</strong> — เลือกเฉพาะ column ที่ต้องการ ประหยัด cost (BigQuery คิดเงินตาม data scanned)</li>
  <li><strong>ท่องจำ ROW_NUMBER + PARTITION BY</strong> — ใช้ได้ทุกที่: dedup, top N per group, latest record</li>
  <li><strong>ฝึก SQL ทุกวัน:</strong> ใช้ LeetCode, HackerRank, StratasGratch อย่างน้อยวันละ 1 ข้อ</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>ลืม GROUP BY column</strong> — ทุก column ใน SELECT ที่ไม่ใช่ aggregate ต้องอยู่ใน GROUP BY</li>
  <li><strong>ใช้ WHERE กับ aggregate</strong> — <code>WHERE SUM(amount) > 1000</code> ❌ ต้องใช้ <code>HAVING SUM(amount) > 1000</code> ✅</li>
  <li><strong>LAST_VALUE ไม่ตั้ง frame</strong> — ต้องใส่ <code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code> ไม่งั้น default frame จะไม่ครอบคลุมทั้ง partition</li>
  <li><strong>JOIN ไม่ใส่ ON</strong> — จะกลายเป็น CROSS JOIN ได้ข้อมูลบวมมาก</li>
  <li><strong>NULL comparison</strong> — <code>WHERE col = NULL</code> ❌ ต้องใช้ <code>WHERE col IS NULL</code> ✅</li>
</ul>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>สร้างตาราง <code>employees</code> (id, name, department, salary, hire_date) ใส่ข้อมูล 10 แถว → เขียน query หาพนักงานที่เงินเดือนสูงสุดในแต่ละ department</li>
  <li>เขียน CTE ที่คำนวณ monthly revenue แล้ว join กับ month-over-month growth percentage</li>
  <li>ใช้ Window Function เขียน query dedup ข้อมูลจากตาราง <code>raw_events</code> โดยเก็บ event ล่าสุดของแต่ละ user</li>
  <li>ไปทำ SQL โจทย์ใน <a href="https://leetcode.com/studyplan/top-sql-50/" target="_blank">LeetCode SQL 50</a> อย่างน้อย 10 ข้อ</li>
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
<p>บทนี้จะเรียน Python ในมุมของ DE — ไม่ใช่แค่ syntax แต่เป็นการใช้งานจริง: จัดการข้อมูลด้วย Pandas, ดึงข้อมูลจาก API, จัดการ File Format ต่าง ๆ, และ logging</p>

<h3>🐼 Pandas — เครื่องมือจัดการข้อมูลอันดับ 1</h3>

<h4>อ่านข้อมูล</h4>
<pre><code class="language-python">
import pandas as pd

# อ่านจากหลายแหล่ง
df = pd.read_csv("sales.csv")
df = pd.read_json("data.json")
df = pd.read_parquet("data.parquet")
df = pd.read_excel("report.xlsx", sheet_name="Sheet1")

# อ่านจาก SQL
from sqlalchemy import create_engine
engine = create_engine("postgresql://user:pass@host:5432/db")
df = pd.read_sql("SELECT * FROM orders", engine)

# ดูข้อมูลเบื้องต้น
df.head()              # 5 แถวแรก
df.shape               # (rows, cols)
df.dtypes              # ชนิดข้อมูลแต่ละ column
df.describe()          # สถิติพื้นฐาน
df.info()              # สรุป memory, null count
df.isnull().sum()      # นับ null แต่ละ column
</code></pre>

<h4>กรองข้อมูล (Filter)</h4>
<pre><code class="language-python">
# กรองเงื่อนไขเดียว
big_orders = df[df["amount"] > 10000]

# กรองหลายเงื่อนไข (ใช้ & สำหรับ AND, | สำหรับ OR)
result = df[(df["amount"] > 1000) & (df["status"] == "completed")]

# isin — เหมือน SQL IN
result = df[df["city"].isin(["กรุงเทพ", "เชียงใหม่"])]

# query method — อ่านง่ายกว่า
result = df.query("amount > 1000 and status == 'completed'")

# กรอง null
df_clean = df[df["email"].notna()]
df_with_null = df[df["email"].isna()]
</code></pre>

<h4>จัดการ Column</h4>
<pre><code class="language-python">
# เลือก columns
df[["name", "amount"]]

# เพิ่ม column ใหม่
df["vat"] = df["amount"] * 0.07
df["year"] = df["order_date"].dt.year

# Rename columns
df = df.rename(columns={"old_name": "new_name"})

# Drop columns
df = df.drop(columns=["unnecessary_col"])

# เปลี่ยน type
df["amount"] = df["amount"].astype(float)
df["order_date"] = pd.to_datetime(df["order_date"])
</code></pre>

<h4>Aggregate & GroupBy</h4>
<pre><code class="language-python">
# GroupBy — เหมือน SQL GROUP BY
summary = df.groupby("customer_name").agg(
    total_orders=("order_id", "count"),
    total_spent=("amount", "sum"),
    avg_order=("amount", "mean"),
    first_order=("order_date", "min"),
    last_order=("order_date", "max")
).reset_index()

# Pivot Table
pivot = df.pivot_table(
    values="amount",
    index="customer_name",
    columns="status",
    aggfunc="sum",
    fill_value=0
)
</code></pre>

<h4>Join (Merge)</h4>
<pre><code class="language-python">
# Merge — เหมือน SQL JOIN
result = pd.merge(
    orders_df,
    customers_df,
    on="customer_id",       # join key
    how="left"              # left, right, inner, outer
)

# Join on multiple keys
result = pd.merge(
    df1, df2,
    left_on=["year", "month"],
    right_on=["yr", "mo"],
    how="inner"
)
</code></pre>

<h4>เขียนข้อมูล</h4>
<pre><code class="language-python">
# เขียนออกหลาย format
df.to_csv("output.csv", index=False, encoding="utf-8")
df.to_parquet("output.parquet", index=False)
df.to_json("output.json", orient="records", force_ascii=False)

# เขียนเข้า SQL
df.to_sql("table_name", engine, if_exists="replace", index=False)
# if_exists: 'fail', 'replace', 'append'
</code></pre>

<h3>⚡ Polars — ทางเลือกที่เร็วกว่า Pandas</h3>
<pre><code class="language-python">
import polars as pl

# Polars เร็วกว่า Pandas 5-10 เท่า สำหรับข้อมูลใหญ่
# ใช้ Rust backend, lazy evaluation, multi-threaded

df = pl.read_csv("big_data.csv")
result = (
    df.lazy()
    .filter(pl.col("amount") > 1000)
    .group_by("customer_name")
    .agg(
        pl.col("amount").sum().alias("total"),
        pl.col("order_id").count().alias("count")
    )
    .sort("total", descending=True)
    .collect()
)
</code></pre>
<p>💡 <strong>Polars น่าเรียนเพิ่มแต่ยังไม่ต้องเป็น priority — Pandas ยังเป็น standard ในอุตสาหกรรม</strong></p>

<h3>🌐 API Requests</h3>
<pre><code class="language-python">
import requests
import time

# ========== GET Request ==========
response = requests.get("https://api.example.com/users")
response.raise_for_status()  # Raise error ถ้า status != 200
data = response.json()

# ========== POST Request ==========
payload = {"name": "สมชาย", "email": "somchai@example.com"}
response = requests.post(
    "https://api.example.com/users",
    json=payload,
    headers={"Authorization": "Bearer YOUR_TOKEN"}
)

# ========== Pagination ==========
def fetch_all_pages(base_url, params=None):
    """ดึงข้อมูลทุกหน้าจาก paginated API"""
    all_data = []
    page = 1

    while True:
        resp = requests.get(
            base_url,
            params={**(params or {}), "page": page, "per_page": 100}
        )
        resp.raise_for_status()
        data = resp.json()

        if not data:  # ไม่มีข้อมูลแล้ว
            break

        all_data.extend(data)
        page += 1
        time.sleep(0.5)  # Rate limiting

    return all_data

users = fetch_all_pages("https://api.example.com/users")

# ========== Retry Logic ==========
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
retries = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503])
session.mount("https://", HTTPAdapter(max_retries=retries))

response = session.get("https://api.example.com/data")
</code></pre>

<h3>🕐 Date/Time Handling</h3>
<pre><code class="language-python">
from datetime import datetime, timedelta, timezone
import pytz

# ปัจจุบัน
now = datetime.now()
utc_now = datetime.now(timezone.utc)

# Thai timezone
th_tz = pytz.timezone("Asia/Bangkok")
th_now = datetime.now(th_tz)

# Parse string → datetime
dt = datetime.strptime("2026-01-15 10:30:00", "%Y-%m-%d %H:%M:%S")

# datetime → string
dt.strftime("%Y-%m-%d")     # "2026-01-15"
dt.strftime("%d/%m/%Y")     # "15/01/2026"

# คำนวณ
yesterday = now - timedelta(days=1)
next_week = now + timedelta(weeks=1)

# ⚡ Pandas datetime
df["order_date"] = pd.to_datetime(df["order_date"])
df["year"] = df["order_date"].dt.year
df["month"] = df["order_date"].dt.month
df["day_name"] = df["order_date"].dt.day_name()
df["is_weekend"] = df["order_date"].dt.dayofweek >= 5
</code></pre>

<h3>📁 File Formats Comparison</h3>
<table>
  <thead><tr><th>Format</th><th>Type</th><th>ขนาด</th><th>อ่านเร็ว</th><th>Schema</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><strong>CSV</strong></td><td>Text/Row</td><td>ใหญ่</td><td>ช้า</td><td>❌</td><td>แลกเปลี่ยนข้อมูลง่าย ๆ, Excel</td></tr>
    <tr><td><strong>JSON</strong></td><td>Text/Semi</td><td>ใหญ่</td><td>ช้า</td><td>❌</td><td>API response, nested data</td></tr>
    <tr><td><strong>Parquet</strong></td><td>Binary/Column</td><td>เล็กมาก</td><td>เร็วมาก</td><td>✅</td><td>⭐ Analytics, Data Lake</td></tr>
    <tr><td><strong>Avro</strong></td><td>Binary/Row</td><td>เล็ก</td><td>เร็ว</td><td>✅</td><td>Streaming, Kafka</td></tr>
    <tr><td><strong>ORC</strong></td><td>Binary/Column</td><td>เล็กมาก</td><td>เร็วมาก</td><td>✅</td><td>Hive ecosystem</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
# ⭐ Parquet — format ที่ DE ใช้มากที่สุด
# ข้อดี: columnar (อ่านเฉพาะ column ที่ต้องการ), compressed, มี schema

# เขียน Parquet
df.to_parquet("data.parquet", index=False, compression="snappy")

# อ่าน Parquet (อ่านเฉพาะ column ที่ต้องการ — ประหยัดเวลา!)
df = pd.read_parquet("data.parquet", columns=["name", "amount"])
</code></pre>

<h3>📝 Logging</h3>
<pre><code class="language-python">
import logging

# ตั้งค่า logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("pipeline.log"),
        logging.StreamHandler()  # print ที่หน้าจอด้วย
    ]
)
logger = logging.getLogger(__name__)

# ใช้งาน
logger.info("Pipeline started")
logger.info(f"Loaded {len(df)} rows from source")
logger.warning("Found 5 null values in 'email' column")
logger.error(f"Failed to connect to API: {e}")

# ❌ อย่าใช้ print() ใน production → ใช้ logging แทน
</code></pre>

<h3>🔐 Environment Variables</h3>
<pre><code class="language-python">
import os
from dotenv import load_dotenv

# โหลดจาก .env file
load_dotenv()

# อ่าน environment variable
db_host = os.getenv("DB_HOST", "localhost")  # default = "localhost"
api_key = os.getenv("API_KEY")

if not api_key:
    raise ValueError("API_KEY environment variable is not set!")

# .env file ตัวอย่าง:
# DB_HOST=production-db.example.com
# DB_PORT=5432
# API_KEY=sk-abc123xyz

# ⚠️ อย่าลืมใส่ .env ใน .gitignore!
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>ใช้ Parquet เป็น default format</strong> — เล็กกว่า CSV 5-10 เท่า, อ่านเร็วกว่า 10-100 เท่า</li>
  <li><strong>อ่าน API แบบ pagination เสมอ</strong> — API ส่วนใหญ่ limit ที่ 100-1000 records ต่อ request</li>
  <li><strong>ใช้ <code>logging</code> แทน <code>print()</code></strong> — log level, timestamp, เขียนลงไฟล์ได้</li>
  <li><strong>เก็บ secret ใน env var</strong> — ห้ามเขียน password, API key ลงใน code</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>Pandas SettingWithCopyWarning:</strong> ใช้ <code>df.loc[...]</code> แทน <code>df[...][...]</code> เพื่อแก้ค่าใน DataFrame</li>
  <li><strong>ไม่จัดการ timezone:</strong> ข้อมูลจาก API มักเป็น UTC แต่ business ใช้ Asia/Bangkok → ต้อง convert</li>
  <li><strong>ไม่ตรวจ API response status:</strong> ต้อง <code>response.raise_for_status()</code> หรือเช็ค <code>response.status_code</code></li>
  <li><strong>Hardcode credentials ใน source code:</strong> password, API key ต้องเก็บใน .env หรือ Secret Manager</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"Parquet ดีกว่า CSV อย่างไร?"</strong><br/>
  ตอบ: Parquet เป็น columnar format — อ่านเฉพาะ column ที่ต้องการได้ (ไม่ต้องอ่านทั้งแถว), compressed ทำให้เล็กกว่า 5-10 เท่า, มี schema ในตัว ไม่ต้อง infer types CSV ไม่มีสิ่งเหล่านี้</li>
  <li><strong>"Pandas กับ Polars ต่างกันอย่างไร?"</strong><br/>
  ตอบ: Pandas ใช้ single-threaded + NumPy ส่วน Polars ใช้ multi-threaded + Rust + lazy evaluation Polars เร็วกว่า 5-10 เท่า แต่ Pandas ecosystem ใหญ่กว่า library อื่น support ดีกว่า</li>
  <li><strong>"จะจัดการ API ที่ rate limit 100 requests/minute อย่างไร?"</strong><br/>
  ตอบ: ใช้ <code>time.sleep()</code> หน่วง, batch requests, implement exponential backoff, ใช้ retry logic กับ <code>status_forcelist</code> และเก็บ progress ไว้กรณีต้อง resume</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ดาวน์โหลด CSV จาก <a href="https://www.kaggle.com/datasets" target="_blank">Kaggle</a> → โหลดด้วย Pandas → สรุปข้อมูลด้วย groupby → เขียนเป็น Parquet</li>
  <li>เขียน script ดึงข้อมูลจาก GitHub API <code>https://api.github.com/users/{username}/repos</code> → รวบรวม repos ของ 5 users → บันทึกเป็น JSON</li>
  <li>เขียน script ที่ใช้ <code>logging</code> module → log ทุกขั้นตอนการทำงาน (start, records loaded, records filtered, saved, done)</li>
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
<p>Data Modeling คือการ <strong>ออกแบบโครงสร้างตารางและความสัมพันธ์</strong>ของข้อมูล — เหมือนสถาปนิกออกแบบบ้านก่อนสร้าง ออกแบบดี = query ง่าย, เร็ว, ไม่ซ้ำซ้อน ออกแบบแย่ = ปวดหัวไปตลอด</p>

<h3>📊 Database vs Data Warehouse vs Data Lake vs Lakehouse</h3>
<table>
  <thead><tr><th>หัวข้อ</th><th>Database (OLTP)</th><th>Data Warehouse (OLAP)</th><th>Data Lake</th><th>Lakehouse</th></tr></thead>
  <tbody>
    <tr><td><strong>วัตถุประสงค์</strong></td><td>Transaction (อ่าน/เขียนเร็ว)</td><td>Analytics (query ซับซ้อน)</td><td>เก็บข้อมูลดิบทุกรูปแบบ</td><td>รวม Lake + Warehouse</td></tr>
    <tr><td><strong>ข้อมูล</strong></td><td>Structured</td><td>Structured</td><td>Raw (Structured + Unstructured)</td><td>ทุกรูปแบบ + ACID</td></tr>
    <tr><td><strong>Schema</strong></td><td>Schema-on-Write</td><td>Schema-on-Write</td><td>Schema-on-Read</td><td>Schema-on-Read/Write</td></tr>
    <tr><td><strong>Normalization</strong></td><td>Normalized (3NF)</td><td>Denormalized (Star)</td><td>ไม่มีโครงสร้าง</td><td>ยืดหยุ่น</td></tr>
    <tr><td><strong>ตัวอย่าง</strong></td><td>PostgreSQL, MySQL</td><td>BigQuery, Redshift, Snowflake</td><td>S3, GCS, HDFS</td><td>Delta Lake, Iceberg</td></tr>
    <tr><td><strong>ผู้ใช้</strong></td><td>Application (Backend)</td><td>Analyst, BI</td><td>Data Scientist, DE</td><td>ทุกคน</td></tr>
    <tr><td><strong>ปริมาณ</strong></td><td>GB</td><td>TB</td><td>PB</td><td>PB</td></tr>
  </tbody>
</table>

<h3>⭐ Star Schema — รูปแบบที่นิยมที่สุด</h3>
<p>Star Schema ประกอบด้วย <strong>Fact Table</strong> ตรงกลาง ล้อมรอบด้วย <strong>Dimension Tables</strong> — ดูเหมือนดาว ⭐</p>

<h4>ตัวอย่าง: E-Commerce</h4>
<pre><code class="language-text">
                    dim_customers
                    ┌─────────────┐
                    │ customer_id │
                    │ name        │
                    │ city        │
                    │ tier        │
                    └──────┬──────┘
                           │
dim_products         fact_orders          dim_dates
┌─────────────┐    ┌──────────────┐    ┌────────────┐
│ product_id  │    │ order_id     │    │ date_key   │
│ name        │───│ customer_id  │───│ full_date  │
│ category    │    │ product_id   │    │ year       │
│ brand       │    │ date_key     │    │ quarter    │
│ price       │    │ quantity     │    │ month      │
└─────────────┘    │ amount       │    │ day_name   │
                    │ discount     │    │ is_weekend │
                    │ status       │    └────────────┘
                    └──────────────┘
</code></pre>

<pre><code class="language-sql">
-- สร้าง Dimension Tables
CREATE TABLE dim_customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(50),
    tier VARCHAR(20),
    created_at TIMESTAMP
);

CREATE TABLE dim_products (
    product_id INT PRIMARY KEY,
    name VARCHAR(200),
    category VARCHAR(50),
    brand VARCHAR(50),
    unit_price DECIMAL(10,2)
);

CREATE TABLE dim_dates (
    date_key INT PRIMARY KEY,        -- format: 20260115
    full_date DATE,
    year INT,
    quarter INT,
    month INT,
    month_name VARCHAR(20),
    day_of_week INT,
    day_name VARCHAR(20),
    is_weekend BOOLEAN
);

-- สร้าง Fact Table
CREATE TABLE fact_orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES dim_customers(customer_id),
    product_id INT REFERENCES dim_products(product_id),
    date_key INT REFERENCES dim_dates(date_key),
    quantity INT,
    unit_price DECIMAL(10,2),
    discount DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    status VARCHAR(20)
);

-- Query ตัวอย่าง: ยอดขายรายเดือนแยกตาม category
SELECT
    d.year,
    d.month_name,
    p.category,
    SUM(f.total_amount) AS revenue,
    COUNT(DISTINCT f.customer_id) AS unique_customers
FROM fact_orders f
JOIN dim_dates d ON f.date_key = d.date_key
JOIN dim_products p ON f.product_id = p.product_id
WHERE d.year = 2026
GROUP BY d.year, d.month_name, p.category
ORDER BY d.month, revenue DESC;
</code></pre>

<h3>❄️ Snowflake Schema</h3>
<p>Snowflake = Star Schema ที่ <strong>normalize Dimension ออกไปอีก</strong> เช่น แยก <code>dim_products</code> ออกเป็น <code>dim_categories</code> + <code>dim_brands</code></p>
<pre><code class="language-text">
dim_categories → dim_products → fact_orders → dim_dates
dim_brands ──────┘
</code></pre>
<p><strong>เปรียบเทียบ:</strong></p>
<table>
  <thead><tr><th>หัวข้อ</th><th>Star Schema</th><th>Snowflake Schema</th></tr></thead>
  <tbody>
    <tr><td>ความซับซ้อน</td><td>ง่าย</td><td>ซับซ้อนกว่า</td></tr>
    <tr><td>JOIN</td><td>น้อย (Fact → Dim)</td><td>เยอะ (Dim → Sub-dim)</td></tr>
    <tr><td>Storage</td><td>ใช้เยอะ (redundant)</td><td>ประหยัดกว่า</td></tr>
    <tr><td>Query Performance</td><td>เร็วกว่า (JOIN น้อย)</td><td>ช้ากว่า (JOIN เยอะ)</td></tr>
    <tr><td>ความนิยม</td><td>⭐ นิยมกว่ามาก</td><td>ใช้น้อย</td></tr>
  </tbody>
</table>

<h3>📦 Fact Table vs Dimension Table</h3>
<table>
  <thead><tr><th>หัวข้อ</th><th>Fact Table</th><th>Dimension Table</th></tr></thead>
  <tbody>
    <tr><td><strong>เก็บอะไร</strong></td><td>เหตุการณ์/ตัวเลข (metrics)</td><td>ข้อมูลอธิบาย (attributes)</td></tr>
    <tr><td><strong>ตัวอย่าง</strong></td><td>fact_orders, fact_pageviews</td><td>dim_customers, dim_products</td></tr>
    <tr><td><strong>ขนาด</strong></td><td>ใหญ่มาก (ล้าน-พันล้านแถว)</td><td>เล็ก (หลักพัน-แสนแถว)</td></tr>
    <tr><td><strong>เปลี่ยนแปลง</strong></td><td>เพิ่มเรื่อย ๆ (append)</td><td>เปลี่ยนช้า ๆ (update)</td></tr>
    <tr><td><strong>Columns</strong></td><td>FK + measures</td><td>PK + descriptive attributes</td></tr>
  </tbody>
</table>

<h3>🔄 SCD (Slowly Changing Dimensions)</h3>
<p>Dimension เปลี่ยนแปลงช้า ๆ เช่น ลูกค้าย้ายเมือง, สินค้าเปลี่ยนราคา — จะจัดการอย่างไร?</p>

<h4>SCD Type 1 — Overwrite (ไม่เก็บ history)</h4>
<pre><code class="language-sql">
-- ลูกค้าย้ายจากกรุงเทพไปเชียงใหม่ → UPDATE ทับเลย
UPDATE dim_customers
SET city = 'เชียงใหม่'
WHERE customer_id = 1;
-- ❌ ไม่รู้ว่าเคยอยู่กรุงเทพ
-- ✅ ง่าย, ไม่เปลือง storage
</code></pre>

<h4>SCD Type 2 — Add New Row (เก็บ history) ⭐ ใช้บ่อยที่สุด</h4>
<pre><code class="language-sql">
-- เพิ่มแถวใหม่ + ปิดแถวเก่า
-- ก่อน:
-- | sk | customer_id | city      | is_current | valid_from | valid_to   |
-- | 1  | 101         | กรุงเทพ   | true       | 2025-01-01 | 9999-12-31 |

-- หลัง:
-- | sk | customer_id | city      | is_current | valid_from | valid_to   |
-- | 1  | 101         | กรุงเทพ   | false      | 2025-01-01 | 2026-06-22 |
-- | 2  | 101         | เชียงใหม่  | true       | 2026-06-23 | 9999-12-31 |

-- ✅ เก็บ history ครบ — รู้ว่าลูกค้าอยู่กรุงเทพตอนสั่งซื้อ
-- ❌ ตารางโตเร็ว, query ซับซ้อนกว่า (ต้อง filter is_current)
</code></pre>

<h4>SCD Type 3 — Add Column (เก็บค่าก่อนหน้า)</h4>
<pre><code class="language-sql">
-- เพิ่ม column สำหรับค่าเก่า
-- | customer_id | city      | prev_city | change_date |
-- | 101         | เชียงใหม่  | กรุงเทพ   | 2026-06-23  |

-- ✅ เก็บค่าก่อนหน้าได้ 1 ค่า
-- ❌ ถ้าเปลี่ยนหลายครั้ง เก็บไม่ได้หมด → ใช้น้อย
</code></pre>

<h3>🎯 Grain — ระดับความละเอียดของ Fact Table</h3>
<p><strong>Grain</strong> = "1 แถวใน Fact Table แทนอะไร?" — ต้องกำหนดให้ชัดก่อนสร้างตาราง</p>
<table>
  <thead><tr><th>Fact Table</th><th>Grain</th><th>ตัวอย่าง 1 แถว</th></tr></thead>
  <tbody>
    <tr><td>fact_orders</td><td>1 order</td><td>Order #123 ของสมชาย</td></tr>
    <tr><td>fact_order_items</td><td>1 สินค้าใน 1 order</td><td>Order #123 → Laptop 1 ชิ้น</td></tr>
    <tr><td>fact_daily_sales</td><td>1 วัน 1 สินค้า</td><td>Laptop ขายได้ 5 ชิ้นวันที่ 15 ม.ค.</td></tr>
    <tr><td>fact_pageviews</td><td>1 pageview</td><td>User A เข้าหน้า /products เวลา 10:30</td></tr>
  </tbody>
</table>
<p>⚠️ <strong>Grain ละเอียด = ข้อมูลเยอะแต่ยืดหยุ่น, Grain หยาบ = ข้อมูลน้อยแต่ drill down ไม่ได้</strong></p>

<h3>📐 Normalization vs Denormalization</h3>
<table>
  <thead><tr><th>หัวข้อ</th><th>Normalization (3NF)</th><th>Denormalization</th></tr></thead>
  <tbody>
    <tr><td><strong>หลักการ</strong></td><td>แยกตาราง ลดความซ้ำซ้อน</td><td>รวมตาราง ให้ query ง่าย</td></tr>
    <tr><td><strong>ใช้กับ</strong></td><td>OLTP (Database)</td><td>OLAP (Data Warehouse)</td></tr>
    <tr><td><strong>JOIN</strong></td><td>เยอะ</td><td>น้อย</td></tr>
    <tr><td><strong>Write</strong></td><td>เร็ว (update ที่เดียว)</td><td>ช้า (update หลายที่)</td></tr>
    <tr><td><strong>Read/Query</strong></td><td>ช้า (JOIN เยอะ)</td><td>เร็ว (ข้อมูลอยู่ด้วยกัน)</td></tr>
    <tr><td><strong>Storage</strong></td><td>ประหยัด</td><td>เปลือง</td></tr>
  </tbody>
</table>

<pre><code class="language-text">
OLTP (Normalized):
  customers → orders → order_items → products → categories → brands

OLAP (Denormalized - Star Schema):
  dim_products (มี category, brand อยู่ใน table เดียวกัน)
  → fact_orders ←
  dim_customers
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>เริ่มจาก Grain ก่อน</strong> — ตอบคำถาม "1 แถวคืออะไร?" ให้ได้ก่อนสร้างตาราง</li>
  <li><strong>ใช้ Star Schema เป็น default</strong> — ง่าย, query เร็ว, BI tools support ดี</li>
  <li><strong>SCD Type 2 คือ standard</strong> — ถ้าต้องเก็บ history ให้ใช้ Type 2 เป็น default</li>
  <li><strong>สร้าง dim_dates เสมอ</strong> — มีประโยชน์มาก filter ตาม year, month, quarter, is_weekend ได้สะดวก</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>ไม่กำหนด Grain ชัดเจน:</strong> ตาราง fact มีทั้ง order-level และ item-level ปนกัน → ตัวเลข aggregate ผิด</li>
  <li><strong>ใส่ข้อมูลที่เปลี่ยนบ่อยใน Dimension:</strong> เช่น "last_login_date" ไม่ควรอยู่ใน dim → เป็น fact</li>
  <li><strong>Normalize ใน Data Warehouse:</strong> DW ต้อง denormalize! ถ้า normalize จะ query ช้าและซับซ้อน</li>
  <li><strong>ไม่มี surrogate key:</strong> ใช้ natural key (customer_id จาก source) เป็น PK ของ dimension → พังเมื่อ source เปลี่ยน</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"Star Schema คืออะไร? ต่างจาก Snowflake Schema อย่างไร?"</strong><br/>
  ตอบ: Star Schema มี Fact Table ตรงกลาง + Dimension Tables ล้อมรอบ (1 ชั้น) ส่วน Snowflake normalize Dimension ออกไปอีก (หลายชั้น) Star นิยมกว่าเพราะง่ายและ query เร็วกว่า</li>
  <li><strong>"SCD Type 2 คืออะไร? ทำงานอย่างไร?"</strong><br/>
  ตอบ: เป็นวิธีจัดการ Dimension ที่เปลี่ยนแปลง โดยเพิ่มแถวใหม่ + ปิดแถวเก่า (ใส่ valid_to, is_current=false) ทำให้เก็บ history ครบ รู้ว่า ณ เวลาที่เกิด transaction dimension มีค่าอะไร</li>
  <li><strong>"Fact Table กับ Dimension Table ต่างกันอย่างไร?"</strong><br/>
  ตอบ: Fact เก็บ events/metrics (ตัวเลขที่วัดได้ เช่น amount, quantity) มีขนาดใหญ่ เพิ่มเรื่อย ๆ ส่วน Dimension เก็บ attributes ที่อธิบาย fact (เช่น customer name, product category) มีขนาดเล็ก เปลี่ยนช้า ๆ</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>ออกแบบ Star Schema สำหรับร้านกาแฟ: มี orders, customers, products, stores, dates → วาด diagram + เขียน CREATE TABLE</li>
  <li>กำหนด Grain ของ Fact Table 3 แบบ: order-level, item-level, daily-aggregated → เปรียบเทียบข้อดี/ข้อเสีย</li>
  <li>เขียน SQL สำหรับ SCD Type 2: รับข้อมูลลูกค้าที่เปลี่ยน city → ปิดแถวเก่า + เพิ่มแถวใหม่</li>
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
<h2>🔄 ETL/ELT — ทำอะไร?</h2>
<p>ETL/ELT คือกระบวนการ <strong>ดึงข้อมูล → แปลง → โหลด</strong> จากต้นทางไปปลายทาง — เป็นงานหลักของ Data Engineer</p>

<h3>📊 ETL vs ELT</h3>
<pre><code class="language-text">
ETL (Extract → Transform → Load):
  Source ──► Transform Server ──► Data Warehouse
  (แปลงก่อนโหลด)

ELT (Extract → Load → Transform):
  Source ──► Data Warehouse ──► Transform (in DW)
  (โหลดก่อน แปลงใน DW)
</code></pre>

<table>
  <thead><tr><th>หัวข้อ</th><th>ETL</th><th>ELT</th></tr></thead>
  <tbody>
    <tr><td><strong>Transform ที่ไหน</strong></td><td>Server กลาง (Python, Spark)</td><td>ใน Data Warehouse (SQL)</td></tr>
    <tr><td><strong>เหมาะกับ</strong></td><td>ข้อมูลที่ต้องแปลงซับซ้อน</td><td>Cloud DW ที่แรง (BigQuery, Snowflake)</td></tr>
    <tr><td><strong>ข้อดี</strong></td><td>ควบคุมได้ละเอียด, ลด load บน DW</td><td>ง่าย, เร็ว, ใช้ DW power ทำ transform</td></tr>
    <tr><td><strong>ข้อเสีย</strong></td><td>ต้องมี server แยก, ช้ากว่า</td><td>ต้องมี DW แรง ๆ, raw data อยู่ใน DW</td></tr>
    <tr><td><strong>เครื่องมือ</strong></td><td>Python, Spark, Airflow</td><td>dbt, BigQuery, Snowflake SQL</td></tr>
    <tr><td><strong>แนวโน้ม</strong></td><td>ยังใช้อยู่</td><td>⭐ นิยมขึ้นเรื่อย ๆ (Modern Data Stack)</td></tr>
  </tbody>
</table>

<hr/>

<h3>📥 Extract — ดึงข้อมูลจากต้นทาง</h3>

<h4>แหล่งข้อมูลที่พบบ่อย</h4>
<table>
  <thead><tr><th>Source</th><th>วิธีดึง</th><th>ตัวอย่าง</th></tr></thead>
  <tbody>
    <tr><td><strong>Database</strong></td><td>SQL Query, CDC</td><td>PostgreSQL, MySQL, MongoDB</td></tr>
    <tr><td><strong>API</strong></td><td>HTTP GET/POST</td><td>REST API, GraphQL</td></tr>
    <tr><td><strong>Files</strong></td><td>อ่านจาก Storage</td><td>CSV, JSON, Parquet จาก S3/GCS</td></tr>
    <tr><td><strong>Streaming</strong></td><td>Subscribe</td><td>Kafka, Pub/Sub, Kinesis</td></tr>
    <tr><td><strong>SaaS</strong></td><td>API/Connector</td><td>Salesforce, Google Analytics, Stripe</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
# Extract จาก Database
import sqlalchemy

def extract_from_db(query, connection_string):
    """ดึงข้อมูลจาก Database"""
    engine = sqlalchemy.create_engine(connection_string)
    with engine.connect() as conn:
        df = pd.read_sql(query, conn)
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

# Extract จาก Files
def extract_from_gcs(bucket, blob_path):
    """ดึงข้อมูลจาก Google Cloud Storage"""
    df = pd.read_parquet(f"gs://{bucket}/{blob_path}")
    logger.info(f"Extracted {len(df)} rows from GCS")
    return df
</code></pre>

<hr/>

<h3>🔧 Transform — แปลงข้อมูล</h3>

<h4>Transform ที่พบบ่อย</h4>
<table>
  <thead><tr><th>ประเภท</th><th>ตัวอย่าง</th></tr></thead>
  <tbody>
    <tr><td><strong>Clean</strong></td><td>ลบ null, ลบ whitespace, แก้ format วันที่</td></tr>
    <tr><td><strong>Validate</strong></td><td>เช็ค email format, range check (age 0-150)</td></tr>
    <tr><td><strong>Deduplicate</strong></td><td>ลบแถวซ้ำ (เก็บล่าสุด)</td></tr>
    <tr><td><strong>Enrich</strong></td><td>เพิ่ม column ที่คำนวณ (age จาก birthdate, category จาก amount)</td></tr>
    <tr><td><strong>Aggregate</strong></td><td>สรุปยอดรายวัน, นับจำนวนต่อ category</td></tr>
    <tr><td><strong>Type Cast</strong></td><td>string → datetime, string → int</td></tr>
    <tr><td><strong>Rename</strong></td><td>เปลี่ยนชื่อ column ให้เป็น standard</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
def transform_orders(df):
    """แปลงข้อมูล orders"""
    logger.info(f"Transforming {len(df)} rows...")
    original_count = len(df)

    # 1. Clean — ลบ whitespace, แปลง type
    df["customer_name"] = df["customer_name"].str.strip()
    df["order_date"] = pd.to_datetime(df["order_date"])
    df["amount"] = pd.to_numeric(df["amount"], errors="coerce")

    # 2. Validate — ลบแถวที่ไม่ valid
    df = df[df["amount"] > 0]
    df = df[df["customer_name"].notna()]

    # 3. Deduplicate — เก็บแถวล่าสุดของแต่ละ order_id
    df = df.sort_values("updated_at", ascending=False)
    df = df.drop_duplicates(subset=["order_id"], keep="first")

    # 4. Enrich — เพิ่ม columns
    df["year"] = df["order_date"].dt.year
    df["month"] = df["order_date"].dt.month
    df["order_tier"] = pd.cut(
        df["amount"],
        bins=[0, 1000, 10000, float("inf")],
        labels=["Low", "Medium", "High"]
    )

    # 5. Rename
    df = df.rename(columns={
        "cust_nm": "customer_name",
        "ord_dt": "order_date"
    })

    removed = original_count - len(df)
    logger.info(f"Transform complete: {len(df)} rows ({removed} removed)")
    return df
</code></pre>

<hr/>

<h3>📤 Load — โหลดเข้าปลายทาง</h3>

<h4>Load Strategies</h4>
<table>
  <thead><tr><th>Strategy</th><th>วิธีทำ</th><th>ข้อดี</th><th>ข้อเสีย</th><th>ใช้เมื่อ</th></tr></thead>
  <tbody>
    <tr><td><strong>Full Load</strong></td><td>ลบข้อมูลเก่า โหลดใหม่ทั้งหมด</td><td>ง่าย, ข้อมูลแน่ใจว่าตรง</td><td>ช้า, เปลือง resource</td><td>ข้อมูลน้อย, Dimension tables</td></tr>
    <tr><td><strong>Incremental</strong></td><td>โหลดเฉพาะข้อมูลใหม่/เปลี่ยน</td><td>เร็ว, ประหยัด</td><td>ต้องมี watermark (updated_at)</td><td>⭐ ใช้บ่อยที่สุด — Fact tables</td></tr>
    <tr><td><strong>CDC</strong></td><td>จับ changes จาก DB log</td><td>Real-time, ไม่พลาด</td><td>ซับซ้อน, ต้องมี tool</td><td>Real-time pipeline</td></tr>
  </tbody>
</table>

<pre><code class="language-python">
def load_full(df, table_name, engine):
    """Full Load — ลบแล้วโหลดใหม่"""
    df.to_sql(table_name, engine, if_exists="replace", index=False)
    logger.info(f"Full loaded {len(df)} rows to {table_name}")

def load_incremental(df, table_name, engine):
    """Incremental Load — Append เฉพาะข้อมูลใหม่"""
    # ดึง max timestamp จากปลายทาง
    with engine.connect() as conn:
        result = conn.execute(f"SELECT MAX(updated_at) FROM {table_name}")
        last_loaded = result.scalar()

    # กรองเฉพาะข้อมูลที่ใหม่กว่า
    if last_loaded:
        df = df[df["updated_at"] > last_loaded]

    if len(df) > 0:
        df.to_sql(table_name, engine, if_exists="append", index=False)
        logger.info(f"Incrementally loaded {len(df)} new rows to {table_name}")
    else:
        logger.info("No new data to load")
</code></pre>

<hr/>

<h3>🔒 Idempotency — หลักการสำคัญที่สุดของ Pipeline</h3>
<p><strong>Idempotent</strong> = รันกี่ครั้งก็ได้ ผลลัพธ์เหมือนเดิม — ไม่มีข้อมูลซ้ำ ไม่พลาด</p>

<pre><code class="language-python">
# ❌ ไม่ Idempotent — รันซ้ำ = ข้อมูลซ้ำ!
def bad_load(df, table_name, engine):
    df.to_sql(table_name, engine, if_exists="append", index=False)

# ✅ Idempotent — รันกี่ครั้งก็ได้ ผลเหมือนเดิม
def idempotent_load(df, table_name, engine, partition_date):
    """ลบข้อมูลของวันนั้นก่อน แล้วโหลดใหม่"""
    with engine.connect() as conn:
        conn.execute(
            f"DELETE FROM {table_name} WHERE date = '{partition_date}'"
        )
    df.to_sql(table_name, engine, if_exists="append", index=False)
    logger.info(f"Idempotent load: {len(df)} rows for {partition_date}")
</code></pre>

<p><strong>วิธีทำ Idempotent:</strong></p>
<ul>
  <li><strong>DELETE + INSERT</strong> — ลบข้อมูลของ partition นั้นก่อน แล้ว insert ใหม่</li>
  <li><strong>MERGE / UPSERT</strong> — ถ้ามีแล้ว update, ถ้ายังไม่มี insert</li>
  <li><strong>Partition overwrite</strong> — เขียนทับ partition ทั้งหมด (BigQuery, Spark)</li>
</ul>

<hr/>

<h3>🛡️ Error Handling</h3>
<pre><code class="language-python">
import time

def retry_with_backoff(func, max_retries=3, initial_delay=1):
    """Retry with exponential backoff"""
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                logger.error(f"Failed after {max_retries} attempts: {e}")
                raise
            delay = initial_delay * (2 ** attempt)  # 1s, 2s, 4s
            logger.warning(
                f"Attempt {attempt+1} failed: {e}. Retrying in {delay}s..."
            )
            time.sleep(delay)

# Dead Letter Queue (DLQ) concept
def process_with_dlq(records, process_func, dlq_path="dead_letters.json"):
    """Process records ที่ fail ให้เก็บใน DLQ"""
    success = []
    dead_letters = []

    for record in records:
        try:
            result = process_func(record)
            success.append(result)
        except Exception as e:
            logger.warning(f"Failed to process: {record}. Error: {e}")
            dead_letters.append({
                "record": record,
                "error": str(e),
                "timestamp": datetime.now().isoformat()
            })

    # เก็บ dead letters ไว้ตรวจสอบ/แก้ไข/reprocess ทีหลัง
    if dead_letters:
        with open(dlq_path, "w") as f:
            json.dump(dead_letters, f, indent=2, default=str)
        logger.warning(f"{len(dead_letters)} records sent to DLQ")

    return success
</code></pre>

<hr/>

<h3>🏆 โปรเจกต์: Simple Python ETL Pipeline</h3>
<pre><code class="language-python">
"""
ETL Pipeline: ดึงข้อมูลจาก CSV → Transform → โหลดเข้า SQLite
"""
import pandas as pd
import sqlite3
import logging
from datetime import datetime

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)


def extract(filepath):
    """Extract: อ่านข้อมูลจาก CSV"""
    logger.info(f"Extracting data from {filepath}")
    df = pd.read_csv(filepath)
    logger.info(f"Extracted {len(df)} rows, {len(df.columns)} columns")
    return df


def transform(df):
    """Transform: ทำความสะอาดและเพิ่มข้อมูล"""
    logger.info("Starting transformation...")
    original_count = len(df)

    # Clean
    df = df.dropna(subset=["order_id", "amount"])
    df["customer_name"] = df["customer_name"].str.strip().str.title()
    df["order_date"] = pd.to_datetime(df["order_date"])
    df["amount"] = pd.to_numeric(df["amount"], errors="coerce")

    # Validate
    df = df[df["amount"] > 0]

    # Deduplicate
    df = df.drop_duplicates(subset=["order_id"], keep="last")

    # Enrich
    df["year_month"] = df["order_date"].dt.to_period("M").astype(str)
    df["order_tier"] = df["amount"].apply(
        lambda x: "High" if x >= 10000 else "Medium" if x >= 1000 else "Low"
    )
    df["processed_at"] = datetime.now()

    removed = original_count - len(df)
    logger.info(f"Transform done: {len(df)} rows kept, {removed} removed")
    return df


def load(df, db_path, table_name, partition_col="year_month"):
    """Load: โหลดเข้า SQLite (Idempotent)"""
    logger.info(f"Loading {len(df)} rows to {table_name}")
    conn = sqlite3.connect(db_path)

    # Idempotent: ลบ partition ที่จะโหลดก่อน
    partitions = df[partition_col].unique()
    for partition in partitions:
        conn.execute(
            f"DELETE FROM {table_name} WHERE {partition_col} = ?",
            (str(partition),)
        )
        logger.info(f"Cleared partition: {partition}")

    # Insert
    df.to_sql(table_name, conn, if_exists="append", index=False)
    conn.commit()
    conn.close()
    logger.info(f"Successfully loaded {len(df)} rows to {table_name}")


def run_pipeline():
    """รัน ETL Pipeline ทั้งหมด"""
    logger.info("=" * 50)
    logger.info("Pipeline started")
    start_time = datetime.now()

    try:
        # Extract
        raw_df = extract("data/raw/orders.csv")

        # Transform
        clean_df = transform(raw_df)

        # Load
        load(clean_df, "data/warehouse.db", "fact_orders")

        elapsed = (datetime.now() - start_time).total_seconds()
        logger.info(f"Pipeline completed in {elapsed:.2f} seconds")

    except Exception as e:
        logger.error(f"Pipeline FAILED: {e}")
        raise


if __name__ == "__main__":
    run_pipeline()
</code></pre>

<div class="tip-box">
<h4>💡 Tips</h4>
<ul>
  <li><strong>Idempotency คือ rule #1</strong> — Pipeline ต้องรันซ้ำได้ไม่มีผลข้างเคียง ใช้ DELETE+INSERT หรือ MERGE</li>
  <li><strong>แยก E-T-L เป็นฟังก์ชันชัดเจน</strong> — test แต่ละส่วนแยกได้ debug ง่าย</li>
  <li><strong>Log ทุกขั้นตอน</strong> — จำนวนแถว input, output, rows removed, เวลาที่ใช้</li>
  <li><strong>ELT นิยมมากขึ้น</strong> — โหลด raw data เข้า DW ก่อน แล้ว transform ด้วย dbt (SQL) — ง่ายกว่า, version control ได้</li>
</ul>
</div>

<div class="warning-box">
<h4>❌ ความผิดพลาดที่พบบ่อย</h4>
<ul>
  <li><strong>Pipeline ไม่ idempotent:</strong> รันซ้ำแล้วข้อมูลซ้ำ! → ต้อง DELETE ก่อน INSERT หรือใช้ MERGE</li>
  <li><strong>ไม่มี retry:</strong> API fail 1 ครั้งแล้ว pipeline พังทั้งหมด → ใช้ retry with exponential backoff</li>
  <li><strong>ไม่ validate ข้อมูล:</strong> ข้อมูลเสียไหลเข้า DW → ต้อง validate ก่อน load (null check, range check)</li>
  <li><strong>Full load ทุกวัน:</strong> ข้อมูลเยอะแล้ว full load ทุกวัน ช้าและแพง → ใช้ incremental</li>
  <li><strong>ไม่เก็บ raw data:</strong> transform แล้วทิ้ง raw → ถ้า logic ผิดแก้ไม่ได้ ต้องเก็บ raw ไว้เสมอ</li>
</ul>
</div>

<div class="interview-box">
<h4>🎤 คำถามสัมภาษณ์</h4>
<ol>
  <li><strong>"ETL กับ ELT ต่างกันอย่างไร? เมื่อไรใช้อะไร?"</strong><br/>
  ตอบ: ETL แปลงข้อมูลก่อนโหลดเข้า DW (บน server กลาง) ส่วน ELT โหลดข้อมูลดิบเข้า DW ก่อนแล้วแปลงใน DW (เช่น BigQuery + dbt) ELT นิยมมากขึ้นเพราะ Cloud DW แรงพอ + ง่ายกว่า + เก็บ raw data ได้</li>
  <li><strong>"Idempotency คืออะไร? ทำไมถึงสำคัญ?"</strong><br/>
  ตอบ: Idempotent = รันกี่ครั้งก็ได้ ผลลัพธ์เหมือนเดิม สำคัญเพราะ pipeline อาจ fail กลางทาง ต้อง rerun ได้โดยไม่ทำให้ข้อมูลซ้ำ ทำได้โดย DELETE+INSERT, MERGE, หรือ partition overwrite</li>
  <li><strong>"Incremental Load ทำงานอย่างไร?"</strong><br/>
  ตอบ: ใช้ watermark (เช่น updated_at) เก็บค่า max ที่โหลดล่าสุด ครั้งถัดไปดึงเฉพาะข้อมูลที่ updated_at > watermark เร็วกว่า full load มาก แต่ต้องมี column timestamp ที่เชื่อถือได้</li>
  <li><strong>"Dead Letter Queue คืออะไร?"</strong><br/>
  ตอบ: DLQ เป็นที่เก็บ record ที่ process ไม่สำเร็จ แทนที่จะให้ pipeline พังทั้งหมด ก็แยก record ที่ fail ไว้ใน DLQ เพื่อ investigate + reprocess ทีหลัง ส่วน record ที่สำเร็จยังไหลต่อได้</li>
</ol>
</div>

<div class="exercise-box">
<h4>💪 แบบฝึกหัด</h4>
<ol>
  <li>เขียน ETL pipeline ที่ดึงข้อมูลจาก API <code>https://jsonplaceholder.typicode.com/posts</code> → transform (เพิ่ม word_count, title_length) → save เป็น Parquet</li>
  <li>แก้ pipeline ข้างบนให้เป็น Idempotent (ใช้ DELETE+INSERT หรือ overwrite file)</li>
  <li>เพิ่ม retry logic ที่ retry 3 ครั้งพร้อม exponential backoff เมื่อ API fail</li>
  <li>เพิ่ม logging ที่บันทึก: เวลาเริ่ม, จำนวนแถวที่ดึงได้, จำนวนแถวหลัง transform, เวลาที่ใช้ทั้งหมด</li>
</ol>
</div>
`
  }
];
