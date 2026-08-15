import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.corDeFundo}>
       <View style={styles.caixaMaior}></View>
        <View style={styles.caixaMenor}></View>
       <View>
        <Text style={styles.textoAzul}>Ola Estudante</Text>
        <Text style={styles.textoAzul}>Bem Vindo</Text>
       </View>
        
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#3C3C3C",
  },

  textoAzul: {
    color: "#ff0000",
    fontSize: 20,
  },

  textoLaranja: {
    color: "#FFA500",
  },

  corDeFundo: {
    flexDirection: "row",
    gap: 10,
   

    alignItems: "center",
    height: 100,
  },

  caixaMaior: {
    gap: 30,
  },

  caixaMenor: {

    width: 50,
    height: 50,
    backgroundColor: "#3f19ff",
    borderRadius: 50,
  },
  });
