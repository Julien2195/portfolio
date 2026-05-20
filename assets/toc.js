(function () {
  'use strict';

  const headings = document.querySelectorAll('article h2[id], article h3[id]');
  if (!headings.length) return;

  const tocLinks = new Map();
  document.querySelectorAll('.toc a[href^="#"]').forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    if (id) tocLinks.set(id, a);
  });

  if (!tocLinks.size) return;

  let currentActive = null;
  const setActive = (id) => {
    if (currentActive === id) return;
    if (currentActive) {
      const prev = tocLinks.get(currentActive);
      if (prev) prev.classList.remove('active');
    }
    const next = tocLinks.get(id);
    if (next) {
      next.classList.add('active');
      currentActive = id;
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: '-80px 0px -65% 0px',
      threshold: [0, 1],
    }
  );

  headings.forEach((h) => observer.observe(h));

  if (headings[0] && tocLinks.has(headings[0].id)) {
    setActive(headings[0].id);
  }
})();
