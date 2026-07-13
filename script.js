// Scroll-reveal for sections
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.about-text, .about-stamp, .pin-photo, .price-group, .review-tape, .contacts-card, .contacts-map'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(el => io.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in'));
  }
});
