// Content loader - merges chapter content from part1 and part2
import { chaptersPart1 } from './chapters-part1';
import { chaptersPart2 } from './chapters-part2';

const placeholderContent = (num, title) => `
<h2>📖 ${title}</h2>
<p>เนื้อหากำลังโหลด... กรุณารอสักครู่</p>
<div class="tip-box">เนื้อหาบทนี้กำลังถูกสร้างขึ้น จะอัปเดตเร็วๆ นี้</div>
`;

let contentMap = {};

try {
  chaptersPart1.forEach(ch => { contentMap[ch.number] = ch.content; });
} catch (e) {}

try {
  chaptersPart2.forEach(ch => { contentMap[ch.number] = ch.content; });
} catch (e) {}

export function getChapterContent(number) {
  return contentMap[number] || placeholderContent(number, `บทที่ ${number}`);
}
