import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>verde</Text>
          <Button
  title="BOTAO"
  color="#ff0000"
  accessibilityLabel="Learn more about this purple button"></Button>
      
  <Pressable>
  <Text>I'm pressable!</Text>
</Pressable>

<TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD">
    <Text>GOOGLE</Text> 
</TouchableHighlight>;
    
      <StatusBar style="auto" />
     </View>
 



);



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
