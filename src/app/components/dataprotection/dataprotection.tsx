
import React from 'react';
import styles from './dataprotection.module.css';

const DataProtection: React.FC = () => {
  return (
    <section className={styles.dataprotectionsection}>
      <hr className={styles.dataprotectionhr} />
      <div className={styles.dataprotectioncontainer}>
        <div className={styles.dataprotectionimageContainer}>
          <img
            src="https://web-images.credcdn.in/v2/_next/assets/images/cards/lock.png?tr=orig"
            className={styles.dataprotectionimage}
            alt="lock"
          />
          <div className={styles.dataprotectiondivider}></div>
          <h1 className={styles.dataprotectionheading}>
            the only thing we do with your data is protect it.
          </h1>
        </div>
        <div className={styles.dataprotectiontextContainer}>
          <p className={styles.dataprotectionparagraph}>
            at CRED, security isn't an afterthought. it's built into everything we do. your data is encrypted,
            monitored, and protected at every step. we follow PCI DSS v4.0, ISO 27001, and RBI guidelines, ensuring
            top-tier safety standards. your card data is never stored—tokenization and masking keep your details
            secure.
          </p>
          <div className={styles.dataprotectiondivider}></div>
          <p className={styles.dataprotectionparagraph}>
            there are no gaps, because we didn't leave any.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataProtection;
