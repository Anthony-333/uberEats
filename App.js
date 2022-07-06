import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

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
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.restaurantContainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
          }}
          style={styles.image}
        />
        <Text style={styles.name}>El Cabo Coffe Bar Tres De Mayo</Text>
        <Text style={styles.name}>$1.99</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 4,
  },
});

export default App;
