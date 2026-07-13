export const chapters = [
  {
    number: 1,
    slug: 'n8n-intro',
    emoji: '🤖',
    title: 'n8n คืออะไร? (No-Code Automation)',
    content: `
      <h2>รู้จักกับ n8n — เครื่องมือ Automation สุดทรงพลัง</h2>

      <img src='/images/lessons/n8n-workflow.png' alt='n8n Workflow Builder Interface' />

      <p>
        <strong>n8n</strong> (อ่านว่า "เอ็น-เอท-เอ็น") คือเครื่องมือ <strong>Workflow Automation แบบ Open Source</strong>
        ที่ช่วยให้คุณเชื่อมต่อแอปพลิเคชันต่าง ๆ เข้าด้วยกันโดยไม่ต้องเขียนโค้ด (หรือเขียนน้อยมาก)
        ด้วยอินเทอร์เฟซแบบลากวาง (Drag & Drop) คุณสามารถสร้าง Flow อัตโนมัติที่ซับซ้อนได้อย่างง่ายดาย
      </p>

      <h3>ทำไมต้อง n8n?</h3>

      <p>
        ในยุคที่ธุรกิจต้องการความรวดเร็วและอัตโนมัติ เครื่องมืออย่าง Zapier หรือ Make (Integromat) 
        ก็เป็นที่นิยมอยู่แล้ว แต่ n8n มีข้อได้เปรียบที่สำคัญหลายประการ:
      </p>

      <table>
        <thead>
          <tr>
            <th>คุณสมบัติ</th>
            <th>n8n</th>
            <th>Zapier</th>
            <th>Make (Integromat)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ราคา</td>
            <td>✅ ฟรี (Self-hosted)</td>
            <td>❌ เริ่มต้น $19.99/เดือน</td>
            <td>⚠️ มี Free plan จำกัด</td>
          </tr>
          <tr>
            <td>Open Source</td>
            <td>✅ ใช่</td>
            <td>❌ ไม่ใช่</td>
            <td>❌ ไม่ใช่</td>
          </tr>
          <tr>
            <td>Self-hosted</td>
            <td>✅ ได้</td>
            <td>❌ ไม่ได้</td>
            <td>❌ ไม่ได้</td>
          </tr>
          <tr>
            <td>Custom Code</td>
            <td>✅ JavaScript/Python</td>
            <td>⚠️ จำกัด</td>
            <td>⚠️ จำกัด</td>
          </tr>
          <tr>
            <td>จำนวน Workflow</td>
            <td>✅ ไม่จำกัด</td>
            <td>❌ ตาม Plan</td>
            <td>❌ ตาม Plan</td>
          </tr>
          <tr>
            <td>Data Privacy</td>
            <td>✅ ข้อมูลอยู่ที่เรา</td>
            <td>⚠️ อยู่บน Cloud</td>
            <td>⚠️ อยู่บน Cloud</td>
          </tr>
          <tr>
            <td>LINE Integration</td>
            <td>✅ ผ่าน HTTP/Webhook</td>
            <td>⚠️ จำกัด</td>
            <td>✅ มี Module</td>
          </tr>
        </tbody>
      </table>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> n8n เหมาะมากสำหรับธุรกิจขนาดเล็กถึงกลางที่ต้องการระบบอัตโนมัติ
        โดยไม่ต้องเสียค่าใช้จ่ายรายเดือนสูง เพราะสามารถ Self-host ได้ฟรี!
      </div>

      <h3>แนวคิด No-Code Automation</h3>

      <p>
        No-Code Automation คือแนวคิดที่ช่วยให้คนที่ไม่ได้เป็นนักพัฒนาซอฟต์แวร์สามารถสร้างระบบอัตโนมัติได้
        โดยใช้เครื่องมือที่มี Visual Interface แทนการเขียนโค้ด ใน n8n แต่ละขั้นตอนจะถูกแทนด้วย <strong>"Node"</strong>
      </p>

      <h3>องค์ประกอบหลักของ n8n</h3>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>Trigger Node</strong> — จุดเริ่มต้นของ Workflow เช่น Webhook, Schedule, หรือ Event จากแอปอื่น
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>Action Node</strong> — Node ที่ทำงานบางอย่าง เช่น ส่ง HTTP Request, อ่าน/เขียน Google Sheets, 
        ส่งข้อความ LINE
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>Logic Node</strong> — Node สำหรับควบคุมลอจิก เช่น IF/Switch, Loop, Merge
      </div>

      <div class='step'>
        <span class='step-number'>4</span>
        <strong>Data Transformation</strong> — Node สำหรับแปลงข้อมูล เช่น Set, Function, Code
      </div>

      <h3>Use Cases กับ LINE OA</h3>

      <p>เมื่อรวม n8n เข้ากับ LINE Official Account คุณสามารถสร้างระบบได้หลากหลาย:</p>

      <ul>
        <li>🤖 <strong>AI Chatbot</strong> — ตอบคำถามลูกค้าอัตโนมัติด้วย ChatGPT/Claude</li>
        <li>📦 <strong>ระบบรับออเดอร์</strong> — รับออเดอร์ผ่าน LINE แล้วบันทึกลง Google Sheets อัตโนมัติ</li>
        <li>🛍️ <strong>แคตตาล็อกสินค้า</strong> — ส่ง Flex Message สินค้าแบบสวยงามเมื่อลูกค้าถาม</li>
        <li>📚 <strong>ระบบ FAQ อัจฉริยะ</strong> — ค้นหาคำตอบจากฐานข้อมูลด้วย AI (RAG)</li>
        <li>🔔 <strong>แจ้งเตือนอัตโนมัติ</strong> — แจ้งเตือน Admin เมื่อมีออเดอร์ใหม่หรือลูกค้าต้องการความช่วยเหลือ</li>
        <li>📊 <strong>รายงานสรุป</strong> — สรุปยอดขายประจำวัน/สัปดาห์แล้วส่งเข้ากลุ่ม LINE</li>
      </ul>

      <h3>ตัวอย่าง Workflow: ตอบกลับข้อความอัตโนมัติ</h3>

      <p>ลองดูตัวอย่าง Workflow ง่าย ๆ ที่รับข้อความจาก LINE แล้วตอบกลับอัตโนมัติ:</p>

      <pre><code class="language-text">
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│  Webhook     │───▶│  IF Node     │───▶│  HTTP Request   │
│  (LINE)      │    │  (ตรวจข้อความ) │    │  (LINE Reply)   │
└─────────────┘    └──────────────┘    └─────────────────┘
      </code></pre>

      <p>ตัวอย่างโครงสร้าง Workflow ใน n8n (JSON):</p>

      <pre><code class="language-json">{
  "name": "LINE Auto Reply",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "line-webhook"
      },
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "name": "LINE Webhook"
    },
    {
      "parameters": {
        "conditions": {
          "string": [{
            "value1": "={{ $json.events[0].type }}",
            "value2": "message"
          }]
        }
      },
      "type": "n8n-nodes-base.if",
      "position": [450, 300],
      "name": "Is Message?"
    }
  ],
  "connections": {
    "LINE Webhook": {
      "main": [
        [{ "node": "Is Message?", "type": "main", "index": 0 }]
      ]
    }
  }
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> แม้ n8n จะเป็น No-Code แต่การเชื่อมต่อกับ LINE API 
        ยังต้องเข้าใจพื้นฐานของ REST API, JSON และ Webhook 
        ถ้าคุณยังไม่แน่ใจเรื่องเหล่านี้ แนะนำให้ศึกษาคอร์ส LINE API พื้นฐานก่อน
      </div>

      <h3>Visual Workflow Builder — ข้อดีที่ทำให้ n8n โดดเด่น</h3>

      <p>
        สิ่งที่ทำให้ n8n แตกต่างจากเครื่องมืออื่นคือ <strong>Canvas-based Editor</strong> 
        ที่ช่วยให้คุณมองเห็นภาพรวมของ Workflow ทั้งหมดได้ในหน้าเดียว
        คุณสามารถลากเส้นเชื่อมต่อ Node ต่าง ๆ ได้อย่างอิสระ รวมถึง:
      </p>

      <ul>
        <li>ดู Input/Output ของแต่ละ Node แบบ Real-time</li>
        <li>Debug ได้ทีละ Node</li>
        <li>ทดสอบ Workflow ได้ทันทีโดยไม่ต้อง Deploy</li>
        <li>Export/Import Workflow เป็น JSON ได้</li>
        <li>แชร์ Workflow กับทีมได้ง่าย</li>
      </ul>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> n8n มี Community ที่ใหญ่มาก คุณสามารถหา Workflow Template 
        สำเร็จรูปได้ที่ <code>n8n.io/workflows</code> รวมถึง Template สำหรับ LINE Bot ด้วย!
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>n8n คืออะไรและทำไมถึงเหมาะกับการทำ LINE Automation</li>
        <li>ข้อแตกต่างระหว่าง n8n กับ Zapier และ Make</li>
        <li>องค์ประกอบหลักของ n8n: Trigger, Action, Logic, Data Transformation</li>
        <li>Use Cases ที่น่าสนใจเมื่อใช้ n8n กับ LINE OA</li>
        <li>ข้อดีของ Visual Workflow Builder</li>
      </ul>

      <p>ในบทต่อไปเราจะมาติดตั้ง n8n กันจริง ๆ ทั้งแบบ Docker และ npm 🚀</p>
    `
  },
  {
    number: 2,
    slug: 'install-n8n',
    emoji: '⚙️',
    title: 'ติดตั้ง n8n',
    content: `
      <h2>ติดตั้ง n8n — พร้อมใช้งานใน 10 นาที</h2>

      <img src='/images/lessons/n8n-install.png' alt='การติดตั้ง n8n' />

      <p>
        ในบทนี้เราจะมาติดตั้ง n8n กัน โดยมี 3 วิธีหลัก ๆ ให้เลือก:
        ติดตั้งผ่าน <strong>Docker</strong> (แนะนำ), ติดตั้งผ่าน <strong>npm</strong>, 
        หรือใช้ <strong>Cloud Service</strong> อย่าง Railway/Render
      </p>

      <h3>วิธีที่ 1: ติดตั้งผ่าน Docker (แนะนำ)</h3>

      <p>
        Docker เป็นวิธีที่ง่ายและเสถียรที่สุดในการติดตั้ง n8n 
        เพราะทุกอย่างถูก Package ไว้ในตัวเดียว ไม่ต้องกังวลเรื่อง Dependencies
      </p>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>ติดตั้ง Docker Desktop</strong> — ดาวน์โหลดจาก <code>docker.com</code> 
        และติดตั้งให้เรียบร้อย (รองรับทั้ง Windows, Mac, Linux)
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>สร้างไฟล์ docker-compose.yml</strong> — สร้างโฟลเดอร์สำหรับ n8n แล้วสร้างไฟล์ตามนี้:
      </div>

      <pre><code class="language-yaml"># docker-compose.yml
version: '3.8'

services:
  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=your_secure_password
      - N8N_HOST=localhost
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - GENERIC_TIMEZONE=Asia/Bangkok
      - TZ=Asia/Bangkok
      - WEBHOOK_URL=https://your-domain.com/
      - N8N_ENCRYPTION_KEY=your-random-encryption-key
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
    driver: local</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> อย่าลืมเปลี่ยน <code>N8N_BASIC_AUTH_PASSWORD</code> 
        และ <code>N8N_ENCRYPTION_KEY</code> เป็นค่าที่ปลอดภัย! 
        สามารถสร้าง Encryption Key ด้วย <code>openssl rand -hex 32</code>
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>รัน n8n</strong> — เปิด Terminal แล้วรันคำสั่ง:
      </div>

      <pre><code class="language-bash"># รัน n8n ในโหมด Background
docker compose up -d

# ดู Logs
docker compose logs -f n8n

# หยุด n8n
docker compose down

# อัพเดท n8n เป็นเวอร์ชันล่าสุด
docker compose pull
docker compose up -d</code></pre>

      <div class='step'>
        <span class='step-number'>4</span>
        <strong>เปิดใช้งาน</strong> — เข้า <code>http://localhost:5678</code> ในเบราว์เซอร์
      </div>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ถ้าคุณจะใช้ n8n กับ LINE Webhook ในเครื่อง Local 
        คุณต้องใช้ Tunnel อย่าง <code>ngrok</code> หรือ <code>cloudflared</code> 
        เพื่อให้ LINE สามารถส่งข้อมูลเข้ามาได้ เพราะ LINE ต้องการ HTTPS URL ที่เข้าถึงได้จากอินเทอร์เน็ต
      </div>

      <h3>การใช้ ngrok สำหรับ Development</h3>

      <pre><code class="language-bash"># ติดตั้ง ngrok
# Windows: choco install ngrok
# Mac: brew install ngrok

# สร้าง Tunnel ไปยัง n8n
ngrok http 5678

# จะได้ URL เช่น https://xxxx-xxx.ngrok-free.app
# ใช้ URL นี้เป็น WEBHOOK_URL ใน LINE Developer Console</code></pre>

      <h3>วิธีที่ 2: ติดตั้งผ่าน npm</h3>

      <p>
        ถ้าคุณมี Node.js ติดตั้งอยู่แล้ว (เวอร์ชัน 18 ขึ้นไป) 
        สามารถติดตั้ง n8n ผ่าน npm ได้โดยตรง:
      </p>

      <pre><code class="language-bash"># ติดตั้ง n8n แบบ Global
npm install -g n8n

# รัน n8n
n8n start

# หรือรันพร้อมกำหนด Tunnel
n8n start --tunnel</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> การใช้ <code>n8n start --tunnel</code> จะสร้าง Tunnel ให้อัตโนมัติ
        เหมาะสำหรับ Development แต่ไม่แนะนำสำหรับ Production
      </div>

      <h3>ตั้งค่า Environment Variables สำหรับ npm</h3>

      <pre><code class="language-bash"># สร้างไฟล์ .env
export N8N_BASIC_AUTH_ACTIVE=true
export N8N_BASIC_AUTH_USER=admin
export N8N_BASIC_AUTH_PASSWORD=your_password
export GENERIC_TIMEZONE=Asia/Bangkok
export N8N_ENCRYPTION_KEY=your-random-key

# โหลด Environment Variables
source .env

# รัน n8n
n8n start</code></pre>

      <h3>วิธีที่ 3: Deploy บน Cloud (Railway)</h3>

      <p>
        ถ้าไม่อยากจัดการ Server เอง สามารถ Deploy n8n บน Cloud ได้ 
        Railway เป็นตัวเลือกที่ดีเพราะง่ายและราคาไม่แพง:
      </p>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>สมัคร Railway</strong> — ไปที่ <code>railway.app</code> แล้วสมัครด้วย GitHub
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>สร้าง Project ใหม่</strong> — คลิก "New Project" → "Deploy a Template" → ค้นหา "n8n"
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>ตั้งค่า Environment Variables</strong>:
      </div>

      <pre><code class="language-text">N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_secure_password
N8N_ENCRYPTION_KEY=your-random-key
GENERIC_TIMEZONE=Asia/Bangkok
WEBHOOK_URL=https://your-app.up.railway.app/</code></pre>

      <div class='step'>
        <span class='step-number'>4</span>
        <strong>Deploy</strong> — Railway จะ Deploy n8n ให้อัตโนมัติ พร้อม URL สาธารณะ
      </div>

      <h3>วิธีที่ 3.2: Deploy บน Render</h3>

      <p>อีกทางเลือกที่ดีคือ Render ซึ่งมี Free Plan ให้ใช้:</p>

      <div class='step'>
        <span class='step-number'>1</span>
        สมัครที่ <code>render.com</code> แล้วสร้าง "New Web Service"
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        เลือก "Docker" แล้วใส่ Image: <code>docker.n8n.io/n8nio/n8n</code>
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        ตั้ง Port เป็น <code>5678</code> แล้ว Deploy
      </div>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> Render Free Plan จะ Spin down หลังจากไม่มี Traffic 15 นาที 
        ทำให้ Webhook อาจพลาดข้อความได้ สำหรับ Production แนะนำใช้ Paid Plan หรือ Railway
      </div>

      <h3>ทัวร์ n8n UI</h3>

      <img src='/images/lessons/n8n-ui-overview.png' alt='n8n UI Overview' />

      <p>เมื่อเข้า n8n ครั้งแรก คุณจะเจอ UI หลัก ๆ ดังนี้:</p>

      <ul>
        <li><strong>Canvas (ตรงกลาง)</strong> — พื้นที่สร้าง Workflow ลาก Node มาวางได้</li>
        <li><strong>Node Panel (ซ้าย)</strong> — รายการ Node ทั้งหมดที่ใช้ได้ แบ่งตามหมวดหมู่</li>
        <li><strong>Execution Log</strong> — ดูประวัติการรันของ Workflow</li>
        <li><strong>Settings</strong> — ตั้งค่า Workflow, Credentials, Variables</li>
        <li><strong>Credentials</strong> — จัดการ API Keys และ Tokens สำหรับเชื่อมต่อบริการต่าง ๆ</li>
      </ul>

      <h3>สร้าง Workflow แรก</h3>

      <p>ลองสร้าง Workflow ง่าย ๆ เพื่อทดสอบ:</p>

      <div class='step'>
        <span class='step-number'>1</span>
        คลิก <strong>"+"</strong> เพื่อสร้าง Workflow ใหม่
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        คลิก <strong>"+"</strong> บน Canvas เพื่อเพิ่ม Node → ค้นหา "Manual Trigger" → เพิ่ม
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        เพิ่ม Node "Set" → ตั้งค่า <code>message = "Hello from n8n!"</code>
      </div>

      <div class='step'>
        <span class='step-number'>4</span>
        เชื่อมต่อ Manual Trigger → Set → คลิก "Execute Workflow"
      </div>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ทุกครั้งที่คุณทดสอบ Workflow ให้ดูผลลัพธ์ที่ Output ของแต่ละ Node
        n8n จะแสดง Data ที่ผ่านแต่ละ Node ให้เห็นชัดเจน
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>ติดตั้ง n8n ผ่าน Docker ด้วย docker-compose.yml</li>
        <li>ติดตั้ง n8n ผ่าน npm</li>
        <li>Deploy n8n บน Cloud (Railway / Render)</li>
        <li>ใช้ ngrok สำหรับ Local Development</li>
        <li>ทัวร์ UI และสร้าง Workflow แรก</li>
      </ul>

      <p>ในบทต่อไปเราจะมาเชื่อม LINE กับ n8n ผ่าน Webhook กัน! 🔗</p>
    `
  },
  {
    number: 3,
    slug: 'line-n8n-webhook',
    emoji: '🔗',
    title: 'เชื่อม LINE กับ n8n (Webhook)',
    content: `
      <h2>เชื่อมต่อ LINE Messaging API กับ n8n ผ่าน Webhook</h2>

      <img src='/images/lessons/line-n8n-webhook.png' alt='LINE + n8n Webhook Connection' />

      <p>
        ในบทนี้เราจะมาเชื่อมต่อ LINE Official Account กับ n8n 
        เพื่อให้ n8n รับ Event ต่าง ๆ จาก LINE ได้ เช่น ข้อความ, Postback, Follow
        โดยใช้ <strong>Webhook Node</strong> ของ n8n
      </p>

      <h3>ขั้นตอนที่ 1: สร้าง Webhook Node ใน n8n</h3>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>สร้าง Workflow ใหม่</strong> — ตั้งชื่อว่า "LINE Webhook Handler"
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>เพิ่ม Webhook Node</strong> — คลิก "+" → ค้นหา "Webhook" → เพิ่มลงใน Canvas
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>ตั้งค่า Webhook Node</strong> ตามนี้:
      </div>

      <pre><code class="language-json">{
  "parameters": {
    "httpMethod": "POST",
    "path": "line-webhook",
    "responseMode": "responseNode",
    "options": {
      "rawBody": true
    }
  },
  "type": "n8n-nodes-base.webhook",
  "typeVersion": 2,
  "position": [250, 300],
  "name": "LINE Webhook",
  "webhookId": "line-webhook-id"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ตั้ง <code>responseMode</code> เป็น <code>"responseNode"</code> 
        เพื่อให้เราสามารถส่ง Response กลับไปที่ LINE ได้เอง (ต้องตอบ 200 OK ภายใน 1 วินาที)
        ถ้าใช้ <code>"lastNode"</code> อาจทำให้ LINE Webhook timeout ได้
      </div>

      <h3>ขั้นตอนที่ 2: ส่ง Response กลับ LINE ทันที</h3>

      <p>
        LINE Webhook ต้องได้รับ HTTP 200 Response ภายใน 1 วินาที 
        ดังนั้นเราต้องเพิ่ม "Respond to Webhook" Node ทันทีหลัง Webhook:
      </p>

      <pre><code class="language-json">{
  "parameters": {
    "respondWith": "text",
    "responseBody": "OK",
    "options": {
      "responseCode": 200
    }
  },
  "type": "n8n-nodes-base.respondToWebhook",
  "typeVersion": 1,
  "position": [450, 300],
  "name": "Respond OK"
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ถ้าไม่ส่ง Response กลับภายใน 1 วินาที LINE จะถือว่า Webhook ล้มเหลว 
        และอาจ Retry ส่งข้อมูลซ้ำ หรือปิด Webhook อัตโนมัติ!
      </div>

      <h3>ขั้นตอนที่ 3: ตั้งค่า LINE Developer Console</h3>

      <div class='step'>
        <span class='step-number'>1</span>
        เข้า <code>developers.line.biz</code> → เลือก Provider → เลือก Channel (Messaging API)
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        ไปที่แท็บ <strong>"Messaging API"</strong>
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        ในส่วน <strong>"Webhook settings"</strong>:
        <ul>
          <li>Webhook URL: <code>https://your-n8n-domain.com/webhook/line-webhook</code></li>
          <li>Use webhook: <strong>เปิด</strong></li>
        </ul>
      </div>

      <div class='step'>
        <span class='step-number'>4</span>
        คลิก <strong>"Verify"</strong> เพื่อทดสอบการเชื่อมต่อ
      </div>

      <div class='step'>
        <span class='step-number'>5</span>
        ปิด <strong>"Auto-reply messages"</strong> เพื่อไม่ให้ LINE ตอบอัตโนมัติซ้ำซ้อน
      </div>

      <img src='/images/lessons/line-webhook-settings.png' alt='LINE Webhook Settings' />

      <h3>ขั้นตอนที่ 4: Parse Webhook Events</h3>

      <p>
        เมื่อมี Event เกิดขึ้นจาก LINE จะส่ง JSON มาที่ Webhook ในรูปแบบนี้:
      </p>

      <h4>Message Event (ข้อความ)</h4>

      <pre><code class="language-json">{
  "destination": "U1234567890abcdef",
  "events": [
    {
      "type": "message",
      "message": {
        "type": "text",
        "id": "46812345678",
        "text": "สวัสดีครับ"
      },
      "webhookEventId": "01HXYZ...",
      "timestamp": 1704067200000,
      "source": {
        "type": "user",
        "userId": "U9876543210abcdef"
      },
      "replyToken": "abc123def456...",
      "mode": "active"
    }
  ]
}</code></pre>

      <h4>Follow Event (เพิ่มเพื่อน)</h4>

      <pre><code class="language-json">{
  "events": [
    {
      "type": "follow",
      "timestamp": 1704067200000,
      "source": {
        "type": "user",
        "userId": "U9876543210abcdef"
      },
      "replyToken": "abc123def456...",
      "mode": "active"
    }
  ]
}</code></pre>

      <h4>Postback Event</h4>

      <pre><code class="language-json">{
  "events": [
    {
      "type": "postback",
      "timestamp": 1704067200000,
      "source": {
        "type": "user",
        "userId": "U9876543210abcdef"
      },
      "replyToken": "abc123def456...",
      "postback": {
        "data": "action=buy&itemId=123"
      },
      "mode": "active"
    }
  ]
}</code></pre>

      <h3>ขั้นตอนที่ 5: แยกประเภท Event ด้วย Switch Node</h3>

      <p>เพิ่ม Switch Node เพื่อแยกการทำงานตามประเภท Event:</p>

      <pre><code class="language-json">{
  "parameters": {
    "rules": {
      "rules": [
        {
          "outputKey": "message",
          "conditions": {
            "options": { "caseSensitive": true },
            "conditions": [{
              "leftValue": "={{ $json.body.events[0].type }}",
              "rightValue": "message",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "follow",
          "conditions": {
            "options": { "caseSensitive": true },
            "conditions": [{
              "leftValue": "={{ $json.body.events[0].type }}",
              "rightValue": "follow",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "postback",
          "conditions": {
            "options": { "caseSensitive": true },
            "conditions": [{
              "leftValue": "={{ $json.body.events[0].type }}",
              "rightValue": "postback",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        }
      ]
    }
  },
  "type": "n8n-nodes-base.switch",
  "typeVersion": 3,
  "position": [650, 300],
  "name": "Event Router"
}</code></pre>

      <h3>ทดสอบ Webhook ด้วย curl</h3>

      <p>คุณสามารถทดสอบ Webhook ได้โดยไม่ต้องส่งข้อความจาก LINE จริง ๆ:</p>

      <pre><code class="language-bash"># ทดสอบส่ง Message Event
curl -X POST https://your-n8n-domain.com/webhook/line-webhook \\
  -H "Content-Type: application/json" \\
  -d '{
    "events": [{
      "type": "message",
      "message": {
        "type": "text",
        "id": "12345",
        "text": "ทดสอบ"
      },
      "source": {
        "type": "user",
        "userId": "U_TEST_USER"
      },
      "replyToken": "test_reply_token",
      "timestamp": 1704067200000,
      "mode": "active"
    }]
  }'</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ใน n8n ให้คลิก "Listen for Test Event" ที่ Webhook Node ก่อน
        แล้วค่อยส่ง curl หรือส่งข้อความจาก LINE จริง จะเห็นข้อมูลที่เข้ามาทันที
      </div>

      <h3>Signature Verification (ความปลอดภัย)</h3>

      <p>
        เพื่อความปลอดภัย ควรตรวจสอบ Signature ที่ LINE ส่งมากับ Header <code>x-line-signature</code>
        เพื่อยืนยันว่า Request มาจาก LINE จริง:
      </p>

      <pre><code class="language-javascript">// Function Node สำหรับตรวจ Signature
const crypto = require('crypto');

const channelSecret = 'YOUR_CHANNEL_SECRET';
const signature = $input.first().headers['x-line-signature'];
const body = JSON.stringify($input.first().json.body);

const hash = crypto
  .createHmac('SHA256', channelSecret)
  .update(body)
  .digest('base64');

if (hash !== signature) {
  throw new Error('Invalid signature');
}

return $input.all();</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ในการใช้งาน Production ควรตรวจสอบ Signature ทุกครั้ง
        เพื่อป้องกันการโจมตีจากภายนอก ไม่ควรข้ามขั้นตอนนี้!
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>สร้าง Webhook Node ใน n8n สำหรับรับ Event จาก LINE</li>
        <li>ตั้งค่า Webhook URL ใน LINE Developer Console</li>
        <li>โครงสร้างของ LINE Webhook Events (message, follow, postback)</li>
        <li>ใช้ Switch Node แยกประเภท Event</li>
        <li>ทดสอบ Webhook ด้วย curl</li>
        <li>ตรวจสอบ Signature เพื่อความปลอดภัย</li>
      </ul>

      <p>ในบทต่อไปเราจะสร้าง Flow แรก: รับข้อความ → ส่งให้ AI → ตอบกลับอัตโนมัติ! 🧠</p>
    `
  },
  {
    number: 4,
    slug: 'flow-ai-reply',
    emoji: '🧠',
    title: 'Flow: ข้อความ → AI → ตอบกลับ',
    content: `
      <h2>สร้าง Flow: รับข้อความจาก LINE → ส่งให้ AI → ตอบกลับอัตโนมัติ</h2>

      <img src='/images/lessons/flow-ai-reply.png' alt='AI Reply Flow Diagram' />

      <p>
        นี่คือ Flow ที่น่าตื่นเต้นที่สุด! เราจะสร้างระบบที่รับข้อความจากลูกค้าผ่าน LINE 
        ส่งไปให้ AI (OpenAI/Claude) ประมวลผล แล้วส่งคำตอบกลับไปที่ LINE อัตโนมัติ
        ทั้งหมดนี้ทำได้โดยไม่ต้องเขียนโค้ดซักบรรทัด!
      </p>

      <h3>ภาพรวมของ Flow</h3>

      <pre><code class="language-text">
┌───────────┐    ┌──────────┐    ┌───────────┐    ┌──────────────┐    ┌─────────────┐
│  LINE     │───▶│ Respond  │───▶│  Extract  │───▶│  OpenAI API  │───▶│  LINE Reply │
│  Webhook  │    │  200 OK  │    │  Message  │    │  (ChatGPT)   │    │  API        │
└───────────┘    └──────────┘    └───────────┘    └──────────────┘    └─────────────┘
      </code></pre>

      <h3>ขั้นตอนที่ 1: Webhook + Respond OK</h3>

      <p>ใช้ Webhook Node และ Respond to Webhook Node จากบทที่แล้ว:</p>

      <pre><code class="language-json">{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "line-ai-bot",
        "responseMode": "responseNode",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "name": "LINE Webhook"
    },
    {
      "parameters": {
        "respondWith": "noData",
        "options": { "responseCode": 200 }
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [450, 300],
      "name": "Respond 200"
    }
  ]
}</code></pre>

      <h3>ขั้นตอนที่ 2: ดึงข้อมูลจาก Event</h3>

      <p>ใช้ Set Node เพื่อดึงข้อมูลที่ต้องการจาก Webhook Event:</p>

      <pre><code class="language-json">{
  "parameters": {
    "mode": "manual",
    "duplicateItem": false,
    "assignments": {
      "assignments": [
        {
          "id": "user-message",
          "name": "userMessage",
          "value": "={{ $json.body.events[0].message.text }}",
          "type": "string"
        },
        {
          "id": "reply-token",
          "name": "replyToken",
          "value": "={{ $json.body.events[0].replyToken }}",
          "type": "string"
        },
        {
          "id": "user-id",
          "name": "userId",
          "value": "={{ $json.body.events[0].source.userId }}",
          "type": "string"
        }
      ]
    }
  },
  "type": "n8n-nodes-base.set",
  "position": [650, 300],
  "name": "Extract Data"
}</code></pre>

      <h3>ขั้นตอนที่ 3: ส่งข้อความไป OpenAI API</h3>

      <p>
        ใช้ HTTP Request Node เพื่อเรียก OpenAI ChatGPT API 
        คุณต้องมี API Key จาก <code>platform.openai.com</code>
      </p>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.openai.com/v1/chat/completions",
    "authentication": "genericCredentialType",
    "genericAuthType": "httpHeaderAuth",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        {
          "name": "Content-Type",
          "value": "application/json"
        }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"model\": \"gpt-4o-mini\",\n  \"messages\": [\n    {\n      \"role\": \"system\",\n      \"content\": \"คุณเป็นผู้ช่วยบริการลูกค้าของร้าน ABC Shop ตอบเป็นภาษาไทย สุภาพ กระชับ ห้ามยาวเกิน 500 ตัวอักษร ถ้าไม่รู้คำตอบให้บอกว่าจะส่งต่อให้เจ้าหน้าที่\"\n    },\n    {\n      \"role\": \"user\",\n      \"content\": \"{{ $json.userMessage }}\"\n    }\n  ],\n  \"max_tokens\": 500,\n  \"temperature\": 0.7\n}",
    "options": {}
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [850, 300],
  "name": "Call OpenAI"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> การออกแบบ System Prompt เป็นสิ่งสำคัญมาก! 
        ควรระบุบทบาท ภาษาที่ใช้ ข้อจำกัด และกฎเกณฑ์ให้ชัดเจน
        เพื่อให้ AI ตอบได้ตรงตามความต้องการ
      </div>

      <h3>ตัวอย่าง System Prompt ที่ดี</h3>

      <pre><code class="language-text">คุณเป็นผู้ช่วยบริการลูกค้าของร้าน "ABC Shop" ซึ่งขายเสื้อผ้าแฟชั่น

กฎการตอบ:
1. ตอบเป็นภาษาไทยเสมอ
2. สุภาพและเป็นมิตร ใช้ครับ/ค่ะ
3. คำตอบไม่เกิน 500 ตัวอักษร (เพราะ LINE มีจำกัด)
4. ถ้าลูกค้าถามเรื่องราคา ให้ตอบช่วงราคาคร่าว ๆ
5. ถ้าลูกค้าต้องการสั่งซื้อ ให้แนะนำรูปแบบการสั่ง:
   "สั่ง [ชื่อสินค้า] จำนวน [X] ชิ้น"
6. ถ้าไม่แน่ใจคำตอบ ตอบว่า "ขอส่งต่อให้เจ้าหน้าที่ดูแลนะครับ/ค่ะ"
7. ห้ามแนะนำสินค้าของร้านอื่น

ข้อมูลร้าน:
- เปิดทุกวัน 9:00-21:00
- จัดส่ง Kerry, Flash, ไปรษณีย์ไทย
- รับชำระผ่านโอนแบงก์, PromptPay
- มีนโยบายเปลี่ยน/คืนสินค้าภายใน 7 วัน</code></pre>

      <h3>ใช้ Claude API แทน OpenAI</h3>

      <p>ถ้าต้องการใช้ Claude จาก Anthropic แทน ก็เปลี่ยน HTTP Request ได้ง่าย ๆ:</p>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.anthropic.com/v1/messages",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "x-api-key", "value": "YOUR_CLAUDE_API_KEY" },
        { "name": "anthropic-version", "value": "2023-06-01" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"model\": \"claude-sonnet-4-20250514\",\n  \"max_tokens\": 500,\n  \"system\": \"คุณเป็นผู้ช่วยบริการลูกค้าร้าน ABC Shop ตอบภาษาไทย สุภาพ กระชับ\",\n  \"messages\": [\n    {\n      \"role\": \"user\",\n      \"content\": \"{{ $json.userMessage }}\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [850, 300],
  "name": "Call Claude"
}</code></pre>

      <h3>ขั้นตอนที่ 4: ดึงคำตอบ AI</h3>

      <p>ดึงคำตอบจาก AI Response ด้วย Set Node:</p>

      <pre><code class="language-json">{
  "parameters": {
    "mode": "manual",
    "assignments": {
      "assignments": [
        {
          "id": "ai-reply",
          "name": "aiReply",
          "value": "={{ $json.choices[0].message.content }}",
          "type": "string"
        }
      ]
    }
  },
  "type": "n8n-nodes-base.set",
  "position": [1050, 300],
  "name": "Parse AI Response"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> สำหรับ Claude API โครงสร้าง Response จะต่างจาก OpenAI เล็กน้อย
        ใช้ <code>$json.content[0].text</code> แทน <code>$json.choices[0].message.content</code>
      </div>

      <h3>ขั้นตอนที่ 5: ตอบกลับ LINE ด้วย Reply API</h3>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/reply",
    "authentication": "genericCredentialType",
    "genericAuthType": "httpHeaderAuth",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "=Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"replyToken\": \"{{ $('Extract Data').item.json.replyToken }}\",\n  \"messages\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"{{ $json.aiReply }}\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1250, 300],
  "name": "LINE Reply"
}</code></pre>

      <h3>Error Handling — จัดการข้อผิดพลาด</h3>

      <p>
        เราควรเพิ่ม Error Handling เพื่อรองรับกรณีที่ AI API ล้มเหลว:
      </p>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/reply",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "=Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"replyToken\": \"{{ $('Extract Data').item.json.replyToken }}\",\n  \"messages\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"ขออภัยค่ะ ระบบมีปัญหาชั่วคราว กรุณาลองใหม่อีกครั้งนะคะ 🙏\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1250, 500],
  "name": "Error Reply"
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> Reply Token มีอายุแค่ 1 นาที! ถ้า AI ประมวลผลนานเกินไป
        Reply Token อาจหมดอายุ ในกรณีนี้ต้องใช้ Push Message API แทน (ซึ่งมีค่าใช้จ่ายเพิ่มเติม)
      </div>

      <h3>Complete Workflow JSON</h3>

      <p>นี่คือ Workflow เต็ม ๆ ที่สามารถ Import เข้า n8n ได้เลย:</p>

      <pre><code class="language-json">{
  "name": "LINE AI Chatbot",
  "nodes": [
    {
      "parameters": { "httpMethod": "POST", "path": "line-ai-bot", "responseMode": "responseNode" },
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "name": "LINE Webhook"
    },
    {
      "parameters": { "respondWith": "noData", "options": { "responseCode": 200 } },
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [450, 300],
      "name": "Respond 200"
    },
    {
      "parameters": {
        "mode": "manual",
        "assignments": {
          "assignments": [
            { "name": "userMessage", "value": "={{ $json.body.events[0].message.text }}", "type": "string" },
            { "name": "replyToken", "value": "={{ $json.body.events[0].replyToken }}", "type": "string" }
          ]
        }
      },
      "type": "n8n-nodes-base.set",
      "position": [650, 300],
      "name": "Extract Data"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.openai.com/v1/chat/completions",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={ \"model\": \"gpt-4o-mini\", \"messages\": [{ \"role\": \"system\", \"content\": \"คุณเป็นผู้ช่วยร้าน ABC Shop ตอบภาษาไทย\" }, { \"role\": \"user\", \"content\": \"{{ $json.userMessage }}\" }], \"max_tokens\": 500 }"
      },
      "type": "n8n-nodes-base.httpRequest",
      "position": [850, 300],
      "name": "Call OpenAI"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.line.me/v2/bot/message/reply",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={ \"replyToken\": \"{{ $('Extract Data').item.json.replyToken }}\", \"messages\": [{ \"type\": \"text\", \"text\": \"{{ $json.choices[0].message.content }}\" }] }"
      },
      "type": "n8n-nodes-base.httpRequest",
      "position": [1050, 300],
      "name": "LINE Reply"
    }
  ],
  "connections": {
    "LINE Webhook": { "main": [[{ "node": "Respond 200", "type": "main", "index": 0 }]] },
    "Respond 200": { "main": [[{ "node": "Extract Data", "type": "main", "index": 0 }]] },
    "Extract Data": { "main": [[{ "node": "Call OpenAI", "type": "main", "index": 0 }]] },
    "Call OpenAI": { "main": [[{ "node": "LINE Reply", "type": "main", "index": 0 }]] }
  }
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> สามารถ Import Workflow นี้ได้โดย: เปิด n8n → คลิกเมนู "..." → 
        "Import from JSON" → วาง JSON ด้านบน → Done!
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>สร้าง AI Reply Flow แบบครบวงจร</li>
        <li>เชื่อมต่อกับ OpenAI และ Claude API</li>
        <li>ออกแบบ System Prompt สำหรับ LINE Bot</li>
        <li>จัดการ Error Handling</li>
        <li>Import Workflow JSON เข้า n8n</li>
      </ul>

      <p>ในบทต่อไปเราจะสร้าง Flow สำหรับรับออเดอร์และบันทึกลง Google Sheets! 📊</p>
    `
  },
  {
    number: 5,
    slug: 'flow-order-sheets',
    emoji: '📊',
    title: 'Flow: ออเดอร์ → Google Sheets → แจ้ง Admin',
    content: `
      <h2>สร้าง Flow: รับออเดอร์จาก LINE → บันทึก Google Sheets → แจ้ง Admin</h2>

      <img src='/images/lessons/flow-order-sheets.png' alt='Order Processing Flow' />

      <p>
        ในบทนี้เราจะสร้างระบบรับออเดอร์อัตโนมัติ เมื่อลูกค้าส่งข้อความสั่งซื้อผ่าน LINE 
        ระบบจะแยกข้อมูลออเดอร์ บันทึกลง Google Sheets แล้วแจ้ง Admin ทันที
      </p>

      <h3>ภาพรวมของ Flow</h3>

      <pre><code class="language-text">
┌───────────┐    ┌───────────┐    ┌──────────────┐    ┌───────────┐    ┌──────────────┐
│  LINE     │───▶│  Parse    │───▶│  Google      │───▶│  Notify   │───▶│  Reply       │
│  Webhook  │    │  Order    │    │  Sheets      │    │  Admin    │    │  Customer    │
└───────────┘    └───────────┘    └──────────────┘    └───────────┘    └──────────────┘
      </code></pre>

      <h3>รูปแบบข้อความสั่งซื้อ</h3>

      <p>กำหนดให้ลูกค้าส่งข้อความในรูปแบบนี้:</p>

      <pre><code class="language-text">สั่ง เสื้อยืดสีขาว 2
สั่ง กางเกงขาสั้น 1
สั่ง หมวกแก๊ป 3</code></pre>

      <p>หรือแบบบรรทัดเดียว:</p>

      <pre><code class="language-text">สั่ง เสื้อยืดสีขาว 2 ตัว</code></pre>

      <h3>ขั้นตอนที่ 1: Webhook + ตรวจว่าเป็นข้อความสั่งซื้อหรือไม่</h3>

      <pre><code class="language-json">{
  "parameters": {
    "conditions": {
      "options": { "caseSensitive": false },
      "conditions": [
        {
          "leftValue": "={{ $json.body.events[0].message.text }}",
          "rightValue": "สั่ง",
          "operator": {
            "type": "string",
            "operation": "startsWith"
          }
        }
      ]
    }
  },
  "type": "n8n-nodes-base.if",
  "position": [450, 300],
  "name": "Is Order?"
}</code></pre>

      <h3>ขั้นตอนที่ 2: Parse ข้อความสั่งซื้อด้วย Function Node</h3>

      <p>ใช้ Code Node เพื่อแยกข้อมูลออเดอร์จากข้อความ:</p>

      <pre><code class="language-javascript">// Code Node: Parse Order Message
const message = $input.first().json.body.events[0].message.text;
const replyToken = $input.first().json.body.events[0].replyToken;
const userId = $input.first().json.body.events[0].source.userId;
const timestamp = new Date().toISOString();

// แยกแต่ละบรรทัดที่ขึ้นต้นด้วย "สั่ง"
const lines = message.split('\\n').filter(line => 
  line.trim().startsWith('สั่ง')
);

const orders = lines.map(line => {
  // ลบคำว่า "สั่ง" ออก แล้วแยกชื่อสินค้าและจำนวน
  const cleaned = line.replace(/^สั่ง\\s*/, '').trim();
  
  // ใช้ Regex ดึงจำนวน (ตัวเลขท้ายสุด)
  const match = cleaned.match(/^(.+?)\\s+(\\d+)\\s*(ชิ้น|ตัว|อัน|กล่อง|ถุง)?\\s*$/);
  
  if (match) {
    return {
      productName: match[1].trim(),
      quantity: parseInt(match[2]),
      unit: match[3] || 'ชิ้น'
    };
  }
  
  return null;
}).filter(Boolean);

// สร้าง Order ID
const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();

return [{
  json: {
    orderId,
    userId,
    replyToken,
    orders,
    totalItems: orders.reduce((sum, o) => sum + o.quantity, 0),
    orderDate: timestamp,
    status: 'pending'
  }
}];</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> Regex ด้านบนรองรับหน่วยต่าง ๆ เช่น ชิ้น, ตัว, อัน, กล่อง, ถุง
        คุณสามารถเพิ่มหน่วยอื่น ๆ ได้ตามต้องการ
      </div>

      <h3>ขั้นตอนที่ 3: บันทึกลง Google Sheets</h3>

      <p>ก่อนอื่นต้องสร้าง Google Sheet ที่มีคอลัมน์ตามนี้:</p>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>User ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ORD-M1X2Y3</td>
            <td>2024-01-15</td>
            <td>U1234...</td>
            <td>เสื้อยืดสีขาว</td>
            <td>2</td>
            <td>pending</td>
          </tr>
        </tbody>
      </table>

      <p>ใช้ SplitInBatches + Google Sheets Node เพื่อบันทึกทีละรายการ:</p>

      <pre><code class="language-json">{
  "parameters": {
    "operation": "append",
    "documentId": {
      "mode": "url",
      "value": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
    },
    "sheetName": {
      "mode": "list",
      "value": "Orders"
    },
    "columns": {
      "mappingMode": "defineBelow",
      "value": {
        "Order ID": "={{ $json.orderId }}",
        "Date": "={{ $json.orderDate }}",
        "User ID": "={{ $json.userId }}",
        "Product": "={{ $json.productName }}",
        "Quantity": "={{ $json.quantity }}",
        "Status": "={{ $json.status }}"
      }
    },
    "options": {}
  },
  "type": "n8n-nodes-base.googleSheets",
  "position": [1050, 300],
  "name": "Save to Sheets"
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ต้องตั้งค่า Google Sheets Credentials ก่อนใช้งาน!
        ไปที่ Settings → Credentials → New → Google Sheets Account → เชื่อมต่อด้วย OAuth2
      </div>

      <h3>ขั้นตอนที่ 4: Loop สำหรับหลายรายการ</h3>

      <p>ถ้าลูกค้าสั่งหลายรายการ ต้อง Loop เพื่อบันทึกทีละรายการ:</p>

      <pre><code class="language-javascript">// Code Node: Flatten Orders for Sheets
const data = $input.first().json;

return data.orders.map(order => ({
  json: {
    orderId: data.orderId,
    orderDate: data.orderDate,
    userId: data.userId,
    productName: order.productName,
    quantity: order.quantity,
    unit: order.unit,
    status: data.status,
    replyToken: data.replyToken
  }
}));</code></pre>

      <h3>ขั้นตอนที่ 5: แจ้ง Admin ผ่าน LINE Group</h3>

      <p>ส่ง Push Message ไปที่กลุ่ม Admin เมื่อมีออเดอร์ใหม่:</p>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/push",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"to\": \"YOUR_ADMIN_GROUP_ID\",\n  \"messages\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"🛒 ออเดอร์ใหม่!\\n\\nOrder ID: {{ $('Parse Order').item.json.orderId }}\\n\\nรายการ:\\n{{ $('Parse Order').item.json.orders.map(o => '• ' + o.productName + ' x' + o.quantity).join('\\\\n') }}\\n\\nจำนวนรวม: {{ $('Parse Order').item.json.totalItems }} ชิ้น\\n\\n⏰ {{ $('Parse Order').item.json.orderDate }}\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1250, 300],
  "name": "Notify Admin"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> วิธีหา Group ID: เพิ่ม Bot เข้ากลุ่ม → ดูจาก Webhook Event 
        ที่มี <code>source.type = "group"</code> → จะมี <code>source.groupId</code>
      </div>

      <h3>ขั้นตอนที่ 6: ตอบกลับลูกค้า</h3>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/reply",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"replyToken\": \"{{ $('Parse Order').item.json.replyToken }}\",\n  \"messages\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"✅ รับออเดอร์เรียบร้อย!\\n\\n🆔 Order: {{ $('Parse Order').item.json.orderId }}\\n\\nรายการ:\\n{{ $('Parse Order').item.json.orders.map(o => '• ' + o.productName + ' x' + o.quantity + ' ' + o.unit).join('\\\\n') }}\\n\\nรวม: {{ $('Parse Order').item.json.totalItems }} ชิ้น\\n\\nเจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันและแจ้งยอดชำระเงินค่ะ 🙏\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1450, 300],
  "name": "Reply Customer"
}</code></pre>

      <h3>โครงสร้างข้อมูลออเดอร์</h3>

      <p>ข้อมูลที่ผ่าน Flow จะมีโครงสร้างดังนี้:</p>

      <pre><code class="language-json">{
  "orderId": "ORD-M1X2Y3Z",
  "userId": "U9876543210abcdef",
  "replyToken": "abc123...",
  "orders": [
    {
      "productName": "เสื้อยืดสีขาว",
      "quantity": 2,
      "unit": "ตัว"
    },
    {
      "productName": "กางเกงขาสั้น",
      "quantity": 1,
      "unit": "ตัว"
    }
  ],
  "totalItems": 3,
  "orderDate": "2024-01-15T10:30:00.000Z",
  "status": "pending"
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ระบบนี้เป็นระบบพื้นฐาน ยังไม่มีการตรวจสอบสินค้าว่ามีในสต็อกหรือไม่
        สำหรับ Production ควรเพิ่มการตรวจสอบสต็อกและราคาจากฐานข้อมูลด้วย
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>สร้าง Flow รับออเดอร์จาก LINE อัตโนมัติ</li>
        <li>Parse ข้อความสั่งซื้อด้วย Code Node และ Regex</li>
        <li>บันทึกข้อมูลลง Google Sheets</li>
        <li>ส่งแจ้งเตือนไปกลุ่ม Admin</li>
        <li>ตอบกลับยืนยันออเดอร์ให้ลูกค้า</li>
      </ul>

      <p>ในบทต่อไปเราจะสร้าง Flow ดึงข้อมูลสินค้าแล้วส่งเป็น Flex Message สวย ๆ! 🛍️</p>
    `
  },
  {
    number: 6,
    slug: 'flow-product-flex',
    emoji: '🛍️',
    title: 'Flow: ดึงข้อมูลสินค้า + ส่ง Flex',
    content: `
      <h2>สร้าง Flow: ดึงข้อมูลสินค้าจาก Google Sheets แล้วส่งเป็น Flex Message</h2>

      <img src='/images/lessons/flow-product-flex.png' alt='Product Flex Message Flow' />

      <p>
        Flex Message เป็นฟีเจอร์ที่ทรงพลังที่สุดของ LINE Messaging API 
        ช่วยให้คุณสร้างข้อความที่มีรูปแบบสวยงาม มีรูปภาพ ปุ่มกด และ Layout ที่หลากหลาย
        ในบทนี้เราจะสร้าง Flow ที่ดึงข้อมูลสินค้าจาก Google Sheets 
        แล้วสร้าง Flex Message Carousel ส่งกลับไปให้ลูกค้าอัตโนมัติ
      </p>

      <h3>ภาพรวมของ Flow</h3>

      <pre><code class="language-text">
┌───────────┐    ┌───────────────┐    ┌──────────────┐    ┌──────────────┐
│  LINE     │───▶│  Google       │───▶│  Generate    │───▶│  LINE Push   │
│  Webhook  │    │  Sheets       │    │  Flex JSON   │    │  Message     │
│  "ดูสินค้า" │    │  (Products)   │    │  (Carousel)  │    │              │
└───────────┘    └───────────────┘    └──────────────┘    └──────────────┘
      </code></pre>

      <h3>ขั้นตอนที่ 1: สร้าง Product Database ใน Google Sheets</h3>

      <p>สร้าง Google Sheet ชื่อ "Products" ที่มีคอลัมน์:</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image URL</th>
            <th>Description</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P001</td>
            <td>เสื้อยืด Premium</td>
            <td>590</td>
            <td>https://example.com/shirt.jpg</td>
            <td>เสื้อยืดคอกลม ผ้า Cotton 100%</td>
            <td>เสื้อผ้า</td>
            <td>50</td>
          </tr>
          <tr>
            <td>P002</td>
            <td>กางเกงขาสั้น</td>
            <td>490</td>
            <td>https://example.com/shorts.jpg</td>
            <td>กางเกงขาสั้น ผ้า Quick-dry</td>
            <td>เสื้อผ้า</td>
            <td>30</td>
          </tr>
          <tr>
            <td>P003</td>
            <td>หมวกแก๊ป Sport</td>
            <td>350</td>
            <td>https://example.com/cap.jpg</td>
            <td>หมวกแก๊ปสไตล์สปอร์ต</td>
            <td>เครื่องประดับ</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <h3>ขั้นตอนที่ 2: ตรวจจับคำขอดูสินค้า</h3>

      <pre><code class="language-json">{
  "parameters": {
    "conditions": {
      "options": { "caseSensitive": false },
      "conditions": [
        {
          "leftValue": "={{ $json.body.events[0].message.text }}",
          "rightValue": "ดูสินค้า|สินค้า|แคตตาล็อก|catalog|menu|เมนู",
          "operator": {
            "type": "string",
            "operation": "regex"
          }
        }
      ]
    }
  },
  "type": "n8n-nodes-base.if",
  "position": [450, 300],
  "name": "Is Product Request?"
}</code></pre>

      <h3>ขั้นตอนที่ 3: ดึงข้อมูลจาก Google Sheets</h3>

      <pre><code class="language-json">{
  "parameters": {
    "operation": "read",
    "documentId": {
      "mode": "url",
      "value": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
    },
    "sheetName": {
      "mode": "list",
      "value": "Products"
    },
    "options": {
      "range": "A:G"
    }
  },
  "type": "n8n-nodes-base.googleSheets",
  "position": [650, 300],
  "name": "Get Products"
}</code></pre>

      <h3>ขั้นตอนที่ 4: สร้าง Flex Message Carousel</h3>

      <p>ใช้ Code Node เพื่อสร้าง Flex Message JSON จากข้อมูลสินค้า:</p>

      <pre><code class="language-javascript">// Code Node: Generate Flex Message Carousel
const products = $input.all().map(item => item.json);
const replyToken = $('LINE Webhook').first().json.body.events[0].replyToken;

// สร้าง Bubble สำหรับแต่ละสินค้า (จำกัด 12 bubbles)
const bubbles = products.slice(0, 12).map(product => ({
  type: "bubble",
  size: "micro",
  hero: {
    type: "image",
    url: product['Image URL'] || 'https://via.placeholder.com/300x200',
    size: "full",
    aspectMode: "cover",
    aspectRatio: "320:213"
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: product.Name,
        weight: "bold",
        size: "sm",
        wrap: true
      },
      {
        type: "text",
        text: product.Description || '',
        size: "xxs",
        color: "#999999",
        wrap: true,
        maxLines: 2
      },
      {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "text",
            text: "฿" + Number(product.Price).toLocaleString(),
            size: "lg",
            color: "#FF6B35",
            weight: "bold",
            flex: 0
          },
          {
            type: "text",
            text: "คงเหลือ " + product.Stock + " ชิ้น",
            size: "xxs",
            color: "#AAAAAA",
            align: "end",
            gravity: "bottom"
          }
        ],
        margin: "md"
      }
    ],
    spacing: "sm",
    paddingAll: "13px"
  },
  footer: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "button",
        action: {
          type: "postback",
          label: "🛒 สั่งซื้อ",
          data: "action=order&productId=" + product.ID + "&name=" + encodeURIComponent(product.Name),
          displayText: "สั่ง " + product.Name + " 1 ชิ้น"
        },
        style: "primary",
        color: "#FF6B35",
        height: "sm"
      }
    ],
    spacing: "sm",
    paddingAll: "13px"
  }
}));

// สร้าง Carousel Container
const flexMessage = {
  type: "flex",
  altText: "🛍️ แคตตาล็อกสินค้า",
  contents: {
    type: "carousel",
    contents: bubbles
  }
};

return [{
  json: {
    replyToken,
    flexMessage
  }
}];</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> Flex Message Carousel รองรับได้สูงสุด 12 Bubbles 
        ถ้ามีสินค้ามากกว่านั้น ให้แบ่งหน้าหรือให้ลูกค้าเลือกหมวดหมู่ก่อน
      </div>

      <h3>ขั้นตอนที่ 5: ส่ง Flex Message ผ่าน LINE Reply API</h3>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/reply",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"replyToken\": \"{{ $json.replyToken }}\",\n  \"messages\": [\n    {{ JSON.stringify($json.flexMessage) }}\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1050, 300],
  "name": "Send Flex Message"
}</code></pre>

      <h3>ตัวอย่าง Flex Message Bubble แบบเต็ม</h3>

      <p>นี่คือโครงสร้าง Flex Message Bubble สำหรับสินค้า 1 ชิ้นแบบสมบูรณ์:</p>

      <pre><code class="language-json">{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://example.com/product-image.jpg",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "https://your-shop.com/product/P001"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "เสื้อยืด Premium Cotton",
        "weight": "bold",
        "size": "xl"
      },
      {
        "type": "box",
        "layout": "baseline",
        "margin": "md",
        "contents": [
          { "type": "icon", "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png", "size": "sm" },
          { "type": "icon", "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png", "size": "sm" },
          { "type": "icon", "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png", "size": "sm" },
          { "type": "icon", "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png", "size": "sm" },
          { "type": "icon", "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png", "size": "sm" },
          { "type": "text", "text": "4.0", "size": "sm", "color": "#999999", "margin": "md", "flex": 0 }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              { "type": "text", "text": "ราคา", "color": "#aaaaaa", "size": "sm", "flex": 1 },
              { "type": "text", "text": "฿590", "wrap": true, "color": "#FF6B35", "size": "lg", "weight": "bold", "flex": 3 }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              { "type": "text", "text": "สี", "color": "#aaaaaa", "size": "sm", "flex": 1 },
              { "type": "text", "text": "ขาว, ดำ, กรม", "wrap": true, "color": "#666666", "size": "sm", "flex": 3 }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "primary",
        "height": "sm",
        "color": "#FF6B35",
        "action": {
          "type": "postback",
          "label": "🛒 สั่งซื้อ",
          "data": "action=order&id=P001"
        }
      },
      {
        "type": "button",
        "style": "secondary",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "ดูรายละเอียด",
          "uri": "https://your-shop.com/product/P001"
        }
      }
    ],
    "flex": 0
  }
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> URL ของรูปภาพใน Flex Message ต้องเป็น HTTPS เท่านั้น
        และต้องมีขนาดไม่เกิน 10 MB ขอแนะนำให้ใช้ CDN สำหรับรูปสินค้า
      </div>

      <h3>จัดการ Postback จากปุ่มสั่งซื้อ</h3>

      <p>เมื่อลูกค้ากดปุ่ม "สั่งซื้อ" บน Flex Message จะส่ง Postback Event มา:</p>

      <pre><code class="language-javascript">// Code Node: Handle Product Postback
const postbackData = $input.first().json.body.events[0].postback.data;
const params = new URLSearchParams(postbackData);

const action = params.get('action');
const productId = params.get('productId');
const productName = decodeURIComponent(params.get('name'));

if (action === 'order') {
  return [{
    json: {
      action: 'order',
      productId,
      productName,
      quantity: 1,
      replyToken: $input.first().json.body.events[0].replyToken,
      userId: $input.first().json.body.events[0].source.userId
    }
  }];
}

return [];</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ใช้ Flex Message Simulator ที่ 
        <code>developers.line.biz/flex-simulator</code> เพื่อออกแบบ Flex Message 
        แล้วค่อย Copy JSON มาใช้ใน n8n จะง่ายกว่ามาก!
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>สร้าง Product Database ใน Google Sheets</li>
        <li>ดึงข้อมูลสินค้าด้วย Google Sheets Node</li>
        <li>สร้าง Flex Message Carousel จากข้อมูลสินค้า</li>
        <li>ส่ง Flex Message ผ่าน LINE Reply API</li>
        <li>จัดการ Postback Event จากปุ่มสั่งซื้อ</li>
      </ul>

      <p>ในบทต่อไปเราจะสร้างระบบ AI RAG ที่ตอบคำถามจากเอกสาร! 📚</p>
    `
  },
  {
    number: 7,
    slug: 'flow-ai-rag',
    emoji: '📚',
    title: 'Flow: AI RAG จากเอกสาร',
    content: `
      <h2>สร้าง Flow: AI RAG (Retrieval Augmented Generation) จากเอกสาร</h2>

      <img src='/images/lessons/flow-ai-rag.png' alt='RAG Flow Architecture' />

      <p>
        <strong>RAG (Retrieval Augmented Generation)</strong> คือเทคนิคที่ช่วยให้ AI ตอบคำถาม
        โดยอ้างอิงจากเอกสารหรือข้อมูลของเราโดยเฉพาะ แทนที่จะตอบจากความรู้ทั่วไปเพียงอย่างเดียว
        ในบทนี้เราจะสร้างระบบ RAG บน n8n ที่ลูกค้าถามคำถามผ่าน LINE 
        แล้ว AI จะค้นหาคำตอบจากเอกสารของเราก่อนตอบ
      </p>

      <h3>ทำไมต้อง RAG?</h3>

      <p>ปัญหาของ AI แบบธรรมดา:</p>

      <ul>
        <li>❌ AI ไม่รู้ข้อมูลเฉพาะของร้านเรา (ราคา, นโยบาย, สินค้า)</li>
        <li>❌ AI อาจ "หลอน" (Hallucination) สร้างข้อมูลเท็จ</li>
        <li>❌ ไม่สามารถอัปเดตข้อมูลได้ง่าย</li>
      </ul>

      <p>RAG แก้ปัญหาเหล่านี้โดย:</p>

      <ul>
        <li>✅ ค้นหาข้อมูลที่เกี่ยวข้องจากเอกสารของเราก่อน</li>
        <li>✅ ส่งข้อมูลที่เกี่ยวข้องเป็น Context ให้ AI</li>
        <li>✅ AI ตอบโดยอ้างอิงจากข้อมูลจริงของเรา</li>
        <li>✅ อัปเดตเอกสารเมื่อไหร่ก็ได้ ไม่ต้อง Re-train Model</li>
      </ul>

      <h3>สถาปัตยกรรม RAG</h3>

      <pre><code class="language-text">
Phase 1: Document Ingestion (ทำครั้งเดียว)
┌───────────┐    ┌────────────┐    ┌──────────────┐    ┌──────────────┐
│  Upload   │───▶│  Split     │───▶│  Generate    │───▶│  Store in    │
│  Documents│    │  Chunks    │    │  Embeddings  │    │  Vector DB   │
└───────────┘    └────────────┘    └──────────────┘    └──────────────┘

Phase 2: Query & Answer (ทุกครั้งที่มีคำถาม)
┌───────────┐    ┌────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────┐
│  User     │───▶│  Generate  │───▶│  Similarity  │───▶│  AI + Context│───▶│  Reply   │
│  Question │    │  Embedding │    │  Search      │    │  (Answer)    │    │  LINE    │
└───────────┘    └────────────┘    └──────────────┘    └──────────────┘    └──────────┘
      </code></pre>

      <h3>Phase 1: Document Ingestion Flow</h3>

      <p>
        ขั้นแรกเราต้องเตรียมเอกสาร โดยแปลงเป็น Vector Embeddings เก็บไว้
        ในตัวอย่างนี้เราจะใช้ Google Sheets เป็น "เอกสาร" และเก็บ Embeddings ไว้ใน Sheet อีกอัน
      </p>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>เตรียมเอกสาร FAQ ใน Google Sheets</strong>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>จัดส่ง</td>
            <td>จัดส่งกี่วันถึง</td>
            <td>สินค้าจัดส่งภายใน 1-3 วันทำการ...</td>
          </tr>
          <tr>
            <td>2</td>
            <td>คืนสินค้า</td>
            <td>นโยบายคืนสินค้า</td>
            <td>สามารถคืนสินค้าได้ภายใน 7 วัน...</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ชำระเงิน</td>
            <td>ชำระเงินช่องทางไหนได้บ้าง</td>
            <td>รับชำระผ่านโอนแบงก์ PromptPay...</td>
          </tr>
        </tbody>
      </table>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>สร้าง Embeddings ด้วย OpenAI</strong>
      </div>

      <pre><code class="language-javascript">// Code Node: Generate Embeddings for Documents
const documents = $input.all();

// สร้าง Text สำหรับแต่ละเอกสาร
const results = [];

for (const doc of documents) {
  const text = doc.json.Question + ' ' + doc.json.Answer;
  
  // เรียก OpenAI Embeddings API
  const response = await this.helpers.httpRequest({
    method: 'POST',
    url: 'https://api.openai.com/v1/embeddings',
    headers: {
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
      'Content-Type': 'application/json'
    },
    body: {
      model: 'text-embedding-3-small',
      input: text
    },
    json: true
  });
  
  results.push({
    json: {
      id: doc.json.ID,
      category: doc.json.Category,
      question: doc.json.Question,
      answer: doc.json.Answer,
      text: text,
      embedding: JSON.stringify(response.data[0].embedding)
    }
  });
}

return results;</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> <code>text-embedding-3-small</code> เป็น Model ที่ราคาถูกและมีประสิทธิภาพดี
        ค่าใช้จ่ายประมาณ $0.02 ต่อ 1 ล้าน Token เหมาะสำหรับการเริ่มต้น
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>บันทึก Embeddings ลง Google Sheets</strong>
      </div>

      <pre><code class="language-json">{
  "parameters": {
    "operation": "append",
    "documentId": {
      "mode": "url",
      "value": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
    },
    "sheetName": {
      "mode": "list",
      "value": "Embeddings"
    },
    "columns": {
      "mappingMode": "defineBelow",
      "value": {
        "ID": "={{ $json.id }}",
        "Text": "={{ $json.text }}",
        "Answer": "={{ $json.answer }}",
        "Embedding": "={{ $json.embedding }}"
      }
    }
  },
  "type": "n8n-nodes-base.googleSheets",
  "position": [850, 300],
  "name": "Save Embeddings"
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> การใช้ Google Sheets เก็บ Embeddings เหมาะสำหรับข้อมูลไม่เกิน 
        100-200 รายการ สำหรับข้อมูลจำนวนมากควรใช้ Vector Database เช่น Pinecone, 
        Qdrant หรือ Supabase pgvector
      </div>

      <h3>Phase 2: Query Flow — ค้นหาและตอบคำถาม</h3>

      <div class='step'>
        <span class='step-number'>1</span>
        <strong>สร้าง Embedding สำหรับคำถามลูกค้า</strong>
      </div>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.openai.com/v1/embeddings",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_OPENAI_API_KEY" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"model\": \"text-embedding-3-small\",\n  \"input\": \"{{ $json.userMessage }}\"\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [650, 300],
  "name": "Embed Question"
}</code></pre>

      <div class='step'>
        <span class='step-number'>2</span>
        <strong>Similarity Search — ค้นหาเอกสารที่เกี่ยวข้อง</strong>
      </div>

      <pre><code class="language-javascript">// Code Node: Cosine Similarity Search
const queryEmbedding = $('Embed Question').first().json.data[0].embedding;
const documents = $('Get All Embeddings').all();

// ฟังก์ชันคำนวณ Cosine Similarity
function cosineSimilarity(a, b) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// คำนวณ Similarity กับทุกเอกสาร
const results = documents.map(doc => {
  const docEmbedding = JSON.parse(doc.json.Embedding);
  const similarity = cosineSimilarity(queryEmbedding, docEmbedding);
  
  return {
    id: doc.json.ID,
    text: doc.json.Text,
    answer: doc.json.Answer,
    similarity
  };
});

// เรียงตาม Similarity จากมากไปน้อย เลือก Top 3
const topResults = results
  .sort((a, b) => b.similarity - a.similarity)
  .slice(0, 3)
  .filter(r => r.similarity > 0.7); // กรองเฉพาะที่ Similarity > 0.7

return [{
  json: {
    relevantDocs: topResults,
    context: topResults.map(r => r.answer).join('\\n\\n'),
    hasRelevantDocs: topResults.length > 0
  }
}];</code></pre>

      <div class='step'>
        <span class='step-number'>3</span>
        <strong>ส่งคำถาม + Context ให้ AI ตอบ</strong>
      </div>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.openai.com/v1/chat/completions",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_OPENAI_API_KEY" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"model\": \"gpt-4o-mini\",\n  \"messages\": [\n    {\n      \"role\": \"system\",\n      \"content\": \"คุณเป็นผู้ช่วยตอบคำถามของร้าน ABC Shop ตอบเป็นภาษาไทย สุภาพ กระชับ\\n\\nกฎ:\\n1. ตอบเฉพาะจากข้อมูลที่ให้เท่านั้น\\n2. ถ้าไม่มีข้อมูลเพียงพอ ให้ตอบว่า 'ขอส่งต่อให้เจ้าหน้าที่ดูแลนะคะ'\\n3. ห้ามสร้างข้อมูลเอง\\n\\nข้อมูลอ้างอิง:\\n{{ $json.context }}\"\n    },\n    {\n      \"role\": \"user\",\n      \"content\": \"{{ $('Extract Data').first().json.userMessage }}\"\n    }\n  ],\n  \"max_tokens\": 500,\n  \"temperature\": 0.3\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1050, 300],
  "name": "AI Answer with Context"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ตั้ง <code>temperature</code> ต่ำ (0.2-0.3) สำหรับ RAG 
        เพื่อให้ AI ยึดตาม Context มากขึ้น ลดโอกาสที่จะ Hallucinate
      </div>

      <h3>Prompt Template สำหรับ RAG</h3>

      <p>การออกแบบ Prompt ที่ดีเป็นหัวใจของ RAG:</p>

      <pre><code class="language-text">คุณเป็นผู้ช่วยตอบคำถามของร้าน "ABC Shop"

คำแนะนำ:
1. ตอบเป็นภาษาไทย สุภาพ ใช้ครับ/ค่ะ
2. ตอบโดยอ้างอิงจาก "ข้อมูลอ้างอิง" ด้านล่างเท่านั้น
3. ถ้าข้อมูลอ้างอิงไม่เพียงพอ ให้ตอบว่า:
   "ขอส่งต่อให้เจ้าหน้าที่ดูแลนะคะ รอสักครู่ค่ะ 🙏"
4. ห้ามสร้างข้อมูลหรือราคาเอง
5. ห้ามตอบเกิน 500 ตัวอักษร

ข้อมูลอ้างอิง:
---
{context}
---

คำถามลูกค้า: {question}</code></pre>

      <h3>การใช้ Vector Database (Qdrant) แทน Google Sheets</h3>

      <p>สำหรับข้อมูลจำนวนมาก แนะนำให้ใช้ Qdrant (สามารถ Self-host ด้วย Docker ได้):</p>

      <pre><code class="language-yaml"># docker-compose.yml เพิ่ม Qdrant
services:
  qdrant:
    image: qdrant/qdrant:latest
    container_name: qdrant
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

volumes:
  qdrant_data:
    driver: local</code></pre>

      <pre><code class="language-javascript">// บันทึกลง Qdrant
const response = await this.helpers.httpRequest({
  method: 'PUT',
  url: 'http://qdrant:6333/collections/faq/points',
  headers: { 'Content-Type': 'application/json' },
  body: {
    points: [{
      id: doc.id,
      vector: embedding,
      payload: {
        text: doc.text,
        answer: doc.answer,
        category: doc.category
      }
    }]
  },
  json: true
});

// ค้นหาจาก Qdrant
const searchResponse = await this.helpers.httpRequest({
  method: 'POST',
  url: 'http://qdrant:6333/collections/faq/points/search',
  headers: { 'Content-Type': 'application/json' },
  body: {
    vector: queryEmbedding,
    top: 3,
    score_threshold: 0.7,
    with_payload: true
  },
  json: true
});</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> อย่าลืมสร้าง Collection ใน Qdrant ก่อนใช้งาน
        และกำหนดขนาด Vector ให้ตรงกับ Model ที่ใช้ 
        (text-embedding-3-small = 1536 dimensions)
      </div>

      <h3>สรุปบทนี้</h3>

      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>แนวคิดและสถาปัตยกรรมของ RAG</li>
        <li>สร้าง Document Ingestion Flow (แปลงเอกสารเป็น Embeddings)</li>
        <li>สร้าง Query Flow (ค้นหาเอกสารที่เกี่ยวข้องและให้ AI ตอบ)</li>
        <li>คำนวณ Cosine Similarity ด้วย Code Node</li>
        <li>ออกแบบ Prompt Template สำหรับ RAG</li>
        <li>ใช้ Vector Database (Qdrant) แทน Google Sheets</li>
      </ul>

      <p>ในบทสุดท้ายเราจะรวมทุกอย่างเข้าด้วยกันในรูปแบบ Workshop: Customer Service Bot! 🏗️</p>
    `
  },
  {
    number: 8,
    slug: 'autopilot-workshop',
    emoji: '🏗️',
    title: 'Workshop: Customer Service Bot',
    content: `
      <h2>Workshop: สร้าง Customer Service Bot แบบครบวงจร</h2>

      <img src='/images/lessons/workshop-cs-bot.png' alt='Customer Service Bot Architecture' />

      <p>
        ในบทสุดท้ายนี้ เราจะนำทุกอย่างที่เรียนมารวมกันเป็น 
        <strong>Customer Service Bot ที่ทำงานได้จริง</strong>
        ระบบนี้จะมีครบทุกอย่าง: การจำแนกเจตนา (Intent), ค้นหา FAQ, ตอบด้วย AI, 
        ส่งต่อให้มนุษย์ (Escalation), และระบบ Ticket
      </p>

      <h3>สถาปัตยกรรมของ Bot</h3>

      <pre><code class="language-text">
                          ┌──────────────────────────────────────────────┐
                          │           Customer Service Bot              │
                          └──────────────────────────────────────────────┘
                                              │
                          ┌─────────────────────┐
                          │     LINE Webhook     │
                          └─────────────────────┘
                                    │
                          ┌─────────────────────┐
                          │  Intent Classifier  │
                          │  (AI Classification)│
                          └─────────────────────┘
                            │     │     │     │
                 ┌──────────┘     │     │     └──────────┐
                 │                │     │                 │
          ┌──────┴─────┐  ┌──────┴────┐ ┌─────┴─────┐  ┌──┴───────────┐
          │ FAQ Lookup │  │ Order     │ │ Product   │  │ Human        │
          │ (RAG)      │  │ Processing│ │ Catalog   │  │ Escalation   │
          └────────────┘  └───────────┘ └───────────┘  └──────────────┘
                 │                │           │                 │
                 └────────────────┴─────┬─────┴─────────────────┘
                                        │
                                 ┌──────┴──────┐
                                 │  LINE Reply │
                                 └─────────────┘
      </code></pre>

      <h3>ขั้นตอนที่ 1: Intent Classification ด้วย AI</h3>

      <p>
        เราจะใช้ AI เพื่อจำแนกว่าลูกค้าต้องการอะไร 
        แทนที่จะใช้ Keyword Matching แบบง่าย ๆ AI สามารถเข้าใจบริบทได้ดีกว่ามาก
      </p>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.openai.com/v1/chat/completions",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_OPENAI_API_KEY" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"model\": \"gpt-4o-mini\",\n  \"messages\": [\n    {\n      \"role\": \"system\",\n      \"content\": \"จำแนกเจตนาของข้อความลูกค้า ตอบเป็น JSON เท่านั้น\\n\\nเจตนาที่เป็นไปได้:\\n- faq: ถามคำถามทั่วไป (จัดส่ง, คืนสินค้า, ชำระเงิน, เวลาทำการ)\\n- order: ต้องการสั่งซื้อสินค้า (มีคำว่า สั่ง, ซื้อ, order)\\n- product: ต้องการดูสินค้า (ดูสินค้า, แคตตาล็อก, มีอะไรบ้าง)\\n- complaint: ร้องเรียน/ไม่พอใจ (ไม่พอใจ, ปัญหา, ร้องเรียน)\\n- human: ต้องการคุยกับคน (ขอคุยกับเจ้าหน้าที่, ติดต่อ admin)\\n- greeting: ทักทาย (สวัสดี, หวัดดี)\\n- other: อื่น ๆ\\n\\nตอบในรูปแบบ: {\\\"intent\\\": \\\"...\\\", \\\"confidence\\\": 0.0-1.0, \\\"language\\\": \\\"th|en\\\"}\"\n    },\n    {\n      \"role\": \"user\",\n      \"content\": \"{{ $json.userMessage }}\"\n    }\n  ],\n  \"max_tokens\": 100,\n  \"temperature\": 0,\n  \"response_format\": { \"type\": \"json_object\" }\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [650, 300],
  "name": "Classify Intent"
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ใช้ <code>response_format: { type: "json_object" }</code> 
        เพื่อบังคับให้ AI ตอบเป็น JSON เสมอ จะได้ Parse ง่ายและไม่มีข้อความอื่นปน
      </div>

      <h3>ขั้นตอนที่ 2: Route ตาม Intent</h3>

      <pre><code class="language-json">{
  "parameters": {
    "rules": {
      "rules": [
        {
          "outputKey": "faq",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "faq",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "order",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "order",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "product",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "product",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "complaint",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "complaint",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "human",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "human",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        },
        {
          "outputKey": "greeting",
          "conditions": {
            "conditions": [{
              "leftValue": "={{ JSON.parse($json.choices[0].message.content).intent }}",
              "rightValue": "greeting",
              "operator": { "type": "string", "operation": "equals" }
            }]
          }
        }
      ],
      "fallbackOutput": "other"
    }
  },
  "type": "n8n-nodes-base.switch",
  "typeVersion": 3,
  "position": [850, 300],
  "name": "Intent Router"
}</code></pre>

      <h3>ขั้นตอนที่ 3: FAQ Lookup จาก Google Sheets</h3>

      <p>สร้าง FAQ Database ใน Google Sheets:</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Keywords</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>จัดส่ง,ส่งของ,กี่วัน,shipping</td>
            <td>จัดส่งกี่วันถึง?</td>
            <td>สินค้าจัดส่งภายใน 1-3 วันทำการ ส่งฟรีเมื่อสั่งครบ 500 บาท ✈️</td>
          </tr>
          <tr>
            <td>2</td>
            <td>คืน,เปลี่ยน,return,refund</td>
            <td>นโยบายคืนสินค้า?</td>
            <td>สามารถคืนสินค้าได้ภายใน 7 วัน สินค้าต้องอยู่ในสภาพเดิม ไม่ผ่านการใช้งาน 📦</td>
          </tr>
          <tr>
            <td>3</td>
            <td>จ่าย,ชำระ,โอน,payment,promptpay</td>
            <td>ชำระเงินช่องทางไหนได้บ้าง?</td>
            <td>รับชำระผ่าน: 1) โอนแบงก์ (กสิกร/กรุงไทย) 2) PromptPay 3) บัตรเครดิต 💳</td>
          </tr>
          <tr>
            <td>4</td>
            <td>เปิด,ปิด,เวลา,ทำการ,hours</td>
            <td>เปิดกี่โมง?</td>
            <td>เปิดให้บริการทุกวัน 9:00-21:00 น. ยกเว้นวันหยุดนักขัตฤกษ์ 🕘</td>
          </tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">// Code Node: Smart FAQ Search
const userMessage = $('Extract Data').first().json.userMessage.toLowerCase();
const faqs = $('Get FAQ Database').all();

// ค้นหา FAQ ที่ตรง
let bestMatch = null;
let bestScore = 0;

for (const faq of faqs) {
  const keywords = faq.json.Keywords.split(',').map(k => k.trim().toLowerCase());
  let score = 0;
  
  for (const keyword of keywords) {
    if (userMessage.includes(keyword)) {
      score += 1;
    }
  }
  
  if (score > bestScore) {
    bestScore = score;
    bestMatch = faq.json;
  }
}

if (bestMatch && bestScore > 0) {
  return [{ json: { found: true, answer: bestMatch.Answer, question: bestMatch.Question } }];
} else {
  return [{ json: { found: false, answer: null } }];
}</code></pre>

      <h3>ขั้นตอนที่ 4: Human Escalation Flow</h3>

      <p>เมื่อ Bot ไม่สามารถตอบได้ หรือลูกค้าร้องขอ ให้ส่งต่อให้เจ้าหน้าที่:</p>

      <pre><code class="language-javascript">// Code Node: Create Escalation Ticket
const ticketId = 'TKT-' + Date.now().toString(36).toUpperCase();
const userId = $('Extract Data').first().json.userId;
const userMessage = $('Extract Data').first().json.userMessage;
const intent = JSON.parse($('Classify Intent').first().json.choices[0].message.content);
const timestamp = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });

return [{
  json: {
    ticketId,
    userId,
    userMessage,
    intent: intent.intent,
    priority: intent.intent === 'complaint' ? 'high' : 'normal',
    status: 'open',
    createdAt: timestamp,
    // ข้อความแจ้ง Admin
    adminNotification: [
      '🚨 ต้องการเจ้าหน้าที่ดูแล!',
      '',
      '🎫 Ticket: ' + ticketId,
      '⚡ Priority: ' + (intent.intent === 'complaint' ? '🔴 HIGH' : '🟡 NORMAL'),
      '📝 Intent: ' + intent.intent,
      '💬 ข้อความ: ' + userMessage,
      '👤 User ID: ' + userId,
      '⏰ เวลา: ' + timestamp,
      '',
      'กรุณาตอบกลับลูกค้าโดยเร็ว!'
    ].join('\\n'),
    // ข้อความตอบลูกค้า
    customerReply: intent.intent === 'complaint' 
      ? '🙏 ขออภัยในความไม่สะดวกค่ะ ทีมงานรับทราบแล้ว เจ้าหน้าที่จะติดต่อกลับภายใน 15 นาทีค่ะ\\n\\n🎫 Ticket: ' + ticketId
      : '💁‍♀️ ส่งต่อให้เจ้าหน้าที่เรียบร้อยค่ะ รอสักครู่นะคะ\\n\\n🎫 Ticket: ' + ticketId
  }
}];</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> สำหรับ Complaint (ร้องเรียน) ควรตั้งค่า Priority เป็น "high" 
        และแจ้ง Admin ทันที เพราะการตอบสนองช้าอาจทำให้สถานการณ์แย่ลง
      </div>

      <h3>ขั้นตอนที่ 5: Ticket Tracking System</h3>

      <p>บันทึก Ticket ลง Google Sheets เพื่อติดตาม:</p>

      <pre><code class="language-json">{
  "parameters": {
    "operation": "append",
    "documentId": {
      "mode": "url",
      "value": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
    },
    "sheetName": { "mode": "list", "value": "Tickets" },
    "columns": {
      "mappingMode": "defineBelow",
      "value": {
        "Ticket ID": "={{ $json.ticketId }}",
        "Created At": "={{ $json.createdAt }}",
        "User ID": "={{ $json.userId }}",
        "Message": "={{ $json.userMessage }}",
        "Intent": "={{ $json.intent }}",
        "Priority": "={{ $json.priority }}",
        "Status": "={{ $json.status }}",
        "Assigned To": "",
        "Resolution": "",
        "Resolved At": ""
      }
    }
  },
  "type": "n8n-nodes-base.googleSheets",
  "position": [1250, 600],
  "name": "Save Ticket"
}</code></pre>

      <h3>ขั้นตอนที่ 6: Multi-Language Support</h3>

      <p>
        สำหรับรองรับหลายภาษา เราใช้ AI ตรวจจับภาษาของลูกค้า 
        แล้วตอบกลับด้วยภาษาเดียวกัน:
      </p>

      <pre><code class="language-javascript">// Code Node: Language-Aware Response
const intent = JSON.parse($('Classify Intent').first().json.choices[0].message.content);
const detectedLanguage = intent.language || 'th';

const greetings = {
  th: {
    welcome: 'สวัสดีค่ะ 😊 ยินดีต้อนรับสู่ ABC Shop\nมีอะไรให้ช่วยคะ?',
    options: '📌 พิมพ์ได้เลยค่ะ:\n• "ดูสินค้า" — ดูแคตตาล็อก\n• "สั่ง [ชื่อสินค้า] [จำนวน]" — สั่งซื้อ\n• "ติดต่อเจ้าหน้าที่" — คุยกับคน',
    escalation: 'ส่งต่อให้เจ้าหน้าที่เรียบร้อยค่ะ รอสักครู่นะคะ 💁‍♀️',
    error: 'ขออภัยค่ะ ระบบมีปัญหาชั่วคราว กรุณาลองใหม่อีกครั้ง 🙏'
  },
  en: {
    welcome: 'Hello! 😊 Welcome to ABC Shop\nHow can I help you?',
    options: '📌 You can type:\n• "products" — View catalog\n• "order [item] [qty]" — Place order\n• "agent" — Talk to human',
    escalation: "I've connected you with our support team. Please wait a moment 💁‍♀️",
    error: 'Sorry, something went wrong. Please try again 🙏'
  }
};

const messages = greetings[detectedLanguage] || greetings.th;

return [{ json: { ...messages, language: detectedLanguage } }];</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> Intent Classifier ที่เราสร้างในขั้นตอนที่ 1 
        สามารถตรวจจับภาษาไปพร้อมกันได้เลย ไม่ต้องเรียก API แยก ประหยัดค่าใช้จ่าย!
      </div>

      <h3>ขั้นตอนที่ 7: Greeting Handler</h3>

      <pre><code class="language-json">{
  "parameters": {
    "method": "POST",
    "url": "https://api.line.me/v2/bot/message/reply",
    "sendHeaders": true,
    "headerParameters": {
      "parameters": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "Authorization", "value": "Bearer YOUR_CHANNEL_ACCESS_TOKEN" }
      ]
    },
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={\n  \"replyToken\": \"{{ $('Extract Data').first().json.replyToken }}\",\n  \"messages\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"สวัสดีค่ะ 😊 ยินดีต้อนรับสู่ ABC Shop!\\nมีอะไรให้ช่วยคะ?\"\n    },\n    {\n      \"type\": \"text\",\n      \"text\": \"📌 พิมพ์ได้เลยค่ะ:\\n• \\\"ดูสินค้า\\\" — ดูแคตตาล็อก\\n• \\\"สั่ง [สินค้า] [จำนวน]\\\" — สั่งซื้อ\\n• \\\"ติดต่อเจ้าหน้าที่\\\" — คุยกับคน\"\n    }\n  ]\n}"
  },
  "type": "n8n-nodes-base.httpRequest",
  "position": [1050, 100],
  "name": "Greeting Reply"
}</code></pre>

      <h3>Complete Workshop Workflow</h3>

      <p>นี่คือ Workflow เต็มของ Customer Service Bot:</p>

      <pre><code class="language-json">{
  "name": "LINE Customer Service Bot - Complete",
  "nodes": [
    {
      "parameters": { "httpMethod": "POST", "path": "line-cs-bot", "responseMode": "responseNode" },
      "type": "n8n-nodes-base.webhook",
      "position": [100, 400],
      "name": "LINE Webhook"
    },
    {
      "parameters": { "respondWith": "noData", "options": { "responseCode": 200 } },
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [300, 400],
      "name": "Respond 200"
    },
    {
      "parameters": {
        "mode": "manual",
        "assignments": {
          "assignments": [
            { "name": "userMessage", "value": "={{ $json.body.events[0].message.text }}", "type": "string" },
            { "name": "replyToken", "value": "={{ $json.body.events[0].replyToken }}", "type": "string" },
            { "name": "userId", "value": "={{ $json.body.events[0].source.userId }}", "type": "string" },
            { "name": "eventType", "value": "={{ $json.body.events[0].type }}", "type": "string" }
          ]
        }
      },
      "type": "n8n-nodes-base.set",
      "position": [500, 400],
      "name": "Extract Data"
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.openai.com/v1/chat/completions",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "Note: Intent Classification prompt (see above)"
      },
      "type": "n8n-nodes-base.httpRequest",
      "position": [700, 400],
      "name": "Classify Intent"
    },
    {
      "parameters": { "rules": { "rules": "See Intent Router config above" } },
      "type": "n8n-nodes-base.switch",
      "position": [900, 400],
      "name": "Intent Router"
    }
  ],
  "connections": {
    "LINE Webhook": { "main": [[{ "node": "Respond 200" }]] },
    "Respond 200": { "main": [[{ "node": "Extract Data" }]] },
    "Extract Data": { "main": [[{ "node": "Classify Intent" }]] },
    "Classify Intent": { "main": [[{ "node": "Intent Router" }]] }
  }
}</code></pre>

      <h3>Checklist ก่อนใช้งานจริง</h3>

      <div class='step'>
        <span class='step-number'>1</span>
        ✅ ตั้งค่า Credentials ทั้งหมด (LINE, OpenAI, Google Sheets)
      </div>

      <div class='step'>
        <span class='step-number'>2</span>
        ✅ สร้าง Google Sheets ทั้งหมด (Products, FAQ, Orders, Tickets)
      </div>

      <div class='step'>
        <span class='step-number'>3</span>
        ✅ ทดสอบ Workflow ทีละ Node ด้วย Manual Trigger
      </div>

      <div class='step'>
        <span class='step-number'>4</span>
        ✅ ทดสอบส่งข้อความจริงผ่าน LINE
      </div>

      <div class='step'>
        <span class='step-number'>5</span>
        ✅ ตรวจสอบ Error Handling — ทดสอบกรณีผิดพลาด
      </div>

      <div class='step'>
        <span class='step-number'>6</span>
        ✅ ตั้งค่า Webhook ให้ Active (ไม่ใช่ Test mode)
      </div>

      <div class='step'>
        <span class='step-number'>7</span>
        ✅ Monitor Execution Logs ใน n8n
      </div>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> อย่าลืมตั้งค่า Error Workflow ใน n8n Settings 
        เพื่อรับแจ้งเตือนเมื่อ Workflow ล้มเหลว ไม่อย่างนั้นลูกค้าอาจไม่ได้รับการตอบกลับ!
      </div>

      <h3>สิ่งที่ควรพัฒนาต่อ</h3>

      <ul>
        <li>📊 <strong>Analytics Dashboard</strong> — สรุปจำนวนข้อความ, Intent ยอดนิยม, เวลาตอบกลับเฉลี่ย</li>
        <li>💬 <strong>Conversation Memory</strong> — จำบทสนทนาก่อนหน้า เพื่อให้ AI ตอบได้ต่อเนื่อง</li>
        <li>🎨 <strong>Rich Menu</strong> — สร้างเมนูลัดใน LINE สำหรับเข้าถึงฟีเจอร์ต่าง ๆ</li>
        <li>📱 <strong>LIFF App</strong> — สร้างหน้าเว็บในแอป LINE สำหรับฟอร์มที่ซับซ้อน</li>
        <li>🔄 <strong>Auto Follow-up</strong> — ส่งข้อความติดตามอัตโนมัติหลังสั่งซื้อ</li>
        <li>📈 <strong>A/B Testing</strong> — ทดสอบ System Prompt ต่าง ๆ เพื่อหาแบบที่ดีที่สุด</li>
      </ul>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> เริ่มต้นด้วย Flow ที่เรียบง่ายก่อน แล้วค่อย ๆ เพิ่มฟีเจอร์ทีละอย่าง
        อย่าพยายามทำทุกอย่างพร้อมกัน เพราะจะทำให้ Debug ยาก 
        ทดสอบให้แน่ใจว่าแต่ละส่วนทำงานได้ก่อนต่อขยาย!
      </div>

      <h3>🎉 ยินดีด้วย! คุณจบคอร์ส LINE Autopilot แล้ว!</h3>

      <p>ในคอร์สนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>✅ n8n คืออะไร และข้อดีเทียบกับ Zapier/Make</li>
        <li>✅ ติดตั้ง n8n ด้วย Docker, npm และ Cloud</li>
        <li>✅ เชื่อมต่อ LINE กับ n8n ผ่าน Webhook</li>
        <li>✅ สร้าง AI Chatbot ด้วย OpenAI/Claude</li>
        <li>✅ ระบบรับออเดอร์อัตโนมัติ + Google Sheets</li>
        <li>✅ ส่ง Flex Message Carousel สินค้า</li>
        <li>✅ ระบบ AI RAG จากเอกสาร</li>
        <li>✅ Customer Service Bot แบบครบวงจร</li>
      </ul>

      <p>
        ตอนนี้คุณมีทักษะพร้อมที่จะสร้าง LINE Bot อัตโนมัติที่ทรงพลังได้แล้ว
        ลองนำไปประยุกต์ใช้กับธุรกิจของคุณเอง หรือรับทำให้ลูกค้าเป็น Freelance ได้เลย! 🚀
      </p>
    `
  }
];
