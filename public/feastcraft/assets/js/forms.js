/* Client-side validation for FeastCraft forms */
(function() {
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.setAttribute('novalidate', 'true');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('.field').forEach(f => {
        const input = f.querySelector('input,select,textarea');
        if (!input) return;
        let ok = true;
        if (input.required && !input.value.trim()) ok = false;
        if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) ok = false;
        if (input.type === 'tel' && input.value && !/^[\d+\-()\s]{7,}$/.test(input.value)) ok = false;
        f.classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
      });
      if (!valid) { window.fcToast && window.fcToast('Please fix highlighted fields', 'error'); return; }
      form.reset();
      const success = form.querySelector('[data-success]');
      if (success) { success.style.display = 'block'; form.style.display = 'none'; }
      else window.fcToast && window.fcToast('Thanks! We will be in touch shortly.', 'success');
    });
    form.querySelectorAll('.field input, .field select, .field textarea').forEach(inp => {
      inp.addEventListener('input', () => inp.closest('.field').classList.remove('is-invalid'));
    });
  });
})();
