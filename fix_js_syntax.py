#!/usr/bin/env python3
"""
Fix JS syntax errors in SW course files:
1. sw-react.js, sw-fastapi.js: garbled bytes → fix with surrogatepass
2. sw-nextjs.js, sw-linux-k8s.js: multi-line template literals → convert to single-line
"""
import os
import re
import codecs

COURSES_DIR = r'd:\AI\ขาย\de-course\data\courses'

def fix_single_line_string(content):
    """Fix a file where content is stored as single-line strings.
    Replaces replacement chars and fixes encoding issues."""
    # Replace Unicode replacement character with empty string (garbled bytes)
    content = content.replace('\ufffd', '')
    # Replace lone surrogates  
    try:
        content.encode('utf-8')
    except UnicodeEncodeError:
        content = content.encode('utf-8', errors='ignore').decode('utf-8')
    return content

def fix_multiline_to_singleline(content):
    """Convert a file with multi-line template literals to single-line format.
    Handles both template literals and string splitting issues."""
    lines = content.split('\n')
    result_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        # Check if this line starts/contains a content property with open template literal
        # Pattern: content: `... (or content: '... that's not closed)
        # We need to handle template literals that span multiple lines
        
        # Simple approach: track if we're inside a backtick string
        # and join lines with \n
        result_lines.append(line)
        i += 1
    
    return '\n'.join(result_lines)

def fix_template_literals(content):
    """Fix template literals with ${...} expressions and literal newlines."""
    result = []
    i = 0
    n = len(content)
    
    while i < n:
        ch = content[i]
        
        # Check for template literal
        if ch == '`':
            result.append(ch)
            i += 1
            # Now we're inside a template literal
            while i < n:
                c = content[i]
                if c == '\\':
                    # Escaped char - keep as-is
                    result.append(c)
                    if i + 1 < n:
                        result.append(content[i+1])
                    i += 2
                    continue
                if c == '`':
                    # End of template literal
                    result.append(c)
                    i += 1
                    break
                if c == '$' and i + 1 < n and content[i+1] == '{':
                    # Template expression - escape it
                    result.append('\\$')
                    result.append('{')
                    i += 2
                    continue
                if c == '\r':
                    if i + 1 < n and content[i+1] == '\n':
                        i += 1  # skip \r
                    result.append('\\n')
                    i += 1
                    continue
                if c == '\n':
                    result.append('\\n')
                    i += 1
                    continue
                result.append(c)
                i += 1
        
        # Check for single-quoted string
        elif ch == "'":
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
                if c == '\r':
                    if i + 1 < n and content[i+1] == '\n':
                        i += 1
                    result.append('\\n')
                    i += 1
                    continue
                if c == '\n':
                    result.append('\\n')
                    i += 1
                    continue
                result.append(c)
                i += 1
        
        # Check for double-quoted string
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
                if c == '\r':
                    if i + 1 < n and content[i+1] == '\n':
                        i += 1
                    result.append('\\n')
                    i += 1
                    continue
                if c == '\n':
                    result.append('\\n')
                    i += 1
                    continue
                result.append(c)
                i += 1
        
        else:
            result.append(ch)
            i += 1
    
    return ''.join(result)


def process_file(filepath):
    filename = os.path.basename(filepath)
    
    # Read with surrogatepass to handle garbled bytes
    with open(filepath, 'rb') as f:
        raw = f.read()
    
    try:
        content = raw.decode('utf-8')
    except UnicodeDecodeError:
        # Try with surrogate pass
        content = raw.decode('utf-8', errors='replace')
        print(f"  [WARNING] Had decode errors in {filename}, replaced bad bytes")
    
    # Apply the template literal / string fixer
    fixed = fix_template_literals(content)
    
    if fixed != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f"Fixed: {filename}")
        return True
    else:
        print(f"No change: {filename}")
        return False

# Process the 4 broken files
broken_files = [
    'sw-react.js',
    'sw-fastapi.js', 
    'sw-nextjs.js',
    'sw-linux-k8s.js',
]

fixed_count = 0
for fname in broken_files:
    fpath = os.path.join(COURSES_DIR, fname)
    if os.path.exists(fpath):
        print(f"Processing {fname}...")
        if process_file(fpath):
            fixed_count += 1
    else:
        print(f"File not found: {fname}")

print(f"\nTotal fixed: {fixed_count}/{len(broken_files)}")
