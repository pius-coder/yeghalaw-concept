import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';

const html = readFileSync(
  '/home/kali/projects/yeghalawfirm-sveltekit/target/Archio — High-Converting Business Site.html',
  'utf-8'
);
const $ = cheerio.load(html);

const allCSS = [];
$('style').each((i, el) => allCSS.push($(el).html()));
const cssText = allCSS.join('\n');

function getCSS(className) {
  if (!className) return [];
  const parts = className.split(' ');
  const results = [];
  for (const c of parts) {
    if (c.startsWith('framer-')) {
      const regex = new RegExp('\\.' + c.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&') + '\\{([^}]*)\\}', 'g');
      let m;
      while ((m = regex.exec(cssText)) !== null) {
        const props = m[0].replace(/^[^{]*\{/, '').replace(/\}$/, '');
        results.push(`.${c} { ${props} }`);
      }
    }
  }
  return results;
}

// Find all data-framer-name sections
console.log('=== ALL SECTIONS (data-framer-name) ===');
$('[data-framer-name]').each((i, el) => {
  const name = $(el).attr('data-framer-name');
  const cls = $(el).attr('class');
  const tag = $(el).prop('tagName').toLowerCase();
  // Only top-level section elements
  if (name && (name.includes('Section') || name.includes('section'))) {
    console.log(`\n${tag}.${cls} [data-framer-name="${name}"]`);
    const css = getCSS(cls);
    for (const c of css) console.log(`  CSS: ${c}`);
    
    // Show direct children structure
    $(el).children().each((j, child) => {
      const c = $(child);
      console.log(`  > ${c.prop('tagName').toLowerCase()}.${c.attr('class')} [${c.attr('data-framer-name') || ''}]`);
    });
  }
});

// Now show body-level structure
console.log('\n\n=== BODY STRUCTURE ===');
$('body').children().each((i, el) => {
  const e = $(el);
  const tag = e.prop('tagName').toLowerCase();
  const cls = e.attr('class') || '';
  console.log(`${tag}.${cls}`);
});

// Find the sections container/main wrapper
console.log('\n\n=== ALL TOP-LEVEL CHILDREN OF FIRST BODY DIV ===');
const firstBodyDiv = $('body > div').first();
firstBodyDiv.children().each((i, el) => {
  const e = $(el);
  console.log(`${e.prop('tagName').toLowerCase()}.${e.attr('class')} [${e.attr('data-framer-name') || ''}]`);
});
