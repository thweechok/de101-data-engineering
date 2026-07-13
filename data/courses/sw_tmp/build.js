const fs = require('fs');
const path = require('path');

const metaPath = path.join(__dirname, 'meta.json');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

const chapters = meta.map(ch => {
  const htmlPath = path.join(__dirname, `ch${ch.number}.html`);
  let content = '';
  if (fs.existsSync(htmlPath)) {
    content = fs.readFileSync(htmlPath, 'utf8');
    // Remove newlines to make it a single-line string
    content = content.replace(/\r?\n|\r/g, '');
    // Escape single quotes because the final string is wrapped in single quotes
    content = content.replace(/'/g, "\\'");
  }
  return {
    ...ch,
    content
  };
});

let out = 'export const chapters = [\n';
chapters.forEach((ch, index) => {
  out += `  {\n`;
  out += `    number: ${ch.number},\n`;
  out += `    slug: '${ch.slug}',\n`;
  out += `    emoji: '${ch.emoji}',\n`;
  out += `    title: '${ch.title}',\n`;
  out += `    content: '${ch.content}'\n`;
  out += `  }${index < chapters.length - 1 ? ',' : ''}\n`;
});
out += '];\n';

fs.writeFileSync(path.join(__dirname, '../sw-html-css.js'), out);
console.log('Successfully wrote sw-html-css.js');
