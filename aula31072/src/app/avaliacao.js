import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tela}>
      <View style={styles.corDeFundo}>
       <View style={styles.caixaMaior}></View>
        <View style={styles.caixaMenor}></View>
       <View>
        <Text style={styles.textoAzul}>REACT NATIVE</Text>
        <Text style={styles.textoLaranja}>Avaliacao dia 04/09</Text>
       </View>
      
      </View>
      <View style={styles.meioTela}>
    <View style={styles.caixaRetangulo}>
    <Text style={styles.textoLaranja}>Batatas sao superestimadas</Text>
  </View>
 <View style={styles.caixaPequena}>
    <Text style={styles.textoPequeno}>ENVIAR</Text>
  </View>
    </View>
    
    </View>
    
  );
};


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#daf1f5",
  },

  textoAzul: {
    color: "#070707",
    fontSize: 20,
    fontWeight: 'bold',
  },

  textoLaranja: {
    color: "#474744",
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
    backgroundColor: "#002e83",
    borderRadius: 50,
  },

  caixaRetangulo: {

    width: 350,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 10,

    justifyContent: "center",
   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
   
    

  },
 meioTela: {
    
flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 20,
    borderColor: "#daf1f5",
    borderWidth: 1,
    alignItems: "center",
    height: 500,
  },

   caixaPequena: {

    width: 150,
    height: 30,
    backgroundColor: "#360bd3",
  

    justifyContent: "center",
   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
   
  

  },
 
  textoPequeno: {
    color: "#fcfcfc",
  },
});