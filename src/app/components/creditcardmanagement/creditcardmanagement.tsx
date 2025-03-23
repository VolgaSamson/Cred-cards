
import styles from './creditCardManagement.module.css';

const CreditCardManagement = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <p className={styles.headerText}>credit card management. reimagined.</p>
        <div className={styles.spacer}></div>
        <h1 className={styles.mainHeader}>everything you need. nothing you don't.</h1>
        <div className={styles.spacer}></div>
        <p className={styles.bodyText}>
          welcome to a credit card experience designed to feel like second nature. like muscle memory. life's logistics
          demand enough of your time, effort, and attention—managing your credit cards shouldn't add to the list.
        </p>
        <div className={styles.spacer}></div>
        <p className={styles.bodyText}>you can put your admin duties to rest. for good.</p>
      </div>
    </section>
  );
};

export default CreditCardManagement;
