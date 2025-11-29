# HealthCare Plus - Modern Health Marketing Agency Website.

A stunning, modern website built with Next.js 14 and Tailwind CSS for a health marketing agency. Features a beautiful UI with smooth animations, comprehensive service showcase, and an integrated appointment booking form.

## 🌟 Features

- **Modern Design**: Beautiful gradient backgrounds, smooth animations, and glass-morphism effects
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Interactive Components**: 
  - Sticky navigation header with smooth scrolling
  - Animated hero section with statistics
  - Service cards with hover effects
  - Client testimonials
  - Comprehensive appointment booking form
- **Form Collection**: Collects essential client information including:
  - Full name, email, and phone number
  - Business name and type
  - Preferred consultation date and time
  - Custom message/goals
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Type-Safe**: Written in TypeScript for better code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Services.tsx      # Services showcase
│   ├── About.tsx         # About section
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Appointment booking form
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- Primary colors (blue tones)
- Accent colors (purple/pink tones)

### Content

Update the content in each component file:
- Services: Edit the `services` array in `components/Services.tsx`
- Testimonials: Edit the `testimonials` array in `components/Testimonials.tsx`
- Contact info: Update in `components/Footer.tsx`

### Form Handling

The contact form in `components/Contact.tsx` currently logs to console. To integrate with a backend:

1. Replace the `handleSubmit` function with your API call
2. Add your backend endpoint
3. Handle form validation and error states

Example:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Handle response
}
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For support or questions, please contact hello@healthcareplus.com

---
