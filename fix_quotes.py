#!/usr/bin/env python3
"""
Fix unescaped single quotes inside JS content strings.
For sw-react.js and sw-fastapi.js specifically.
"""
import re
import sys

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
            # Already escaped char - keep as-is
            result.append(ch)
            if i + 1 < n:
                result.append(content[i+1])
            i += 2
            continue
        
        if ch == "'":
            # Single-quoted string starts
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
                    # Potential end of string
                    # Check: is this truly the end (next non-space is , or } or ] or \n)
                    # or an unescaped quote in the middle of content?
                    j = i + 1
                    # Skip whitespace
                    while j < n and content[j] in (' ', '\t', '\r', '\n'):
                        j += 1
                    
                    # Look what follows
                    rest = content[j:j+20] if j < n else ''
                    
                    # These patterns indicate the string truly ended
                    # (next is JS syntax: , or } or ] or // or /*  or end of line with commas)
                    if rest and rest[0] in (',', '}', ']', ')'):
                        # Legitimate end of string
                        result.append(c)
                        i += 1
                        break
                    elif rest.startswith('\n') or rest == '':
                        # End of line after quote - legitimate end
                        result.append(c)
                        i += 1
                        break
                    elif rest.startswith('//') or rest.startswith('/*'):
                        # Comment follows - legitimate end
                        result.append(c)
                        i += 1
                        break
                    else:
                        # This quote is INSIDE the string content - escape it
                        result.append('\\')
                        result.append(c)
                        fixed_count += 1
                        i += 1
                        continue
                
                if c == '\n':
                    # Literal newline inside single-quoted string - replace with \n
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
        print(f"Fixed {fixed_count} unescaped quotes in {filepath}")
        return True
    else:
        print(f"No changes needed in {filepath}")
        return False

files = [
    'data/courses/sw-react.js',
    'data/courses/sw-fastapi.js',
]

for f in files:
    print(f"Processing {f}...")
    fix_content_strings(f)
