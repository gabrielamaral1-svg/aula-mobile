import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Este arquivo é a rota "/" — a tela que abre primeiro.
// O nome index é o único com significado especial: index.js de uma pasta é a
// tela daquela pasta.
export default function Inicio() {
  return (
    // edges={["bottom"]}: o cabeçalho já resolveu o topo, sobra a barra de
    // gestos embaixo. Com "bottom" na lista, o topo fica de fora — a
    // SafeAreaView NÃO põe nada lá. O paddingTop do estilo é espaçamento
    // nosso, não área segura: tire e o avatar cola no cabeçalho.
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      {/* Cada tela pode mexer no próprio cabeçalho */}
      <Stack.Screen options={{ title: "minhas adoradas atividades baby" }} />

     

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>1408</Text>
       
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/1408" style={styles.link}>
         ver aula
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>2108</Text>
       
        <Link href="/2108" style={styles.link}>
         ver aula
        </Link>
      </View>

      
      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>2808</Text>
       
        <Link href="/2808" style={styles.link}>
         ver aula
        </Link>
      </View>
 

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>avaliacao</Text>
       
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/avaliacao" style={styles.link}>
         ver aula
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>1809</Text>
       
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/1809" style={styles.link}>
         ver aula
        </Link>
      </View>

      
      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>notas</Text>
       
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/notas" style={styles.link}>
         ver aula
        </Link>
      </View>

       <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>contador</Text>
       
        {/* href é o caminho do arquivo: notas.js vira "/notas" */}
        <Link href="/contador" style={styles.link}>
         ver aula
        </Link>
      </View>




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

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#D9DDE3",
  },

  saudacao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 14,
    color: "#374151",
  },

  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },
});