with open('app/courses/page.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find and replace filterGroups with clean ASCII-safe version
old = "const filterGroups = ["
idx = content.find(old)
end_idx = content.find("];", idx) + 2

new_filterGroups = """const filterGroups = [
  { key: 'all',  label: '\u2728 \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14' },
  { key: 'de',   label: 'Data Engineering' },
  { key: 'da',   label: 'Data Analyst' },
  { key: 'line', label: 'LINE API' },
  { key: 'ai',   label: 'AI Tools' },
  { key: 'ecom', label: 'E-Commerce' },
];"""

new_content = content[:idx] + new_filterGroups + content[end_idx:]

with open('app/courses/page.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! filterGroups replaced successfully.")
print("Char at label start:", repr(new_filterGroups[30:60]))
