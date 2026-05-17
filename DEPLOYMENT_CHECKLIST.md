# Deployment Checklist ✅

Complete this checklist before deploying to GitHub Pages.

## Before You Start

- [ ] You have Node.js installed (v14+)
- [ ] You have Git installed
- [ ] You have a GitHub account
- [ ] You're in the project folder: `C:\Users\nithi\IdeaProjects\shivu-bio`

## Local Setup

- [ ] Ran `npm install` successfully
- [ ] All dependencies installed (check node_modules exists)
- [ ] `npm start` runs without errors
- [ ] Website displays correctly at http://localhost:3000

## Content Preparation

- [ ] Updated groom name in `biodata.json`
- [ ] Set correct date of birth (format: YYYY-MM-DD)
- [ ] Added all personal details (height, complexion, caste, etc.)
- [ ] Updated father and mother names
- [ ] Added occupation and company details
- [ ] Updated education and college information
- [ ] Set correct address with proper coordinates
- [ ] Added correct social media links
- [ ] Updated hobbies and family details

## Images

- [ ] Added 4 images to `public/images/`:
  - [ ] groom.jpg (hero banner image)
  - [ ] gallery-1.jpg (gallery photo 1)
  - [ ] gallery-2.jpg (gallery photo 2)
  - [ ] gallery-3.jpg (gallery photo 3)
- [ ] All images are in correct format (.jpg or .png)
- [ ] Filenames match exactly what's in biodata.json
- [ ] Images display correctly when running locally

## Configuration

- [ ] All biodata.json fields are populated
- [ ] Social media links are correct and accessible
- [ ] Map coordinates are valid (Google Maps)
- [ ] WhatsApp number has country code
- [ ] Address is complete and accurate

## Testing

- [ ] Tested locally: `npm start`
- [ ] Hero banner displays with animation ✨
- [ ] Age counter shows correct age
- [ ] Info sections display all details properly
- [ ] Gallery images load and lightbox works
- [ ] Social media buttons are clickable
- [ ] Map displays the correct location
- [ ] Website is responsive on mobile
- [ ] No console errors in browser DevTools

## Build Testing

- [ ] Run `npm run build` successfully
- [ ] Build folder created without errors
- [ ] No build warnings (or acceptable warnings)

## GitHub Setup

- [ ] Created GitHub account
- [ ] Created new repository: `yourusername/shivu-bio`
- [ ] Repository is public (not private)
- [ ] Did NOT initialize with README
- [ ] Copied repository URL

## Git Configuration

- [ ] Updated `package.json` homepage:
  ```json
  "homepage": "https://yourusername.github.io/shivu-bio"
  ```
  (Replace yourusername with your actual GitHub username)

## Deployment

In terminal, run these commands in order:

```powershell
# Initialize Git
git init
git add .
git commit -m "Initial commit: Marriage biodata website"

# Configure remote
git remote add origin https://github.com/yourusername/shivu-bio.git
git branch -M main

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

- [ ] `git init` completed
- [ ] `git add .` added all files
- [ ] `git commit` created commit successfully
- [ ] `git remote add origin` set repository URL
- [ ] `git push -u origin main` pushed code to GitHub
- [ ] `npm run deploy` deployed successfully
- [ ] No errors during deployment

## GitHub Pages Configuration

In repository settings:

1. [ ] Go to Settings → Pages
2. [ ] Branch: Select `gh-pages`
3. [ ] Folder: Select `/ (root)`
4. [ ] Save and wait for deployment

## Post-Deployment

- [ ] Website is live at: `https://yourusername.github.io/shivu-bio`
- [ ] Website loads correctly in browser
- [ ] All images display properly
- [ ] Hero animation works
- [ ] Age counter shows correct age
- [ ] Gallery images load
- [ ] Social media buttons work
- [ ] Map displays correctly
- [ ] Website is mobile responsive
- [ ] No broken links

## Troubleshooting During Deployment

### If Git fails:
```powershell
# Check git status
git status

# If repository already exists
rm -r .git
git init
# Then follow steps above
```

### If npm run deploy fails:
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules
npm install

# Try deploying again
npm run deploy
```

### If site doesn't appear:
- Wait 2-5 minutes after deployment
- Check repository Settings > Pages
- Ensure gh-pages branch exists
- Check gh-pages branch has built files

## Future Updates

To make updates to the website:

1. Edit files locally
2. Test with `npm start`
3. Commit changes:
   ```powershell
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. Deploy:
   ```powershell
   npm run deploy
   ```

## Common Issues & Solutions

**Images not showing on live site:**
- Images are in public/images/ locally but not on GitHub
- Solution: Ensure images are committed to GitHub before deploying

**Old version showing on live site:**
- Browser cache issue
- Solution: Clear browser cache or use Ctrl+Shift+R

**404 errors on live site:**
- Likely GitHub Pages not properly configured
- Solution: Check Settings > Pages, wait 5 minutes, try again

**Site says "Not Found":**
- Repository might be private
- Solution: Go to Settings > make repository public

## Success! 🎉

Your marriage biodata website is now live!

Share the link: `https://yourusername.github.io/shivu-bio`

Remember:
- Keep your GitHub repository public
- GitHub Pages is free hosting
- Updates are deployed with `npm run deploy`
- All changes are version controlled with Git

---

**Your website is ready to share with everyone! 💍**

