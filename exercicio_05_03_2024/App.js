import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
      <View style={styles.box5}></View>
      <View style={styles.box6}></View>
      <View>
        <View style={styles.box7}></View>
        <View style={styles.box8}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap'



  },
  box1: {
    backgroundColor: '#FF2D00',
    width: 120,
    height: 120,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,



  },
  box2: {
    backgroundColor: '#F3FF00',
    width: 250,
    height: 150,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,

  },
  box3: {
    backgroundColor: '#00FF08',
    width: 250,
    height: 150,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,


  },
  box4: {
    backgroundColor: '#00FFF7',
    width: 120,
    height: 120,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,


  },
  box5: {
    backgroundColor: '#0027FF',
    width: 380,
    height: 150,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,


  },
  box6: {
    backgroundColor: '#9B00FF',
    width: 180,
    height: 250,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,


  },

  box7: {
    backgroundColor: '#FF00EC',
    width: 180,
    height: 100,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,

  },



  box8: {
    backgroundColor: '#000000',
    width: 180,
    height: 100,
    borderColor: 'white',
    borderWidth: 5,
    margin: 5,
    borderRadius: 20,

  },


});



