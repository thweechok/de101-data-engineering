import re

with open('data/courses-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all course IDs
keys = re.findall(r"'([^']+)':\s*\{", content)
print('Course IDs found:', len(keys))
print(keys)

# Show first entry
idx = content.find("'de101'")
end_idx = content.find("\n  },", idx) + 5
print("\nFirst entry:")
print(content[idx:end_idx])
