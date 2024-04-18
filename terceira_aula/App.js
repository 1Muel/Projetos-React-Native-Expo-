import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.texto}> fefksrgner</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.texto}> fefksrgner</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.texto}> fefksrgner</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  texto: {
    margin:30,
    backgroundColor:'blue',
    height:180,
    width:60,
  },
  box: {

  },
});
