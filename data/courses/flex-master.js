export const chapters = [
  {
    number: 1,
    slug: 'flex-intro',
    emoji: '🎨',
    title: 'Flex Message คืออะไร?',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/flex-intro.webp" alt="Flex Message Introduction" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🎨 Flex Message คืออะไร?</h2>
          <p>Flex Message คือรูปแบบข้อความพิเศษของ LINE ที่ให้เราออกแบบ Layout ได้อย่างอิสระ เหมือนเขียน HTML/CSS ส่งผ่าน LINE! สามารถสร้างการ์ดสินค้า, ใบเสร็จ, เมนู, แคตตาล็อก และอีกมากมาย</p>
        </div>

        <div class="highlight-box">
          <h3>✅ ทำไมต้องใช้ Flex Message?</h3>
          <ul>
            <li>🎨 <strong>ออกแบบได้อิสระ</strong> — จัดวาง Layout, สี, ฟอนต์ ได้ตามต้องการ</li>
            <li>📱 <strong>แสดงผลสวยบนมือถือ</strong> — Responsive ทุกขนาดหน้าจอ</li>
            <li>🖱️ <strong>มี Interactive Elements</strong> — ปุ่มกด, ลิงก์, Postback</li>
            <li>🔄 <strong>รองรับ Carousel</strong> — เลื่อนดูหลายการ์ดได้</li>
            <li>📊 <strong>เหมาะกับธุรกิจ</strong> — การ์ดสินค้า, ใบเสร็จ, เมนู</li>
          </ul>
        </div>

        <h3>📐 โครงสร้าง Flex Message</h3>
        <div class="code-block">
          <div class="code-header">Flex Message Structure (JSON)</div>
          <pre><code>// โครงสร้างหลักของ Flex Message
{
  "type": "flex",
  "altText": "ข้อความที่แสดงใน Notification",
  "contents": {
    "type": "bubble",    // หรือ "carousel"
    "header": { ... },   // ส่วนหัว (ไม่บังคับ)
    "hero": { ... },     // รูปภาพหลัก (ไม่บังคับ)
    "body": { ... },     // เนื้อหาหลัก
    "footer": { ... }    // ส่วนท้าย (ไม่บังคับ)
  }
}</code></pre>
        </div>

        <h3>💻 ส่ง Flex Message แรกของคุณ</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

function sendFirstFlex() {
  const flexMessage = {
    type: "flex",
    altText: "สวัสดี Flex Message!",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "🎉 ยินดีต้อนรับ!",
            weight: "bold",
            size: "xl",
            color: "#1DB446"
          },
          {
            type: "text",
            text: "นี่คือ Flex Message แรกของคุณ",
            size: "md",
            color: "#666666",
            margin: "md"
          },
          {
            type: "separator",
            margin: "lg"
          },
          {
            type: "text",
            text: "คุณสามารถออกแบบ Layout ได้อย่างอิสระ!",
            size: "sm",
            color: "#999999",
            margin: "lg",
            wrap: true
          }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            style: "primary",
            color: "#1DB446",
            action: {
              type: "uri",
              label: "เรียนรู้เพิ่มเติม",
              uri: "https://developers.line.biz/flex-simulator/"
            }
          }
        ]
      }
    }
  };
  
  // ส่งไป LINE
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: "USER_ID_OR_GROUP_ID",
      messages: [flexMessage]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ประเภทของ Flex Container</h4>
          <ul>
            <li><strong>Bubble</strong> — การ์ดเดี่ยว 1 ใบ</li>
            <li><strong>Carousel</strong> — หลายการ์ดเลื่อนได้ (สูงสุด 12 ใบ)</li>
          </ul>
          <p>เริ่มจาก Bubble ก่อน แล้วค่อยพัฒนาเป็น Carousel ในบทถัดไป!</p>
        </div>
      </div>
    `
  },
  {
    number: 2,
    slug: 'flex-components',
    emoji: '🧩',
    title: 'Components ทั้งหมด (Box Text Image Button)',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/flex-components.webp" alt="Flex Message Components" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🧩 Flex Components ทั้งหมดที่ต้องรู้</h2>
          <p>Flex Message ประกอบด้วย Components หลัก 4 ตัว: <strong>Box</strong> (กล่องจัดวาง), <strong>Text</strong> (ข้อความ), <strong>Image</strong> (รูปภาพ), <strong>Button</strong> (ปุ่มกด) — เรียนรู้แต่ละตัวพร้อมตัวอย่างจริง!</p>
        </div>

        <h3>📦 1. Box — กล่องจัดวาง</h3>
        <div class="code-block">
          <div class="code-header">Box Component</div>
          <pre><code>// Box แนวตั้ง (Vertical)
{
  "type": "box",
  "layout": "vertical",
  "spacing": "md",
  "paddingAll": "lg",
  "backgroundColor": "#F5F5F5",
  "cornerRadius": "lg",
  "contents": [
    { "type": "text", "text": "รายการที่ 1" },
    { "type": "text", "text": "รายการที่ 2" }
  ]
}

// Box แนวนอน (Horizontal)
{
  "type": "box",
  "layout": "horizontal",
  "spacing": "sm",
  "contents": [
    { "type": "text", "text": "ซ้าย", "flex": 1 },
    { "type": "text", "text": "ขวา", "flex": 1, "align": "end" }
  ]
}

// Box วางซ้อน (Baseline — จัดแนว baseline)
{
  "type": "box",
  "layout": "baseline",
  "spacing": "sm",
  "contents": [
    { "type": "icon", "url": "https://example.com/star.png", "size": "sm" },
    { "type": "text", "text": "4.8", "size": "sm", "color": "#999999" }
  ]
}</code></pre>
        </div>

        <h3>📝 2. Text — ข้อความ</h3>
        <div class="code-block">
          <div class="code-header">Text Component</div>
          <pre><code>// Text พื้นฐาน
{
  "type": "text",
  "text": "สวัสดีครับ!",
  "weight": "bold",       // "regular" หรือ "bold"
  "size": "xl",           // "xxs","xs","sm","md","lg","xl","xxl"
  "color": "#1DB446",     // สีข้อความ (Hex)
  "align": "center",      // "start","center","end"
  "wrap": true,           // ตัดบรรทัดอัตโนมัติ
  "maxLines": 2,          // จำกัดบรรทัด
  "margin": "md"          // ระยะห่างด้านบน
}

// Text แบบ Span (หลายสีในบรรทัดเดียว)
{
  "type": "text",
  "contents": [
    { "type": "span", "text": "ราคาปกติ ", "color": "#999999" },
    { "type": "span", "text": "฿590", "color": "#FF0000",
      "weight": "bold", "decoration": "line-through" },
    { "type": "span", "text": " → ", "color": "#999999" },
    { "type": "span", "text": "฿390", "color": "#1DB446",
      "weight": "bold", "size": "xl" }
  ]
}</code></pre>
        </div>

        <h3>🖼️ 3. Image — รูปภาพ</h3>
        <div class="code-block">
          <div class="code-header">Image Component</div>
          <pre><code>// Image พื้นฐาน
{
  "type": "image",
  "url": "https://example.com/product.jpg",
  "size": "full",            // "xxs" ถึง "full"
  "aspectRatio": "1:1",      // อัตราส่วน "1:1", "4:3", "20:13"
  "aspectMode": "cover",     // "cover" หรือ "fit"
  "backgroundColor": "#FFFFFF",
  "action": {
    "type": "uri",
    "uri": "https://example.com/product/1"
  }
}

// Image ใน Hero Section
{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://example.com/banner.jpg",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover"
  }
}</code></pre>
        </div>

        <h3>🔘 4. Button — ปุ่มกด</h3>
        <div class="code-block">
          <div class="code-header">Button Component</div>
          <pre><code>// Button แบบ Primary (สีเต็ม)
{
  "type": "button",
  "style": "primary",
  "color": "#1DB446",
  "height": "sm",
  "action": {
    "type": "uri",
    "label": "🛒 สั่งซื้อเลย",
    "uri": "https://shop.example.com"
  }
}

// Button แบบ Secondary (ขอบ)
{
  "type": "button",
  "style": "secondary",
  "action": {
    "type": "message",
    "label": "📞 สอบถามเพิ่มเติม",
    "text": "ต้องการสอบถามสินค้า"
  }
}

// Button แบบ Link (ข้อความ)
{
  "type": "button",
  "style": "link",
  "height": "sm",
  "action": {
    "type": "uri",
    "label": "ดูรายละเอียด →",
    "uri": "https://example.com/details"
  }
}

// Button แบบ Postback
{
  "type": "button",
  "style": "primary",
  "color": "#FF6B35",
  "action": {
    "type": "postback",
    "label": "เพิ่มในตะกร้า",
    "data": "action=addToCart&productId=P001",
    "displayText": "เพิ่มสินค้าในตะกร้าแล้ว ✅"
  }
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 สรุป Action Types ที่ใช้กับ Button</h4>
          <ul>
            <li><strong>uri</strong> — เปิดลิงก์เว็บไซต์</li>
            <li><strong>message</strong> — ส่งข้อความเข้าแชท</li>
            <li><strong>postback</strong> — ส่ง data กลับ Bot (ไม่แสดงในแชท)</li>
            <li><strong>datetimepicker</strong> — เลือกวันที่/เวลา</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 3,
    slug: 'flex-simulator',
    emoji: '🛠️',
    title: 'Flex Simulator เครื่องมือออกแบบ',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/flex-simulator.webp" alt="Flex Simulator Tool" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🛠️ Flex Simulator — เครื่องมือออกแบบ Flex Message</h2>
          <p>LINE มีเครื่องมือ Flex Message Simulator ให้ออกแบบ Flex Message แบบ Visual ได้เลย! เห็นผลทันที ไม่ต้องเขียน JSON เอง แล้วค่อย Export ไปใช้ในโค้ด</p>
        </div>

        <h3>🔗 เข้าใช้งาน Flex Simulator</h3>
        <div class="step-list">
          <div class="step">
            <span class="step-number">1</span>
            <p>เปิด <a href="https://developers.line.biz/flex-simulator/" target="_blank">Flex Message Simulator</a></p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>เลือก Template ที่ต้องการ หรือเริ่มจากว่าง</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>ลาก-วาง Components หรือแก้ไข JSON โดยตรง</p>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <p>Preview ดูผลลัพธ์แบบ Real-time</p>
          </div>
          <div class="step">
            <span class="step-number">5</span>
            <p>คลิก <strong>"View as JSON"</strong> → คัดลอก JSON ไปใช้</p>
          </div>
        </div>

        <h3>📋 Template สำเร็จรูปที่มีให้</h3>
        <div class="highlight-box">
          <ul>
            <li>🍽️ <strong>Restaurant</strong> — การ์ดร้านอาหาร</li>
            <li>🛍️ <strong>Shopping</strong> — การ์ดสินค้า</li>
            <li>🎫 <strong>Transit</strong> — ตั๋วเดินทาง</li>
            <li>🏨 <strong>Hotel</strong> — จองโรงแรม</li>
            <li>🧾 <strong>Receipt</strong> — ใบเสร็จ</li>
            <li>🏙️ <strong>Local Search</strong> — ค้นหาสถานที่</li>
            <li>👤 <strong>Social</strong> — โปรไฟล์</li>
          </ul>
        </div>

        <h3>💻 นำ JSON จาก Simulator มาใช้ในโค้ด</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

function sendFlexFromSimulator() {
  // JSON ที่ได้จาก Flex Simulator (วางตรงนี้)
  const flexContents = {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://example.com/restaurant.jpg",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "ร้านอาหาร De Café",
          "weight": "bold",
          "size": "xl"
        },
        {
          "type": "box",
          "layout": "baseline",
          "margin": "md",
          "contents": [
            { "type": "icon", "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png" },
            { "type": "icon", "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png" },
            { "type": "icon", "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png" },
            { "type": "icon", "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png" },
            { "type": "icon", "size": "sm",
              "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png" },
            { "type": "text", "text": "4.0",
              "size": "sm", "color": "#999999", "margin": "md" }
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
                { "type": "text", "text": "สถานที่",
                  "color": "#aaaaaa", "size": "sm", "flex": 2 },
                { "type": "text", "text": "สยามสแควร์ ซอย 3",
                  "wrap": true, "color": "#666666", "size": "sm", "flex": 5 }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "spacing": "sm",
              "contents": [
                { "type": "text", "text": "เวลา",
                  "color": "#aaaaaa", "size": "sm", "flex": 2 },
                { "type": "text", "text": "10:00 - 22:00",
                  "wrap": true, "color": "#666666", "size": "sm", "flex": 5 }
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
          "color": "#1DB446",
          "action": {
            "type": "uri",
            "label": "📍 ดูแผนที่",
            "uri": "https://maps.google.com"
          }
        },
        {
          "type": "button",
          "style": "secondary",
          "action": {
            "type": "uri",
            "label": "📞 โทรจอง",
            "uri": "tel:0812345678"
          }
        }
      ]
    }
  };
  
  // ส่ง Flex Message
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: "USER_ID_OR_GROUP_ID",
      messages: [{
        type: "flex",
        altText: "ร้านอาหาร De Café",
        contents: flexContents
      }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 เคล็ดลับการใช้ Flex Simulator</h4>
          <ul>
            <li>เริ่มจาก Template แล้วค่อยปรับแต่ง — เร็วกว่าเขียนจากศูนย์</li>
            <li>ใช้ <strong>Showcase</strong> เพื่อดูตัวอย่างที่สวยงาม</li>
            <li>กด <strong>Send</strong> ใน Simulator เพื่อส่งทดสอบไปยังมือถือจริง</li>
            <li>JSON ที่ได้สามารถใช้ได้ทั้ง GAS และ Node.js</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 4,
    slug: 'product-card',
    emoji: '🛍️',
    title: 'Template: การ์ดสินค้า',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/product-card.webp" alt="Product Card Template" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🛍️ สร้างการ์ดสินค้าสวย ๆ ด้วย Flex Message</h2>
          <p>การ์ดสินค้าคือ Flex Message ที่ใช้บ่อยที่สุดในธุรกิจ! แสดงรูปสินค้า ชื่อ ราคา คำอธิบาย พร้อมปุ่มสั่งซื้อ ในการ์ดเดียว</p>
        </div>

        <h3>💻 โค้ดการ์ดสินค้าแบบเต็ม</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Product Card</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

// === สร้างการ์ดสินค้า ===
function createProductCard(product) {
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: product.imageUrl,
      size: "full",
      aspectRatio: "4:3",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: product.detailUrl
      }
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        // ชื่อสินค้า
        {
          type: "text",
          text: product.name,
          weight: "bold",
          size: "lg",
          wrap: true
        },
        // ราคา
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            {
              type: "text",
              text: "฿" + product.price.toLocaleString(),
              size: "xl",
              color: "#FF5551",
              weight: "bold",
              flex: 0
            },
            product.originalPrice ? {
              type: "text",
              text: "฿" + product.originalPrice.toLocaleString(),
              size: "sm",
              color: "#AAAAAA",
              decoration: "line-through",
              gravity: "bottom",
              margin: "sm",
              flex: 0
            } : { type: "filler" }
          ]
        },
        // รายละเอียด
        {
          type: "text",
          text: product.description,
          size: "sm",
          color: "#888888",
          margin: "md",
          wrap: true,
          maxLines: 2
        },
        // แท็ก
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          spacing: "sm",
          contents: product.tags.map(tag => ({
            type: "box",
            layout: "vertical",
            contents: [{
              type: "text",
              text: tag,
              size: "xs",
              color: "#FFFFFF",
              align: "center"
            }],
            backgroundColor: "#1DB446",
            cornerRadius: "xl",
            paddingAll: "xs",
            paddingStart: "md",
            paddingEnd: "md"
          }))
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          color: "#FF5551",
          action: {
            type: "postback",
            label: "🛒 สั่งซื้อเลย",
            data: "action=order&id=" + product.id,
            displayText: "สั่งซื้อ " + product.name
          }
        },
        {
          type: "button",
          style: "secondary",
          action: {
            type: "uri",
            label: "📋 ดูรายละเอียด",
            uri: product.detailUrl
          }
        }
      ]
    }
  };
}

// === ส่งการ์ดสินค้า ===
function sendProductCard() {
  const product = {
    id: "P001",
    name: "เสื้อยืด Oversize Premium",
    price: 390,
    originalPrice: 590,
    description: "เสื้อยืด Cotton 100% เกรดพรีเมียม ใส่สบาย ไม่ร้อน",
    imageUrl: "https://example.com/product/tshirt.jpg",
    detailUrl: "https://shop.example.com/product/P001",
    tags: ["ลด 34%", "ขายดี", "พร้อมส่ง"]
  };
  
  const flexMessage = {
    type: "flex",
    altText: product.name + " ฿" + product.price,
    contents: createProductCard(product)
  };
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: "USER_ID",
      messages: [flexMessage]
    })
  });
}</code></pre>
        </div>

        <h3>💻 Node.js Version</h3>
        <div class="code-block">
          <div class="code-header">Node.js — Product Card</div>
          <pre><code>const axios = require('axios');
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;

async function sendProductCard(userId, product) {
  const bubble = {
    type: "bubble",
    hero: {
      type: "image",
      url: product.imageUrl,
      size: "full",
      aspectRatio: "4:3",
      aspectMode: "cover"
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        { type: "text", text: product.name, weight: "bold", size: "lg" },
        {
          type: "text",
          text: "฿" + product.price.toLocaleString(),
          size: "xl", color: "#FF5551", weight: "bold", margin: "md"
        },
        { type: "text", text: product.description,
          size: "sm", color: "#888", margin: "md", wrap: true }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [{
        type: "button",
        style: "primary",
        color: "#FF5551",
        action: {
          type: "postback",
          label: "🛒 สั่งซื้อเลย",
          data: \`action=order&id=\${product.id}\`
        }
      }]
    }
  };
  
  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: userId,
    messages: [{
      type: "flex",
      altText: product.name,
      contents: bubble
    }]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${LINE_TOKEN}\`
    }
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 เคล็ดลับการ์ดสินค้าที่สวย</h4>
          <ul>
            <li>ใช้รูปสินค้าความละเอียดสูง (แนะนำ 1024x768 ขึ้นไป)</li>
            <li>ใส่ tag "ขายดี" หรือ "ลดราคา" เพื่อดึงดูดความสนใจ</li>
            <li>จำกัด description ไม่เกิน 2 บรรทัด ด้วย maxLines</li>
            <li>ใช้สีแดงสำหรับราคา เพราะดึงดูดสายตา</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 5,
    slug: 'receipt-template',
    emoji: '🧾',
    title: 'Template: ใบเสร็จ/สรุปออเดอร์',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/receipt-template.webp" alt="Receipt Template" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🧾 สร้างใบเสร็จ / สรุปออเดอร์ ด้วย Flex Message</h2>
          <p>ใบเสร็จออนไลน์ผ่าน LINE! แสดงรายการสินค้า ราคา ส่วนลด ยอดรวม และสถานะการจัดส่ง ในการ์ดเดียว ลูกค้าเปิดดูได้ตลอด</p>
        </div>

        <h3>💻 โค้ดใบเสร็จ Flex Message</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Receipt</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

function createReceipt(order) {
  // สร้างรายการสินค้า
  const itemContents = [];
  
  order.items.forEach(item => {
    itemContents.push({
      type: "box",
      layout: "horizontal",
      contents: [
        {
          type: "text",
          text: item.name,
          size: "sm",
          color: "#555555",
          flex: 0
        },
        {
          type: "text",
          text: "x" + item.qty + "  ฿" + (item.price * item.qty).toLocaleString(),
          size: "sm",
          color: "#111111",
          align: "end"
        }
      ]
    });
  });
  
  return {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        // หัวใบเสร็จ
        {
          type: "text",
          text: "🧾 ใบเสร็จ/สรุปออเดอร์",
          weight: "bold",
          color: "#1DB446",
          size: "sm"
        },
        {
          type: "text",
          text: "฿" + order.total.toLocaleString(),
          weight: "bold",
          size: "xxl",
          margin: "md"
        },
        // ออเดอร์ ID
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            { type: "text", text: "หมายเลขออเดอร์", size: "xs", color: "#aaaaaa", flex: 0 },
            { type: "text", text: order.orderId, size: "xs", color: "#aaaaaa", align: "end" }
          ]
        },
        { type: "separator", margin: "lg" },
        // รายการสินค้า
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: itemContents
        },
        { type: "separator", margin: "lg" },
        // สรุปยอด
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                { type: "text", text: "ราคาสินค้า", size: "sm", color: "#555555" },
                { type: "text", text: "฿" + order.subtotal.toLocaleString(),
                  size: "sm", color: "#111111", align: "end" }
              ]
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                { type: "text", text: "ค่าจัดส่ง", size: "sm", color: "#555555" },
                { type: "text", text: order.shipping === 0 ? "ฟรี!" : "฿" + order.shipping,
                  size: "sm", color: "#1DB446", align: "end", weight: "bold" }
              ]
            },
            order.discount > 0 ? {
              type: "box",
              layout: "horizontal",
              contents: [
                { type: "text", text: "ส่วนลด", size: "sm", color: "#555555" },
                { type: "text", text: "-฿" + order.discount.toLocaleString(),
                  size: "sm", color: "#FF5551", align: "end" }
              ]
            } : { type: "filler" },
            { type: "separator", margin: "md" },
            {
              type: "box",
              layout: "horizontal",
              margin: "md",
              contents: [
                { type: "text", text: "💰 ยอดรวมทั้งสิ้น", size: "md",
                  color: "#111111", weight: "bold" },
                { type: "text", text: "฿" + order.total.toLocaleString(), size: "md",
                  color: "#FF5551", align: "end", weight: "bold" }
              ]
            }
          ]
        },
        { type: "separator", margin: "lg" },
        // ข้อมูลจัดส่ง
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            { type: "text", text: "📦 ข้อมูลจัดส่ง", size: "sm", weight: "bold" },
            { type: "text", text: "👤 " + order.customerName, size: "sm", color: "#666666" },
            { type: "text", text: "📍 " + order.address, size: "sm",
              color: "#666666", wrap: true },
            { type: "text", text: "📞 " + order.phone, size: "sm", color: "#666666" }
          ]
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          color: "#1DB446",
          action: {
            type: "uri",
            label: "📦 ติดตามพัสดุ",
            uri: order.trackingUrl || "https://example.com"
          }
        }
      ]
    }
  };
}

// === ส่งใบเสร็จ ===
function sendReceipt() {
  const order = {
    orderId: "ORD-20250624-001",
    customerName: "คุณสมชาย",
    phone: "081-234-5678",
    address: "123 ถ.สุขุมวิท แขวงคลองเตย กรุงเทพฯ 10110",
    items: [
      { name: "เสื้อยืด Oversize", qty: 2, price: 390 },
      { name: "กางเกงขาสั้น", qty: 1, price: 490 },
      { name: "หมวกแก๊ป", qty: 1, price: 290 }
    ],
    subtotal: 1560,
    shipping: 0,
    discount: 100,
    total: 1460,
    trackingUrl: "https://track.thailandpost.co.th"
  };
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: "USER_ID",
      messages: [{
        type: "flex",
        altText: "ใบเสร็จ " + order.orderId + " ฿" + order.total,
        contents: createReceipt(order)
      }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ปรับแต่งใบเสร็จ</h4>
          <ul>
            <li>เพิ่มโลโก้ร้านในส่วน <strong>Header</strong></li>
            <li>เพิ่ม QR Code สำหรับโอนเงินใน <strong>Footer</strong></li>
            <li>เพิ่มสถานะออเดอร์ (รอชำระ, กำลังแพ็ค, จัดส่งแล้ว)</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 6,
    slug: 'carousel-catalog',
    emoji: '🎠',
    title: 'Carousel: แคตตาล็อกสินค้า',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/carousel-catalog.webp" alt="Carousel Product Catalog" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🎠 สร้างแคตตาล็อกสินค้าด้วย Carousel</h2>
          <p>Carousel คือ Flex Message ที่แสดงหลายการ์ดเรียงกัน เลื่อนดูได้! เหมาะสำหรับแสดงรายการสินค้า เมนูอาหาร หรือบริการต่าง ๆ ได้สูงสุด 12 การ์ด</p>
        </div>

        <h3>💻 โค้ดแคตตาล็อกสินค้า</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Carousel Catalog</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

// === สร้าง Carousel แคตตาล็อก ===
function createCatalogCarousel(products) {
  const bubbles = products.map(product => ({
    type: "bubble",
    size: "micro",
    hero: {
      type: "image",
      url: product.imageUrl,
      size: "full",
      aspectRatio: "1:1",
      aspectMode: "cover",
      action: {
        type: "postback",
        data: "action=view&id=" + product.id
      }
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: product.name,
          weight: "bold",
          size: "sm",
          wrap: true,
          maxLines: 2
        },
        {
          type: "text",
          text: "฿" + product.price.toLocaleString(),
          size: "lg",
          color: "#FF5551",
          weight: "bold",
          margin: "sm"
        },
        product.originalPrice ? {
          type: "text",
          text: "฿" + product.originalPrice.toLocaleString(),
          size: "xs",
          color: "#AAAAAA",
          decoration: "line-through"
        } : { type: "filler" },
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            {
              type: "box",
              layout: "vertical",
              contents: [{
                type: "text",
                text: product.badge || "พร้อมส่ง",
                size: "xxs",
                color: "#FFFFFF",
                align: "center"
              }],
              backgroundColor: product.badgeColor || "#1DB446",
              cornerRadius: "xl",
              paddingAll: "xs",
              paddingStart: "sm",
              paddingEnd: "sm"
            }
          ]
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [{
        type: "button",
        style: "primary",
        color: "#FF5551",
        height: "sm",
        action: {
          type: "postback",
          label: "🛒 สั่งซื้อ",
          data: "action=order&id=" + product.id,
          displayText: "สั่งซื้อ " + product.name
        }
      }]
    }
  }));
  
  return {
    type: "carousel",
    contents: bubbles
  };
}

// === ดึงสินค้าจาก Sheet แล้วส่ง Carousel ===
function sendProductCatalog(userId) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สินค้า");
  const data = sheet.getDataRange().getValues();
  
  const products = [];
  for (let i = 1; i < data.length && products.length < 12; i++) {
    products.push({
      id: data[i][0],
      name: data[i][1],
      price: data[i][2],
      originalPrice: data[i][3] || null,
      imageUrl: data[i][4],
      badge: data[i][5] || "พร้อมส่ง",
      badgeColor: data[i][6] || "#1DB446"
    });
  }
  
  const carousel = createCatalogCarousel(products);
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      to: userId,
      messages: [{
        type: "flex",
        altText: "🛍️ แคตตาล็อกสินค้า (" + products.length + " รายการ)",
        contents: carousel
      }]
    })
  });
}</code></pre>
        </div>

        <h3>💻 Node.js Version</h3>
        <div class="code-block">
          <div class="code-header">Node.js — Carousel</div>
          <pre><code>const axios = require('axios');

async function sendCatalog(userId, products) {
  const bubbles = products.slice(0, 12).map(p => ({
    type: "bubble",
    size: "micro",
    hero: {
      type: "image", url: p.imageUrl,
      size: "full", aspectRatio: "1:1", aspectMode: "cover"
    },
    body: {
      type: "box", layout: "vertical",
      contents: [
        { type: "text", text: p.name, weight: "bold", size: "sm", wrap: true },
        { type: "text", text: \`฿\${p.price.toLocaleString()}\`,
          size: "lg", color: "#FF5551", weight: "bold", margin: "sm" }
      ]
    },
    footer: {
      type: "box", layout: "vertical",
      contents: [{
        type: "button", style: "primary", color: "#FF5551", height: "sm",
        action: { type: "postback", label: "🛒 สั่งซื้อ",
          data: \`action=order&id=\${p.id}\` }
      }]
    }
  }));
  
  await axios.post('https://api.line.me/v2/bot/message/push', {
    to: userId,
    messages: [{
      type: "flex",
      altText: "แคตตาล็อกสินค้า",
      contents: { type: "carousel", contents: bubbles }
    }]
  }, {
    headers: {
      'Authorization': \`Bearer \${process.env.LINE_CHANNEL_ACCESS_TOKEN}\`
    }
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ข้อจำกัดของ Carousel</h4>
          <ul>
            <li>สูงสุด <strong>12 bubble</strong> ต่อ 1 carousel</li>
            <li>ทุก bubble ต้องมี <strong>size เท่ากัน</strong> (micro, kilo, mega)</li>
            <li>แนะนำใช้ <strong>size: "micro"</strong> สำหรับแคตตาล็อก (กะทัดรัด)</li>
            <li>ถ้าสินค้าเกิน 12 ให้แบ่งส่งหลาย message หรือใส่ปุ่ม "ดูทั้งหมด"</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 7,
    slug: 'dynamic-flex',
    emoji: '🔄',
    title: 'Dynamic Flex จาก Database',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/dynamic-flex.webp" alt="Dynamic Flex from Database" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🔄 สร้าง Dynamic Flex Message จาก Database</h2>
          <p>แทนที่จะ Hard-code JSON ไว้ในโค้ด เราจะดึงข้อมูลจาก Database (Google Sheets / Firebase / MySQL) มาสร้าง Flex Message แบบ Dynamic ทุกครั้ง ข้อมูลอัปเดตตลอด!</p>
        </div>

        <h3>💻 Dynamic Product Card จาก Google Sheets</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

// === ค้นหาสินค้าจาก Sheets แล้วสร้าง Flex ===
function searchProduct(keyword) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สินค้า");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const results = [];
  
  for (let i = 1; i < data.length; i++) {
    const name = data[i][1].toString().toLowerCase();
    if (name.includes(keyword.toLowerCase())) {
      results.push({
        id: data[i][0],
        name: data[i][1],
        price: data[i][2],
        stock: data[i][3],
        imageUrl: data[i][4],
        category: data[i][5]
      });
    }
  }
  
  return results;
}

// === สร้าง Flex จากผลค้นหา ===
function buildSearchResultFlex(results, keyword) {
  if (results.length === 0) {
    // ไม่พบสินค้า
    return {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          { type: "text", text: "🔍 ไม่พบสินค้า", weight: "bold", size: "lg" },
          { type: "text", text: 'ไม่พบ "' + keyword + '" ในระบบ',
            size: "sm", color: "#888888", margin: "md", wrap: true },
          { type: "text", text: "ลองค้นด้วยคำอื่น หรือพิมพ์ 'สินค้าทั้งหมด'",
            size: "xs", color: "#AAAAAA", margin: "md", wrap: true }
        ]
      }
    };
  }
  
  // สร้าง Carousel จากผลค้นหา
  const bubbles = results.slice(0, 10).map(product => ({
    type: "bubble",
    size: "kilo",
    hero: {
      type: "image",
      url: product.imageUrl,
      size: "full",
      aspectRatio: "4:3",
      aspectMode: "cover"
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        { type: "text", text: product.name, weight: "bold", size: "md", wrap: true },
        {
          type: "box",
          layout: "horizontal",
          margin: "md",
          contents: [
            { type: "text", text: "฿" + product.price.toLocaleString(),
              size: "xl", color: "#FF5551", weight: "bold" },
            {
              type: "box",
              layout: "vertical",
              contents: [{
                type: "text",
                text: product.stock > 0 ? "เหลือ " + product.stock : "สินค้าหมด",
                size: "xxs",
                color: product.stock > 0 ? "#FFFFFF" : "#FFFFFF",
                align: "center"
              }],
              backgroundColor: product.stock > 0 ? "#1DB446" : "#FF5551",
              cornerRadius: "xl",
              paddingAll: "xs",
              paddingStart: "sm",
              paddingEnd: "sm",
              justifyContent: "center"
            }
          ]
        }
      ]
    },
    footer: {
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          color: product.stock > 0 ? "#FF5551" : "#CCCCCC",
          height: "sm",
          action: product.stock > 0 ? {
            type: "postback",
            label: "🛒 สั่ง",
            data: "action=order&id=" + product.id
          } : {
            type: "postback",
            label: "สินค้าหมด",
            data: "action=notify&id=" + product.id
          }
        },
        {
          type: "button",
          style: "secondary",
          height: "sm",
          action: {
            type: "postback",
            label: "📋 ดูเพิ่ม",
            data: "action=detail&id=" + product.id
          }
        }
      ]
    }
  }));
  
  return { type: "carousel", contents: bubbles };
}

// === Webhook Handler สำหรับค้นหาสินค้า ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const text = event.message.text;
      const replyToken = event.replyToken;
      
      // ค้นหาสินค้า
      if (text.startsWith("ค้นหา ")) {
        const keyword = text.replace("ค้นหา ", "");
        const results = searchProduct(keyword);
        const flex = buildSearchResultFlex(results, keyword);
        
        replyFlex(replyToken, "ผลค้นหา: " + keyword, flex);
      }
    }
  }
  
  return ContentService.createTextOutput("OK");
}

function replyFlex(replyToken, altText, contents) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [{
        type: "flex",
        altText: altText,
        contents: contents
      }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 แนวทางการใช้ Dynamic Flex</h4>
          <ul>
            <li>ผู้ใช้พิมพ์ "ค้นหา เสื้อ" → Bot ค้นจาก Sheets → ส่ง Carousel</li>
            <li>อัปเดตราคา/สต็อกใน Sheets → ผู้ใช้เห็นข้อมูลล่าสุดทันที</li>
            <li>เพิ่มสินค้าใหม่ใน Sheets → ไม่ต้องแก้โค้ด!</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 8,
    slug: 'interactive-flex',
    emoji: '⚡',
    title: 'Interactive: Postback + Quick Reply',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/interactive-flex.webp" alt="Interactive Flex with Postback" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>⚡ Postback + Quick Reply — ทำให้ Bot โต้ตอบได้</h2>
          <p>เรียนรู้วิธีสร้าง Bot ที่ตอบโต้กับผู้ใช้ได้! ด้วย <strong>Postback Action</strong> (ส่ง data กลับ Bot เมื่อกดปุ่ม) และ <strong>Quick Reply</strong> (ปุ่มลัดด้านล่างแชท)</p>
        </div>

        <h3>🔘 Postback Action คืออะไร?</h3>
        <div class="highlight-box">
          <p>Postback คือ Action ที่ส่ง <strong>data</strong> กลับมาให้ Bot โดยที่ผู้ใช้ไม่เห็น data นั้นในแชท เหมาะสำหรับ:</p>
          <ul>
            <li>ปุ่ม "สั่งซื้อ" / "เพิ่มในตะกร้า"</li>
            <li>ปุ่ม "ยืนยัน" / "ยกเลิก"</li>
            <li>ปุ่มเลือกตัวเลือกต่าง ๆ</li>
          </ul>
        </div>

        <h3>💻 จัดการ Postback Event</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Postback Handler</div>
          <pre><code>const LINE_TOKEN = "YOUR_CHANNEL_ACCESS_TOKEN";

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    // === จัดการ Postback ===
    if (event.type === "postback") {
      handlePostback(event);
    }
    // === จัดการข้อความ ===
    else if (event.type === "message") {
      handleMessage(event);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === Parse Postback Data ===
function handlePostback(event) {
  const data = event.postback.data;
  const userId = event.source.userId;
  const replyToken = event.replyToken;
  
  // Parse query string: action=order&id=P001&qty=2
  const params = {};
  data.split("&").forEach(pair => {
    const [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value);
  });
  
  Logger.log("Postback: " + JSON.stringify(params));
  
  switch (params.action) {
    case "order":
      handleOrder(replyToken, userId, params.id);
      break;
    case "addToCart":
      handleAddToCart(replyToken, userId, params.id);
      break;
    case "confirm":
      handleConfirm(replyToken, userId, params.orderId);
      break;
    case "cancel":
      handleCancel(replyToken, userId, params.orderId);
      break;
    case "selectSize":
      handleSelectSize(replyToken, userId, params.id, params.size);
      break;
    default:
      replyText(replyToken, "ไม่เข้าใจคำสั่ง กรุณาลองใหม่");
  }
}

// === ตัวอย่าง: สั่งซื้อ → ถามยืนยัน ===
function handleOrder(replyToken, userId, productId) {
  // ดึงข้อมูลสินค้า
  const product = getProductById(productId);
  
  // ส่ง Flex ยืนยัน + Quick Reply
  const confirmFlex = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        { type: "text", text: "📦 ยืนยันการสั่งซื้อ", weight: "bold", size: "lg" },
        { type: "separator", margin: "md" },
        { type: "text", text: product.name, size: "md", margin: "md" },
        { type: "text", text: "฿" + product.price.toLocaleString(),
          size: "xl", color: "#FF5551", weight: "bold", margin: "sm" }
      ]
    },
    footer: {
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "primary",
          color: "#1DB446",
          action: {
            type: "postback",
            label: "✅ ยืนยัน",
            data: "action=confirm&orderId=" + Date.now() + "&productId=" + productId
          }
        },
        {
          type: "button",
          style: "secondary",
          action: {
            type: "postback",
            label: "❌ ยกเลิก",
            data: "action=cancel&orderId=" + Date.now()
          }
        }
      ]
    }
  };
  
  replyFlex(replyToken, "ยืนยันการสั่งซื้อ", confirmFlex);
}

function getProductById(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สินค้า");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      return { id: data[i][0], name: data[i][1], price: data[i][2] };
    }
  }
  return { id: id, name: "สินค้า", price: 0 };
}</code></pre>
        </div>

        <h3>⚡ Quick Reply — ปุ่มลัดด้านล่างแชท</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Quick Reply</div>
          <pre><code>// === ส่งข้อความพร้อม Quick Reply ===
function sendWithQuickReply(replyToken) {
  const payload = {
    replyToken: replyToken,
    messages: [{
      type: "text",
      text: "คุณต้องการทำอะไร?",
      quickReply: {
        items: [
          {
            type: "action",
            imageUrl: "https://example.com/icons/search.png",
            action: {
              type: "message",
              label: "🔍 ค้นหาสินค้า",
              text: "ค้นหาสินค้า"
            }
          },
          {
            type: "action",
            imageUrl: "https://example.com/icons/cart.png",
            action: {
              type: "message",
              label: "🛒 ตะกร้าสินค้า",
              text: "ดูตะกร้า"
            }
          },
          {
            type: "action",
            imageUrl: "https://example.com/icons/promo.png",
            action: {
              type: "message",
              label: "🎉 โปรโมชั่น",
              text: "โปรโมชั่นวันนี้"
            }
          },
          {
            type: "action",
            action: {
              type: "location",
              label: "📍 ส่งตำแหน่ง"
            }
          },
          {
            type: "action",
            action: {
              type: "camera",
              label: "📸 ถ่ายรูป"
            }
          },
          {
            type: "action",
            action: {
              type: "datetimepicker",
              label: "📅 เลือกวันที่",
              data: "action=selectDate",
              mode: "date"
            }
          }
        ]
      }
    }]
  };
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify(payload)
  });
}

// === Helper Functions ===
function replyText(replyToken, text) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [{ type: "text", text: text }]
    })
  });
}

function replyFlex(replyToken, altText, contents) {
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [{
        type: "flex",
        altText: altText,
        contents: contents
      }]
    })
  });
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 Quick Reply Action Types</h4>
          <ul>
            <li><strong>message</strong> — ส่งข้อความ</li>
            <li><strong>postback</strong> — ส่ง data กลับ Bot</li>
            <li><strong>uri</strong> — เปิดลิงก์</li>
            <li><strong>location</strong> — แชร์ตำแหน่ง</li>
            <li><strong>camera</strong> — เปิดกล้อง</li>
            <li><strong>cameraRoll</strong> — เปิดคลังรูป</li>
            <li><strong>datetimepicker</strong> — เลือกวันที่/เวลา</li>
          </ul>
          <p>Quick Reply แสดงได้สูงสุด <strong>13 ปุ่ม</strong> และหายไปเมื่อผู้ใช้กดเลือก</p>
        </div>
      </div>
    `
  }
];
