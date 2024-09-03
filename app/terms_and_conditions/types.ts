export type TermsAndConditions = TermSection[];

export type TermSection = {
  header: string;
  subsections: TermSubsection[];
};

export type TermSubsection = {
  subheader?: string;
  text: string;
};
