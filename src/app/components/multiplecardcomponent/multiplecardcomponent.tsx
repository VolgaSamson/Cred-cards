import styles from './multiplecardcomponent.module.css';

const MultipleCardComponent = () => {
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
                    className={styles.secondmultipleinnercanvas}
                    width={3485}
                    height={2029}
                  ></canvas>
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
