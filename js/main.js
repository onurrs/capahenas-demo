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
});


