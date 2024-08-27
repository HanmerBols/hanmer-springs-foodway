"use client";

import { useMobileDetection } from "../lib/hooks/useMobileDetection";
import BottomBar from "../ui/BottomBar";
import Content from "../ui/Content";
import Footer from "../ui/Footer";
import Introduction from "../ui/Introduction";
import SubPageImages from "../ui/SubPageImages";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";
import TopBar from "../ui/TopBar";
import {
  BOLS_IMAGE_PATHS,
  BOLS_PAGE_SUBTITLE,
  BOLS_PAGE_TITLE,
} from "./content";

const BolsPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={BOLS_PAGE_TITLE} />
          <Subtitle text={BOLS_PAGE_SUBTITLE} />
        </Introduction>

        <SubPageImages
          description={BOLS_PAGE_TITLE}
          imagePaths={BOLS_IMAGE_PATHS}
        />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default BolsPage;
