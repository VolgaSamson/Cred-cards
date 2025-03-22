'use client';

import Navbar from '../navbar/navbar';
import styles from './heroSection.module.css'; 

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <Navbar />

      <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <video
            playsInline
            preload="metadata"
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/hero-fold/hero-fold-desktop-poster.jpg?tr=orig"
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95"
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
