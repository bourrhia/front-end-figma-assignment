import type { NextPage } from "next";
import Footer from "../components/footer";
import Token from "../components/token";
import CreonPass from "../components/creon-pass";
import Component from "../components/component";
import Profiting from "../components/profiting";
import OurMission from "../components/our-mission";
import Header from "../components/header";
import styles from "./index.module.css";

const MainPage1920px: NextPage = () => {
  return (
    <div className={styles.mainPage1920px}>
      <section className={styles.videoBackground}>
        <img
          className={styles.networkTransformationConnect}
          alt=""
          src="/599561-network-transformation-connection-digital-by-alejandro-campollo-artlist-hd-onlinevideocuttercom-1@2x.png"
        />
        <div className={styles.videoBackgroundChild} />
        <div className={styles.blackShape}>
          <div className={styles.blackShapeChild} />
          <div className={styles.blackShapeItem} />
        </div>
      </section>
      <Footer />
      <div className={styles.comingSoon}>
        <Token
          launchingInTheSecondHalfO="CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
          prop="/0-1-1@2x.png"
          empoweringNFTHoldersAndSh="Driving income and growth through decentralization"
          token="revenue"
        />
        <Token
          launchingInTheSecondHalfO="The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
          prop="/0-1-1-2@2x.png"
          empoweringNFTHoldersAndSh="Driving the future of AI Innovation"
          token="launchpad"
          propLeft="1226px"
          propBottom="30px"
          propHeight="90px"
          propLineHeight="29px"
        />
        <Token
          launchingInTheSecondHalfO="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
          prop="/0-1-1-21@2x.png"
          empoweringNFTHoldersAndSh="The Gateway token to the world of AI"
          token="token"
          propLeft="240px"
          propBottom="54px"
          propHeight="90px"
          propLineHeight="29px"
        />
      </div>
      <CreonPass />
      <section className={styles.marketPanel}>
        <Component
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1@2x.png"
          aIProspectsMarketSizeAndD="AI Prospects, Market Size, and Development Pace"
          theAIMarketIsOneOfTheMost="The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation."
        />
        <Component
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1-1@2x.png"
          aIProspectsMarketSizeAndD="AI Tools and Market"
          theAIMarketIsOneOfTheMost="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
          propTop="402px"
          propLineHeight="46px"
        />
        <Component
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1-2@2x.png"
          aIProspectsMarketSizeAndD="AI, Crypto, and NFT Market"
          theAIMarketIsOneOfTheMost="Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
          propTop="724px"
          propLineHeight="46px"
        />
      </section>
      <Profiting />
      <OurMission />
      <section className={styles.stScreen}>
        <img
          className={styles.mainVideoGradient1Icon}
          alt=""
          src="/mainvideogradient-1@2x.png"
        />
        <div className={styles.contentBackground} />
        <div className={styles.text}>
          <h1 className={styles.theWorldsFirstContainer}>
            <p className={styles.theWorldsFirst}>The world's first</p>
            <p className={styles.platformForTokenizing}>
              platform for Tokenizing
            </p>
            <p className={styles.aiBlockchainProjects}>
              AI blockchain projects
            </p>
          </h1>
          <div className={styles.descriptionContainer}>
            <b className={styles.holdTheCreon}>
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </b>
          </div>
        </div>
      </section>
      <Header />
      <div className={styles.mainPage1920pxChild} />
      <div className={styles.bannerBackground} />
    </div>
  );
};

export default MainPage1920px;
