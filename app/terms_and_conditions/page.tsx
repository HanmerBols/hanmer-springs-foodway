"use client";

import { useMobileDetection } from "../lib/hooks/useMobileDetection";
import { PointContent, SectionContent } from "../types";
import BottomBar from "../ui/BottomBar";
import BulletPoint from "../ui/BulletPoint";
import ContactMethods from "../ui/ContactMethods";
import Content from "../ui/Content";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Introduction from "../ui/Introduction";
import Subheader from "../ui/Subheader";
import Text from "../ui/Text";
import TextSection from "../ui/TextSection";
import TextSections from "../ui/TextSections";
import Title from "../ui/Title";
import TopBar from "../ui/TopBar";
import {
  TERM_AND_CONDITIONS_PAGE_TITLE,
  TERMS_AND_CONDITIONS,
} from "./content";

const TermsAndConditionsPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={TERM_AND_CONDITIONS_PAGE_TITLE} />
        </Introduction>

        <TextSections>
          {TERMS_AND_CONDITIONS.map((section) => (
            <Section key={section.header} section={section} />
          ))}

          <ContactMethods center />
        </TextSections>
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default TermsAndConditionsPage;

type SectionProps = {
  section: SectionContent;
};

const Section = ({ section }: SectionProps) => {
  return (
    <TextSection>
      <Header text={section.header} />

      {section.leadingText ? <Text text={section.leadingText} /> : <></>}
      {section.points ? <Points points={section.points} /> : <></>}
      {section.endingText ? <Text text={section.endingText} /> : <></>}
    </TextSection>
  );
};

type PointsProps = {
  points: PointContent[];
};

const Points = ({ points }: PointsProps) => {
  return (
    <>
      {points.map((point, index) => (
        <Point key={`point-${index}`} point={point} />
      ))}
    </>
  );
};

type Point = {
  point: PointContent;
};

const Point = ({ point }: Point) => {
  return (
    <div>
      {point.subheader ? <Subheader text={point.subheader} /> : <></>}

      <BulletPoint text={point.text} />
    </div>
  );
};
