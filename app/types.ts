export type Category =
  | "Noodles"
  | "Bols"
  | "Quick Bites"
  | "Groceries & Snacks";

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
