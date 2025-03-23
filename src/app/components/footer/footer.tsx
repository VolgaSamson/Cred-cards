'use client';

import styles from './footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.faq}>
              FREQUENTLY ASKED QUESTIONS
             <div className={styles.faqicon}>
                   <img src="https://web-images.credcdn.in/v2/_next/assets/images/faq/down-arrow.png" className={styles.faqiconimg} />
                </div>
             </div>
    </footer>
    <div className={styles.footerContainer}>
      <div className={styles.logoSection}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.footerLogo}
            src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png"
            alt="cred logo"
            loading="lazy"
          />
          <img
            className={styles.securityLogo}
            src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png"
            alt="security logo"
            loading="lazy"
          />
          <div className={styles.securityText}>
            complete security. no asterisks.
          </div>
          <div className={styles.securityDescription}>
            CRED encrypts all data and transactions to ensure a completely secure experience for our members.
          </div>
        </div>
        <div className={styles.bannerSection}>
          <div className={styles.nowLive}>
            <div className={styles.liveText}>now live</div>
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cards/now-live-wide.png?tr=q-95"
              className={styles.bannerImage}
              alt="Now live banner"
            />
          </div>
          <div className={styles.linksSection}>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>UPGRADES</div>
          <div className={styles.links}>
            <a href="https://cred.club/money" target="_blank" className={styles.link}>
              CRED money
            </a>
            <a href="https://cred.club/mint" target="_blank" className={styles.link}>
              CRED mint
            </a>
            <a href="https://cred.club/garage" target="_blank" className={styles.link}>
              CRED garage
            </a>
            <a href="https://cred.club/escapes" target="_blank" className={styles.link}>
              CRED escapes
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>PAYMENTS</div>
          <div className={styles.links}>
            <a href="https://cred.club/cred-pay" target="_blank" className={styles.link}>
              Scan &amp; Pay
            </a>
            <a href="https://cred.club/tap" target="_blank" className={styles.link}>
              Tap to Pay
            </a>
            <a href="https://cred.club/pay-via-upi" target="_blank" className={styles.link}>
              Pay anyone
            </a>
            <a href="https://cred.club/upi-on-credit" target="_blank" className={styles.link}>
              RuPay cards on UPI
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>COMPANY</div>
          <div className={styles.links}>
            <a href="https://cred.club/about" target="_blank" className={styles.link}>
              about CRED
            </a>
            <a href="https://careers.cred.club/openings" target="_blank" className={styles.link}>
              careers
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>INSIDER PERKS</div>
          <div className={styles.links}>
            <a href="https://cred.club/ipl" target="_blank" className={styles.link}>
              upgrade to UPI
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>DESIGN</div>
          <div className={styles.links}>
            <a href="https://cred.club/neopop" target="_blank" className={styles.link}>
              NeoPOP
            </a>
            <a href="https://cred.club/design" target="_blank" className={styles.link}>
              manifesto
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>RESOURCES</div>
          <div className={styles.links}>
            <a href="https://cred.club/cred-pay/onboarding" target="_blank" className={styles.link}>
              partner with us
            </a>
            <a href="https://cred.club/calculators" target="_blank" className={styles.link}>
              calculators
            </a>
            <a href="https://cred.club/articles" target="_blank" className={styles.link}>
              articles
            </a>
            <a href="https://engineering.cred.club" target="_blank" className={styles.link}>
              tech blog
            </a>
            <a href="https://cred.club/check-your-credit-score/articles" target="_blank" className={styles.link}>
              credit score guide
            </a>
            <a href="https://cred.club/credit-card-bill-payment-online/articles" target="_blank" className={styles.link}>
              credit card payment guide
            </a>
            <a href="https://cred.club/customer-care" target="_blank" className={styles.link}>
              customer care
            </a>
          </div>
        </div>
        <div className={styles.linkCategory}>
          <div className={styles.categoryTitle}>POLICY</div>
          <div className={styles.links}>
            <a href="https://cred.club/transaction-and-user-verification-policy" target="_blank" className={styles.link}>
              transaction &amp; user verification
            </a>
            <a href="https://cred.club/privacy#compliance-with-google-oauth-api-scopes" target="_blank" className={styles.link}>
              Google API disclosure
            </a>
            <a href="https://cred.club/upi-faqs" target="_blank" className={styles.link}>
              UPI FAQ &amp; grievances
            </a>
            <a href="https://cred.club/return-policy" target="_blank" className={styles.link}>
              returns and refunds
            </a>
            <a href="https://cred.club/security" target="_blank" className={styles.link}>
              security
            </a>
            <a href="https://web-assets.cred.club/assets/docs/eop.pdf" target="_blank" className={styles.link}>
              equal opportunity policy
            </a>
            <a href="https://cred.club/investor-relations" target="_blank" className={styles.link}>
              investor relations
            </a>
            <a href="https://cred.club/legal/other-disclosures" target="_blank" className={styles.link}>
              other disclosures
            </a>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      
      <div className={styles.copyright_main_container}>
        <div className={styles.copyright_line}>
          </div>
          <div className={styles.copyright_text_main}>
            <div className={styles.copyright_text}>
              copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
              </div>
              <div className={styles.privacy_container}>
                <a href="https://cred.club/privacy" target="_blank" className={styles.privacy_policy}>
                privacy policy
                </a>
                <a href="https://cred.club/terms" target="_blank" className={styles.terms_conditions}>
                terms and conditions
                </a>
                </div>
                </div>
                </div>
    </div>
    </>
  );
};

export default Footer;
