import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

// Fora do componente: o banco abre uma vez. O arquivo fica no aparelho —
// fechar o app não apaga. A tela /lista continua só na memória.
const db = SQLite.openDatabaseSync("bordel.db");

db.execSync(`
 
  CREATE TABLE IF NOT EXISTS bordel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL,
    cor TEXT NOT NULL
  );
`);

function listar() {
  return db.getAllSync("SELECT * FROM bordel ORDER BY id DESC");
}

function adicionar(texto, cor ) {
  db.runSync("INSERT INTO bordel (texto, cor) VALUES (?, ?)", [texto, cor]);
   
}

function excluir(id) {
  db.runSync("DELETE FROM bordel WHERE id = ?", [id]);
}

export default function ListaDb() {
  const [texto, setTexto] = useState("");
  const [cor, setCor] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  function salvar() {
    adicionar(texto);
    adicionar(cor);
    setTexto("");
    setCor("");
    carregar();
  }

  function remover(id) {
    excluir(id);
    carregar();
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Tarefas no banco" }} />

      <TextInput
        style={styles.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa"
      />

     <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Nova COR"
      />

      <Button title="Adicionar" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.texto}
              {item.texto} - {item.cor}
              </Text>
            <Button title="Excluir" onPress={() => remover(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  itemTexto: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },
});