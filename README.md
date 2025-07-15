# Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. This website is designed to be easily customizable with a simple configuration file.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- ⚡ **Fast Loading**: Optimized for performance with minimal dependencies
- 🔧 **Easy Customization**: All content is managed through a single configuration file
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML structure
- ♿ **Accessible**: Built with accessibility best practices
- 🌐 **Cross Browser**: Compatible with all modern browsers

## Quick Start

### Prerequisites

- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)
- A text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or Download** the project files to your local machine

2. **Install Dependencies** (optional - for development):
   ```bash
   npm install
   ```

3. **Start Development Server** (optional):
   ```bash
   npm run dev
   ```

4. **Open** `index.html` in your web browser

## Customization Guide

### 1. Basic Information

Edit `config/personal-info.js` to update your personal information:

```javascript
const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your Tagline",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  // ... more options
};
```

### 2. Social Media Links

Update your social media profiles:

```javascript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  // ... add more platforms
}
```

### 3. About Section

Customize your about section:

```javascript
about: {
  short: "Brief description about yourself",
  long: "Detailed description about your background, experience, and interests"
}
```

### 4. Skills

Organize your skills by category:

```javascript
skills: {
  frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  backend: ["Node.js", "Python", "PHP"],
  database: ["MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Git", "Docker", "AWS"]
}
```

### 5. Experience

Add your work experience:

```javascript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2020 - Present",
    description: "Description of your role and achievements"
  }
  // ... add more experiences
]
```

### 6. Projects

Showcase your projects:

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "assets/images/project1.jpg",
    liveUrl: "https://project.com",
    githubUrl: "https://github.com/username/project"
  }
  // ... add more projects
]
```

### 7. Theme Colors

Customize the color scheme:

```javascript
theme: {
  primary: "#007bff",    // Main brand color
  secondary: "#6c757d",  // Secondary color
  accent: "#28a745",     // Accent color
  dark: "#343a40",       // Dark color
  light: "#f8f9fa"       // Light color
}
```

## File Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── package.json            # Project dependencies
├── README.md              # This file
├── config/
│   └── personal-info.js   # Configuration file (edit this!)
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # Main JavaScript file
│   └── images/            # Add your images here
│       ├── favicon.ico
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── startbootstrap-stylish-portfolio-gh-pages/  # Original template
```

## Adding Images

1. Create an `assets/images/` folder if it doesn't exist
2. Add your project images (recommended size: 400x300px)
3. Update the image paths in `config/personal-info.js`

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Customize your domain in the Netlify dashboard

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Traditional Hosting

1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Your site should work immediately

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minify CSS/JS**: Use build tools to minify files for production
3. **Use CDN**: The site already uses CDN for Bootstrap and Font Awesome
4. **Lazy Loading**: Consider adding lazy loading for images if you have many

## Customization Examples

### Adding a New Section

1. Add the HTML structure to `index.html`
2. Add the corresponding data to `config/personal-info.js`
3. Add the population logic to `assets/js/main.js`
4. Style the section in `assets/css/style.css`

### Changing the Layout

The website uses Bootstrap 5 grid system. You can:
- Modify column classes (col-lg-4, col-md-6, etc.)
- Add new Bootstrap components
- Customize the CSS variables in `assets/css/style.css`

### Adding Animations

The site includes CSS animations. You can:
- Modify existing animations in `assets/css/style.css`
- Add new animations using CSS keyframes
- Use JavaScript for more complex animations

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths in `config/personal-info.js`
2. **Styles not applying**: Ensure `assets/css/style.css` is linked correctly
3. **JavaScript errors**: Check browser console for errors
4. **Mobile issues**: Test responsive design using browser dev tools

### Getting Help

1. Check the browser console for JavaScript errors
2. Validate your HTML using the W3C validator
3. Test on different browsers and devices
4. Ensure all file paths are correct

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- **Bootstrap**: For the responsive grid system and components
- **Font Awesome**: For the icons
- **Google Fonts**: For the typography
- **StartBootstrap**: For the original template inspiration

---

**Happy coding! 🚀** 