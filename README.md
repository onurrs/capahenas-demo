# Capahenas Travel - Cappadocia Tourism Website

A modern, responsive website for Capahenas Travel, a boutique travel agency specializing in Cappadocia hot air balloon tours and adventure activities.

## 🎈 About

Capahenas Travel is a small boutique travel agency located in the heart of Cappadocia, Göreme. With over 15 years of experience in the tourism business, we offer unforgettable experiences including:

- **Hot Air Balloon Tours** (Standard, Comfort, and Private)
- **Cappadocia Tours** (ATV Tours, Horse Riding, Classic Car Tours)
- **Turkey Tours** and Custom Itineraries

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Booking System**: Calendar-based date selection with form validation
- **Gallery Carousels**: Image galleries powered by Swiper.js with 16:9 aspect ratio
- **Multi-language Support**: Phone number formatting for international visitors
- **Premium Components**: Gradient effects, glassmorphism, and smooth transitions

## 📂 Project Structure

```
capahenas-demo/
├── index.html                  # Main landing page
├── coming-soon.html            # Coming soon page
├── balloon-tours/
│   ├── balloon-standard.html   # Standard balloon tour page
│   ├── balloon-comfort.html    # Comfort balloon tour page
│   └── balloon-private.html    # Private balloon tour page
├── cappadocia-tours/
│   ├── atv-tour.html          # ATV quad bike tour page
│   ├── horse-riding.html      # Horse riding tour page
│   └── classic-car.html       # Classic car tour page
├── components/
│   ├── header.html            # Reusable header component
│   └── footer.html            # Reusable footer component
├── css/
│   ├── styles.css             # Main stylesheet
│   └── balloon-cards.css      # Balloon tour card styles
├── js/
│   ├── main.js                # Main JavaScript
│   ├── booking.js             # Booking form functionality
│   └── components.js          # Component loader
└── images/                    # All image assets
    ├── balloon-tours/
    ├── cappadocia-tours/
    ├── instagram/
    ├── logos/
    └── reviews/
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Tailwind CSS (CDN)
- **JavaScript (ES6+)**: Vanilla JS for interactions
- **Swiper.js**: Touch-enabled slider/carousel
- **SweetAlert2**: Beautiful alert modals
- **Select2**: Enhanced select boxes
- **Cleave.js**: Phone number formatting
- **jQuery**: Required for Select2 dependency
- **Flag Icons**: Country flag display in phone selectors

## 🎨 Design System

### Colors
- **Primary Accent**: `#DCA47C` (Warm Gold)
- **Secondary Accent**: `#FFD3B6` (Soft Peach)
- **Background**: `#FBFBFB` (Light Gray)
- **Text**: `#0F172A` (Dark Slate)
- **Muted**: `#6B7280` (Gray)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Effects
- Glassmorphism with backdrop blur
- Gradient overlays and text
- Smooth hover transitions
- Floating animations
- Shadow elevations (card, cardLg, premium)

## 🚦 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/onurrs/capahenas-demo.git
   cd capahenas-demo/capahenas-demo
   ```

2. **Open with a local server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (with `http-server`):
   ```bash
   npx http-server -p 8000
   ```
   
   Using VS Code Live Server:
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📱 Pages Overview

### Main Pages
- **Home** (`index.html`): Landing page with featured tours, gallery, and contact
- **Coming Soon** (`coming-soon.html`): Placeholder for upcoming features

### Balloon Tours
- **Standard Tour**: Group flights with 18-24 passengers
- **Comfort Tour**: Smaller groups (10-14 passengers) with extended flight time
- **Private Tour**: Exclusive flights for 2 passengers

### Cappadocia Tours
- **ATV Tour**: Quad bike adventures through valleys and fairy chimneys
- **Horse Riding**: Horseback exploration of Cappadocia's landscapes
- **Classic Car Tour**: Nostalgic rides in vintage vehicles with photo stops

## 📧 Contact & Booking

- **Email**: info@capahenastravel.com
- **Phone**: +90 534 020 8677
- **WhatsApp**: Available via floating button
- **Address**: Isali Gaferli Avcılar mah Fatih sok No 16/A, Göreme / Nevsehir
- **Hours**: Mon - Sun: 9:00 AM - 8:00 PM

## 🔧 Development Notes

### Mobile Responsiveness
- All galleries use 16:9 aspect ratio for consistent display
- Swiper carousels are optimized to prevent layout shifts
- Touch-friendly navigation and form controls
- Responsive grid layouts with Tailwind breakpoints

### Booking System
- Client-side validation with SweetAlert2
- Email-based booking (mailto links with pre-filled forms)
- Calendar prevents past date selection
- Person counter with min/max limits
- Multi-country phone number formatting

### Performance
- CDN-hosted libraries for fast loading
- Optimized images (consider adding lazy loading)
- Minimal custom JavaScript
- Efficient CSS with Tailwind utility classes

## 📝 License

This project is proprietary and belongs to Hacı Onur Söğüt.

## 🤝 Credits

- **TURSAB Member**: License #14105
- **Design & Development**: Custom implementation
- **Icons**: Heroicons, Flag Icons
- **Fonts**: Google Fonts (Poppins, Playfair Display)

## 📞 Support

For technical issues or inquiries, please contact:
- Email: h.onurrs@yandex.com

---

**© 2025 Capahenas Travel. All rights reserved.**
