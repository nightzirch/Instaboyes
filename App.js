import React from 'react';

import {
  YellowBox
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

export default App = StackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        title: 'I N S T A B O Y E S'
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'G O O D B O Y E'
      }
    }
  }, {
    initialRouteName: 'List',
});


YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);