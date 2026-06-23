const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '..', 'data', 'courses');
const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.js'));

let totalFixed = 0;

files.forEach(file => {
  const filepath = path.join(coursesDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;
  
  // Strategy: Replace triple backticks inside content strings
  // Content is stored in: content: `...`
  // Triple backticks in markdown code blocks break the template literal
  // Replace ``` with escaped version
  
  // First, escape any unescaped ${ (Python f-strings inside JS template literals)
  content = content.replace(/(?<!\\)\$\{/g, '\\${');
  // Fix double escapes
  content = content.replace(/\\\\\$\{/g, '\\${');
  
  // Now handle triple backticks inside content template literals
  // We need to find content: ` ... ` and escape inner backticks
  // Simpler approach: replace ``` with html <pre><code> if not already
  // Or use \\` to escape
  
  // Replace markdown code blocks (```language ... ```) with <pre><code>
  content = content.replace(/```(\w+)\n/g, '<pre><code class="language-$1">');
  content = content.replace(/```\n/g, '</code></pre>\n');
  content = content.replace(/```$/gm, '</code></pre>');
  // Handle remaining standalone ```
  content = content.replace(/```/g, '</code></pre>');
  
  if (content !== original) {
    fs.writeFileSync(filepath, content);
    const changes = content.length - original.length;
    console.log(`Fixed: ${file} (${changes > 0 ? '+' : ''}${changes} chars)`);
    totalFixed++;
  } else {
    console.log(`OK: ${file}`);
  }
});

console.log(`\nDone. Fixed ${totalFixed} files.`);
