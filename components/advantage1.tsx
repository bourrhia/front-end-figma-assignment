import type { NextPage } from "next";
import styles from "./advantage1.module.css";

const Advantage1: NextPage = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.benefitHeaderRow}>
        <div className={styles.benefitIconRow}>
          <b className={styles.profitabilityAndGrowthContainer}>
            <span className={styles.profitabilityAndGrowthContainer1}>
              <p className={styles.profitabilityAnd}>Profitability and</p>
              <p className={styles.growth}>Growth</p>
            </span>
          </b>
          <img
            className={styles.benefitIconRowChild}
            loading="lazy"
            alt=""
            src="/frame-145.svg"
          />
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon@2x.png"
          />
        </div>
        <div className={styles.growthDescription}>
          <div className={styles.atCreonWe}>
            At Creon, we handpick cutting-edge AI projects and offer our
            community and token holders early access and investment
            opportunities. Our community actively contributes to the growth and
            profitability of these projects, creating a dynamic ecosystem of
            innovation and shared success.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage1;
