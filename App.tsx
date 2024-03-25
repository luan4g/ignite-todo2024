import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Dashboard from './src/screens/Dashboard';

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsloaded) {
    return null
  }

  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Dashboard />
    </>
  );
}
