import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import {JobsList} from '../lists/JobsList'


function Item({name, city, team, type}) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name} </Text>
      <Text style={styles.city}>{city} </Text>
      <Text style={styles.team}>{team} </Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}
export default class Jobs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={JobsList}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('JobDetails', {
                  key: item.key,
                  name: item.name,
                  city: item.city,
                  team: item.team,
                  type: item.type,
                  objective: item.objective,
                  duties: item.duties
                });
              }}>
              <Item name={item.name}
                    city={item.city}
                    team = {item.team}
                    type = {item.type}/>
            </TouchableOpacity>
          }
          keyExtractor={item =>item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc'
  },
  full_name: {
    fontSize: 18
  },
  age: {
    fontSize: 20,
    opacity: 0.5
  },
  about: {
    marginTop: 5,
    fontSize: 20
  }
});
