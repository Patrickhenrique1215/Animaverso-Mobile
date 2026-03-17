import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';

import { useFonts, MouseMemoirs_400Regular } from '@expo-google-fonts/mouse-memoirs';

const Stack = createStackNavigator();

export default function App() {
  
  let [fontsLoaded] = useFonts({
    'Mouse': MouseMemoirs_400Regular,
  });

  if (!fontsLoaded) return null; // Segura a renderização até carregar

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <StatusBar style="auto" />
      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  );
}