import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState('white')

  return (
    <View style={[styles.whiteContainer, {backgroundColor:backgroundColor}]}>
      <View style={styles.roundButtons}>
        <TouchableOpacity style={[styles.redButton,styles.rounds]} onPress={()=>setBackgroundColor('red')}>
          <Text style={styles.text}>Red Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blueButton,styles.rounds]} onPress={()=>setBackgroundColor('blue')}>
          <Text style={styles.text}>Blue Button</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxButtons}>
        <TouchableOpacity style={[styles.greenButton,styles.boxes]} onPress={()=>setBackgroundColor('green')}>
          <Text style={styles.text}>Green Button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.purpleButton,styles.boxes]} onPress={()=>setBackgroundColor('purple')}>
          <Text style={styles.text}>Purple Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'white'
  },
  redContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  blueContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue'
  },
  greenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green'
  },
  purpleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'purple'
  },

  text:{
    fontSize:15,
    fontWeight:'900',
    color:'#fff',
  },
  
  roundButtons:{
    width: '95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around',
    marginBottom:50,
  },
  rounds:{
    borderRadius:30,
    borderColor: '#000',
    borderWidth:1,
    padding: 20,
  },

  redButton:{
    backgroundColor: '#ff0000',
  },
  blueButton:{
    backgroundColor: '#0000ff',
  }, 
  
  boxButtons:{
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop:50,
  },
  boxes:{
    padding: 20,
    borderColor: '#000',
    borderWidth:1,
  },
  
  greenButton:{
    backgroundColor: '#00ff00',
  },
  purpleButton:{
    backgroundColor: '#800080',
  },
});
