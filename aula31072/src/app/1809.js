import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";

export default function Carinha() {
 const[carinha, setCarinha] = useState(";]");
 
 return (
    <SafeAreaView style={styles.tela}>
      <Stack.Screen options={{headerShown: false, title: "Perfil"}}/>
      <Button
      title="triste dms"
      onPress={() => {setCarinha(":(");

      }}
      />
  <Text>{carinha}</Text>
<Button  
    title="feliz mente"
      onPress={() => {setCarinha(":)");
}}
/>
<Button  
    title="neutro saboroso"
      onPress={() => {setCarinha(":|");
}}
/>
</SafeAreaView> 
)};



const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f0f0f0",
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