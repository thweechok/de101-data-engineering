export const chapters = [
  {
    number: 1,
    slug: 'ai-chatbot-intro',
    emoji: '🤖',
    title: 'AI Chatbot คืออะไร?',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/ai-chatbot-intro.webp" alt="AI Chatbot Introduction" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🤖 AI Chatbot คืออะไร?</h2>
          <p>AI Chatbot คือบอทที่ใช้ปัญญาประดิษฐ์ (AI) ในการเข้าใจภาษามนุษย์และตอบกลับอย่างชาญฉลาด ไม่ใช่แค่ตอบตาม keyword แต่เข้าใจ <strong>บริบท ความหมาย และเจตนา</strong> ของผู้ใช้</p>
        </div>

        <div class="highlight-box">
          <h3>🔄 Bot ธรรมดา vs AI Bot</h3>
          <table class="data-table">
            <tr><th>Bot ธรรมดา</th><th>AI Bot</th></tr>
            <tr><td>ตอบตาม keyword ตายตัว</td><td>เข้าใจภาษาธรรมชาติ</td></tr>
            <tr><td>if-else / switch-case</td><td>LLM (Large Language Model)</td></tr>
            <tr><td>พิมพ์ผิดนิดเดียว ไม่เข้าใจ</td><td>เข้าใจแม้สะกดผิด</td></tr>
            <tr><td>ตอบได้แค่ที่เตรียมไว้</td><td>ตอบได้หลากหลาย สร้างสรรค์</td></tr>
            <tr><td>ไม่จำบทสนทนา</td><td>จำบริบทย้อนหลังได้</td></tr>
          </table>
        </div>

        <h3>🧠 AI Model ยอดนิยม</h3>
        <div class="highlight-box">
          <ul>
            <li>✨ <strong>Google Gemini</strong> — ฟรี! รองรับภาษาไทยดี เชื่อมกับ GAS ง่าย</li>
            <li>🧠 <strong>OpenAI ChatGPT</strong> — ยอดนิยม ฉลาดมาก (มีค่าใช้จ่าย)</li>
            <li>🦙 <strong>Meta Llama</strong> — Open Source ฟรี รันเองได้</li>
            <li>🎯 <strong>Anthropic Claude</strong> — เก่งเรื่องโค้ดและการวิเคราะห์</li>
          </ul>
        </div>

        <h3>💻 โครงสร้าง AI LINE Bot</h3>
        <div class="code-block">
          <div class="code-header">Architecture Overview</div>
          <pre><code>// Flow การทำงาน:
// 
// 1. ผู้ใช้ส่งข้อความใน LINE
//    ↓
// 2. LINE ส่ง Webhook มาที่ Server (GAS / Node.js)
//    ↓
// 3. Server ส่งข้อความไป AI API (Gemini / ChatGPT)
//    ↓
// 4. AI ประมวลผลและสร้างคำตอบ
//    ↓
// 5. Server ส่งคำตอบกลับไปยัง LINE
//    ↓
// 6. ผู้ใช้เห็นข้อความตอบกลับ

// === โค้ดพื้นฐาน ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const userMessage = event.message.text;
      const replyToken = event.replyToken;
      
      // ส่งไป AI แล้วรอคำตอบ
      const aiResponse = askAI(userMessage);
      
      // ตอบกลับผู้ใช้
      replyMessage(replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// ฟังก์ชัน askAI จะสอนในบทถัดไป!
function askAI(message) {
  // Gemini หรือ ChatGPT
  return "คำตอบจาก AI";
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ในคอร์สนี้คุณจะได้เรียนรู้</h4>
          <ul>
            <li>เชื่อม LINE Bot กับ <strong>Google Gemini</strong> (ฟรี!)</li>
            <li>เชื่อม LINE Bot กับ <strong>ChatGPT</strong></li>
            <li>กำหนด <strong>บุคลิก Bot</strong> ด้วย System Prompt</li>
            <li>ทำ <strong>Conversation History</strong> จำบทสนทนา</li>
            <li>สร้าง <strong>RAG</strong> ตอบจากข้อมูลธุรกิจ</li>
            <li>รับ/ส่ง <strong>รูปภาพ</strong> วิเคราะห์ด้วย Vision AI</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 2,
    slug: 'line-gemini',
    emoji: '✨',
    title: 'LINE Bot + Google Gemini',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/line-gemini.webp" alt="LINE Bot with Google Gemini" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>✨ เชื่อม LINE Bot กับ Google Gemini AI</h2>
          <p>Google Gemini เป็น AI Model จาก Google ที่ใช้ <strong>ฟรี!</strong> รองรับภาษาไทยได้ดีเยี่ยม เชื่อมกับ Google Apps Script ได้ง่ายมาก เหมาะสำหรับเริ่มต้น</p>
        </div>

        <h3>🔑 รับ API Key</h3>
        <div class="step-list">
          <div class="step">
            <span class="step-number">1</span>
            <p>ไปที่ <a href="https://aistudio.google.com/apikey" target="_blank">Google AI Studio</a></p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>คลิก <strong>"Create API Key"</strong></p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>คัดลอก API Key มาใส่ในโค้ด</p>
          </div>
        </div>

        <h3>💻 LINE Bot + Gemini (Google Apps Script)</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;

// === Webhook Handler ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const userMessage = event.message.text;
      const replyToken = event.replyToken;
      
      // ส่งไป Gemini
      const aiResponse = askGemini(userMessage);
      
      // ตอบกลับ LINE
      replyMessage(replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === ถาม Gemini ===
function askGemini(message) {
  try {
    const payload = {
      contents: [{
        parts: [{
          text: message
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024
      }
    };
    
    const response = UrlFetchApp.fetch(GEMINI_URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    
    if (result.candidates && result.candidates[0]) {
      return result.candidates[0].content.parts[0].text;
    }
    
    return "ขออภัย ไม่สามารถประมวลผลได้ในขณะนี้";
    
  } catch (err) {
    Logger.log("Gemini Error: " + err.message);
    return "เกิดข้อผิดพลาด: " + err.message;
  }
}

// === ตอบกลับ LINE ===
function replyMessage(replyToken, text) {
  // ตัดข้อความไม่ให้เกิน 5000 ตัวอักษร (ข้อจำกัดของ LINE)
  if (text.length > 5000) {
    text = text.substring(0, 4997) + "...";
  }
  
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
}</code></pre>
        </div>

        <h3>💻 Node.js Version</h3>
        <div class="code-block">
          <div class="code-header">Node.js + Express</div>
          <pre><code>const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

app.post('/webhook', async (req, res) => {
  const events = req.body.events;
  
  for (const event of events) {
    if (event.type === 'message' && event.message.type === 'text') {
      const userMsg = event.message.text;
      
      // ถาม Gemini
      const aiReply = await askGemini(userMsg);
      
      // ตอบกลับ LINE
      await axios.post('https://api.line.me/v2/bot/message/reply', {
        replyToken: event.replyToken,
        messages: [{ type: 'text', text: aiReply }]
      }, {
        headers: { 'Authorization': \`Bearer \${LINE_TOKEN}\` }
      });
    }
  }
  
  res.sendStatus(200);
});

async function askGemini(message) {
  try {
    const url = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=\${GEMINI_KEY}\`;
    
    const { data } = await axios.post(url, {
      contents: [{ parts: [{ text: message }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024
      }
    });
    
    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error('Gemini Error:', err.message);
    return 'ขออภัย เกิดข้อผิดพลาด';
  }
}

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ข้อดีของ Gemini</h4>
          <ul>
            <li>🆓 <strong>ฟรี</strong> — มี Free Tier ให้ใช้ได้เยอะ</li>
            <li>🇹🇭 <strong>ภาษาไทยดี</strong> — เข้าใจและตอบภาษาไทยได้ดีมาก</li>
            <li>🖼️ <strong>รองรับรูปภาพ</strong> — วิเคราะห์รูปได้ (Vision)</li>
            <li>⚡ <strong>เร็ว</strong> — ตอบกลับไว เหมาะกับ Chat</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 3,
    slug: 'line-chatgpt',
    emoji: '🧠',
    title: 'LINE Bot + ChatGPT',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/line-chatgpt.webp" alt="LINE Bot with ChatGPT" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🧠 เชื่อม LINE Bot กับ ChatGPT (OpenAI)</h2>
          <p>ChatGPT จาก OpenAI เป็น AI ที่ได้รับความนิยมสูงสุด! ฉลาด สร้างสรรค์ และตอบได้หลากหลาย ในบทนี้จะเชื่อม LINE Bot กับ ChatGPT API</p>
        </div>

        <h3>🔑 รับ API Key จาก OpenAI</h3>
        <div class="step-list">
          <div class="step">
            <span class="step-number">1</span>
            <p>ไปที่ <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</a></p>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <p>สร้าง Account และเติมเงิน (ขั้นต่ำ $5)</p>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <p>สร้าง API Key แล้วคัดลอกมา</p>
          </div>
        </div>

        <h3>💻 LINE Bot + ChatGPT (Google Apps Script)</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

// === Webhook Handler ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const userMessage = event.message.text;
      const replyToken = event.replyToken;
      
      // ส่งไป ChatGPT
      const aiResponse = askChatGPT(userMessage);
      
      // ตอบกลับ LINE
      replyMessage(replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === ถาม ChatGPT ===
function askChatGPT(message) {
  try {
    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
      },
      payload: JSON.stringify({
        model: "gpt-4o-mini",  // หรือ "gpt-4o" (แพงกว่าแต่ฉลาดกว่า)
        messages: [
          {
            role: "system",
            content: "คุณเป็นผู้ช่วยที่เป็นมิตร ตอบเป็นภาษาไทย กระชับ ได้ใจความ"
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 1024,
        temperature: 0.7
      }),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    
    if (result.choices && result.choices[0]) {
      return result.choices[0].message.content;
    }
    
    return "ขออภัย ไม่สามารถประมวลผลได้";
    
  } catch (err) {
    Logger.log("ChatGPT Error: " + err.message);
    return "เกิดข้อผิดพลาด: " + err.message;
  }
}

function replyMessage(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
  
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
}</code></pre>
        </div>

        <h3>💻 Node.js Version</h3>
        <div class="code-block">
          <div class="code-header">Node.js + Express</div>
          <pre><code>const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const OPENAI_KEY = process.env.OPENAI_API_KEY;

app.post('/webhook', async (req, res) => {
  const events = req.body.events;
  
  for (const event of events) {
    if (event.type === 'message' && event.message.type === 'text') {
      const aiReply = await askChatGPT(event.message.text);
      
      await axios.post('https://api.line.me/v2/bot/message/reply', {
        replyToken: event.replyToken,
        messages: [{ type: 'text', text: aiReply }]
      }, {
        headers: { 'Authorization': \`Bearer \${LINE_TOKEN}\` }
      });
    }
  }
  res.sendStatus(200);
});

async function askChatGPT(message) {
  try {
    const { data } = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'คุณเป็นผู้ช่วยที่เป็นมิตร ตอบเป็นภาษาไทย' },
        { role: 'user', content: message }
      ],
      max_tokens: 1024,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': \`Bearer \${OPENAI_KEY}\`,
        'Content-Type': 'application/json'
      }
    });
    
    return data.choices[0].message.content;
  } catch (err) {
    console.error('ChatGPT Error:', err.message);
    return 'ขออภัย เกิดข้อผิดพลาด';
  }
}

app.listen(3000);</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 เปรียบเทียบ Gemini vs ChatGPT</h4>
          <table class="data-table">
            <tr><th></th><th>Gemini</th><th>ChatGPT</th></tr>
            <tr><td>ราคา</td><td>ฟรี (มี Free Tier)</td><td>เสียเงิน ($0.15/1M tokens)</td></tr>
            <tr><td>ภาษาไทย</td><td>ดีมาก</td><td>ดีมาก</td></tr>
            <tr><td>ความเร็ว</td><td>เร็ว</td><td>เร็ว</td></tr>
            <tr><td>Vision</td><td>รองรับ</td><td>รองรับ</td></tr>
            <tr><td>เหมาะกับ</td><td>เริ่มต้น / งบจำกัด</td><td>ธุรกิจ / ต้องการคุณภาพสูง</td></tr>
          </table>
        </div>
      </div>
    `
  },
  {
    number: 4,
    slug: 'system-prompt',
    emoji: '🎭',
    title: 'กำหนดบุคลิก Bot (System Prompt)',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/system-prompt.webp" alt="System Prompt Design" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🎭 กำหนดบุคลิก Bot ด้วย System Prompt</h2>
          <p>System Prompt คือ "คำสั่งลับ" ที่กำหนดว่า Bot จะมีบุคลิกอย่างไร ตอบแบบไหน มีความรู้อะไร และห้ามทำอะไร — เหมือนการเขียน Job Description ให้ Bot!</p>
        </div>

        <h3>📝 หลักการเขียน System Prompt ที่ดี</h3>
        <div class="highlight-box">
          <ol>
            <li><strong>บทบาท (Role)</strong> — Bot เป็นใคร? ผู้ช่วยร้านค้า? ที่ปรึกษา?</li>
            <li><strong>ความรู้ (Knowledge)</strong> — Bot รู้อะไรบ้าง? สินค้า ราคา บริการ?</li>
            <li><strong>โทน (Tone)</strong> — พูดแบบไหน? สุภาพ เป็นกันเอง ตลก?</li>
            <li><strong>ข้อจำกัด (Constraints)</strong> — ห้ามทำอะไร? อย่าตอบเรื่องอะไร?</li>
            <li><strong>รูปแบบ (Format)</strong> — ตอบสั้นหรือยาว? ใช้ emoji ไหม?</li>
          </ol>
        </div>

        <h3>💻 ตัวอย่าง System Prompt สำหรับธุรกิจ</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — System Prompt</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

// === System Prompt สำหรับร้านเสื้อผ้า ===
const SYSTEM_PROMPT = \`คุณคือ "น้องดี" ผู้ช่วยประจำร้าน De Fashion 
ร้านขายเสื้อผ้าแฟชั่นออนไลน์

📋 ข้อมูลร้าน:
- ชื่อร้าน: De Fashion
- เปิดทุกวัน 09:00-21:00
- จัดส่ง Kerry, Flash, ไปรษณีย์
- ส่งฟรีเมื่อซื้อ 500 บาทขึ้นไป
- รับชำระผ่าน โอนเงิน, บัตรเครดิต, เก็บเงินปลายทาง (+30฿)
- Line: @defashion

🛍️ สินค้า:
- เสื้อยืด Oversize: 290-390 บาท (S, M, L, XL)
- กางเกงขาสั้น: 390-490 บาท
- กางเกงยีนส์: 590-890 บาท
- หมวกแก๊ป: 190-290 บาท
- กระเป๋าผ้า: 150-250 บาท

🎯 กฎการตอบ:
1. ตอบเป็นภาษาไทย สุภาพ เป็นกันเอง
2. ใช้ emoji ให้เหมาะสม
3. ตอบสั้น กระชับ ไม่เกิน 3-4 บรรทัด
4. ถ้าถามราคา → ตอบราคาพร้อมแนะนำ
5. ถ้าถามสี/ไซส์ → ถามกลับว่าต้องการแบบไหน
6. ถ้าจะสั่งซื้อ → แนะนำให้กรอกฟอร์มสั่งซื้อ
7. ห้ามตอบเรื่องการเมือง ศาสนา หรือเรื่องที่ไม่เกี่ยวกับร้าน
8. ถ้าไม่รู้คำตอบ → บอกว่าจะให้แอดมินติดต่อกลับ\`;

// === Webhook Handler ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const userMessage = event.message.text;
      const replyToken = event.replyToken;
      
      const aiResponse = askGeminiWithPrompt(userMessage);
      replyMessage(replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === ถาม Gemini พร้อม System Prompt ===
function askGeminiWithPrompt(userMessage) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
  
  try {
    const response = UrlFetchApp.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: [{
          role: "user",
          parts: [{ text: userMessage }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512
        }
      }),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    return result.candidates[0].content.parts[0].text;
    
  } catch (err) {
    Logger.log("Error: " + err.message);
    return "ขออภัยค่ะ ระบบขัดข้อง กรุณาลองใหม่อีกครั้งนะคะ 🙏";
  }
}

// === ChatGPT Version ===
function askChatGPTWithPrompt(userMessage) {
  try {
    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
      },
      payload: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage }
        ],
        max_tokens: 512,
        temperature: 0.7
      })
    });
    
    const result = JSON.parse(response.getContentText());
    return result.choices[0].message.content;
    
  } catch (err) {
    return "ขออภัยค่ะ ระบบขัดข้อง 🙏";
  }
}

function replyMessage(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
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
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>🎯 ตัวอย่าง System Prompt อื่น ๆ</h4>
          <ul>
            <li>🍕 <strong>ร้านอาหาร</strong> — "คุณคือพนักงานรับออเดอร์ร้านพิซซ่า..."</li>
            <li>🏥 <strong>คลินิก</strong> — "คุณคือผู้ช่วยนัดหมายคลินิกความงาม..."</li>
            <li>🏫 <strong>โรงเรียน</strong> — "คุณคือผู้ช่วยตอบคำถามผู้ปกครอง..."</li>
            <li>🏋️ <strong>ฟิตเนส</strong> — "คุณคือ Personal Trainer ให้คำแนะนำ..."</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 5,
    slug: 'conversation-history',
    emoji: '💬',
    title: 'Conversation History',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/conversation-history.webp" alt="Conversation History" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>💬 Conversation History — ทำให้ Bot จำบทสนทนาได้</h2>
          <p>ปัญหาของ Bot ธรรมดาคือ <strong>ลืมทุกอย่าง</strong> ทุกครั้งที่มีข้อความใหม่ Bot จะเริ่มต้นใหม่หมด ไม่จำว่าเมื่อกี้คุยอะไร — ในบทนี้เราจะแก้ปัญหานี้!</p>
        </div>

        <div class="highlight-box">
          <h3>🧠 ทำไม Bot ถึงลืม?</h3>
          <p>เพราะทุกครั้งที่ส่งข้อความไป AI API เราส่งแค่ <strong>ข้อความล่าสุด</strong> ไม่ได้ส่งบทสนทนาก่อนหน้า AI เลยไม่รู้ว่าเมื่อกี้คุยเรื่องอะไร</p>
          <p><strong>วิธีแก้:</strong> เก็บประวัติบทสนทนา แล้วส่งไปพร้อมกับข้อความใหม่ทุกครั้ง!</p>
        </div>

        <h3>💻 โค้ดจัดการ Conversation History</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — ใช้ CacheService</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

const SYSTEM_PROMPT = "คุณคือผู้ช่วยร้าน De Fashion ตอบเป็นภาษาไทย สุภาพ เป็นกันเอง";
const MAX_HISTORY = 10; // เก็บบทสนทนาสูงสุด 10 คู่

// === Webhook Handler ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const userId = event.source.userId;
      const userMessage = event.message.text;
      const replyToken = event.replyToken;
      
      // ดึงประวัติบทสนทนา
      let history = getHistory(userId);
      
      // เพิ่มข้อความผู้ใช้เข้าไป
      history.push({
        role: "user",
        parts: [{ text: userMessage }]
      });
      
      // ส่งไป Gemini พร้อมประวัติ
      const aiResponse = askGeminiWithHistory(history);
      
      // เพิ่มคำตอบ AI เข้าไป
      history.push({
        role: "model",
        parts: [{ text: aiResponse }]
      });
      
      // ตัดประวัติไม่ให้ยาวเกินไป
      if (history.length > MAX_HISTORY * 2) {
        history = history.slice(-MAX_HISTORY * 2);
      }
      
      // บันทึกประวัติ
      saveHistory(userId, history);
      
      // ตอบกลับ
      replyMessage(replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === ถาม Gemini พร้อมประวัติ ===
function askGeminiWithHistory(history) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
  
  try {
    const response = UrlFetchApp.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }]
        },
        contents: history,  // ส่งประวัติทั้งหมด!
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512
        }
      }),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    return result.candidates[0].content.parts[0].text;
    
  } catch (err) {
    Logger.log("Error: " + err.message);
    return "ขออภัย เกิดข้อผิดพลาด 🙏";
  }
}

// === เก็บประวัติใน CacheService (หมดอายุ 6 ชม.) ===
function getHistory(userId) {
  const cache = CacheService.getScriptCache();
  const data = cache.get("history_" + userId);
  return data ? JSON.parse(data) : [];
}

function saveHistory(userId, history) {
  const cache = CacheService.getScriptCache();
  cache.put("history_" + userId, JSON.stringify(history), 21600); // 6 ชั่วโมง
}

// === เก็บประวัติใน Google Sheets (ถาวร) ===
function getHistoryFromSheet(userId) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ChatHistory");
  const data = sheet.getDataRange().getValues();
  
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] === userId) {
      return JSON.parse(data[i][1]);
    }
  }
  return [];
}

function saveHistoryToSheet(userId, history) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ChatHistory");
  const data = sheet.getDataRange().getValues();
  
  // หา row ของ user
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === userId) {
      sheet.getRange(i + 1, 2).setValue(JSON.stringify(history));
      sheet.getRange(i + 1, 3).setValue(new Date());
      return;
    }
  }
  
  // ถ้าไม่มี → เพิ่ม row ใหม่
  sheet.appendRow([userId, JSON.stringify(history), new Date()]);
}

function replyMessage(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
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
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 เปรียบเทียบวิธีเก็บประวัติ</h4>
          <table class="data-table">
            <tr><th>วิธี</th><th>ข้อดี</th><th>ข้อเสีย</th></tr>
            <tr><td>CacheService</td><td>เร็ว ง่าย</td><td>หมดอายุ 6 ชม.</td></tr>
            <tr><td>Google Sheets</td><td>ถาวร ดูข้อมูลง่าย</td><td>ช้ากว่า Cache</td></tr>
            <tr><td>PropertiesService</td><td>ง่าย ไม่หมดอายุ</td><td>จำกัด 9KB/key</td></tr>
          </table>
          <p>แนะนำ: ใช้ <strong>CacheService</strong> สำหรับการใช้งานทั่วไป หรือ <strong>Sheets</strong> ถ้าต้องการเก็บถาวร</p>
        </div>
      </div>
    `
  },
  {
    number: 6,
    slug: 'rag-business',
    emoji: '📚',
    title: 'RAG — ตอบจากข้อมูลธุรกิจ',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/rag-business.webp" alt="RAG for Business" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>📚 RAG — ตอบจากข้อมูลธุรกิจของคุณ</h2>
          <p>RAG (Retrieval-Augmented Generation) คือเทคนิคที่ทำให้ AI ตอบจาก <strong>ข้อมูลของธุรกิจคุณ</strong> ไม่ใช่ตอบจากความรู้ทั่วไป! เช่น ราคาสินค้า, นโยบายร้าน, FAQ — ข้อมูลเฉพาะที่ AI ไม่มีทางรู้ได้เอง</p>
        </div>

        <div class="highlight-box">
          <h3>🔄 RAG ทำงานอย่างไร?</h3>
          <ol>
            <li>📥 ผู้ใช้ถามคำถาม</li>
            <li>🔍 ระบบค้นหาข้อมูลที่เกี่ยวข้องจาก Database / Sheets</li>
            <li>📎 แนบข้อมูลที่พบไปพร้อมคำถาม</li>
            <li>🧠 AI อ่านข้อมูล + คำถาม แล้วสร้างคำตอบ</li>
            <li>📤 ส่งคำตอบกลับผู้ใช้</li>
          </ol>
        </div>

        <h3>💻 RAG อย่างง่ายด้วย Google Sheets</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — RAG from Sheets</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

// === ค้นหาข้อมูลจาก Knowledge Base (Google Sheets) ===
function searchKnowledge(query) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FAQ");
  const data = sheet.getDataRange().getValues();
  const results = [];
  
  // ค้นหาแบบ keyword matching
  const keywords = query.toLowerCase().split(/\\s+/);
  
  for (let i = 1; i < data.length; i++) {
    const question = data[i][0].toString().toLowerCase();
    const answer = data[i][1].toString();
    const category = data[i][2] ? data[i][2].toString() : "";
    
    // นับ keyword ที่ match
    let matchCount = 0;
    keywords.forEach(kw => {
      if (question.includes(kw) || answer.toLowerCase().includes(kw)) {
        matchCount++;
      }
    });
    
    if (matchCount > 0) {
      results.push({
        question: data[i][0],
        answer: answer,
        category: category,
        score: matchCount
      });
    }
  }
  
  // เรียงตาม score สูงสุด
  results.sort((a, b) => b.score - a.score);
  
  return results.slice(0, 5); // คืน top 5
}

// === ค้นหาข้อมูลสินค้า ===
function searchProducts(query) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สินค้า");
  const data = sheet.getDataRange().getValues();
  const results = [];
  
  for (let i = 1; i < data.length; i++) {
    const name = data[i][1].toString().toLowerCase();
    if (name.includes(query.toLowerCase())) {
      results.push({
        id: data[i][0],
        name: data[i][1],
        price: data[i][2],
        stock: data[i][3],
        description: data[i][4]
      });
    }
  }
  
  return results;
}

// === ถาม AI พร้อมข้อมูลธุรกิจ (RAG) ===
function askWithRAG(userMessage) {
  // 1. ค้นหาข้อมูลที่เกี่ยวข้อง
  const faqResults = searchKnowledge(userMessage);
  const productResults = searchProducts(userMessage);
  
  // 2. สร้าง context จากข้อมูลที่พบ
  let context = "";
  
  if (faqResults.length > 0) {
    context += "📋 ข้อมูล FAQ ที่เกี่ยวข้อง:\\n";
    faqResults.forEach(faq => {
      context += "Q: " + faq.question + "\\n";
      context += "A: " + faq.answer + "\\n\\n";
    });
  }
  
  if (productResults.length > 0) {
    context += "🛍️ สินค้าที่เกี่ยวข้อง:\\n";
    productResults.forEach(p => {
      context += "- " + p.name + " | ราคา: ฿" + p.price + " | คงเหลือ: " + p.stock + " ชิ้น\\n";
      if (p.description) context += "  " + p.description + "\\n";
    });
  }
  
  // 3. สร้าง Prompt พร้อม context
  const augmentedPrompt = \`จากข้อมูลธุรกิจต่อไปนี้:

\${context || "ไม่พบข้อมูลที่เกี่ยวข้องในระบบ"}

คำถามจากลูกค้า: \${userMessage}

กรุณาตอบจากข้อมูลที่ให้มา ถ้าไม่มีข้อมูลในระบบให้บอกว่าจะส่งต่อให้แอดมิน\`;
  
  // 4. ส่งไป AI
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
  
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    payload: JSON.stringify({
      systemInstruction: {
        parts: [{ text: "คุณคือผู้ช่วยร้าน De Fashion ตอบจากข้อมูลที่ให้มาเท่านั้น ตอบเป็นภาษาไทย สั้น กระชับ" }]
      },
      contents: [{
        role: "user",
        parts: [{ text: augmentedPrompt }]
      }],
      generationConfig: {
        temperature: 0.3, // ลด temperature เพื่อให้ตอบตรงข้อมูล
        maxOutputTokens: 512
      }
    }),
    muteHttpExceptions: true
  });
  
  const result = JSON.parse(response.getContentText());
  return result.candidates[0].content.parts[0].text;
}

// === Webhook ===
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message" && event.message.type === "text") {
      const aiResponse = askWithRAG(event.message.text);
      replyMessage(event.replyToken, aiResponse);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

function replyMessage(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
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
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 โครงสร้าง Sheet "FAQ"</h4>
          <table class="data-table">
            <tr><th>A: คำถาม</th><th>B: คำตอบ</th><th>C: หมวด</th></tr>
            <tr><td>ส่งฟรีไหม</td><td>ส่งฟรีเมื่อสั่งซื้อ 500 บาทขึ้นไป</td><td>จัดส่ง</td></tr>
            <tr><td>เปลี่ยนไซส์ได้ไหม</td><td>เปลี่ยนได้ภายใน 7 วัน สินค้าต้องไม่ผ่านการใช้งาน</td><td>นโยบาย</td></tr>
            <tr><td>จ่ายเงินยังไง</td><td>โอนเงิน, บัตรเครดิต, เก็บเงินปลายทาง (+30 บาท)</td><td>ชำระเงิน</td></tr>
          </table>
          <p>เพิ่ม FAQ ใน Sheet → Bot ตอบได้เลย ไม่ต้องแก้โค้ด!</p>
        </div>
      </div>
    `
  },
  {
    number: 7,
    slug: 'vision-api',
    emoji: '👁️',
    title: 'รับ/ส่งรูปภาพ (Vision API)',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/vision-api.webp" alt="Vision API for Image Analysis" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>👁️ รับ/ส่งรูปภาพ + วิเคราะห์ด้วย Vision API</h2>
          <p>ทำให้ Bot ดูรูปเป็น! ผู้ใช้ส่งรูปสินค้า Bot วิเคราะห์ได้ว่าเป็นอะไร หรือส่งรูปใบเสร็จ Bot อ่านข้อมูลได้ — ใช้ Vision AI จาก Gemini หรือ ChatGPT</p>
        </div>

        <h3>💻 รับรูปภาพจาก LINE + วิเคราะห์ด้วย Gemini Vision</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Vision API</div>
          <pre><code>const LINE_TOKEN = "YOUR_LINE_CHANNEL_ACCESS_TOKEN";
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    if (event.type === "message") {
      
      // === ข้อความ Text ===
      if (event.message.type === "text") {
        const aiResponse = askGemini(event.message.text);
        replyMessage(event.replyToken, aiResponse);
      }
      
      // === รูปภาพ ===
      else if (event.message.type === "image") {
        const imageId = event.message.id;
        const analysis = analyzeImage(imageId);
        replyMessage(event.replyToken, analysis);
      }
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// === ดาวน์โหลดรูปจาก LINE ===
function getImageFromLine(messageId) {
  const url = "https://api-data.line.me/v2/bot/message/" + messageId + "/content";
  
  const response = UrlFetchApp.fetch(url, {
    headers: {
      "Authorization": "Bearer " + LINE_TOKEN
    }
  });
  
  return response.getBlob();
}

// === วิเคราะห์รูปด้วย Gemini Vision ===
function analyzeImage(messageId) {
  try {
    // 1. ดาวน์โหลดรูปจาก LINE
    const imageBlob = getImageFromLine(messageId);
    const base64Image = Utilities.base64Encode(imageBlob.getBytes());
    const mimeType = imageBlob.getContentType() || "image/jpeg";
    
    // 2. ส่งรูปไป Gemini Vision
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
    
    const response = UrlFetchApp.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        systemInstruction: {
          parts: [{
            text: "คุณคือผู้ช่วยร้านค้า วิเคราะห์รูปภาพที่ได้รับ ถ้าเป็นสินค้า ให้บอกว่าเป็นสินค้าอะไร แนะนำสินค้าที่คล้ายกัน ถ้าเป็นใบเสร็จ ให้อ่านรายการและยอดเงิน ตอบเป็นภาษาไทย"
          }]
        },
        contents: [{
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Image
              }
            },
            {
              text: "วิเคราะห์รูปภาพนี้ให้หน่อย"
            }
          ]
        }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 512
        }
      }),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    return result.candidates[0].content.parts[0].text;
    
  } catch (err) {
    Logger.log("Vision Error: " + err.message);
    return "ไม่สามารถวิเคราะห์รูปภาพได้ กรุณาลองใหม่ 🙏";
  }
}

// === บันทึกรูปลง Google Drive ===
function saveImageToDrive(messageId) {
  const imageBlob = getImageFromLine(messageId);
  const folder = DriveApp.getFolderById("YOUR_FOLDER_ID");
  const fileName = "LINE_" + messageId + ".jpg";
  const file = folder.createFile(imageBlob.setName(fileName));
  return file.getUrl();
}

function replyMessage(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
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

function askGemini(message) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    payload: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: message }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 512 }
    }),
    muteHttpExceptions: true
  });
  const result = JSON.parse(response.getContentText());
  return result.candidates[0].content.parts[0].text;
}</code></pre>
        </div>

        <h3>💻 Node.js Version</h3>
        <div class="code-block">
          <div class="code-header">Node.js — Vision API</div>
          <pre><code>const axios = require('axios');
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

// ดาวน์โหลดรูปจาก LINE
async function getLineImage(messageId) {
  const { data } = await axios.get(
    \`https://api-data.line.me/v2/bot/message/\${messageId}/content\`,
    {
      headers: { 'Authorization': \`Bearer \${LINE_TOKEN}\` },
      responseType: 'arraybuffer'
    }
  );
  return Buffer.from(data).toString('base64');
}

// วิเคราะห์รูปด้วย Gemini Vision
async function analyzeImage(messageId) {
  const base64 = await getLineImage(messageId);
  
  const { data } = await axios.post(
    \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=\${GEMINI_KEY}\`,
    {
      contents: [{
        parts: [
          { inlineData: { mimeType: 'image/jpeg', data: base64 } },
          { text: 'วิเคราะห์รูปภาพนี้ ตอบเป็นภาษาไทย' }
        ]
      }]
    }
  );
  
  return data.candidates[0].content.parts[0].text;
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>💡 ใช้ Vision API ทำอะไรได้บ้าง?</h4>
          <ul>
            <li>🛍️ ส่งรูปสินค้า → Bot บอกว่าเป็นอะไร แนะนำสินค้าคล้าย</li>
            <li>🧾 ส่งรูปใบเสร็จ → Bot อ่านรายการและยอดเงิน</li>
            <li>📦 ส่งรูปสินค้าชำรุด → Bot ประเมินและแนะนำขั้นตอนเคลม</li>
            <li>📐 ส่งรูป → Bot บอกไซส์ที่เหมาะสม</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    number: 8,
    slug: 'workshop-ai-shop',
    emoji: '🏪',
    title: 'Workshop: ผู้ช่วยร้านค้า AI',
    content: `
      <div class="lesson-container">
        <img src="/images/lessons/workshop-ai-shop.webp" alt="AI Shop Assistant Workshop" class="lesson-hero-img" />
        
        <div class="concept-box">
          <h2>🏪 Workshop: สร้างผู้ช่วยร้านค้า AI ครบทุกฟีเจอร์</h2>
          <p>รวมทุกอย่างที่เรียนมาสร้าง AI Chatbot สำหรับร้านค้าที่ <strong>ตอบคำถาม, แนะนำสินค้า, วิเคราะห์รูป, จำบทสนทนา</strong> และ <strong>ตอบจากข้อมูลร้านจริง</strong>!</p>
        </div>

        <div class="highlight-box">
          <h3>🎯 ฟีเจอร์ทั้งหมดของ Bot</h3>
          <ul>
            <li>💬 ตอบคำถามทั่วไปด้วย AI</li>
            <li>🛍️ แนะนำสินค้าจาก Sheets (RAG)</li>
            <li>📋 ตอบ FAQ จากข้อมูลร้าน</li>
            <li>🖼️ วิเคราะห์รูปภาพ (Vision)</li>
            <li>🧠 จำบทสนทนา (History)</li>
            <li>🎭 มีบุคลิกเฉพาะ (System Prompt)</li>
            <li>🛒 รับออเดอร์ผ่าน Postback</li>
          </ul>
        </div>

        <h3>💻 โค้ดเต็มระบบ AI Shop Assistant</h3>
        <div class="code-block">
          <div class="code-header">Google Apps Script — Full AI Bot</div>
          <pre><code>// ============================================
// ⚙️ CONFIG
// ============================================
const CONFIG = {
  LINE_TOKEN: "YOUR_LINE_CHANNEL_ACCESS_TOKEN",
  GEMINI_KEY: "YOUR_GEMINI_API_KEY",
  MAX_HISTORY: 10,
  GEMINI_URL: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
};

const SYSTEM_PROMPT = \`คุณคือ "น้องดี" ผู้ช่วย AI ประจำร้าน De Shop

🏪 ข้อมูลร้าน:
- ร้าน De Shop ขายเสื้อผ้าแฟชั่นออนไลน์
- เปิดทุกวัน 09:00-21:00
- ส่งฟรีเมื่อสั่ง 500+ บาท
- รับชำระ: โอนเงิน, บัตรเครดิต, COD (+30฿)

🎯 หลักการตอบ:
1. ตอบภาษาไทย สุภาพ เป็นกันเอง ใช้ค่ะ/ครับ
2. ตอบสั้น กระชับ 2-4 บรรทัด
3. ใช้ emoji ให้เหมาะสม
4. ถ้ามีข้อมูลจาก "ข้อมูลร้าน" ให้ใช้ข้อมูลนั้นตอบ
5. ถ้าไม่มีข้อมูล → แนะนำให้ทักแอดมิน
6. ห้ามตอบเรื่องการเมือง/ศาสนา
7. ถ้าลูกค้าจะสั่งซื้อ → ถามรายละเอียด: สินค้า, ไซส์, จำนวน\`;

// ============================================
// 📡 WEBHOOK HANDLER
// ============================================
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  
  for (const event of body.events) {
    try {
      switch (event.type) {
        case "message":
          handleMessageEvent(event);
          break;
        case "postback":
          handlePostbackEvent(event);
          break;
        case "follow":
          handleFollowEvent(event);
          break;
      }
    } catch (err) {
      Logger.log("Error: " + err.message);
    }
  }
  
  return ContentService.createTextOutput("OK");
}

// ============================================
// 💬 MESSAGE HANDLER
// ============================================
function handleMessageEvent(event) {
  const userId = event.source.userId;
  const replyToken = event.replyToken;
  
  switch (event.message.type) {
    case "text":
      handleTextMessage(userId, event.message.text, replyToken);
      break;
    case "image":
      handleImageMessage(userId, event.message.id, replyToken);
      break;
    default:
      replyText(replyToken, "ขออภัยค่ะ ตอนนี้รองรับเฉพาะข้อความและรูปภาพ 🙏");
  }
}

// === Text Message ===
function handleTextMessage(userId, text, replyToken) {
  // คำสั่งพิเศษ
  if (text === "เมนู" || text === "menu") {
    sendMainMenu(replyToken);
    return;
  }
  
  if (text === "สินค้า" || text === "ดูสินค้า") {
    sendProductCatalog(replyToken);
    return;
  }
  
  // AI Chat พร้อม RAG + History
  const history = getHistory(userId);
  
  // ค้นหาข้อมูลที่เกี่ยวข้อง (RAG)
  const context = buildContext(text);
  
  // เพิ่มข้อความผู้ใช้
  history.push({
    role: "user",
    parts: [{ text: context ? text + "\\n\\n[ข้อมูลร้าน: " + context + "]" : text }]
  });
  
  // ถาม AI
  const aiResponse = callGemini(history);
  
  // เพิ่มคำตอบ
  history.push({
    role: "model",
    parts: [{ text: aiResponse }]
  });
  
  // บันทึก
  if (history.length > CONFIG.MAX_HISTORY * 2) {
    history.splice(0, history.length - CONFIG.MAX_HISTORY * 2);
  }
  saveHistory(userId, history);
  
  // ตอบกลับ
  replyText(replyToken, aiResponse);
}

// === Image Message ===
function handleImageMessage(userId, messageId, replyToken) {
  const imageBlob = UrlFetchApp.fetch(
    "https://api-data.line.me/v2/bot/message/" + messageId + "/content",
    { headers: { "Authorization": "Bearer " + CONFIG.LINE_TOKEN } }
  ).getBlob();
  
  const base64 = Utilities.base64Encode(imageBlob.getBytes());
  
  const url = CONFIG.GEMINI_URL + "?key=" + CONFIG.GEMINI_KEY;
  const response = UrlFetchApp.fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    payload: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT + "\\nวิเคราะห์รูปภาพที่ได้รับ ถ้าเป็นสินค้าให้แนะนำ ถ้าเป็นหลักฐานการโอนเงินให้อ่านยอดเงิน" }]
      },
      contents: [{
        role: "user",
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64 } },
          { text: "วิเคราะห์รูปนี้ให้หน่อย" }
        ]
      }],
      generationConfig: { temperature: 0.4, maxOutputTokens: 512 }
    }),
    muteHttpExceptions: true
  });
  
  const result = JSON.parse(response.getContentText());
  const analysis = result.candidates[0].content.parts[0].text;
  
  replyText(replyToken, "📸 ผลวิเคราะห์รูปภาพ:\\n\\n" + analysis);
}

// ============================================
// 🔍 RAG — CONTEXT BUILDER
// ============================================
function buildContext(query) {
  let context = "";
  
  // ค้นหา FAQ
  try {
    const faqSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FAQ");
    if (faqSheet) {
      const faqData = faqSheet.getDataRange().getValues();
      const keywords = query.toLowerCase().split(/\\s+/);
      
      for (let i = 1; i < faqData.length; i++) {
        const q = faqData[i][0].toString().toLowerCase();
        const a = faqData[i][1].toString();
        
        if (keywords.some(kw => q.includes(kw))) {
          context += "FAQ: " + faqData[i][0] + " → " + a + "\\n";
        }
      }
    }
  } catch (e) {}
  
  // ค้นหาสินค้า
  try {
    const productSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สินค้า");
    if (productSheet) {
      const prodData = productSheet.getDataRange().getValues();
      
      for (let i = 1; i < prodData.length; i++) {
        if (prodData[i][1].toString().toLowerCase().includes(query.toLowerCase())) {
          context += "สินค้า: " + prodData[i][1] + " ราคา ฿" + prodData[i][2] + " เหลือ " + prodData[i][3] + " ชิ้น\\n";
        }
      }
    }
  } catch (e) {}
  
  return context;
}

// ============================================
// 🧠 AI ENGINE
// ============================================
function callGemini(history) {
  const url = CONFIG.GEMINI_URL + "?key=" + CONFIG.GEMINI_KEY;
  
  try {
    const response = UrlFetchApp.fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: history,
        generationConfig: { temperature: 0.7, maxOutputTokens: 512 }
      }),
      muteHttpExceptions: true
    });
    
    const result = JSON.parse(response.getContentText());
    if (result.candidates && result.candidates[0]) {
      return result.candidates[0].content.parts[0].text;
    }
    return "ขออภัยค่ะ ไม่สามารถประมวลผลได้ 🙏";
  } catch (err) {
    return "ขออภัยค่ะ ระบบขัดข้อง กรุณาลองใหม่ 🙏";
  }
}

// ============================================
// 📦 HISTORY MANAGEMENT
// ============================================
function getHistory(userId) {
  const cache = CacheService.getScriptCache();
  const data = cache.get("h_" + userId);
  return data ? JSON.parse(data) : [];
}

function saveHistory(userId, history) {
  const cache = CacheService.getScriptCache();
  cache.put("h_" + userId, JSON.stringify(history), 21600);
}

// ============================================
// 🎯 POSTBACK HANDLER
// ============================================
function handlePostbackEvent(event) {
  const data = event.postback.data;
  const replyToken = event.replyToken;
  const params = {};
  
  data.split("&").forEach(pair => {
    const [k, v] = pair.split("=");
    params[k] = decodeURIComponent(v);
  });
  
  switch (params.action) {
    case "catalog":
      sendProductCatalog(replyToken);
      break;
    case "faq":
      replyText(replyToken, "📋 ถามคำถามได้เลยค่ะ เช่น:\\n• ส่งฟรีไหม?\\n• เปลี่ยนไซส์ได้ไหม?\\n• จ่ายเงินยังไง?");
      break;
    case "contact":
      replyText(replyToken, "📞 ติดต่อแอดมิน:\\n🕐 09:00-21:00\\n📱 Line: @deshop\\n☎️ 081-234-5678");
      break;
    default:
      replyText(replyToken, "ได้รับคำสั่งแล้วค่ะ ✅");
  }
}

// ============================================
// 👋 FOLLOW EVENT
// ============================================
function handleFollowEvent(event) {
  const replyToken = event.replyToken;
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CONFIG.LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [
        {
          type: "text",
          text: "สวัสดีค่ะ! 👋 ยินดีต้อนรับสู่ De Shop\\n\\nน้องดี AI พร้อมช่วยเหลือค่ะ:\\n🛍️ แนะนำสินค้า\\n📋 ตอบคำถาม\\n📸 วิเคราะห์รูปสินค้า\\n\\nพิมพ์ 'เมนู' เพื่อดูตัวเลือกค่ะ",
          quickReply: {
            items: [
              { type: "action", action: { type: "message", label: "🛍️ ดูสินค้า", text: "สินค้า" }},
              { type: "action", action: { type: "message", label: "📋 ถามคำถาม", text: "มีอะไรบ้าง" }},
              { type: "action", action: { type: "message", label: "📞 ติดต่อแอดมิน", text: "ติดต่อแอดมิน" }}
            ]
          }
        }
      ]
    })
  });
}

// ============================================
// 📡 LINE API HELPERS
// ============================================
function replyText(replyToken, text) {
  if (text.length > 5000) text = text.substring(0, 4997) + "...";
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CONFIG.LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [{ type: "text", text: text }]
    })
  });
}

function sendMainMenu(replyToken) {
  const flex = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        { type: "text", text: "🏪 De Shop", weight: "bold", size: "xl", color: "#1DB446" },
        { type: "text", text: "เลือกเมนูที่ต้องการค่ะ", size: "sm", color: "#888", margin: "md" }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        { type: "button", style: "primary", color: "#1DB446",
          action: { type: "postback", label: "🛍️ ดูสินค้า", data: "action=catalog" }},
        { type: "button", style: "secondary",
          action: { type: "postback", label: "📋 คำถามที่พบบ่อย", data: "action=faq" }},
        { type: "button", style: "secondary",
          action: { type: "postback", label: "📞 ติดต่อแอดมิน", data: "action=contact" }}
      ]
    }
  };
  
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + CONFIG.LINE_TOKEN
    },
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: [{ type: "flex", altText: "เมนูหลัก", contents: flex }]
    })
  });
}

function sendProductCatalog(replyToken) {
  replyText(replyToken, "🛍️ สินค้าของเรา:\\n\\n1. เสื้อยืด Oversize — ฿290-390\\n2. กางเกงขาสั้น — ฿390-490\\n3. กางเกงยีนส์ — ฿590-890\\n4. หมวกแก๊ป — ฿190-290\\n5. กระเป๋าผ้า — ฿150-250\\n\\nพิมพ์ชื่อสินค้าเพื่อดูรายละเอียดค่ะ");
}</code></pre>
        </div>

        <div class="tip-box">
          <h4>🎯 Checklist Workshop</h4>
          <ul>
            <li>☐ สร้าง Google Sheets: "สินค้า", "FAQ"</li>
            <li>☐ ใส่ LINE Token + Gemini API Key</li>
            <li>☐ Deploy เป็น Web App</li>
            <li>☐ ตั้ง Webhook URL ใน LINE Developers</li>
            <li>☐ ทดสอบส่งข้อความ → ได้คำตอบจาก AI</li>
            <li>☐ ทดสอบส่งรูป → ได้ผลวิเคราะห์</li>
            <li>☐ ทดสอบถามคำถาม FAQ → ตอบจากข้อมูลร้าน</li>
            <li>☐ ทดสอบบทสนทนาต่อเนื่อง → Bot จำได้</li>
          </ul>
        </div>
      </div>
    `
  }
];
