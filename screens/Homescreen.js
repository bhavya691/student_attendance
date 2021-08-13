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
        // class_a[attende]['name'] = attende;
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

  updateAttendence(roll_no, status) {
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
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
            <TouchableOpacity
              style={styles.present}
              onPress={this.updateAttendence(attende.roll_no, 'present')}>
              Present
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.absent}
              onPress={this.updateAttendence(attende.roll_no, 'absent')}>
              Absent
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Button title="Submit" onPress={this.navigation} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  present: {
    padding: 2,
    backgroundColor: '#1C8B82',
    marginLeft: 150,
    fontSize: 20,
    fontWeight: 'bold',
    width: 70,
  },
  absent: {
    padding: 4,
    backgroundColor: 'red',
    marginLeft: 250,
    fontSize: 20,
    fontWeight: 'bold',
    width: 70,
  },
});
