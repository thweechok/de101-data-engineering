export const chapters = [
  {
    number: 1,
    slug: 'liff-intro',
    emoji: '📱',
    title: 'LIFF คืออะไร? (LINE Front-end Framework)',
    content: `
      <h2>📱 LIFF คืออะไร?</h2>
      <p>
        <strong>LIFF (LINE Front-end Framework)</strong> คือเฟรมเวิร์กสำหรับสร้างเว็บแอปพลิเคชันที่ทำงานภายใน LINE App
        โดย LIFF จะเปิดหน้าเว็บในรูปแบบ WebView ภายในแอป LINE ทำให้ผู้ใช้สามารถใช้งานเว็บแอปได้โดยไม่ต้องออกจาก LINE
      </p>
      <p>
        LIFF ช่วยให้นักพัฒนาสามารถเข้าถึงข้อมูลของผู้ใช้ LINE เช่น โปรไฟล์ userId และสามารถส่งข้อความกลับไปยังแชทได้
        ทำให้เหมาะสำหรับการสร้างระบบลงทะเบียน แบบฟอร์ม ระบบจอง และอื่น ๆ อีกมากมาย
      </p>

      <img src='/images/lessons/liff-architecture.png' alt='สถาปัตยกรรมของ LIFF App' />

      <h3>🏗️ สถาปัตยกรรมของ LIFF</h3>
      <p>LIFF ทำงานโดยมีส่วนประกอบหลัก 3 ส่วน:</p>
      <ul>
        <li><strong>LINE App (Client)</strong> — แอป LINE บนมือถือหรือ PC ที่เปิด LIFF WebView</li>
        <li><strong>LIFF Web App (Frontend)</strong> — หน้าเว็บ HTML/JS ที่โฮสต์บนเซิร์ฟเวอร์ของคุณ</li>
        <li><strong>LINE Platform (API)</strong> — เซิร์ฟเวอร์ของ LINE ที่จัดการ Authentication และ API ต่าง ๆ</li>
      </ul>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> LIFF App เป็นเว็บแอปธรรมดาที่ใช้ HTML, CSS, JavaScript ดังนั้นคุณสามารถใช้เฟรมเวิร์กใดก็ได้ เช่น React, Vue, หรือแม้แต่ Vanilla JS
      </div>

      <h3>🔄 Flow การทำงานของ LIFF</h3>
      <p>เมื่อผู้ใช้เปิด LIFF App จะมีขั้นตอนดังนี้:</p>
      <div class='step'><span class='step-number'>1</span> ผู้ใช้คลิกลิงก์ LIFF URL (line://app/{liffId}) ในแชท LINE</div>
      <div class='step'><span class='step-number'>2</span> LINE App เปิด WebView และโหลดหน้าเว็บจาก Endpoint URL ที่ตั้งไว้</div>
      <div class='step'><span class='step-number'>3</span> หน้าเว็บเรียก <code>liff.init()</code> เพื่อเชื่อมต่อกับ LINE Platform</div>
      <div class='step'><span class='step-number'>4</span> LIFF SDK ทำการ Authenticate ผู้ใช้อัตโนมัติ (ถ้าเปิดใน LINE App)</div>
      <div class='step'><span class='step-number'>5</span> เว็บแอปสามารถเรียกใช้ API ต่าง ๆ เช่น getProfile, sendMessages ได้</div>

      <h3>📊 เปรียบเทียบ LIFF กับเว็บแอปทั่วไป</h3>
      <table>
        <thead>
          <tr>
            <th>คุณสมบัติ</th>
            <th>เว็บแอปทั่วไป</th>
            <th>LIFF App</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>เปิดใน</td>
            <td>Browser ทั่วไป</td>
            <td>LINE App (WebView) หรือ External Browser</td>
          </tr>
          <tr>
            <td>การ Login</td>
            <td>ต้องสร้างระบบ Login เอง</td>
            <td>ใช้ LINE Login อัตโนมัติ</td>
          </tr>
          <tr>
            <td>ข้อมูลผู้ใช้</td>
            <td>ต้องขอจากผู้ใช้</td>
            <td>ดึงจาก LINE ได้เลย (ชื่อ, รูป, userId)</td>
          </tr>
          <tr>
            <td>ส่งข้อความ</td>
            <td>ทำไม่ได้</td>
            <td>ส่งข้อความกลับแชท LINE ได้</td>
          </tr>
          <tr>
            <td>แชร์ข้อมูล</td>
            <td>ใช้ Web Share API</td>
            <td>ใช้ shareTargetPicker ส่งให้เพื่อน/กลุ่ม</td>
          </tr>
          <tr>
            <td>Scan QR Code</td>
            <td>ต้องใช้ไลบรารีเพิ่ม</td>
            <td>ใช้ liff.scanCodeV2() ได้เลย</td>
          </tr>
        </tbody>
      </table>

      <h3>🎯 Use Cases ที่เหมาะกับ LIFF</h3>
      <ul>
        <li><strong>ระบบลงทะเบียน/สมัครสมาชิก</strong> — ผู้ใช้กรอกฟอร์มใน LINE แล้วข้อมูลถูกส่งไปเก็บในฐานข้อมูล</li>
        <li><strong>ระบบจองคิว/นัดหมาย</strong> — ผู้ใช้เลือกวันเวลาแล้วได้รับการยืนยันผ่าน LINE</li>
        <li><strong>ระบบสั่งอาหาร</strong> — เมนูอาหารพร้อมตะกร้าสินค้าภายใน LINE</li>
        <li><strong>ระบบสำรวจ/แบบสอบถาม</strong> — เก็บข้อมูลพร้อม userId สำหรับติดตามผล</li>
        <li><strong>E-Commerce</strong> — ร้านค้าออนไลน์ที่ผู้ใช้สั่งซื้อและจ่ายเงินใน LINE</li>
        <li><strong>ระบบ CRM</strong> — ดูข้อมูลลูกค้า ประวัติการซื้อ แต้มสะสม</li>
      </ul>

      <h3>📐 ขนาดของ LIFF Window</h3>
      <p>LIFF App สามารถเปิดได้ 3 ขนาด:</p>
      <ul>
        <li><strong>Compact</strong> — ครึ่งล่างของหน้าจอ (50%) เหมาะสำหรับฟอร์มง่าย ๆ</li>
        <li><strong>Tall</strong> — เกือบเต็มหน้าจอ (80%) เหมาะสำหรับรายการยาว ๆ</li>
        <li><strong>Full</strong> — เต็มหน้าจอ (100%) เหมาะสำหรับเว็บแอปเต็มรูปแบบ</li>
      </ul>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> LIFF App ที่เปิดใน External Browser จะแสดงเต็มหน้าจอเสมอ ไม่ว่าจะตั้งค่าขนาดไว้เท่าไหร่ และผู้ใช้จะต้อง Login ด้วย LINE Login ก่อนถึงจะใช้ API ได้
      </div>

      <h3>🔑 คำศัพท์สำคัญ</h3>
      <ul>
        <li><strong>LIFF ID</strong> — รหัสเฉพาะของ LIFF App แต่ละตัว ใช้ในการเรียก <code>liff.init()</code></li>
        <li><strong>LIFF URL</strong> — URL สำหรับเปิด LIFF App ในรูปแบบ <code>https://liff.line.me/{liffId}</code></li>
        <li><strong>Endpoint URL</strong> — URL ของเว็บแอปจริงที่ LIFF จะโหลดเมื่อเปิด</li>
        <li><strong>Access Token</strong> — Token สำหรับเรียก LINE API ในนามของผู้ใช้</li>
        <li><strong>ID Token</strong> — JWT Token ที่มีข้อมูลโปรไฟล์ของผู้ใช้</li>
      </ul>

      <h3>📌 สรุป</h3>
      <p>
        LIFF เป็นเครื่องมือที่ทรงพลังสำหรับสร้างเว็บแอปที่ทำงานร่วมกับ LINE ได้อย่างลึกซึ้ง
        ช่วยให้คุณสามารถสร้างประสบการณ์ผู้ใช้ที่ราบรื่น ตั้งแต่การดึงข้อมูลโปรไฟล์ การส่งข้อความ
        ไปจนถึงการแชร์เนื้อหาไปยังเพื่อนและกลุ่ม ทั้งหมดนี้โดยที่ผู้ใช้ไม่ต้องออกจากแอป LINE
      </p>
      <p>ในบทต่อไป เราจะมาสร้าง LIFF App ตัวแรกกัน! 🚀</p>
    `
  },
  {
    number: 2,
    slug: 'first-liff-app',
    emoji: '🚀',
    title: 'สร้าง LIFF App ตัวแรก',
    content: `
      <h2>🚀 สร้าง LIFF App ตัวแรก</h2>
      <p>
        ในบทนี้เราจะมาสร้าง LIFF App ตัวแรกกัน ตั้งแต่การสร้าง LIFF App ใน LINE Developers Console
        ไปจนถึงการเขียนโค้ด HTML และเรียกใช้ LIFF SDK เพื่อดึงข้อมูลโปรไฟล์ผู้ใช้
      </p>

      <h3>📋 สิ่งที่ต้องเตรียม</h3>
      <ul>
        <li>บัญชี LINE Developers (<a href='https://developers.line.biz' target='_blank'>developers.line.biz</a>)</li>
        <li>LINE Login Channel (ถ้ายังไม่มี ให้สร้างใหม่)</li>
        <li>Web Server สำหรับโฮสต์ไฟล์ (เช่น GitHub Pages, Netlify, Vercel หรือ Google Apps Script)</li>
        <li>Text Editor (เช่น VS Code)</li>
      </ul>

      <h3>ขั้นตอนที่ 1: สร้าง LINE Login Channel</h3>
      <div class='step'><span class='step-number'>1</span> ไปที่ <a href='https://developers.line.biz/console/' target='_blank'>LINE Developers Console</a></div>
      <div class='step'><span class='step-number'>2</span> เลือก Provider ที่ต้องการ (หรือสร้างใหม่)</div>
      <div class='step'><span class='step-number'>3</span> คลิก <strong>Create a new channel</strong> → เลือก <strong>LINE Login</strong></div>
      <div class='step'><span class='step-number'>4</span> กรอกข้อมูล:
        <ul>
          <li><strong>Channel name:</strong> My First LIFF App</li>
          <li><strong>Channel description:</strong> ทดสอบ LIFF App ตัวแรก</li>
          <li><strong>App types:</strong> เลือก <strong>Web app</strong></li>
        </ul>
      </div>
      <div class='step'><span class='step-number'>5</span> คลิก <strong>Create</strong></div>

      <img src='/images/lessons/liff-create-channel.png' alt='สร้าง LINE Login Channel' />

      <h3>ขั้นตอนที่ 2: เพิ่ม LIFF App</h3>
      <div class='step'><span class='step-number'>1</span> ในหน้า Channel ที่สร้าง ไปที่แท็บ <strong>LIFF</strong></div>
      <div class='step'><span class='step-number'>2</span> คลิก <strong>Add</strong></div>
      <div class='step'><span class='step-number'>3</span> กรอกข้อมูล:
        <ul>
          <li><strong>LIFF app name:</strong> My First LIFF</li>
          <li><strong>Size:</strong> Full (เต็มหน้าจอ)</li>
          <li><strong>Endpoint URL:</strong> URL ของเว็บแอปของคุณ (ต้องเป็น HTTPS)</li>
          <li><strong>Scopes:</strong> เลือก <strong>profile</strong> และ <strong>openid</strong></li>
        </ul>
      </div>
      <div class='step'><span class='step-number'>4</span> คลิก <strong>Add</strong> เพื่อสร้าง LIFF App</div>
      <div class='step'><span class='step-number'>5</span> จดบันทึก <strong>LIFF ID</strong> ที่ได้ (เช่น 1234567890-abcdefgh)</div>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> Endpoint URL ต้องเป็น HTTPS เท่านั้น ถ้าคุณยังไม่มีเว็บเซิร์ฟเวอร์ สามารถใช้ GitHub Pages ได้ฟรี หรือใช้ Google Apps Script เป็น Web App ก็ได้
      </div>

      <h3>ขั้นตอนที่ 3: สร้างไฟล์ HTML</h3>
      <p>สร้างไฟล์ <code>index.html</code> สำหรับ LIFF App ตัวแรก:</p>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My First LIFF App&lt;/title&gt;
  &lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.24.0/sdk.js"&gt;&lt;/script&gt;
  &lt;style&gt;
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Sarabun', sans-serif;
      background: linear-gradient(135deg, #00B900, #00C300);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: white;
      border-radius: 20px;
      padding: 40px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      text-align: center;
    }
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 20px auto;
      border: 4px solid #00B900;
    }
    .name { font-size: 24px; font-weight: bold; color: #333; }
    .user-id { font-size: 12px; color: #999; margin-top: 8px; word-break: break-all; }
    .status { font-size: 14px; color: #666; margin-top: 12px; }
    .btn {
      background: #00B900;
      color: white;
      border: none;
      padding: 12px 32px;
      border-radius: 25px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
    .btn:hover { background: #009900; }
    #loading { font-size: 18px; color: #666; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1 style="color: #00B900;"&gt;🎉 My First LIFF&lt;/h1&gt;
    &lt;div id="loading"&gt;กำลังโหลด...&lt;/div&gt;
    &lt;div id="profile" style="display: none;"&gt;
      &lt;img id="pictureUrl" class="profile-img" src="" alt="Profile"&gt;
      &lt;div id="displayName" class="name"&gt;&lt;/div&gt;
      &lt;div id="userId" class="user-id"&gt;&lt;/div&gt;
      &lt;div id="statusMessage" class="status"&gt;&lt;/div&gt;
      &lt;button class="btn" onclick="sendGreeting()"&gt;ส่งข้อความทักทาย&lt;/button&gt;
    &lt;/div&gt;
    &lt;div id="error" style="display: none; color: red;"&gt;&lt;/div&gt;
  &lt;/div&gt;

  &lt;script&gt;
    // แทนที่ด้วย LIFF ID ของคุณ
    const LIFF_ID = 'YOUR_LIFF_ID';

    async function initializeLiff() {
      try {
        await liff.init({ liffId: LIFF_ID });
        console.log('LIFF initialized successfully');

        if (!liff.isLoggedIn()) {
          liff.login();
          return;
        }

        // ดึงข้อมูลโปรไฟล์
        const profile = await liff.getProfile();
        document.getElementById('pictureUrl').src = profile.pictureUrl;
        document.getElementById('displayName').textContent = profile.displayName;
        document.getElementById('userId').textContent = 'ID: ' + profile.userId;
        document.getElementById('statusMessage').textContent =
          profile.statusMessage || 'ไม่มีสถานะ';

        document.getElementById('loading').style.display = 'none';
        document.getElementById('profile').style.display = 'block';

      } catch (error) {
        console.error('LIFF init failed:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').textContent = 'Error: ' + error.message;
      }
    }

    async function sendGreeting() {
      if (!liff.isInClient()) {
        alert('ฟีเจอร์นี้ใช้ได้เฉพาะในแอป LINE เท่านั้น');
        return;
      }
      try {
        await liff.sendMessages([
          { type: 'text', text: '👋 สวัสดีจาก LIFF App ตัวแรกของฉัน!' }
        ]);
        alert('ส่งข้อความสำเร็จ!');
        liff.closeWindow();
      } catch (error) {
        alert('ส่งข้อความไม่สำเร็จ: ' + error.message);
      }
    }

    initializeLiff();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>ขั้นตอนที่ 4: Deploy ด้วย GitHub Pages</h3>
      <p>วิธีที่ง่ายที่สุดในการโฮสต์ LIFF App คือใช้ GitHub Pages:</p>

      <div class='step'><span class='step-number'>1</span> สร้าง Repository ใหม่บน GitHub</div>
      <div class='step'><span class='step-number'>2</span> Push ไฟล์ <code>index.html</code> ขึ้นไป</div>
      <div class='step'><span class='step-number'>3</span> ไปที่ Settings → Pages → เลือก Branch: main → Save</div>
      <div class='step'><span class='step-number'>4</span> รอสักครู่ จะได้ URL เช่น <code>https://username.github.io/repo-name/</code></div>
      <div class='step'><span class='step-number'>5</span> นำ URL ไปใส่ใน Endpoint URL ของ LIFF App ใน LINE Developers Console</div>

      <h3>ขั้นตอนที่ 4 (ทางเลือก): Deploy ด้วย Google Apps Script</h3>
      <p>ถ้าต้องการใช้ Google Apps Script เป็น Web App:</p>

<pre><code class="language-javascript">// Google Apps Script - Code.gs
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('My First LIFF App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
</code></pre>

      <p>จากนั้นสร้างไฟล์ HTML ใน GAS project แล้ว Deploy as Web App → คัดลอก URL ไปใส่ใน LIFF Endpoint</p>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> Google Apps Script Web App URL จะมีรูปแบบ <code>https://script.google.com/macros/s/xxx/exec</code>
        ซึ่งใช้เป็น LIFF Endpoint ได้ แต่อาจมีข้อจำกัดเรื่อง CORS ในบางกรณี
      </div>

      <h3>ขั้นตอนที่ 5: ทดสอบ LIFF App</h3>
      <p>มีหลายวิธีในการทดสอบ LIFF App:</p>

      <h4>วิธีที่ 1: เปิดผ่าน LIFF URL</h4>
      <p>ส่ง LIFF URL ไปในแชท LINE แล้วคลิกเปิด:</p>
<pre><code>https://liff.line.me/YOUR_LIFF_ID</code></pre>

      <h4>วิธีที่ 2: เปิดผ่าน External Browser</h4>
      <p>เปิด LIFF URL ใน Chrome เพื่อทดสอบ (จะต้อง Login ด้วย LINE Login):</p>
<pre><code>https://liff.line.me/YOUR_LIFF_ID</code></pre>

      <h4>วิธีที่ 3: ใช้ LINE LIFF Inspector</h4>
      <p>ติดตั้ง LIFF Inspector สำหรับ Debug ใน LINE App:</p>
<pre><code class="language-html">&lt;!-- เพิ่มก่อน LIFF SDK --&gt;
&lt;script src="https://liff-inspector.line-scdn.net/liff-inspector.js"
        data-liff-id="YOUR_LIFF_ID"&gt;&lt;/script&gt;</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> LIFF Inspector ช่วยให้คุณสามารถ Debug LIFF App ได้จาก Chrome DevTools บน PC
        โดยจะเชื่อมต่อกับ LIFF App ที่ทำงานอยู่บนมือถือ คล้ายกับ Chrome Remote Debugging
      </div>

      <h3>🔍 ตรวจสอบ LIFF Context</h3>
      <p>คุณสามารถตรวจสอบ Context ของ LIFF App เพื่อดูว่าเปิดจากที่ไหน:</p>

<pre><code class="language-javascript">// ตรวจสอบ LIFF Context
async function checkContext() {
  await liff.init({ liffId: LIFF_ID });

  // ตรวจสอบว่าเปิดใน LINE App หรือ Browser
  console.log('isInClient:', liff.isInClient());

  // ตรวจสอบ OS
  const os = liff.getOS(); // 'ios', 'android', 'web'
  console.log('OS:', os);

  // ตรวจสอบ Language
  const lang = liff.getLanguage(); // 'th', 'en', 'ja' ฯลฯ
  console.log('Language:', lang);

  // ตรวจสอบ LIFF Version
  const version = liff.getVersion();
  console.log('LIFF SDK Version:', version);

  // ตรวจสอบ Context (chat type, userId ฯลฯ)
  const context = liff.getContext();
  console.log('Context:', context);
  // context.type = 'utou' | 'room' | 'group' | 'none'
}</code></pre>

      <h3>📌 สรุป</h3>
      <p>
        ยินดีด้วย! 🎉 คุณได้สร้าง LIFF App ตัวแรกเรียบร้อยแล้ว ในบทนี้คุณได้เรียนรู้:
      </p>
      <ul>
        <li>การสร้าง LINE Login Channel และเพิ่ม LIFF App</li>
        <li>การเขียนโค้ด HTML พร้อม LIFF SDK</li>
        <li>การ Deploy เว็บแอปด้วย GitHub Pages หรือ Google Apps Script</li>
        <li>การทดสอบ LIFF App ทั้งใน LINE App และ Browser</li>
        <li>การตรวจสอบ LIFF Context</li>
      </ul>
      <p>ในบทต่อไป เราจะเจาะลึก LIFF SDK API ต่าง ๆ ที่สามารถใช้งานได้! 🧰</p>
    `
  },
  {
    number: 3,
    slug: 'liff-sdk',
    emoji: '🧰',
    title: 'LIFF SDK (init, getProfile, sendMessages)',
    content: `
      <h2>🧰 LIFF SDK API Reference</h2>
      <p>
        LIFF SDK มี API มากมายให้เลือกใช้ ในบทนี้เราจะมาเรียนรู้ API หลัก ๆ ที่ใช้งานบ่อยที่สุด
        พร้อมตัวอย่างโค้ดที่สามารถนำไปใช้งานได้ทันที
      </p>

      <h3>📦 การเพิ่ม LIFF SDK</h3>
      <p>เพิ่ม LIFF SDK ในหน้า HTML ของคุณ:</p>
<pre><code class="language-html">&lt;!-- วิธีที่ 1: ผ่าน CDN (แนะนำ) --&gt;
&lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.24.0/sdk.js"&gt;&lt;/script&gt;

&lt;!-- วิธีที่ 2: ผ่าน npm --&gt;
&lt;!-- npm install @line/liff --&gt;</code></pre>

<pre><code class="language-javascript">// วิธีที่ 2: import ใน JavaScript module
import liff from '@line/liff';
</code></pre>

      <h3>1️⃣ liff.init() — เริ่มต้น LIFF</h3>
      <p>
        <code>liff.init()</code> เป็น API แรกที่ต้องเรียกเสมอ เพื่อเชื่อมต่อ LIFF App กับ LINE Platform
        ต้องเรียกก่อนจะใช้ API อื่น ๆ ได้
      </p>

<pre><code class="language-javascript">// Basic init
async function initLiff() {
  try {
    await liff.init({ liffId: '1234567890-abcdefgh' });
    console.log('✅ LIFF initialized');

    // ตรวจสอบว่า Login แล้วหรือยัง
    if (liff.isLoggedIn()) {
      console.log('ผู้ใช้ Login แล้ว');
    } else {
      console.log('ผู้ใช้ยังไม่ได้ Login');
      // ถ้าเปิดใน External Browser จะต้อง Login ก่อน
      // liff.login();
    }
  } catch (error) {
    console.error('❌ LIFF init failed:', error);
  }
}

// Init พร้อม options
await liff.init({
  liffId: '1234567890-abcdefgh',
  withLoginOnExternalBrowser: true // Auto login เมื่อเปิดใน Browser
});</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ถ้าตั้ง <code>withLoginOnExternalBrowser: true</code> LIFF จะทำ LINE Login อัตโนมัติ
        เมื่อเปิดใน External Browser โดยไม่ต้องเรียก <code>liff.login()</code> เอง
      </div>

      <h3>2️⃣ liff.getProfile() — ดึงข้อมูลโปรไฟล์</h3>
      <p>ดึงข้อมูลโปรไฟล์ของผู้ใช้ที่ Login อยู่:</p>

<pre><code class="language-javascript">async function getUserProfile() {
  try {
    const profile = await liff.getProfile();

    console.log('ชื่อ:', profile.displayName);
    console.log('รูปโปรไฟล์:', profile.pictureUrl);
    console.log('User ID:', profile.userId);
    console.log('สถานะ:', profile.statusMessage);

    // แสดงข้อมูลในหน้าเว็บ
    document.getElementById('name').textContent = profile.displayName;
    document.getElementById('avatar').src = profile.pictureUrl;

    return profile;
  } catch (error) {
    console.error('ดึงโปรไฟล์ไม่สำเร็จ:', error);
  }
}</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> <code>liff.getProfile()</code> ต้องมี scope <strong>profile</strong> ใน LIFF App settings
        ถ้าไม่มีจะเกิด Error ตรวจสอบ Scope ใน LINE Developers Console ด้วย
      </div>

      <h3>3️⃣ liff.sendMessages() — ส่งข้อความไปยังแชท</h3>
      <p>ส่งข้อความไปยังแชทที่เปิด LIFF App (ใช้ได้เฉพาะใน LINE App):</p>

<pre><code class="language-javascript">// ส่งข้อความ Text
async function sendTextMessage() {
  if (!liff.isInClient()) {
    alert('ใช้ได้เฉพาะในแอป LINE เท่านั้น');
    return;
  }

  try {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'สวัสดีครับ! ข้อความนี้ส่งจาก LIFF App 🎉'
      }
    ]);
    console.log('ส่งข้อความสำเร็จ!');
  } catch (error) {
    console.error('ส่งข้อความไม่สำเร็จ:', error);
  }
}

// ส่งหลายข้อความพร้อมกัน (สูงสุด 5 ข้อความ)
async function sendMultipleMessages() {
  await liff.sendMessages([
    { type: 'text', text: '📋 สรุปการสั่งซื้อ' },
    { type: 'text', text: '☕ ลาเต้เย็น x1 = 65 บาท' },
    { type: 'text', text: '💰 รวมทั้งหมด: 65 บาท' }
  ]);
}

// ส่ง Flex Message
async function sendFlexMessage() {
  await liff.sendMessages([
    {
      type: 'flex',
      altText: 'รายละเอียดการจอง',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '✅ จองสำเร็จ!',
              weight: 'bold',
              size: 'xl',
              color: '#00B900'
            },
            {
              type: 'text',
              text: 'วันที่: 25 มิ.ย. 2026',
              margin: 'md',
              color: '#666666'
            },
            {
              type: 'text',
              text: 'เวลา: 14:00 น.',
              color: '#666666'
            }
          ]
        }
      }
    }
  ]);
}</code></pre>

      <h3>4️⃣ liff.openWindow() — เปิดหน้าต่างใหม่</h3>
      <p>เปิด URL ในหน้าต่างใหม่ (Browser ภายนอก หรือ LIFF window):</p>

<pre><code class="language-javascript">// เปิดใน External Browser
liff.openWindow({
  url: 'https://example.com',
  external: true // เปิดใน Browser ภายนอก
});

// เปิดใน LIFF Window (เปลี่ยนหน้าใน WebView)
liff.openWindow({
  url: 'https://example.com/page2',
  external: false // เปิดใน LIFF Window เดิม
});</code></pre>

      <h3>5️⃣ liff.closeWindow() — ปิด LIFF Window</h3>
      <p>ปิด LIFF Window (ใช้ได้เฉพาะใน LINE App):</p>

<pre><code class="language-javascript">// ปิด LIFF หลังทำงานเสร็จ
function closeLiff() {
  if (liff.isInClient()) {
    liff.closeWindow();
  } else {
    // ถ้าเปิดใน Browser ให้แจ้งผู้ใช้
    alert('ปิดหน้าต่างนี้ได้เลยครับ');
  }
}</code></pre>

      <h3>6️⃣ liff.scanCodeV2() — สแกน QR Code</h3>
      <p>เปิดกล้องสแกน QR Code (ใช้ได้เฉพาะใน LINE App):</p>

<pre><code class="language-javascript">async function scanQR() {
  try {
    const result = await liff.scanCodeV2();
    console.log('QR Code Value:', result.value);

    // ตัวอย่าง: ใช้ค่าที่สแกนได้
    document.getElementById('qr-result').textContent = result.value;

    // ตัวอย่าง: ส่งค่าไปยังเซิร์ฟเวอร์
    await fetch('https://your-api.com/checkin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: (await liff.getProfile()).userId,
        qrValue: result.value,
        timestamp: new Date().toISOString()
      })
    });

    alert('เช็คอินสำเร็จ!');
  } catch (error) {
    if (error.code === 'CANCEL') {
      console.log('ผู้ใช้ยกเลิกการสแกน');
    } else {
      console.error('สแกน QR ไม่สำเร็จ:', error);
    }
  }
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> <code>liff.scanCodeV2()</code> ต้องเปิด <strong>Scan QR</strong> ใน LIFF App settings
        ไปที่ LINE Developers Console → LIFF → เปิด "Scan QR" ด้วยนะ
      </div>

      <h3>7️⃣ liff.getAccessToken() — รับ Access Token</h3>
      <p>รับ Access Token สำหรับเรียก LINE API จากฝั่ง Server:</p>

<pre><code class="language-javascript">// ดึง Access Token
function getToken() {
  const accessToken = liff.getAccessToken();
  console.log('Access Token:', accessToken);

  // ส่ง Token ไปยัง Backend เพื่อ Verify
  fetch('https://your-server.com/api/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  });
}

// ดึง ID Token (JWT)
function getIdToken() {
  const idToken = liff.getIDToken();
  console.log('ID Token:', idToken);
  // ID Token สามารถ decode ได้เพื่อดูข้อมูลผู้ใช้
}

// Verify ID Token ฝั่ง Server (Node.js)
// POST https://api.line.me/oauth2/v2.1/verify
// Body: id_token=xxx&client_id=YOUR_CHANNEL_ID</code></pre>

      <h3>8️⃣ liff.login() / liff.logout() — จัดการ Login</h3>

<pre><code class="language-javascript">// Login
function login() {
  if (!liff.isLoggedIn()) {
    liff.login({
      redirectUri: window.location.href // กลับมาหน้าเดิมหลัง Login
    });
  }
}

// Logout
function logout() {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.location.reload(); // Reload หน้า
  }
}</code></pre>

      <h3>🔧 ตัวอย่าง Node.js: Verify Access Token</h3>
      <p>ตัวอย่างการ Verify Access Token ที่ฝั่ง Backend ด้วย Node.js Express:</p>

<pre><code class="language-javascript">// server.js (Node.js Express)
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Middleware: Verify LIFF Access Token
async function verifyLiffToken(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify token กับ LINE API
    const response = await axios.get(
      'https://api.line.me/oauth2/v2.1/verify',
      { params: { access_token: token } }
    );

    // ตรวจสอบว่า token ยังไม่หมดอายุ
    if (response.data.expires_in <= 0) {
      return res.status(401).json({ error: 'Token expired' });
    }

    // ตรวจสอบ Channel ID
    if (response.data.client_id !== process.env.LINE_CHANNEL_ID) {
      return res.status(401).json({ error: 'Invalid channel' });
    }

    // ดึงข้อมูลผู้ใช้
    const profileRes = await axios.get(
      'https://api.line.me/v2/profile',
      { headers: { Authorization: 'Bearer ' + token } }
    );

    req.user = profileRes.data;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// API Endpoint ที่ต้อง Login
app.get('/api/me', verifyLiffToken, (req, res) => {
  res.json({
    userId: req.user.userId,
    displayName: req.user.displayName,
    pictureUrl: req.user.pictureUrl
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre>

      <h3>🔧 ตัวอย่าง Google Apps Script: รับข้อมูลจาก LIFF</h3>

<pre><code class="language-javascript">// Google Apps Script - Code.gs
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const { accessToken, formData } = data;

    // Verify Access Token
    const verifyRes = UrlFetchApp.fetch(
      'https://api.line.me/oauth2/v2.1/verify?access_token=' + accessToken
    );
    const verifyData = JSON.parse(verifyRes.getContentText());

    if (verifyData.expires_in <= 0) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: 'Token expired' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // ดึงโปรไฟล์ผู้ใช้
    const profileRes = UrlFetchApp.fetch(
      'https://api.line.me/v2/profile',
      { headers: { Authorization: 'Bearer ' + accessToken } }
    );
    const profile = JSON.parse(profileRes.getContentText());

    // บันทึกข้อมูลลง Google Sheets
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      profile.userId,
      profile.displayName,
      formData.name,
      formData.email,
      formData.phone
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'บันทึกข้อมูลสำเร็จ' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}</code></pre>

      <h3>📌 สรุป API ที่สำคัญ</h3>
      <table>
        <thead>
          <tr>
            <th>API</th>
            <th>คำอธิบาย</th>
            <th>ใช้ใน LINE App เท่านั้น</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>liff.init()</td><td>เริ่มต้น LIFF</td><td>❌</td></tr>
          <tr><td>liff.getProfile()</td><td>ดึงข้อมูลโปรไฟล์</td><td>❌</td></tr>
          <tr><td>liff.sendMessages()</td><td>ส่งข้อความไปแชท</td><td>✅</td></tr>
          <tr><td>liff.openWindow()</td><td>เปิด URL ใหม่</td><td>❌</td></tr>
          <tr><td>liff.closeWindow()</td><td>ปิด LIFF Window</td><td>✅</td></tr>
          <tr><td>liff.scanCodeV2()</td><td>สแกน QR Code</td><td>✅</td></tr>
          <tr><td>liff.getAccessToken()</td><td>รับ Access Token</td><td>❌</td></tr>
          <tr><td>liff.getIDToken()</td><td>รับ ID Token (JWT)</td><td>❌</td></tr>
          <tr><td>liff.login()</td><td>Login ด้วย LINE</td><td>❌</td></tr>
          <tr><td>liff.logout()</td><td>Logout</td><td>❌</td></tr>
          <tr><td>liff.shareTargetPicker()</td><td>แชร์ข้อความให้เพื่อน</td><td>❌</td></tr>
          <tr><td>liff.isInClient()</td><td>ตรวจสอบว่าเปิดใน LINE</td><td>❌</td></tr>
          <tr><td>liff.getOS()</td><td>ดู OS (ios/android/web)</td><td>❌</td></tr>
        </tbody>
      </table>

      <p>ในบทต่อไป เราจะมาสร้างฟอร์มลงทะเบียนภายใน LIFF App กัน! 📝</p>
    `
  },
  {
    number: 4,
    slug: 'liff-form',
    emoji: '📝',
    title: 'ฟอร์มลงทะเบียนใน LIFF',
    content: `
      <h2>📝 ฟอร์มลงทะเบียนใน LIFF</h2>
      <p>
        หนึ่งใน Use Case ที่ได้รับความนิยมมากที่สุดของ LIFF คือการสร้างฟอร์มลงทะเบียน
        เพราะสามารถดึงข้อมูลผู้ใช้ LINE ได้อัตโนมัติ ทำให้ผู้ใช้ไม่ต้องกรอกข้อมูลซ้ำ
        และนักพัฒนาสามารถผูก userId กับข้อมูลที่กรอกได้
      </p>

      <h3>🎯 สิ่งที่จะสร้าง</h3>
      <p>เราจะสร้างฟอร์มลงทะเบียนที่มีฟีเจอร์ดังนี้:</p>
      <ul>
        <li>ดึงชื่อและรูปโปรไฟล์จาก LINE อัตโนมัติ</li>
        <li>ฟอร์มกรอกข้อมูลเพิ่มเติม (เบอร์โทร, อีเมล, ที่อยู่)</li>
        <li>Validation ข้อมูลก่อนส่ง</li>
        <li>ส่งข้อมูลไปยัง Google Apps Script เพื่อบันทึกลง Google Sheets</li>
        <li>ส่งข้อความยืนยันกลับไปในแชท LINE</li>
      </ul>

      <img src='/images/lessons/liff-form-demo.png' alt='ตัวอย่างฟอร์มลงทะเบียน LIFF' />

      <h3>📄 โค้ดฟอร์มลงทะเบียน (HTML)</h3>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;ลงทะเบียนสมาชิก&lt;/title&gt;
  &lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.24.0/sdk.js"&gt;&lt;/script&gt;
  &lt;style&gt;
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Sarabun', sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .card {
      background: white;
      border-radius: 16px;
      padding: 24px;
      max-width: 480px;
      margin: 0 auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }
    .header {
      text-align: center;
      margin-bottom: 24px;
    }
    .header h1 {
      color: #00B900;
      font-size: 22px;
    }
    .profile-section {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      background: #f0faf0;
      border-radius: 12px;
      margin-bottom: 24px;
    }
    .profile-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid #00B900;
    }
    .profile-info h3 { color: #333; font-size: 18px; }
    .profile-info p { color: #888; font-size: 13px; }
    .form-group {
      margin-bottom: 16px;
    }
    .form-group label {
      display: block;
      font-weight: bold;
      color: #333;
      margin-bottom: 6px;
      font-size: 14px;
    }
    .form-group label .required {
      color: red;
      margin-left: 4px;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e0e0e0;
      border-radius: 10px;
      font-size: 16px;
      transition: border-color 0.3s;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: #00B900;
      outline: none;
    }
    .form-group .error-text {
      color: red;
      font-size: 12px;
      margin-top: 4px;
      display: none;
    }
    .submit-btn {
      width: 100%;
      padding: 14px;
      background: #00B900;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 8px;
    }
    .submit-btn:hover { background: #009900; }
    .submit-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    .loading-overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 100;
      justify-content: center;
      align-items: center;
    }
    .loading-spinner {
      background: white;
      padding: 40px;
      border-radius: 16px;
      text-align: center;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="card"&gt;
    &lt;div class="header"&gt;
      &lt;h1&gt;📝 ลงทะเบียนสมาชิก&lt;/h1&gt;
      &lt;p style="color: #888; margin-top: 8px;"&gt;กรอกข้อมูลเพื่อรับสิทธิพิเศษ&lt;/p&gt;
    &lt;/div&gt;

    &lt;div class="profile-section" id="profileSection" style="display:none;"&gt;
      &lt;img id="profileImg" class="profile-img" src="" alt="Profile"&gt;
      &lt;div class="profile-info"&gt;
        &lt;h3 id="profileName"&gt;&lt;/h3&gt;
        &lt;p&gt;ข้อมูลจาก LINE ของคุณ&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;form id="regForm" onsubmit="handleSubmit(event)"&gt;
      &lt;div class="form-group"&gt;
        &lt;label&gt;ชื่อ-นามสกุล &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="text" id="fullName" required placeholder="กรอกชื่อ-นามสกุล"&gt;
        &lt;div class="error-text" id="nameError"&gt;กรุณากรอกชื่อ-นามสกุล&lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="form-group"&gt;
        &lt;label&gt;เบอร์โทรศัพท์ &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;input type="tel" id="phone" required placeholder="08x-xxx-xxxx"
               pattern="[0-9]{10}" maxlength="10"&gt;
        &lt;div class="error-text" id="phoneError"&gt;กรุณากรอกเบอร์โทร 10 หลัก&lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="form-group"&gt;
        &lt;label&gt;อีเมล&lt;/label&gt;
        &lt;input type="email" id="email" placeholder="example@email.com"&gt;
        &lt;div class="error-text" id="emailError"&gt;รูปแบบอีเมลไม่ถูกต้อง&lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="form-group"&gt;
        &lt;label&gt;เพศ &lt;span class="required"&gt;*&lt;/span&gt;&lt;/label&gt;
        &lt;select id="gender" required&gt;
          &lt;option value=""&gt;-- เลือกเพศ --&lt;/option&gt;
          &lt;option value="male"&gt;ชาย&lt;/option&gt;
          &lt;option value="female"&gt;หญิง&lt;/option&gt;
          &lt;option value="other"&gt;ไม่ระบุ&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;

      &lt;div class="form-group"&gt;
        &lt;label&gt;ที่อยู่&lt;/label&gt;
        &lt;textarea id="address" rows="3" placeholder="กรอกที่อยู่"&gt;&lt;/textarea&gt;
      &lt;/div&gt;

      &lt;button type="submit" class="submit-btn" id="submitBtn"&gt;
        ลงทะเบียน
      &lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;

  &lt;div class="loading-overlay" id="loadingOverlay"&gt;
    &lt;div class="loading-spinner"&gt;
      &lt;p style="font-size:40px;"&gt;⏳&lt;/p&gt;
      &lt;p style="margin-top:12px;"&gt;กำลังบันทึกข้อมูล...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;script&gt;
    const LIFF_ID = 'YOUR_LIFF_ID';
    const GAS_URL = 'YOUR_GAS_WEB_APP_URL';
    let userProfile = null;

    async function initLiff() {
      try {
        await liff.init({ liffId: LIFF_ID });

        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
          return;
        }

        userProfile = await liff.getProfile();
        document.getElementById('profileImg').src = userProfile.pictureUrl;
        document.getElementById('profileName').textContent = userProfile.displayName;
        document.getElementById('profileSection').style.display = 'flex';

      } catch (error) {
        console.error('LIFF init error:', error);
      }
    }

    function validateForm() {
      let isValid = true;

      const name = document.getElementById('fullName').value.trim();
      if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('nameError').style.display = 'none';
      }

      const phone = document.getElementById('phone').value.trim();
      if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('phoneError').style.display = 'none';
      }

      const email = document.getElementById('email').value.trim();
      if (email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('emailError').style.display = 'none';
      }

      return isValid;
    }

    async function handleSubmit(event) {
      event.preventDefault();

      if (!validateForm()) return;

      const submitBtn = document.getElementById('submitBtn');
      const loadingOverlay = document.getElementById('loadingOverlay');
      submitBtn.disabled = true;
      loadingOverlay.style.display = 'flex';

      const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value.trim(),
        lineUserId: userProfile?.userId || '',
        lineDisplayName: userProfile?.displayName || '',
        linePictureUrl: userProfile?.pictureUrl || ''
      };

      try {
        const response = await fetch(GAS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          // ส่งข้อความยืนยันกลับแชท
          if (liff.isInClient()) {
            await liff.sendMessages([{
              type: 'flex',
              altText: '✅ ลงทะเบียนสำเร็จ',
              contents: {
                type: 'bubble',
                body: {
                  type: 'box', layout: 'vertical',
                  contents: [
                    { type: 'text', text: '✅ ลงทะเบียนสำเร็จ!', weight: 'bold', size: 'lg', color: '#00B900' },
                    { type: 'text', text: 'ชื่อ: ' + formData.fullName, margin: 'md', size: 'sm' },
                    { type: 'text', text: 'เบอร์: ' + formData.phone, size: 'sm' },
                    { type: 'text', text: 'ขอบคุณที่ลงทะเบียน 🎉', margin: 'lg', color: '#888888', size: 'xs' }
                  ]
                }
              }
            }]);
            liff.closeWindow();
          } else {
            alert('ลงทะเบียนสำเร็จ! ✅');
          }
        } else {
          throw new Error(result.error || 'เกิดข้อผิดพลาด');
        }
      } catch (error) {
        alert('เกิดข้อผิดพลาด: ' + error.message);
      } finally {
        submitBtn.disabled = false;
        loadingOverlay.style.display = 'none';
      }
    }

    initLiff();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>🔧 Backend: Google Apps Script</h3>
      <p>สร้าง Google Apps Script สำหรับรับข้อมูลจากฟอร์มและบันทึกลง Google Sheets:</p>

<pre><code class="language-javascript">// Google Apps Script - Code.gs
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // เปิด Google Sheets
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName('Members') || ss.getActiveSheet();

    // ตรวจสอบว่าเคยลงทะเบียนหรือยัง (ตาม LINE userId)
    const existingData = sheet.getDataRange().getValues();
    const isDuplicate = existingData.some(row => row[1] === data.lineUserId);

    if (isDuplicate) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: 'คุณเคยลงทะเบียนแล้ว' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // บันทึกข้อมูล
    sheet.appendRow([
      new Date().toLocaleString('th-TH'),  // วันที่ลงทะเบียน
      data.lineUserId,                       // LINE User ID
      data.lineDisplayName,                  // ชื่อ LINE
      data.fullName,                         // ชื่อ-นามสกุล
      data.phone,                            // เบอร์โทร
      data.email,                            // อีเมล
      data.gender,                           // เพศ
      data.address,                          // ที่อยู่
      data.linePictureUrl                    // รูปโปรไฟล์ LINE
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'ลงทะเบียนสำเร็จ' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ตั้ง Header ให้ Google Sheets
function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Members') || ss.getActiveSheet();
  sheet.getRange(1, 1, 1, 9).setValues([[
    'วันที่', 'LINE User ID', 'ชื่อ LINE', 'ชื่อ-นามสกุล',
    'เบอร์โทร', 'อีเมล', 'เพศ', 'ที่อยู่', 'รูปโปรไฟล์'
  ]]);
  sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#00B900').setFontColor('white');
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> อย่าลืม Deploy Google Apps Script เป็น Web App โดยเลือก
        <strong>Execute as: Me</strong> และ <strong>Who has access: Anyone</strong>
        แล้วนำ URL ที่ได้ไปใส่ในตัวแปร <code>GAS_URL</code> ในไฟล์ HTML
      </div>

      <h3>✅ เทคนิค Validation ที่ดี</h3>
      <ul>
        <li><strong>Real-time Validation</strong> — ตรวจสอบข้อมูลทันทีที่ผู้ใช้พิมพ์ ไม่ต้องรอกด Submit</li>
        <li><strong>ใช้ HTML5 Validation</strong> — ใช้ <code>required</code>, <code>pattern</code>, <code>type="email"</code></li>
        <li><strong>แสดง Error ชัดเจน</strong> — บอกผู้ใช้ว่าผิดตรงไหนและต้องแก้ไขอย่างไร</li>
        <li><strong>ตรวจซ้ำฝั่ง Server</strong> — อย่าพึ่งแค่ Client-side Validation เพียงอย่างเดียว</li>
      </ul>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ถ้าใช้ Google Apps Script เป็น Backend อาจเกิดปัญหา CORS เมื่อส่ง POST request
        วิธีแก้คือใช้ <code>mode: 'no-cors'</code> หรือใช้ <code>google.script.run</code> ถ้าโฮสต์ HTML ใน GAS เดียวกัน
      </div>

      <h3>🔄 Alternative: ใช้ google.script.run (สำหรับ GAS Hosted)</h3>
      <p>ถ้าคุณโฮสต์ HTML ใน Google Apps Script เดียวกัน สามารถใช้ <code>google.script.run</code> แทน fetch ได้:</p>

<pre><code class="language-javascript">// ในไฟล์ HTML ที่โฮสต์ใน GAS
google.script.run
  .withSuccessHandler(function(result) {
    alert('ลงทะเบียนสำเร็จ!');
    if (liff.isInClient()) liff.closeWindow();
  })
  .withFailureHandler(function(error) {
    alert('เกิดข้อผิดพลาด: ' + error.message);
  })
  .saveRegistration({
    fullName: document.getElementById('fullName').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    lineUserId: userProfile.userId
  });</code></pre>

      <h3>📌 สรุป</h3>
      <p>ในบทนี้คุณได้เรียนรู้การสร้างฟอร์มลงทะเบียนใน LIFF ที่มีฟีเจอร์ครบถ้วน:</p>
      <ul>
        <li>ดึงข้อมูลโปรไฟล์ LINE อัตโนมัติ</li>
        <li>สร้างฟอร์มพร้อม Validation</li>
        <li>ส่งข้อมูลไปยัง Google Apps Script Backend</li>
        <li>บันทึกข้อมูลลง Google Sheets</li>
        <li>ส่ง Flex Message ยืนยันกลับแชท LINE</li>
      </ul>
      <p>ในบทต่อไป เราจะเรียนรู้การเชื่อมต่อ LIFF กับ Supabase เพื่อใช้ฐานข้อมูลที่ทรงพลังยิ่งขึ้น! 🗄️</p>
    `
  },
  {
    number: 5,
    slug: 'liff-database',
    emoji: '🗄️',
    title: 'LIFF + Database (Supabase)',
    content: `
      <h2>🗄️ LIFF + Database (Supabase)</h2>
      <p>
        ในบทนี้เราจะเรียนรู้การเชื่อมต่อ LIFF App กับ <strong>Supabase</strong> ซึ่งเป็น Backend-as-a-Service
        ที่ให้บริการฐานข้อมูล PostgreSQL, Authentication, Storage และ Real-time subscriptions
        โดยไม่ต้องตั้ง Server เอง
      </p>

      <h3>🤔 ทำไมต้อง Supabase?</h3>
      <ul>
        <li><strong>ฟรี</strong> — Free tier ให้ 500MB Database, 1GB Storage</li>
        <li><strong>ใช้ง่าย</strong> — มี JavaScript Client Library ที่ใช้งานง่าย</li>
        <li><strong>Real-time</strong> — รองรับ Real-time subscriptions สำหรับอัปเดตข้อมูลแบบ Live</li>
        <li><strong>PostgreSQL</strong> — ใช้ฐานข้อมูล PostgreSQL ที่ทรงพลังและน่าเชื่อถือ</li>
        <li><strong>API อัตโนมัติ</strong> — สร้าง REST API จากตาราง Database อัตโนมัติ</li>
      </ul>

      <h3>ขั้นตอนที่ 1: สร้างโปรเจกต์ Supabase</h3>
      <div class='step'><span class='step-number'>1</span> ไปที่ <a href='https://supabase.com' target='_blank'>supabase.com</a> และสมัครสมาชิก (ใช้ GitHub Login ได้)</div>
      <div class='step'><span class='step-number'>2</span> คลิก <strong>New Project</strong></div>
      <div class='step'><span class='step-number'>3</span> ตั้งชื่อโปรเจกต์ เลือก Region (Singapore ใกล้สุด) และตั้ง Database Password</div>
      <div class='step'><span class='step-number'>4</span> รอสักครู่ จนโปรเจกต์พร้อมใช้งาน</div>
      <div class='step'><span class='step-number'>5</span> จดบันทึก <strong>Project URL</strong> และ <strong>anon/public key</strong> จากหน้า Settings → API</div>

      <img src='/images/lessons/supabase-setup.png' alt='ตั้งค่า Supabase Project' />

      <h3>ขั้นตอนที่ 2: สร้างตาราง Database</h3>
      <p>ไปที่ Table Editor ใน Supabase Dashboard แล้วสร้างตาราง <code>users</code>:</p>

<pre><code class="language-sql">-- สร้างตาราง users
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  line_user_id TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  picture_url TEXT,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- สร้างตาราง orders (ตัวอย่างระบบสั่งซื้อ)
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  line_user_id TEXT NOT NULL,
  items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- เปิด Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- สร้าง Policy อนุญาตให้อ่าน/เขียนผ่าน anon key
CREATE POLICY "Allow all for anon" ON users FOR ALL USING (true);
CREATE POLICY "Allow all for anon" ON orders FOR ALL USING (true);</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> ในตัวอย่างนี้เปิด Policy ให้ทุกคนเข้าถึงได้ (สำหรับเรียนรู้)
        ใน Production ต้องตั้ง Row Level Security (RLS) ให้เข้มงวดกว่านี้ โดยจำกัดการเข้าถึงตาม userId
      </div>

      <h3>ขั้นตอนที่ 3: เชื่อมต่อ LIFF กับ Supabase</h3>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;LIFF + Supabase&lt;/title&gt;
  &lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.24.0/sdk.js"&gt;&lt;/script&gt;
  &lt;script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id="app"&gt;
    &lt;h1&gt;📦 ข้อมูลของฉัน&lt;/h1&gt;
    &lt;div id="userInfo"&gt;&lt;/div&gt;
    &lt;div id="orderList"&gt;&lt;/div&gt;
  &lt;/div&gt;

  &lt;script&gt;
    // === ตั้งค่า ===
    const LIFF_ID = 'YOUR_LIFF_ID';
    const SUPABASE_URL = 'https://xxxxx.supabase.co';
    const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

    // สร้าง Supabase Client
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    let currentUser = null;

    async function init() {
      // Init LIFF
      await liff.init({ liffId: LIFF_ID });
      if (!liff.isLoggedIn()) {
        liff.login();
        return;
      }

      // ดึงโปรไฟล์ LINE
      const profile = await liff.getProfile();

      // บันทึก/อัปเดตข้อมูลผู้ใช้ใน Supabase
      currentUser = await upsertUser(profile);
      displayUserInfo(currentUser);

      // โหลดรายการ orders
      await loadOrders();

      // เปิด Real-time subscription
      subscribeToOrders();
    }

    // === CRUD Operations ===

    // CREATE/UPDATE: Upsert User
    async function upsertUser(profile) {
      const { data, error } = await supabase
        .from('users')
        .upsert({
          line_user_id: profile.userId,
          display_name: profile.displayName,
          picture_url: profile.pictureUrl,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'line_user_id'
        })
        .select()
        .single();

      if (error) {
        console.error('Upsert user error:', error);
        return null;
      }
      return data;
    }

    // READ: ดึงข้อมูล Orders
    async function loadOrders() {
      const { data: orders, error } = await supabase
        .from('orders')
        .select('*')
        .eq('line_user_id', currentUser.line_user_id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Load orders error:', error);
        return;
      }

      displayOrders(orders);
    }

    // CREATE: สร้าง Order ใหม่
    async function createOrder(items, totalAmount) {
      const { data, error } = await supabase
        .from('orders')
        .insert({
          user_id: currentUser.id,
          line_user_id: currentUser.line_user_id,
          items: items,
          total_amount: totalAmount,
          status: 'pending'
        })
        .select()
        .single();

      if (error) {
        console.error('Create order error:', error);
        alert('สร้างคำสั่งซื้อไม่สำเร็จ');
        return null;
      }

      alert('สร้างคำสั่งซื้อสำเร็จ!');
      return data;
    }

    // UPDATE: อัปเดตสถานะ Order
    async function updateOrderStatus(orderId, newStatus) {
      const { data, error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId)
        .select()
        .single();

      if (error) {
        console.error('Update order error:', error);
        return null;
      }
      return data;
    }

    // DELETE: ลบ Order
    async function deleteOrder(orderId) {
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', orderId);

      if (error) {
        console.error('Delete order error:', error);
        return false;
      }
      return true;
    }

    // === Real-time Subscription ===
    function subscribeToOrders() {
      supabase
        .channel('orders-changes')
        .on('postgres_changes',
          {
            event: '*', // INSERT, UPDATE, DELETE
            schema: 'public',
            table: 'orders',
            filter: 'line_user_id=eq.' + currentUser.line_user_id
          },
          (payload) => {
            console.log('Real-time update:', payload);
            // โหลดข้อมูลใหม่เมื่อมีการเปลี่ยนแปลง
            loadOrders();
          }
        )
        .subscribe();
    }

    // === Display Functions ===
    function displayUserInfo(user) {
      document.getElementById('userInfo').innerHTML = '&lt;div&gt;' +
        '&lt;img src="' + user.picture_url + '" width="60" style="border-radius:50%"&gt;' +
        '&lt;h3&gt;' + user.display_name + '&lt;/h3&gt;' +
        '&lt;p&gt;สมาชิกตั้งแต่: ' + new Date(user.registered_at).toLocaleDateString('th-TH') + '&lt;/p&gt;' +
        '&lt;/div&gt;';
    }

    function displayOrders(orders) {
      if (orders.length === 0) {
        document.getElementById('orderList').innerHTML = '&lt;p&gt;ยังไม่มีรายการสั่งซื้อ&lt;/p&gt;';
        return;
      }

      let html = '&lt;h3&gt;📋 รายการสั่งซื้อ&lt;/h3&gt;';
      orders.forEach(order => {
        html += '&lt;div style="border:1px solid #ddd; padding:12px; margin:8px 0; border-radius:8px;"&gt;' +
          '&lt;p&gt;🆔 ' + order.id.substring(0, 8) + '...&lt;/p&gt;' +
          '&lt;p&gt;💰 ' + order.total_amount + ' บาท&lt;/p&gt;' +
          '&lt;p&gt;📊 สถานะ: ' + order.status + '&lt;/p&gt;' +
          '&lt;p&gt;📅 ' + new Date(order.created_at).toLocaleString('th-TH') + '&lt;/p&gt;' +
          '&lt;/div&gt;';
      });
      document.getElementById('orderList').innerHTML = html;
    }

    init();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>🔧 Node.js Backend กับ Supabase</h3>
      <p>ตัวอย่างการใช้ Supabase จาก Node.js Backend (สำหรับงานที่ต้องการความปลอดภัยมากขึ้น):</p>

<pre><code class="language-javascript">// server.js (Node.js)
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();

app.use(express.json());

// ใช้ Service Role Key (สำหรับ Server-side เท่านั้น!)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ⚠️ ห้ามใช้ใน Client-side!
);

// API: ลงทะเบียนผู้ใช้
app.post('/api/register', async (req, res) => {
  const { lineUserId, displayName, pictureUrl, fullName, phone, email } = req.body;

  try {
    // ตรวจสอบว่ามีผู้ใช้นี้หรือยัง
    const { data: existing } = await supabase
      .from('users')
      .select('id')
      .eq('line_user_id', lineUserId)
      .single();

    if (existing) {
      return res.json({ success: false, error: 'ลงทะเบียนแล้ว' });
    }

    // สร้างผู้ใช้ใหม่
    const { data, error } = await supabase
      .from('users')
      .insert({
        line_user_id: lineUserId,
        display_name: displayName,
        picture_url: pictureUrl,
        full_name: fullName,
        phone: phone,
        email: email
      })
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, user: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: ดึงข้อมูลผู้ใช้
app.get('/api/users/:lineUserId', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('line_user_id', req.params.lineUserId)
    .single();

  if (error) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ใน Client-side ใช้ <strong>anon key</strong> ร่วมกับ Row Level Security (RLS)
        ส่วนใน Server-side ใช้ <strong>service_role key</strong> ที่สามารถ bypass RLS ได้
        อย่าเอา service_role key ไปใส่ใน Frontend เด็ดขาด!
      </div>

      <h3>🔒 Row Level Security (RLS) ที่แนะนำ</h3>
      <p>ตัวอย่าง RLS Policy ที่ปลอดภัยกว่า:</p>

<pre><code class="language-sql">-- ลบ Policy เดิม
DROP POLICY IF EXISTS "Allow all for anon" ON users;

-- ผู้ใช้อ่านได้เฉพาะข้อมูลของตัวเอง
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (
    line_user_id = current_setting('request.headers')::json->>'x-line-userid'
  );

-- สำหรับ Insert ใช้ Service Role จาก Backend
CREATE POLICY "Service role can insert" ON users
  FOR INSERT WITH CHECK (true);

-- สำหรับ Update ใช้ Service Role จาก Backend
CREATE POLICY "Service role can update" ON users
  FOR UPDATE USING (true);</code></pre>

      <h3>📌 สรุป</h3>
      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>การสร้าง Supabase Project และตาราง Database</li>
        <li>การเชื่อมต่อ LIFF App กับ Supabase Client</li>
        <li>CRUD Operations: Create, Read, Update, Delete</li>
        <li>Real-time Subscriptions สำหรับข้อมูลแบบ Live</li>
        <li>การใช้ Supabase จาก Node.js Backend</li>
        <li>Row Level Security (RLS) เบื้องต้น</li>
      </ul>
      <p>ในบทต่อไป เราจะเรียนรู้เรื่อง LINE Login บนเว็บด้วย OAuth 2.0! 🔐</p>
    `
  },
  {
    number: 6,
    slug: 'line-login',
    emoji: '🔐',
    title: 'LINE Login บนเว็บ (OAuth 2.0)',
    content: `
      <h2>🔐 LINE Login บนเว็บ (OAuth 2.0)</h2>
      <p>
        LINE Login คือระบบ Authentication ของ LINE ที่ช่วยให้ผู้ใช้ Login เข้าเว็บไซต์หรือแอปของคุณ
        โดยใช้บัญชี LINE ของตนเอง รองรับมาตรฐาน OAuth 2.0 และ OpenID Connect
      </p>
      <p>
        ในบทนี้เราจะเรียนรู้วิธีการทำ LINE Login บนเว็บไซต์ด้วย OAuth 2.0 Flow
        โดยใช้ Node.js + Express เป็น Backend
      </p>

      <img src='/images/lessons/line-login-flow.png' alt='LINE Login OAuth 2.0 Flow' />

      <h3>🔄 OAuth 2.0 Authorization Code Flow</h3>
      <p>LINE Login ใช้ <strong>Authorization Code Flow</strong> ซึ่งมีขั้นตอนดังนี้:</p>

      <div class='step'><span class='step-number'>1</span> <strong>Authorization Request</strong> — เว็บไซต์ส่งผู้ใช้ไปยังหน้า LINE Login</div>
      <div class='step'><span class='step-number'>2</span> <strong>User Login</strong> — ผู้ใช้ Login ด้วยบัญชี LINE และอนุญาตให้เข้าถึงข้อมูล</div>
      <div class='step'><span class='step-number'>3</span> <strong>Authorization Code</strong> — LINE ส่ง Authorization Code กลับมาที่ Callback URL</div>
      <div class='step'><span class='step-number'>4</span> <strong>Token Exchange</strong> — Server ใช้ Code แลกเป็น Access Token</div>
      <div class='step'><span class='step-number'>5</span> <strong>Get Profile</strong> — ใช้ Access Token ดึงข้อมูลโปรไฟล์ผู้ใช้</div>

      <h3>📋 สิ่งที่ต้องเตรียม</h3>
      <ul>
        <li>LINE Login Channel (สร้างใน LINE Developers Console)</li>
        <li>Node.js + Express</li>
        <li>ตั้ง <strong>Callback URL</strong> ใน Channel settings (เช่น <code>http://localhost:3000/callback</code>)</li>
      </ul>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> LINE Login Channel แตกต่างจาก Messaging API Channel
        ถ้าต้องการให้ผู้ใช้ Login และใช้งาน LINE Bot ด้วย ต้อง Link ทั้ง 2 Channel ไว้ใน Provider เดียวกัน
      </div>

      <h3>ขั้นตอนที่ 1: สร้างโปรเจกต์ Node.js</h3>

<pre><code class="language-bash"># สร้างโปรเจกต์
mkdir line-login-demo
cd line-login-demo
npm init -y

# ติดตั้ง Dependencies
npm install express axios dotenv express-session jsonwebtoken</code></pre>

      <h3>ขั้นตอนที่ 2: สร้างไฟล์ .env</h3>

<pre><code class="language-bash"># .env
LINE_CHANNEL_ID=YOUR_CHANNEL_ID
LINE_CHANNEL_SECRET=YOUR_CHANNEL_SECRET
CALLBACK_URL=http://localhost:3000/callback
SESSION_SECRET=your-random-secret-key-here
PORT=3000</code></pre>

      <h3>ขั้นตอนที่ 3: สร้าง Server</h3>

<pre><code class="language-javascript">// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const session = require('express-session');

const app = express();

// ตั้งค่า Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // ใน Production ให้เปลี่ยนเป็น true (HTTPS)
}));

app.use(express.json());
app.use(express.static('public'));

// === ค่า Config ===
const LINE_CHANNEL_ID = process.env.LINE_CHANNEL_ID;
const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL;

// === Route: หน้าแรก ===
app.get('/', (req, res) => {
  if (req.session.user) {
    res.send(\`
      &lt;html&gt;
      &lt;body style="font-family:sans-serif; text-align:center; padding:40px;"&gt;
        &lt;h1&gt;สวัสดี \${req.session.user.displayName}! 👋&lt;/h1&gt;
        &lt;img src="\${req.session.user.pictureUrl}" width="100"
             style="border-radius:50%; margin:20px;"&gt;
        &lt;p&gt;User ID: \${req.session.user.userId}&lt;/p&gt;
        &lt;p&gt;Email: \${req.session.user.email || 'ไม่ได้ระบุ'}&lt;/p&gt;
        &lt;br&gt;
        &lt;a href="/logout" style="background:#ff4444; color:white;
           padding:12px 24px; border-radius:8px; text-decoration:none;"&gt;
          Logout
        &lt;/a&gt;
      &lt;/body&gt;
      &lt;/html&gt;
    \`);
  } else {
    res.send(\`
      &lt;html&gt;
      &lt;body style="font-family:sans-serif; text-align:center; padding:40px;"&gt;
        &lt;h1&gt;LINE Login Demo 🔐&lt;/h1&gt;
        &lt;p&gt;กรุณา Login ด้วย LINE เพื่อเข้าใช้งาน&lt;/p&gt;
        &lt;br&gt;
        &lt;a href="/login" style="background:#00B900; color:white;
           padding:14px 32px; border-radius:8px; text-decoration:none;
           font-size:18px;"&gt;
          Login with LINE
        &lt;/a&gt;
      &lt;/body&gt;
      &lt;/html&gt;
    \`);
  }
});

// === Route: เริ่ม LINE Login ===
app.get('/login', (req, res) => {
  // สร้าง state เพื่อป้องกัน CSRF
  const state = crypto.randomBytes(16).toString('hex');
  req.session.oauthState = state;

  // สร้าง nonce สำหรับ OpenID Connect
  const nonce = crypto.randomBytes(16).toString('hex');
  req.session.oauthNonce = nonce;

  // สร้าง Authorization URL
  const authUrl = new URL('https://access.line.me/oauth2/v2.1/authorize');
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('client_id', LINE_CHANNEL_ID);
  authUrl.searchParams.set('redirect_uri', CALLBACK_URL);
  authUrl.searchParams.set('state', state);
  authUrl.searchParams.set('scope', 'profile openid email');
  authUrl.searchParams.set('nonce', nonce);

  res.redirect(authUrl.toString());
});

// === Route: Callback (รับ Authorization Code) ===
app.get('/callback', async (req, res) => {
  const { code, state, error: authError } = req.query;

  // ตรวจสอบ Error
  if (authError) {
    return res.status(400).send('Login ถูกยกเลิก: ' + authError);
  }

  // ตรวจสอบ State (ป้องกัน CSRF)
  if (state !== req.session.oauthState) {
    return res.status(400).send('Invalid state - อาจเป็นการโจมตี CSRF');
  }

  try {
    // === Step 1: แลก Code เป็น Token ===
    const tokenResponse = await axios.post(
      'https://api.line.me/oauth2/v2.1/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: CALLBACK_URL,
        client_id: LINE_CHANNEL_ID,
        client_secret: LINE_CHANNEL_SECRET
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const { access_token, id_token, refresh_token, expires_in } = tokenResponse.data;

    // === Step 2: Verify ID Token ===
    const verifyResponse = await axios.post(
      'https://api.line.me/oauth2/v2.1/verify',
      new URLSearchParams({
        id_token: id_token,
        client_id: LINE_CHANNEL_ID
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const idTokenPayload = verifyResponse.data;

    // ตรวจสอบ nonce
    if (idTokenPayload.nonce !== req.session.oauthNonce) {
      return res.status(400).send('Invalid nonce');
    }

    // === Step 3: ดึงข้อมูลโปรไฟล์ ===
    const profileResponse = await axios.get(
      'https://api.line.me/v2/profile',
      {
        headers: { Authorization: 'Bearer ' + access_token }
      }
    );

    const profile = profileResponse.data;

    // บันทึกข้อมูลผู้ใช้ใน Session
    req.session.user = {
      userId: profile.userId,
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      statusMessage: profile.statusMessage,
      email: idTokenPayload.email || null,
      accessToken: access_token,
      refreshToken: refresh_token
    };

    // ลบ state/nonce ที่ใช้แล้ว
    delete req.session.oauthState;
    delete req.session.oauthNonce;

    res.redirect('/');

  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    res.status(500).send('เกิดข้อผิดพลาดในการ Login: ' + error.message);
  }
});

// === Route: Logout ===
app.get('/logout', (req, res) => {
  // Revoke Access Token (optional แต่แนะนำ)
  if (req.session.user?.accessToken) {
    axios.post('https://api.line.me/oauth2/v2.1/revoke',
      new URLSearchParams({
        access_token: req.session.user.accessToken,
        client_id: LINE_CHANNEL_ID,
        client_secret: LINE_CHANNEL_SECRET
      })
    ).catch(err => console.error('Revoke error:', err.message));
  }

  req.session.destroy();
  res.redirect('/');
});

// === Route: ดึงข้อมูลผู้ใช้ (API) ===
app.get('/api/me', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  res.json({
    userId: req.session.user.userId,
    displayName: req.session.user.displayName,
    pictureUrl: req.session.user.pictureUrl,
    email: req.session.user.email
  });
});

// === Middleware: ตรวจสอบ Login ===
function requireLogin(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

// Protected route ตัวอย่าง
app.get('/dashboard', requireLogin, (req, res) => {
  res.json({ message: 'Welcome to dashboard!', user: req.session.user.displayName });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on http://localhost:' + (process.env.PORT || 3000));
});</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> อย่าเก็บ <code>client_secret</code> ไว้ใน Frontend หรือ Client-side code
        ต้องเก็บไว้ใน Server-side เท่านั้น และใช้ Environment Variables สำหรับค่าที่เป็นความลับ
      </div>

      <h3>🔄 Refresh Token</h3>
      <p>Access Token มีอายุจำกัด สามารถใช้ Refresh Token ขอ Token ใหม่ได้:</p>

<pre><code class="language-javascript">// ฟังก์ชัน Refresh Access Token
async function refreshAccessToken(refreshToken) {
  try {
    const response = await axios.post(
      'https://api.line.me/oauth2/v2.1/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: LINE_CHANNEL_ID,
        client_secret: LINE_CHANNEL_SECRET
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    return {
      accessToken: response.data.access_token,
      refreshToken: response.data.refresh_token, // Refresh Token ใหม่
      expiresIn: response.data.expires_in
    };
  } catch (error) {
    console.error('Refresh token error:', error.response?.data);
    throw error;
  }
}</code></pre>

      <h3>📱 LINE Login ใน LIFF vs Web</h3>
      <table>
        <thead>
          <tr>
            <th>คุณสมบัติ</th>
            <th>LIFF (ใน LINE App)</th>
            <th>LINE Login (บนเว็บ)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Login อัตโนมัติ</td>
            <td>✅ (ถ้าเปิดใน LINE)</td>
            <td>❌ ต้อง Login ทุกครั้ง</td>
          </tr>
          <tr>
            <td>ต้องมี Server</td>
            <td>❌ ได้ Client-side</td>
            <td>✅ ต้องมี Backend</td>
          </tr>
          <tr>
            <td>ได้ Email</td>
            <td>✅ (ถ้าขอ scope)</td>
            <td>✅ (ถ้าขอ scope)</td>
          </tr>
          <tr>
            <td>ใช้ใน Browser ทั่วไป</td>
            <td>✅ (External Browser)</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>ส่งข้อความ LINE</td>
            <td>✅ (ในแอป LINE)</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ถ้าต้องการให้ผู้ใช้ Login บนเว็บไซต์ทั่วไป (ไม่ได้เปิดใน LINE) ใช้ LINE Login OAuth 2.0
        แต่ถ้าผู้ใช้เปิดจาก LINE อยู่แล้ว ใช้ LIFF จะง่ายกว่ามาก
      </div>

      <h3>🔐 เทคนิคความปลอดภัย</h3>
      <ul>
        <li><strong>ใช้ State Parameter</strong> — ป้องกัน CSRF Attack</li>
        <li><strong>ใช้ Nonce</strong> — ป้องกัน Replay Attack กับ ID Token</li>
        <li><strong>Verify ID Token ฝั่ง Server</strong> — อย่า Trust ID Token จาก Client โดยไม่ตรวจสอบ</li>
        <li><strong>ใช้ HTTPS</strong> — ในทุก Production Environment</li>
        <li><strong>Revoke Token เมื่อ Logout</strong> — ไม่ปล่อยให้ Token ที่ไม่ใช้แล้วยังใช้ได้อยู่</li>
        <li><strong>ตั้ง Token Expiry</strong> — จำกัดอายุของ Session</li>
      </ul>

      <h3>📌 สรุป</h3>
      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>OAuth 2.0 Authorization Code Flow ของ LINE Login</li>
        <li>การสร้าง Authorization URL พร้อม scope, state, nonce</li>
        <li>การแลก Authorization Code เป็น Access Token</li>
        <li>การ Verify ID Token</li>
        <li>การดึงข้อมูลโปรไฟล์ผู้ใช้</li>
        <li>การทำ Logout พร้อม Revoke Token</li>
        <li>เทคนิคความปลอดภัยที่สำคัญ</li>
      </ul>
      <p>ในบทต่อไป เราจะเรียนรู้เรื่อง LIFF Sharing — ส่ง Flex Message ให้เพื่อนและกลุ่ม! 📤</p>
    `
  },
  {
    number: 7,
    slug: 'liff-sharing',
    emoji: '📤',
    title: 'LIFF Sharing + Send Message',
    content: `
      <h2>📤 LIFF Sharing + Send Message</h2>
      <p>
        หนึ่งในฟีเจอร์ที่ทรงพลังของ LIFF คือความสามารถในการส่งข้อความไปยังเพื่อนและกลุ่มใน LINE
        ผ่าน <code>liff.shareTargetPicker()</code> ซึ่งเปิดหน้าเลือกเพื่อน/กลุ่มแล้วส่ง Flex Message ได้
      </p>

      <h3>📨 liff.sendMessages() vs liff.shareTargetPicker()</h3>
      <table>
        <thead>
          <tr>
            <th>คุณสมบัติ</th>
            <th>sendMessages()</th>
            <th>shareTargetPicker()</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ส่งไปที่</td>
            <td>แชทที่เปิด LIFF</td>
            <td>เลือกเพื่อน/กลุ่มได้</td>
          </tr>
          <tr>
            <td>ใช้ใน</td>
            <td>LINE App เท่านั้น</td>
            <td>LINE App + External Browser</td>
          </tr>
          <tr>
            <td>UI เลือกผู้รับ</td>
            <td>❌ ไม่มี</td>
            <td>✅ มี (เลือกได้)</td>
          </tr>
          <tr>
            <td>จำนวนผู้รับ</td>
            <td>1 (แชทปัจจุบัน)</td>
            <td>หลายคน/หลายกลุ่ม</td>
          </tr>
          <tr>
            <td>จำนวนข้อความ</td>
            <td>สูงสุด 5 ข้อความ</td>
            <td>สูงสุด 5 ข้อความ</td>
          </tr>
        </tbody>
      </table>

      <h3>1️⃣ ใช้ liff.shareTargetPicker()</h3>
      <p>เปิดหน้าเลือกเพื่อน/กลุ่มเพื่อส่งข้อความ:</p>

<pre><code class="language-javascript">// ส่ง Text Message
async function shareText() {
  try {
    const result = await liff.shareTargetPicker([
      {
        type: 'text',
        text: '📢 ลองใช้ LIFF Sharing!'
      }
    ]);

    if (result) {
      console.log('แชร์สำเร็จ');
      alert('ส่งข้อความสำเร็จ!');
    } else {
      console.log('ผู้ใช้ยกเลิก หรือ shareTargetPicker ถูกปิด');
    }
  } catch (error) {
    console.error('Share error:', error);
    alert('ไม่สามารถแชร์ได้: ' + error.message);
  }
}

// ส่ง Flex Message — การ์ดสินค้า
async function shareProductCard() {
  await liff.shareTargetPicker([
    {
      type: 'flex',
      altText: '🛒 สินค้าแนะนำ',
      contents: {
        type: 'bubble',
        hero: {
          type: 'image',
          url: 'https://example.com/product.jpg',
          size: 'full',
          aspectRatio: '20:13',
          aspectMode: 'cover'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'กาแฟ Cold Brew Premium',
              weight: 'bold',
              size: 'xl'
            },
            {
              type: 'box',
              layout: 'baseline',
              margin: 'md',
              contents: [
                { type: 'text', text: '⭐⭐⭐⭐⭐', size: 'sm' },
                { type: 'text', text: '4.9', size: 'sm', color: '#999999', margin: 'md' }
              ]
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'lg',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    { type: 'text', text: 'ราคา', size: 'sm', color: '#aaaaaa', flex: 1 },
                    { type: 'text', text: '฿89', size: 'sm', color: '#00B900', flex: 2, weight: 'bold' }
                  ]
                }
              ]
            }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              style: 'primary',
              color: '#00B900',
              action: {
                type: 'uri',
                label: 'สั่งซื้อเลย',
                uri: 'https://liff.line.me/YOUR_LIFF_ID'
              }
            },
            {
              type: 'button',
              style: 'secondary',
              margin: 'sm',
              action: {
                type: 'uri',
                label: 'ดูรายละเอียด',
                uri: 'https://example.com/product'
              }
            }
          ]
        }
      }
    }
  ]);
}</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ใช้ <a href='https://developers.line.biz/flex-message-simulator/' target='_blank'>Flex Message Simulator</a>
        เพื่อออกแบบ Flex Message แบบ Visual แล้ว Export JSON มาใช้ได้เลย
      </div>

      <h3>2️⃣ Flex Message Template: บัตรเชิญ</h3>
      <p>ตัวอย่าง Flex Message สำหรับส่งบัตรเชิญงาน:</p>

<pre><code class="language-javascript">// แชร์บัตรเชิญงาน
async function shareEventInvitation(eventData) {
  const flexMessage = {
    type: 'flex',
    altText: '📩 คุณได้รับเชิญ: ' + eventData.name,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#00B900',
        paddingAll: '20px',
        contents: [
          {
            type: 'text',
            text: '📩 บัตรเชิญ',
            color: '#ffffff',
            size: 'sm'
          },
          {
            type: 'text',
            text: eventData.name,
            color: '#ffffff',
            size: 'xl',
            weight: 'bold',
            margin: 'sm'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              { type: 'text', text: '📅 วันที่', size: 'sm', color: '#aaaaaa', flex: 2 },
              { type: 'text', text: eventData.date, size: 'sm', flex: 3 }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              { type: 'text', text: '⏰ เวลา', size: 'sm', color: '#aaaaaa', flex: 2 },
              { type: 'text', text: eventData.time, size: 'sm', flex: 3 }
            ]
          },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              { type: 'text', text: '📍 สถานที่', size: 'sm', color: '#aaaaaa', flex: 2 },
              { type: 'text', text: eventData.location, size: 'sm', flex: 3, wrap: true }
            ]
          },
          {
            type: 'separator',
            margin: 'lg'
          },
          {
            type: 'text',
            text: eventData.description,
            size: 'sm',
            color: '#666666',
            margin: 'lg',
            wrap: true
          }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: '#00B900',
            action: {
              type: 'uri',
              label: '✅ ตอบรับเข้าร่วม',
              uri: 'https://liff.line.me/YOUR_LIFF_ID?event=' + eventData.id
            }
          }
        ]
      }
    }
  };

  try {
    const result = await liff.shareTargetPicker([flexMessage]);
    if (result) {
      console.log('ส่งบัตรเชิญสำเร็จ!');
    }
  } catch (error) {
    console.error('ส่งบัตรเชิญไม่สำเร็จ:', error);
  }
}

// ตัวอย่างการเรียกใช้
shareEventInvitation({
  id: 'evt001',
  name: 'LINE API Workshop',
  date: '30 มิ.ย. 2026',
  time: '13:00 - 17:00',
  location: 'ห้อง A301 ตึก Innovation, กรุงเทพฯ',
  description: 'มาเรียนรู้การสร้าง LINE Bot, LIFF App และ LINE Login ในเวิร์กช็อป 4 ชั่วโมง!'
});</code></pre>

      <h3>3️⃣ Carousel Template: แชร์หลายสินค้า</h3>

<pre><code class="language-javascript">// แชร์สินค้าหลายรายการแบบ Carousel
async function shareProductCarousel(products) {
  const bubbles = products.map(product => ({
    type: 'bubble',
    hero: {
      type: 'image',
      url: product.image,
      size: 'full',
      aspectRatio: '1:1',
      aspectMode: 'cover'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        { type: 'text', text: product.name, weight: 'bold', size: 'md' },
        {
          type: 'text',
          text: '฿' + product.price.toLocaleString(),
          size: 'lg',
          color: '#00B900',
          weight: 'bold',
          margin: 'sm'
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'button',
          style: 'primary',
          color: '#00B900',
          action: {
            type: 'uri',
            label: 'สั่งซื้อ',
            uri: 'https://liff.line.me/YOUR_LIFF_ID?product=' + product.id
          }
        }
      ]
    }
  }));

  await liff.shareTargetPicker([
    {
      type: 'flex',
      altText: '🛍️ สินค้าแนะนำ ' + products.length + ' รายการ',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }
  ]);
}

// ตัวอย่าง
shareProductCarousel([
  { id: 'p1', name: 'Cold Brew Premium', price: 89, image: 'https://example.com/cold-brew.jpg' },
  { id: 'p2', name: 'Matcha Latte', price: 75, image: 'https://example.com/matcha.jpg' },
  { id: 'p3', name: 'Espresso Shot', price: 55, image: 'https://example.com/espresso.jpg' }
]);</code></pre>

      <h3>4️⃣ สร้าง Custom Share UI</h3>
      <p>ตัวอย่างหน้า Share ที่ผู้ใช้เลือกเนื้อหาก่อนแชร์:</p>

<pre><code class="language-html">&lt;!-- Share UI --&gt;
&lt;div class="share-container"&gt;
  &lt;h2&gt;📤 เลือกเนื้อหาที่ต้องการแชร์&lt;/h2&gt;

  &lt;div class="share-options"&gt;
    &lt;label class="share-option"&gt;
      &lt;input type="checkbox" value="promo" checked&gt;
      &lt;span&gt;🎁 โปรโมชันพิเศษ&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="share-option"&gt;
      &lt;input type="checkbox" value="coupon"&gt;
      &lt;span&gt;🎫 คูปองส่วนลด&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="share-option"&gt;
      &lt;input type="checkbox" value="invite"&gt;
      &lt;span&gt;👥 ชวนเพื่อนสมัครสมาชิก&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;

  &lt;textarea id="customMessage" rows="3"
    placeholder="เพิ่มข้อความส่วนตัว (ไม่บังคับ)"&gt;&lt;/textarea&gt;

  &lt;button onclick="shareSelected()" class="share-btn"&gt;
    📤 แชร์ให้เพื่อน
  &lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
async function shareSelected() {
  const messages = [];
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

  checkboxes.forEach(cb => {
    if (cb.value === 'promo') {
      messages.push({
        type: 'text',
        text: '🎁 โปรโมชันพิเศษ! ลด 20% ทุกเมนูวันนี้'
      });
    }
    if (cb.value === 'coupon') {
      messages.push({
        type: 'flex',
        altText: '🎫 คูปองส่วนลด',
        contents: {
          type: 'bubble',
          body: {
            type: 'box', layout: 'vertical',
            contents: [
              { type: 'text', text: '🎫 คูปองส่วนลด 50 บาท', weight: 'bold', size: 'lg' },
              { type: 'text', text: 'ใช้โค้ด: LIFF50', margin: 'md', size: 'xl', color: '#00B900' },
              { type: 'text', text: 'หมดอายุ 31 ก.ค. 2026', margin: 'md', size: 'xs', color: '#999' }
            ]
          }
        }
      });
    }
    if (cb.value === 'invite') {
      messages.push({
        type: 'text',
        text: '👥 มาสมัครสมาชิกกันเถอะ! สมัครง่ายๆ คลิกเลย 👉 https://liff.line.me/YOUR_LIFF_ID'
      });
    }
  });

  const customMsg = document.getElementById('customMessage').value.trim();
  if (customMsg) {
    messages.push({ type: 'text', text: customMsg });
  }

  if (messages.length === 0) {
    alert('กรุณาเลือกเนื้อหาอย่างน้อย 1 รายการ');
    return;
  }

  if (messages.length > 5) {
    alert('ส่งได้สูงสุด 5 ข้อความต่อครั้ง');
    return;
  }

  try {
    const result = await liff.shareTargetPicker(messages);
    if (result) alert('แชร์สำเร็จ! 🎉');
  } catch (error) {
    alert('แชร์ไม่สำเร็จ: ' + error.message);
  }
}
&lt;/script&gt;</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> <code>shareTargetPicker()</code> ต้องเปิดใช้งานใน LIFF App settings
        ไปที่ LINE Developers Console → LIFF → เปิด "shareTargetPicker" ให้เป็น ON
        ถ้าไม่เปิดจะเกิด Error <code>FORBIDDEN</code>
      </div>

      <h3>📌 สรุป</h3>
      <p>ในบทนี้คุณได้เรียนรู้:</p>
      <ul>
        <li>ความแตกต่างระหว่าง sendMessages() และ shareTargetPicker()</li>
        <li>การส่ง Text, Flex Message ด้วย shareTargetPicker()</li>
        <li>การสร้าง Flex Message Template สำหรับสินค้า บัตรเชิญ</li>
        <li>การสร้าง Carousel Template สำหรับหลายรายการ</li>
        <li>การสร้าง Custom Share UI</li>
      </ul>
      <p>ในบทสุดท้าย เราจะมาทำ Workshop สร้างระบบจองคิวด้วย LIFF + Supabase! 🏗️</p>
    `
  },
  {
    number: 8,
    slug: 'liff-workshop',
    emoji: '🏗️',
    title: 'Workshop: ระบบจองคิว LIFF',
    content: `
      <h2>🏗️ Workshop: ระบบจองคิว LIFF</h2>
      <p>
        ในบทสุดท้ายนี้ เราจะนำความรู้ทั้งหมดมาสร้าง <strong>ระบบจองคิว (Queue Booking System)</strong>
        ที่ใช้งานจริงได้ โดยใช้ LIFF สำหรับ Frontend, Supabase สำหรับ Database
        และส่งข้อความยืนยันกลับไปใน LINE
      </p>

      <h3>🎯 ฟีเจอร์ของระบบ</h3>
      <ul>
        <li>✅ ฟอร์มจองคิว — เลือกบริการ, วันที่, เวลา</li>
        <li>✅ ดึงข้อมูลผู้จองจาก LINE Profile อัตโนมัติ</li>
        <li>✅ บันทึกข้อมูลลง Supabase</li>
        <li>✅ แสดงคิวแบบ Real-time</li>
        <li>✅ ส่ง Flex Message ยืนยันการจอง</li>
        <li>✅ ตรวจสอบคิวซ้ำ</li>
      </ul>

      <img src='/images/lessons/liff-queue-system.png' alt='ระบบจองคิว LIFF' />

      <h3>ขั้นตอนที่ 1: สร้าง Database (Supabase)</h3>

<pre><code class="language-sql">-- ตาราง services (บริการ)
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true
);

-- ใส่ข้อมูลบริการตัวอย่าง
INSERT INTO services (name, description, duration_minutes) VALUES
  ('ตัดผม', 'ตัดผมทรงมาตรฐาน', 30),
  ('สระ + ตัด', 'สระผมและตัดผม', 45),
  ('ทำสีผม', 'ทำสีผมตามที่เลือก', 120),
  ('ทรีทเม้นท์', 'ทรีทเม้นท์บำรุงผม', 60);

-- ตาราง bookings (การจอง)
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  queue_number INTEGER NOT NULL,
  line_user_id TEXT NOT NULL,
  display_name TEXT NOT NULL,
  picture_url TEXT,
  service_id UUID REFERENCES services(id),
  service_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  phone TEXT,
  note TEXT,
  status TEXT DEFAULT 'waiting', -- waiting, in-progress, completed, cancelled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- สร้าง Function สำหรับ Auto-increment queue number ตามวัน
CREATE OR REPLACE FUNCTION get_next_queue_number(p_date DATE)
RETURNS INTEGER AS $$
DECLARE
  next_num INTEGER;
BEGIN
  SELECT COALESCE(MAX(queue_number), 0) + 1 INTO next_num
  FROM bookings
  WHERE booking_date = p_date AND status != 'cancelled';
  RETURN next_num;
END;
$$ LANGUAGE plpgsql;

-- เปิด RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policy สำหรับ services (อ่านได้อย่างเดียว)
CREATE POLICY "Anyone can read services" ON services FOR SELECT USING (true);

-- Policy สำหรับ bookings
CREATE POLICY "Anyone can read bookings" ON bookings FOR SELECT USING (true);
CREATE POLICY "Anyone can insert bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own bookings" ON bookings
  FOR UPDATE USING (true);</code></pre>

      <h3>ขั้นตอนที่ 2: สร้าง LIFF Form (HTML)</h3>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="th"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;จองคิว | Queue Booking&lt;/title&gt;
  &lt;script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.24.0/sdk.js"&gt;&lt;/script&gt;
  &lt;script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"&gt;&lt;/script&gt;
  &lt;style&gt;
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Sarabun', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 16px;
    }
    .container {
      max-width: 480px;
      margin: 0 auto;
    }
    .card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 16px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    }
    h1 { color: #333; font-size: 24px; text-align: center; }
    .subtitle { color: #888; text-align: center; margin-top: 4px; font-size: 14px; }
    .profile-bar {
      display: flex; align-items: center; gap: 12px;
      padding: 12px; background: #f8f0ff; border-radius: 12px;
      margin: 16px 0;
    }
    .profile-bar img { width: 44px; height: 44px; border-radius: 50%; }
    .profile-bar .name { font-weight: bold; color: #333; }
    .form-group { margin-bottom: 16px; }
    .form-group label {
      display: block; font-weight: bold; color: #444;
      margin-bottom: 6px; font-size: 14px;
    }
    .form-group select,
    .form-group input,
    .form-group textarea {
      width: 100%; padding: 12px; border: 2px solid #eee;
      border-radius: 12px; font-size: 16px; transition: 0.3s;
    }
    .form-group select:focus,
    .form-group input:focus,
    .form-group textarea:focus {
      border-color: #764ba2; outline: none;
    }
    .time-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 8px; margin-top: 8px;
    }
    .time-slot {
      padding: 10px; text-align: center; border: 2px solid #eee;
      border-radius: 10px; cursor: pointer; font-size: 14px;
      transition: 0.2s;
    }
    .time-slot:hover { border-color: #764ba2; }
    .time-slot.selected {
      background: #764ba2; color: white; border-color: #764ba2;
    }
    .time-slot.disabled {
      background: #f5f5f5; color: #ccc; cursor: not-allowed;
      text-decoration: line-through;
    }
    .submit-btn {
      width: 100%; padding: 16px; background: linear-gradient(135deg, #667eea, #764ba2);
      color: white; border: none; border-radius: 14px;
      font-size: 18px; font-weight: bold; cursor: pointer;
      transition: 0.3s; margin-top: 8px;
    }
    .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(118,75,162,0.4); }
    .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    .queue-list { margin-top: 16px; }
    .queue-item {
      display: flex; justify-content: space-between; align-items: center;
      padding: 12px; border-bottom: 1px solid #f0f0f0;
    }
    .queue-number {
      background: #764ba2; color: white; width: 36px; height: 36px;
      border-radius: 50%; display: flex; align-items: center;
      justify-content: center; font-weight: bold;
    }
    .badge {
      padding: 4px 10px; border-radius: 20px; font-size: 12px;
    }
    .badge-waiting { background: #fff3cd; color: #856404; }
    .badge-progress { background: #cce5ff; color: #004085; }
    .badge-completed { background: #d4edda; color: #155724; }
    .tab-bar {
      display: flex; gap: 0; margin-bottom: 16px;
    }
    .tab {
      flex: 1; padding: 12px; text-align: center; cursor: pointer;
      border: 2px solid #eee; font-weight: bold; color: #888;
      transition: 0.2s;
    }
    .tab:first-child { border-radius: 12px 0 0 12px; }
    .tab:last-child { border-radius: 0 12px 12px 0; }
    .tab.active {
      background: #764ba2; color: white; border-color: #764ba2;
    }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;div class="card"&gt;
      &lt;h1&gt;📋 ระบบจองคิว&lt;/h1&gt;
      &lt;p class="subtitle"&gt;เลือกบริการและจองคิวได้ง่าย ๆ&lt;/p&gt;

      &lt;div class="profile-bar" id="profileBar" style="display:none;"&gt;
        &lt;img id="profileImg" src="" alt="Profile"&gt;
        &lt;div&gt;
          &lt;div class="name" id="profileName"&gt;&lt;/div&gt;
          &lt;div style="font-size:12px; color:#888;"&gt;ผู้จอง&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="tab-bar"&gt;
        &lt;div class="tab active" onclick="switchTab('booking')"&gt;📝 จองคิว&lt;/div&gt;
        &lt;div class="tab" onclick="switchTab('status')"&gt;📊 สถานะคิว&lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Tab: จองคิว --&gt;
      &lt;div id="bookingTab" class="tab-content active"&gt;
        &lt;form id="bookingForm" onsubmit="handleBooking(event)"&gt;
          &lt;div class="form-group"&gt;
            &lt;label&gt;🏷️ เลือกบริการ&lt;/label&gt;
            &lt;select id="serviceSelect" required onchange="onServiceChange()"&gt;
              &lt;option value=""&gt;-- เลือกบริการ --&lt;/option&gt;
            &lt;/select&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label&gt;📅 เลือกวันที่&lt;/label&gt;
            &lt;input type="date" id="bookingDate" required onchange="loadTimeSlots()"&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label&gt;⏰ เลือกเวลา&lt;/label&gt;
            &lt;div class="time-grid" id="timeGrid"&gt;
              &lt;p style="grid-column: span 3; text-align:center; color:#999;"&gt;
                กรุณาเลือกวันที่ก่อน
              &lt;/p&gt;
            &lt;/div&gt;
            &lt;input type="hidden" id="selectedTime" required&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label&gt;📱 เบอร์โทรศัพท์&lt;/label&gt;
            &lt;input type="tel" id="phone" placeholder="08x-xxx-xxxx" maxlength="10"&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label&gt;📝 หมายเหตุ&lt;/label&gt;
            &lt;textarea id="note" rows="2" placeholder="หมายเหตุเพิ่มเติม (ถ้ามี)"&gt;&lt;/textarea&gt;
          &lt;/div&gt;
          &lt;button type="submit" class="submit-btn" id="submitBtn"&gt;
            ✅ จองคิว
          &lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;

      &lt;!-- Tab: สถานะคิว --&gt;
      &lt;div id="statusTab" class="tab-content"&gt;
        &lt;div id="queueList" class="queue-list"&gt;
          &lt;p style="text-align:center; color:#999; padding:20px;"&gt;
            กำลังโหลด...
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;script&gt;
    // === Config ===
    const LIFF_ID = 'YOUR_LIFF_ID';
    const SUPABASE_URL = 'https://xxxxx.supabase.co';
    const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    let userProfile = null;
    let selectedTimeValue = '';
    let services = [];

    // === Init ===
    async function init() {
      await liff.init({ liffId: LIFF_ID });
      if (!liff.isLoggedIn()) { liff.login(); return; }

      userProfile = await liff.getProfile();
      document.getElementById('profileImg').src = userProfile.pictureUrl;
      document.getElementById('profileName').textContent = userProfile.displayName;
      document.getElementById('profileBar').style.display = 'flex';

      // ตั้งวันที่ขั้นต่ำเป็นวันนี้
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('bookingDate').min = today;
      document.getElementById('bookingDate').value = today;

      await loadServices();
      await loadTimeSlots();
      await loadTodayQueue();
      subscribeToBookings();
    }

    // === โหลดบริการ ===
    async function loadServices() {
      const { data } = await supabaseClient
        .from('services').select('*').eq('is_active', true);
      services = data || [];
      const select = document.getElementById('serviceSelect');
      services.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name + ' (' + s.duration_minutes + ' นาที)';
        select.appendChild(opt);
      });
    }

    // === โหลด Time Slots ===
    async function loadTimeSlots() {
      const date = document.getElementById('bookingDate').value;
      if (!date) return;

      // ดึง Booking ที่มีอยู่แล้ว
      const { data: existingBookings } = await supabaseClient
        .from('bookings').select('booking_time')
        .eq('booking_date', date)
        .neq('status', 'cancelled');

      const bookedTimes = (existingBookings || []).map(b => b.booking_time.substring(0, 5));

      // สร้าง Time Slots (09:00 - 17:00 ทุก 30 นาที)
      const timeSlots = [];
      for (let h = 9; h &lt; 17; h++) {
        for (let m = 0; m &lt; 60; m += 30) {
          const time = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
          timeSlots.push(time);
        }
      }

      const grid = document.getElementById('timeGrid');
      grid.innerHTML = '';

      timeSlots.forEach(time => {
        const slot = document.createElement('div');
        slot.className = 'time-slot';
        slot.textContent = time;

        if (bookedTimes.includes(time)) {
          slot.classList.add('disabled');
          slot.textContent = time + ' ❌';
        } else {
          slot.onclick = () => selectTime(time, slot);
        }

        grid.appendChild(slot);
      });
    }

    function selectTime(time, element) {
      document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
      element.classList.add('selected');
      selectedTimeValue = time;
      document.getElementById('selectedTime').value = time;
    }

    function onServiceChange() {}

    // === จองคิว ===
    async function handleBooking(event) {
      event.preventDefault();

      if (!selectedTimeValue) {
        alert('กรุณาเลือกเวลา');
        return;
      }

      const submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = '⏳ กำลังจอง...';

      const serviceId = document.getElementById('serviceSelect').value;
      const serviceName = services.find(s => s.id === serviceId)?.name || '';
      const bookingDate = document.getElementById('bookingDate').value;

      try {
        // ตรวจสอบการจองซ้ำ
        const { data: existing } = await supabaseClient
          .from('bookings').select('id')
          .eq('line_user_id', userProfile.userId)
          .eq('booking_date', bookingDate)
          .neq('status', 'cancelled');

        if (existing && existing.length > 0) {
          alert('คุณมีคิวจองในวันนี้แล้ว ไม่สามารถจองซ้ำได้');
          submitBtn.disabled = false;
          submitBtn.textContent = '✅ จองคิว';
          return;
        }

        // ดึงหมายเลขคิวถัดไป
        const { data: maxQueue } = await supabaseClient
          .from('bookings').select('queue_number')
          .eq('booking_date', bookingDate)
          .neq('status', 'cancelled')
          .order('queue_number', { ascending: false })
          .limit(1);

        const nextQueue = (maxQueue && maxQueue.length > 0)
          ? maxQueue[0].queue_number + 1 : 1;

        // บันทึกการจอง
        const { data: booking, error } = await supabaseClient
          .from('bookings').insert({
            queue_number: nextQueue,
            line_user_id: userProfile.userId,
            display_name: userProfile.displayName,
            picture_url: userProfile.pictureUrl,
            service_id: serviceId,
            service_name: serviceName,
            booking_date: bookingDate,
            booking_time: selectedTimeValue + ':00',
            phone: document.getElementById('phone').value,
            note: document.getElementById('note').value,
            status: 'waiting'
          }).select().single();

        if (error) throw error;

        // ส่ง Flex Message ยืนยัน
        if (liff.isInClient()) {
          await liff.sendMessages([{
            type: 'flex',
            altText: '✅ จองคิวสำเร็จ - คิวที่ ' + nextQueue,
            contents: {
              type: 'bubble',
              header: {
                type: 'box', layout: 'vertical',
                backgroundColor: '#764ba2', paddingAll: '16px',
                contents: [
                  { type: 'text', text: '✅ จองคิวสำเร็จ!', color: '#ffffff', weight: 'bold', size: 'lg' }
                ]
              },
              body: {
                type: 'box', layout: 'vertical',
                contents: [
                  {
                    type: 'text', text: 'คิวที่ ' + nextQueue,
                    size: '3xl', weight: 'bold', color: '#764ba2',
                    align: 'center'
                  },
                  { type: 'separator', margin: 'lg' },
                  {
                    type: 'box', layout: 'vertical', margin: 'lg', spacing: 'sm',
                    contents: [
                      {
                        type: 'box', layout: 'horizontal',
                        contents: [
                          { type: 'text', text: '🏷️ บริการ', size: 'sm', color: '#aaa', flex: 2 },
                          { type: 'text', text: serviceName, size: 'sm', flex: 3 }
                        ]
                      },
                      {
                        type: 'box', layout: 'horizontal',
                        contents: [
                          { type: 'text', text: '📅 วันที่', size: 'sm', color: '#aaa', flex: 2 },
                          { type: 'text', text: bookingDate, size: 'sm', flex: 3 }
                        ]
                      },
                      {
                        type: 'box', layout: 'horizontal',
                        contents: [
                          { type: 'text', text: '⏰ เวลา', size: 'sm', color: '#aaa', flex: 2 },
                          { type: 'text', text: selectedTimeValue + ' น.', size: 'sm', flex: 3 }
                        ]
                      }
                    ]
                  }
                ]
              },
              footer: {
                type: 'box', layout: 'vertical',
                contents: [
                  {
                    type: 'button', style: 'primary', color: '#764ba2',
                    action: { type: 'uri', label: '📊 ดูสถานะคิว', uri: 'https://liff.line.me/' + LIFF_ID }
                  }
                ]
              }
            }
          }]);
        }

        alert('จองคิวสำเร็จ! คิวที่ ' + nextQueue);
        switchTab('status');
        loadTodayQueue();

      } catch (error) {
        alert('จองคิวไม่สำเร็จ: ' + error.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '✅ จองคิว';
      }
    }

    // === โหลดคิววันนี้ ===
    async function loadTodayQueue() {
      const today = new Date().toISOString().split('T')[0];
      const { data: bookings } = await supabaseClient
        .from('bookings').select('*')
        .eq('booking_date', today)
        .neq('status', 'cancelled')
        .order('queue_number', { ascending: true });

      const list = document.getElementById('queueList');
      if (!bookings || bookings.length === 0) {
        list.innerHTML = '&lt;p style="text-align:center;color:#999;padding:20px;"&gt;ยังไม่มีคิววันนี้&lt;/p&gt;';
        return;
      }

      let html = '&lt;h3 style="margin-bottom:12px;"&gt;📊 คิววันนี้ (' + bookings.length + ' คิว)&lt;/h3&gt;';
      bookings.forEach(b => {
        const isMe = b.line_user_id === userProfile?.userId;
        const badgeClass = b.status === 'waiting' ? 'badge-waiting' :
                          b.status === 'in-progress' ? 'badge-progress' : 'badge-completed';
        const statusText = b.status === 'waiting' ? '⏳ รอ' :
                          b.status === 'in-progress' ? '🔄 กำลังให้บริการ' : '✅ เสร็จ';
        html += '&lt;div class="queue-item" style="' + (isMe ? 'background:#f8f0ff;border-radius:8px;' : '') + '"&gt;' +
          '&lt;div style="display:flex;align-items:center;gap:10px;"&gt;' +
          '&lt;div class="queue-number"&gt;' + b.queue_number + '&lt;/div&gt;' +
          '&lt;div&gt;' +
          '&lt;div style="font-weight:bold;"&gt;' + b.display_name + (isMe ? ' (คุณ)' : '') + '&lt;/div&gt;' +
          '&lt;div style="font-size:12px;color:#888;"&gt;' + b.service_name + ' • ' + b.booking_time.substring(0,5) + '&lt;/div&gt;' +
          '&lt;/div&gt;&lt;/div&gt;' +
          '&lt;span class="badge ' + badgeClass + '"&gt;' + statusText + '&lt;/span&gt;' +
          '&lt;/div&gt;';
      });
      list.innerHTML = html;
    }

    // === Real-time Subscription ===
    function subscribeToBookings() {
      const today = new Date().toISOString().split('T')[0];
      supabaseClient
        .channel('booking-updates')
        .on('postgres_changes',
          { event: '*', schema: 'public', table: 'bookings' },
          (payload) => {
            console.log('Booking update:', payload);
            loadTodayQueue();
            loadTimeSlots();
          }
        )
        .subscribe();
    }

    // === Tab Switching ===
    function switchTab(tabName) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

      if (tabName === 'booking') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        document.getElementById('bookingTab').classList.add('active');
      } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('statusTab').classList.add('active');
        loadTodayQueue();
      }
    }

    init();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ในระบบจริง ควรเพิ่มฟีเจอร์ Admin Panel สำหรับจัดการคิว
        เช่น เปลี่ยนสถานะจาก "รอ" เป็น "กำลังให้บริการ" หรือ "เสร็จสิ้น"
        ซึ่งสามารถสร้างเป็น LIFF App อีกตัวสำหรับ Admin ได้
      </div>

      <h3>ขั้นตอนที่ 3: Admin Panel (Node.js API)</h3>
      <p>สร้าง API สำหรับ Admin จัดการสถานะคิว และส่ง Push Message แจ้งผู้จอง:</p>

<pre><code class="language-javascript">// admin-api.js (Node.js Express)
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const app = express();

app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

// อัปเดตสถานะคิว
app.put('/api/admin/bookings/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // อัปเดตสถานะ
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    // ส่ง Push Message แจ้งผู้จอง
    let notifyMessage = '';
    if (status === 'in-progress') {
      notifyMessage = '🔔 ถึงคิวของคุณแล้ว! คิวที่ ' + booking.queue_number +
        '\\nบริการ: ' + booking.service_name +
        '\\nกรุณามาที่เคาน์เตอร์';
    } else if (status === 'completed') {
      notifyMessage = '✅ บริการเสร็จสิ้น! คิวที่ ' + booking.queue_number +
        '\\nขอบคุณที่ใช้บริการครับ/ค่ะ 🙏';
    }

    if (notifyMessage && booking.line_user_id) {
      await axios.post('https://api.line.me/v2/bot/message/push', {
        to: booking.line_user_id,
        messages: [{ type: 'text', text: notifyMessage }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
        }
      });
    }

    res.json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ดึงคิวทั้งหมดของวัน
app.get('/api/admin/bookings/today', async (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('booking_date', today)
    .neq('status', 'cancelled')
    .order('queue_number', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// สถิติ
app.get('/api/admin/stats', async (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  const { data: todayBookings } = await supabase
    .from('bookings').select('status')
    .eq('booking_date', today).neq('status', 'cancelled');

  const stats = {
    total: todayBookings?.length || 0,
    waiting: todayBookings?.filter(b => b.status === 'waiting').length || 0,
    inProgress: todayBookings?.filter(b => b.status === 'in-progress').length || 0,
    completed: todayBookings?.filter(b => b.status === 'completed').length || 0
  };

  res.json(stats);
});

app.listen(3001, () => console.log('Admin API running on port 3001'));</code></pre>

      <div class='warning-box'>
        <strong>⚠️ Warning:</strong> การส่ง Push Message ต้องใช้ Messaging API Channel Access Token
        และผู้ใช้ต้อง Add เพื่อน (Follow) OA ของคุณก่อน ถึงจะส่ง Push Message ได้
        ถ้ายังไม่ได้ Follow จะเกิด Error 400
      </div>

      <h3>🚀 การ Deploy ระบบจองคิว</h3>
      <div class='step'><span class='step-number'>1</span> <strong>Frontend (LIFF App)</strong> — Deploy HTML ไปยัง Vercel, Netlify หรือ GitHub Pages</div>
      <div class='step'><span class='step-number'>2</span> <strong>Database</strong> — ใช้ Supabase (มี Free tier)</div>
      <div class='step'><span class='step-number'>3</span> <strong>Admin API</strong> — Deploy Node.js ไปยัง Railway, Render หรือ Vercel Functions</div>
      <div class='step'><span class='step-number'>4</span> <strong>LIFF Settings</strong> — ตั้ง Endpoint URL ใน LINE Developers Console ให้ชี้ไปยัง Frontend ที่ Deploy</div>

      <h3>🔧 ฟีเจอร์เพิ่มเติมที่แนะนำ</h3>
      <ul>
        <li><strong>ระบบยกเลิกคิว</strong> — ให้ผู้ใช้สามารถยกเลิกคิวของตัวเองได้</li>
        <li><strong>แจ้งเตือนก่อนถึงคิว</strong> — ส่ง Push Message เมื่อเหลืออีก 2-3 คิว</li>
        <li><strong>ประวัติการใช้บริการ</strong> — แสดงประวัติการจองที่ผ่านมา</li>
        <li><strong>ระบบรีวิว</strong> — ให้ผู้ใช้ให้คะแนนหลังใช้บริการ</li>
        <li><strong>Rich Menu สำหรับจองคิว</strong> — เพิ่มปุ่มจองคิวใน Rich Menu ของ LINE OA</li>
        <li><strong>Dashboard สำหรับเจ้าของร้าน</strong> — แสดงสถิติ ยอดจอง ความพึงพอใจ</li>
      </ul>

      <h3>📌 สรุปคอร์ส LIFF Builder</h3>
      <p>
        ยินดีด้วย! 🎉 คุณได้เรียนจบคอร์ส LIFF Builder ทั้ง 8 บทแล้ว
        ตอนนี้คุณมีความรู้และทักษะในการสร้าง LIFF App ที่ใช้งานจริงได้ ไม่ว่าจะเป็น:
      </p>
      <ul>
        <li>✅ เข้าใจ LIFF Architecture และ API ทั้งหมด</li>
        <li>✅ สร้าง LIFF App และ Deploy ได้</li>
        <li>✅ ใช้ LIFF SDK (getProfile, sendMessages, shareTargetPicker ฯลฯ)</li>
        <li>✅ สร้างฟอร์มลงทะเบียนพร้อม Validation</li>
        <li>✅ เชื่อมต่อ Database ด้วย Supabase</li>
        <li>✅ ทำ LINE Login ด้วย OAuth 2.0</li>
        <li>✅ แชร์ Flex Message ให้เพื่อนและกลุ่ม</li>
        <li>✅ สร้างระบบจองคิวเต็มรูปแบบ</li>
      </ul>

      <div class='tip-box'>
        <strong>💡 Tip:</strong> ลองนำโปรเจกต์จองคิวนี้ไปพัฒนาต่อ ปรับแต่งให้เข้ากับธุรกิจของคุณ
        ไม่ว่าจะเป็นร้านอาหาร คลินิก ร้านตัดผม หรืออื่น ๆ ระบบนี้สามารถปรับใช้ได้หลากหลาย!
      </div>
    `
  }
];
