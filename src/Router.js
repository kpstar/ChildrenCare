/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import { StackNavigator } from 'react-navigation';

import Login from "./screens/Login"
import Splash from "./screens/Splash"
import Parent from "./screens/LoginScreen/Parent"
import Children from "./screens/LoginScreen/Children"
import PhoneNumber from "./screens/VerificationScreen/PhoneNumber"
import EmailScreen from "./screens/VerificationScreen/EmailVerification"
// import Question from "./screens/Question"

export const PrimaryNav = StackNavigator({
    
    SplashScreen: {screen: Splash},
    LoginScreen: {screen: Login},
    ParentLoginScreen: {screen: Parent},
    ChildrenLoginScreen: {screen: Children},
    PhoneScreen: {screen: PhoneNumber},
    EmailScreen: {screen: EmailScreen},
    // LevelScreen: {screen: Level},
    // QuestionScreen: {screen: Question},
}, {
    headerMode: 'none',
})