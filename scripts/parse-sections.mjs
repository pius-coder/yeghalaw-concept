import { readFileSync } from 'fs';
import * as cheerio from 'cheerio';
const html = readFileSync('/home/kali/projects/yeghalawfirm-sveltekit/target/Archio — High-Converting Business Site.html', 'utf-8');
const $ = cheerio.load(html);
$('[data-framer-name]').each((i, el) => {
  const name = $(el).attr('data-framer-name');
  const tag = $(el).prop('tagName').toLowerCase();
  if (tag === 'section' || tag === 'footer') {
    const cls = $(el).attr('class');
    console.log(tag + '.' + (cls||'') + ' -> ' + name);
    $(el).children().each((j, c) => {
      const ch = $(c);
      console.log('  > ' + ch.prop('tagName').toLowerCase() + '.' + (ch.attr('class')||'') + ' [' + (ch.attr('data-framer-name')||'') + ']');
    });
  }
});
