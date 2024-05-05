import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./token.module.css";

export type TokenType = {
  launchingInTheSecondHalfO?: string;
  prop?: string;
  empoweringNFTHoldersAndSh?: string;
  token?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBottom?: CSSProperties["bottom"];
  propHeight?: CSSProperties["height"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const Token: NextPage<TokenType> = ({
  launchingInTheSecondHalfO,
  prop,
  empoweringNFTHoldersAndSh,
  token,
  propLeft,
  propBottom,
  propHeight,
  propLineHeight,
}) => {
  const tokenStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const launchingInTheStyle: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const empoweringNFTHoldersStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={styles.token} style={tokenStyle}>
      <div className={styles.launchingInThe} style={launchingInTheStyle}>
        {launchingInTheSecondHalfO}
      </div>
      <div className={styles.imageFrame}>
        <div className={styles.image}>
          <img className={styles.icon} loading="lazy" alt="" src={prop} />
          <div className={styles.imageChild} />
        </div>
      </div>
      <div
        className={styles.empoweringNftHoldersAndShaParent}
        style={groupDivStyle}
      >
        <b
          className={styles.empoweringNftHolders}
          style={empoweringNFTHoldersStyle}
        >
          {empoweringNFTHoldersAndSh}
        </b>
        <h1 className={styles.token1}>{token}</h1>
      </div>
      <div className={styles.comingSoonWrapper}>
        <b className={styles.comingSoon}>COMING SOON</b>
      </div>
    </div>
  );
};

export default Token;
