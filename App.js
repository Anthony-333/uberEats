import React from 'react';

import {SafeAreaView, StatusBar, useColorScheme, FlatList} from 'react-native';

import restaurants from './assets/data/restaurants.json';

import RestaurantItem from './src/components/RestaurantItem';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light' : 'dark'} />

      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;
