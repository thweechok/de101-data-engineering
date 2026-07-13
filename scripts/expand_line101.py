import os

os.makedirs(r'd:\AI\ขาย\de-course\scripts', exist_ok=True)
os.makedirs(r'd:\AI\ขาย\de-course\data\courses', exist_ok=True)

chapters = []

# ─────────────────────────────────────────────
# Chapter 0 – what-is-line-api
# ─────────────────────────────────────────────
content0 = (
    '<h2>💬 LINE Messaging API คืออะไร? ทำอะไรได้บ้าง?</h2>'
    '<p>LINE Messaging API คือชุดเครื่องมือที่ LINE Corporation เปิดให้นักพัฒนาสร้างบอทอัตโนมัติบนแอป LINE ซึ่งมีผู้ใช้งานในไทยมากกว่า <strong>54 ล้านคน</strong> (ข้อมูล 2024) คิดเป็นกว่า 77% ของประชากรทั้งประเทศ ทำให้ LINE เป็นช่องทางการสื่อสารที่ทรงพลังที่สุดในประเทศไทย</p>'
    '<h3>🌐 LINE Ecosystem ที่นักพัฒนาควรรู้</h3>'
    '<ul>'
    '<li><strong>LINE Official Account (OA)</strong> – บัญชีธุรกิจที่ผู้ใช้ทั่วไปสามารถ Add Friend แล้วรับข้อความได้</li>'
    '<li><strong>LINE Messaging API</strong> – ส่วนที่ช่วยให้โปรแกรมเมอร์ตั้งค่าโลจิกตอบกลับข้อความได้อัตโนมัติ</li>'
    '<li><strong>LINE LIFF (LINE Front-end Framework)</strong> – สร้าง Web App ที่รันในหน้าต่าง LINE ได้เลย</li>'
    '<li><strong>LINE Pay</strong> – ระบบชำระเงินที่เชื่อมต่อกับบอทได้โดยตรง</li>'
    '<li><strong>LINE Login</strong> – ระบบ OAuth2 ให้ผู้ใช้ Login ด้วยบัญชี LINE</li>'
    '</ul>'
    '<h3>🔄 Webhook คืออะไร? (หัวใจของ LINE Bot)</h3>'
    '<p>เมื่อผู้ใช้ส่งข้อความหาบอท LINE จะ <strong>POST request</strong> ข้อมูลเหตุการณ์นั้นมายัง URL ที่คุณกำหนด (Webhook URL) ทันที โปรแกรมของคุณจึงต้องรอรับ POST request จาก LINE แล้วประมวลผลและตอบกลับ</p>'
    '<pre><code>ผู้ใช้พิมพ์ข้อความ\n   ↓\nLINE Server\n   ↓  POST /webhook  (JSON body)\nServer ของคุณ\n   ↓  ประมวลผล\n   ↓  เรียก Reply API\nLINE Server\n   ↓\nผู้ใช้ได้รับข้อความตอบกลับ</code></pre>'
    '<h3>📋 ประเภทของ Events ที่ LINE ส่งมา</h3>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>Event Type</th><th>เกิดขึ้นเมื่อ</th><th>ข้อมูลสำคัญ</th></tr></thead>'
    '<tbody>'
    '<tr><td><code>message</code></td><td>ผู้ใช้ส่งข้อความ</td><td>message.type, message.text, replyToken</td></tr>'
    '<tr><td><code>follow</code></td><td>ผู้ใช้ Add Friend / Unblock</td><td>source.userId, replyToken</td></tr>'
    '<tr><td><code>unfollow</code></td><td>ผู้ใช้ Block บอท</td><td>source.userId (ไม่มี replyToken)</td></tr>'
    '<tr><td><code>join</code></td><td>บอทถูกเชิญเข้ากลุ่ม</td><td>source.groupId, replyToken</td></tr>'
    '<tr><td><code>leave</code></td><td>บอทถูกเตะออกจากกลุ่ม</td><td>source.groupId</td></tr>'
    '<tr><td><code>postback</code></td><td>ผู้ใช้กดปุ่ม Postback</td><td>postback.data, replyToken</td></tr>'
    '<tr><td><code>beacon</code></td><td>ผู้ใช้เข้าใกล้ LINE Beacon</td><td>beacon.hwid, beacon.type</td></tr>'
    '</tbody></table>'
    '<h3>💰 ราคาและ Plan ที่ควรรู้</h3>'
    '<ul>'
    '<li><strong>Free Plan</strong> – ส่ง Broadcast ได้ 200 ข้อความ/เดือน, Reply ไม่จำกัด</li>'
    '<li><strong>Light Plan</strong> – 15,000 บาท/เดือน, ส่ง Push 15,000 ข้อความ</li>'
    '<li><strong>Standard Plan</strong> – ยืดหยุ่น เหมาะกับธุรกิจที่ต้องการส่งหลักแสน</li>'
    '</ul>'
    '<div class=\'tip-box\'><strong>💡</strong> สำหรับผู้เริ่มต้น Free Plan เพียงพอสำหรับทดสอบและพัฒนาบอทในช่วงแรก เพราะ Reply Message ไม่นับโควต้า!</div>'
    '<h3>🛠️ สิ่งที่บอท LINE ทำได้</h3>'
    '<ul>'
    '<li>ตอบคำถามอัตโนมัติ 24/7 ไม่มีวันหยุด</li>'
    '<li>รับออร์เดอร์และส่งการยืนยันอัตโนมัติ</li>'
    '<li>ส่งโปรโมชันและข่าวสารไปยังลูกค้าทั้งหมด (Broadcast)</li>'
    '<li>เชื่อมต่อกับฐานข้อมูล Google Sheets, Airtable, Notion</li>'
    '<li>แสดงเมนูแบบ Rich Menu และ Flex Message สวยงาม</li>'
    '<li>รับชำระเงินผ่าน LINE Pay, PromptPay QR</li>'
    '<li>ส่งรายงานประจำวัน/สัปดาห์โดยอัตโนมัติ</li>'
    '<li>Integrate กับ CRM, ERP, ระบบ POS ได้</li>'
    '</ul>'
)
content0 = content0.replace("'", "\\'")
chapters.append(
    "  { number: 0, slug: 'what-is-line-api', emoji: '💬', title: 'LINE Messaging API คืออะไร?', content: '" + content0 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 1 – developer-console
# ─────────────────────────────────────────────
content1 = (
    '<h2>🖥️ ตั้งค่า LINE Developer Console ทีละขั้น</h2>'
    '<p>ก่อนจะเขียนโค้ดบอทได้ คุณต้องสร้าง Channel บน LINE Developer Console ก่อน โดย Channel คือ "ตัวตน" ของบอทที่จะใช้ติดต่อกับ LINE API</p>'
    '<h3>📋 สิ่งที่ต้องเตรียม</h3>'
    '<ul>'
    '<li>บัญชี LINE ส่วนตัว (ใช้ Verify ตัวตน)</li>'
    '<li>อีเมลที่ใช้งานได้</li>'
    '<li>URL ของ Server ที่จะรับ Webhook (ต้องเป็น HTTPS)</li>'
    '</ul>'
    '<h3>🔢 ขั้นตอนที่ 1 – สร้าง Provider</h3>'
    '<ol>'
    '<li>ไปที่ <code>developers.line.biz</code> แล้ว Log in ด้วยบัญชี LINE</li>'
    '<li>คลิก <strong>Create a new provider</strong></li>'
    '<li>ตั้งชื่อ Provider เช่น "MyBusiness Bot"</li>'
    '<li>คลิก <strong>Create</strong></li>'
    '</ol>'
    '<h3>🔢 ขั้นตอนที่ 2 – สร้าง Messaging API Channel</h3>'
    '<ol>'
    '<li>ใน Provider ที่สร้าง คลิก <strong>Create a new channel</strong></li>'
    '<li>เลือก <strong>Messaging API</strong></li>'
    '<li>กรอกข้อมูลช่อง: Channel name, Description, Category, Subcategory</li>'
    '<li>อ่านและยอมรับ Terms of Use</li>'
    '<li>คลิก <strong>Create</strong></li>'
    '</ol>'
    '<h3>🔢 ขั้นตอนที่ 3 – รับ Channel Secret และ Access Token</h3>'
    '<p>หลังสร้าง Channel แล้ว ไปที่ Tab <strong>Messaging API</strong> จะพบ:</p>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>ข้อมูล</th><th>อยู่ที่ Tab</th><th>การใช้งาน</th></tr></thead>'
    '<tbody>'
    '<tr><td>Channel ID</td><td>Basic settings</td><td>ระบุตัวตน Channel</td></tr>'
    '<tr><td>Channel Secret</td><td>Basic settings</td><td>ยืนยันว่า request มาจาก LINE จริง</td></tr>'
    '<tr><td>Channel Access Token</td><td>Messaging API</td><td>ใช้เรียก LINE API ทุกอย่าง (ต้อง Issue ก่อน)</td></tr>'
    '<tr><td>Webhook URL</td><td>Messaging API</td><td>URL ที่ LINE จะ POST event มาให้</td></tr>'
    '</tbody></table>'
    '<p>คลิก <strong>Issue</strong> ที่ Channel Access Token เพื่อสร้าง Token ใหม่ จากนั้น Copy เก็บไว้ในที่ปลอดภัย</p>'
    '<h3>🔢 ขั้นตอนที่ 4 – ตั้งค่า Webhook URL ด้วย ngrok</h3>'
    '<p>ระหว่างพัฒนา Server ของคุณยังอยู่ใน localhost ซึ่ง LINE เข้าไม่ได้ ใช้ <strong>ngrok</strong> เพื่อ expose localhost ออก internet:</p>'
    '<pre><code># ติดตั้ง ngrok\nnpm install -g ngrok\n\n# หรือดาวน์โหลดจาก ngrok.com แล้วเพิ่มใน PATH\n\n# รัน ngrok สำหรับ port 3000\nngrok http 3000\n\n# ngrok จะให้ URL เช่น:\n# https://abc123.ngrok.io</code></pre>'
    '<p>นำ URL จาก ngrok ไปใส่ใน Webhook URL บน Developer Console เช่น <code>https://abc123.ngrok.io/webhook</code> แล้วคลิก <strong>Verify</strong></p>'
    '<h3>✅ 15-Item Checklist ก่อนไปต่อ</h3>'
    '<ol>'
    '<li>[ ] สร้าง Provider สำเร็จ</li>'
    '<li>[ ] สร้าง Messaging API Channel สำเร็จ</li>'
    '<li>[ ] Copy Channel Secret แล้วเก็บไว้</li>'
    '<li>[ ] Issue และ Copy Channel Access Token แล้วเก็บไว้</li>'
    '<li>[ ] เปิด Use webhooks เป็น Enabled</li>'
    '<li>[ ] ตั้ง Webhook URL ถูกต้อง (HTTPS เท่านั้น)</li>'
    '<li>[ ] กด Verify Webhook แล้วได้ "Success"</li>'
    '<li>[ ] ปิด Auto-reply messages</li>'
    '<li>[ ] ปิด Greeting messages</li>'
    '<li>[ ] เพิ่มบอทเป็น Friend ใน LINE แล้ว</li>'
    '<li>[ ] ทดสอบส่งข้อความและเห็น Event ใน Log</li>'
    '<li>[ ] ngrok กำลังรันอยู่ในขณะพัฒนา</li>'
    '<li>[ ] Channel Status เป็น "Published"</li>'
    '<li>[ ] ใส่ Channel Icon และ Description แล้ว</li>'
    '<li>[ ] บันทึก Channel ID ไว้ด้วยเพื่อใช้อ้างอิง</li>'
    '</ol>'
    '<div class=\'tip-box\'><strong>💡</strong> Channel Access Token มี 2 แบบ: แบบ Stateless (ออกอัตโนมัติ ไม่หมดอายุ) และแบบ Long-lived (ต้อง Issue เอง หมดอายุได้) สำหรับ Production แนะนำแบบ Stateless ที่มีความปลอดภัยสูงกว่า</div>'
)
content1 = content1.replace("'", "\\'")
chapters.append(
    "  { number: 1, slug: 'developer-console', emoji: '🖥️', title: 'ตั้งค่า LINE Developer Console', content: '" + content1 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 2 – reply-message-code
# ─────────────────────────────────────────────
content2 = (
    '<h2>📝 เขียนโค้ดตอบกลับข้อความด้วย Google Apps Script</h2>'
    '<p>Google Apps Script (GAS) คือบริการ serverless ของ Google ที่รันโค้ด JavaScript ได้ฟรี เหมาะมากสำหรับสร้างบอท LINE เพราะไม่ต้องตั้ง server เอง ไม่เสียค่า hosting</p>'
    '<h3>🏗️ โครงสร้างโค้ดหลัก</h3>'
    '<pre><code>// === LINE Bot บน Google Apps Script ===\nconst CHANNEL_ACCESS_TOKEN = \'YOUR_TOKEN_HERE\';\n\nfunction doPost(e) {\n  try {\n    // แปลง JSON ที่ LINE ส่งมา\n    const body = JSON.parse(e.postData.contents);\n    const events = body.events;\n    \n    // วนลูปผ่านทุก event\n    events.forEach(event =&gt; {\n      handleEvent(event);\n    });\n    \n  } catch(err) {\n    console.log(err);\n  }\n  \n  // ต้อง return 200 OK เสมอ\n  return ContentService\n    .createTextOutput(JSON.stringify({status: \'ok\'}))\n    .setMimeType(ContentService.MimeType.JSON);\n}</code></pre>'
    '<h3>🔍 อธิบาย doPost ทีละบรรทัด</h3>'
    '<ul>'
    '<li><code>function doPost(e)</code> – ฟังก์ชันพิเศษของ GAS ที่ถูกเรียกอัตโนมัติเมื่อมี POST request เข้ามา</li>'
    '<li><code>e.postData.contents</code> – ข้อมูล body ที่ LINE ส่งมาในรูป JSON string</li>'
    '<li><code>JSON.parse(...)</code> – แปลง string เป็น JavaScript object</li>'
    '<li><code>body.events</code> – array ของ events ทั้งหมดในคำขอนั้น (ปกติมี 1 event)</li>'
    '<li>ต้อง return HTTP 200 เสมอ ไม่อย่างนั้น LINE จะส่ง request ซ้ำ</li>'
    '</ul>'
    '<h3>🔧 ฟังก์ชัน handleEvent และ replyMessage</h3>'
    '<pre><code>function handleEvent(event) {\n  // รับแค่ message event ก่อน\n  if (event.type !== \'message\') return;\n  if (event.message.type !== \'text\') return;\n  \n  const userText = event.message.text;\n  const replyToken = event.replyToken;\n  \n  let responseText = \'\';\n  \n  // Logic ตอบกลับ\n  if (userText === \'สวัสดี\') {\n    responseText = \'สวัสดีครับ! มีอะไรให้ช่วยไหม? 😊\';\n  } else if (userText === \'ราคา\') {\n    responseText = \'ติดต่อสอบถามราคาได้ที่ Line: @youraccount\';\n  } else {\n    responseText = \'ขอบคุณที่ส่งข้อความ: \' + userText;\n  }\n  \n  replyMessage(replyToken, responseText);\n}\n\nfunction replyMessage(replyToken, text) {\n  const url = \'https://api.line.me/v2/bot/message/reply\';\n  \n  const payload = {\n    replyToken: replyToken,\n    messages: [{\n      type: \'text\',\n      text: text\n    }]\n  };\n  \n  const options = {\n    method: \'post\',\n    headers: {\n      \'Content-Type\': \'application/json\',\n      \'Authorization\': \'Bearer \' + CHANNEL_ACCESS_TOKEN\n    },\n    payload: JSON.stringify(payload),\n    muteHttpExceptions: true\n  };\n  \n  UrlFetchApp.fetch(url, options);\n}</code></pre>'
    '<h3>🚀 ขั้นตอน Deploy บน Google Apps Script</h3>'
    '<ol>'
    '<li>ไปที่ <code>script.google.com</code> แล้วสร้าง New Project</li>'
    '<li>วางโค้ดทั้งหมดลงไป แล้วแก้ <code>CHANNEL_ACCESS_TOKEN</code></li>'
    '<li>คลิก <strong>Deploy</strong> → <strong>New deployment</strong></li>'
    '<li>เลือก Type เป็น <strong>Web app</strong></li>'
    '<li>ตั้ง Execute as: <strong>Me</strong></li>'
    '<li>ตั้ง Who has access: <strong>Anyone</strong> (สำคัญมาก!)</li>'
    '<li>คลิก <strong>Deploy</strong> แล้วอนุญาต permissions</li>'
    '<li>Copy URL ที่ได้ไปใส่ใน LINE Webhook URL</li>'
    '</ol>'
    '<div class=\'tip-box\'><strong>💡</strong> ทุกครั้งที่แก้โค้ดต้อง Deploy ใหม่เป็น New Deployment หรือ Deploy as new version ไม่อย่างนั้น LINE จะยังใช้โค้ดเก่าอยู่!</div>'
    '<h3>🧪 การทดสอบโค้ด</h3>'
    '<p>ใช้ฟังก์ชัน <code>testBot()</code> เพื่อทดสอบโดยไม่ต้องส่งข้อความจริง:</p>'
    '<pre><code>function testBot() {\n  const fakeEvent = {\n    type: \'message\',\n    replyToken: \'test-token-12345\',\n    message: {\n      type: \'text\',\n      text: \'สวัสดี\'\n    }\n  };\n  handleEvent(fakeEvent);\n  console.log(\'Test completed\');\n}</code></pre>'
)
content2 = content2.replace("'", "\\'")
chapters.append(
    "  { number: 2, slug: 'reply-message-code', emoji: '📝', title: 'เขียนโค้ดตอบกลับข้อความ', content: '" + content2 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 3 – push-vs-reply
# ─────────────────────────────────────────────
content3 = (
    '<h2>📤 Reply vs Push vs Multicast vs Broadcast</h2>'
    '<p>การส่งข้อความใน LINE API มีหลายวิธี แต่ละวิธีมีข้อดีข้อเสียต่างกัน การเลือกใช้ให้ถูกต้องจะช่วยประหยัดโควต้าและค่าใช้จ่ายได้มาก</p>'
    '<h3>📊 เปรียบเทียบ 4 วิธีการส่งข้อความ</h3>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>วิธีส่ง</th><th>นับโควต้า</th><th>ต้องใช้</th><th>ส่งถึง</th><th>ข้อจำกัด</th></tr></thead>'
    '<tbody>'
    '<tr><td><strong>Reply</strong></td><td>❌ ฟรี</td><td>replyToken</td><td>1 คน</td><td>Token ใช้ได้ครั้งเดียว, หมดใน 30 วินาที</td></tr>'
    '<tr><td><strong>Push</strong></td><td>✅ นับ</td><td>userId/groupId</td><td>1 คน/กลุ่ม</td><td>ต้องรู้ userId ผู้รับ</td></tr>'
    '<tr><td><strong>Multicast</strong></td><td>✅ นับ</td><td>userId array</td><td>สูงสุด 500 คน</td><td>ต้องมีรายการ userId</td></tr>'
    '<tr><td><strong>Broadcast</strong></td><td>✅ นับ</td><td>ไม่ต้องมี</td><td>ทุกคนที่ Add Friend</td><td>ส่งหาทุกคน ควบคุมไม่ได้</td></tr>'
    '</tbody></table>'
    '<h3>🎯 Reply Message – ฟรีและรวดเร็ว</h3>'
    '<p>Reply Message ใช้ <code>replyToken</code> ที่ LINE แนบมากับทุก event เพื่อตอบกลับผู้ใช้ ข้อควรระวังที่สำคัญ:</p>'
    '<ul>'
    '<li>replyToken ใช้ได้ <strong>ครั้งเดียวเท่านั้น</strong></li>'
    '<li>replyToken <strong>หมดอายุภายใน 30 วินาที</strong> หลังเกิด event</li>'
    '<li>ส่งข้อความได้ <strong>สูงสุด 5 ข้อความ</strong> ต่อ 1 reply</li>'
    '<li>ไม่นับโควต้า ใช้ได้ไม่จำกัด</li>'
    '</ul>'
    '<pre><code>// Reply Message API\nPOST https://api.line.me/v2/bot/message/reply\n\n{\n  "replyToken": "nHuyWiB7...",\n  "messages": [\n    { "type": "text", "text": "ข้อความที่ 1" },\n    { "type": "text", "text": "ข้อความที่ 2" }\n  ]\n}</code></pre>'
    '<h3>📨 Push Message – ส่งหาใครก็ได้ตอนไหนก็ได้</h3>'
    '<p>Push Message ส่งข้อความหาผู้ใช้ได้ตอนไหนก็ได้ โดยไม่ต้องรอให้ผู้ใช้ส่งข้อความมาก่อน เหมาะสำหรับการแจ้งเตือน ส่งใบเสร็จ หรือ follow-up หลังการซื้อสินค้า</p>'
    '<pre><code>// Push Message API\nPOST https://api.line.me/v2/bot/message/push\n\n{\n  "to": "Uxxxx...",  // userId\n  "messages": [\n    { "type": "text", "text": "คำสั่งซื้อของคุณถูกจัดส่งแล้ว! 🚚" }\n  ]\n}</code></pre>'
    '<h3>📡 Multicast – ส่งหาหลายคนพร้อมกัน</h3>'
    '<p>Multicast ส่งข้อความเดียวกันหาผู้ใช้หลายคนพร้อมกัน (สูงสุด 500 userId ต่อครั้ง) มีประสิทธิภาพกว่าการ Push ทีละคน</p>'
    '<pre><code>// Multicast API\nPOST https://api.line.me/v2/bot/message/multicast\n\n{\n  "to": ["Uaaa...", "Ubbb...", "Uccc..."],\n  "messages": [\n    { "type": "text", "text": "โปรโมชันพิเศษสำหรับลูกค้า VIP! 🎉" }\n  ]\n}</code></pre>'
    '<h3>📢 Broadcast – ส่งหาทุกคน</h3>'
    '<p>Broadcast ส่งข้อความหาทุกคนที่ Add Friend บอทในทีเดียว ไม่ต้องระบุ userId เหมาะสำหรับประกาศข่าวสาร โปรโมชันทั่วไป</p>'
    '<h3>💡 กลยุทธ์การใช้งานจริง</h3>'
    '<ul>'
    '<li><strong>ตอบคำถามทั่วไป</strong> → ใช้ Reply (ฟรี, ตอบทันที)</li>'
    '<li><strong>แจ้งสถานะออร์เดอร์</strong> → ใช้ Push (ส่งได้ทุกเวลา)</li>'
    '<li><strong>ส่งโปรโมชัน VIP</strong> → ใช้ Multicast (คัดเฉพาะกลุ่ม)</li>'
    '<li><strong>ประกาศข่าวสำคัญ</strong> → ใช้ Broadcast (ส่งหาทุกคน)</li>'
    '</ul>'
    '<div class=\'tip-box\'><strong>💡</strong> เก็บ userId ทุกครั้งที่มี follow event เข้ามา แล้วบันทึกลง Google Sheets หรือ Database เพื่อใช้กับ Push และ Multicast ในภายหลัง</div>'
)
content3 = content3.replace("'", "\\'")
chapters.append(
    "  { number: 3, slug: 'push-vs-reply', emoji: '📤', title: 'Reply vs Push vs Multicast vs Broadcast', content: '" + content3 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 4 – message-types
# ─────────────────────────────────────────────
content4 = (
    '<h2>💌 ประเภทข้อความทั้งหมดใน LINE API</h2>'
    '<p>LINE API รองรับการส่งข้อความหลายรูปแบบนอกจากข้อความธรรมดา ทำให้บอทมีความน่าสนใจและใช้งานได้หลากหลายมากขึ้น</p>'
    '<h3>📝 1. Text Message – ข้อความธรรมดา</h3>'
    '<p>ข้อความธรรมดาที่ใช้บ่อยที่สุด รองรับ Emoji และสามารถใช้ <code>\\n</code> สำหรับขึ้นบรรทัดใหม่</p>'
    '<pre><code>{\n  "type": "text",\n  "text": "สวัสดีครับ! 😊\\nยินดีให้บริการตลอด 24 ชั่วโมง"\n}</code></pre>'
    '<h3>🖼️ 2. Image Message – ส่งรูปภาพ</h3>'
    '<p>ส่งรูปภาพจาก URL (ต้องเป็น HTTPS และเข้าถึงได้จาก internet)</p>'
    '<pre><code>{\n  "type": "image",\n  "originalContentUrl": "https://example.com/product.jpg",\n  "previewImageUrl": "https://example.com/product_thumb.jpg"\n}</code></pre>'
    '<h3>🎬 3. Video Message – ส่งวิดีโอ</h3>'
    '<pre><code>{\n  "type": "video",\n  "originalContentUrl": "https://example.com/video.mp4",\n  "previewImageUrl": "https://example.com/preview.jpg"\n}</code></pre>'
    '<h3>📍 4. Location Message – ส่งพิกัด</h3>'
    '<pre><code>{\n  "type": "location",\n  "title": "ร้านของเรา",\n  "address": "123 ถนนสุขุมวิท กรุงเทพฯ",\n  "latitude": 13.7563,\n  "longitude": 100.5018\n}</code></pre>'
    '<h3>😄 5. Sticker Message – ส่งสติ๊กเกอร์</h3>'
    '<pre><code>{\n  "type": "sticker",\n  "packageId": "1",\n  "stickerId": "1"\n}</code></pre>'
    '<h3>🔘 6. Template Message – ปุ่มและตัวเลือก</h3>'
    '<p>Template Messages แสดงเนื้อหาพร้อมปุ่มกด มีหลายแบบ:</p>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>Template</th><th>ลักษณะ</th><th>จำนวนปุ่ม</th></tr></thead>'
    '<tbody>'
    '<tr><td>Buttons</td><td>รูปภาพ + ข้อความ + ปุ่มกด</td><td>สูงสุด 4 ปุ่ม</td></tr>'
    '<tr><td>Confirm</td><td>ข้อความ + ปุ่มยืนยัน 2 ปุ่ม</td><td>2 ปุ่ม (Yes/No)</td></tr>'
    '<tr><td>Carousel</td><td>การ์ดแนวนอนเลื่อนได้</td><td>สูงสุด 10 การ์ด</td></tr>'
    '<tr><td>Image Carousel</td><td>รูปภาพแนวนอนเลื่อนได้</td><td>สูงสุด 10 รูป</td></tr>'
    '</tbody></table>'
    '<pre><code>// Buttons Template\n{\n  "type": "template",\n  "altText": "เลือกบริการ",\n  "template": {\n    "type": "buttons",\n    "thumbnailImageUrl": "https://example.com/img.jpg",\n    "title": "เมนูหลัก",\n    "text": "กรุณาเลือกบริการ",\n    "actions": [\n      { "type": "message", "label": "ดูสินค้า", "text": "ดูสินค้า" },\n      { "type": "uri", "label": "เว็บไซต์", "uri": "https://example.com" },\n      { "type": "postback", "label": "ติดต่อเรา", "data": "action=contact" }\n    ]\n  }\n}</code></pre>'
    '<h3>🎡 7. Carousel Template – การ์ดเลื่อนได้</h3>'
    '<pre><code>{\n  "type": "template",\n  "altText": "รายการสินค้า",\n  "template": {\n    "type": "carousel",\n    "columns": [\n      {\n        "thumbnailImageUrl": "https://example.com/p1.jpg",\n        "title": "สินค้าชิ้นที่ 1",\n        "text": "ราคา 199 บาท",\n        "actions": [\n          { "type": "message", "label": "สั่งซื้อ", "text": "สั่งสินค้า 1" }\n        ]\n      },\n      {\n        "thumbnailImageUrl": "https://example.com/p2.jpg",\n        "title": "สินค้าชิ้นที่ 2",\n        "text": "ราคา 299 บาท",\n        "actions": [\n          { "type": "message", "label": "สั่งซื้อ", "text": "สั่งสินค้า 2" }\n        ]\n      }\n    ]\n  }\n}</code></pre>'
    '<div class=\'tip-box\'><strong>💡</strong> บน iOS และ Android LINE จะแสดง Template Message ได้สวยงาม แต่บน LINE Desktop อาจแสดงเป็น altText แทน จึงควรตั้ง altText ให้อธิบายเนื้อหาได้ด้วย</div>'
)
content4 = content4.replace("'", "\\'")
chapters.append(
    "  { number: 4, slug: 'message-types', emoji: '💌', title: 'ประเภทข้อความทั้งหมด', content: '" + content4 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 5 – flex-message
# ─────────────────────────────────────────────
content5 = (
    '<h2>🎨 Flex Message – ออกแบบข้อความได้อิสระ</h2>'
    '<p>Flex Message คือรูปแบบข้อความที่ยืดหยุ่นที่สุดใน LINE API ช่วยให้คุณออกแบบ layout ของข้อความได้เหมือน HTML/CSS โดยใช้ JSON structure ที่ LINE กำหนด</p>'
    '<h3>🏗️ โครงสร้างหลักของ Flex Message</h3>'
    '<p>Flex Message แบ่งเป็น 2 ระดับ Container:</p>'
    '<ul>'
    '<li><strong>Bubble</strong> – การ์ดเดี่ยว มี sections: header, hero, body, footer</li>'
    '<li><strong>Carousel</strong> – หลาย Bubble เรียงแนวนอนเลื่อนได้</li>'
    '</ul>'
    '<pre><code>{\n  "type": "flex",\n  "altText": "Flex Message",\n  "contents": {\n    "type": "bubble",\n    "header": { ... },\n    "hero": { ... },\n    "body": { ... },\n    "footer": { ... }\n  }\n}</code></pre>'
    '<h3>📦 Sections ของ Bubble</h3>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>Section</th><th>ตำแหน่ง</th><th>ใช้สำหรับ</th></tr></thead>'
    '<tbody>'
    '<tr><td>header</td><td>บนสุด</td><td>ชื่อเรื่อง, category label</td></tr>'
    '<tr><td>hero</td><td>ใต้ header</td><td>รูปภาพหลัก, banner</td></tr>'
    '<tr><td>body</td><td>ตรงกลาง</td><td>เนื้อหา, ราคา, รายละเอียด</td></tr>'
    '<tr><td>footer</td><td>ล่างสุด</td><td>ปุ่ม CTA, ลิงก์</td></tr>'
    '</tbody></table>'
    '<h3>🧱 Components ที่ใช้ใน Body</h3>'
    '<ul>'
    '<li><strong>box</strong> – container สำหรับจัด layout (horizontal/vertical/baseline)</li>'
    '<li><strong>text</strong> – แสดงข้อความ รองรับ size, weight, color, wrap</li>'
    '<li><strong>image</strong> – แสดงรูปภาพ กำหนด size, aspectRatio, action ได้</li>'
    '<li><strong>button</strong> – ปุ่มกด รองรับ style: primary/secondary/link</li>'
    '<li><strong>separator</strong> – เส้นแบ่ง</li>'
    '<li><strong>spacer</strong> – ช่องว่าง</li>'
    '<li><strong>icon</strong> – ไอคอนขนาดเล็ก (ใช้กับ baseline box)</li>'
    '</ul>'
    '<h3>📋 ตัวอย่าง Flex Message สินค้าครบโครง</h3>'
    '<pre><code>{\n  "type": "flex",\n  "altText": "สินค้าแนะนำ",\n  "contents": {\n    "type": "bubble",\n    "hero": {\n      "type": "image",\n      "url": "https://example.com/product.jpg",\n      "size": "full",\n      "aspectRatio": "20:13",\n      "aspectMode": "cover"\n    },\n    "body": {\n      "type": "box",\n      "layout": "vertical",\n      "contents": [\n        {\n          "type": "text",\n          "text": "กระเป๋าหนังแท้ Premium",\n          "weight": "bold",\n          "size": "xl"\n        },\n        {\n          "type": "box",\n          "layout": "baseline",\n          "contents": [\n            { "type": "text", "text": "฿", "size": "sm", "color": "#999" },\n            { "type": "text", "text": "1,990", "size": "xl", "weight": "bold", "color": "#e74c3c" }\n          ]\n        }\n      ]\n    },\n    "footer": {\n      "type": "box",\n      "layout": "vertical",\n      "contents": [\n        {\n          "type": "button",\n          "style": "primary",\n          "color": "#06C755",\n          "action": { "type": "uri", "label": "สั่งซื้อเลย", "uri": "https://shop.example.com" }\n        }\n      ]\n    }\n  }\n}</code></pre>'
    '<h3>🛠️ เครื่องมือที่ช่วยสร้าง Flex Message</h3>'
    '<ul>'
    '<li><strong>Flex Message Simulator</strong> – <code>developers.line.biz/flex-simulator</code> ออกแบบแบบ Visual แล้ว Copy JSON ได้เลย</li>'
    '<li><strong>LINE Bot Designer</strong> – Desktop app สำหรับ design บอท</li>'
    '</ul>'
    '<h3>💻 ส่ง Flex Message จาก Google Apps Script</h3>'
    '<pre><code>function sendFlexMessage(replyToken) {\n  const flexContent = {\n    type: "bubble",\n    body: {\n      type: "box",\n      layout: "vertical",\n      contents: [\n        { type: "text", text: "สวัสดี Flex!", weight: "bold", size: "xl" }\n      ]\n    }\n  };\n  \n  const payload = {\n    replyToken: replyToken,\n    messages: [{\n      type: "flex",\n      altText: "Flex Message",\n      contents: flexContent\n    }]\n  };\n  \n  // เรียก Reply API ด้วย payload นี้\n  callLineAPI(\'reply\', payload);\n}</code></pre>'
    '<div class=\'tip-box\'><strong>💡</strong> Flex Message รองรับ styles เพิ่มเติมเช่น gradient background, padding, margin, cornerRadius ทำให้ออกแบบได้สวยงามมาก ลองใช้ Flex Simulator ก่อนเขียนโค้ดจะประหยัดเวลามาก!</div>'
)
content5 = content5.replace("'", "\\'")
chapters.append(
    "  { number: 5, slug: 'flex-message', emoji: '🎨', title: 'Flex Message ออกแบบข้อความได้อิสระ', content: '" + content5 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 6 – rich-menu
# ─────────────────────────────────────────────
content6 = (
    '<h2>🍔 Rich Menu – เมนูถาวรที่ด้านล่างหน้าจอ</h2>'
    '<p>Rich Menu คือรูปภาพขนาดใหญ่ที่ปรากฏที่ด้านล่างของหน้าจอแชท ผู้ใช้สามารถกดเพื่อ trigger action ต่างๆ ได้ โดยไม่ต้องพิมพ์ข้อความ เป็น UX ที่ยอดเยี่ยมมากสำหรับบอท</p>'
    '<h3>📐 ข้อกำหนดรูปภาพ Rich Menu</h3>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>คุณสมบัติ</th><th>ค่าที่รองรับ</th></tr></thead>'
    '<tbody>'
    '<tr><td>ขนาดภาพ (Width)</td><td>2500 px (แนะนำ)</td></tr>'
    '<tr><td>ขนาดภาพ (Height)</td><td>1686 px (full) หรือ 843 px (half)</td></tr>'
    '<tr><td>Format</td><td>JPEG หรือ PNG</td></tr>'
    '<tr><td>ขนาดไฟล์สูงสุด</td><td>1 MB</td></tr>'
    '<tr><td>จำนวน Areas</td><td>สูงสุด 20 areas</td></tr>'
    '</tbody></table>'
    '<h3>🗺️ Areas และ Actions</h3>'
    '<p>แต่ละ Area คือพื้นที่สี่เหลี่ยมในรูป Rich Menu ที่กำหนด action เมื่อผู้ใช้กด:</p>'
    '<ul>'
    '<li><strong>message</strong> – ส่งข้อความที่กำหนดเมื่อกด</li>'
    '<li><strong>uri</strong> – เปิด URL เมื่อกด</li>'
    '<li><strong>postback</strong> – ส่ง postback data มาให้บอทประมวลผล</li>'
    '<li><strong>datetimepicker</strong> – เปิด date/time picker</li>'
    '<li><strong>richmenuswitch</strong> – สลับไปยัง Rich Menu อื่น</li>'
    '</ul>'
    '<h3>📋 JSON Structure ของ Rich Menu</h3>'
    '<pre><code>{\n  "size": { "width": 2500, "height": 1686 },\n  "selected": true,\n  "name": "Main Menu",\n  "chatBarText": "เมนู",\n  "areas": [\n    {\n      "bounds": { "x": 0, "y": 0, "width": 833, "height": 843 },\n      "action": { "type": "message", "text": "ดูสินค้า" }\n    },\n    {\n      "bounds": { "x": 833, "y": 0, "width": 834, "height": 843 },\n      "action": { "type": "message", "text": "ตรวจสอบออร์เดอร์" }\n    },\n    {\n      "bounds": { "x": 1667, "y": 0, "width": 833, "height": 843 },\n      "action": { "type": "uri", "uri": "https://example.com/contact" }\n    },\n    {\n      "bounds": { "x": 0, "y": 843, "width": 1250, "height": 843 },\n      "action": { "type": "message", "text": "โปรโมชัน" }\n    },\n    {\n      "bounds": { "x": 1250, "y": 843, "width": 1250, "height": 843 },\n      "action": { "type": "message", "text": "ติดต่อเรา" }\n    }\n  ]\n}</code></pre>'
    '<h3>🚀 สร้าง Rich Menu ผ่าน API (GAS Code)</h3>'
    '<pre><code>function createRichMenu() {\n  const richMenuData = {\n    size: { width: 2500, height: 1686 },\n    selected: true,\n    name: "Main Menu",\n    chatBarText: "เมนู",\n    areas: [\n      {\n        bounds: { x: 0, y: 0, width: 1250, height: 843 },\n        action: { type: "message", text: "ดูสินค้า" }\n      },\n      {\n        bounds: { x: 1250, y: 0, width: 1250, height: 843 },\n        action: { type: "message", text: "ติดต่อเรา" }\n      }\n    ]\n  };\n\n  const options = {\n    method: "post",\n    headers: {\n      "Content-Type": "application/json",\n      "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN\n    },\n    payload: JSON.stringify(richMenuData)\n  };\n\n  const res = UrlFetchApp.fetch(\n    "https://api.line.me/v2/bot/richmenu",\n    options\n  );\n  const json = JSON.parse(res.getContentText());\n  return json.richMenuId;  // เก็บ ID นี้ไว้\n}</code></pre>'
    '<h3>📤 Upload รูปภาพเข้า Rich Menu</h3>'
    '<pre><code>function uploadRichMenuImage(richMenuId, imageBlob) {\n  const url = "https://api-data.line.me/v2/bot/richmenu/" + richMenuId + "/content";\n  \n  const options = {\n    method: "post",\n    headers: {\n      "Content-Type": "image/jpeg",\n      "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN\n    },\n    payload: imageBlob.getBytes()\n  };\n  \n  UrlFetchApp.fetch(url, options);\n  console.log("Image uploaded successfully!");\n}\n\nfunction setDefaultRichMenu(richMenuId) {\n  UrlFetchApp.fetch(\n    "https://api.line.me/v2/bot/user/all/richmenu/" + richMenuId,\n    {\n      method: "post",\n      headers: { "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN }\n    }\n  );\n}</code></pre>'
    '<div class=\'tip-box\'><strong>💡</strong> สร้างรูป Rich Menu ด้วย Canva หรือ Photoshop โดยใช้ขนาด 2500x1686 px วางกรอบแต่ละปุ่มให้ชัดเจน แล้วใช้ LINE Official Account Manager ที่ rich menu ใน Manager ทำได้ง่ายกว่าเขียนโค้ดเองมาก</div>'
)
content6 = content6.replace("'", "\\'")
chapters.append(
    "  { number: 6, slug: 'rich-menu', emoji: '🍔', title: 'Rich Menu เมนูถาวรในแชท', content: '" + content6 + "' }"
)

# ─────────────────────────────────────────────
# Chapter 7 – deploy-render
# ─────────────────────────────────────────────
content7 = (
    '<h2>🚀 Deploy บอท LINE ขึ้น Production ด้วย Render.com</h2>'
    '<p>เมื่อพัฒนาบอทเสร็จแล้ว ต้องนำขึ้น Server จริงเพื่อให้ทำงานได้ตลอด 24 ชั่วโมง Render.com เป็น Platform as a Service (PaaS) ที่ใช้งานง่าย มี Free Tier และ Deploy จาก GitHub ได้โดยตรง</p>'
    '<h3>🏗️ สิ่งที่ต้องเตรียมก่อน Deploy</h3>'
    '<ul>'
    '<li>บัญชี GitHub (ฟรี) พร้อม Repository ของบอท</li>'
    '<li>บัญชี Render.com (ฟรี)</li>'
    '<li>โค้ดบอทที่เขียนด้วย Node.js, Python, หรือ Go</li>'
    '<li>ไฟล์ <code>package.json</code> หรือ <code>requirements.txt</code> สำหรับ dependencies</li>'
    '</ul>'
    '<h3>📝 ตัวอย่าง Express.js Bot Server</h3>'
    '<pre><code>// server.js\nconst express = require("express");\nconst crypto = require("crypto");\nconst axios = require("axios");\n\nconst app = express();\napp.use(express.json());\n\nconst TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;\nconst SECRET = process.env.LINE_CHANNEL_SECRET;\n\n// Health Check endpoint (สำคัญมากสำหรับ Render)\napp.get("/", (req, res) =&gt; {\n  res.json({ status: "ok", message: "LINE Bot is running!" });\n});\n\napp.post("/webhook", (req, res) =&gt; {\n  const events = req.body.events;\n  events.forEach(event =&gt; handleEvent(event));\n  res.json({ status: "ok" });\n});\n\nasync function handleEvent(event) {\n  if (event.type !== "message") return;\n  \n  await axios.post(\n    "https://api.line.me/v2/bot/message/reply",\n    {\n      replyToken: event.replyToken,\n      messages: [{ type: "text", text: "ได้รับข้อความแล้ว: " + event.message.text }]\n    },\n    { headers: { Authorization: "Bearer " + TOKEN } }\n  );\n}\n\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () =&gt; console.log("Bot running on port " + PORT));</code></pre>'
    '<h3>⚙️ ขั้นตอน Setup บน Render.com</h3>'
    '<ol>'
    '<li>ไปที่ <code>render.com</code> แล้ว Sign Up ด้วย GitHub</li>'
    '<li>คลิก <strong>New</strong> → <strong>Web Service</strong></li>'
    '<li>เลือก Repository บอทจาก GitHub</li>'
    '<li>ตั้งค่าดังนี้:'
    '<ul>'
    '<li>Name: ชื่อบอทของคุณ</li>'
    '<li>Region: Singapore (ใกล้ไทยที่สุด)</li>'
    '<li>Branch: main</li>'
    '<li>Build Command: <code>npm install</code></li>'
    '<li>Start Command: <code>node server.js</code></li>'
    '<li>Plan: Free</li>'
    '</ul>'
    '</li>'
    '<li>เพิ่ม Environment Variables:</li>'
    '</ol>'
    '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">'
    '<thead><tr style="background:#06C755;color:white"><th>Key</th><th>Value</th></tr></thead>'
    '<tbody>'
    '<tr><td>LINE_CHANNEL_ACCESS_TOKEN</td><td>Token จาก Developer Console</td></tr>'
    '<tr><td>LINE_CHANNEL_SECRET</td><td>Secret จาก Basic settings</td></tr>'
    '<tr><td>NODE_ENV</td><td>production</td></tr>'
    '</tbody></table>'
    '<ol start="6">'
    '<li>คลิก <strong>Create Web Service</strong> แล้วรอ Build เสร็จ (3-5 นาที)</li>'
    '<li>Copy URL ที่ Render ให้ (เช่น <code>https://mybot.onrender.com</code>)</li>'
    '<li>นำ URL ไปตั้งเป็น Webhook URL บน LINE Developer Console: <code>https://mybot.onrender.com/webhook</code></li>'
    '</ol>'
    '<h3>📊 การ Monitor บอทบน Render</h3>'
    '<ul>'
    '<li>ดู Logs real-time ได้ใน Dashboard → บอทของคุณ → Logs</li>'
    '<li>ตั้ง Health Check URL เป็น <code>/</code> เพื่อให้ Render รู้ว่าบอทยังรันอยู่</li>'
    '<li>Free Plan จะ Sleep หลังไม่มี request 15 นาที (Cold start ~30 วินาที)</li>'
    '<li>อัปเกรดเป็น Starter Plan ($7/เดือน) เพื่อให้ทำงานตลอดเวลา</li>'
    '</ul>'
    '<h3>✅ Production Checklist</h3>'
    '<ol>'
    '<li>[ ] Health check endpoint (<code>/</code>) ตอบ 200 OK</li>'
    '<li>[ ] Webhook URL ตั้งค่าถูกต้องและ Verify ผ่าน</li>'
    '<li>[ ] Environment Variables ทั้งหมดใส่ครบ</li>'
    '<li>[ ] ทดสอบส่งข้อความจาก LINE จริงแล้วได้รับตอบกลับ</li>'
    '<li>[ ] Logs ไม่มี Error</li>'
    '<li>[ ] ปิด Auto-reply บน LINE OA แล้ว</li>'
    '<li>[ ] มี Error handling สำหรับ uncaught exceptions</li>'
    '<li>[ ] ตั้ง Webhook Retry Policy ให้เหมาะสม</li>'
    '<li>[ ] ทดสอบ edge cases: ข้อความว่าง, ภาษาอื่น, สติ๊กเกอร์</li>'
    '<li>[ ] ตั้ง Uptime Monitor (เช่น UptimeRobot ฟรี) เพื่อ ping ทุก 5 นาที</li>'
    '</ol>'
    '<div class=\'tip-box\'><strong>💡</strong> ใช้ UptimeRobot.com (ฟรี) ตั้ง HTTP monitor ชี้ไปที่ URL บอท จะ ping ทุก 5 นาที ทำให้ Render Free Plan ไม่ Sleep และรับ alert ทาง email หากบอทล่ม!</div>'
    '<h3>🔄 การอัปเดตโค้ด</h3>'
    '<p>เมื่อแก้โค้ดและ push ขึ้น GitHub Render จะ Auto-deploy ทันที คุณสามารถดูสถานะการ deploy ได้ที่ Render Dashboard และหากต้องการ Rollback สามารถเลือก deploy เวอร์ชันเก่าได้จาก Deploys tab</p>'
)
content7 = content7.replace("'", "\\'")
chapters.append(
    "  { number: 7, slug: 'deploy-render', emoji: '🚀', title: 'Deploy บน Render.com', content: '" + content7 + "' }"
)

# ─────────────────────────────────────────────
# Assemble output
# ─────────────────────────────────────────────
output = 'export const chapters = [\n'
output += ',\n'.join(chapters)
output += '\n];\n'

out_path = r'd:\AI\ขาย\de-course\data\courses\line101.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output)

size_bytes = len(output.encode('utf-8'))
print(f'Written {size_bytes:,} bytes ({size_bytes/1024:.1f} KB) to {out_path}')
if size_bytes < 60 * 1024:
    print(f'WARNING: File is {size_bytes/1024:.1f} KB, target is 60 KB+')
else:
    print('✅ File meets 60 KB target!')
