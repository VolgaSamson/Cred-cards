"use client";
import React, { useState } from 'react';
import styles from './downloadcred.module.css';


const DownloadCred: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true); 
  };

  return (
    <div className={styles.credvideoSectionWrapper}>
      <video
        playsInline
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/cta/cta-fold-desktop-poster.jpg?tr=orig"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/cta/cta-fold-desktop.mp4?tr=orig"
        className={styles.credvideoPlayer}
        autoPlay
        muted
        loop={false}  
        onEnded={handleVideoEnd}  
      ></video>
      <div
        className={`${styles.overlayContainer} ${videoEnded ? styles.showOverlay : ''}`}  
      >
        <div className={styles.qrBoxContainer}>
          <div>
            <div className={styles.qrBox}>
              <img
                src="https://web-images.credcdn.in/v2/_next/assets/images/cards/cred-qr.png"
                className={styles.qrImage}
                alt="CRED QR"
              />
              <div className={styles.downloadText}>
                download
                <br />
                CRED
              </div>
            </div>
          </div>
          <div>
            <div className={styles.buttonWrapper}>
              <a
                href="https://app.cred.club/k63y/ciofyb98"
                rel="noreferrer"
                className={styles.downloadButton}
              >
                <div className={styles.maincontainerbuttonText}>
                  <div>
                    <div className={styles.buttonText}>DOWNLOAD CRED</div>
                  </div>
                  <svg
                    width="19"
                    height="8"
                    viewBox="0 0 32 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.arrowIcon}
                  >
                    <path
                      d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCred;
