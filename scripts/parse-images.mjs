import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';

const html = readFileSync(
  '/home/kali/projects/yeghalawfirm-sveltekit/target/Archio — High-Converting Business Site.html',
  'utf-8'
);
const $ = cheerio.load(html);

// Find the CSS text in the HTML
const styleTags = [];
$('style').each((i, el) => {
  styleTags.push($(el).html());
});
const allCSS = styleTags.join('\n');

function findCSS(classOrId) {
  const selector = classOrId.startsWith('.') || classOrId.startsWith('#') ? classOrId : `.${classOrId}`;
  // Simple regex to find CSS rules
  const regex = new RegExp(selector.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&') + '\\{([^}]*)\\}', 'g');
  const results = [];
  let match;
  while ((match = regex.exec(allCSS)) !== null) {
    results.push(match[0]);
  }
  return results;
}

// Find images container
const imagesDiv = $('[data-framer-name="videos/Images"]');
console.log('=== IMAGES CONTAINER ===');
const containerClass = imagesDiv.attr('class');
console.log('Classes:', containerClass);

// Find CSS for container
if (containerClass) {
  const classes = containerClass.split(' ');
  for (const c of classes) {
    if (c.startsWith('framer-')) {
      const rules = findCSS(c);
      console.log(`CSS for .${c}:`, rules);
    }
  }
}

console.log('\n=== CHILDREN ===');
imagesDiv.children().each((i, el) => {
  const el2 = $(el);
  const cls = el2.attr('class');
  console.log(`\n--- Child ${i} ---`);
  console.log('Classes:', cls);
  
  // Position, overflow, border-radius etc
  const hasRelative = el2.css('position') === 'relative';
  console.log('position:relative:', hasRelative);
  console.log('CSS position inline:', el2.css('position'));
  
  // Find CSS rules for this element
  if (cls) {
    const classes = cls.split(' ');
    for (const c of classes) {
      if (c.startsWith('framer-')) {
        const rules = findCSS(c);
        for (const r of rules) {
          console.log(`  CSS .${c}:`, r);
        }
      }
    }
  }
  
  // Check FillImage
  const inner = el2.children().first();
  if (inner.length) {
    console.log('  Inner tag:', inner.prop('tagName'));
    console.log('  Inner classes:', inner.attr('class'));
    console.log('  Inner style:', inner.attr('style'));
    console.log('  Inner position:', inner.css('position'));
    
    const img = inner.find('img');
    if (img.length) {
      console.log('  img src:', img.attr('src')?.substring(0, 60));
      console.log('  img width:', img.attr('width'));
      console.log('  img height:', img.attr('height'));
    }
  }
});

// Parent chain - check who has position:relative
console.log('\n=== POSITION: RELATIVE CHAIN ===');
const rightContent = imagesDiv.parent();
console.log('Right content class:', rightContent.attr('class'));
console.log('Right content position:', rightContent.css('position'));

const container = rightContent.parent();
console.log('Container class:', container.attr('class'));
console.log('Container position:', container.css('position'));

const wrapper = container.parent();
console.log('Wrapper class:', wrapper.attr('class'));
console.log('Wrapper position:', wrapper.css('position'));
