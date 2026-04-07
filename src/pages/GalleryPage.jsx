import React from 'react';
import './GalleryPage.css';

const galleryPhotos = [
  { id: 1, src: '/hero1.png', category: 'Treatment', title: 'Modern Surgery' },
  { id: 2, src: '/welcome.png', category: 'Interior', title: 'Reception Area' },
  { id: 3, src: '/hero2.png', category: 'Equipment', title: 'Advanced Technology' },
  // Adding more placeholders for "full page" feel
  { id: 4, src: '/welcome.png', category: 'Team', title: 'Our Doctors' },
  { id: 5, src: '/hero1.png', category: 'Treatment', title: 'Smile Makeover' },
  { id: 6, src: '/hero2.png', category: 'Interior', title: 'Op-Theatre' }
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <section className="gallery-header py-5 bg-secondary text-white text-center">
        <div className="container">
          <span className="subtitle text-primary">VISUAL JOURNEY</span>
          <h1>OUR CLINIC GALLERY</h1>
          <p className="lead">Take a virtual tour of our state-of-the-art facility and see the results we deliver.</p>
        </div>
      </section>

      <section className="gallery-grid-section py-5">
        <div className="container">
          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <div key={photo.id} className="gallery-item">
                <div className="image-container">
                  <img src={photo.src} alt={photo.title} />
                  <div className="overlay">
                    <span className="category">{photo.category}</span>
                    <h3>{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
