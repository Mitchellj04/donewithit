import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  const {landscape} = useDeviceOrientation()

  const handlePress = () => {
    console.log('Pressed Text')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>This is a new app </Text>
      <View style={{  backgroundColor: 'blue',
  width: '100%',
  height: landscape ? '100%' : '50%'}}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    // justifyContent: 'center',
    // alignItems: 'center',
    color: 'white'
  },
});
