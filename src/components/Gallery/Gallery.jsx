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
              <img src={`/images/${item.image}`} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <img src={`/images/${selectedImage.image}`} alt={selectedImage.caption} />
          </div>
        )}
      </div>
    </section>
  );
};

