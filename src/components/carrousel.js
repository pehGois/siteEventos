import "../App.css"
import React, { useState } from 'react';


export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
        
        <button className="button-arrow carousel-button absolute" onClick={nextImage}>
            <span className="material-symbols-outlined">
                arrow_back_ios
            </span>
        </button>

        <img src={images[currentIndex].url} alt="Carousel" className="carousel-image" />

        <button className="button-arrow carousel-button absolute right">
            <span onClick={prevImage}className="material-symbols-outlined">
            arrow_forward_ios
            </span>
        </button>

    </div>
  );
};



