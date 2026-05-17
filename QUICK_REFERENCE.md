# 🎯 QUICK REFERENCE CARD

## Start Here 👇

### 3 Commands to Get Started
```powershell
cd C:\Users\nithi\IdeaProjects\shivu-bio
npm install
npm start
```

---

## File Locations

| What | Where |
|------|-------|
| Add Images | `C:\Users\nithi\IdeaProjects\shivu-bio\public\images\` |
| Update Data | `C:\Users\nithi\IdeaProjects\shivu-bio\src\config\biodata.json` |
| Styles | `C:\Users\nithi\IdeaProjects\shivu-bio\src\App.css` |
| Components | `C:\Users\nithi\IdeaProjects\shivu-bio\src\components\` |
| Main App | `C:\Users\nithi\IdeaProjects\shivu-bio\src\App.jsx` |

---

## Image Requirements

| Image | Size | Location |
|-------|------|----------|
| groom.jpg | 1600x900px+ | public/images/ |
| gallery-1.jpg | 600x400px | public/images/ |
| gallery-2.jpg | 600x400px | public/images/ |
| gallery-3.jpg | 600x400px | public/images/ |

---

## biodata.json - Must Update These

```json
"fatherName": "CHANGE THIS",
"motherName": "CHANGE THIS",
"address": {
  "street": "CHANGE THIS",
  "city": "CHANGE THIS",
  "state": "CHANGE THIS",
  "zipCode": "CHANGE THIS",
  "lat": CHANGE_TO_NUMBER,
  "lng": CHANGE_TO_NUMBER
},
"connections": {
  "linkedin": "YOUR_LINK",
  "instagram": "YOUR_LINK",
  "whatsapp": "+91-YOUR_NUMBER"
}
```

---

## npm Commands

```powershell
npm install          # Install dependencies
npm start           # Run locally (http://localhost:3000)
npm run build       # Create production build
npm run deploy      # Deploy to GitHub Pages
git init            # Initialize Git
git add .           # Stage all files
git commit -m ""    # Create commit
git push            # Push to GitHub
```

---

## Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Hard Refresh | Ctrl+Shift+R | Cmd+Shift+R |
| Open DevTools | F12 | Cmd+Option+I |
| Clear Cache | Ctrl+Shift+Delete | Cmd+Option+E |
| Stop App | Ctrl+C | Ctrl+C |

---

## Troubleshooting Quick Fixes

| Problem | Fix |
|---------|-----|
| npm not found | Install Node.js |
| Port 3000 in use | Close other app or use port 3001 |
| Images not showing | Check filename & public/images/ folder |
| Age showing 0 | Check date format: YYYY-MM-DD |
| Page not updating | Hard refresh: Ctrl+Shift+R |
| Site not live | Wait 2-5 min, enable GitHub Pages |
| Blank page | Press F12, check console for errors |

---

## Deployment Steps (Quick)

```powershell
# Step 1: Install
npm install

# Step 2: Add images to public/images/

# Step 3: Update src/config/biodata.json

# Step 4: Test
npm start

# Step 5: Deploy
npm run deploy

# Step 6: Enable GitHub Pages in Settings
```

---

## Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| QUICK_START.md | Overview | 3 min |
| EXECUTION_STEPS.md | **Read This First** | 15 min |
| README.md | Full docs | 20 min |
| TROUBLESHOOTING.md | Help | Reference |

---

## Key URLs

- Project folder: `C:\Users\nithi\IdeaProjects\shivu-bio`
- Local site: `http://localhost:3000`
- Live site: `https://yourusername.github.io/shivu-bio`
- Google Maps: `https://maps.google.com`
- GitHub: `https://github.com`

---

## Data Already Set

✅ Name: SHIVU B G  
✅ Date of Birth: 1996-03-30 (Age: 30)  
✅ Height: 5'6"  
✅ Complexion: Fair  

❌ Everything else: Update it

---

## Success Checklist

Before deploying:
- [ ] npm install done
- [ ] 4 images added
- [ ] biodata.json updated
- [ ] npm start works
- [ ] All sections visible
- [ ] Age shows correctly
- [ ] Map shows correct location
- [ ] Social buttons work
- [ ] Mobile looks good

---

## Time Estimates

| Task | Time |
|------|------|
| npm install | 5 min |
| Add images | 5 min |
| Update config | 10 min |
| Test locally | 5 min |
| Deploy | 10 min |
| **Total** | **35 min** |

---

## Important Notes

⚠️ Image filenames are case-sensitive  
⚠️ Date format must be YYYY-MM-DD  
⚠️ biodata.json must be valid JSON  
⚠️ GitHub repo must be PUBLIC  
⚠️ Images must be in public/images/  

---

## Share Your Website

Once live:
```
Send this link to everyone:
https://yourusername.github.io/shivu-bio
```

Replace `yourusername` with your GitHub username.

---

## Emergency Reset

If everything breaks:
```powershell
cd C:\Users\nithi\IdeaProjects\shivu-bio
rm -r node_modules
del package-lock.json
npm cache clean --force
npm install
npm start
```

---

## JSON Date Format Helper

| Format | Example | ✅/❌ |
|--------|---------|-------|
| YYYY-MM-DD | 1996-03-30 | ✅ Correct |
| DD-MM-YYYY | 30-03-1996 | ❌ Wrong |
| MM/DD/YYYY | 03/30/1996 | ❌ Wrong |
| DD/MM/YYYY | 30/03/1996 | ❌ Wrong |

---

## Coordinates Helper

Get from Google Maps:
1. Go to https://maps.google.com
2. Search your address
3. Right-click location
4. Select "Copy coordinates"
5. Paste in biodata.json as:
```json
"lat": 12.9716,
"lng": 77.5946
```

---

## GitHub Pages URL Format

```
https://[USERNAME].github.io/shivu-bio
```

Examples:
- https://nithibgc.github.io/shivu-bio
- https://john.github.io/shivu-bio
- https://janedoe.github.io/shivu-bio

---

## Social Media Link Formats

```json
"linkedin": "https://linkedin.com/in/username",
"instagram": "https://instagram.com/username",
"whatsapp": "+91-9876543210"
```

For WhatsApp:
- Include country code: +91
- Include area code if applicable
- Format: +CC-XXXXXXXXXX

---

## When Things Go Wrong

1. **Read the error message** - It tells you what's wrong
2. **Hard refresh** (Ctrl+Shift+R) - Fixes 50% of issues
3. **Check console** (F12 > Console) - Shows actual errors
4. **Google the error** - Usually has solutions
5. **Check TROUBLESHOOTING.md** - Problem guide here

---

## Final Words

✅ Everything is set up  
✅ No coding needed  
✅ Just add data and images  
✅ Deploy with one command  

**You got this! 💪**

---

*Keep this card handy while implementing!*

