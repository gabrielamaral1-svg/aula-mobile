import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { View, Text, TextInput, Button, FlatList, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
 const [texto, setTexto] = useState('');
  const [lista, setLista] = useState(['batata', 'cebola']);

  const adicionarItem = () => {
    if (texto.trim() !== '') {
      setLista([...lista, texto]);
      setTexto(''); // Limpa o campo após adicionar
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTexto}
          value={texto}
        />
      </View>

      {/* Envolvido numa View apenas para controlar as margens e a largura */}
      <View style={styles.buttonWrapper}>
        <Button 
          title="ADICIONAR" 
          onPress={adicionarItem} 
          color="#2196F3" 
        />
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 15,
    
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonWrapper: {
    marginHorizontal: 100, // Limita a largura do botão nativo
    marginBottom: 50,
  },
  item: {
    backgroundColor: '#424242',
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 30,
  },
  itemText: {
    color: '#fff',
  },
});