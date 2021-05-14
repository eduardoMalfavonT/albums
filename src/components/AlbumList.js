import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  const [state, setState] = useState({
    albums: [],
    album: 'mexico',
  });

  useEffect(async () => {
    console.log('state.album:', state.album);
    await axios
      .get(
        `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&includeMetaTags=1&query=${state.album}`,
      )
      .then(response => {
        console.log('before state.album:', state.album);
        setState({...state, albums: response.data.albums.data});
      })
      .catch(error => console.log(error));
  }, []);
  console.log('before state.albums:', state.albums);
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={state.albums}
        renderItem={({item}) => {
          return <AlbumDetail album={item} />;
        }}
        keyExtractor={album => album.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
});

export default AlbumList;
