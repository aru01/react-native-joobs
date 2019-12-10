import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Profile extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.info_label}> Name </Text>
        <Text style={styles.full_name}> Ivan </Text>
        <Text style={styles.info_label}> Surname </Text>
        <Text style={styles.full_name}> Ivanov </Text>
        <Text style={styles.info_label}> Email </Text>
        <Text style={styles.full_name}> ivanov@gmail.com </Text>
        <Text style={styles.info_label}> The number of vacancies to which you responded </Text>
        <Text style={styles.full_name}> 3 </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login');
          }} >
          <Text style={styles.logout }> Exit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info_label: {
    backgroundColor: '#F4F5F6',
    fontSize: 23,
    marginBottom: 5,
    padding: 5,
    opacity: 0.5
  },
  logout: {
    backgroundColor: '#F4F5F6',
    fontSize: 20,
    color: '#C84267',
    marginBottom: 5,
    padding: 5,
    textAlign: 'center'
  },
  full_name: {
    padding: 10,
    fontSize: 16,
  }
});