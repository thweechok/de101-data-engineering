export const chapters = [
  {
    number: 1,
    slug: 'customer-journey',
    emoji: '🗺️',
    title: 'Customer Journey Design',
    content: `
      <h2>🗺️ Customer Journey Design สำหรับ LINE Shop</h2>
      <p>ก่อนจะเริ่มเขียนโค้ดร้านค้า สิ่งที่สำคัญที่สุดคือการออกแบบ <strong>Customer Journey</strong> — เส้นทางที่ลูกค้าจะเดินผ่านตั้งแต่รู้จักร้านจนถึงกลับมาซื้อซ้ำ การวางแผนที่ดีจะทำให้บอทของคุณไม่ใช่แค่ "ตอบคำถาม" แต่เป็น <strong>"ผู้ช่วยขาย"</strong> ตัวจริง</p>

      <img src='/images/lessons/shop-journey.png' alt='Customer Journey Map สำหรับ LINE Shop'>

      <h3>📌 Customer Journey 5 ขั้นตอน</h3>
      <p>สำหรับร้านค้าบน LINE เราสามารถแบ่ง Journey ออกเป็น 5 ระยะหลัก:</p>

      <div class='step'><span class='step-number'>1</span>
        <strong>Awareness (รู้จัก)</strong> — ลูกค้าเห็นร้านผ่าน QR Code, โฆษณา LINE Ads, หรือแชร์จากเพื่อน แล้วกด Add Friend
      </div>

      <div class='step'><span class='step-number'>2</span>
        <strong>Consideration (สนใจ)</strong> — ลูกค้าดูเมนู Rich Menu, เปิดดูแคตตาล็อกสินค้า, ถามรายละเอียดผ่านแชท
      </div>

      <div class='step'><span class='step-number'>3</span>
        <strong>Purchase (ซื้อ)</strong> — ลูกค้าเลือกสินค้า, เพิ่มลงตะกร้า, ชำระเงินผ่าน PromptPay, ส่งสลิป
      </div>

      <div class='step'><span class='step-number'>4</span>
        <strong>Delivery (ส่งมอบ)</strong> — ร้านยืนยันออเดอร์, อัปเดตสถานะจัดส่ง, ลูกค้าได้รับของ
      </div>

      <div class='step'><span class='step-number'>5</span>
        <strong>Loyalty (กลับมาซื้อซ้ำ)</strong> — สะสมแต้ม, รับคูปองส่วนลด, Broadcast โปรโมชันใหม่
      </div>

      <h3>🎯 Touchpoints หลักบน LINE</h3>
      <p>ในแต่ละขั้นตอนของ Journey เราจะใช้ฟีเจอร์ต่าง ๆ ของ LINE เป็น Touchpoint:</p>

      <table>
        <thead>
          <tr><th>Journey Stage</th><th>LINE Feature</th><th>ตัวอย่าง</th></tr>
        </thead>
        <tbody>
          <tr><td>Awareness</td><td>Greeting Message</td><td>ส่งข้อความต้อนรับ + แนะนำร้าน</td></tr>
          <tr><td>Consideration</td><td>Rich Menu + Flex Carousel</td><td>เมนูหลัก + แคตตาล็อกสินค้า</td></tr>
          <tr><td>Purchase</td><td>Postback + Quick Reply</td><td>ตะกร้า + เลือกวิธีชำระเงิน</td></tr>
          <tr><td>Delivery</td><td>Push Message</td><td>แจ้งสถานะจัดส่ง + เลขพัสดุ</td></tr>
          <tr><td>Loyalty</td><td>Flex Message + Broadcast</td><td>แสดงแต้ม + ส่งคูปอง</td></tr>
        </tbody>
      </table>

      <h3>👤 User Personas สำหรับ LINE Shop</h3>
      <p>การสร้าง Persona ช่วยให้เราออกแบบบอทได้ตรงจุด ลองดูตัวอย่าง Persona 2 แบบ:</p>

      <div class='tip-box'><strong>💡 Tip:</strong> Persona "แม่บ้านมือโปร" — อายุ 35-45 ปี, ใช้ LINE เป็นหลัก, ชอบสั่งซื้อง่าย ๆ ไม่กี่คลิก, ต้องการเห็นราคาชัดเจน, ชอบโปรโมชัน. บอทควรออกแบบให้ใช้งานง่าย มี Quick Reply ให้เลือก</div>

      <div class='tip-box'><strong>💡 Tip:</strong> Persona "วัยรุ่นเทคโนโลยี" — อายุ 18-25 ปี, คุ้นเคยกับ e-commerce, ต้องการความเร็ว, ชอบ UI สวย ๆ, ใช้ Flex Message ได้เต็มที่, อาจเปรียบเทียบราคากับร้านอื่น</div>

      <h3>🔄 Conversion Funnel</h3>
      <p>Conversion Funnel ช่วยให้เราเข้าใจว่าลูกค้า "หลุด" ไปตรงจุดไหน:</p>

      <pre><code class="language-text">Add Friend (100%)
    ↓
ดูแคตตาล็อก (70%)
    ↓
เพิ่มสินค้าลงตะกร้า (40%)
    ↓
ชำระเงิน (25%)
    ↓
ซื้อซ้ำ (10%)
</code></pre>

      <p>เป้าหมายของเราคือ <strong>เพิ่ม Conversion Rate</strong> ในแต่ละขั้น โดยการทำให้ขั้นตอนง่ายและรวดเร็ว</p>

      <h3>📊 การเก็บข้อมูล Journey ด้วย Google Apps Script</h3>
      <p>เราสามารถบันทึก Journey ของลูกค้าแต่ละคนลง Google Sheets เพื่อวิเคราะห์:</p>

      <pre><code class="language-javascript">// Google Apps Script — บันทึก Customer Journey Event
function logJourneyEvent(userId, stage, action, details) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID')
    .getSheetByName('JourneyLog');

  sheet.appendRow([
    new Date(),
    userId,
    stage,        // 'awareness', 'consideration', 'purchase', 'delivery', 'loyalty'
    action,       // 'view_catalog', 'add_to_cart', 'payment', etc.
    details,      // รายละเอียดเพิ่มเติม
    getCustomerSegment(userId)
  ]);
}

// ตัวอย่างการเรียกใช้ใน Webhook handler
function handleFollow(event) {
  const userId = event.source.userId;
  logJourneyEvent(userId, 'awareness', 'add_friend', 'ผ่าน QR Code');

  // ส่ง Greeting Message
  sendGreetingFlex(userId);
}

function handlePostback(event) {
  const userId = event.source.userId;
  const data = event.postback.data;

  if (data.startsWith('view_product=')) {
    logJourneyEvent(userId, 'consideration', 'view_product', data);
  } else if (data.startsWith('add_cart=')) {
    logJourneyEvent(userId, 'purchase', 'add_to_cart', data);
  }
}
</code></pre>

      <h3>💬 Greeting Message — จุดเริ่มต้นของ Journey</h3>
      <p>ข้อความต้อนรับคือ First Impression ที่สำคัญมาก ควรมีองค์ประกอบ:</p>
      <ul>
        <li>ทักทายด้วยชื่อร้าน + อีโมจิ</li>
        <li>แนะนำสั้น ๆ ว่าร้านขายอะไร</li>
        <li>บอกวิธีใช้งาน (กดเมนูด้านล่าง)</li>
        <li>ใส่ Quick Reply ให้เลือก: ดูสินค้า / โปรโมชัน / ติดต่อแอดมิน</li>
      </ul>

      <pre><code class="language-javascript">// Greeting Flex Message
function sendGreetingFlex(userId) {
  const flex = {
    type: 'flex',
    altText: 'ยินดีต้อนรับสู่ร้าน Coffee Buddy! ☕',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://example.com/shop-banner.jpg',
        size: 'full',
        aspectRatio: '20:13'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: 'ยินดีต้อนรับ! ☕', weight: 'bold', size: 'xl' },
          { type: 'text', text: 'Coffee Buddy — กาแฟดีส่งถึงบ้าน', size: 'sm', color: '#888888', margin: 'md' },
          { type: 'text', text: 'กดเมนูด้านล่างเพื่อเริ่มสั่งกาแฟ หรือเลือกจากตัวเลือกด้านล่างนี้ 👇', wrap: true, size: 'sm', margin: 'lg' }
        ]
      }
    },
    quickReply: {
      items: [
        { type: 'action', action: { type: 'postback', label: '🛒 ดูเมนู', data: 'action=view_menu' }},
        { type: 'action', action: { type: 'postback', label: '🔥 โปรโมชัน', data: 'action=promotions' }},
        { type: 'action', action: { type: 'message', label: '💬 ติดต่อแอดมิน', text: 'ต้องการติดต่อแอดมิน' }}
      ]
    }
  };

  sendReply(event.replyToken, [flex]);
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Greeting Message ส่งได้ครั้งเดียวตอน Follow เท่านั้น หากลูกค้า Block แล้ว Unblock จะได้รับอีกครั้ง — ควรออกแบบให้ใช้ได้ทั้งลูกค้าเก่าและใหม่</div>

      <h3>🎨 ออกแบบ Shopping Experience ที่ดี</h3>
      <p>หลักการออกแบบประสบการณ์ช้อปปิ้งบน LINE:</p>
      <ol>
        <li><strong>ลดขั้นตอน</strong> — จาก "ดูสินค้า" ถึง "ชำระเงิน" ไม่ควรเกิน 4-5 คลิก</li>
        <li><strong>แสดงราคาชัดเจน</strong> — ลูกค้าไม่ชอบต้องถามราคา</li>
        <li><strong>มีรูปสินค้าที่ชัด</strong> — ใช้รูปจริง ขนาดอย่างน้อย 1024x1024</li>
        <li><strong>ให้ทางเลือกกลับ</strong> — ทุกจุดต้องมีปุ่มกลับเมนูหลัก</li>
        <li><strong>ตอบเร็ว</strong> — Webhook ควร Response ภายใน 1 วินาที</li>
      </ol>

      <div class='tip-box'><strong>💡 Tip:</strong> วาด Flowchart ก่อนเขียนโค้ดเสมอ! ใช้ draw.io หรือ Miro เพื่อวาดลำดับการทำงานทั้งหมด แล้วค่อยเขียนโค้ดทีหลัง จะช่วยประหยัดเวลาได้มาก</div>

      <h3>📐 สรุป Architecture ร้านค้า LINE</h3>
      <pre><code class="language-text">┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   ลูกค้า      │────▶│  LINE Platform │────▶│  Webhook     │
│   (LINE App)  │◀────│  (Messaging)  │◀────│  Server      │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
                                          ┌───────┴───────┐
                                          │               │
                                    ┌─────▼─────┐  ┌─────▼─────┐
                                    │  Database  │  │  Payment  │
                                    │  (Sheets/  │  │  Gateway  │
                                    │   Mongo)   │  │           │
                                    └───────────┘  └───────────┘
</code></pre>

      <p>ในบทต่อไป เราจะเริ่มสร้าง Rich Menu สำหรับร้านค้า — หน้าตาแรกที่ลูกค้าเห็นเมื่อเปิดแชท!</p>
    `
  },
  {
    number: 2,
    slug: 'rich-menu-shop',
    emoji: '📋',
    title: 'Rich Menu ร้านค้า',
    content: `
      <h2>📋 Rich Menu ร้านค้า — หน้าร้านดิจิทัลบน LINE</h2>
      <p>Rich Menu คือเมนูที่แสดงอยู่ด้านล่างของหน้าแชท เปรียบเสมือน <strong>"หน้าร้าน"</strong> ของร้านค้าบน LINE ลูกค้าสามารถกดเพื่อดูสินค้า สั่งซื้อ หรือติดต่อร้านได้ทันที</p>

      <img src='/images/lessons/rich-menu-shop.png' alt='Rich Menu ร้านค้าตัวอย่าง'>

      <h3>🎨 ออกแบบ Rich Menu สำหรับร้านค้า</h3>
      <p>Rich Menu ที่ดีควรมีลักษณะดังนี้:</p>
      <ul>
        <li><strong>ขนาดแนะนำ:</strong> 2500 x 1686 px (Full) หรือ 2500 x 843 px (Half)</li>
        <li><strong>แบ่งพื้นที่ชัดเจน:</strong> แต่ละปุ่มควรมีไอคอนและข้อความกำกับ</li>
        <li><strong>สีสันสอดคล้องกับแบรนด์:</strong> ใช้สีที่เป็นเอกลักษณ์ของร้าน</li>
        <li><strong>มีปุ่มสำคัญ:</strong> ดูเมนู, สั่งซื้อ, โปรโมชัน, ติดต่อ, แต้มสะสม</li>
      </ul>

      <div class='tip-box'><strong>💡 Tip:</strong> ใช้ Figma หรือ Canva ออกแบบ Rich Menu ได้ฟรี! ค้นหา template "LINE Rich Menu" จะมีให้เลือกมากมาย — ปรับแต่งให้เข้ากับแบรนด์ของคุณ</div>

      <h3>📐 Layout ยอดนิยมสำหรับร้านค้า</h3>
      <pre><code class="language-text">Layout แบบ 6 ช่อง (2x3) — เหมาะสำหรับร้านค้า:
┌─────────────┬─────────────┬─────────────┐
│  🛒 สินค้า   │  🔥 โปรฯ    │  📦 สถานะ   │
│             │             │  คำสั่งซื้อ   │
├─────────────┼─────────────┼─────────────┤
│  🎁 แต้มสะสม │  💬 แชท     │  📞 โทร     │
│             │  แอดมิน      │             │
└─────────────┴─────────────┴─────────────┘
</code></pre>

      <h3>🔧 สร้าง Rich Menu ผ่าน API</h3>

      <div class='step'><span class='step-number'>1</span>
        <strong>สร้าง Rich Menu Object</strong> — กำหนดขนาด, พื้นที่คลิก, และ Action ของแต่ละปุ่ม
      </div>

      <pre><code class="language-javascript">// Node.js — สร้าง Rich Menu สำหรับร้านค้า
const axios = require('axios');
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

async function createShopRichMenu() {
  const richMenu = {
    size: { width: 2500, height: 1686 },
    selected: true,
    name: 'shop-main-menu',
    chatBarText: '📋 เมนูร้าน',
    areas: [
      {
        // ช่อง 1: สินค้า
        bounds: { x: 0, y: 0, width: 833, height: 843 },
        action: { type: 'postback', data: 'action=view_catalog&page=1', displayText: '🛒 ดูสินค้า' }
      },
      {
        // ช่อง 2: โปรโมชัน
        bounds: { x: 833, y: 0, width: 834, height: 843 },
        action: { type: 'postback', data: 'action=promotions', displayText: '🔥 โปรโมชัน' }
      },
      {
        // ช่อง 3: สถานะคำสั่งซื้อ
        bounds: { x: 1667, y: 0, width: 833, height: 843 },
        action: { type: 'postback', data: 'action=order_status', displayText: '📦 เช็คสถานะ' }
      },
      {
        // ช่อง 4: แต้มสะสม
        bounds: { x: 0, y: 843, width: 833, height: 843 },
        action: { type: 'postback', data: 'action=loyalty_points', displayText: '🎁 แต้มสะสม' }
      },
      {
        // ช่อง 5: แชทแอดมิน
        bounds: { x: 833, y: 843, width: 834, height: 843 },
        action: { type: 'message', text: 'ต้องการติดต่อแอดมิน' }
      },
      {
        // ช่อง 6: โทร
        bounds: { x: 1667, y: 843, width: 833, height: 843 },
        action: { type: 'uri', uri: 'tel:0812345678' }
      }
    ]
  };

  // Step 1: สร้าง Rich Menu
  const res = await axios.post(
    'https://api.line.me/v2/bot/richmenu',
    richMenu,
    { headers: { Authorization: \`Bearer \${LINE_TOKEN}\`, 'Content-Type': 'application/json' } }
  );

  const richMenuId = res.data.richMenuId;
  console.log('Rich Menu Created:', richMenuId);
  return richMenuId;
}
</code></pre>

      <div class='step'><span class='step-number'>2</span>
        <strong>อัปโหลดรูปภาพ Rich Menu</strong> — ต้องเป็น JPEG หรือ PNG ขนาดตรงตามที่กำหนด
      </div>

      <pre><code class="language-javascript">const fs = require('fs');

async function uploadRichMenuImage(richMenuId, imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);

  await axios.post(
    \`https://api-data.line.me/v2/bot/richmenu/\${richMenuId}/content\`,
    imageBuffer,
    {
      headers: {
        Authorization: \`Bearer \${LINE_TOKEN}\`,
        'Content-Type': 'image/png'
      }
    }
  );

  console.log('Image uploaded successfully!');
}
</code></pre>

      <div class='step'><span class='step-number'>3</span>
        <strong>ตั้งเป็น Default Rich Menu</strong> — ให้ผู้ใช้ทุกคนเห็นเมนูนี้
      </div>

      <pre><code class="language-javascript">async function setDefaultRichMenu(richMenuId) {
  await axios.post(
    \`https://api.line.me/v2/bot/user/all/richmenu/\${richMenuId}\`,
    {},
    { headers: { Authorization: \`Bearer \${LINE_TOKEN}\` } }
  );

  console.log('Default Rich Menu set!');
}

// รันทั้งหมด
async function setupShopMenu() {
  const menuId = await createShopRichMenu();
  await uploadRichMenuImage(menuId, './images/shop-menu.png');
  await setDefaultRichMenu(menuId);
  console.log('✅ Shop Rich Menu พร้อมใช้งาน!');
}

setupShopMenu();
</code></pre>

      <h3>🔄 Rich Menu Switching — สลับเมนูตามสถานะ</h3>
      <p>เทคนิคขั้นสูง: สลับ Rich Menu ตามสถานะของลูกค้า เช่น แสดงเมนูต่างกันสำหรับ "ลูกค้าทั่วไป" กับ "สมาชิก Gold":</p>

      <pre><code class="language-javascript">// สลับ Rich Menu ให้ user เฉพาะคน
async function switchRichMenu(userId, menuType) {
  const menuIds = {
    'default': 'richmenu-xxxxx-default',
    'member_bronze': 'richmenu-xxxxx-bronze',
    'member_silver': 'richmenu-xxxxx-silver',
    'member_gold': 'richmenu-xxxxx-gold',
    'ordering': 'richmenu-xxxxx-ordering'   // เมนูระหว่างสั่งซื้อ
  };

  const richMenuId = menuIds[menuType];
  if (!richMenuId) return;

  await axios.post(
    \`https://api.line.me/v2/bot/user/\${userId}/richmenu/\${richMenuId}\`,
    {},
    { headers: { Authorization: \`Bearer \${LINE_TOKEN}\` } }
  );

  console.log(\`Switched menu to \${menuType} for user \${userId}\`);
}

// ตัวอย่าง: เปลี่ยนเมนูเมื่อลูกค้าอัปเกรดเป็น Gold
async function handleMemberUpgrade(userId, newTier) {
  await switchRichMenu(userId, \`member_\${newTier}\`);
  // ส่งข้อความแจ้งเตือน
  await sendPushMessage(userId, \`🎉 ยินดีด้วย! คุณได้อัปเกรดเป็นสมาชิก \${newTier.toUpperCase()} แล้ว!\`);
}
</code></pre>

      <h3>📑 Tab-Based Menu ด้วย Rich Menu Alias</h3>
      <p>สร้างเมนูแบบ Tab ที่ลูกค้าสามารถสลับระหว่าง "หน้าร้าน" กับ "บัญชีของฉัน":</p>

      <pre><code class="language-javascript">// Google Apps Script — Rich Menu Tab Switching
function handleRichMenuTab(event) {
  const data = parsePostbackData(event.postback.data);
  const userId = event.source.userId;

  switch (data.tab) {
    case 'shop':
      // สลับไปเมนูหน้าร้าน
      linkRichMenuToUser(userId, SHOP_MENU_ID);
      sendReply(event.replyToken, [{
        type: 'text',
        text: '🛒 หน้าร้าน — เลือกดูสินค้าจากเมนูด้านล่างได้เลย!'
      }]);
      break;

    case 'myaccount':
      // สลับไปเมนูบัญชีของฉัน
      linkRichMenuToUser(userId, ACCOUNT_MENU_ID);
      sendAccountSummary(event.replyToken, userId);
      break;

    case 'cart':
      // สลับไปเมนูตะกร้า
      linkRichMenuToUser(userId, CART_MENU_ID);
      sendCartSummary(event.replyToken, userId);
      break;
  }
}

function linkRichMenuToUser(userId, richMenuId) {
  const options = {
    method: 'post',
    headers: { Authorization: 'Bearer ' + LINE_TOKEN },
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch(
    'https://api.line.me/v2/bot/user/' + userId + '/richmenu/' + richMenuId,
    options
  );
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Rich Menu สามารถสร้างได้สูงสุด 1,000 เมนูต่อบอท และ Rich Menu Alias ได้ 1,000 ตัว — เพียงพอสำหรับร้านค้าส่วนใหญ่ แต่ถ้าต้องการเมนูเฉพาะบุคคลจำนวนมาก ให้ใช้ Rich Menu Alias แทนการสร้างเมนูใหม่ทุกครั้ง</div>

      <div class='tip-box'><strong>💡 Tip:</strong> ออกแบบ Rich Menu ให้มี "Tab Bar" อยู่ด้านล่าง เช่น [ร้านค้า] [ตะกร้า] [บัญชีฉัน] — แต่ละ Tab จะสลับ Rich Menu ที่มี Tab Bar เดียวกัน แต่เปลี่ยนไฮไลท์ Tab ที่เลือกอยู่</div>

      <h3>📱 สรุป Rich Menu สำหรับร้านค้า</h3>
      <table>
        <thead>
          <tr><th>เมนู</th><th>ใช้เมื่อ</th><th>ปุ่มหลัก</th></tr>
        </thead>
        <tbody>
          <tr><td>Main Menu</td><td>Default สำหรับทุกคน</td><td>สินค้า, โปรฯ, สถานะ, แต้ม, แชท, โทร</td></tr>
          <tr><td>Ordering Menu</td><td>ระหว่างสั่งซื้อ</td><td>ตะกร้า, ชำระเงิน, ยกเลิก, กลับหลัก</td></tr>
          <tr><td>Member Menu</td><td>สมาชิกที่ลงทะเบียนแล้ว</td><td>สินค้า, แต้มสะสม, คูปอง, ประวัติ</td></tr>
        </tbody>
      </table>

      <p>ในบทต่อไป เราจะสร้างแคตตาล็อกสินค้าด้วย Flex Message Carousel — ให้ลูกค้าเลื่อนดูสินค้าได้แบบสวย ๆ!</p>
    `
  },
  {
    number: 3,
    slug: 'product-catalog',
    emoji: '🛒',
    title: 'แคตตาล็อกสินค้า Flex Carousel',
    content: `
      <h2>🛒 แคตตาล็อกสินค้า Flex Carousel</h2>
      <p>Flex Message Carousel คือวิธีที่ดีที่สุดในการแสดงสินค้าบน LINE — ลูกค้าสามารถเลื่อนซ้ายขวาเพื่อดูสินค้าได้สะดวก โดยแต่ละรายการมีทั้งรูปภาพ, ราคา, รายละเอียด และปุ่มสั่งซื้อ</p>

      <img src='/images/lessons/flex-carousel-products.png' alt='Flex Message Carousel แสดงสินค้า'>

      <h3>📦 โครงสร้าง Flex Carousel</h3>
      <p>Flex Carousel ประกอบด้วย:</p>
      <ul>
        <li><strong>Carousel Container</strong> — กล่องใหญ่ที่บรรจุ Bubbles หลายตัว</li>
        <li><strong>Bubble</strong> — การ์ดแต่ละใบ (สินค้าแต่ละรายการ)</li>
        <li><strong>Hero</strong> — รูปภาพสินค้า</li>
        <li><strong>Body</strong> — ชื่อ, ราคา, รายละเอียด</li>
        <li><strong>Footer</strong> — ปุ่ม Action (เพิ่มตะกร้า, ดูรายละเอียด)</li>
      </ul>

      <h3>🔨 สร้าง Product Bubble</h3>
      <p>ฟังก์ชันสร้าง Bubble สำหรับสินค้าแต่ละรายการ:</p>

      <pre><code class="language-javascript">// สร้าง Flex Bubble สำหรับสินค้า 1 รายการ
function createProductBubble(product) {
  return {
    type: 'bubble',
    size: 'kilo',
    hero: {
      type: 'image',
      url: product.imageUrl,
      size: 'full',
      aspectMode: 'cover',
      aspectRatio: '4:3',
      action: {
        type: 'postback',
        data: \`action=product_detail&id=\${product.id}\`
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'text',
          text: product.name,
          weight: 'bold',
          size: 'lg',
          wrap: true,
          maxLines: 2
        },
        {
          type: 'text',
          text: product.description,
          size: 'xs',
          color: '#999999',
          wrap: true,
          maxLines: 2
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: \`฿\${product.price.toLocaleString()}\`,
              weight: 'bold',
              size: 'xl',
              color: '#E74C3C'
            },
            product.originalPrice ? {
              type: 'text',
              text: \`฿\${product.originalPrice.toLocaleString()}\`,
              size: 'sm',
              color: '#AAAAAA',
              decoration: 'line-through',
              align: 'end',
              gravity: 'bottom'
            } : { type: 'filler' }
          ]
        },
        product.stock <= 5 ? {
          type: 'text',
          text: \`⚡ เหลือเพียง \${product.stock} ชิ้น!\`,
          size: 'xs',
          color: '#FF6B6B',
          weight: 'bold'
        } : { type: 'filler' }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'primary',
          color: '#27AE60',
          action: {
            type: 'postback',
            label: '🛒 เพิ่มลงตะกร้า',
            data: \`action=add_cart&id=\${product.id}&name=\${encodeURIComponent(product.name)}&price=\${product.price}\`,
            displayText: \`เพิ่ม \${product.name} ลงตะกร้า\`
          }
        },
        {
          type: 'button',
          style: 'secondary',
          action: {
            type: 'postback',
            label: '📋 รายละเอียด',
            data: \`action=product_detail&id=\${product.id}\`
          }
        }
      ]
    }
  };
}
</code></pre>

      <h3>🎠 สร้าง Carousel จากข้อมูลสินค้า</h3>

      <pre><code class="language-javascript">// Google Apps Script — โหลดสินค้าจาก Google Sheets แล้วสร้าง Carousel
function getProductCatalog(category, page) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID')
    .getSheetByName('Products');
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  // แปลงข้อมูลเป็น Array of Objects
  let products = data.slice(1).map(row => ({
    id: row[0],
    name: row[1],
    description: row[2],
    price: row[3],
    originalPrice: row[4] || null,
    imageUrl: row[5],
    category: row[6],
    stock: row[7],
    isActive: row[8]
  }));

  // กรองตาม category
  if (category && category !== 'all') {
    products = products.filter(p => p.category === category);
  }

  // กรองเฉพาะสินค้าที่ Active
  products = products.filter(p => p.isActive === true);

  // Pagination — แสดงครั้งละ 10 รายการ (Carousel รองรับสูงสุด 12)
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const pagedProducts = products.slice(startIndex, startIndex + pageSize);
  const hasNextPage = products.length > startIndex + pageSize;

  return { products: pagedProducts, hasNextPage, currentPage: page };
}
</code></pre>

      <pre><code class="language-javascript">// สร้าง Flex Carousel Message
function buildCatalogCarousel(category, page) {
  const { products, hasNextPage, currentPage } = getProductCatalog(category, page);

  if (products.length === 0) {
    return {
      type: 'text',
      text: '😅 ไม่พบสินค้าในหมวดหมู่นี้'
    };
  }

  const bubbles = products.map(p => createProductBubble(p));

  // เพิ่ม Bubble "ดูเพิ่มเติม" ถ้ามีหน้าถัดไป
  if (hasNextPage) {
    bubbles.push({
      type: 'bubble',
      size: 'kilo',
      body: {
        type: 'box',
        layout: 'vertical',
        justifyContent: 'center',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: '#3498DB',
            action: {
              type: 'postback',
              label: '📄 ดูสินค้าเพิ่มเติม',
              data: \`action=view_catalog&category=\${category}&page=\${currentPage + 1}\`
            }
          }
        ]
      }
    });
  }

  return {
    type: 'flex',
    altText: '🛒 แคตตาล็อกสินค้า',
    contents: {
      type: 'carousel',
      contents: bubbles
    }
  };
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Flex Carousel รองรับ Bubble ได้สูงสุด 12 ตัว ดังนั้นหากมีสินค้ามากกว่านั้น ต้องใช้ Pagination — เพิ่มปุ่ม "ดูเพิ่มเติม" เป็น Bubble สุดท้าย</div>

      <h3>🗂️ Category Quick Reply</h3>
      <p>เพิ่ม Quick Reply ให้ลูกค้าเลือกหมวดหมู่สินค้าได้:</p>

      <pre><code class="language-javascript">// ส่งแคตตาล็อกพร้อม Quick Reply เลือกหมวดหมู่
function sendCatalogWithCategories(replyToken, category, page) {
  const catalogMessage = buildCatalogCarousel(category || 'all', page || 1);

  // เพิ่ม Quick Reply สำหรับเลือกหมวดหมู่
  catalogMessage.quickReply = {
    items: [
      { type: 'action', action: { type: 'postback', label: '☕ เครื่องดื่ม', data: 'action=view_catalog&category=drinks&page=1' }},
      { type: 'action', action: { type: 'postback', label: '🍰 ขนม', data: 'action=view_catalog&category=bakery&page=1' }},
      { type: 'action', action: { type: 'postback', label: '🫘 เมล็ดกาแฟ', data: 'action=view_catalog&category=beans&page=1' }},
      { type: 'action', action: { type: 'postback', label: '🎁 ของขวัญ', data: 'action=view_catalog&category=gifts&page=1' }},
      { type: 'action', action: { type: 'postback', label: '📋 ทั้งหมด', data: 'action=view_catalog&category=all&page=1' }}
    ]
  };

  sendReply(replyToken, [catalogMessage]);
}
</code></pre>

      <h3>🖼️ Node.js Version — โหลดสินค้าจาก MongoDB</h3>
      <pre><code class="language-javascript">// Node.js + MongoDB — โหลดสินค้า
const Product = require('../models/Product');

async function getCatalog(req, category, page = 1) {
  const pageSize = 10;
  const query = { isActive: true };
  if (category && category !== 'all') {
    query.category = category;
  }

  const total = await Product.countDocuments(query);
  const products = await Product.find(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .lean();

  const hasNextPage = total > page * pageSize;

  const bubbles = products.map(p => createProductBubble(p));

  if (hasNextPage) {
    bubbles.push(createNextPageBubble(category, page + 1));
  }

  return {
    type: 'flex',
    altText: '🛒 แคตตาล็อกสินค้า',
    contents: { type: 'carousel', contents: bubbles }
  };
}
</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ใช้ CDN สำหรับรูปสินค้า เช่น Cloudinary หรือ imgix — ช่วยปรับขนาดรูปอัตโนมัติ และโหลดเร็วขึ้น URL ควรเป็น HTTPS เท่านั้น (LINE บังคับ)</div>

      <h3>📱 ตัวอย่าง Flex JSON แบบเต็ม</h3>
      <pre><code class="language-json">{
  "type": "carousel",
  "contents": [
    {
      "type": "bubble",
      "size": "kilo",
      "hero": {
        "type": "image",
        "url": "https://cdn.example.com/latte.jpg",
        "size": "full",
        "aspectMode": "cover",
        "aspectRatio": "4:3"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          { "type": "text", "text": "Iced Latte", "weight": "bold", "size": "lg" },
          { "type": "text", "text": "ลาเต้เย็น นมสดแท้ 100%", "size": "xs", "color": "#999" },
          { "type": "text", "text": "฿65", "weight": "bold", "size": "xl", "color": "#E74C3C" }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "color": "#27AE60",
            "action": {
              "type": "postback",
              "label": "🛒 เพิ่มลงตะกร้า",
              "data": "action=add_cart&id=P001&name=Iced%20Latte&price=65"
            }
          }
        ]
      }
    }
  ]
}
</code></pre>

      <p>ในบทต่อไป เราจะสร้างระบบตะกร้าสินค้าโดยใช้ Postback Action — ให้ลูกค้าเพิ่ม/ลบสินค้าได้สะดวก!</p>
    `
  },
  {
    number: 4,
    slug: 'shopping-cart',
    emoji: '🧺',
    title: 'ระบบตะกร้าสินค้า (Postback)',
    content: `
      <h2>🧺 ระบบตะกร้าสินค้า (Postback)</h2>
      <p>ระบบตะกร้าสินค้าเป็นหัวใจสำคัญของ LINE Shop — ลูกค้าสามารถเพิ่ม, ลบ, และแก้ไขจำนวนสินค้าได้ โดยเราจะใช้ <strong>Postback Action</strong> เป็นกลไกหลักในการจัดการ</p>

      <img src='/images/lessons/shopping-cart-flex.png' alt='ตะกร้าสินค้าแบบ Flex Message'>

      <h3>💾 การจัดเก็บข้อมูลตะกร้า</h3>
      <p>มี 2 แนวทางหลักในการเก็บข้อมูลตะกร้า:</p>

      <table>
        <thead>
          <tr><th>วิธี</th><th>ข้อดี</th><th>ข้อเสีย</th><th>เหมาะกับ</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Sheets</td><td>ง่าย, ฟรี</td><td>ช้าถ้าข้อมูลเยอะ</td><td>ร้านเล็ก, ออเดอร์ < 100/วัน</td></tr>
          <tr><td>Firebase / MongoDB</td><td>เร็ว, Scale ได้</td><td>ต้อง Setup เพิ่ม</td><td>ร้านขนาดกลาง-ใหญ่</td></tr>
        </tbody>
      </table>

      <h3>📋 โครงสร้างข้อมูลตะกร้า</h3>
      <pre><code class="language-javascript">// โครงสร้างตะกร้าสินค้า
const cartSchema = {
  userId: 'U1234567890abcdef',    // LINE User ID
  items: [
    {
      productId: 'P001',
      name: 'Iced Latte',
      price: 65,
      quantity: 2,
      options: { size: 'L', sugar: '50%', ice: 'ปกติ' }
    },
    {
      productId: 'P003',
      name: 'Croissant',
      price: 45,
      quantity: 1,
      options: {}
    }
  ],
  updatedAt: '2025-06-24T10:30:00Z'
};
</code></pre>

      <h3>🔧 Cart Manager — Google Apps Script</h3>

      <pre><code class="language-javascript">// Google Apps Script — Cart Management
const CART_SHEET = 'Carts';

function getCart(userId) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName(CART_SHEET);
  const data = sheet.getDataRange().getValues();

  const cartItems = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === userId) {
      cartItems.push({
        rowIndex: i + 1,
        productId: data[i][1],
        name: data[i][2],
        price: data[i][3],
        quantity: data[i][4],
        options: JSON.parse(data[i][5] || '{}')
      });
    }
  }
  return cartItems;
}

function addToCart(userId, product) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName(CART_SHEET);
  const cart = getCart(userId);

  // เช็คว่ามีสินค้านี้ในตะกร้าแล้วหรือยัง
  const existing = cart.find(item =>
    item.productId === product.productId &&
    JSON.stringify(item.options) === JSON.stringify(product.options || {})
  );

  if (existing) {
    // เพิ่มจำนวน
    sheet.getRange(existing.rowIndex, 5).setValue(existing.quantity + 1);
  } else {
    // เพิ่มรายการใหม่
    sheet.appendRow([
      userId,
      product.productId,
      product.name,
      product.price,
      1,
      JSON.stringify(product.options || {}),
      new Date()
    ]);
  }
}

function removeFromCart(userId, productId) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName(CART_SHEET);
  const cart = getCart(userId);
  const item = cart.find(i => i.productId === productId);

  if (item) {
    sheet.deleteRow(item.rowIndex);
  }
}

function updateCartQuantity(userId, productId, newQuantity) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName(CART_SHEET);
  const cart = getCart(userId);
  const item = cart.find(i => i.productId === productId);

  if (item) {
    if (newQuantity <= 0) {
      sheet.deleteRow(item.rowIndex);
    } else {
      sheet.getRange(item.rowIndex, 5).setValue(newQuantity);
    }
  }
}

function clearCart(userId) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName(CART_SHEET);
  const data = sheet.getDataRange().getValues();

  // ลบจากล่างขึ้นบนเพื่อไม่ให้ row index เลื่อน
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === userId) {
      sheet.deleteRow(i + 1);
    }
  }
}
</code></pre>

      <h3>🎛️ Postback Handler สำหรับตะกร้า</h3>

      <pre><code class="language-javascript">// จัดการ Postback Events ที่เกี่ยวกับตะกร้า
function handleCartPostback(event) {
  const data = parsePostbackData(event.postback.data);
  const userId = event.source.userId;
  const replyToken = event.replyToken;

  switch (data.action) {
    case 'add_cart':
      addToCart(userId, {
        productId: data.id,
        name: decodeURIComponent(data.name),
        price: parseInt(data.price),
        options: data.options ? JSON.parse(decodeURIComponent(data.options)) : {}
      });
      const cart = getCart(userId);
      sendReply(replyToken, [
        { type: 'text', text: \`✅ เพิ่ม \${decodeURIComponent(data.name)} ลงตะกร้าแล้ว! (รวม \${cart.length} รายการ)\` },
        buildCartQuickReply()
      ]);
      break;

    case 'view_cart':
      sendCartFlex(replyToken, userId);
      break;

    case 'remove_cart':
      removeFromCart(userId, data.id);
      sendCartFlex(replyToken, userId);
      break;

    case 'update_qty':
      updateCartQuantity(userId, data.id, parseInt(data.qty));
      sendCartFlex(replyToken, userId);
      break;

    case 'clear_cart':
      clearCart(userId);
      sendReply(replyToken, [{ type: 'text', text: '🗑️ ล้างตะกร้าเรียบร้อยแล้ว' }]);
      break;

    case 'checkout':
      handleCheckout(replyToken, userId);
      break;
  }
}

// แยก postback data เป็น object
function parsePostbackData(dataString) {
  const params = {};
  dataString.split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    params[key] = value;
  });
  return params;
}
</code></pre>

      <h3>🧾 Cart Summary Flex Message</h3>
      <p>แสดงตะกร้าสินค้าด้วย Flex Message ที่สวยงาม:</p>

      <pre><code class="language-javascript">function buildCartFlex(userId) {
  const cart = getCart(userId);

  if (cart.length === 0) {
    return {
      type: 'flex',
      altText: '🧺 ตะกร้าว่างเปล่า',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            { type: 'text', text: '🧺 ตะกร้าว่างเปล่า', weight: 'bold', size: 'lg', align: 'center' },
            { type: 'text', text: 'ยังไม่มีสินค้าในตะกร้า\\nกดดูสินค้าเพื่อเริ่มช้อปปิ้ง!', wrap: true, align: 'center', margin: 'md', color: '#888888' }
          ]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'button',
            style: 'primary',
            color: '#3498DB',
            action: { type: 'postback', label: '🛒 ดูสินค้า', data: 'action=view_catalog&page=1' }
          }]
        }
      }
    };
  }

  // สร้างรายการสินค้า
  const itemContents = [];
  let totalPrice = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    totalPrice += subtotal;

    // ชื่อสินค้า + ราคา
    itemContents.push({
      type: 'box',
      layout: 'horizontal',
      contents: [
        { type: 'text', text: \`\${item.name}\`, flex: 4, size: 'sm', wrap: true },
        { type: 'text', text: \`x\${item.quantity}\`, flex: 1, size: 'sm', align: 'center' },
        { type: 'text', text: \`฿\${subtotal.toLocaleString()}\`, flex: 2, size: 'sm', align: 'end', weight: 'bold' }
      ]
    });

    // ปุ่มเพิ่ม/ลดจำนวน + ลบ
    itemContents.push({
      type: 'box',
      layout: 'horizontal',
      margin: 'xs',
      contents: [
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          flex: 1,
          action: {
            type: 'postback',
            label: '➖',
            data: \`action=update_qty&id=\${item.productId}&qty=\${item.quantity - 1}\`
          }
        },
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          flex: 1,
          action: {
            type: 'postback',
            label: '➕',
            data: \`action=update_qty&id=\${item.productId}&qty=\${item.quantity + 1}\`
          }
        },
        {
          type: 'button',
          style: 'secondary',
          height: 'sm',
          flex: 1,
          action: {
            type: 'postback',
            label: '🗑️',
            data: \`action=remove_cart&id=\${item.productId}\`
          }
        }
      ]
    });

    // Separator
    itemContents.push({ type: 'separator', margin: 'md' });
  });

  // ยอมรวม
  itemContents.push({
    type: 'box',
    layout: 'horizontal',
    margin: 'lg',
    contents: [
      { type: 'text', text: 'ยอมรวม', weight: 'bold', size: 'md', flex: 3 },
      { type: 'text', text: \`฿\${totalPrice.toLocaleString()}\`, weight: 'bold', size: 'lg', align: 'end', flex: 2, color: '#E74C3C' }
    ]
  });

  return {
    type: 'flex',
    altText: \`🧺 ตะกร้าสินค้า (\${cart.length} รายการ) ฿\${totalPrice.toLocaleString()}\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'horizontal',
        backgroundColor: '#27AE60',
        paddingAll: 'lg',
        contents: [
          { type: 'text', text: '🧺 ตะกร้าสินค้า', color: '#FFFFFF', weight: 'bold', size: 'lg' },
          { type: 'text', text: \`\${cart.length} รายการ\`, color: '#FFFFFF', size: 'sm', align: 'end', gravity: 'bottom' }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: itemContents
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: '#E74C3C',
            action: { type: 'postback', label: '💳 ชำระเงิน', data: 'action=checkout' }
          },
          {
            type: 'button',
            style: 'secondary',
            action: { type: 'postback', label: '🗑️ ล้างตะกร้า', data: 'action=clear_cart' }
          }
        ]
      }
    }
  };
}
</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> เพิ่ม Quick Reply ให้ตะกร้า เช่น [ดูสินค้าเพิ่ม] [ใส่โค้ดส่วนลด] [เลือกที่อยู่จัดส่ง] — ช่วยให้ลูกค้าทำขั้นตอนต่อไปได้ง่าย</div>

      <h3>🔄 Node.js Version — Firebase Realtime Database</h3>
      <pre><code class="language-javascript">// Node.js + Firebase
const admin = require('firebase-admin');
const db = admin.database();

class CartManager {
  static async getCart(userId) {
    const snapshot = await db.ref(\`carts/\${userId}\`).once('value');
    return snapshot.val() || { items: [], updatedAt: null };
  }

  static async addItem(userId, product) {
    const cart = await this.getCart(userId);
    const existingIndex = cart.items.findIndex(
      item => item.productId === product.productId &&
              JSON.stringify(item.options) === JSON.stringify(product.options)
    );

    if (existingIndex >= 0) {
      cart.items[existingIndex].quantity += 1;
    } else {
      cart.items.push({ ...product, quantity: 1 });
    }

    cart.updatedAt = new Date().toISOString();
    await db.ref(\`carts/\${userId}\`).set(cart);
    return cart;
  }

  static async removeItem(userId, productId) {
    const cart = await this.getCart(userId);
    cart.items = cart.items.filter(item => item.productId !== productId);
    cart.updatedAt = new Date().toISOString();
    await db.ref(\`carts/\${userId}\`).set(cart);
    return cart;
  }

  static async clearCart(userId) {
    await db.ref(\`carts/\${userId}\`).remove();
  }
}

module.exports = CartManager;
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Postback data มีขนาดจำกัดที่ 300 ตัวอักษร! หากต้องส่งข้อมูลมากกว่านั้น ให้ส่งแค่ ID แล้วไปดึงรายละเอียดจาก Database แทน</div>

      <p>ในบทต่อไป เราจะเพิ่มระบบชำระเงินผ่าน PromptPay — ให้ลูกค้าจ่ายเงินและส่งสลิปได้เลย!</p>
    `
  },
  {
    number: 5,
    slug: 'payment-promptpay',
    emoji: '💳',
    title: 'ชำระเงิน — PromptPay + สลิป',
    content: `
      <h2>💳 ชำระเงิน — PromptPay + สลิป</h2>
      <p>ระบบชำระเงินเป็นส่วนที่สำคัญที่สุดของร้านค้าออนไลน์ สำหรับร้านค้าบน LINE วิธีที่ง่ายและนิยมที่สุดคือ <strong>PromptPay QR Code</strong> — ลูกค้าสแกนจ่าย แล้วส่งสลิปกลับมา</p>

      <img src='/images/lessons/promptpay-flow.png' alt='ขั้นตอนการชำระเงิน PromptPay'>

      <h3>📊 Flow การชำระเงิน</h3>
      <div class='step'><span class='step-number'>1</span>
        <strong>ลูกค้ากด "ชำระเงิน"</strong> — ระบบสร้าง Order และ PromptPay QR Code
      </div>
      <div class='step'><span class='step-number'>2</span>
        <strong>แสดง QR Code + ยอดเงิน</strong> — ส่ง Flex Message พร้อม QR Code ให้ลูกค้าสแกน
      </div>
      <div class='step'><span class='step-number'>3</span>
        <strong>ลูกค้าจ่ายเงิน + ส่งสลิป</strong> — ลูกค้าโอนเงินแล้วถ่ายรูปสลิปส่งกลับมา
      </div>
      <div class='step'><span class='step-number'>4</span>
        <strong>ยืนยันการชำระเงิน</strong> — ระบบ (หรือแอดมิน) ตรวจสอบสลิปและยืนยัน
      </div>
      <div class='step'><span class='step-number'>5</span>
        <strong>ส่งใบเสร็จ</strong> — ส่ง Flex Message ใบเสร็จให้ลูกค้า
      </div>

      <h3>📱 สร้าง PromptPay QR Code</h3>
      <p>ใช้ library <code>promptpay-qr</code> ในการสร้าง QR Code สำหรับ PromptPay:</p>

      <pre><code class="language-javascript">// Node.js — สร้าง PromptPay QR Code
const generatePayload = require('promptpay-qr');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

async function generatePromptPayQR(amount) {
  // หมายเลข PromptPay (เบอร์โทร หรือ เลขบัตรประชาชน)
  const PROMPTPAY_ID = '0812345678';

  // สร้าง payload
  const payload = generatePayload(PROMPTPAY_ID, { amount });

  // สร้าง QR Code เป็น Base64 image
  const qrDataUrl = await QRCode.toDataURL(payload, {
    width: 400,
    margin: 2,
    color: { dark: '#000000', light: '#FFFFFF' }
  });

  return qrDataUrl;
}

// สร้าง QR Code แล้วอัปโหลดขึ้น server
async function createPaymentQR(orderId, amount) {
  const qrDataUrl = await generatePromptPayQR(amount);

  // แปลง Base64 เป็น Buffer แล้วอัปโหลด
  const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  // อัปโหลดไปที่ Cloud Storage (ตัวอย่างใช้ Firebase Storage)
  const bucket = admin.storage().bucket();
  const file = bucket.file(\`qrcodes/\${orderId}.png\`);
  await file.save(buffer, { contentType: 'image/png' });

  const [url] = await file.getSignedUrl({
    action: 'read',
    expires: Date.now() + 24 * 60 * 60 * 1000 // หมดอายุ 24 ชั่วโมง
  });

  return url;
}
</code></pre>

      <h3>💰 Checkout Flow — สร้าง Order</h3>
      <pre><code class="language-javascript">// Google Apps Script — Checkout Process
function handleCheckout(replyToken, userId) {
  const cart = getCart(userId);
  if (cart.length === 0) {
    sendReply(replyToken, [{ type: 'text', text: '🧺 ตะกร้าว่างเปล่า ไม่สามารถชำระเงินได้' }]);
    return;
  }

  // คำนวณยอดรวม
  let totalPrice = 0;
  cart.forEach(item => { totalPrice += item.price * item.quantity; });

  // สร้าง Order
  const orderId = generateOrderId(); // เช่น ORD-20250624-001
  const orderSheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Orders');

  orderSheet.appendRow([
    orderId,
    userId,
    JSON.stringify(cart),
    totalPrice,
    'pending_payment',  // สถานะ
    new Date(),
    '',  // payment_at
    '',  // confirmed_by
    ''   // tracking_number
  ]);

  // สร้าง PromptPay QR (ใน Google Apps Script ใช้ API ภายนอก)
  const qrUrl = generateQRCodeUrl(totalPrice);

  // ส่ง Payment Flex Message
  sendPaymentFlex(replyToken, orderId, totalPrice, qrUrl, cart);

  // ล้างตะกร้า (หรือเก็บไว้จนกว่าจะยืนยันชำระเงิน)
  // clearCart(userId);
}

function generateOrderId() {
  const today = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'yyyyMMdd');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return \`ORD-\${today}-\${random}\`;
}

// ใช้ Google Chart API สำหรับ QR Code (วิธีง่ายใน GAS)
function generateQRCodeUrl(amount) {
  const promptpayId = '0812345678';
  // สร้าง PromptPay payload ด้วยมือ (simplified)
  const payload = createPromptPayPayload(promptpayId, amount);
  return \`https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl=\${encodeURIComponent(payload)}\`;
}
</code></pre>

      <h3>💸 Payment Flex Message</h3>
      <pre><code class="language-javascript">function sendPaymentFlex(replyToken, orderId, totalPrice, qrUrl, cart) {
  const flex = {
    type: 'flex',
    altText: \`💳 ชำระเงิน ฿\${totalPrice.toLocaleString()} — \${orderId}\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#2C3E50',
        paddingAll: 'lg',
        contents: [
          { type: 'text', text: '💳 ชำระเงิน', color: '#FFFFFF', weight: 'bold', size: 'lg' },
          { type: 'text', text: \`Order: \${orderId}\`, color: '#95A5A6', size: 'xs', margin: 'sm' }
        ]
      },
      hero: {
        type: 'image',
        url: qrUrl,
        size: 'lg',
        aspectMode: 'fit',
        aspectRatio: '1:1',
        backgroundColor: '#FFFFFF'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: 'สแกน QR Code เพื่อชำระเงิน', align: 'center', size: 'sm', color: '#888888' },
          { type: 'separator', margin: 'lg' },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'lg',
            contents: [
              { type: 'text', text: 'ยอดชำระ', size: 'lg', weight: 'bold' },
              { type: 'text', text: \`฿\${totalPrice.toLocaleString()}\`, size: 'xxl', weight: 'bold', align: 'end', color: '#E74C3C' }
            ]
          },
          { type: 'text', text: 'PromptPay: 081-234-5678', align: 'center', size: 'sm', color: '#888888', margin: 'md' },
          { type: 'separator', margin: 'lg' },
          { type: 'text', text: '📸 หลังโอนเงินแล้ว กรุณาส่งรูปสลิป\\nมาในแชทนี้เพื่อยืนยันการชำระเงิน', wrap: true, size: 'sm', color: '#E67E22', margin: 'md' }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            style: 'secondary',
            action: { type: 'postback', label: '❌ ยกเลิกคำสั่งซื้อ', data: \`action=cancel_order&id=\${orderId}\` }
          }
        ]
      }
    }
  };

  sendReply(replyToken, [flex]);
}
</code></pre>

      <h3>📸 รับและตรวจสอบสลิป</h3>
      <p>เมื่อลูกค้าส่งรูปสลิปมา เราจะรับเป็น Image Message:</p>

      <pre><code class="language-javascript">// Node.js — รับรูปสลิปจากลูกค้า
async function handleImageMessage(event) {
  const userId = event.source.userId;

  // เช็คว่ามี Order ที่รอชำระเงินอยู่หรือไม่
  const pendingOrder = await getPendingOrder(userId);
  if (!pendingOrder) {
    return replyText(event.replyToken, '📸 ขอบคุณสำหรับรูปภาพ! แต่ไม่พบคำสั่งซื้อที่รอชำระเงิน');
  }

  // ดาวน์โหลดรูปภาพจาก LINE
  const messageId = event.message.id;
  const imageBuffer = await downloadContent(messageId);

  // บันทึกรูปสลิป
  const slipUrl = await uploadSlip(pendingOrder.orderId, imageBuffer);

  // อัปเดตสถานะ Order
  await updateOrderStatus(pendingOrder.orderId, 'slip_received', { slipUrl });

  // ตอบกลับลูกค้า
  await replyMessages(event.replyToken, [
    { type: 'text', text: \`✅ ได้รับสลิปสำหรับออเดอร์ \${pendingOrder.orderId} แล้ว!\` },
    { type: 'text', text: '⏳ กำลังตรวจสอบ... จะแจ้งผลภายใน 5 นาที' }
  ]);

  // แจ้งแอดมิน (Push Message)
  await notifyAdmin(pendingOrder.orderId, slipUrl, pendingOrder.totalPrice);
}

// ดาวน์โหลด Content จาก LINE
async function downloadContent(messageId) {
  const res = await axios.get(
    \`https://api-data.line.me/v2/bot/message/\${messageId}/content\`,
    {
      headers: { Authorization: \`Bearer \${LINE_TOKEN}\` },
      responseType: 'arraybuffer'
    }
  );
  return Buffer.from(res.data);
}
</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> สำหรับร้านที่ต้องการตรวจสอบสลิปอัตโนมัติ สามารถใช้ SlipOK API (slipok.com) หรือ OpenSlipVerify — ส่งรูปสลิปไปตรวจจะได้รับข้อมูลยอดเงิน, เวลาโอน, บัญชีผู้โอน กลับมา</div>

      <h3>🧾 สร้างใบเสร็จ Flex Message</h3>
      <pre><code class="language-javascript">function buildReceiptFlex(order) {
  const itemContents = order.items.map(item => ({
    type: 'box',
    layout: 'horizontal',
    contents: [
      { type: 'text', text: \`\${item.name} x\${item.quantity}\`, flex: 4, size: 'sm' },
      { type: 'text', text: \`฿\${(item.price * item.quantity).toLocaleString()}\`, flex: 2, size: 'sm', align: 'end' }
    ]
  }));

  return {
    type: 'flex',
    altText: \`🧾 ใบเสร็จ \${order.orderId}\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#27AE60',
        paddingAll: 'lg',
        contents: [
          { type: 'text', text: '🧾 ใบเสร็จรับเงิน', color: '#FFFFFF', weight: 'bold', size: 'lg' },
          { type: 'text', text: \`\${order.orderId}\`, color: '#E8F5E9', size: 'xs' }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: 'Coffee Buddy', weight: 'bold', size: 'md' },
          { type: 'text', text: \`วันที่: \${formatDate(order.paidAt)}\`, size: 'xs', color: '#888888' },
          { type: 'separator', margin: 'lg' },
          ...itemContents,
          { type: 'separator', margin: 'lg' },
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'md',
            contents: [
              { type: 'text', text: 'รวมทั้งหมด', weight: 'bold', size: 'md' },
              { type: 'text', text: \`฿\${order.totalPrice.toLocaleString()}\`, weight: 'bold', size: 'lg', align: 'end', color: '#E74C3C' }
            ]
          },
          { type: 'text', text: '✅ ชำระเงินแล้ว — PromptPay', size: 'xs', color: '#27AE60', margin: 'md' }
        ]
      }
    }
  };
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> อย่าลืมตรวจสอบว่ายอดเงินในสลิปตรงกับยอดคำสั่งซื้อ! สลิปปลอมเป็นปัญหาที่พบบ่อย — ใช้ API ตรวจสอบสลิปอัตโนมัติจะปลอดภัยกว่า</div>

      <p>ในบทต่อไป เราจะสร้างระบบติดตามสถานะคำสั่งซื้อ — ให้ลูกค้าเห็น Timeline ตั้งแต่สั่งซื้อจนถึงรับของ!</p>
    `
  },
  {
    number: 6,
    slug: 'order-status',
    emoji: '📦',
    title: 'สถานะคำสั่งซื้อ Timeline',
    content: `
      <h2>📦 สถานะคำสั่งซื้อ Timeline</h2>
      <p>การอัปเดตสถานะคำสั่งซื้อเป็นสิ่งที่ลูกค้าคาดหวัง — เมื่อลูกค้าสั่งซื้อสินค้า พวกเขาต้องการรู้ว่าออเดอร์อยู่ขั้นตอนไหน เราจะใช้ <strong>Timeline Flex Message</strong> แสดงสถานะอย่างสวยงาม</p>

      <img src='/images/lessons/order-timeline.png' alt='Order Status Timeline Flex Message'>

      <h3>📊 สถานะคำสั่งซื้อ 5 ขั้นตอน</h3>
      <div class='step'><span class='step-number'>1</span><strong>📝 Ordered (สั่งซื้อแล้ว)</strong> — ลูกค้ากดสั่งซื้อ รอชำระเงิน</div>
      <div class='step'><span class='step-number'>2</span><strong>💰 Paid (ชำระเงินแล้ว)</strong> — ได้รับสลิป/ยืนยันการชำระเงิน</div>
      <div class='step'><span class='step-number'>3</span><strong>✅ Confirmed (ยืนยันแล้ว)</strong> — ร้านค้ายืนยันออเดอร์ เตรียมจัดส่ง</div>
      <div class='step'><span class='step-number'>4</span><strong>🚚 Shipped (จัดส่งแล้ว)</strong> — ส่งพัสดุแล้ว มีเลขพัสดุ</div>
      <div class='step'><span class='step-number'>5</span><strong>📦 Delivered (ได้รับแล้ว)</strong> — ลูกค้าได้รับสินค้า</div>

      <h3>🎨 Timeline Flex Message</h3>
      <p>สร้าง Timeline ที่แสดงสถานะแต่ละขั้น — ขั้นที่ผ่านแล้วจะเป็นสีเขียว, ขั้นปัจจุบันเป็นสีส้ม, ขั้นที่ยังไม่ถึงเป็นสีเทา:</p>

      <pre><code class="language-javascript">// สร้าง Timeline Flex Message
function buildOrderTimeline(order) {
  const statuses = [
    { key: 'ordered',   icon: '📝', label: 'สั่งซื้อแล้ว',     time: order.orderedAt },
    { key: 'paid',      icon: '💰', label: 'ชำระเงินแล้ว',    time: order.paidAt },
    { key: 'confirmed', icon: '✅', label: 'ยืนยันแล้ว',      time: order.confirmedAt },
    { key: 'shipped',   icon: '🚚', label: 'จัดส่งแล้ว',      time: order.shippedAt },
    { key: 'delivered', icon: '📦', label: 'ได้รับแล้ว',       time: order.deliveredAt }
  ];

  const statusOrder = ['ordered', 'paid', 'confirmed', 'shipped', 'delivered'];
  const currentIndex = statusOrder.indexOf(order.status);

  const timelineContents = [];

  statuses.forEach((status, index) => {
    let dotColor, textColor, lineColor;

    if (index < currentIndex) {
      // ผ่านแล้ว — สีเขียว
      dotColor = '#27AE60';
      textColor = '#27AE60';
      lineColor = '#27AE60';
    } else if (index === currentIndex) {
      // ขั้นปัจจุบัน — สีส้ม
      dotColor = '#F39C12';
      textColor = '#F39C12';
      lineColor = '#E0E0E0';
    } else {
      // ยังไม่ถึง — สีเทา
      dotColor = '#E0E0E0';
      textColor = '#CCCCCC';
      lineColor = '#E0E0E0';
    }

    // จุดบน Timeline
    timelineContents.push({
      type: 'box',
      layout: 'horizontal',
      spacing: 'lg',
      contents: [
        // จุดกลม
        {
          type: 'box',
          layout: 'vertical',
          flex: 0,
          width: '30px',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              width: '20px',
              height: '20px',
              cornerRadius: '10px',
              backgroundColor: dotColor,
              contents: [{ type: 'filler' }]
            }
          ],
          alignItems: 'center'
        },
        // ข้อมูลสถานะ
        {
          type: 'box',
          layout: 'vertical',
          flex: 4,
          contents: [
            {
              type: 'text',
              text: \`\${status.icon} \${status.label}\`,
              weight: index === currentIndex ? 'bold' : 'regular',
              size: index === currentIndex ? 'md' : 'sm',
              color: textColor
            },
            status.time ? {
              type: 'text',
              text: formatDateTime(status.time),
              size: 'xxs',
              color: '#AAAAAA'
            } : { type: 'filler' }
          ]
        }
      ]
    });

    // เส้นเชื่อม (ยกเว้นอันสุดท้าย)
    if (index < statuses.length - 1) {
      timelineContents.push({
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            flex: 0,
            width: '30px',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                width: '3px',
                height: '20px',
                backgroundColor: index < currentIndex ? '#27AE60' : '#E0E0E0',
                contents: [{ type: 'filler' }]
              }
            ],
            alignItems: 'center'
          },
          { type: 'filler' }
        ]
      });
    }
  });

  // เพิ่มเลขพัสดุ (ถ้ามี)
  if (order.trackingNumber) {
    timelineContents.push({ type: 'separator', margin: 'lg' });
    timelineContents.push({
      type: 'box',
      layout: 'vertical',
      margin: 'lg',
      contents: [
        { type: 'text', text: '📮 เลขพัสดุ:', size: 'sm', color: '#888888' },
        { type: 'text', text: order.trackingNumber, size: 'md', weight: 'bold', color: '#3498DB', margin: 'sm' },
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '🔍 ติดตามพัสดุ',
            uri: getTrackingUrl(order.trackingNumber, order.courier)
          }
        }
      ]
    });
  }

  return {
    type: 'flex',
    altText: \`📦 สถานะออเดอร์ \${order.orderId}: \${statuses[currentIndex].label}\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#34495E',
        paddingAll: 'lg',
        contents: [
          { type: 'text', text: '📦 สถานะคำสั่งซื้อ', color: '#FFFFFF', weight: 'bold', size: 'lg' },
          { type: 'text', text: order.orderId, color: '#95A5A6', size: 'xs', margin: 'sm' }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'none',
        paddingAll: 'lg',
        contents: timelineContents
      }
    }
  };
}
</code></pre>

      <h3>🔗 Tracking URL สำหรับขนส่งต่าง ๆ</h3>
      <pre><code class="language-javascript">function getTrackingUrl(trackingNumber, courier) {
  const trackingUrls = {
    'thaipost':  \`https://track.thailandpost.co.th/?trackNumber=\${trackingNumber}\`,
    'kerry':     \`https://th.kerryexpress.com/th/track/?track=\${trackingNumber}\`,
    'flash':     \`https://flashexpress.com/fle/tracking?se=\${trackingNumber}\`,
    'jt':        \`https://www.jtexpress.co.th/index/query/gzquery.html?bills=\${trackingNumber}\`,
    'scg':       \`https://www.scgexpress.co.th/tracking/detail/\${trackingNumber}\`,
    'ninjavan':  \`https://www.ninjavan.co/th-th/tracking?id=\${trackingNumber}\`
  };

  return trackingUrls[courier] || \`https://track.thailandpost.co.th/?trackNumber=\${trackingNumber}\`;
}
</code></pre>

      <h3>📲 Push Notification เมื่อสถานะเปลี่ยน</h3>
      <pre><code class="language-javascript">// Google Apps Script — อัปเดตสถานะ + แจ้งลูกค้า
function updateOrderAndNotify(orderId, newStatus, extraData) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Orders');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === orderId) {
      const userId = data[i][1];

      // อัปเดตสถานะ
      sheet.getRange(i + 1, 5).setValue(newStatus);

      // อัปเดต timestamp ตามสถานะ
      const statusColumns = {
        'paid': 7,
        'confirmed': 8,
        'shipped': 9,
        'delivered': 10
      };

      if (statusColumns[newStatus]) {
        sheet.getRange(i + 1, statusColumns[newStatus]).setValue(new Date());
      }

      // อัปเดตเลขพัสดุ (ถ้ามี)
      if (extraData && extraData.trackingNumber) {
        sheet.getRange(i + 1, 11).setValue(extraData.trackingNumber);
        sheet.getRange(i + 1, 12).setValue(extraData.courier || 'thaipost');
      }

      // สร้าง Order object
      const order = buildOrderObject(data[i], newStatus, extraData);

      // ส่ง Push Notification ให้ลูกค้า
      const timeline = buildOrderTimeline(order);
      pushMessage(userId, [
        {
          type: 'text',
          text: getStatusNotificationText(newStatus, orderId, extraData)
        },
        timeline
      ]);

      break;
    }
  }
}

function getStatusNotificationText(status, orderId, extraData) {
  const messages = {
    'paid': \`💰 ได้รับการชำระเงินสำหรับออเดอร์ \${orderId} แล้ว!\`,
    'confirmed': \`✅ ออเดอร์ \${orderId} ได้รับการยืนยันแล้ว กำลังเตรียมจัดส่ง!\`,
    'shipped': \`🚚 ออเดอร์ \${orderId} จัดส่งแล้ว!\\nเลขพัสดุ: \${extraData?.trackingNumber || '-'}\`,
    'delivered': \`📦 ออเดอร์ \${orderId} ถึงมือคุณแล้ว! ขอบคุณที่อุดหนุนค่ะ 🙏\`
  };
  return messages[status] || \`📋 สถานะออเดอร์ \${orderId} อัปเดตเป็น: \${status}\`;
}
</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> เพิ่มปุ่ม "ได้รับสินค้าแล้ว" ใน Flex Message ของสถานะ shipped — ให้ลูกค้ากดยืนยันว่าได้รับของ จะช่วยให้ร้านค้าปิดออเดอร์ได้เร็วขึ้น และเป็นจังหวะที่ดีในการขอ Feedback!</div>

      <h3>📋 Admin Dashboard — อัปเดตสถานะผ่าน LIFF</h3>
      <p>แอดมินสามารถอัปเดตสถานะออเดอร์ผ่าน LIFF App (LINE Front-end Framework):</p>

      <pre><code class="language-javascript">// ตัวอย่าง Admin LIFF App — อัปเดตสถานะ
async function updateStatus(orderId, status, trackingNumber) {
  const response = await fetch('/api/orders/update-status', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderId,
      status,
      trackingNumber,
      courier: document.getElementById('courier-select').value
    })
  });

  if (response.ok) {
    alert('✅ อัปเดตสถานะเรียบร้อย! ลูกค้าจะได้รับแจ้งเตือนอัตโนมัติ');
  }
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Push Message มีค่าใช้จ่าย! LINE Messaging API ฟรี 500 ข้อความ/เดือน (Free plan) — หากส่งแจ้งเตือนทุกสถานะ ออเดอร์ละ 4-5 ข้อความ จะรองรับได้ประมาณ 100 ออเดอร์/เดือน ควรเลือกแจ้งเฉพาะสถานะสำคัญ หรืออัปเกรดเป็น Light/Standard plan</div>

      <p>ในบทต่อไป เราจะสร้างระบบสะสมแต้มและคูปอง — เพื่อให้ลูกค้ากลับมาซื้อซ้ำ!</p>
    `
  },
  {
    number: 7,
    slug: 'loyalty-coupon',
    emoji: '🎁',
    title: 'ระบบสะสมแต้ม + คูปอง',
    content: `
      <h2>🎁 ระบบสะสมแต้ม + คูปอง</h2>
      <p>ระบบ Loyalty เป็นกลยุทธ์ที่ทรงพลังในการทำให้ลูกค้ากลับมาซื้อซ้ำ — ทุกครั้งที่ซื้อสินค้าจะได้รับแต้ม เมื่อสะสมถึงระดับที่กำหนดจะได้รับคูปองส่วนลดหรืออัปเกรดสมาชิก</p>

      <img src='/images/lessons/loyalty-system.png' alt='ระบบสะสมแต้มและคูปอง'>

      <h3>🏆 ระบบ Tier สมาชิก</h3>
      <table>
        <thead>
          <tr><th>Tier</th><th>แต้มที่ต้องสะสม</th><th>สิทธิพิเศษ</th><th>สีประจำ</th></tr>
        </thead>
        <tbody>
          <tr><td>🥉 Bronze</td><td>0 - 499</td><td>สะสมแต้ม 1 แต้ม/฿10</td><td>#CD7F32</td></tr>
          <tr><td>🥈 Silver</td><td>500 - 1,999</td><td>สะสม 1.5x + ส่งฟรี 1 ครั้ง/เดือน</td><td>#C0C0C0</td></tr>
          <tr><td>🥇 Gold</td><td>2,000 - 4,999</td><td>สะสม 2x + ส่งฟรี 3 ครั้ง/เดือน + ส่วนลด 5%</td><td>#FFD700</td></tr>
          <tr><td>💎 Diamond</td><td>5,000+</td><td>สะสม 3x + ส่งฟรีทุกครั้ง + ส่วนลด 10%</td><td>#B9F2FF</td></tr>
        </tbody>
      </table>

      <h3>💾 โครงสร้างข้อมูล Loyalty</h3>
      <pre><code class="language-javascript">// โครงสร้างข้อมูลสมาชิก
const memberSchema = {
  userId: 'U1234567890abcdef',
  displayName: 'สมชาย',
  totalPoints: 1250,        // แต้มสะสมรวมทั้งหมด (ไม่ลดเมื่อใช้)
  availablePoints: 800,     // แต้มที่ใช้ได้ (ลดเมื่อแลกคูปอง)
  tier: 'silver',
  joinedAt: '2025-01-15T10:00:00Z',
  lastPurchaseAt: '2025-06-24T14:30:00Z'
};

// โครงสร้างข้อมูลคูปอง
const couponSchema = {
  couponId: 'CPN-ABC123',
  code: 'COFFEE20',
  type: 'percentage',       // 'percentage' หรือ 'fixed'
  value: 20,                // 20% หรือ ฿20
  minPurchase: 200,         // ยอมขั้นต่ำ
  maxDiscount: 100,         // ส่วนลดสูงสุด (สำหรับ percentage)
  expiresAt: '2025-07-31T23:59:59Z',
  isUsed: false,
  usedAt: null,
  userId: 'U1234567890abcdef'
};
</code></pre>

      <h3>⭐ ระบบสะสมแต้ม</h3>
      <pre><code class="language-javascript">// Google Apps Script — Points Management
function addPoints(userId, orderAmount, orderId) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Members');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === userId) {
      const currentTotal = data[i][2];
      const currentAvailable = data[i][3];
      const currentTier = data[i][4];

      // คำนวณแต้มตาม Tier
      const multiplier = getPointMultiplier(currentTier);
      const earnedPoints = Math.floor(orderAmount / 10) * multiplier;

      // อัปเดตแต้ม
      const newTotal = currentTotal + earnedPoints;
      const newAvailable = currentAvailable + earnedPoints;
      sheet.getRange(i + 1, 3).setValue(newTotal);
      sheet.getRange(i + 1, 4).setValue(newAvailable);

      // เช็คว่าต้องอัปเกรด Tier หรือไม่
      const newTier = calculateTier(newTotal);
      if (newTier !== currentTier) {
        sheet.getRange(i + 1, 5).setValue(newTier);
        notifyTierUpgrade(userId, newTier, newTotal);
      }

      // บันทึก Points Transaction
      logPointsTransaction(userId, 'earn', earnedPoints, orderId, newAvailable);

      // แจ้งลูกค้า
      sendPointsEarnedFlex(userId, earnedPoints, newAvailable, newTier);

      return { earnedPoints, newTotal, newAvailable, newTier };
    }
  }

  // สมาชิกใหม่ — สร้างข้อมูล
  return createNewMember(userId, orderAmount, orderId);
}

function getPointMultiplier(tier) {
  const multipliers = { 'bronze': 1, 'silver': 1.5, 'gold': 2, 'diamond': 3 };
  return multipliers[tier] || 1;
}

function calculateTier(totalPoints) {
  if (totalPoints >= 5000) return 'diamond';
  if (totalPoints >= 2000) return 'gold';
  if (totalPoints >= 500) return 'silver';
  return 'bronze';
}
</code></pre>

      <h3>🎟️ ระบบคูปอง</h3>
      <pre><code class="language-javascript">// สร้างคูปองส่วนลด
function generateCoupon(userId, type, value, minPurchase, maxDiscount, expiryDays) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Coupons');

  // สร้างรหัสคูปอง unique
  const code = generateCouponCode();
  const couponId = 'CPN-' + Utilities.getUuid().substring(0, 8).toUpperCase();

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expiryDays);

  sheet.appendRow([
    couponId,
    code,
    userId,
    type,           // 'percentage' หรือ 'fixed'
    value,          // เช่น 20 (20% หรือ ฿20)
    minPurchase,
    maxDiscount,
    expiresAt,
    false,          // isUsed
    '',             // usedAt
    new Date()      // createdAt
  ]);

  return { couponId, code, type, value, minPurchase, maxDiscount, expiresAt };
}

function generateCouponCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// แลกแต้มเป็นคูปอง
function redeemPointsForCoupon(userId, rewardType) {
  const rewards = {
    'discount_10': { points: 100, type: 'percentage', value: 10, minPurchase: 200, maxDiscount: 50, days: 30 },
    'discount_20': { points: 200, type: 'percentage', value: 20, minPurchase: 300, maxDiscount: 100, days: 30 },
    'free_shipping': { points: 150, type: 'fixed', value: 50, minPurchase: 0, maxDiscount: 50, days: 14 },
    'free_drink': { points: 300, type: 'fixed', value: 65, minPurchase: 0, maxDiscount: 65, days: 7 }
  };

  const reward = rewards[rewardType];
  if (!reward) return { success: false, message: 'ไม่พบรางวัลที่เลือก' };

  // เช็คแต้ม
  const member = getMember(userId);
  if (member.availablePoints < reward.points) {
    return { success: false, message: \`แต้มไม่เพียงพอ (ต้องการ \${reward.points} แต้ม, มี \${member.availablePoints} แต้ม)\` };
  }

  // หักแต้ม
  deductPoints(userId, reward.points);

  // สร้างคูปอง
  const coupon = generateCoupon(userId, reward.type, reward.value, reward.minPurchase, reward.maxDiscount, reward.days);

  // บันทึก Transaction
  logPointsTransaction(userId, 'redeem', -reward.points, coupon.couponId, member.availablePoints - reward.points);

  return { success: true, coupon };
}
</code></pre>

      <h3>🎴 Points Display Flex Message</h3>
      <pre><code class="language-javascript">function buildPointsFlex(userId) {
  const member = getMember(userId);
  const tierColors = {
    'bronze': '#CD7F32', 'silver': '#C0C0C0',
    'gold': '#FFD700', 'diamond': '#00BCD4'
  };
  const tierEmojis = {
    'bronze': '🥉', 'silver': '🥈', 'gold': '🥇', 'diamond': '💎'
  };
  const tierNames = {
    'bronze': 'Bronze', 'silver': 'Silver', 'gold': 'Gold', 'diamond': 'Diamond'
  };

  const nextTier = getNextTier(member.tier);
  const pointsToNextTier = getPointsToNextTier(member.totalPoints);

  return {
    type: 'flex',
    altText: \`🎁 แต้มสะสม: \${member.availablePoints} แต้ม (\${tierNames[member.tier]})\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: tierColors[member.tier],
        paddingAll: 'xl',
        contents: [
          {
            type: 'text',
            text: \`\${tierEmojis[member.tier]} \${tierNames[member.tier]} Member\`,
            color: '#FFFFFF',
            weight: 'bold',
            size: 'xl'
          },
          {
            type: 'text',
            text: member.displayName,
            color: '#FFFFFF',
            size: 'sm',
            margin: 'sm'
          }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          // แต้มที่ใช้ได้
          {
            type: 'box',
            layout: 'vertical',
            alignItems: 'center',
            contents: [
              { type: 'text', text: 'แต้มที่ใช้ได้', size: 'sm', color: '#888888' },
              { type: 'text', text: member.availablePoints.toLocaleString(), size: 'xxl', weight: 'bold', color: tierColors[member.tier] },
              { type: 'text', text: 'แต้ม', size: 'xs', color: '#888888' }
            ]
          },
          { type: 'separator', margin: 'lg' },
          // แต้มสะสมรวม + Progress ไป Tier ถัดไป
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'lg',
            contents: [
              { type: 'text', text: 'แต้มสะสมรวม', size: 'sm', flex: 3 },
              { type: 'text', text: \`\${member.totalPoints.toLocaleString()} แต้ม\`, size: 'sm', align: 'end', flex: 2, weight: 'bold' }
            ]
          },
          nextTier ? {
            type: 'box',
            layout: 'vertical',
            margin: 'md',
            contents: [
              { type: 'text', text: \`อีก \${pointsToNextTier.toLocaleString()} แต้มถึง \${tierEmojis[nextTier]} \${tierNames[nextTier]}\`, size: 'xs', color: '#888888' },
              // Progress Bar
              {
                type: 'box',
                layout: 'vertical',
                height: '8px',
                backgroundColor: '#E0E0E0',
                cornerRadius: '4px',
                margin: 'sm',
                contents: [{
                  type: 'box',
                  layout: 'vertical',
                  height: '8px',
                  width: calculateProgressWidth(member.totalPoints, member.tier) + '%',
                  backgroundColor: tierColors[member.tier],
                  cornerRadius: '4px',
                  contents: [{ type: 'filler' }]
                }]
              }
            ]
          } : { type: 'filler' },
          { type: 'separator', margin: 'lg' },
          // ปุ่มต่าง ๆ
          { type: 'text', text: '🎟️ แลกแต้มเป็นคูปอง:', size: 'sm', weight: 'bold', margin: 'lg' }
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            style: 'primary',
            color: tierColors[member.tier],
            action: {
              type: 'postback',
              label: '🎁 แลกรางวัล',
              data: 'action=view_rewards'
            }
          },
          {
            type: 'button',
            style: 'secondary',
            action: {
              type: 'postback',
              label: '📜 ประวัติแต้ม',
              data: 'action=points_history'
            }
          },
          {
            type: 'button',
            style: 'secondary',
            action: {
              type: 'postback',
              label: '🎟️ คูปองของฉัน',
              data: 'action=my_coupons'
            }
          }
        ]
      }
    }
  };
}
</code></pre>

      <h3>🎟️ Coupon Flex Message</h3>
      <pre><code class="language-javascript">function buildCouponFlex(coupon) {
  const isExpiringSoon = (new Date(coupon.expiresAt) - new Date()) < 3 * 24 * 60 * 60 * 1000; // 3 วัน

  return {
    type: 'bubble',
    size: 'kilo',
    header: {
      type: 'box',
      layout: 'vertical',
      backgroundColor: '#E74C3C',
      paddingAll: 'lg',
      contents: [
        { type: 'text', text: coupon.type === 'percentage' ? \`ส่วนลด \${coupon.value}%\` : \`ส่วนลด ฿\${coupon.value}\`, color: '#FFFFFF', weight: 'bold', size: 'xl', align: 'center' },
        isExpiringSoon ? { type: 'text', text: '⏰ ใกล้หมดอายุ!', color: '#FFEB3B', size: 'xs', align: 'center', margin: 'sm' } : { type: 'filler' }
      ]
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        { type: 'text', text: \`รหัส: \${coupon.code}\`, weight: 'bold', size: 'lg', align: 'center', color: '#E74C3C' },
        coupon.minPurchase > 0 ? { type: 'text', text: \`ขั้นต่ำ ฿\${coupon.minPurchase.toLocaleString()}\`, size: 'xs', color: '#888', align: 'center', margin: 'sm' } : { type: 'filler' },
        { type: 'text', text: \`หมดอายุ: \${formatDate(coupon.expiresAt)}\`, size: 'xs', color: '#888', align: 'center', margin: 'sm' }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      contents: [{
        type: 'button',
        style: 'primary',
        color: '#E74C3C',
        action: { type: 'postback', label: '🛒 ใช้คูปองนี้', data: \`action=use_coupon&code=\${coupon.code}\` }
      }]
    }
  };
}
</code></pre>

      <div class='tip-box'><strong>💡 Tip:</strong> ส่งคูปองวันเกิดให้ลูกค้าผ่าน Push Message — เก็บวันเกิดตอนสมัครสมาชิก แล้วใช้ Time-based trigger ใน Google Apps Script เช็คทุกเช้าว่ามีใครเกิดวันนี้บ้าง</div>

      <h3>⏰ การจัดการคูปองหมดอายุ</h3>
      <pre><code class="language-javascript">// Google Apps Script — ตรวจสอบคูปองหมดอายุทุกวัน
function checkExpiredCoupons() {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Coupons');
  const data = sheet.getDataRange().getValues();
  const now = new Date();

  // แจ้งเตือนคูปองใกล้หมดอายุ (เหลือ 3 วัน)
  const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

  for (let i = 1; i < data.length; i++) {
    const expiresAt = new Date(data[i][7]);
    const isUsed = data[i][8];
    const userId = data[i][2];

    if (!isUsed && expiresAt > now && expiresAt <= threeDaysLater) {
      // แจ้งเตือนคูปองใกล้หมดอายุ
      pushMessage(userId, [{
        type: 'text',
        text: \`⏰ คูปอง \${data[i][1]} ของคุณจะหมดอายุในอีก \${Math.ceil((expiresAt - now) / (24*60*60*1000))} วัน! อย่าลืมใช้ก่อนหมดอายุนะ\`
      }]);
    }
  }
}

// ตั้ง Trigger ให้ทำงานทุกวัน
function setupDailyTrigger() {
  ScriptApp.newTrigger('checkExpiredCoupons')
    .timeBased()
    .everyDays(1)
    .atHour(9)
    .create();
}
</code></pre>

      <div class='warning-box'><strong>⚠️ Warning:</strong> ระวังเรื่อง Race Condition! ถ้าลูกค้ากด "ใช้คูปอง" พร้อมกัน 2 ครั้ง อาจใช้คูปองซ้ำได้ — ใช้ Lock Service ใน Google Apps Script หรือ Atomic operations ใน Database เพื่อป้องกัน</div>

      <p>ในบทสุดท้าย เราจะรวบรวมทุกอย่างที่เรียนมาสร้างร้านกาแฟออนไลน์ครบจบในบทเดียว!</p>
    `
  },
  {
    number: 8,
    slug: 'shop-workshop',
    emoji: '🏗️',
    title: 'Workshop: ร้านกาแฟออนไลน์ครบจบ',
    content: `
      <h2>🏗️ Workshop: ร้านกาแฟออนไลน์ครบจบ</h2>
      <p>ในบทสุดท้ายนี้ เราจะรวมทุกอย่างที่เรียนมาสร้าง <strong>"Coffee Buddy Bot"</strong> — ร้านกาแฟออนไลน์บน LINE ที่ครบทุกฟีเจอร์ ตั้งแต่ดูเมนู, สั่งกาแฟ, ปรับแต่ง (ขนาด/ความหวาน/น้ำแข็ง), ชำระเงิน, รับคิว, จนถึงสะสมแต้ม</p>

      <img src='/images/lessons/coffee-buddy-workshop.png' alt='Coffee Buddy Bot Workshop'>

      <h3>📋 Features ที่จะสร้าง</h3>
      <table>
        <thead>
          <tr><th>#</th><th>Feature</th><th>เทคโนโลยี</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>เมนูกาแฟ (Flex Carousel)</td><td>Flex Message + Google Sheets</td></tr>
          <tr><td>2</td><td>ปรับแต่งเครื่องดื่ม (Quick Reply)</td><td>Postback + Session</td></tr>
          <tr><td>3</td><td>ตะกร้าสินค้า</td><td>Postback + Google Sheets</td></tr>
          <tr><td>4</td><td>ชำระเงิน PromptPay</td><td>QR Code + Slip Upload</td></tr>
          <tr><td>5</td><td>หมายเลขคิว</td><td>Auto Increment + Push</td></tr>
          <tr><td>6</td><td>สะสมแต้ม</td><td>Points System</td></tr>
        </tbody>
      </table>

      <h3>📁 โครงสร้าง Google Sheets</h3>
      <p>สร้าง Google Sheets ชื่อ "CoffeeBuddy" พร้อม Sheet ย่อยดังนี้:</p>

      <pre><code class="language-text">Sheet: Menu
| id   | name       | category | price | description        | imageUrl | isActive |
|------|------------|----------|-------|--------------------|----------|----------|
| D001 | Espresso   | hot      | 45    | เอสเปรสโซช็อตคู่     | https:// | TRUE     |
| D002 | Iced Latte | cold     | 65    | ลาเต้เย็น นมสดแท้   | https:// | TRUE     |
| D003 | Mocha      | hot      | 70    | มอคค่าร้อน ช็อคเข้ม  | https:// | TRUE     |

Sheet: Orders
| orderId | userId | items(JSON) | total | status | orderedAt | paidAt | queueNo |

Sheet: Carts
| userId | productId | name | price | qty | options(JSON) | addedAt |

Sheet: Members
| userId | displayName | totalPoints | availablePoints | tier | joinedAt |

Sheet: Queue
| date | lastQueueNo |
</code></pre>

      <h3>🔧 โค้ดหลัก — Google Apps Script</h3>

      <div class='step'><span class='step-number'>1</span>
        <strong>ตั้งค่า Webhook Handler</strong>
      </div>

      <pre><code class="language-javascript">// ===== Coffee Buddy Bot — Main Webhook =====
const LINE_TOKEN = PropertiesService.getScriptProperties().getProperty('LINE_TOKEN');
const SHEET_ID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

function doPost(e) {
  try {
    const events = JSON.parse(e.postData.contents).events;
    events.forEach(event => handleEvent(event));
  } catch (err) {
    Logger.log('Error: ' + err.message);
  }
  return ContentService.createTextOutput('OK');
}

function handleEvent(event) {
  switch (event.type) {
    case 'follow':
      handleFollow(event);
      break;
    case 'message':
      handleMessage(event);
      break;
    case 'postback':
      handlePostback(event);
      break;
  }
}

// ===== Follow Event — ต้อนรับลูกค้าใหม่ =====
function handleFollow(event) {
  const userId = event.source.userId;
  const profile = getProfile(userId);

  // สร้างสมาชิกใหม่
  createMember(userId, profile.displayName);

  // ส่ง Greeting
  replyMessage(event.replyToken, [
    buildGreetingFlex(profile.displayName),
    { type: 'text', text: '☕ กดเมนูด้านล่างเพื่อเริ่มสั่งกาแฟ\\nหรือพิมพ์ "เมนู" เพื่อดูเมนูทั้งหมด!' }
  ]);
}

function getProfile(userId) {
  const res = UrlFetchApp.fetch(
    'https://api.line.me/v2/bot/profile/' + userId,
    { headers: { Authorization: 'Bearer ' + LINE_TOKEN } }
  );
  return JSON.parse(res.getContentText());
}
</code></pre>

      <div class='step'><span class='step-number'>2</span>
        <strong>แสดงเมนูกาแฟ</strong>
      </div>

      <pre><code class="language-javascript">// ===== เมนูกาแฟ — Flex Carousel =====
function handleMessage(event) {
  const text = event.message.text ? event.message.text.trim().toLowerCase() : '';
  const userId = event.source.userId;

  if (event.message.type === 'image') {
    // ลูกค้าส่งรูป — อาจเป็นสลิป
    handleSlipImage(event);
    return;
  }

  switch (text) {
    case 'เมนู':
    case 'menu':
    case 'สั่งกาแฟ':
      sendMenuCarousel(event.replyToken);
      break;

    case 'ตะกร้า':
    case 'cart':
      sendCartFlex(event.replyToken, userId);
      break;

    case 'แต้ม':
    case 'points':
      sendPointsFlex(event.replyToken, userId);
      break;

    case 'ติดต่อแอดมิน':
      replyMessage(event.replyToken, [
        { type: 'text', text: '💬 แอดมินรับทราบแล้ว จะติดต่อกลับภายใน 5 นาทีค่ะ!' }
      ]);
      // แจ้งแอดมิน
      notifyAdmin('💬 ลูกค้าต้องการติดต่อแอดมิน: ' + userId);
      break;

    default:
      replyMessage(event.replyToken, [{
        type: 'text',
        text: '☕ สวัสดีค่ะ! พิมพ์ "เมนู" เพื่อดูเมนูกาแฟ\\nหรือกดเมนูด้านล่างได้เลยนะคะ',
        quickReply: {
          items: [
            { type: 'action', action: { type: 'message', label: '☕ ดูเมนู', text: 'เมนู' }},
            { type: 'action', action: { type: 'message', label: '🧺 ตะกร้า', text: 'ตะกร้า' }},
            { type: 'action', action: { type: 'message', label: '⭐ แต้มสะสม', text: 'แต้ม' }}
          ]
        }
      }]);
  }
}

function sendMenuCarousel(replyToken) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Menu');
  const data = sheet.getDataRange().getValues();

  const bubbles = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][6] !== true) continue; // isActive

    bubbles.push({
      type: 'bubble',
      size: 'kilo',
      hero: {
        type: 'image',
        url: data[i][5], // imageUrl
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '4:3'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          { type: 'text', text: data[i][1], weight: 'bold', size: 'lg' }, // name
          { type: 'text', text: data[i][4], size: 'xs', color: '#999', wrap: true }, // description
          { type: 'text', text: '฿' + data[i][3], weight: 'bold', size: 'xl', color: '#E74C3C', margin: 'md' } // price
        ]
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [{
          type: 'button',
          style: 'primary',
          color: '#8B4513',
          action: {
            type: 'postback',
            label: '☕ สั่งเลย',
            data: 'action=customize&id=' + data[i][0] + '&name=' + encodeURIComponent(data[i][1]) + '&price=' + data[i][3]
          }
        }]
      }
    });
  }

  replyMessage(replyToken, [{
    type: 'flex',
    altText: '☕ เมนูกาแฟ Coffee Buddy',
    contents: { type: 'carousel', contents: bubbles },
    quickReply: {
      items: [
        { type: 'action', action: { type: 'postback', label: '☕ เครื่องดื่มร้อน', data: 'action=menu&cat=hot' }},
        { type: 'action', action: { type: 'postback', label: '🧊 เครื่องดื่มเย็น', data: 'action=menu&cat=cold' }},
        { type: 'action', action: { type: 'postback', label: '🍰 ขนม', data: 'action=menu&cat=bakery' }}
      ]
    }
  }]);
}
</code></pre>

      <div class='step'><span class='step-number'>3</span>
        <strong>ปรับแต่งเครื่องดื่ม (ขนาด / ความหวาน / น้ำแข็ง)</strong>
      </div>

      <pre><code class="language-javascript">// ===== Customization Flow =====
function handlePostback(event) {
  const data = parsePostbackData(event.postback.data);
  const userId = event.source.userId;
  const replyToken = event.replyToken;

  switch (data.action) {
    // ===== เลือกเครื่องดื่ม → เลือกขนาด =====
    case 'customize':
      replyMessage(replyToken, [{
        type: 'text',
        text: '📏 เลือกขนาดสำหรับ ' + decodeURIComponent(data.name),
        quickReply: {
          items: [
            { type: 'action', action: { type: 'postback', label: 'S (เล็ก) +฿0', data: data.raw + '&size=S&sizePrice=0' }},
            { type: 'action', action: { type: 'postback', label: 'M (กลาง) +฿10', data: data.raw + '&size=M&sizePrice=10' }},
            { type: 'action', action: { type: 'postback', label: 'L (ใหญ่) +฿20', data: data.raw + '&size=L&sizePrice=20' }}
          ]
        }
      }]);
      break;

    // ===== เลือกขนาดแล้ว → เลือกความหวาน =====
    case 'customize':
      if (data.size && !data.sugar) {
        replyMessage(replyToken, [{
          type: 'text',
          text: '🍯 เลือกความหวาน',
          quickReply: {
            items: [
              { type: 'action', action: { type: 'postback', label: '0% (ไม่หวาน)', data: data.raw + '&sugar=0' }},
              { type: 'action', action: { type: 'postback', label: '25%', data: data.raw + '&sugar=25' }},
              { type: 'action', action: { type: 'postback', label: '50%', data: data.raw + '&sugar=50' }},
              { type: 'action', action: { type: 'postback', label: '75%', data: data.raw + '&sugar=75' }},
              { type: 'action', action: { type: 'postback', label: '100% (ปกติ)', data: data.raw + '&sugar=100' }}
            ]
          }
        }]);
      }
      // ===== เลือกความหวานแล้ว → เลือกน้ำแข็ง =====
      else if (data.sugar && !data.ice) {
        replyMessage(replyToken, [{
          type: 'text',
          text: '🧊 เลือกปริมาณน้ำแข็ง',
          quickReply: {
            items: [
              { type: 'action', action: { type: 'postback', label: '❄️ น้อย', data: data.raw + '&ice=less' }},
              { type: 'action', action: { type: 'postback', label: '❄️❄️ ปกติ', data: data.raw + '&ice=normal' }},
              { type: 'action', action: { type: 'postback', label: '❄️❄️❄️ เยอะ', data: data.raw + '&ice=extra' }}
            ]
          }
        }]);
      }
      // ===== เลือกครบแล้ว → เพิ่มลงตะกร้า =====
      else if (data.ice) {
        const totalPrice = parseInt(data.price) + parseInt(data.sizePrice || 0);
        const options = { size: data.size, sugar: data.sugar + '%', ice: data.ice };

        addToCart(userId, {
          productId: data.id,
          name: decodeURIComponent(data.name),
          price: totalPrice,
          options: options
        });

        const optionText = \`Size \${data.size} | หวาน \${data.sugar}% | น้ำแข็ง\${data.ice === 'less' ? 'น้อย' : data.ice === 'normal' ? 'ปกติ' : 'เยอะ'}\`;

        replyMessage(replyToken, [{
          type: 'text',
          text: \`✅ เพิ่ม \${decodeURIComponent(data.name)} ลงตะกร้าแล้ว!\\n\${optionText}\\nราคา ฿\${totalPrice}\`,
          quickReply: {
            items: [
              { type: 'action', action: { type: 'message', label: '☕ สั่งเพิ่ม', text: 'เมนู' }},
              { type: 'action', action: { type: 'message', label: '🧺 ดูตะกร้า', text: 'ตะกร้า' }},
              { type: 'action', action: { type: 'postback', label: '💳 ชำระเงิน', data: 'action=checkout' }}
            ]
          }
        }]);
      }
      break;

    // ===== Checkout =====
    case 'checkout':
      handleCheckout(replyToken, userId);
      break;

    // ===== Cart Actions =====
    case 'view_cart':
      sendCartFlex(replyToken, userId);
      break;

    case 'remove_cart':
      removeFromCart(userId, data.id);
      sendCartFlex(replyToken, userId);
      break;

    case 'clear_cart':
      clearCart(userId);
      replyMessage(replyToken, [{ type: 'text', text: '🗑️ ล้างตะกร้าเรียบร้อยแล้ว' }]);
      break;
  }
}

function parsePostbackData(dataString) {
  const params = { raw: dataString };
  dataString.split('&').forEach(pair => {
    const [key, value] = pair.split('=');
    params[key] = decodeURIComponent(value);
  });
  return params;
}
</code></pre>

      <div class='step'><span class='step-number'>4</span>
        <strong>ชำระเงินและหมายเลขคิว</strong>
      </div>

      <pre><code class="language-javascript">// ===== Checkout + Queue Number =====
function handleCheckout(replyToken, userId) {
  const cart = getCart(userId);
  if (cart.length === 0) {
    replyMessage(replyToken, [{ type: 'text', text: '🧺 ตะกร้าว่างเปล่า' }]);
    return;
  }

  let totalPrice = 0;
  cart.forEach(item => { totalPrice += item.price * item.quantity; });

  // สร้าง Order
  const orderId = generateOrderId();
  saveOrder(orderId, userId, cart, totalPrice);

  // สร้าง QR Code PromptPay
  const qrUrl = generateQRCodeUrl(totalPrice);

  // ส่ง Payment Flex
  replyMessage(replyToken, [buildPaymentFlex(orderId, totalPrice, qrUrl)]);
}

// ===== เมื่อยืนยันสลิปแล้ว — สร้างหมายเลขคิว =====
function confirmPayment(orderId) {
  const order = getOrder(orderId);

  // สร้างหมายเลขคิว
  const queueNo = getNextQueueNumber();
  updateOrder(orderId, { status: 'confirmed', paidAt: new Date(), queueNo: queueNo });

  // ล้างตะกร้า
  clearCart(order.userId);

  // เพิ่มแต้ม
  addPoints(order.userId, order.totalPrice, orderId);

  // ส่ง Queue Number Flex
  pushMessage(order.userId, [
    buildQueueFlex(queueNo, orderId, order),
    { type: 'text', text: '☕ กาแฟกำลังชง... จะแจ้งเตือนเมื่อพร้อมรับนะคะ!' }
  ]);
}

function getNextQueueNumber() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Queue');
  const today = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'yyyy-MM-dd');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (Utilities.formatDate(data[i][0], 'Asia/Bangkok', 'yyyy-MM-dd') === today) {
      const nextNo = data[i][1] + 1;
      sheet.getRange(i + 1, 2).setValue(nextNo);
      return nextNo;
    }
  }

  // วันใหม่ — เริ่มคิวที่ 1
  sheet.appendRow([new Date(), 1]);
  return 1;
}

function buildQueueFlex(queueNo, orderId, order) {
  const paddedQueue = queueNo.toString().padStart(3, '0');

  return {
    type: 'flex',
    altText: \`☕ คิวที่ \${paddedQueue}\`,
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#8B4513',
        paddingAll: 'xl',
        contents: [
          { type: 'text', text: '☕ Coffee Buddy', color: '#FFFFFF', weight: 'bold', size: 'lg', align: 'center' }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        alignItems: 'center',
        paddingAll: 'xxl',
        contents: [
          { type: 'text', text: 'หมายเลขคิวของคุณ', size: 'md', color: '#888888' },
          { type: 'text', text: paddedQueue, size: '5xl', weight: 'bold', color: '#8B4513', margin: 'md' },
          { type: 'separator', margin: 'xl' },
          { type: 'text', text: orderId, size: 'xs', color: '#AAAAAA', margin: 'md' },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            contents: order.items.map(item => ({
              type: 'text',
              text: \`• \${item.name} x\${item.quantity}\`,
              size: 'sm',
              color: '#555555'
            }))
          },
          {
            type: 'text',
            text: \`รวม ฿\${order.totalPrice.toLocaleString()}\`,
            weight: 'bold',
            size: 'lg',
            margin: 'md'
          },
          {
            type: 'text',
            text: '⏳ กำลังเตรียม...',
            size: 'sm',
            color: '#F39C12',
            weight: 'bold',
            margin: 'md'
          }
        ]
      }
    }
  };
}
</code></pre>

      <div class='step'><span class='step-number'>5</span>
        <strong>แจ้งเตือนเมื่อกาแฟพร้อม</strong>
      </div>

      <pre><code class="language-javascript">// ===== แจ้งเตือนลูกค้าเมื่อกาแฟพร้อม =====
function notifyOrderReady(orderId) {
  const order = getOrder(orderId);
  updateOrder(orderId, { status: 'ready' });

  const paddedQueue = order.queueNo.toString().padStart(3, '0');

  pushMessage(order.userId, [{
    type: 'flex',
    altText: \`✅ คิว \${paddedQueue} พร้อมแล้ว!\`,
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        layout: 'vertical',
        backgroundColor: '#27AE60',
        paddingAll: 'lg',
        contents: [
          { type: 'text', text: '✅ กาแฟพร้อมแล้ว!', color: '#FFFFFF', weight: 'bold', size: 'xl', align: 'center' }
        ]
      },
      body: {
        type: 'box',
        layout: 'vertical',
        alignItems: 'center',
        contents: [
          { type: 'text', text: paddedQueue, size: '5xl', weight: 'bold', color: '#27AE60' },
          { type: 'text', text: 'มารับกาแฟได้เลยค่ะ ☕', size: 'md', margin: 'lg' }
        ]
      }
    }
  }]);
}
</code></pre>

      <div class='step'><span class='step-number'>6</span>
        <strong>Helper Functions — ส่งข้อความ</strong>
      </div>

      <pre><code class="language-javascript">// ===== LINE API Helper Functions =====
function replyMessage(replyToken, messages) {
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + LINE_TOKEN },
    payload: JSON.stringify({ replyToken: replyToken, messages: messages }),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', options);
}

function pushMessage(userId, messages) {
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + LINE_TOKEN },
    payload: JSON.stringify({ to: userId, messages: messages }),
    muteHttpExceptions: true
  };
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
}

function notifyAdmin(message) {
  const ADMIN_USER_ID = PropertiesService.getScriptProperties().getProperty('ADMIN_USER_ID');
  pushMessage(ADMIN_USER_ID, [{ type: 'text', text: message }]);
}
</code></pre>

      <h3>🚀 Deploy ขั้นตอน</h3>
      <div class='step'><span class='step-number'>1</span>
        สร้าง Google Sheets พร้อม Sheet ย่อยทั้งหมด (Menu, Orders, Carts, Members, Queue)
      </div>
      <div class='step'><span class='step-number'>2</span>
        สร้าง Google Apps Script Project แล้ว paste โค้ดทั้งหมด
      </div>
      <div class='step'><span class='step-number'>3</span>
        ตั้งค่า Script Properties: LINE_TOKEN, SHEET_ID, ADMIN_USER_ID
      </div>
      <div class='step'><span class='step-number'>4</span>
        Deploy เป็น Web App (Execute as: Me, Access: Anyone)
      </div>
      <div class='step'><span class='step-number'>5</span>
        นำ URL ไปใส่ใน LINE Developers Console → Webhook URL
      </div>
      <div class='step'><span class='step-number'>6</span>
        สร้าง Rich Menu อัปโหลดรูป และตั้งเป็น Default
      </div>

      <div class='tip-box'><strong>💡 Tip:</strong> ทดสอบบอทด้วย LINE Official Account ของตัวเอง ก่อนเปิดให้ลูกค้าจริงใช้งาน — ลองสั่งกาแฟเอง ดูว่า Flow ราบรื่นหรือไม่ แก้ bug ให้หมดก่อน!</div>

      <div class='warning-box'><strong>⚠️ Warning:</strong> Google Apps Script มี Quota จำกัด! UrlFetchApp calls สูงสุด 20,000 ครั้ง/วัน — ถ้าร้านค้ามีออเดอร์มากกว่า 500/วัน ควรย้ายไปใช้ Node.js + Cloud Functions แทน</div>

      <h3>📊 สรุปสิ่งที่เรียนรู้ในคอร์สนี้</h3>
      <table>
        <thead>
          <tr><th>บท</th><th>เรื่อง</th><th>ทักษะที่ได้</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Customer Journey</td><td>วางแผนเส้นทางลูกค้า, ออกแบบ Touchpoints</td></tr>
          <tr><td>2</td><td>Rich Menu</td><td>สร้าง/สลับ Rich Menu ผ่าน API</td></tr>
          <tr><td>3</td><td>Flex Carousel</td><td>แคตตาล็อกสินค้าแบบเลื่อนได้</td></tr>
          <tr><td>4</td><td>ตะกร้าสินค้า</td><td>Postback + Session Management</td></tr>
          <tr><td>5</td><td>PromptPay</td><td>QR Code + ตรวจสอบสลิป</td></tr>
          <tr><td>6</td><td>Order Status</td><td>Timeline Flex + Push Notification</td></tr>
          <tr><td>7</td><td>Loyalty + คูปอง</td><td>ระบบแต้ม, Tier, คูปองส่วนลด</td></tr>
          <tr><td>8</td><td>Workshop</td><td>รวมทุกอย่าง → ร้านกาแฟครบจบ</td></tr>
        </tbody>
      </table>

      <p>🎉 <strong>ยินดีด้วย!</strong> คุณผ่านคอร์ส LINE Shop Pro ครบทั้ง 8 บทแล้ว! ตอนนี้คุณมีทักษะในการสร้างร้านค้าออนไลน์บน LINE ได้อย่างมืออาชีพ — ลองนำไปประยุกต์กับธุรกิจจริงของคุณได้เลย! 🚀</p>
    `
  }
];
