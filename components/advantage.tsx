import type { NextPage } from "next";
import styles from "./advantage.module.css";

export type AdvantageType = {
  launchingThe?: string;
  future?: string;
  icon?: string;
  atCreonWeDeliverAUniqueOp?: string;
};

const Advantage: NextPage<AdvantageType> = ({
  launchingThe,
  future,
  icon,
  atCreonWeDeliverAUniqueOp,
}) => {
  return (
    <div className={styles.advantage}>
      <div className={styles.frameParent}>
        <div className={styles.profitabilityAndGrowthParent}>
          <b className={styles.profitabilityAndGrowthContainer}>
            <span className={styles.profitabilityAndGrowthContainer1}>
              <p className={styles.launchingThe}>{launchingThe}</p>
              <p className={styles.future}>{future}</p>
            </span>
          </b>
          <img className={styles.frameChild} alt="" src="/frame-145-1.svg" />
          <img className={styles.icon} alt="" src={icon} />
        </div>
        <div className={styles.atCreonWeDeliverAUniqueWrapper}>
          <div className={styles.atCreonWe}>{atCreonWeDeliverAUniqueOp}</div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
