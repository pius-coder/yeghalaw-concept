CMS.registerPreviewStyle('/_app/immutable/assets/site.css');

CMS.registerPreviewTemplate('home', ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  const h = CMS.h;

  return h('div', { style: 'padding: 40px; font-family: sans-serif;' },
    h('h1', { style: 'font-size: 2rem;' }, data.hero?.fr?.title || ''),
    h('p', { style: 'color: #666;' }, data.hero?.fr?.description || ''),
    data.services?.map?.((s) =>
      h('div', { style: 'margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 8px;' },
        h('h3', {}, s.title?.fr || ''),
        h('p', { style: 'color: #666;' }, s.short_description?.fr || '')
      )
    )
  );
});
