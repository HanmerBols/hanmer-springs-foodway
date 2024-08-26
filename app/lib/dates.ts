export const getTodaysDayOfTheWeek = () => {
  const todaysDate = new Date();
  return SYSTEM_DAYS_OF_THE_WEEK[todaysDate.getDay()];
};

const SYSTEM_DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
