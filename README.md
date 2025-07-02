# 3D Artist & Motion Graphics Designer Portfolio

A professional portfolio website template designed specifically for 3D artists, motion graphics designers, and video editors who work with Blender 3D, After Effects, and DaVinci Resolve.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Gallery**: Filterable portfolio with categories for 3D Animation, Motion Graphics, 3D Modeling, and Environment Design
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Built-in contact form for client inquiries
- **Skills Showcase**: Dedicated section to highlight your software expertise
- **Social Media Integration**: Links to your professional profiles

## Quick Start

1. Open `index.html` in your web browser to view the portfolio
2. Customize the content by editing the HTML, CSS, and JavaScript files
3. Replace placeholder images and content with your actual work

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - 3D Artist & Motion Graphics Designer</title>
<h2>Your Name</h2>

<!-- Update hero section -->
<h1 class="hero-title">3D Artist & Motion Graphics Designer</h1>
<p class="hero-subtitle">Creating stunning 3D animations, motion graphics, and immersive environments</p>

<!-- Update contact information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

### 2. Adding Your Projects

Replace the placeholder portfolio items with your actual work:

```html
<div class="portfolio-item" data-category="3d-animation">
    <div class="portfolio-image">
        <!-- Replace with your project image -->
        <img src="path/to/your/project-image.jpg" alt="Your Project Name">
        <div class="portfolio-overlay">
            <div class="portfolio-info">
                <h3>Your Project Name</h3>
                <p>3D Animation</p>
                <div class="portfolio-links">
                    <!-- Add links to your videos/projects -->
                    <a href="https://youtube.com/your-video" class="portfolio-link"><i class="fas fa-play"></i></a>
                    <a href="https://your-project-link.com" class="portfolio-link"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 3. Adding Your Demo Reel

Replace the video placeholder in the hero section:

```html
<!-- Replace the placeholder with an embedded video -->
<div class="hero-video">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            frameborder="0" allowfullscreen></iframe>
</div>
```

### 4. Social Media Links

Update your social media profiles:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://behance.net/yourprofile" class="social-link"><i class="fab fa-behance"></i></a>
    <a href="https://youtube.com/yourchannel" class="social-link"><i class="fab fa-youtube"></i></a>
    <a href="https://instagram.com/yourprofile" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### 5. Color Scheme

To change the color scheme, edit the CSS variables in `styles.css`:

```css
/* Find and replace these colors throughout the CSS */
#667eea /* Primary blue - used for buttons, links, accents */
#764ba2 /* Secondary purple - used in gradients */
#f8f9fa /* Light background color */
```

### 6. Adding More Projects

To add more portfolio items:

1. Copy an existing portfolio item HTML structure
2. Update the `data-category` attribute to match your filter buttons
3. Replace the image, title, and links
4. Add appropriate category if needed by creating new filter buttons

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Hosting Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `your-username.github.io`
3. Upload your files
4. Your portfolio will be available at `https://your-username.github.io`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your portfolio folder to Netlify
3. Get a free subdomain or connect your custom domain

### Option 3: Traditional Web Hosting
Upload your files to any web hosting service that supports HTML/CSS/JavaScript.

## Tips for Video Editors

1. **Optimize Your Videos**: Use compressed formats for web (MP4 with H.264)
2. **Create Thumbnails**: Design attractive thumbnails for your portfolio grid
3. **Demo Reel**: Keep your demo reel under 2 minutes and showcase your best work first
4. **Case Studies**: Consider adding detailed project descriptions
5. **Client Testimonials**: Add a testimonials section if you have client feedback

## Browser Support

This portfolio works on all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Need Help?

If you need assistance customizing your portfolio:

1. Check the comments in the code files
2. Search for specific HTML/CSS tutorials online
3. Consider hiring a web developer for advanced customizations

## License

This template is free to use for personal and commercial projects. No attribution required, but appreciated!

---

**Good luck with your portfolio! Remember to keep it updated with your latest and best work.**