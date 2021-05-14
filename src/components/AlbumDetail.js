import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const [state, setState] = useState({});
  useEffect(async () => {
    await axios
      .get(
        `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%3F_marker%3D0&albumid=${album.id}`,
      )
      .then(response => {
        console.log('response.data', response.data);
        setState(response.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Card>
      <CardSection>
        <View style={styles.imageContainerStyle}>
          <Image style={styles.imageStyle} source={{uri: state.image}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{album.title}</Text>
          <Text>{state.primary_artists}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageAlbunStyle} source={{uri: state.image}} />
      </CardSection>
      <CardSection>
        <Button onPress={() => console.log('Pressed!!')} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'red',
    width: '50%',
    flex: 1,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
    flex: 1,
    borderRadius: 2,
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageAlbunStyle: {
    height: 350,
    flex: 1,
    width: null,
    borderRadius: 5,
  },
});

export default AlbumDetail;
