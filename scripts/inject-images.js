const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, '..', 'data', 'courses');

// Image injections per course - insert after first <h2> or early in content
const courseImages = {
  'sql-mastery': [
    { chapter: 0, img: '/images/courses/sql-mastery-cover.png', alt: 'SQL Mastery — เก่ง SQL สุดทาง', after: '<h2>' },
    { chapter: 1, img: '/images/courses/sql-execution-order.png', alt: 'SQL Query Execution Order', after: '<h2>' },
    { chapter: 2, img: '/images/courses/sql-joins-venn.png', alt: 'SQL JOINs — Venn Diagram', after: '<h2>' },
    { chapter: 5, img: '/images/courses/sql-window-functions.png', alt: 'SQL Window Functions', after: '<h2>' },
  ],
  'python-de': [
    { chapter: 0, img: '/images/courses/python-de-cover.png', alt: 'Python for Data Engineering', after: '<h2>' },
    { chapter: 2, img: '/images/courses/python-oop.png', alt: 'Python OOP Concepts', after: '<h2>' },
  ],
  'de201': [
    { chapter: 0, img: '/images/courses/de201-cover.png', alt: 'DE201 — Intermediate Data Engineering', after: '<h2>' },
  ],
  'de301': [
    { chapter: 0, img: '/images/courses/de301-cover.png', alt: 'DE301 — Advanced & Senior Level', after: '<h2>' },
  ],
  'interview': [
    { chapter: 0, img: '/images/courses/interview-cover.png', alt: 'DE Interview Bootcamp', after: '<h2>' },
    { chapter: 0, img: '/images/courses/interview-process.png', alt: 'Interview Process Flow', afterImg: true },
  ],
  'gcp-cert': [
    { chapter: 0, img: '/images/courses/gcp-cert-cover.png', alt: 'GCP Certification Prep', after: '<h2>' },
    { chapter: 1, img: '/images/courses/gcp-services.png', alt: 'GCP Data Services Overview', after: '<h2>' },
  ],
  'kafka101': [
    { chapter: 0, img: '/images/courses/kafka101-cover.png', alt: 'Kafka 101 — Real-time Streaming', after: '<h2>' },
    { chapter: 1, img: '/images/courses/kafka-architecture.png', alt: 'Kafka Architecture', after: '<h2>' },
  ],
};

Object.entries(courseImages).forEach(([courseId, images]) => {
  const filepath = path.join(coursesDir, `${courseId}.js`);
  if (!fs.existsSync(filepath)) {
    console.log(`SKIP: ${courseId}.js not found`);
    return;
  }

  let content = fs.readFileSync(filepath, 'utf8');
  let modified = false;

  // Parse chapters array
  images.forEach(({ chapter, img, alt, after, afterImg }) => {
    const imgTag = `<div style="text-align:center;margin:20px 0"><img src="${img}" alt="${alt}" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,0.3)" loading="lazy" /></div>`;

    // Check if image already injected
    if (content.includes(img)) {
      console.log(`  SKIP: ${courseId} ch${chapter} — already has ${img}`);
      return;
    }

    // Find the chapter in the content
    // Chapters are objects like: { number: X, slug: '...', ... content: `...` }
    // We need to find the content for the specific chapter number
    const chapterPattern = new RegExp(`number:\\s*${chapter}[,\\s]`);
    const match = chapterPattern.exec(content);
    if (!match) {
      console.log(`  SKIP: ${courseId} ch${chapter} — chapter not found`);
      return;
    }

    // Find the first <h2> after this chapter's content: ` start
    const contentStart = content.indexOf('content: `', match.index);
    if (contentStart === -1) {
      console.log(`  SKIP: ${courseId} ch${chapter} — content field not found`);
      return;
    }

    if (afterImg) {
      // Insert after any existing image
      const afterPrevImg = content.indexOf('</div>', contentStart + 200);
      if (afterPrevImg !== -1 && afterPrevImg < contentStart + 2000) {
        const insertPos = afterPrevImg + 6;
        content = content.slice(0, insertPos) + '\n' + imgTag + content.slice(insertPos);
        modified = true;
        console.log(`  ADD: ${courseId} ch${chapter} — ${img} (after prev img)`);
      }
    } else {
      // Insert after first <h2> in this chapter
      const h2Pos = content.indexOf(after, contentStart);
      if (h2Pos !== -1 && h2Pos < contentStart + 3000) {
        // Find the closing </h2>
        const h2End = content.indexOf('</h2>', h2Pos);
        if (h2End !== -1) {
          const insertPos = h2End + 5;
          content = content.slice(0, insertPos) + '\n' + imgTag + content.slice(insertPos);
          modified = true;
          console.log(`  ADD: ${courseId} ch${chapter} — ${img}`);
        }
      } else {
        // Fallback: insert right after content: `
        const insertPos = contentStart + 10;
        content = content.slice(0, insertPos) + '\n' + imgTag + '\n' + content.slice(insertPos);
        modified = true;
        console.log(`  ADD: ${courseId} ch${chapter} — ${img} (fallback)`);
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filepath, content);
    console.log(`SAVED: ${courseId}.js`);
  }
});

console.log('\nDone!');
