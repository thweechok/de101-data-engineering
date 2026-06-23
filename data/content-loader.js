// Content loader - merges chapter content from part1 and part2
// Will be updated when subagents finish writing content

const placeholderContent = (num, title) => `
<h2>📖 ${title}</h2>
<p>เนื้อหากำลังโหลด... กรุณารอสักครู่</p>
<div class="tip-box">เนื้อหาบทนี้กำลังถูกสร้างขึ้น จะอัปเดตเร็วๆ นี้</div>
`;

let contentMap = {};

try {
  const { chaptersPart1 } = require('./chapters-part1');
  chaptersPart1.forEach(ch => { contentMap[ch.number] = ch.content; });
} catch (e) {
  // Part 1 not ready yet
}

try {
  const { chaptersPart2 } = require('./chapters-part2');
  chaptersPart2.forEach(ch => { contentMap[ch.number] = ch.content; });
} catch (e) {
  // Part 2 not ready yet
}

export function getChapterContent(number) {
  return contentMap[number] || placeholderContent(number, `บทที่ ${number}`);
}
