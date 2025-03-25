"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./multiplecardcomponent.module.css";

const MultipleCardComponent = () => {
  const imageUrls = [
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/swipe-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/long-press-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/fallbackImages/interactions/smart-nav-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/swipe-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/long-press-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/fallbackImages/interactions/smart-nav-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/unbilled/fallback/unbilled-fold-fallback.jpg?tr=orig',
    'https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/unbilled/fallback/unbilled-fold-fallback.jpg?tr=orig',
  ];

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  
  useEffect(() => {
    const loadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0; 

      imageUrls.forEach((url, index) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages[index] = img;  
          loadedCount++;

         
          if (loadedCount === imageUrls.length) {
            setImages(loadedImages);
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${url}`);
        };
      });
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

    if (img) {
      // Set the canvas size to match the image size
      const canvasContainer = canvas.parentElement;
      if (canvasContainer) {
        const containerWidth = canvasContainer.clientWidth;
        const containerHeight = canvasContainer.clientHeight;

        const aspectRatio = img.width / img.height;
        let canvasWidth = containerWidth;
        let canvasHeight = containerWidth / aspectRatio;

        if (canvasHeight > containerHeight) {
          canvasHeight = containerHeight;
          canvasWidth = containerHeight * aspectRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }

      // Clear the canvas and draw the current image
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [currentFrame, isLoaded, images]);

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
