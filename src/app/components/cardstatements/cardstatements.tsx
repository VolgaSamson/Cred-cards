"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './cardstatements.module.css';

const CardStatement: React.FC = () => {
  
  const imageUrls1 = [
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
  
  const imageUrls2 = 
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/perks/fallback/card-perks-fallback.jpg?tr=orig"
  ;

  const canvasRef1 = useRef<HTMLCanvasElement | null>(null);
  const canvasRef2 = useRef<HTMLCanvasElement | null>(null);

  const [images1, setImages1] = useState<HTMLImageElement[]>([]);
  const [images2, setImages2] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Track if images are loaded

  // Refs to track current frame, this won't trigger re-renders
  const currentFrame1Ref = useRef(0);
  const currentFrame2Ref = useRef(0);

  // Load images on component mount
  useEffect(() => {
    const loadImages = (urls: string[]) => {
      return urls.map((url) => {
        const img = new Image();
        img.src = url;
        return img;
      });
    };

    const loadedImages1 = loadImages(imageUrls1);
    
    // Set the images in the state and mark as loaded
    setImages1(loadedImages1);
    
    // Set a flag to indicate that the images are loaded
    setIsLoaded(true);
  }, []); // Empty array ensures this runs only once

  // Animation effect with delay
  useEffect(() => {
    if (!isLoaded || !canvasRef1.current || !canvasRef2.current) return;

    // Delay the start of the animation by 3 seconds
    const delayAnimation = setTimeout(() => {
      const canvas1 = canvasRef1.current!;
      const canvas2 = canvasRef2.current!;
      const context1 = canvas1.getContext('2d');
      const context2 = canvas2.getContext('2d');

      if (!context1 || !context2) return;

      const drawFrame = () => {
        // Clear canvas before drawing the next frame
        context1.clearRect(0, 0, canvas1.width, canvas1.height);
        context2.clearRect(0, 0, canvas2.width, canvas2.height);

        // Draw current images on respective canvases
        context1.drawImage(images1[currentFrame1Ref.current], 0, 0, canvas1.width, canvas1.height);
        context2.drawImage(images2[currentFrame2Ref.current], 0, 0, canvas2.width, canvas2.height);

        // Increment frames (using refs to avoid re-renders)
        currentFrame1Ref.current = (currentFrame1Ref.current + 1) % images1.length;
        currentFrame2Ref.current = (currentFrame2Ref.current + 1) % images2.length;

        // Request the next frame
        requestAnimationFrame(drawFrame);
      };

      // Start the drawing loop
      drawFrame();
    }, 3000); // Delay animation by 3 seconds

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(delayAnimation);

  }, [isLoaded, images1, images2]); // Only trigger when images are loaded

  return (
    <>
      <div className={styles.main_card_statement_component}>
        <div className={styles.sub_card_statement_slide}></div>
        <div className={styles.sub_card_statement}>
          <div className={styles.sub_card_statement_inner}>
            <div className={styles.sub_card_statement_slide2}></div>
            <div className={styles.card_statement_canvas_container}>
              {/* First Canvas */}
              <canvas ref={canvasRef1} className={styles.card_statement_canvas}></canvas>
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
              <img src={imageUrls2} className={styles.card_statement_canvas2} alt="Canvas Image 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStatement;
