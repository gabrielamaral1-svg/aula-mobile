import { Stack, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <View style={styles.caixaO}></View>
       <View>
         <View style={styles.rodape}>
               
                <Button title="VOLTAR" onPress={() => router.back()}/> 
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

   caixaO: {

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 0,
  },
  });