import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const caminho_foto = { uri: 'data:image/jpeg;base64,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' };
const whatsapp = require('./assets/icones/whatsapp.png')
const tiktok = require('./assets/icones/tik-tok.png')
const instagram = require('./assets/icones/instagram.png')
const spotify = require('./assets/icones/spotify.png')

export default function App() {
  const [fontsLoaded] = useFonts({
    'fonte_1': require('./assets/fonts/fonte_1.ttf'),
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={caminho_foto}
        style={[styles.image, { width: '100%', height: '100%' }]}>


        <View style={styles.container_botoes}>
          <TouchableOpacity style={styles.botao_zap}>
            <Image source={whatsapp} style={styles.icons}></Image>
            <Text style={styles.font1}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao_insta}>
            <Image source={instagram} style={styles.icons}></Image>
            <Text style={styles.font1}>Instagram</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.container_botoes2}>

          <TouchableOpacity style={styles.botao_tiktok}>
            <Image source={tiktok} style={styles.icons}></Image>
            <Text style={styles.font1}>Tik Tok</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao_spotify}>
            <Image source={spotify} style={styles.icons}></Image>
            <Text style={styles.font1}>Spotify</Text>


          </TouchableOpacity>
        </View>

      </ImageBackground>
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
  container_botoes: {
    marginTop:100,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  container_botoes2:{
    marginTop:250,
    flexDirection:'row',
    justifyContent:'space-around',
    // backgroundColor:'red',
  },
  font1: {
    fontFamily: 'sans-serif',
    fontSize: 20, 
    color: 'white',
  },
  icons: {
    width: 60,
    height: 60,
    margin: 10 ,
  },
});
