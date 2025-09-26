// i18n: languages, RTL, translations and helpers
window.CapahenasI18N = (function () {
  const LANGS = [
    { code: 'en', flag: '🇬🇧' }, { code: 'tr', flag: '🇹🇷' }, { code: 'es', flag: '🇪🇸' }, { code: 'zh', flag: '🇨🇳' },
    { code: 'ru', flag: '🇷🇺' }, { code: 'ko', flag: '🇰🇷' }, { code: 'ja', flag: '🇯🇵' }, { code: 'id', flag: '🇮🇩' },
    { code: 'it', flag: '🇮🇹' }, { code: 'fr', flag: '🇫🇷' }, { code: 'ar', flag: '🇸🇦' }, { code: 'de', flag: '🇩🇪' },
    { code: 'pt', flag: '🇵🇹' }, { code: 'fa', flag: '🇮🇷' }, { code: 'uk', flag: '🇺🇦' }, { code: 'nl', flag: '🇳🇱' },
    { code: 'he', flag: '🇮🇱' }, { code: 'sv', flag: '🇸🇪' }, { code: 'no', flag: '🇳🇴' }, { code: 'fi', flag: '🇫🇮' },
    { code: 'pl', flag: '🇵🇱' }, { code: 'cs', flag: '🇨🇿' }, { code: 'hu', flag: '🇭🇺' }, { code: 'el', flag: '🇬🇷' }
  ]
  const RTL = new Set(['ar', 'he', 'fa'])

  // Expect T to be assigned on page (embedded translations). We only host helpers here.
  function i18nText(key) {
    const lang = localStorage.getItem('lang') || 'en'
    const T = window.CapahenasTranslations || {}
    return (T[lang] && T[lang][key]) || (T.en && T.en[key]) || ''
  }

  function applyI18n() {
    const lang = localStorage.getItem('lang') || 'en'
    document.documentElement.lang = lang
    document.documentElement.dir = RTL.has(lang) ? 'rtl' : 'ltr'
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.getAttribute('data-i18n')
      const val = i18nText(key)
      const attrKey = node.getAttribute('data-i18n-attr')
      if (!node.dataset.i18nOrigSaved) {
        if (attrKey) node.dataset.i18nOrig = node.getAttribute(attrKey) || ''
        else if (node.tagName === 'LABEL') {
          const textOnly = Array.from(node.childNodes).filter(n => n.nodeType === 3).map(n => n.nodeValue).join(' ').trim()
          node.dataset.i18nOrig = textOnly
        } else node.dataset.i18nOrig = node.textContent || ''
        node.dataset.i18nOrigSaved = '1'
      }
      const fallbackVal = node.dataset.i18nOrig || ''
      const nextVal = val || fallbackVal
      if (attrKey) { node.setAttribute(attrKey, nextVal); return }
      if (node.tagName === 'LABEL') {
        const text = document.createTextNode(nextVal)
        while (node.firstChild && node.firstChild.nodeType === 3) node.removeChild(node.firstChild)
        node.insertBefore(text, node.firstChild)
      } else node.textContent = nextVal
    })
    const btn = document.getElementById('lang-toggle')
    if (btn) {
      const found = LANGS.find(l => l.code === lang)
      btn.textContent = (found && found.flag) || '🇬🇧'
    }
  }

  function buildLanguageMenu(menuId, toggleId) {
    const menu = document.getElementById(menuId)
    if (!menu) return
    const toggle = document.getElementById(toggleId)
    LANGS.forEach(({ code, flag }) => {
      const b = document.createElement('button')
      b.type = 'button'
      b.className = 'w-9 h-9 rounded-full ring-1 ring-slate-200 flex items-center justify-center'
      b.textContent = flag
      b.title = code
      b.addEventListener('click', () => {
        localStorage.setItem('lang', code)
        menu.classList.add('hidden')
        applyI18n()
      })
      menu.appendChild(b)
    })
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        menu.classList.toggle('hidden')
      })
      document.addEventListener('mousedown', (e) => {
        const target = e.target
        const isInsideMenu = target && (menu.contains(target))
        const isToggle = target && (toggle === target || (target.closest && target.closest('[data-lang-toggle]')))
        if (!isInsideMenu && !isToggle) menu.classList.add('hidden')
      })
    }
  }

  return { LANGS, RTL, i18nText, applyI18n, buildLanguageMenu }
})()


