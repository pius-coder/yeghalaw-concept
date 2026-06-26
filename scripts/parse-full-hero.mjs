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

function getCSSProps(className, prop) {
  const rules = getCSS(className);
  for (const r of rules) {
    const match = r.match(new RegExp(prop + ':([^;}]+)'));
    if (match) return match[1].trim();
  }
  return null;
}

// Get the hero section
const hero = $('[data-framer-name="Hero Section"]');
const heroCls = hero.attr('class');
console.log('=== SECTION (framer-1fm1gri) ===');
console.log('Class:', heroCls);
console.log('CSS:');
getCSS(heroCls).forEach(r => console.log(' ', r));
console.log();

// Wrapper
const wrapper = hero.children().first();
const wrapCls = wrapper.attr('class');
console.log('=== WRAPPER (framer-9h7oje) ===');
console.log('Class:', wrapCls);
console.log('CSS:');
getCSS(wrapCls).forEach(r => console.log(' ', r));
console.log();

// Container
const container = wrapper.children().first();
const contCls = container.attr('class');
console.log('=== CONTAINER (framer-13sf5po) ===');
console.log('Class:', contCls);
console.log('CSS:');
getCSS(contCls).forEach(r => console.log(' ', r));
console.log();

// Left Content wrapper
const leftContent = container.children().first();
const leftCls = leftContent.attr('class');
console.log('=== LEFT CONTENT (framer-q1hik4) ===');
console.log('Class:', leftCls);
console.log('CSS:');
getCSS(leftCls).forEach(r => console.log(' ', r));
console.log();

// Inner Left Content (framer-86s8hq)
const innerLeft = leftContent.find('[data-framer-name="Content"]').first();
const innerLeftCls = innerLeft.attr('class');
console.log('=== INNER LEFT (framer-86s8hq) ===');
console.log('Class:', innerLeftCls);
console.log('CSS:');
getCSS(innerLeftCls).forEach(r => console.log(' ', r));
console.log();

// Right Content (framer-18j5lcg)
const rightContent = container.children().last();
const rightCls = rightContent.attr('class');
console.log('=== RIGHT CONTENT (framer-18j5lcg) ===');
console.log('Class:', rightCls);
console.log('CSS:');
getCSS(rightCls).forEach(r => console.log(' ', r));
console.log();

// Right Content - is it inside ssr-variant?
console.log('=== RIGHT CONTENT PARENT ===');
const rgParent = rightContent.parent();
console.log('Parent tag:', rgParent.prop('tagName'));
console.log('Parent classes:', rgParent.attr('class'));

// Check all children of container
console.log('\n=== ALL CONTAINER CHILDREN ===');
container.children().each((i, el) => {
  const child = $(el);
  console.log(`Child ${i}:`, child.prop('tagName'), 'class="' + child.attr('class') + '"');
});

// Check right content children
console.log('\n=== RIGHT CONTENT CHILDREN ===');
rightContent.children().each((i, el) => {
  const child = $(el);
  console.log(`Child ${i}:`, child.prop('tagName'), 'class="' + child.attr('class') + '"', 'name="' + (child.attr('data-framer-name') || '') + '"');
});
