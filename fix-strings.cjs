const fs = require('fs');
const path = require('path');

const base = 'd:/AI/ขาย/de-course/data/courses/';
const files = [
  'tiktok-content.js','line-oa-pro.js','canva-seller.js',
  'chatgpt-pro.js','google-analytics.js','codex-mastery.js',
  'claude-ecosystem.js','uxui-design.js',
  'n8n-automation.js','facebook-ads.js','power-bi.js',
  'excel-business.js','python-automation.js','tiktok-shop-setup.js',
  'prompt-engineering.js','notion-ai.js',
  // Advanced DE
  'dbt-mastery.js','docker-de.js','airflow-advanced.js',
  'pyspark-mastery.js','databricks-fundamentals.js','terraform-de.js',
  'aws-data-engineer.js','azure-data-engineer.js','apache-flink.js',
  'medallion-architecture.js','data-quality.js','data-catalog.js',
  'de-portfolio.js','freelance-de.js','de-system-design.js',
  // Data Analyst
  'sql-for-da.js','python-da.js','tableau.js','statistics-da.js','da-career.js'
];


files.forEach(filename => {
  const filePath = base + filename;
  if (!fs.existsSync(filePath)) { console.log('SKIP:', filename); return; }

  let src = fs.readFileSync(filePath, 'utf8');
  let out = '';
  let i = 0;

  while (i < src.length) {
    // Detect start of content property value: content: '
    if (src[i] === "'" && i >= 10 && src.slice(i - 10, i).includes('content:')) {
      // Start of content string
      out += "'";
      i++;
      // Scan until closing quote (unescaped ' not preceded by \)
      while (i < src.length) {
        const ch = src[i];
        if (ch === '\\' && i + 1 < src.length) {
          // Already escaped char — keep as-is
          out += ch + src[i + 1];
          i += 2;
        } else if (ch === "'") {
          // Could be end of string — check what follows
          let j = i + 1;
          // Skip whitespace
          while (j < src.length && (src[j] === ' ' || src[j] === '\t')) j++;
          const next = src[j];
          if (next === '\n' || next === '\r' || next === ',' || next === '\n' || next === '}') {
            // Real end of string
            out += "'";
            i++;
            break;
          } else {
            // Unescaped quote inside string — escape it
            out += "\\'";
            i++;
          }
        } else if (ch === '\n' || ch === '\r') {
          // Literal newline inside string — convert to \n
          out += '\\n';
          i++;
          if (ch === '\r' && src[i] === '\n') i++; // skip \r\n
        } else {
          out += ch;
          i++;
        }
      }
    } else {
      out += src[i];
      i++;
    }
  }

  fs.writeFileSync(filePath, out, 'utf8');
  console.log('Fixed:', filename);
});

console.log('All done!');
