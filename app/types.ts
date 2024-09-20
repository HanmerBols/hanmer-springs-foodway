export type Category = "Boba Drinks" | "Noodles" | "Quick Bites" | "Snacks";
// | "Bols";

export type CategoryClassNames = {
  [category in Category]: string;
};

export type CategoryPaths = {
  [category in Category]: string;
};

export type DayOfTheWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type DailySpecials = {
  [dayOfTheWeek in DayOfTheWeek]: DailySpecial;
};

export type DailySpecial = {
  imagePath: string;
  name: string;
  discountedPrice: number;
  regularPrice: number;
  description: string;
};

export type SectionContent = {
  header: string;
  leadingText?: string;
  points?: PointContent[];
  endingText?: string;
};

export type PointContent = {
  subheader?: string;
  text: string;
};
