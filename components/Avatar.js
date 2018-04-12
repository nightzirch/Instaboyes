import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View
} from 'react-native';

const vars = {
  size: 48
};

const Avatar = ({ source = `https://placehold.it/${vars.size}x${vars.size}` }) => {
  return (
  <View style={styles.avatarContainer}>
    <Image
      resizeMode="cover"
      style={styles.image}
      source={typeof source === 'string' ? { uri: source} : source} />

      {/* <ActivityIndicator size="large" /> */}
  </View>
);
}

export default Avatar;



const styles = StyleSheet.create({
  avatarContainer: {
    height: vars.size,
    width: vars.size,
    borderRadius: vars.size,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    overflow: 'hidden'
  },
  image: {
    width: vars.size,
    height: vars.size
  }
});
