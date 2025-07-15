# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Quick Deploy Options

### 1. GitHub Pages (Free)

**Step 1: Create a GitHub Repository**
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., "my-portfolio")
4. Make it public
5. Don't initialize with README (we already have one)

**Step 2: Upload Your Files**
```bash
# In your project directory
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Step 3: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### 2. Netlify (Free)

**Option A: Drag & Drop**
1. Go to [Netlify](https://netlify.com) and sign up
2. Drag your entire project folder to the Netlify dashboard
3. Your site will deploy instantly
4. Click "Site settings" to customize your domain

**Option B: Connect to GitHub**
1. Sign up for Netlify
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your portfolio repository
5. Deploy settings: Build command (leave empty), Publish directory: `/`
6. Click "Deploy site"

### 3. Vercel (Free)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
# In your project directory
vercel
```

**Step 3: Follow Prompts**
- Link to existing project? No
- Project name: your-portfolio
- Directory: ./ (current directory)
- Override settings? No

Your site will be deployed to a Vercel URL.

### 4. Surge.sh (Free)

**Step 1: Install Surge**
```bash
npm install -g surge
```

**Step 2: Deploy**
```bash
# In your project directory
surge
```

**Step 3: Follow Prompts**
- Project: your-portfolio
- Domain: your-portfolio.surge.sh

## Custom Domain Setup

### GitHub Pages with Custom Domain

1. **Buy a Domain** (Namecheap, GoDaddy, etc.)
2. **Add CNAME Record**:
   - Type: CNAME
   - Name: www (or @ for root domain)
   - Value: YOUR_USERNAME.github.io
3. **Add Custom Domain in GitHub**:
   - Go to repository Settings > Pages
   - Enter your domain in "Custom domain" field
   - Save
4. **Add CNAME File**:
   - Create a file named `CNAME` in your project root
   - Add your domain name to the file
   - Commit and push

### Netlify with Custom Domain

1. **Add Custom Domain**:
   - Go to Site settings > Domain management
   - Click "Add custom domain"
   - Enter your domain
2. **Update DNS**:
   - Add A record: `185.199.108.153`
   - Add A record: `185.199.109.153`
   - Add A record: `185.199.110.153`
   - Add A record: `185.199.111.153`

## Traditional Web Hosting

### cPanel Hosting

1. **Upload Files**:
   - Use File Manager or FTP
   - Upload all files to `public_html` folder
   - Ensure `index.html` is in the root

2. **Set Permissions**:
   - Files: 644
   - Directories: 755

### FTP Upload

1. **Get FTP Credentials** from your hosting provider
2. **Use FTP Client** (FileZilla, WinSCP):
   - Host: your-domain.com
   - Username: your-ftp-username
   - Password: your-ftp-password
   - Port: 21
3. **Upload Files** to public_html directory

## Performance Optimization

### Before Deployment

1. **Optimize Images**:
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli
   
   # Optimize images
   imagemin assets/images/* --out-dir=assets/images/optimized
   ```

2. **Minify CSS/JS** (optional):
   ```bash
   # Install minification tools
   npm install -g clean-css-cli uglify-js
   
   # Minify CSS
   cleancss -o assets/css/style.min.css assets/css/style.css
   
   # Minify JS
   uglifyjs assets/js/main.js -o assets/js/main.min.js
   ```

3. **Update HTML** to use minified files:
   ```html
   <link rel="stylesheet" href="assets/css/style.min.css">
   <script src="assets/js/main.min.js"></script>
   ```

### SEO Optimization

1. **Add Meta Tags** to `index.html`:
   ```html
   <meta name="keywords" content="your, keywords, here">
   <meta name="author" content="Your Name">
   <meta property="og:title" content="Your Name - Portfolio">
   <meta property="og:description" content="Your portfolio description">
   <meta property="og:image" content="https://yoursite.com/assets/images/profile.jpg">
   ```

2. **Create sitemap.xml**:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yoursite.com/</loc>
       <lastmod>2024-01-01</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

## Troubleshooting

### Common Issues

1. **Images Not Loading**:
   - Check file paths in `config/personal-info.js`
   - Ensure images are uploaded to correct directory
   - Verify file permissions

2. **Styles Not Applying**:
   - Check if CSS file is linked correctly
   - Clear browser cache
   - Verify file paths

3. **JavaScript Errors**:
   - Open browser console (F12)
   - Check for error messages
   - Verify all files are uploaded

4. **Mobile Issues**:
   - Test on different devices
   - Check viewport meta tag
   - Verify responsive CSS

### Performance Issues

1. **Slow Loading**:
   - Optimize images
   - Use CDN for external resources
   - Enable gzip compression (if available)

2. **Large File Sizes**:
   - Compress images
   - Minify CSS/JS
   - Remove unused files

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **No Sensitive Data**: Don't include API keys or passwords
3. **Regular Updates**: Keep dependencies updated
4. **Backup**: Keep local backup of your files

## Monitoring

1. **Google Analytics**: Add tracking code
2. **Search Console**: Submit sitemap
3. **Performance**: Use tools like PageSpeed Insights
4. **Uptime**: Monitor site availability

---

**Need Help?** Check the main README.md file for more detailed instructions. 