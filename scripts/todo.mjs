// Wypisuje wszystkie znaczniki TODO z danych, tekstów i stron.
// Użycie: npm run todo
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const dirs = ['src/data', 'src/i18n', 'src/components/pages'];
const exts = ['.yaml', '.yml', '.ts', '.astro'];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

let count = 0;
for (const dir of dirs) {
  for (const file of walk(join(decodeURIComponent(root), dir))) {
    if (!exts.some((e) => file.endsWith(e))) continue;
    const lines = readFileSync(file, 'utf8').split('\n');
    const hits = lines
      .map((line, i) => ({ line: line.trim(), n: i + 1 }))
      .filter(({ line }) => line.includes('TODO') && !line.startsWith('//') && !line.startsWith('*') && !line.startsWith('#  '));
    if (!hits.length) continue;
    console.log(`\n${relative(decodeURIComponent(root), file)}`);
    for (const { line, n } of hits) {
      console.log(`  ${String(n).padStart(4)}  ${line.length > 140 ? line.slice(0, 140) + '…' : line}`);
      count++;
    }
  }
}
console.log(`\nZnaleziono ${count} linii z TODO. Pełna lista z opisem: README.md → „Lista TODO”.`);
