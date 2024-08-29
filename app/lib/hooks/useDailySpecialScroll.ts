import { DAYS_OF_THE_WEEK } from "@/app/content";
import { DayOfTheWeek } from "@/app/types";
import { RefObject, useEffect, useRef } from "react";
import { getTodaysDayOfTheWeek } from "../dates";
import { MOBILE_MAX_WIDTH, useDeviceWidth } from "./useDeviceWidth";

export const useDailySpecialScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  const deviceWidth = useDeviceWidth();
  const scrollAmount = deviceWidth - DAILY_SPECIAL_MARGIN_PIXELS;

  const scrollLeft = () => ref.current?.scrollBy(-scrollAmount, 0);
  const scrollRight = () => ref.current?.scrollBy(scrollAmount, 0);

  useEffect(
    () => scrollToTodaysDailySpecial(ref, deviceWidth, scrollAmount),
    [],
  );

  return {
    ref,
    scrollLeft,
    scrollRight,
  };
};

const scrollToTodaysDailySpecial = (
  ref: RefObject<HTMLDivElement>,
  deviceWidth: number,
  scrollAmount: number,
) => {
  if (deviceWidth >= MOBILE_MAX_WIDTH) {
    return;
  }

  const todaysDayOfTheWeek = getTodaysDayOfTheWeek();
  const todaysXCoordinate = getTodaysDailySpecialXCoordinate(
    todaysDayOfTheWeek,
    scrollAmount,
  );

  ref.current?.scrollTo(todaysXCoordinate, 0);
};

const getTodaysDailySpecialXCoordinate = (
  todaysDayOfTheWeek: DayOfTheWeek,
  scrollAmount: number,
) => {
  const offset = DAILY_SPECIAL_MARGIN_PIXELS / 2;
  const index = DAYS_OF_THE_WEEK.indexOf(todaysDayOfTheWeek);
  return offset + scrollAmount * index;
};

const DAILY_SPECIAL_MARGIN_PIXELS = 16;
