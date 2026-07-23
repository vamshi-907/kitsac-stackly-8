/* FeastCraft — main.js */
(function() {
  'use strict';

  // ==== Navbar scroll state ====
  const nav = document.querySelector('.fc-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ==== Inject Home dropdown (Home 1 / Home 2) into every navbar ====
  const menuEl = document.querySelector('.fc-menu');
  if (menuEl && !menuEl.querySelector('.has-dropdown')) {
    const firstItem = menuEl.querySelector('li');
    if (firstItem) {
      const path = (location.pathname.split('/').pop() || '').toLowerCase();
      const isH1 = path === 'index.html' || path === '' || path === 'home1.html';
      const isH2 = path === 'home2.html';
      firstItem.classList.add('has-dropdown');
      const anchor = firstItem.querySelector('a');
      if (anchor) { anchor.setAttribute('aria-haspopup', 'true'); anchor.textContent = 'Home'; anchor.href = 'index.html'; }
      const dd = document.createElement('ul');
      dd.className = 'fc-dropdown';
      dd.innerHTML = `
        <li><a href="index.html" class="${isH1 ? 'active' : ''}"><i class="ri-home-4-line"></i> Home 1 · Classic</a></li>
        <li><a href="home2.html" class="${isH2 ? 'active' : ''}"><i class="ri-vip-crown-line"></i> Home 2 · Premium</a></li>
      `;
      firstItem.appendChild(dd);
      // Mobile: tap to toggle
      firstItem.querySelector('a').addEventListener('click', e => {
        if (window.innerWidth <= 992) { e.preventDefault(); firstItem.classList.toggle('open'); }
      });
    }
  }

  // ==== Mobile menu toggle ====
  const toggle = document.querySelector('.fc-menu-toggle');
  const menu = document.querySelector('.fc-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      const icon = toggle.querySelector('i');
      if (icon) icon.className = isOpen ? 'ri-close-line' : 'ri-menu-3-line';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', (e) => {
      if (a.closest('.has-dropdown > a') && window.innerWidth <= 992) return; // dropdown toggle handled above
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const icon = toggle.querySelector('i'); if (icon) icon.className = 'ri-menu-3-line';
    }));
  }

  // ==== Ripple ====
  document.querySelectorAll('.btn-fc').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const r = document.createElement('span');
      r.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      r.style.width = r.style.height = size + 'px';
      r.style.left = (e.clientX - rect.left - size/2) + 'px';
      r.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(r);
      setTimeout(() => r.remove(), 600);
    });
  });

  // ==== Accordion ====
  document.querySelectorAll('.fc-accordion .item').forEach(item => {
    const q = item.querySelector('.q');
    if (!q) return;
    q.addEventListener('click', () => item.classList.toggle('open'));
    q.setAttribute('role', 'button');
    q.setAttribute('tabindex', '0');
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.classList.toggle('open'); }
    });
  });

  // ==== Tabs ====
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = group.querySelectorAll('.fc-tab');
    const panels = document.querySelectorAll(`[data-tab-panel][data-tab-group="${group.dataset.tabs}"]`);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p => p.style.display = p.dataset.tabPanel === tab.dataset.tab ? '' : 'none');
      });
    });
  });

  // ==== Counter animation ====
  const counters = document.querySelectorAll('[data-count]');
  const cObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const start = performance.now();
        const suffix = el.dataset.suffix || '';
        function step(t) {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => cObserver.observe(c));

  // ==== Toast ====
  window.fcToast = (msg, type='success') => {
    const t = document.createElement('div');
    t.className = 'fc-toast ' + type;
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3400);
  };

  // ==== Countdown ====
  const cd = document.querySelector('[data-countdown]');
  if (cd) {
    const target = new Date(cd.dataset.countdown).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff % 86400000 / 3600000);
      const m = Math.floor(diff % 3600000 / 60000);
      const s = Math.floor(diff % 60000 / 1000);
      cd.querySelector('[data-d]').textContent = String(d).padStart(2,'0');
      cd.querySelector('[data-h]').textContent = String(h).padStart(2,'0');
      cd.querySelector('[data-m]').textContent = String(m).padStart(2,'0');
      cd.querySelector('[data-s]').textContent = String(s).padStart(2,'0');
    };
    tick(); setInterval(tick, 1000);
  }

  // ==== Year ====
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
