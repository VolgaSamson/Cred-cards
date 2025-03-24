"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './cardstatements.module.css';

const CardStatement: React.FC = () => {
  const imageUrls = [
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-1.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-2.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-2.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-3.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-4.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-3.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-5.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-6.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-7.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-4.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-5.jpg?tr=orig'
  ];
  const imageUrls1 = [
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/perks/fallback/card-perks-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/fallback/card-perks-fallback.jpg?tr=orig'
  ];

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0); // Track the current image index
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Function to load all images
  useEffect(() => {
    const loadImages = () => {
      const loadedImages: HTMLImageElement[] = imageUrls.map((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          // Check if all images are loaded
          if (loadedImages.every((img) => img.complete)) {
            setIsLoaded(true);
          }
        };
        return img;
      });
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Handle the scroll event to change the current frame based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoaded || !canvasRef.current) return;

      // Calculate scroll percentage
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / scrollHeight;

      // Calculate the current frame based on the scroll percentage
      const frameIndex = Math.floor(scrollPercentage * images.length);

      // Update the current frame if it has changed
      if (frameIndex !== currentFrame) {
        setCurrentFrame(frameIndex);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded, currentFrame, images.length]);

  // Draw the current frame on the canvas
  useEffect(() => {
    if (!canvasRef.current || !isLoaded) return;
  
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
  
    const img = images[currentFrame];
    
    // Adjust canvas size to image size
    canvas.width = img.width;
    canvas.height = img.height;
  
    // Clear the canvas and draw the current image
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, [currentFrame, isLoaded, images]);
  

  return (
    <>
      <div className={styles.main_card_statement_component}>
        <div className={styles.sub_card_statement_slide}></div>
        <div className={styles.sub_card_statement}>
          <div className={styles.sub_card_statement_inner}>
            <div className={styles.sub_card_statement_slide2}></div>
            <div className={styles.card_statement_canvas_container}>
              {/* First Canvas */}
              <canvas ref={canvasRef} className={styles.card_statement_canvas}></canvas>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card_statement_imageloader_container}>
        <div className={styles.sub_card_statement_slide3}></div>
        <div className={styles.card_statement_imageloader_subcontainer}>
          <div className={styles.card_statement_imageloader_subcontainer2}>
            <div className={styles.sub_card_statement_slide4}></div>
            <div className={styles.card_statement_canvas_subcontainer}>
              {/* Second Canvas */}

              <img src="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/fallback/card-perks-fallback.jpg?tr=orig" className={styles.card_statement_canvas2} alt="Canvas Image 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStatement;
