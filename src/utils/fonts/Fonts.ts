import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Caveat': require('../../../assets/fonts/Caveat-VariableFont_wght.ttf'),
      'PatrickHand-Regular':require('../../../assets/fonts/PatrickHand-Regular.ttf')
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded;
};