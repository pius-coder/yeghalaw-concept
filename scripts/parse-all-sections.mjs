import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';

const html = readFileSync('/home/kali/projects/yeghalawfirm-sveltekit/target/Archio — High-Converting Business Site.html', 'utf-8');
const $ = cheerio.load(html);

const allCSS = [];
$('style').each((i, el) => allCSS.push($(el).html()));
const cssText = allCSS.join('\n');

function getCSS(cls) {
  if (!cls) return [];
  const p = cls.split(' ');
  const res = [];
  for (const c of p) {
    if (c.startsWith('framer-')) {
      const r = new RegExp('\\.' + c.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&') + '\\{([^}]*)\\}', 'g');
      let m;
      while ((m = r.exec(cssText)) !== null) {
        res.push(m[0].replace(/^[^{]*\{/, '').replace(/\}$/, ''));
      }
    }
  }
  return res;
}

function extract(prop, rules) {
  for (const r of rules) {
    const m = r.match(new RegExp(prop + '\\s*:\\s*([^;]+)'));
    if (m) return m[1].trim();
  }
  return null;
}

$('[data-framer-name]').each((i, el) => {
  const name = $(el).attr('data-framer-name');
  const tag = $(el).prop('tagName').toLowerCase();
  if (tag !== 'section' && tag !== 'footer') return;
  const cls = $(el).attr('class');
  const rules = getCSS(cls);
  console.log(`\n=== ${tag}.${cls} → "${name}" ===`);
  for (const r of rules) console.log(`  ${r}`);
  
  $(el).children().each((j, c) => {
    const ch = $(c);
    const cCls = ch.attr('class');
    if (!cCls || !cCls.startsWith('framer-')) return;
    const cRules = getCSS(cCls);
    const cName = ch.attr('data-framer-name') || '';
    console.log(`\n  Child: ${cCls} [${cName}]`);
    for (const r of cRules) console.log(`    ${r}`);
  });
});
