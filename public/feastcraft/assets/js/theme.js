/* Theme (Dark/Light) & RTL toggling */
(function() {
  const root = document.documentElement;
  const stored = localStorage.getItem('fc-theme');
  if (stored) root.setAttribute('data-theme', stored);
  const rtl = localStorage.getItem('fc-dir');
  if (rtl === 'rtl') root.setAttribute('dir', 'rtl');

  document.addEventListener('click', e => {
    const themeBtn = e.target.closest('[data-toggle-theme]');
    if (themeBtn) {
      const cur = root.getAttribute('data-theme') === 'dark' ? '' : 'dark';
      if (cur) root.setAttribute('data-theme', cur); else root.removeAttribute('data-theme');
      localStorage.setItem('fc-theme', cur);
      const icon = themeBtn.querySelector('i');
      if (icon) icon.className = cur === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    }
    const rtlBtn = e.target.closest('[data-toggle-rtl]');
    if (rtlBtn) {
      const cur = root.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      root.setAttribute('dir', cur);
      localStorage.setItem('fc-dir', cur);
    }
  });

  // Sync initial icons
  document.querySelectorAll('[data-toggle-theme] i').forEach(i => {
    i.className = root.getAttribute('data-theme') === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  });
})();
