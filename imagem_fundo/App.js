import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';

const caminho_foto = { uri: 'https://i.gifer.com/4Snl.gif' };
// const caminho_foto = require('./assets/imagem.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={caminho_foto}
        style={[styles.image, {width: '100%', height:'100%'}]}>


      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%', 
    height:'100%'
  },

});
