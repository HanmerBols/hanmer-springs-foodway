"use client";

import { useMobileDetection } from "../lib/hooks/useMobileDetection";
import BottomBar from "../ui/BottomBar";
import BulletPoint from "../ui/BulletPoint";
import ContactMethods from "../ui/ContactMethods";
import Content from "../ui/Content";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Introduction from "../ui/Introduction";
import Subheader from "../ui/Subheader";
import TextSection from "../ui/TextSection";
import Title from "../ui/Title";
import TopBar from "../ui/TopBar";
import {
  TERM_AND_CONDITIONS_PAGE_TITLE,
  TERMS_AND_CONDITIONS,
} from "./content";
import styles from "./page.module.css";
import { TermSection, TermSubsection } from "./types";

const TermsAndConditionsPage = () => {
  const isMobile = useMobileDetection();

  return (
    <>
      <TopBar />
      <Content>
        <Introduction>
          <Title text={TERM_AND_CONDITIONS_PAGE_TITLE} />
        </Introduction>

        <Sections />

        <TextSection>
          <ContactMethods center />
        </TextSection>
      </Content>
      <Footer />
      {isMobile ? <BottomBar /> : <></>}
    </>
  );
};

export default TermsAndConditionsPage;

const Sections = () => {
  return (
    <div className={styles.sections}>
      {TERMS_AND_CONDITIONS.map((termSection) => (
        <Section key={termSection.header} termSection={termSection} />
      ))}
    </div>
  );
};

type SectionProps = {
  termSection: TermSection;
};

const Section = ({ termSection }: SectionProps) => {
  return (
    <TextSection>
      <Header text={termSection.header} />

      {termSection.subsections.map((subsection, index) => (
        <Subsection key={`subsection-${index}`} termSubsection={subsection} />
      ))}
    </TextSection>
  );
};

type SubsectionProps = {
  termSubsection: TermSubsection;
};

const Subsection = ({ termSubsection }: SubsectionProps) => {
  return (
    <div>
      {termSubsection.subheader ? (
        <Subheader text={termSubsection.subheader} />
      ) : (
        <></>
      )}

      <BulletPoint text={termSubsection.text} />
    </div>
  );
};
