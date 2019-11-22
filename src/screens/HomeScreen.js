import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.view}

    >
      <Text style={styles.text}>Hi there!</Text>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to List Image"
          onPress={() => navigation.navigate('Image')}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>

      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to Color Demo"
          onPress={() => navigation.navigate('Color')}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to Square Demo"
          onPress={() => navigation.navigate('Square')}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.button}
          title="Go to Text Demo"
          onPress={() => navigation.navigate('Text')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 40,
  },
  viewButton: {
    marginVertical: 10
  },
  text: {
    marginBottom: 10,
    fontSize: 30,
    alignSelf: "center"
  },
  button: {
    margin: 10

  }
});

export default HomeScreen;
