// Central course content loader
// Import all course data files here

let courseModules = {};

// Will be populated as courses are created
try { courseModules['sql-mastery'] = require('./courses/sql-mastery'); } catch {}
try { courseModules['python-de'] = require('./courses/python-de'); } catch {}
try { courseModules['de201'] = require('./courses/de201'); } catch {}
try { courseModules['de301'] = require('./courses/de301'); } catch {}
try { courseModules['interview'] = require('./courses/interview'); } catch {}
try { courseModules['gcp-cert'] = require('./courses/gcp-cert'); } catch {}
try { courseModules['kafka101'] = require('./courses/kafka101'); } catch {}

export function getCourseChapters(courseId) {
  const mod = courseModules[courseId];
  if (!mod) return [];
  return mod.chapters || mod.default?.chapters || [];
}
