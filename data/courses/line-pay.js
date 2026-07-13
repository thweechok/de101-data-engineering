export const chapters = [
  {
    number: 1,
    slug: 'linepay-intro',
    emoji: '💰',
    title: 'LINE Pay คืออะไร?',
    content: `
      <h2>💰 LINE Pay คืออะไร?</h2>
      <p>LINE Pay คือบริการชำระเงินออนไลน์ที่พัฒนาโดย LINE Corporation ซึ่งช่วยให้ผู้ใช้สามารถชำระเงินค่าสินค้าและบริการผ่านแอปพลิเคชัน LINE ได้อย่างสะดวกและปลอดภัย โดยไม่ต้องกรอกข้อมูลบัตรเครดิตซ้ำทุกครั้ง</p>

      <img src='/images/lessons/linepay-flow.png' alt='LINE Pay Payment Flow Overview'>

      <h3>🔄 LINE Pay ทำงานอย่างไร?</h3>
      <p>กระบวนการชำระเงินผ่าน LINE Pay มีขั้นตอนหลักดังนี้:</p>

      <div class='step'><span class='step-number'>1</span><strong>ร้านค้าส่งคำขอชำระเงิน (Reserve)</strong> — ร้านค้าเรียก Reserve API เพื่อสร้างรายการชำระเงิน โดยระบุจำนวนเงิน, สกุลเงิน และรายละเอียดสินค้า</div>

      <div class='step'><span class='step-number'>2</span><strong>ผู้ใช้ยืนยันการชำระเงิน</strong> — ระบบจะ redirect ผู้ใช้ไปหน้ายืนยันของ LINE Pay ซึ่งผู้ใช้จะเห็นรายละเอียดและกดยืนยัน</div>

      <div class='step'><span class='step-number'>3</span><strong>ร้านค้ายืนยันรายการ (Confirm)</strong> — หลังจากผู้ใช้ยืนยัน ระบบจะ redirect กลับมาที่ร้านค้า พร้อม transactionId ให้ร้านค้าเรียก Confirm API</div>

      <div class='step'><span class='step-number'>4</span><strong>ชำระเงินสำเร็จ</strong> — เงินถูกหักจากบัญชีผู้ใช้และโอนไปยังบัญชีร้านค้า</div>

      <h3>🌍 ประเทศและสกุลเงินที่รองรับ</h3>
      <p>LINE Pay รองรับการใช้งานในหลายประเทศ โดยเฉพาะในภูมิภาคเอเชีย:</p>
      <table>
        <thead>
          <tr><th>ประเทศ</th><th>สกุลเงิน</th><th>สถานะ</th></tr>
        </thead>
        <tbody>
          <tr><td>🇹🇭 ไทย</td><td>THB (บาท)</td><td>✅ รองรับ</td></tr>
          <tr><td>🇯🇵 ญี่ปุ่น</td><td>JPY (เยน)</td><td>✅ รองรับ</td></tr>
          <tr><td>🇹🇼 ไต้หวัน</td><td>TWD (ดอลลาร์ไต้หวัน)</td><td>✅ รองรับ</td></tr>
          <tr><td>🇰🇷 เกาหลีใต้</td><td>KRW (วอน)</td><td>✅ รองรับ</td></tr>
          <tr><td>🇮🇩 อินโดนีเซีย</td><td>IDR (รูเปียห์)</td><td>✅ รองรับ</td></tr>
        </tbody>
      </table>

      <h3>🏪 ประโยชน์สำหรับร้านค้า (Merchant Benefits)</h3>
      <ul>
        <li><strong>เข้าถึงฐานผู้ใช้ LINE</strong> — ผู้ใช้ LINE ในไทยมีมากกว่า 50 ล้านคน</li>
        <li><strong>ชำระเงินง่าย</strong> — ผู้ใช้ไม่ต้องกรอกข้อมูลบัตรซ้ำ ลด friction ในการซื้อ</li>
        <li><strong>เชื่อมต่อกับ LINE OA</strong> — ส่งใบเสร็จ, อัพเดทสถานะ, โปรโมชั่นผ่าน LINE ได้เลย</li>
        <li><strong>ระบบ Refund ง่าย</strong> — สามารถคืนเงินเต็มจำนวนหรือบางส่วนผ่าน API ได้</li>
        <li><strong>Sandbox สำหรับทดสอบ</strong> — มี Sandbox environment ให้ทดสอบก่อน go-live</li>
        <li><strong>รองรับ Recurring Payment</strong> — สำหรับบริการแบบสมาชิกรายเดือน</li>
      </ul>

      <h3>📊 เปรียบเทียบกับระบบชำระเงินอื่น</h3>
      <table>
        <thead>
          <tr><th>คุณสมบัติ</th><th>LINE Pay</th><th>PromptPay</th><th>Credit Card</th><th>TrueMoney</th></tr>
        </thead>
        <tbody>
          <tr><td>ค่าธรรมเนียม</td><td>~2-3%</td><td>ฟรี/ต่ำ</td><td>2-3.5%</td><td>~2%</td></tr>
          <tr><td>ความง่ายในการใช้</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
          <tr><td>เชื่อมต่อ Chatbot</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
          <tr><td>Refund API</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
          <tr><td>Sandbox</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
          <tr><td>รองรับ LIFF</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
        </tbody>
      </table>

      <h3>🔑 องค์ประกอบหลักของ LINE Pay</h3>
      <p>ก่อนเริ่มพัฒนา คุณจำเป็นต้องเข้าใจองค์ประกอบเหล่านี้:</p>

      <pre><code class="language-javascript">// องค์ประกอบหลักที่ต้องรู้
const LINE_PAY_COMPONENTS = {
  // 1. Channel ID - รหัสช่องทางของคุณ
  channelId: 'YOUR_CHANNEL_ID',

  // 2. Channel Secret Key - กุญแจลับสำหรับสร้าง Signature
  channelSecret: 'YOUR_CHANNEL_SECRET',

  // 3. API Endpoints
  endpoints: {
    sandbox: 'https://sandbox-api-pay.line.me',
    production: 'https://api-pay.line.me'
  },

  // 4. หลัก API ที่ใช้
  apis: {
    reserve: '/v3/payments/request',   // สร้างรายการ
    confirm: '/v3/payments/{transactionId}/confirm', // ยืนยัน
    refund: '/v3/payments/{transactionId}/refund',   // คืนเงิน
    details: '/v3/payments/requests/{transactionId}/check' // ตรวจสอบ
  }
};

console.log('LINE Pay Components:', LINE_PAY_COMPONENTS);</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> LINE Pay API v3 เป็นเวอร์ชันที่ใช้กันแพร่หลายในไทย แต่ LINE ได้เปิดตัว API v4 ซึ่งมีความปลอดภัยมากขึ้นด้วย HMAC Signature แนะนำให้ใช้ v4 ในโปรเจกต์ใหม่</div>

      <h3>📱 User Flow: ผู้ใช้ชำระเงินอย่างไร?</h3>
      <p>จากมุมมองของผู้ใช้ การชำระเงินผ่าน LINE Pay มีขั้นตอนดังนี้:</p>
      <ol>
        <li>ผู้ใช้เลือกสินค้าและกด "ชำระเงินด้วย LINE Pay"</li>
        <li>ระบบเปิดแอป LINE หรือหน้าเว็บ LINE Pay</li>
        <li>ผู้ใช้เห็นรายละเอียดการชำระเงิน (ร้านค้า, จำนวนเงิน, รายการสินค้า)</li>
        <li>ผู้ใช้กดยืนยันและใส่รหัสผ่าน LINE Pay (หรือสแกนนิ้ว/ใบหน้า)</li>
        <li>ระบบแจ้งผลว่าชำระเงินสำเร็จ</li>
        <li>ผู้ใช้ถูก redirect กลับไปที่หน้าร้านค้า</li>
      </ol>

      <img src='/images/lessons/linepay-user-flow.png' alt='LINE Pay User Flow Diagram'>

      <h3>🏗️ Merchant Flow: ร้านค้าทำงานอย่างไร?</h3>
      <pre><code class="language-javascript">// Merchant Flow Overview
// ขั้นตอนฝั่ง Server ของร้านค้า

// Step 1: สร้างรายการชำระเงิน
async function createPayment(orderDetails) {
  const response = await fetch('https://sandbox-api-pay.line.me/v3/payments/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': CHANNEL_ID,
      'X-LINE-ChannelSecret': CHANNEL_SECRET
    },
    body: JSON.stringify({
      amount: orderDetails.totalAmount,
      currency: 'THB',
      orderId: orderDetails.orderId,
      packages: [{
        id: 'pkg-001',
        amount: orderDetails.totalAmount,
        name: 'สินค้าจากร้านค้า',
        products: orderDetails.products
      }],
      redirectUrls: {
        confirmUrl: 'https://yoursite.com/pay/confirm',
        cancelUrl: 'https://yoursite.com/pay/cancel'
      }
    })
  });

  const data = await response.json();
  // redirect ผู้ใช้ไปที่ data.info.paymentUrl.web
  return data;
}

// Step 2: ยืนยันการชำระเงิน (หลังจากผู้ใช้กดยืนยัน)
async function confirmPayment(transactionId, amount) {
  const response = await fetch(
    \`https://sandbox-api-pay.line.me/v3/payments/\${transactionId}/confirm\`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-ChannelSecret': CHANNEL_SECRET
      },
      body: JSON.stringify({
        amount: amount,
        currency: 'THB'
      })
    }
  );

  return await response.json();
}</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> อย่าลืมเก็บ Channel Secret ไว้ในที่ปลอดภัย เช่น Environment Variables หรือ Secret Manager อย่า hardcode ไว้ในโค้ดโดยเด็ดขาด!</div>

      <h3>🎯 สรุป: ทำไมต้องเรียนรู้ LINE Pay?</h3>
      <p>LINE Pay เป็นเครื่องมือที่ทรงพลังสำหรับนักพัฒนาที่ต้องการสร้างระบบชำระเงินที่เชื่อมต่อกับ LINE Ecosystem ไม่ว่าจะเป็น LINE Official Account, LIFF Apps หรือ LINE Chatbot การเรียนรู้ LINE Pay จะช่วยให้คุณสร้างประสบการณ์การซื้อขายที่ไร้รอยต่อให้กับลูกค้าของคุณ</p>

      <div class='tip-box'><strong>💡 Tip:</strong> ในบทถัดไป เราจะเรียนรู้วิธีสมัคร LINE Pay Merchant Account และตั้งค่า Sandbox Environment เพื่อเริ่มทดสอบ API ได้ทันที!</div>
    `
  },
  {
    number: 2,
    slug: 'linepay-merchant',
    emoji: '📝',
    title: 'สมัคร LINE Pay Merchant',
    content: `
      <h2>📝 สมัคร LINE Pay Merchant</h2>
      <p>ก่อนที่คุณจะเริ่มพัฒนาระบบชำระเงินด้วย LINE Pay ได้ คุณจำเป็นต้องสมัครเป็น Merchant (ร้านค้า) กับ LINE Pay เสียก่อน ในบทนี้เราจะพาคุณผ่านทุกขั้นตอนตั้งแต่การสมัครจนถึงการตั้งค่า Sandbox Environment</p>

      <img src='/images/lessons/linepay-merchant-register.png' alt='LINE Pay Merchant Registration'>

      <h3>📋 เอกสารที่ต้องเตรียม</h3>
      <p>สำหรับการสมัครในประเทศไทย คุณต้องเตรียมเอกสารดังนี้:</p>

      <table>
        <thead>
          <tr><th>ประเภท</th><th>เอกสาร</th><th>รายละเอียด</th></tr>
        </thead>
        <tbody>
          <tr><td>บุคคลธรรมดา</td><td>บัตรประชาชน</td><td>สำเนาพร้อมเซ็นรับรอง</td></tr>
          <tr><td>บุคคลธรรมดา</td><td>สมุดบัญชีธนาคาร</td><td>หน้าแรกที่แสดงชื่อและเลขบัญชี</td></tr>
          <tr><td>นิติบุคคล</td><td>หนังสือรับรองบริษัท</td><td>ออกไม่เกิน 3 เดือน</td></tr>
          <tr><td>นิติบุคคล</td><td>ภ.พ.20 (ทะเบียนภาษีมูลค่าเพิ่ม)</td><td>ถ้าจดทะเบียน VAT</td></tr>
          <tr><td>ทุกประเภท</td><td>URL เว็บไซต์ร้านค้า</td><td>ต้องมีหน้าเว็บแสดงสินค้า/บริการ</td></tr>
        </tbody>
      </table>

      <h3>📝 ขั้นตอนการสมัคร LINE Pay Merchant</h3>

      <div class='step'><span class='step-number'>1</span><strong>เข้าเว็บไซต์ LINE Pay Merchant</strong>
        <p>ไปที่ <code>https://pay.line.me/th/</code> แล้วคลิก "สมัครร้านค้า" หรือ "Apply now"</p>
      </div>

      <div class='step'><span class='step-number'>2</span><strong>เข้าสู่ระบบด้วยบัญชี LINE</strong>
        <p>ใช้ LINE Account ที่จะเป็นผู้ดูแลร้านค้า (Admin) ในการเข้าสู่ระบบ</p>
      </div>

      <div class='step'><span class='step-number'>3</span><strong>กรอกข้อมูลร้านค้า</strong>
        <p>กรอกข้อมูลพื้นฐาน เช่น ชื่อร้าน, ประเภทธุรกิจ, ที่อยู่, เบอร์โทร, อีเมล</p>
      </div>

      <div class='step'><span class='step-number'>4</span><strong>อัปโหลดเอกสาร</strong>
        <p>อัปโหลดเอกสารตามที่ระบุในตารางด้านบน</p>
      </div>

      <div class='step'><span class='step-number'>5</span><strong>รอการอนุมัติ</strong>
        <p>LINE Pay จะตรวจสอบเอกสารและอนุมัติภายใน 5-10 วันทำการ</p>
      </div>

      <div class='step'><span class='step-number'>6</span><strong>รับ API Keys</strong>
        <p>หลังอนุมัติ คุณจะได้รับ Channel ID และ Channel Secret Key สำหรับเชื่อมต่อ API</p>
      </div>

      <div class='tip-box'><strong>💡 Tip:</strong> ระหว่างรอการอนุมัติ คุณสามารถเริ่มพัฒนาและทดสอบได้ทันทีด้วย Sandbox Environment ซึ่งไม่ต้องรอ approval!</div>

      <h3>🏖️ ตั้งค่า Sandbox Environment</h3>
      <p>LINE Pay มี Sandbox (สภาพแวดล้อมทดสอบ) ให้ใช้ฟรี คุณสามารถทดสอบ API ได้โดยไม่ต้องมีเงินจริง</p>

      <div class='step'><span class='step-number'>1</span><strong>สมัคร Sandbox Account</strong>
        <p>ไปที่ <code>https://sandbox-web-pay.line.me/</code> แล้วสมัครบัญชี Sandbox</p>
      </div>

      <div class='step'><span class='step-number'>2</span><strong>เข้า LINE Pay Console (Sandbox)</strong>
        <p>Login เข้า Sandbox Console เพื่อดู Channel ID และ Channel Secret</p>
      </div>

      <pre><code class="language-javascript">// Sandbox Configuration
const LINE_PAY_CONFIG = {
  // Sandbox Credentials (ตัวอย่าง - ใช้ค่าจริงของคุณ)
  channelId: '1234567890',
  channelSecret: 'abcdefghijklmnopqrstuvwxyz123456',

  // Sandbox API Base URL
  apiBaseUrl: 'https://sandbox-api-pay.line.me',

  // Production API Base URL (ใช้ตอน go-live)
  // apiBaseUrl: 'https://api-pay.line.me',

  // Redirect URLs
  confirmUrl: 'https://your-domain.com/pay/confirm',
  cancelUrl: 'https://your-domain.com/pay/cancel'
};

console.log('Sandbox Config:', LINE_PAY_CONFIG);</code></pre>

      <h3>🔑 API Keys: Channel ID & Channel Secret</h3>
      <p>หลังจากตั้งค่า Sandbox สำเร็จ คุณจะได้ API Keys 2 ตัวหลัก:</p>

      <table>
        <thead>
          <tr><th>Key</th><th>คำอธิบาย</th><th>ใช้ทำอะไร</th></tr>
        </thead>
        <tbody>
          <tr><td><code>Channel ID</code></td><td>รหัสช่องทางของร้านค้า</td><td>ส่งใน Header ทุก API request</td></tr>
          <tr><td><code>Channel Secret</code></td><td>กุญแจลับสำหรับ Signature</td><td>ใช้สร้าง HMAC Signature ใน API v4</td></tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">// วิธีเก็บ API Keys อย่างปลอดภัย
// สร้างไฟล์ .env
// LINE_PAY_CHANNEL_ID=1234567890
// LINE_PAY_CHANNEL_SECRET=abcdefghijklmnopqrstuvwxyz123456

// Node.js - อ่านค่าจาก Environment Variables
require('dotenv').config();

const channelId = process.env.LINE_PAY_CHANNEL_ID;
const channelSecret = process.env.LINE_PAY_CHANNEL_SECRET;

console.log('Channel ID:', channelId);
// ห้าม log Channel Secret ใน production!</code></pre>

      <pre><code class="language-javascript">// Google Apps Script - เก็บ Keys ใน Script Properties
function setupApiKeys() {
  const scriptProperties = PropertiesService.getScriptProperties();

  // ตั้งค่า (ทำครั้งเดียว)
  scriptProperties.setProperties({
    'LINE_PAY_CHANNEL_ID': '1234567890',
    'LINE_PAY_CHANNEL_SECRET': 'abcdefghijklmnopqrstuvwxyz123456'
  });

  Logger.log('API Keys saved to Script Properties');
}

function getApiKeys() {
  const props = PropertiesService.getScriptProperties();
  return {
    channelId: props.getProperty('LINE_PAY_CHANNEL_ID'),
    channelSecret: props.getProperty('LINE_PAY_CHANNEL_SECRET')
  };
}

// ใช้งาน
function testKeys() {
  const keys = getApiKeys();
  Logger.log('Channel ID: ' + keys.channelId);
}</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> อย่า commit ไฟล์ .env หรือ API Keys ขึ้น Git repository เด็ดขาด! เพิ่ม <code>.env</code> ในไฟล์ <code>.gitignore</code> เสมอ</div>

      <h3>🧪 ทดสอบ API ด้วย cURL</h3>
      <p>ทดสอบการเชื่อมต่อ API เบื้องต้นด้วย cURL:</p>

      <pre><code class="language-bash"># ทดสอบ Reserve Payment (Sandbox)
curl -X POST https://sandbox-api-pay.line.me/v3/payments/request \\
  -H "Content-Type: application/json" \\
  -H "X-LINE-ChannelId: YOUR_CHANNEL_ID" \\
  -H "X-LINE-ChannelSecret: YOUR_CHANNEL_SECRET" \\
  -d '{
    "amount": 100,
    "currency": "THB",
    "orderId": "TEST-ORDER-001",
    "packages": [{
      "id": "pkg-001",
      "amount": 100,
      "name": "ทดสอบสินค้า",
      "products": [{
        "name": "สินค้าทดสอบ",
        "quantity": 1,
        "price": 100
      }]
    }],
    "redirectUrls": {
      "confirmUrl": "https://your-domain.com/confirm",
      "cancelUrl": "https://your-domain.com/cancel"
    }
  }'</code></pre>

      <h3>📋 ตัวอย่าง Response จาก Reserve API</h3>
      <pre><code class="language-json">{
  "returnCode": "0000",
  "returnMessage": "Success.",
  "info": {
    "paymentUrl": {
      "web": "https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=xxx",
      "app": "line://pay/payment/xxx"
    },
    "transactionId": 2023120100001234567,
    "paymentAccessToken": "abc123xyz"
  }
}</code></pre>

      <h3>🛠️ เครื่องมือสำหรับทดสอบ</h3>
      <ul>
        <li><strong>Postman</strong> — นำเข้า LINE Pay API Collection สำหรับทดสอบง่ายๆ</li>
        <li><strong>ngrok</strong> — สร้าง public URL จาก localhost เพื่อรับ callback</li>
        <li><strong>LINE Pay Sandbox App</strong> — แอปสำหรับจำลองการชำระเงิน</li>
        <li><strong>cURL</strong> — ทดสอบ API จาก command line</li>
      </ul>

      <pre><code class="language-bash"># ติดตั้ง ngrok (สำหรับทดสอบ callback URL)
# ดาวน์โหลดจาก https://ngrok.com/download

# เริ่ม ngrok tunnel
ngrok http 3000

# จะได้ URL เช่น https://abc123.ngrok.io
# ใช้ URL นี้เป็น confirmUrl และ cancelUrl ในการทดสอบ</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ใช้ Postman ในการทดสอบ API จะสะดวกกว่า cURL เพราะสามารถ save request, ตั้ง environment variables และดู response ได้ง่ายกว่า คุณสามารถหา LINE Pay Postman Collection ได้จาก LINE Pay Developer Documentation</div>
    `
  },
  {
    number: 3,
    slug: 'linepay-api',
    emoji: '🔌',
    title: 'LINE Pay API v4 (Reserve → Confirm)',
    content: `
      <h2>🔌 LINE Pay API v4 (Reserve → Confirm)</h2>
      <p>ในบทนี้เราจะเรียนรู้การใช้ LINE Pay API เวอร์ชัน 4 แบบเจาะลึก ซึ่งเป็นเวอร์ชันล่าสุดที่มีความปลอดภัยสูงขึ้นด้วย HMAC Signature และจะพาคุณผ่านทุกขั้นตอนตั้งแต่ Reserve Payment จนถึง Confirm Payment พร้อมโค้ด Node.js เต็มรูปแบบ</p>

      <img src='/images/lessons/linepay-api-v4-flow.png' alt='LINE Pay API v4 Flow Diagram'>

      <h3>🔐 HMAC Signature Generation</h3>
      <p>API v4 ต้องการ HMAC-SHA256 Signature ในทุก request เพื่อยืนยันว่า request มาจากร้านค้าจริง การสร้าง Signature มีขั้นตอนดังนี้:</p>

      <pre><code class="language-javascript">const crypto = require('crypto');

/**
 * สร้าง HMAC Signature สำหรับ LINE Pay API v4
 * @param {string} channelSecret - Channel Secret Key
 * @param {string} uri - API endpoint path (เช่น /v3/payments/request)
 * @param {string} requestBody - JSON string ของ request body
 * @param {string} nonce - UUID สำหรับป้องกัน replay attack
 * @returns {string} Base64-encoded HMAC-SHA256 signature
 */
function createSignature(channelSecret, uri, requestBody, nonce) {
  // สร้าง string ที่จะ sign
  const signData = channelSecret + uri + requestBody + nonce;

  // สร้าง HMAC-SHA256 signature
  const signature = crypto
    .createHmac('sha256', channelSecret)
    .update(signData)
    .digest('base64');

  return signature;
}

// ตัวอย่างการใช้งาน
const channelSecret = 'YOUR_CHANNEL_SECRET';
const uri = '/v3/payments/request';
const body = JSON.stringify({ amount: 100, currency: 'THB' });
const nonce = crypto.randomUUID(); // เช่น '550e8400-e29b-41d4-a716-446655440000'

const signature = createSignature(channelSecret, uri, body, nonce);
console.log('Signature:', signature);
console.log('Nonce:', nonce);</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> Nonce ต้องเป็นค่าที่ไม่ซ้ำกันทุกครั้งที่ส่ง request แนะนำให้ใช้ UUID v4 ซึ่ง <code>crypto.randomUUID()</code> ใน Node.js 19+ สร้างให้ได้ หรือใช้ package <code>uuid</code></div>

      <h3>📤 Reserve Payment API (สร้างรายการชำระเงิน)</h3>
      <p>ขั้นตอนแรกคือการเรียก Reserve API เพื่อสร้างรายการชำระเงิน:</p>

      <table>
        <thead>
          <tr><th>รายละเอียด</th><th>ค่า</th></tr>
        </thead>
        <tbody>
          <tr><td>Method</td><td><code>POST</code></td></tr>
          <tr><td>Endpoint</td><td><code>/v3/payments/request</code></td></tr>
          <tr><td>Sandbox URL</td><td><code>https://sandbox-api-pay.line.me/v3/payments/request</code></td></tr>
          <tr><td>Production URL</td><td><code>https://api-pay.line.me/v3/payments/request</code></td></tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">const crypto = require('crypto');
const axios = require('axios');

const CHANNEL_ID = process.env.LINE_PAY_CHANNEL_ID;
const CHANNEL_SECRET = process.env.LINE_PAY_CHANNEL_SECRET;
const API_BASE = 'https://sandbox-api-pay.line.me';

/**
 * Reserve Payment - สร้างรายการชำระเงิน
 */
async function reservePayment(order) {
  const uri = '/v3/payments/request';
  const nonce = crypto.randomUUID();

  const requestBody = {
    amount: order.totalAmount,
    currency: 'THB',
    orderId: order.orderId,
    packages: [
      {
        id: 'pkg-001',
        amount: order.totalAmount,
        name: order.shopName || 'ร้านค้าออนไลน์',
        products: order.products.map(p => ({
          name: p.name,
          quantity: p.quantity,
          price: p.price,
          imageUrl: p.imageUrl || undefined
        }))
      }
    ],
    redirectUrls: {
      confirmUrl: 'https://your-domain.com/pay/confirm',
      cancelUrl: 'https://your-domain.com/pay/cancel'
    },
    options: {
      display: {
        locale: 'th',
        checkConfirmUrlBrowser: false
      }
    }
  };

  const bodyStr = JSON.stringify(requestBody);
  const signature = createSignature(CHANNEL_SECRET, uri, bodyStr, nonce);

  try {
    const response = await axios.post(\`\${API_BASE}\${uri}\`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-Authorization-Nonce': nonce,
        'X-LINE-Authorization': signature
      }
    });

    console.log('Reserve Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Reserve Error:', error.response?.data || error.message);
    throw error;
  }
}

// ตัวอย่างการเรียกใช้
const order = {
  orderId: 'ORD-' + Date.now(),
  totalAmount: 350,
  shopName: 'ร้านกาแฟ LINE Dev',
  products: [
    { name: 'ลาเต้เย็น', quantity: 2, price: 75 },
    { name: 'ครัวซอง', quantity: 1, price: 200 }
  ]
};

reservePayment(order).then(data => {
  if (data.returnCode === '0000') {
    console.log('Payment URL:', data.info.paymentUrl.web);
    console.log('Transaction ID:', data.info.transactionId);
    // redirect ผู้ใช้ไปที่ data.info.paymentUrl.web
  }
});</code></pre>

      <h3>📥 Reserve API Response</h3>
      <pre><code class="language-json">{
  "returnCode": "0000",
  "returnMessage": "Success.",
  "info": {
    "paymentUrl": {
      "web": "https://sandbox-web-pay.line.me/web/payment/wait?transactionReserveId=xxx",
      "app": "line://pay/payment/xxx"
    },
    "transactionId": 2024010100001234567,
    "paymentAccessToken": "eyJhbGciOiJIUzI1NiJ9..."
  }
}</code></pre>

      <h3>🔄 Redirect ผู้ใช้ไปยัง LINE Pay</h3>
      <p>หลังจากได้ <code>paymentUrl</code> จาก Reserve API ให้ redirect ผู้ใช้ไปที่ URL นั้น:</p>

      <pre><code class="language-javascript">// Express.js - Redirect ผู้ใช้
app.post('/api/checkout', async (req, res) => {
  try {
    const order = req.body;
    const result = await reservePayment(order);

    if (result.returnCode === '0000') {
      // บันทึก transactionId ลง database
      await saveTransaction(order.orderId, result.info.transactionId);

      // Redirect ผู้ใช้ไปหน้าชำระเงิน LINE Pay
      res.json({
        success: true,
        paymentUrl: result.info.paymentUrl.web,
        transactionId: result.info.transactionId
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.returnMessage
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});</code></pre>

      <h3>✅ Confirm Payment API (ยืนยันการชำระเงิน)</h3>
      <p>หลังจากผู้ใช้ยืนยันการชำระเงินแล้ว LINE Pay จะ redirect กลับมาที่ <code>confirmUrl</code> พร้อม query parameter <code>transactionId</code> คุณต้องเรียก Confirm API เพื่อยืนยันรายการ:</p>

      <table>
        <thead>
          <tr><th>รายละเอียด</th><th>ค่า</th></tr>
        </thead>
        <tbody>
          <tr><td>Method</td><td><code>POST</code></td></tr>
          <tr><td>Endpoint</td><td><code>/v3/payments/{transactionId}/confirm</code></td></tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">/**
 * Confirm Payment - ยืนยันการชำระเงิน
 */
async function confirmPayment(transactionId, amount) {
  const uri = \`/v3/payments/\${transactionId}/confirm\`;
  const nonce = crypto.randomUUID();

  const requestBody = {
    amount: amount,
    currency: 'THB'
  };

  const bodyStr = JSON.stringify(requestBody);
  const signature = createSignature(CHANNEL_SECRET, uri, bodyStr, nonce);

  try {
    const response = await axios.post(\`\${API_BASE}\${uri}\`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-Authorization-Nonce': nonce,
        'X-LINE-Authorization': signature
      }
    });

    console.log('Confirm Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Confirm Error:', error.response?.data || error.message);
    throw error;
  }
}

// Express.js - Confirm Endpoint
app.get('/pay/confirm', async (req, res) => {
  const { transactionId } = req.query;

  try {
    // ดึงข้อมูล order จาก database
    const order = await getOrderByTransactionId(transactionId);

    // เรียก Confirm API
    const result = await confirmPayment(transactionId, order.totalAmount);

    if (result.returnCode === '0000') {
      // อัพเดทสถานะ order เป็น 'paid'
      await updateOrderStatus(order.orderId, 'paid');

      res.redirect('/order/success?orderId=' + order.orderId);
    } else {
      await updateOrderStatus(order.orderId, 'failed');
      res.redirect('/order/failed?reason=' + result.returnMessage);
    }
  } catch (error) {
    console.error('Confirm handler error:', error);
    res.redirect('/order/failed?reason=server_error');
  }
});</code></pre>

      <h3>📋 Confirm API Response</h3>
      <pre><code class="language-json">{
  "returnCode": "0000",
  "returnMessage": "Success.",
  "info": {
    "transactionId": 2024010100001234567,
    "orderId": "ORD-1704067200000",
    "payInfo": [
      {
        "method": "BALANCE",
        "amount": 350
      }
    ],
    "packages": [
      {
        "id": "pkg-001",
        "amount": 350,
        "userFeeAmount": 0
      }
    ]
  }
}</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> คุณต้อง Confirm Payment ภายใน 20 นาที หลังจากผู้ใช้กดยืนยัน ถ้าเกินเวลา transaction จะถูกยกเลิกอัตโนมัติ!</div>

      <h3>🔧 Google Apps Script Version</h3>
      <pre><code class="language-javascript">// Google Apps Script - LINE Pay API v4
function createHmacSignature(channelSecret, uri, body, nonce) {
  const data = channelSecret + uri + body + nonce;
  const signature = Utilities.computeHmacSha256Signature(data, channelSecret);
  return Utilities.base64Encode(signature);
}

function reservePaymentGAS(orderId, amount, productName) {
  const props = PropertiesService.getScriptProperties();
  const channelId = props.getProperty('LINE_PAY_CHANNEL_ID');
  const channelSecret = props.getProperty('LINE_PAY_CHANNEL_SECRET');

  const uri = '/v3/payments/request';
  const nonce = Utilities.getUuid();

  const body = {
    amount: amount,
    currency: 'THB',
    orderId: orderId,
    packages: [{
      id: 'pkg-001',
      amount: amount,
      name: 'ร้านค้าออนไลน์',
      products: [{
        name: productName,
        quantity: 1,
        price: amount
      }]
    }],
    redirectUrls: {
      confirmUrl: 'https://your-domain.com/pay/confirm',
      cancelUrl: 'https://your-domain.com/pay/cancel'
    }
  };

  const bodyStr = JSON.stringify(body);
  const signature = createHmacSignature(channelSecret, uri, bodyStr, nonce);

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'X-LINE-ChannelId': channelId,
      'X-LINE-Authorization-Nonce': nonce,
      'X-LINE-Authorization': signature
    },
    payload: bodyStr,
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(
    'https://sandbox-api-pay.line.me' + uri,
    options
  );

  const result = JSON.parse(response.getContentText());
  Logger.log('Reserve Result: ' + JSON.stringify(result));
  return result;
}

// ทดสอบ
function testReserve() {
  const result = reservePaymentGAS('ORD-TEST-001', 100, 'สินค้าทดสอบ');
  Logger.log(result);
}</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ใน Google Apps Script ใช้ <code>Utilities.computeHmacSha256Signature()</code> แทน <code>crypto.createHmac()</code> ของ Node.js และใช้ <code>Utilities.getUuid()</code> แทน <code>crypto.randomUUID()</code></div>
    `
  },
  {
    number: 4,
    slug: 'payment-page',
    emoji: '🖥️',
    title: 'สร้างหน้าชำระเงิน',
    content: `
      <h2>🖥️ สร้างหน้าชำระเงิน</h2>
      <p>ในบทนี้เราจะสร้างหน้าชำระเงิน (Payment Page) ที่สวยงามและใช้งานได้จริง โดยจะมีการแสดงสรุปคำสั่งซื้อ คำนวณยอดรวม และ redirect ผู้ใช้ไปยัง LINE Pay พร้อมจัดการ return URL หลังชำระเงินสำเร็จ</p>

      <img src='/images/lessons/linepay-payment-page.png' alt='LINE Pay Payment Page Design'>

      <h3>📐 โครงสร้างหน้าชำระเงิน</h3>
      <p>หน้าชำระเงินที่ดีควรมีองค์ประกอบเหล่านี้:</p>
      <ul>
        <li><strong>สรุปคำสั่งซื้อ</strong> — แสดงรายการสินค้า จำนวน ราคาต่อชิ้น</li>
        <li><strong>ยอดรวม</strong> — แสดงยอดรวมทั้งหมดชัดเจน</li>
        <li><strong>ปุ่มชำระเงิน</strong> — ปุ่ม LINE Pay ที่เด่นชัด</li>
        <li><strong>หน้ายืนยัน</strong> — แสดงผลหลังชำระเงินสำเร็จ/ล้มเหลว</li>
      </ul>

      <h3>🎨 HTML/CSS: หน้า Checkout</h3>
      <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;ชำระเงินด้วย LINE Pay&lt;/title&gt;
  &lt;style&gt;
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Noto Sans Thai', sans-serif;
      background: #f5f5f5;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .checkout-container {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      max-width: 480px;
      width: 100%;
      overflow: hidden;
    }
    .checkout-header {
      background: linear-gradient(135deg, #00B900, #00C300);
      color: white;
      padding: 24px;
      text-align: center;
    }
    .checkout-header h1 { font-size: 1.4rem; margin-bottom: 4px; }
    .checkout-header p { opacity: 0.9; font-size: 0.9rem; }
    .order-items { padding: 24px; }
    .order-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    }
    .item-name { font-weight: 500; }
    .item-qty { color: #888; font-size: 0.85rem; }
    .item-price { font-weight: 600; color: #00B900; }
    .order-total {
      display: flex;
      justify-content: space-between;
      padding: 16px 24px;
      background: #f9f9f9;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .total-amount { color: #00B900; }
    .pay-button {
      display: block;
      width: calc(100% - 48px);
      margin: 24px;
      padding: 16px;
      background: #00B900;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    .pay-button:hover { background: #009900; transform: translateY(-1px); }
    .pay-button:disabled { background: #ccc; cursor: not-allowed; }
    .linepay-logo { width: 24px; vertical-align: middle; margin-right: 8px; }
    .loading { display: none; text-align: center; padding: 20px; }
    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #00B900;
      border-radius: 50%;
      width: 30px; height: 30px;
      animation: spin 1s linear infinite;
      margin: 0 auto 10px;
    }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="checkout-container"&gt;
    &lt;div class="checkout-header"&gt;
      &lt;h1&gt;🛒 สรุปคำสั่งซื้อ&lt;/h1&gt;
      &lt;p&gt;ตรวจสอบรายการก่อนชำระเงิน&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="order-items" id="orderItems"&gt;
      &lt;!-- รายการสินค้าจะถูกสร้างด้วย JavaScript --&gt;
    &lt;/div&gt;

    &lt;div class="order-total"&gt;
      &lt;span&gt;ยอดรวม&lt;/span&gt;
      &lt;span class="total-amount" id="totalAmount"&gt;฿0&lt;/span&gt;
    &lt;/div&gt;

    &lt;button class="pay-button" id="payBtn" onclick="processPayment()"&gt;
      💚 ชำระเงินด้วย LINE Pay
    &lt;/button&gt;

    &lt;div class="loading" id="loading"&gt;
      &lt;div class="spinner"&gt;&lt;/div&gt;
      &lt;p&gt;กำลังเชื่อมต่อ LINE Pay...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>⚡ JavaScript: คำนวณยอดและ Redirect</h3>
      <pre><code class="language-javascript">// ข้อมูลสินค้าในตะกร้า
const cartItems = [
  { name: 'ลาเต้เย็น', quantity: 2, price: 75, image: '☕' },
  { name: 'ครัวซอง อัลมอนด์', quantity: 1, price: 120, image: '🥐' },
  { name: 'ชีสเค้ก', quantity: 1, price: 150, image: '🍰' }
];

// แสดงรายการสินค้า
function renderOrderItems() {
  const container = document.getElementById('orderItems');
  let total = 0;

  cartItems.forEach(item => {
    const subtotal = item.quantity * item.price;
    total += subtotal;

    container.innerHTML += \`
      &lt;div class="order-item"&gt;
        &lt;div&gt;
          &lt;div class="item-name"&gt;\${item.image} \${item.name}&lt;/div&gt;
          &lt;div class="item-qty"&gt;x\${item.quantity} @ ฿\${item.price}&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="item-price"&gt;฿\${subtotal.toLocaleString()}&lt;/div&gt;
      &lt;/div&gt;
    \`;
  });

  document.getElementById('totalAmount').textContent = '฿' + total.toLocaleString();
  return total;
}

// ชำระเงิน
async function processPayment() {
  const payBtn = document.getElementById('payBtn');
  const loading = document.getElementById('loading');

  payBtn.disabled = true;
  loading.style.display = 'block';

  try {
    const total = cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    const response = await fetch('/api/linepay/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: 'ORD-' + Date.now(),
        totalAmount: total,
        products: cartItems
      })
    });

    const data = await response.json();

    if (data.success && data.paymentUrl) {
      // redirect ไปหน้า LINE Pay
      window.location.href = data.paymentUrl;
    } else {
      alert('เกิดข้อผิดพลาด: ' + (data.error || 'ไม่สามารถสร้างรายการชำระเงินได้'));
      payBtn.disabled = false;
      loading.style.display = 'none';
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่');
    payBtn.disabled = false;
    loading.style.display = 'none';
  }
}

// เริ่มต้นแสดงรายการ
renderOrderItems();</code></pre>

      <h3>🔄 จัดการ Return URL</h3>
      <p>หลังจากผู้ใช้ชำระเงินสำเร็จหรือยกเลิก LINE Pay จะ redirect กลับมาที่ URL ที่คุณกำหนด:</p>

      <pre><code class="language-javascript">// Express.js - จัดการ Return URLs

// Confirm URL - ผู้ใช้ชำระเงินสำเร็จ
app.get('/pay/confirm', async (req, res) => {
  const { transactionId, orderId } = req.query;

  try {
    // ดึงข้อมูล order
    const order = await db.orders.findOne({ orderId });

    if (!order) {
      return res.redirect('/order/error?msg=order_not_found');
    }

    // เรียก Confirm API
    const result = await confirmPayment(transactionId, order.totalAmount);

    if (result.returnCode === '0000') {
      // อัพเดทสถานะ
      await db.orders.updateOne(
        { orderId },
        {
          $set: {
            status: 'paid',
            paidAt: new Date(),
            transactionId: transactionId,
            paymentInfo: result.info
          }
        }
      );

      // redirect ไปหน้า success
      res.redirect(\`/order/success?orderId=\${orderId}\`);
    } else {
      res.redirect(\`/order/failed?orderId=\${orderId}&reason=\${result.returnMessage}\`);
    }
  } catch (error) {
    console.error('Confirm error:', error);
    res.redirect('/order/error?msg=server_error');
  }
});

// Cancel URL - ผู้ใช้ยกเลิก
app.get('/pay/cancel', async (req, res) => {
  const { orderId } = req.query;

  await db.orders.updateOne(
    { orderId },
    { $set: { status: 'cancelled', cancelledAt: new Date() } }
  );

  res.redirect(\`/order/cancelled?orderId=\${orderId}\`);
});</code></pre>

      <h3>✅ หน้า Success: ชำระเงินสำเร็จ</h3>
      <pre><code class="language-html">&lt;!-- success.html --&gt;
&lt;div class="success-container"&gt;
  &lt;div class="success-icon"&gt;✅&lt;/div&gt;
  &lt;h1&gt;ชำระเงินสำเร็จ!&lt;/h1&gt;
  &lt;p class="order-id"&gt;หมายเลขคำสั่งซื้อ: &lt;strong id="orderId"&gt;&lt;/strong&gt;&lt;/p&gt;
  &lt;p class="thank-you"&gt;ขอบคุณที่ใช้บริการ 🙏&lt;/p&gt;

  &lt;div class="order-details"&gt;
    &lt;div class="detail-row"&gt;
      &lt;span&gt;สถานะ&lt;/span&gt;
      &lt;span class="status-paid"&gt;✅ ชำระเงินแล้ว&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="detail-row"&gt;
      &lt;span&gt;วิธีชำระเงิน&lt;/span&gt;
      &lt;span&gt;💚 LINE Pay&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="detail-row"&gt;
      &lt;span&gt;วันที่&lt;/span&gt;
      &lt;span id="paidDate"&gt;&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;a href="/" class="back-btn"&gt;กลับหน้าหลัก&lt;/a&gt;
&lt;/div&gt;

&lt;script&gt;
  // แสดงข้อมูลจาก URL params
  const params = new URLSearchParams(window.location.search);
  document.getElementById('orderId').textContent = params.get('orderId');
  document.getElementById('paidDate').textContent = new Date().toLocaleString('th-TH');
&lt;/script&gt;</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> อย่าลืมออกแบบหน้า Error และ Cancel ด้วย! ผู้ใช้อาจกดยกเลิกหรือเกิดข้อผิดพลาดได้ การมีหน้า fallback ที่ดีจะช่วยให้ UX ดีขึ้นมาก</div>

      <h3>📱 Responsive Design</h3>
      <pre><code class="language-css">/* Responsive styles */
@media (max-width: 480px) {
  .checkout-container {
    border-radius: 0;
    min-height: 100vh;
  }

  .checkout-header {
    padding: 20px 16px;
  }

  .order-items {
    padding: 16px;
  }

  .pay-button {
    margin: 16px;
    width: calc(100% - 32px);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    border-radius: 0;
    padding: 20px;
  }
}

/* LINE Pay Button Styles */
.pay-button-linepay {
  background: #00B900;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.pay-button-linepay:hover {
  background: #009900;
  box-shadow: 0 4px 12px rgba(0, 185, 0, 0.3);
}

.pay-button-linepay:active {
  transform: scale(0.98);
}</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> ตรวจสอบให้แน่ใจว่า <code>confirmUrl</code> และ <code>cancelUrl</code> เป็น HTTPS URL ที่เข้าถึงได้จากอินเทอร์เน็ต ถ้าใช้ localhost สำหรับพัฒนา ให้ใช้ ngrok หรือ Cloudflare Tunnel</div>
    `
  },
  {
    number: 5,
    slug: 'status-refund',
    emoji: '🔍',
    title: 'ตรวจสอบสถานะ + Refund',
    content: `
      <h2>🔍 ตรวจสอบสถานะ + Refund</h2>
      <p>ในบทนี้เราจะเรียนรู้วิธีตรวจสอบสถานะการชำระเงินและจัดการการคืนเงิน (Refund) ผ่าน LINE Pay API ซึ่งเป็นส่วนสำคัญในการบริหารจัดการระบบชำระเงินอย่างมืออาชีพ</p>

      <img src='/images/lessons/linepay-status-refund.png' alt='LINE Pay Status and Refund Flow'>

      <h3>📊 Payment Details API - ดูรายละเอียดการชำระเงิน</h3>
      <table>
        <thead>
          <tr><th>รายละเอียด</th><th>ค่า</th></tr>
        </thead>
        <tbody>
          <tr><td>Method</td><td><code>GET</code></td></tr>
          <tr><td>Endpoint</td><td><code>/v3/payments/requests/{transactionId}/check</code></td></tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">const crypto = require('crypto');
const axios = require('axios');

const CHANNEL_ID = process.env.LINE_PAY_CHANNEL_ID;
const CHANNEL_SECRET = process.env.LINE_PAY_CHANNEL_SECRET;
const API_BASE = 'https://sandbox-api-pay.line.me';

function createSignature(channelSecret, uri, requestBody, nonce) {
  const data = channelSecret + uri + requestBody + nonce;
  return crypto.createHmac('sha256', channelSecret).update(data).digest('base64');
}

/**
 * ตรวจสอบสถานะ Payment
 */
async function checkPaymentStatus(transactionId) {
  const uri = \`/v3/payments/requests/\${transactionId}/check\`;
  const nonce = crypto.randomUUID();

  // GET request ไม่มี body ใช้ empty string
  const signature = createSignature(CHANNEL_SECRET, uri, '', nonce);

  try {
    const response = await axios.get(\`\${API_BASE}\${uri}\`, {
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-Authorization-Nonce': nonce,
        'X-LINE-Authorization': signature
      }
    });

    console.log('Payment Status:', response.data);
    return response.data;
  } catch (error) {
    console.error('Check Status Error:', error.response?.data || error.message);
    throw error;
  }
}

// ตัวอย่างการใช้งาน
checkPaymentStatus('2024010100001234567').then(result => {
  console.log('Return Code:', result.returnCode);
  // returnCode: "0000" = สำเร็จ
  // returnCode: "0110" = ไม่พบ transaction
  // returnCode: "0121" = หมดอายุ
});</code></pre>

      <h3>📋 Payment Status Response</h3>
      <pre><code class="language-json">{
  "returnCode": "0000",
  "returnMessage": "Success.",
  "info": [
    {
      "transactionId": 2024010100001234567,
      "transactionDate": "2024-01-01T12:00:00Z",
      "transactionType": "PAYMENT",
      "amount": 350,
      "productName": "ร้านกาแฟ LINE Dev",
      "currency": "THB",
      "orderId": "ORD-1704067200000",
      "payStatus": "CONFIRMED",
      "payInfo": [
        {
          "method": "BALANCE",
          "amount": 350
        }
      ]
    }
  ]
}</code></pre>

      <h3>💸 Refund API - คืนเงิน</h3>
      <p>LINE Pay รองรับการคืนเงินทั้งแบบเต็มจำนวน (Full Refund) และบางส่วน (Partial Refund):</p>

      <table>
        <thead>
          <tr><th>รายละเอียด</th><th>ค่า</th></tr>
        </thead>
        <tbody>
          <tr><td>Method</td><td><code>POST</code></td></tr>
          <tr><td>Endpoint</td><td><code>/v3/payments/{transactionId}/refund</code></td></tr>
        </tbody>
      </table>

      <pre><code class="language-javascript">/**
 * คืนเงิน (Refund)
 * @param {string} transactionId - Transaction ID ที่ต้องการ refund
 * @param {number|null} refundAmount - จำนวนเงินที่จะ refund (null = full refund)
 */
async function refundPayment(transactionId, refundAmount = null) {
  const uri = \`/v3/payments/\${transactionId}/refund\`;
  const nonce = crypto.randomUUID();

  // ถ้าไม่ระบุ refundAmount = full refund
  const requestBody = refundAmount
    ? { refundAmount: refundAmount }
    : {};

  const bodyStr = JSON.stringify(requestBody);
  const signature = createSignature(CHANNEL_SECRET, uri, bodyStr, nonce);

  try {
    const response = await axios.post(\`\${API_BASE}\${uri}\`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-Authorization-Nonce': nonce,
        'X-LINE-Authorization': signature
      }
    });

    console.log('Refund Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Refund Error:', error.response?.data || error.message);
    throw error;
  }
}

// ตัวอย่าง: Full Refund (คืนเงินทั้งหมด)
refundPayment('2024010100001234567').then(result => {
  console.log('Full refund result:', result);
});

// ตัวอย่าง: Partial Refund (คืนเงินบางส่วน)
refundPayment('2024010100001234567', 150).then(result => {
  console.log('Partial refund result:', result);
});</code></pre>

      <h3>📋 Refund API Response</h3>
      <pre><code class="language-json">{
  "returnCode": "0000",
  "returnMessage": "Success.",
  "info": {
    "refundTransactionId": 2024010100009876543,
    "refundTransactionDate": "2024-01-02T15:30:00Z"
  }
}</code></pre>

      <h3>🚫 Void Transaction (ยกเลิกก่อน Capture)</h3>
      <pre><code class="language-javascript">/**
 * Void Transaction - ยกเลิก transaction ที่ยังไม่ได้ capture
 * ใช้ได้เฉพาะกรณีใช้ Authorization + Capture mode
 */
async function voidTransaction(transactionId) {
  const uri = \`/v3/payments/authorizations/\${transactionId}/void\`;
  const nonce = crypto.randomUUID();
  const bodyStr = JSON.stringify({});
  const signature = createSignature(CHANNEL_SECRET, uri, bodyStr, nonce);

  try {
    const response = await axios.post(\`\${API_BASE}\${uri}\`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'X-LINE-ChannelId': CHANNEL_ID,
        'X-LINE-Authorization-Nonce': nonce,
        'X-LINE-Authorization': signature
      }
    });

    return response.data;
  } catch (error) {
    console.error('Void Error:', error.response?.data || error.message);
    throw error;
  }
}</code></pre>

      <h3>⚠️ Error Codes ที่ควรรู้</h3>
      <table>
        <thead>
          <tr><th>Return Code</th><th>ความหมาย</th><th>วิธีจัดการ</th></tr>
        </thead>
        <tbody>
          <tr><td><code>0000</code></td><td>สำเร็จ</td><td>ดำเนินการต่อ</td></tr>
          <tr><td><code>1101</code></td><td>ยอดเงินผู้ใช้ไม่พอ</td><td>แจ้งผู้ใช้เติมเงิน</td></tr>
          <tr><td><code>1104</code></td><td>ร้านค้าไม่สามารถใช้งาน</td><td>ตรวจสอบสถานะ merchant</td></tr>
          <tr><td><code>1124</code></td><td>จำนวนเงินไม่ถูกต้อง</td><td>ตรวจสอบ amount</td></tr>
          <tr><td><code>1141</code></td><td>บัญชีถูกระงับ</td><td>ติดต่อ LINE Pay Support</td></tr>
          <tr><td><code>1150</code></td><td>ไม่พบ transaction</td><td>ตรวจสอบ transactionId</td></tr>
          <tr><td><code>1170</code></td><td>ยอด refund เกินยอดชำระ</td><td>ตรวจสอบ refundAmount</td></tr>
          <tr><td><code>1172</code></td><td>ไม่สามารถ refund ได้</td><td>transaction อาจ refund แล้ว</td></tr>
          <tr><td><code>1198</code></td><td>API call ซ้ำ (duplicate)</td><td>ตรวจสอบ nonce</td></tr>
          <tr><td><code>9000</code></td><td>Internal server error</td><td>ลองใหม่ภายหลัง</td></tr>
        </tbody>
      </table>

      <h3>🛡️ Error Handling ที่สมบูรณ์</h3>
      <pre><code class="language-javascript">/**
 * จัดการ Error จาก LINE Pay API อย่างครบถ้วน
 */
function handleLinePayError(returnCode, returnMessage) {
  const errorMap = {
    '1101': { message: 'ยอดเงินไม่เพียงพอ กรุณาเติมเงินใน LINE Pay', retry: false },
    '1104': { message: 'ร้านค้าไม่สามารถรับชำระเงินได้ในขณะนี้', retry: false },
    '1124': { message: 'จำนวนเงินไม่ถูกต้อง', retry: false },
    '1141': { message: 'บัญชีถูกระงับ กรุณาติดต่อ LINE Pay', retry: false },
    '1150': { message: 'ไม่พบรายการชำระเงิน', retry: false },
    '1170': { message: 'ยอดคืนเงินเกินยอดชำระ', retry: false },
    '1172': { message: 'ไม่สามารถคืนเงินได้ (อาจคืนเงินไปแล้ว)', retry: false },
    '1198': { message: 'คำขอซ้ำ กรุณารอสักครู่', retry: true },
    '9000': { message: 'ระบบ LINE Pay ขัดข้อง กรุณาลองใหม่ภายหลัง', retry: true }
  };

  const error = errorMap[returnCode] || {
    message: \`เกิดข้อผิดพลาด: \${returnMessage}\`,
    retry: true
  };

  console.error(\`LINE Pay Error [\${returnCode}]: \${error.message}\`);
  return error;
}

// ใช้งานใน Express route
app.get('/pay/confirm', async (req, res) => {
  const { transactionId } = req.query;

  try {
    const order = await getOrder(transactionId);
    const result = await confirmPayment(transactionId, order.amount);

    if (result.returnCode === '0000') {
      await updateOrder(order.id, 'paid');
      res.redirect('/success');
    } else {
      const error = handleLinePayError(result.returnCode, result.returnMessage);

      // บันทึก error log
      await logPaymentError(order.id, result);

      res.redirect(\`/payment/error?msg=\${encodeURIComponent(error.message)}&retry=\${error.retry}\`);
    }
  } catch (err) {
    console.error('Server error:', err);
    res.redirect('/payment/error?msg=server_error');
  }
});</code></pre>

      <h3>🔔 Webhook Notifications</h3>
      <p>LINE Pay สามารถส่ง Webhook notification มาที่ server ของคุณเมื่อมีเหตุการณ์เกิดขึ้น:</p>

      <pre><code class="language-javascript">// Express.js - รับ Webhook จาก LINE Pay
app.post('/webhook/linepay', express.json(), async (req, res) => {
  console.log('LINE Pay Webhook received:', req.body);

  const { transactionId, orderId, status } = req.body;

  switch (status) {
    case 'CONFIRMED':
      // ชำระเงินสำเร็จ
      await db.orders.updateOne(
        { orderId },
        { $set: { status: 'paid', confirmedAt: new Date() } }
      );
      // ส่ง notification ให้ลูกค้า
      await sendLineNotification(orderId, 'ชำระเงินสำเร็จ! 🎉');
      break;

    case 'REFUNDED':
      // คืนเงินสำเร็จ
      await db.orders.updateOne(
        { orderId },
        { $set: { status: 'refunded', refundedAt: new Date() } }
      );
      await sendLineNotification(orderId, 'คืนเงินสำเร็จ 💸');
      break;

    case 'EXPIRED':
      // หมดอายุ
      await db.orders.updateOne(
        { orderId },
        { $set: { status: 'expired' } }
      );
      break;

    default:
      console.log('Unknown webhook status:', status);
  }

  // ตอบ 200 OK ให้ LINE Pay
  res.status(200).json({ received: true });
});</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Refund มีระยะเวลาจำกัด! สำหรับบางร้านค้า สามารถ refund ได้ภายใน 1 ปีนับจากวันชำระเงิน แต่บางกรณีอาจสั้นกว่านั้น ตรวจสอบเงื่อนไขกับ LINE Pay</div>

      <h3>🔧 Google Apps Script: ตรวจสอบและ Refund</h3>
      <pre><code class="language-javascript">// Google Apps Script - Check Status & Refund

function checkPaymentStatusGAS(transactionId) {
  const props = PropertiesService.getScriptProperties();
  const channelId = props.getProperty('LINE_PAY_CHANNEL_ID');
  const channelSecret = props.getProperty('LINE_PAY_CHANNEL_SECRET');

  const uri = '/v3/payments/requests/' + transactionId + '/check';
  const nonce = Utilities.getUuid();
  const signature = createHmacSignature(channelSecret, uri, '', nonce);

  const options = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': channelId,
      'X-LINE-Authorization-Nonce': nonce,
      'X-LINE-Authorization': signature
    },
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(
    'https://sandbox-api-pay.line.me' + uri,
    options
  );

  return JSON.parse(response.getContentText());
}

function refundPaymentGAS(transactionId, refundAmount) {
  const props = PropertiesService.getScriptProperties();
  const channelId = props.getProperty('LINE_PAY_CHANNEL_ID');
  const channelSecret = props.getProperty('LINE_PAY_CHANNEL_SECRET');

  const uri = '/v3/payments/' + transactionId + '/refund';
  const nonce = Utilities.getUuid();

  const body = refundAmount ? { refundAmount: refundAmount } : {};
  const bodyStr = JSON.stringify(body);
  const signature = createHmacSignature(channelSecret, uri, bodyStr, nonce);

  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'X-LINE-ChannelId': channelId,
      'X-LINE-Authorization-Nonce': nonce,
      'X-LINE-Authorization': signature
    },
    payload: bodyStr,
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(
    'https://sandbox-api-pay.line.me' + uri,
    options
  );

  return JSON.parse(response.getContentText());
}

// ทดสอบ
function testRefund() {
  // Full refund
  const result = refundPaymentGAS('2024010100001234567');
  Logger.log('Refund result: ' + JSON.stringify(result));
}</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ควรสร้างหน้า Admin Dashboard สำหรับจัดการ Refund เพื่อให้ทีมงานสามารถ refund ได้โดยไม่ต้องเขียนโค้ด ในบทถัดไปเราจะเรียนรู้การส่ง Flex Message เพื่อแจ้งสถานะให้ลูกค้า</div>
    `
  },
  {
    number: 6,
    slug: 'linepay-flex',
    emoji: '💬',
    title: 'LINE Pay + Flex Message',
    content: `
      <h2>💬 LINE Pay + Flex Message</h2>
      <p>ในบทนี้เราจะเรียนรู้วิธีสร้าง Flex Message ที่เชื่อมต่อกับ LINE Pay เพื่อให้ลูกค้าสามารถชำระเงินได้โดยตรงจากแชท LINE ทำให้ประสบการณ์การซื้อสินค้าเป็นไปอย่างไร้รอยต่อ</p>

      <img src='/images/lessons/linepay-flex-message.png' alt='LINE Pay Flex Message Example'>

      <h3>🎯 ทำไมต้องใช้ Flex Message กับ LINE Pay?</h3>
      <ul>
        <li><strong>Seamless Experience</strong> — ลูกค้าไม่ต้องออกจากแอป LINE</li>
        <li><strong>สวยงาม</strong> — ออกแบบ UI ได้อิสระด้วย Flex Message</li>
        <li><strong>Interactive</strong> — มีปุ่มกดชำระเงินได้เลย</li>
        <li><strong>Trackable</strong> — ติดตามสถานะได้จาก LINE OA</li>
      </ul>

      <h3>💳 สร้างปุ่มชำระเงิน LINE Pay ใน Flex Message</h3>
      <pre><code class="language-javascript">/**
 * สร้าง Flex Message สำหรับชำระเงิน LINE Pay
 * @param {object} order - ข้อมูลคำสั่งซื้อ
 * @param {string} paymentUrl - URL สำหรับชำระเงิน (จาก Reserve API)
 */
function createPaymentFlexMessage(order, paymentUrl) {
  return {
    type: 'flex',
    altText: \`🧾 คำสั่งซื้อ #\${order.orderId} - ฿\${order.totalAmount}\`,
    contents: {
      type: 'bubble',
      size: 'giga',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#00B900',
        paddingAll: '20px',
        contents: [
          {
            type: 'text',
            text: '🛒 สรุปคำสั่งซื้อ',
            color: '#ffffff',
            size: 'lg',
            weight: 'bold'
          },
          {
            type: 'text',
            text: \`Order #\${order.orderId}\`,
            color: '#ffffffcc',
            size: 'xs',
            margin: 'sm'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '20px',
        spacing: 'md',
        contents: [
          // รายการสินค้า
          ...order.products.map(item => ({
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: \`\${item.name} x\${item.quantity}\`,
                size: 'sm',
                flex: 3,
                color: '#333333'
              },
              {
                type: 'text',
                text: \`฿\${(item.price * item.quantity).toLocaleString()}\`,
                size: 'sm',
                flex: 1,
                align: 'end',
                color: '#333333',
                weight: 'bold'
              }
            ]
          })),
          // เส้นคั่น
          {
            type: 'separator',
            margin: 'lg'
          },
          // ยอดรวม
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'lg',
            contents: [
              {
                type: 'text',
                text: 'ยอดรวม',
                size: 'md',
                weight: 'bold',
                color: '#333333'
              },
              {
                type: 'text',
                text: \`฿\${order.totalAmount.toLocaleString()}\`,
                size: 'lg',
                weight: 'bold',
                align: 'end',
                color: '#00B900'
              }
            ]
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '20px',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: '💚 ชำระเงินด้วย LINE Pay',
              uri: paymentUrl
            },
            style: 'primary',
            color: '#00B900',
            height: 'md'
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: '❌ ยกเลิก',
              text: \`ยกเลิกคำสั่งซื้อ #\${order.orderId}\`
            },
            style: 'secondary',
            height: 'sm'
          }
        ]
      }
    }
  };
}</code></pre>

      <h3>🔗 สร้าง Payment Link และส่ง Flex Message</h3>
      <pre><code class="language-javascript">const line = require('@line/bot-sdk');

const lineClient = new line.Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

/**
 * สร้างรายการชำระเงินและส่ง Flex Message ให้ลูกค้า
 */
async function sendPaymentMessage(userId, order) {
  try {
    // Step 1: Reserve Payment
    const reserveResult = await reservePayment(order);

    if (reserveResult.returnCode !== '0000') {
      throw new Error('Reserve failed: ' + reserveResult.returnMessage);
    }

    const paymentUrl = reserveResult.info.paymentUrl.web;
    const transactionId = reserveResult.info.transactionId;

    // บันทึก transaction
    await db.transactions.insertOne({
      transactionId,
      orderId: order.orderId,
      userId,
      amount: order.totalAmount,
      status: 'reserved',
      createdAt: new Date()
    });

    // Step 2: สร้างและส่ง Flex Message
    const flexMessage = createPaymentFlexMessage(order, paymentUrl);
    await lineClient.pushMessage(userId, flexMessage);

    console.log(\`Payment message sent to user \${userId}\`);
    return { success: true, transactionId };
  } catch (error) {
    console.error('Send payment message error:', error);
    throw error;
  }
}

// ตัวอย่างการใช้งานใน Webhook handler
app.post('/webhook/line', line.middleware(config), async (req, res) => {
  const events = req.body.events;

  for (const event of events) {
    if (event.type === 'message' && event.message.text === 'สั่งซื้อ') {
      const order = {
        orderId: 'ORD-' + Date.now(),
        totalAmount: 350,
        products: [
          { name: 'ลาเต้เย็น', quantity: 2, price: 75 },
          { name: 'ครัวซอง', quantity: 1, price: 200 }
        ]
      };

      await sendPaymentMessage(event.source.userId, order);
    }
  }

  res.json({ success: true });
});</code></pre>

      <h3>🧾 Receipt Flex Message (ใบเสร็จหลังชำระเงิน)</h3>
      <pre><code class="language-javascript">/**
 * สร้าง Flex Message ใบเสร็จหลังชำระเงินสำเร็จ
 */
function createReceiptFlexMessage(order, paymentInfo) {
  return {
    type: 'flex',
    altText: \`✅ ใบเสร็จ #\${order.orderId}\`,
    contents: {
      type: 'bubble',
      size: 'giga',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#00B900',
        paddingAll: '20px',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '✅',
                size: 'xxl',
                flex: 0
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: 'ชำระเงินสำเร็จ!',
                    color: '#ffffff',
                    size: 'lg',
                    weight: 'bold'
                  },
                  {
                    type: 'text',
                    text: \`Order #\${order.orderId}\`,
                    color: '#ffffffcc',
                    size: 'xs'
                  }
                ],
                margin: 'lg'
              }
            ]
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '20px',
        spacing: 'md',
        contents: [
          // รายการสินค้า
          ...order.products.map(item => ({
            type: 'box',
            layout: 'horizontal',
            contents: [
              { type: 'text', text: \`\${item.name} x\${item.quantity}\`, size: 'sm', flex: 3 },
              { type: 'text', text: \`฿\${(item.price * item.quantity).toLocaleString()}\`, size: 'sm', flex: 1, align: 'end', weight: 'bold' }
            ]
          })),
          { type: 'separator', margin: 'lg' },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'lg',
            contents: [
              { type: 'text', text: 'ยอดรวม', size: 'md', weight: 'bold' },
              { type: 'text', text: \`฿\${order.totalAmount.toLocaleString()}\`, size: 'lg', weight: 'bold', align: 'end', color: '#00B900' }
            ]
          },
          { type: 'separator', margin: 'lg' },
          // ข้อมูลการชำระเงิน
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'วิธีชำระเงิน', size: 'xs', color: '#888888', flex: 2 },
                  { type: 'text', text: 'LINE Pay', size: 'xs', flex: 2, align: 'end' }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'Transaction ID', size: 'xs', color: '#888888', flex: 2 },
                  { type: 'text', text: String(paymentInfo.transactionId), size: 'xs', flex: 2, align: 'end' }
                ]
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  { type: 'text', text: 'วันที่', size: 'xs', color: '#888888', flex: 2 },
                  { type: 'text', text: new Date().toLocaleString('th-TH'), size: 'xs', flex: 2, align: 'end' }
                ]
              }
            ]
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '20px',
        contents: [
          {
            type: 'text',
            text: 'ขอบคุณที่ใช้บริการ 🙏',
            align: 'center',
            size: 'sm',
            color: '#888888'
          }
        ]
      }
    }
  };
}

// ส่งใบเสร็จหลังชำระเงินสำเร็จ
async function sendReceipt(userId, order, paymentInfo) {
  const receiptMessage = createReceiptFlexMessage(order, paymentInfo);
  await lineClient.pushMessage(userId, receiptMessage);
  console.log('Receipt sent to', userId);
}</code></pre>

      <h3>🔔 Payment Status Notification</h3>
      <pre><code class="language-javascript">/**
 * ส่งแจ้งเตือนสถานะการชำระเงินผ่าน LINE
 */
async function sendPaymentNotification(userId, status, order) {
  const statusMessages = {
    'reserved': {
      emoji: '⏳',
      title: 'รอชำระเงิน',
      description: \`กรุณาชำระเงิน ฿\${order.totalAmount.toLocaleString()} ภายใน 20 นาที\`,
      color: '#FFA500'
    },
    'confirmed': {
      emoji: '✅',
      title: 'ชำระเงินสำเร็จ',
      description: \`ชำระเงิน ฿\${order.totalAmount.toLocaleString()} เรียบร้อยแล้ว\`,
      color: '#00B900'
    },
    'refunded': {
      emoji: '💸',
      title: 'คืนเงินเรียบร้อย',
      description: \`คืนเงิน ฿\${order.refundAmount.toLocaleString()} เรียบร้อยแล้ว\`,
      color: '#FF6B6B'
    },
    'expired': {
      emoji: '⏰',
      title: 'รายการหมดอายุ',
      description: 'รายการชำระเงินหมดอายุ กรุณาสร้างรายการใหม่',
      color: '#888888'
    }
  };

  const statusInfo = statusMessages[status];

  const message = {
    type: 'flex',
    altText: \`\${statusInfo.emoji} \${statusInfo.title} - Order #\${order.orderId}\`,
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        paddingAll: '20px',
        contents: [
          {
            type: 'text',
            text: \`\${statusInfo.emoji} \${statusInfo.title}\`,
            size: 'lg',
            weight: 'bold',
            color: statusInfo.color
          },
          {
            type: 'text',
            text: statusInfo.description,
            size: 'sm',
            color: '#666666',
            margin: 'md',
            wrap: true
          },
          {
            type: 'text',
            text: \`Order #\${order.orderId}\`,
            size: 'xs',
            color: '#aaaaaa',
            margin: 'lg'
          }
        ]
      }
    }
  };

  await lineClient.pushMessage(userId, message);
}</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ใช้ LINE Flex Message Simulator ที่ <code>https://developers.line.biz/flex-simulator/</code> เพื่อออกแบบและทดสอบ Flex Message ก่อน deploy จริง จะช่วยประหยัดเวลาได้มาก!</div>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Flex Message มีข้อจำกัดขนาดไม่เกิน 50KB ต่อ message ถ้ามีรายการสินค้าเยอะ อาจต้องแบ่งเป็นหลาย bubble ใน carousel แทน</div>
    `
  },
  {
    number: 7,
    slug: 'linepay-liff',
    emoji: '📱',
    title: 'LINE Pay + LIFF',
    content: `
      <h2>📱 LINE Pay + LIFF</h2>
      <p>ในบทนี้เราจะเรียนรู้การผสมผสาน LINE Pay เข้ากับ LIFF (LINE Front-end Framework) เพื่อสร้างประสบการณ์การชำระเงินแบบ in-app ที่ไร้รอยต่อ ผู้ใช้สามารถเลือกสินค้า ชำระเงิน และรับใบเสร็จได้ทั้งหมดภายในแอป LINE โดยไม่ต้อง redirect ออกไป</p>

      <img src='/images/lessons/linepay-liff-integration.png' alt='LINE Pay LIFF Integration'>

      <h3>🎯 ข้อดีของ LINE Pay + LIFF</h3>
      <ul>
        <li><strong>Seamless Checkout</strong> — ชำระเงินภายใน LINE ไม่ต้องเปิดเบราว์เซอร์ภายนอก</li>
        <li><strong>Auto-fill Profile</strong> — ดึงข้อมูลชื่อ รูปภาพ จาก LINE Profile อัตโนมัติ</li>
        <li><strong>In-app Payment</strong> — ใช้ <code>paymentUrl.app</code> แทน <code>.web</code> เพื่ออยู่ใน LINE</li>
        <li><strong>Better UX</strong> — ผู้ใช้ไม่ต้องกรอกข้อมูลซ้ำ</li>
      </ul>

      <h3>⚙️ ตั้งค่า LIFF App</h3>

      <div class='step'><span class='step-number'>1</span><strong>สร้าง LIFF App ใน LINE Developers Console</strong>
        <p>ไปที่ LINE Developers Console > เลือก Channel > LIFF tab > Add LIFF app</p>
      </div>

      <div class='step'><span class='step-number'>2</span><strong>ตั้งค่า Endpoint URL</strong>
        <p>ระบุ URL ของหน้าเว็บที่จะเปิดใน LIFF เช่น <code>https://your-domain.com/liff/shop</code></p>
      </div>

      <div class='step'><span class='step-number'>3</span><strong>เลือกขนาด View</strong>
        <p>เลือก <code>Full</code> สำหรับหน้าร้านค้าเต็มจอ หรือ <code>Tall</code> สำหรับ popup</p>
      </div>

      <pre><code class="language-html">&lt;!-- LIFF Shop Page --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;ร้านค้า LINE Pay&lt;/title&gt;
  &lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"&gt;&lt;/script&gt;
  &lt;style&gt;
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans Thai', sans-serif; background: #f0f2f5; }
    .header {
      background: linear-gradient(135deg, #00B900, #00D100);
      color: white; padding: 20px; text-align: center;
    }
    .user-info { display: flex; align-items: center; gap: 12px; padding: 16px; }
    .user-avatar { width: 40px; height: 40px; border-radius: 50%; }
    .product-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 16px; }
    .product-card {
      background: white; border-radius: 12px; overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .product-img { width: 100%; height: 120px; object-fit: cover; }
    .product-info { padding: 12px; }
    .product-name { font-weight: 600; font-size: 0.9rem; }
    .product-price { color: #00B900; font-weight: 700; margin-top: 4px; }
    .add-btn {
      width: 100%; padding: 8px; background: #00B900; color: white;
      border: none; border-radius: 8px; margin-top: 8px; cursor: pointer;
    }
    .cart-bar {
      position: fixed; bottom: 0; left: 0; right: 0;
      background: white; padding: 16px; box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    }
    .checkout-btn {
      width: 100%; padding: 14px; background: #00B900; color: white;
      border: none; border-radius: 12px; font-size: 1rem; font-weight: 600;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="header"&gt;
    &lt;h1&gt;☕ LINE Coffee Shop&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div class="user-info" id="userInfo" style="display:none"&gt;&lt;/div&gt;
  &lt;div class="product-grid" id="products"&gt;&lt;/div&gt;
  &lt;div class="cart-bar" id="cartBar" style="display:none"&gt;
    &lt;button class="checkout-btn" onclick="checkout()"&gt;
      💚 ชำระเงิน (&lt;span id="cartTotal"&gt;฿0&lt;/span&gt;)
    &lt;/button&gt;
  &lt;/div&gt;

  &lt;script src="/js/liff-shop.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>⚡ LIFF JavaScript: ดึงข้อมูลผู้ใช้และชำระเงิน</h3>
      <pre><code class="language-javascript">// liff-shop.js
const LIFF_ID = 'YOUR_LIFF_ID';
let userProfile = null;
let cart = [];

// ข้อมูลสินค้า
const products = [
  { id: 1, name: 'อเมริกาโน่', price: 60, image: '/images/americano.jpg', emoji: '☕' },
  { id: 2, name: 'ลาเต้', price: 75, image: '/images/latte.jpg', emoji: '🥛' },
  { id: 3, name: 'คาปูชิโน่', price: 80, image: '/images/cappuccino.jpg', emoji: '☕' },
  { id: 4, name: 'มอคค่า', price: 85, image: '/images/mocha.jpg', emoji: '🍫' },
  { id: 5, name: 'ครัวซอง', price: 120, image: '/images/croissant.jpg', emoji: '🥐' },
  { id: 6, name: 'ชีสเค้ก', price: 150, image: '/images/cheesecake.jpg', emoji: '🍰' }
];

// เริ่มต้น LIFF
async function initLiff() {
  try {
    await liff.init({ liffId: LIFF_ID });

    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    // ดึงข้อมูลผู้ใช้
    userProfile = await liff.getProfile();
    displayUserInfo(userProfile);

    // แสดงสินค้า
    renderProducts();

    console.log('LIFF initialized successfully');
    console.log('User:', userProfile.displayName);
    console.log('OS:', liff.getOS());
    console.log('Is in LINE:', liff.isInClient());
  } catch (error) {
    console.error('LIFF init error:', error);
    alert('เกิดข้อผิดพลาดในการเชื่อมต่อ LINE');
  }
}

// แสดงข้อมูลผู้ใช้
function displayUserInfo(profile) {
  const container = document.getElementById('userInfo');
  container.style.display = 'flex';
  container.innerHTML = \`
    &lt;img src="\${profile.pictureUrl}" class="user-avatar" alt="avatar"&gt;
    &lt;div&gt;
      &lt;strong&gt;สวัสดี, \${profile.displayName} 👋&lt;/strong&gt;
      &lt;div style="font-size:0.8rem;color:#888"&gt;ยินดีต้อนรับเข้าสู่ร้านของเรา&lt;/div&gt;
    &lt;/div&gt;
  \`;
}

// แสดงสินค้า
function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = products.map(p => \`
    &lt;div class="product-card"&gt;
      &lt;div style="font-size:3rem;text-align:center;padding:20px;background:#f9f9f9"&gt;\${p.emoji}&lt;/div&gt;
      &lt;div class="product-info"&gt;
        &lt;div class="product-name"&gt;\${p.name}&lt;/div&gt;
        &lt;div class="product-price"&gt;฿\${p.price}&lt;/div&gt;
        &lt;button class="add-btn" onclick="addToCart(\${p.id})"&gt;+ เพิ่มลงตะกร้า&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  \`).join('');
}

// เพิ่มสินค้าลงตะกร้า
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartBar();
}

// อัพเดทแถบตะกร้า
function updateCartBar() {
  const cartBar = document.getElementById('cartBar');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length > 0) {
    cartBar.style.display = 'block';
    document.getElementById('cartTotal').textContent = \`฿\${total.toLocaleString()}\`;
  } else {
    cartBar.style.display = 'none';
  }
}

// ชำระเงิน
async function checkout() {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  try {
    // เรียก API เพื่อ reserve payment
    const response = await fetch('/api/linepay/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: 'LIFF-' + Date.now(),
        totalAmount: total,
        userId: userProfile.userId,
        displayName: userProfile.displayName,
        products: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      })
    });

    const data = await response.json();

    if (data.success) {
      if (liff.isInClient()) {
        // อยู่ใน LINE app → ใช้ app URL
        window.location.href = data.paymentUrl.app || data.paymentUrl.web;
      } else {
        // อยู่ในเบราว์เซอร์ → ใช้ web URL
        window.location.href = data.paymentUrl.web;
      }
    } else {
      alert('ไม่สามารถสร้างรายการชำระเงินได้: ' + data.error);
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('เกิดข้อผิดพลาด กรุณาลองใหม่');
  }
}

// เริ่มต้น
initLiff();</code></pre>

      <h3>🔄 In-app Payment Flow</h3>
      <p>เมื่อใช้ LIFF ร่วมกับ LINE Pay flow จะแตกต่างจากเว็บปกติเล็กน้อย:</p>

      <div class='step'><span class='step-number'>1</span><strong>ผู้ใช้เปิด LIFF App</strong> — LIFF จะตรวจสอบ login อัตโนมัติและดึง profile</div>

      <div class='step'><span class='step-number'>2</span><strong>เลือกสินค้าและกด Checkout</strong> — ข้อมูล user ถูกแนบไปกับ order อัตโนมัติ</div>

      <div class='step'><span class='step-number'>3</span><strong>Reserve Payment</strong> — Server สร้างรายการชำระเงิน</div>

      <div class='step'><span class='step-number'>4</span><strong>Redirect ไป LINE Pay</strong> — ใช้ <code>paymentUrl.app</code> เพื่ออยู่ในแอป LINE</div>

      <div class='step'><span class='step-number'>5</span><strong>ผู้ใช้ยืนยัน</strong> — LINE Pay แสดงหน้ายืนยันใน LINE app</div>

      <div class='step'><span class='step-number'>6</span><strong>Redirect กลับ LIFF</strong> — กลับมาที่ LIFF พร้อม transactionId</div>

      <h3>🔧 Server-side: จัดการ Confirm ใน LIFF</h3>
      <pre><code class="language-javascript">// Server-side: Reserve API handler สำหรับ LIFF
app.post('/api/linepay/reserve', async (req, res) => {
  const { orderId, totalAmount, userId, displayName, products } = req.body;

  try {
    const reserveResult = await reservePayment({
      orderId,
      totalAmount,
      shopName: 'LINE Coffee Shop',
      products,
      // ตั้ง confirmUrl เป็น LIFF URL เพื่อกลับมาใน LINE
      confirmUrl: \`https://liff.line.me/\${LIFF_ID}?page=confirm\`,
      cancelUrl: \`https://liff.line.me/\${LIFF_ID}?page=cancel\`
    });

    if (reserveResult.returnCode === '0000') {
      // บันทึก order
      await db.orders.insertOne({
        orderId,
        userId,
        displayName,
        totalAmount,
        products,
        transactionId: reserveResult.info.transactionId,
        status: 'reserved',
        createdAt: new Date()
      });

      res.json({
        success: true,
        paymentUrl: reserveResult.info.paymentUrl,
        transactionId: reserveResult.info.transactionId
      });
    } else {
      res.json({ success: false, error: reserveResult.returnMessage });
    }
  } catch (error) {
    console.error('Reserve error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Confirm handler
app.get('/liff/confirm', async (req, res) => {
  const { transactionId } = req.query;

  try {
    const order = await db.orders.findOne({ transactionId });
    const result = await confirmPayment(transactionId, order.totalAmount);

    if (result.returnCode === '0000') {
      await db.orders.updateOne(
        { transactionId },
        { $set: { status: 'paid', paidAt: new Date() } }
      );

      // ส่งใบเสร็จผ่าน LINE
      await sendReceipt(order.userId, order, result.info);
    }

    // redirect ไปหน้าผลลัพธ์ใน LIFF
    res.redirect(\`/liff/result?orderId=\${order.orderId}&status=\${result.returnCode === '0000' ? 'success' : 'failed'}\`);
  } catch (error) {
    res.redirect('/liff/result?status=error');
  }
});</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ใช้ <code>liff.isInClient()</code> เพื่อเช็คว่าผู้ใช้อยู่ในแอป LINE หรือเบราว์เซอร์ ถ้าอยู่ในแอป LINE ให้ใช้ <code>paymentUrl.app</code> เพื่อให้ประสบการณ์ดีที่สุด</div>

      <div class='warning-box'><strong>⚠️ Warning:</strong> LIFF v2 ต้องใช้ HTTPS เสมอ! ให้แน่ใจว่า Endpoint URL ของ LIFF app ใช้ HTTPS ถ้ายังอยู่ในขั้นตอนพัฒนา ใช้ ngrok หรือ Cloudflare Tunnel เพื่อได้ HTTPS URL</div>
    `
  },
  {
    number: 8,
    slug: 'linepay-workshop',
    emoji: '🏗️',
    title: 'Workshop: ระบบจ่ายเงินครบจบ',
    content: `
      <h2>🏗️ Workshop: ระบบจ่ายเงินครบจบ</h2>
      <p>ในบทสุดท้ายนี้ เราจะรวมทุกสิ่งที่เรียนมาตลอดทั้งคอร์สเพื่อสร้างระบบชำระเงินที่ใช้งานได้จริงครบทั้งกระบวนการ ตั้งแต่เลือกสินค้า → ตะกร้า → Checkout → LINE Pay → ยืนยัน → ใบเสร็จ → ติดตามสถานะ</p>

      <img src='/images/lessons/linepay-workshop-overview.png' alt='LINE Pay Workshop - Complete Payment System'>

      <h3>📋 สิ่งที่จะสร้างในบทนี้</h3>
      <ol>
        <li><strong>Product Catalog</strong> — หน้าแสดงสินค้า</li>
        <li><strong>Shopping Cart</strong> — ระบบตะกร้าสินค้า</li>
        <li><strong>Checkout Page</strong> — หน้าสรุปและชำระเงิน</li>
        <li><strong>LINE Pay Integration</strong> — เชื่อมต่อ LINE Pay API</li>
        <li><strong>Confirmation Page</strong> — หน้ายืนยันผลการชำระเงิน</li>
        <li><strong>Receipt System</strong> — ส่งใบเสร็จผ่าน LINE</li>
        <li><strong>Order Tracking</strong> — ระบบติดตามสถานะ</li>
      </ol>

      <h3>📁 โครงสร้างโปรเจกต์</h3>
      <pre><code class="language-bash">linepay-shop/
├── package.json
├── .env
├── server.js              # Express server หลัก
├── config/
│   └── linepay.js         # LINE Pay configuration
├── routes/
│   ├── shop.js            # Shop routes
│   ├── cart.js            # Cart routes
│   └── payment.js         # Payment routes
├── services/
│   ├── linepay.js         # LINE Pay API service
│   └── line-notify.js     # LINE notification service
├── models/
│   └── order.js           # Order model
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── shop.js
│   │   ├── cart.js
│   │   └── checkout.js
│   └── images/
└── views/
    ├── shop.html
    ├── cart.html
    ├── checkout.html
    ├── success.html
    ├── failed.html
    └── tracking.html</code></pre>

      <h3>⚙️ Step 1: ตั้งค่าโปรเจกต์</h3>
      <pre><code class="language-json">// package.json
{
  "name": "linepay-shop",
  "version": "1.0.0",
  "description": "ร้านค้าออนไลน์ + LINE Pay",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "axios": "^1.6.0",
    "dotenv": "^16.3.1",
    "uuid": "^9.0.0",
    "cors": "^2.8.5",
    "@line/bot-sdk": "^8.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}</code></pre>

      <pre><code class="language-bash"># .env
LINE_PAY_CHANNEL_ID=1234567890
LINE_PAY_CHANNEL_SECRET=your_channel_secret_here
LINE_PAY_API_BASE=https://sandbox-api-pay.line.me
LINE_CHANNEL_ACCESS_TOKEN=your_line_channel_access_token
BASE_URL=https://your-domain.com
PORT=3000</code></pre>

      <h3>⚙️ Step 2: LINE Pay Service</h3>
      <pre><code class="language-javascript">// services/linepay.js
const crypto = require('crypto');
const axios = require('axios');
require('dotenv').config();

const CHANNEL_ID = process.env.LINE_PAY_CHANNEL_ID;
const CHANNEL_SECRET = process.env.LINE_PAY_CHANNEL_SECRET;
const API_BASE = process.env.LINE_PAY_API_BASE;
const BASE_URL = process.env.BASE_URL;

class LinePayService {
  /**
   * สร้าง HMAC Signature
   */
  static createSignature(uri, body, nonce) {
    const data = CHANNEL_SECRET + uri + body + nonce;
    return crypto.createHmac('sha256', CHANNEL_SECRET).update(data).digest('base64');
  }

  /**
   * สร้าง Headers สำหรับ API request
   */
  static createHeaders(uri, body = '') {
    const nonce = crypto.randomUUID();
    const signature = this.createSignature(uri, body, nonce);
    return {
      'Content-Type': 'application/json',
      'X-LINE-ChannelId': CHANNEL_ID,
      'X-LINE-Authorization-Nonce': nonce,
      'X-LINE-Authorization': signature
    };
  }

  /**
   * Reserve Payment
   */
  static async reserve(order) {
    const uri = '/v3/payments/request';
    const body = {
      amount: order.totalAmount,
      currency: 'THB',
      orderId: order.orderId,
      packages: [{
        id: 'pkg-001',
        amount: order.totalAmount,
        name: 'LINE Coffee Shop',
        products: order.items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.imageUrl || undefined
        }))
      }],
      redirectUrls: {
        confirmUrl: \`\${BASE_URL}/payment/confirm\`,
        cancelUrl: \`\${BASE_URL}/payment/cancel\`
      },
      options: {
        display: { locale: 'th' }
      }
    };

    const bodyStr = JSON.stringify(body);
    const headers = this.createHeaders(uri, bodyStr);

    const response = await axios.post(\`\${API_BASE}\${uri}\`, body, { headers });
    return response.data;
  }

  /**
   * Confirm Payment
   */
  static async confirm(transactionId, amount) {
    const uri = \`/v3/payments/\${transactionId}/confirm\`;
    const body = { amount, currency: 'THB' };
    const bodyStr = JSON.stringify(body);
    const headers = this.createHeaders(uri, bodyStr);

    const response = await axios.post(\`\${API_BASE}\${uri}\`, body, { headers });
    return response.data;
  }

  /**
   * Check Payment Status
   */
  static async checkStatus(transactionId) {
    const uri = \`/v3/payments/requests/\${transactionId}/check\`;
    const headers = this.createHeaders(uri, '');

    const response = await axios.get(\`\${API_BASE}\${uri}\`, { headers });
    return response.data;
  }

  /**
   * Refund Payment
   */
  static async refund(transactionId, refundAmount = null) {
    const uri = \`/v3/payments/\${transactionId}/refund\`;
    const body = refundAmount ? { refundAmount } : {};
    const bodyStr = JSON.stringify(body);
    const headers = this.createHeaders(uri, bodyStr);

    const response = await axios.post(\`\${API_BASE}\${uri}\`, body, { headers });
    return response.data;
  }
}

module.exports = LinePayService;</code></pre>

      <h3>⚙️ Step 3: Express Server</h3>
      <pre><code class="language-javascript">// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const LinePayService = require('./services/linepay');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory database (ใช้ MongoDB/PostgreSQL ใน production)
const orders = new Map();
const cart = new Map();

// === SHOP ROUTES ===

// หน้าร้านค้า
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'shop.html'));
});

// ดึงรายการสินค้า
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'อเมริกาโน่', price: 60, category: 'coffee', emoji: '☕' },
    { id: 2, name: 'ลาเต้', price: 75, category: 'coffee', emoji: '🥛' },
    { id: 3, name: 'คาปูชิโน่', price: 80, category: 'coffee', emoji: '☕' },
    { id: 4, name: 'มอคค่า', price: 85, category: 'coffee', emoji: '🍫' },
    { id: 5, name: 'ชาเขียวลาเต้', price: 75, category: 'tea', emoji: '🍵' },
    { id: 6, name: 'ครัวซอง', price: 120, category: 'bakery', emoji: '🥐' },
    { id: 7, name: 'ชีสเค้ก', price: 150, category: 'bakery', emoji: '🍰' },
    { id: 8, name: 'บราวนี่', price: 90, category: 'bakery', emoji: '🍫' }
  ];

  res.json(products);
});

// === CART ROUTES ===

// ดึงตะกร้า
app.get('/api/cart/:userId', (req, res) => {
  const userCart = cart.get(req.params.userId) || [];
  res.json(userCart);
});

// เพิ่มสินค้าลงตะกร้า
app.post('/api/cart/:userId/add', (req, res) => {
  const { userId } = req.params;
  const { productId, name, price, quantity = 1 } = req.body;

  let userCart = cart.get(userId) || [];
  const existing = userCart.find(item => item.productId === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    userCart.push({ productId, name, price, quantity });
  }

  cart.set(userId, userCart);
  res.json({ success: true, cart: userCart });
});

// ลบสินค้าจากตะกร้า
app.delete('/api/cart/:userId/remove/:productId', (req, res) => {
  const { userId, productId } = req.params;
  let userCart = cart.get(userId) || [];
  userCart = userCart.filter(item => item.productId !== parseInt(productId));
  cart.set(userId, userCart);
  res.json({ success: true, cart: userCart });
});

// === PAYMENT ROUTES ===

// สร้างรายการชำระเงิน
app.post('/api/payment/create', async (req, res) => {
  const { userId, items } = req.body;

  const orderId = 'ORD-' + Date.now();
  const totalAmount = items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 0
  );

  try {
    const result = await LinePayService.reserve({
      orderId,
      totalAmount,
      items
    });

    if (result.returnCode === '0000') {
      // บันทึก Order
      orders.set(orderId, {
        orderId,
        userId,
        items,
        totalAmount,
        transactionId: result.info.transactionId,
        status: 'reserved',
        createdAt: new Date()
      });

      // เคลียร์ตะกร้า
      cart.delete(userId);

      res.json({
        success: true,
        orderId,
        paymentUrl: result.info.paymentUrl.web,
        transactionId: result.info.transactionId
      });
    } else {
      res.status(400).json({
        success: false,
        error: result.returnMessage
      });
    }
  } catch (error) {
    console.error('Create payment error:', error.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Confirm payment callback
app.get('/payment/confirm', async (req, res) => {
  const { transactionId } = req.query;

  // หา order จาก transactionId
  let targetOrder = null;
  for (const [id, order] of orders) {
    if (String(order.transactionId) === String(transactionId)) {
      targetOrder = order;
      break;
    }
  }

  if (!targetOrder) {
    return res.redirect('/payment/failed?reason=order_not_found');
  }

  try {
    const result = await LinePayService.confirm(
      transactionId,
      targetOrder.totalAmount
    );

    if (result.returnCode === '0000') {
      targetOrder.status = 'paid';
      targetOrder.paidAt = new Date();
      targetOrder.paymentInfo = result.info;

      res.redirect(\`/success.html?orderId=\${targetOrder.orderId}\`);
    } else {
      targetOrder.status = 'failed';
      res.redirect(\`/failed.html?reason=\${result.returnMessage}\`);
    }
  } catch (error) {
    console.error('Confirm error:', error.message);
    res.redirect('/failed.html?reason=server_error');
  }
});

// Cancel payment callback
app.get('/payment/cancel', (req, res) => {
  res.redirect('/failed.html?reason=cancelled');
});

// ดูสถานะ Order
app.get('/api/order/:orderId', (req, res) => {
  const order = orders.get(req.params.orderId);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Refund
app.post('/api/order/:orderId/refund', async (req, res) => {
  const order = orders.get(req.params.orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  try {
    const result = await LinePayService.refund(
      order.transactionId,
      req.body.refundAmount || null
    );

    if (result.returnCode === '0000') {
      order.status = 'refunded';
      order.refundedAt = new Date();
      res.json({ success: true, refundInfo: result.info });
    } else {
      res.status(400).json({ success: false, error: result.returnMessage });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// ดูรายการ Order ทั้งหมด (Admin)
app.get('/api/orders', (req, res) => {
  const allOrders = Array.from(orders.values())
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(allOrders);
});

// Start server
app.listen(PORT, () => {
  console.log(\`🚀 LINE Pay Shop running on port \${PORT}\`);
  console.log(\`📍 Open: http://localhost:\${PORT}\`);
  console.log(\`🏖️ Mode: \${API_BASE.includes('sandbox') ? 'SANDBOX' : 'PRODUCTION'}\`);
});</code></pre>

      <h3>⚙️ Step 4: Order Tracking</h3>
      <pre><code class="language-javascript">// public/js/tracking.js
// ระบบติดตามสถานะคำสั่งซื้อ

async function trackOrder(orderId) {
  try {
    const response = await fetch(\`/api/order/\${orderId}\`);
    const order = await response.json();

    if (response.ok) {
      displayOrderStatus(order);
    } else {
      document.getElementById('trackResult').innerHTML = \`
        &lt;div class="error-box"&gt;
          &lt;p&gt;❌ ไม่พบคำสั่งซื้อ #\${orderId}&lt;/p&gt;
        &lt;/div&gt;
      \`;
    }
  } catch (error) {
    console.error('Track error:', error);
    alert('เกิดข้อผิดพลาดในการค้นหา');
  }
}

function displayOrderStatus(order) {
  const statusMap = {
    'reserved': { label: 'รอชำระเงิน', color: '#FFA500', icon: '⏳', step: 1 },
    'paid': { label: 'ชำระเงินแล้ว', color: '#00B900', icon: '✅', step: 2 },
    'processing': { label: 'กำลังจัดเตรียม', color: '#007BFF', icon: '📦', step: 3 },
    'shipped': { label: 'จัดส่งแล้ว', color: '#17A2B8', icon: '🚚', step: 4 },
    'completed': { label: 'เสร็จสิ้น', color: '#28A745', icon: '🎉', step: 5 },
    'refunded': { label: 'คืนเงินแล้ว', color: '#DC3545', icon: '💸', step: -1 },
    'cancelled': { label: 'ยกเลิกแล้ว', color: '#6C757D', icon: '❌', step: -1 },
    'failed': { label: 'ล้มเหลว', color: '#DC3545', icon: '⚠️', step: -1 }
  };

  const status = statusMap[order.status] || statusMap['reserved'];

  const container = document.getElementById('trackResult');
  container.innerHTML = \`
    &lt;div class="order-card"&gt;
      &lt;div class="order-header"&gt;
        &lt;h2&gt;\${status.icon} คำสั่งซื้อ #\${order.orderId}&lt;/h2&gt;
        &lt;span class="status-badge" style="background:\${status.color}"&gt;
          \${status.label}
        &lt;/span&gt;
      &lt;/div&gt;

      &lt;div class="order-timeline"&gt;
        &lt;div class="timeline-step \${status.step >= 1 ? 'active' : ''}"&gt;
          &lt;div class="step-dot"&gt;&lt;/div&gt;
          &lt;div class="step-label"&gt;สร้างรายการ&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="timeline-step \${status.step >= 2 ? 'active' : ''}"&gt;
          &lt;div class="step-dot"&gt;&lt;/div&gt;
          &lt;div class="step-label"&gt;ชำระเงิน&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="timeline-step \${status.step >= 3 ? 'active' : ''}"&gt;
          &lt;div class="step-dot"&gt;&lt;/div&gt;
          &lt;div class="step-label"&gt;จัดเตรียม&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="timeline-step \${status.step >= 4 ? 'active' : ''}"&gt;
          &lt;div class="step-dot"&gt;&lt;/div&gt;
          &lt;div class="step-label"&gt;จัดส่ง&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="timeline-step \${status.step >= 5 ? 'active' : ''}"&gt;
          &lt;div class="step-dot"&gt;&lt;/div&gt;
          &lt;div class="step-label"&gt;สำเร็จ&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="order-items"&gt;
        &lt;h3&gt;📦 รายการสินค้า&lt;/h3&gt;
        \${order.items.map(item => \`
          &lt;div class="item-row"&gt;
            &lt;span&gt;\${item.name} x\${item.quantity}&lt;/span&gt;
            &lt;span&gt;฿\${(item.price * item.quantity).toLocaleString()}&lt;/span&gt;
          &lt;/div&gt;
        \`).join('')}
        &lt;div class="item-total"&gt;
          &lt;strong&gt;ยอดรวม&lt;/strong&gt;
          &lt;strong style="color:#00B900"&gt;฿\${order.totalAmount.toLocaleString()}&lt;/strong&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="order-dates"&gt;
        &lt;p&gt;📅 สร้างเมื่อ: \${new Date(order.createdAt).toLocaleString('th-TH')}&lt;/p&gt;
        \${order.paidAt ? \`&lt;p&gt;💳 ชำระเมื่อ: \${new Date(order.paidAt).toLocaleString('th-TH')}&lt;/p&gt;\` : ''}
      &lt;/div&gt;
    &lt;/div&gt;
  \`;
}

// Event listener สำหรับ form ค้นหา
document.getElementById('trackForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const orderId = document.getElementById('orderIdInput').value.trim();
  if (orderId) trackOrder(orderId);
});</code></pre>

      <h3>🧪 ทดสอบระบบทั้งหมด</h3>
      <pre><code class="language-bash"># 1. ติดตั้ง dependencies
npm install

# 2. ตั้งค่า .env file
cp .env.example .env
# แก้ไขค่า LINE_PAY_CHANNEL_ID, LINE_PAY_CHANNEL_SECRET

# 3. เริ่ม server
npm run dev

# 4. เปิด ngrok (ในอีก terminal)
ngrok http 3000

# 5. อัพเดท BASE_URL ใน .env ด้วย URL จาก ngrok
# BASE_URL=https://abc123.ngrok.io

# 6. ทดสอบ!
# เปิด http://localhost:3000 ในเบราว์เซอร์</code></pre>

      <h3>✅ Checklist สิ่งที่ต้องตรวจสอบก่อน Go-live</h3>
      <table>
        <thead>
          <tr><th>รายการ</th><th>สถานะ</th><th>หมายเหตุ</th></tr>
        </thead>
        <tbody>
          <tr><td>เปลี่ยน API URL เป็น Production</td><td>⬜</td><td>จาก sandbox-api-pay เป็น api-pay</td></tr>
          <tr><td>ใช้ Production API Keys</td><td>⬜</td><td>ไม่ใช่ Sandbox keys</td></tr>
          <tr><td>ตั้งค่า HTTPS</td><td>⬜</td><td>จำเป็นสำหรับ Production</td></tr>
          <tr><td>ใช้ Database จริง</td><td>⬜</td><td>MongoDB, PostgreSQL ฯลฯ</td></tr>
          <tr><td>Error handling ครบถ้วน</td><td>⬜</td><td>ทุก API call ต้องมี try-catch</td></tr>
          <tr><td>Logging</td><td>⬜</td><td>บันทึก transaction ทั้งหมด</td></tr>
          <tr><td>ทดสอบ Refund</td><td>⬜</td><td>ทั้ง full และ partial refund</td></tr>
          <tr><td>ทดสอบ Cancel flow</td><td>⬜</td><td>ผู้ใช้ยกเลิกการชำระเงิน</td></tr>
          <tr><td>ทดสอบ Timeout</td><td>⬜</td><td>เกิน 20 นาทีไม่ confirm</td></tr>
          <tr><td>Mobile responsive</td><td>⬜</td><td>ทดสอบบนมือถือจริง</td></tr>
        </tbody>
      </table>

      <div class='tip-box'><strong>💡 Tip:</strong> ก่อน go-live ให้ทดสอบทุก flow ใน Sandbox ก่อน! รวมถึง edge cases เช่น ผู้ใช้กดยกเลิก, หมดเวลา, ยอดเงินไม่พอ, network error ฯลฯ</div>

      <div class='warning-box'><strong>⚠️ Warning:</strong> ใน Production ห้ามใช้ In-memory storage! ต้องใช้ Database จริง เช่น MongoDB หรือ PostgreSQL เพราะถ้า server restart ข้อมูลจะหายหมด</div>

      <h3>🎉 ยินดีด้วย!</h3>
      <p>คุณได้เรียนรู้การสร้างระบบชำระเงินด้วย LINE Pay ครบทั้งกระบวนการแล้ว! ตั้งแต่พื้นฐาน LINE Pay, การสมัคร Merchant, การใช้ API v4, การสร้างหน้าชำระเงิน, การจัดการ Refund, การเชื่อมต่อ Flex Message, การใช้ร่วมกับ LIFF จนถึงการสร้างระบบจ่ายเงินที่ใช้งานได้จริง</p>

      <p>ลองนำความรู้เหล่านี้ไปสร้างโปรเจกต์ของคุณเอง! หากมีคำถามเพิ่มเติม สามารถศึกษาเพิ่มเติมได้ที่ <a href="https://pay.line.me/documents/online_v3.html">LINE Pay API Documentation</a></p>

      <div class='tip-box'><strong>💡 Tip:</strong> โค้ดทั้งหมดในบทนี้พร้อมใช้งาน! clone repository และแก้ไขค่า API Keys ใน .env ก็สามารถทดสอบกับ LINE Pay Sandbox ได้ทันที</div>
    `
  }
];
