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
  NOODLES_IMAGE_PATHS,
  NOODLES_PAGE_SUBTITLE,
  NOODLES_PAGE_TITLE,
} from "./content";

const NoodlesPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={NOODLES_PAGE_TITLE} />
          <Subtitle text={NOODLES_PAGE_SUBTITLE} />
        </Introduction>

        <SubPageImages
          description={NOODLES_PAGE_TITLE}
          imagePaths={NOODLES_IMAGE_PATHS}
        />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default NoodlesPage;
