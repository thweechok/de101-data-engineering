// Central course content loader - static imports
import { chapters as sqlChapters } from './courses/sql-mastery';
import { chapters as pythonChapters } from './courses/python-de';
import { chapters as de201Chapters } from './courses/de201';
import { chapters as de301Chapters } from './courses/de301';
import { chapters as interviewChapters } from './courses/interview';
import { chapters as gcpChapters } from './courses/gcp-cert';
import { chapters as kafkaChapters } from './courses/kafka101';

const courseModules = {
  'sql-mastery': sqlChapters,
  'python-de': pythonChapters,
  'de201': de201Chapters,
  'de301': de301Chapters,
  'interview': interviewChapters,
  'gcp-cert': gcpChapters,
  'kafka101': kafkaChapters,
};

export function getCourseChapters(courseId) {
  return courseModules[courseId] || [];
}
