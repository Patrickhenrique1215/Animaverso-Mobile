import 'react-native-gesture-handler';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import { useFonts, MouseMemoirs_400Regular } from '@expo-google-fonts/mouse-memoirs';

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'Mouse': MouseMemoirs_400Regular,
  });

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('#000000');
    NavigationBar.setButtonStyleAsync('light');
  }, []);

  if (!fontsLoaded) return null; 

  return (
    <SafeAreaView style={styles.container} edges={['top','bottom','left','right']}>
      <StatusBar style="light" backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
          headerShown: false, 
          statusBarHidden: false, 
          statusBarStyle: 'light' 
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
