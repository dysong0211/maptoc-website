// Match the app frame to the actual headline position, including wrapped eyebrows.
(() => {
  const pairs = [['.hero-copy', '.hero-visual'], ['.investor-intro', '.investor-preview']];
  const align = () => pairs.forEach(([copySelector, previewSelector]) => {
    const copy = document.querySelector(copySelector);
    const preview = document.querySelector(previewSelector);
    const title = copy?.querySelector('h1');
    if (title && preview) preview.style.setProperty('--headline-offset', `${title.getBoundingClientRect().top - copy.getBoundingClientRect().top}px`);
  });
  const observer = new ResizeObserver(align);
  pairs.forEach(([selector]) => { const copy = document.querySelector(selector); if (copy) observer.observe(copy); });
  document.fonts.ready.then(align);
  align();
})();
