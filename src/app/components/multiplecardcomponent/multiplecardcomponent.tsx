import styles from './multiplecardcomponent.module.css';

const MultipleCardComponent = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        playsInline
        preload="metadata"
        poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/multi-card/mc-fold-desktop-poster.jpg?tr=orig"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95"
        className={styles.video}
        autoPlay
        muted
      />
    </div>
  );
};

export default MultipleCardComponent;
