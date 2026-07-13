export const claudeAiChapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🧡',
    title: 'Claude.ai คืออะไร? — ทำไมต้องใช้ Claude แทน ChatGPT?',
    shortTitle: 'ภาพรวม Claude.ai',
    content: `<h2>🧡 Claude.ai คืออะไร? — AI ที่เน้น "ความซื่อสัตย์" และ "ความปลอดภัย"</h2>
<img src="/images/claude-ai/cover.png" alt="Claude.ai Overview" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />
<p><strong>Claude</strong> เป็น AI ที่พัฒนาโดย <strong>Anthropic</strong> บริษัทที่ก่อตั้งโดยอดีตทีมงานของ OpenAI โดยมีจุดยืนชัดเจนว่าต้องการสร้าง AI ที่ <strong>"Honest, Harmless, Helpful"</strong> — ซื่อสัตย์ ไม่เป็นอันตราย และเป็นประโยชน์</p>
<p>สิ่งที่ทำให้ Claude โดดเด่นกว่า AI ตัวอื่นคือ <strong>ความสามารถในการเขียน วิเคราะห์ และใช้เหตุผลที่ลึกกว่า</strong> พร้อม Context Window ที่กว้างมากจนสามารถรับไฟล์ยาวๆ หรือข้อความนับแสนคำได้ในครั้งเดียว</p>

<h3>🆚 Claude vs ChatGPT vs Gemini — เลือกใช้ตัวไหนดี?</h3>
<img src="/images/claude-ai/compare.png" alt="Claude vs ChatGPT vs Gemini" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />
<table>
<tr><th>ความสามารถ</th><th>🧡 Claude</th><th>💚 ChatGPT</th><th>💙 Gemini</th></tr>
<tr><td><strong>การเขียนเนื้อหา / บรรณาธิการ</strong></td><td>⭐⭐⭐⭐⭐ ดีที่สุด</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
<tr><td><strong>การวิเคราะห์และใช้เหตุผล</strong></td><td>⭐⭐⭐⭐⭐ ดีที่สุด</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>เขียนโค้ด (Coding)</strong></td><td>⭐⭐⭐⭐⭐ ดีที่สุด</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Context Window (รับข้อความยาว)</strong></td><td>⭐⭐⭐⭐⭐ 200K tokens</td><td>⭐⭐⭐⭐ 128K tokens</td><td>⭐⭐⭐⭐⭐ 1M tokens</td></tr>
<tr><td><strong>ดึงข้อมูล Real-time / ค้นเว็บ</strong></td><td>⭐⭐⭐ (มีแต่จำกัด)</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td><strong>ความปลอดภัยและความเชื่อถือได้</strong></td><td>⭐⭐⭐⭐⭐ ดีที่สุด</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>สร้างรูปภาพ (Image Gen)</strong></td><td>❌ ยังไม่รองรับ</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
</table>

<h3>🎯 สรุป: ใช้ Claude เมื่อไหร่ดีที่สุด?</h3>
<ul>
  <li>✅ <strong>เขียนรายงาน, บทความ, อีเมล</strong> ที่ต้องการภาษาดี มีเหตุผล ถูกต้อง</li>
  <li>✅ <strong>วิเคราะห์เอกสาร/สัญญา/รายงานยาวๆ</strong> ส่ง PDF หรือ Text ยาวมากได้</li>
  <li>✅ <strong>เขียนโค้ดและ Debug</strong> โดยเฉพาะโปรเจคขนาดใหญ่ที่ต้องการบริบทมาก</li>
  <li>✅ <strong>งานที่ต้องการความระมัดระวัง</strong> เช่น เนื้อหาทางการแพทย์ กฎหมาย ธุรกิจ</li>
  <li>✅ <strong>สร้าง Workflow ทำงานซ้ำๆ</strong> ด้วยระบบ Projects และ System Prompt</li>
</ul>

<h3>📦 แผนบริการ Claude ที่ควรรู้</h3>
<table>
<tr><th>แผน</th><th>ราคา</th><th>โมเดลที่ได้</th><th>เหมาะกับ</th></tr>
<tr><td><strong>Free</strong></td><td>ฟรี</td><td>Claude 3.5 Haiku (จำกัด)</td><td>ลองใช้ทั่วไป</td></tr>
<tr><td><strong>Pro</strong></td><td>~$20/เดือน</td><td>Claude Opus 4, Sonnet 4 ไม่จำกัด</td><td>ใช้งานจริงจัง</td></tr>
<tr><td><strong>Max</strong></td><td>~$100/เดือน</td><td>ทุกโมเดล + ใช้ได้มากกว่า 5x</td><td>ผู้ใช้งานหนัก</td></tr>
<tr><td><strong>Team/Enterprise</strong></td><td>ติดต่อ</td><td>ทุกโมเดล + ความเป็นส่วนตัวสูงสุด</td><td>องค์กร</td></tr>
</table>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> ถ้าคุณทำงานด้านเนื้อหา กฎหมาย การเงิน หรือโปรแกรมมิ่ง แนะนำให้ลองใช้ <strong>Claude Pro ($20/เดือน)</strong> ควบคู่กับ ChatGPT Plus — ใช้ Claude สำหรับงานวิเคราะห์และเขียน ใช้ ChatGPT สำหรับงานที่ต้องการข้อมูล Real-time หรือสร้างรูปภาพ จะได้ประโยชน์สูงสุดจากทั้งสองตัว
</div>`,
  },
  {
    number: 1,
    slug: 'projects-system-prompt',
    emoji: '📁',
    title: 'Projects & System Prompt — ฝังชิปนิสัย Claude ให้ทำงานให้คุณตลอด',
    shortTitle: 'Projects & System Prompt',
    content: `<h2>📁 Projects & System Prompt — สร้างผู้ช่วย AI ประจำตัวของคุณ</h2>
<img src="/images/claude-ai/projects.png" alt="Claude Projects" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />

<h3>🗂️ Projects คืออะไร?</h3>
<p><strong>Projects</strong> คือฟีเจอร์ที่ทำให้ Claude กลายเป็น <strong>"ผู้ช่วยเฉพาะทาง"</strong> ที่จำบริบทของงานคุณได้ตลอด ต่างจากการแชทปกติที่ Claude ลืมทุกอย่างเมื่อเริ่มแชทใหม่</p>
<p>ใน Project หนึ่งๆ จะประกอบด้วย 3 สิ่งสำคัญ:</p>
<ul>
  <li>📝 <strong>System Prompt:</strong> คำสั่งถาวรที่บอก Claude ว่าต้องเป็นใคร ทำงานแบบไหน</li>
  <li>📎 <strong>Project Files:</strong> ไฟล์ประจำโปรเจค (เอกสาร, แนวทาง, ข้อมูลสินค้า) ที่ Claude จะอ่านทุกครั้ง</li>
  <li>💬 <strong>Shared Memory:</strong> ทุกแชทใน Project เดียวกันจะแชร์บริบทร่วมกัน</li>
</ul>

<h3>⚙️ วิธีสร้าง Project และตั้ง System Prompt</h3>
<ol>
  <li>ที่ Sidebar ซ้าย กดปุ่ม <strong>"+ New Project"</strong></li>
  <li>ตั้งชื่อ Project ให้ชัดเจน เช่น "ทีม Marketing Content"</li>
  <li>กด <strong>"Set project instructions"</strong> แล้วพิมพ์ System Prompt</li>
  <li>กด <strong>"Add content"</strong> เพื่ออัปโหลดไฟล์ที่ต้องการให้ Claude อ่านตลอด</li>
</ol>

<h3>✍️ ตัวอย่าง System Prompt สำหรับงานต่างๆ</h3>

<p><strong>🎯 สำหรับทีม Content Marketing:</strong></p>
<pre><code>คุณคือนักเขียนคอนเทนต์อาวุโสของแบรนด์ [ชื่อแบรนด์]
น้ำเสียงของแบรนด์: เป็นมิตร ให้ข้อมูลจริง ไม่โอ้อวด
กลุ่มเป้าหมาย: คนทำงานอายุ 25-35 ปี ในกรุงเทพ
ภาษาที่ใช้: ภาษาไทยกึ่งทางการ ไม่เป็นทางการเกินไป ไม่ใช้ภาษาวัยรุ่น
ทุกเนื้อหาต้องมี Call-to-Action ที่ชัดเจน
ห้ามใช้คำว่า "สุดยอด" "เทพ" "โคตร" เด็ดขาด</code></pre>

<p><strong>⚖️ สำหรับนักกฎหมาย / ที่ปรึกษาธุรกิจ:</strong></p>
<pre><code>คุณคือที่ปรึกษากฎหมายธุรกิจ ที่มีความเชี่ยวชาญกฎหมายไทย
ทุกคำตอบต้องมีการระบุข้อกฎหมายที่เกี่ยวข้อง (พระราชบัญญัติ/มาตรา)
ต้องระบุข้อจำกัดเสมอว่า "คำแนะนำนี้เป็นข้อมูลเบื้องต้น ควรปรึกษาทนายจริงก่อนตัดสินใจ"
ตอบเป็นภาษาไทยเสมอ แม้ถูกถามภาษาอื่น
จัดรูปแบบคำตอบเป็น: สรุปสั้น → รายละเอียด → ข้อควรระวัง</code></pre>

<p><strong>💻 สำหรับ Developer:</strong></p>
<pre><code>คุณคือ Senior Software Engineer ที่เชี่ยวชาญ Python, React, Node.js
เมื่อเขียนโค้ดให้เสมอ:
1. เพิ่ม Comment อธิบายทุก function ที่ซับซ้อน
2. ใช้ TypeScript แทน JavaScript เสมอ
3. เขียน Unit Test มาให้ด้วยทุกครั้ง
4. บอก Edge Cases ที่ควรระวัง
5. ถ้ามีวิธีที่ดีกว่าให้บอกด้วย อย่าทำตามคำสั่งตาบอด</code></pre>

<h3>📎 การอัปโหลด Project Files</h3>
<p>ไฟล์ที่ควรอัปโหลดเข้า Project เพื่อให้ Claude อ้างอิงตลอด:</p>
<ul>
  <li>📄 Brand Guidelines / โทนเสียงของแบรนด์</li>
  <li>📊 ข้อมูลผลิตภัณฑ์ / Price List</li>
  <li>📋 Template รายงาน / เอกสารมาตรฐานของบริษัท</li>
  <li>📚 นโยบายบริษัท / ข้อมูล FAQ</li>
  <li>💻 Codebase หลัก (สำหรับ Dev)</li>
</ul>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> สร้าง Project แยกสำหรับแต่ละบทบาทในชีวิตคุณ เช่น "งานประจำ", "ธุรกิจส่วนตัว", "เรียนภาษา" แล้วอัปโหลดเอกสารที่เกี่ยวข้องเข้าไปใน Project นั้น Claude จะกลายเป็นผู้เชี่ยวชาญเฉพาะด้านในทันที โดยไม่ต้องอธิบาย Background ซ้ำทุกครั้งที่เริ่มแชทใหม่
</div>`,
  },
  {
    number: 2,
    slug: 'artifacts',
    emoji: '✨',
    title: 'Artifacts — สร้างโค้ด, เว็บ, SVG, เอกสาร แบบ Real-time Preview',
    shortTitle: 'Artifacts Feature',
    content: `<h2>✨ Artifacts — สร้างของจริงได้ในหน้าต่างเดียว</h2>
<img src="/images/claude-ai/artifacts.png" alt="Claude Artifacts" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />

<h3>🎨 Artifacts คืออะไร?</h3>
<p>แทนที่ Claude จะตอบกลับเป็นข้อความธรรมดา <strong>Artifacts</strong> คือฟีเจอร์ที่ทำให้ Claude สร้าง "ผลงานชิ้นหนึ่ง" ขึ้นมาในพาเนลด้านขวา ที่คุณสามารถ <strong>เห็น Preview แบบ Real-time, แก้ไข, Download, หรือ Copy ได้ทันที</strong></p>

<h3>🛠️ ประเภทของ Artifacts ที่ Claude สร้างได้</h3>
<table>
<tr><th>ประเภท</th><th>ตัวอย่างคำสั่ง</th><th>ผลลัพธ์</th></tr>
<tr><td><strong>HTML/CSS/JS</strong></td><td>"สร้างหน้า Landing Page สวยๆ"</td><td>เว็บเพจที่เปิดดูได้ทันที</td></tr>
<tr><td><strong>React Component</strong></td><td>"สร้าง Component ตาราง Sortable"</td><td>โค้ด React ที่รันได้</td></tr>
<tr><td><strong>SVG Image</strong></td><td>"วาด Logo วงกลมสีส้ม"</td><td>ไฟล์ภาพ Vector</td></tr>
<tr><td><strong>Markdown Document</strong></td><td>"เขียนรายงาน Executive Summary"</td><td>เอกสาร Markdown จัดหน้าสวย</td></tr>
<tr><td><strong>Code (ทุกภาษา)</strong></td><td>"เขียน Python Script ดึง API"</td><td>โค้ดพร้อม Syntax Highlight</td></tr>
<tr><td><strong>Mermaid Diagram</strong></td><td>"ทำ Flow Chart กระบวนการสั่งซื้อ"</td><td>แผนผังที่เรนเดอร์ให้เห็นเลย</td></tr>
</table>

<h3>🔄 Iterative Development — แก้ไขซ้ำได้ไม่จำกัด</h3>
<p>จุดเด่นที่สุดของ Artifacts คือ <strong>สามารถต่อยอดแก้ไขได้แบบ Iterative</strong> โดย Claude จะจำสิ่งที่สร้างไปแล้วและแก้ไขเฉพาะจุดที่คุณบอก</p>
<p><strong>ตัวอย่าง Workflow เว็บสินค้า:</strong></p>
<ol>
  <li>"สร้างหน้าเว็บแสดงสินค้า มีรูป ชื่อ ราคา และปุ่มซื้อ" → Claude สร้าง HTML เบื้องต้น</li>
  <li>"เปลี่ยนสีพื้นหลังเป็นสีเข้มสไตล์ Dark Mode" → แก้ CSS เฉพาะส่วน</li>
  <li>"เพิ่ม Animation ให้การ์ดสินค้า Hover แล้วยกขึ้น" → เพิ่ม CSS Transition</li>
  <li>"เพิ่มฟังก์ชัน Filter สินค้าตามหมวดหมู่ด้วย JavaScript" → เพิ่ม Logic</li>
</ol>
<p>ทั้งหมดนี้ทำได้โดยไม่ต้องเปิดโปรแกรม Code Editor เลย!</p>

<h3>💡 ตัวอย่าง Prompt ที่ใช้กับ Artifacts ได้ดีมาก</h3>
<ul>
  <li>"สร้าง Dashboard สรุปยอดขายรายเดือน ใช้ Chart.js แสดงกราฟแท่ง ข้อมูลใส่ในโค้ดได้เลย"</li>
  <li>"ทำ Interactive Quiz 5 ข้อเกี่ยวกับ Python ให้คลิกเลือกคำตอบและรู้ผลได้ทันที"</li>
  <li>"วาด SVG แผนผังองค์กรบริษัทที่มี CEO 1 คน ผู้จัดการ 3 คน และพนักงาน 9 คน"</li>
  <li>"สร้าง Markdown Template สำหรับ Meeting Notes ที่มีส่วน Agenda, Discussion, Action Items, Decisions"</li>
  <li>"เขียน Python Script อ่านไฟล์ CSV แล้วสรุปข้อมูลเป็น Report พร้อม Error Handling"</li>
</ul>

<h3>📤 การใช้ Artifacts ร่วมกับคนอื่น</h3>
<p>Claude มีฟีเจอร์ <strong>Share Artifact</strong> ที่ทำให้คุณส่งลิงก์ Artifact ให้คนอื่นเปิดดูได้โดยไม่ต้องมีบัญชี Claude เหมาะมากสำหรับ:</p>
<ul>
  <li>ส่ง Prototype เว็บให้ลูกค้าดู</li>
  <li>แชร์ Diagram/Flow Chart กับทีม</li>
  <li>ส่ง Interactive Quiz ให้ผู้เรียน</li>
</ul>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> ใช้ Artifacts เป็น "Rapid Prototyping Tool" สำหรับทีม Design/Dev ก่อนที่จะไปเขียนโค้ดจริงใน Codebase ให้ใช้ Claude Artifacts สร้าง Prototype หน้าตาให้ลูกค้า Approve ก่อน ประหยัดเวลา Dev ไปได้ 80% และลด Revision รอบหลัง
</div>`,
  },
  {
    number: 3,
    slug: 'advanced-prompting',
    emoji: '🧠',
    title: 'Advanced Prompting — เทคนิคสั่งงาน Claude ให้ได้ผลลัพธ์สูงสุด',
    shortTitle: 'Advanced Prompting',
    content: `<h2>🧠 Advanced Prompting — เทคนิคที่แยกมือใหม่กับมือโปร</h2>
<img src="/images/claude-ai/prompting.png" alt="Advanced Prompting" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />

<h3>1. 🎭 Role + Context + Task (สูตรพื้นฐานที่ต้องรู้)</h3>
<p>Prompt ที่ดีต้องมี 3 องค์ประกอบ:</p>
<table>
<tr><th>องค์ประกอบ</th><th>คืออะไร</th><th>ตัวอย่าง</th></tr>
<tr><td><strong>Role</strong></td><td>บอก Claude ว่าต้องเป็นใคร</td><td>"คุณเป็น HR Manager มืออาชีพ"</td></tr>
<tr><td><strong>Context</strong></td><td>ให้ Background ที่จำเป็น</td><td>"บริษัทของเรามีพนักงาน 50 คน ไม่มี HR Policy อย่างเป็นทางการ"</td></tr>
<tr><td><strong>Task</strong></td><td>บอกงานที่ต้องทำชัดเจน</td><td>"ช่วยร่าง Leave Policy ครอบคลุม ลาป่วย ลาพักร้อน ลาคลอด และ Remote Work"</td></tr>
</table>
<p><strong>❌ Prompt แย่:</strong> "เขียน HR Policy ให้หน่อย"<br/>
<strong>✅ Prompt ดี:</strong> "คุณเป็น HR Manager ที่เชี่ยวชาญกฎหมายแรงงานไทย บริษัท Tech Startup ของเรามีพนักงาน 50 คน ยังไม่มี HR Policy อย่างเป็นทางการ ช่วยร่าง Leave Policy ที่ครอบคลุมลาป่วย ลาพักร้อน (15 วัน/ปี) ลาคลอด และ Work from Home Policy โดยอ้างอิงกฎหมายคุ้มครองแรงงานไทย พร้อมตัวอย่างการกรอกแบบฟอร์มลา"</p>

<h3>2. 🔗 Chain of Thought (ให้ Claude คิดทีละขั้นตอน)</h3>
<p>สำหรับงานที่ซับซ้อน ให้บอก Claude ให้คิดทีละขั้นก่อนตอบ:</p>
<pre><code>Prompt: "ก่อนตอบ ให้วิเคราะห์ปัญหานี้ทีละขั้นตอน:
1. ระบุข้อมูลที่มีอยู่
2. ระบุสิ่งที่ยังขาดหรือต้องสมมุติ
3. วิเคราะห์ทางเลือกที่เป็นไปได้
4. เลือกทางแก้ที่ดีที่สุดพร้อมเหตุผล
จากนั้นจึงให้คำตอบสุดท้าย"</code></pre>
<p>เทคนิคนี้ทำให้ Claude ตอบถูกต้องแม่นยำขึ้นมากในงานที่ต้องใช้การวิเคราะห์</p>

<h3>3. 📋 Few-shot Examples (สอนด้วยตัวอย่าง)</h3>
<p>ถ้าต้องการ Output ในรูปแบบเฉพาะ ให้ยกตัวอย่างให้ Claude เห็นก่อน:</p>
<pre><code>ฉันต้องการให้คุณเขียนสรุปข่าวในรูปแบบนี้:

ตัวอย่าง Input: "Apple ประกาศ iPhone 17 ราคาเริ่มต้น 35,000 บาท..."
ตัวอย่าง Output:
📱 iPhone 17 มาแล้ว | ราคาเริ่ม 35K
💡 ไฮไลท์: [2-3 จุดสำคัญ]
👥 กระทบใคร: [กลุ่มเป้าหมาย]
📅 วางจำหน่าย: [วันที่]

ตอนนี้ใช้รูปแบบเดียวกันนี้กับข่าวต่อไปนี้: [ข่าวที่ต้องการ]</code></pre>

<h3>4. 📐 Output Format Control (ควบคุมรูปแบบผลลัพธ์)</h3>
<p>บอก Claude ชัดเจนว่าต้องการ Output แบบไหน:</p>
<ul>
  <li><strong>ความยาว:</strong> "ตอบสั้นๆ ไม่เกิน 3 ประโยค" หรือ "ตอบอย่างละเอียดครบถ้วน"</li>
  <li><strong>รูปแบบ:</strong> "จัดเป็น Bullet Points" หรือ "ตอบเป็นตาราง" หรือ "เขียนเป็น Paragraph"</li>
  <li><strong>ภาษา:</strong> "ตอบเป็นภาษาทางการ" หรือ "ใช้ภาษาที่เด็กมัธยมเข้าใจได้"</li>
  <li><strong>โครงสร้าง:</strong> "ใช้หัวข้อ H2 แบ่งเนื้อหาเป็น 3 ส่วน"</li>
</ul>

<h3>5. 🔄 Iterative Refinement (การปรับปรุงซ้ำ)</h3>
<p>Claude เก่งมากในการรับ Feedback และปรับปรุง ใช้ Prompt เหล่านี้:</p>
<ul>
  <li>"ดีแล้ว แต่ขอให้เป็นทางการขึ้นอีกนิด และเพิ่มตัวเลขสถิติสนับสนุน"</li>
  <li>"เวอร์ชั่นนี้ยาวเกินไป ช่วย Condense เหลือ 30% โดยเก็บ Key Points ครบ"</li>
  <li>"ดีมาก แต่ Paragraph 3 ฟังดู Negative เกินไป ปรับ Tone ให้ Positive ขึ้น"</li>
  <li>"ช่วยเขียนอีก 3 เวอร์ชั่นที่ต่างกัน แล้วบอกว่าแต่ละเวอร์ชั่นเหมาะกับสถานการณ์ไหน"</li>
</ul>

<h3>6. 🎯 Meta-Prompting (ให้ Claude ช่วยเขียน Prompt)</h3>
<p>ถ้าไม่รู้จะสั่งยังไง ให้ถาม Claude ก่อน!</p>
<pre><code>"ฉันต้องการเขียน Prompt ที่จะให้คุณช่วยวิเคราะห์งบการเงินของบริษัท
ช่วยแนะนำว่า Prompt ที่ดีสำหรับงานนี้ควรมีข้อมูลอะไรบ้าง
และควร Specify อะไรเพิ่มเพื่อให้คุณตอบได้แม่นยำที่สุด?"</code></pre>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> สร้าง "Prompt Library" ของตัวเองใน Notion หรือ Google Docs เก็บ Prompt ที่ได้ผลดีแต่ละ Use Case ไว้ เช่น "Prompt สรุปรายงาน", "Prompt เขียนอีเมลขอโทษลูกค้า", "Prompt วิเคราะห์คู่แข่ง" เมื่อต้องใช้งานก็แค่เปิด Library แล้วคัดลอกไปแก้ข้อมูลได้ทันที ประหยัดเวลาคิด Prompt ใหม่ทุกครั้ง
</div>`,
  },
  {
    number: 4,
    slug: 'file-analysis',
    emoji: '📊',
    title: 'วิเคราะห์ไฟล์ & เอกสาร — PDF, CSV, รูปภาพ กับ Claude',
    shortTitle: 'วิเคราะห์ไฟล์ & เอกสาร',
    content: `<h2>📊 วิเคราะห์ไฟล์ & เอกสาร — ให้ Claude อ่านแทนคุณ</h2>

<h3>📄 ประเภทไฟล์ที่ Claude รองรับ</h3>
<table>
<tr><th>ประเภทไฟล์</th><th>ที่รองรับ</th><th>Use Case ที่ดีที่สุด</th></tr>
<tr><td><strong>PDF</strong></td><td>✅</td><td>สัญญา, รายงาน, วิจัย, Spec เอกสาร</td></tr>
<tr><td><strong>Word (.docx)</strong></td><td>✅</td><td>ร่างเอกสาร, รายงานบริษัท</td></tr>
<tr><td><strong>Excel/CSV</strong></td><td>✅</td><td>ข้อมูลยอดขาย, ข้อมูล Survey</td></tr>
<tr><td><strong>รูปภาพ (PNG/JPG)</strong></td><td>✅</td><td>สกรีนช็อต, กราฟ, Diagram, ใบเสร็จ</td></tr>
<tr><td><strong>Code Files</strong></td><td>✅</td><td>Review โค้ด, Debug, Refactor</td></tr>
<tr><td><strong>Plain Text</strong></td><td>✅</td><td>Log Files, Data ดิบ</td></tr>
</table>

<h3>📑 เทคนิควิเคราะห์เอกสารยาวๆ (PDF Mastery)</h3>
<p><strong>ปัญหา:</strong> ได้รับสัญญา 80 หน้า ต้องหาเงื่อนไขสำคัญด่วน</p>
<p><strong>วิธีแก้:</strong> อัปโหลด PDF แล้วใช้ Prompt เหล่านี้:</p>
<ul>
  <li>"สรุปเนื้อหาสำคัญทั้งหมดใน 1 หน้า A4"</li>
  <li>"หาข้อกำหนดเกี่ยวกับการยกเลิกสัญญาและบทลงโทษทั้งหมด พร้อมระบุเลขหน้า"</li>
  <li>"มีข้อไหนที่เป็นกับดักหรือเสียเปรียบฝ่ายผู้ซื้อบ้าง? อธิบายด้วยภาษาที่เข้าใจง่าย"</li>
  <li>"เปรียบเทียบสัญญานี้กับมาตรฐานทั่วไป มีข้อไหนผิดปกติหรือไม่?"</li>
</ul>

<h3>📊 วิเคราะห์ข้อมูล CSV / Excel</h3>
<p><strong>ตัวอย่าง:</strong> มีข้อมูลยอดขายรายวัน 1 ปี ใน Excel</p>
<pre><code>อัปโหลดไฟล์ CSV แล้วถามว่า:
"วิเคราะห์ข้อมูลยอดขายนี้และตอบคำถามต่อไปนี้:
1. เดือนไหนยอดสูงสุดและต่ำสุด? เพราะอะไร?
2. มีแนวโน้ม (Trend) อะไรที่น่าสนใจบ้าง?
3. สินค้าไหนที่ขายดีและขายแย่ในแต่ละไตรมาส?
4. ถ้าจะทำนายยอดขายเดือนหน้า ควรเตรียมสต็อกเท่าไหร่?
จัดผลการวิเคราะห์เป็นตาราง พร้อมข้อเสนอแนะเชิงปฏิบัติ"</code></pre>

<h3>🖼️ วิเคราะห์รูปภาพ (Vision)</h3>
<p>Claude สามารถ "มองเห็น" รูปภาพและตีความได้:</p>
<ul>
  <li><strong>สกรีนช็อต Error:</strong> "รูปนี้มี Error message อะไร? สาเหตุคืออะไรและแก้ยังไง?"</li>
  <li><strong>กราฟ/ชาร์ต:</strong> "อ่านข้อมูลจากกราฟนี้ และสรุปว่าแนวโน้มเป็นอย่างไร"</li>
  <li><strong>UI Screenshot:</strong> "Redesign หน้านี้ให้ใช้งานง่ายขึ้น อธิบายสิ่งที่ควรปรับปรุง"</li>
  <li><strong>ใบเสร็จ/เอกสาร:</strong> "ดึงข้อมูลจากใบเสร็จนี้ออกมาเป็น JSON (วันที่, ร้านค้า, รายการ, ราคา)"</li>
  <li><strong>Whiteboard:</strong> "ถ่ายรูปกระดานไวท์บอร์ดที่เขียนไอเดียไว้ แล้วให้ Claude สรุปและจัดโครงสร้างใหม่"</li>
</ul>

<h3>💡 Pro Tip: Multiple File Analysis</h3>
<p>Claude รองรับการอัปโหลดหลายไฟล์พร้อมกัน ใช้ประโยชน์จากนี้ด้วย:</p>
<pre><code>"ฉันอัปโหลดรายงานไตรมาส Q1, Q2, Q3 ของปีนี้
เปรียบเทียบทั้ง 3 ไตรมาส และหา:
- จุดที่ดีขึ้นชัดเจน
- จุดที่ถดถอยลง  
- สิ่งที่ทำได้ดีสม่ำเสมอ
สรุปเป็นตารางแล้วให้คำแนะนำสำหรับ Q4"</code></pre>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> สร้าง Checklist สำหรับงานที่ต้องอ่านเอกสารยาวๆ ประจำ เช่น "Checklist วิเคราะห์สัญญา 10 ข้อ" แล้วเปลี่ยนเป็น Prompt Template ใน Project ของ Claude เมื่อได้รับเอกสารใหม่ แค่อัปโหลดและรัน Prompt Template — Claude จะตรวจสอบทุกจุดที่สำคัญให้โดยอัตโนมัติ
</div>`,
  },
  {
    number: 5,
    slug: 'coding-with-claude',
    emoji: '💻',
    title: 'เขียนโค้ดกับ Claude — ตั้งแต่ Beginner จนถึง Senior Level',
    shortTitle: 'เขียนโค้ดกับ Claude',
    content: `<h2>💻 เขียนโค้ดกับ Claude — AI คู่หูนักพัฒนา</h2>

<h3>🎯 Claude เก่งโค้ดแค่ไหน?</h3>
<p>Claude Sonnet/Opus เป็นหนึ่งใน AI ที่เก่งเรื่องโค้ดมากที่สุด โดยเฉพาะในด้าน:</p>
<ul>
  <li>✅ <strong>การอธิบายโค้ด:</strong> อธิบายโค้ดซับซ้อนเป็นภาษาที่เข้าใจง่าย</li>
  <li>✅ <strong>Debug:</strong> หาบัก อธิบายสาเหตุ และเสนอวิธีแก้</li>
  <li>✅ <strong>Refactor:</strong> ปรับปรุงโค้ดให้สะอาดและมีประสิทธิภาพขึ้น</li>
  <li>✅ <strong>Architecture Design:</strong> ออกแบบโครงสร้างระบบ</li>
  <li>✅ <strong>Code Review:</strong> ตรวจสอบโค้ดและหา Security Issues</li>
  <li>✅ <strong>Documentation:</strong> เขียน Comment และ Docs อัตโนมัติ</li>
</ul>

<h3>🚀 Use Case สำหรับคนไม่เป็นโค้ด (No-Code)</h3>
<p>คุณไม่ต้องเป็น Developer ก็ใช้ Claude เขียนโค้ดได้!</p>

<p><strong>สร้าง Excel/Google Sheets Formula:</strong></p>
<pre><code>"ฉันมีข้อมูลใน Column A คือชื่อพนักงาน Column B คือยอดขาย
ช่วยเขียน Formula ที่จะ:
1. หาค่าเฉลี่ยยอดขายทั้งหมด
2. ไฮไลท์แถวที่ยอดขายสูงกว่าค่าเฉลี่ย (Conditional Formatting)
3. จัด Rank ว่าใครขายดีที่สุด
อธิบายวิธีใช้ทีละขั้นด้วย"</code></pre>

<p><strong>สร้าง Google Apps Script อัตโนมัติ:</strong></p>
<pre><code>"ช่วยเขียน Google Apps Script ที่จะ:
1. อ่านข้อมูลจาก Google Sheet ชื่อ 'Orders'
2. ส่งอีเมลแจ้งเตือนไปยัง orders@company.com ทุกวันจันทร์เช้า 8 โมง
3. สรุปออเดอร์ที่ยังไม่ได้จัดส่ง (Status = 'Pending')
อธิบายวิธีติดตั้งและตั้ง Trigger ด้วย"</code></pre>

<h3>🔧 Use Case สำหรับ Developer</h3>
<p><strong>การ Debug ที่ถูกวิธี:</strong></p>
<pre><code>"นี่คือ Error Message ที่ได้:
[วางข้อความ Error]

นี่คือโค้ดที่เกี่ยวข้อง:
[วางโค้ด]

Context: ใช้ Node.js 18, Express 4.18
ช่วยวิเคราะห์ว่าสาเหตุที่แท้จริงคืออะไร และมีวิธีแก้กี่วิธี 
พร้อมบอก Trade-off ของแต่ละวิธี"</code></pre>

<p><strong>Code Review แบบมืออาชีพ:</strong></p>
<pre><code>"ช่วย Review โค้ดนี้ในแง่มุมต่อไปนี้:
1. Security Vulnerabilities (SQL Injection, XSS, etc.)
2. Performance Issues
3. Code Readability และ Best Practices
4. Edge Cases ที่อาจเกิดปัญหา
5. สิ่งที่ทำได้ดีแล้ว (ไม่ต้องเปลี่ยน)
จัดเป็น Priority: Critical / Major / Minor"</code></pre>

<h3>🏗️ การออกแบบ System Architecture</h3>
<p>Claude ช่วยออกแบบระบบได้เป็นอย่างดี:</p>
<pre><code>"ฉันกำลังจะสร้างแอป E-commerce ที่:
- รองรับผู้ใช้ 10,000 คนพร้อมกัน
- มีระบบ Payment (PromptPay, Credit Card)
- ต้องการ Real-time Inventory Update
- Budget สำหรับ Infrastructure ต่ำกว่า $500/เดือน

ช่วยออกแบบ System Architecture โดยใช้:
- เทคโนโลยีที่เหมาะสม
- วิธีจัดการ Database
- Caching Strategy
- ทำ Diagram Mermaid ด้วย"</code></pre>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> สร้าง Project ใน Claude ชื่อ "Dev Assistant" แล้วอัปโหลดไฟล์ README, Architecture Docs, และตัวอย่างโค้ดสำคัญของโปรเจคคุณเข้าไป จากนั้น Claude จะเข้าใจบริบทของโปรเจคคุณ และตอบคำถาม Debug หรือ Feature Request ได้แม่นยำกว่ามาก โดยไม่ต้องอธิบาย Background ซ้ำทุกครั้ง
</div>`,
  },
  {
    number: 6,
    slug: 'writing-editing',
    emoji: '✍️',
    title: 'งานเขียนระดับเทพ — รายงาน, อีเมล, คอนเทนต์, บทความ',
    shortTitle: 'งานเขียน & บรรณาธิการ',
    content: `<h2>✍️ งานเขียนระดับเทพ — Claude เป็นบรรณาธิการที่ดีที่สุดของคุณ</h2>

<h3>📝 ทำไม Claude เขียนได้ดีกว่า AI ตัวอื่น?</h3>
<p>Claude ถูกฝึกมาเป็นพิเศษด้านการเขียนที่ <strong>มีเหตุผล ถูกต้อง และ Nuanced</strong> ต่างจาก AI อื่นที่มักเขียนแบบ Generic และ Fluffy Claude จะ:</p>
<ul>
  <li>ยึดถึงความถูกต้องของข้อเท็จจริง (ไม่แต่งสถิติปลอม)</li>
  <li>รักษา Tone ที่สม่ำเสมอตลอดทั้งเนื้อหา</li>
  <li>ปรับระดับภาษาตามกลุ่มเป้าหมายที่บอก</li>
  <li>บอกตรงๆ เมื่อไม่มั่นใจในข้อมูล</li>
</ul>

<h3>📧 การเขียนอีเมลระดับมืออาชีพ</h3>
<p><strong>Prompt Template สำหรับอีเมลยาก:</strong></p>
<pre><code>"ช่วยร่างอีเมลที่:
สถานการณ์: [อธิบาย Context]
ผู้รับ: [ใคร ความสัมพันธ์]
เป้าหมาย: [ต้องการให้เกิดอะไร]
Tone: [ทางการ/กึ่งทางการ/เป็นกันเอง]
ข้อมูลสำคัญที่ต้องใส่: [bullet points]
สิ่งที่ต้องระวัง: [อะไรที่ไม่ควรพูดถึง]
เขียน 2 เวอร์ชั่น: แบบสั้นกระชับ และแบบละเอียด"</code></pre>

<p><strong>ตัวอย่างที่ 1 — อีเมลปฏิเสธงาน (ยังรักษาความสัมพันธ์):</strong></p>
<pre><code>"ร่างอีเมลปฏิเสธการร่วมทุน โดย:
- ผู้รับเป็นเพื่อนเก่าสมัยมหาวิทยาลัย
- เขาขอให้เราร่วมลงทุนในธุรกิจ Food Delivery
- เราไม่สนใจเพราะงบจำกัดและ Market มันแข่งขันสูง
- แต่ไม่อยากให้เพื่อนรู้สึกแย่หรือเสียความสัมพันธ์
Tone: อบอุ่น ซื่อสัตย์ แต่ไม่ทำให้เสียใจ"</code></pre>

<h3>📊 รายงานและ Presentation</h3>
<p><strong>สร้าง Executive Summary จากข้อมูลดิบ:</strong></p>
<pre><code>"ฉันจะให้ข้อมูลดิบจากการประชุม [วางข้อมูล]
ช่วยเขียน Executive Summary ที่:
- เหมาะสำหรับ C-Level ที่มีเวลาอ่านแค่ 2 นาที
- เน้นผลกระทบทางธุรกิจ ไม่ใช่รายละเอียดเทคนิค
- ระบุ Action Items ชัดเจนว่าใครทำอะไรภายในเมื่อไหร่
- ใช้รูปแบบ: Situation → Complication → Resolution → Next Steps"</code></pre>

<h3>📱 คอนเทนต์ Social Media</h3>
<p><strong>Repurpose เนื้อหา 1 ชิ้น → หลายแพลตฟอร์ม:</strong></p>
<pre><code>"ฉันมีบทความยาวเรื่อง [หัวข้อ] [วางเนื้อหา]
ช่วย Repurpose เป็น:
1. Thread Twitter/X (5-7 Tweets)
2. Caption Instagram (สั้น + กระชับ + Hashtag 5 อัน)
3. Post LinkedIn (ทางการขึ้น + เน้น Professional Value)
4. Script TikTok สั้น 60 วินาที (Hook + Body + CTA)
ปรับ Tone ให้เหมาะกับแต่ละแพลตฟอร์ม"</code></pre>

<h3>🎨 Creative Writing</h3>
<p>Claude ยังเก่งด้านงานสร้างสรรค์:</p>
<ul>
  <li><strong>Copywriting:</strong> "เขียน Tagline 10 แบบสำหรับแบรนด์กาแฟ Premium ที่เน้นความ Slow Living"</li>
  <li><strong>Storytelling:</strong> "เขียนเรื่องราว Customer Success Story จากข้อมูลนี้ ให้ฟังดูเป็นธรรมชาติ ไม่ใช่โฆษณา"</li>
  <li><strong>Naming:</strong> "คิดชื่อผลิตภัณฑ์ใหม่ 20 ชื่อ ต้องจำง่าย ออกเสียงง่ายในภาษาไทย และสื่อถึงความ Premium"</li>
</ul>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด: Content Calendar อัตโนมัติ</strong><br/>
ทุกต้นเดือน ส่งหัวข้อกลยุทธ์เดือนนั้นให้ Claude แล้วให้ช่วยวางแผน Content Calendar 30 วัน ระบุว่าแต่ละวันควรโพสต์เรื่องอะไร แพลตฟอร์มไหน และ Hook ที่น่าสนใจคืออะไร จากนั้นค่อยให้ Claude เขียนเนื้อหาแต่ละชิ้นทีละวัน — จาก "ไม่รู้จะโพสต์อะไร" กลายเป็น "มีเนื้อหาเตรียมพร้อม 1 เดือน"
</div>`,
  },
  {
    number: 7,
    slug: 'claude-api',
    emoji: '🔌',
    title: 'Claude API — เชื่อมต่อ Claude กับระบบของคุณ (ไม่ต้องเป็น Dev)',
    shortTitle: 'Claude API',
    content: `<h2>🔌 Claude API — ใช้ Claude ใน App ของตัวเอง</h2>

<h3>🤔 API คืออะไร? ทำไมต้องใช้?</h3>
<p>ถ้าการใช้ claude.ai คือการใช้ AI ผ่านหน้าเว็บ — <strong>API</strong> คือการนำ AI ตัวเดียวกันมาฝังไว้ในระบบ แอป หรือ Workflow ของเราเอง โดยที่ผู้ใช้งานปลายทางอาจไม่รู้ด้วยซ้ำว่ากำลังคุยกับ Claude อยู่</p>

<h3>💡 Use Cases ที่ไม่ต้องเป็น Developer</h3>
<p>ใช้ Claude API ผ่านเครื่องมือ No-Code:</p>
<table>
<tr><th>เครื่องมือ</th><th>ทำอะไรได้</th></tr>
<tr><td><strong>Zapier / Make (Integromat)</strong></td><td>เชื่อมต่อ Claude กับ Gmail, Slack, Google Sheets, Notion</td></tr>
<tr><td><strong>n8n</strong></td><td>สร้าง Automation Workflow ซับซ้อนได้ฟรี (Self-hosted)</td></tr>
<tr><td><strong>Bubble / Glide</strong></td><td>สร้างแอปที่มี Claude เป็น Backend</td></tr>
<tr><td><strong>Notion AI (Custom)</strong></td><td>เพิ่ม Claude เข้า Database Workflow</td></tr>
</table>

<h3>🔧 ตัวอย่าง Automation ที่ทำได้ด้วย API</h3>

<p><strong>1. ตอบอีเมลลูกค้าอัตโนมัติ:</strong></p>
<ul>
  <li>Gmail รับอีเมลใหม่ → Zapier ส่งไปให้ Claude อ่าน → Claude จัดหมวดหมู่และร่างคำตอบ → ส่งกลับมายัง Gmail รอ Approve</li>
</ul>

<p><strong>2. สรุปการประชุมอัตโนมัติ:</strong></p>
<ul>
  <li>บันทึกเสียง → ถอดเสียงด้วย Whisper → Claude สรุปและจัดหมวด Action Items → บันทึกเข้า Notion</li>
</ul>

<p><strong>3. ตรวจสอบเนื้อหาก่อนโพสต์:</strong></p>
<ul>
  <li>ทีมพิมพ์ Draft โพสต์ใน Google Sheet → Claude ตรวจ Tone, ไวยากรณ์, และ Brand Guidelines → แจ้งผลใน Slack</li>
</ul>

<h3>📊 ราคา Claude API (ณ ปัจจุบัน)</h3>
<table>
<tr><th>โมเดล</th><th>ใช้งาน</th><th>ราคา (ต่อ 1M tokens)</th></tr>
<tr><td><strong>Claude Haiku 3.5</strong></td><td>งานง่าย เร็ว ประหยัด</td><td>Input $0.80 / Output $4</td></tr>
<tr><td><strong>Claude Sonnet 4</strong></td><td>สมดุลระหว่างคุณภาพและราคา</td><td>Input $3 / Output $15</td></tr>
<tr><td><strong>Claude Opus 4</strong></td><td>งานซับซ้อนสูง</td><td>Input $15 / Output $75</td></tr>
</table>
<p><em>*1M tokens ≈ นิยายขนาด 750,000 คำ หรือประมาณ 750 หนังสือนิยายทั่วไป สำหรับงานทั่วไปค่าใช้จ่ายถูกมาก</em></p>

<h3>🚀 เริ่มต้นใช้ Claude API (สำหรับ Developer)</h3>
<pre><code>pip install anthropic

import anthropic

client = anthropic.Anthropic(api_key="YOUR_API_KEY")

message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[
        {
            "role": "user", 
            "content": "สรุปอีเมลนี้ในไม่เกิน 3 ประโยค: [เนื้อหาอีเมล]"
        }
    ]
)
print(message.content)</code></pre>

<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">
🚀 <strong>วิธีนำไปต่อยอด:</strong> เริ่มต้นด้วย Make (Integromat) ฟรีแพลน ลองสร้าง Automation อย่างแรกที่เชื่อม Gmail + Claude API ให้สรุปอีเมลยาวๆ อัตโนมัติ ใช้เวลาตั้งค่าประมาณ 30 นาที แต่ประหยัดเวลาได้ทุกวัน เมื่อชำนาญแล้วค่อยขยับไปทำ Workflow ซับซ้อนขึ้น
</div>`,
  },
  {
    number: 8,
    slug: 'killer-workflows',
    emoji: '🔥',
    title: 'Pro Workflows — ต่อยอดงานจริง 4 สถานการณ์',
    shortTitle: 'Pro Workflows จริง',
    content: `<h2>🔥 Pro Workflows — Claude ในงานจริง 4 สถานการณ์</h2>
<img src="/images/claude-ai/workflow.png" alt="Claude Workflows" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.15)" />

<h3>⚙️ Workflow 1: นักธุรกิจ / เจ้าของร้าน</h3>
<p><strong>ปัญหา:</strong> ต้องทำรายงานยอดขาย เขียนอีเมลหาซัพพลายเออร์ วิเคราะห์คู่แข่ง และวางแผนโปรโมชั่น แต่มีเวลาน้อย</p>
<p><strong>วิธีตั้ง Project:</strong></p>
<pre><code>System Prompt: "คุณเป็นผู้ช่วยธุรกิจส่วนตัวของฉัน
ธุรกิจของฉัน: [ชื่อร้าน/ประเภทสินค้า]
กลุ่มลูกค้า: [อธิบาย]
Suppliers หลัก: [ชื่อซัพพลายเออร์]
เป้าหมายปีนี้: [ยอดขาย/เป้าหมาย]"

Project Files: อัปโหลด Price List, ข้อมูลลูกค้า (ลบชื่อจริง), ยอดขายเดิม</code></pre>
<p><strong>ตัวอย่างการใช้งานประจำวัน:</strong></p>
<ul>
  <li>📊 "วิเคราะห์ยอดขายเดือนนี้จาก Excel ที่แนบ บอกว่าสินค้าไหนควร Restock"</li>
  <li>📧 "ร่างอีเมลขอเครดิตเทอม 45 วันจากซัพพลายเออร์ [ชื่อ] โดยอ้างสถิติการสั่งของตลอด 2 ปี"</li>
  <li>📱 "วางแผนโปรโมชั่นเดือนหน้าให้ดึงดูดลูกค้าเก่า ใช้งบไม่เกิน 5,000 บาท"</li>
</ul>
<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">🚀 <strong>ต่อยอด:</strong> ให้ Claude สร้าง Monthly Business Review Template ใน Artifacts แล้ว Save ไว้ใน Project ทุกสิ้นเดือนแค่กรอกตัวเลขจริงลงไป Claude จะวิเคราะห์และเขียน Executive Summary ให้อัตโนมัติ</div>

<h3>🎓 Workflow 2: นักเรียน / นักศึกษา / ผู้ที่อยากพัฒนาตัวเอง</h3>
<p><strong>วิธีใช้ Claude เพื่อเรียนรู้แบบ Accelerated:</strong></p>
<ol>
  <li><strong>Feynman Technique:</strong> "อธิบาย [หัวข้อ] ให้เด็ก ป.6 เข้าใจได้ภายใน 5 ประโยค"</li>
  <li><strong>Socratic Method:</strong> "อย่าให้คำตอบตรงๆ แต่ถามคำถามนำเพื่อให้ฉันคิดหาคำตอบเอง เรื่อง [หัวข้อ]"</li>
  <li><strong>Practice Problems:</strong> "สร้างแบบทดสอบ 10 ข้อเกี่ยวกับ [หัวข้อ] ระดับยากปานกลาง พร้อมเฉลยและอธิบายเหตุผล"</li>
  <li><strong>Essay Review:</strong> "ช่วย Review Essay นี้ในแง่ โครงสร้างเนื้อหา, Argument Strength, และภาษา แนะนำการปรับปรุงเป็นข้อๆ"</li>
</ol>
<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">🚀 <strong>ต่อยอด:</strong> สร้าง Project "Study Assistant" อัปโหลดหนังสือเรียนหรือ Slides เข้าไป แล้วให้ Claude สร้าง Flashcard, Mind Map (Mermaid), และ Practice Exam จากเนื้อหานั้นโดยตรง</div>

<h3>💼 Workflow 3: มนุษย์เงินเดือน / คนทำงานออฟฟิศ</h3>
<p><strong>งานที่ Claude ช่วยได้ทุกวัน:</strong></p>
<table>
<tr><th>งาน</th><th>Prompt ที่ใช้</th></tr>
<tr><td>Meeting Minutes</td><td>"แปลง Note ประชุมนี้เป็น Meeting Minutes ที่มี Action Items, Owner, Deadline"</td></tr>
<tr><td>อีเมลยาก</td><td>"ร่างอีเมลขอขึ้นเงินเดือน โดยไม่ฟังดู Demanding แต่มีน้ำหนักและข้อมูลสนับสนุน"</td></tr>
<tr><td>Presentation</td><td>"ช่วยโครงสร้าง Presentation 15 สไลด์เรื่อง [หัวข้อ] พร้อมบอก Key Message แต่ละสไลด์"</td></tr>
<tr><td>Performance Review</td><td>"ช่วยเขียน Self-Assessment สำหรับปีนี้จาก Achievement เหล่านี้ ให้ฟังดู Confident และ Factual"</td></tr>
</table>
<div class="tip-box" style="background:rgba(217,119,6,0.1);border-color:rgba(217,119,6,0.25);border-left-color:#d97706">🚀 <strong>ต่อยอด:</strong> ทุกเช้าก่อนเริ่มงาน ส่งรายการสิ่งที่ต้องทำวันนี้ให้ Claude ช่วย Prioritize โดยระบุ Deadline และ Impact จะได้ Daily Task List ที่จัดเรียงตาม Urgency/Importance Matrix (Eisenhower Matrix) อัตโนมัติ</div>

<h3>🎨 Workflow 4: Freelancer / Creative</h3>
<p><strong>การใช้ Claude เพิ่มประสิทธิภาพงาน Creative:</strong></p>
<ul>
  <li><strong>Graphic Designer:</strong> "เขียน Creative Brief จาก Ref ที่แนบ ระบุ Mood, Color Palette แนะนำ, Typography Style, และสิ่งที่ลูกค้าต้องการ"</li>
  <li><strong>Photographer:</strong> "เขียน Caption และ Alt Text สำหรับรูป 20 รูปในชุดนี้ ให้ SEO-friendly และเหมาะกับ Instagram"</li>
  <li><strong>Copywriter:</strong> "ให้ A/B Test Copy 3 เวอร์ชั่น สำหรับ Landing Page ที่เน้น Pain Point ต่างกัน"</li>
  <li><strong>Consultant:</strong> "จาก SOW ที่แนบ ช่วยร่าง Project Timeline, Risk Register, และ Proposal Summary สำหรับนำเสนอลูกค้า"</li>
</ul>
<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปหลักของคอร์สทั้งหมด:</strong> Claude ไม่ใช่แค่ Chatbot ที่ตอบคำถาม แต่คือ <strong>"ผู้เชี่ยวชาญส่วนตัว"</strong> ที่คุณสามารถ Configure ให้เข้าใจบริบทงานของคุณ และทำงานร่วมกับคุณได้อย่างต่อเนื่อง ยิ่งคุณให้ Context มาก Claude ยิ่งช่วยได้มาก — เริ่มต้นด้วย <strong>Projects + System Prompt</strong> แล้วทุกอย่างที่เหลือจะง่ายขึ้นเองครับ!
</div>`,
  },
];
