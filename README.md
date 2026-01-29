# AFSAR.SYS - Retro-Futuristic Portfolio

A retro-futuristic 8-bit terminal-styled portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🖥️ **CRT Monitor Effects**: Authentic scanlines, flicker, and screen curvature
- ⌨️ **Typewriter Animation**: Terminal-style text animations
- 🎨 **Phosphor Green Aesthetic**: Classic green-on-black terminal theme
- 🎭 **Framer Motion Animations**: Smooth, professional transitions
- 🎮 **3D Elements**: Three.js powered 3D wireframe monitor
- 🔊 **Sound Toggle**: Optional keyboard click sounds
- 📱 **Responsive Design**: Works on all devices
- 📄 **Resume Download**: Direct PDF download functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Font**: VT323 (Google Fonts)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd afsar-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your resume PDF**:
   - Place your resume PDF file named `Mohd_Afsar_Hussain.pdf` in the `public/` folder
   - The download button will automatically link to this file

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
afsar-portfolio/
├── app/
│   ├── globals.css          # Global styles with CRT effects
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── About.tsx             # About/System Specs section
│   ├── Contact.tsx           # Contact form with resume download
│   ├── CRTOverlay.tsx        # CRT scanline effect
│   ├── Experience.tsx        # Work experience section
│   ├── Hero.tsx              # Hero section with typewriter
│   ├── ProgressBar.tsx       # Scroll progress indicator
│   ├── Projects.tsx          # Projects showcase
│   ├── Skills.tsx            # Skills grid with icons
│   ├── SoundToggle.tsx       # Sound on/off toggle
│   └── ThreeBackground.tsx   # 3D background animation
├── public/
│   └── Mohd_Afsar_Hussain.pdf  # Your resume (add this)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'phosphor-green': '#00FF41',
  'dark-bg': '#0D0208',
}
```

### Content
Update the following components with your information:
- `components/Hero.tsx` - Name and title
- `components/About.tsx` - Education and background
- `components/Experience.tsx` - Work experience
- `components/Skills.tsx` - Technical skills
- `components/Projects.tsx` - Your projects
- `components/Contact.tsx` - Contact information

### Animations
Modify Framer Motion variants in each component to customize animation timing and effects.

## Performance Optimization

- Three.js canvas is set to low opacity to reduce GPU usage
- Animations use CSS transforms for better performance
- Images and assets are optimized for web

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## License

Feel free to use this template for your own portfolio!

## Contact

- **Email**: afsarhussain2200@gmail.com
- **LinkedIn**: [linkedin.com/in/mohdafsarhussain](https://linkedin.com/in/mohdafsarhussain)
- **GitHub**: [github.com/afsar-hussai](https://github.com/afsar-hussai)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
