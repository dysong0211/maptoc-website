/* Keep the static beta in sample lookup mode and embedded dialogs in view. */
(() => {
  const host = window.frameElement;
  let previousDialog = null;
  let sampleConfigured = false;

  const setSelectValue = (select, value) => {
    const setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value')?.set;
    setter?.call(select, value);
    select.dispatchEvent(new Event('change', {bubbles: true}));
  };

  const configureSampleLookup = () => {
    const aiOptions = [...document.querySelectorAll('button')].find(button => button.textContent.trim().startsWith('AI options'));
    let mode = [...document.querySelectorAll('select')].find(select => [...select.options].some(option => option.value === 'sample'));
    if (!mode && aiOptions && !sampleConfigured) {
      aiOptions.click();
      sampleConfigured = true;
      return;
    }
    if (mode && mode.value !== 'sample') setSelectValue(mode, 'sample');
    if (aiOptions) aiOptions.hidden = true;
    if (mode) mode.closest('label')?.setAttribute('hidden', '');

    const heading = [...document.querySelectorAll('h1,h2')].find(node => node.textContent.trim() === 'MapToc Outcome Intelligence');
    if (heading && !document.querySelector('.maptoc-beta-note')) {
      const note = document.createElement('p');
      note.className = 'maptoc-beta-note';
      note.textContent = 'Beta demo · Sample lookup mode. AI capabilities will be available in the full app.';
      heading.insertAdjacentElement('afterend', note);
    }

    document.querySelectorAll('button').forEach(button => {
      if (button.textContent.trim() === 'Upload files' || button.textContent.trim() === 'Capture an update') {
        const region = button.closest('div.rounded-xl,div.rounded-lg') || button.parentElement;
        region?.setAttribute('data-beta-hidden', 'true');
      }
    });
    [...document.querySelectorAll('button,summary')].forEach(control => {
      if (control.textContent.trim().startsWith('Upload options')) control.hidden = true;
    });
  };

  const revealDialog = () => {
    configureSampleLookup();
    const dialog = document.querySelector('[role="dialog"][data-state="open"]');
    if (host && dialog && dialog !== previousDialog) {
      host.scrollIntoView({block: 'start', behavior: 'instant'});
    }
    previousDialog = dialog;
  };
  new MutationObserver(revealDialog).observe(document.body, {
    childList: true, subtree: true, attributes: true, attributeFilter: ['data-state']
  });
  revealDialog();
})();
