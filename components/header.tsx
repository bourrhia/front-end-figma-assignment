import type { NextPage } from "next";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <div className={styles.bigButton}>
        <b className={styles.connectWallet1}>Connect</b>
        <b className={styles.connectWallet2}>Connect</b>
      </div>
      <div className={styles.navigationItems}>
        <div className={styles.creonPass}>
          <b className={styles.creonPass1}>Creon Pass</b>
        </div>
        <div className={styles.navigationLabels}>
          <b className={styles.token}>Token</b>
          <div className={styles.navigationStatus}>
            <b className={styles.soon}>SOON</b>
          </div>
        </div>
        <div className={styles.navigationLabels1}>
          <b className={styles.aiRevenue}>AI Revenue</b>
          <div className={styles.soonWrapper}>
            <b className={styles.soon1}>SOON</b>
          </div>
        </div>
        <div className={styles.navigationLabels2}>
          <b className={styles.aiLaunchpad}>AI Launchpad</b>
          <div className={styles.soonContainer}>
            <b className={styles.soon2}>SOON</b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
