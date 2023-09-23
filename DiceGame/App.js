import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
       <TouchableOpacity style={styles.btn} onPress={() => alert(Math.ceil(Math.random() * 6))}>
      <Text>Play game</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={() => console.log('Button pressed')}>
      <Text>History of games</Text>
    </TouchableOpacity>
   
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  }
});
