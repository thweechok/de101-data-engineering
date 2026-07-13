import re

# Read the original file
with open('app/courses/page.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# New header section (lines 1-341 replacement)
new_header = r"""'use client';
import Link from 'next/link';
import { useState } from 'react';
import CourseThumbnail from '@/components/CourseThumbnail';
import SearchBar from '@/components/SearchBar';
import { coursesRegistry } from '@/data/courses-registry';

// Extra metadata not stored in registry (order, group, rating, students)
const extraMeta = {
  'de101':                  { order:  1, group: 'de',   rating: 4.9, students: 2840 },
  'sql-mastery':            { order:  2, group: 'de',   rating: 4.8, students: 1930 },
  'python-de':              { order:  3, group: 'de',   rating: 4.8, students: 1620 },
  'de201':                  { order:  4, group: 'de',   rating: 4.9, students: 1180 },
  'kafka101':               { order:  5, group: 'de',   rating: 4.7, students:  870 },
  'gcp-cert':               { order:  6, group: 'de',   rating: 4.8, students:  720 },
  'de301':                  { order:  7, group: 'de',   rating: 4.9, students:  540 },
  '10phase-de':             { order:  8, group: 'de',   rating: 4.8, students: 1350 },
  'interview':              { order:  9, group: 'de',   rating: 4.9, students: 2100 },
  'line101':                { order: 10, group: 'line', rating: 4.7, students:  960 },
  'line-google':            { order: 11, group: 'line', rating: 4.8, students: 1240 },
  'flex-master':            { order: 12, group: 'line', rating: 4.7, students:  680 },
  'line-ai':                { order: 13, group: 'line', rating: 4.9, students: 1050 },
  'liff-builder':           { order: 14, group: 'line', rating: 4.8, students:  590 },
  'line-autopilot':         { order: 15, group: 'line', rating: 4.8, students: 1490 },
  'line-shop':              { order: 16, group: 'line', rating: 4.7, students:  780 },
  'line-pay':               { order: 17, group: 'line', rating: 4.8, students:  440 },
  'line-workshop':          { order: 18, group: 'line', rating: 4.9, students:  620 },
  'antigravity':            { order: 19, group: 'ai',   rating: 4.9, students: 1450 },
  'vscode-mastery':         { order: 20, group: 'ai',   rating: 4.8, students: 3100 },
  'notebooklm':             { order: 21, group: 'ai',   rating: 4.8, students: 1740 },
  'claude-ai':              { order: 22, group: 'ai',   rating: 4.9, students:  890 },
  'ads-mastery':            { order: 23, group: 'ecom', rating: 4.8, students: 1120 },
  'weather-canvas':         { order: 24, group: 'ecom', rating: 4.7, students:  560 },
  'chatgpt-pro':            { order: 25, group: 'ai',   rating: 4.9, students: 1200 },
  'google-analytics':       { order: 26, group: 'ai',   rating: 4.8, students:  980 },
  'canva-seller':           { order: 27, group: 'ecom', rating: 4.8, students:  870 },
  'line-oa-pro':            { order: 28, group: 'line', rating: 4.8, students:  760 },
  'tiktok-content':         { order: 29, group: 'ecom', rating: 4.9, students: 1100 },
  'codex-mastery':          { order: 30, group: 'ai',   rating: 4.9, students:  920 },
  'claude-ecosystem':       { order: 31, group: 'ai',   rating: 4.9, students:  850 },
  'uxui-design':            { order: 32, group: 'ai',   rating: 4.9, students:  780 },
  'n8n-automation':         { order: 33, group: 'ai',   rating: 4.9, students:  890 },
  'facebook-ads':           { order: 34, group: 'ecom', rating: 4.8, students: 1050 },
  'power-bi':               { order: 35, group: 'de',   rating: 4.8, students:  760 },
  'excel-business':         { order: 36, group: 'de',   rating: 4.8, students: 1320 },
  'python-automation':      { order: 37, group: 'de',   rating: 4.9, students:  980 },
  'tiktok-shop-setup':      { order: 38, group: 'ecom', rating: 4.8, students: 1100 },
  'prompt-engineering':     { order: 39, group: 'ai',   rating: 4.9, students:  870 },
  'notion-ai':              { order: 40, group: 'ai',   rating: 4.8, students:  650 },
  'dbt-mastery':            { order: 41, group: 'de',   rating: 4.9, students:  720 },
  'docker-de':              { order: 42, group: 'de',   rating: 4.8, students:  680 },
  'airflow-advanced':       { order: 43, group: 'de',   rating: 4.9, students:  560 },
  'pyspark-mastery':        { order: 44, group: 'de',   rating: 4.9, students:  490 },
  'databricks-fundamentals':{ order: 45, group: 'de',   rating: 4.8, students:  430 },
  'terraform-de':           { order: 46, group: 'de',   rating: 4.8, students:  380 },
  'aws-data-engineer':      { order: 47, group: 'de',   rating: 4.8, students:  510 },
  'azure-data-engineer':    { order: 48, group: 'de',   rating: 4.8, students:  420 },
  'apache-flink':           { order: 49, group: 'de',   rating: 4.9, students:  310 },
  'medallion-architecture': { order: 50, group: 'de',   rating: 4.9, students:  350 },
  'data-quality':           { order: 51, group: 'de',   rating: 4.8, students:  460 },
  'data-catalog':           { order: 52, group: 'de',   rating: 4.8, students:  290 },
  'de-portfolio':           { order: 53, group: 'de',   rating: 4.9, students:  840 },
  'freelance-de':           { order: 54, group: 'de',   rating: 4.9, students:  720 },
  'de-system-design':       { order: 55, group: 'de',   rating: 4.9, students:  380 },
  'sql-for-da':             { order: 56, group: 'da',   rating: 4.9, students: 1150 },
  'python-da':              { order: 57, group: 'da',   rating: 4.8, students:  980 },
  'tableau':                { order: 58, group: 'da',   rating: 4.8, students:  860 },
  'statistics-da':          { order: 59, group: 'da',   rating: 4.8, students:  720 },
  'da-career':              { order: 60, group: 'da',   rating: 4.9, students: 1320 },
};

// Build allCourses from registry (correct Thai text) + extraMeta
const allCourses = Object.entries(coursesRegistry)
  .map(([id, c]) => {
    const meta = extraMeta[id] || { order: 99, group: 'de', rating: 4.8, students: 500 };
    return {
      id,
      order: meta.order,
      emoji: c.emoji || '',
      group: meta.group,
      title: c.fullTitle || c.title || id,
      desc: c.desc || '',
      chapters: c.chapterCount || 0,
      duration: c.duration || '',
      level: c.level || '',
      levelColor: c.levelColor || '#8b5cf6',
      link: '/courses/' + id,
      tags: c.tags || [],
      rating: meta.rating,
      students: meta.students,
    };
  })
  .sort((a, b) => a.order - b.order);
"""

# Find where allCourses ends (look for the line after the closing ];)
# The array ends around line 340, then there are blank lines, then filterGroups
# We need to find the end of the array

# Find the start of filterGroups section
fg_match = re.search(r'\n\s*const filterGroups\s*=\s*\[', content)
if fg_match:
    rest_of_file = content[fg_match.start():]
    new_content = new_header + rest_of_file
    
    with open('app/courses/page.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: File written with', len(new_content), 'chars')
    print('filterGroups found at position:', fg_match.start())
else:
    print('ERROR: Could not find filterGroups')
    # Show context around position 340 lines
    lines = content.split('\n')
    for i, line in enumerate(lines[340:360], start=340):
        print(f'{i}: {repr(line[:80])}')
