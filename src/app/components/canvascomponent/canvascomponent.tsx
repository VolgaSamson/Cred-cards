import React from 'react';
import styles from './canvascomponent.module.css';

const CanvasComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageLoadMarker}></div>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.spacer}></div>
            <div className={styles.canvasContainer}>
              <canvas
                className={styles.innercanvas}
                width={3485}
                height={2029}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          playsInline
          preload="metadata"
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95"
          className={styles.innervideo}
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
};

export default CanvasComponent;
