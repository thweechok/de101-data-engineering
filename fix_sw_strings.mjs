// Fix unterminated string constants in SW course files
// Replaces literal newlines inside JavaScript string literals with \n
import fs from 'fs';
import path from 'path';

const dir = 'd:/AI/ขาย/de-course/data/courses';

const files = fs.readdirSync(dir).filter(f => f.startsWith('sw-') && f.endsWith('.js'));

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix unterminated single-quoted strings by replacing newlines inside them
  // Strategy: go char by char tracking if we're inside a single-quoted string
  let result = '';
  let inString = false;
  let escaped = false;
  let hadFix = false;
  
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    
    if (escaped) {
      result += ch;
      escaped = false;
      continue;
    }
    
    if (ch === '\\') {
      escaped = true;
      result += ch;
      continue;
    }
    
    if (ch === "'" && !inString) {
      inString = true;
      result += ch;
      continue;
    }
    
    if (ch === "'" && inString) {
      inString = false;
      result += ch;
      continue;
    }
    
    // If inside a string and we hit a raw newline, replace with \n
    if (inString && (ch === '\n' || ch === '\r')) {
      if (ch === '\r' && content[i+1] === '\n') {
        i++; // skip \r\n pair
      }
      result += '\\n';
      hadFix = true;
      continue;
    }
    
    result += ch;
  }
  
  if (hadFix) {
    fs.writeFileSync(filePath, result, 'utf-8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nDone. Fixed ${fixedCount} files.`);
