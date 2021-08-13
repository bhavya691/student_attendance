import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return(
    <TouchableOpacity style = {styles.full}>
      <Text style = {styles.text}>School Attendance</Text>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFA100',
  },
  text: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
