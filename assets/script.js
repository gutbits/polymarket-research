// Reading-mode toggle + TOC scrollspy + mobile menu + back-to-top
(function () {
  // ---- Reading-mode toggle (Plain English <-> Technical) — wired FIRST so
  // nothing else on the page can stop it from binding. ----
  (function () {
    const modeBtns = Array.from(document.querySelectorAll('.modebtn'));
    function setMode(mode) {
      const m = mode === 'technical' ? 'technical' : 'simple';
      document.documentElement.setAttribute('data-mode', m);
      modeBtns.forEach((b) => b.classList.toggle('active', b.dataset.mode === m));
      try { localStorage.setItem('readmode', m); } catch (e) {}
    }
    modeBtns.forEach((b) =>
      b.addEventListener('click', () => setMode(b.dataset.mode))
    );
    let saved = 'simple';
    try { saved = localStorage.getItem('readmode') || 'simple'; } catch (e) {}
    setMode(saved);
  })();

  // ---- TOC scrollspy (non-essential; isolated so it can't break the toggle) ----
  try {
    const links = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) map.set(el, a);
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              links.forEach((l) => l.classList.remove('active'));
              const a = map.get(entry.target);
              if (a) a.classList.add('active');
            }
          });
        },
        { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
      );
      map.forEach((_, el) => observer.observe(el));
    }
  } catch (e) { /* scrollspy is optional */ }

  // ---- Mobile menu ----
  try {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.querySelector('.menu-btn');
    if (btn && sidebar) {
      btn.addEventListener('click', () => sidebar.classList.toggle('open'));
      sidebar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') sidebar.classList.remove('open');
      });
    }
  } catch (e) {}

  // ---- Back to top ----
  try {
    const back = document.querySelector('.backtop');
    if (back) {
      window.addEventListener('scroll', () => {
        back.classList.toggle('show', window.scrollY > 600);
      });
      back.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      );
    }
  } catch (e) {}
})();
