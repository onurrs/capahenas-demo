Proje: Capahenas Travel — Statik Web Site
1 — Özet / Amaç

Mevcut capahenastravel.com sitesindeki içerikleri koruyup modern ve ilgi çeken bir statik web sitesine dönüştürmek. (Sunum: mobil öncelikli, görsel zengin, rezervasyon/iletişim odaklı.)

Tasarımda ana ilham kaynağı: goturkiye.com — büyük görsel kartlar, kategori/destinasyon keşfi, sürdürülebilirlik vurguları ve zengin içerik ağacı. 
GoTürkiye

Eski sitenin (Capahenas) mevcut içerikleri: About Us, Contact, Tours (Red/Green/Private vb.), Balloon Flights (standard/comfort/private), Destinations listesi, Activities & Services, TURSAB üyelik bilgisi, fiyatlanmış öne çıkan turlar, WhatsApp canlı sohbet linkleri. Bu içerikler yeni yapı içinde yeniden kullanılacak. 
capahenastravel.com

2 — Hedef Kitle & Başarı Kriterleri

Hedef kitle: Cappadocia / Türkiye'ye tatil planlayan uluslararası turistler (özellikle İngilizce konuşan), aileler, çiftler, macera/tarihe ilgi duyan küçük gruplar.

Başarı kriterleri:

Ana sayfada rezervasyon/whatsapp/telefon çağrı aksiyonları görünür + tıklama oranı artışı.

Tur sayfalarında açık, kısa fiyat/özellik/rezervasyon CTA'ları.

SEO: "Cappadocia hot air balloon", "Cappadocia tours", "Cappadocia red tour" gibi anahtar kelimelerde organik bulunabilirlik (temel meta+schema).

Hızlı yükleme (statik site, optimize edilmiş görseller, lazy-load).

3 — Temel Özellikler (İlham: GoTürkiye)

Kart tabanlı keşif (destinations / experiences) düzeni. (hero → kategori kartları → öne çıkan turlar). 
GoTürkiye

Kategori filtreleri: Tours / Balloon Flights / Activities / Destinations.

Her turun detay sayfası: kısa özet + program + fiyat aralığı + “Book / Inquiry” CTA + WhatsApp/phone. (Capahenas'taki içerik bu yapıya oturtulacak). 
capahenastravel.com

Çok dilli yapı için hazır meta (ilk sürüm: EN + TR).

Footer: iletişim, TURSAB üye numarası, sosyal medya, çalışma saatleri (eski sitedeki bilgiler burada).

4 — Site Haritası (Sitemap)
/index.html                (Hero, Öne Çıkan Turlar, Destinations kartları, Hakkımızda kısa)
/tours/                    (Turlar listesi; filtre: Red/Green/Private/One-day)
/tours/green-tour.html
/tours/red-tour.html
/tours/private-tours.html
/balloons/                 (Balloon flights list & booking CTA)
/destinations/             (Destinations list & detay sayfaları)
/destinations/goreme.html
/services/                 (Airport transfer, ATV, Horse Riding, Jeep, Photo shoot, vb.)
/about.html                (Full About Us; TURSAB member info)
/contact.html              (Contact form, WhatsApp, phone, address + Google Maps embed)
/legal/terms.html
/legal/privacy.html
/404.html
/assets/                   (images, css, js, json-ld)

5 — İçerik Haritalama (Eski → Yeni)
Eski Sayfa / İçerik	Yeni Konum	Not
Home (capahenas ana)	/index.html	Hero: büyük Cappadocia görseli + kısa açılış metni
Popular Tours (liste)	/index.html + /tours/	Kart biçiminde fiyat & kısa info
Balloon Flights (standard/comfort/private)	/balloons/ + detay sayfaları	Ödeme yerine "Book / Inquiry" + WhatsApp
Destinations list (Goreme, Kaymakli, vb.)	/destinations/ + /destinations/*.html	Her destinasyon kısa açıklama + görseller
Contact Info, Address, Phone, Email	/contact.html + footer	WhatsApp butonunu sabitle (header/footer)
TURSAB üye no.	Footer & About	Güven başlangıcı olarak görünür. 
capahenastravel.com
6 — Görsel & UI Kılavuzu (İlham + Revizyon)

Renk paleti: Cappadocia natürel tonları — sıcak kum/terra/ateş tonları + koyu mavi kontrast (CTA'lar).

Tipografi: Başlıklar için güçlü sans-serif (Google: Poppins/Montserrat), gövde için okunaklı Inter veya Roboto.

Hero: Full-bleed yüksek çözünürlüklü arka plan (görsel optimize edilecek). Üzerinde 2-line başlık + kısa CTA (Book / Contact).

Kartlar: Görsel üstte, altta kısa meta (süre, kişi sayısı), fiyat/starting price, book button. (GoTürkiye kart düzeninden esinlen). 
GoTürkiye

Mobil tasarım: sticky footer CTA (WhatsApp) ve hamburger menü.

İkonografi: deneyim türleri için küçük icon seti (balloon, hike, history, food).

7 — Teknik Yaklaşım & Stack (statik)

Statik site — tercihen: plain HTML/CSS/JS veya bir hafif SSG (Hugo / Eleventy / Astro). Cursor içinde doğrudan static HTML + Tailwind CSS ya da Bootstrap ile hızlı prototip uygundur.

Dosya yapısı önerisi: yukarıdaki /assets/ ve içerik klasörleri.

Görsel optimizasyon: WebP, responsive srcset, lazy-loading.

Form/Booking: Contact form için Netlify Forms, Formspree veya e-posta mailto basitlik tercih edilebilir; rezervasyonlar için WhatsApp hızlı çözümü (eski sitede WhatsApp bağlantıları mevcut — bunu koruyalım). 
capahenastravel.com

SEO & Structured Data: JSON-LD (Organization, LocalBusiness, Product/Tour schema), meta tags (og:), canonical. Örnek JSON-LD şablonu aşağıda.

Örnek JSON-LD (Organization):

{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Capahenas Travel",
  "url": "https://www.capahenastravel.com",
  "telephone": "+90 384 271 2155",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Isali Gaferli Avcılar mah Fatih sok No 16/A Goreme",
    "addressLocality": "Goreme",
    "addressRegion": "Nevsehir",
    "addressCountry": "TR"
  },
  "sameAs": ["https://www.facebook.com/…", "https://www.instagram.com/…"]
}

8 — Erişilebilirlik & Uluslararasılaşma

A11y: yeterli kontrast, alt etiketleri, klavye navigasyonu, semantic HTML.

Dil: ilk sürüm için EN ve TR dosyaları (örn. /en/ veya ?lang=en). Meta hreflang etiketleri eklenecek.

9 — İçerik & SEO Önerileri (ilk kurulumda)

Her turun başında kısa özet (25–35 kelime), sonra program, dahil/harici, ipuçları, rezervasyon adımı.

Meta title örnek: Red Tour (North) - Capahenas Travel | Cappadocia Day Tours

Meta description örnek: Explore Cappadocia's highlights in our Red Tour. Visit Göreme Open-Air Museum, Pasabag Fairy Chimneys and more. Book now.

10 — UI Bileşenleri / Tekrarlayan Parçalar (Cursor içinde hızlı oluşturulacak)

Header: logo, nav (Tours / Balloons / Destinations / Services / About / Contact), language switch, CTA (WhatsApp).

Hero: başlık + kısa paragraf + 2 CTA.

Tour Card: görsel, badge (popular/new), süre, kişi sayısı, starting price, book button.

Filter Bar: kategori butonları + search.

Destinasyon Grid: kart tabanlı.

Footer: contact, TURSAB no., sosyal, çalışma saatleri.

(İsterseniz bu bileşenlerin her biri için tek dosyalık HTML partial/komponent taslağı hazırlarım — ama burada PDD içinde bileşen listesi verdim.)

11 — İçerik Migrasyonu Planı (adım adım, işlemsel)

Eski siteden tüm metinleri çek (About, Tours, Destinations, Contact). (mevcut içerik görüntülendi). 
capahenastravel.com

Fotoğrafları klasör yapısına geçir, optimize et, isimlendir (tur-slug-1.jpg → tur-slug-1.webp).

Her tur için slug oluştur (örn: green-tour.html) ve tur meta verilerini (süre, max kişi, fiyat) frontmatter/JSON olarak sakla.

Template'leri Cursor içinde kur — header/footer partial + tour-detail template.

Test: mobil, erişilebilirlik, hız (Lighthouse).

Yayın: statik hosting (Netlify, Vercel, GitHub Pages).

12 — Örnek İçerik & Kısa Metinler (kopya hazır)

Hero başlığı (EN):
Enjoy Cappadocia with Capahenas Travel
Hero alt (EN):
Authentic small-group tours, hot air balloon flights, transfers and local experiences from Göreme. 
capahenastravel.com

Tour card short (EN):
Green Tour (South) — Full day · 09:30–18:00 · From €40 pp · Book Now

13 — Teknik Notlar (Cursor / Prototip için)

Cursor'a yüklerken: tek HTML dosyası yerine component-based (partials) organize et. Cursor editöründe canlı preview için index.html + assets/ yeterli.

Tailwind/vanilla CSS tercih edilebilir; Tailwind ile Cursor içinde hızlı prototip + responsive sınıfları kolay olur.

JavaScript minimum: menü, mobile nav, lazy load, booking modal. Rezervasyon backend gerekmiyorsa WhatsApp + mailto yeterli.

14 — Riskler & Öneriler

Görsel izinleri: eski siteden alınan görseller için kullanım hakları kontrolü.

Fiyatların güncelliği: turların fiyatları değişebilir — içerik sahibi ile teyit edin.

Rezervasyon akışı: eğer ileride online ödeme ekleyecekseniz altyapı (Stripe, iyzico vb.) planlanmalı.

15 — Teslim Edilecekler (Cursor hazır)

index.html (hero, featured tours, destinations)

/tours/*.html (her tur için detay sayfası)

/balloons/*.html

/destinations/*.html

/contact.html, /about.html

assets/ (CSS, JS, optimized images)

seo/ (JSON-LD snippets, meta templates)

README.md — deploy talimatları (Netlify / Vercel / GitHub Pages)

16 — Hızlı Başlangıç Checklist (Cursor içinde hemen yapılacaklar)

 Proje klasörü oluştur (/src, /assets)

 Header/Footer partial şablonu kur

 index.html hero + featured tours kartları yerleştir (Capahenas içeriklerinden alınan başlık/fiyatlarla) 
capahenastravel.com

 WhatsApp sabit CTA ekle (header + sticky mobile) — eski sitede zaten mevcut. 
capahenastravel.com

 Basit JSON-LD Organization ekle

Kaynaklar / İnceleme notları

GoTürkiye — ana sayfa, kartlı destinasyon/experience düzeni, sürdürülebilirlik vurgusu (ilham kaynağı). 
GoTürkiye

Capahenas Travel — mevcut içerik, tur listesi, balloon flight tipleri, iletişim ve TURSAB üye numarası (taşınacak içerikler). 
capahenastravel.com