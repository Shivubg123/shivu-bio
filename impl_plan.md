# Marriage Biodata React App - Implementation Plan

## 📋 Overview

A professional React-based marriage biodata website with:
- Hero banner with animated text overlay
- Scrollable groom information with age timer
- Photo gallery section
- Social media connect options (LinkedIn, Instagram, WhatsApp)
- Embedded Google Maps for location
- Fully externalized configuration
- GitHub Pages deployment

---

## Phase 1: Project Setup

### Commands to run:
\`\`\`bash
npx create-react-app shivu-bio
cd shivu-bio
npm install react-router-dom react-icons axios
npm install gh-pages --save-dev
\`\`\`

### Update `package.json`:
\`\`\`json
{
  "homepage": "https://yourusername.github.io/shivu-bio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
\`\`\`

---

## Phase 2: Project Structure

\`\`\`
shivu-bio/
├── public/
│   ├── index.html
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
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── InfoSection/
│   │   │   ├── InfoSection.jsx
│   │   │   └── InfoSection.css
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.css
│   │   ├── Connect/
│   │   │   ├── Connect.jsx
│   │   │   └── Connect.css
│   │   ├── Location/
│   │   │   ├── Location.jsx
│   │   │   └── Location.css
│   │   └── AgeCounter/
│   │       └── AgeCounter.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
└── package.json
\`\`\`

---

## Phase 3: External Configuration

### Create `src/config/biodata.json`:

\`\`\`json
{
  "groom": {
    "name": "John Doe",
    "image": "groom.jpg",
    "dateOfBirth": "1995-05-17",
    "height": "5'10\\"",
    "complexion": "Fair",
    "cast": "Hindu - Brahmin",
    "birthStar": "Rohini",
    "rasi": "Vrishabha",
    "fatherName": "Mr. ABC Doe",
    "motherName": "Mrs. XYZ Doe",
    "familyBackground": "Well-established business family",
    "occupation": "Software Engineer",
    "company": "Tech Corp",
    "salary": "Confidential",
    "education": "B.Tech in Computer Science",
    "college": "IIT Delhi",
    "address": {
      "street": "123 Main Street",
      "city": "Bangalore",
      "state": "Karnataka",
      "zipCode": "560001",
      "country": "India",
      "lat": 12.9716,
      "lng": 77.5946
    },
    "about": "Passionate engineer with love for innovation and social work",
    "hobbies": ["Photography", "Cricket", "Coding", "Travel"],
    "siblings": 1,
    "familyDetails": "Nuclear family, very supportive"
  },
  "gallery": [
    { "image": "gallery-1.jpg", "caption": "Professional Photo" },
    { "image": "gallery-2.jpg", "caption": "Casual Moment" },
    { "image": "gallery-3.jpg", "caption": "Travel Photo" }
  ],
  "connections": {
    "linkedin": "https://linkedin.com/in/johndoe",
    "instagram": "https://instagram.com/johndoe",
    "whatsapp": "+91-9876543210"
  }
}
\`\`\`

---

## Phase 4: Component Implementations

### 1. AgeCounter Component

\`\`\`jsx
// src/components/AgeCounter/AgeCounter.jsx
import { useState, useEffect } from 'react';

export const AgeCounter = ({ dateOfBirth }) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }

      setAge(calculatedAge);
    };

    calculateAge();
    // Update on next birthday
    const timer = setInterval(calculateAge, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, [dateOfBirth]);

  return (
    <div className="age-display">
      <h3>Age: <span className="age-number">{age}</span> years</h3>
    </div>
  );
};
\`\`\`

### 2. Hero Component

\`\`\`jsx
// src/components/Hero/Hero.jsx
import { useState, useEffect } from 'react';
import './Hero.css';

export const Hero = ({ image, name }) => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      <img 
        src={\`/images/\${image}\`}
        alt="Groom"
        className="hero-image"
        onLoad={() => setTextVisible(true)}
      />
      <div className={\`hero-text \${textVisible ? 'appear' : ''}\`}>
        <h1 className="magical-text">{name}</h1>
        <p className="subtitle">Matrimony Profile</p>
      </div>
    </div>
  );
};
\`\`\`

### 3. Hero.css with Animations

\`\`\`css
.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-text {
  position: relative;
  z-index: 10;
  text-align: center;
  opacity: 0;
}

.hero-text.appear {
  animation: magicalAppear 1.5s ease-out forwards;
}

@keyframes magicalAppear {
  0% {
    opacity: 0;
    transform: scale(0.5) rotateY(90deg);
    filter: blur(10px);
  }
  50% {
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
  }
}

.magical-text {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  font-family: 'Georgia', serif;
  letter-spacing: 3px;
}

.subtitle {
  font-size: 1.5rem;
  color: #ffd700;
  margin-top: 10px;
}
\`\`\`

### 4. InfoSection Component

\`\`\`jsx
// src/components/InfoSection/InfoSection.jsx
import { AgeCounter } from '../AgeCounter/AgeCounter';
import './InfoSection.css';

export const InfoSection = ({ groom }) => {
  const sections = [
    { title: 'Personal Details', data: [
        { label: 'Height', value: groom.height },
        { label: 'Complexion', value: groom.complexion },
        { label: 'Caste', value: groom.cast },
        { label: 'Birth Star', value: groom.birthStar },
        { label: 'Rasi', value: groom.rasi }
      ]
    },
    { title: 'Family Details', data: [
        { label: 'Father', value: groom.fatherName },
        { label: 'Mother', value: groom.motherName },
        { label: 'Siblings', value: groom.siblings },
        { label: 'Family Background', value: groom.familyBackground }
      ]
    },
    { title: 'Professional', data: [
        { label: 'Occupation', value: groom.occupation },
        { label: 'Company', value: groom.company },
        { label: 'Education', value: groom.education },
        { label: 'College', value: groom.college }
      ]
    },
    { title: 'Address', data: [
        { label: 'Street', value: groom.address.street },
        { label: 'City', value: groom.address.city },
        { label: 'State', value: groom.address.state },
        { label: 'Country', value: groom.address.country }
      ]
    }
  ];

  return (
    <section className="info-section">
      <div className="container">
        <h2>About {groom.name}</h2>
        
        <AgeCounter dateOfBirth={groom.dateOfBirth} />
        
        <p className="bio">{groom.about}</p>
        
        <div className="hobbies">
          <h4>Hobbies & Interests:</h4>
          {groom.hobbies.map((hobby, idx) => (
            <span key={idx} className="hobby-tag">{hobby}</span>
          ))}
        </div>

        <div className="details-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="detail-card">
              <h3>{section.title}</h3>
              <ul>
                {section.data.map((item, i) => (
                  <li key={i}>
                    <span className="label">{item.label}:</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
\`\`\`

### 5. Gallery Component

\`\`\`jsx
// src/components/Gallery/Gallery.jsx
import { useState } from 'react';
import './Gallery.css';

export const Gallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {gallery.map((item, idx) => (
            <div 
              key={idx} 
              className="gallery-item"
              onClick={() => setSelectedImage(item)}
            >
              <img src={\`/images/\${item.image}\`} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <img src={\`/images/\${selectedImage.image}\`} alt={selectedImage.caption} />
          </div>
        )}
      </div>
    </section>
  );
};
\`\`\`

### 6. Connect Component

\`\`\`jsx
// src/components/Connect/Connect.jsx
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Connect.css';

export const Connect = ({ connections, groomName }) => {
  return (
    <section className="connect-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="tagline">Connect with us through various channels</p>
        
        <div className="connect-buttons">
          <a href={connections.linkedin} target="_blank" rel="noopener noreferrer" className="btn linkedin-btn">
            <FaLinkedin /> LinkedIn
          </a>
          
          <a href={connections.instagram} target="_blank" rel="noopener noreferrer" className="btn instagram-btn">
            <FaInstagram /> Instagram
          </a>
          
          <a href={\`https://wa.me/\${connections.whatsapp.replace(/[^0-9]/g, '')}\`} target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
\`\`\`

### 7. Location Component

\`\`\`jsx
// src/components/Location/Location.jsx
import './Location.css';

export const Location = ({ address, name }) => {
  const mapsUrl = \`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9570510634747!2d\${address.lng}!3d\${address.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s\${encodeURIComponent(address.street + ' ' + address.city)}!5e0!3m2!1sen!2sin!4v\`

  return (
    <section className="location-section">
      <div className="container">
        <h2>Location</h2>
        <p className="location-address">
          {address.street}, {address.city}, {address.state} - {address.zipCode}
        </p>
        
        <div className="map-container">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsUrl}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
\`\`\`

### 8. Main App Component

\`\`\`jsx
// src/App.jsx
import { useState, useEffect } from 'react';
import biodata from './config/biodata.json';
import { Hero } from './components/Hero/Hero';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Gallery } from './components/Gallery/Gallery';
import { Connect } from './components/Connect/Connect';
import { Location } from './components/Location/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero image={biodata.groom.image} name={biodata.groom.name} />
      <InfoSection groom={biodata.groom} />
      <Gallery gallery={biodata.gallery} />
      <Connect connections={biodata.connections} groomName={biodata.groom.name} />
      <Location address={biodata.groom.address} name={biodata.groom.name} />
    </div>
  );
}

export default App;
\`\`\`

---

## Phase 5: Styling (App.css)

\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 80px 0;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #8b4513;
}

/* Info Section Styling */
.info-section {
  background: white;
  padding: 60px 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.detail-card {
  background: #fff5e6;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
}

.detail-card h3 {
  color: #8b4513;
  margin-bottom: 15px;
  border-bottom: 2px solid #d4a574;
  padding-bottom: 10px;
}

.detail-card ul {
  list-style: none;
}

.detail-card li {
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.label {
  font-weight: 600;
  color: #8b4513;
}

.value {
  color: #555;
  margin-left: 8px;
}

/* Gallery Styling */
.gallery-section {
  background: #fff5e6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Connect Section */
.connect-section {
  background: linear-gradient(135deg, #8b4513 0%, #d4a574 100%);
  color: white;
  text-align: center;
}

.connect-section h2 {
  color: white;
}

.tagline {
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.connect-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: white;
  color: #8b4513;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Location Section */
.location-section {
  background: white;
}

.location-address {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #666;
}

.map-container {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  h2 { font-size: 1.8rem; }
  .magical-text { font-size: 2rem; }
  .connect-buttons { flex-direction: column; }
}
\`\`\`

---

## Phase 6: GitHub & Deployment

### Initialize Git:
\`\`\`bash
git init
git add .
git commit -m "Initial commit: Marriage biodata website"
\`\`\`

### Create Repository on GitHub:
Visit [github.com](https://github.com) and create a new repository named `shivu-bio`

### Add Remote and Push:
\`\`\`bash
git remote add origin https://github.com/yourusername/shivu-bio.git
git branch -M main
git push -u origin main
\`\`\`

### Deploy to GitHub Pages:
\`\`\`bash
npm run deploy
\`\`\`

### Enable GitHub Pages:
1. Go to repository Settings → Pages
2. Set source to \`gh-pages\` branch
3. Your site will be live at: \`https://yourusername.github.io/shivu-bio\`

---

## Phase 7: Key Features

✅ **Dynamic Age Counter** - Auto-updates based on DOB  
✅ **Magical Text Animation** - Appears on image load  
✅ **External Config** - All data in \`biodata.json\`  
✅ **Multi-Section Layout** - Hero, Info, Gallery, Connect, Location  
✅ **Responsive Design** - Works on all devices  
✅ **Icon Integration** - React Icons for social links  
✅ **Lightbox Gallery** - Click to view full images  
✅ **Google Maps Embed** - Dynamic map based on coordinates  
✅ **GitHub Pages Ready** - Static site deployment  

---

## Next Steps

1. Create the React app with \`npx create-react-app shivu-bio\`
2. Follow the folder structure outlined in Phase 2
3. Implement each component as described
4. Update \`biodata.json\` with real data
5. Add images to \`public/images/\` folder
6. Test locally with \`npm start\`
7. Deploy to GitHub Pages with \`npm run deploy\`

Happy coding! 🎉
\`\`\`

You can now create this file manually, or use your IDE to create a new file and paste this content. Would you like any additional sections added to the documentation?