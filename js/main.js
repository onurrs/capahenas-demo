// Initialize year in footer
document.addEventListener('DOMContentLoaded', function () {
  // i18n: simple client-side loader
  var I18N_DEFAULT = 'en';
  var SUPPORTED_LANGS = ['en','tr','fr','de','es','pt','it','ru','uk','zh','ja','ko','th','id','pl'];

  function getInitialLang(){
    var saved = localStorage.getItem('lang');
    if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || navigator.userLanguage || '').slice(0,2);
    if (SUPPORTED_LANGS.indexOf(browser) !== -1) return browser;
    return I18N_DEFAULT;
  }

  function applyTranslations(dict){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  function loadLang(lang){
    var url = 'locales/' + lang + '.json';
    fetch(url).then(function(res){ return res.json(); })
      .then(function(json){ applyTranslations(json); })
      .catch(function(){
        if (lang !== I18N_DEFAULT) {
          loadLang(I18N_DEFAULT);
        }
      });
  }

  // i18n: flags mapping
  var flagImg = document.getElementById('langFlagImg');
  var flagSrc = {
    en: 'https://flagcdn.com/20x15/gb.png',
    tr: 'https://flagcdn.com/20x15/tr.png',
    fr: 'https://flagcdn.com/20x15/fr.png',
    de: 'https://flagcdn.com/20x15/de.png',
    es: 'https://flagcdn.com/20x15/es.png',
    pt: 'https://flagcdn.com/20x15/pt.png',
    it: 'https://flagcdn.com/20x15/it.png',
    ru: 'https://flagcdn.com/20x15/ru.png',
    uk: 'https://flagcdn.com/20x15/ua.png',
    zh: 'https://flagcdn.com/20x15/cn.png',
    ja: 'https://flagcdn.com/20x15/jp.png',
    ko: 'https://flagcdn.com/20x15/kr.png',
    th: 'https://flagcdn.com/20x15/th.png',
    id: 'https://flagcdn.com/20x15/id.png'
    ,pl: 'https://flagcdn.com/20x15/pl.png'
  };
  // Initialize and handle language changes
  var initialLang = (function(){
    var saved = localStorage.getItem('lang');
    if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    return 'en';
  })();
  if (flagImg) { flagImg.src = flagSrc[initialLang] || ''; }
  document.querySelectorAll('.lang-flag').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var chosen = this.getAttribute('data-lang');
      if (SUPPORTED_LANGS.indexOf(chosen) === -1) return;
      localStorage.setItem('lang', chosen);
      if (flagImg) { flagImg.src = flagSrc[chosen] || ''; }
      // load translations if present
      if (chosen) {
        fetch('locales/' + chosen + '.json').then(function(r){ return r.ok ? r.json() : null; }).then(function(d){ if (d) applyTranslations(d); });
      }
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  // Intersection Observer for welcome image animations
  var targets = document.querySelectorAll('.welcome-image');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    targets.forEach(function(t){ io.observe(t); });
  } else {
    targets.forEach(function(t){ t.classList.add('in-view'); });
  }

  // Generic reveal observer
  var revealNodes = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom, [data-reveal-group] > *');
  if ('IntersectionObserver' in window) {
    var revealIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    revealNodes.forEach(function(n){ revealIo.observe(n); });
  } else {
    revealNodes.forEach(function(n){ n.classList.add('in-view'); });
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

  // Initialize Slick slider for All Türkiye Experiences
  if (typeof $.fn.slick !== 'undefined') {
    var $exp = $('.slick-experiences');
    if ($exp.length) {
      $exp.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="slick-prev-arrow" aria-label="previous"><span class="c-icon c-icon--size-large icon-arrow-left" role="img" aria-label="arrow-left"></span></button>',
        nextArrow: '<button class="slick-next-arrow" aria-label="next"><span class="c-icon c-icon--size-large icon-arrow-right" role="img" aria-label="arrow-right"></span></button>',
        dots: false,
        autoplay: false,
        speed: 450,
        cssEase: 'cubic-bezier(.22,.61,.36,1)',
        swipe: true,
        swipeToSlide: true,
        touchThreshold: 6,
        responsive: [
          { breakpoint: 1400, settings: { slidesToShow: 4 } },
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
      });
    }
  }
});

// Mobile Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobilePopup = document.getElementById('mobilePopup');
  const closeButton = document.getElementById('closeMobilePopup');
  const okButton = document.getElementById('okMobilePopup');
  
  // Check if device is mobile (screen width <= 768px)
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  
  // Show popup on mobile devices
  function showMobilePopup() {
    if (isMobileDevice() && mobilePopup) {
      // Check if popup was already closed in this session
      const popupClosed = sessionStorage.getItem('mobilePopupClosed');
      if (!popupClosed) {
        mobilePopup.classList.remove('d-none');
        // Add a small delay for better UX
        setTimeout(() => {
          mobilePopup.style.display = 'flex';
        }, 500);
      }
    }
  }
  
  // Hide popup
  function hideMobilePopup() {
    if (mobilePopup) {
      mobilePopup.classList.add('d-none');
      mobilePopup.style.display = 'none';
      // Remember that popup was closed in this session
      sessionStorage.setItem('mobilePopupClosed', 'true');
    }
  }
  
  // Event listeners
  if (closeButton) {
    closeButton.addEventListener('click', hideMobilePopup);
  }
  
  if (okButton) {
    okButton.addEventListener('click', hideMobilePopup);
  }
  
  // Close popup when clicking outside
  if (mobilePopup) {
    mobilePopup.addEventListener('click', function(e) {
      if (e.target === mobilePopup) {
        hideMobilePopup();
      }
    });
  }
  
  // Show popup on mobile devices
  showMobilePopup();
  
  // Re-check on window resize
  window.addEventListener('resize', function() {
    if (isMobileDevice()) {
      showMobilePopup();
    } else {
      hideMobilePopup();
    }
  });
});


