import React from "react";
import styles from "./cardcarousel.module.css";

const CardCarousel = () => {
  return (
    <div className={styles.interactionCard}>
      <div className={styles.interactionCard__header}></div>
        <h1 className={styles.interactionCard__title}>
          every touch is <br /> pure power.
        </h1>
        <div className={styles.interactionCard__header2}></div>
      <div className={styles.interactionCard__interactions}>
        <div>
          <video
            playsInline
            muted
            autoPlay
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/swipe-fallback.jpg?tr=orig"
            className={styles.interactionCard__video}
            loop
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/swipe.mp4?tr=q-95"
              type="video/mp4"
            />
            <div className={styles.interactionCard__header3}></div>
          </video>
          <div className={styles.interactionCard__textWrapper}>
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/swipe-left.png?tr=orig"
              className={styles.interactionCard__icon}
              alt="Swipe Left"
            />
            <div className={styles.interactionCard__text}>
              <p className={styles.interactionCard__description}>
                SWIPE LEFT{" "}
                <span className={styles.interactionCard__subDescription}>
                  on any card to manage payment history, card offers, and more.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <video
            playsInline
            muted
            autoPlay
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/long-press-fallback.jpg?tr=orig"
            className={styles.interactionCard__video}
            loop
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/long-press.mp4?tr=q-95"
              type="video/mp4"
            />
          </video>
          <div className={styles.interactionCard__header4}></div>
          <div className={styles.interactionCard__textWrapper}>
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/tap-hold.png?tr=orig"
              className={styles.interactionCard__icon}
              alt="Press and Hold"
            />
            <div className={styles.interactionCard__text}>
              <p className={styles.interactionCard__description}>
                PRESS AND HOLD{" "}
                <span className={styles.interactionCard__subDescription}>
                  a card to view balances, usage limits, recent activity, and other
                  key details.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.interactionCard__interaction}>
          <video
            playsInline
            muted
            autoPlay
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/smart-nav-fallback.jpg?tr=orig"
            className={styles.interactionCard__video}
            loop
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/smart-nav.mp4?tr=q-95"
              type="video/mp4"
            />
          </video>
          <div className={styles.interactionCard__header5}></div>
          <div className={styles.interactionCard__textWrapper}>
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/smart-nav.png?tr=orig"
              className={styles.interactionCard__icon}
              alt="Smart Navigation"
            />
            <div className={styles.interactionCard__text}>
              <p className={styles.interactionCard__description}>
                SMART NAVIGATION{" "}
                <span className={styles.interactionCard__subDescription}>
                  makes switching between cards seamless
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
