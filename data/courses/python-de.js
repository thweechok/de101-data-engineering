export const chapters = [
  {
    number: 0,
    slug: 'review',
    emoji: '🐍',
    title: 'Python ทบทวน',
    content: `
<h2>🐍 บทที่ 0: Python ทบทวน — Variables, Types & Control Flow</h2>

<p>สมมติว่าพี่โยนงานให้น้องว่า "ช่วยเขียน pipeline อ่าน CSV แล้ว clean ข้อมูลที" ถ้าน้องยังไม่มั่นใจเรื่อง type casting, string formatting, หรือ list comprehension — pipeline นั้นจะพังตั้งแต่บรรทัดแรก บทนี้เราจะทบทวน Python fundamentals ที่ DE ใช้ทุกวัน ไม่ใช่แค่ท่องจำ แต่เข้าใจจริงว่า "ทำไม Python ทำงานแบบนี้"</p>

<h3>📌 Variables & Memory Model</h3>

<p>ใน Python ตัวแปรไม่ใช่ "กล่องเก็บของ" แบบ C/Java — มันคือ <strong>ป้ายชื่อ (label)</strong> ที่ชี้ไปยัง object ใน memory นี่คือเหตุผลที่ mutable vs immutable สำคัญมาก</p>

<pre><code class="language-python"># ตัวอย่าง: ตัวแปรคือ label ไม่ใช่ box
a = [1, 2, 3]
b = a          # b ชี้ไปที่ list เดียวกับ a
b.append(4)
print(a)       # [1, 2, 3, 4] — a เปลี่ยนด้วย!

# ถ้าต้องการ copy จริง ๆ
c = a.copy()            # shallow copy
d = a[:]                # slice copy
import copy
e = copy.deepcopy(a)    # deep copy สำหรับ nested structures
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน DE pipeline ถ้าส่ง list/dict เข้า function แล้ว function แก้ค่า — ข้อมูลต้นทางจะเปลี่ยนด้วย ใช้ <code>.copy()</code> หรือ <code>deepcopy()</code> ป้องกัน side effects
</div>

<h3>📌 Data Types ที่ DE ต้องรู้</h3>

<pre><code class="language-python"># Numeric types
row_count = 1_000_000          # int — underscore เพื่อ readability
file_size_gb = 2.5             # float
ratio = Decimal('0.1') + Decimal('0.2')  # Decimal สำหรับ financial data

# String — ใช้เยอะมากใน path, SQL, config
table_name = "raw_transactions"
query = f"SELECT * FROM {table_name} WHERE date = '2024-01-01'"

# Boolean — ใช้ใน flag, filter
is_incremental = True
has_header = not file_path.endswith('.parquet')

# None — ใช้แทน NULL ใน database
last_run_date = None  # ยังไม่เคย run

# Collection types
columns = ['id', 'name', 'amount']                    # list — ordered, mutable
unique_ids = {101, 102, 103}                           # set — unique, fast lookup
config = {'host': 'localhost', 'port': 5432}           # dict — key-value
db_creds = ('admin', 'secret123')                      # tuple — immutable
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ <code>float</code> กับข้อมูลการเงิน → <code>0.1 + 0.2 = 0.30000000000000004</code> ใช้ <code>decimal.Decimal</code> แทนเสมอเมื่อทำงานกับเงิน!
</div>

<h3>📌 Type Casting & Validation</h3>

<pre><code class="language-python">from datetime import datetime

def clean_record(raw: dict) -> dict:
    """Clean และ cast types ของ raw record จาก CSV"""
    return {
        'id': int(raw['id']),
        'amount': float(raw['amount']) if raw['amount'] else 0.0,
        'name': str(raw['name']).strip().upper(),
        'created_at': datetime.strptime(raw['created_at'], '%Y-%m-%d'),
        'is_active': raw.get('is_active', 'true').lower() == 'true',
    }

# ใช้งานจริง
raw = {'id': '42', 'amount': '1500.50', 'name': ' john doe ', 
       'created_at': '2024-01-15', 'is_active': 'True'}
cleaned = clean_record(raw)
print(cleaned)
# {'id': 42, 'amount': 1500.5, 'name': 'JOHN DOE', 
#  'created_at': datetime(2024, 1, 15), 'is_active': True}
</code></pre>

<h3>📌 String Formatting สำหรับ DE</h3>

<pre><code class="language-python">from datetime import date

# f-string — วิธีหลักที่ใช้
partition_date = date(2024, 1, 15)
s3_path = f"s3://data-lake/raw/transactions/dt={partition_date:%Y-%m-%d}/data.parquet"

# Multi-line SQL query
schema = "analytics"
table = "daily_revenue"
query = f"""
    INSERT INTO {schema}.{table} (date, revenue, order_count)
    SELECT 
        order_date,
        SUM(amount) as revenue,
        COUNT(*) as order_count
    FROM raw.orders
    WHERE order_date = '{partition_date}'
    GROUP BY order_date
"""
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ f-string format spec เพื่อจัดรูปแบบ: <code>f"{value:,.2f}"</code> → <code>"1,234,567.89"</code> และ <code>f"{dt:%Y%m%d}"</code> → <code>"20240115"</code>
</div>

<h3>📌 Control Flow — เขียนให้ Pythonic</h3>

<pre><code class="language-python"># ❌ ไม่ Pythonic
result = []
for i in range(len(records)):
    if records[i]['status'] == 'active':
        result.append(records[i]['name'])

# ✅ Pythonic — List Comprehension
result = [r['name'] for r in records if r['status'] == 'active']

# Dict comprehension — สร้าง lookup table
id_to_name = {r['id']: r['name'] for r in records}

# Walrus operator (:=) — Python 3.8+
# ใช้ assign ค่าใน expression
import re
if match := re.search(r'dt=(\\d{4}-\\d{2}-\\d{2})', s3_path):
    partition = match.group(1)

# match-case — Python 3.10+ (structural pattern matching)
def process_event(event: dict):
    match event.get('type'):
        case 'INSERT':
            handle_insert(event['data'])
        case 'UPDATE':
            handle_update(event['data'])
        case 'DELETE':
            handle_delete(event['data'])
        case _:
            log.warning(f"Unknown event type: {event.get('type')}")
</code></pre>

<h3>🧠 วิธีคิด: Mutable vs Immutable</h3>

<p>ลองนึกภาพแบบนี้:</p>
<ul>
  <li><strong>Immutable</strong> (int, str, tuple) = เหมือนเลข page ในหนังสือ — เปลี่ยนไม่ได้ ต้องสร้างหน้าใหม่</li>
  <li><strong>Mutable</strong> (list, dict, set) = เหมือน whiteboard — เขียนลบได้ ทุกคนที่เห็น board เห็นการเปลี่ยนแปลง</li>
</ul>

<p>นี่คือเหตุผลที่ <strong>อย่าใช้ mutable default argument</strong>:</p>

<pre><code class="language-python"># ❌ BUG! default list จะ share ข้าม function calls
def add_record(record, records=[]):
    records.append(record)
    return records

# ✅ ถูกต้อง
def add_record(record, records=None):
    if records is None:
        records = []
    records.append(record)
    return records
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>isinstance()</code> แทน <code>type()</code> เมื่อเช็ค type เพราะ <code>isinstance</code> รองรับ inheritance: <code>isinstance(True, int)</code> → <code>True</code>
</div>

<h3>📌 Iteration Patterns สำหรับ DE</h3>

<pre><code class="language-python"># enumerate — ต้องการ index + value
for idx, row in enumerate(rows, start=1):
    if idx % 10000 == 0:
        print(f"Processed {idx:,} rows...")

# zip — join ข้อมูลจาก 2 lists
columns = ['id', 'name', 'amount']
values = [1, 'Product A', 99.99]
record = dict(zip(columns, values))
# {'id': 1, 'name': 'Product A', 'amount': 99.99}

# itertools — ใช้ได้เยอะมากใน DE
from itertools import islice, chain, groupby

# Batch processing — แบ่ง chunk
def batch(iterable, size):
    it = iter(iterable)
    while chunk := list(islice(it, size)):
        yield chunk

for batch_records in batch(all_records, size=1000):
    bulk_insert(batch_records)

# chain — รวมหลาย iterables
all_files = chain(csv_files, json_files, parquet_files)
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ <code>for i in range(len(list))</code> — ใน Python เราใช้ <code>enumerate()</code> หรือ iterate ตรง ๆ อ่านง่ายกว่า debug ง่ายกว่า
</div>

<h3>📌 Dictionary — หัวใจของ Data Pipeline</h3>

<pre><code class="language-python"># Merge dicts (Python 3.9+)
defaults = {'batch_size': 1000, 'timeout': 30, 'retry': 3}
overrides = {'batch_size': 5000, 'debug': True}
config = defaults | overrides
# {'batch_size': 5000, 'timeout': 30, 'retry': 3, 'debug': True}

# defaultdict — นับ, จัดกลุ่ม
from collections import defaultdict, Counter

# นับจำนวน records ต่อ status
status_counts = Counter(r['status'] for r in records)

# จัดกลุ่ม records ตาม category
by_category = defaultdict(list)
for record in records:
    by_category[record['category']].append(record)

# ChainMap — layer configs (env > file > default)
from collections import ChainMap
env_config = {'DB_HOST': 'prod-db.example.com'}
file_config = {'DB_HOST': 'localhost', 'DB_PORT': '5432'}
default_config = {'DB_HOST': 'localhost', 'DB_PORT': '5432', 'DB_NAME': 'app'}

config = ChainMap(env_config, file_config, default_config)
print(config['DB_HOST'])  # 'prod-db.example.com' — env wins
</code></pre>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน function <code>transform_records(records: list[dict]) -> dict</code> ที่รับ list ของ records แล้ว:</p>
<ol>
  <li>กรองเฉพาะ records ที่มี <code>status == 'completed'</code></li>
  <li>จัดกลุ่มตาม <code>category</code></li>
  <li>คำนวณ total amount ของแต่ละ category</li>
  <li>Return dict ของ <code>{category: total_amount}</code></li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">from collections import defaultdict

def transform_records(records: list[dict]) -> dict:
    completed = [r for r in records if r['status'] == 'completed']
    totals = defaultdict(float)
    for r in completed:
        totals[r['category']] += r['amount']
    return dict(totals)

# ทดสอบ
data = [
    {'category': 'food', 'amount': 100, 'status': 'completed'},
    {'category': 'food', 'amount': 200, 'status': 'completed'},
    {'category': 'tech', 'amount': 500, 'status': 'pending'},
    {'category': 'tech', 'amount': 300, 'status': 'completed'},
]
print(transform_records(data))
# {'food': 300.0, 'tech': 300.0}
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบายความแตกต่างระหว่าง shallow copy กับ deep copy พร้อมยกตัวอย่างสถานการณ์ที่ต้องใช้แต่ละแบบ</strong></p>
<p><strong>A:</strong> Shallow copy สร้าง object ใหม่แต่ nested objects ยังชี้ที่เดิม ส่วน deep copy สร้างใหม่ทุก level ใน DE ถ้ามี config dict ที่มี nested dict (เช่น database credentials) แล้วต้อง clone ไป modify — ต้องใช้ deep copy ไม่งั้น config ต้นทางจะถูกแก้ด้วย</p>
</div>
`
  },
  {
    number: 1,
    slug: 'functions',
    emoji: '⚙️',
    title: 'Functions & Modules',
    content: `
<h2>⚙️ บทที่ 1: Functions & Modules — args/kwargs, Decorators & Generators</h2>

<p>ลองนึกภาพว่าน้องต้องเขียน ETL pipeline ที่มี 50 functions — ถ้าไม่เข้าใจ function design, closures, decorators — code จะกลายเป็นหม้อ spaghetti ที่ไม่มีใครกล้าแก้ บทนี้เราจะเรียนรู้วิธีเขียน function ที่ <strong>reusable, testable, และ production-ready</strong></p>

<h3>📌 Function Signatures ที่ DE ใช้จริง</h3>

<pre><code class="language-python">from typing import Optional
from datetime import date

def extract_data(
    source: str,
    start_date: date,
    end_date: Optional[date] = None,
    *,                           # keyword-only arguments หลังจากนี้
    batch_size: int = 1000,
    include_deleted: bool = False,
) -> list[dict]:
    """
    Extract data จาก source ระหว่าง start_date ถึง end_date
    
    Args:
        source: ชื่อ table หรือ API endpoint
        start_date: วันเริ่มต้น
        end_date: วันสิ้นสุด (default: วันนี้)
        batch_size: จำนวน records ต่อ batch
        include_deleted: รวม soft-deleted records
    
    Returns:
        List ของ records (dicts)
    """
    end_date = end_date or date.today()
    # ... implementation
    return records
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>*</code> (bare asterisk) เพื่อบังคับให้ arguments หลังจากนั้นต้องเป็น keyword — ป้องกัน bug จากการส่ง argument ผิดตำแหน่ง: <code>extract_data("users", d, None, 500)</code> จะ error แต่ <code>extract_data("users", d, batch_size=500)</code> ทำงานได้
</div>

<h3>📌 *args & **kwargs — ยืดหยุ่นแบบ Pro</h3>

<pre><code class="language-python">def create_pipeline(*steps, **config):
    """สร้าง pipeline จากหลาย steps พร้อม config"""
    pipeline_name = config.get('name', 'unnamed_pipeline')
    dry_run = config.get('dry_run', False)
    
    print(f"Pipeline: {pipeline_name} ({len(steps)} steps)")
    
    results = []
    for i, step in enumerate(steps, 1):
        print(f"  Step {i}: {step.__name__}")
        if not dry_run:
            result = step()
            results.append(result)
    return results

# ใช้งาน
create_pipeline(
    extract_users,
    transform_users,
    load_users,
    name="user_etl",
    dry_run=True
)

# Real-world: wrapper function ที่ forward arguments
def logged_query(func):
    def wrapper(*args, **kwargs):
        print(f"Executing: {func.__name__} with args={args}, kwargs={kwargs}")
        return func(*args, **kwargs)
    return wrapper
</code></pre>

<h3>📌 Closures & Factory Functions</h3>

<pre><code class="language-python">def make_validator(rules: dict):
    """Factory: สร้าง validator function จาก rules"""
    def validate(record: dict) -> tuple[bool, list[str]]:
        errors = []
        for field, rule in rules.items():
            value = record.get(field)
            if rule.get('required') and value is None:
                errors.append(f"{field} is required")
            if rule.get('type') and value is not None:
                if not isinstance(value, rule['type']):
                    errors.append(f"{field} must be {rule['type'].__name__}")
            if rule.get('min') and value is not None:
                if value < rule['min']:
                    errors.append(f"{field} must be >= {rule['min']}")
        return (len(errors) == 0, errors)
    return validate

# สร้าง validator สำหรับ orders table
order_validator = make_validator({
    'order_id': {'required': True, 'type': int},
    'amount': {'required': True, 'type': (int, float), 'min': 0},
    'customer_id': {'required': True, 'type': int},
})

is_valid, errors = order_validator({'order_id': 1, 'amount': -50, 'customer_id': 42})
# (False, ['amount must be >= 0'])
</code></pre>

<h3>📌 Decorators — เพิ่มความสามารถโดยไม่แก้ Code เดิม</h3>

<pre><code class="language-python">import time
import functools
import logging

logger = logging.getLogger(__name__)

def retry(max_attempts: int = 3, delay: float = 1.0, exceptions=(Exception,)):
    """Decorator: retry function เมื่อเกิด error"""
    def decorator(func):
        @functools.wraps(func)  # preserve original function metadata
        def wrapper(*args, **kwargs):
            last_exception = None
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    last_exception = e
                    logger.warning(
                        f"{func.__name__} attempt {attempt}/{max_attempts} "
                        f"failed: {e}"
                    )
                    if attempt < max_attempts:
                        time.sleep(delay * attempt)  # exponential-ish backoff
            raise last_exception
        return wrapper
    return decorator

def timing(func):
    """Decorator: วัดเวลา execution"""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        logger.info(f"{func.__name__} took {elapsed:.2f}s")
        return result
    return wrapper

# ใช้งาน — stack decorators
@timing
@retry(max_attempts=3, delay=2.0, exceptions=(ConnectionError, TimeoutError))
def fetch_api_data(endpoint: str) -> dict:
    """Fetch data จาก API พร้อม retry + timing"""
    response = requests.get(endpoint, timeout=30)
    response.raise_for_status()
    return response.json()
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>@functools.wraps(func)</code> เสมอใน decorator — มันคง <code>__name__</code>, <code>__doc__</code> ของ function เดิมไว้ ทำให้ debugging + logging ไม่งง
</div>

<h3>📌 Generators — ประหยัด Memory สำหรับ Big Data</h3>

<pre><code class="language-python">import csv

def read_csv_streaming(filepath: str, chunk_size: int = 10000):
    """
    อ่าน CSV แบบ streaming — ไม่ load ทั้งไฟล์เข้า memory
    yield ทีละ chunk (list of dicts)
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        chunk = []
        for row in reader:
            chunk.append(row)
            if len(chunk) >= chunk_size:
                yield chunk
                chunk = []
        if chunk:  # yield remaining rows
            yield chunk

# ใช้งาน — process ไฟล์ 10GB โดยใช้ memory แค่ chunk_size
total = 0
for batch in read_csv_streaming('huge_file.csv', chunk_size=50000):
    processed = [transform(row) for row in batch]
    load_to_db(processed)
    total += len(batch)
    print(f"Loaded {total:,} rows")

# Generator expression — เหมือน list comprehension แต่ lazy
file_sizes = (os.path.getsize(f) for f in file_list)  # ไม่คำนวณทันที
total_size = sum(file_sizes)  # คำนวณทีละตัวตอน iterate
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> Generator ใช้ได้ครั้งเดียว! ถ้า iterate จบแล้ว iterate อีกรอบจะได้ค่าว่าง ถ้าต้องใช้ซ้ำ — เก็บเป็น list หรือสร้าง generator ใหม่
</div>

<h3>🧠 วิธีคิด: เมื่อไหร่ใช้ Generator?</h3>

<p>ถามตัวเอง 3 คำถาม:</p>
<ol>
  <li><strong>ข้อมูลใหญ่ไหม?</strong> → ถ้าไฟล์ > RAM → ต้องใช้ generator</li>
  <li><strong>ต้อง iterate กี่รอบ?</strong> → ถ้ารอบเดียว → generator, หลายรอบ → list</li>
  <li><strong>ต้องการ random access ไหม?</strong> → ถ้าต้อง <code>data[500]</code> → list</li>
</ol>

<h3>📌 Modules & Package Structure สำหรับ DE Project</h3>

<pre><code class="language-python"># โครงสร้าง project ที่ดี
# my_pipeline/
# ├── __init__.py
# ├── config.py          # configuration management
# ├── extract/
# │   ├── __init__.py
# │   ├── api.py         # API extractors
# │   └── database.py    # DB extractors
# ├── transform/
# │   ├── __init__.py
# │   ├── clean.py       # data cleaning
# │   └── enrich.py      # data enrichment
# ├── load/
# │   ├── __init__.py
# │   └── warehouse.py   # load to DW
# └── utils/
#     ├── __init__.py
#     ├── retry.py        # retry logic
#     └── logging.py      # logging setup

# __init__.py — expose public API
# my_pipeline/extract/__init__.py
from .api import APIExtractor
from .database import DatabaseExtractor

__all__ = ['APIExtractor', 'DatabaseExtractor']

# ใช้งาน
from my_pipeline.extract import APIExtractor
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>__all__</code> ใน <code>__init__.py</code> เพื่อควบคุมว่า <code>from module import *</code> จะ export อะไรบ้าง — เป็น convention ที่ทำให้ API ชัดเจน
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน decorator <code>@cache_result(ttl_seconds=300)</code> ที่ cache ผลลัพธ์ของ function ตาม arguments ถ้าเรียกซ้ำภายใน TTL จะ return ค่าเดิมโดยไม่ execute function ใหม่</p>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">import time
import functools

def cache_result(ttl_seconds: int = 300):
    def decorator(func):
        cache = {}
        
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            key = (args, tuple(sorted(kwargs.items())))
            now = time.time()
            
            if key in cache:
                result, timestamp = cache[key]
                if now - timestamp < ttl_seconds:
                    print(f"Cache HIT for {func.__name__}")
                    return result
            
            result = func(*args, **kwargs)
            cache[key] = (result, now)
            return result
        
        wrapper.cache_clear = lambda: cache.clear()
        return wrapper
    return decorator

@cache_result(ttl_seconds=60)
def get_exchange_rate(currency: str) -> float:
    print(f"Fetching rate for {currency}...")
    # simulate API call
    return 34.5
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบายความแตกต่างระหว่าง <code>@staticmethod</code>, <code>@classmethod</code>, และ regular method</strong></p>
<p><strong>A:</strong> Regular method รับ <code>self</code> (instance) เป็น argument แรก ใช้เมื่อต้องเข้าถึง instance data. <code>@classmethod</code> รับ <code>cls</code> (class) แทน ใช้เป็น alternative constructor เช่น <code>User.from_dict(data)</code>. <code>@staticmethod</code> ไม่รับทั้ง self/cls ใช้เป็น utility function ที่เกี่ยวข้องกับ class แต่ไม่ต้องใช้ class/instance data</p>
</div>
`
  },
  {
    number: 2,
    slug: 'oop',
    emoji: '🏛️',
    title: 'OOP สำหรับ DE',
    content: `
<h2>🏛️ บทที่ 2: OOP — Class, Inheritance, @property & Dunder Methods</h2>

<p>หลาย DE มองว่า OOP เป็นเรื่องของ web dev แต่จริง ๆ แล้ว pipeline frameworks อย่าง Airflow, dbt, Spark ล้วนสร้างบน OOP ถ้าน้องอยากเขียน <strong>custom operator, reusable connector, หรือ data model</strong> — OOP คือพื้นฐานที่ขาดไม่ได้</p>

<h3>📌 Classes สำหรับ Data Pipeline</h3>

<pre><code class="language-python">from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional

@dataclass
class PipelineConfig:
    """Configuration สำหรับ ETL pipeline"""
    name: str
    source_table: str
    target_table: str
    batch_size: int = 10000
    start_date: Optional[datetime] = None
    tags: list[str] = field(default_factory=list)
    
    def __post_init__(self):
        """Validation หลัง init"""
        if self.batch_size <= 0:
            raise ValueError(f"batch_size must be > 0, got {self.batch_size}")
        if not self.name.replace('_', '').isalnum():
            raise ValueError(f"Invalid pipeline name: {self.name}")

# ใช้งาน
config = PipelineConfig(
    name="daily_orders",
    source_table="raw.orders",
    target_table="analytics.daily_orders",
    tags=["daily", "critical"]
)
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>@dataclass</code> แทน class ธรรมดาเมื่อ class หลักมีไว้เก็บข้อมูล — มันสร้าง <code>__init__</code>, <code>__repr__</code>, <code>__eq__</code> ให้อัตโนมัติ ประหยัดเวลาเขียน boilerplate
</div>

<h3>📌 Encapsulation & @property</h3>

<pre><code class="language-python">class DatabaseConnection:
    """Database connection wrapper with connection pooling concept"""
    
    def __init__(self, host: str, port: int, database: str, 
                 username: str, password: str):
        self._host = host
        self._port = port
        self._database = database
        self._username = username
        self.__password = password  # name mangling → ซ่อนจริง ๆ
        self._connection = None
        self._query_count = 0
    
    @property
    def connection_string(self) -> str:
        """สร้าง connection string โดยไม่ expose password"""
        return f"postgresql://{self._username}:***@{self._host}:{self._port}/{self._database}"
    
    @property
    def is_connected(self) -> bool:
        return self._connection is not None
    
    @property
    def query_count(self) -> int:
        return self._query_count
    
    def connect(self):
        if self._connection is None:
            # simulate connection
            self._connection = f"conn_{self._host}"
            print(f"Connected to {self.connection_string}")
    
    def execute(self, query: str, params=None) -> list[dict]:
        if not self.is_connected:
            self.connect()
        self._query_count += 1
        print(f"Executing query #{self._query_count}: {query[:50]}...")
        # ... actual implementation
        return []
    
    def close(self):
        if self._connection:
            self._connection = None
            print("Connection closed")

# ใช้งาน
db = DatabaseConnection("localhost", 5432, "warehouse", "etl_user", "secret")
print(db.connection_string)  # postgresql://etl_user:***@localhost:5432/warehouse
db.execute("SELECT * FROM orders LIMIT 10")
print(db.query_count)  # 1
</code></pre>

<h3>📌 Inheritance & Composition — เมื่อไหร่ใช้อะไร</h3>

<pre><code class="language-python">from abc import ABC, abstractmethod
from datetime import datetime

class BaseExtractor(ABC):
    """Abstract base class สำหรับทุก extractor"""
    
    def __init__(self, name: str):
        self.name = name
        self._records_extracted = 0
    
    @abstractmethod
    def connect(self):
        """เชื่อมต่อกับ data source"""
        pass
    
    @abstractmethod
    def extract(self, query: str) -> list[dict]:
        """Extract data ตาม query"""
        pass
    
    def get_stats(self) -> dict:
        return {
            'extractor': self.name,
            'records_extracted': self._records_extracted,
            'timestamp': datetime.now().isoformat()
        }

class PostgresExtractor(BaseExtractor):
    def __init__(self, connection_string: str):
        super().__init__("PostgreSQL")
        self._conn_str = connection_string
        self._conn = None
    
    def connect(self):
        import psycopg2
        self._conn = psycopg2.connect(self._conn_str)
    
    def extract(self, query: str) -> list[dict]:
        if not self._conn:
            self.connect()
        cursor = self._conn.cursor()
        cursor.execute(query)
        columns = [desc[0] for desc in cursor.description]
        rows = cursor.fetchall()
        self._records_extracted += len(rows)
        return [dict(zip(columns, row)) for row in rows]

class APIExtractor(BaseExtractor):
    def __init__(self, base_url: str, api_key: str):
        super().__init__("REST API")
        self._base_url = base_url
        self._api_key = api_key
        self._session = None
    
    def connect(self):
        import requests
        self._session = requests.Session()
        self._session.headers['Authorization'] = f"Bearer {self._api_key}"
    
    def extract(self, query: str) -> list[dict]:
        if not self._session:
            self.connect()
        response = self._session.get(f"{self._base_url}/{query}")
        response.raise_for_status()
        data = response.json()['data']
        self._records_extracted += len(data)
        return data
</code></pre>

<h3>🧠 วิธีคิด: Inheritance vs Composition</h3>

<ul>
  <li><strong>Inheritance (IS-A):</strong> PostgresExtractor <em>IS A</em> BaseExtractor → ✅ เหมาะ</li>
  <li><strong>Composition (HAS-A):</strong> Pipeline <em>HAS A</em> Extractor + Transformer + Loader → ✅ เหมาะ</li>
</ul>

<pre><code class="language-python"># ✅ Composition — ยืดหยุ่นกว่า inheritance หลายชั้น
class ETLPipeline:
    def __init__(self, extractor: BaseExtractor, transformer, loader):
        self.extractor = extractor    # HAS-A relationship
        self.transformer = transformer
        self.loader = loader
    
    def run(self, query: str):
        raw_data = self.extractor.extract(query)
        transformed = self.transformer.transform(raw_data)
        self.loader.load(transformed)
        return self.extractor.get_stats()
</code></pre>

<h3>📌 Dunder Methods — ทำให้ Object ใช้งานง่าย</h3>

<pre><code class="language-python">class DataBatch:
    """Batch ของ records ที่ใช้ใน pipeline"""
    
    def __init__(self, records: list[dict], source: str = "unknown"):
        self._records = records
        self.source = source
        self.created_at = datetime.now()
    
    def __len__(self) -> int:
        return len(self._records)
    
    def __getitem__(self, index):
        if isinstance(index, slice):
            return DataBatch(self._records[index], self.source)
        return self._records[index]
    
    def __iter__(self):
        return iter(self._records)
    
    def __repr__(self) -> str:
        return f"DataBatch(source='{self.source}', records={len(self)})"
    
    def __add__(self, other: 'DataBatch') -> 'DataBatch':
        """รวม 2 batches"""
        if not isinstance(other, DataBatch):
            return NotImplemented
        combined = self._records + other._records
        return DataBatch(combined, f"{self.source}+{other.source}")
    
    def __bool__(self) -> bool:
        return len(self._records) > 0
    
    def __contains__(self, item) -> bool:
        return item in self._records

# ใช้งานได้เป็นธรรมชาติ
batch = DataBatch([{'id': 1}, {'id': 2}, {'id': 3}], source="orders")
print(len(batch))       # 3
print(batch[0])         # {'id': 1}
for record in batch:    # iterable
    process(record)
if batch:               # truthy check
    print("Has data")
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Implement <code>__repr__</code> เสมอ — มันช่วย debugging มากเพราะจะแสดงตอน print object ใน log. ใช้ format: <code>ClassName(key_attr1=val1, key_attr2=val2)</code>
</div>

<h3>📌 Context Manager — ทำ Resource Cleanup อัตโนมัติ</h3>

<pre><code class="language-python">class DatabaseTransaction:
    """Context manager สำหรับ database transaction"""
    
    def __init__(self, connection):
        self.connection = connection
        self.cursor = None
    
    def __enter__(self):
        self.cursor = self.connection.cursor()
        return self.cursor
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            self.connection.rollback()
            print(f"Transaction rolled back due to: {exc_val}")
        else:
            self.connection.commit()
            print("Transaction committed")
        self.cursor.close()
        return False  # ไม่ suppress exception

# ใช้งาน
with DatabaseTransaction(conn) as cursor:
    cursor.execute("INSERT INTO orders VALUES (%s, %s)", (1, 100))
    cursor.execute("UPDATE inventory SET qty = qty - 1 WHERE id = %s", (1,))
# commit อัตโนมัติ ถ้า error → rollback อัตโนมัติ
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ลืมเรียก <code>super().__init__()</code> ใน child class → parent class ไม่ถูก initialize → AttributeError ตอน runtime ที่หา attribute ไม่เจอ
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>@dataclass(frozen=True)</code> เพื่อสร้าง immutable objects — เหมาะสำหรับ config, schema definition ที่ไม่ควรเปลี่ยนหลังสร้าง
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> สร้าง class <code>SchemaValidator</code> ที่รับ schema definition แล้วใช้ validate records</p>
<ol>
  <li>รองรับ type checking (str, int, float)</li>
  <li>รองรับ required fields</li>
  <li>Return list ของ validation errors</li>
  <li>ใช้ <code>__call__</code> ให้เรียกใช้ได้แบบ function</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">class SchemaValidator:
    def __init__(self, schema: dict):
        self.schema = schema
    
    def __call__(self, record: dict) -> tuple[bool, list[str]]:
        errors = []
        for field_name, rules in self.schema.items():
            value = record.get(field_name)
            if rules.get('required') and value is None:
                errors.append(f"Missing required field: {field_name}")
                continue
            if value is not None and 'type' in rules:
                if not isinstance(value, rules['type']):
                    errors.append(
                        f"{field_name}: expected {rules['type'].__name__}, "
                        f"got {type(value).__name__}"
                    )
        return (len(errors) == 0, errors)
    
    def __repr__(self):
        fields = list(self.schema.keys())
        return f"SchemaValidator(fields={fields})"

validate_order = SchemaValidator({
    'id': {'required': True, 'type': int},
    'amount': {'required': True, 'type': float},
    'note': {'required': False, 'type': str},
})

ok, errs = validate_order({'id': '1', 'amount': 100.0})
print(ok, errs)  # False, ['id: expected int, got str']
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบาย MRO (Method Resolution Order) ใน Python และทำไมมันสำคัญ</strong></p>
<p><strong>A:</strong> MRO คือลำดับที่ Python ค้นหา method ใน inheritance chain ใช้ C3 linearization algorithm ดูได้จาก <code>ClassName.__mro__</code> สำคัญเมื่อใช้ multiple inheritance เพราะถ้ามี 2 parent class ที่มี method ชื่อเดียวกัน MRO จะกำหนดว่า method ไหนถูกเรียก</p>
</div>
`
  },
  {
    number: 3,
    slug: 'file-io',
    emoji: '📁',
    title: 'File I/O & Data Processing',
    content: `
<h2>📁 บทที่ 3: File I/O & Data Processing — CSV, JSON, Parquet</h2>

<p>DE ทำงานกับไฟล์ทุกวัน — CSV จาก business team, JSON จาก API, Parquet จาก data lake ถ้าน้องไม่เข้าใจ encoding, streaming read, หรือ format ที่เหมาะกับงาน — pipeline จะช้า กิน memory เยอะ และ data อาจเสียหาย</p>

<h3>📌 CSV — จัดการ "ไฟล์ที่ business ส่งมา"</h3>

<pre><code class="language-python">import csv
from pathlib import Path

def read_csv_robust(filepath: str, encoding: str = 'utf-8') -> list[dict]:
    """อ่าน CSV แบบ handle edge cases จริง ๆ"""
    path = Path(filepath)
    
    if not path.exists():
        raise FileNotFoundError(f"File not found: {filepath}")
    
    # ลอง detect encoding ถ้า utf-8 ไม่ได้
    encodings_to_try = [encoding, 'utf-8-sig', 'cp874', 'latin-1']
    
    for enc in encodings_to_try:
        try:
            with open(path, 'r', encoding=enc, newline='') as f:
                # Sniff dialect (delimiter, quoting)
                sample = f.read(8192)
                f.seek(0)
                
                try:
                    dialect = csv.Sniffer().sniff(sample)
                except csv.Error:
                    dialect = csv.excel  # default
                
                reader = csv.DictReader(f, dialect=dialect)
                records = []
                for line_num, row in enumerate(reader, start=2):
                    # strip whitespace from keys and values
                    cleaned = {
                        k.strip(): v.strip() if v else None 
                        for k, v in row.items() 
                        if k is not None
                    }
                    records.append(cleaned)
                
                print(f"Read {len(records)} records from {path.name} "
                      f"(encoding={enc})")
                return records
        except UnicodeDecodeError:
            continue
    
    raise ValueError(f"Cannot decode file {filepath} with any known encoding")

# เขียน CSV
def write_csv(records: list[dict], filepath: str):
    if not records:
        return
    
    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=records[0].keys())
        writer.writeheader()
        writer.writerows(records)
    
    print(f"Wrote {len(records)} records to {path.name}")
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ไฟล์ CSV จาก Excel ไทยมักเป็น encoding <code>cp874</code> หรือ <code>utf-8-sig</code> (BOM) ใช้ลิสต์ encodings แล้วลองทีละตัวเป็นวิธีที่ปลอดภัยสุด
</div>

<h3>📌 JSON — จัดการ API Response & Config</h3>

<pre><code class="language-python">import json
from datetime import datetime, date
from decimal import Decimal
from pathlib import Path

class DEJsonEncoder(json.JSONEncoder):
    """Custom JSON encoder สำหรับ types ที่ DE ใช้บ่อย"""
    
    def default(self, obj):
        if isinstance(obj, (datetime, date)):
            return obj.isoformat()
        if isinstance(obj, Decimal):
            return float(obj)
        if isinstance(obj, set):
            return list(obj)
        if isinstance(obj, bytes):
            return obj.decode('utf-8')
        return super().default(obj)

def save_json(data, filepath: str, pretty: bool = True):
    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, cls=DEJsonEncoder, 
                  ensure_ascii=False,  # ให้เก็บภาษาไทยได้
                  indent=2 if pretty else None)

def load_json(filepath: str):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

# JSON Lines (JSONL) — format ยอดนิยมสำหรับ streaming data
def read_jsonl_streaming(filepath: str):
    """อ่าน JSONL แบบ streaming — ทีละบรรทัด"""
    with open(filepath, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                yield json.loads(line)
            except json.JSONDecodeError as e:
                print(f"Warning: Invalid JSON at line {line_num}: {e}")

def write_jsonl(records, filepath: str):
    """เขียน JSONL — แต่ละ record 1 บรรทัด"""
    with open(filepath, 'w', encoding='utf-8') as f:
        for record in records:
            line = json.dumps(record, cls=DEJsonEncoder, ensure_ascii=False)
            f.write(line + '\\n')
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ <code>json.dumps()</code> กับ <code>datetime</code> โดยตรง → <code>TypeError: Object of type datetime is not JSON serializable</code> ต้องสร้าง custom encoder หรือแปลงก่อน
</div>

<h3>📌 Parquet — Format หลักของ Data Lake</h3>

<pre><code class="language-python">import pyarrow as pa
import pyarrow.parquet as pq
from pathlib import Path

def write_parquet(records: list[dict], filepath: str, 
                  compression: str = 'snappy'):
    """เขียน list of dicts เป็น Parquet file"""
    if not records:
        return
    
    table = pa.Table.from_pylist(records)
    
    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    
    pq.write_table(
        table, 
        str(path),
        compression=compression,
        row_group_size=100_000,
    )
    
    file_size_mb = path.stat().st_size / (1024 * 1024)
    print(f"Wrote {len(records):,} records to {path.name} "
          f"({file_size_mb:.1f} MB, {compression})")

def read_parquet(filepath: str, columns: list[str] = None) -> list[dict]:
    """อ่าน Parquet — สามารถเลือกอ่านเฉพาะบาง columns"""
    table = pq.read_table(filepath, columns=columns)
    return table.to_pylist()

def read_parquet_metadata(filepath: str) -> dict:
    """อ่าน metadata โดยไม่ต้อง load data"""
    meta = pq.read_metadata(filepath)
    return {
        'num_rows': meta.num_rows,
        'num_columns': meta.num_columns,
        'num_row_groups': meta.num_row_groups,
        'created_by': meta.created_by,
        'format_version': meta.format_version,
        'serialized_size': meta.serialized_size,
    }

# Partitioned writes — เขียนแยก partition
def write_partitioned_parquet(records: list[dict], base_path: str,
                               partition_cols: list[str]):
    """เขียน Parquet แบบ partitioned (เหมือน Hive-style)"""
    table = pa.Table.from_pylist(records)
    pq.write_to_dataset(
        table,
        root_path=base_path,
        partition_cols=partition_cols,
    )
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> Parquet เก็บข้อมูลแบบ columnar — ถ้า query ใช้แค่ 5 จาก 100 columns ส่ง parameter <code>columns=['col1','col2']</code> จะอ่านเร็วขึ้นหลายเท่าเพราะไม่ต้อง load columns ที่ไม่ใช้
</div>

<h3>📌 pathlib — จัดการ Path แบบ Modern</h3>

<pre><code class="language-python">from pathlib import Path
from datetime import date

# สร้าง path แบบ cross-platform
data_dir = Path("data") / "raw" / "orders"
data_dir.mkdir(parents=True, exist_ok=True)

# สร้าง path พร้อม date partition
today = date.today()
partition_path = Path("output") / f"dt={today:%Y-%m-%d}" / "data.parquet"

# หาไฟล์ทั้งหมดในโฟลเดอร์
csv_files = sorted(Path("data/inbox").glob("*.csv"))
all_parquet = list(Path("data/lake").rglob("**/*.parquet"))  # recursive

# ข้อมูลไฟล์
for f in csv_files:
    size_mb = f.stat().st_size / (1024 * 1024)
    print(f"{f.name}: {size_mb:.1f} MB, modified: {f.stat().st_mtime}")
</code></pre>

<h3>🧠 วิธีคิด: เลือก File Format ยังไง?</h3>

<table>
  <tr><th>Format</th><th>ใช้เมื่อ</th><th>ข้อดี</th><th>ข้อเสีย</th></tr>
  <tr><td>CSV</td><td>รับไฟล์จากคน / ส่งให้คน</td><td>อ่านง่าย ใช้ Excel ได้</td><td>ไม่มี type ช้า ไฟล์ใหญ่</td></tr>
  <tr><td>JSON/JSONL</td><td>API response, nested data</td><td>Flexible schema, nested</td><td>ช้ากว่า Parquet</td></tr>
  <tr><td>Parquet</td><td>Data lake, analytics</td><td>เร็ว เล็ก columnar</td><td>ต้องใช้ library</td></tr>
  <tr><td>Avro</td><td>Kafka, event streaming</td><td>Schema evolution</td><td>ใช้ยากกว่า Parquet</td></tr>
</table>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>compression='zstd'</code> แทน <code>'snappy'</code> ถ้าต้องการไฟล์เล็กลงอีก 30-50% — zstd compress ดีกว่าแต่ช้าขึ้นเล็กน้อย เหมาะกับ cold storage
</div>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> เปิดไฟล์ด้วย <code>open()</code> แล้วไม่ปิด → resource leak. ใช้ <code>with</code> statement เสมอ: <code>with open(f) as file:</code>
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน function <code>convert_csv_to_parquet(csv_dir, parquet_dir)</code> ที่:</p>
<ol>
  <li>อ่านทุกไฟล์ CSV ใน csv_dir</li>
  <li>Cast types ตาม schema ที่กำหนด</li>
  <li>เขียนเป็น Parquet แยกตาม date partition</li>
  <li>Return summary ว่า convert กี่ไฟล์ กี่ records</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">from pathlib import Path
import csv
import pyarrow as pa
import pyarrow.parquet as pq

def convert_csv_to_parquet(csv_dir: str, parquet_dir: str) -> dict:
    csv_path = Path(csv_dir)
    parquet_path = Path(parquet_dir)
    
    total_files = 0
    total_records = 0
    
    for csv_file in sorted(csv_path.glob("*.csv")):
        with open(csv_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            records = list(reader)
        
        if not records:
            continue
        
        table = pa.Table.from_pylist(records)
        output_file = parquet_path / f"{csv_file.stem}.parquet"
        output_file.parent.mkdir(parents=True, exist_ok=True)
        pq.write_table(table, str(output_file), compression='snappy')
        
        total_files += 1
        total_records += len(records)
    
    return {
        'files_converted': total_files,
        'total_records': total_records,
    }
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: ทำไม Parquet ถึงเร็วกว่า CSV สำหรับ analytical queries?</strong></p>
<p><strong>A:</strong> Parquet เก็บข้อมูลแบบ columnar — เวลา query ใช้แค่บาง columns มันอ่านเฉพาะ column ที่ต้องการ (column pruning) ไม่ต้อง scan ทั้ง row นอกจากนี้ยัง compress ได้ดีกว่าเพราะ data ใน column เดียวกันมี type เหมือนกัน รวมถึงมี predicate pushdown ผ่าน min/max statistics ใน metadata</p>
</div>
`
  },
  {
    number: 4,
    slug: 'error-handling',
    emoji: '🛡️',
    title: 'Error Handling & Logging',
    content: `
<h2>🛡️ บทที่ 4: Error Handling & Logging — ทำ Pipeline ไม่ล้ม</h2>

<p>Pipeline ที่ดีไม่ใช่ pipeline ที่ไม่มี error — แต่คือ pipeline ที่ <strong>handle error ได้ดี</strong> น้องลองคิดดู ถ้า pipeline ดึง API 100 endpoints แล้ว endpoint ที่ 50 พัง — มันควรจะ crash ทั้งหมด หรือ skip แล้วทำต่อ? บทนี้สอนวิธีเขียน code ที่ "ล้มอย่างสง่า"</p>

<h3>📌 Exception Hierarchy ที่ DE ต้องรู้</h3>

<pre><code class="language-python"># สร้าง Custom Exceptions สำหรับ pipeline
class PipelineError(Exception):
    """Base exception สำหรับทุก pipeline error"""
    pass

class ExtractionError(PipelineError):
    """Error ตอน extract data"""
    def __init__(self, source: str, message: str, retryable: bool = True):
        self.source = source
        self.retryable = retryable
        super().__init__(f"Extraction failed from {source}: {message}")

class TransformationError(PipelineError):
    """Error ตอน transform data"""
    def __init__(self, record_id, field: str, message: str):
        self.record_id = record_id
        self.field = field
        super().__init__(f"Transform error on record {record_id}, "
                        f"field '{field}': {message}")

class ValidationError(PipelineError):
    """Error ตอน validate data"""
    def __init__(self, errors: list[str]):
        self.errors = errors
        super().__init__(f"Validation failed with {len(errors)} errors")

class LoadError(PipelineError):
    """Error ตอน load data"""
    pass
</code></pre>

<h3>📌 try/except — ใช้ให้ถูกต้อง</h3>

<pre><code class="language-python">import requests
from datetime import datetime

def extract_with_proper_handling(api_url: str, params: dict) -> list[dict]:
    """ตัวอย่าง error handling ที่ดี"""
    
    try:
        response = requests.get(api_url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        
    except requests.exceptions.Timeout:
        # Timeout → retryable
        raise ExtractionError(api_url, "Request timed out", retryable=True)
    
    except requests.exceptions.ConnectionError:
        # Connection failed → retryable
        raise ExtractionError(api_url, "Connection failed", retryable=True)
    
    except requests.exceptions.HTTPError as e:
        # 4xx → ไม่ควร retry (client error)
        # 5xx → retryable (server error)
        status = e.response.status_code
        retryable = status >= 500
        raise ExtractionError(
            api_url, 
            f"HTTP {status}: {e.response.text[:200]}",
            retryable=retryable
        )
    
    except ValueError:
        # JSON decode error
        raise ExtractionError(api_url, "Invalid JSON response", retryable=False)
    
    # ✅ Validate data structure
    if 'data' not in data:
        raise ExtractionError(api_url, "Response missing 'data' key", 
                             retryable=False)
    
    return data['data']
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ bare <code>except:</code> หรือ <code>except Exception:</code> จับทุกอย่าง → ซ่อน bug! จับเฉพาะ exception ที่คาดหวังและรู้วิธีจัดการ
</div>

<h3>📌 Pattern: Dead Letter Queue</h3>

<pre><code class="language-python">import json
from pathlib import Path
from datetime import datetime

class DeadLetterQueue:
    """เก็บ records ที่ process ไม่สำเร็จ ไว้ debug ทีหลัง"""
    
    def __init__(self, output_dir: str = "data/dead_letters"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self._failed_records = []
    
    def add(self, record: dict, error: Exception, step: str):
        self._failed_records.append({
            'record': record,
            'error_type': type(error).__name__,
            'error_message': str(error),
            'step': step,
            'timestamp': datetime.now().isoformat(),
        })
    
    def flush(self, batch_id: str):
        if not self._failed_records:
            return
        
        filepath = self.output_dir / f"dlq_{batch_id}.jsonl"
        with open(filepath, 'w') as f:
            for item in self._failed_records:
                f.write(json.dumps(item, ensure_ascii=False) + '\\n')
        
        count = len(self._failed_records)
        self._failed_records = []
        return count
    
    @property
    def count(self):
        return len(self._failed_records)

# ใช้งานใน pipeline
def process_batch(records: list[dict], batch_id: str):
    dlq = DeadLetterQueue()
    processed = []
    
    for record in records:
        try:
            result = transform(record)
            validate(result)
            processed.append(result)
        except (TransformationError, ValidationError) as e:
            dlq.add(record, e, step="transform")
            continue  # skip bad record, process ต่อ
    
    # Load good records
    if processed:
        load_to_warehouse(processed)
    
    # Flush failed records
    if dlq.count > 0:
        failed_count = dlq.flush(batch_id)
        print(f"⚠️ {failed_count} records sent to dead letter queue")
    
    return {
        'processed': len(processed),
        'failed': dlq.count,
        'total': len(records),
    }
</code></pre>

<h3>📌 Logging — ไม่ใช่แค่ print()</h3>

<pre><code class="language-python">import logging
import sys
from pathlib import Path

def setup_pipeline_logger(
    name: str,
    log_file: str = None,
    level: int = logging.INFO,
) -> logging.Logger:
    """Setup logger สำหรับ pipeline"""
    
    logger = logging.getLogger(name)
    logger.setLevel(level)
    
    # Format ที่มีข้อมูลครบ
    formatter = logging.Formatter(
        fmt='%(asctime)s | %(levelname)-8s | %(name)s | %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )
    
    # Console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    # File handler (optional)
    if log_file:
        Path(log_file).parent.mkdir(parents=True, exist_ok=True)
        file_handler = logging.FileHandler(log_file, encoding='utf-8')
        file_handler.setLevel(level)
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
    
    return logger

# ใช้งาน
logger = setup_pipeline_logger("etl.orders", log_file="logs/orders.log")

def run_pipeline():
    logger.info("Pipeline started")
    logger.info("Extracting from source: %s", "orders_api")
    
    try:
        records = extract()
        logger.info("Extracted %d records", len(records))
        
        transformed = transform(records)
        logger.info("Transformed %d records", len(transformed))
        
        load(transformed)
        logger.info("Pipeline completed successfully ✅")
        
    except ExtractionError as e:
        logger.error("Extraction failed: %s (retryable=%s)", e, e.retryable)
        raise
    except Exception:
        logger.exception("Unexpected error in pipeline")  # logs traceback
        raise
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>logger.exception()</code> แทน <code>logger.error()</code> ใน except block — มันจะ log traceback อัตโนมัติ ช่วย debug ได้มาก
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>%s</code> formatting ใน logging แทน f-string: <code>logger.info("Count: %d", count)</code> เพราะถ้า log level ถูก disable string จะไม่ถูก format เปล่าประโยชน์
</div>

<h3>🧠 วิธีคิด: Error Handling Strategy</h3>

<p>ถามตัวเอง 3 คำถามเมื่อเจอ error:</p>
<ol>
  <li><strong>Retry ได้ไหม?</strong> (Network timeout → retry, Invalid data → ไม่ retry)</li>
  <li><strong>Skip ได้ไหม?</strong> (1 bad record จาก 1M → skip, Primary key violation → ต้อง fix)</li>
  <li><strong>ใครต้องรู้?</strong> (Business impact → alert, Technical issue → log)</li>
</ol>

<h3>📌 Structured Logging สำหรับ Production</h3>

<pre><code class="language-python">import json
import logging

class JSONFormatter(logging.Formatter):
    """JSON formatter สำหรับ log aggregation tools (ELK, CloudWatch)"""
    
    def format(self, record):
        log_entry = {
            'timestamp': self.formatTime(record),
            'level': record.levelname,
            'logger': record.name,
            'message': record.getMessage(),
            'module': record.module,
            'function': record.funcName,
            'line': record.lineno,
        }
        
        # เพิ่ม extra fields
        if hasattr(record, 'pipeline'):
            log_entry['pipeline'] = record.pipeline
        if hasattr(record, 'batch_id'):
            log_entry['batch_id'] = record.batch_id
        
        if record.exc_info:
            log_entry['exception'] = self.formatException(record.exc_info)
        
        return json.dumps(log_entry, ensure_ascii=False)

# ใช้งาน
logger.info("Processing batch", extra={
    'pipeline': 'daily_orders',
    'batch_id': 'batch_20240115_001',
})
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน production ใช้ structured logging (JSON format) เพื่อให้ tools อย่าง ELK Stack, CloudWatch, Datadog parse log ได้ง่าย — filter ตาม pipeline, batch_id ได้ทันที
</div>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> Log ข้อมูล sensitive เช่น password, API key, PII ลงใน log file → ข้อมูลรั่ว! Mask ข้อมูลก่อน log เสมอ
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน decorator <code>@circuit_breaker(failure_threshold=5, reset_timeout=60)</code> ที่:</p>
<ol>
  <li>นับจำนวน failures ติดต่อกัน</li>
  <li>ถ้า fail เกิน threshold → เปิด circuit (raise CircuitBreakerOpen)</li>
  <li>หลัง reset_timeout วินาที → ลอง call อีกครั้ง (half-open state)</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">import time
import functools

class CircuitBreakerOpen(Exception):
    pass

def circuit_breaker(failure_threshold=5, reset_timeout=60):
    def decorator(func):
        state = {'failures': 0, 'last_failure': 0, 'status': 'closed'}
        
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            
            if state['status'] == 'open':
                if now - state['last_failure'] > reset_timeout:
                    state['status'] = 'half-open'
                else:
                    raise CircuitBreakerOpen(
                        f"{func.__name__}: circuit is open, "
                        f"retry after {reset_timeout}s"
                    )
            
            try:
                result = func(*args, **kwargs)
                state['failures'] = 0
                state['status'] = 'closed'
                return result
            except Exception as e:
                state['failures'] += 1
                state['last_failure'] = now
                if state['failures'] >= failure_threshold:
                    state['status'] = 'open'
                raise
        
        wrapper.get_state = lambda: state.copy()
        return wrapper
    return decorator
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบาย strategy การ handle errors ใน data pipeline ที่มี millions of records</strong></p>
<p><strong>A:</strong> ใช้ Dead Letter Queue pattern — records ที่ fail จะถูกแยกไปเก็บใน DLQ (เช่น separate file หรือ table) แทนที่จะ crash ทั้ง pipeline. ตั้ง threshold เช่น ถ้า fail > 5% ของ batch → หยุดทั้ง pipeline เพราะอาจมีปัญหาที่ source. Records ใน DLQ จะถูก investigate และ reprocess ทีหลัง. ใช้ circuit breaker สำหรับ external dependencies เพื่อป้องกัน cascade failure</p>
</div>
`
  },
  {
    number: 5,
    slug: 'apis',
    emoji: '🌐',
    title: 'Working with APIs',
    content: `
<h2>🌐 บทที่ 5: Working with APIs — requests, Pagination & Retry</h2>

<p>ข้อมูลส่วนใหญ่ในโลกจริงมาจาก API — Stripe, Shopify, Google Analytics, internal microservices แต่ API ในโลกจริงไม่ได้ง่ายเหมือนใน tutorial มี rate limits, pagination, authentication, flaky connections — บทนี้สอนวิธี "ดึงข้อมูลจาก API แบบ production-grade"</p>

<h3>📌 requests Session — ใช้ซ้ำ Connection</h3>

<pre><code class="language-python">import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def create_api_session(
    base_url: str,
    api_key: str = None,
    bearer_token: str = None,
    max_retries: int = 3,
    timeout: int = 30,
) -> requests.Session:
    """สร้าง session ที่ production-ready"""
    
    session = requests.Session()
    
    # Authentication
    if api_key:
        session.headers['X-API-Key'] = api_key
    if bearer_token:
        session.headers['Authorization'] = f"Bearer {bearer_token}"
    
    # Common headers
    session.headers.update({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'DataPipeline/1.0',
    })
    
    # Retry strategy
    retry_strategy = Retry(
        total=max_retries,
        backoff_factor=1,            # 1s, 2s, 4s
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET", "POST"],
        raise_on_status=False,
    )
    
    adapter = HTTPAdapter(
        max_retries=retry_strategy,
        pool_connections=10,
        pool_maxsize=20,
    )
    session.mount("https://", adapter)
    session.mount("http://", adapter)
    
    return session
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>requests.Session()</code> แทน <code>requests.get()</code> ตรง ๆ — Session reuse TCP connections (connection pooling) ทำให้เร็วขึ้นมากเมื่อ call API หลายครั้ง
</div>

<h3>📌 Pagination — ดึงข้อมูลทุกหน้า</h3>

<pre><code class="language-python">import time
import logging

logger = logging.getLogger(__name__)

def fetch_all_pages_offset(
    session: requests.Session,
    url: str,
    page_size: int = 100,
    max_pages: int = None,
    rate_limit_delay: float = 0.5,
) -> list[dict]:
    """
    ดึงข้อมูลทุกหน้าแบบ offset-based pagination
    เช่น ?page=1&per_page=100
    """
    all_records = []
    page = 1
    
    while True:
        params = {'page': page, 'per_page': page_size}
        response = session.get(url, params=params, timeout=30)
        response.raise_for_status()
        
        data = response.json()
        records = data.get('data', data.get('results', []))
        
        if not records:
            break
        
        all_records.extend(records)
        logger.info(f"Page {page}: fetched {len(records)} records "
                   f"(total: {len(all_records):,})")
        
        # Check if last page
        total = data.get('total', None)
        if total and len(all_records) >= total:
            break
        
        if max_pages and page >= max_pages:
            logger.warning(f"Reached max_pages limit ({max_pages})")
            break
        
        page += 1
        time.sleep(rate_limit_delay)  # respect rate limits
    
    return all_records


def fetch_all_pages_cursor(
    session: requests.Session,
    url: str,
    page_size: int = 100,
    rate_limit_delay: float = 0.5,
) -> list[dict]:
    """
    ดึงข้อมูลแบบ cursor-based pagination
    เช่น ?cursor=abc123&limit=100
    """
    all_records = []
    cursor = None
    
    while True:
        params = {'limit': page_size}
        if cursor:
            params['cursor'] = cursor
        
        response = session.get(url, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        records = data.get('data', [])
        all_records.extend(records)
        
        # Get next cursor
        cursor = data.get('next_cursor') or data.get('pagination', {}).get('next')
        
        if not cursor or not records:
            break
        
        logger.info(f"Fetched {len(all_records):,} records so far...")
        time.sleep(rate_limit_delay)
    
    return all_records
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ไม่ใส่ <code>time.sleep()</code> ระหว่าง API calls → โดน rate limit → 429 Too Many Requests → ถูก ban! เช็ค API docs สำหรับ rate limit เสมอ
</div>

<h3>📌 Rate Limiting — ไม่โดน Ban</h3>

<pre><code class="language-python">import time
from collections import deque

class RateLimiter:
    """Rate limiter แบบ sliding window"""
    
    def __init__(self, max_calls: int, period: float):
        """
        Args:
            max_calls: จำนวน calls สูงสุด
            period: ในช่วงเวลา (วินาที)
        """
        self.max_calls = max_calls
        self.period = period
        self._calls = deque()
    
    def wait(self):
        """Wait ถ้าจำเป็น เพื่อไม่เกิน rate limit"""
        now = time.time()
        
        # ลบ calls ที่เก่ากว่า period
        while self._calls and self._calls[0] <= now - self.period:
            self._calls.popleft()
        
        if len(self._calls) >= self.max_calls:
            sleep_time = self._calls[0] + self.period - now
            if sleep_time > 0:
                time.sleep(sleep_time)
        
        self._calls.append(time.time())

# ใช้งาน — Shopify API: 2 calls/second
limiter = RateLimiter(max_calls=2, period=1.0)

for endpoint in api_endpoints:
    limiter.wait()
    response = session.get(endpoint)
</code></pre>

<h3>📌 OAuth2 & Token Refresh</h3>

<pre><code class="language-python">import time
import requests

class OAuth2Client:
    """OAuth2 client ที่ auto-refresh token"""
    
    def __init__(self, token_url: str, client_id: str, 
                 client_secret: str, scopes: list[str] = None):
        self._token_url = token_url
        self._client_id = client_id
        self._client_secret = client_secret
        self._scopes = scopes or []
        self._access_token = None
        self._token_expiry = 0
        self._session = requests.Session()
    
    def _refresh_token(self):
        """Fetch new access token"""
        response = self._session.post(self._token_url, data={
            'grant_type': 'client_credentials',
            'client_id': self._client_id,
            'client_secret': self._client_secret,
            'scope': ' '.join(self._scopes),
        })
        response.raise_for_status()
        data = response.json()
        
        self._access_token = data['access_token']
        self._token_expiry = time.time() + data.get('expires_in', 3600) - 60
    
    @property
    def token(self) -> str:
        if not self._access_token or time.time() >= self._token_expiry:
            self._refresh_token()
        return self._access_token
    
    def get(self, url: str, **kwargs) -> requests.Response:
        kwargs.setdefault('headers', {})
        kwargs['headers']['Authorization'] = f"Bearer {self.token}"
        return self._session.get(url, **kwargs)
</code></pre>

<h3>🧠 วิธีคิด: API Integration Checklist</h3>

<ol>
  <li><strong>Authentication:</strong> API Key? OAuth2? Basic Auth?</li>
  <li><strong>Pagination:</strong> Offset? Cursor? Link header?</li>
  <li><strong>Rate Limits:</strong> กี่ calls/second? มี rate limit header ไหม?</li>
  <li><strong>Error Handling:</strong> 4xx vs 5xx? Retry strategy?</li>
  <li><strong>Data Format:</strong> JSON? XML? CSV?</li>
  <li><strong>Idempotency:</strong> ดึงซ้ำได้ไหม? มี duplicate ไหม?</li>
</ol>

<div class="tip-box">
💡 <strong>ทริค:</strong> เช็ค response headers สำหรับ rate limit info: <code>X-RateLimit-Remaining</code>, <code>X-RateLimit-Reset</code>, <code>Retry-After</code> — ปรับ delay ตาม headers แทนที่จะ hardcode
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>response.raise_for_status()</code> ทุกครั้ง — มันจะ raise <code>HTTPError</code> ถ้า status code >= 400 ไม่ต้องเช็ค status code เอง
</div>

<h3>📌 Real-World: Webhook Receiver</h3>

<pre><code class="language-python">from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import hashlib
import hmac

class WebhookHandler(BaseHTTPRequestHandler):
    """Simple webhook receiver สำหรับรับ events จาก external service"""
    
    SECRET = b"your-webhook-secret"
    
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        
        # Verify signature
        signature = self.headers.get('X-Signature')
        expected = hmac.new(self.SECRET, body, hashlib.sha256).hexdigest()
        
        if not hmac.compare_digest(signature or '', expected):
            self.send_response(401)
            self.end_headers()
            return
        
        # Process event
        event = json.loads(body)
        process_webhook_event(event)
        
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'{"status": "ok"}')
</code></pre>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน class <code>APIExtractor</code> ที่ดึงข้อมูลจาก REST API พร้อม:</p>
<ol>
  <li>Cursor-based pagination</li>
  <li>Rate limiting (configurable)</li>
  <li>Automatic retry with exponential backoff</li>
  <li>Dead letter queue สำหรับ failed pages</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">class APIExtractor:
    def __init__(self, base_url, api_key, rate_limit=5):
        self.session = create_api_session(base_url, api_key=api_key)
        self.base_url = base_url
        self.limiter = RateLimiter(max_calls=rate_limit, period=1.0)
        self.failed_pages = []
    
    def extract_all(self, endpoint, page_size=100):
        url = f"{self.base_url}/{endpoint}"
        all_data = []
        cursor = None
        page = 0
        
        while True:
            page += 1
            self.limiter.wait()
            
            try:
                params = {'limit': page_size}
                if cursor:
                    params['cursor'] = cursor
                
                resp = self.session.get(url, params=params, timeout=30)
                resp.raise_for_status()
                data = resp.json()
                
                records = data.get('data', [])
                all_data.extend(records)
                
                cursor = data.get('next_cursor')
                if not cursor:
                    break
                    
            except Exception as e:
                self.failed_pages.append({'page': page, 'error': str(e)})
                break
        
        return all_data
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: Cursor-based pagination ดีกว่า offset-based อย่างไร?</strong></p>
<p><strong>A:</strong> Offset-based (<code>?page=5&per_page=100</code>) มีปัญหาเมื่อข้อมูลเปลี่ยนระหว่าง pagination — อาจได้ record ซ้ำหรือข้าม record เพราะ offset เลื่อน ส่วน cursor-based ใช้ pointer (เช่น last record ID) ที่ stable ไม่ว่าข้อมูลจะเปลี่ยนยังไง และยัง perform ดีกว่าบน DB เพราะไม่ต้อง skip rows</p>
</div>
`
  },
  {
    number: 6,
    slug: 'pandas',
    emoji: '🐼',
    title: 'pandas สำหรับ DE',
    content: `
<h2>🐼 บทที่ 6: pandas สำหรับ DE — DataFrame, Merge, GroupBy</h2>

<p>pandas เป็น tool หลักที่ DE ใช้สำหรับข้อมูลขนาดเล็ก-กลาง (ไม่กี่ GB) — ใช้ explore data, prototype transformations, สร้าง data quality reports ก่อนจะไป production บน Spark บทนี้สอน pandas จากมุมมอง DE ไม่ใช่ Data Scientist</p>

<h3>📌 DataFrame — สร้างและอ่านข้อมูล</h3>

<pre><code class="language-python">import pandas as pd
import numpy as np
from datetime import datetime

# อ่านไฟล์ต่าง ๆ
df_csv = pd.read_csv(
    'orders.csv',
    dtype={'customer_id': 'Int64', 'status': 'category'},
    parse_dates=['order_date', 'shipped_date'],
    na_values=['', 'NULL', 'N/A', 'None'],
)

df_parquet = pd.read_parquet(
    'data/orders.parquet',
    columns=['order_id', 'amount', 'order_date'],  # อ่านเฉพาะที่ต้องการ
)

df_json = pd.read_json('api_response.json', orient='records')

# อ่านจาก database
from sqlalchemy import create_engine
engine = create_engine('postgresql://user:pass@localhost/warehouse')
df_db = pd.read_sql(
    "SELECT * FROM orders WHERE order_date >= '2024-01-01'",
    engine,
    parse_dates=['order_date'],
)
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> กำหนด <code>dtype</code> ตอนอ่าน CSV เสมอ — ลด memory usage ได้ 50-80%. ใช้ <code>'category'</code> สำหรับ columns ที่มีค่าซ้ำ ๆ (status, country) และ <code>'Int64'</code> (nullable integer) แทน <code>int64</code>
</div>

<h3>📌 Data Exploration สำหรับ DE</h3>

<pre><code class="language-python">def quick_profile(df: pd.DataFrame, name: str = "dataset") -> dict:
    """Quick data profiling — ใช้ตรวจข้อมูลก่อน transform"""
    
    print(f"\\n{'='*60}")
    print(f"📊 Data Profile: {name}")
    print(f"{'='*60}")
    print(f"Shape: {df.shape[0]:,} rows × {df.shape[1]} columns")
    print(f"Memory: {df.memory_usage(deep=True).sum() / 1024**2:.1f} MB")
    print(f"Duplicates: {df.duplicated().sum():,}")
    
    print(f"\\n📋 Column Summary:")
    for col in df.columns:
        null_pct = df[col].isna().mean() * 100
        unique = df[col].nunique()
        dtype = df[col].dtype
        print(f"  {col:30s} | {str(dtype):12s} | "
              f"nulls: {null_pct:5.1f}% | unique: {unique:,}")
    
    return {
        'rows': df.shape[0],
        'columns': df.shape[1],
        'duplicates': int(df.duplicated().sum()),
        'null_pct': df.isna().mean().to_dict(),
    }
</code></pre>

<h3>📌 Transform Patterns ที่ DE ใช้บ่อย</h3>

<pre><code class="language-python"># 1. Clean & Type Cast
def clean_orders(df: pd.DataFrame) -> pd.DataFrame:
    """Clean orders data — production example"""
    
    return (
        df
        .copy()
        # Rename columns ให้เป็น snake_case
        .rename(columns=lambda c: c.strip().lower().replace(' ', '_'))
        # Drop duplicates
        .drop_duplicates(subset=['order_id'], keep='last')
        # Clean string columns
        .assign(
            customer_name=lambda x: x['customer_name'].str.strip().str.title(),
            email=lambda x: x['email'].str.strip().str.lower(),
            status=lambda x: x['status'].str.upper(),
        )
        # Cast types
        .astype({
            'order_id': 'Int64',
            'amount': 'float64',
            'status': 'category',
        })
        # Parse dates
        .assign(
            order_date=lambda x: pd.to_datetime(x['order_date'], errors='coerce'),
        )
        # Filter out invalid
        .query("amount > 0 and order_date.notna()")
        # Sort
        .sort_values('order_date')
        .reset_index(drop=True)
    )

# 2. Merge / Join
# เหมือน SQL JOIN
orders_enriched = (
    orders
    .merge(customers, on='customer_id', how='left', suffixes=('', '_cust'))
    .merge(products, on='product_id', how='left')
)

# 3. GroupBy & Aggregate — เหมือน SQL GROUP BY
daily_revenue = (
    orders
    .groupby(orders['order_date'].dt.date)
    .agg(
        total_revenue=('amount', 'sum'),
        order_count=('order_id', 'count'),
        avg_order_value=('amount', 'mean'),
        unique_customers=('customer_id', 'nunique'),
    )
    .reset_index()
    .rename(columns={'order_date': 'date'})
)
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ method chaining โดยไม่มี <code>.copy()</code> ตอนเริ่ม → อาจแก้ DataFrame ต้นทาง (SettingWithCopyWarning) ใส่ <code>.copy()</code> เสมอเมื่อ transform
</div>

<h3>📌 Window Functions — Advanced Analytics</h3>

<pre><code class="language-python"># เหมือน SQL OVER (PARTITION BY ... ORDER BY ...)
df['running_total'] = (
    df.groupby('customer_id')['amount']
    .cumsum()
)

df['prev_order_amount'] = (
    df.groupby('customer_id')['amount']
    .shift(1)
)

df['rank_in_category'] = (
    df.groupby('category')['amount']
    .rank(method='dense', ascending=False)
)

# Rolling average — 7-day moving average
df['amount_7d_avg'] = (
    df.set_index('order_date')
    .groupby('customer_id')['amount']
    .rolling('7D')
    .mean()
    .reset_index(level=0, drop=True)
)
</code></pre>

<h3>🧠 วิธีคิด: pandas vs SQL vs Spark</h3>

<table>
  <tr><th>เกณฑ์</th><th>pandas</th><th>SQL</th><th>Spark</th></tr>
  <tr><td>ขนาดข้อมูล</td><td>&lt; 5 GB</td><td>ไม่จำกัด</td><td>&gt; 5 GB</td></tr>
  <tr><td>ใช้ตอนไหน</td><td>Prototype, EDA</td><td>Production</td><td>Big data production</td></tr>
  <tr><td>เรียนรู้</td><td>ง่าย</td><td>ปานกลาง</td><td>ยาก</td></tr>
</table>

<h3>📌 Performance Tips</h3>

<pre><code class="language-python"># 1. ใช้ vectorized operations แทน apply/iterrows
# ❌ ช้ามาก
df['category'] = df.apply(
    lambda row: 'high' if row['amount'] > 1000 else 'low', axis=1
)

# ✅ เร็วกว่า 100x
df['category'] = np.where(df['amount'] > 1000, 'high', 'low')

# ✅ หลาย conditions
conditions = [
    df['amount'] > 5000,
    df['amount'] > 1000,
    df['amount'] > 0,
]
choices = ['premium', 'high', 'standard']
df['tier'] = np.select(conditions, choices, default='unknown')

# 2. ลด memory ด้วย downcast
def optimize_dtypes(df: pd.DataFrame) -> pd.DataFrame:
    """ลด memory usage โดย downcast types"""
    for col in df.select_dtypes(include=['int']).columns:
        df[col] = pd.to_numeric(df[col], downcast='integer')
    for col in df.select_dtypes(include=['float']).columns:
        df[col] = pd.to_numeric(df[col], downcast='float')
    for col in df.select_dtypes(include=['object']).columns:
        if df[col].nunique() / len(df) < 0.5:
            df[col] = df[col].astype('category')
    return df
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> อย่าใช้ <code>df.iterrows()</code> เด็ดขาด — ช้ากว่า vectorized operations 100-1000 เท่า ใช้ <code>np.where()</code>, <code>np.select()</code>, หรือ <code>.map()</code> แทน
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> เขียน parquet แทน CSV เมื่อส่งต่อข้อมูลระหว่าง pipeline steps — เร็วกว่า 10x, เล็กกว่า 5x, และเก็บ type information ไว้ด้วย
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน function ที่สร้าง "Customer RFM Analysis" จาก orders DataFrame:</p>
<ol>
  <li><strong>Recency:</strong> จำนวนวันตั้งแต่ order ล่าสุด</li>
  <li><strong>Frequency:</strong> จำนวน orders ทั้งหมด</li>
  <li><strong>Monetary:</strong> ยอดรวมทั้งหมด</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">def rfm_analysis(orders: pd.DataFrame, 
                  reference_date: str = None) -> pd.DataFrame:
    if reference_date is None:
        reference_date = orders['order_date'].max()
    else:
        reference_date = pd.to_datetime(reference_date)
    
    rfm = (
        orders
        .groupby('customer_id')
        .agg(
            recency=('order_date', lambda x: (reference_date - x.max()).days),
            frequency=('order_id', 'nunique'),
            monetary=('amount', 'sum'),
        )
        .reset_index()
    )
    
    # Score 1-5 for each dimension
    for col in ['frequency', 'monetary']:
        rfm[f'{col}_score'] = pd.qcut(rfm[col], 5, labels=[1,2,3,4,5])
    rfm['recency_score'] = pd.qcut(
        rfm['recency'], 5, labels=[5,4,3,2,1]  # lower recency = better
    )
    
    return rfm
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: เปรียบเทียบ <code>merge()</code>, <code>join()</code>, <code>concat()</code> ใน pandas</strong></p>
<p><strong>A:</strong> <code>merge()</code> เหมือน SQL JOIN — join ตาม column values, รองรับ inner/left/right/outer. <code>join()</code> เหมือน merge แต่ join ตาม index เป็นหลัก. <code>concat()</code> เหมือน SQL UNION — stack DataFrames ในแนวตั้ง (axis=0) หรือแนวนอน (axis=1) ใน DE ใช้ merge บ่อยสุดเพราะ join ตาม business keys</p>
</div>
`
  },
  {
    number: 7,
    slug: 'async',
    emoji: '⚡',
    title: 'Async & Concurrency',
    content: `
<h2>⚡ บทที่ 7: Async & Concurrency — asyncio & Threading</h2>

<p>สมมติน้องต้องดึง API 100 endpoints — ถ้าทำ sequential ใช้เวลา 100 × 2 วินาที = 200 วินาที แต่ถ้าทำ concurrent ใช้เวลาแค่ ~5 วินาที! บทนี้สอนวิธีทำ I/O-bound tasks แบบ concurrent ซึ่งเป็นทักษะสำคัญของ DE ที่ทำงานกับ APIs, databases, file systems</p>

<h3>📌 Concurrency vs Parallelism</h3>

<p>นึกภาพร้านกาแฟ:</p>
<ul>
  <li><strong>Sequential:</strong> พนักงาน 1 คน ทำเสร็จแก้วนึงก่อนค่อยเริ่มแก้วต่อไป</li>
  <li><strong>Concurrency (Threading/Async):</strong> พนักงาน 1 คน ระหว่างรอกาแฟดริป ก็ไปรับ order ต่อ — สลับงานเก่ง</li>
  <li><strong>Parallelism (Multiprocessing):</strong> พนักงาน 4 คน ทำพร้อมกันจริง ๆ</li>
</ul>

<h3>📌 Threading — เหมาะกับ I/O-bound</h3>

<pre><code class="language-python">from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
import time

def fetch_endpoint(session: requests.Session, url: str) -> dict:
    """Fetch single endpoint"""
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return {'url': url, 'data': response.json(), 'status': 'success'}

def fetch_all_concurrent(urls: list[str], max_workers: int = 10) -> list[dict]:
    """Fetch หลาย URLs พร้อมกัน ด้วย thread pool"""
    results = []
    errors = []
    
    session = requests.Session()
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Submit all tasks
        future_to_url = {
            executor.submit(fetch_endpoint, session, url): url
            for url in urls
        }
        
        # Collect results as they complete
        for future in as_completed(future_to_url):
            url = future_to_url[future]
            try:
                result = future.result()
                results.append(result)
            except Exception as e:
                errors.append({'url': url, 'error': str(e)})
    
    print(f"✅ Success: {len(results)}, ❌ Failed: {len(errors)}")
    return results

# ใช้งาน
urls = [f"https://api.example.com/users/{i}" for i in range(100)]
data = fetch_all_concurrent(urls, max_workers=10)
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> <code>max_workers</code> สำหรับ I/O-bound ตั้ง 10-50 ได้ (เพราะ threads ส่วนใหญ่แค่รอ I/O) แต่สำหรับ CPU-bound ตั้งเท่ากับ CPU cores เท่านั้น
</div>

<h3>📌 asyncio — Modern Python Concurrency</h3>

<pre><code class="language-python">import asyncio
import aiohttp
import time

async def fetch_one(session: aiohttp.ClientSession, url: str, 
                    semaphore: asyncio.Semaphore) -> dict:
    """Fetch single URL with rate limiting via semaphore"""
    async with semaphore:
        try:
            async with session.get(url, timeout=aiohttp.ClientTimeout(total=30)) as resp:
                data = await resp.json()
                return {'url': url, 'data': data, 'status': resp.status}
        except Exception as e:
            return {'url': url, 'error': str(e), 'status': 'failed'}

async def fetch_all_async(urls: list[str], 
                          max_concurrent: int = 20) -> list[dict]:
    """Fetch หลาย URLs ด้วย asyncio + aiohttp"""
    semaphore = asyncio.Semaphore(max_concurrent)
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_one(session, url, semaphore) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
    
    return [r for r in results if not isinstance(r, Exception)]

# ใช้งาน
async def main():
    urls = [f"https://api.example.com/data/{i}" for i in range(200)]
    
    start = time.perf_counter()
    results = await fetch_all_async(urls, max_concurrent=20)
    elapsed = time.perf_counter() - start
    
    print(f"Fetched {len(results)} URLs in {elapsed:.1f}s")

asyncio.run(main())
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> ใช้ <code>requests</code> library ใน async code → มันจะ block event loop! ต้องใช้ <code>aiohttp</code> หรือ <code>httpx</code> ที่เป็น async-native
</div>

<h3>📌 Multiprocessing — เหมาะกับ CPU-bound</h3>

<pre><code class="language-python">from concurrent.futures import ProcessPoolExecutor
import pandas as pd

def process_file(filepath: str) -> dict:
    """Process single file — CPU-intensive work"""
    df = pd.read_parquet(filepath)
    
    result = {
        'file': filepath,
        'rows': len(df),
        'total_amount': df['amount'].sum(),
        'unique_customers': df['customer_id'].nunique(),
    }
    return result

def process_files_parallel(file_list: list[str], 
                           max_workers: int = 4) -> list[dict]:
    """Process หลายไฟล์แบบ parallel"""
    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        results = list(executor.map(process_file, file_list))
    return results

# ใช้งาน
files = [f"data/partition_{i}.parquet" for i in range(20)]
summaries = process_files_parallel(files, max_workers=4)
</code></pre>

<h3>📌 Producer-Consumer Pattern ด้วย Queue</h3>

<pre><code class="language-python">import threading
import queue
import time

def producer(q: queue.Queue, data_source: list, batch_size: int = 100):
    """Producer: อ่านข้อมูลแล้วใส่ queue"""
    for i in range(0, len(data_source), batch_size):
        batch = data_source[i:i + batch_size]
        q.put(batch)
        time.sleep(0.1)
    q.put(None)  # sentinel: บอกว่าจบแล้ว

def consumer(q: queue.Queue, consumer_id: int):
    """Consumer: หยิบจาก queue มา process"""
    processed = 0
    while True:
        batch = q.get()
        if batch is None:
            q.put(None)  # ส่ง sentinel ต่อให้ consumer อื่น
            break
        # process batch
        processed += len(batch)
        print(f"Consumer {consumer_id}: processed {processed} records")
        q.task_done()

# ใช้งาน
data = list(range(10000))
q = queue.Queue(maxsize=10)  # backpressure: max 10 batches in queue

producer_thread = threading.Thread(target=producer, args=(q, data))
consumers = [
    threading.Thread(target=consumer, args=(q, i))
    for i in range(3)
]

producer_thread.start()
for c in consumers:
    c.start()

producer_thread.join()
for c in consumers:
    c.join()
</code></pre>

<h3>🧠 วิธีคิด: เลือก Concurrency Model ยังไง</h3>

<table>
  <tr><th>งาน</th><th>Model</th><th>เหตุผล</th></tr>
  <tr><td>ดึง API 100 endpoints</td><td>asyncio / Threading</td><td>I/O-bound, รอ network</td></tr>
  <tr><td>Process 50 Parquet files</td><td>Multiprocessing</td><td>CPU-bound, ใช้หลาย cores</td></tr>
  <tr><td>Read DB + Write file</td><td>Threading</td><td>I/O-bound, simple</td></tr>
  <tr><td>ML feature engineering</td><td>Multiprocessing</td><td>CPU-intensive computation</td></tr>
</table>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน Python มี GIL (Global Interpreter Lock) → threads ไม่ได้ทำงาน CPU แบบ parallel จริง ๆ ถ้าต้องการ CPU parallelism ต้องใช้ <code>ProcessPoolExecutor</code>
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>asyncio.Semaphore(n)</code> เพื่อจำกัดจำนวน concurrent requests — ป้องกัน API overload หรือ connection exhaustion
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน async function ที่ดึง API 50 endpoints พร้อมกัน โดย:</p>
<ol>
  <li>จำกัด max 10 concurrent requests</li>
  <li>Retry แต่ละ request สูงสุด 3 ครั้ง</li>
  <li>Return ทั้ง successful results และ failed URLs</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">import asyncio
import aiohttp

async def fetch_with_retry(session, url, semaphore, max_retries=3):
    async with semaphore:
        for attempt in range(1, max_retries + 1):
            try:
                async with session.get(url, timeout=aiohttp.ClientTimeout(total=30)) as resp:
                    data = await resp.json()
                    return {'url': url, 'data': data, 'status': 'success'}
            except Exception as e:
                if attempt == max_retries:
                    return {'url': url, 'error': str(e), 'status': 'failed'}
                await asyncio.sleep(attempt * 1.0)

async def fetch_batch(urls, max_concurrent=10):
    semaphore = asyncio.Semaphore(max_concurrent)
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_with_retry(session, url, semaphore) for url in urls]
        results = await asyncio.gather(*tasks)
    
    success = [r for r in results if r['status'] == 'success']
    failed = [r for r in results if r['status'] == 'failed']
    return success, failed
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบาย GIL ใน Python และผลกระทบต่อ concurrency</strong></p>
<p><strong>A:</strong> GIL (Global Interpreter Lock) คือ mutex ที่ทำให้ Python bytecode ถูก execute โดย thread เดียวในเวลาหนึ่ง ๆ ทำให้ multi-threading ไม่ช่วยกับ CPU-bound tasks (ไม่ได้ parallel จริง) แต่ช่วยกับ I/O-bound tasks ได้เพราะ GIL ถูกปล่อยตอนรอ I/O. สำหรับ CPU-bound ต้องใช้ multiprocessing ที่แต่ละ process มี interpreter + GIL เป็นของตัวเอง</p>
</div>
`
  },
  {
    number: 8,
    slug: 'testing',
    emoji: '🧪',
    title: 'Testing สำหรับ DE',
    content: `
<h2>🧪 บทที่ 8: Testing — pytest, Fixtures, Mocking & TDD</h2>

<p>Pipeline ที่ไม่มี tests เหมือนสะพานที่ไม่มี engineer ตรวจ — อาจจะไม่พังวันนี้ แต่จะพังวันไหนไม่มีใครรู้ DE ที่เขียน tests = DE ที่ทีมไว้ใจ บทนี้สอนวิธีเขียน tests สำหรับ data pipelines ซึ่งไม่ง่ายเหมือน test web app</p>

<h3>📌 pytest Basics</h3>

<pre><code class="language-python"># tests/test_transform.py
import pytest
from datetime import date
from pipeline.transform import clean_record, calculate_revenue

class TestCleanRecord:
    """Test clean_record function"""
    
    def test_basic_cleaning(self):
        raw = {
            'name': '  John Doe  ',
            'amount': '1500.50',
            'date': '2024-01-15',
        }
        result = clean_record(raw)
        
        assert result['name'] == 'JOHN DOE'
        assert result['amount'] == 1500.50
        assert result['date'] == date(2024, 1, 15)
    
    def test_null_amount_defaults_to_zero(self):
        raw = {'name': 'Test', 'amount': '', 'date': '2024-01-15'}
        result = clean_record(raw)
        assert result['amount'] == 0.0
    
    def test_invalid_date_raises_error(self):
        raw = {'name': 'Test', 'amount': '100', 'date': 'not-a-date'}
        with pytest.raises(ValueError, match="Invalid date format"):
            clean_record(raw)
    
    @pytest.mark.parametrize("input_name,expected", [
        ("john doe", "JOHN DOE"),
        ("  JANE  ", "JANE"),
        ("María García", "MARÍA GARCÍA"),
        ("", ""),
    ])
    def test_name_cleaning_variants(self, input_name, expected):
        raw = {'name': input_name, 'amount': '0', 'date': '2024-01-01'}
        result = clean_record(raw)
        assert result['name'] == expected
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>@pytest.mark.parametrize</code> เพื่อ test หลาย cases ด้วย function เดียว — DRY และง่ายต่อการเพิ่ม test cases ใหม่
</div>

<h3>📌 Fixtures — Setup/Teardown ที่ Reusable</h3>

<pre><code class="language-python"># tests/conftest.py — shared fixtures
import pytest
import pandas as pd
from pathlib import Path
import tempfile
import json

@pytest.fixture
def sample_orders():
    """Sample orders data for testing"""
    return [
        {'order_id': 1, 'customer_id': 101, 'amount': 150.00, 
         'status': 'completed', 'order_date': '2024-01-15'},
        {'order_id': 2, 'customer_id': 102, 'amount': 250.00, 
         'status': 'completed', 'order_date': '2024-01-15'},
        {'order_id': 3, 'customer_id': 101, 'amount': 75.00, 
         'status': 'cancelled', 'order_date': '2024-01-16'},
        {'order_id': 4, 'customer_id': 103, 'amount': 500.00, 
         'status': 'completed', 'order_date': '2024-01-16'},
    ]

@pytest.fixture
def sample_orders_df(sample_orders):
    """Sample orders as DataFrame"""
    df = pd.DataFrame(sample_orders)
    df['order_date'] = pd.to_datetime(df['order_date'])
    return df

@pytest.fixture
def temp_data_dir():
    """Temporary directory for test data files"""
    with tempfile.TemporaryDirectory() as tmpdir:
        yield Path(tmpdir)

@pytest.fixture
def sample_csv_file(temp_data_dir, sample_orders):
    """Create a sample CSV file"""
    filepath = temp_data_dir / "orders.csv"
    df = pd.DataFrame(sample_orders)
    df.to_csv(filepath, index=False)
    return filepath

@pytest.fixture(scope="session")
def db_connection():
    """Database connection — shared across all tests in session"""
    from sqlalchemy import create_engine
    engine = create_engine("sqlite:///:memory:")
    yield engine
    engine.dispose()
</code></pre>

<h3>📌 Mocking — Test โดยไม่ต้องเรียก External Service จริง</h3>

<pre><code class="language-python">from unittest.mock import Mock, patch, MagicMock
import pytest

class TestAPIExtractor:
    """Test API extractor with mocked HTTP calls"""
    
    @patch('pipeline.extract.requests.Session')
    def test_extract_success(self, mock_session_class):
        # Arrange
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'data': [
                {'id': 1, 'name': 'Product A'},
                {'id': 2, 'name': 'Product B'},
            ],
            'next_cursor': None,
        }
        mock_response.raise_for_status = Mock()
        
        mock_session = Mock()
        mock_session.get.return_value = mock_response
        mock_session_class.return_value = mock_session
        
        # Act
        from pipeline.extract import APIExtractor
        extractor = APIExtractor(base_url="https://api.test.com")
        result = extractor.extract("/products")
        
        # Assert
        assert len(result) == 2
        assert result[0]['name'] == 'Product A'
        mock_session.get.assert_called_once()
    
    @patch('pipeline.extract.requests.Session')
    def test_extract_handles_timeout(self, mock_session_class):
        mock_session = Mock()
        mock_session.get.side_effect = requests.exceptions.Timeout("timeout")
        mock_session_class.return_value = mock_session
        
        from pipeline.extract import APIExtractor
        extractor = APIExtractor(base_url="https://api.test.com")
        
        with pytest.raises(ExtractionError, match="timed out"):
            extractor.extract("/products")
</code></pre>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> Mock มากเกินไป → test ผ่านแต่ code จริงพัง เพราะ mock ไม่ได้จำลองพฤติกรรมจริง! Mock แค่ external boundaries (API, DB, filesystem)
</div>

<h3>📌 Testing Data Transformations</h3>

<pre><code class="language-python">import pandas as pd
from pandas.testing import assert_frame_equal

class TestDailyRevenue:
    """Test daily revenue calculation"""
    
    def test_basic_aggregation(self, sample_orders_df):
        result = calculate_daily_revenue(sample_orders_df)
        
        # Check structure
        assert list(result.columns) == ['date', 'total_revenue', 'order_count']
        assert len(result) == 2  # 2 unique dates
    
    def test_excludes_cancelled_orders(self, sample_orders_df):
        result = calculate_daily_revenue(sample_orders_df)
        
        # Day 1: orders 1,2 completed = 150 + 250 = 400
        day1 = result[result['date'] == '2024-01-15']
        assert day1['total_revenue'].iloc[0] == 400.0
        assert day1['order_count'].iloc[0] == 2
    
    def test_empty_dataframe(self):
        empty_df = pd.DataFrame(columns=['order_id', 'amount', 'status', 'order_date'])
        result = calculate_daily_revenue(empty_df)
        assert len(result) == 0
    
    def test_all_cancelled(self):
        df = pd.DataFrame([
            {'order_id': 1, 'amount': 100, 'status': 'cancelled', 
             'order_date': '2024-01-15'},
        ])
        df['order_date'] = pd.to_datetime(df['order_date'])
        result = calculate_daily_revenue(df)
        assert len(result) == 0
</code></pre>

<h3>📌 Integration Tests & Test Fixtures</h3>

<pre><code class="language-python"># tests/test_integration.py
import pytest
import sqlite3

@pytest.fixture
def setup_test_db(temp_data_dir):
    """สร้าง test database พร้อม sample data"""
    db_path = temp_data_dir / "test.db"
    conn = sqlite3.connect(str(db_path))
    cursor = conn.cursor()
    
    cursor.execute("""
        CREATE TABLE orders (
            order_id INTEGER PRIMARY KEY,
            customer_id INTEGER,
            amount REAL,
            status TEXT,
            order_date TEXT
        )
    """)
    
    cursor.executemany(
        "INSERT INTO orders VALUES (?, ?, ?, ?, ?)",
        [
            (1, 101, 150.0, 'completed', '2024-01-15'),
            (2, 102, 250.0, 'completed', '2024-01-15'),
            (3, 101, 75.0, 'cancelled', '2024-01-16'),
        ]
    )
    conn.commit()
    yield conn
    conn.close()

class TestETLPipeline:
    """Integration tests สำหรับ full pipeline"""
    
    def test_full_pipeline(self, setup_test_db, temp_data_dir):
        from pipeline.main import run_pipeline
        
        result = run_pipeline(
            source_conn=setup_test_db,
            output_dir=str(temp_data_dir / "output"),
        )
        
        assert result['status'] == 'success'
        assert result['records_processed'] == 2  # exclude cancelled
        
        # Verify output file exists
        output_files = list((temp_data_dir / "output").glob("*.parquet"))
        assert len(output_files) == 1
</code></pre>

<h3>🧠 วิธีคิด: Test Pyramid สำหรับ DE</h3>

<ul>
  <li><strong>Unit Tests (70%)</strong>: test transform functions, validators, parsers แยกจากกัน</li>
  <li><strong>Integration Tests (20%)</strong>: test pipeline end-to-end ด้วย test database</li>
  <li><strong>Data Quality Tests (10%)</strong>: test ข้อมูลจริงใน staging — null counts, uniqueness, ranges</li>
</ul>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>pytest -v --tb=short</code> เพื่อดู verbose output + short traceback ตอน debug, และ <code>pytest -x</code> เพื่อหยุดทันทีที่ test แรก fail
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> แยกไฟล์ <code>conftest.py</code> ตาม folder — fixtures ใน <code>tests/conftest.py</code> ใช้ได้ทุก test, fixtures ใน <code>tests/unit/conftest.py</code> ใช้ได้เฉพาะ unit tests
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> เขียน test suite สำหรับ function <code>validate_schema(df, schema)</code> ที่ตรวจ DataFrame ตาม schema:</p>
<ol>
  <li>Test ที่ schema ถูกต้อง</li>
  <li>Test ที่ column หายไป</li>
  <li>Test ที่ type ผิด</li>
  <li>Test ที่มี null เกิน threshold</li>
</ol>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">class TestValidateSchema:
    @pytest.fixture
    def schema(self):
        return {
            'order_id': {'type': 'int64', 'nullable': False},
            'amount': {'type': 'float64', 'nullable': False, 'max_null_pct': 0.0},
            'status': {'type': 'object', 'nullable': True, 'max_null_pct': 0.1},
        }
    
    def test_valid_data(self, schema):
        df = pd.DataFrame({
            'order_id': [1, 2, 3],
            'amount': [100.0, 200.0, 300.0],
            'status': ['active', 'active', None],
        })
        is_valid, errors = validate_schema(df, schema)
        assert is_valid
        assert errors == []
    
    def test_missing_column(self, schema):
        df = pd.DataFrame({'order_id': [1], 'amount': [100.0]})
        is_valid, errors = validate_schema(df, schema)
        assert not is_valid
        assert any('status' in e for e in errors)
    
    def test_wrong_type(self, schema):
        df = pd.DataFrame({
            'order_id': ['a', 'b'],  # should be int
            'amount': [100.0, 200.0],
            'status': ['ok', 'ok'],
        })
        is_valid, errors = validate_schema(df, schema)
        assert not is_valid
    
    def test_null_exceeds_threshold(self, schema):
        df = pd.DataFrame({
            'order_id': [1, 2, 3, 4, 5],
            'amount': [100.0, None, 300.0, None, 500.0],  # 40% null
            'status': ['ok'] * 5,
        })
        is_valid, errors = validate_schema(df, schema)
        assert not is_valid
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: คุณ test data pipeline อย่างไร? มี challenges อะไรบ้าง?</strong></p>
<p><strong>A:</strong> Test แบ่ง 3 ชั้น: (1) Unit tests สำหรับ transform functions ใช้ synthetic data, test edge cases. (2) Integration tests ใช้ test database (SQLite หรือ Docker) ทดสอบ end-to-end. (3) Data quality tests ตรวจ output data — null rates, uniqueness, value ranges. Challenges: ข้อมูลเปลี่ยนตลอดเวลา, ต้อง mock external systems, test data ต้อง representative แต่ไม่ใช่ production data (privacy)</p>
</div>
`
  },
  {
    number: 9,
    slug: 'design-patterns',
    emoji: '🏗️',
    title: 'Design Patterns & Production Code',
    content: `
<h2>🏗️ บทที่ 9: Design Patterns & Production Code</h2>

<p>ความแตกต่างระหว่าง DE junior กับ senior ไม่ใช่แค่ "เขียน code ได้" แต่คือ "เขียน code ที่คนอื่น maintain ได้ ทำงานได้ stable และ scale ได้" บทนี้รวม patterns ที่ DE teams ใช้จริงใน production</p>

<h3>📌 Pattern 1: Strategy Pattern — เปลี่ยน Logic โดยไม่แก้ Code</h3>

<pre><code class="language-python">from abc import ABC, abstractmethod
from typing import Protocol

class DataWriter(Protocol):
    """Protocol (interface) สำหรับ data writer"""
    def write(self, records: list[dict], destination: str) -> int: ...

class ParquetWriter:
    def write(self, records: list[dict], destination: str) -> int:
        import pyarrow as pa, pyarrow.parquet as pq
        table = pa.Table.from_pylist(records)
        pq.write_table(table, destination)
        return len(records)

class CSVWriter:
    def write(self, records: list[dict], destination: str) -> int:
        import csv
        with open(destination, 'w', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=records[0].keys())
            writer.writeheader()
            writer.writerows(records)
        return len(records)

class DatabaseWriter:
    def __init__(self, engine):
        self.engine = engine
    
    def write(self, records: list[dict], destination: str) -> int:
        import pandas as pd
        df = pd.DataFrame(records)
        df.to_sql(destination, self.engine, if_exists='append', index=False)
        return len(records)

# Pipeline ไม่ต้องรู้ว่าจะเขียนไปไหน
class Pipeline:
    def __init__(self, writer: DataWriter):
        self.writer = writer
    
    def run(self, data: list[dict], output: str):
        cleaned = self.transform(data)
        count = self.writer.write(cleaned, output)
        print(f"Wrote {count} records")

# เปลี่ยน output format ง่าย ๆ
pipeline = Pipeline(writer=ParquetWriter())
# หรือ
pipeline = Pipeline(writer=DatabaseWriter(engine))
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>Protocol</code> (Python 3.8+) แทน ABC เมื่อทำ structural typing — ไม่ต้อง inherit จาก base class แค่ implement methods ที่ตรง signature ก็ใช้ได้ (duck typing ที่มี type hint)
</div>

<h3>📌 Pattern 2: Builder Pattern — สร้าง Complex Objects</h3>

<pre><code class="language-python">class QueryBuilder:
    """SQL Query Builder — ป้องกัน SQL injection + readable"""
    
    def __init__(self):
        self._select = []
        self._from = None
        self._joins = []
        self._where = []
        self._group_by = []
        self._order_by = []
        self._limit = None
        self._params = {}
    
    def select(self, *columns) -> 'QueryBuilder':
        self._select.extend(columns)
        return self
    
    def from_table(self, table: str) -> 'QueryBuilder':
        self._from = table
        return self
    
    def join(self, table: str, on: str, 
             join_type: str = "INNER") -> 'QueryBuilder':
        self._joins.append(f"{join_type} JOIN {table} ON {on}")
        return self
    
    def where(self, condition: str, **params) -> 'QueryBuilder':
        self._where.append(condition)
        self._params.update(params)
        return self
    
    def group_by(self, *columns) -> 'QueryBuilder':
        self._group_by.extend(columns)
        return self
    
    def order_by(self, column: str, desc: bool = False) -> 'QueryBuilder':
        direction = "DESC" if desc else "ASC"
        self._order_by.append(f"{column} {direction}")
        return self
    
    def limit(self, n: int) -> 'QueryBuilder':
        self._limit = n
        return self
    
    def build(self) -> tuple[str, dict]:
        parts = [f"SELECT {', '.join(self._select or ['*'])}"]
        parts.append(f"FROM {self._from}")
        
        for join in self._joins:
            parts.append(join)
        
        if self._where:
            parts.append(f"WHERE {' AND '.join(self._where)}")
        
        if self._group_by:
            parts.append(f"GROUP BY {', '.join(self._group_by)}")
        
        if self._order_by:
            parts.append(f"ORDER BY {', '.join(self._order_by)}")
        
        if self._limit:
            parts.append(f"LIMIT {self._limit}")
        
        return '\\n'.join(parts), self._params

# ใช้งาน — อ่านง่ายกว่า string concatenation
query, params = (
    QueryBuilder()
    .select("o.order_date", "SUM(o.amount) as revenue", "COUNT(*) as orders")
    .from_table("orders o")
    .join("customers c", "o.customer_id = c.id")
    .where("o.order_date >= :start_date", start_date='2024-01-01')
    .where("o.status = :status", status='completed')
    .group_by("o.order_date")
    .order_by("o.order_date", desc=True)
    .limit(30)
    .build()
)
</code></pre>

<h3>📌 Pattern 3: Pipeline Pattern — Chain of Transformations</h3>

<pre><code class="language-python">from typing import Callable, Any
import logging

logger = logging.getLogger(__name__)

class DataPipeline:
    """Composable data pipeline with error handling & logging"""
    
    def __init__(self, name: str):
        self.name = name
        self._steps: list[tuple[str, Callable]] = []
    
    def add_step(self, name: str, func: Callable) -> 'DataPipeline':
        self._steps.append((name, func))
        return self
    
    def run(self, data: Any) -> Any:
        logger.info(f"Pipeline '{self.name}' started with {len(self._steps)} steps")
        
        for i, (step_name, func) in enumerate(self._steps, 1):
            try:
                logger.info(f"  Step {i}/{len(self._steps)}: {step_name}")
                data = func(data)
                
                # Log intermediate stats
                if isinstance(data, list):
                    logger.info(f"    → {len(data):,} records")
                    
            except Exception as e:
                logger.error(f"  ❌ Step '{step_name}' failed: {e}")
                raise
        
        logger.info(f"Pipeline '{self.name}' completed ✅")
        return data

# สร้าง pipeline ที่อ่านง่าย
pipeline = (
    DataPipeline("daily_orders")
    .add_step("extract", lambda _: extract_from_api("/orders"))
    .add_step("filter_completed", lambda data: [r for r in data if r['status'] == 'completed'])
    .add_step("enrich", lambda data: [enrich_with_customer(r) for r in data])
    .add_step("validate", validate_records)
    .add_step("load", lambda data: load_to_warehouse(data))
)

pipeline.run(None)
</code></pre>

<h3>📌 Pattern 4: Configuration Management</h3>

<pre><code class="language-python">import os
from dataclasses import dataclass, field
from pathlib import Path
import yaml

@dataclass
class DatabaseConfig:
    host: str = "localhost"
    port: int = 5432
    database: str = "warehouse"
    username: str = "etl_user"
    password: str = ""

@dataclass
class PipelineSettings:
    """Centralized configuration — env vars override file config"""
    env: str = "development"
    db: DatabaseConfig = field(default_factory=DatabaseConfig)
    batch_size: int = 10000
    max_retries: int = 3
    log_level: str = "INFO"
    output_dir: str = "data/output"
    
    @classmethod
    def from_yaml(cls, filepath: str) -> 'PipelineSettings':
        """Load from YAML file"""
        with open(filepath) as f:
            data = yaml.safe_load(f)
        
        db_data = data.pop('database', {})
        return cls(
            db=DatabaseConfig(**db_data),
            **data
        )
    
    @classmethod
    def from_env(cls) -> 'PipelineSettings':
        """Load from environment variables (for production)"""
        return cls(
            env=os.getenv('ENV', 'development'),
            db=DatabaseConfig(
                host=os.getenv('DB_HOST', 'localhost'),
                port=int(os.getenv('DB_PORT', '5432')),
                database=os.getenv('DB_NAME', 'warehouse'),
                username=os.getenv('DB_USER', 'etl_user'),
                password=os.getenv('DB_PASSWORD', ''),
            ),
            batch_size=int(os.getenv('BATCH_SIZE', '10000')),
            log_level=os.getenv('LOG_LEVEL', 'INFO'),
        )

# ใช้งาน
if os.getenv('ENV') == 'production':
    config = PipelineSettings.from_env()
else:
    config = PipelineSettings.from_yaml('config/dev.yaml')
</code></pre>

<h3>🧠 วิธีคิด: เขียน Code ที่ Production-Ready</h3>

<ol>
  <li><strong>Idempotent:</strong> run ซ้ำได้ผลเหมือนเดิม</li>
  <li><strong>Observable:</strong> มี logging, metrics, alerting ที่เพียงพอ</li>
  <li><strong>Configurable:</strong> ไม่ hardcode environment-specific values</li>
  <li><strong>Testable:</strong> dependency injection, pure functions</li>
  <li><strong>Recoverable:</strong> handle failures gracefully, checkpoint/resume</li>
</ol>

<div class="warning-box">
⚠️ <strong>ข้อผิดพลาดที่พบบ่อย:</strong> Hardcode credentials ใน code แล้ว push ขึ้น Git → ข้อมูลรั่ว! ใช้ environment variables หรือ secret manager เสมอ
</div>

<h3>📌 Pattern 5: Idempotent Pipeline</h3>

<pre><code class="language-python">from datetime import date
from pathlib import Path
import json

class IdempotentPipeline:
    """Pipeline ที่ run ซ้ำได้อย่างปลอดภัย"""
    
    def __init__(self, name: str, checkpoint_dir: str = "checkpoints"):
        self.name = name
        self.checkpoint_dir = Path(checkpoint_dir)
        self.checkpoint_dir.mkdir(parents=True, exist_ok=True)
    
    def _checkpoint_path(self, run_date: date) -> Path:
        return self.checkpoint_dir / f"{self.name}_{run_date}.json"
    
    def _load_checkpoint(self, run_date: date) -> dict:
        path = self._checkpoint_path(run_date)
        if path.exists():
            with open(path) as f:
                return json.load(f)
        return {}
    
    def _save_checkpoint(self, run_date: date, state: dict):
        with open(self._checkpoint_path(run_date), 'w') as f:
            json.dump(state, f, indent=2, default=str)
    
    def run(self, run_date: date):
        checkpoint = self._load_checkpoint(run_date)
        
        if checkpoint.get('status') == 'completed':
            print(f"⏭️ Already completed for {run_date}, skipping")
            return checkpoint
        
        try:
            # Delete existing output (idempotent)
            self._cleanup_output(run_date)
            
            # Extract
            if checkpoint.get('step') != 'extracted':
                data = self.extract(run_date)
                self._save_checkpoint(run_date, {'step': 'extracted', 'count': len(data)})
            
            # Transform
            result = self.transform(data)
            
            # Load (UPSERT, not INSERT)
            self.load(result, run_date)
            
            self._save_checkpoint(run_date, {
                'status': 'completed',
                'records': len(result),
                'completed_at': datetime.now().isoformat(),
            })
            
        except Exception as e:
            self._save_checkpoint(run_date, {
                'status': 'failed',
                'error': str(e),
            })
            raise
</code></pre>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใน production ใช้ "DELETE + INSERT" (หรือ UPSERT) แทน "INSERT" ธรรมดา เพื่อให้ pipeline idempotent — run ซ้ำไม่ duplicate data
</div>

<div class="tip-box">
💡 <strong>ทริค:</strong> ใช้ <code>if __name__ == '__main__'</code> เสมอ เพื่อให้ module ทั้ง import ได้ (for testing) และ run ตรง ๆ ได้ (for execution)
</div>

<div class="exercise-box">
<h4>🏋️ แบบฝึกหัด</h4>
<p><strong>โจทย์:</strong> Refactor script ด้านล่างให้เป็น production-grade code โดยใช้ patterns จากบทนี้:</p>
<pre><code class="language-python"># BAD: script ที่ hardcode ทุกอย่าง
import pandas as pd
import psycopg2

conn = psycopg2.connect("postgresql://admin:password123@prod-db:5432/warehouse")
df = pd.read_sql("SELECT * FROM orders WHERE date = '2024-01-15'", conn)
df = df[df['status'] == 'completed']
df['amount'] = df['amount'] * 1.07  # VAT
df.to_csv("C:/output/orders_20240115.csv", index=False)
print("done!")
</code></pre>

<details>
<summary>ดูเฉลย</summary>
<pre><code class="language-python">import os
import logging
from dataclasses import dataclass
from datetime import date
from pathlib import Path
import pandas as pd
from sqlalchemy import create_engine

logger = logging.getLogger(__name__)

@dataclass
class Config:
    db_url: str
    output_dir: str
    vat_rate: float = 0.07
    
    @classmethod
    def from_env(cls):
        return cls(
            db_url=os.environ['DATABASE_URL'],
            output_dir=os.getenv('OUTPUT_DIR', 'data/output'),
        )

def extract_orders(engine, run_date: date) -> pd.DataFrame:
    query = "SELECT * FROM orders WHERE date = :run_date"
    return pd.read_sql(query, engine, params={'run_date': run_date})

def transform_orders(df: pd.DataFrame, vat_rate: float) -> pd.DataFrame:
    return (
        df.copy()
        .query("status == 'completed'")
        .assign(amount=lambda x: x['amount'] * (1 + vat_rate))
    )

def load_orders(df: pd.DataFrame, output_dir: str, run_date: date):
    path = Path(output_dir) / f"orders_{run_date:%Y%m%d}.csv"
    path.parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(path, index=False)
    logger.info(f"Wrote {len(df)} records to {path}")

def main():
    config = Config.from_env()
    engine = create_engine(config.db_url)
    run_date = date.today()
    
    df = extract_orders(engine, run_date)
    df = transform_orders(df, config.vat_rate)
    load_orders(df, config.output_dir, run_date)

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    main()
</code></pre>
</details>
</div>

<div class="interview-box">
<h4>🎯 คำถามสัมภาษณ์</h4>
<p><strong>Q: อธิบาย design principles ที่คุณใช้เมื่อเขียน production data pipeline</strong></p>
<p><strong>A:</strong> หลัก 5 ข้อ: (1) <strong>Idempotency</strong> — run ซ้ำได้ผลเหมือนเดิม ใช้ UPSERT + DELETE before INSERT. (2) <strong>Separation of concerns</strong> — แยก extract/transform/load เป็น functions/classes ที่ test ได้แยกกัน. (3) <strong>Configuration over hardcoding</strong> — ใช้ env vars + config files. (4) <strong>Observability</strong> — structured logging, metrics, alerting. (5) <strong>Fail gracefully</strong> — dead letter queues, circuit breakers, checkpointing เพื่อ resume ได้เมื่อ fail</p>
</div>
`
  }
];
