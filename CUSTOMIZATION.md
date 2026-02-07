# Portfolio Customization Guide

## Quick Start Checklist

### 1. Add Your Social Media Links
📍 **File:** `/components/SocialLinks.tsx`

Find this section and add your URLs:
```typescript
const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME', // ← ADD HERE
    icon: <FiGithub className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR_USERNAME', // ← ADD HERE
    icon: <FiLinkedin className="w-6 h-6" />,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/YOUR_USERNAME', // ← ADD HERE
    icon: <FiInstagram className="w-6 h-6" />,
  },
  {
    name: 'Serializd',
    url: 'https://serializd.com/user/YOUR_USERNAME', // ← ADD HERE
    icon: <svg>...</svg>,
  },
  {
    name: 'Letterboxd',
    url: 'https://letterboxd.com/YOUR_USERNAME', // ← ADD HERE
    icon: <SiLetterboxd className="w-6 h-6" />,
  },
];
```

### 2. Add Your Projects
📍 **File:** `/app/projects/page.tsx`

Replace the sample projects with your own:
```typescript
const projects = [
  {
    title: 'Your Amazing Project',
    description: 'What does it do? What problem does it solve? What technologies did you use?',
    techStack: ['React', 'Node.js', 'PostgreSQL'], // These appear as glowing badges
    url: 'https://your-project.com', // Live demo or GitHub repo
    imageUrl: 'https://i.imgur.com/your-screenshot.png', // Optional screenshot
  },
  // Add more projects...
];
```

**Tips for Projects:**
- **imageUrl** is optional - if you leave it blank, you'll get a nice gradient with your project title
- **techStack** items will automatically glow on hover
- Cards are expandable - click to see full description
- External link icon appears automatically if you add a URL

### 3. Add Hobby Images
📍 **Folder:** `/public/images/`

1. Add your hobby images to this folder (e.g., `rubiks-cube.jpg`, `baking.jpg`)
2. Reference them in your About page or create a gallery component

Example usage:
```tsx
<img src="/images/your-image.jpg" alt="Description" />
```

### 4. Customize Your Info
📍 **File:** `/app/about/page.tsx`

The About page already has your information, but you can:
- Update the personal story
- Add more work experience
- Expand the hobbies section
- Add an image gallery of your hobbies

### 5. Update Tech Stack
📍 **File:** `/app/techstack/page.tsx`

Your tech stack is already added! But if you learn new tools, add them here:
```typescript
const techCategories = [
  {
    category: 'New Category',
    skills: ['New Skill 1', 'New Skill 2'],
  },
  // ...
];
```

## Advanced Customization

### Change Colors
📍 **File:** `/tailwind.config.ts`

```typescript
colors: {
  purple: {
    royal: '#6B46C1',  // Your custom purple
    light: '#9D7DE8',
    dark: '#553C9A',
  },
  gold: {
    DEFAULT: '#FFD700', // Your custom gold
    light: '#FFED4E',
    dark: '#B8960A',
  },
}
```

### Adjust Cursor Glow
📍 **File:** `/app/globals.css`

Look for `.cursor-glow` and adjust the gradient or size:
```css
.cursor-glow {
  width: 300px;  /* Make bigger/smaller */
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(107, 70, 193, 0.15) 0%,  /* Adjust opacity */
    /* ... */
  );
}
```

### Add More Pages
Create a new folder in `/app/` with a `page.tsx` file:
```
/app/
  /your-new-page/
    page.tsx
```

Add it to the navigation in `/components/Navigation.tsx`:
```typescript
const navItems = [
  // ...
  { name: 'Your Page', path: '/your-new-page' },
];
```

## Screenshot Tips

For project screenshots:
1. Use a tool like [Screely](https://screely.com) to create nice browser mockups
2. Upload to [Imgur](https://imgur.com) or your preferred image host
3. Use the direct image link in your projects array

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **Make changes** to the files
3. **See changes instantly** at http://localhost:3000
4. **Build for production:** `npm run build`

## Need Help?

- Check the README.md for setup instructions
- All components have comments explaining what they do
- The code follows Next.js best practices

Happy coding! 🚀
