# Subodh Bhandari - Portfolio (Angular)

A modern, responsive portfolio website built with Angular 17, showcasing professional experience, skills, and projects.

## 🚀 Features

### Enhanced Features (New in Angular Version)
- **Modern Angular 17 Architecture**: Built with the latest Angular framework using standalone components
- **Responsive Design**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth scroll animations using AOS (Animate On Scroll)
- **Dynamic Skill Bars**: Interactive skill visualization with animated progress bars
- **Modern UI/UX**: Beautiful gradients, hover effects, and smooth transitions
- **Contact Form**: Working contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Lazy loading and optimized bundle size

### Core Features
- **Professional Summary**: Detailed about section with education and certificates
- **Experience Timeline**: Interactive timeline showing work experience
- **Skills Visualization**: Categorized skills with progress indicators
- **Project Showcase**: Detailed project cards with features and technologies
- **Contact Information**: Multiple ways to get in touch
- **Social Links**: Direct links to LinkedIn, GitHub, and email

## 🛠️ Technologies Used

- **Frontend**: Angular 17, TypeScript, SCSS
- **Styling**: Modern CSS with CSS Grid, Flexbox, and CSS Variables
- **Animations**: AOS (Animate On Scroll) library
- **Icons**: Font Awesome
- **Email Service**: EmailJS for contact form functionality
- **Build Tool**: Angular CLI

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   npx ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── footer/          # Footer component
│   │   ├── home/            # Hero section and features
│   │   ├── about/           # Professional summary
│   │   ├── experience/      # Work experience timeline
│   │   ├── skills/          # Skills and interests
│   │   ├── projects/        # Project showcase
│   │   └── contact/         # Contact form
│   ├── app.component.ts     # Main app component
│   ├── app.config.ts        # App configuration
│   └── app.routes.ts        # Routing configuration
├── assets/
│   └── images/              # Profile and project images
├── styles.scss              # Global styles
└── main.ts                  # Application entry point
```

## 🎨 Design Features

### Modern UI Elements
- **Gradient Backgrounds**: Beautiful gradient combinations throughout the site
- **Card-based Layout**: Clean, modern card designs for content sections
- **Hover Effects**: Interactive hover animations on buttons and cards
- **Smooth Transitions**: CSS transitions for all interactive elements
- **Typography**: Modern font hierarchy with proper spacing

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Responsive design for tablet screens
- **Desktop Experience**: Enhanced experience for larger screens
- **Flexible Grid**: CSS Grid and Flexbox for adaptive layouts

### Interactive Elements
- **Animated Skill Bars**: Progress bars that animate on scroll
- **Timeline Animation**: Animated timeline for experience section
- **Project Cards**: Hover effects with overlay information
- **Contact Form**: Real-time validation and submission feedback

## 📱 Pages & Components

### Home Page
- Hero section with animated profile image
- Professional statistics
- Feature highlights
- Call-to-action buttons

### About Page
- Professional summary
- Education details
- Certificates section
- Key highlights

### Experience Page
- Interactive timeline
- Job descriptions
- Technology tags
- Company information

### Skills Page
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Interests and hobbies
- Language proficiency

### Projects Page
- Project cards with images
- Feature lists
- Technology stacks
- Live demo links (when available)

### Contact Page
- Contact information
- Social media links
- Working contact form
- Form validation

## 🔧 Configuration

### EmailJS Setup
The contact form uses EmailJS for email functionality. Update the following in `contact.component.ts`:

```typescript
// Update these values with your EmailJS credentials
emailjs.init('YOUR_USER_ID');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
```

### Customization
1. **Profile Information**: Update personal details in each component
2. **Styling**: Modify CSS variables in `styles.scss`
3. **Images**: Replace images in `assets/images/`
4. **Content**: Update text content in component templates

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Build the project
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or deploy branch

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist/portfolio-angular`

## 📈 Performance

- **Lazy Loading**: Components load on demand
- **Optimized Images**: Compressed and optimized images
- **Minified CSS/JS**: Production builds are minified
- **CDN Resources**: External libraries loaded from CDN

## 🔒 Security

- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: Angular's built-in XSS protection
- **HTTPS**: Secure connections for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: subodhbhandari4@gmail.com
- **LinkedIn**: [Subodh Bhandari](https://linkedin.com/in/subodh-bhandari/)
- **GitHub**: [Subodh2055](https://github.com/Subodh2055)

---

Built with ❤️ using Angular 17 