// Capahenas Travel minimal interactions
(() => {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.getAttribute('data-open') === 'true';
      mobileNav.setAttribute('data-open', String(!isOpen));
      mobileNav.style.display = isOpen ? 'none' : 'block';
    });
  }

  // Lazy load images with "loading=lazy" already supported by browsers.
  // As a safety, swap data-src to src when intersecting (progressive enhancement)
  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window && lazyImages.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImages.forEach(img => io.observe(img));
  }
})();

