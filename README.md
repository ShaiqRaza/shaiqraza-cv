# Professional CV Website

A modern, responsive CV/Portfolio website built with vanilla HTML and CSS, featuring a clean professional design with dark/light mode support, animations, and a contact form.

---

## 🎯 Project Information

**Project Name:** Professional CV Website  
**Author Name:** [Your Name]  
**Roll No:** [Your Roll Number]  
**Date Created:** February 2, 2026

---

## 📋 Features

### Core Sections
- **Header** - Personalized name, professional title, and theme toggle button
- **Navigation** - Smooth navigation between sections
- **Hero Section** - Profile photo and introduction with CV download button
- **About Me** - Professional summary and background
- **Education** - Educational qualifications and achievements
- **Skills** - Technical skills organized by categories
- **Experience/Projects** - Detailed project portfolio with tech stacks
- **Contact Information** - Email, phone, LinkedIn, and GitHub links
- **Footer** - Copyright and quick navigation links

### Design Features
✅ **Responsive Design** - Fully responsive on mobile, tablet, and desktop devices  
✅ **Flexbox Layout** - Modern CSS Flexbox for flexible layouts  
✅ **Professional Styling** - Clean, modern color scheme with consistent typography  
✅ **Smooth Animations** - Fade-in effects, hover animations, and transitions  
✅ **Clean Code** - Well-organized, maintainable HTML and CSS  

### Bonus Features
✨ **Dark/Light Mode Toggle** - Persistent theme switching with localStorage  
✨ **Downloadable CV** - Print to PDF functionality for CV download  
✨ **Animations & Effects** - Smooth fade-ins, hover effects, and transitions  
✨ **Contact Form** - Functional contact form with validation  
✨ **Smooth Scrolling** - Smooth scroll navigation between sections  
✨ **Intersection Observer** - Progressive loading animations for cards  

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with Flexbox, Grid, and CSS Variables
- **Vanilla JavaScript** - ES6+ for interactivity without frameworks
  - Dark/Light mode toggle
  - Form validation
  - Smooth scrolling
  - Intersection Observer API

---

## 📁 File Structure

```
CV/
├── index.html           # Main HTML file with all sections
├── css/
│   └── style.css        # Complete styling with responsive design
├── script.js            # Vanilla JavaScript for interactivity
├── images/
│   └── profile.jpg      # Profile photo (optional)
├── cv.pdf               # CV PDF file (optional, for download)
└── README.md            # Project documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization

### Installation & Setup

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourprofile/cv-website.git
   cd cv-website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server package)
     npx http-server
     ```

3. **Customize Content**
   - Edit `index.html` to update your information:
     - Name and title in header
     - About me content
     - Education details
     - Skills and tech stack
     - Project descriptions
     - Contact information
   
   - Customize colors in `css/style.css`:
     - Update CSS variables in `:root` section
     - Modify colors, fonts, and spacing as needed

4. **Add Profile Photo**
   - Place your profile photo in `images/` folder
   - Name it `profile.jpg` or update the reference in HTML

5. **Add CV PDF** (Optional)
   - Create a PDF of your CV
   - Name it `cv.pdf` and place it in the root directory
   - The download button will link to this file

---

## 💻 Customization Guide

### Update Personal Information

Edit `index.html` to change:

```html
<!-- Header -->
<h1 class="name">Your Name</h1>
<p class="title">Your Professional Title</p>

<!-- About Section -->
<p class="section-content">
    Your about me text here...
</p>

<!-- Contact Information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### Change Color Scheme

Edit `css/style.css` CSS variables:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #10b981;    /* Green accent */
    --accent-color: #f59e0b;       /* Orange accent */
    --text-color: #1f2937;         /* Dark text */
    --bg-color: #ffffff;           /* White background */
}
```

### Modify Fonts

Update font families in `style.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

---

## 🌙 Dark/Light Mode

- **Automatic Detection**: Respects system color scheme preference
- **Manual Toggle**: Click the theme button in the header
- **Persistent**: Your preference is saved in browser localStorage
- **CSS Variables**: All colors use CSS variables for easy switching

---

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## 📧 Contact Form

The contact form includes:
- **Validation**: Checks for required fields and valid email format
- **User Feedback**: Success/error notifications
- **Professional UX**: Loading state on form submission
- **Note**: This is a frontend-only form. For production, connect it to a backend service like:
  - Email service (SendGrid, Mailgun)
  - Form backend (Formspree, Basin)
  - Custom Node.js/Python backend

---

## 🎨 Design Features

### Animations
- **Fade-in effects** on page load
- **Hover effects** on all interactive elements
- **Smooth transitions** for theme switching
- **Card lift effects** on mouse hover
- **Progress animations** on form submission

### Performance
- Optimized CSS with minimal overhead
- Lightweight vanilla JavaScript (no dependencies)
- Efficient Flexbox layouts
- CSS Grid for responsive sections

---

## 🔍 SEO & Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast colors for readability
- ARIA labels where applicable

---

## 📄 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔗 Live Links

- **Live Demo**: [Add your deployed link here]
- **GitHub Repository**: [Add your repo link here]
- **Portfolio**: [Add your portfolio link here]

---

## 📝 Sections Breakdown

### Header
- Sticky header with gradient background
- Theme toggle button with smooth animations
- Professional typography

### Navigation
- Sticky navigation bar
- Active link highlighting
- Smooth scroll to sections
- Mobile-friendly horizontal scroll

### Hero Section
- Profile photo with hover effects
- Introduction text
- CV download button
- Responsive layout (side-by-side on desktop, stacked on mobile)

### Education
- Card-based layout
- Institution details
- Duration and achievements
- Hover effects for interactivity

### Skills
- Grid layout with responsive columns
- Categorized skills (Frontend, Backend, Tools)
- Interactive skill tags with hover effects

### Experience/Projects
- Project cards with tech stack
- Duration tags
- Project descriptions
- Responsive card layout

### Contact
- Contact information cards
- Functional contact form
- Form validation and feedback
- Success/error notifications

### Footer
- Copyright information
- Quick navigation links
- Responsive footer layout

---

## 🚀 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push files to the repository
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `username.github.io/repo-name`

### Netlify
1. Connect your GitHub repository
2. Set build command (if needed)
3. Deploy
4. Get a live URL instantly

### Vercel
1. Import project from GitHub
2. Click Deploy
3. Site is live with automatic updates

### Traditional Hosting
- Upload files via FTP to any web host
- Works with any server supporting static files

---

## 📱 Print to PDF

- **Method 1**: Use browser's Print function (Ctrl+P or Cmd+P)
- **Method 2**: Click "Download CV" button if cv.pdf is added
- **Styles**: Print-specific CSS hides unnecessary elements

---

## 🐛 Troubleshooting

### Dark mode not saving
- Check if localStorage is enabled in browser settings

### Images not showing
- Verify image path in HTML matches actual file location
- Use absolute paths if relative paths don't work

### Form not working
- This is a frontend-only form for demonstration
- Connect to backend service for production use

### Responsive design issues
- Clear browser cache
- Check viewport meta tag in HTML
- Test in different browsers

---

## 📚 Resources

- [MDN Web Docs - CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript.info - Modern JavaScript](https://javascript.info/)
- [Web.dev - Performance & Best Practices](https://web.dev/)

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own CV website.

---

## 🤝 Contributing

Improvements and suggestions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share feedback

---

## ✨ Future Enhancements

Possible improvements:
- [ ] Blog section for articles
- [ ] Project filtering by category
- [ ] Multi-language support
- [ ] Integration with external APIs
- [ ] Blog comments system
- [ ] Search functionality
- [ ] Analytics integration

---

## 📞 Contact & Support

For questions or support:
- Email: [your.email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Last Updated:** February 2, 2026

**Made with ❤️ using HTML, CSS, and Vanilla JavaScript**
