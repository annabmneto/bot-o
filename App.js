import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay:true});
       }

  render() {
    return (
      <TouchableOpacity style={{
        marginLeft:100,
        borderWidth:1,
        borderColor: 'red',
        alignItems:'center',
        width: 200,
        hight: 200,
        backgroundColor:'white',
        borderRadius: 100
        }}>
        <Text style={{
          fontWeight:'bold',
          fontSize: 20
        }}>pressione aqui</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


