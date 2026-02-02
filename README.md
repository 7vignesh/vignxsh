# Personal Portfolio Website

A modern, minimal, black-theme personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Dark Theme**: Sleek black background with subtle gradients and glassmorphism effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Micro-interactions and scroll-based reveals
- **Modern UI**: Clean typography, glow effects, and elegant card designs
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Accessible**: Following web accessibility best practices
- **TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Font**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── sections/           # Hero, About, Projects, Experience, Contact
│   └── ui/                 # Button, Card, Badge, Input, Icons
├── data/
│   └── portfolio.ts        # Your portfolio data
├── hooks/
│   └── useScrollReveal.ts  # Scroll animation hooks
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Edit `src/data/portfolio.ts` to update:

- **Personal Info**: Name, role, bio, email, location
- **Skills**: Add/remove skills with categories
- **Projects**: Your project portfolio
- **Experience**: Work history
- **Social Links**: GitHub, LinkedIn, Twitter, etc.

### Theme Customization

Modify CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --accent: #3b82f6;
  /* ... more variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Export it from `src/components/sections/index.ts`
3. Import and add to `src/app/page.tsx`

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

### Other Platforms

Build the project and deploy the output:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
