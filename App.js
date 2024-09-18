import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import CustomSplashScreen from './components/SplashScreen';

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  console.log(Dimensions.get('screen'));

  useEffect(() => {
    async function prepare() {
      await new Promise(resolve => setTimeout(resolve, 5000)); 
      setAppReady(true);
      await SplashScreen.hideAsync();
    }

    prepare();
  }, []);

  if (!isAppReady) {
    return <CustomSplashScreen />; 
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
