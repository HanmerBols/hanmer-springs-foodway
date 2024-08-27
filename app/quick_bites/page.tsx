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
  QUICK_BITES_IMAGE_PATHS,
  QUICK_BITES_PAGE_SUBTITLE,
  QUICK_BITES_PAGE_TITLE,
} from "./content";

const QuickBitesPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={QUICK_BITES_PAGE_TITLE} />
          <Subtitle text={QUICK_BITES_PAGE_SUBTITLE} />
        </Introduction>

        <SubPageImages
          description={QUICK_BITES_PAGE_TITLE}
          imagePaths={QUICK_BITES_IMAGE_PATHS}
        />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default QuickBitesPage;
