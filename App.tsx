import type React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { useFonts } from './src/utils/fonts/Fonts';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default () => {

  const fontsLoaded = useFonts()
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.safeArea}><BottomTabNavigator /></SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
});