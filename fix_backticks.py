#!/usr/bin/env python3
"""Convert backtick template literals to single-quoted strings in JS files.
Single-quoted strings don't interpolate ${...} so it's safe for content with shell scripts."""
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def convert_backticks_to_single_quotes(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = []
    i = 0
    n = len(content)
    converted = 0
    
    while i < n:
        ch = content[i]
        
        if ch == '\\':
            result.append(ch)
            if i + 1 < n:
                result.append(content[i+1])
            i += 2
            continue
        
        # Single-quoted string - keep as-is but fix newlines
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
                    result.append(c)
                    i += 1
                    break
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
        
        # Backtick template literal - convert to single-quoted
        elif ch == '`':
            result.append("'")  # Replace ` with '
            i += 1
            converted += 1
            while i < n:
                c = content[i]
                
                if c == '\\':
                    # Check what's being escaped
                    next_c = content[i+1] if i + 1 < n else ''
                    if next_c == '`':
                        # \` -> just ` (backtick in template literal)
                        result.append('`')
                        i += 2
                        continue
                    elif next_c == '$':
                        # \$ in template literal means literal $
                        result.append('\\$')
                        i += 2
                        continue
                    elif next_c == "'":
                        # \' - escape the quote
                        result.append("\\'")
                        i += 2
                        continue
                    else:
                        result.append(c)
                        if i + 1 < n:
                            result.append(content[i+1])
                        i += 2
                        continue
                
                if c == '`':
                    # End of template literal
                    result.append("'")  # Replace closing ` with '
                    i += 1
                    break
                
                # Template expressions ${...} - in single-quoted strings, these are literal
                # So we don't need to escape them
                if c == '$' and i + 1 < n and content[i+1] == '{':
                    # Just output as-is - in single quotes, ${...} is literal
                    result.append(c)
                    i += 1
                    continue
                
                # Handle single quotes inside content - must escape them
                if c == "'":
                    result.append("\\'")
                    i += 1
                    continue
                
                # Handle newlines - convert to \n
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
        
        # Double-quoted string - keep as-is
        elif ch == '"':
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
                if c == '"':
                    result.append(c)
                    i += 1
                    break
                if c == '\n':
                    result.append('\\n')
                    i += 1
                    continue
                result.append(c)
                i += 1
        
        else:
            result.append(ch)
            i += 1
    
    fixed_content = ''.join(result)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    print(f"Converted {converted} template literals to single-quoted strings in {os.path.basename(filepath)}")
    return converted > 0


files = [
    'data/courses/sw-linux-k8s.js',
    'data/courses/sw-nextjs.js',
    'data/courses/sw-microservices.js',
    'data/courses/sw-system-design.js',
    'data/courses/sw-python-backend.js',
]

for f in files:
    if os.path.exists(f):
        convert_backticks_to_single_quotes(f)
    else:
        print(f"File not found: {f}")
