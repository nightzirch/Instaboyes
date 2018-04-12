import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Avatar from '../components/Avatar';

import heart from '../images/heart.png';
import heartFilled from '../images/heart-filled.png';

export default class DetailsScreen extends React.Component {
  state = {
    likes: 0,
    isLiked: false
  };

  componentWillMount = () => {
    this.setState({
      likes: this.props.navigation.state.params.imageData.numberOfLikes
    })
  }

  handleHeartPress = () => {
    this.setState(prevState => ({
      isLiked: prevState.isLiked ? false : true,
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1
    }))
  }

  render() {
    const { navigate, state } = this.props.navigation;
    const imageData = state.params.imageData;

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Avatar source={imageData.user.profileImageUrl} />
          <Text style={styles.username}>{imageData.user.username}</Text>
        </View>

        <Image resizeMode="cover" style={styles.image} source={{ uri: imageData.imageUrl}} />


        <View style={styles.footing}>
          <TouchableOpacity style={{padding: 8}} onPress={this.handleHeartPress}>
            {this.state.isLiked ?
              <Image style={styles.heart} source={require('../images/heart-filled.png')} /> :
              <Image style={styles.heart} source={require('../images/heart.png')} />
            }
          </TouchableOpacity>

          <Text style={styles.likes}>{this.state.likes} likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  footing: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heart: {
    height: 24,
    width: 24
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4
  },
  likes: {
    padding: 8,
    paddingLeft: 4,
    fontSize: 16
  }
});