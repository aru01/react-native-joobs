// import { createStackNavigator } from 'react-navigation-stack'
// import Jobs from '../screens/Jobs'
// const AppNavigation = createStackNavigator(
//   {
//     Home: { screen: Jobs }
//   },
//   {
//     initialRouteName: 'Home'
//   }
// )
// export default AppNavigation

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigation from './BottomNavigation';
import Jobs from "../screens/Jobs";
import Profile from "../screens/Profile";
import AuthNavigation from "../navigation/AuthNavigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons";
import AboutJob from "../screens/AboutJob";

const TabIconJobs = (props) => (
  <Ionicons
    name={'md-list'}
    size={30}
    color={props.focused ? '#29235C' : 'darkgrey'}
  />
);


const TabIconProfile = (props) => (
  <Ionicons
    name={'ios-more'}
    size={30}
    color={props.focused ? '#29235C' : 'darkgrey'}
  />
);

const JobsList = createStackNavigator({
  Main: {
    screen: Jobs,
    navigationOptions: {
      headerTitle: "Jobs",
      headerTintColor: "#29235C"
    }
  },
  JobDetails: {
    screen: AboutJob,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `Job #${navigation.state.params.key}`,
      headerTintColor: "#29235C"
    }),
  }
});


const ProfilePage = createStackNavigator({
  Main: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile",
      headerTintColor: "#29235C"
    }
  }
});

export default createAppContainer(
  createBottomTabNavigator({
    Jobs: { screen: JobsList, navigationOptions: {
        tabBarIcon: TabIconJobs
      }},
    Profile: { screen: ProfilePage, navigationOptions: {
        tabBarIcon: TabIconProfile
      }},
  }, {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#29235C',
      inactiveTintColor: '#ccc',
      labelStyle: {
        fontSize: 14,
      },
    }
  })
);