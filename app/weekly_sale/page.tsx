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
  WEEKLY_SALE_IMAGE_PATHS,
  WEEKLY_SALE_PAGE_SUBTITLE,
  WEEKLY_SALE_PAGE_TITLE,
} from "./content";

const WeeklySalePage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={WEEKLY_SALE_PAGE_TITLE} />
          <Subtitle text={WEEKLY_SALE_PAGE_SUBTITLE} />
        </Introduction>

        <SubPageImages
          description={WEEKLY_SALE_PAGE_TITLE}
          imagePaths={WEEKLY_SALE_IMAGE_PATHS}
        />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default WeeklySalePage;
