
(() => {
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('primary-links');
  function setMenu(open) {
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    links.classList.toggle('is-open', open);
  }
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  const chapterToggle = document.querySelector('[data-doc-menu]');
  const sidebar = document.getElementById('docs-sidebar');
  chapterToggle?.addEventListener('click', () => {
    const open = chapterToggle.getAttribute('aria-expanded') !== 'true';
    chapterToggle.setAttribute('aria-expanded', String(open));
    sidebar?.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') {setMenu(false);sidebar?.classList.remove('is-open');chapterToggle?.setAttribute('aria-expanded','false');} });
  function anchor() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    for (let parent=target; parent; parent=parent.parentElement) if(parent.tagName==='DETAILS') parent.open=true;
    links?.querySelectorAll('a[href^="#"]').forEach(link => {
      if(link.getAttribute('href')===`#${id}`)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
    requestAnimationFrame(() => target.scrollIntoView({behavior:'auto',block:'start'}));
  }
  addEventListener('hashchange', anchor);
  anchor();
})();
