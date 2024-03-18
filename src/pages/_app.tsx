import React from 'react';
import { useRouter } from 'next/router';
import { View } from 'react-native';
import { themeStyles, ThemeProvider } from '../config';
import { Provider } from 'react-redux';
import { AppContextContainer } from '../context';
import { store } from '../state/store';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <AppContextContainer>
        <ThemeProvider>
          <View style={themeStyles.container}>
            <Component {...pageProps} />
          </View>
        </ThemeProvider>
      </AppContextContainer>
    </Provider>
  );
}
