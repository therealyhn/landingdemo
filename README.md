# NOVA DJ Demo - Premium Booking Website

A production-quality demo website showcasing a complete DJ booking funnel. Built as a **sales demo** to demonstrate high-end visual design and booking flow logic.

**Live Demo:** [Add your deployed URL here]

---

## 🎯 Purpose

This is a **front-end only demo** (no backend, no database, no payments) designed to showcase:
- Premium, non-template UI design
- Complete booking funnel with calendar hold logic
- Clean, modular component architecture
- Professional user experience

---

## ✨ Features

### Core Sections
- **Hero** - DJ name, tagline, dual CTAs with background image
- **About** - Bio with stats cards
- **Media** - Tab system for Mixes/Mashups/Videos with embed-ready cards
- **Gallery** - Filterable image gallery with fullscreen modal carousel
- **Proof** - Before/After comparison showing booking funnel value

### Booking Funnel (Core Feature)
- **Form Fields:**
  - Full Name (required)
  - Email (required, validated)
  - Instagram handle (optional)
  - Event Type (dropdown)
  - City / Venue (required)
  - Date (required, no past dates)
  - Budget Range (dropdown)
  - Message (required, min 10 characters)

- **Success State Actions:**
  1. **Add Calendar Hold** - Downloads `.ics` file with booking details
  2. **Send Booking Email** - Opens email client with pre-filled booking data
  3. **View/Download Media Kit** - Placeholder for media kit download

### UI Features
- Sticky CTA (mobile: bottom bar, desktop: floating corner button)
- Keyboard navigation (ESC, arrows) in gallery modal
- Form validation with real-time error messages
- Responsive design (mobile-first)
- Corner accent marks as repeated brand motif
- Smooth animations and transitions

---

## 🛠️ Tech Stack

- **React** 19.2.0
- **Vite** 7.2.4
- **Tailwind CSS** 3.4.19
- **Google Fonts** (Space Grotesk, IBM Plex Sans, JetBrains Mono)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

---

## 🎨 Customization Guide

### Change DJ Name & Email

**DJ Name:**
1. Open `src/components/sections/Hero.jsx`
2. Update line 21: `NOVA` → Your DJ name
3. Update line 24: `(Demo DJ)` → Your subtitle

**Booking Email:**
1. Open `src/lib/email.js`
2. Update line 29: `booking@novadj-demo.com` → Your email

### Add Real Media Embeds

**Mixes/Mashups/Videos:**
1. Open `src/components/sections/Media.jsx`
2. Replace placeholder items (lines 14-30) with your actual embed data
3. Add embed URLs from SoundCloud/Mixcloud/YouTube

Example:
```javascript
{
  id: 1,
  title: 'Your Mix Title',
  duration: '60 min',
  platform: 'SoundCloud',
  embedUrl: 'https://soundcloud.com/...' // Add this
}
```

### Replace Demo Images

**Hero Background:**
1. Replace `public/2.jpg` with your image
2. Or update `src/components/sections/Hero.jsx` line 10

**Gallery Images:**
1. Add your images to `public/gallery/`
2. Open `src/components/sections/Gallery.jsx`
3. Update `galleryItems` array (lines 17-24) with your image paths

Example:
```javascript
{
  id: 1,
  category: 'solo',
  src: '/gallery/your-image.jpg', // Add this
  alt: 'Performance description',
  caption: 'Event Name'
}
```

Then update the placeholder div (lines 85-95) to use actual images:
```jsx
<img 
  src={item.src} 
  alt={item.alt}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

### Customize Colors

Open `tailwind.config.js` and modify the color palette:

```javascript
colors: {
  bg: "#050505",           // Main background
  surface: "#101010",      // Card backgrounds
  accent: "#D4FF00",       // Primary accent (lime)
  // ... update as needed
}
```

### Add Media Kit Download

1. Add your media kit PDF to `public/media-kit.pdf`
2. Open `src/components/shared/BookingModal.jsx`
3. Update `handleDownloadMediaKit` function (line 75):

```javascript
const handleDownloadMediaKit = () => {
  window.open('/media-kit.pdf', '_blank')
}
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Select.jsx
│   │   └── Modal.jsx
│   ├── layout/          # Layout components
│   │   └── Container.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Media.jsx
│   │   ├── Gallery.jsx
│   │   └── Proof.jsx
│   └── shared/          # Shared components
│       ├── CornerMarks.jsx
│       ├── BookingModal.jsx
│       └── StickyCTA.jsx
├── lib/                 # Utilities
│   ├── calendar.js      # .ics file generation
│   ├── email.js         # mailto link generation
│   └── validation.js    # Form validation
├── pages/
│   └── Home.jsx         # Main page composition
└── styles/
    └── index.css        # Global styles
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist/ folder via Netlify UI or CLI
```

### GitHub Pages

```bash
# Update vite.config.js with base path
# Build and deploy dist/ folder
```

---

## 📝 Notes

- This is a **front-end only demo** - no backend required
- Calendar holds are client-side `.ics` file downloads
- Booking emails use `mailto:` links (opens user's email client)
- All form data stays in the browser (not sent anywhere)
- Perfect for showcasing to potential clients or as a portfolio piece

---

## 🎯 Use Cases

- **Sales Demo** - Show clients what a premium booking site looks like
- **Portfolio** - Demonstrate React + Tailwind skills
- **Template** - Starting point for real artist websites
- **Learning** - Study clean component architecture

---

## 📄 License

MIT - Feel free to use this for your projects!

---

## 🤝 Credits

Built with modern web technologies and best practices in component architecture.
