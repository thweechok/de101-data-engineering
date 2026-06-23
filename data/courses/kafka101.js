export const chapters = [
  {
    number: 0,
    slug: 'intro',
    emoji: '🔥',
    title: 'Kafka คืออะไร?',
    content: `
<h2>🔥 ทำไม Real-Time Data ถึงสำคัญมากในยุคนี้?</h2>

<p>ลองนึกภาพว่าพี่ทำงานอยู่ที่ e-commerce platform ที่มี user หลายล้านคน ทุกวินาทีมีคนกดสั่งซื้อสินค้า คนกดเพิ่มสินค้าลง cart มี payment เข้ามา มี notification ที่ต้องส่ง ข้อมูลเหล่านี้ต้องถูก <strong>ประมวลผลแบบ real-time</strong> ไม่ใช่รอวันรุ่ง</p>

<p>ถ้าเราใช้ REST API ตรง ๆ ระหว่าง service ล่ะ? คำตอบคือ — <strong>มันพังแน่</strong> เพราะ:</p>
<ul>
  <li>Service A ส่ง request ไป Service B แต่ B ล่ม → ข้อมูลหายไปเลย</li>
  <li>วันดี ๆ traffic spike ขึ้น 10 เท่า → ทุก service ล่มพร้อมกัน (cascading failure)</li>
  <li>อยากเพิ่ม Service C ที่ต้องรับข้อมูลเดียวกัน → ต้องแก้โค้ด Service A</li>
</ul>

<p>นี่คือเหตุผลที่ <strong>Apache Kafka</strong> ถูกสร้างขึ้นมา</p>

<h2>🧠 วิธีคิด: Message Queue vs Event Streaming</h2>

<p>ก่อนจะเข้าเรื่อง Kafka ต้องเข้าใจ concept สำคัญก่อน:</p>

<h3>Message Queue (RabbitMQ, SQS)</h3>
<p>เหมือน <strong>ตู้ไปรษณีย์</strong> — ส่งจดหมายไป พอคนรับอ่านแล้ว จดหมายก็หายไป ถ้ามีคนรับหลายคน ก็แบ่งกันอ่าน (ไม่ได้อ่านซ้ำ)</p>

<h3>Event Streaming (Kafka)</h3>
<p>เหมือน <strong>กล้องวงจรปิดที่บันทึกวิดีโอ</strong> — ทุก event ถูกบันทึกไว้ใน log ใครอยากดูก็ย้อนดูได้ ดูซ้ำได้ ดูพร้อมกันหลายคนได้ และวิดีโอยังอยู่ครบ</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> ถ้าถูกถามในสัมภาษณ์ว่า "Kafka กับ RabbitMQ ต่างกันยังไง?" ให้ตอบว่า: RabbitMQ เป็น smart broker + dumb consumer (broker จัดการ routing, delivery) แต่ Kafka เป็น dumb broker + smart consumer (broker แค่เก็บ log, consumer จัดการ offset เอง)
</div>

<h2>Apache Kafka คืออะไร?</h2>

<p>Apache Kafka เป็น <strong>distributed event streaming platform</strong> ที่ถูกสร้างโดย LinkedIn ในปี 2011 แล้วบริจาคให้ Apache Foundation ปัจจุบันถูกใช้โดยบริษัทระดับโลก:</p>

<ul>
  <li><strong>Netflix</strong> — ใช้ Kafka ประมวลผล event 7 ล้าน messages/sec</li>
  <li><strong>Uber</strong> — ใช้ Kafka เป็น backbone ของ real-time pricing</li>
  <li><strong>LINE</strong> — ใช้ Kafka ส่ง message หลายพันล้านข้อความ/วัน</li>
  <li><strong>Shopee/Lazada</strong> — ใช้ Kafka จัดการ order pipeline ทั้งหมด</li>
</ul>

<h3>คุณสมบัติเด่นของ Kafka</h3>
<ul>
  <li><strong>High Throughput</strong> — รับส่งข้อมูลได้หลายล้าน messages/sec</li>
  <li><strong>Durability</strong> — ข้อมูลถูกเขียนลง disk + replicate ข้าม node</li>
  <li><strong>Scalability</strong> — เพิ่ม broker ได้ง่าย, partition data แบบ horizontal</li>
  <li><strong>Fault Tolerance</strong> — broker ตัวไหนล่ม ระบบยังทำงานได้</li>
  <li><strong>Replay</strong> — consumer สามารถย้อนอ่านข้อมูลเก่าได้</li>
</ul>

<h2>Use Cases จริงในองค์กร</h2>

<h3>1. Event-Driven Microservices</h3>
<pre><code class="language-text">
Order Service  →  [Kafka: orders topic]  →  Payment Service
                                          →  Inventory Service
                                          →  Notification Service
                                          →  Analytics Service
</code></pre>
<p>แทนที่ Order Service จะต้องรู้จักทุก downstream service มันแค่ publish event เข้า Kafka แล้วใครอยากรับก็ subscribe เอง</p>

<h3>2. Real-Time Data Pipeline (ETL)</h3>
<pre><code class="language-text">
MySQL (CDC)  →  Kafka  →  Spark Streaming  →  Data Lake (S3/HDFS)
                       →  Elasticsearch (Search)
                       →  Redis (Cache)
</code></pre>

<h3>3. Log Aggregation</h3>
<pre><code class="language-text">
App Server 1  ─┐
App Server 2  ─┼→  Kafka  →  ELK Stack (Elasticsearch + Kibana)
App Server 3  ─┘
</code></pre>

<h3>4. Real-Time Analytics & Fraud Detection</h3>
<pre><code class="language-text">
Transaction Stream  →  Kafka  →  ML Model (Flink/Spark)  →  Alert System
</code></pre>

<h2>ลองเล่น Kafka กันเลย!</h2>

<p>มาลองตั้ง Kafka cluster ด้วย Docker Compose กัน — นี่คือวิธีที่เร็วที่สุดในการเริ่มต้น:</p>

<pre><code class="language-yaml"># docker-compose.yml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    hostname: zookeeper
    container_name: zookeeper
    ports:
      - "2181:2181"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    hostname: kafka
    container_name: kafka
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
      - "29092:29092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "false"

  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    container_name: kafka-ui
    ports:
      - "8080:8080"
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:29092
      KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181
    depends_on:
      - kafka
</code></pre>

<pre><code class="language-bash"># เริ่ม Kafka cluster
docker-compose up -d

# สร้าง topic แรกของเรา
docker exec kafka kafka-topics --create \\
  --topic my-first-topic \\
  --bootstrap-server localhost:29092 \\
  --partitions 3 \\
  --replication-factor 1

# ดู topic ที่สร้าง
docker exec kafka kafka-topics --list \\
  --bootstrap-server localhost:29092

# ส่ง message (Producer)
docker exec -it kafka kafka-console-producer \\
  --topic my-first-topic \\
  --bootstrap-server localhost:29092

# อ่าน message (Consumer) — เปิด terminal ใหม่
docker exec -it kafka kafka-console-consumer \\
  --topic my-first-topic \\
  --bootstrap-server localhost:29092 \\
  --from-beginning
</code></pre>

<h2>ลองเขียน Python Producer & Consumer ตัวแรก</h2>

<pre><code class="language-python"># producer.py
from confluent_kafka import Producer
import json
import time

conf = {
    'bootstrap.servers': 'localhost:9092',
    'client.id': 'my-first-producer'
}

producer = Producer(conf)

def delivery_callback(err, msg):
    if err:
        print(f'❌ Message delivery failed: {err}')
    else:
        print(f'✅ Message delivered to {msg.topic()} [{msg.partition()}] @ offset {msg.offset()}')

# ส่ง 10 order events
for i in range(10):
    order = {
        'order_id': f'ORD-{i:04d}',
        'product': 'iPhone 15',
        'amount': 35900.00,
        'timestamp': time.time()
    }
    producer.produce(
        topic='my-first-topic',
        key=str(order['order_id']).encode('utf-8'),
        value=json.dumps(order).encode('utf-8'),
        callback=delivery_callback
    )
    producer.poll(0)  # trigger delivery callbacks

producer.flush()  # รอจนส่งครบทุก message
print('🎉 All messages sent!')
</code></pre>

<pre><code class="language-python"># consumer.py
from confluent_kafka import Consumer
import json

conf = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'my-first-consumer-group',
    'auto.offset.reset': 'earliest'
}

consumer = Consumer(conf)
consumer.subscribe(['my-first-topic'])

try:
    while True:
        msg = consumer.poll(timeout=1.0)
        if msg is None:
            continue
        if msg.error():
            print(f'❌ Consumer error: {msg.error()}')
            continue

        order = json.loads(msg.value().decode('utf-8'))
        print(f'📦 Received: {order["order_id"]} - {order["product"]} - ฿{order["amount"]:,.2f}')
        print(f'   Partition: {msg.partition()}, Offset: {msg.offset()}')
except KeyboardInterrupt:
    pass
finally:
    consumer.close()
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>ลืม flush()</strong> — Producer ส่ง message แบบ async ถ้าไม่ flush() ก่อน process จบ message อาจหายไป!</li>
  <li><strong>ใช้ kafka-python แทน confluent-kafka</strong> — <code>confluent-kafka</code> เป็น official client ที่เร็วกว่า 5-10 เท่า เพราะ wrap librdkafka (C library)</li>
  <li><strong>ลืมตั้ง auto.offset.reset</strong> — ถ้าไม่ตั้ง consumer จะอ่านแค่ message ใหม่ ข้อมูลเก่าที่มีอยู่แล้วจะไม่ถูกอ่าน</li>
</ul>
</div>

<h2>Kafka Ecosystem Overview</h2>

<pre><code class="language-text">
┌─────────────────────────────────────────────────────────┐
│                    Kafka Ecosystem                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Producers ──→  ┌──────────────────┐  ──→ Consumers     │
│                 │   Kafka Brokers   │                    │
│  Kafka Connect  │   (Cluster)       │  Kafka Streams     │
│  (Source)  ──→  │                   │  ──→ (Processing)  │
│                 │  Topics/Partitions│                    │
│  Schema Registry│  Replication      │  ksqlDB            │
│                 └──────────────────┘                    │
│                         │                                │
│                    ZooKeeper / KRaft                      │
│                  (Cluster Metadata)                       │
└─────────────────────────────────────────────────────────┘
</code></pre>

<p>ในคอร์สนี้เราจะเรียนทุก component ทีละตัว ตั้งแต่ Architecture ยันการ deploy Production</p>

<div class="tip-box">
💡 <strong>ทริค:</strong> Kafka เวอร์ชันใหม่ (3.x+) กำลังเปลี่ยนจาก ZooKeeper ไปใช้ <strong>KRaft (Kafka Raft)</strong> ในการจัดการ metadata แทน ถ้าเริ่มโปรเจกต์ใหม่ แนะนำลองใช้ KRaft mode เลย เพราะ ZooKeeper จะถูก deprecate ในอนาคต
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>ตั้ง Kafka cluster ด้วย docker-compose ตามตัวอย่าง แล้วเปิด Kafka UI ที่ <code>http://localhost:8080</code></li>
  <li>สร้าง topic ชื่อ <code>user-events</code> ที่มี 6 partitions</li>
  <li>เขียน Python producer ที่ส่ง user event (login, logout, click) แบบ random 100 events</li>
  <li>เขียน Python consumer ที่อ่าน events แล้ว count จำนวนแต่ละ event type</li>
</ol>
<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-bash"># สร้าง topic
docker exec kafka kafka-topics --create \\
  --topic user-events \\
  --bootstrap-server localhost:29092 \\
  --partitions 6 \\
  --replication-factor 1</code></pre>
<pre><code class="language-python"># producer - random events
import random, json, time
from confluent_kafka import Producer

producer = Producer({'bootstrap.servers': 'localhost:9092'})
event_types = ['login', 'logout', 'click', 'purchase']

for i in range(100):
    event = {
        'user_id': f'user-{random.randint(1, 20)}',
        'event_type': random.choice(event_types),
        'timestamp': time.time()
    }
    producer.produce('user-events',
                     key=event['user_id'].encode(),
                     value=json.dumps(event).encode())
producer.flush()
print('Sent 100 events!')</code></pre>
</details>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: Kafka ต่างจาก RabbitMQ ยังไง?</strong><br>
  A: Kafka เป็น distributed commit log ที่เก็บ message ไว้แม้ consumer อ่านแล้ว ทำให้ replay ได้ ส่วน RabbitMQ เป็น traditional message queue ที่ลบ message หลัง acknowledge</li>
  <li><strong>Q: ทำไมถึงเลือก Kafka ไม่ใช่ SQS หรือ Pub/Sub?</strong><br>
  A: Kafka เหมาะกับ high-throughput, ordering guarantee ภายใน partition, และ replay capability ส่วน managed services อย่าง SQS เหมาะกับ workload ที่ไม่ต้องการ ordering หรือ replay</li>
  <li><strong>Q: Kafka เก็บข้อมูลที่ไหน?</strong><br>
  A: Kafka เก็บ message ใน segment files บน disk ของแต่ละ broker โดย default จะ retain 7 วัน (168 ชม.) หรือจนกว่า disk จะเต็ม (1GB default per partition)</li>
</ol>
</div>
`
  },
  {
    number: 1,
    slug: 'architecture',
    emoji: '🏗️',
    title: 'Kafka Architecture',
    content: `
<h2>🏗️ ทำไมต้องเข้าใจ Architecture?</h2>

<p>สมมติพี่ได้รับมอบหมายให้ออกแบบ Kafka cluster สำหรับ e-commerce platform ที่รับ order 50,000 ต่อวินาที ถ้าไม่เข้าใจว่า Kafka ทำงานยังไงข้างใน พี่จะตั้ง partition กี่ตัว? replication factor เท่าไหร่? broker กี่เครื่อง?</p>

<p>การเข้าใจ architecture ไม่ใช่แค่ "รู้ไว้" แต่เป็นสิ่งที่ <strong>ทำให้ตัดสินใจได้ถูกต้อง</strong> ในงานจริง</p>

<h2>🧠 วิธีคิด: Kafka เหมือนระบบไปรษณีย์ขนาดใหญ่</h2>

<p>ลองเปรียบ Kafka กับ <strong>ระบบไปรษณีย์</strong>:</p>
<ul>
  <li><strong>Broker</strong> = ที่ทำการไปรษณีย์แต่ละสาขา (แต่ละเครื่อง server)</li>
  <li><strong>Topic</strong> = ประเภทของจดหมาย (จดหมายธุรกิจ, พัสดุ, EMS)</li>
  <li><strong>Partition</strong> = ช่องเก็บจดหมายในแต่ละสาขา (แบ่งงานกันทำ)</li>
  <li><strong>Replication</strong> = สำเนาจดหมายส่งไปเก็บที่สาขาอื่นด้วย (กันหาย)</li>
  <li><strong>ZooKeeper/KRaft</strong> = สำนักงานใหญ่ที่รู้ว่าสาขาไหนรับผิดชอบอะไร</li>
</ul>

<h2>Broker — หัวใจของ Kafka</h2>

<p>Kafka Broker คือ server แต่ละตัวใน Kafka cluster ทำหน้าที่:</p>
<ul>
  <li>รับ message จาก producer แล้วเขียนลง disk</li>
  <li>ส่ง message ให้ consumer เมื่อถูก request</li>
  <li>Replicate data ไปยัง broker ตัวอื่น</li>
</ul>

<pre><code class="language-text">
Kafka Cluster
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Broker 1 │  │ Broker 2 │  │ Broker 3 │
│  (ID: 1) │  │  (ID: 2) │  │  (ID: 3) │
│          │  │          │  │          │
│ P0 (L)   │  │ P1 (L)   │  │ P2 (L)   │
│ P1 (F)   │  │ P2 (F)   │  │ P0 (F)   │
└─────────┘  └─────────┘  └─────────┘
              L = Leader, F = Follower
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน production ควรมีอย่างน้อย <strong>3 brokers</strong> เพื่อรองรับ replication factor 3 ซึ่งเป็น industry standard ถ้ามี broker น้อยกว่า replication factor → สร้าง topic ไม่ได้!
</div>

<h2>Topic — การจัดหมวดหมู่ข้อมูล</h2>

<p>Topic คือ <strong>ชื่อ category</strong> ของ message stream เหมือนชื่อ table ใน database แต่สำหรับ streaming data</p>

<pre><code class="language-bash"># สร้าง topic สำหรับ production
docker exec kafka kafka-topics --create \\
  --topic orders \\
  --bootstrap-server localhost:29092 \\
  --partitions 12 \\
  --replication-factor 3 \\
  --config retention.ms=604800000 \\
  --config cleanup.policy=delete \\
  --config min.insync.replicas=2

# ดูรายละเอียด topic
docker exec kafka kafka-topics --describe \\
  --topic orders \\
  --bootstrap-server localhost:29092
</code></pre>

<p>Output จะได้ประมาณนี้:</p>
<pre><code class="language-text">
Topic: orders   TopicId: abc123   PartitionCount: 12   ReplicationFactor: 3
  Topic: orders   Partition: 0    Leader: 1    Replicas: 1,2,3    Isr: 1,2,3
  Topic: orders   Partition: 1    Leader: 2    Replicas: 2,3,1    Isr: 2,3,1
  Topic: orders   Partition: 2    Leader: 3    Replicas: 3,1,2    Isr: 3,1,2
  ...
</code></pre>

<h2>Partition — กุญแจสำคัญของ Scalability</h2>

<p>Partition คือ <strong>หน่วยของ parallelism</strong> ใน Kafka ทุก message ใน partition จะถูกเรียง <strong>ตามลำดับ (ordered)</strong></p>

<pre><code class="language-text">
Topic: orders (3 partitions)

Partition 0: [msg0] [msg3] [msg6] [msg9]  → offset: 0,1,2,3
Partition 1: [msg1] [msg4] [msg7] [msg10] → offset: 0,1,2,3
Partition 2: [msg2] [msg5] [msg8] [msg11] → offset: 0,1,2,3

แต่ละ partition เป็น append-only log
message ถูกเพิ่มที่ท้ายเสมอ (immutable)
</code></pre>

<h3>Message Key กำหนดว่าจะไป Partition ไหน</h3>

<pre><code class="language-python"># Partitioning strategy
from confluent_kafka import Producer
import json

producer = Producer({'bootstrap.servers': 'localhost:9092'})

# กรณีที่ 1: ไม่ระบุ key → Round-robin ไปทุก partition
producer.produce('orders', value=b'{"order": 1}')

# กรณีที่ 2: ระบุ key → hash(key) % num_partitions
# message ที่มี key เดียวกันจะไปอยู่ partition เดียวกันเสมอ!
producer.produce('orders',
                 key=b'customer-123',     # hash("customer-123") % 12 = partition X
                 value=b'{"order": 1}')
producer.produce('orders',
                 key=b'customer-123',     # จะไป partition X เสมอ
                 value=b'{"order": 2}')

# กรณีที่ 3: Custom partitioner
# ใช้เมื่อต้องการ logic พิเศษ เช่น แบ่งตาม region
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>ตั้ง partition น้อยเกินไป</strong> — ถ้ามี 3 partitions แต่ consumer 10 ตัว จะมี 7 ตัวที่นั่งว่าง! เพราะ 1 partition ถูกอ่านโดย consumer ได้แค่ 1 ตัวใน group เดียวกัน</li>
  <li><strong>เปลี่ยนจำนวน partition หลัง production</strong> — จะทำให้ message key routing เปลี่ยน! customer-123 ที่เคยไป partition 2 อาจไป partition 5 แทน → ordering เสีย</li>
  <li><strong>ตั้ง partition มากเกินไป</strong> — แต่ละ partition ใช้ file descriptor, memory คำแนะนำ: ไม่เกิน 4,000 partitions ต่อ broker</li>
</ul>
</div>

<h2>Replication — ป้องกันข้อมูลหาย</h2>

<p>ทุก partition จะมี <strong>1 Leader</strong> และ <strong>N-1 Followers</strong> (N = replication factor)</p>

<pre><code class="language-text">
Replication Factor = 3

Broker 1          Broker 2          Broker 3
┌──────────┐     ┌──────────┐     ┌──────────┐
│ P0 LEADER │────→│ P0 FOLLOW│────→│ P0 FOLLOW│
│           │     │          │     │          │
│ P1 FOLLOW │←────│ P1 LEADER│────→│ P1 FOLLOW│
│           │     │          │     │          │
│ P2 FOLLOW │     │ P2 FOLLOW│←────│ P2 LEADER│
└──────────┘     └──────────┘     └──────────┘

- Producer/Consumer พูดกับ Leader เท่านั้น
- Follower คอย replicate data จาก Leader
- ISR (In-Sync Replicas) = followers ที่ sync ทัน
</code></pre>

<h3>เมื่อ Broker ล่ม — Leader Election</h3>

<pre><code class="language-text">
สถานการณ์: Broker 1 ล่ม!

Before:  P0 Leader = Broker 1, ISR = {1, 2, 3}
After:   P0 Leader = Broker 2, ISR = {2, 3}   ← auto failover!

เมื่อ Broker 1 กลับมา → มันจะกลายเป็น follower
และ sync data ที่พลาดไปจาก leader ตัวใหม่
</code></pre>

<h2>3-Broker Cluster ด้วย Docker Compose (Production-like)</h2>

<pre><code class="language-yaml"># docker-compose-cluster.yml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka-1:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    ports: ["9092:9092"]
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-1:29092,EXTERNAL://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_DEFAULT_REPLICATION_FACTOR: 3
      KAFKA_MIN_INSYNC_REPLICAS: 2
      KAFKA_NUM_PARTITIONS: 6

  kafka-2:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    ports: ["9093:9093"]
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-2:29092,EXTERNAL://localhost:9093
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_DEFAULT_REPLICATION_FACTOR: 3
      KAFKA_MIN_INSYNC_REPLICAS: 2

  kafka-3:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    ports: ["9094:9094"]
    environment:
      KAFKA_BROKER_ID: 3
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka-3:29092,EXTERNAL://localhost:9094
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_DEFAULT_REPLICATION_FACTOR: 3
      KAFKA_MIN_INSYNC_REPLICAS: 2
</code></pre>

<h2>ZooKeeper vs KRaft</h2>

<table>
  <tr><th>Feature</th><th>ZooKeeper</th><th>KRaft (Kafka 3.x+)</th></tr>
  <tr><td>ต้องติดตั้งแยก</td><td>ใช่ (separate cluster)</td><td>ไม่ (built-in)</td></tr>
  <tr><td>Metadata storage</td><td>ZooKeeper znodes</td><td>Kafka internal topic</td></tr>
  <tr><td>Scalability</td><td>bottleneck ที่ ~200K partitions</td><td>รองรับหลายล้าน partitions</td></tr>
  <tr><td>Recovery time</td><td>นาที</td><td>วินาที</td></tr>
  <tr><td>Operational complexity</td><td>สูง (2 clusters)</td><td>ต่ำ (1 cluster)</td></tr>
</table>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน Kafka 3.6+ KRaft ถือว่า production-ready แล้ว ถ้าเริ่มโปรเจกต์ใหม่ให้ใช้ KRaft เลย ประหยัด operational cost ได้เยอะ ส่วนถ้ามี cluster เดิมที่ใช้ ZooKeeper ค่อย ๆ migrate ตาม official guide
</div>

<h2>Segment Files — Kafka เก็บ Data ยังไง?</h2>

<p>แต่ละ partition จะถูกเก็บเป็น <strong>segment files</strong> บน disk:</p>

<pre><code class="language-text">
/var/lib/kafka/data/orders-0/     ← Partition 0
├── 00000000000000000000.log      ← Segment file (ข้อมูลจริง)
├── 00000000000000000000.index    ← Offset index
├── 00000000000000000000.timeindex← Time index
├── 00000000000050000000.log      ← Segment ใหม่ (เมื่อเก่าเต็ม)
├── 00000000000050000000.index
└── leader-epoch-checkpoint

ชื่อไฟล์ = base offset ของ segment นั้น
Default segment size = 1 GB
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Kafka เร็วมากเพราะใช้ 2 เทคนิคสำคัญ:
<ol>
  <li><strong>Sequential I/O</strong> — เขียน disk แบบเรียงลำดับ ซึ่งเร็วกว่า random I/O 100 เท่า</li>
  <li><strong>Zero-copy transfer</strong> — ส่ง data จาก disk ไป network โดยไม่ต้อง copy ผ่าน application buffer (ใช้ sendfile syscall)</li>
</ol>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>ตั้ง 3-broker cluster ด้วย docker-compose แล้วสร้าง topic <code>payments</code> ที่มี 6 partitions, replication factor 3</li>
  <li>ใช้ <code>kafka-topics --describe</code> ดูว่า leader ของแต่ละ partition อยู่ที่ broker ไหน</li>
  <li>ลอง stop broker 1 ด้วย <code>docker stop kafka-1</code> แล้ว describe topic อีกครั้ง สังเกตว่า leader เปลี่ยนไหม?</li>
  <li>Start broker 1 กลับมา สังเกตว่า ISR เปลี่ยนยังไง?</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: Partition ใน Kafka คืออะไร ทำไมถึงสำคัญ?</strong><br>
  A: Partition คือหน่วยของ parallelism ที่ทำให้ Kafka scale ได้ แต่ละ partition คือ ordered, immutable sequence ของ records การเพิ่ม partition = เพิ่ม throughput เพราะ consumer หลายตัวอ่านพร้อมกันได้</li>
  <li><strong>Q: ISR คืออะไร? ทำไมถึงสำคัญ?</strong><br>
  A: ISR (In-Sync Replicas) คือ set ของ replicas ที่ sync data ทัน leader ถ้า min.insync.replicas=2 และมี ISR แค่ 1 ตัว producer จะเขียนไม่ได้ (NotEnoughReplicas) เพื่อป้องกัน data loss</li>
  <li><strong>Q: ตั้ง partition กี่ตัวดี?</strong><br>
  A: ขึ้นอยู่กับ target throughput ถ้าต้องการ 100 MB/s และ consumer แต่ละตัว process ได้ 10 MB/s ก็ต้องมีอย่างน้อย 10 partitions Rule of thumb: #partitions ≥ max(target_throughput/producer_throughput, target_throughput/consumer_throughput)</li>
</ol>
</div>
`
  },
  {
    number: 2,
    slug: 'producer',
    emoji: '📤',
    title: 'Kafka Producer Deep Dive',
    content: `
<h2>📤 ทำไม Producer ถึงสำคัญกว่าที่คิด?</h2>

<p>ลองนึกภาพว่าพี่ทำ payment system ทุกครั้งที่ลูกค้าจ่ายเงินสำเร็จ producer จะส่ง event เข้า Kafka ถ้า producer ไม่ reliable → <strong>เงินหายทันที</strong> ลูกค้าจ่ายแล้วแต่ระบบไม่บันทึก</p>

<p>ดังนั้น การเข้าใจว่า producer ทำงานยังไง, acks ตั้งเท่าไหร่, retry ทำงานอย่างไร เป็นสิ่งที่ <strong>ต้องรู้ลึก</strong></p>

<h2>🧠 วิธีคิด: Producer ทำงานยังไงข้างใน?</h2>

<pre><code class="language-text">
Application Thread                    Sender Thread (Background)
      │                                        │
      ▼                                        │
┌──────────┐                                   │
│ Serializer│ (key + value → bytes)            │
└────┬─────┘                                   │
     ▼                                         │
┌──────────┐                                   │
│Partitioner│ (เลือก partition)                │
└────┬─────┘                                   │
     ▼                                         │
┌───────────────────────┐                      │
│ Record Accumulator    │                      │
│ ┌─────┐ ┌─────┐      │     batch.size       │
│ │Batch│ │Batch│  ... ──────────────────────→ │
│ │ P0  │ │ P1  │      │     linger.ms         │
│ └─────┘ └─────┘      │                      ▼
└───────────────────────┘              ┌──────────────┐
                                       │  Send to      │
                                       │  Kafka Broker │
                                       └──────────────┘
</code></pre>

<p>Producer ไม่ได้ส่ง message ทีละ 1 ตัว! มันจะ <strong>batch</strong> message รวมกันก่อนส่ง เพื่อประสิทธิภาพ</p>

<h2>Production-Grade Producer (Python)</h2>

<pre><code class="language-python"># production_producer.py
from confluent_kafka import Producer, KafkaError
from confluent_kafka.serialization import (
    StringSerializer,
    SerializationContext,
    MessageField
)
import json
import logging
import time
from dataclasses import dataclass, asdict
from typing import Optional

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class OrderEvent:
    order_id: str
    customer_id: str
    product_id: str
    quantity: int
    total_amount: float
    currency: str = 'THB'
    timestamp: float = None

    def __post_init__(self):
        if self.timestamp is None:
            self.timestamp = time.time()

    def to_json(self) -> bytes:
        return json.dumps(asdict(self), ensure_ascii=False).encode('utf-8')


class OrderProducer:
    """Production-grade Kafka Producer with proper error handling."""

    def __init__(self, bootstrap_servers: str = 'localhost:9092'):
        self.conf = {
            'bootstrap.servers': bootstrap_servers,
            'client.id': 'order-producer',

            # === Reliability Settings ===
            'acks': 'all',             # รอ ISR ทุกตัว ack → ไม่มี data loss
            'enable.idempotence': True, # ป้องกัน duplicate เมื่อ retry

            # === Retry Settings ===
            'retries': 2147483647,      # retry ไม่จำกัด (มี delivery.timeout.ms คุม)
            'delivery.timeout.ms': 120000,  # timeout 2 นาที
            'retry.backoff.ms': 100,

            # === Performance Settings ===
            'batch.size': 65536,        # 64 KB per batch
            'linger.ms': 5,             # รอ 5ms สะสม batch
            'compression.type': 'lz4',  # บีบอัด → ลด network + disk
            'buffer.memory': 67108864,  # 64 MB buffer

            # === Ordering ===
            'max.in.flight.requests.per.connection': 5,  # OK with idempotence=true
        }
        self.producer = Producer(self.conf)
        self._message_count = 0
        self._error_count = 0

    def _delivery_callback(self, err, msg):
        """Callback เมื่อ message ถูกส่ง (หรือ fail)."""
        if err:
            self._error_count += 1
            logger.error(
                f'❌ Delivery failed for {msg.key()}: {err}'
            )
            # ในงานจริง: ส่ง metric, alert, หรือเขียนลง dead letter queue
        else:
            self._message_count += 1
            if self._message_count % 1000 == 0:
                logger.info(
                    f'✅ Delivered {self._message_count} messages. '
                    f'Latest: {msg.topic()}[{msg.partition()}]@{msg.offset()}'
                )

    def send_order(self, order: OrderEvent) -> None:
        """ส่ง order event ไป Kafka."""
        try:
            self.producer.produce(
                topic='orders',
                key=order.customer_id.encode('utf-8'),  # key = customer_id
                value=order.to_json(),
                callback=self._delivery_callback,
                headers={
                    'event_type': b'order_created',
                    'source': b'order-service',
                    'version': b'1.0'
                }
            )
            # poll(0) triggers delivery callbacks without blocking
            self.producer.poll(0)
        except BufferError:
            logger.warning('⚠️ Producer buffer full, waiting...')
            self.producer.poll(1)  # wait 1s for buffer space
            self.send_order(order)  # retry

    def flush_and_close(self):
        """Flush remaining messages and report stats."""
        remaining = self.producer.flush(timeout=30)
        if remaining > 0:
            logger.error(f'❌ {remaining} messages were not delivered!')
        logger.info(
            f'📊 Stats: sent={self._message_count}, errors={self._error_count}'
        )


# Usage
if __name__ == '__main__':
    producer = OrderProducer()

    for i in range(10000):
        order = OrderEvent(
            order_id=f'ORD-{i:06d}',
            customer_id=f'CUST-{i % 100:04d}',
            product_id=f'PROD-{i % 50:03d}',
            quantity=1,
            total_amount=round(99.0 + (i * 0.5), 2)
        )
        producer.send_order(order)

    producer.flush_and_close()
</code></pre>

<h2>Production Producer (Java — Spring Boot)</h2>

<pre><code class="language-java">// KafkaProducerConfig.java
@Configuration
public class KafkaProducerConfig {

    @Bean
    public ProducerFactory&lt;String, String&gt; producerFactory() {
        Map&lt;String, Object&gt; props = new HashMap&lt;&gt;();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);

        // Reliability
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);

        // Performance
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 65536);
        props.put(ProducerConfig.LINGER_MS_CONFIG, 5);
        props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "lz4");

        return new DefaultKafkaProducerFactory&lt;&gt;(props);
    }

    @Bean
    public KafkaTemplate&lt;String, String&gt; kafkaTemplate() {
        return new KafkaTemplate&lt;&gt;(producerFactory());
    }
}

// OrderService.java
@Service
@Slf4j
public class OrderService {

    @Autowired
    private KafkaTemplate&lt;String, String&gt; kafkaTemplate;

    private final ObjectMapper mapper = new ObjectMapper();

    public void publishOrder(OrderEvent order) {
        String value = mapper.writeValueAsString(order);

        CompletableFuture&lt;SendResult&lt;String, String&gt;&gt; future =
            kafkaTemplate.send("orders", order.getCustomerId(), value);

        future.whenComplete((result, ex) -> {
            if (ex != null) {
                log.error("❌ Failed to send order {}: {}", order.getOrderId(), ex.getMessage());
            } else {
                RecordMetadata metadata = result.getRecordMetadata();
                log.info("✅ Order {} sent to {}[{}]@{}",
                    order.getOrderId(),
                    metadata.topic(),
                    metadata.partition(),
                    metadata.offset());
            }
        });
    }
}
</code></pre>

<h2>Acks — ระดับการ Guarantee</h2>

<table>
  <tr><th>acks</th><th>ความหมาย</th><th>Speed</th><th>Data Safety</th><th>Use Case</th></tr>
  <tr><td><code>acks=0</code></td><td>Fire and forget ไม่รอ ack</td><td>🚀🚀🚀</td><td>⚠️ อาจหาย</td><td>Metrics, Logs (ยอมหายได้)</td></tr>
  <tr><td><code>acks=1</code></td><td>รอแค่ Leader ack</td><td>🚀🚀</td><td>✅ ดี</td><td>Default ทั่วไป</td></tr>
  <tr><td><code>acks=all</code></td><td>รอทุก ISR ack</td><td>🚀</td><td>✅✅ ปลอดภัยสุด</td><td>Payment, Financial</td></tr>
</table>

<pre><code class="language-text">
acks=all + min.insync.replicas=2 + replication.factor=3

Producer → Broker 1 (Leader) → Broker 2 (Follower) ✅
                              → Broker 3 (Follower) ✅
                              ← ACK to Producer ✅

ถ้า Broker 3 ล่ม → ISR = {1, 2} → ยังเขียนได้ (ISR >= min.insync.replicas)
ถ้า Broker 2+3 ล่ม → ISR = {1} → เขียนไม่ได้! → NotEnoughReplicasException
</code></pre>

<h2>Idempotent Producer — ป้องกัน Duplicate</h2>

<pre><code class="language-text">
ปัญหา: Network timeout → producer retry → message ซ้ำ!

Timeline:
1. Producer ส่ง msg A ไป Broker ✅ (Broker เขียนสำเร็จ)
2. ACK หายระหว่างทาง ❌ (network issue)
3. Producer คิดว่า fail → retry ส่ง msg A อีกรอบ
4. Broker ได้รับ msg A ซ้ำ → Duplicate! 💀

Solution: enable.idempotence=true
- Producer จะส่ง PID (Producer ID) + Sequence Number ไปด้วย
- Broker จะ deduplicate โดยดูจาก PID + Seq
- ถ้าเคยได้รับแล้ว → ไม่เขียนซ้ำ แต่ตอบ ACK กลับมา
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ตั้งแต่ Kafka 3.0+ idempotence เปิดเป็น default แล้ว แต่ถ้าใช้ Kafka เก่ากว่านั้น ต้องเปิดเอง ไม่งั้น payment ซ้ำแน่!
</div>

<h2>Serialization — เลือกให้ถูก</h2>

<table>
  <tr><th>Format</th><th>Size</th><th>Speed</th><th>Schema Evolution</th><th>เหมาะกับ</th></tr>
  <tr><td>JSON</td><td>ใหญ่</td><td>ช้า</td><td>❌ ไม่มี</td><td>Debug, prototype</td></tr>
  <tr><td>Avro</td><td>เล็ก</td><td>เร็ว</td><td>✅ มี (Schema Registry)</td><td>Production standard</td></tr>
  <tr><td>Protobuf</td><td>เล็กมาก</td><td>เร็วมาก</td><td>✅ มี</td><td>gRPC ecosystem</td></tr>
  <tr><td>String</td><td>ใหญ่</td><td>เร็ว</td><td>❌ ไม่มี</td><td>Simple text</td></tr>
</table>

<pre><code class="language-python"># Avro Serialization with Schema Registry
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import SerializationContext, MessageField

schema_registry = SchemaRegistryClient({'url': 'http://localhost:8081'})

order_schema = """{
  "type": "record",
  "name": "Order",
  "namespace": "com.example",
  "fields": [
    {"name": "order_id", "type": "string"},
    {"name": "customer_id", "type": "string"},
    {"name": "amount", "type": "double"},
    {"name": "timestamp", "type": "long", "logicalType": "timestamp-millis"}
  ]
}"""

avro_serializer = AvroSerializer(
    schema_registry,
    order_schema,
    lambda order, ctx: order  # dict → Avro
)

producer = Producer({'bootstrap.servers': 'localhost:9092'})

order = {
    'order_id': 'ORD-001',
    'customer_id': 'CUST-123',
    'amount': 1500.00,
    'timestamp': int(time.time() * 1000)
}

producer.produce(
    topic='orders-avro',
    key=b'CUST-123',
    value=avro_serializer(order, SerializationContext('orders-avro', MessageField.VALUE))
)
producer.flush()
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>ส่ง message ใหญ่เกินไป</strong> — Default max = 1 MB ถ้าจะส่ง message ใหญ่ ต้องตั้ง <code>max.request.size</code> ที่ producer และ <code>message.max.bytes</code> ที่ broker แต่คำแนะนำคือ อย่าส่ง message ใหญ่เกิน 1 MB เก็บไฟล์ใน S3 แล้วส่งแค่ link</li>
  <li><strong>ไม่ handle BufferError</strong> — ถ้า producer ส่งเร็วเกินกว่า broker จะรับ buffer จะเต็ม ต้อง catch และ poll() รอ</li>
  <li><strong>ใช้ JSON โดยไม่มี schema</strong> — วันดี ๆ ใครสักคนเปลี่ยน field name → consumer พัง! ใช้ Schema Registry เสมอในงาน production</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>เขียน producer ที่ส่ง 100,000 messages โดยวัด throughput (messages/sec)</li>
  <li>ทดลองเปลี่ยน <code>batch.size</code> และ <code>linger.ms</code> แล้วเทียบ throughput</li>
  <li>ทดลองเปลี่ยน <code>compression.type</code> (none, gzip, lz4, snappy, zstd) แล้วเทียบ throughput และ data size</li>
  <li>เขียน producer ที่ส่ง message พร้อม headers (event_type, correlation_id)</li>
</ol>
<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">import time
from confluent_kafka import Producer

def benchmark_producer(compression='none', batch_size=16384, linger_ms=0):
    conf = {
        'bootstrap.servers': 'localhost:9092',
        'compression.type': compression,
        'batch.size': batch_size,
        'linger.ms': linger_ms,
        'acks': 'all'
    }
    p = Producer(conf)
    msg = b'{"order_id":"ORD-001","amount":999.99}' * 5  # ~200 bytes

    start = time.time()
    for i in range(100_000):
        p.produce('benchmark-topic', value=msg, key=str(i).encode())
        p.poll(0)
    p.flush()
    elapsed = time.time() - start

    print(f'Compression={compression}, Batch={batch_size}, Linger={linger_ms}ms')
    print(f'  → {100_000/elapsed:,.0f} msgs/sec ({elapsed:.2f}s)')

benchmark_producer('none', 16384, 0)
benchmark_producer('lz4', 65536, 5)
benchmark_producer('zstd', 131072, 10)</code></pre>
</details>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: acks=all กับ acks=1 ต่างกันยังไง? เมื่อไหร่ใช้อะไร?</strong><br>
  A: acks=1 รอแค่ leader เขียนเสร็จ ถ้า leader ล่มก่อน replicate ข้อมูลหาย acks=all รอ ISR ทุกตัว ปลอดภัยกว่าแต่ latency สูงขึ้น ใช้ acks=all สำหรับ financial data, acks=1 สำหรับ logs/metrics</li>
  <li><strong>Q: Idempotent producer ทำงานยังไง?</strong><br>
  A: Producer จะได้ PID จาก broker และส่ง sequence number ไปกับทุก message broker จะ track seq per PID per partition ถ้าเห็น seq ซ้ำ → ไม่เขียนซ้ำ (deduplicate at broker level)</li>
  <li><strong>Q: ทำไมต้อง flush() ก่อนปิด producer?</strong><br>
  A: เพราะ produce() เป็น async มันแค่ใส่ message ลง buffer ถ้าปิด process ก่อน flush → messages ใน buffer หายหมด</li>
</ol>
</div>
`
  },
  {
    number: 3,
    slug: 'consumer',
    emoji: '📥',
    title: 'Kafka Consumer Deep Dive',
    content: `
<h2>📥 ทำไม Consumer ถึงเป็นส่วนที่ยากที่สุดของ Kafka?</h2>

<p>Producer แค่ส่งข้อมูลเข้า Kafka — ง่าย แต่ Consumer ต้องจัดการ:</p>
<ul>
  <li>อ่าน message อย่างไรให้ <strong>ไม่หาย</strong> (at-least-once)?</li>
  <li>อ่าน message อย่างไรให้ <strong>ไม่ซ้ำ</strong> (exactly-once)?</li>
  <li>ถ้า consumer ล่ม จะ <strong>อ่านต่อจากจุดไหน</strong>?</li>
  <li>consumer หลายตัว <strong>แบ่งงานกัน</strong>ยังไง?</li>
</ul>

<p>ในบทนี้เราจะเจาะลึกทุก concept ที่ต้องรู้</p>

<h2>🧠 วิธีคิด: Consumer เหมือนคนอ่านหนังสือ</h2>

<p>ลองเปรียบ:</p>
<ul>
  <li><strong>Partition</strong> = หนังสือ 1 เล่ม</li>
  <li><strong>Offset</strong> = ที่คั่นหนังสือ (อ่านถึงหน้าไหนแล้ว)</li>
  <li><strong>Consumer</strong> = คนอ่าน</li>
  <li><strong>Consumer Group</strong> = กลุ่มคนที่แบ่งกันอ่านหนังสือคนละเล่ม</li>
  <li><strong>Commit</strong> = จดบันทึกว่าอ่านถึงหน้าไหนแล้ว (กันลืม)</li>
</ul>

<h2>Offset — หัวใจของ Consumer</h2>

<pre><code class="language-text">
Partition 0:
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│  0  │  1  │  2  │  3  │  4  │  5  │  6  │  7  │
└─────┴─────┴─────┴──▲──┴─────┴─────┴──▲──┴─────┘
                     │                  │
              committed offset    current position
              (last committed)    (being processed)

- Committed Offset: offset ที่ consumer บอก Kafka ว่า "ผมอ่านถึงตรงนี้แล้วนะ"
- Current Position: offset ที่ consumer กำลังอ่านอยู่
- Log End Offset: offset ล่าสุดที่มีใน partition

Consumer Lag = Log End Offset - Committed Offset
(ยิ่ง lag มาก = consumer อ่านไม่ทัน producer!)
</code></pre>

<h2>Production-Grade Consumer (Python)</h2>

<pre><code class="language-python"># production_consumer.py
from confluent_kafka import Consumer, KafkaError, KafkaException
import json
import logging
import signal
import sys
from typing import Callable, Dict, Any

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class OrderConsumer:
    """Production-grade Kafka consumer with proper lifecycle management."""

    def __init__(
        self,
        bootstrap_servers: str = 'localhost:9092',
        group_id: str = 'order-processing-group',
        topics: list = None
    ):
        self.conf = {
            'bootstrap.servers': bootstrap_servers,
            'group.id': group_id,
            'auto.offset.reset': 'earliest',

            # === Offset Management ===
            'enable.auto.commit': False,  # ❗ manual commit for reliability

            # === Session Management ===
            'session.timeout.ms': 45000,      # 45s ก่อน rebalance
            'heartbeat.interval.ms': 15000,   # ส่ง heartbeat ทุก 15s
            'max.poll.interval.ms': 300000,   # 5 นาที max processing time

            # === Performance ===
            'max.poll.records': 500,           # ดึงทีละ 500 records
            'fetch.min.bytes': 1,
            'fetch.max.wait.ms': 500,
        }
        self.consumer = Consumer(self.conf)
        self.topics = topics or ['orders']
        self._running = True
        self._processed_count = 0

        # Graceful shutdown
        signal.signal(signal.SIGINT, self._signal_handler)
        signal.signal(signal.SIGTERM, self._signal_handler)

    def _signal_handler(self, signum, frame):
        logger.info('🛑 Shutdown signal received, closing consumer...')
        self._running = False

    def _on_assign(self, consumer, partitions):
        """Callback เมื่อได้รับ partition assignment."""
        logger.info(f'📌 Assigned partitions: {[p.partition for p in partitions]}')

    def _on_revoke(self, consumer, partitions):
        """Callback เมื่อถูกถอน partition (rebalance)."""
        logger.info(f'🔄 Revoked partitions: {[p.partition for p in partitions]}')
        # Commit ก่อนถูกถอน partition!
        consumer.commit(asynchronous=False)

    def process_message(self, msg) -> bool:
        """Process a single message. Returns True if successful."""
        try:
            order = json.loads(msg.value().decode('utf-8'))
            headers = dict(msg.headers()) if msg.headers() else {}

            # === Business Logic ===
            logger.info(
                f'📦 Processing order {order.get("order_id")} '
                f'from partition {msg.partition()} offset {msg.offset()}'
            )

            # สมมติว่าเราทำ: validate → save to DB → trigger downstream
            self._validate_order(order)
            self._save_to_database(order)

            return True
        except json.JSONDecodeError:
            logger.error(f'❌ Invalid JSON at offset {msg.offset()}')
            return True  # skip bad message (don't retry forever)
        except Exception as e:
            logger.error(f'❌ Processing failed: {e}')
            return False  # will NOT commit → retry on next poll

    def _validate_order(self, order: dict):
        required_fields = ['order_id', 'customer_id', 'total_amount']
        for field in required_fields:
            if field not in order:
                raise ValueError(f'Missing required field: {field}')

    def _save_to_database(self, order: dict):
        # ในงานจริง: INSERT INTO orders ...
        pass

    def run(self):
        """Main consumer loop."""
        self.consumer.subscribe(
            self.topics,
            on_assign=self._on_assign,
            on_revoke=self._on_revoke
        )

        logger.info(f'🚀 Consumer started, listening on {self.topics}')

        try:
            while self._running:
                msg = self.consumer.poll(timeout=1.0)

                if msg is None:
                    continue

                if msg.error():
                    if msg.error().code() == KafkaError._PARTITION_EOF:
                        logger.debug(f'Reached end of partition {msg.partition()}')
                    else:
                        raise KafkaException(msg.error())
                    continue

                # Process message
                success = self.process_message(msg)

                if success:
                    self._processed_count += 1
                    # Commit every 100 messages (or use time-based)
                    if self._processed_count % 100 == 0:
                        self.consumer.commit(asynchronous=False)
                        logger.info(f'✅ Committed offset. Processed: {self._processed_count}')
        except Exception as e:
            logger.error(f'💀 Fatal consumer error: {e}')
        finally:
            # Commit final offsets and close
            try:
                self.consumer.commit(asynchronous=False)
            except Exception:
                pass
            self.consumer.close()
            logger.info(f'👋 Consumer closed. Total processed: {self._processed_count}')


if __name__ == '__main__':
    consumer = OrderConsumer()
    consumer.run()
</code></pre>

<h2>Auto Commit vs Manual Commit</h2>

<h3>Auto Commit (Default — อันตราย!)</h3>
<pre><code class="language-text">
enable.auto.commit = true (default)
auto.commit.interval.ms = 5000 (default 5 วินาที)

ปัญหา:
1. Consumer poll message offset 100-200
2. Auto commit offset 200 ✅
3. Consumer เริ่ม process message 150 แต่ crash! 💥
4. Consumer restart → อ่านต่อจาก offset 200
5. Message 150-199 ไม่ถูก process → DATA LOSS! 💀
</code></pre>

<h3>Manual Commit (แนะนำสำหรับ Production)</h3>
<pre><code class="language-python"># Pattern 1: Commit after each message (ช้าแต่ safe ที่สุด)
while True:
    msg = consumer.poll(1.0)
    if msg and not msg.error():
        process(msg)
        consumer.commit(msg)  # commit ทีละ message

# Pattern 2: Commit every N messages (balanced)
batch = []
while True:
    msg = consumer.poll(1.0)
    if msg and not msg.error():
        process(msg)
        batch.append(msg)
        if len(batch) >= 100:
            consumer.commit(asynchronous=False)
            batch.clear()

# Pattern 3: Synchronous vs Asynchronous commit
consumer.commit(asynchronous=False)   # รอจน commit เสร็จ (safe)
consumer.commit(asynchronous=True)    # ไม่รอ (เร็ว แต่อาจ fail silently)
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>ใช้ auto commit ใน financial system</strong> — อย่าทำเด็ดขาด! ถ้า process ล้มก่อน commit จริง แต่ auto commit ไปแล้ว → ข้อมูลหาย</li>
  <li><strong>ลืม commit เลย</strong> — consumer restart จะอ่านซ้ำทั้งหมด (ถ้า auto.offset.reset=earliest) หรือข้ามไปอ่าน latest → ข้อมูลหาย</li>
  <li><strong>Commit ก่อน process</strong> — ถ้า process fail หลัง commit ข้อมูลจะถูกข้ามไป ให้ commit <strong>หลัง</strong> process สำเร็จเสมอ</li>
</ul>
</div>

<h2>Consumer ใน Java (Spring Kafka)</h2>

<pre><code class="language-java">// OrderConsumer.java
@Component
@Slf4j
public class OrderConsumer {

    @KafkaListener(
        topics = "orders",
        groupId = "order-processing-group",
        containerFactory = "kafkaListenerContainerFactory"
    )
    public void consume(
        @Payload String message,
        @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,
        @Header(KafkaHeaders.OFFSET) long offset,
        Acknowledgment acknowledgment
    ) {
        try {
            OrderEvent order = objectMapper.readValue(message, OrderEvent.class);
            log.info("📦 Processing order {} from partition {} offset {}",
                order.getOrderId(), partition, offset);

            // Business logic
            orderRepository.save(order);

            // Manual acknowledge (commit)
            acknowledgment.acknowledge();
        } catch (Exception e) {
            log.error("❌ Failed to process message at offset {}: {}", offset, e.getMessage());
            // ไม่ acknowledge → message จะถูก retry
        }
    }
}

// Config: AckMode = MANUAL_IMMEDIATE
@Bean
public ConcurrentKafkaListenerContainerFactory&lt;String, String&gt; kafkaListenerContainerFactory() {
    ConcurrentKafkaListenerContainerFactory&lt;String, String&gt; factory =
        new ConcurrentKafkaListenerContainerFactory&lt;&gt;();
    factory.setConsumerFactory(consumerFactory());
    factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);
    factory.setConcurrency(3);  // 3 threads = 3 consumers in group
    return factory;
}
</code></pre>

<h2>Poll Loop — ทำความเข้าใจให้ลึก</h2>

<pre><code class="language-text">
Consumer Poll Loop Lifecycle:

1. consumer.subscribe(['orders'])    → บอก Kafka ว่าจะอ่าน topic ไหน
2. consumer.poll(timeout=1.0)        → ดึง messages จาก broker
   ├─ ถ้ายังไม่ได้ join group → ส่ง JoinGroup request
   ├─ ถ้า rebalance อยู่ → รอ
   ├─ ถ้าพร้อม → fetch messages จาก assigned partitions
   └─ ส่ง heartbeat ไปด้วย

⚠️ สำคัญ: poll() ไม่ใช่แค่ดึง data!
   - มันส่ง heartbeat
   - มันจัดการ rebalance
   - ถ้าไม่ poll() นานเกิน max.poll.interval.ms → ถูกเตะออกจาก group!
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ถ้า business logic ใช้เวลานาน (เช่น process message ใช้เวลา 10 นาที) ให้เพิ่ม <code>max.poll.interval.ms</code> ให้พอ ไม่งั้น consumer จะถูก kick out จาก group แล้ว rebalance → message ถูก process ซ้ำ!

<br><br>อีกวิธีคือลด <code>max.poll.records</code> ให้แต่ละ poll ดึง records น้อยลง process เสร็จเร็วขึ้น
</div>

<h2>Consumer Configuration Cheat Sheet</h2>

<table>
  <tr><th>Config</th><th>Default</th><th>Recommended</th><th>หมายเหตุ</th></tr>
  <tr><td>enable.auto.commit</td><td>true</td><td>false</td><td>ใช้ manual commit ใน prod</td></tr>
  <tr><td>auto.offset.reset</td><td>latest</td><td>earliest</td><td>อ่านตั้งแต่ต้นเมื่อ group ใหม่</td></tr>
  <tr><td>session.timeout.ms</td><td>45000</td><td>45000</td><td>เวลาก่อนถูก kick</td></tr>
  <tr><td>max.poll.interval.ms</td><td>300000</td><td>ตาม workload</td><td>ต้อง > processing time</td></tr>
  <tr><td>max.poll.records</td><td>500</td><td>100-1000</td><td>ตาม processing speed</td></tr>
  <tr><td>fetch.min.bytes</td><td>1</td><td>1-1048576</td><td>ยิ่งมาก ยิ่ง batch ดี</td></tr>
</table>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>เขียน consumer ที่ใช้ manual commit โดย commit ทุก 50 messages</li>
  <li>ทดลอง: ส่ง 1000 messages แล้ว kill consumer ที่ message #500 (ก่อน commit) → restart consumer → ดูว่า replay จาก offset ไหน?</li>
  <li>เขียน consumer ที่มี graceful shutdown (handle SIGTERM) และ commit ก่อนปิด</li>
  <li>ทดลอง consumer lag: ส่ง message เร็วมาก แล้วดู lag ผ่าน Kafka UI</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: auto.offset.reset=earliest vs latest ต่างกันยังไง?</strong><br>
  A: earliest = อ่านตั้งแต่ message แรกสุดที่ยังอยู่ ใช้เมื่อไม่อยากพลาดข้อมูล latest = อ่านแค่ message ใหม่ที่เข้ามาหลัง consumer start ใช้เมื่อไม่สนข้อมูลเก่า<br>
  <em>สำคัญ: config นี้ใช้เฉพาะตอน consumer group ใหม่ หรือ offset ที่ commit ไว้หมดอายุแล้ว</em></li>
  <li><strong>Q: ถ้า consumer ตาย จะเกิดอะไรขึ้น?</strong><br>
  A: หลังจาก session.timeout.ms ผ่านไปโดยไม่มี heartbeat → broker จะ trigger rebalance → partition ที่ consumer ตัวนั้นรับผิดชอบจะถูก assign ให้ consumer ตัวอื่นใน group → consumer ตัวใหม่จะอ่านต่อจาก last committed offset</li>
</ol>
</div>
`
  },
  {
    number: 4,
    slug: 'consumer-groups',
    emoji: '👥',
    title: 'Consumer Groups & Offsets',
    content: `
<h2>👥 ทำไม Consumer Groups ถึงเป็น Killer Feature ของ Kafka?</h2>

<p>ลองนึกภาพ: ระบบ order processing ของพี่ต้องรับ 10,000 orders/sec แต่ consumer 1 ตัว process ได้แค่ 2,000 orders/sec จะทำยังไง?</p>

<p>คำตอบคือ <strong>Consumer Group</strong> — เพิ่ม consumer 5 ตัวใน group เดียวกัน แต่ละตัวรับ 2,000 orders/sec → รวมกันได้ 10,000 orders/sec!</p>

<h2>🧠 วิธีคิด: Consumer Group เหมือนทีมงาน</h2>

<pre><code class="language-text">
Topic: orders (6 partitions)

Consumer Group A: "order-processing"
┌──────────┐ ┌──────────┐ ┌──────────┐
│Consumer 1│ │Consumer 2│ │Consumer 3│
│ P0, P1   │ │ P2, P3   │ │ P4, P5   │
└──────────┘ └──────────┘ └──────────┘
แต่ละ consumer รับ 2 partitions → แบ่งงานกัน

Consumer Group B: "analytics"
┌──────────────────┐ ┌──────────────────┐
│   Consumer 1     │ │   Consumer 2     │
│   P0, P1, P2     │ │   P3, P4, P5     │
└──────────────────┘ └──────────────────┘
Group B เห็นข้อมูลเดียวกัน! (independent consumption)
</code></pre>

<p><strong>กฎสำคัญ:</strong> 1 Partition → ถูกอ่านโดย Consumer ได้แค่ <strong>1 ตัว</strong> ต่อ Group (ไม่งั้น ordering เสีย)</p>

<h2>Rebalancing — เมื่อ Consumer เปลี่ยนแปลง</h2>

<pre><code class="language-text">
สถานการณ์ 1: Consumer ใหม่เข้า group
Before:  C1=[P0,P1,P2], C2=[P3,P4,P5]
After:   C1=[P0,P1], C2=[P2,P3], C3=[P4,P5]  ← rebalance!

สถานการณ์ 2: Consumer ตาย
Before:  C1=[P0,P1], C2=[P2,P3], C3=[P4,P5]
After:   C1=[P0,P1,P2], C2=[P3,P4,P5]  ← rebalance!

สถานการณ์ 3: Consumer มากกว่า Partition
Topic มี 3 partitions, Consumer มี 5 ตัว
C1=[P0], C2=[P1], C3=[P2], C4=[], C5=[]
→ C4 กับ C5 นั่งว่าง! (idle)
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>Rebalance Storm</strong> — ถ้า consumer process นานเกิน <code>max.poll.interval.ms</code> → ถูก kick → rebalance → consumer กลับมา → rebalance อีก → วนลูป! วิธีแก้: เพิ่ม max.poll.interval.ms หรือลด max.poll.records</li>
  <li><strong>Consumer มากกว่า Partition</strong> — consumer ที่เกินจะนั่งเฉย ๆ กิน resource เปล่า ตั้ง partitions ≥ max consumers ที่จะมี</li>
</ul>
</div>

<h2>Partition Assignment Strategies</h2>

<table>
  <tr><th>Strategy</th><th>วิธีการ</th><th>ข้อดี</th><th>ข้อเสีย</th></tr>
  <tr><td><code>RangeAssignor</code></td><td>แบ่ง partition เรียงลำดับ</td><td>Simple</td><td>ไม่สม่ำเสมอ</td></tr>
  <tr><td><code>RoundRobinAssignor</code></td><td>วน assign ทีละ partition</td><td>กระจายดี</td><td>Rebalance ใหญ่</td></tr>
  <tr><td><code>StickyAssignor</code></td><td>พยายามคง assignment เดิม</td><td>Rebalance น้อย</td><td>ซับซ้อนกว่า</td></tr>
  <tr><td><code>CooperativeStickyAssignor</code></td><td>Sticky + incremental rebalance</td><td>Best practice ✅</td><td>Kafka 2.4+</td></tr>
</table>

<pre><code class="language-python"># ใช้ CooperativeStickyAssignor (แนะนำ!)
consumer = Consumer({
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'my-group',
    'partition.assignment.strategy': 'cooperative-sticky',
    # ด้วย cooperative protocol: consumer ไม่ต้องหยุดทำงานทั้งหมดระหว่าง rebalance
    # แค่ partition ที่ต้อง reassign เท่านั้นที่ถูก revoke
})
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> <code>CooperativeStickyAssignor</code> เป็น game changer! ใน eager protocol (Range, RoundRobin) ทุก consumer ต้องหยุดทำงาน + revoke ทุก partition ระหว่าง rebalance แต่ cooperative protocol จะ revoke เฉพาะ partition ที่ต้องย้าย → downtime น้อยมาก
</div>

<h2>Static Group Membership — ลด Rebalance</h2>

<pre><code class="language-python"># ปกติ: consumer restart = ถูกมองว่าเป็น consumer ใหม่ = rebalance ทุกครั้ง!
# Static membership: consumer มี identity คงที่

consumer = Consumer({
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'order-processing',
    'group.instance.id': 'consumer-host-1',  # ← static identity!
    'session.timeout.ms': 300000,  # 5 นาที (เพิ่มให้นานพอ deploy)
})

# ข้อดี:
# - restart consumer ภายใน session.timeout → ไม่ rebalance
# - ได้ partition เดิมกลับมา
# - เหมาะกับ rolling deployment
</code></pre>

<h2>Exactly-Once Semantics (EOS) — จอกศักดิ์สิทธิ์</h2>

<pre><code class="language-text">
Delivery Semantics:

1. At-Most-Once:  commit ก่อน process → ถ้า process fail = ข้อมูลหาย
2. At-Least-Once: process ก่อน commit → ถ้า commit fail = process ซ้ำ (duplicate)
3. Exactly-Once:  process + commit ใน transaction เดียวกัน → ไม่หาย ไม่ซ้ำ ✅
</code></pre>

<h3>Exactly-Once ทำได้ยังไง?</h3>

<pre><code class="language-python"># Pattern: Consume-Transform-Produce (with transactions)
from confluent_kafka import Consumer, Producer

consumer = Consumer({
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'eos-group',
    'enable.auto.commit': False,
    'isolation.level': 'read_committed',  # ← อ่านแค่ committed messages
})

producer = Producer({
    'bootstrap.servers': 'localhost:9092',
    'transactional.id': 'eos-producer-1',  # ← ต้องมี!
    'enable.idempotence': True,
})

# Initialize transactions
producer.init_transactions()

consumer.subscribe(['input-topic'])

while True:
    msg = consumer.poll(1.0)
    if msg is None or msg.error():
        continue

    # เริ่ม transaction
    producer.begin_transaction()
    try:
        # Transform & produce
        result = transform(msg.value())
        producer.produce('output-topic', value=result)

        # Commit offsets ภายใน transaction เดียวกัน
        producer.send_offsets_to_transaction(
            consumer.position(consumer.assignment()),
            consumer.consumer_group_metadata()
        )

        # Commit transaction (atomic: ทั้ง produce + offset commit)
        producer.commit_transaction()
    except Exception as e:
        producer.abort_transaction()  # rollback ทั้งหมด
        logger.error(f'Transaction aborted: {e}')
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Exactly-Once ใน Kafka ทำได้แค่ <strong>Kafka → Kafka</strong> (consume-transform-produce) ถ้าต้อง write ไป external system (เช่น Database) ต้องใช้ pattern <strong>Idempotent Consumer</strong> แทน:
<pre><code class="language-python"># Idempotent Consumer Pattern
def process_order(order):
    # ใช้ order_id เป็น idempotency key
    if db.exists(order['order_id']):
        return  # skip duplicate
    db.insert(order)  # idempotent write</code></pre>
</div>

<h2>Monitoring Consumer Lag</h2>

<pre><code class="language-bash"># ดู consumer lag ด้วย CLI
docker exec kafka kafka-consumer-groups \\
  --bootstrap-server localhost:29092 \\
  --describe \\
  --group order-processing-group

# Output:
# GROUP                  TOPIC    PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG
# order-processing-group orders   0          1500            1800            300
# order-processing-group orders   1          2000            2000            0
# order-processing-group orders   2          1200            1900            700
</code></pre>

<pre><code class="language-python"># Monitor lag programmatically
from confluent_kafka.admin import AdminClient, ConsumerGroupTopicPartitions
from confluent_kafka import TopicPartition

admin = AdminClient({'bootstrap.servers': 'localhost:9092'})

# ดู consumer groups ทั้งหมด
groups = admin.list_consumer_groups()
print("Consumer Groups:", [g.group_id for g in groups.result().valid])
</code></pre>

<h2>ตัวอย่าง: Scaling Consumer Group</h2>

<pre><code class="language-yaml"># docker-compose สำหรับ scale consumers
version: '3.8'
services:
  order-consumer:
    image: my-order-consumer:latest
    environment:
      KAFKA_BOOTSTRAP_SERVERS: kafka:29092
      KAFKA_GROUP_ID: order-processing
      KAFKA_TOPICS: orders
    deploy:
      replicas: 6  # 6 consumers for 6 partitions
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
</code></pre>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>สร้าง topic <code>events</code> ที่มี 6 partitions</li>
  <li>เปิด 3 consumer ใน group เดียวกัน แล้วดูว่าแต่ละตัวได้รับ partition ไหน</li>
  <li>kill consumer 1 ตัว แล้วสังเกต rebalance → partition ถูก reassign ยังไง?</li>
  <li>ลองเปิด consumer ตัวที่ 7 (มากกว่า partitions) แล้วดูว่าเกิดอะไรขึ้น</li>
  <li>Implement idempotent consumer ที่เขียนลง SQLite โดยใช้ event_id เป็น idempotency key</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: Consumer Group ใน Kafka ทำงานยังไง?</strong><br>
  A: Consumer Group คือกลุ่มของ consumers ที่แบ่งกันอ่าน partitions ภายใน group เดียวกัน 1 partition จะถูกอ่านโดย consumer แค่ 1 ตัว ทำให้ scale horizontally ได้ แต่ต่าง group สามารถอ่าน data เดียวกันได้อิสระ</li>
  <li><strong>Q: Exactly-once semantics ใน Kafka เป็นไปได้จริงไหม?</strong><br>
  A: ได้ สำหรับ Kafka-to-Kafka (consume-transform-produce) โดยใช้ transactions (transactional.id + idempotent producer + read_committed isolation) แต่สำหรับ external systems ต้องใช้ idempotent consumer pattern ซึ่งเป็น effectively exactly-once</li>
  <li><strong>Q: Rebalance คืออะไร ทำยังไงให้เกิดน้อย?</strong><br>
  A: Rebalance คือการ reassign partitions เมื่อ consumer เข้า/ออก group วิธีลด: ใช้ static group membership, CooperativeStickyAssignor, เพิ่ม session.timeout.ms, และ max.poll.interval.ms</li>
</ol>
</div>
`
  },
  {
    number: 5,
    slug: 'kafka-streams',
    emoji: '🌊',
    title: 'Kafka Streams',
    content: `
<h2>🌊 ทำไมต้อง Kafka Streams?</h2>

<p>สมมติพี่ต้องทำ <strong>real-time dashboard</strong> ที่แสดงยอดขายรายชั่วโมง ยอดสินค้าขายดี top 10 แบบ real-time ถ้าใช้ consumer ธรรมดาก็ทำได้ แต่ต้องเขียน code จัดการ state, windowing, aggregation เอง — งานเยอะมาก!</p>

<p><strong>Kafka Streams</strong> เป็น library (ไม่ใช่ separate cluster!) ที่ให้เราเขียน stream processing ได้ง่าย โดยจัดการ state, fault tolerance, scaling ให้อัตโนมัติ</p>

<h2>🧠 วิธีคิด: Stream vs Table</h2>

<pre><code class="language-text">
KStream (Event Stream) — "อะไรเกิดขึ้น"
─────────────────────────────────────────
Time   Event
10:01  User A bought iPhone      ← event 1
10:02  User B bought MacBook     ← event 2  
10:03  User A bought AirPods     ← event 3
→ ทุก event สำคัญ ไม่มีการ overwrite

KTable (Changelog) — "สถานะล่าสุดคืออะไร"
─────────────────────────────────────────
Key      Value (latest)
User A   { total_spent: 40,800 }    ← updated
User B   { total_spent: 59,900 }    ← latest
→ เก็บแค่ค่าล่าสุดของแต่ละ key (เหมือน table ใน DB)
</code></pre>

<p>กฎ: <strong>Stream + Stream = Stream</strong>, <strong>Table + Update = Table</strong>, <strong>Stream.groupBy().aggregate() = Table</strong></p>

<h2>Kafka Streams Architecture</h2>

<pre><code class="language-text">
Kafka Streams Application (เป็นแค่ Java/Python app ธรรมดา!)
┌─────────────────────────────────────┐
│  ┌─────────┐    ┌───────────────┐   │
│  │ Source   │───→│ Processor     │   │
│  │ (KStream)│    │ (filter, map, │   │
│  └─────────┘    │  aggregate)   │   │
│                  └──────┬────────┘   │
│                         │            │
│                  ┌──────▼────────┐   │
│                  │ State Store   │   │
│                  │ (RocksDB)     │   │
│                  └──────┬────────┘   │
│                         │            │
│                  ┌──────▼────────┐   │
│                  │ Sink          │   │
│                  │ (KStream/     │   │
│                  │  KTable)      │   │
│                  └───────────────┘   │
└─────────────────────────────────────┘
         ↕ changelog topics (fault tolerance)
     [Kafka Cluster]

ไม่ต้องติดตั้ง cluster แยก!
ไม่ต้อง YARN, Mesos, Kubernetes!
Deploy ได้เหมือน microservice ธรรมดา!
</code></pre>

<h2>Kafka Streams ใน Java</h2>

<pre><code class="language-java">// OrderStreamApp.java — Real-time order analytics
import org.apache.kafka.streams.*;
import org.apache.kafka.streams.kstream.*;
import org.apache.kafka.common.serialization.Serdes;
import java.time.Duration;
import java.util.Properties;

public class OrderStreamApp {

    public static void main(String[] args) {
        Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, "order-analytics");
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(StreamsConfig.PROCESSING_GUARANTEE_CONFIG, StreamsConfig.EXACTLY_ONCE_V2);

        StreamsBuilder builder = new StreamsBuilder();

        // 1. อ่าน orders topic เป็น KStream
        KStream&lt;String, String&gt; orders = builder.stream("orders");

        // 2. Filter เฉพาะ order ที่ amount > 1000
        KStream&lt;String, String&gt; highValueOrders = orders
            .filter((key, value) -> {
                JsonNode node = mapper.readTree(value);
                return node.get("amount").asDouble() > 1000;
            })
            .peek((key, value) -> System.out.println("High value: " + value));

        // 3. ส่งไป topic ใหม่
        highValueOrders.to("high-value-orders");

        // 4. Windowed Aggregation — ยอดขายรายชั่วโมง
        KTable&lt;Windowed&lt;String&gt;, Double&gt; hourlySales = orders
            .groupBy((key, value) -> {
                JsonNode node = mapper.readTree(value);
                return node.get("product_category").asText();
            })
            .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofHours(1)))
            .aggregate(
                () -> 0.0,  // initializer
                (key, value, aggregate) -> {
                    JsonNode node = mapper.readTree(value);
                    return aggregate + node.get("amount").asDouble();
                },
                Materialized.with(Serdes.String(), Serdes.Double())
            );

        // 5. Output ไป topic
        hourlySales.toStream()
            .map((windowedKey, total) -> KeyValue.pair(
                windowedKey.key(),
                String.format("{'category':'%s','hour':'%s','total':%.2f}",
                    windowedKey.key(),
                    windowedKey.window().startTime(),
                    total)
            ))
            .to("hourly-sales-report");

        // Start the stream
        KafkaStreams streams = new KafkaStreams(builder.build(), props);

        // Graceful shutdown
        Runtime.getRuntime().addShutdownHook(new Thread(streams::close));

        streams.start();
    }
}
</code></pre>

<h2>Kafka Streams ใน Python (ใช้ Faust)</h2>

<pre><code class="language-python"># faust_stream.py — Python stream processing
import faust
from datetime import timedelta

app = faust.App(
    'order-analytics',
    broker='kafka://localhost:9092',
    store='rocksdb://',
    topic_replication_factor=3,
)

# Define models
class Order(faust.Record):
    order_id: str
    customer_id: str
    product_category: str
    amount: float
    timestamp: float

# Source topic
orders_topic = app.topic('orders', value_type=Order)

# Output topics
high_value_topic = app.topic('high-value-orders', value_type=Order)

# KTable equivalent — running total per category
category_totals = app.Table(
    'category-totals',
    default=float,
    partitions=6,
)

# Windowed table — hourly sales
hourly_sales = app.Table(
    'hourly-sales',
    default=float,
).hopping(size=timedelta(hours=1), step=timedelta(minutes=10), expires=timedelta(hours=24))


@app.agent(orders_topic)
async def process_orders(orders):
    """Process each order event."""
    async for order in orders:
        # Filter high-value orders
        if order.amount > 1000:
            await high_value_topic.send(value=order)

        # Update running total (KTable semantics)
        category_totals[order.product_category] += order.amount

        # Update windowed aggregation
        hourly_sales[order.product_category] += order.amount


@app.page('/api/category-totals/')
async def get_totals(web, request):
    """REST API endpoint for querying state."""
    return web.json({
        k: v for k, v in category_totals.items()
    })


@app.page('/api/hourly-sales/{category}/')
async def get_hourly(web, request, category):
    """Query windowed state."""
    return web.json({
        'category': category,
        'hourly_total': hourly_sales[category].current()
    })


if __name__ == '__main__':
    app.main()
</code></pre>

<pre><code class="language-bash"># Run Faust worker
python faust_stream.py worker -l info

# ทดสอบ query state
curl http://localhost:6066/api/category-totals/
</code></pre>

<h2>Joins — รวมข้อมูลจากหลาย Stream</h2>

<pre><code class="language-text">
Join Types ใน Kafka Streams:

1. KStream-KStream Join (Windowed)
   Orders × Payments → Completed Orders
   (ต้องอยู่ใน time window เดียวกัน)

2. KStream-KTable Join (Enrichment)  
   Orders × Customer Table → Enriched Orders
   (เหมือน LEFT JOIN ใน SQL)

3. KTable-KTable Join
   Customer Table × Address Table → Full Customer Profile
   (เหมือน JOIN ใน SQL)
</code></pre>

<pre><code class="language-java">// KStream-KTable Join Example
// Enrich orders with customer information

KStream&lt;String, Order&gt; orders = builder.stream("orders");
KTable&lt;String, Customer&gt; customers = builder.table("customers");

KStream&lt;String, EnrichedOrder&gt; enrichedOrders = orders.join(
    customers,
    (order, customer) -> new EnrichedOrder(
        order.getOrderId(),
        customer.getName(),
        customer.getEmail(),
        order.getAmount()
    )
);

enrichedOrders.to("enriched-orders");
</code></pre>

<h2>Windowing — Time-Based Aggregation</h2>

<pre><code class="language-text">
Window Types:

1. Tumbling Window (ไม่ overlap)
   |----1hr----|----1hr----|----1hr----|
   กลุ่มข้อมูล ชม.1  ชม.2  ชม.3

2. Hopping Window (overlap)
   |----1hr----|
        |----1hr----|
             |----1hr----|
   window 1hr, advance 30min → มี overlap

3. Sliding Window (event-driven)
   trigger ทุกครั้งที่มี event เข้ามา
   ดูข้อมูลย้อนหลัง N เวลา

4. Session Window (gap-based)
   |--session--|  gap  |--session--|
   รวม events ที่เข้ามาต่อเนื่อง หยุดเมื่อ gap > threshold
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> เลือก Window Type ตาม use case:
<ul>
  <li><strong>Tumbling</strong>: รายงานรายชั่วโมง, daily summary</li>
  <li><strong>Hopping</strong>: moving average, sliding metrics</li>
  <li><strong>Session</strong>: user session analysis, click stream</li>
  <li><strong>Sliding</strong>: alerting (เช่น error rate ใน 5 นาทีล่าสุด > 10%)</li>
</ul>
</div>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>State Store โตไม่หยุด</strong> — ถ้าใช้ KTable หรือ windowed aggregation โดยไม่ตั้ง retention → state store (RocksDB) จะโตจน disk เต็ม! ต้องตั้ง <code>Materialized.withRetention(Duration.ofDays(7))</code></li>
  <li><strong>Repartitioning</strong> — ถ้า groupBy() เปลี่ยน key → Kafka Streams จะสร้าง repartition topic อัตโนมัติ ระวังว่าจะเพิ่ม latency และ disk usage</li>
  <li><strong>สับสนระหว่าง Faust กับ Kafka Streams</strong> — Faust เป็น Python library ที่ inspired by Kafka Streams แต่ไม่ใช่ official Kafka Streams ถ้าต้องการ exactly-once ที่แท้จริงต้องใช้ Java Kafka Streams</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>เขียน Kafka Streams app (Java) หรือ Faust app (Python) ที่ count จำนวน order ต่อ product_category แบบ real-time</li>
  <li>เพิ่ม Tumbling Window 1 ชั่วโมง เพื่อดูยอดขายรายชั่วโมง</li>
  <li>ทำ KStream-KTable join: enrich order events ด้วย customer data</li>
  <li>สร้าง REST API endpoint ที่ query interactive state store</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: KStream vs KTable ต่างกันยังไง?</strong><br>
  A: KStream เป็น unbounded sequence ของ events ทุก record เป็น insert ใหม่ ส่วน KTable เป็น changelog ที่ record ใหม่จะ update ค่าเก่าของ key เดียวกัน เหมือน table ใน database</li>
  <li><strong>Q: Kafka Streams ต่างจาก Spark Streaming / Flink ยังไง?</strong><br>
  A: Kafka Streams เป็นแค่ library ที่ embed ใน application ไม่ต้อง separate cluster ส่วน Spark/Flink เป็น distributed processing framework ที่ต้อง cluster แต่รองรับ data source ที่หลากหลายกว่า Kafka Streams เหมาะกับ Kafka-centric architecture</li>
  <li><strong>Q: State Store ใน Kafka Streams ทำงานยังไง?</strong><br>
  A: ใช้ RocksDB (embedded key-value store) เก็บ state ไว้ local แล้ว backup ไปยัง changelog topic ใน Kafka ถ้า app restart จะ restore state จาก changelog topic กลับมา → fault tolerant</li>
</ol>
</div>
`
  },
  {
    number: 6,
    slug: 'kafka-connect',
    emoji: '🔌',
    title: 'Kafka Connect',
    content: `
<h2>🔌 ทำไมต้อง Kafka Connect?</h2>

<p>ลองนึกภาพ: พี่ต้องทำ data pipeline จาก MySQL → Kafka → Elasticsearch แบบ real-time ถ้าเขียน producer/consumer เอง ต้องจัดการ:</p>
<ul>
  <li>อ่าน MySQL binlog → ยาก</li>
  <li>Handle schema changes → ยากมาก</li>
  <li>Exactly-once delivery → ยากที่สุด</li>
  <li>Error handling, retry, monitoring → ปวดหัว</li>
</ul>

<p><strong>Kafka Connect</strong> ทำสิ่งเหล่านี้ให้ทั้งหมด! แค่เขียน config file ไม่ต้องเขียนโค้ดเลย</p>

<h2>🧠 วิธีคิด: Connect เหมือนปลั๊กไฟ</h2>

<pre><code class="language-text">
Source Systems          Kafka Connect          Kafka          Kafka Connect          Sink Systems
┌──────────┐        ┌───────────────┐     ┌──────────┐    ┌───────────────┐     ┌──────────┐
│  MySQL   │───────→│ Source        │────→│  Kafka   │───→│ Sink          │────→│  Elastic │
│  Postgres│        │ Connector     │     │  Topics  │    │ Connector     │     │  search  │
│  MongoDB │        │ (Debezium)    │     │          │    │               │     │          │
│  Files   │        └───────────────┘     └──────────┘    └───────────────┘     │  S3      │
│  APIs    │                                                                    │  JDBC    │
└──────────┘                                                                    └──────────┘

ไม่ต้องเขียน code! แค่ config JSON/YAML
</code></pre>

<h2>ตั้ง Kafka Connect ด้วย Docker</h2>

<pre><code class="language-yaml"># docker-compose-connect.yml
version: '3.8'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on: [zookeeper]
    ports: ["9092:9092"]
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,EXTERNAL://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,EXTERNAL:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  schema-registry:
    image: confluentinc/cp-schema-registry:7.5.0
    depends_on: [kafka]
    ports: ["8081:8081"]
    environment:
      SCHEMA_REGISTRY_HOST_NAME: schema-registry
      SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS: kafka:29092

  kafka-connect:
    image: confluentinc/cp-kafka-connect:7.5.0
    depends_on: [kafka, schema-registry]
    ports: ["8083:8083"]
    environment:
      CONNECT_BOOTSTRAP_SERVERS: kafka:29092
      CONNECT_REST_PORT: 8083
      CONNECT_GROUP_ID: connect-cluster
      CONNECT_CONFIG_STORAGE_TOPIC: _connect-configs
      CONNECT_OFFSET_STORAGE_TOPIC: _connect-offsets
      CONNECT_STATUS_STORAGE_TOPIC: _connect-status
      CONNECT_CONFIG_STORAGE_REPLICATION_FACTOR: 1
      CONNECT_OFFSET_STORAGE_REPLICATION_FACTOR: 1
      CONNECT_STATUS_STORAGE_REPLICATION_FACTOR: 1
      CONNECT_KEY_CONVERTER: org.apache.kafka.connect.storage.StringConverter
      CONNECT_VALUE_CONVERTER: io.confluent.connect.avro.AvroConverter
      CONNECT_VALUE_CONVERTER_SCHEMA_REGISTRY_URL: http://schema-registry:8081
      CONNECT_PLUGIN_PATH: /usr/share/java,/usr/share/confluent-hub-components
    command:
      - bash
      - -c
      - |
        # Install connectors
        confluent-hub install --no-prompt debezium/debezium-connector-mysql:2.4
        confluent-hub install --no-prompt confluentinc/kafka-connect-elasticsearch:14.0
        confluent-hub install --no-prompt confluentinc/kafka-connect-s3:10.5
        # Start Connect
        /etc/confluent/docker/run

  mysql:
    image: mysql:8.0
    ports: ["3306:3306"]
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: ecommerce
    command: --server-id=1 --log-bin=mysql-bin --binlog-format=ROW
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

  elasticsearch:
    image: elasticsearch:8.10.0
    ports: ["9200:9200"]
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
</code></pre>

<h2>Debezium CDC — Source Connector</h2>

<p><strong>CDC (Change Data Capture)</strong> = จับทุกการเปลี่ยนแปลงใน database (INSERT, UPDATE, DELETE) แล้วส่งเป็น event เข้า Kafka แบบ real-time</p>

<pre><code class="language-bash"># สร้าง Debezium MySQL Source Connector
curl -X POST http://localhost:8083/connectors -H "Content-Type: application/json" -d '{
  "name": "mysql-source-connector",
  "config": {
    "connector.class": "io.debezium.connector.mysql.MySqlConnector",
    "tasks.max": "1",

    "database.hostname": "mysql",
    "database.port": "3306",
    "database.user": "root",
    "database.password": "password",
    "database.server.id": "1",

    "topic.prefix": "cdc",
    "database.include.list": "ecommerce",
    "table.include.list": "ecommerce.orders,ecommerce.customers",

    "schema.history.internal.kafka.bootstrap.servers": "kafka:29092",
    "schema.history.internal.kafka.topic": "schema-changes.ecommerce",

    "include.schema.changes": "true",
    "transforms": "route",
    "transforms.route.type": "org.apache.kafka.connect.transforms.RegexRouter",
    "transforms.route.regex": "cdc\\\\.ecommerce\\\\.(.*)",
    "transforms.route.replacement": "db.$1",

    "snapshot.mode": "initial",
    "decimal.handling.mode": "double",

    "key.converter": "org.apache.kafka.connect.json.JsonConverter",
    "value.converter": "org.apache.kafka.connect.json.JsonConverter",
    "key.converter.schemas.enable": "true",
    "value.converter.schemas.enable": "true"
  }
}'
</code></pre>

<pre><code class="language-text">
CDC Event Format (Debezium):
{
  "before": null,                    ← ค่าก่อนเปลี่ยน (null = INSERT)
  "after": {                         ← ค่าหลังเปลี่ยน
    "order_id": 1001,
    "customer_id": "CUST-123",
    "amount": 1500.00,
    "status": "pending"
  },
  "source": {
    "connector": "mysql",
    "db": "ecommerce",
    "table": "orders",
    "ts_ms": 1700000000000
  },
  "op": "c",                         ← c=create, u=update, d=delete, r=read(snapshot)
  "ts_ms": 1700000000123
}
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Debezium <code>snapshot.mode</code> ที่ใช้บ่อย:
<ul>
  <li><code>initial</code> — snapshot ข้อมูลทั้งหมดที่มีอยู่แล้ว + stream changes ต่อ (ใช้บ่อยสุด)</li>
  <li><code>schema_only</code> — ไม่ snapshot data, แค่จับ schema + stream changes ใหม่</li>
  <li><code>never</code> — ไม่ snapshot เลย (ใช้เมื่อ resume connector เดิม)</li>
</ul>
</div>

<h2>Elasticsearch Sink Connector</h2>

<pre><code class="language-bash"># สร้าง Elasticsearch Sink Connector
curl -X POST http://localhost:8083/connectors -H "Content-Type: application/json" -d '{
  "name": "elasticsearch-sink",
  "config": {
    "connector.class": "io.confluent.connect.elasticsearch.ElasticsearchSinkConnector",
    "tasks.max": "3",

    "topics": "db.orders",
    "connection.url": "http://elasticsearch:9200",

    "type.name": "_doc",
    "key.ignore": "false",
    "schema.ignore": "true",

    "transforms": "extractAfter",
    "transforms.extractAfter.type": "io.debezium.transforms.ExtractNewRecordState",
    "transforms.extractAfter.drop.tombstones": "true",
    "transforms.extractAfter.delete.handling.mode": "drop",

    "behavior.on.null.values": "delete",
    "write.method": "upsert",

    "batch.size": 1000,
    "flush.timeout.ms": 10000,

    "errors.tolerance": "all",
    "errors.deadletterqueue.topic.name": "dlq-elasticsearch",
    "errors.deadletterqueue.topic.replication.factor": 1
  }
}'
</code></pre>

<h2>S3 Sink Connector — Data Lake Ingestion</h2>

<pre><code class="language-bash"># S3 Sink — เขียน Kafka data ลง S3 เป็น Parquet
curl -X POST http://localhost:8083/connectors -H "Content-Type: application/json" -d '{
  "name": "s3-sink",
  "config": {
    "connector.class": "io.confluent.connect.s3.S3SinkConnector",
    "tasks.max": "6",

    "topics": "db.orders",
    "s3.bucket.name": "my-data-lake",
    "s3.region": "ap-southeast-1",

    "flush.size": 10000,
    "rotate.interval.ms": 3600000,

    "storage.class": "io.confluent.connect.s3.storage.S3Storage",
    "format.class": "io.confluent.connect.s3.format.parquet.ParquetFormat",
    "parquet.codec": "snappy",

    "partitioner.class": "io.confluent.connect.storage.partitioner.TimeBasedPartitioner",
    "path.format": "'year'=YYYY/'month'=MM/'day'=dd/'hour'=HH",
    "partition.duration.ms": 3600000,
    "locale": "en-US",
    "timezone": "Asia/Bangkok",

    "schema.compatibility": "NONE"
  }
}'
</code></pre>

<pre><code class="language-text">
S3 Output Structure:
s3://my-data-lake/topics/db.orders/
├── year=2024/month=01/day=15/hour=10/
│   ├── db.orders+0+0000000000.parquet
│   ├── db.orders+1+0000000000.parquet
│   └── db.orders+2+0000000000.parquet
├── year=2024/month=01/day=15/hour=11/
│   └── ...
</code></pre>

<h2>Connector Management API</h2>

<pre><code class="language-bash"># ดู connectors ทั้งหมด
curl http://localhost:8083/connectors | jq .

# ดู status ของ connector
curl http://localhost:8083/connectors/mysql-source-connector/status | jq .

# Pause connector
curl -X PUT http://localhost:8083/connectors/mysql-source-connector/pause

# Resume connector
curl -X PUT http://localhost:8083/connectors/mysql-source-connector/resume

# Restart failed task
curl -X POST http://localhost:8083/connectors/mysql-source-connector/tasks/0/restart

# Delete connector
curl -X DELETE http://localhost:8083/connectors/mysql-source-connector

# Update connector config
curl -X PUT http://localhost:8083/connectors/mysql-source-connector/config \\
  -H "Content-Type: application/json" \\
  -d '{ ... updated config ... }'
</code></pre>

<pre><code class="language-python"># Python script สำหรับ monitor connectors
import requests
import json

CONNECT_URL = 'http://localhost:8083'

def check_connectors():
    connectors = requests.get(f'{CONNECT_URL}/connectors').json()

    for name in connectors:
        status = requests.get(f'{CONNECT_URL}/connectors/{name}/status').json()
        connector_state = status['connector']['state']
        tasks = status['tasks']

        print(f'\\n📌 {name}: {connector_state}')
        for task in tasks:
            state = task['state']
            emoji = '✅' if state == 'RUNNING' else '❌'
            print(f'  {emoji} Task {task["id"]}: {state}')
            if state == 'FAILED':
                print(f'     Error: {task.get("trace", "N/A")[:200]}')

check_connectors()
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong>
<ul>
  <li><strong>MySQL binlog ถูกลบก่อน connector อ่านจบ</strong> — ตั้ง <code>binlog_expire_logs_seconds</code> ให้นานพอ (อย่างน้อย 7 วัน) ไม่งั้น Debezium จะ error เพราะหา binlog position ไม่เจอ</li>
  <li><strong>Schema Evolution</strong> — ถ้า ALTER TABLE ใน MySQL ต้องมั่นใจว่า Debezium handle ได้ (ส่วนใหญ่ ADD COLUMN ไม่มีปัญหา แต่ RENAME COLUMN อาจ break consumer)</li>
  <li><strong>ลืมตั้ง Dead Letter Queue</strong> — ถ้า message ไม่สามารถ process ได้ (เช่น schema mismatch) โดยไม่มี DLQ → connector จะ stuck ไม่ยอมไปต่อ</li>
  <li><strong>tasks.max ไม่ตรงกับ partitions</strong> — ถ้า topic มี 6 partitions แต่ tasks.max=1 → bottleneck! ตั้ง tasks.max ≤ จำนวน partitions</li>
</ul>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด:</strong>
<ol>
  <li>ตั้ง Kafka Connect + MySQL + Debezium ด้วย docker-compose</li>
  <li>สร้าง table <code>orders</code> ใน MySQL แล้วสร้าง Debezium Source Connector</li>
  <li>INSERT/UPDATE/DELETE ข้อมูลใน MySQL แล้วดู CDC events ใน Kafka topic</li>
  <li>สร้าง Elasticsearch Sink Connector เพื่อ sync data ไป Elasticsearch แบบ real-time</li>
  <li>ทดลอง ALTER TABLE แล้วดูว่า Debezium handle schema change ยังไง</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: CDC คืออะไร ทำไมถึงดีกว่า batch ETL?</strong><br>
  A: CDC (Change Data Capture) จับทุกการเปลี่ยนแปลงใน database แบบ real-time ผ่าน binlog/WAL ต่างจาก batch ETL ที่ต้องรอ schedule (เช่น ทุกชั่วโมง) CDC ให้ latency ระดับวินาที, ไม่ miss intermediate changes, และไม่ทำ full table scan ที่ load DB หนัก</li>
  <li><strong>Q: Kafka Connect ต่างจากการเขียน Producer/Consumer เองยังไง?</strong><br>
  A: Kafka Connect ให้ framework สำเร็จรูปที่จัดการ fault tolerance, offset tracking, scalability, config management, monitoring ให้อัตโนมัติ ไม่ต้องเขียน code ที่เป็น boilerplate ทั้งหมดเอง</li>
</ol>
</div>
`
  },
  {
    number: 7,
    slug: 'production',
    emoji: '🚀',
    title: 'Production Kafka',
    content: `
<h2>🚀 เมื่อต้องเอา Kafka ขึ้น Production จริง</h2>

<p>การตั้ง Kafka ใน local ง่าย แต่การ run Kafka ใน production ที่ต้องรับ traffic หลักล้าน messages/sec ตลอด 24/7 นั้น <strong>ยากกว่าหลายเท่า</strong> ในบทนี้จะครอบคลุมทุกสิ่งที่ต้องรู้</p>

<h2>🧠 วิธีคิด: Production Checklist</h2>

<pre><code class="language-text">
Production Kafka Checklist:

□ Hardware & Capacity Planning
□ Broker Configuration Tuning
□ Topic Design & Naming Convention
□ Monitoring & Alerting
□ Security (AuthN + AuthZ + Encryption)
□ Backup & Disaster Recovery
□ Operational Runbooks
□ Performance Testing
</code></pre>

<h2>1. Hardware & Capacity Planning</h2>

<pre><code class="language-text">
Sizing Formula:

1. Throughput Requirement:
   - Target: 100,000 msgs/sec × 1 KB/msg = 100 MB/sec
   - With replication (RF=3): 100 × 3 = 300 MB/sec total disk write

2. Storage:
   - 100 MB/sec × 86400 sec/day = 8.6 TB/day raw
   - With RF=3: 25.8 TB/day
   - Retention 7 days: 180 TB
   - Add 30% headroom: ~234 TB

3. Brokers:
   - Each broker handles ~100 MB/sec write
   - 300 MB/sec ÷ 100 MB/sec = 3 brokers minimum
   - For fault tolerance: 5-6 brokers

4. Recommended Hardware per Broker:
   - CPU: 8-16 cores
   - RAM: 32-64 GB (OS page cache เป็นสิ่งสำคัญ!)
   - Disk: 6-12 × 2TB SSD (RAID 10 หรือ JBOD)
   - Network: 10 Gbps
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Kafka ใช้ <strong>OS page cache</strong> เป็นหลักในการ cache data ไม่ใช่ JVM heap ดังนั้น:
<ul>
  <li>ตั้ง JVM heap แค่ 4-6 GB (อย่าเกิน 8 GB)</li>
  <li>เหลือ RAM ให้ OS page cache ให้มากที่สุด</li>
  <li>ถ้ามี RAM 64 GB: JVM 6 GB + Page Cache ~58 GB = consumer อ่านได้เร็วมากเพราะ data อยู่ใน memory</li>
</ul>
</div>

<h2>2. Broker Configuration สำหรับ Production</h2>

<pre><code class="language-properties"># server.properties — Production Configuration

# === Basic ===
broker.id=1
log.dirs=/data/kafka-logs-1,/data/kafka-logs-2  # JBOD: หลาย disk
num.partitions=6
default.replication.factor=3
min.insync.replicas=2

# === Network ===
num.network.threads=8
num.io.threads=16
socket.send.buffer.bytes=102400
socket.receive.buffer.bytes=102400
socket.request.max.bytes=104857600

# === Log/Topic ===
log.retention.hours=168           # 7 days
log.retention.bytes=-1            # unlimited (ใช้ time-based)
log.segment.bytes=1073741824      # 1 GB segments
log.cleanup.policy=delete

# === Replication ===
unclean.leader.election.enable=false  # ❗ ป้องกัน data loss
replica.lag.time.max.ms=30000
num.replica.fetchers=4

# === Performance ===
compression.type=producer           # ใช้ compression ที่ producer ตั้ง
message.max.bytes=1048576            # 1 MB max message
log.flush.interval.messages=10000
log.flush.interval.ms=1000

# === ZooKeeper / KRaft ===
zookeeper.connect=zk1:2181,zk2:2181,zk3:2181
zookeeper.session.timeout.ms=18000
</code></pre>

<h2>3. Monitoring — สิ่งที่ต้องดู</h2>

<h3>Key Metrics ที่ต้อง Alert</h3>

<table>
  <tr><th>Metric</th><th>Warning</th><th>Critical</th><th>หมายเหตุ</th></tr>
  <tr><td>Under-replicated partitions</td><td>> 0</td><td>> 0 นานกว่า 5 นาที</td><td>Data อาจหายถ้า broker ล่ม</td></tr>
  <tr><td>Consumer Lag</td><td>> 10,000</td><td>> 100,000</td><td>Consumer อ่านไม่ทัน</td></tr>
  <tr><td>ISR Shrinks/sec</td><td>> 0</td><td>> 5</td><td>Replica ตาม leader ไม่ทัน</td></tr>
  <tr><td>Request Handler Idle %</td><td>< 30%</td><td>< 20%</td><td>Broker overloaded</td></tr>
  <tr><td>Disk Usage %</td><td>> 70%</td><td>> 85%</td><td>เพิ่ม disk หรือลด retention</td></tr>
  <tr><td>Produce Latency p99</td><td>> 100ms</td><td>> 500ms</td><td>Performance issue</td></tr>
  <tr><td>Network Usage %</td><td>> 70%</td><td>> 90%</td><td>Network bottleneck</td></tr>
</table>

<h3>Prometheus + Grafana Setup</h3>

<pre><code class="language-yaml"># docker-compose-monitoring.yml
services:
  kafka-exporter:
    image: danielqsj/kafka-exporter:latest
    container_name: kafka-exporter
    ports: ["9308:9308"]
    command:
      - --kafka.server=kafka-1:29092
      - --kafka.server=kafka-2:29092
      - --kafka.server=kafka-3:29092
    depends_on: [kafka-1, kafka-2, kafka-3]

  jmx-exporter:
    # JMX exporter ต้องติดตั้งเป็น Java agent ใน Kafka broker
    # KAFKA_OPTS="-javaagent:/opt/jmx-exporter.jar=7071:/opt/kafka-jmx-config.yml"

  prometheus:
    image: prom/prometheus:latest
    ports: ["9090:9090"]
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana:latest
    ports: ["3000:3000"]
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin
</code></pre>

<pre><code class="language-yaml"># prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'kafka-exporter'
    static_configs:
      - targets: ['kafka-exporter:9308']

  - job_name: 'kafka-jmx'
    static_configs:
      - targets:
        - 'kafka-1:7071'
        - 'kafka-2:7071'
        - 'kafka-3:7071'
</code></pre>

<pre><code class="language-python"># alerting_script.py — Custom alerting
import requests
import time
from datetime import datetime

KAFKA_EXPORTER_URL = 'http://localhost:9308/metrics'
SLACK_WEBHOOK = 'https://hooks.slack.com/services/xxx'

def check_consumer_lag():
    """Check consumer lag and alert if too high."""
    response = requests.get(KAFKA_EXPORTER_URL)
    metrics = response.text

    for line in metrics.split('\\n'):
        if 'kafka_consumergroup_lag ' in line and not line.startswith('#'):
            parts = line.split()
            metric_name = parts[0]
            lag = float(parts[1])

            if lag > 100000:
                alert = {
                    'text': f'🚨 *CRITICAL* Consumer Lag Alert!\\n'
                            f'Metric: {metric_name}\\n'
                            f'Lag: {lag:,.0f}\\n'
                            f'Time: {datetime.now().isoformat()}'
                }
                requests.post(SLACK_WEBHOOK, json=alert)
                print(f'Alert sent: {metric_name} lag={lag}')

while True:
    check_consumer_lag()
    time.sleep(60)
</code></pre>

<h2>4. Security</h2>

<h3>Authentication (SASL/SCRAM)</h3>
<pre><code class="language-properties"># server.properties — Enable SASL
listeners=SASL_SSL://0.0.0.0:9093
advertised.listeners=SASL_SSL://kafka-1.example.com:9093
security.inter.broker.protocol=SASL_SSL

sasl.mechanism.inter.broker.protocol=SCRAM-SHA-512
sasl.enabled.mechanisms=SCRAM-SHA-512

# SSL Configuration
ssl.keystore.location=/var/ssl/kafka.keystore.jks
ssl.keystore.password=\${KEYSTORE_PASSWORD}
ssl.key.password=\${KEY_PASSWORD}
ssl.truststore.location=/var/ssl/kafka.truststore.jks
ssl.truststore.password=\${TRUSTSTORE_PASSWORD}
ssl.client.auth=required
</code></pre>

<h3>Authorization (ACLs)</h3>
<pre><code class="language-bash"># สร้าง user
docker exec kafka kafka-configs --bootstrap-server localhost:9092 \\
  --alter --add-config 'SCRAM-SHA-512=[password=secret123]' \\
  --entity-type users --entity-name order-producer

# ให้สิทธิ์ produce ไป topic orders
docker exec kafka kafka-acls --bootstrap-server localhost:9092 \\
  --add --allow-principal User:order-producer \\
  --operation Write \\
  --topic orders

# ให้สิทธิ์ consume จาก topic orders
docker exec kafka kafka-acls --bootstrap-server localhost:9092 \\
  --add --allow-principal User:order-consumer \\
  --operation Read \\
  --topic orders \\
  --group order-processing-group

# ดู ACL ทั้งหมด
docker exec kafka kafka-acls --bootstrap-server localhost:9092 --list
</code></pre>

<pre><code class="language-python"># Python producer with SASL/SSL
producer = Producer({
    'bootstrap.servers': 'kafka-1.example.com:9093',
    'security.protocol': 'SASL_SSL',
    'sasl.mechanism': 'SCRAM-SHA-512',
    'sasl.username': 'order-producer',
    'sasl.password': 'secret123',
    'ssl.ca.location': '/path/to/ca-cert.pem',
    'acks': 'all',
})
</code></pre>

<h2>5. Performance Tuning Cheat Sheet</h2>

<table>
  <tr><th>ปัญหา</th><th>วิธีแก้</th></tr>
  <tr><td>Producer throughput ต่ำ</td><td>เพิ่ม batch.size, linger.ms, ใช้ compression, เพิ่ม buffer.memory</td></tr>
  <tr><td>Consumer throughput ต่ำ</td><td>เพิ่ม consumers ใน group, เพิ่ม fetch.min.bytes, เพิ่ม max.poll.records</td></tr>
  <tr><td>High Latency</td><td>ลด linger.ms, ลด batch.size, ใช้ acks=1 (ถ้ายอมได้)</td></tr>
  <tr><td>Disk เต็ม</td><td>ลด retention, เปิด compression ที่ broker, เพิ่ม disk</td></tr>
  <tr><td>Rebalance บ่อย</td><td>ใช้ static membership, CooperativeStickyAssignor, เพิ่ม session.timeout</td></tr>
  <tr><td>Uneven Partition Load</td><td>ตรวจ message key distribution, ใช้ custom partitioner</td></tr>
</table>

<h2>6. Disaster Recovery</h2>

<pre><code class="language-text">
DR Strategies:

1. Multi-Datacenter Replication (MirrorMaker 2)
   ┌─────────────┐           ┌─────────────┐
   │ DC-Primary  │  ──MM2──→ │ DC-Secondary│
   │ Kafka       │           │ Kafka       │
   │ (Active)    │  ←──MM2── │ (Standby)   │
   └─────────────┘           └─────────────┘

2. Stretched Cluster (3 DCs)
   DC1: 2 brokers + DC2: 2 brokers + DC3: 1 broker (observer)
   → tolerates 1 DC failure

3. Backup to Object Storage
   Kafka → S3 Sink Connector → S3/GCS (cold storage)
   → replay from S3 if needed
</code></pre>

<pre><code class="language-yaml"># MirrorMaker 2 Configuration
# mm2.properties
clusters = primary, secondary
primary.bootstrap.servers = dc1-kafka:9092
secondary.bootstrap.servers = dc2-kafka:9092

# Replication from primary to secondary
primary->secondary.enabled = true
primary->secondary.topics = orders, payments, inventory

# Replication settings
replication.factor = 3
sync.topic.configs.enabled = true
sync.topic.acls.enabled = true
emit.heartbeats.enabled = true
emit.checkpoints.enabled = true

# Consumer offset sync (for failover)
sync.group.offsets.enabled = true
</code></pre>

<h2>7. Topic Naming Convention</h2>

<pre><code class="language-text">
Recommended Naming: {domain}.{system}.{entity}.{version}

Examples:
  ecommerce.order-service.orders.v1
  ecommerce.payment-service.payments.v1
  ecommerce.order-service.orders.dlq          ← dead letter queue
  _internal.connect-offsets                    ← internal topics (prefix: _)
  cdc.ecommerce.orders                        ← CDC topics
  analytics.clickstream.page-views.v2         ← analytics

Rules:
  ✅ lowercase with hyphens/dots
  ✅ include version for schema changes
  ✅ prefix internal topics with _
  ❌ avoid spaces, underscores (use hyphens)
  ❌ avoid very long names (affects ZK performance)
</code></pre>

<h2>8. Operational Runbooks</h2>

<pre><code class="language-bash"># === Common Operations ===

# เพิ่ม partition (ระวัง: ไม่สามารถลดได้!)
kafka-topics --alter --topic orders \\
  --partitions 24 \\
  --bootstrap-server localhost:9092

# Reassign partitions (ย้าย partition ไป broker ใหม่)
kafka-reassign-partitions --bootstrap-server localhost:9092 \\
  --reassignment-json-file reassignment.json \\
  --execute

# ดู under-replicated partitions
kafka-topics --describe --under-replicated-partitions \\
  --bootstrap-server localhost:9092

# Reset consumer offset (ระวัง!)
kafka-consumer-groups --bootstrap-server localhost:9092 \\
  --group my-group \\
  --topic my-topic \\
  --reset-offsets \\
  --to-earliest \\
  --execute

# Delete records before offset (cleanup)
kafka-delete-records --bootstrap-server localhost:9092 \\
  --offset-json-file delete-records.json

# ดู disk usage per topic
kafka-log-dirs --bootstrap-server localhost:9092 \\
  --describe --topic-list orders
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อยใน Production:</strong>
<ul>
  <li><strong>ไม่ตั้ง unclean.leader.election.enable=false</strong> — ถ้าเปิด (default เก่า) broker ที่ sync ไม่ทันอาจถูกเลือกเป็น leader → DATA LOSS!</li>
  <li><strong>JVM heap ใหญ่เกินไป</strong> — Kafka ใช้ page cache ไม่ใช่ heap ถ้าตั้ง heap 32 GB → GC pause ยาว → timeout → rebalance!</li>
  <li><strong>ไม่ monitor consumer lag</strong> — lag สะสมจนข้อมูลถูก delete ก่อน consume → data loss ที่ไม่มีใครรู้</li>
  <li><strong>ไม่ทดสอบ broker failure</strong> — ต้อง chaos test เป็นประจำ ลอง kill broker, network partition</li>
  <li><strong>ลืม set retention</strong> — default 7 วัน อาจไม่พอสำหรับบาง use case หรือมากเกินไปจน disk เต็ม</li>
</ul>
</div>

<div class="tip-box">
💡 <strong>ทริค Production Tips รวมไว้ที่เดียว:</strong>
<ol>
  <li><strong>Managed Kafka</strong> — ถ้า team เล็ก ใช้ Confluent Cloud, AWS MSK, หรือ Aiven ลด operational burden ได้เยอะ</li>
  <li><strong>GitOps for Topics</strong> — ใช้ tool เช่น <code>topicctl</code> หรือ Terraform Confluent Provider จัดการ topics เป็น code</li>
  <li><strong>Schema Registry</strong> — บังคับใช้เสมอใน production เพื่อป้องกัน schema breaking changes</li>
  <li><strong>Quotas</strong> — ตั้ง quota per client เพื่อป้องกัน 1 producer ใช้ bandwidth ทั้งหมด</li>
  <li><strong>Log Compaction</strong> — ใช้ <code>cleanup.policy=compact</code> สำหรับ KTable topics เพื่อเก็บแค่ค่าล่าสุดของแต่ละ key</li>
</ol>
</div>

<div class="exercise-box">
📝 <strong>แบบฝึกหัด (Capstone Project):</strong>
<ol>
  <li>ออกแบบ Kafka architecture สำหรับ e-commerce platform ที่รับ 50,000 orders/วัน โดยต้องมี:
    <ul>
      <li>Order service → Kafka → Payment service</li>
      <li>MySQL CDC → Kafka → Elasticsearch (search)</li>
      <li>Kafka → S3 (data lake)</li>
      <li>Real-time dashboard (Kafka Streams)</li>
    </ul>
  </li>
  <li>Deploy ทั้งหมดด้วย docker-compose (3 brokers, Kafka Connect, Schema Registry)</li>
  <li>Implement monitoring ด้วย Prometheus + Grafana</li>
  <li>Simulate broker failure และตรวจสอบว่าระบบ recover ได้</li>
  <li>เขียน runbook สำหรับ common operations (scale partitions, reset offsets, broker replacement)</li>
</ol>
</div>

<div class="interview-box">
🎯 <strong>คำถามสัมภาษณ์:</strong>
<ol>
  <li><strong>Q: ถ้า Kafka cluster มีปัญหา performance จะ troubleshoot ยังไง?</strong><br>
  A: 1) ดู under-replicated partitions (broker issue) 2) ดู consumer lag (consumer too slow) 3) ดู request handler idle % (broker overloaded) 4) ดู disk I/O (storage bottleneck) 5) ดู network usage (bandwidth bottleneck) 6) ดู GC logs (JVM issue)</li>
  <li><strong>Q: ออกแบบ Kafka ให้ multi-datacenter ทำยังไง?</strong><br>
  A: ใช้ MirrorMaker 2 replicate ข้าม DC สำหรับ active-passive ใช้ stretched cluster สำหรับ active-active ต้อง consider: latency ระหว่าง DC, conflict resolution, consumer offset sync สำหรับ failover</li>
  <li><strong>Q: acks=all กับ min.insync.replicas ทำงานร่วมกันยังไง?</strong><br>
  A: acks=all บอก producer ว่าต้องรอ ISR ทุกตัว acknowledge ส่วน min.insync.replicas กำหนดจำนวน ISR ขั้นต่ำที่ต้องมี ถ้า ISR < min.insync.replicas → produce fail (NotEnoughReplicas) ดังนั้น RF=3 + min.insync.replicas=2 + acks=all = tolerates 1 broker failure โดยไม่มี data loss</li>
  <li><strong>Q: ทำ Kafka upgrade zero downtime ยังไง?</strong><br>
  A: Rolling upgrade ทีละ broker — 1) set inter.broker.protocol.version เป็น version เก่า 2) upgrade broker 1, รอ ISR sync 3) upgrade broker 2, 3, ... 4) หลัง upgrade ทุกตัว → เปลี่ยน protocol version เป็น version ใหม่ 5) rolling restart อีกรอบ</li>
</ol>
</div>
`
  }
];
