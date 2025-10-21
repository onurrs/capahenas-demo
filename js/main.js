// Main initialization for Capahenas Travel
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn')
    const mainNav = document.getElementById('main-nav')
    if (menuBtn && mainNav) {
      menuBtn.addEventListener('click', () => {
        // On small screens, toggle visibility
        if (window.matchMedia('(max-width: 767px)').matches) {
          mainNav.classList.toggle('hidden')
          // Basic slide-in feel using Tailwind utilities if available
          mainNav.classList.toggle('flex')
          mainNav.classList.toggle('flex-col')
          mainNav.classList.toggle('absolute')
          mainNav.classList.toggle('top-16')
          mainNav.classList.toggle('left-0')
          mainNav.classList.toggle('right-0')
          mainNav.classList.toggle('bg-white')
          mainNav.classList.toggle('p-4')
          mainNav.classList.toggle('shadow-card')
          mainNav.classList.toggle('gap-4')
        }
      })
    }
    const $ = (sel) => document.querySelector(sel)
    const $$ = (sel) => document.querySelectorAll(sel)

    // Year
    const y = $('#y'); if (y) y.textContent = new Date().getFullYear()


    // GLightbox
    if (window.GLightbox) {
      const lb = GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true, openEffect: 'none', closeEffect: 'none', slideEffect: 'none' })
      lb.on('open', () => { const g = document.getElementById('gallery'); if (g) g.removeAttribute('aria-hidden') })
    }

    // Instagram-like card navigation: click outside images -> open profile
    const instaCard = document.getElementById('insta-card')
    if (instaCard) {
      instaCard.addEventListener('click', (e) => {
        // If clicked element or its parents have data-no-nav or is inside a .glightbox link, do nothing
        const target = e.target
        const isControl = target.closest('[data-no-nav]')
        const isLightboxLink = target.closest('a.glightbox')
        if (isControl || isLightboxLink) return
        const url = instaCard.getAttribute('data-url') || 'https://www.instagram.com/'
        window.open(url, '_blank', 'noopener')
      })
    }

    // Image fallback
    const placeholder = 'data:image/svg+xml;utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">\
        <rect width="100%" height="100%" fill="%23E8F9FF"/>\
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236B7280" font-family="Inter, Arial" font-size="18">Görsel yüklenemedi</text>\
      </svg>'
    $$('.w-full img, img').forEach(img => {
      img.addEventListener('error', () => {
        if (!img.dataset.fallback) {
          img.dataset.fallback = '1'
          img.src = placeholder
          img.classList.add('object-contain', 'bg-sky1/50')
        }
      }, { once: true })
    })

    // Mailto helpers
    const buildMailto = (subject, body) => `mailto:info@capahenas.travel?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    const quickBtn = document.getElementById('quick-mail')
    if (quickBtn) {
      quickBtn.addEventListener('click', () => {
        const date = (document.querySelector('input[type="date"]') || {}).value || '-'
        const pax = (document.querySelector('input[type="number"]') || {}).value || '-'
        const subject = window.CapahenasI18N.i18nText('mail.quick.subject')
        const body = window.CapahenasI18N.i18nText('mail.quick.body').replace('{date}', date).replace('{pax}', pax)
        window.location.href = buildMailto(subject, body)
      })
    }
    const ctaBtn = document.getElementById('contact-mail')
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        const name = (document.getElementById('f-name') || {}).value || ''
        const email = (document.getElementById('f-email') || {}).value || ''
        const msg = (document.getElementById('f-message') || {}).value || ''
        const subject = window.CapahenasI18N.i18nText('mail.form.subject')
        const body = window.CapahenasI18N.i18nText('mail.form.body').replace('{name}', name).replace('{email}', email).replace('{msg}', msg)
        window.location.href = buildMailto(subject, body)
      })
    }

    // i18n menu
    window.CapahenasI18N.buildLanguageMenu('lang-menu', 'lang-toggle')
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
    window.CapahenasI18N.applyI18n()

    // Scroll reveal animations
    const animated = document.querySelectorAll('[data-anim]')
    if (animated.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('animate-init')
            // Stagger children if any
            const kids = entry.target.querySelectorAll('[data-anim-child]')
            kids.forEach((el, idx) => {
              el.style.setProperty('--d', `${120 + idx * 60}ms`)
              el.classList.add('animate-in')
              el.classList.remove('animate-init')
            })
            io.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
      animated.forEach(el => io.observe(el))
    }
  })
})()


