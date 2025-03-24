"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './multiplecardcomponent.module.css';

const MultipleCardComponent = () => {
  const imageUrls = [
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/swipe-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/long-press-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/smart-nav-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/swipe-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/long-press-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/smart-nav-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/unbilled/fallback/unbilled-fold-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/fallback/unbilled-fold-fallback.jpg?tr=orig'
  ];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);  
  const [images, setImages] = useState<HTMLImageElement[]>([]); 
  const [loadedImagesCount, setLoadedImagesCount] = useState(0); 
  const [currentFrame, setCurrentFrame] = useState(0); 

  // Function to load all images
  useEffect(() => {
    const loadImages = () => {
      const loadedImages: HTMLImageElement[] = imageUrls.map((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          // Increment loaded images count when the image is loaded
          setLoadedImagesCount((prevCount) => prevCount + 1);
        };
        return img;
      });
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  // Function to draw the images onto the canvas in sequence
  useEffect(() => {
    if (!canvasRef.current || loadedImagesCount !== imageUrls.length) return; // Check if images are fully loaded

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return; // Check if context is null

    let animationFrameId: number;

    const drawFrame = () => {
      if (images.length > 0) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        context.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height); // Draw the current image

        // Move to the next frame
        setCurrentFrame((prevFrame) => (prevFrame + 1) % images.length); // Loop the frames
      }
      
      animationFrameId = requestAnimationFrame(drawFrame); // Request the next animation frame
    };

    // Start the drawing loop once images are loaded
    if (images.length > 0 && loadedImagesCount === imageUrls.length) {
      drawFrame();
    }

    // Cleanup the animation frame when the component unmounts or stops rendering
    return () => cancelAnimationFrame(animationFrameId);
  }, [images,  loadedImagesCount]); // Dependencies are images, currentFrame, and loadedImagesCount

  return (
    <>
      <div className={styles.multiplevideoContainer}>
        <video
          playsInline
          preload="metadata"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/multi-card/mc-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95"
          className={styles.multiplevideo}
          autoPlay
          muted
        />
      </div>

      <div className={styles.secondmultiplecontainer}>
        <div className={styles.secondmultipleimageLoadMarker}></div>
        <div className={styles.secondmultiplewrapper}>
          <div className={styles.secondmultipleinnerWrapper}>
            <div className={styles.secondmultiplespacer}></div>
            <div className={styles.secondmultiplecanvasContainer}>
              <canvas
                ref={canvasRef}
                className={styles.secondmultipleinnercanvas}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdmultiplevideoContainer}>
        <video
          playsInline
          preload="metadata"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95"
          className={styles.thirdmultiplevideo}
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
};

export default MultipleCardComponent;
