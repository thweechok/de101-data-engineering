const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '..', 'data', 'courses');

// Batch 2 images
const courseImages = {
  'de201': [
    { chapter: 6, img: '/images/courses/cicd-pipeline.png', alt: 'CI/CD Pipeline for Data Engineering' },
  ],
  'de301': [
    { chapter: 1, img: '/images/courses/lakehouse-arch.png', alt: 'Lakehouse Architecture' },
    { chapter: 2, img: '/images/courses/data-mesh.png', alt: 'Data Mesh Architecture' },
  ],
  'python-de': [
    { chapter: 7, img: '/images/courses/python-async.png', alt: 'Python Async vs Sync' },
  ],
  'gcp-cert': [
    { chapter: 1, img: '/images/courses/bigquery-arch.png', alt: 'BigQuery Architecture' },
  ],
  'kafka101': [
    { chapter: 4, img: '/images/courses/kafka-consumers.png', alt: 'Kafka Consumer Groups' },
  ],
  'interview': [
    { chapter: 4, img: '/images/courses/star-method.png', alt: 'STAR Method for Interview' },
  ],
};

Object.entries(courseImages).forEach(([courseId, images]) => {
  const filepath = path.join(coursesDir, `${courseId}.js`);
  if (!fs.existsSync(filepath)) { console.log(`SKIP: ${courseId}.js not found`); return; }

  let content = fs.readFileSync(filepath, 'utf8');
  let modified = false;

  images.forEach(({ chapter, img, alt }) => {
    const imgTag = `<div style="text-align:center;margin:20px 0"><img src="${img}" alt="${alt}" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>`;

    if (content.includes(img)) {
      console.log(`  SKIP: ${courseId} ch${chapter} — already has ${img}`);
      return;
    }

    const chapterPattern = new RegExp(`number:\\s*${chapter}[,\\s]`);
    const match = chapterPattern.exec(content);
    if (!match) { console.log(`  SKIP: ${courseId} ch${chapter} — not found`); return; }

    const contentStart = content.indexOf('content: `', match.index);
    if (contentStart === -1) { console.log(`  SKIP: ${courseId} ch${chapter} — no content`); return; }

    // Insert after first <h2>...</h2>
    const h2Pos = content.indexOf('<h2>', contentStart);
    if (h2Pos !== -1 && h2Pos < contentStart + 3000) {
      const h2End = content.indexOf('</h2>', h2Pos);
      if (h2End !== -1) {
        const insertPos = h2End + 5;
        content = content.slice(0, insertPos) + '\n' + imgTag + content.slice(insertPos);
        modified = true;
        console.log(`  ADD: ${courseId} ch${chapter} — ${img}`);
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filepath, content);
    console.log(`SAVED: ${courseId}.js`);
  }
});

console.log('\nDone!');
