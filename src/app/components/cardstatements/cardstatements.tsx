"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./cardstatements.module.css";

const CardStatement: React.FC = () => {
  const imageUrls = [
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-1.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-2.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-2.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-3.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-4.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-3.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-5.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-6.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/mobile/smart-statements/fallback/fallback-7.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-4.jpg?tr=orig",
    "https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/smart-statements/fallback/fallback-5.jpg?tr=orig",
  ];

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load all images
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

  
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoaded || !canvasRef.current) return;

      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / scrollHeight;
      const frameIndex = Math.floor(scrollPercentage * images.length);

      if (frameIndex !== currentFrame) {
        setCurrentFrame(frameIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoaded, currentFrame, images.length]);

  
  useEffect(() => {
    if (!canvasRef.current || !isLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context || !images[currentFrame]) return;

    const img = images[currentFrame];

    
    const container = canvas.parentElement;
    if (container) {
      const aspectRatio = img.width / img.height;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      let canvasWidth = containerWidth;
      let canvasHeight = containerWidth / aspectRatio;

      if (canvasHeight > containerHeight) {
        canvasHeight = containerHeight;
        canvasWidth = containerHeight * aspectRatio;
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    
    console.log("Current Frame:", currentFrame);
  }, [currentFrame, isLoaded, images]);

  return (
    <div className={styles.main_card_statement_component}>
      <div className={styles.sub_card_statement_slide}></div>
      <div className={styles.sub_card_statement}>
        <div className={styles.sub_card_statement_inner}>
          <div className={styles.sub_card_statement_slide2}></div>
          <div className={styles.card_statement_canvas_container}>
            <canvas ref={canvasRef} className={styles.card_statement_canvas}></canvas>
          </div>
        </div>
      </div>

      <div className={styles.card_statement_imageloader_container}>
        <div className={styles.sub_card_statement_slide3}></div>
        <div className={styles.card_statement_imageloader_subcontainer}>
          <div className={styles.card_statement_imageloader_subcontainer2}>
            <div className={styles.sub_card_statement_slide4}></div>
            <div className={styles.card_statement_canvas_subcontainer}>
              <img
                src="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/fallback/card-perks-fallback.jpg?tr=orig"
                className={styles.card_statement_canvas2}
                alt="Canvas Image 2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStatement;
