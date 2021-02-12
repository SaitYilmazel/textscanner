import styles from './styles';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40 }}>Settings Screen</Text>
      </View>
    );
  }
}
export default SettingsScreen;
