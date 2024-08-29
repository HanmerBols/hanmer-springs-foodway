import { DayOfTheWeek } from "../types";

export const getTodaysDayOfTheWeek = () => {
  const todaysDate = new Date();
  return SYSTEM_DAYS_OF_THE_WEEK[todaysDate.getDay()];
};

const SYSTEM_DAYS_OF_THE_WEEK: DayOfTheWeek[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
