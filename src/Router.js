/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Login from "./screens/Login"
import Splash from "./screens/Splash"
// import Level from "./screens/Level"
// import Question from "./screens/Question"

export const PrimaryNav = StackNavigator({
    
    SplashScreen: {screen: Splash},
    LoginScreen: {screen: Login},
    // LevelScreen: {screen: Level},
    // QuestionScreen: {screen: Question},
}, {
    headerMode: 'none',
})