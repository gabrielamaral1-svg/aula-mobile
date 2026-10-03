import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("floricultura.db");


db.execSync(`
    CREATE TABLE IF NOT EXISTS floricultura (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(255) NOT NULL,
      cor VARCHAR(255) NOT NULL,
      ciename VARCHAR(255) NOT NULL

    )
  `);

function listar() {
  return db.getAllSync("SELECT * FROM floricultura ORDER BY id DESC");
}

function salvar(nome, cor, ciename) {
  db.runSync("INSERT INTO floricultura (nome, cor, ciename) VALUES (?, ?, ?)", [nome, cor, ciename]);
}

function excluir(codigo) {
  db.runSync("DELETE FROM floricultura WHERE id = ?", [codigo]);
}

function edita(nome, cor, id, ciename) {
  db.runSync("UPDATE floricultura SET nome = ?, cor = ?, ciename = ? WHERE id = ?", [
    nome,
    cor,
    id,
    ciename,
  ]);
}

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [ciename, setCiename] = useState("");

  const [idEditando, setIdEditando] = useState(0);

  function carregar() {
    setLista(listar());
  }

  function guardarOuEditar() {
    if (idEditando === 0) {
      salvar(nome, cor, ciename);
    } else {
      edita(nome, cor, ciename, idEditando);
    }
    setNome("");
    setCor("");
    setCiename("");
    setIdEditando(0);
    carregar();
  }

  function remover(codigo) {
    excluir(codigo);
    carregar();
  }

  function editar(flor) {
    setIdEditando(flor.id);
    setNome(flor.nome);
    setCor(flor.cor);
    setCiename(flor.ciename);
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Minhas flores" }} />
      
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome da flor"
      />
      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Cor da flor"
      />
      
      <TextInput
        style={styles.campo}
        value={ciename}
        onChangeText={setCiename}
        placeholder="Nome Cientifico"
      />
      
      <Button title="Salvar" onPress={guardarOuEditar} />

      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>
              {item.id} - {item.nome} - {item.cor} - {item.ciename}
            </Text>
            <Button
              title="Editar"
              onPress={() => {
                editar(item);
              }}
            />
            <Button
              title="Excluir"
              onPress={() => {
                remover(item.id);
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#e41788",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  campo: {
    borderWidth: 5,
    borderColor: "#500633",
    padding: 12,
    fontSize: 16,
    color: "#eb69e0",
    marginBottom: 19,
  },

  lista: {
    flex: 1,
    marginTop: 20,
  },

  item: {
    backgroundColor: "#f051bb",
    padding: 16,
    marginBottom: 10,
    fontSize: 15,
    color: "#e2d8e1",
  },
});