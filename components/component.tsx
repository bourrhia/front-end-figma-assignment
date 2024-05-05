import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./component.module.css";

export type ComponentType = {
  aiCloudConceptWithRobotHe?: string;
  aIProspectsMarketSizeAndD?: string;
  theAIMarketIsOneOfTheMost?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const Component: NextPage<ComponentType> = ({
  aiCloudConceptWithRobotHe,
  aIProspectsMarketSizeAndD,
  theAIMarketIsOneOfTheMost,
  propTop,
  propLineHeight,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const aIProspectsMarketStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.image}>
        <img
          className={styles.aiCloudConceptWithRobotHeIcon}
          loading="lazy"
          alt=""
          src={aiCloudConceptWithRobotHe}
        />
        <div className={styles.marketImageOverlay} />
      </div>
      <div className={styles.aiProspectsMarketSizeAndParent}>
        <h1 className={styles.aiProspectsMarket} style={aIProspectsMarketStyle}>
          {aIProspectsMarketSizeAndD}
        </h1>
        <div className={styles.theAiMarket}>{theAIMarketIsOneOfTheMost}</div>
      </div>
    </div>
  );
};

export default Component;
