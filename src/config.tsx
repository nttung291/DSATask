import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  getScaledValue,
  isPlatformMacos,
  isPlatformIos,
  isPlatformTvos,
  isPlatformWeb,
} from '@rnv/renative';
import '../platformAssets/runtime/fontManager';
import CONFIG from '../platformAssets/renative.runtime.json';
import ICON_LOGO from '../platformAssets/runtime/logo.png';

export function testProps(testId: string | undefined) {
  if (!testId) {
    return;
  }
  const isApplePlatform = isPlatformIos || isPlatformTvos || isPlatformMacos;
  if (isApplePlatform || isPlatformWeb) {
    return { testID: testId };
  }
  return { accessibilityLabel: testId, accessible: true };
}

console.disableYellowBox = true; // eslint-disable-line

if (!global.performance) {
  // @ts-expect-error Performance needs to be typed
  global.performance = {};
}

if (typeof global.performance.now !== 'function') {
  global.performance.now = function () {
    const performanceNow = global.nativePerformanceNow || Date.now;
    return performanceNow();
  };
}

const staticTheme = {
  primaryFontFamily: 'Inter-Light',
  iconSize: getScaledValue(20),
  buttonSize: getScaledValue(30),
  colorLight: '#FFFFFF',
  colorBrand: '#0A74E6',
};

const staticThemes = {
  dark: {
    colorBgPrimary: '#000000',
    colorAbgPrimary: '#FFFFFF',
    colorTextPrimary: '#FFFFFF',
    colorATextPrimary: '#000000',
    colorTextSecondary: '#AAAAAA',
    ...staticTheme,
  },
  light: {
    colorBgPrimary: '#FFFFFF',
    colorAbgPrimary: '#000000',
    colorTextPrimary: '#000000',
    colorATextPrimary: '#FFFFFF',
    colorTextSecondary: '#333333',
    ...staticTheme,
  },
};

const createStyleSheet = currentTheme =>
  StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: getScaledValue(50),
      minHeight: getScaledValue(300),
      paddingHorizontal: getScaledValue(16),
      alignSelf: 'stretch',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: currentTheme.colorBgPrimary,
    },
    textH2: {
      fontFamily: currentTheme.primaryFontFamily,
      fontSize: getScaledValue(20),
      marginHorizontal: getScaledValue(20),
      color: currentTheme.colorTextPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    textH3: {
      fontFamily: currentTheme.primaryFontFamily,
      fontSize: getScaledValue(15),
      marginHorizontal: getScaledValue(20),
      marginTop: getScaledValue(5),
      color: currentTheme.colorTextSecondary,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    image: {
      marginBottom: getScaledValue(30),
      width: getScaledValue(93),
      height: getScaledValue(90),
    },
    button: {
      margin: 10,
      padding: 10,
      backgroundColor: currentTheme.colorBrand,
      borderRadius: 10,
    },
    buttonText: {
      fontFamily: currentTheme.primaryFontFamily,
      fontSize: getScaledValue(15),
      color: currentTheme.colorLight,
    },
    centerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      flex: 1,
      minWidth: getScaledValue(300),
      backgroundColor: currentTheme.colorAbgPrimary,
      padding: getScaledValue(16),
      margin: getScaledValue(10),
      borderRadius: 8,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
    },
    cardImage: {
      width: getScaledValue(120),
      height: getScaledValue(150),
      borderWidth: 0.1,
      borderRadius: 6,
      overflow: 'hidden',
    },
    cardTextH2: {
      fontFamily: currentTheme.primaryFontFamily,
      fontSize: getScaledValue(16),
      marginHorizontal: getScaledValue(8),
      color: currentTheme.colorATextPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    cardTextBody: {
      fontFamily: currentTheme.primaryFontFamily,
      fontSize: getScaledValue(12),
      marginHorizontal: getScaledValue(12),
      color: currentTheme.colorATextPrimary,
      alignItems: 'center',
      textAlign: 'center',
      paddingVertical: getScaledValue(8),
    },
    carouseImageContainer: {
      height: getScaledValue(400),
      width: getScaledValue(400),
    },
    carouseImage: {
      height: getScaledValue(400),
      width: getScaledValue(400),
    },
  });

const themes = {
  light: {
    static: { ...staticThemes.light },
    styles: createStyleSheet(staticThemes.light),
  },
  dark: {
    static: { ...staticThemes.dark },
    styles: createStyleSheet(staticThemes.dark),
  },
};

export const ThemeContext = createContext<any | null>(themes.dark);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const themeStyles = themes.dark.styles;

export { CONFIG, ICON_LOGO };

export default staticThemes.dark;
