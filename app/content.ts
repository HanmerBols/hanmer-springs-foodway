import {
  Category,
  CategoryClassNames,
  CategoryPaths,
  DailySpecials,
  DayOfTheWeek,
} from "./types";

export const WEBSITE_TITLE = "Hanmer Springs Foodway";
export const WEBSITE_DESCRIPTION = "Enjoy food your way";

export const LOGO_IMAGE_PATH = "/hanmer_springs_foodway_logo.png";
export const LOGO_DESCRIPTION = "Hanmer Springs Foodway";

export const WEEKLY_SALE_BUTTON_TEXT = "Weekly Sale!";
export const ORDER_BUTTON_TEXT = "Order Now";

export const BANNER_TITLE = "Enjoy Food Your Way.";
export const BANNER_SUBTITLE =
  "Wide selection of noodles and food bowls, crafted to your taste.";

export const INTRO_FIRST_LINE = "Welcome to your";
export const INTRO_SECOND_LINE = "One Stop Convenience Shop";

export const CATEGORIES: Category[] = [
  "Noodles",
  "Bols",
  "Quick Bites",
  "Groceries & Snacks",
];

export const CATEGORY_CLASS_NAMES: CategoryClassNames = {
  Noodles: "noodles",
  Bols: "bols",
  "Quick Bites": "quick_bites",
  "Groceries & Snacks": "groceries_and_snacks",
};

export const CATEGORY_PATHS: CategoryPaths = {
  Noodles: "/noodles/",
  Bols: "/bols/",
  "Quick Bites": "",
  "Groceries & Snacks": "",
};

export const DAILY_SPECIALS_HEADER = "Today's Special";
export const DAILY_SPECIALS_SUBHEADER = "오늘의 스페셜";

export const DAYS_OF_THE_WEEK: DayOfTheWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const FIRST_DAY_OF_THE_WEEK = DAYS_OF_THE_WEEK[0];
export const LAST_DAY_OF_THE_WEEK = DAYS_OF_THE_WEEK[-1];

export const DAILY_SPECIALS: DailySpecials = {
  Monday: {
    imagePath: "/landing_page/daily_specials/0_monday.png",
    name: "Bibimbap Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description:
      'Korean mixed rice with veggies (bean sprouts, kale, pickled radish, zucchini, mushroom, carrots, edamame) and your choice of crispy tofu, chicken bulgogi, or beef bulgogi. Topped with sunny side up egg and house "gochujang" sauce on the side.',
  },
  Tuesday: {
    imagePath: "/landing_page/daily_specials/1_tuesday.png",
    name: "Chicken Bulgogi Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description: "Rice bowl with chargrilled marinated chicken thighs.",
  },
  Wednesday: {
    imagePath: "/landing_page/daily_specials/2_wednesday.png",
    name: "Bibimbap Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description: "Rice bowl with Korean marinated thinly sliced beef.",
  },
  Thursday: {
    imagePath: "/landing_page/daily_specials/3_thursday.png",
    name: "Spicy Bulgogi Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description: "Rice bowl with marinated Korean spicy pork.",
  },
  Friday: {
    imagePath: "/landing_page/daily_specials/4_friday.png",
    name: "Chicken Donkatsu Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description:
      "Rice bowl with panko breaded chicken breast katsu, topped with donkatsu (Asian BBQ) and chipotle aioli.",
  },
  Saturday: {
    imagePath: "/landing_page/daily_specials/5_saturday.png",
    name: "Donkatsu Chicken Bao",
    discountedPrice: 16,
    regularPrice: 24,
    description:
      "Bao bun stuffed with panko fried chicken breast, cilantro,carrots, pickled radish, walnuts, and housemade brown sauce. 2pc",
  },
  Sunday: {
    imagePath: "/landing_page/daily_specials/6_sunday.png",
    name: "Sweet Chilli Chicken Bol",
    discountedPrice: 16,
    regularPrice: 24,
    description:
      "Crispy fried chicken wings tossed in Korean sweet & spicy sauce. 8pc",
  },
};

export const REGULAR_PRICE_TEXT = "Regular Price";
export const ADD_TO_CART_TEXT = "Add to Cart";

export const LOCATION_HEADER = "Location";
export const LOCATION_DESCRIPTION =
  "Pssst we're conveniently located just across the Hot Pools!";

export const ADDRESS = "45 Amuri Avenue, Hanmer Springs 7334";
export const OPENING_HOURS = "Open Mon - Sat: 9 am - 8 pm";

export const ENQUIRIES_TEXT = "For enquiries, reach out to us at";
export const EMAIL_ADDRESS = "hanmerbols@gmail.com";
export const PHONE_NUMBER = "021 086 727 93";

export const COPYRIGHT_TEXT = "Hanmer Foodway 2024.";
