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
    backgroundColor: '#6A89F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
    width: 300,
    height: 150,
    borderColor: 'black',
    // borderWidth:10,
    margin: 10,
    borderRadius:10,
  },
  texto: {
    margin:50,
    padding: 10,
    textAlign: 'center',
    fontWeight:'bold',
    backgroundColor:'blue',
  },
});
