import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  YellowBox
} from 'react-native';

import Avatar from '../components/Avatar';
import ListImage from '../components/ListImage';

export default class ListScreen extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const res = await fetch('https://callstagram-api.now.sh/api');
    const { data } = await res.json();
    this.setState({
      isLoading: false,
      images: data
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <React.Fragment>
          {this.state.isLoading ?
            <ActivityIndicator size="large" /> :
            <FlatList
              columnWrapperStyle={{ marginBottom: 2 }}
              data={this.state.images}
              keyExtractor={item => item.id}
              numColumns={3}
              onRefresh={this.fetchImages}
              refreshing={this.state.isLoading}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigate('Details', { imageData: item })}>
                  <ListImage isMiddleChild={item.id % 3 === 2} source={item.imageUrl} />
                </TouchableOpacity>
              }
            />
          }  
        </React.Fragment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);