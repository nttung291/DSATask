import { Dimensions, Platform, StatusBar } from 'react-native';
import {
  isFactorMobile,
  isFactorTv,
  isFactorBrowser,
  isFactorDesktop,
  getScaledValue,
} from '@rnv/renative';

const STATUSBAR_DEFAULT_HEIGHT = 20;

export const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');
export const screenResolution =
  W_WIDTH / W_HEIGHT > 1 ? W_WIDTH / W_HEIGHT : W_HEIGHT / W_WIDTH;
export const [shortDimension, longDimension] =
  W_WIDTH < W_HEIGHT ? [W_WIDTH, W_HEIGHT] : [W_HEIGHT, W_WIDTH];

export const imageResolution = 4 / 6;

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;

export function getStatusBarHeight(skipAndroid?: boolean) {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}

export const getCarouselWidth = () => {
  switch (true) {
    case isFactorTv:
    case isFactorBrowser:
    case isFactorDesktop:
      return s(100);
    case isFactorMobile:
      return s(200);
    default:
      return s(150);
  }
};
export const getCarouselHeight = () => {
  switch (true) {
    case isFactorTv:
    case isFactorBrowser:
    case isFactorDesktop:
      return s(100) / imageResolution;
    case isFactorMobile:
      return s(200) / imageResolution;
    default:
      return s(200) / imageResolution;
  }
};
