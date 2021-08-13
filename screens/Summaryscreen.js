import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Header from '../components/header';
import db from '../config';
export default class Homescreen extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  navigation = () => {
    this.props.navigation.navigate('Summaryscreen');
  };

  showStudents = () => {
    var studentref = db.ref('/').on('value', (data) => {
      var student = [];
      var class_a = data.val();
      for (var attende in class_a) {
        student.push(class_a[attende]);
      }
      student.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({
        students: student,
      });
    });
  };

  componentDidMount() {
    this.showStudents();
  }
  render() {
    return (
      <View>
        <Header />
        {this.state.students.map((attende) => (
          <View
            style={{
              width: 140,
              height: 55,
              margin: 5,
            }}>
            <Text>{attende.roll_no + '.  ' + attende.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
