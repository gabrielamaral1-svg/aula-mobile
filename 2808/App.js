import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (


    <View style={styles.tela}>
      <View style={styles.palco}>
        <Text style={styles.textoTitulo}>WhatsApp</Text>
      </View>
      <View style={styles.subcaixa}>
        <Text style={styles.textoSub}>CALLS</Text>
        <Text style={styles.textoSub}>CHATS</Text>
        <Text style={styles.textoSub}>CONTACTS</Text>

      </View>
      <View style={styles.corDeFundo}>
        <View style={styles.caixaMaior}></View>

        <View style={styles.caixaMenor}></View>
        <View>
          <View style={styles.corretorTexto}>
            <Text style={styles.textoCima}>Gabriel O Bom</Text>

            <Text style={styles.textoLado}>28/08/2026</Text>
          </View>

          <Text style={styles.textoBaixo}>Fui morto</Text>

        </View>

      </View>

      <View>
        <View style={styles.corDeFundo}>
          <View style={styles.caixaMaior}></View>
          <View style={styles.caixaMenor}></View>
          <View>
            <View style={styles.corretorTexto}>
              <Text style={styles.textoCima}>Manu</Text>
              <Text style={styles.textoLado}>28/08/2026</Text>
            </View>

            <Text style={styles.textoBaixo}>Bem Vindo</Text>

          </View>

        </View>
      </View>
      <View>
        <View style={styles.corDeFundo}>
          <View style={styles.caixaMaior}></View>
          <View style={styles.caixaMenor}></View>
          <View>
            <View style={styles.corretorTexto}>
              <Text style={styles.textoCima}>Chaveiro</Text>
              <Text style={styles.textoLado}>28/08/2026</Text>
            </View>

            <Text style={styles.textoBaixo}>Bem Vindo</Text>

          </View>

        </View>
      </View>
      <View>
        <View style={styles.corDeFundo}>
          <View style={styles.caixaMaior}></View>
          <View style={styles.caixaMenor}></View>
          <View>
            <View style={styles.corretorTexto}>
              <Text style={styles.textoCima}>Alexandre O Grande</Text>
              <Text style={styles.textoLado}>28/08/2026</Text>
            </View>

            <Text style={styles.textoBaixo}>Bem Vindo</Text>

          </View>

        </View>
      </View>
      <View>
        <View style={styles.corDeFundo}>
          <View style={styles.caixaMaior}></View>
          <View style={styles.caixaMenor}></View>
          <View>
            <View style={styles.corretorTexto}>
              <Text style={styles.textoCima}>Bellzebu</Text>
              <Text style={styles.textoLado}>28/08/2026</Text>
            </View>

            <Text style={styles.textoBaixo}>Bem Vindo</Text>

          </View>

        </View>
      </View>
      <View>
        <View style={styles.corDeFundo}>
          <View style={styles.caixaMaior}></View>
          <View style={styles.caixaMenor}></View>
          <View>
            <View style={styles.corretorTexto}>
              <Text style={styles.textoCima}>Carne Vegana</Text>
              <Text style={styles.textoLado}>28/08/2026</Text>
            </View>

            <Text style={styles.textoBaixo}>Bem Vindo</Text>

          </View>

        </View>
      </View>
      <View>


      </View>

    </View>

  );
};


const styles = StyleSheet.create({
  tela: {
    fontWeight: 80,
    flex: 1,
    paddingTop: 0,
    backgroundColor: "#ddece0",
  },

  textoCima: {
    color: "#130202",
    fontSize: 20,
    fontWeight: 'bold',
  },

  textoBaixo: {
    color: "#a19a9a",
  },

  corDeFundo: {
    flexDirection: "row",
    gap: 10,
    borderColor: "rgb(216, 215, 219)",
    borderWidth: 1,
    alignItems: "center",
    height: 100,
  },

  caixaMaior: {
    gap: 10,
  },

  caixaMenor: {
    borderColor: "rgb(182, 177, 177)",
    borderWidth: 1,
    width: 50,
    height: 50,
    backgroundColor: "#b5b4bd",
    borderRadius: 50,
  },

  palco: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "#075e54",

    height: 150,
  },
  textoTitulo: {
    color: "#fcfcfc",
    fontSize: 24,
    fontWeight: 'bold',
    gap: 10,
  },

  topo: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 10,
    backgroundColor: "#044139",
    flex: 1,

  },

  subcaixa: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
    backgroundColor: "#046356",
    height: 50,
  },

  textoSub: {
    color: "#c7c5c5",
    fontSize: 16,
    fontWeight: 'bold',
    gap: 10,
  },

  corretorTexto: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  textoLado: {
    color: "#a19a9a",
    fontSize: 15,


  },

});