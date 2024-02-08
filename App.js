import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Resenha: "The Umbrella Academy"
        </Text>
        <Text style={styles.subtitle}>
          "The Umbrella Academy" é uma série de TV baseada nos quadrinhos de Gerard Way e Gabriel Bá. A trama segue sete irmãos adotados com habilidades especiais enquanto tentam desvendar mistérios de seu passado e enfrentam ameaças. A série equilibra humor e drama, destacando a complexidade dos personagens e explorando temas como identidade e relações familiares. Apesar de sua trama densa, oferece uma experiência envolvente para os fãs de ficção científica e super-heróis.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '40%', // Largura do contêiner de texto
    backgroundColor: 'pink',
    borderRadius: 10, // Borda arredondada
    padding: 15, // Espaçamento interno
  },
  title: {
    fontSize: 30,
    backgroundColor: 'white',
    padding: 10,
  },
  subtitle: {
    backgroundColor: 'pink',
    borderColor: 'red',
    borderWidth: 0,
    padding: 10,
  },
});

