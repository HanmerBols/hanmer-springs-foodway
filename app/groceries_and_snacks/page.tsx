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
  GROCERIES_AND_SNACKS_IMAGE_PATHS,
  GROCERIES_AND_SNACKS_PAGE_SUBTITLE,
  GROCERIES_AND_SNACKS_PAGE_TITLE,
} from "./content";

const GroceriesAndSnacksPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={GROCERIES_AND_SNACKS_PAGE_TITLE} />
          <Subtitle text={GROCERIES_AND_SNACKS_PAGE_SUBTITLE} />
        </Introduction>

        <SubPageImages
          description={GROCERIES_AND_SNACKS_PAGE_TITLE}
          imagePaths={GROCERIES_AND_SNACKS_IMAGE_PATHS}
        />
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default GroceriesAndSnacksPage;
