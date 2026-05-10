import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const checks = [
  ['out/index.html', 'TeklifJet'],
  ['out/generator/index.html', 'Canlı teklif taslağı oluşturucu'],
  ['out/sample/index.html', 'Örnek TeklifJet teslimatı'],
  ['out/sample/index.html', '24 saat takip mesajı'],
  ['out/index.html', '/teklifjet/generator/'],
  ['out/index.html', '/teklifjet/sample/'],
  ['out/generator/index.html', '/teklifjet/sample/'],
  ['out/sample/index.html', '/teklifjet/generator/'],
  ['out/generator/index.html', '/teklifjet/'],
  ['out/robots.txt', 'sitemap'],
  ['out/sitemap.xml', 'goktugozdem2.github.io/teklifjet'],
  ['out/.nojekyll', ''],
];

for (const [relativePath, expected] of checks) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing static export file: ${relativePath}`);
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  if (expected && !content.includes(expected)) {
    throw new Error(`${relativePath} missing ${expected}`);
  }
  console.log(`ok ${relativePath}`);
}
