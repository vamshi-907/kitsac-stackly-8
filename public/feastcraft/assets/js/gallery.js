/* Lightbox gallery */
(function() {
  const items = document.querySelectorAll('[data-lightbox]');
  if (!items.length) return;
  const overlay = document.createElement('div');
  overlay.className = 'fc-lightbox';
  overlay.innerHTML = '<button class="close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(overlay);
  const img = overlay.querySelector('img');
  const close = () => overlay.classList.remove('open');
  overlay.querySelector('.close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  items.forEach(it => {
    it.style.cursor = 'zoom-in';
    it.addEventListener('click', () => {
      const src = it.dataset.lightbox || it.querySelector('img')?.src;
      if (src) { img.src = src; overlay.classList.add('open'); }
    });
  });
})();
