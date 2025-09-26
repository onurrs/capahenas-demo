Capahenas Travel — Ana Sayfa PDD (Markdown)
1) Hızlı inceleme — çıkardığım UX fikirleri

Büyük görsel/hero + erken CTA (rezervasyon / iletişim / "Book now") kullanımı etkili. Bu, ziyaretçiyi hemen dönüştürmeye çalışıyor. (inspirasyon: TurquazBallons). 
turquazballoons.com

Turlar/destinations listesi kartlarla (resim, kısa açıklama, fiyat / badge) sunuluyor — kolayca taranıyor ve filtrelenebiliyor. (inspirasyon: Balloonscanner). 
balloonscanner.com

Kullanıcı yorumları & Trust elements (rating, small testimonial cards) güven veriyor — ana sayfada kısa referanslar konmalı. 
turquazballoons.com

2) Hedef / Kısa açıklama

Amaç: Capahenas Travel için modern, premium, açık-tema, UI/UX-friendly tek ana sayfa.
Odak: Cappadocia turları (ana konu) + Türkiye genelinde 10 tur (liste) + Balloon turları (3) + Destinations (10) + Aktiviteler (9).
Davranış: Turların her biri demo için "Yapım aşamasında" sayfasına yönlendirilecek (müştire demo).

3) İçerik yapısı (ana sayfa bölümleri — sıralama)

Üst (sticky) nav: logo, menu (Home, Cappadocia, Tours, Destinations, Activities, Gallery, Contact), dil/booking CTA.

Hero (tam genişlik): büyük Cappadocia görüntüsü, kısa tag-line, 2 CTA (Book / Browse Tours).

Quick booking card (küçük, hero içinde veya hemen altında) — tarihler / pax seçici (opsiyonel, demo buton).

Highlight paketler (3 balloon tour cards — premium öne çıkan).

Turlar (Türkiye) — grid, 10 adet (herbiri küçük kart, “Yapım aşamasında” butonu).

Destinations (10) — yatay kaydırılabilen carousel veya grid.

Aktiviteler (9) — ikon + kısa açıklama grid.

Galeri — masonry veya grid, lightbox.

Reviews / Testimonials — carousel.

Footer — contact, sosyal, küçük menü, yasal.

4) İçerik adedi ve davranış (tam istek karşılığı)

Türkiye turları: 10 kart (tıklayan "Yapım aşamasında" sayfasına gider).

Balon turları: 3 kart (bunlar ana paket olarak öne çıkacak).

Destinations: 10 yer — küçük bilgi & "Daha fazla" (dest page → yapım aşamasında).

Aktiviteler: 9 (örn: Hot-air balloon, ATV, Horse riding, Çömlek workshop, Hiking, Wine tasting, Photo tour, Cultural tours, Cave hotels).

Galeri: ana sayfada görsel ağırlıklı, lightbox desteği.

Hepsi responsive ve performans-tuned (lazy-load, CDN).

5) Görsel & stil / tema

Açık tema — renk paleti (major → minor):

#FBFBFB (background — very light)

#E8F9FF (soft sky tint)

#C4D9FF (accent soft blue)

#C5BAFF (violet-ish accent)

Typography (öneri, Google Fonts via CDN):

Başlıklar: Playfair Display veya Merriweather (serif, premium his)

Body: Inter veya Roboto (sans, okunabilir)

Buton / CTA stilleri: rounded 12px, subtle shadow, gradient/solid from #C4D9FF → #C5BAFF, dark text or navy contrast. Focus / hover states açıkça görünür.

Spacing & layout: generous white-space, card shadows, soft rounded corners (8–16px).

6) Teknik tercihler / kütüphane önerileri (CDN ile)

CSS: Tailwind CSS (CDN) veya standart styles.css + CSS vars (:root) — tercihe göre Tailwind hızlı prototip.

JS: Alpine.js (küçük interaktivite), veya vanilla.

Carousel / Gallery: Swiper.js (CDN) veya GLightbox / PhotoSwipe (lightbox).

Icons: Heroicons veya Feather via CDN.

Fonts: Google Fonts CDN.

Optional: AOS (scroll animations) — ama hafif kullan.

7) Erişilebilirlik (A11y) & performans

Hero resimlerinde alt metinleri, CTA butonlarında aria-label.

Renk kontrastlarını kontrol et (metin vs bg).

Lazy-load tüm galeri/resimler (native loading="lazy").

CSS küçük/concise ve tek dosya; JS minimal — kritik JS inline, geri kalan defer.

Meta tags: OpenGraph, Twitter Card, locale.

8) Klasör yapısı (projede)
capahenas-travel/
│
├── index.html
├── coming-soon.html            # template for each tour (yapım aşamasında)
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   └── gallery.js
│
├── images/
│   ├── hero-cappadocia-1.jpg
│   ├── balloon-1.jpg
│   └── gallery/
│       ├── g1.jpg
│       └── ...
│
├── vendors/                    # optional, or via CDN
│   └── swiper/
│
└── assets/
    └── brochure.pdf

9) Örnek HTML + CSS Kısımları (ana sayfa — minimal, doğrudan kullanabilirsin)
CSS değişkenleri (styles.css başında)
:root{
  --bg: #FBFBFB;
  --sky-1: #E8F9FF;
  --accent-1: #C4D9FF;
  --accent-2: #C5BAFF;
  --text: #0F172A; /* koyu gri/navy */
  --muted: #6B7280;
  --radius: 12px;
}

body{
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  margin:0;
  -webkit-font-smoothing:antialiased;
}

/* Basit CTA */
.btn-primary{
  display:inline-block;
  padding: .75rem 1.25rem;
  border-radius: 12px;
  background: linear-gradient(90deg,var(--accent-1),var(--accent-2));
  color: #081025;
  font-weight:600;
  box-shadow: 0 6px 20px rgba(15,23,42,0.06);
  text-decoration:none;
}

Hero (index.html içinden)
<header class="site-header" style="position:sticky;top:0;background:rgba(255,255,255,.8);backdrop-filter: blur(6px);">
  <nav class="container">
    <a href="/" class="logo">Capahenas Travel</a>
    <ul class="nav">
      <li><a href="#tours">Tours</a></li>
      <li><a href="#destinations">Destinations</a></li>
      <li><a href="#activities">Activities</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a class="btn-primary" href="#contact">Book</a></li>
    </ul>
  </nav>
</header>

<section id="hero" style="padding:4rem 0;background:linear-gradient(180deg, rgba(255,255,255,0.0), rgba(232,249,255,.05)),url('images/hero-cappadocia-1.jpg') center/cover no-repeat;">
  <div class="container" style="display:flex;align-items:center;gap:2rem;">
    <div style="max-width:700px;">
      <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.5rem);margin:0;">
        Capahenas Travel — Cappadocia & Türkiye Eksperleri
      </h1>
      <p style="color:var(--muted);margin-top:1rem;">Unutulmaz balon turları, butik deneyimler ve Türkiye içi seçilmiş turlar.</p>
      <div style="margin-top:1.5rem;">
        <a class="btn-primary" href="#tours">Turlara Gözat</a>
        <a class="btn-ghost" href="#contact" style="margin-left:1rem;">İletişime Geç</a>
      </div>
    </div>

    <!-- Quick booking card (opsiyonel) -->
    <aside style="background:var(--bg);padding:1rem;border-radius:12px;box-shadow:0 8px 30px rgba(12,18,36,.06);min-width:320px;">
      <form>
        <label>Tarih</label><input type="date" name="date" />
        <label>Kişi</label><input type="number" min="1" value="2"/>
        <button class="btn-primary" type="button">Hemen Rezervasyon (Demo)</button>
      </form>
    </aside>
  </div>
</section>

Tour card (grid içinde)
<article class="tour-card" aria-labelledby="tour-1-title" style="border-radius:12px;overflow:hidden;background:white;box-shadow:0 6px 20px rgba(12,18,36,.04);">
  <img src="images/balloon-1.jpg" alt="Balloon tour" style="width:100%;height:220px;object-fit:cover;">
  <div style="padding:1rem;">
    <h3 id="tour-1-title">Cappadocia Sunrise Balloon — Classic</h3>
    <p class="muted">1 hour — Breakfast included</p>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:.75rem;">
      <span style="font-weight:700">€300</span>
      <a href="coming-soon.html" class="btn-primary" aria-label="View tour">Yapım aşamasında</a>
    </div>
  </div>
</article>

Coming Soon sayfası (coming-soon.html)
<!doctype html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tour — Coming Soon</title></head>
<body style="font-family:Inter,Arial;background:var(--bg);">
  <main style="min-height:100vh;display:grid;place-items:center;">
    <section style="text-align:center;padding:3rem;">
      <h1>Bu Tur Yapım Aşamasında</h1>
      <p>Bu sayfa şu an demo amaçlıdır. Lütfen bizimle iletişime geçin: <a href="mailto:info@capahenas.travel">info@capahenas.travel</a></p>
      <p><a href="/" class="btn-primary">Ana Sayfaya Dön</a></p>
    </section>
  </main>
</body>
</html>

10) Galeri önerisi

Grid 3 sütun (desktop), 2 (tablet), 1 (mobile). Her görsel loading="lazy" ve tıklandığında lightbox açsın.

Örnek görseller demo amaçlı: kullandığım görsel arama sonuçlarından sıcak sunrise ballon görselleri — örnek görseller demo içerikte kullanılabilir (lisans/altyapı kontrolü sana kalır). (Kaynak örnek görsel aramaları).

11) Ana sayfa veri modeli (JSON örneği — hızlı prototip için)
{
  "site": {
    "name": "Capahenas Travel",
    "hero": { "title":"Capahenas Travel — Cappadocia & Türkiye", "image":"images/hero-cappadocia-1.jpg" },
    "featured_balloon_tours": [
      {"id":"b1","title":"Sunrise Classic","price":"€300","img":"images/balloon-1.jpg"},
      {"id":"b2","title":"Comfort Package","price":"€420","img":"images/balloon-2.jpg"},
      {"id":"b3","title":"Private Flight","price":"€900","img":"images/balloon-3.jpg"}
    ],
    "tours_tr": [ /* 10 adet, coming soon */ ],
    "destinations": [ /* 10 adet */ ],
    "activities": [ /* 9 adet */ ]
  }
}

12) Teslim edilecekler (müşteriye demo)

index.html (ana sayfa, responsive)

coming-soon.html (turlar için yönlendirme)

css/styles.css + js/main.js (minimal)

images/ (örnek görseller düşük çözünürlü demo)

README: deploy / CDN talimatları (Netlify / Vercel / S3).

13) Hızlı UX notları (önceliklendirme)

Hero + Book CTA — dönüşümün merkezinde.

Öne çıkan 3 balloon turu — tipik ziyaretçiyi yakalar.

Türkiye turlarının listesi — arama/filtre (kısa kısa kart).

Galeri + Reviews — sosyal kanıt, sayfada scroll retention sağlar.

Coming soon linkleri açık olmalı (müşteri demo için).

14) Kaynakça (inceleme dayanakları)

Turquaz Balloons — hero, paket kartları, yorumlar ve rezervasyon odaklı UX. 
turquazballoons.com

Balloonscanner — listeleme + filtre yaklaşımı, grid gösterimler. 
balloonscanner.com

Örnek görsel arama: Cappadocia hot air balloon görseller (örnek galeri görselleri).