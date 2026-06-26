import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';

const html = readFileSync(
  '/home/kali/projects/yeghalawfirm-sveltekit/target/Archio — High-Converting Business Site.html',
  'utf-8'
);
const $ = cheerio.load(html);

// Find all CSS
const allCSS = [];
$('style').each((i, el) => allCSS.push($(el).html()));
const cssText = allCSS.join('\n');

function getCSS(className) {
  if (!className) return '';
  const parts = className.split(' ');
  const results = [];
  for (const c of parts) {
    if (c.startsWith('framer-')) {
      const regex = new RegExp('\\.' + c.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&') + '\\{([^}]*)\\}', 'g');
      let m;
      while ((m = regex.exec(cssText)) !== null) {
        results.push({ selector: `.${c}`, props: m[0] });
      }
    }
  }
  return results;
}

function printNode(el, depth = 0) {
  if (!el || !el.length) return;
  const indent = '  '.repeat(depth);
  const tag = el.prop('tagName')?.toLowerCase() || '?';
  const cls = el.attr('class') || '';
  const style = el.attr('style') || '';
  const name = el.attr('data-framer-name') || '';
  
  console.log(`${indent}<${tag}${cls ? ` class="${cls}"` : ''}${name ? ` data-framer-name="${name}"` : ''}>`);
  
  // Print CSS for this element's classes
  const cssRules = getCSS(cls);
  for (const r of cssRules) {
    console.log(`${indent}  CSS: ${r.props}`);
  }
  if (style) console.log(`${indent}  INLINE: ${style}`);
  
  // Recurse children (only element nodes, skip text)
  el.children().each((i, child) => {
    if (child.type === 'tag') {
      printNode($(child), depth + 1);
    }
  });
  
  console.log(`${indent}</${tag}>`);
}

// Find the hero section
const hero = $('[data-framer-name="Hero Section"]');
console.log('=== HERO SECTION ===');
printNode(hero);
