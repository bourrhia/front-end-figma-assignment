import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.socialMedia}>
        <img
          className={styles.telegramIcon}
          loading="lazy"
          alt=""
          src="/telegram.svg"
        />
        <img
          className={styles.discordIcon}
          loading="lazy"
          alt=""
          src="/discord.svg"
        />
        <img
          className={styles.twitterIcon}
          loading="lazy"
          alt=""
          src="/twitter.svg"
        />
      </div>
      <div className={styles.creon2023All}>
        © Creon 2023. All rights reserved.
      </div>
      <div className={styles.niftablesLogo}>
        <div className={styles.poweredBy}>Powered by</div>
        <img
          className={styles.niftablesLogoChild}
          loading="lazy"
          alt=""
          src="/frame-692.svg"
        />
      </div>
    </section>
  );
};

export default Footer;
