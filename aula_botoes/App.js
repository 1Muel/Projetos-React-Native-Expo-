import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const caminho_foto = require('./assets/imagem.png')

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.view_topo}>
        <Text style={styles.h1}>CADASTRO</Text>
        <Image style={styles.imagem} source={caminho_foto} />
      </View>
      
      <View style={styles.container_botoes}>
        <TouchableOpacity style={styles.botoes}>
          <Text style={styles.h2}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes}>
          <Text style={styles.h3}>Entrar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A89F6',
  },
  view_topo: {

    alignItems: 'center',
    flex: 1,
    marginTop: 50,

  },
  botoes: {
    backgroundColor: '#D5D5D5',
    flexDirection: 'column',
    width: 150,
    height: 60,
    // borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    shadowColor: "#00FFC5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  container_botoes: {
    flex: 1,
    flexDirection: "row",
    marginTop:150,
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    // backgroundColor:'red',
  },
  h2: {
    fontSize: 30,
    marginBottom: 10,
  },
  h3: {
    fontSize: 30,
    marginBottom: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    marginTop:100,

  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#6A89F6',
//   },
//   view_topo: {

//     alignItems: 'center',
//     flex: 1,
//     marginTop: 50
//   },
//   botoes: {
//     backgroundColor: '#D5D5D5',
//     flexDirection: 'column',
//     width: 180,
//     height: 60,
//     // borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 15,
//     shadowColor: "#00FFC5",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.00,

//     elevation: 24,
//   },
//   container_botoes: {
//     flex: 1,
//     flexDirection: "column",
//     marginTop:100,
//   },
//   h1: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     // backgroundColor:'red',
//   },
//   h2: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   h3: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   imagem: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'green',
//     marginTop:80,

//   }
// });