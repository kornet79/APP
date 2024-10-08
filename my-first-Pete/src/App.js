import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screen/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={{ fontSize: 30 }}>ToDo App</Text>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
