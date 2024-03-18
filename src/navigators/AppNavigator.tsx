import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens';
import { RootStackParamList } from '../types';

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

const defaultOptions = {
  headerShown: false,
};

export const enum ScreenNavigatorKeys {
  HomeScreen = 'Home',
}
const AppStack = createNativeStackNavigator<RootStackParamList>();
export function ScreensNavigator() {
  return (
    <AppStack.Navigator initialRouteName={ScreenNavigatorKeys.HomeScreen}>
      <AppStack.Screen
        name={ScreenNavigatorKeys.HomeScreen}
        component={HomeScreen}
        options={defaultOptions}
      />
    </AppStack.Navigator>
  );
}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer {...props}>
        <ScreensNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
