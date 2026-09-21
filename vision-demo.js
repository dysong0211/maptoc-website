(() => {
  const container = document.querySelector('.vision-demo-frame');
  const frame = container?.querySelector('iframe');
  if (!frame) return;
  const homepagePhone = Boolean(container.closest('.product-demo')) && matchMedia('(max-width: 600px)').matches;
  if (homepagePhone) return;
  if (location.protocol === 'file:') {
    document.querySelector('#demo-local-preview').hidden = false;
    const link = document.querySelector('.vision-demo-open');
    link.href = '#demo-local-preview';
    link.textContent = 'How to open the demo →';
    return;
  }
  frame.src = frame.dataset.src;
  container.hidden = false;
})();
