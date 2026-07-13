export const chapters = [
  { number: 0, slug: 'overview', emoji: '🎯', title: 'ภาพรวม — 4 โปรเจคใช้งานจริง', content: `
<h2>🎯 LINE Bot Workshop — 4 โปรเจคจริง ใช้ได้เลย!</h2>
<p>คอร์สนี้รวม <strong>4 โปรเจคที่ใช้งานจริง</strong> ในธุรกิจไทย ไม่ใช่แค่ทฤษฎี แต่ทำตามได้ทันที!</p>

<h3>📋 4 โปรเจคที่จะทำ</h3>
<table>
  <tr><th>#</th><th>โปรเจค</th><th>ใช้งานจริง</th></tr>
  <tr><td>1</td><td>🔔 ระบบแจ้งเตือนแทน LINE Notify</td><td>แจ้งเตือนทีม, สต็อกหมด, ยอดขาย</td></tr>
  <tr><td>2</td><td>📊 Dashboard ข้อมูลเชิงลึก + Flex CRUD</td><td>ดูข้อมูล, เพิ่ม/ลด สต็อก, รายงาน</td></tr>
  <tr><td>3</td><td>📅 LINE Bot + Google Calendar</td><td>จองนัดหมาย, แจ้งเตือนก่อนนัด</td></tr>
  <tr><td>4</td><td>🎟️ ระบบจองคิว LINE OA</td><td>คลินิก, ร้านอาหาร, หน่วยงาน</td></tr>
</table>

<div class="tip-box">💡 ทุกโปรเจคมี <strong>โค้ดสำเร็จรูป</strong> ดาวน์โหลดไปใช้ได้เลย ปรับแต่งตามธุรกิจตัวเอง!</div>

<h3>🛠️ เครื่องมือที่ใช้</h3>
<ul>
  <li>✅ LINE Official Account (ฟรี)</li>
  <li>✅ LINE Messaging API</li>
  <li>✅ Google Apps Script (ฟรี)</li>
  <li>✅ Google Sheets / Calendar (ฟรี)</li>
  <li>✅ Flex Message Simulator</li>
</ul>

<div class="warning-box">⚠️ <strong>สำคัญ:</strong> LINE Notify ถูกยกเลิกแล้ว (มี.ค. 2025) ต้องย้ายมา Messaging API ทั้งหมด!</div>
` },
  { number: 1, slug: 'notify-replacement', emoji: '🔔', title: 'โปรเจค 1: ระบบแจ้งเตือนแทน LINE Notify', content: `
<h2>🔔 สร้างระบบแจ้งเตือนแทน LINE Notify</h2>

<p>LINE Notify ถูก<strong>ยกเลิกถาวร</strong>เมื่อ 31 มี.ค. 2025 แต่ไม่ต้องตกใจ! Messaging API ทำได้มากกว่า Notify หลายเท่า</p>

<h3>🔄 เปรียบเทียบ LINE Notify vs Messaging API</h3>
<table>
  <tr><th>ฟีเจอร์</th><th>LINE Notify ❌</th><th>Messaging API ✅</th></tr>
  <tr><td>สถานะ</td><td>ยกเลิกแล้ว!</td><td>ใช้งานได้ปกติ</td></tr>
  <tr><td>ส่งข้อความ</td><td>Text + Sticker + Image</td><td>Text + Image + Video + Flex + Template</td></tr>
  <tr><td>ส่งรายบุคคล</td><td>❌ ไม่ได้</td><td>✅ Push Message ถึงคนเดียวได้</td></tr>
  <tr><td>ส่งกลุ่ม</td><td>✅ ได้</td><td>✅ ได้ + เลือกกลุ่มเป้าหมาย</td></tr>
  <tr><td>รับข้อความกลับ</td><td>❌ ทางเดียว</td><td>✅ สองทาง (Reply + Push)</td></tr>
  <tr><td>Flex Message</td><td>❌</td><td>✅ ออกแบบ UI สวยๆ</td></tr>
  <tr><td>Rich Menu</td><td>❌</td><td>✅ เมนูถาวร</td></tr>
  <tr><td>ฟรี/เดือน</td><td>1,000 ข้อความ</td><td>500 Push (Reply ไม่จำกัด!)</td></tr>
</table>

<h3>📝 Step 1: สร้าง LINE OA + ตั้งค่า Messaging API</h3>
<ol>
  <li>เข้า <a href="https://manager.line.biz">LINE Official Account Manager</a></li>
  <li>สร้างบัญชี LINE OA ใหม่ (ฟรี)</li>
  <li>เข้า Settings → Messaging API → Enable</li>
  <li>จด <strong>Channel Access Token</strong> (Long-lived)</li>
  <li>จด <strong>User ID</strong> หรือ <strong>Group ID</strong> ที่จะส่ง</li>
</ol>

<h3>📝 Step 2: วิธีหา Group ID</h3>
<pre><code>// เพิ่ม Bot เข้ากลุ่ม แล้วพิมพ์อะไรก็ได้ในกลุ่ม
// Webhook จะได้รับ event ที่มี groupId

// ตั้ง Webhook URL ใน LINE Developers Console
// ใช้ Google Apps Script เป็น Webhook:

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  if (event.source.type === 'group') {
    const groupId = event.source.groupId;
    // บันทึก groupId ไว้ใช้ส่งข้อความ
    Logger.log('Group ID: ' + groupId);

    // ตอบกลับบอก groupId
    replyMessage(event.replyToken,
      '✅ Group ID: ' + groupId);
  }
}</code></pre>

<h3>📝 Step 3: สร้าง Function ส่งแจ้งเตือน (Google Apps Script)</h3>
<pre><code>// 🔑 ตั้งค่า Token
const LINE_TOKEN = 'YOUR_CHANNEL_ACCESS_TOKEN';
const GROUP_ID = 'YOUR_GROUP_ID';

// ✅ ส่งข้อความเข้ากลุ่ม (แทน LINE Notify!)
function sendToGroup(message) {
  const url = 'https://api.line.me/v2/bot/message/push';
  const payload = {
    to: GROUP_ID,
    messages: [{
      type: 'text',
      text: message
    }]
  };

  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { 'Authorization': 'Bearer ' + LINE_TOKEN },
    payload: JSON.stringify(payload)
  });
}

// ✅ ส่งถึงหลายกลุ่มพร้อมกัน
function sendToMultipleGroups(message) {
  const groupIds = [
    'GROUP_ID_1',  // กลุ่มทีมขาย
    'GROUP_ID_2',  // กลุ่ม Admin
    'GROUP_ID_3',  // กลุ่มคลังสินค้า
  ];

  groupIds.forEach(groupId => {
    const payload = {
      to: groupId,
      messages: [{ type: 'text', text: message }]
    };
    UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
      method: 'post',
      contentType: 'application/json',
      headers: { 'Authorization': 'Bearer ' + LINE_TOKEN },
      payload: JSON.stringify(payload)
    });
  });
}

// ✅ ส่งรายบุคคล (LINE Notify ทำไม่ได้!)
function sendToUser(userId, message) {
  const payload = {
    to: userId,
    messages: [{ type: 'text', text: message }]
  };
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    method: 'post',
    contentType: 'application/json',
    headers: { 'Authorization': 'Bearer ' + LINE_TOKEN },
    payload: JSON.stringify(payload)
  });
}</code></pre>

<h3>📝 Step 4: ตัวอย่างจริง — แจ้งเตือนสต็อกสินค้าหมด</h3>
<pre><code>// ดึงข้อมูลจาก Google Sheets แล้วแจ้งเตือน
function checkLowStock() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('สินค้า');
  const data = sheet.getDataRange().getValues();
  const header = data.shift(); // เอา header ออก

  const lowStock = data.filter(row => row[3] <= row[4]);
  // row[3] = จำนวนคงเหลือ, row[4] = จุดสั่งซื้อ

  if (lowStock.length === 0) return; // ไม่มีสินค้าหมด

  let message = '🚨 แจ้งเตือนสต็อกต่ำ!\\n';
  message += '━━━━━━━━━━━━━━\\n';
  lowStock.forEach(item => {
    message += \`⚠️ \${item[0]}\\n\`;
    message += \`   คงเหลือ: \${item[3]} (ต่ำกว่า \${item[4]})\\n\`;
  });
  message += '━━━━━━━━━━━━━━\\n';
  message += \`📊 สินค้าต่ำ: \${lowStock.length} รายการ\\n\`;
  message += \`🕐 เช็คเมื่อ: \${new Date().toLocaleString('th-TH')}\`;

  sendToGroup(message);
}

// ⏰ ตั้ง Trigger: รันทุกเช้า 8:00
// Edit > Triggers > Add > checkLowStock > Time-driven > Day timer > 8am-9am</code></pre>

<div class="tip-box">💡 <strong>Reply Message ไม่เสียโควตา!</strong> ถ้าลูกค้าพิมพ์มาก่อน แล้วเราตอบกลับด้วย replyMessage() จะไม่นับโควตา 500 ข้อความ/เดือน ประหยัดมาก!</div>

<h3>📝 Step 5: ตั้ง Trigger อัตโนมัติ</h3>
<pre><code>// สร้าง Trigger ผ่าน Script
function createTriggers() {
  // เช็คสต็อกทุกเช้า 8:00
  ScriptApp.newTrigger('checkLowStock')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .create();

  // รายงานยอดขายทุกวัน 18:00
  ScriptApp.newTrigger('dailySalesReport')
    .timeBased()
    .everyDays(1)
    .atHour(18)
    .create();
}</code></pre>

<div class="warning-box">⚠️ <strong>อย่าลืม!</strong> ถ้าเคยใช้ LINE Notify ต้องย้ายมา Messaging API ทั้งหมด เพราะ Notify ปิดถาวรแล้ว</div>
` },
  { number: 2, slug: 'flex-dashboard', emoji: '📊', title: 'โปรเจค 2: Dashboard ข้อมูลเชิงลึก + Flex CRUD', content: `
<h2>📊 ดึงข้อมูลเชิงลึก + Flex Message แบบเพิ่ม/ลดข้อมูลอัตโนมัติ</h2>

<p>สร้างระบบ <strong>CRUD (Create, Read, Update, Delete)</strong> ผ่าน LINE ได้เลย! ไม่ต้องเปิดเว็บ ไม่ต้องเปิด App</p>

<h3>🎯 สิ่งที่จะทำได้</h3>
<ul>
  <li>📋 <strong>ดูข้อมูล</strong> — พิมพ์ "ดูสต็อก" → แสดง Flex Card รายการสินค้า</li>
  <li>➕ <strong>เพิ่มข้อมูล</strong> — พิมพ์ "เพิ่ม กาแฟ 50" → เพิ่มสต็อกอัตโนมัติ</li>
  <li>➖ <strong>ลดข้อมูล</strong> — กดปุ่ม "-1" บน Flex → ลดสต็อกทันที</li>
  <li>📊 <strong>รายงาน</strong> — พิมพ์ "รายงาน" → สรุปยอดขาย Dashboard</li>
</ul>

<h3>📝 Google Sheets เป็น Database</h3>
<pre><code>// ชีท "สินค้า"
// | A: รหัส | B: ชื่อสินค้า | C: ราคา | D: คงเหลือ | E: หมวดหมู่ |
// | P001   | กาแฟดำ      | 45     | 120       | เครื่องดื่ม  |
// | P002   | ลาเต้       | 55     | 85        | เครื่องดื่ม  |
// | P003   | ครัวซอง     | 65     | 30        | เบเกอรี่    |

// ฟังก์ชันอ่านข้อมูลสินค้า
function getProducts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('สินค้า');
  const data = sheet.getDataRange().getValues();
  data.shift(); // เอา header ออก
  return data.map(row => ({
    id: row[0],
    name: row[1],
    price: row[2],
    stock: row[3],
    category: row[4]
  }));
}</code></pre>

<h3>📝 Flex Message แสดงข้อมูลสินค้า (พร้อมปุ่ม +/-)</h3>
<pre><code>function createProductFlex(product) {
  const stockColor = product.stock > 20 ? '#1DB446' :
                     product.stock > 5 ? '#f59e0b' : '#ef4444';
  const stockLabel = product.stock > 20 ? '✅ มีสินค้า' :
                     product.stock > 5 ? '⚠️ เหลือน้อย' : '🔴 ใกล้หมด';

  return {
    type: 'bubble', size: 'kilo',
    body: {
      type: 'box', layout: 'vertical', spacing: 'md',
      contents: [
        { type: 'text', text: product.name, weight: 'bold', size: 'xl' },
        { type: 'text', text: \`💰 ราคา: ฿\${product.price}\`, size: 'sm', color: '#666' },
        // Progress bar สต็อก
        {
          type: 'box', layout: 'vertical', margin: 'md',
          height: '8px', backgroundColor: '#eeeeee', cornerRadius: '4px',
          contents: [{
            type: 'box', layout: 'vertical',
            width: \`\${Math.min((product.stock / 100) * 100, 100)}%\`,
            height: '8px', backgroundColor: stockColor, cornerRadius: '4px',
            contents: []
          }]
        },
        { type: 'text', text: \`📦 คงเหลือ: \${product.stock} ชิ้น | \${stockLabel}\`,
          size: 'sm', color: stockColor, margin: 'sm' },
      ]
    },
    footer: {
      type: 'box', layout: 'horizontal', spacing: 'sm',
      contents: [
        { type: 'button', style: 'primary', color: '#ef4444', flex: 1,
          action: { type: 'postback', label: '➖ ลด', data: \`action=decrease&id=\${product.id}\` }},
        { type: 'button', style: 'secondary', flex: 1,
          action: { type: 'postback', label: \`📦 \${product.stock}\`, data: 'action=info' }},
        { type: 'button', style: 'primary', color: '#1DB446', flex: 1,
          action: { type: 'postback', label: '➕ เพิ่ม', data: \`action=increase&id=\${product.id}\` }},
      ]
    }
  };
}</code></pre>

<h3>📝 จัดการ Postback — กดปุ่มแล้วอัพเดทข้อมูลจริง</h3>
<pre><code>function handlePostback(event) {
  const data = event.postback.data;
  const params = new URLSearchParams(data);
  const action = params.get('action');
  const productId = params.get('id');

  if (!productId) return;

  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('สินค้า');
  const allData = sheet.getDataRange().getValues();

  // หา row ที่ตรงกับ productId
  const rowIndex = allData.findIndex(row => row[0] === productId);
  if (rowIndex === -1) return;

  const currentStock = allData[rowIndex][3];
  let newStock = currentStock;
  let emoji = '';

  if (action === 'increase') {
    newStock = currentStock + 1;
    emoji = '✅ เพิ่มสต็อก +1';
  } else if (action === 'decrease') {
    if (currentStock <= 0) {
      replyMessage(event.replyToken, '❌ สต็อกหมดแล้ว!');
      return;
    }
    newStock = currentStock - 1;
    emoji = '📦 ลดสต็อก -1';
  }

  // อัพเดท Google Sheets
  sheet.getRange(rowIndex + 1, 4).setValue(newStock);

  // ส่ง Flex ใหม่แสดงข้อมูลล่าสุด
  const product = {
    id: allData[rowIndex][0],
    name: allData[rowIndex][1],
    price: allData[rowIndex][2],
    stock: newStock,
  };

  replyFlex(event.replyToken,
    \`\${emoji} \${product.name}: \${newStock} ชิ้น\`,
    createProductFlex(product)
  );
}</code></pre>

<h3>📝 Flex Dashboard รายงานสรุป</h3>
<pre><code>function createDashboardFlex() {
  const products = getProducts();
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const lowStock = products.filter(p => p.stock <= 5).length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);

  return {
    type: 'bubble',
    header: {
      type: 'box', layout: 'vertical',
      backgroundColor: '#1a1a2e', paddingAll: '20px',
      contents: [
        { type: 'text', text: '📊 Dashboard สรุปสต็อก', color: '#ffffff',
          weight: 'bold', size: 'lg' },
        { type: 'text', text: new Date().toLocaleString('th-TH'),
          color: '#ffffffaa', size: 'xs' },
      ]
    },
    body: {
      type: 'box', layout: 'vertical', spacing: 'lg',
      contents: [
        createStatRow('📦 สินค้าทั้งหมด', \`\${totalProducts} รายการ\`, '#3b82f6'),
        createStatRow('🏪 สต็อกรวม', \`\${totalStock.toLocaleString()} ชิ้น\`, '#10b981'),
        createStatRow('⚠️ สต็อกต่ำ', \`\${lowStock} รายการ\`, '#ef4444'),
        createStatRow('💰 มูลค่ารวม', \`฿\${totalValue.toLocaleString()}\`, '#f59e0b'),
      ]
    }
  };
}

function createStatRow(label, value, color) {
  return {
    type: 'box', layout: 'horizontal',
    contents: [
      { type: 'text', text: label, size: 'sm', color: '#666', flex: 3 },
      { type: 'text', text: value, size: 'md', weight: 'bold',
        color: color, align: 'end', flex: 2 },
    ]
  };
}</code></pre>

<h3>📝 จัดการคำสั่งทั้งหมด</h3>
<pre><code>function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const event = data.events[0];

  if (event.type === 'postback') {
    handlePostback(event);
    return;
  }

  if (event.type === 'message' && event.message.type === 'text') {
    const text = event.message.text.trim().toLowerCase();

    if (text === 'ดูสต็อก' || text === 'สินค้า') {
      // แสดง Carousel สินค้าทั้งหมด
      const products = getProducts();
      const bubbles = products.map(p => createProductFlex(p));
      replyFlex(event.replyToken, 'สินค้าทั้งหมด',
        { type: 'carousel', contents: bubbles });

    } else if (text === 'รายงาน' || text === 'dashboard') {
      replyFlex(event.replyToken, 'Dashboard',
        createDashboardFlex());

    } else if (text.startsWith('เพิ่ม ')) {
      // เพิ่ม [ชื่อสินค้า] [จำนวน]
      const parts = text.replace('เพิ่ม ', '').split(' ');
      const name = parts[0];
      const qty = parseInt(parts[1]) || 1;
      addStock(name, qty, event.replyToken);

    } else if (text.startsWith('ค้นหา ')) {
      const keyword = text.replace('ค้นหา ', '');
      searchProducts(keyword, event.replyToken);
    }
  }
}</code></pre>

<div class="tip-box">💡 <strong>ข้อดีของระบบนี้:</strong> ทีมงานทุกคนจัดการสต็อกผ่าน LINE ได้เลย ไม่ต้องเปิดคอม ไม่ต้องเข้า Google Sheets!</div>
` },
  { number: 3, slug: 'calendar-bot', emoji: '📅', title: 'โปรเจค 3: LINE Bot + Google Calendar', content: `
<h2>📅 ปฏิวัติการจัดการนัดหมาย! LINE Bot ลงบันทึกกิจกรรมใน Google Calendar</h2>

<p>สร้างระบบนัดหมายผ่าน LINE — พิมพ์ข้อความ → Bot สร้าง Calendar Event → แจ้งเตือนก่อนนัด อัตโนมัติ!</p>

<h3>🎯 ฟีเจอร์ที่จะทำ</h3>
<ul>
  <li>📝 พิมพ์ "นัด 25/06/2025 14:00 ประชุมทีม" → Bot สร้าง Event ให้ทันที</li>
  <li>📋 พิมพ์ "ตารางวันนี้" → แสดง Flex สรุปกิจกรรมวันนี้</li>
  <li>🔔 แจ้งเตือนก่อนนัดหมาย 30 นาที อัตโนมัติ</li>
  <li>❌ ยกเลิกนัดผ่าน LINE ได้เลย</li>
  <li>📅 ดึงจากหลาย Calendar พร้อมกัน</li>
</ul>

<h3>📝 Step 1: เชื่อม Google Calendar API</h3>
<pre><code>// ใน Google Apps Script — Calendar API พร้อมใช้เลย!

// สร้าง Event ใน Google Calendar
function createCalendarEvent(title, startTime, endTime, description) {
  const calendar = CalendarApp.getDefaultCalendar();

  const event = calendar.createEvent(title, startTime, endTime, {
    description: description || '',
    location: '',
  });

  // เพิ่ม reminder แจ้งเตือนก่อน 30 นาที
  event.addPopupReminder(30);

  return {
    id: event.getId(),
    title: event.getTitle(),
    start: event.getStartTime(),
    end: event.getEndTime(),
    url: \`https://calendar.google.com/calendar/event?eid=\${
      Utilities.base64Encode(event.getId())}\`,
  };
}</code></pre>

<h3>📝 Step 2: Parse คำสั่งนัดหมายจากข้อความ</h3>
<pre><code>// รองรับหลายรูปแบบ:
// "นัด 25/06/2025 14:00 ประชุมทีม"
// "นัดหมาย พรุ่งนี้ 10:00 หมอฟัน"
// "จอง 28/06 09:00-11:00 อบรม Safety"

function parseAppointment(text) {
  // Pattern: นัด [วันที่] [เวลา] [หัวข้อ]
  const patterns = [
    // นัด DD/MM/YYYY HH:MM หัวข้อ
    /นัด(?:หมาย)?\s+(\\d{1,2})\/(\\d{1,2})(?:\/(\\d{2,4}))?\s+(\\d{1,2}):(\\d{2})(?:-(\\d{1,2}):(\\d{2}))?\s+(.+)/i,
    // นัด พรุ่งนี้ HH:MM หัวข้อ
    /นัด(?:หมาย)?\s+(พรุ่งนี้|มะรืน|วันนี้)\s+(\\d{1,2}):(\\d{2})\s+(.+)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return parseMatch(match);
    }
  }
  return null;
}

function parseMatch(match) {
  const now = new Date();
  let day, month, year, hour, minute, endHour, endMinute, title;

  if (match[1] === 'พรุ่งนี้') {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    day = tomorrow.getDate();
    month = tomorrow.getMonth();
    year = tomorrow.getFullYear();
    hour = parseInt(match[2]);
    minute = parseInt(match[3]);
    title = match[4];
  } else {
    day = parseInt(match[1]);
    month = parseInt(match[2]) - 1;
    year = match[3] ? parseInt(match[3]) : now.getFullYear();
    if (year < 100) year += 2000;
    if (year > 2500) year -= 543; // แปลง พ.ศ.
    hour = parseInt(match[4]);
    minute = parseInt(match[5]);
    endHour = match[6] ? parseInt(match[6]) : hour + 1;
    endMinute = match[7] ? parseInt(match[7]) : minute;
    title = match[8];
  }

  const startTime = new Date(year, month, day, hour, minute);
  const endTime = new Date(year, month, day,
    endHour || hour + 1, endMinute || minute);

  return { title, startTime, endTime };
}</code></pre>

<h3>📝 Step 3: Flex Message ยืนยันนัดหมาย</h3>
<pre><code>function createAppointmentFlex(event) {
  const options = { weekday: 'long', day: 'numeric',
    month: 'long', year: 'numeric' };
  const dateStr = event.start.toLocaleDateString('th-TH', options);
  const timeStr = event.start.toLocaleTimeString('th-TH',
    { hour: '2-digit', minute: '2-digit' });
  const endStr = event.end.toLocaleTimeString('th-TH',
    { hour: '2-digit', minute: '2-digit' });

  return {
    type: 'bubble',
    header: {
      type: 'box', layout: 'vertical',
      backgroundColor: '#3b82f6', paddingAll: '20px',
      contents: [
        { type: 'text', text: '✅ บันทึกนัดหมายสำเร็จ!',
          color: '#ffffff', weight: 'bold', size: 'lg' },
      ]
    },
    body: {
      type: 'box', layout: 'vertical', spacing: 'md',
      contents: [
        { type: 'text', text: event.title, weight: 'bold', size: 'xl' },
        { type: 'separator' },
        { type: 'box', layout: 'horizontal', margin: 'md',
          contents: [
            { type: 'text', text: '📅', flex: 0 },
            { type: 'text', text: dateStr, size: 'sm', margin: 'sm' },
          ]},
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '🕐', flex: 0 },
            { type: 'text', text: \`\${timeStr} - \${endStr}\`,
              size: 'sm', margin: 'sm' },
          ]},
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '🔔', flex: 0 },
            { type: 'text', text: 'แจ้งเตือนก่อน 30 นาที',
              size: 'sm', color: '#f59e0b', margin: 'sm' },
          ]},
      ]
    },
    footer: {
      type: 'box', layout: 'vertical', spacing: 'sm',
      contents: [
        { type: 'button', style: 'primary',
          action: { type: 'uri', label: '📅 เปิด Calendar',
            uri: event.url }},
        { type: 'button', style: 'link', color: '#ef4444',
          action: { type: 'postback', label: '❌ ยกเลิกนัด',
            data: \`action=cancel_event&id=\${event.id}\` }},
      ]
    }
  };
}</code></pre>

<h3>📝 Step 4: ดึงตารางวันนี้ + หลาย Calendar</h3>
<pre><code>function getTodayEvents() {
  const today = new Date();
  const start = new Date(today.setHours(0, 0, 0, 0));
  const end = new Date(today.setHours(23, 59, 59, 999));

  // ดึงจากหลาย Calendar พร้อมกัน!
  const calendars = [
    { cal: CalendarApp.getDefaultCalendar(), name: '📌 ส่วนตัว' },
    { cal: CalendarApp.getCalendarById('team@company.com'),
      name: '👥 ทีม' },
    { cal: CalendarApp.getCalendarById('meeting@company.com'),
      name: '🏢 ห้องประชุม' },
  ].filter(c => c.cal); // กรองเฉพาะที่มีสิทธิ์

  const allEvents = [];
  calendars.forEach(({ cal, name }) => {
    cal.getEvents(start, end).forEach(event => {
      allEvents.push({
        title: event.getTitle(),
        start: event.getStartTime(),
        end: event.getEndTime(),
        calendar: name,
      });
    });
  });

  // เรียงตามเวลา
  return allEvents.sort((a, b) => a.start - b.start);
}

// ส่งสรุปตารางวันนี้ทุกเช้า 7:00
function sendDailySchedule() {
  const events = getTodayEvents();
  if (events.length === 0) {
    sendToGroup('📅 วันนี้ไม่มีนัดหมาย — วันว่างๆ! 🎉');
    return;
  }

  let msg = '📅 ตารางวันนี้\\n━━━━━━━━━━━━━━\\n';
  events.forEach(e => {
    const time = e.start.toLocaleTimeString('th-TH',
      { hour: '2-digit', minute: '2-digit' });
    msg += \`🕐 \${time} | \${e.title}\\n\`;
    msg += \`   \${e.calendar}\\n\\n\`;
  });
  msg += \`━━━━━━━━━━━━━━\\n📊 รวม \${events.length} นัดหมาย\`;

  sendToGroup(msg);
}</code></pre>

<div class="tip-box">💡 <strong>ใช้ได้จริง:</strong> คลินิก, สำนักงาน, ทีมขาย, โรงเรียน — ทุกที่ที่ต้องจัดการนัดหมาย!</div>
` },
  { number: 4, slug: 'queue-system', emoji: '🎟️', title: 'โปรเจค 4: ระบบจองคิว LINE OA', content: `
<h2>🎟️ ระบบจองคิวด้วย LINE OA — ครบจบ ใช้ได้จริง</h2>

<p>สร้างระบบจองคิวที่ <strong>คลินิก, ร้านอาหาร, หน่วยงานราชการ</strong> ใช้ได้จริง — ลูกค้าจองผ่าน LINE → ได้คิว → แจ้งเตือนก่อนถึงคิว</p>

<h3>🎯 Flow ระบบจองคิว</h3>
<pre><code>ลูกค้าพิมพ์ "จองคิว"
    ↓
Bot แสดง Flex เลือกบริการ
    ↓
ลูกค้ากดเลือก (เช่น "ตรวจทั่วไป")
    ↓
Bot แสดง Flex เลือกวัน+เวลา
    ↓
ลูกค้ากดเลือก (เช่น "พรุ่งนี้ 10:00")
    ↓
Bot สร้างคิว + บันทึก Google Sheets
    ↓
ส่ง Flex บัตรคิว (QR, หมายเลข, เวลานัด)
    ↓
ส่ง Calendar Event + Reminder
    ↓
แจ้งเตือนก่อนถึงคิว 30 นาที
    ↓
เมื่อถึงคิว → Bot เรียกคิว!</code></pre>

<h3>📝 Step 1: Google Sheets เป็นฐานข้อมูลคิว</h3>
<pre><code>// ชีท "คิว"
// | A: Queue ID | B: ชื่อ | C: บริการ | D: วันที่ | E: เวลา |
// | F: สถานะ | G: userId | H: สร้างเมื่อ |

// ชีท "บริการ"
// | A: รหัส | B: ชื่อบริการ | C: ระยะเวลา(นาที) | D: เปิดให้จอง |
// | SRV01  | ตรวจทั่วไป    | 30                | TRUE        |

function generateQueueNumber() {
  const today = new Date();
  const prefix = 'Q';
  const dateStr = Utilities.formatDate(today, 'Asia/Bangkok', 'yyMMdd');

  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('คิว');
  const data = sheet.getDataRange().getValues();

  // นับคิววันนี้
  const todayQueues = data.filter(row =>
    row[3] && Utilities.formatDate(new Date(row[3]),
      'Asia/Bangkok', 'yyMMdd') === dateStr
  );

  const num = String(todayQueues.length + 1).padStart(3, '0');
  return \`\${prefix}-\${dateStr}-\${num}\`;
}</code></pre>

<h3>📝 Step 2: Flex เลือกบริการ</h3>
<pre><code>function createServiceSelectionFlex() {
  const services = getServices(); // ดึงจาก Sheets

  return {
    type: 'bubble',
    header: {
      type: 'box', layout: 'vertical',
      backgroundColor: '#6366f1', paddingAll: '20px',
      contents: [
        { type: 'text', text: '🎟️ จองคิว',
          color: '#fff', weight: 'bold', size: 'xl' },
        { type: 'text', text: 'เลือกบริการที่ต้องการ',
          color: '#ffffffcc', size: 'sm' },
      ]
    },
    body: {
      type: 'box', layout: 'vertical', spacing: 'md',
      contents: services.map(s => ({
        type: 'button', style: 'secondary', margin: 'sm',
        action: {
          type: 'postback',
          label: \`\${s.name} (\${s.duration} นาที)\`,
          data: \`action=select_service&id=\${s.id}\`
        }
      }))
    }
  };
}</code></pre>

<h3>📝 Step 3: Flex เลือกเวลา (Time Slot)</h3>
<pre><code>function createTimeSlotFlex(serviceId, date) {
  const slots = getAvailableSlots(serviceId, date);

  const slotButtons = slots.map(slot => ({
    type: 'button',
    style: slot.available ? 'primary' : 'secondary',
    color: slot.available ? '#10b981' : '#94a3b8',
    margin: 'sm',
    action: slot.available ? {
      type: 'postback',
      label: \`🕐 \${slot.time}\`,
      data: \`action=book&service=\${serviceId}&date=\${date}&time=\${slot.time}\`
    } : {
      type: 'postback',
      label: \`❌ \${slot.time} (เต็ม)\`,
      data: 'action=slot_full'
    }
  }));

  return {
    type: 'bubble',
    header: {
      type: 'box', layout: 'vertical',
      backgroundColor: '#6366f1', paddingAll: '15px',
      contents: [
        { type: 'text', text: '📅 เลือกเวลานัด',
          color: '#fff', weight: 'bold' },
        { type: 'text', text: formatThaiDate(date),
          color: '#ffffffcc', size: 'sm' },
      ]
    },
    body: {
      type: 'box', layout: 'vertical', spacing: 'sm',
      contents: slotButtons
    }
  };
}

function getAvailableSlots(serviceId, date) {
  // สร้าง slot ทุก 30 นาที ตั้งแต่ 9:00-16:00
  const slots = [];
  for (let h = 9; h <= 16; h++) {
    for (let m of [0, 30]) {
      if (h === 16 && m === 30) continue;
      const time = \`\${String(h).padStart(2,'0')}:\${String(m).padStart(2,'0')}\`;
      const booked = isSlotBooked(serviceId, date, time);
      slots.push({ time, available: !booked });
    }
  }
  return slots;
}</code></pre>

<h3>📝 Step 4: สร้างคิว + ส่ง Flex บัตรคิว</h3>
<pre><code>function bookQueue(userId, serviceId, date, time) {
  const queueId = generateQueueNumber();
  const service = getServiceById(serviceId);
  const profile = getUserProfile(userId);

  // บันทึกลง Google Sheets
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('คิว');
  sheet.appendRow([
    queueId,
    profile.displayName,
    service.name,
    date,
    time,
    'รอเรียก',    // สถานะ
    userId,
    new Date(),    // สร้างเมื่อ
  ]);

  // สร้าง Calendar Event
  const startTime = new Date(\`\${date}T\${time}:00+07:00\`);
  const endTime = new Date(startTime.getTime() +
    service.duration * 60 * 1000);
  createCalendarEvent(
    \`🎟️ คิว \${queueId} - \${profile.displayName}\`,
    startTime, endTime,
    \`บริการ: \${service.name}\`
  );

  return { queueId, service, date, time, profile };
}

function createQueueTicketFlex(booking) {
  return {
    type: 'bubble',
    header: {
      type: 'box', layout: 'vertical',
      backgroundColor: '#10b981', paddingAll: '20px',
      contents: [
        { type: 'text', text: '✅ จองคิวสำเร็จ!',
          color: '#fff', weight: 'bold', size: 'lg' },
      ]
    },
    body: {
      type: 'box', layout: 'vertical', spacing: 'lg',
      contents: [
        { type: 'text', text: booking.queueId,
          size: '3xl', weight: 'bold', align: 'center',
          color: '#6366f1' },
        { type: 'separator' },
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '👤 ชื่อ', size: 'sm',
              color: '#888', flex: 2 },
            { type: 'text', text: booking.profile.displayName,
              size: 'sm', weight: 'bold', flex: 3 },
          ]},
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '🏥 บริการ', size: 'sm',
              color: '#888', flex: 2 },
            { type: 'text', text: booking.service.name,
              size: 'sm', weight: 'bold', flex: 3 },
          ]},
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '📅 วันที่', size: 'sm',
              color: '#888', flex: 2 },
            { type: 'text', text: formatThaiDate(booking.date),
              size: 'sm', weight: 'bold', flex: 3 },
          ]},
        { type: 'box', layout: 'horizontal',
          contents: [
            { type: 'text', text: '🕐 เวลา', size: 'sm',
              color: '#888', flex: 2 },
            { type: 'text', text: booking.time + ' น.',
              size: 'sm', weight: 'bold', flex: 3 },
          ]},
        { type: 'separator' },
        { type: 'text', text: '🔔 จะแจ้งเตือนก่อนถึงคิว 30 นาที',
          size: 'xs', color: '#f59e0b', align: 'center', wrap: true },
      ]
    },
    footer: {
      type: 'box', layout: 'vertical', spacing: 'sm',
      contents: [
        { type: 'button', style: 'secondary',
          action: { type: 'postback', label: '📋 ดูคิวของฉัน',
            data: 'action=my_queues' }},
        { type: 'button', style: 'link', color: '#ef4444',
          action: { type: 'postback', label: '❌ ยกเลิกคิว',
            data: \`action=cancel_queue&id=\${booking.queueId}\` }},
      ]
    }
  };
}</code></pre>

<h3>📝 Step 5: แจ้งเตือน + เรียกคิว</h3>
<pre><code>// รันทุก 5 นาที ตรวจคิวที่ใกล้ถึงเวลา
function checkUpcomingQueues() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('คิว');
  const data = sheet.getDataRange().getValues();
  const now = new Date();

  data.forEach((row, i) => {
    if (i === 0 || row[5] !== 'รอเรียก') return;

    const queueTime = new Date(\`\${row[3]}T\${row[4]}:00+07:00\`);
    const diff = (queueTime - now) / (1000 * 60); // นาที

    // แจ้งเตือนก่อน 30 นาที
    if (diff > 25 && diff <= 30) {
      sendToUser(row[6],
        \`🔔 อีก 30 นาที ถึงคิวของคุณ!\\n\\n\` +
        \`🎟️ คิว: \${row[0]}\\n\` +
        \`🏥 บริการ: \${row[2]}\\n\` +
        \`🕐 เวลา: \${row[4]} น.\\n\\n\` +
        \`กรุณามาถึงก่อนเวลานัด 10 นาทีค่ะ 🙏\`
      );
    }

    // เรียกคิว! (ถึงเวลาแล้ว)
    if (diff >= -5 && diff <= 0) {
      sendToUser(row[6],
        \`📢 ถึงคิวของคุณแล้ว!\\n\\n\` +
        \`🎟️ คิว: \${row[0]}\\n\` +
        \`🏥 บริการ: \${row[2]}\\n\\n\` +
        \`กรุณามาที่เคาน์เตอร์ค่ะ ✨\`
      );
      // อัพเดทสถานะ
      sheet.getRange(i + 1, 6).setValue('เรียกแล้ว');
    }
  });
}</code></pre>

<div class="tip-box">💡 <strong>ใช้ได้จริงกับ:</strong> คลินิก, โรงพยาบาล, ร้านอาหาร, ธนาคาร, หน่วยงานราชการ — ทุกที่ที่มีคิว!</div>

<div class="warning-box">⚠️ <strong>สำคัญ:</strong> ตั้ง Trigger ให้ <code>checkUpcomingQueues()</code> รันทุก 5 นาที เพื่อแจ้งเตือนและเรียกคิวอัตโนมัติ</div>
` },
];
