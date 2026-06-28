// TOC scrollspy + mobile menu + back-to-top
(function () {
  const links = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) map.set(el, a);
  });

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

  // mobile menu
  const sidebar = document.querySelector('.sidebar');
  const btn = document.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', () => sidebar.classList.toggle('open'));
    sidebar.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') sidebar.classList.remove('open');
    });
  }

  // back to top
  const back = document.querySelector('.backtop');
  if (back) {
    window.addEventListener('scroll', () => {
      back.classList.toggle('show', window.scrollY > 600);
    });
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();
