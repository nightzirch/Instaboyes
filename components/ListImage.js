import React from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const ListImage = ({ isMiddleChild, source = `https://placehold.it/380x380` }) => (
  <View style={[styles.imageContainer, isMiddleChild && { marginLeft: 3, marginRight: 3}]}>
    <Image
      resizeMode="cover"
      style={styles.image}
      source={typeof source === 'string' ? { uri: source } : source} />
  </View>
);

export default ListImage;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    height: Dimensions.get("window").width/3,
    width: (Dimensions.get("window").width/3)-2
  }
});
