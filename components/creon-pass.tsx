import type { NextPage } from "next";
import styles from "./creon-pass.module.css";

const CreonPass: NextPage = () => {
  return (
    <section className={styles.creonPass}>
      <div className={styles.video}>
        <img
          className={styles.upres2160p1}
          alt=""
          src="/230627-upres-2160p-1@2x.png"
        />
        <div className={styles.videoOverlay} />
      </div>
      <img
        className={styles.darkShapeIcon}
        loading="lazy"
        alt=""
        src="/dark-shape.svg"
      />
      <div className={styles.left}>
        <div className={styles.bigButtonColor}>
          <b className={styles.connectWallet1}>Buy Creon Pass</b>
          <b className={styles.connectWallet2}>Buy Creon Pass</b>
        </div>
        <b className={styles.theCreonNft}>
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </b>
        <button className={styles.benefitItems}>
          <div className={styles.revenueShareDistribution}>
            Revenue share distribution from Creon built AI projects
          </div>
        </button>
        <button className={styles.benefitItems1}>
          <div className={styles.freeAndEarly}>
            Free and early access to Creon built AI projects
          </div>
        </button>
        <button className={styles.benefitItems2}>
          <div className={styles.higherAllocationLimits}>
            Higher allocation limits on the Creon AI Launchpad
          </div>
        </button>
        <button className={styles.benefitItems3}>
          <div className={styles.preLaunchInvestmentOpportun}>
            Pre-launch investment opportunities for upcoming AI projects
          </div>
        </button>
        <h1 className={styles.creonPassNft}>creon pass nft</h1>
        <div className={styles.nftImage} />
      </div>
    </section>
  );
};

export default CreonPass;
