// Initialize year in footer
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // Intersection Observer for welcome image animations
  var target = document.querySelector('.welcome-image');
  if ('IntersectionObserver' in window && target) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    io.observe(target);
  } else if (target) {
    // Fallback
    target.classList.add('in-view');
  }
  
  // Initialize Owl Carousel for destinations
  if (typeof $.fn.owlCarousel !== 'undefined') {
    $('.three-item-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          margin: 15
        },
        768: {
          items: 2,
          margin: 20
        },
        992: {
          items: 3,
          margin: 30
        }
      }
    });
  }

  // Show navbar/topbar after user scrolls past hero
  var topbar = document.querySelector('.topbar');
  var navbar = document.querySelector('.navbar');
  if (topbar && navbar) {
    // Compute topbar height and set CSS var so navbar sits right beneath it when shown
    function setTopbarHeightVar(){
      var h = topbar.offsetHeight || 0;
      document.documentElement.style.setProperty('--topbar-height', h + 'px');
    }
    setTopbarHeightVar();
    window.addEventListener('resize', setTopbarHeightVar);

    var lastStateHidden = true;
    function updateChromeVisibility(){
      var scrolled = window.scrollY || window.pageYOffset;
      var shouldHide = scrolled <= 0; // show as soon as user scrolls down even 1px
      if (shouldHide && !lastStateHidden){
        topbar.classList.add('hidden-at-top');
        navbar.classList.add('hidden-at-top');
        lastStateHidden = true;
      } else if (!shouldHide && lastStateHidden){
        topbar.classList.remove('hidden-at-top');
        navbar.classList.remove('hidden-at-top');
        lastStateHidden = false;
      }
    }
    // Initial state: hidden at top
    topbar.classList.add('hidden-at-top');
    navbar.classList.add('hidden-at-top');
    updateChromeVisibility();
    window.addEventListener('scroll', updateChromeVisibility, { passive: true });
  }

  // Smooth scroll for the scroll-down arrow (native CSS also enabled)
  var scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', function(e){
      // Let default anchor jump be smooth due to CSS scroll-behavior; prevent double behavior not necessary
    });
  }
});


