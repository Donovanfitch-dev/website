# Lucent AI Agency Website

A modern, premium AI consultancy website built with Next.js and Tailwind CSS. Features a dark, black & gold aesthetic inspired by 11x.ai.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Orbitron (display), Inter (body)
- **Language:** TypeScript

## 🎨 Design Features

- Dark, minimal, futuristic aesthetic
- Black & gold color scheme (#D4AF37)
- Smooth scroll animations
- Responsive mobile-first design
- Performance optimized
- SEO ready

## 📄 Pages

### Home
Hero section with animated entrance and clear CTAs

### Services
Two main offerings:
1. **AI Website Design** - Modern, conversion-focused websites
2. **AI Automation** - Production-grade automation for sales & operations

### About
- Mission statement
- What sets Lucent apart (4 differentiators)
- Founder story (Donovan Fitch)

### Contact
- Calendly booking integration
- Email: lucentaiagency@gmail.com
- LinkedIn: [Lucent AI Agency](https://www.linkedin.com/company/lucent-ai-agency/)

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📁 Project Structure

```
lucent-nextjs/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page (imports all sections)
├── components/
│   ├── Navigation.tsx        # Fixed nav with smooth scroll
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services grid
│   ├── About.tsx             # Mission & founder story
│   ├── Contact.tsx           # Contact form & links
│   └── Footer.tsx            # Footer
├── public/                   # Static assets (add logo here)
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Colors
Update in `tailwind.config.js`:
```js
colors: {
  gold: {
    DEFAULT: '#D4AF37',
    light: '#F4E5B0',
    dark: '#B8941F',
  },
}
```

### Typography
Fonts defined in `app/globals.css`:
- Display: Orbitron (headings, logo)
- Body: Inter (paragraphs, UI)

### Content
All content is in component files - easily editable:
- Services: `components/Services.tsx`
- About: `components/About.tsx`
- Contact: `components/Contact.tsx`

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Server-side rendering with Next.js
- Optimized animations (CSS-based)
- Lazy loading images
- Minimal JavaScript bundle
- Fast page loads

## 🔗 External Links

- Calendly: Pre-configured booking link
- Email: Click-to-email functionality
- LinkedIn: Company profile link

## 📝 License

All rights reserved - Lucent AI Agency 2026

## 🤝 Support

For questions or support, contact:
- Email: lucentaiagency@gmail.com
- LinkedIn: [Lucent AI Agency](https://www.linkedin.com/company/lucent-ai-agency/)
