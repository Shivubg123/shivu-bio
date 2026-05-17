# Marriage Biodata Website 💍

A beautiful, responsive React-based marriage biodata website with modern UI/UX.

## Features ✨

- 🎬 **Hero Banner** with magical text animation on image load
- 👤 **Dynamic Age Counter** - Auto-updates based on date of birth
- 📋 **Detailed Information Sections** - Personal, Family, Professional details
- 🖼️ **Photo Gallery** with lightbox preview
- 📱 **Social Media Connect** - LinkedIn, Instagram, WhatsApp integration
- 🗺️ **Location Map** - Embedded Google Maps with address
- ⚙️ **Fully Configurable** - All data in external JSON file
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **GitHub Pages Ready** - Easy deployment

## Project Structure

```
shivu-bio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/
│       ├── groom.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       └── gallery-3.jpg
├── src/
│   ├── config/
│   │   └── biodata.json
│   ├── components/
│   │   ├── Hero/
│   │   ├── InfoSection/
│   │   ├── Gallery/
│   │   ├── Connect/
│   │   ├── Location/
│   │   └── AgeCounter/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add images** to `public/images/` folder:
   - `groom.jpg` - Main hero image
   - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` - Gallery images

3. **Update configuration** in `src/config/biodata.json`:
   - Replace groom details
   - Update photos
   - Add social media links
   - Update address and map coordinates

## Running Locally

```bash
npm start
```

This runs the app in development mode at `http://localhost:3000`

## Customization

### Edit Biodata

All information is stored in `src/config/biodata.json`:

```json
{
  "groom": {
    "name": "Your Name",
    "image": "groom.jpg",
    "dateOfBirth": "YYYY-MM-DD",
    ...
  }
}
```

### Update Colors

Edit the CSS files to change the color scheme. Main color: `#8b4513` (brown)

### Add More Photos

1. Add images to `public/images/`
2. Update `biodata.json` gallery array:
   ```json
   "gallery": [
     { "image": "photo.jpg", "caption": "Photo Caption" }
   ]
   ```

## Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## Deployment to GitHub Pages

### Step 1: Setup GitHub Repository

1. Create a new repository on GitHub: `yourusername/shivu-bio`
2. Do NOT initialize with README

### Step 2: Update Homepage

In `package.json`, update:
```json
"homepage": "https://yourusername.github.io/shivu-bio"
```

### Step 3: Deploy

```bash
git init
git add .
git commit -m "Initial commit: Marriage biodata website"
git branch -M main
git remote add origin https://github.com/yourusername/shivu-bio.git
git push -u origin main
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to your repository Settings
2. Find "Pages" section
3. Select `gh-pages` branch as source
4. Save

Your site will be live at: `https://yourusername.github.io/shivu-bio`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Explained

### Age Counter
Automatically calculates age from date of birth and updates daily. Ensure date format is `YYYY-MM-DD`.

### Magical Text Animation
Hero section text appears with a magical animation when the image loads. Customize animation in `Hero.css`.

### Gallery Lightbox
Click any gallery image to view in fullscreen. Click anywhere to close.

### Social Links
- **LinkedIn**: Direct profile link
- **Instagram**: Profile page
- **WhatsApp**: Creates a WhatsApp message (include country code in phone number)

### Maps
Uses embedded Google Maps. Update latitude and longitude in biodata.json for correct location.

## Customization Tips

1. **Change Colors**: Search for `#8b4513` and `#d4a574` in CSS files
2. **Change Fonts**: Update font-family in `App.css`
3. **Add Sections**: Create new component in `components/` folder
4. **Change Layout**: Modify grid columns in component CSS files

## Available Scripts

```bash
npm start      # Run development server
npm run build  # Create production build
npm run deploy # Deploy to GitHub Pages
```

## Common Issues

**Images not showing:**
- Ensure image files are in `public/images/`
- Check filenames match exactly in biodata.json

**Age not updating:**
- Check date format is `YYYY-MM-DD`
- Verify browser date is correct

**Map not showing:**
- Check latitude/longitude are valid numbers
- Try different coordinates

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Happy Matrimony! 💍**

