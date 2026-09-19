import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreen } from "react-native-screens";

export default function Carinha() {
 const[carinha, setCarinha] = useState(";]");
   const [valor, setValor] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function aumentarValor() {
    setValor(valor + 1); 
  }
 
  function diminuirValor() {
    setValor(valor - 1); 
  }
 
  useEffect(() => {
    console.log("valor mudou para", valor);
  }, [valor]);
 

   function normalizarValor() {
    setValor(valor == 1); 
  }
 

  const tituloBotao = mostrar ? "Esconder detalhes" : "Mostrar detalhes";

   return (
       <SafeAreaView style={styles.tela} edges={["bottom"]}>
         <Stack.Screen options={{ title: "Minhas notas" }} />
   
         <View style={styles.cartao}>
           <Text style={styles.cartaoTitulo}>CONTADOR</Text>
           <View/>
           <Text style={styles.cartaoTitulo}>{valor}</Text>          
           <Button title="Aumentar valor +" onPress={aumentarValor} />
         </View>
             <View style={styles.cartao}>
           <Button title="Dimunuir valor -" onPress={diminuirValor} />
         </View>
           <View style={styles.cartao}>
           <Button title="Normalizar -" onPress={normalizarValor} />
         </View>
         
         

   
   
        
         <View style={styles.rodape}>
           <Button title="VOLTAR" onPress={() => router.back()} />
         </View>
       </SafeAreaView>
     );
   }


const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#f0f0f0",
     flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 0,
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

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 8,
    
   
  },

  cartaoTitulo: {
    fontSize: 28,
    fontWeight: "600",
    color: "#111827",
     justifyContent: "center",
        flexDirection: "column",
   textAlign: "center",
    alignItems: "stretch",
    gap: 80,
   
  },

  nota: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2354D6",
  },

  detalhe: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 10,
    lineHeight: 20,
  },

  rodape: {
    marginTop: "auto",
    marginBottom: 16,
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

});