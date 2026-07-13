export const chapters = [
  {
    number: 1,
    slug: 'gas-intro',
    emoji: '📜',
    title: 'Google Apps Script คืออะไร?',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/gas-intro.webp" alt="Google Apps Script Introduction" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🌟 Google Apps Script คืออะไร?</h2>
          <p>Google Apps Script (GAS) คือแพลตฟอร์ม Scripting ของ Google ที่ให้เราเขียนโค้ด JavaScript เพื่อเชื่อมต่อและทำงานอัตโนมัติกับบริการต่าง ๆ ของ Google เช่น Sheets, Forms, Calendar, Gmail และอื่น ๆ ได้ทั้งหมด — <strong>ฟรี! ไม่ต้องมี Server</strong></p>
        </div>

        <div class="highlight-box">
          <h3>✅ ทำไมต้องใช้ GAS กับ LINE Bot?</h3>
          <ul>
            <li>🆓 <strong>ฟรี 100%</strong> — ไม่ต้องเช่า Server, ไม่ต้องจ่ายค่า Hosting</li>
            <li>☁️ <strong>รันบน Cloud</strong> — ทำงาน 24 ชม. โดยไม่ต้องเปิดคอมทิ้งไว้</li>
            <li>🔗 <strong>เชื่อมต่อ Google Services</strong> — Sheets, Forms, Calendar, Drive ได้ทันที</li>
            <li>⏰ <strong>ตั้ง Trigger ได้</strong> — สั่งให้ทำงานอัตโนมัติทุกชั่วโมง ทุกวัน</li>
            <li>📡 <strong>Deploy เป็น Web App</strong> — รับ Webhook จาก LINE ได้เลย</li>
          </ul>
        </div>

        <h3>📝 สร้างโปรเจกต์ GAS แรกของคุณ</h3>
        <div class="step-list">
          <div class="step">
            <span class="step-number">1</span>
            <p>เปิด <a href="https://script.google.com" target="_blank">script.google.com</a></p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>คลิก <strong>"โปรเจกต์ใหม่"</strong></p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>ตั้งชื่อโปรเจกต์ เช่น "LINE Bot Project"</p>
          </div>
        </div>

        <h3>💻 ทดลองเขียนโค้ดแรก</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>// ฟังก์ชันแรกของเรา — ทดสอบ Logger
function myFirstFunction() {
  // แสดงข้อความใน Log
  Logger.log("สวัสดี Google Apps Script! 🎉");
  
  // ดึงวันที่ปัจจุบัน
  const now = new Date();
  Logger.log("วันที่: " + now.toLocaleDateString("th-TH"));
  
  // ดึงชื่อ User ที่กำลังรัน
  const email = Session.getActiveUser().getEmail();
  Logger.log("ผู้ใช้: " + email);
}

// ฟังก์ชันสำหรับรับ HTTP GET Request
function doGet(e) {
  return ContentService
    .createTextOutput("Hello from GAS!")
    .setMimeType(ContentService.MimeType.TEXT);
}

// ฟังก์ชันสำหรับรับ HTTP POST Request (Webhook)
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  Logger.log("ได้รับข้อมูล: " + JSON.stringify(data));
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 วิธี Deploy เป็น Web App</h4>
          <ol>
            <li>คลิก <strong>ทำให้ใช้งานได้ > การทำให้ใช้งานได้แบบใหม่</strong></li>
            <li>เลือกประเภท: <strong>เว็บแอป</strong></li>
            <li>ตั้งค่าการเข้าถึง: <strong>ทุกคน</strong></li>
            <li>คลิก <strong>"ทำให้ใช้งานได้"</strong> แล้วคัดลอก URL</li>
          </ol>
          <p>URL ที่ได้จะใช้เป็น <strong>Webhook URL</strong> สำหรับ LINE Bot ได้เลย!</p>
        </div>
      </div>
    `
  },
  {
    number: 2,
    slug: 'line-gas-connect',
    emoji: '🔗',
    title: 'เชื่อม LINE API กับ GAS',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/line-gas-connect.webp" alt="Connect LINE API with GAS" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🔗 เชื่อม LINE Messaging API กับ Google Apps Script</h2>
          <p>ในบทนี้เราจะเรียนรู้วิธีเชื่อมต่อ LINE Bot กับ Google Apps Script เพื่อรับข้อความจากผู้ใช้ และตอบกลับอัตโนมัติ โดยใช้ <strong>Webhook</strong> และ <strong>Reply API</strong></p>
        </div>

        <h3>📋 สิ่งที่ต้องเตรียม</h3>
        <div class="highlight-box">
          <ul>
            <li>🔑 LINE Channel Access Token (จาก LINE Developers Console)</li>
            <li>📡 GAS Web App URL (จากบทที่ 1)</li>
            <li>📱 LINE Official Account ที่เปิด Messaging API แล้ว</li>
          </ul>
        </div>

        <h3>💻 โค้ด Webhook รับข้อความจาก LINE</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Webhook Handler</div>
          <pre><code>// === ตั้งค่า ===
const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";
const LINE_REPLY_URL = "https://api.line.me/v2/bot/message/reply";

// === รับ Webhook จาก LINE ===
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const events = body.events;
    
    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const userMessage = event.message.text;
        const replyToken = event.replyToken;
        const userId = event.source.userId;
        
        Logger.log("ข้อความจาก " + userId + ": " + userMessage);
        
        // ตอบกลับอัตโนมัติ
        replyMessage(replyToken, "ได้รับข้อความแล้ว: " + userMessage);
      }
    }
  } catch (err) {
    Logger.log("Error: " + err.message);
  }
  
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// === ฟังก์ชันตอบกลับข้อความ ===
function replyMessage(replyToken, text) {
  const payload = {
    replyToken: replyToken,
    messages: [
      {
        type: "text",
        text: text
      }
    ]
  };
  
  UrlFetchApp.fetch(LINE_REPLY_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify(payload)
  });
}

// === ฟังก์ชัน Push Message (ส่งข้อความหาคนที่ต้องการ) ===
function pushMessage(userId, text) {
  const url = "https://api.line.me/v2/bot/message/push";
  
  UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: userId,
      messages: [{ type: "text", text: text }]
    })
  });
}</code></pre>
        </div>

        <div class="step-list">
          <h3>🔧 ขั้นตอนการเชื่อมต่อ</h3>
          <div class="step">
            <span class="step-number">1</span>
            <p>Deploy GAS เป็น Web App แล้วคัดลอก URL</p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>ไปที่ LINE Developers Console → Messaging API</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>วาง URL ลงในช่อง <strong>Webhook URL</strong></p>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <p>คลิก <strong>Verify</strong> — ถ้าขึ้น Success แสดงว่าเชื่อมต่อสำเร็จ!</p>
          </div>
          <div class="step">
            <span class="step-number">5</span>
            <p>เปิด <strong>Use webhook</strong> ให้เป็น ON</p>
          </div>
        </div>

        <div class="tip-box">
          <h4>⚠️ สิ่งที่ต้องระวัง</h4>
          <ul>
            <li>ทุกครั้งที่แก้โค้ด ต้อง Deploy ใหม่ (New deployment)</li>
            <li>อย่าลืมเปลี่ยน LINE_TOKEN เป็นค่าจริงของคุณ</li>
            <li>Reply Token ใช้ได้แค่ครั้งเดียว และมีอายุ 1 นาที</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 3,
    slug: 'sheets-stock-alert',
    emoji: '📊',
    title: 'Sheets → LINE: แจ้งเตือนสต็อก',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/sheets-stock-alert.webp" alt="Stock Alert from Sheets" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>📊 ระบบแจ้งเตือนสต็อกสินค้าใกล้หมด</h2>
          <p>สร้างระบบตรวจสอบสต็อกสินค้าจาก Google Sheets อัตโนมัติ เมื่อสินค้าใดมีจำนวนน้อยกว่าที่กำหนด ระบบจะส่งแจ้งเตือนไปยัง LINE Group ทันที!</p>
        </div>

        <h3>📋 โครงสร้าง Google Sheets</h3>
        <div class="highlight-box">
          <table class="data-table">
            <tr><th>A: รหัสสินค้า</th><th>B: ชื่อสินค้า</th><th>C: สต็อกคงเหลือ</th><th>D: จุดสั่งซื้อ (Min)</th></tr>
            <tr><td>P001</td><td>เสื้อยืดสีดำ</td><td>5</td><td>10</td></tr>
            <tr><td>P002</td><td>กางเกงยีนส์</td><td>15</td><td>10</td></tr>
            <tr><td>P003</td><td>หมวกแก๊ป</td><td>2</td><td>5</td></tr>
          </table>
        </div>

        <h3>💻 โค้ดตรวจสอบสต็อกและแจ้งเตือน LINE</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";
const GROUP_ID = "YOUR_LINE_GROUP_ID";

// === ฟังก์ชันหลัก: ตรวจสอบสต็อก ===
function checkStock() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สต็อก");
  const data = sheet.getDataRange().getValues();
  const lowStockItems = [];
  
  // เริ่มจาก row 1 (ข้าม header)
  for (let i = 1; i < data.length; i++) {
    const [code, name, stock, minStock] = data[i];
    
    if (stock <= minStock) {
      lowStockItems.push({
        code: code,
        name: name,
        stock: stock,
        min: minStock
      });
    }
  }
  
  // ถ้ามีสินค้าสต็อกต่ำ → ส่งแจ้งเตือน
  if (lowStockItems.length > 0) {
    const message = buildStockAlertMessage(lowStockItems);
    sendLineNotify(GROUP_ID, message);
    Logger.log("ส่งแจ้งเตือนสำเร็จ: " + lowStockItems.length + " รายการ");
  } else {
    Logger.log("สต็อกทุกรายการปกติ ✅");
  }
}

// === สร้างข้อความแจ้งเตือน ===
function buildStockAlertMessage(items) {
  let msg = "🚨 แจ้งเตือนสต็อกใกล้หมด!\n";
  msg += "━━━━━━━━━━━━━━━\n";
  msg += "📅 " + Utilities.formatDate(new Date(), "Asia/Bangkok", "dd/MM/yyyy HH:mm") + "\n\n";
  
  items.forEach((item, idx) => {
    msg += (idx + 1) + ". " + item.name + "\n";
    msg += "   รหัส: " + item.code + "\n";
    msg += "   คงเหลือ: " + item.stock + " ชิ้น ⚠️\n";
    msg += "   ขั้นต่ำ: " + item.min + " ชิ้น\n\n";
  });
  
  msg += "━━━━━━━━━━━━━━━\n";
  msg += "📦 กรุณาสั่งซื้อเพิ่มด่วน!";
  
  return msg;
}

// === ส่งข้อความไปยัง LINE Group ===
function sendLineNotify(groupId, text) {
  const url = "https://api.line.me/v2/bot/message/push";
  
  UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: groupId,
      messages: [{ type: "text", text: text }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>⏰ ตั้ง Trigger ให้ตรวจสอบอัตโนมัติ</h4>
          <p>ไปที่เมนู <strong>ทริกเกอร์ (นาฬิกา)</strong> → เพิ่มทริกเกอร์:</p>
          <ul>
            <li>เลือกฟังก์ชัน: <code>checkStock</code></li>
            <li>ประเภท: <strong>ตามเวลา</strong></li>
            <li>ความถี่: <strong>ทุก 1 ชั่วโมง</strong> หรือ <strong>ทุกวัน เวลา 08:00</strong></li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 4,
    slug: 'sheets-daily-sales',
    emoji: '💰',
    title: 'Sheets → LINE: รายงานยอดขายประจำวัน',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/sheets-daily-sales.webp" alt="Daily Sales Report" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>💰 ระบบรายงานยอดขายประจำวันอัตโนมัติ</h2>
          <p>สร้างระบบที่ดึงข้อมูลยอดขายจาก Google Sheets แล้วสรุปเป็นรายงานส่งเข้า LINE Group ทุกวันตอน 20:00 น. อัตโนมัติ ช่วยให้ทีมงานติดตามยอดขายได้ทุกวัน!</p>
        </div>

        <h3>📋 โครงสร้างข้อมูลยอดขาย</h3>
        <div class="highlight-box">
          <table class="data-table">
            <tr><th>A: วันที่</th><th>B: ออเดอร์</th><th>C: สินค้า</th><th>D: จำนวน</th><th>E: ราคารวม</th><th>F: ช่องทาง</th></tr>
            <tr><td>24/06/2025</td><td>ORD-001</td><td>เสื้อยืด</td><td>2</td><td>590</td><td>LINE</td></tr>
            <tr><td>24/06/2025</td><td>ORD-002</td><td>กางเกง</td><td>1</td><td>890</td><td>Shopee</td></tr>
          </table>
        </div>

        <h3>💻 โค้ดสรุปยอดขายและส่ง LINE</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";
const GROUP_ID = "YOUR_LINE_GROUP_ID";

// === รายงานยอดขายประจำวัน ===
function dailySalesReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ยอดขาย");
  const data = sheet.getDataRange().getValues();
  
  // วันที่ปัจจุบัน (format เดียวกับใน Sheet)
  const today = Utilities.formatDate(new Date(), "Asia/Bangkok", "dd/MM/yyyy");
  
  let totalSales = 0;
  let totalOrders = 0;
  let totalItems = 0;
  const channelSales = {};
  const productSales = {};
  
  // กรองเฉพาะรายการวันนี้
  for (let i = 1; i < data.length; i++) {
    const [date, orderId, product, qty, price, channel] = data[i];
    const dateStr = Utilities.formatDate(new Date(date), "Asia/Bangkok", "dd/MM/yyyy");
    
    if (dateStr === today) {
      totalSales += price;
      totalOrders++;
      totalItems += qty;
      
      // สรุปตามช่องทาง
      channelSales[channel] = (channelSales[channel] || 0) + price;
      
      // สรุปตามสินค้า
      productSales[product] = (productSales[product] || 0) + qty;
    }
  }
  
  // สร้างรายงาน
  let report = "📊 สรุปยอดขายประจำวัน\n";
  report += "📅 " + today + "\n";
  report += "━━━━━━━━━━━━━━━\n\n";
  report += "💰 ยอดขายรวม: ฿" + totalSales.toLocaleString() + "\n";
  report += "📦 จำนวนออเดอร์: " + totalOrders + " รายการ\n";
  report += "🛍️ สินค้าขายได้: " + totalItems + " ชิ้น\n\n";
  
  // สรุปตามช่องทาง
  report += "📱 แยกตามช่องทาง:\n";
  for (const [ch, amount] of Object.entries(channelSales)) {
    report += "  • " + ch + ": ฿" + amount.toLocaleString() + "\n";
  }
  
  report += "\n🏆 สินค้าขายดี:\n";
  const sorted = Object.entries(productSales).sort((a, b) => b[1] - a[1]);
  sorted.slice(0, 5).forEach(([name, qty], idx) => {
    report += "  " + (idx + 1) + ". " + name + " — " + qty + " ชิ้น\n";
  });
  
  report += "\n━━━━━━━━━━━━━━━\n";
  report += "🤖 รายงานอัตโนมัติจากระบบ";
  
  // ส่งไป LINE
  sendToLine(GROUP_ID, report);
  Logger.log("ส่งรายงานยอดขายสำเร็จ ✅");
}

// === ส่งข้อความ ===
function sendToLine(to, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: to,
      messages: [{ type: "text", text: text }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>⏰ ตั้ง Trigger รายงานทุกวัน</h4>
          <p>ตั้งทริกเกอร์ให้ฟังก์ชัน <code>dailySalesReport</code> ทำงานทุกวัน เวลา 20:00-21:00 น.</p>
          <p>ทีมงานจะได้รับสรุปยอดขายเข้า LINE Group ทุกเย็นอัตโนมัติ!</p>
        </div>
      </div>
    `
  },
  {
    number: 5,
    slug: 'forms-to-line',
    emoji: '📝',
    title: 'Forms → LINE: ส่งคำตอบเข้า LINE ทันที',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/forms-to-line.webp" alt="Google Forms to LINE" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>📝 ส่งคำตอบจาก Google Forms เข้า LINE ทันที</h2>
          <p>เมื่อมีคนกรอกแบบฟอร์ม (เช่น สั่งซื้อสินค้า, สมัครสมาชิก, ลงทะเบียน) ระบบจะส่งข้อมูลเข้า LINE Group ทันที ไม่ต้องคอยเปิดดูใน Google Forms!</p>
        </div>

        <h3>🔧 วิธีตั้งค่า</h3>
        <div class="step-list">
          <div class="step">
            <span class="step-number">1</span>
            <p>สร้าง Google Form สำหรับรับออเดอร์/ลงทะเบียน</p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>เปิด Script Editor จาก Form (เมนู ⋮ → Script editor)</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>วางโค้ดด้านล่าง แล้วตั้ง Trigger แบบ <strong>On form submit</strong></p>
          </div>
        </div>

        <h3>💻 โค้ดส่งคำตอบจาก Form ไป LINE</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Form Submit Trigger</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";
const GROUP_ID = "YOUR_LINE_GROUP_ID";

// === Trigger: เมื่อมีคนส่งฟอร์ม ===
function onFormSubmit(e) {
  try {
    const responses = e.response.getItemResponses();
    const timestamp = e.response.getTimestamp();
    
    // ดึงคำตอบทั้งหมด
    let formData = {};
    responses.forEach(item => {
      const question = item.getItem().getTitle();
      const answer = item.getResponse();
      formData[question] = answer;
    });
    
    // สร้างข้อความแจ้งเตือน
    let msg = "📬 มีคำสั่งซื้อใหม่!\n";
    msg += "━━━━━━━━━━━━━━━\n";
    msg += "🕐 " + Utilities.formatDate(timestamp, "Asia/Bangkok", "dd/MM/yyyy HH:mm") + "\n\n";
    
    // แสดงคำตอบทั้งหมด
    for (const [question, answer] of Object.entries(formData)) {
      msg += "📌 " + question + "\n";
      msg += "   → " + answer + "\n\n";
    }
    
    msg += "━━━━━━━━━━━━━━━\n";
    msg += "✅ กรุณาตรวจสอบและดำเนินการ";
    
    // ส่งไป LINE
    pushToLine(GROUP_ID, msg);
    
  } catch (err) {
    Logger.log("Error: " + err.message);
  }
}

// === ส่งข้อความ ===
function pushToLine(to, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: to,
      messages: [{ type: "text", text: text }]
    })
  });
}

// === ตั้ง Trigger อัตโนมัติ ===
function createFormTrigger() {
  const form = FormApp.getActiveForm();
  ScriptApp.newTrigger("onFormSubmit")
    .forForm(form)
    .onFormSubmit()
    .create();
  Logger.log("สร้าง Trigger สำเร็จ ✅");
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ใช้กับอะไรได้บ้าง?</h4>
          <ul>
            <li>📦 ฟอร์มสั่งซื้อสินค้า → แจ้งเตือนทีมแพ็คของ</li>
            <li>📋 ฟอร์มลงทะเบียน → แจ้งทีม HR</li>
            <li>🐛 ฟอร์มแจ้งปัญหา → แจ้งทีม IT</li>
            <li>⭐ ฟอร์มรีวิว → แจ้งเจ้าของร้าน</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 6,
    slug: 'calendar-summary',
    emoji: '📅',
    title: 'Calendar → LINE: สรุปกิจกรรมวันนี้',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/calendar-summary.webp" alt="Calendar to LINE Summary" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>📅 ส่งสรุปกิจกรรมวันนี้จาก Google Calendar เข้า LINE</h2>
          <p>สร้างระบบที่ดึงนัดหมาย / กิจกรรมวันนี้จาก Google Calendar แล้วส่งสรุปเข้า LINE ทุกเช้า เหมาะสำหรับทีมงาน แผนก หรือกลุ่มธุรกิจ</p>
        </div>

        <h3>💻 โค้ดสรุปกิจกรรมวันนี้</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";
const GROUP_ID = "YOUR_LINE_GROUP_ID";

// === สรุปกิจกรรมวันนี้ ===
function sendTodayEvents() {
  const calendar = CalendarApp.getDefaultCalendar();
  const today = new Date();
  const events = calendar.getEventsForDay(today);
  
  let msg = "📅 กิจกรรมวันนี้\n";
  msg += "━━━━━━━━━━━━━━━\n";
  msg += "📆 " + Utilities.formatDate(today, "Asia/Bangkok", "EEEE dd MMMM yyyy") + "\n\n";
  
  if (events.length === 0) {
    msg += "✨ วันนี้ไม่มีนัดหมาย — มีเวลาว่างเต็มวัน!\n";
  } else {
    events.forEach((event, idx) => {
      const start = event.getStartTime();
      const end = event.getEndTime();
      const title = event.getTitle();
      const location = event.getLocation();
      
      const startStr = Utilities.formatDate(start, "Asia/Bangkok", "HH:mm");
      const endStr = Utilities.formatDate(end, "Asia/Bangkok", "HH:mm");
      
      msg += "🔹 " + (idx + 1) + ". " + title + "\n";
      msg += "   ⏰ " + startStr + " - " + endStr + "\n";
      
      if (location) {
        msg += "   📍 " + location + "\n";
      }
      
      const desc = event.getDescription();
      if (desc) {
        msg += "   📝 " + desc.substring(0, 50) + "\n";
      }
      
      msg += "\n";
    });
    
    msg += "📊 รวม " + events.length + " กิจกรรม";
  }
  
  msg += "\n━━━━━━━━━━━━━━━\n";
  msg += "🤖 สรุปอัตโนมัติจาก Google Calendar";
  
  pushToLine(GROUP_ID, msg);
  Logger.log("ส่งสรุปกิจกรรมสำเร็จ ✅");
}

// === ดึงกิจกรรมจากหลาย Calendar ===
function sendMultiCalendarSummary() {
  const calendarIds = [
    "primary",
    "team-meeting@group.calendar.google.com",
    "holidays@group.calendar.google.com"
  ];
  
  const today = new Date();
  let allEvents = [];
  
  calendarIds.forEach(calId => {
    try {
      const cal = CalendarApp.getCalendarById(calId);
      if (cal) {
        const events = cal.getEventsForDay(today);
        events.forEach(ev => {
          allEvents.push({
            calendar: cal.getName(),
            title: ev.getTitle(),
            start: ev.getStartTime(),
            end: ev.getEndTime()
          });
        });
      }
    } catch (e) {
      Logger.log("ไม่สามารถเข้าถึง: " + calId);
    }
  });
  
  // เรียงตามเวลา
  allEvents.sort((a, b) => a.start - b.start);
  
  let msg = "📅 สรุปกิจกรรมวันนี้ (ทุก Calendar)\n━━━━━━━━━━━━━━━\n\n";
  
  allEvents.forEach((ev, idx) => {
    const startStr = Utilities.formatDate(ev.start, "Asia/Bangkok", "HH:mm");
    msg += (idx + 1) + ". [" + ev.calendar + "] " + ev.title + " (" + startStr + ")\n";
  });
  
  pushToLine(GROUP_ID, msg);
}

function pushToLine(to, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: to,
      messages: [{ type: "text", text: text }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>⏰ แนะนำตั้ง Trigger ทุกเช้า 07:00</h4>
          <p>ตั้งฟังก์ชัน <code>sendTodayEvents</code> ให้ทำงานทุกวัน เวลา 07:00-08:00 น. ทีมงานจะได้รู้กิจกรรมวันนี้ตั้งแต่เช้า!</p>
        </div>
      </div>
    `
  },
  {
    number: 7,
    slug: 'multi-group-send',
    emoji: '📨',
    title: 'ส่งข้อความไปหลายกลุ่ม LINE',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/multi-group-send.webp" alt="Send to Multiple LINE Groups" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>📨 ส่งข้อความไปหลายกลุ่ม LINE พร้อมกัน</h2>
          <p>เรียนรู้วิธี Broadcast ข้อความไปหลาย ๆ กลุ่ม LINE พร้อมกัน เหมาะสำหรับร้านค้าที่มีหลายสาขา หรือองค์กรที่มีหลายแผนก ต้องการประกาศข่าวพร้อมกัน</p>
        </div>

        <h3>💻 โค้ดส่งข้อความหลายกลุ่ม</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

// === รายชื่อกลุ่ม LINE (เก็บไว้ใน Sheet หรือกำหนดตรงนี้) ===
function getGroupIds() {
  // วิธีที่ 1: กำหนดตรง ๆ
  // return ["GROUP_ID_1", "GROUP_ID_2", "GROUP_ID_3"];
  
  // วิธีที่ 2: ดึงจาก Google Sheets
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("กลุ่ม LINE");
  const data = sheet.getRange("A2:B" + sheet.getLastRow()).getValues();
  
  return data.map(row => ({
    name: row[0],   // ชื่อกลุ่ม
    groupId: row[1]  // Group ID
  }));
}

// === ส่งข้อความเดียวกันไปทุกกลุ่ม ===
function broadcastToAllGroups() {
  const groups = getGroupIds();
  const message = "📢 ประกาศจากร้าน\\n\\n"
    + "🎉 โปรโมชั่นพิเศษ! ลด 20% ทุกรายการ\\n"
    + "📅 วันนี้ - 30 มิ.ย. 2025\\n"
    + "🛒 สั่งซื้อผ่าน LINE ได้เลย!";
  
  let successCount = 0;
  let failCount = 0;
  const results = [];
  
  groups.forEach(group => {
    try {
      pushMessage(group.groupId, message);
      successCount++;
      results.push("✅ " + group.name);
      
      // หน่วงเวลาเล็กน้อยเพื่อไม่ให้ถูก Rate Limit
      Utilities.sleep(100);
    } catch (err) {
      failCount++;
      results.push("❌ " + group.name + ": " + err.message);
    }
  });
  
  // สรุปผลการส่ง (log)
  Logger.log("ส่งสำเร็จ: " + successCount + " กลุ่ม");
  Logger.log("ส่งไม่สำเร็จ: " + failCount + " กลุ่ม");
  Logger.log(results.join("\\n"));
}

// === ส่งข้อความแบบเลือกกลุ่ม (ใช้ Multicast API) ===
function multicastMessage() {
  const userIds = [
    "USER_ID_1",
    "USER_ID_2",
    "USER_ID_3"
  ];
  
  const url = "https://api.line.me/v2/bot/message/multicast";
  
  UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: userIds,  // ส่งได้สูงสุด 500 คนต่อครั้ง
      messages: [{
        type: "text",
        text: "📢 ข้อความถึงสมาชิกทุกท่าน!"
      }]
    })
  });
}

// === Broadcast API (ส่งถึงทุกคนที่เพิ่มเพื่อน) ===
function broadcastAll() {
  const url = "https://api.line.me/v2/bot/message/broadcast";
  
  UrlFetchApp.fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      messages: [{
        type: "text",
        text: "📢 ข้อความถึงเพื่อนทุกคนของ Bot!"
      }]
    })
  });
}

function pushMessage(to, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: to,
      messages: [{ type: "text", text: text }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>📌 เปรียบเทียบ API การส่งข้อความ</h4>
          <table class="data-table">
            <tr><th>API</th><th>ใช้งาน</th><th>ค่าใช้จ่าย</th></tr>
            <tr><td>Push</td><td>ส่งหา 1 คน/กลุ่ม</td><td>นับ 1 ข้อความ</td></tr>
            <tr><td>Multicast</td><td>ส่งหาหลายคน (สูงสุด 500)</td><td>นับตามจำนวนคน</td></tr>
            <tr><td>Broadcast</td><td>ส่งหาเพื่อนทุกคน</td><td>นับตามจำนวนเพื่อน</td></tr>
          </table>
        </div>
      </div>
    `
  },
  {
    number: 8,
    slug: 'workshop-full-flow',
    emoji: '🏗️',
    title: 'Workshop: ระบบแจ้งเตือนครบ flow',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/workshop-full-flow.webp" alt="Full Flow Workshop" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🏗️ Workshop: สร้างระบบแจ้งเตือนครบ Flow</h2>
          <p>รวมทุกอย่างที่เรียนมาสร้างเป็นระบบจัดการร้านค้าที่สมบูรณ์! ตั้งแต่รับออเดอร์จาก Form → บันทึกลง Sheets → แจ้งเตือนทีมผ่าน LINE → รายงานยอดขายทุกวัน</p>
        </div>

        <div class="highlight-box">
          <h3>🔄 Flow ทั้งระบบ</h3>
          <ol>
            <li>📝 ลูกค้ากรอก Google Form สั่งซื้อ</li>
            <li>📊 ข้อมูลถูกบันทึกลง Google Sheets อัตโนมัติ</li>
            <li>📱 ส่งแจ้งเตือนไปยัง LINE Group ทีมแพ็คของ</li>
            <li>✅ ทีมอัปเดตสถานะใน Sheets</li>
            <li>📅 ระบบส่งสรุปยอดขายทุกวัน 20:00 น.</li>
            <li>🚨 ระบบตรวจสอบสต็อกทุก ๆ ชั่วโมง</li>
          </ol>
        </div>

        <h3>💻 โค้ดระบบเต็ม</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Full System</div>
          <pre><code>// ============================================
// ⚙️ CONFIG
// ============================================
const CONFIG = {
  LINE_TOKEN: "YOUR_CHANNEL_ACCESS_TOKEN",
  GROUP_PACKING: "GROUP_ID_PACKING_TEAM",
  GROUP_SALES: "GROUP_ID_SALES_TEAM",
  GROUP_MANAGEMENT: "GROUP_ID_MANAGEMENT",
  SHEET_ORDERS: "ออเดอร์",
  SHEET_STOCK: "สต็อก"
};

// ============================================
// 📝 1. รับออเดอร์จาก Google Form
// ============================================
function onOrderFormSubmit(e) {
  const responses = e.response.getItemResponses();
  const data = {};
  
  responses.forEach(item => {
    data[item.getItem().getTitle()] = item.getResponse();
  });
  
  // บันทึกลง Sheet ออเดอร์
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEET_ORDERS);
  
  const orderId = "ORD-" + Date.now();
  const timestamp = Utilities.formatDate(
    new Date(), "Asia/Bangkok", "dd/MM/yyyy HH:mm"
  );
  
  sheet.appendRow([
    orderId,
    timestamp,
    data["ชื่อลูกค้า"],
    data["สินค้า"],
    data["จำนวน"],
    data["ที่อยู่จัดส่ง"],
    data["เบอร์โทร"],
    "รอแพ็ค"  // สถานะเริ่มต้น
  ]);
  
  // แจ้งเตือนทีมแพ็คของ
  let msg = "📦 ออเดอร์ใหม่!\n";
  msg += "━━━━━━━━━━━━━━━\n";
  msg += "🔖 " + orderId + "\n";
  msg += "👤 " + data["ชื่อลูกค้า"] + "\n";
  msg += "🛍️ " + data["สินค้า"] + " x " + data["จำนวน"] + "\n";
  msg += "📍 " + data["ที่อยู่จัดส่ง"] + "\n";
  msg += "📞 " + data["เบอร์โทร"] + "\n";
  msg += "━━━━━━━━━━━━━━━\n";
  msg += "✅ กรุณาแพ็คและอัปเดตสถานะ";
  
  sendLine(CONFIG.GROUP_PACKING, msg);
  
  // ลดสต็อก
  updateStock(data["สินค้า"], parseInt(data["จำนวน"]));
}

// ============================================
// 📊 2. ตรวจสอบสต็อก
// ============================================
function updateStock(productName, qty) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEET_STOCK);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] === productName) {
      const newStock = data[i][2] - qty;
      sheet.getRange(i + 1, 3).setValue(newStock);
      
      // ถ้าสต็อกต่ำกว่า min → แจ้งเตือน
      if (newStock <= data[i][3]) {
        const alert = "🚨 สต็อกต่ำ!\n"
          + productName + " เหลือ " + newStock + " ชิ้น\n"
          + "กรุณาสั่งซื้อเพิ่ม!";
        sendLine(CONFIG.GROUP_MANAGEMENT, alert);
      }
      break;
    }
  }
}

// ============================================
// 💰 3. รายงานยอดขาย (ทุกวัน 20:00)
// ============================================
function dailyReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEET_ORDERS);
  const data = sheet.getDataRange().getValues();
  const today = Utilities.formatDate(new Date(), "Asia/Bangkok", "dd/MM/yyyy");
  
  let count = 0;
  let items = 0;
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][1] && data[i][1].startsWith(today)) {
      count++;
      items += parseInt(data[i][4]) || 0;
    }
  }
  
  let report = "📊 สรุปยอดขายวันนี้\n";
  report += "━━━━━━━━━━━━━━━\n";
  report += "📅 " + today + "\n";
  report += "📦 ออเดอร์: " + count + " รายการ\n";
  report += "🛍️ สินค้า: " + items + " ชิ้น\n";
  report += "━━━━━━━━━━━━━━━\n";
  report += "🤖 รายงานอัตโนมัติ";
  
  sendLine(CONFIG.GROUP_SALES, report);
  sendLine(CONFIG.GROUP_MANAGEMENT, report);
}

// ============================================
// 📡 LINE Messaging
// ============================================
function sendLine(to, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CONFIG.LINE_TOKEN
    },
    payload: JSON.stringify({
      to: to,
      messages: [{ type: "text", text: text }]
    })
  });
}

// ============================================
// ⏰ ตั้ง Triggers ทั้งหมด
// ============================================
function setupAllTriggers() {
  // ลบ Trigger เก่า
  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  
  // 1. Form Submit → แจ้งเตือนออเดอร์ใหม่
  const form = FormApp.getActiveForm();
  if (form) {
    ScriptApp.newTrigger("onOrderFormSubmit")
      .forForm(form)
      .onFormSubmit()
      .create();
  }
  
  // 2. รายงานยอดขายทุกวัน 20:00
  ScriptApp.newTrigger("dailyReport")
    .timeBased()
    .everyDays(1)
    .atHour(20)
    .create();
  
  // 3. ตรวจสต็อกทุกชั่วโมง
  ScriptApp.newTrigger("checkAllStock")
    .timeBased()
    .everyHours(1)
    .create();
  
  Logger.log("ตั้ง Triggers ทั้งหมดเรียบร้อย ✅");
}

function checkAllStock() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(CONFIG.SHEET_STOCK);
  const data = sheet.getDataRange().getValues();
  const lowItems = [];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] <= data[i][3]) {
      lowItems.push(data[i][1] + " (เหลือ " + data[i][2] + ")");
    }
  }
  
  if (lowItems.length > 0) {
    sendLine(CONFIG.GROUP_MANAGEMENT,
      "🚨 สต็อกต่ำ " + lowItems.length + " รายการ:\\n" + lowItems.join("\\n")
    );
  }
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>🎯 Checklist สำหรับ Workshop</h4>
          <ul>
            <li>☐ สร้าง Google Form สำหรับรับออเดอร์</li>
            <li>☐ สร้าง Sheet "ออเดอร์" และ "สต็อก"</li>
            <li>☐ ใส่ Channel Access Token และ Group IDs</li>
            <li>☐ รัน <code>setupAllTriggers()</code></li>
            <li>☐ ทดสอบกรอกฟอร์ม → ดูข้อความใน LINE</li>
            <li>☐ ทดสอบรายงานยอดขาย</li>
          </ul>
        </div>
      </div>
    `
  }
];
