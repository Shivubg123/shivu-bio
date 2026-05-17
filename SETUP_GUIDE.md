# Quick Setup Guide 🚀

## What I've Created For You

I've set up the complete React project structure with:

✅ All component files (Hero, Gallery, Connect, Location, InfoSection, AgeCounter)  
✅ All CSS styling files  
✅ Configuration system (biodata.json)  
✅ Main App.jsx and index files  
✅ package.json with all dependencies  
✅ README with full documentation  

## Next Steps to Complete Setup

### 1️⃣ Install Dependencies

Open terminal in `C:\Users\nithi\IdeaProjects\shivu-bio` and run:

```powershell
npm install
```

This will download and install all required packages (React, ReactDOM, React Icons, etc.)

### 2️⃣ Add Images

Create the `public/images/` folder (if not exists) and add 4 images:

- **groom.jpg** - Main hero banner image (recommended: 1600x900px)
- **gallery-1.jpg** - Gallery photo 1 (recommended: 600x400px)
- **gallery-2.jpg** - Gallery photo 2 (recommended: 600x400px)
- **gallery-3.jpg** - Gallery photo 3 (recommended: 600x400px)

### 3️⃣ Update Configuration

Edit `src/config/biodata.json` and update with real data:

- Change groom name, date of birth, height, etc.
- Update father/mother names
- Add real occupation and company details
- Update address with actual coordinates from Google Maps
- Update social media links
- Add hobbies and interests

### 4️⃣ Test Locally

Run the development server:

```powershell
npm start
```

This will open http://localhost:3000 in your browser. You'll see the website running!

### 5️⃣ Deploy to GitHub Pages

When ready to publish:

```powershell
# First, initialize Git
git init
git add .
git commit -m "Initial commit: Marriage biodata website"

# Create repository on GitHub at github.com/yourusername/shivu-bio

# Update homepage in package.json (change yourusername)
# Then push to GitHub
git remote add origin https://github.com/yourusername/shivu-bio.git
git branch -M main
git push -u origin main

# Finally, deploy
npm run deploy
```

## File Structure Created

```
shivu-bio/
├── public/
│   ├── index.html          ← Main HTML file
│   ├── manifest.json
│   └── images/             ← Add your images here
├── src/
│   ├── config/
│   │   └── biodata.json    ← All data goes here
│   ├── components/
│   │   ├── Hero/
│   │   ├── InfoSection/
│   │   ├── Gallery/
│   │   ├── Connect/
│   │   ├── Location/
│   │   └── AgeCounter/
│   ├── App.jsx             ← Main app component
│   ├── App.css             ← Global styles
│   ├── index.js
│   └── index.css
├── package.json            ← Dependencies & scripts
├── README.md               ← Full documentation
└── .gitignore
```

## Key Features Ready to Use

### 🎬 Hero Banner
- Animated text appears when image loads
- Smooth 3D rotation effect
- Golden text with shadow

### 👤 Age Counter
- Automatically calculates from date of birth
- Updates daily at midnight
- Format: YYYY-MM-DD

### 📋 Info Sections
- Personal Details (Height, Complexion, Caste, etc.)
- Family Details (Parents, Siblings, Background)
- Professional Info (Job, Company, Education)
- Address with all details

### 🖼️ Gallery
- 3 photo gallery with hover effects
- Click to open lightbox preview
- Click anywhere in lightbox to close

### 📱 Connect Section
- LinkedIn button with link
- Instagram button with link
- WhatsApp button (creates message)

### 🗺️ Location
- Embedded Google Maps
- Shows exact address
- Dynamic based on coordinates

## Configuration Tips

### Date of Birth
- Format must be: `YYYY-MM-DD`
- Example: `1995-05-17`
- Age updates automatically

### Map Coordinates
- Get from Google Maps
- Right-click location → Copy coordinates
- Format: latitude: 12.9716, longitude: 77.5946

### WhatsApp Number
- Include country code
- Format: `+91-9876543210`
- Button creates WhatsApp link

### Images
- Use JPEG or PNG
- Size recommendations:
  - Hero: 1600x900px (minimum 800x600px)
  - Gallery: 600x400px

## Customization Options

### Colors
Main color: `#8b4513` (brown)
Accent color: `#d4a574` (tan)

Search and replace in CSS files to change colors

### Fonts
Current: Segoe UI, Georgia for hero text

Update in App.css to use different fonts

### Sections Order
In `App.jsx`, reorder components to change section order

## Commands Reference

```powershell
npm start          # Run locally (http://localhost:3000)
npm run build      # Create production build
npm run deploy     # Deploy to GitHub Pages
npm test           # Run tests
```

## Troubleshooting

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Files must be in `public/images/`
- Use .jpg or .png format

**Age showing 0?**
- Check date format: `YYYY-MM-DD`
- Verify current date is after birth date

**Map not showing?**
- Check coordinates are valid numbers
- Ensure address and city are correctly spelled

**Styles not loading?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next: Make It Your Own

1. Update `biodata.json` with groom details
2. Add photos to `public/images/`
3. Test locally with `npm start`
4. Deploy with `npm run deploy`

## Support Resources

- React Docs: https://react.dev
- React Icons: https://react-icons.github.io/react-icons
- GitHub Pages: https://pages.github.com

---

**Everything is ready! Just add your data and images, then go live! 🎉**

