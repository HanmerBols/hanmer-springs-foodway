import { MOBILE_MAX_WIDTH, useDeviceWidth } from "./useDeviceWidth";

export const useMobileDetection = () => {
  const deviceWidth = useDeviceWidth();
  return deviceWidth <= MOBILE_MAX_WIDTH;
};
