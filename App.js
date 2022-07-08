import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {TailwindProvider} from 'tailwindcss-react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

//Screen import
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <TailwindProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light' : 'dark'} />
        <HomeScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default App;
