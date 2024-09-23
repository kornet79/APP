import { StyleSheet, Text, View } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ch4_assets/test.png')}
        style={style.Image}
      />
      <Text>SignIn Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SignInScreen;
