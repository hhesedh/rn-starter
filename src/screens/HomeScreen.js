import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={styles.view}

    >
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.button}
        title="Go to List Image"
        onPress={() => navigation.navigate('Image')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 40,
  },
  text: {
    marginBottom: 10,
    fontSize: 30,
    alignSelf: "center"
  },
  button: {
    paddingTop: 20,
    marginBottom: 20
  }
});

export default HomeScreen;
