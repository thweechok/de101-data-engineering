#!/usr/bin/env python3
"""Fix unescaped single quotes in ALL sw-*.js content strings."""
import os
import glob

def fix_content_strings(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = []
    i = 0
    n = len(content)
    fixed_count = 0
    
    while i < n:
        ch = content[i]
        
        if ch == '\\':
            result.append(ch)
            if i + 1 < n:
                result.append(content[i+1])
            i += 2
            continue
        
        if ch == "'":
            result.append(ch)
            i += 1
            while i < n:
                c = content[i]
                if c == '\\':
                    result.append(c)
                    if i + 1 < n:
                        result.append(content[i+1])
                    i += 2
                    continue
                
                if c == "'":
                    # Check: is this a legitimate string end or unescaped quote inside content?
                    j = i + 1
                    while j < n and content[j] in (' ', '\t'):
                        j += 1
                    
                    rest = content[j:j+3] if j < n else ''
                    
                    # Legitimate end of string: followed by JS syntax chars
                    if rest and rest[0] in (',', '}', ']', ')', '\n', '\r'):
                        result.append(c)
                        i += 1
                        break
                    elif not rest:
                        result.append(c)
                        i += 1
                        break
                    elif rest.startswith('\n') or rest.startswith('\r'):
                        result.append(c)
                        i += 1
                        break
                    else:
                        # Unescaped quote inside content - escape it
                        result.append('\\')
                        result.append(c)
                        fixed_count += 1
                        i += 1
                        continue
                
                if c == '\n':
                    result.append('\\n')
                    i += 1
                    continue
                if c == '\r':
                    if i + 1 < n and content[i+1] == '\n':
                        i += 1
                    result.append('\\n')
                    i += 1
                    continue
                
                result.append(c)
                i += 1
        else:
            result.append(ch)
            i += 1
    
    fixed_content = ''.join(result)
    
    if fixed_count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"✅ Fixed {fixed_count} unescaped quotes in {os.path.basename(filepath)}")
        return True
    else:
        print(f"   No changes: {os.path.basename(filepath)}")
        return False

files = glob.glob('data/courses/sw-*.js')
files.sort()
total_fixed = 0
for f in files:
    if fix_content_strings(f):
        total_fixed += 1

print(f"\nTotal files fixed: {total_fixed}/{len(files)}")
