import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../config';
import { AppContextContainer } from '../context';
import { store } from '../state/store';
import { AppNavigator } from '../navigators';

const App = () => (
  <Provider store={store}>
    <AppContextContainer>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </AppContextContainer>
  </Provider>
);

export default App;
