export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🚀',
    title: 'Antigravity คืออะไร?',
    content: `
<h2>🚀 Google Antigravity — AI Coding Assistant สุดล้ำ</h2>

<h3>🤔 Antigravity คืออะไร?</h3>
<p><strong>Google Antigravity</strong> คือ <strong>AI ผู้ช่วยเขียนโค้ด</strong> ที่ทำงานตรงใน VS Code ของคุณ สามารถ:</p>
<ul>
  <li>📝 <strong>เขียนโค้ดให้</strong> — บอกแค่ว่าอยากได้อะไร AI จะเขียนให้ทั้งหมด</li>
  <li>🔍 <strong>ค้นหาและวิเคราะห์โค้ด</strong> — หา bug, อธิบายโค้ด, ปรับปรุงประสิทธิภาพ</li>
  <li>🌐 <strong>ค้นหาข้อมูลจากเว็บ</strong> — หาคำตอบ, อ่าน documentation</li>
  <li>🖼️ <strong>สร้างรูปภาพ</strong> — สร้าง mockup, asset ให้แอป</li>
  <li>⚡ <strong>รันคำสั่ง</strong> — ติดตั้ง library, build, deploy ให้</li>
  <li>🤖 <strong>สร้างทีม AI</strong> — แบ่งงานให้ subagent หลายตัวทำพร้อมกัน</li>
</ul>

<h3>💡 ทำไมต้องเรียนรู้?</h3>
<p>เพราะ Antigravity ไม่ใช่แค่ chatbot ธรรมดา — มันคือ <strong>"เพื่อนร่วมงาน AI"</strong> ที่ทำงานจริงได้ ถ้าใช้เป็น จะช่วยเร่งงานได้ <strong>10-100 เท่า</strong>!</p>

<h3>📋 สิ่งที่จะเรียนในคอร์สนี้</h3>
<table>
  <tr><th>บท</th><th>หัวข้อ</th><th>เรียนรู้อะไร</th></tr>
  <tr><td>1</td><td>Slash Commands พื้นฐาน</td><td>/goal, /schedule, /browser</td></tr>
  <tr><td>2</td><td>Slash Commands ขั้นสูง</td><td>/grill-me, /teamwork-preview, /learn</td></tr>
  <tr><td>3</td><td>การจัดการไฟล์</td><td>อ่าน, เขียน, แก้ไขไฟล์</td></tr>
  <tr><td>4</td><td>ค้นหาและวิจัย</td><td>ค้นเว็บ, อ่าน URL, grep</td></tr>
  <tr><td>5</td><td>รันคำสั่งและ Deploy</td><td>Terminal, build, deploy</td></tr>
  <tr><td>6</td><td>Subagents — ทีม AI</td><td>แบ่งงานให้ AI หลายตัว</td></tr>
  <tr><td>7</td><td>สร้างรูปภาพ</td><td>generate_image, mockup</td></tr>
  <tr><td>8</td><td>เทคนิคขั้นเทพ</td><td>workflow, automation, tips</td></tr>
</table>

<div class="tip-box">💡 <strong>ใช้ได้ใน VS Code</strong> — ติดตั้ง Gemini extension แล้วเปิดใช้ Antigravity ได้เลย ฟรี!</div>
`,
  },
  {
    number: 1,
    slug: 'slash-commands-basic',
    emoji: '⚡',
    title: 'Slash Commands พื้นฐาน',
    content: `
<h2>⚡ Slash Commands พื้นฐาน — คำสั่งลัดที่ต้องรู้</h2>

<img src="/images/antigravity/slash-commands.png" alt="Slash Commands" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>Slash Commands</strong> คือ <strong>"คำสั่งลัด"</strong> ที่พิมพ์ใน chat เพื่อเปิดใช้โหมดพิเศษ เริ่มด้วยเครื่องหมาย <code>/</code> เสมอ</p>

<h3>🎯 /goal — สั่งให้ทำงานยาวๆ ไม่หยุดจนเสร็จ</h3>

<h4>ใช้ทำอะไร?</h4>
<p>เหมือนสั่งงานพนักงาน "ทำให้เสร็จนะ ไม่ต้องมาถามทุก 5 นาที" — AI จะทำงานต่อเนื่องจนเสร็จโดยไม่หยุดถามเรา</p>

<h4>เหมาะกับอะไร?</h4>
<ul>
  <li>✅ งานใหญ่ที่ต้องใช้เวลา เช่น refactor โค้ดทั้งโปรเจค</li>
  <li>✅ งานที่อยากให้ทำข้ามคืน เช่น สร้างเว็บทั้งเว็บ</li>
  <li>✅ งานที่มีหลายขั้นตอน เช่น สร้าง API + Frontend + Deploy</li>
</ul>

<h4>ตัวอย่างจริง</h4>
<pre><code>/goal สร้างเว็บ Portfolio ให้ผม
มีหน้า Home, About, Projects, Contact
ใช้ Next.js + TailwindCSS
Deploy ขึ้น Vercel ให้ด้วย</code></pre>

<pre><code>/goal Refactor โค้ดในโฟลเดอร์ src/ ทั้งหมด
- เปลี่ยนจาก JavaScript เป็น TypeScript
- เพิ่ม type ให้ทุก function
- รัน test ให้ผ่านทุกตัว</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> ยิ่งบอกรายละเอียดเยอะ ผลลัพธ์ยิ่งตรงใจ! บอกทั้ง "อยากได้อะไร" + "ใช้เครื่องมืออะไร" + "เงื่อนไขอะไร"</div>

<hr>

<h3>⏰ /schedule — ตั้งเวลาให้ AI ทำงานอัตโนมัติ</h3>

<h4>ใช้ทำอะไร?</h4>
<p>เหมือนตั้ง <strong>นาฬิกาปลุก</strong> ให้ AI — ถึงเวลาที่กำหนด AI จะตื่นขึ้นมาทำงานตามที่สั่งไว้ ทำได้ทั้ง <strong>ครั้งเดียว</strong> และ <strong>ทำซ้ำ</strong></p>

<h4>ตัวอย่างจริง</h4>
<pre><code>/schedule ทุก 5 นาที เช็คสถานะ deployment
แล้วรายงานให้ผมว่าสำเร็จหรือยัง</code></pre>

<pre><code>/schedule อีก 30 นาที เตือนผมว่า
"ไปดู pull request ที่สร้างไว้"</code></pre>

<pre><code>/schedule ทุกวันจันทร์ เวลา 9:00
ดึงข้อมูลยอดขายจาก Google Sheets
แล้วสรุปเป็นรายงานให้ผม</code></pre>

<h4>แบบ One-shot (ทำครั้งเดียว)</h4>
<ul>
  <li>⏱️ "อีก 10 นาที เช็คว่า build เสร็จหรือยัง"</li>
  <li>⏱️ "อีก 1 ชั่วโมง เตือนผมว่าต้อง review code"</li>
</ul>

<h4>แบบ Recurring (ทำซ้ำ)</h4>
<ul>
  <li>🔄 "ทุก 5 นาที ดู log ว่ามี error ไหม"</li>
  <li>🔄 "ทุกวัน ตอน 8 โมง ดึงข้อมูลจาก API"</li>
</ul>

<div class="warning-box">⚠️ <strong>ข้อจำกัด:</strong> Timer สูงสุด 900 วินาที (15 นาที) สำหรับแบบ one-shot แต่ cron job สามารถตั้งให้ทำซ้ำได้ไม่จำกัด</div>

<hr>

<h3>🌐 /browser — ท่องเว็บด้วย AI</h3>

<h4>ใช้ทำอะไร?</h4>
<p>สั่งให้ AI <strong>เปิดเว็บไซต์</strong> ดูข้อมูล อ่านเนื้อหา หรือทดสอบเว็บแอปของเราได้จริง!</p>

<h4>ตัวอย่างจริง</h4>
<pre><code>/browser เข้าไปดู https://my-website.com
แล้วบอกผมว่ามีอะไรผิดปกติไหม
หน้าตาสวยไหม มีอะไรต้องแก้ไขบ้าง</code></pre>

<pre><code>/browser ไปหาข้อมูลเรื่อง Next.js 15
ว่ามีฟีเจอร์ใหม่อะไรบ้าง
สรุปมาให้ 5 ข้อ</code></pre>

<pre><code>/browser เข้าไปอ่าน documentation ของ Stripe API
แล้วสรุปวิธีเชื่อมต่อ payment gateway</code></pre>

<div class="tip-box">💡 <strong>ใช้เมื่อ:</strong> ต้องการดูเว็บจริงๆ (เช่น ทดสอบ UI, ดูหน้าที่ต้อง login) ถ้าแค่อ่านเนื้อหา ไม่ต้องใช้ /browser ก็ได้ AI อ่าน URL ได้เลย</div>
`,
  },
  {
    number: 2,
    slug: 'slash-commands-advanced',
    emoji: '🔮',
    title: 'Slash Commands ขั้นสูง',
    content: `
<h2>🔮 Slash Commands ขั้นสูง — ปลดล็อกพลังเต็มขั้น</h2>

<img src="/images/antigravity/teamwork.png" alt="Advanced Commands & Teamwork" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🔥 /grill-me — AI สัมภาษณ์เราเพื่อวางแผน</h3>

<h4>ใช้ทำอะไร?</h4>
<p>เหมือนมี <strong>"ที่ปรึกษา"</strong> ที่ถามคำถามเราทีละข้อ เพื่อทำความเข้าใจว่าเราต้องการอะไรจริงๆ ก่อนลงมือทำ</p>

<h4>เหมาะกับอะไร?</h4>
<ul>
  <li>✅ โปรเจคที่ยังไม่ชัดว่าอยากได้อะไร</li>
  <li>✅ ตัดสินใจเลือกเทคโนโลยี</li>
  <li>✅ ออกแบบ Architecture</li>
</ul>

<h4>ตัวอย่างจริง</h4>
<pre><code>/grill-me ผมอยากสร้างแอปขายของออนไลน์
ช่วยถามคำถามผมเพื่อออกแบบระบบ</code></pre>

<p>AI จะถามทีละข้อ เช่น:</p>
<ul>
  <li>"ขายสินค้าประเภทอะไร? กี่รายการ?"</li>
  <li>"ต้องการระบบชำระเงินไหม? แบบไหน?"</li>
  <li>"ผู้ใช้ต้อง login ไหม?"</li>
  <li>"ต้องการ admin dashboard ไหม?"</li>
</ul>
<p>หลังถามเสร็จ AI จะสรุปเป็น <strong>แผนการทำงาน</strong> ให้อนุมัติก่อนลงมือทำ!</p>

<div class="tip-box">💡 <strong>ดีกว่าสั่งตรง:</strong> แทนที่จะบอกว่า "สร้างแอปขายของ" (กว้างเกินไป) /grill-me จะช่วยขุดรายละเอียดให้ครบ → ผลลัพธ์ตรงใจกว่ามาก!</div>

<hr>

<h3>👥 /teamwork-preview — ทีม AI ทำงานพร้อมกัน</h3>

<h4>ใช้ทำอะไร?</h4>
<p>เหมือนมี <strong>"ทีมโปรแกรมเมอร์ AI 3-5 คน"</strong> ที่แบ่งงานกันทำพร้อมกัน คนหนึ่งทำ Frontend คนหนึ่งทำ Backend คนหนึ่งเขียน Test — จบงานเร็วกว่าทำทีละคน!</p>

<h4>เหมาะกับอะไร?</h4>
<ul>
  <li>✅ โปรเจคใหญ่ที่แบ่งเป็นส่วนๆ ได้</li>
  <li>✅ งานที่มีหลาย component แยกกันชัดเจน</li>
  <li>✅ เมื่อต้องการความเร็ว ทำหลายอย่างพร้อมกัน</li>
</ul>

<h4>ตัวอย่างจริง</h4>
<pre><code>/teamwork-preview สร้างระบบ Blog ให้ผม
- Frontend: React + Tailwind
- Backend: Express API
- Database: PostgreSQL
- มีระบบ Login</code></pre>

<p>AI จะสร้างทีมอัตโนมัติ เช่น:</p>
<table>
  <tr><th>Agent</th><th>หน้าที่</th><th>ทำอะไร</th></tr>
  <tr><td>🎨 Frontend Dev</td><td>สร้างหน้าเว็บ</td><td>React components, UI design</td></tr>
  <tr><td>⚙️ Backend Dev</td><td>สร้าง API</td><td>Express routes, auth logic</td></tr>
  <tr><td>🗄️ DB Engineer</td><td>ออกแบบ DB</td><td>Schema, migrations</td></tr>
  <tr><td>🧪 QA Tester</td><td>เขียน test</td><td>Unit tests, integration tests</td></tr>
</table>

<div class="warning-box">⚠️ <strong>หมายเหตุ:</strong> ฟีเจอร์นี้เป็น preview อยู่ ทำงานได้ดีกับโปรเจคที่แบ่งส่วนชัดเจน</div>

<hr>

<h3>📚 /learn — สอน AI ให้จำความชอบของเรา</h3>

<h4>ใช้ทำอะไร?</h4>
<p>สอนให้ AI <strong>จดจำ</strong> ว่าเราชอบทำงานแบบไหน ใช้ style อะไร ไม่ต้องบอกซ้ำทุกครั้ง!</p>

<h4>ตัวอย่างจริง</h4>
<pre><code>/learn ผมชอบเขียน TypeScript เสมอ
ใช้ arrow functions
ตั้งชื่อตัวแปรเป็นภาษาอังกฤษ
ใส่ JSDoc comment ทุก function</code></pre>

<pre><code>/learn เวลาสร้างเว็บให้ผม
ใช้ Next.js + Tailwind เสมอ
ใช้ dark mode เป็นค่าเริ่มต้น
ใช้ภาษาไทยในหน้าเว็บ</code></pre>

<p>หลังจากสอนแล้ว ครั้งต่อไปที่สั่งให้เขียนโค้ด AI จะทำตามที่เราสอนไว้อัตโนมัติ!</p>

<div class="tip-box">💡 <strong>ใช้ตอนไหน?</strong> ใช้ทุกครั้งที่เราต้องแก้ไข AI ซ้ำๆ เรื่องเดิม เช่น "บอกแล้วว่าใช้ TypeScript!" → สอนมันครั้งเดียวจบ!</div>
`,
  },
  {
    number: 3,
    slug: 'file-operations',
    emoji: '📁',
    title: 'การจัดการไฟล์',
    content: `
<h2>📁 การจัดการไฟล์ — อ่าน เขียน แก้ไข</h2>

<img src="/images/antigravity/file-ops.png" alt="File Operations" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>Antigravity สามารถทำงานกับไฟล์ในโปรเจคของเราได้โดยตรง ไม่ต้องเปิดแก้เอง!</p>

<h3>👀 อ่านไฟล์</h3>
<p>สั่งให้ AI อ่านไฟล์ เข้าใจโค้ด แล้วอธิบายให้</p>
<pre><code>อ่านไฟล์ src/app.js ให้หน่อย
แล้วอธิบายว่าโค้ดนี้ทำอะไร</code></pre>

<pre><code>ดูไฟล์ package.json แล้วบอกว่า
ใช้ library อะไรบ้าง version อะไร</code></pre>

<h3>✏️ สร้างไฟล์ใหม่</h3>
<pre><code>สร้างไฟล์ src/utils/helper.js ให้หน่อย
มี function formatDate() ที่แปลงวันที่เป็นภาษาไทย
กับ function formatMoney() ที่ใส่เครื่องหมายจุลภาค</code></pre>

<h3>🔧 แก้ไขไฟล์</h3>
<pre><code>แก้ไฟล์ src/api/users.js
เพิ่ม endpoint POST /users/register
รับ email, password, name
hash password ด้วย bcrypt ก่อนบันทึก</code></pre>

<h3>🔍 ค้นหาในโค้ด</h3>
<pre><code>หาทุกที่ในโปรเจคที่ใช้คำว่า "console.log"
แล้วลบออกให้ทุกอัน</code></pre>

<pre><code>ค้นหาทุกไฟล์ที่ import "axios"
แล้วเปลี่ยนเป็นใช้ fetch แทน</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> AI สามารถแก้ไฟล์หลายไฟล์พร้อมกันได้! เช่น "เปลี่ยนสี theme ทั้งเว็บจากสีน้ำเงินเป็นสีม่วง" AI จะหาทุกไฟล์ที่เกี่ยวข้องแล้วแก้ให้ทั้งหมด</div>
`,
  },
  {
    number: 4,
    slug: 'search-research',
    emoji: '🔍',
    title: 'ค้นหาและวิจัย',
    content: `
<h2>🔍 ค้นหาและวิจัย — ให้ AI หาข้อมูลให้</h2>

<img src="/images/antigravity/search.png" alt="Search & Research" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🌐 ค้นหาจากเว็บ</h3>
<p>AI สามารถค้นหา Google ให้เราแล้วสรุปผลลัพธ์ได้!</p>

<pre><code>หาข้อมูลเรื่อง React Server Components
ว่าคืออะไร ใช้ยังไง มีข้อดีข้อเสียอะไร
สรุปเป็นภาษาไทยให้หน่อย</code></pre>

<pre><code>เปรียบเทียบ Prisma vs Drizzle ORM
ว่าตัวไหนเหมาะกับโปรเจคอะไร
ทำเป็นตารางให้</code></pre>

<h3>📖 อ่านเว็บไซต์</h3>
<p>ส่ง URL ให้ AI อ่านเนื้อหาแล้วสรุปได้</p>

<pre><code>อ่านหน้านี้ให้หน่อย
https://nextjs.org/blog/next-15
แล้วสรุปว่ามีอะไรใหม่บ้าง</code></pre>

<pre><code>อ่าน README ของ repo นี้
https://github.com/vercel/next.js
แล้วบอกวิธี setup โปรเจค</code></pre>

<h3>🔎 ค้นหาในโปรเจค (grep)</h3>
<p>AI ใช้ ripgrep ค้นหาโค้ดในโปรเจคได้เร็วมาก!</p>

<pre><code>หาทุกที่ที่เรียก API endpoint "/api/users"
ในโปรเจคทั้งหมด</code></pre>

<pre><code>หาทุก function ที่มีคำว่า "deprecated"
ในโฟลเดอร์ src/</code></pre>

<h3>📊 วิเคราะห์โปรเจค</h3>
<pre><code>วิเคราะห์โปรเจคนี้ให้หน่อย
- ใช้ framework อะไร
- มีกี่ไฟล์ กี่ component
- มีอะไรที่ควรปรับปรุง</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> AI มี subagent ชื่อ "research" ที่เชี่ยวชาญการค้นหาโดยเฉพาะ ถ้าเป็นงานค้นหาซับซ้อน AI จะส่งต่อให้ research agent ทำงานให้อัตโนมัติ!</div>
`,
  },
  {
    number: 5,
    slug: 'commands-deploy',
    emoji: '🖥️',
    title: 'รันคำสั่งและ Deploy',
    content: `
<h2>🖥️ รันคำสั่งและ Deploy — สั่ง AI ทำงานใน Terminal</h2>

<img src="/images/antigravity/deploy.png" alt="Deploy & Commands" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>Antigravity สามารถรันคำสั่ง Terminal ให้เราได้เลย! ไม่ต้องเปิด Terminal เอง</p>

<h3>📦 ติดตั้ง Library</h3>
<pre><code>ติดตั้ง express, cors, dotenv ให้หน่อย</code></pre>
<p>AI จะรัน <code>npm install express cors dotenv</code> ให้อัตโนมัติ</p>

<h3>🔨 Build โปรเจค</h3>
<pre><code>build โปรเจคให้หน่อย ดูว่ามี error ไหม
ถ้ามี error ช่วยแก้ให้ด้วย</code></pre>
<p>AI จะรัน build → ดู error → แก้โค้ด → build ซ้ำจนผ่าน!</p>

<h3>🚀 Deploy ขึ้นเว็บ</h3>
<pre><code>deploy โปรเจคนี้ขึ้น Vercel ให้หน่อย</code></pre>

<pre><code>deploy ขึ้น Vercel production
แล้วตั้ง alias เป็น my-app.vercel.app</code></pre>

<h3>🧪 รัน Test</h3>
<pre><code>รัน test ทั้งหมดให้หน่อย
ถ้ามีตัวไหนไม่ผ่าน ช่วยแก้โค้ดให้ด้วย</code></pre>

<h3>🐳 Docker</h3>
<pre><code>สร้าง Dockerfile + docker-compose.yml ให้หน่อย
สำหรับ Next.js app + PostgreSQL
แล้วรัน docker-compose up ให้ด้วย</code></pre>

<div class="warning-box">⚠️ <strong>ความปลอดภัย:</strong> ทุกคำสั่งที่ AI จะรัน จะถามให้เราอนุมัติก่อนเสมอ! ไม่มีการรันอะไรลับหลัง</div>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> ถ้าคำสั่งใช้เวลานาน (เช่น build) AI จะรันเป็น background task แล้วทำงานอื่นต่อได้เลย ไม่ต้องรอ!</div>
`,
  },
  {
    number: 6,
    slug: 'subagents',
    emoji: '🤖',
    title: 'Subagents — ทีม AI',
    content: `
<h2>🤖 Subagents — สร้างทีม AI ทำงานพร้อมกัน</h2>

<img src="/images/antigravity/teamwork.png" alt="AI Subagents Team" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🤔 Subagent คืออะไร?</h3>
<p>เหมือนหัวหน้าทีม (AI หลัก) <strong>มอบหมายงาน</strong> ให้ลูกน้อง (Subagent) ไปทำ แล้วรายงานกลับมา — ทำให้จบงานเร็วขึ้นมาก!</p>

<h3>📋 Subagent ที่มีให้ใช้</h3>
<table>
  <tr><th>ชื่อ</th><th>ทำอะไร</th><th>ใช้เมื่อ</th></tr>
  <tr><td><strong>research</strong></td><td>ค้นหาข้อมูล อ่านไฟล์ วิจัย</td><td>อยากให้ไปค้นข้อมูลขณะที่เราทำงานอื่น</td></tr>
  <tr><td><strong>self</strong></td><td>ทำงานเหมือน AI หลักทุกอย่าง</td><td>อยากแบ่งงานหลายส่วนทำพร้อมกัน</td></tr>
</table>

<h3>ตัวอย่างการใช้งานจริง</h3>

<h4>1. ค้นหาข้อมูลขณะเขียนโค้ด</h4>
<pre><code>ช่วยทำ 2 อย่างพร้อมกัน:
1. ค้นหาวิธีเชื่อมต่อ Stripe payment
2. ระหว่างนั้นสร้างหน้า checkout UI ไปก่อน</code></pre>
<p>AI จะส่ง research agent ไปค้นหา Stripe ขณะที่ตัวเองสร้าง UI!</p>

<h4>2. แก้หลายไฟล์พร้อมกัน</h4>
<pre><code>เพิ่ม dark mode ให้เว็บทั้งเว็บ
ทำหลายส่วนพร้อมกันได้เลย:
- แก้ CSS variables
- แก้ component styles
- เพิ่ม toggle button</code></pre>

<h4>3. ทำ Research ใหญ่ๆ</h4>
<pre><code>ค้นหาข้อมูลเปรียบเทียบ:
- Next.js vs Nuxt vs SvelteKit
- ข้อดีข้อเสียแต่ละตัว
- เหมาะกับโปรเจคแบบไหน
สรุปเป็นตารางให้ด้วย</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> ไม่ต้องสั่ง subagent เอง! แค่บอกว่าอยากทำอะไร AI จะตัดสินใจเองว่าควรใช้ subagent ไหม และส่งงานให้อัตโนมัติ</div>
`,
  },
  {
    number: 7,
    slug: 'image-generation',
    emoji: '🖼️',
    title: 'สร้างรูปภาพ',
    content: `
<h2>🖼️ สร้างรูปภาพ — ให้ AI ออกแบบให้</h2>

<img src="/images/antigravity/image-gen.png" alt="AI Image Generation" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>Antigravity สร้างรูปภาพได้! ใช้ทำ mockup, icon, banner หรือ asset สำหรับเว็บ/แอป</p>

<h3>🎨 ตัวอย่างการใช้งาน</h3>

<h4>1. สร้าง UI Mockup</h4>
<pre><code>สร้าง mockup หน้า login
มีช่อง email, password
ปุ่ม Sign In สีน้ำเงิน
มีลิงก์ "ลืมรหัสผ่าน" ด้านล่าง
สไตล์ modern dark theme</code></pre>

<h4>2. สร้าง Banner / Hero Image</h4>
<pre><code>สร้างรูป banner สำหรับคอร์ส Python
สไตล์ gradient สีน้ำเงิน-ม่วง
มีไอคอนงู Python ตรงกลาง
ขนาด 1200x630 pixels</code></pre>

<h4>3. สร้าง Logo / Icon</h4>
<pre><code>สร้างไอคอนสำหรับแอป Todo List
สไตล์ flat design
สีเขียวพาสเทล
พื้นหลังโปร่งใส</code></pre>

<h4>4. แก้ไขรูปที่มีอยู่</h4>
<pre><code>แก้ไขรูปนี้ให้
- เปลี่ยนพื้นหลังเป็นสีขาว
- เพิ่มข้อความ "Coming Soon"
- ใส่กรอบมุมมน</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> รูปที่สร้างจะถูก save เป็น artifact สามารถนำไปใช้ในโปรเจคได้เลย! บอก AI ว่า "เอารูปนี้ไปใส่ในโปรเจค" ก็ได้</div>

<div class="warning-box">⚠️ <strong>ข้อจำกัด:</strong> ไม่สามารถสร้างรูปคนจริง, โลโก้แบรนด์จริง, หรือเนื้อหาที่ไม่เหมาะสมได้</div>
`,
  },
  {
    number: 8,
    slug: 'pro-tips',
    emoji: '💎',
    title: 'เทคนิคขั้นเทพ',
    content: `
<h2>💎 เทคนิคขั้นเทพ — ใช้ Antigravity อย่างมือโปร</h2>

<img src="/images/antigravity/pro-tips.png" alt="Pro Tips" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<h3>🏗️ 1. สร้างเว็บทั้งเว็บด้วยคำสั่งเดียว</h3>
<pre><code>/goal สร้างเว็บขายคอร์สออนไลน์
- หน้าแรก: แสดงคอร์สทั้งหมด
- หน้ารายละเอียดคอร์ส
- ระบบตะกร้าสินค้า
- หน้าชำระเงินผ่าน PromptPay QR
- ใช้ Next.js + CSS Modules
- Deploy ขึ้น Vercel
- ใช้ภาษาไทยทั้งหมด</code></pre>

<h3>🔄 2. Refactor โค้ดทั้งโปรเจค</h3>
<pre><code>/goal ปรับปรุงโค้ดทั้งโปรเจค
1. เปลี่ยนจาก var เป็น const/let
2. เปลี่ยน function ธรรมดาเป็น arrow function
3. เพิ่ม error handling ทุกที่ที่เรียก API
4. เพิ่ม comment อธิบายทุก function
5. รัน test ให้ผ่านทุกตัว</code></pre>

<h3>📊 3. วิเคราะห์และสรุปข้อมูล</h3>
<pre><code>อ่านไฟล์ sales_data.csv
แล้ววิเคราะห์ให้หน่อย:
- ยอดขายรวมเท่าไหร่
- สินค้าไหนขายดีที่สุด
- เทรนด์เพิ่มขึ้นหรือลดลง
สรุปเป็นตารางและกราฟ</code></pre>

<h3>🧪 4. Debug อัตโนมัติ</h3>
<pre><code>เว็บ error ตรงหน้า checkout
ช่วยดู console error แล้วแก้ให้หน่อย
test ให้ด้วยว่าใช้ได้แล้ว</code></pre>

<h3>📝 5. สร้าง Documentation อัตโนมัติ</h3>
<pre><code>สร้าง README.md ให้โปรเจคนี้
ครอบคลุม:
- วิธีติดตั้ง
- วิธีรัน development
- โครงสร้างโฟลเดอร์
- API endpoints ทั้งหมด
- วิธี deploy</code></pre>

<h3>🎯 6. Prompt ที่ดี vs ไม่ดี</h3>
<table>
  <tr><th>❌ ไม่ดี (กว้างเกินไป)</th><th>✅ ดี (ชัดเจน)</th></tr>
  <tr><td>"สร้างเว็บให้"</td><td>"สร้างเว็บ Portfolio ด้วย Next.js มี 4 หน้า ใช้ dark theme"</td></tr>
  <tr><td>"แก้ bug"</td><td>"หน้า login กด submit แล้ว error 500 ช่วยดู API route ให้"</td></tr>
  <tr><td>"เขียนโค้ด"</td><td>"สร้าง REST API endpoint POST /api/users รับ email, name"</td></tr>
  <tr><td>"ปรับปรุงโค้ด"</td><td>"เพิ่ม TypeScript types ให้ไฟล์ src/utils.js ทุก function"</td></tr>
</table>

<div class="tip-box">💡 <strong>กฎทอง 3 ข้อ:</strong>
<ol>
  <li><strong>บอกเป้าหมาย</strong> — อยากได้อะไร (เว็บขายของ, API, Component)</li>
  <li><strong>บอกเทคโนโลยี</strong> — ใช้อะไร (Next.js, Python, Docker)</li>
  <li><strong>บอกรายละเอียด</strong> — มีอะไรบ้าง (หน้าไหน, ฟีเจอร์อะไร, สีอะไร)</li>
</ol>
</div>

<h3>🎉 สรุป Slash Commands ทั้งหมด</h3>
<table>
  <tr><th>คำสั่ง</th><th>ใช้ทำอะไร</th><th>ตัวอย่าง</th></tr>
  <tr><td><strong>/goal</strong></td><td>งานใหญ่ ทำจนเสร็จ</td><td>สร้างเว็บทั้งเว็บ</td></tr>
  <tr><td><strong>/schedule</strong></td><td>ตั้งเวลาทำงาน</td><td>เช็คสถานะทุก 5 นาที</td></tr>
  <tr><td><strong>/browser</strong></td><td>เปิดเว็บ ดูข้อมูล</td><td>ทดสอบหน้าเว็บของเรา</td></tr>
  <tr><td><strong>/grill-me</strong></td><td>สัมภาษณ์เพื่อวางแผน</td><td>ออกแบบระบบใหม่</td></tr>
  <tr><td><strong>/teamwork-preview</strong></td><td>ทีม AI ทำพร้อมกัน</td><td>โปรเจคใหญ่หลายส่วน</td></tr>
  <tr><td><strong>/learn</strong></td><td>สอน AI จำ preference</td><td>ใช้ TypeScript เสมอ</td></tr>
</table>

<div class="tip-box">🚀 <strong>ลองเลย!</strong> เปิด VS Code → เปิด Gemini Chat → พิมพ์ /goal แล้วตามด้วยสิ่งที่อยากทำ → ดู AI ทำงานให้!</div>
`,
  },
  {
    number: 9,
    slug: 'ai-models',
    emoji: '🧠',
    title: 'เลือก Model ให้ถูก — ประหยัดเวลา ประหยัดเงิน',
    shortTitle: 'เลือก AI Model',
    content: `
<h2>🧠 AI Models — ต่างกันยังไง เลือกใช้ตัวไหน?</h2>

<img src="/images/antigravity/models.png" alt="AI Models Comparison" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ตอนนี้มี AI หลายตัวให้เลือกใช้ใน Antigravity — แต่ละตัว <strong>เก่งคนละเรื่อง ราคาต่างกัน</strong> การเลือกถูกตัวช่วยประหยัดเวลาและค่าใช้จ่ายได้มากครับ</p>

<h3>🤖 Claude (Anthropic) — ตัวหลักของ Antigravity</h3>

<table>
  <tr><th>รุ่น</th><th>ความสามารถ</th><th>ความเร็ว</th><th>ใช้เมื่อไหร่</th></tr>
  <tr><td><strong>Claude Sonnet 4.0</strong> ⭐</td><td>ดีมาก</td><td>⚡ เร็ว</td><td>งานทั่วไป 90% — แนะนำให้ใช้ตัวนี้</td></tr>
  <tr><td><strong>Claude Opus 4.0</strong></td><td>ดีที่สุด</td><td>🐢 ช้ากว่า</td><td>งานซับซ้อนมาก, วิเคราะห์ Architecture</td></tr>
  <tr><td><strong>Claude Haiku</strong></td><td>พอใช้</td><td>⚡⚡ เร็วมาก</td><td>งานง่ายๆ ต้องการความเร็ว</td></tr>
</table>

<div class="tip-box">💡 <strong>Sonnet ทำอะไรได้ทุกอย่างที่ Opus ทำ</strong> แต่ราคาถูกกว่าและเร็วกว่า — สำหรับงานเว็บ, เขียนโค้ด, แก้ bug ใช้ Sonnet เพียงพอแล้ว!</div>

<h3>🔮 Thinking Mode — คิดลึกก่อนตอบ</h3>

<p>สังเกตว่ามี <strong>"(Thinking)"</strong> ต่อท้ายบางรุ่น หมายความว่า AI จะ <strong>คิดก่อนตอบ</strong> เหมือนคนที่นั่งคิดก่อนจะพูด ผลลัพธ์แม่นยำกว่า แต่ช้ากว่า</p>

<table>
  <tr><th></th><th>ปกติ</th><th>Thinking Mode</th></tr>
  <tr><td><strong>เปรียบเทียบ</strong></td><td>ตอบสดๆ จากความรู้</td><td>นั่งคิดก่อน แล้วตอบ</td></tr>
  <tr><td><strong>ความเร็ว</strong></td><td>⚡ เร็ว</td><td>🐢 ช้ากว่า 2-5x</td></tr>
  <tr><td><strong>ความแม่นยำ</strong></td><td>ดี</td><td>ดีกว่ามาก</td></tr>
  <tr><td><strong>ใช้เมื่อไหร่</strong></td><td>งานทั่วไป</td><td>โจทย์คณิต, Logic ซับซ้อน, แก้ bug ยาก</td></tr>
</table>

<h3>🌐 เปรียบเทียบ AI ทั้งหมด</h3>

<table>
  <tr><th>AI</th><th>จุดเด่น</th><th>ใช้เมื่อไหร่</th></tr>
  <tr><td>🟣 <strong>Claude (Antigravity)</strong></td><td>เขียนโค้ดเก่งมาก, จัดการไฟล์ได้, รันคำสั่งได้</td><td>งาน Dev, เขียน Code, สร้างเว็บ</td></tr>
  <tr><td>🟢 <strong>ChatGPT (GPT-4o)</strong></td><td>ความรู้กว้าง, สร้างรูปด้วย DALL-E ได้</td><td>คำถามทั่วไป, สร้างรูป, brainstorm</td></tr>
  <tr><td>🔵 <strong>Gemini</strong></td><td>เชื่อมกับ Google, อ่าน YouTube/Drive/Docs</td><td>งานที่ต้องใช้ Google ecosystem</td></tr>
  <tr><td>🟡 <strong>Perplexity</strong></td><td>ค้นหาเว็บได้แบบ real-time พร้อม source</td><td>ต้องการข้อมูลล่าสุด, ข่าว, research</td></tr>
</table>

<h3>💡 สูตรเลือก Model ง่ายๆ</h3>

<div class="tip-box">
🎯 <strong>กฎง่ายๆ ในการเลือก:</strong>
<ul>
  <li>🔨 <strong>เขียนโค้ด / สร้างเว็บ / แก้ bug</strong> → ใช้ Claude Sonnet (Antigravity)</li>
  <li>🧮 <strong>โจทย์คณิต / Logic ยาก / วางแผนซับซ้อน</strong> → เปิด Thinking Mode</li>
  <li>🔍 <strong>ต้องการข้อมูลล่าสุด / ข่าว</strong> → ใช้ Perplexity หรือ Gemini</li>
  <li>🎨 <strong>สร้างรูปภาพ</strong> → ใช้ ChatGPT (DALL-E) หรือ Midjourney</li>
  <li>📄 <strong>งานใน Google Workspace</strong> → ใช้ Gemini</li>
</ul>
</div>

<div class="warning-box">⚠️ <strong>ข้อควรระวัง:</strong> อย่าเชื่อ AI 100%! ทุก Model สามารถ "hallucinate" (แต่งข้อมูลขึ้นมา) ได้ โดยเฉพาะเรื่องที่เปลี่ยนแปลงเร็ว เช่น ราคา, กฎหมาย, ข่าวล่าสุด — ตรวจสอบจากแหล่งจริงเสมอ!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Claude Sonnet = ตัวหลัก เร็ว ดี ประหยัด เหมาะกับงาน 90%</li>
  <li>✅ Claude Opus = ใช้เมื่องานซับซ้อนมากจริงๆ เท่านั้น</li>
  <li>✅ Thinking Mode = เปิดเมื่อต้องการความแม่นยำสูง แลกกับความช้า</li>
  <li>✅ แต่ละ AI เก่งคนละเรื่อง ใช้ให้ถูกตัวประหยัดเวลาได้มาก</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองใช้ Claude Sonnet กับงานทั่วไป แล้วลองเปิด Thinking Mode กับโจทย์ยาก สังเกตความแตกต่าง!
</div>
`,
  },
  {
    number: 10,
    slug: 'ux-ui-design',
    emoji: '🎨',
    title: 'ออกแบบ UX/UI ด้วย AI — สวยได้ไม่ต้องเป็น Designer',
    shortTitle: 'ออกแบบ UX/UI',
    content: `
<h2>🎨 ออกแบบ UX/UI ด้วย AI — สวยได้ไม่ต้องเป็น Designer</h2>

<img src="/images/antigravity/ux-ui.png" alt="UX UI Design with AI" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ไม่ต้องเรียน Photoshop หรือ Figma ก็ได้! AI ช่วยออกแบบ UI สวยๆ ให้ได้ตั้งแต่ wireframe ยัน CSS พร้อมใช้จริง</p>

<h3>🖼️ สิ่งที่ AI ช่วยออกแบบได้</h3>

<table>
  <tr><th>งาน</th><th>ตัวอย่าง Prompt</th></tr>
  <tr><td>📐 Wireframe</td><td>"ออกแบบ layout หน้าแรกเว็บขายคอร์สออนไลน์ บอก section ที่ควรมี"</td></tr>
  <tr><td>🎨 Color Palette</td><td>"แนะนำ color palette สำหรับแบรนด์ Fintech ที่ดูน่าเชื่อถือ modern"</td></tr>
  <tr><td>✍️ Typography</td><td>"แนะนำ Google Fonts คู่สำหรับเว็บ tech startup ดูเป็น premium"</td></tr>
  <tr><td>🧩 Components</td><td>"เขียน CSS card component แบบ glassmorphism dark theme"</td></tr>
  <tr><td>📱 Responsive</td><td>"ทำให้ navbar นี้ responsive บน mobile ด้วย hamburger menu"</td></tr>
</table>

<h3>⚡ ตัวอย่างจริง: สร้างหน้า Landing Page</h3>

<pre><code>ช่วยออกแบบ Landing Page สำหรับแอปจดบันทึก

Requirements:
- Dark theme, modern, minimalist
- Target: นักเรียน/นักศึกษา
- ต้องมี: Hero section, Features, Pricing, CTA
- สีหลัก: น้ำเงินเข้ม + accent สีฟ้า

ให้มา:
1. โครงสร้าง HTML ทั้งหน้า
2. CSS ครบ (ไม่ใช้ framework)
3. อธิบาย design decision แต่ละส่วน</code></pre>

<h3>🔄 วิธีทำงานกับ AI แบบ Iteration</h3>

<p><strong>อย่าถามครั้งเดียวแล้วหวังว่าจะได้ผลลัพธ์ดีทันที</strong> ให้ค่อยๆ refine ทีละขั้น:</p>

<pre><code>รอบที่ 1: "ออกแบบ hero section ร้านกาแฟ"
รอบที่ 2: "เปลี่ยนสีเป็น earth tone น้ำตาล/ครีม"
รอบที่ 3: "เพิ่ม animation fade-in ให้ตัวหนังสือ"
รอบที่ 4: "ทำให้ responsive บน mobile"
รอบที่ 5: "เพิ่ม hover effect ให้ปุ่ม"</code></pre>

<h3>🛠️ Tools ที่ใช้คู่กัน</h3>

<table>
  <tr><th>Tool</th><th>ใช้ทำอะไร</th><th>ฟรีไหม</th></tr>
  <tr><td><strong>Antigravity (Claude)</strong></td><td>เขียน HTML/CSS/JS, แก้โค้ด</td><td>✅ ฟรี</td></tr>
  <tr><td><strong>v0.dev</strong></td><td>พิมพ์ภาษาธรรมชาติ → ได้ React component</td><td>✅ ฟรีจำกัด</td></tr>
  <tr><td><strong>Figma</strong></td><td>ออกแบบ mockup ก่อนลงมือทำ</td><td>✅ ฟรี</td></tr>
  <tr><td><strong>Midjourney / DALL-E</strong></td><td>สร้างรูปภาพ, icon, illustration</td><td>💰 มีฟรีจำกัด</td></tr>
  <tr><td><strong>Coolors.co</strong></td><td>สร้าง color palette สวยๆ</td><td>✅ ฟรี</td></tr>
</table>

<h3>💎 Prompt Template เก็บไว้ใช้</h3>

<pre><code>// Template: สร้าง UI Component
ช่วยสร้าง [ชื่อ component] สำหรับ [จุดประสงค์]
- Style: [dark/light], [modern/minimal/playful]
- สี: [ระบุสีหลัก]
- ต้อง responsive บน mobile
- ใช้ [plain CSS / Tailwind / Bootstrap]
- เพิ่ม hover animation ด้วย

// Template: แก้ Design ที่มีอยู่แล้ว
นี่คือ CSS ปัจจุบัน: [วาง code]
ปัญหา: [ดูไม่ดี / ไม่ responsive / สีไม่เข้ากัน]
ให้ปรับปรุงโดย: [สิ่งที่อยากได้]</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> ส่งรูป screenshot หน้าเว็บที่ชอบให้ AI ดูด้วยแล้วบอกว่า "ทำในสไตล์นี้" — ได้ผลดีกว่าอธิบายด้วยคำพูดอย่างเดียวมาก!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ AI ออกแบบ UI ได้ตั้งแต่ wireframe, color palette, typography, component ไปจนถึง CSS พร้อมใช้</li>
  <li>✅ ทำงานแบบ iteration — ค่อยๆ refine ทีละขั้น ไม่ต้องสมบูรณ์ครั้งเดียว</li>
  <li>✅ ส่งรูปตัวอย่างให้ AI ดูด้วย ได้ผลดีกว่าอธิบายด้วยคำพูดอย่างเดียว</li>
  <li>✅ ใช้ v0.dev หรือ Antigravity เขียน component ได้เลยไม่ต้องรู้ design ลึก</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองสั่งให้ AI สร้าง landing page เรื่องที่คุณสนใจ 1 หน้า แล้ว iterate จนพอใจ!
</div>
`,
  },
  {
    number: 11,
    slug: 'video-creation',
    emoji: '🎬',
    title: 'สร้างวิดีโอด้วย AI — ตัดต่อ บรรยาย สร้าง Content',
    shortTitle: 'สร้างวิดีโอ AI',
    content: `
<h2>🎬 สร้างวิดีโอด้วย AI — ตัดต่อ บรรยาย สร้าง Content</h2>

<img src="/images/antigravity/video.png" alt="Video Creation with AI" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI ไม่ได้แค่เขียนโค้ดหรือตอบคำถาม — มันช่วยสร้าง <strong>วิดีโอ Content</strong> ได้ทั้งกระบวนการ ตั้งแต่ idea → script → voiceover → ตัดต่อ!</p>

<h3>🔄 Workflow สร้างวิดีโอด้วย AI</h3>

<pre><code>1. Idea & Research  →  ถาม AI หา topic น่าสนใจ + research ข้อมูล
2. Script Writing   →  ให้ AI เขียน script พร้อม hook และ CTA
3. Visual Assets    →  AI สร้างรูป, thumbnail, B-roll concept
4. Voiceover        →  AI สร้างเสียงพากย์ (ElevenLabs, Murf)
5. Editing Assist   →  AI ช่วย caption, subtitle, timing
6. Thumbnail        →  AI ออกแบบ thumbnail ดึงดูด</code></pre>

<h3>📝 ให้ AI เขียน Script วิดีโอ</h3>

<pre><code>ช่วยเขียน script วิดีโอ YouTube ความยาว 5 นาที

หัวข้อ: "Python vs SQL เรียนอะไรก่อนดี?"
Target audience: คนที่อยากเข้าสาย Data ไม่มีพื้นฐาน
Tone: เป็นกันเอง ตลกนิดหน่อย ข้อมูลจริง

ให้มี:
- Hook 15 วินาทีแรก (ดึงดูดให้ดูต่อ)
- เนื้อหาหลัก 3-4 จุด พร้อมตัวอย่างจริง
- สรุปและ CTA ท้าย
- [B-roll]: บอกว่าแต่ละช่วงควรแสดงภาพอะไร</code></pre>

<h3>🎙️ สร้างเสียง Voiceover</h3>

<table>
  <tr><th>Tool</th><th>จุดเด่น</th><th>ราคา</th></tr>
  <tr><td><strong>ElevenLabs</strong></td><td>เสียงเหมือนคนจริงมาก, Clone เสียงตัวเองได้</td><td>ฟรี 10,000 chars/เดือน</td></tr>
  <tr><td><strong>Murf.ai</strong></td><td>เสียงภาษาไทยดี, ปรับ speed/pitch ได้</td><td>ฟรีจำกัด</td></tr>
  <tr><td><strong>Suno</strong></td><td>สร้างเพลง background ได้</td><td>ฟรี 50 เพลง/วัน</td></tr>
  <tr><td><strong>Kling AI / Runway</strong></td><td>สร้างคลิปวิดีโอจากรูปภาพ</td><td>มี free tier</td></tr>
</table>

<h3>🖼️ สร้าง Thumbnail ดึงดูด</h3>

<pre><code>// ให้ AI เขียน prompt สร้างรูป Thumbnail
ช่วยเขียน image prompt สำหรับ Midjourney
เพื่อสร้าง YouTube thumbnail หัวข้อ "Python vs SQL"

ต้องการ:
- ดึงดูดสายตา คนเห็นแล้วอยากคลิก
- มีองค์ประกอบ: โลโก้ Python งู + ไอคอน Database
- สีสด contrast สูง เห็นชัดบน mobile
- สไตล์: modern tech, ไม่ต้องมีใบหน้าคน</code></pre>

<h3>✂️ ตัดต่อวิดีโอด้วย AI</h3>

<table>
  <tr><th>Tool</th><th>ทำอะไร</th></tr>
  <tr><td><strong>CapCut AI</strong></td><td>ตัดต่ออัตโนมัติ, ใส่ subtitle, สร้าง short clip จากวิดีโอยาว</td></tr>
  <tr><td><strong>Descript</strong></td><td>แก้วิดีโอโดยแก้ text transcript — ลบคำพูดไหนก็ตัดออกอัตโนมัติ</td></tr>
  <tr><td><strong>Opus Clip</strong></td><td>ตัด YouTube ยาวให้เป็น Shorts/Reels อัตโนมัติ</td></tr>
  <tr><td><strong>HeyGen</strong></td><td>สร้าง AI Avatar พูดแทนเราได้ ไม่ต้องอัดหน้า</td></tr>
</table>

<h3>💡 Use Cases จริงๆ ที่ทำได้เลย</h3>

<ul>
  <li>📚 <strong>Course Tutorial</strong> — สร้างวิดีโอสอน step-by-step จาก script ที่ AI เขียน</li>
  <li>📱 <strong>TikTok / Shorts</strong> — ให้ AI ตัดคลิปยาวเป็นหลายๆ short สำหรับ social media</li>
  <li>🏢 <strong>Product Demo</strong> — สร้างวิดีโอแนะนำสินค้า/บริการโดยไม่ต้องมีทีม video</li>
  <li>📊 <strong>Data Storytelling</strong> — แปลง dashboard → วิดีโอ presentation อัตโนมัติ</li>
  <li>🌍 <strong>แปลภาษา</strong> — ใส่ subtitle หลายภาษา หรือ dub เสียงเป็นภาษาอื่นได้</li>
</ul>

<div class="warning-box">⚠️ <strong>ข้อควรระวัง:</strong> วิดีโอที่ AI สร้างขึ้น (โดยเฉพาะ deepfake/avatar) ต้องระบุให้ชัดเจนว่าเป็น AI-generated ตาม platform policy และกฎหมายหลายประเทศ — ห้ามใช้หลอกลวงผู้อื่น!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ AI ช่วยได้ทุกขั้นตอน: idea → script → voiceover → thumbnail → ตัดต่อ</li>
  <li>✅ ElevenLabs สร้างเสียงพากย์เหมือนคนจริง, CapCut AI ตัดต่ออัตโนมัติ</li>
  <li>✅ Opus Clip ตัด Long-form เป็น Shorts ได้ในคลิกเดียว</li>
  <li>✅ ใช้ AI เขียน script ก่อน แล้วค่อยอัดเสียงหรือให้ AI อ่านแทน</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองให้ AI เขียน script วิดีโอสั้น 1 นาที แล้วใช้ ElevenLabs สร้างเสียง + CapCut ตัดต่อ!
</div>
`,
  },
  {
    number: 12,
    slug: 'debug-with-ai',
    emoji: '🐛',
    title: 'Debug ด้วย AI — แก้ Error เร็วขึ้น 10 เท่า',
    shortTitle: 'Debug ด้วย AI',
    content: `
<h2>🐛 Debug ด้วย AI — แก้ Error เร็วขึ้น 10 เท่า</h2>

<img src="/images/antigravity/debug.png" alt="Debug ด้วย AI" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>หนึ่งในสิ่งที่ AI เก่งที่สุดคือการ <strong>วิเคราะห์ Error และแก้ Bug</strong> — แทนที่จะนั่ง Google ทีละ error ให้บอก AI แล้วจบในรอบเดียว</p>

<h3>📋 วิธีส่ง Error ให้ AI แก้ได้ถูกต้อง</h3>

<p>ส่งแค่ "มัน error" ไม่พอ! AI ต้องการข้อมูลครบ 3 อย่าง:</p>

<table>
  <tr><th>ข้อมูลที่ต้องส่ง</th><th>ตัวอย่าง</th></tr>
  <tr><td>1. <strong>Error message</strong> เต็มๆ</td><td>TypeError: Cannot read property 'map' of undefined</td></tr>
  <tr><td>2. <strong>โค้ดที่มีปัญหา</strong></td><td>วาง function หรือ block ที่ error</td></tr>
  <tr><td>3. <strong>สิ่งที่อยากให้เกิด</strong></td><td>อยากให้แสดงรายการสินค้าทั้งหมด</td></tr>
</table>

<h3>⚡ Template การส่ง Error ที่ได้ผลดีที่สุด</h3>

<pre><code>มี error แบบนี้:
[วาง error message ทั้งหมด]

โค้ดที่เกี่ยวข้อง:
[วางโค้ด]

สิ่งที่อยากให้โค้ดทำ:
[อธิบาย]

ช่วยหาสาเหตุและแก้ให้ด้วยครับ</code></pre>

<h3>🎯 ประเภท Bug ที่ AI แก้ได้ดี</h3>

<table>
  <tr><th>ประเภท Bug</th><th>AI ช่วยได้แค่ไหน</th></tr>
  <tr><td>TypeError, ReferenceError</td><td>⭐⭐⭐⭐⭐ แก้ได้เกือบ 100%</td></tr>
  <tr><td>Logic Bug (คำนวณผิด)</td><td>⭐⭐⭐⭐ แก้ได้ดีมาก</td></tr>
  <tr><td>CSS ไม่ตรงที่อยาก</td><td>⭐⭐⭐⭐ ส่งรูปประกอบด้วยยิ่งดี</td></tr>
  <tr><td>Performance ช้า</td><td>⭐⭐⭐ แก้ได้บางส่วน</td></tr>
  <tr><td>Race condition, Async bug</td><td>⭐⭐ ต้องอธิบายเพิ่ม</td></tr>
</table>

<h3>💡 เทคนิค Debug เพิ่มเติม</h3>

<pre><code>// ให้ AI อธิบายโค้ดที่ไม่เข้าใจก่อน
"ช่วยอธิบายว่าโค้ดนี้ทำอะไร ทีละบรรทัด: [โค้ด]"

// ให้ AI เดาว่า Bug อยู่ตรงไหน
"โค้ดนี้มี bug ที่ไหนได้บ้าง ช่วย review ให้:"

// ให้ AI เขียน test เพื่อหา bug
"ช่วยเขียน test case ที่จะแสดงให้เห็นว่า function นี้มีปัญหา:"</code></pre>

<div class="tip-box">💡 <strong>เทคนิค Pro:</strong> ถ้า AI แก้แล้วยังไม่หาย ให้บอก "ยังไม่หาย error เปลี่ยนเป็น [error ใหม่]" — AI จะวิเคราะห์ต่อจากตรงนั้นได้เลย</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ส่ง Error ต้องครบ 3 อย่าง: error message + โค้ด + สิ่งที่อยากได้</li>
  <li>✅ TypeError/Logic bug AI แก้ได้เกือบ 100% ส่วน async bug ต้องอธิบายเพิ่ม</li>
  <li>✅ ถ้ายังไม่หาย แจ้ง error ใหม่ให้ AI วิเคราะห์ต่อได้เลย</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ครั้งหน้าที่เจอ error ลองใช้ template ด้านบนส่งให้ AI แก้ดูครับ!
</div>
`,
  },
  {
    number: 13,
    slug: 'prompt-engineering',
    emoji: '💬',
    title: 'Prompt Engineering — เขียน Prompt ให้ AI ตอบดีขึ้น 10x',
    shortTitle: 'Prompt Engineering',
    content: `
<h2>💬 Prompt Engineering — เขียน Prompt ให้ AI ตอบดีขึ้น 10x</h2>

<img src="/images/antigravity/prompt-eng.png" alt="Prompt Engineering" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p><strong>คุณภาพคำตอบของ AI = คุณภาพ Prompt ของเรา</strong> — AI ฉลาดแค่ไหนก็ตอบได้แค่สิ่งที่เราถาม เรียนรู้วิธีถามให้ถูกต้องช่วยได้มากกว่าเปลี่ยน AI ตัวใหม่</p>

<h3>❌ vs ✅ ตัวอย่างจริง</h3>

<table>
  <tr><th>Prompt ไม่ดี ❌</th><th>Prompt ดี ✅</th></tr>
  <tr><td>"เขียนเว็บให้หน่อย"</td><td>"เขียนหน้า login ด้วย HTML/CSS/JS ใช้ dark theme มี validation email และ password ขั้นต่ำ 8 ตัว"</td></tr>
  <tr><td>"แก้โค้ดให้"</td><td>"โค้ดนี้ช้ามาก ช่วย optimize ให้ โดยไม่เปลี่ยน logic หลัก: [โค้ด]"</td></tr>
  <tr><td>"อธิบาย Docker"</td><td>"อธิบาย Docker แบบเข้าใจง่าย สำหรับคนที่ไม่รู้ programming เลย ใช้การเปรียบเทียบกับชีวิตจริง"</td></tr>
</table>

<h3>🏗️ โครงสร้าง Prompt ที่ดี</h3>

<pre><code>[บริบท] ฉันเป็น [ใคร] กำลังทำ [อะไร]
[งาน] ช่วย [ทำอะไร]
[ข้อมูล] นี่คือ [ข้อมูลที่เกี่ยวข้อง]
[รูปแบบ] ตอบในรูปแบบ [bullet/table/โค้ด/อธิบาย]
[ข้อจำกัด] โดยต้องไม่ [ข้อห้าม]</code></pre>

<h3>🎯 เทคนิคที่ใช้ได้ผลจริง</h3>

<table>
  <tr><th>เทคนิค</th><th>ตัวอย่าง</th><th>ใช้เมื่อไหร่</th></tr>
  <tr><td><strong>บอก Role</strong></td><td>"ตอบในฐานะ Senior Dev ที่มีประสบการณ์ 10 ปี"</td><td>ต้องการความเชี่ยวชาญ</td></tr>
  <tr><td><strong>ยกตัวอย่าง</strong></td><td>"เช่นแบบนี้: [ตัวอย่าง] ทำแบบนี้กับ [สิ่งที่อยากได้]"</td><td>อยากได้รูปแบบเฉพาะ</td></tr>
  <tr><td><strong>บอกผู้ฟัง</strong></td><td>"อธิบายให้เด็ก ป.6 เข้าใจได้"</td><td>ต้องการความเรียบง่าย</td></tr>
  <tr><td><strong>จำกัดขอบเขต</strong></td><td>"ตอบสั้นๆ ไม่เกิน 3 ข้อ"</td><td>ต้องการคำตอบกระชับ</td></tr>
  <tr><td><strong>ให้คิดก่อน</strong></td><td>"คิดทีละขั้น แล้วค่อยตอบ"</td><td>โจทย์ยากหรือซับซ้อน</td></tr>
</table>

<div class="warning-box">⚠️ <strong>Prompt ที่ไม่ควรทำ:</strong> Prompt ที่ยาวเกินไปโดยไม่จำเป็น, คำถามหลายเรื่องในครั้งเดียว, ใช้คำคลุมเครือ เช่น "ทำให้ดีขึ้น" โดยไม่บอกว่าดีขึ้นในแง่ไหน</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Prompt ดี = บริบท + งาน + ข้อมูล + รูปแบบที่อยากได้</li>
  <li>✅ บอก Role, ยกตัวอย่าง, บอกผู้ฟัง ช่วยให้ได้คำตอบที่ตรงกว่า</li>
  <li>✅ ถามทีละเรื่อง ดีกว่าถามหลายเรื่องในครั้งเดียว</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองเอา Prompt ที่เคยถามแล้วไม่ได้ผล มาปรับตาม template แล้วดูว่าดีขึ้นไหม!
</div>
`,
  },
  {
    number: 14,
    slug: 'daily-workflow',
    emoji: '🔄',
    title: 'Workflow จริง — ใช้ AI ทั้งวันทำงานยังไง',
    shortTitle: 'Workflow ทั้งวัน',
    content: `
<h2>🔄 Workflow จริง — ใช้ AI ทั้งวันทำงานยังไง</h2>

<img src="/images/antigravity/workflow.png" alt="Workflow ทั้งวัน" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI ไม่ใช่แค่เครื่องมือตอบคำถาม — มันเป็น <strong>ผู้ช่วยส่วนตัวตลอดทั้งวัน</strong> ถ้าใช้เป็น ประหยัดเวลาได้ 3-5 ชั่วโมงต่อวัน</p>

<h3>🌅 เช้า — วางแผนวันด้วย AI</h3>

<pre><code>วันนี้ฉันต้องทำ:
- แก้ bug login page (ด่วน)
- เขียน feature ตะกร้าสินค้า
- ประชุม client 14:00
- เขียน report สรุปสัปดาห์

ช่วยจัดลำดับความสำคัญ และแบ่ง time block ให้หน่อย
(เริ่มงาน 9:00 หยุดพัก 12:00 ประชุม 14:00)</code></pre>

<h3>💻 ระหว่างวัน — เขียนโค้ดคู่กับ AI</h3>

<table>
  <tr><th>สถานการณ์</th><th>บอก AI ว่า</th></tr>
  <tr><td>เริ่มงานใหม่</td><td>"ช่วยวางโครงสร้างไฟล์และ function หลักให้ก่อน แล้วค่อยเติมเนื้อหา"</td></tr>
  <tr><td>ติดปัญหา</td><td>"ติดตรงนี้ [อธิบาย] ช่วยแนะนำวิธีแก้ 2-3 วิธีให้เลือก"</td></tr>
  <tr><td>Review โค้ดตัวเอง</td><td>"ช่วย review โค้ดนี้หา bug, security issue, หรือจุดที่ปรับปรุงได้"</td></tr>
  <tr><td>เขียน test</td><td>"ช่วยเขียน unit test สำหรับ function นี้ครอบคลุม edge case ด้วย"</td></tr>
</table>

<h3>🌆 เย็น — สรุปและเตรียมพรุ่งนี้</h3>

<pre><code>วันนี้ทำได้:
- แก้ bug login ✅
- เขียน feature ตะกร้า 70% ยังเหลือ payment
- ประชุม client: ต้องการเพิ่ม filter สินค้า

ช่วยสรุปเป็น daily report สั้นๆ สำหรับส่งหัวหน้า
และช่วยวาง task สำหรับพรุ่งนี้</code></pre>

<div class="tip-box">💡 <strong>เคล็ดลับ:</strong> เปิด AI ไว้ข้างๆ ตลอดเวลาเหมือนมีเพื่อนร่วมงาน — ถามได้ทุกเรื่อง ไม่ต้องกังวลว่าจะถามมากเกินไป</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ เช้า: ให้ AI ช่วยวางแผนและ prioritize งาน</li>
  <li>✅ ระหว่างวัน: ใช้ AI เป็น pair programmer ถามได้ทุกขั้นตอน</li>
  <li>✅ เย็น: ให้ AI สรุป daily report และเตรียม task พรุ่งนี้</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองใช้ AI วางแผนงานพรุ่งนี้ก่อนนอน แล้วดูว่าวันถัดไปทำงานได้มีประสิทธิภาพขึ้นไหม!
</div>
`,
  },
  {
    number: 15,
    slug: 'context-management',
    emoji: '📋',
    title: 'จัดการ Context — ให้ AI เข้าใจโปรเจคของเรา',
    shortTitle: 'จัดการ Context',
    content: `
<h2>📋 จัดการ Context — ให้ AI เข้าใจโปรเจคของเรา</h2>

<img src="/images/antigravity/context.png" alt="จัดการ Context" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI ไม่รู้จักโปรเจคของเราโดยอัตโนมัติ — ต้องให้ข้อมูล <strong>"บริบท"</strong> ก่อน ยิ่งให้ context ดีเท่าไหร่ AI ตอบได้แม่นเท่านั้น</p>

<h3>🎯 Context คืออะไร?</h3>

<p>Context คือ <strong>"ข้อมูลพื้นหลัง"</strong> ที่ทำให้ AI เข้าใจสถานการณ์ของเรา เหมือนบอก Freelancer ใหม่ก่อนให้เขาทำงาน</p>

<table>
  <tr><th>Context ที่ควรให้</th><th>ตัวอย่าง</th></tr>
  <tr><td>เทคโนโลยีที่ใช้</td><td>"ใช้ Next.js 14, TypeScript, TailwindCSS, PostgreSQL"</td></tr>
  <tr><td>โครงสร้างโปรเจค</td><td>"มีไฟล์ app/page.tsx, components/Navbar.tsx, lib/db.ts"</td></tr>
  <tr><td>สิ่งที่ทำไปแล้ว</td><td>"ทำ login/register เสร็จแล้ว ตอนนี้จะทำ profile page"</td></tr>
  <tr><td>ข้อจำกัด</td><td>"ห้ามเพิ่ม library ใหม่ ใช้เฉพาะที่มีอยู่แล้ว"</td></tr>
</table>

<h3>📁 วิธีให้ Context อย่างมีประสิทธิภาพ</h3>

<pre><code>// บอก context ครั้งเดียวตอนเริ่ม session
นี่คือโปรเจคของฉัน:
- ชื่อ: ระบบจัดการร้านกาแฟ
- Stack: Next.js + MongoDB + TailwindCSS
- ทำแล้ว: หน้า login, แสดงรายการสินค้า
- กำลังทำ: ระบบสั่งซื้อและชำระเงิน
- ห้ามแก้ไขไฟล์: auth.js (สำคัญมาก)

ตลอด session นี้ให้จำ context นี้ไว้ด้วยนะ</code></pre>

<h3>⚡ Tips จัดการ Context ยาว</h3>

<ul>
  <li>📎 <strong>แนบไฟล์โดยตรง</strong> — Antigravity อ่านไฟล์จากโปรเจคให้ได้เลย ไม่ต้อง copy-paste</li>
  <li>✂️ <strong>ตัดส่วนที่ไม่เกี่ยว</strong> — ส่งเฉพาะโค้ดที่เกี่ยวข้อง ไม่ต้องส่งทั้งไฟล์</li>
  <li>🔄 <strong>เริ่ม session ใหม่</strong> — ถ้า session ยาวมาก เริ่มใหม่พร้อม context สรุป</li>
  <li>📝 <strong>ทำ Context File</strong> — เขียนไฟล์ CONTEXT.md สรุปโปรเจค แล้วแนบทุกครั้งที่เริ่ม</li>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ให้ context ก่อนเริ่มงาน: tech stack, โครงสร้าง, สิ่งที่ทำแล้ว, ข้อจำกัด</li>
  <li>✅ ส่งเฉพาะโค้ดที่เกี่ยวข้อง ไม่ต้องส่งทั้งโปรเจค</li>
  <li>✅ ทำไฟล์ CONTEXT.md แนบทุกครั้งที่เริ่ม session ใหม่</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองสร้างไฟล์ CONTEXT.md สรุปโปรเจคที่กำลังทำ แล้วแนบให้ AI ทุกครั้งที่เริ่มงาน!
</div>
`,
  },
  {
    number: 16,
    slug: 'common-mistakes',
    emoji: '⚠️',
    title: 'ข้อผิดพลาดที่ควรหลีกเลี่ยง — อย่าทำแบบนี้!',
    shortTitle: 'ข้อผิดพลาดที่พบบ่อย',
    content: `
<h2>⚠️ ข้อผิดพลาดที่ควรหลีกเลี่ยง — อย่าทำแบบนี้!</h2>

<img src="/images/antigravity/mistakes.png" alt="ข้อผิดพลาดที่ควรหลีกเลี่ยง" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>คนส่วนใหญ่ใช้ AI ผิดวิธีแล้วบ่นว่า "AI ไม่ฉลาด" — จริงๆ แล้วส่วนใหญ่เป็นเพราะ <strong>วิธีใช้ที่ไม่ถูกต้อง</strong></p>

<h3>❌ ข้อผิดพลาด 8 อย่างที่พบบ่อยที่สุด</h3>

<table>
  <tr><th>#</th><th>ข้อผิดพลาด</th><th>วิธีที่ถูกต้อง</th></tr>
  <tr><td>1</td><td><strong>เชื่อ AI 100%</strong> โดยไม่ตรวจสอบ</td><td>ตรวจสอบผลลัพธ์เสมอ โดยเฉพาะตัวเลข ข้อเท็จจริง</td></tr>
  <tr><td>2</td><td><strong>Prompt คลุมเครือ</strong> "ทำให้ดีขึ้น"</td><td>ระบุชัดเจน "เร็วขึ้น / อ่านง่ายขึ้น / ลด bug"</td></tr>
  <tr><td>3</td><td><strong>ส่งข้อมูลลับ</strong> password, API key ให้ AI</td><td>ใช้ placeholder แทน เช่น YOUR_API_KEY</td></tr>
  <tr><td>4</td><td><strong>ถามหลายเรื่องพร้อมกัน</strong></td><td>ถามทีละเรื่อง แล้วค่อยถามต่อ</td></tr>
  <tr><td>5</td><td><strong>ไม่ให้ context</strong> AI ตอบแบบทั่วไป</td><td>บอกก่อนเสมอว่าทำอะไรอยู่</td></tr>
  <tr><td>6</td><td><strong>copy-paste โค้ด AI โดยไม่อ่าน</strong></td><td>อ่านและเข้าใจก่อนใช้ ทดสอบก่อน deploy</td></tr>
  <tr><td>7</td><td><strong>ยอมแพ้หลังถามครั้งเดียว</strong></td><td>บอก AI ว่า "ไม่ใช่สิ่งที่ต้องการ" แล้ว refine</td></tr>
  <tr><td>8</td><td><strong>ใช้ AI ทำงานทั้งหมดแทน</strong></td><td>AI ช่วย แต่ต้องเข้าใจ logic พื้นฐานด้วย</td></tr>
</table>

<div class="warning-box">⚠️ <strong>ระวังเป็นพิเศษ:</strong> ห้ามส่ง Password, API Key, ข้อมูลลูกค้า, หรือข้อมูลที่เป็นความลับของบริษัทให้ AI — ข้อมูลเหล่านี้อาจถูกนำไปใช้ฝึก model ได้!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ตรวจสอบผลลัพธ์เสมอ ไม่เชื่อ AI 100%</li>
  <li>✅ ห้ามส่งข้อมูลลับ: password, API key, ข้อมูลลูกค้า</li>
  <li>✅ ถามทีละเรื่อง และ refine ถ้าคำตอบไม่ตรง</li>
  <li>✅ อ่านและเข้าใจโค้ดก่อน copy-paste ลงโปรเจค</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองทบทวนดูว่าตัวเองเคยทำข้อผิดพลาดไหนบ้าง แล้วปรับวิธีใช้ให้ถูกต้อง!
</div>
`,
  },
  {
    number: 17,
    slug: 'data-analysis',
    emoji: '📊',
    title: 'AI วิเคราะห์ข้อมูล — จาก Excel ถึง Insight',
    shortTitle: 'AI วิเคราะห์ข้อมูล',
    content: `
<h2>📊 AI วิเคราะห์ข้อมูล — จาก Excel ถึง Insight</h2>

<img src="/images/antigravity/data-analysis.png" alt="AI วิเคราะห์ข้อมูล" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ไม่ต้องรู้ Excel สูตรซับซ้อน หรือเขียน Python ก็ได้! AI ช่วย <strong>อ่านข้อมูล วิเคราะห์ และหา Insight</strong> ได้จากแค่การแนบไฟล์</p>

<h3>📁 วิธีให้ AI วิเคราะห์ข้อมูล</h3>

<table>
  <tr><th>ขั้นตอน</th><th>วิธีทำ</th></tr>
  <tr><td>1. เตรียมไฟล์</td><td>CSV, Excel, หรือ copy ตารางมาวางได้เลย</td></tr>
  <tr><td>2. แนบไฟล์</td><td>ลากไฟล์ใส่ช่อง chat หรือ copy ข้อมูลมาวาง</td></tr>
  <tr><td>3. ถามคำถาม</td><td>บอกว่าอยากรู้อะไรจากข้อมูลนี้</td></tr>
</table>

<h3>💡 ตัวอย่าง Prompt วิเคราะห์ข้อมูล</h3>

<pre><code>// วิเคราะห์ยอดขาย
"นี่คือข้อมูลยอดขายรายเดือน [แนบไฟล์]
ช่วยหา:
1. เดือนที่ขายดีที่สุดและแย่ที่สุด
2. แนวโน้มโดยรวม (เพิ่ม/ลด/คงที่)
3. สินค้าที่ทำรายได้สูงสุด 3 อันดับ
4. ข้อเสนอแนะเพื่อเพิ่มยอดขาย"

// เปรียบเทียบข้อมูล
"เปรียบเทียบยอดขาย ปีนี้ vs ปีที่แล้ว
บอกว่า category ไหนเติบโต category ไหนถดถอย"

// หา anomaly
"ช่วยหาข้อมูลที่ผิดปกติหรือน่าสงสัยในชุดข้อมูลนี้"</code></pre>

<h3>📈 สิ่งที่ AI ช่วยวิเคราะห์ได้</h3>

<ul>
  <li>📊 <strong>สรุปตัวเลข</strong> — ค่าเฉลี่ย, สูงสุด, ต่ำสุด, median</li>
  <li>📈 <strong>แนวโน้ม</strong> — เพิ่ม/ลด เร็วแค่ไหน</li>
  <li>🔍 <strong>หา Pattern</strong> — ข้อมูลวันไหน/เวลาไหนดีที่สุด</li>
  <li>⚠️ <strong>Outlier</strong> — ข้อมูลที่ผิดปกติ</li>
  <li>📝 <strong>สรุปเป็น Report</strong> — ให้ copy ส่งหัวหน้าได้เลย</li>
</ul>

<div class="tip-box">💡 <strong>Pro Tip:</strong> บอก AI ว่า "สรุปเป็น executive summary ที่หัวหน้าอ่านแล้วเข้าใจทันที ไม่เกิน 5 ข้อ" — ได้ report ที่ใช้งานได้จริงทันที</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ แนบ CSV/Excel แล้วถามได้เลย ไม่ต้องรู้ Excel สูตรซับซ้อน</li>
  <li>✅ AI ช่วยหาแนวโน้ม, outlier, pattern และสรุป insight ได้</li>
  <li>✅ บอก format ที่ต้องการ เช่น executive summary, bullet points</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองเอาข้อมูล Excel ที่มีอยู่แนบให้ AI วิเคราะห์ดูครับ!
</div>
`,
  },
  {
    number: 18,
    slug: 'email-documents',
    emoji: '📧',
    title: 'AI เขียนอีเมล & เอกสาร — ภาษาดี ครบถ้วน เร็ว',
    shortTitle: 'เขียนอีเมล & เอกสาร',
    content: `
<h2>📧 AI เขียนอีเมล & เอกสาร — ภาษาดี ครบถ้วน เร็ว</h2>

<img src="/images/antigravity/email-docs.png" alt="AI เขียนอีเมล & เอกสาร" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI เขียนภาษาได้ดีกว่าคนส่วนใหญ่ — ใช้ AI ช่วยเขียนอีเมล, รายงาน, proposal ประหยัดเวลาได้มาก</p>

<h3>📬 ตัวอย่างสิ่งที่ AI เขียนให้ได้</h3>

<table>
  <tr><th>เอกสาร</th><th>Template Prompt</th></tr>
  <tr><td>อีเมลติดต่อลูกค้า</td><td>"เขียนอีเมลติดตาม quote ที่ส่งไปเมื่อ 3 วันก่อน สุภาพ กระชับ ไม่เกิน 5 บรรทัด"</td></tr>
  <tr><td>สรุปประชุม</td><td>"จากบันทึกประชุมนี้ [วางโน้ต] สรุปเป็น meeting minutes มี action items และ owner"</td></tr>
  <tr><td>Proposal</td><td>"เขียน proposal พัฒนาเว็บให้ร้านอาหาร X ราคา 50,000 บาท กรอบเวลา 2 เดือน"</td></tr>
  <tr><td>รายงานความก้าวหน้า</td><td>"เขียน progress report สัปดาห์นี้ จากข้อมูล: [วาง bullet points]"</td></tr>
</table>

<h3>✍️ เทคนิคให้ AI เขียนได้ถูก Tone</h3>

<pre><code>// ระบุ Tone ที่ต้องการ
"เขียนอีเมลขอโทษลูกค้าที่งานส่งช้า
Tone: สุภาพ รับผิดชอบ ไม่แก้ตัว
ระบุแผนแก้ไขและวันส่งงานใหม่ด้วย"

// ให้ปรับอีเมลที่มีอยู่
"ช่วยปรับอีเมลนี้ให้ฟังดู professional และสุภาพกว่านี้:
[วางอีเมลเดิม]"

// แปลภาษา
"แปลอีเมลนี้เป็นภาษาอังกฤษ ภาษาทางการ:
[อีเมลภาษาไทย]"</code></pre>

<h3>📄 สร้างเอกสารอื่นๆ</h3>

<ul>
  <li>📑 <strong>สัญญาง่ายๆ</strong> — NDA, สัญญาจ้างงาน (ต้องให้ทนายตรวจก่อนใช้จริง)</li>
  <li>📊 <strong>Presentation outline</strong> — โครงสลาย slide สำหรับ PowerPoint</li>
  <li>📋 <strong>Job Description</strong> — ประกาศรับสมัครงาน</li>
  <li>🎯 <strong>OKR / KPI</strong> — เขียน goal ให้ชัดเจน measurable</li>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ระบุ Tone ที่ต้องการ: สุภาพ, กระชับ, formal, เป็นกันเอง</li>
  <li>✅ ให้ข้อมูลครบ แล้วให้ AI ร่างให้ เราแค่ตรวจและปรับนิดหน่อย</li>
  <li>✅ ใช้แปลอีเมลภาษาอังกฤษได้ด้วย ไม่ต้องเปิด Google Translate</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองให้ AI เขียนอีเมลหรือเอกสารที่กำลังต้องทำอยู่ตอนนี้เลย!
</div>
`,
  },
  {
    number: 19,
    slug: 'ai-testing',
    emoji: '🧪',
    title: 'AI เขียน Test — Coverage สูง ไม่ต้องคิดเอง',
    shortTitle: 'AI เขียน Test',
    content: `
<h2>🧪 AI เขียน Test — Coverage สูง ไม่ต้องคิดเอง</h2>

<img src="/images/antigravity/testing.png" alt="AI เขียน Test" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>เขียน Test น่าเบื่อ คิด edge case ไม่ทัน — ให้ AI ทำแทนได้เลย! AI เก่งมากในการคิด case ที่เราลืม</p>

<h3>🎯 ประเภท Test ที่ AI เขียนให้ได้</h3>

<table>
  <tr><th>ประเภท</th><th>ตัวอย่าง</th></tr>
  <tr><td><strong>Unit Test</strong></td><td>ทดสอบ function ย่อยๆ ทีละตัว</td></tr>
  <tr><td><strong>Integration Test</strong></td><td>ทดสอบว่า component ต่างๆ ทำงานร่วมกันได้</td></tr>
  <tr><td><strong>Edge Cases</strong></td><td>ค่าว่าง, ค่าติดลบ, ข้อมูลผิดรูปแบบ</td></tr>
  <tr><td><strong>API Test</strong></td><td>ทดสอบ endpoint ด้วย Postman/Jest</td></tr>
</table>

<h3>⚡ Template เขียน Test</h3>

<pre><code>// Unit Test
"เขียน unit test สำหรับ function นี้ด้วย Jest:
[วาง function]

ให้ครอบคลุม:
- กรณีปกติ (happy path)
- กรณี input ว่าง/null
- กรณี input ผิดประเภท
- กรณี edge case ที่อาจพลาด"

// เพิ่ม test ที่ขาด
"ดู test ที่มีแล้วนี้: [วาง test]
มี case อะไรที่ยังขาดอยู่บ้าง? ช่วยเพิ่มให้"</code></pre>

<h3>🚀 ให้ AI ช่วย Test อื่นๆ</h3>

<ul>
  <li>🔍 <strong>Review test ที่มีอยู่</strong> — "test นี้ครอบคลุมพอไหม มีจุดอ่อนตรงไหน"</li>
  <li>📊 <strong>เพิ่ม coverage</strong> — "ช่วยดูว่าโค้ดส่วนไหนยังไม่ถูก test"</li>
  <tr><td>🎭 <strong>Mock data</strong></td><td>"สร้าง mock data สำหรับ test 20 รายการ หลากหลาย case"</td></tr>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ส่ง function ให้ AI เขียน unit test ได้เลย พร้อม edge cases</li>
  <li>✅ บอกให้ครอบคลุม happy path + null/empty + wrong type</li>
  <li>✅ ให้ AI สร้าง mock data หลากหลายสำหรับ test ได้ด้วย</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> เอา function ที่ยังไม่มี test มาให้ AI เขียนให้ครับ!
</div>
`,
  },
  {
    number: 20,
    slug: 'read-documentation',
    emoji: '📖',
    title: 'AI อ่าน Documentation — เข้าใจในนาที ไม่ต้องอ่านทั้งหมด',
    shortTitle: 'AI อ่าน Documentation',
    content: `
<h2>📖 AI อ่าน Documentation — เข้าใจในนาที ไม่ต้องอ่านทั้งหมด</h2>

<img src="/images/antigravity/read-docs.png" alt="AI อ่าน Documentation" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>Documentation ยาวหลายร้อยหน้า ไม่มีใครอ่านทั้งหมด — ให้ AI อ่านแทนแล้วสรุปเฉพาะส่วนที่ต้องการ</p>

<h3>🔗 วิธีให้ AI อ่าน Docs</h3>

<table>
  <tr><th>วิธี</th><th>ใช้เมื่อไหร่</th></tr>
  <tr><td>วาง URL แล้วถาม</td><td>"อ่านหน้านี้ [URL] แล้วบอกวิธีติดตั้ง"</td></tr>
  <tr><td>Copy เนื้อหามาวาง</td><td>Copy ส่วนที่สงสัยมาวางแล้วถาม</td></tr>
  <tr><td>ใช้ /browser</td><td>ให้ AI เปิด docs แล้วหาข้อมูลให้</td></tr>
</table>

<h3>💡 ตัวอย่าง Prompt อ่าน Docs</h3>

<pre><code>// เข้าใจ Library ใหม่เร็ว
"อ่าน docs นี้ [URL หรือ copy เนื้อหา]
บอกฉัน:
1. มันทำอะไร ใช้ทำอะไรได้
2. วิธีติดตั้ง
3. ตัวอย่าง code พื้นฐานที่สุด
4. ข้อควรระวัง"

// หาวิธีทำสิ่งที่ต้องการ
"จาก docs ของ Stripe [URL]
บอกวิธีรับชำระเงินแบบ subscription รายเดือน
พร้อมตัวอย่าง code ภาษา Node.js"

// เปรียบเทียบ version
"อ่าน changelog นี้ [URL]
อะไรเปลี่ยนแปลงจาก v2 → v3 ที่กระทบกับโค้ดเดิม"</code></pre>

<h3>📚 ใช้ AI เรียนรู้ Library ใหม่</h3>

<pre><code>// สอนแบบ step-by-step
"ฉันไม่เคยใช้ React Query มาก่อน
ช่วยสอนตั้งแต่ติดตั้งจนถึง fetch data จาก API
ทีละขั้น พร้อมโค้ดตัวอย่างในแต่ละขั้น"</code></pre>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ส่ง URL หรือ copy เนื้อหา docs ให้ AI สรุปเฉพาะส่วนที่ต้องการ</li>
  <li>✅ ถาม "วิธีทำ X ด้วย Y library" ได้เลย ไม่ต้องอ่าน docs ทั้งหมด</li>
  <li>✅ ให้ AI สอน library ใหม่ทีละขั้น พร้อมโค้ดตัวอย่าง</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> มี library ที่อยากเรียนรู้ไหม? ลองให้ AI สอนตั้งแต่ต้นเลยครับ!
</div>
`,
  },
  {
    number: 21,
    slug: 'multi-turn-conversation',
    emoji: '🧠',
    title: 'คุยกับ AI แบบต่อเนื่อง — ไม่ให้ลืม Context',
    shortTitle: 'คุยต่อเนื่อง',
    content: `
<h2>🧠 คุยกับ AI แบบต่อเนื่อง — ไม่ให้ลืม Context</h2>

<img src="/images/antigravity/conversation.png" alt="คุยกับ AI แบบต่อเนื่อง" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI จำบริบทใน session เดียวกันได้ — แต่ถ้าเริ่ม session ใหม่จะลืมหมด เรียนรู้วิธีต่อยอดบทสนทนาให้ได้ผลดีที่สุด</p>

<h3>🔄 วิธีต่อยอดบทสนทนา</h3>

<table>
  <tr><th>เทคนิค</th><th>ตัวอย่าง</th></tr>
  <tr><td><strong>อ้างอิงสิ่งที่คุยไปแล้ว</strong></td><td>"จากโค้ดที่เพิ่งเขียน ช่วยเพิ่ม error handling ด้วย"</td></tr>
  <tr><td><strong>ขอ iteration</strong></td><td>"ดีแล้ว แต่ขอให้ responsive บน mobile ด้วย"</td></tr>
  <tr><td><strong>ขอทางเลือก</strong></td><td>"มีวิธีอื่นที่ดีกว่านี้ไหม?"</td></tr>
  <tr><td><strong>ย้อนกลับ</strong></td><td>"เอาวิธีแรกดีกว่า ช่วย revert กลับให้"</td></tr>
</table>

<h3>💾 จัดการ Session ยาว</h3>

<pre><code>// เมื่อ session ยาวเกินไป → สรุปก่อนเริ่มใหม่
"ช่วยสรุปสิ่งที่เราคุยและตัดสินใจไปในชั่วโมงที่ผ่านมา
เพื่อฉันจะ copy ไว้เริ่ม session ใหม่"

// เริ่ม session ใหม่พร้อม context
"ต่อจากการทำงานก่อนหน้า:
[วาง summary]
ตอนนี้อยากทำต่อเรื่อง [สิ่งที่อยากทำ]"</code></pre>

<h3>🎯 เทคนิคให้ AI จำสิ่งสำคัญ</h3>

<ul>
  <li>📌 <strong>"จำไว้ว่า..."</strong> — บอก AI สิ่งที่ต้องจำตลอด session</li>
  <li>✅ <strong>"ยืนยันว่าเข้าใจ"</strong> — ให้ AI สรุปสิ่งที่ตกลงก่อนทำ</li>
  <li>🔄 <strong>"ตาม constraint ที่บอกไป"</strong> — remind AI ถ้าลืม</li>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ AI จำบริบทใน session เดียวกันได้ ต่อยอดได้เรื่อยๆ</li>
  <li>✅ เมื่อ session ยาว ให้ AI สรุปก่อนเริ่มใหม่</li>
  <li>✅ บอก "จำไว้ว่า..." เพื่อให้ AI จำ constraint ตลอด session</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองทำงานกับ AI ใน session เดียวแบบยาวๆ โดยต่อยอดบทสนทนาแทนการเริ่มใหม่ทุกครั้ง!
</div>
`,
  },
  {
    number: 22,
    slug: 'token-cost',
    emoji: '💰',
    title: 'จัดการ Token & Cost — ใช้ AI ให้คุ้มค่า',
    shortTitle: 'จัดการ Token & Cost',
    content: `
<h2>💰 จัดการ Token & Cost — ใช้ AI ให้คุ้มค่า</h2>

<img src="/images/antigravity/cost.png" alt="จัดการ Token & Cost" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>Token คือ "หน่วยวัด" ที่ AI ใช้คิดราคา — รู้วิธีใช้ให้ประหยัดทำให้ใช้ AI ได้นานขึ้นโดยไม่เสียเงินเพิ่ม</p>

<h3>🔑 Token คืออะไร?</h3>

<p>Token ≈ คำ/ตัวอักษร ประมาณ 1 token = 4 ตัวอักษรภาษาอังกฤษ หรือ 1-2 ตัวอักษรภาษาไทย</p>

<table>
  <tr><th>สิ่งที่กิน Token</th><th>ประมาณ</th></tr>
  <tr><td>Prompt ของเรา</td><td>นับทุกคำที่เราพิมพ์</td></tr>
  <tr><td>Context ใน session</td><td>บทสนทนาก่อนหน้าทั้งหมด</td></tr>
  <tr><td>ไฟล์ที่แนบ</td><td>โค้ด 100 บรรทัด ≈ 500-1000 token</td></tr>
  <tr><td>คำตอบของ AI</td><td>ยิ่งตอบยาว ยิ่งกิน token</td></tr>
</table>

<h3>💡 วิธีประหยัด Token</h3>

<ul>
  <li>✂️ <strong>ส่งเฉพาะโค้ดที่เกี่ยวข้อง</strong> ไม่ต้องส่งทั้งไฟล์</li>
  <li>📝 <strong>Prompt กระชับ</strong> ตัดคำที่ไม่จำเป็นออก</li>
  <li>🔄 <strong>เริ่ม session ใหม่</strong> เมื่อ session ยาวมากและไม่เกี่ยวกับงานเดิมแล้ว</li>
  <li>🤖 <strong>ใช้ Model ที่เหมาะสม</strong> งานง่ายใช้ Sonnet งานยากค่อยใช้ Opus</li>
  <li>📊 <strong>ถามครั้งเดียวให้ครบ</strong> แทนที่จะถามทีละนิดหลายรอบ</li>
</ul>

<h3>🎯 ค่าใช้จ่าย AI โดยประมาณ</h3>

<table>
  <tr><th>Plan</th><th>ราคา</th><th>เหมาะกับ</th></tr>
  <tr><td>ฟรี</td><td>$0</td><td>ใช้น้อย ทดลองใช้</td></tr>
  <tr><td>Pro</td><td>~$20/เดือน</td><td>ใช้งานส่วนตัวทั่วไป</td></tr>
  <tr><td>API</td><td>จ่ายตาม token</td><td>นักพัฒนา ใช้ในแอป</td></tr>
</table>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ Token = หน่วยคิดราคา ยิ่ง context ยาว ยิ่งแพง</li>
  <li>✅ ส่งเฉพาะส่วนที่เกี่ยวข้อง และ Prompt กระชับ ช่วยประหยัด</li>
  <li>✅ ใช้ Model ให้เหมาะงาน Sonnet สำหรับงานทั่วไป ประหยัดกว่า Opus</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองสังเกตดูว่า Prompt ของเราฟุ่มเฟือยตรงไหนบ้าง แล้วลองตัดให้กระชับขึ้น!
</div>
`,
  },
  {
    number: 23,
    slug: 'ai-security',
    emoji: '🔒',
    title: 'ความปลอดภัย AI — ข้อมูลไหนส่งได้ ข้อมูลไหนห้ามส่ง',
    shortTitle: 'ความปลอดภัย AI',
    content: `
<h2>🔒 ความปลอดภัย AI — ข้อมูลไหนส่งได้ ข้อมูลไหนห้ามส่ง</h2>

<img src="/images/antigravity/security.png" alt="ความปลอดภัย AI" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI ช่วยได้มาก แต่มีข้อมูลบางอย่างที่ <strong>ห้ามส่งให้ AI เด็ดขาด</strong> ทำความเข้าใจเรื่องนี้ก่อนใช้งานจริง</p>

<h3>✅ ส่งให้ AI ได้ (ปลอดภัย)</h3>

<ul>
  <li>✅ โค้ดทั่วไปที่ไม่มีข้อมูลจริง</li>
  <li>✅ คำถามทางเทคนิคทั่วไป</li>
  <li>✅ ข้อมูล mock / ตัวอย่าง ที่สร้างขึ้นมา</li>
  <li>✅ เนื้อหาที่เป็น public อยู่แล้ว</li>
  <li>✅ ไอเดีย, แผน, วิธีการ</li>
</ul>

<h3>❌ ห้ามส่งให้ AI (ไม่ปลอดภัย)</h3>

<table>
  <tr><th>ข้อมูลอันตราย</th><th>ตัวอย่าง</th></tr>
  <tr><td>❌ Credentials</td><td>Password, API Key, Secret Token</td></tr>
  <tr><td>❌ ข้อมูลส่วนตัวลูกค้า</td><td>ชื่อ, อีเมล, เบอร์โทร, เลขบัตร</td></tr>
  <tr><td>❌ ความลับธุรกิจ</td><td>แผนธุรกิจ, ราคาต้นทุน, สูตรลับ</td></tr>
  <tr><td>❌ ข้อมูลการเงิน</td><td>เลขบัญชี, รายการ transaction จริง</td></tr>
  <tr><td>❌ ข้อมูลสุขภาพ</td><td>ประวัติการรักษา, ผลตรวจ</td></tr>
</table>

<h3>🛡️ วิธีใช้ AI อย่างปลอดภัย</h3>

<pre><code>// แทน API Key จริงด้วย placeholder
const API_KEY = "YOUR_API_KEY_HERE"  // ✅ โอเค
const API_KEY = "sk-abc123xyz..."    // ❌ ห้ามใส่จริง

// แทนข้อมูลลูกค้าด้วย fake data
const customer = { name: "ลูกค้าตัวอย่าง", email: "test@example.com" }  // ✅
const customer = { name: "สมชาย ใจดี", email: "somchai@real.com" }      // ❌</code></pre>

<div class="warning-box">⚠️ <strong>สำคัญมาก:</strong> บริษัทใหญ่หลายแห่งมีนโยบายห้ามพนักงานส่งข้อมูลลับบริษัทให้ AI ภายนอก — ตรวจสอบ policy ของบริษัทก่อนใช้เสมอ!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ ห้ามส่ง: Password, API Key, ข้อมูลลูกค้า, ความลับธุรกิจ</li>
  <li>✅ ใช้ placeholder แทนข้อมูลจริงในโค้ดที่ส่งให้ AI</li>
  <li>✅ ตรวจสอบ policy บริษัทก่อนใช้ AI กับงานที่มีข้อมูลละเอียดอ่อน</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ทบทวน workflow ที่ใช้ AI อยู่ มีส่วนไหนที่อาจส่งข้อมูลอันตรายโดยไม่รู้ตัวบ้าง?
</div>
`,
  },
  {
    number: 24,
    slug: 'freelance-with-ai',
    emoji: '🚀',
    title: 'Freelance ด้วย AI — ทำงานเร็วขึ้น 5 เท่า รายได้มากขึ้น',
    shortTitle: 'Freelance ด้วย AI',
    content: `
<h2>🚀 Freelance ด้วย AI — ทำงานเร็วขึ้น 5 เท่า รายได้มากขึ้น</h2>

<img src="/images/antigravity/freelance.png" alt="Freelance ด้วย AI" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>AI ทำให้ Freelance คนเดียวทำงานได้เท่ากับทีม 3-5 คน — รับงานได้มากขึ้น ส่งงานเร็วขึ้น คุณภาพดีขึ้น</p>

<h3>⚡ AI ช่วย Freelance ได้ยังไง</h3>

<table>
  <tr><th>ขั้นตอน</th><th>AI ช่วยอะไร</th><th>ประหยัดเวลา</th></tr>
  <tr><td>หา Client</td><td>เขียน proposal, portfolio content</td><td>50%</td></tr>
  <tr><td>ทำความเข้าใจงาน</td><td>สรุป brief, ถามคำถามที่ดี</td><td>70%</td></tr>
  <tr><td>ทำงาน</td><td>เขียนโค้ด, ออกแบบ, เขียน content</td><td>60-80%</td></tr>
  <tr><td>ส่งงาน</td><td>เขียนอีเมล, สรุปสิ่งที่ทำ, documentation</td><td>70%</td></tr>
  <tr><td>แก้งาน</td><td>วิเคราะห์ feedback, แก้ไขเร็ว</td><td>50%</td></tr>
</table>

<h3>💰 กลยุทธ์เพิ่มรายได้</h3>

<ul>
  <li>💡 <strong>รับงานมากขึ้น</strong> — ทำเร็วขึ้น 5x = รับได้ 5 เท่า</li>
  <li>💎 <strong>ขึ้นราคา</strong> — งานคุณภาพดีขึ้น → ราคาสูงขึ้นได้</li>
  <li>🎯 <strong>เฉพาะทาง</strong> — เป็น "Freelancer ที่ใช้ AI" ได้ premium</li>
  <li>🔄 <strong>Productize</strong> — เปลี่ยนงานซ้ำๆ เป็น template ทำได้เร็วมาก</li>
</ul>

<h3>📝 ตัวอย่างจริง: เว็บ Landing Page</h3>

<pre><code>ลูกค้าจ้างทำ Landing Page: 15,000 บาท

ก่อนใช้ AI: ใช้เวลา 3 วัน
หลังใช้ AI:  ใช้เวลา 6-8 ชั่วโมง

ผลลัพธ์:
- รายได้ต่อชั่วโมง: เพิ่มขึ้น 4-5x
- รับงานได้พร้อมกัน: 1 → 4-5 งาน
- รายได้ต่อเดือน: เพิ่มขึ้น 3-5x</code></pre>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ AI ช่วยทุกขั้นตอน: หา client → ทำงาน → ส่งงาน → แก้งาน</li>
  <li>✅ ทำงานเร็วขึ้น 5x = รับงานได้มากขึ้น หรือมีเวลาส่วนตัวมากขึ้น</li>
  <li>✅ สร้าง template สำหรับงานซ้ำๆ ทำให้เร็วขึ้นอีก</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองคำนวณดูว่างาน Freelance ที่ทำอยู่ ถ้าใช้ AI จะประหยัดเวลาได้กี่ชั่วโมงต่อสัปดาห์?
</div>
`,
  },
  {
    number: 25,
    slug: 'productivity-boost',
    emoji: '📈',
    title: 'เพิ่ม Productivity — ทำงาน 8 ชั่วโมงให้เสร็จใน 3 ชั่วโมง',
    shortTitle: 'เพิ่ม Productivity',
    content: `
<h2>📈 เพิ่ม Productivity — ทำงาน 8 ชั่วโมงให้เสร็จใน 3 ชั่วโมง</h2>

<img src="/images/antigravity/productivity.png" alt="เพิ่ม Productivity" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>ไม่ใช่แค่ทำงานเร็วขึ้น แต่ทำงาน <strong>ถูกต้องตั้งแต่ครั้งแรก</strong> และ <strong>ลดงานซ้ำๆ</strong> ด้วย AI</p>

<h3>⏱️ งานที่ประหยัดเวลาได้มากที่สุด</h3>

<table>
  <tr><th>งาน</th><th>ก่อนใช้ AI</th><th>หลังใช้ AI</th><th>ประหยัด</th></tr>
  <tr><td>เขียนโค้ด boilerplate</td><td>30 นาที</td><td>2 นาที</td><td>93%</td></tr>
  <tr><td>เขียนอีเมล</td><td>15 นาที</td><td>2 นาที</td><td>87%</td></tr>
  <tr><td>แก้ bug</td><td>2 ชั่วโมง</td><td>20 นาที</td><td>83%</td></tr>
  <tr><td>เขียน documentation</td><td>1 ชั่วโมง</td><td>10 นาที</td><td>83%</td></tr>
  <tr><td>Research/เปรียบเทียบ</td><td>2 ชั่วโมง</td><td>15 นาที</td><td>88%</td></tr>
</table>

<h3>🎯 Productivity System ที่ใช้กับ AI</h3>

<ul>
  <li>🌅 <strong>เช้า</strong> — ให้ AI สรุปงานค้างและวางแผนวันด้วยข้อมูลจาก todo list</li>
  <li>🔋 <strong>Peak Hours</strong> — ทำงานยากที่ต้องการสมาธิ AI เป็นผู้ช่วย</li>
  <li>⚡ <strong>งาน Quick</strong> — งานเล็กน้อย ให้ AI ทำแทนทั้งหมด</li>
  <li>🌆 <strong>เย็น</strong> — ให้ AI เขียน summary และเตรียม next day</li>
</ul>

<h3>🚫 สิ่งที่ขโมยเวลาและ AI ช่วยลดได้</h3>

<ul>
  <li>🔍 <strong>Google หาข้อมูล</strong> → ถาม AI ได้เลย เร็วกว่า 10x</li>
  <li>📖 <strong>อ่าน documentation</strong> → ให้ AI สรุปเฉพาะส่วนที่ต้องการ</li>
  <li>✍️ <strong>เขียนโค้ดซ้ำๆ</strong> → สร้าง template ให้ AI ใช้ซ้ำ</li>
  <li>🐛 <strong>นั่ง debug คนเดียว</strong> → ให้ AI ช่วยวิเคราะห์ทันที</li>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ งาน boilerplate, อีเมล, debug, docs ประหยัดได้ 80-93%</li>
  <li>✅ วางแผนวันด้วย AI ทุกเช้า ช่วย prioritize และไม่ลืมงาน</li>
  <li>✅ ถาม AI แทน Google ทุกครั้ง เร็วกว่าและได้คำตอบตรงกว่า</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> จดรายการงานที่ทำซ้ำๆ ทุกสัปดาห์ แล้วลองให้ AI ทำแทนดูว่าประหยัดเวลาได้แค่ไหน!
</div>
`,
  },
  {
    number: 26,
    slug: 'ai-in-company',
    emoji: '🏢',
    title: 'นำ AI เข้าบริษัท — โน้มน้าวทีมและหัวหน้า',
    shortTitle: 'นำ AI เข้าบริษัท',
    content: `
<h2>🏢 นำ AI เข้าบริษัท — โน้มน้าวทีมและหัวหน้า</h2>

<img src="/images/antigravity/company.png" alt="นำ AI เข้าบริษัท" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>รู้ว่า AI ดี แต่คนในทีมไม่ใช้? เรียนรู้วิธี <strong>โน้มน้าวและ implement AI</strong> ในองค์กรอย่างได้ผล</p>

<h3>🎯 วิธีโน้มน้าวหัวหน้าให้ใช้ AI</h3>

<table>
  <tr><th>สิ่งที่หัวหน้ากังวล</th><th>คำตอบที่ใช้ได้ผล</th></tr>
  <tr><td>แพงเกินไป</td><td>"ทดลองฟรีก่อน หรือเริ่ม $20/เดือน/คน — ถ้าประหยัดเวลาได้ 2 ชั่วโมง/วัน คุ้มมาก"</td></tr>
  <tr><td>ข้อมูลรั่ว</td><td>"เรามี guideline ชัดเจนว่าข้อมูลไหนส่งได้/ไม่ได้"</td></tr>
  <tr><td>ไม่น่าเชื่อถือ</td><td>"AI ไม่ได้ทำแทน ทีมยังตรวจสอบเสมอ เหมือนมีผู้ช่วยเพิ่ม"</td></tr>
  <tr><td>คนไม่ยอมใช้</td><td>"ทดลองกับงาน 1 อย่างก่อน วัดผล แล้วค่อยขยาย"</td></tr>
</table>

<h3>📋 แผน Roll-out AI ในทีม</h3>

<pre><code>สัปดาห์ 1-2:  ทดลองกับตัวเองก่อน วัดเวลาจริง
สัปดาห์ 3-4:  แชร์ผลลัพธ์กับทีม "ฉันทำแบบนี้ ลองดู"
เดือน 2:      จัดประชุมสั้น demo ให้ทีมดู use case จริง
เดือน 3:      ทำ guideline ร่วมกัน กำหนด best practice
เดือน 4+:     วัดผลและขยาย use case ที่ได้ผลดี</code></pre>

<h3>💡 Use Cases ที่ขาย Concept ได้ง่ายที่สุด</h3>

<ul>
  <li>📧 <strong>เขียนอีเมล</strong> — ทุกคนเข้าใจ ทุกคนใช้ได้ทันที</li>
  <li>📝 <strong>สรุปประชุม</strong> — ชัดเจน วัดผลได้ ประหยัดเวลาจริง</li>
  <li>📊 <strong>วิเคราะห์ข้อมูล</strong> — ผลลัพธ์เห็นชัด ROI ง่าย</li>
  <li>🐛 <strong>Debug โค้ด</strong> — Dev ชอบมาก เห็นผลทันที</li>
</ul>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ เริ่มจากตัวเองก่อน วัดผล แล้วค่อย share กับทีม</li>
  <li>✅ โน้มน้าวด้วยตัวเลขจริง ไม่ใช่ความเชื่อ</li>
  <li>✅ เริ่มจาก use case ง่ายๆ ที่ทุกคนเห็นผลได้ทันที</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> ลองใช้ AI กับงาน 1 อย่างที่วัดผลได้ชัด แล้วเอาตัวเลขจริงไปแชร์กับทีม!
</div>
`,
  },
  {
    number: 27,
    slug: 'prompt-templates',
    emoji: '📁',
    title: 'Template Prompt สำเร็จรูป — เก็บไว้ใช้ซ้ำได้เลย',
    shortTitle: 'Template Prompt',
    content: `
<h2>📁 Template Prompt สำเร็จรูป — เก็บไว้ใช้ซ้ำได้เลย</h2>

<img src="/images/antigravity/templates.png" alt="Template Prompt" style="width:100%;border-radius:12px;margin:16px 0;box-shadow:0 4px 20px rgba(0,0,0,0.3)" />

<p>แทนที่จะคิด Prompt ใหม่ทุกครั้ง — เก็บ template ที่ใช้ได้ผลไว้ แล้วเอามาใช้ซ้ำได้เลย!</p>

<h3>💻 Template สำหรับ Developer</h3>

<pre><code>// เขียน Feature ใหม่
"ช่วยเขียน [feature] สำหรับ [ระบบ]
Stack: [technology]
Requirements:
- [requirement 1]
- [requirement 2]
ให้มา: โค้ดพร้อม comment อธิบาย + วิธีใช้งาน"

// Code Review
"Review โค้ดนี้หา:
1. Bug ที่อาจเกิดขึ้น
2. Security issue
3. Performance bottleneck
4. ส่วนที่ปรับปรุง readability ได้
[วางโค้ด]"

// เขียน API
"เขียน REST API endpoint สำหรับ [action]
- Method: GET/POST/PUT/DELETE
- Input: [parameters]
- Output: [response format]
- Error handling: 400, 401, 404, 500
ใช้ [Express/FastAPI/etc]"</code></pre>

<h3>✍️ Template สำหรับ Content</h3>

<pre><code>// เขียนบทความ
"เขียนบทความเรื่อง [หัวข้อ]
Target reader: [กลุ่มเป้าหมาย]
Tone: [formal/casual/technical]
ความยาว: [จำนวนคำ]
ต้องมี: hook น่าสนใจ + ตัวอย่างจริง + สรุป"

// Social Media Post
"เขียน [LinkedIn/Twitter/Facebook] post เรื่อง [หัวข้อ]
จุดประสงค์: [แชร์ความรู้/โปรโมต/สร้าง engagement]
Tone: [professional/casual]
ความยาว: ไม่เกิน [จำนวน] คำ"</code></pre>

<h3>📊 Template สำหรับวิเคราะห์และตัดสินใจ</h3>

<pre><code>// เปรียบเทียบตัวเลือก
"ช่วยเปรียบเทียบ [A] vs [B] vs [C]
เกณฑ์: ราคา, ความง่าย, scalability, community
สถานการณ์ของฉัน: [บริบท]
แนะนำว่าควรเลือกอะไร พร้อมเหตุผล"

// ตัดสินใจ
"ฉันต้องตัดสินใจเรื่อง [สิ่งที่ต้องตัดสินใจ]
ตัวเลือก: [A], [B], [C]
ข้อจำกัด: [งบ, เวลา, ทรัพยากร]
ช่วยทำ pros/cons และแนะนำ"</code></pre>

<div class="tip-box">💡 <strong>Pro Tip:</strong> บันทึก template ที่ใช้บ่อยไว้ใน Notion, Google Docs หรือ text file แล้วแค่ copy มาแก้นิดหน่อยทุกครั้ง — ประหยัดเวลาได้มาก!</div>

<div class="tip-box" style="background:rgba(16,185,129,0.1);border-color:rgba(16,185,129,0.25);border-left-color:#10b981">
📝 <strong>สรุปท้ายบท:</strong>
<ul>
  <li>✅ สร้าง template library ส่วนตัว เก็บ prompt ที่ได้ผลดีไว้</li>
  <li>✅ Template ดี = บริบท + งาน + รูปแบบที่ต้องการ + ข้อจำกัด</li>
  <li>✅ แชร์ template กับทีม ทำให้ทั้งทีมได้ประโยชน์</li>
</ul>
<strong>👉 สิ่งที่ต้องทำต่อ:</strong> เริ่มสร้างไฟล์ "My AI Templates" เก็บ prompt ที่ใช้บ่อยไว้เลยครับ!
</div>
`,
  },
];
