export const chapters = [
  {
    number: 0,
    slug: 'overview',
    emoji: '🟠',
    title: 'ภาพรวม: Claude 3 ตัว — ต่างกันยังไง?',
    content: '<h2>Claude Ecosystem คืออะไร?</h2><p>หลายคนสับสนว่า "Claude" ที่พูดถึงกันในโลก AI มันคือตัวเดียวกันหรือเปล่า? คำตอบคือ <strong>ไม่ใช่</strong> ครับ ณ ปี 2025 มี "Claude" ที่ต่างกันอย่างน้อย 3 แบบใหญ่ๆ ที่ควรรู้จัก</p><h2>3 Claude ที่ต้องรู้</h2><ul><li><strong>claude.ai</strong> — เว็บไซต์สนทนากับ Claude โดยตรง เหมือน ChatGPT สำหรับทุกคน</li><li><strong>Claude Code</strong> — CLI Tool รันในเทอร์มินัล สำหรับ Developer ที่อยากให้ AI เขียนโค้ดแทน</li><li><strong>Claude Cowork</strong> — คอร์สและ Workshop ของ Trainer ชาวไทย สอนใช้ Claude ในงาน Office (ไม่ใช่ Product ของ Anthropic)</li></ul><h2>ทำไมต้องรู้ความต่าง?</h2><p>เพราะแต่ละตัวมี Use Case ต่างกันโดยสิ้นเชิง การเลือกผิดตัวทำให้เสียเงินและเวลาโดยไม่จำเป็น บทเรียนนี้จะช่วยให้คุณเลือกได้ถูกต้องตั้งแต่ต้น</p><div class="tip-box"><strong>💡 สรุปเร็ว:</strong> claude.ai = ใช้เว็บ, Claude Code = ใช้ Terminal, Cowork = เรียนคอร์ส</div><h2>Roadmap บทเรียนนี้</h2><ul><li>บทที่ 1-2: รู้จัก Anthropic และ Claude Family</li><li>บทที่ 3-4: เจาะลึก claude.ai ทุกฟีเจอร์</li><li>บทที่ 5-6: Claude Code สำหรับ Developer</li><li>บทที่ 7-9: Cowork Workflow สำหรับงาน Office</li><li>บทที่ 10-11: เปรียบ vs ChatGPT และ Antigravity</li></ul>'
  },
  {
    number: 1,
    slug: 'anthropic-world',
    emoji: '🏢',
    title: 'Anthropic คือใคร? Claude Family ทั้งหมด',
    content: '<h2>Anthropic — บริษัท AI ที่ให้ความสำคัญกับความปลอดภัย</h2><p>Anthropic ก่อตั้งในปี 2021 โดย Dario Amodei, Daniela Amodei และอดีตทีมงาน OpenAI รวม 11 คน จุดเด่นของ Anthropic คือการให้ความสำคัญกับ <strong>AI Safety</strong> มากกว่าบริษัท AI ทั่วไป</p><h2>Claude Model Family</h2><ul><li><strong>Claude Haiku</strong> — เล็ก เร็ว ราคาถูก เหมาะกับงาน High Volume</li><li><strong>Claude Sonnet</strong> — สมดุลระหว่างความสามารถและราคา เหมาะกับงานทั่วไป</li><li><strong>Claude Opus</strong> — ฉลาดที่สุด ช้าและแพงกว่า เหมาะกับงานซับซ้อน</li></ul><h2>Context Window ที่ใหญ่ที่สุด</h2><p>Claude มี Context Window สูงสุด <strong>200,000 tokens</strong> ซึ่งใหญ่กว่า ChatGPT ถึงหลายเท่า ทำให้สามารถอ่านเอกสารยาวๆ ได้ทั้งฉบับ เช่น PDF 500 หน้า หรือ Codebase ทั้งโปรเจค</p><div class="tip-box"><strong>💡 200K tokens ≈</strong> ประมาณ 150,000 คำ หรือหนังสือประมาณ 600 หน้า</div><h2>Claude vs GPT-4 — Architecture ต่างกันอย่างไร?</h2><ul><li>Claude ถูกเทรนด้วย <strong>Constitutional AI</strong> — มีหลักการจริยธรรมฝังในตัว</li><li>Claude ดี้ขึ้นในงาน <strong>Analysis, Writing, Coding</strong></li><li>GPT-4 มี Plugins และ Ecosystem ที่กว้างกว่า</li></ul>'
  },
  {
    number: 2,
    slug: 'claude-ai-deep',
    emoji: '💬',
    title: 'claude.ai เจาะลึก: Projects, Artifacts, Memory',
    content: '<h2>claude.ai — มากกว่าแค่ Chat</h2><p>claude.ai คือ Interface หลักสำหรับใช้งาน Claude ผ่านเบราว์เซอร์ แต่ถ้าคุณใช้แค่พิมพ์คำถามและรับคำตอบ คุณใช้ได้แค่ 20% ของความสามารถทั้งหมด</p><h2>Projects — จัดกลุ่มงานพร้อม Memory ถาวร</h2><p>Projects ช่วยให้ Claude จดจำ Context ของงานได้ถาวร ไม่ต้องอธิบายซ้ำทุกครั้ง</p><pre><code>ตัวอย่างการสร้าง Project:\n- Project: "งานการตลาดร้าน ABC"\n- Custom Instructions: "ร้านเราขายเสื้อผ้า Target ผู้หญิงอายุ 25-35 ปี\n  Tone: Friendly, ใช้ภาษาไทย, ไม่ formal เกินไป"\n- Uploaded Files: Brand Guide.pdf, Product Catalog.csv\n\nผลลัพธ์: Claude รู้จักร้านคุณทุก Session</code></pre><h2>Artifacts — เอกสารที่แก้ไขได้ใน Chat</h2><p>Artifacts คือ Panel ด้านขวาที่แสดงผลลัพธ์แบบ Interactive เช่น:</p><ul><li>Code ที่รันได้ทันทีใน Browser</li><li>เอกสาร Markdown ที่แก้ได้</li><li>SVG Graphics, HTML Pages</li><li>Spreadsheet Data</li></ul><h2>Memory System</h2><p>Claude สามารถจดจำข้อมูลสำคัญข้ามการสนทนาได้ เช่น ชื่อ, อาชีพ, สไตล์การทำงาน — ทำให้ประสบการณ์การใช้งานดีขึ้นเรื่อยๆ</p><div class="tip-box"><strong>💡 Pro Tip:</strong> ใช้ Custom Instructions บอก Claude ว่าคุณเป็นใคร ทำงานอะไร ต้องการรับคำตอบแบบไหน จะทำให้ทุก Response ตรงใจกว่าเดิมมาก</div>'
  },
  {
    number: 3,
    slug: 'claude-vs-chatgpt',
    emoji: '⚔️',
    title: 'Claude vs ChatGPT — เปรียบจริง ตัวไหนเด่นด้านไหน',
    content: '<h2>Claude vs ChatGPT — การเปรียบเทียบที่ทุกคนอยากรู้</h2><p>ทั้งสองตัวเป็น AI ชั้นนำ แต่แต่ละตัวมีจุดเด่นต่างกัน การรู้ว่าตัวไหนดีกว่าในด้านใดช่วยให้คุณเลือกใช้ได้ถูกต้อง</p><h2>เปรียบตาราง</h2><ul><li><strong>การเขียน/วิเคราะห์:</strong> Claude ✅ เด่นกว่า — น้ำเสียงเป็นธรรมชาติ ละเอียดกว่า</li><li><strong>Coding:</strong> สูสี — Claude เข้าใจ Context ยาวได้ดีกว่า, GPT-4 มี Copilot ecosystem</li><li><strong>ความจำ/Context:</strong> Claude ✅ — 200K tokens vs GPT-4 128K tokens</li><li><strong>Plugins/Tools:</strong> ChatGPT ✅ — มี Plugin store, DALL-E, Sora, Web browsing ที่สมบูรณ์กว่า</li><li><strong>ราคา:</strong> ทั้งคู่ $20/เดือนสำหรับ Pro/Plus</li><li><strong>API:</strong> ทั้งคู่มี API — Claude มีราคาถูกกว่าในบางโมเดล</li></ul><h2>Claude เหมาะกับงานประเภทใด?</h2><ul><li>✅ เขียน Long-form Content (บทความ, รายงาน)</li><li>✅ วิเคราะห์เอกสารยาว (PDF, Legal docs)</li><li>✅ Coding ใน Codebase ขนาดใหญ่</li><li>✅ งานที่ต้องการ Nuance และ Tone ที่ละเอียด</li></ul><h2>ChatGPT เหมาะกับงานประเภทใด?</h2><ul><li>✅ สร้างรูปภาพด้วย DALL-E</li><li>✅ ค้นหาข้อมูล Web แบบ Real-time</li><li>✅ ใช้ Custom GPTs จาก Store</li><li>✅ Workflow ที่ต้องการ Plugin หลากหลาย</li></ul><div class="tip-box"><strong>💡 คำแนะนำ:</strong> ถ้าทำได้ ลองใช้ทั้งสองตัวให้ถนัดเลย เพราะแต่ละตัวเด่นคนละด้าน ใช้ Claude สำหรับงาน Writing/Analysis และ ChatGPT สำหรับงานที่ต้องการ Plugin</div>'
  },
  {
    number: 4,
    slug: 'claude-code-what',
    emoji: '⌨️',
    title: 'Claude Code คืออะไร? ต่างจาก claude.ai ยังไง?',
    content: '<h2>Claude Code — AI ที่รันในเทอร์มินัลของคุณ</h2><p>Claude Code คือ CLI (Command Line Interface) Tool ที่พัฒนาโดย Anthropic ให้ Claude สามารถ <strong>อ่าน เขียน และแก้ไขไฟล์จริง</strong> ในเครื่องของคุณได้โดยตรง</p><h2>ความแตกต่างหลัก</h2><ul><li><strong>claude.ai:</strong> พิมพ์โค้ด → Copy → วางเอง → รันเอง</li><li><strong>Claude Code:</strong> สั่งงาน → Claude อ่านไฟล์ → เขียนโค้ด → รันเอง → แก้จนผ่าน</li></ul><h2>Claude Code ทำอะไรได้บ้าง?</h2><ul><li>✅ อ่านและเข้าใจ Codebase ทั้งโปรเจค</li><li>✅ เขียนไฟล์ใหม่และแก้ไขไฟล์ที่มีอยู่</li><li>✅ รันคำสั่ง Terminal (npm, git, python...)</li><li>✅ Debug แก้ Error วนซ้ำจนผ่าน</li><li>✅ Commit และ Push ไปยัง GitHub</li><li>✅ รันและแก้ Unit Tests</li></ul><h2>Claude Code vs GitHub Copilot vs Google Antigravity</h2><ul><li><strong>Copilot:</strong> แนะนำโค้ดระหว่างพิมพ์ใน IDE</li><li><strong>Claude Code:</strong> ทำ Task ทั้งหมดแทนคุณใน Terminal</li><li><strong>Google Antigravity:</strong> คล้ายกับ Claude Code แต่ใช้ Gemini Model และทำงานใน VS Code</li></ul><div class="tip-box"><strong>💡 ใครควรใช้ Claude Code?</strong> Developer ที่อยากมี AI Pair Programmer ที่เข้าถึงไฟล์จริงในเครื่อง ไม่ใช่แค่แนะนำโค้ดใน Chat</div>'
  },
  {
    number: 5,
    slug: 'claude-code-setup',
    emoji: '⚙️',
    title: 'ติดตั้ง Claude Code: npm, Auth, ทดสอบครั้งแรก',
    content: '<h2>ความต้องการก่อนติดตั้ง</h2><ul><li>Node.js 18+ (ดาวน์โหลดที่ nodejs.org)</li><li>Claude Pro หรือ API Key จาก console.anthropic.com</li><li>Terminal หรือ Command Prompt</li></ul><h2>ขั้นตอนติดตั้ง</h2><pre><code># 1. ติดตั้ง Claude Code\nnpm install -g @anthropic-ai/claude-code\n\n# 2. ตรวจสอบการติดตั้ง\nclaude --version\n\n# 3. Login ด้วย Anthropic Account\nclaude auth login\n\n# 4. หรือใช้ API Key\nexport ANTHROPIC_API_KEY="sk-ant-..."</code></pre><h2>ทดสอบครั้งแรก</h2><pre><code># เข้าไปในโฟลเดอร์โปรเจค\ncd my-project\n\n# เริ่ม Claude Code\nclaude\n\n# พิมพ์ Task แรก\n> อธิบาย Codebase นี้ให้ฉันเข้าใจโครงสร้างทั้งหมด</code></pre><h2>Mode การทำงาน</h2><ul><li><strong>Interactive Mode:</strong> คุย Claude แบบ Real-time ใน Terminal</li><li><strong>One-shot Mode:</strong> <code>claude "สร้าง README.md สำหรับโปรเจคนี้"</code></li><li><strong>Pipe Mode:</strong> <code>cat error.log | claude "ช่วยวิเคราะห์ Error นี้"</code></li></ul><div class="tip-box"><strong>💡 ค่าใช้จ่าย:</strong> Claude Code ใช้ Anthropic API Token คิดตามการใช้งานจริง ประมาณ $5-20/เดือน สำหรับ Developer ทั่วไป</div>'
  },
  {
    number: 6,
    slug: 'claude-code-workflow',
    emoji: '🔄',
    title: 'Claude Code Workflow จริง: อ่านไฟล์, แก้ Bug, Commit',
    content: '<h2>Workflow ที่ใช้บ่อยที่สุดกับ Claude Code</h2><h2>1. อ่านและทำความเข้าใจ Codebase</h2><pre><code>> อ่าน codebase ทั้งหมดและสรุปโครงสร้างให้ฉัน\n> ไฟล์ไหนทำหน้าที่อะไรบ้าง?\n> มี Pattern หรือ Convention อะไรที่ใช้ในโปรเจคนี้?</code></pre><h2>2. Feature Development</h2><pre><code>> สร้าง API Endpoint สำหรับ User Authentication\n  โดยใช้ JWT Token และเชื่อมกับ Database ที่มีอยู่\n  พร้อม Unit Test และ Documentation</code></pre><h2>3. Bug Fixing</h2><pre><code>> นี่คือ Error ที่ได้รับ: [paste error]\n  หาสาเหตุและแก้ไข พร้อม Regression Test</code></pre><h2>4. Refactoring</h2><pre><code>> Refactor ไฟล์ utils.js ให้ใช้ TypeScript\n  และแยก Function ออกเป็น Modules ที่ชัดเจนขึ้น</code></pre><h2>5. Git Workflow</h2><pre><code>> Review การเปลี่ยนแปลงที่ทำมาทั้งหมด\n  สร้าง Commit Message ที่ดี และ Push ไป Branch feature/auth</code></pre><div class="tip-box"><strong>💡 Best Practice:</strong> เริ่มจาก Task ที่ชัดเจน มีขอบเขต ก่อนที่จะให้ Claude ทำ Task ที่ซับซ้อน ยิ่ง Spec ชัด ผลลัพธ์ยิ่งดี</div>'
  },
  {
    number: 7,
    slug: 'cowork-explained',
    emoji: '📚',
    title: 'Claude Cowork คืออะไร? ไม่ใช่ Product ของ Anthropic!',
    content: '<h2>Claude Cowork — ความเข้าใจผิดที่พบบ่อย</h2><p>หลายคนคิดว่า "Claude Cowork" เป็น Product หรือบริการของ Anthropic แต่ <strong>นั่นไม่ถูกต้องครับ</strong> Claude Cowork คือ <strong>ชื่อคอร์สหรือ Workshop</strong> ของ Trainer ชาวไทยที่สอนการใช้ Claude ในสถานที่ทำงาน</p><h2>Claude Cowork คืออะไรจริงๆ?</h2><ul><li>เป็น <strong>Workshop Series</strong> สำหรับพนักงานออฟฟิศที่อยากใช้ AI ทำงาน</li><li>สอนโดย Trainer ไทย ไม่ใช่ Anthropic</li><li>Focus: การใช้ Claude สำหรับงาน HR, Marketing, Finance, Operations</li><li>มักขายบน SkillLane, Eventpop หรือ In-house Training</li></ul><h2>เนื้อหาที่มักสอนใน Cowork Workshop</h2><ul><li>✅ เขียน Email ด้วย Claude</li><li>✅ สรุปประชุมและสร้าง Action Items</li><li>✅ วิเคราะห์ข้อมูลด้วย Claude + Excel</li><li>✅ สร้าง Workflow อัตโนมัติด้วย Claude + n8n</li><li>✅ Prompt Engineering สำหรับงาน Office</li></ul><h2>ราคาและรูปแบบ</h2><ul><li>Online Course: 500-3,000 บาท</li><li>In-house Workshop: 20,000-100,000 บาท/ครั้ง</li><li>มักมี Certificate ให้</li></ul><div class="tip-box"><strong>💡 คำแนะนำ:</strong> ถ้าคุณเป็นพนักงานออฟฟิศที่ไม่ได้โค้ด Cowork Workshop เหมาะมาก แต่ถ้าเป็น Developer Claude Code คุ้มกว่า</div>'
  },
  {
    number: 8,
    slug: 'office-workflows',
    emoji: '🏢',
    title: 'ใช้ Claude ใน Office: Email, Meeting, Report, Data',
    content: '<h2>Claude ในชีวิตการทำงานประจำวัน</h2><p>Claude เป็นเครื่องมือที่ทรงพลังที่สุดสำหรับงาน Knowledge Worker ถ้าใช้เป็น สามารถประหยัดเวลาได้ 2-3 ชั่วโมงต่อวัน</p><h2>1. Email Writing</h2><pre><code>Prompt: "เขียน Email ถึง Client ที่ชื่อ คุณสมชาย\nเพื่อ Follow-up เรื่องข้อเสนอที่ส่งไปเมื่อสัปดาห์ที่แล้ว\nTone: Professional แต่ไม่ Formal มาก ภาษาไทย\nเน้นให้ Client ตอบกลับภายใน 3 วัน"</code></pre><h2>2. Meeting Notes → Action Items</h2><pre><code>Prompt: "นี่คือ Transcript การประชุม [วาง transcript]\nสรุป:\n1. ประเด็นสำคัญที่พูดถึง\n2. Decision ที่ได้\n3. Action Items พร้อมผู้รับผิดชอบและ Deadline\n4. สิ่งที่ต้องติดตามในประชุมครั้งหน้า"</code></pre><h2>3. Report Writing</h2><pre><code>Prompt: "นี่คือข้อมูล Sales ของเดือนที่แล้ว [วางข้อมูล]\nเขียน Monthly Report ที่มี:\n- Executive Summary 1 หน้า\n- วิเคราะห์แนวโน้ม\n- 3 ข้อเสนอแนะสำหรับเดือนหน้า"</code></pre><h2>4. Data Analysis ด้วย Claude + CSV</h2><p>อัปโหลดไฟล์ CSV ใน claude.ai แล้วถามได้เลย:</p><ul><li>"ข้อมูลนี้บอกอะไรเรา?"</li><li>"สินค้าไหนขายดีที่สุดในแต่ละเดือน?"</li><li>"หา Outlier และอธิบายว่าเป็น Normal ไหม"</li></ul><div class="tip-box"><strong>💡 เคล็ดลับ:</strong> ยิ่ง Context ชัด ผลลัพธ์ยิ่งดี บอก Claude ว่าคุณเป็นใคร ผู้อ่านคือใคร และต้องการ Output แบบไหน</div>'
  },
  {
    number: 9,
    slug: 'claude-marketing',
    emoji: '📣',
    title: 'Claude สำหรับ Marketing: Copy, SEO, Social Media, Ads',
    content: '<h2>Claude — เครื่องมือ Marketing ที่ดีที่สุดในปี 2025</h2><p>Claude เป็น AI ที่เขียนภาษาได้เป็นธรรมชาติมากที่สุดตัวหนึ่ง ทำให้เหมาะมากสำหรับงาน Marketing Content ทุกประเภท</p><h2>1. Ad Copy Writing</h2><pre><code>Prompt: "เขียน Facebook Ad สำหรับขาย [สินค้า]\nTarget: ผู้หญิงอายุ 25-35 ปี ชอบความสวยงาม\nObjective: ดึงคนเข้า Landing Page\nFormat: Headline 30 ตัวอักษร + Description 90 ตัวอักษร\nให้ 5 เวอร์ชั่น ใช้ Hook ที่ต่างกัน"</code></pre><h2>2. SEO Content</h2><pre><code>Prompt: "เขียนบทความ SEO เรื่อง [Keyword]\nLength: 1,500 คำ\nStructure: H1, H2, H3 ที่เหมาะสม\nรวม Keyword หลักและ LSI Keywords\nTone: Informative แต่ Engaging"</code></pre><h2>3. Social Media Content Calendar</h2><pre><code>Prompt: "สร้าง Content Calendar สำหรับ Instagram\nธุรกิจ: [ประเภทธุรกิจ]\nระยะเวลา: 30 วัน\n4 โพสต์ต่อสัปดาห์\nแต่ละโพสต์มี: Caption, Hashtags, ประเภทรูปที่ควรใช้"</code></pre><h2>4. Email Marketing</h2><ul><li>Welcome Email Series (5 อีเมล)</li><li>Abandoned Cart Recovery</li><li>Re-engagement Campaign</li><li>Newsletter Template</li></ul><div class="tip-box"><strong>💡 Pro Tip:</strong> ใช้ Claude Projects สร้าง Brand Voice Document แล้ว Upload ไว้ใน Project Claude จะเขียนในสไตล์ Brand คุณทุกครั้ง</div>'
  },
  {
    number: 10,
    slug: 'claude-vs-antigravity',
    emoji: '🥊',
    title: 'Claude Code vs Google Antigravity — แนวคิดเดียวกัน ต่างตรงไหน?',
    content: '<h2>Two AI Coding Agents — Same Concept, Different Implementation</h2><p>Claude Code และ Google Antigravity (ที่คุณกำลังใช้อยู่ตอนนี้!) มีแนวคิดพื้นฐานเหมือนกัน คือ AI Agent ที่ทำงานใน Codebase จริงของคุณ แต่มีรายละเอียดที่แตกต่างกัน</p><h2>เปรียบตาราง</h2><ul><li><strong>Model:</strong> Claude Code ใช้ Claude Sonnet/Opus | Antigravity ใช้ Gemini</li><li><strong>Interface:</strong> Claude Code = Terminal CLI | Antigravity = VS Code Integration</li><li><strong>Subagents:</strong> Claude Code ทำงาน Sequential | Antigravity มี Subagents Parallel</li><li><strong>ราคา:</strong> Claude Code คิด API Token | Antigravity รวมใน Google One AI Premium</li><li><strong>Context:</strong> Claude Code 200K tokens | Antigravity 1M tokens (Gemini 1.5)</li><li><strong>Tools:</strong> Claude Code สร้าง Tools ได้ | Antigravity มี Tool Library ครบ</li></ul><h2>จุดเด่น Claude Code</h2><ul><li>✅ Claude เก่งงาน Writing/Analysis มากกว่า Gemini</li><li>✅ Community และ Documentation ดีมาก</li><li>✅ ใช้งานง่ายในทุก Environment</li></ul><h2>จุดเด่น Google Antigravity</h2><ul><li>✅ Context Window ใหญ่กว่า 5 เท่า (1M vs 200K)</li><li>✅ Parallel Subagents — ทำหลายงานพร้อมกัน</li><li>✅ Integrate กับ Google Workspace (Drive, Sheets, Docs)</li><li>✅ Planning Mode ช่วยวางแผนก่อนทำ</li></ul><div class="tip-box"><strong>💡 สรุป:</strong> ถ้าใช้ Google One อยู่แล้ว Antigravity คุ้มกว่า ถ้าต้องการ Claude Model โดยเฉพาะ Claude Code ดีกว่า</div>'
  },
  {
    number: 11,
    slug: 'choose-right',
    emoji: '🎯',
    title: 'สรุป: คุณคือใคร? ควรใช้ตัวไหน? ROI ของแต่ละตัว',
    content: '<h2>Decision Framework: เลือก Tool ให้ถูกกับตัวคุณ</h2><h2>ถ้าคุณคือ...</h2><ul><li><strong>พนักงานออฟฟิศ / ผู้บริหาร:</strong> → ใช้ <strong>claude.ai Pro</strong> ($20/เดือน) ใช้ Projects, Artifacts, Memory ให้เต็มที่</li><li><strong>นักการตลาด / Content Creator:</strong> → ใช้ <strong>claude.ai Pro</strong> + เรียน Prompt Engineering</li><li><strong>Developer / Programmer:</strong> → ใช้ <strong>claude.ai + Claude Code</strong> คู่กัน</li><li><strong>อยากเรียนแบบมีคนสอนเป็นภาษาไทย:</strong> → ซื้อ <strong>Claude Cowork Workshop</strong></li><li><strong>ใช้ VS Code และ Google Workspace:</strong> → ลอง <strong>Google Antigravity</strong></li></ul><h2>ROI ของแต่ละตัว</h2><ul><li><strong>claude.ai Pro ($20/เดือน):</strong> ถ้าประหยัดเวลาได้ 1 ชั่วโมง/วัน คุ้มมากใน 3-4 วัน</li><li><strong>Claude Code (~$10-20/เดือน):</strong> Developer ที่ใช้เป็น เขียนโค้ดเร็วขึ้น 2-3x</li><li><strong>Claude Cowork (~1,000-3,000 บาท):</strong> ลงทุนครั้งเดียว ได้ทักษะใช้ตลอดชีพ</li></ul><h2>Starter Pack แนะนำ</h2><pre><code>สัปดาห์ที่ 1: ทดลอง claude.ai Free ก่อน\nสัปดาห์ที่ 2: Upgrade เป็น Pro ถ้าใช้บ่อย\nเดือนที่ 2: ถ้าเป็น Dev ลอง Claude Code\nเดือนที่ 3: Evaluate ROI และตัดสินใจ</code></pre><div class="tip-box"><strong>💡 คำแนะนำสุดท้าย:</strong> ไม่ต้องเลือกแค่ตัวเดียว! คน Top Performer มักใช้ claude.ai สำหรับงานทั่วไป + Claude Code หรือ Antigravity สำหรับงาน Coding พร้อมกัน</div>'
  }
];
