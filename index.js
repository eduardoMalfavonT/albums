// Import a library to help to create a component

import React from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component

const App = () => {
  return (
    <View style={styles.mainStyles}>
      <Header title={'Albums!'} />
      <AlbumList />
    </View>
  );
};

//Render it to the device
const styles = StyleSheet.create({
  mainStyles: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

AppRegistry.registerComponent('albums', () => App);
