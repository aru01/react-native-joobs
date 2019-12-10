import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class AboutJob extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.info_label}> Vacancy: </Text>
        <Text style={styles.full_name}>{navigation.state.params.name} </Text>
        <Text style={styles.info_label}> Location: </Text>
        <Text style={styles.full_name}> {navigation.state.params.city} </Text>
        <Text style={styles.info_label}> Team: </Text>
        <Text style={styles.full_name}> {navigation.state.params.team}</Text>
        <Text style={styles.info_label}> Type: </Text>
        <Text style={styles.full_name}>{navigation.state.params.type}</Text>
        <Text style={styles.info_label}> Objectives: </Text>
        <Text style={styles.full_name}>{navigation.state.params.objective}</Text>
        <Text style={styles.info_label}>Duties:</Text>
        <Text style={styles.full_name}>{navigation.state.params.duties}</Text>
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

  full_name: {
    padding: 10,
    fontSize: 16,
  }
});