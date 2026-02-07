# Tahshon Holmes Portfolio

A sleek, professional portfolio website with royal purple and gold accents, inspired by Apple's aesthetic and built with Next.js and Tailwind CSS.

## Features

- 🎨 Apple-inspired sleek design with royal purple (#6B46C1) and gold (#FFD700) accents
- ✨ Faint glow bubble effect that follows cursor
- 🌓 Dark mode by default with light mode toggle
- 📱 Fully responsive design
- 🎭 Custom Amatic SC font
- 💼 Project showcase with expandable descriptions
- 🛠️ Tech stack display with glowing badges
- 🔗 Social media links (GitHub, LinkedIn, Instagram, Serializd, Letterboxd)

## Getting Started

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

## Customization Guide

### Adding Your Social Links

Edit `/components/SocialLinks.tsx` and add your URLs:

```typescript
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername', // Add your GitHub
    icon: <FiGithub className="w-6 h-6" />,
  },
  // ... add other URLs
];
```

### Adding Your Projects

Edit `/app/projects/page.tsx` and modify the projects array:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project...',
    techStack: ['React', 'Node.js', 'MongoDB'],
    url: 'https://your-project-url.com',
    imageUrl: 'https://your-screenshot-url.com/image.png', // Optional
  },
  // Add more projects...
];
```

### Adding Hobby Images

1. Add your images to `/public/images/`
2. Reference them in the About page or create an image gallery component

### Customizing Colors

Edit `/tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  purple: {
    royal: '#6B46C1',  // Change royal purple
    // ...
  },
  gold: {
    DEFAULT: '#FFD700', // Change gold
    // ...
  },
}
```

## Pages

- **Home (/)** - Landing page with intro and CTA buttons
- **About (/about)** - Personal story, education, experience, and interests
- **Projects (/projects)** - Showcase of your work with expandable cards
- **Tech Stack (/techstack)** - Categorized display of your skills

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform that supports Next.js

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Deploy!

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## License

MIT License - feel free to use this template for your own portfolio!
