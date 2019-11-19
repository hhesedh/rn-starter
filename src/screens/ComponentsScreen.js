import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  greetings = { color: 'blue' };

  return (
    <View>
      <Text style={styles.textStyle}>This is components screen</Text>
      <Text>{greetings.color}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;