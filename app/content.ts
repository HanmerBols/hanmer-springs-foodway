import {
  Category,
  CategoryClassNames,
  CategoryPaths,
  DailySpecials,
  DayOfTheWeek,
} from "./types";

export const GOOGLE_ANALYTICS_ID = "G-MVTNC9MC3X";

export const HANMER_SPRINGS_FOODWAY_NAME = "Hanmer Springs Foodway";
export const HANMER_SPRINGS_FOODWAY_DESCRIPTION = "Enjoy food your way";

export const AFFILIATES_INTRO_TEXT = "Right Next Door";
export const HANMER_WOOLSHED_NAME = "Hanmer Woolshed";
export const HANMER_WOOLSHED_URL = "https://hanmerwoolshed.co.nz/";

export const LOGO_IMAGE_PATH = "/hanmer_springs_foodway_logo.png";
export const HOME_URL = "/";

export const WEEKLY_SALE_BUTTON_TEXT = "Weekly Sale!";
export const WEEKLY_SALE_URL = "/weekly_sale";

export const ORDER_BUTTON_TEXT = "Order Now";
export const ORDERING_SYSTEM_URL = "https://order.sipocloudpos.com/hsfoodway";

export const BANNER_TITLE = "Enjoy Food Your Way.";
export const BANNER_SUBTITLE =
  "Wide selection of noodles and food bowls, crafted to your taste.";
export const BANNER_PATH_MOBILE = "/landing_page/banner_mobile.png";
export const BANNER_PATH_DESKTOP = "/landing_page/banner_desktop.webm";
export const VIDEO_NOT_SUPPORTED_TEXT =
  "Your browser does not support the videos.";

export const INTRO_FIRST_LINE = "Welcome to your";
export const INTRO_SECOND_LINE = "One Stop Convenience Shop";

export const CATEGORIES: Category[] = [
  "Boba Drinks",
  "Noodles",
  "Quick Bites",
  "Snacks",
  // "Bols",
];

export const CATEGORY_CLASS_NAMES: CategoryClassNames = {
  "Boba Drinks": "boba_drinks",
  Noodles: "noodles",
  "Quick Bites": "quick_bites",
  Snacks: "snacks",
  // Bols: "bols",
};

const ONLINE_ORDERING_SYSTEM_URL = "https://order.sipocloudpos.com/hsfoodway";

export const CATEGORY_PATHS: CategoryPaths = {
  "Boba Drinks": `${ONLINE_ORDERING_SYSTEM_URL}/#bobadrinks`,
  Noodles: `${ONLINE_ORDERING_SYSTEM_URL}/#noodles`,
  "Quick Bites": `${ONLINE_ORDERING_SYSTEM_URL}/#quickbites`,
  Snacks: `${ONLINE_ORDERING_SYSTEM_URL}/#snacks`,
  // Bols: "/bols",
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
    name: "Bulgogi Bol",
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

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.525757186492!2d172.8273702760544!3d-42.52288517117818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d306303863472c9%3A0x99c0713021842c4b!2sHanmer%20Springs%20Foodway!5e0!3m2!1sen!2snz!4v1718272202335!5m2!1sen!2snz";

export const ADDRESS = "45 Amuri Avenue, Hanmer Springs 7334";
export const OPENING_HOURS = "Open Mon - Sat: 9 am - 8 pm";

export const ENQUIRIES_TEXT = "For enquiries, reach out to us at";
export const EMAIL_ADDRESS = "info@hanmerfoodway.co.nz";
export const PHONE_NUMBER = "021 086 727 93";

export const COPYRIGHT_TEXT = "Hanmer Foodway 2024.";

export const TERMS_AND_CONDITIONS_TEXT = "Terms & Conditions";
export const TERMS_AND_CONDITIONS_URL = "/terms_and_conditions";

export const PRIVACY_POLICY_TEXT = "Privacy Policy";
export const PRIVACY_POLICY_URL = "/privacy_policy";

export const ORDERING_SYSTEM_ADMIN_TEXT = "Admin";
export const ORDERING_SYSTEM_ADMIN_URL = "https://admin.sipocloudpos.com";

export const NOT_FOUND_ERROR_TITLE = "404 Error";
export const NOT_FOUND_ERROR_DESCRIPTION =
  "Unable to find what you are looking for";
export const RETURN_HOME_TEXT = "Back to home";
