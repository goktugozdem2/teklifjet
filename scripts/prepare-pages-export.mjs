import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('ok wrote out/.nojekyll');
