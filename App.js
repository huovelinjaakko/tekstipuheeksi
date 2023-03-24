import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [talk, setTalk] = useState('');

  const speak = () => {
    const thingToSay = talk;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{borderWidth: 1, margin: 15, width: 250, height: 40}}
        placeholder='Type something'
        onChangeText={text => setTalk(text)}
      />
      <Button title="Press to hear text" onPress={speak} />
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
});
