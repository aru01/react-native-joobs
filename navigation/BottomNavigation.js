import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Jobs from '../screens/Jobs';
import AboutJob from "../screens/AboutJob";
import Profile from '../screens/Profile';
import Home from '../screens/Home'

const BottomNavigation = createBottomTabNavigator({
  Главная: Home,
  Login: Login,
  SignUp: Signup,
  Jobs: Jobs,
  AboutJob: AboutJob,
  Profile: Profile
}, {
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#29235C',
    inactiveTintColor: '#ccc',
    labelStyle: {
      fontSize: 14,
    },
  }
});

export default BottomNavigation;