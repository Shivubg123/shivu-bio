# 🆘 Troubleshooting Guide

## Problem-Solving Reference

---

## ❌ npm install Issues

### Problem: "npm: command not found"
**Cause:** Node.js not installed  
**Solution:**
1. Download Node.js from https://nodejs.org
2. Install it
3. Restart PowerShell/Terminal
4. Try `npm install` again

### Problem: "npm WARN deprecated"
**Cause:** Older packages  
**Solution:**
- This is normal, not an error
- Installation will continue
- Ignore the warnings

### Problem: "npm ERR! code ERESOLVE"
**Cause:** Dependency conflict  
**Solution:**
```powershell
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

### Problem: Installation stops/freezes
**Cause:** Network issue  
**Solution:**
```powershell
# Press Ctrl+C to stop
npm cache clean --force
npm install
```

---

## ❌ npm start Issues

### Problem: "Command not found: npm"
**Cause:** npm not installed globally  
**Solution:**
```powershell
npm install -g npm
npm start
```

### Problem: Port 3000 already in use
**Cause:** Another app using port 3000  
**Solution:**
```powershell
# Press Ctrl+C to stop current app, then:
npm start

# OR use different port:
npm start -- --port 3001
```

### Problem: "Failed to compile"
**Cause:** Syntax error in code  
**Solution:**
1. Check error message in terminal
2. Fix the error in the file
3. Save and it auto-refreshes

### Problem: Blank page in browser
**Cause:** App not loading  
**Solution:**
1. Check console for errors (F12 > Console)
2. Check terminal for error messages
3. Try hard refresh: Ctrl+Shift+R
4. Check if index.js exists in src/

---

## ❌ Image Issues

### Problem: Images not showing locally
**Cause:** Wrong path or filename  
**Solution:**
1. Check filenames are EXACT case match
   - groom.jpg (not Groom.jpg or GROOM.JPG)
2. Check files are in `public/images/` folder
3. Try hard refresh: Ctrl+Shift+R
4. Check browser console (F12 > Console)

### Problem: Images not showing after deploy
**Cause:** Not committed to GitHub  
**Solution:**
```powershell
git add public/images/
git commit -m "Add images"
git push
npm run deploy
```

### Problem: Wrong image showing
**Cause:** Browser cache  
**Solution:**
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Try different browser
4. Check filename in biodata.json

### Problem: Image quality bad
**Cause:** Compressed too much  
**Solution:**
1. Use original image
2. Optimal size:
   - Hero: 1600x900px
   - Gallery: 600x400px
3. Use JPEG or PNG format
4. Optimize with https://tinypng.com

---

## ❌ Configuration Issues

### Problem: Age showing 0
**Cause:** Wrong date format  
**Solution:**
1. Check date is format: YYYY-MM-DD
   - Correct: "1996-03-30"
   - Wrong: "30-03-1996" or "03/30/96"
2. Check date is before today
3. Reload browser

### Problem: Age showing negative
**Cause:** Date in future  
**Solution:**
1. Check date is before today's date
2. Update biodata.json with correct DOB

### Problem: Map not showing
**Cause:** Invalid coordinates  
**Solution:**
1. Get coordinates from Google Maps:
   - Go to https://maps.google.com
   - Search your address
   - Right-click > Copy coordinates
2. Format: `"lat": 12.9716, "lng": 77.5946`
3. Verify numbers are correct

### Problem: Wrong location on map
**Cause:** Incorrect coordinates  
**Solution:**
1. Get correct coordinates from Google Maps
2. Update biodata.json
3. Hard refresh: Ctrl+Shift+R

### Problem: Social buttons not working
**Cause:** Invalid URLs  
**Solution:**
1. Check LinkedIn URL is correct
2. Check Instagram URL is correct
3. Check WhatsApp number has country code
   - Format: "+91-9876543210"
4. Test links manually

---

## ❌ Git & Deployment Issues

### Problem: "fatal: not a git repository"
**Cause:** Git not initialized  
**Solution:**
```powershell
cd C:\Users\nithi\IdeaProjects\shivu-bio
git init
git add .
git commit -m "Initial commit"
```

### Problem: "fatal: remote origin already exists"
**Cause:** Remote already configured  
**Solution:**
```powershell
git remote remove origin
git remote add origin https://github.com/yourusername/shivu-bio.git
git push -u origin main
```

### Problem: "npm run deploy" fails
**Cause:** Various issues  
**Solution:**
```powershell
# Reinstall dependencies
rm -r node_modules
npm install

# Try deploying again
npm run deploy
```

### Problem: Site not showing after deploy
**Cause:** GitHub Pages not enabled or delay  
**Solution:**
1. Wait 2-5 minutes (GitHub takes time)
2. Go to GitHub Settings > Pages
3. Check source is set to `gh-pages` branch
4. Check branch exists (see Branches tab)
5. Try hard refresh: Ctrl+Shift+R

### Problem: Old version showing
**Cause:** Browser cache  
**Solution:**
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Try incognito window
4. Try different browser

---

## ❌ Code/Component Issues

### Problem: Hero text not animating
**Cause:** Animation disabled or image slow to load  
**Solution:**
1. Check Hero.css exists and is imported
2. Wait for image to load
3. Check browser supports CSS 3D transforms
4. Check console for errors (F12)

### Problem: Gallery lightbox not working
**Cause:** CSS not loaded  
**Solution:**
1. Check Gallery.css exists
2. Check it's imported in Gallery.jsx
3. Hard refresh: Ctrl+Shift+R

### Problem: Info cards not styling correctly
**Cause:** CSS not applied  
**Solution:**
1. Check InfoSection.css exists
2. Hard refresh: Ctrl+Shift+R
3. Clear browser cache
4. Check no console errors

### Problem: Page layout broken
**Cause:** CSS not loading  
**Solution:**
1. Check App.css exists
2. Check all component CSS files exist
3. Hard refresh: Ctrl+Shift+R
4. Run locally: `npm start`

---

## ❌ General Troubleshooting

### Problem: "Module not found"
**Cause:** Missing file or wrong import  
**Solution:**
1. Check error message for filename
2. Verify file exists in correct folder
3. Check import path is correct
4. Run `npm install` again

### Problem: Too many errors
**Cause:** Incomplete setup  
**Solution:**
1. Delete node_modules: `rm -r node_modules`
2. Delete package-lock.json: `del package-lock.json`
3. Reinstall: `npm install`
4. Run: `npm start`

### Problem: Website very slow
**Cause:** Large images or network  
**Solution:**
1. Optimize images with https://tinypng.com
2. Check internet connection
3. Check browser extensions (disable ad blockers)
4. Try different browser

### Problem: Can't find file/folder
**Cause:** Wrong path  
**Solution:**
```powershell
# List all files
dir

# List src files
dir src

# List components
dir src\components

# List public
dir public

# List images
dir public\images
```

---

## ✅ Verification Checklist

Before reporting a problem, check:

- [ ] Node.js installed (`node -v` shows version)
- [ ] npm installed (`npm -v` shows version)
- [ ] In correct folder (C:\Users\nithi\IdeaProjects\shivu-bio)
- [ ] npm install completed without major errors
- [ ] Images are in `public/images/` folder
- [ ] biodata.json has been updated
- [ ] No typos in biodata.json (valid JSON)
- [ ] Social links are valid URLs
- [ ] Date format is YYYY-MM-DD
- [ ] Coordinates are numbers (lat/lng)
- [ ] Hard refresh done (Ctrl+Shift+R)
- [ ] Browser cache cleared
- [ ] Console checked for errors (F12)

---

## 🔧 Common Commands for Fixing

```powershell
# Full reset
del package-lock.json
rm -r node_modules
npm cache clean --force
npm install
npm start

# Check what's in folder
dir src\components
dir public\images
dir public

# Check JSON syntax
# Use online validator: https://jsonlint.com

# Clear browser cache
# Chrome: Ctrl+Shift+Delete
# Firefox: Ctrl+Shift+Delete
# Safari: Cmd+Option+E

# Hard refresh browser
Ctrl+Shift+R  (Windows)
Cmd+Shift+R   (Mac)

# Stop running app
Ctrl+C

# Check Git status
git status

# See recent commits
git log --oneline
```

---

## 📞 Still Having Issues?

### Check These Files First
1. **EXECUTION_STEPS.md** - Step-by-step guide
2. **SETUP_GUIDE.md** - Setup help section
3. **README.md** - Full documentation

### Get Help Online
- React Issues: https://react.dev/community
- GitHub Issues: https://docs.github.com
- Stack Overflow: https://stackoverflow.com
- Google: Search your exact error message

### Common Search Patterns
- "[error message]" npm react
- "[problem]" github pages
- JavaScript "[issue]"

---

## 💡 Pro Tips

1. **Always hard refresh** (Ctrl+Shift+R) when things look wrong
2. **Check console** (F12 > Console tab) for error messages
3. **Validate JSON** at https://jsonlint.com before saving
4. **Clear cache** when styles don't update
5. **Check spelling** in filenames (case-sensitive)
6. **Wait for compilation** (terminal says "Compiled successfully")
7. **Read error messages carefully** - they usually tell you the problem

---

## 🎯 Most Common Issues (80% of problems)

### 1. Images not showing
```
Solution: Check filenames match exactly and files are in public/images/
```

### 2. npm commands not found
```
Solution: Node.js not installed or not restarted terminal
```

### 3. Site doesn't update after changes
```
Solution: Hard refresh (Ctrl+Shift+R) or clear cache
```

### 4. Age showing 0
```
Solution: Check date format is YYYY-MM-DD
```

### 5. Site not live after npm run deploy
```
Solution: Enable GitHub Pages in Settings > Pages
```

### 6. Blank page or errors
```
Solution: Check console (F12) and terminal for error messages
```

---

**Remember: Most issues are solved by:**
1. Restarting terminal/browser
2. Hard refresh (Ctrl+Shift+R)
3. Clearing cache
4. Checking file/folder names and paths

**Good luck! 🚀**

