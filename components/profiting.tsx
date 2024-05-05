import type { NextPage } from "next";
import styles from "./profiting.module.css";

const Profiting: NextPage = () => {
  return (
    <section className={styles.profiting}>
      <div className={styles.theDynamicCommunityDrivenBParent}>
        <b className={styles.theDynamicCommunity}>
          The dynamic community driven business model of the future.
        </b>
        <div className={styles.atCreonWe}>
          At Creon, we blend the power of AI tools with the dynamic crypto and
          NFT markets, utilizing an innovative business model to drive
          profitability. This approach empowers our community, as our NFT and
          token holders directly benefit from the growth and prosperity of the
          Creon network, creating a win-win scenario for both our community and
          for the projects we launch.
        </div>
      </div>
      <h1
        className={styles.aiInnovation}
      >{`AI Innovation & Decentralization`}</h1>
      <h1 className={styles.profitingThrough}>Profiting Through</h1>
      <div className={styles.video}>
        <img
          className={styles.creonLogo5V01NormalBitratIcon}
          alt=""
          src="/creon-logo-5-v01-normal-bitrate-1@2x.png"
        />
        <div className={styles.videoPlaceholder} />
      </div>
      <div className={styles.gridBackground} />
      <div className={styles.gridBackground1} />
    </section>
  );
};

export default Profiting;
