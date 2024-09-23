import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Expo React Native');

  const name = 'Gyumin';
  const isFullname = true;

  const add = (a, b) => {
    return a + b;
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>a + 2 = {add(1, 2)}</Text>
      <Text>{isFullname ? name + ' kim' : name}</Text>
      <StatusBar style="auto" />
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
