import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';
import { Images } from '../theme';
import { Container } from 'native-base';
import firebase from 'firebase';

export default class Splash extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDehcdFxsca41bnhvpoKWT4SwCkkEiQR8Q',
            authDomain: 'tadaima-67ba1.firebaseapp.com',
            databaseURL: 'https://tadaima-67ba1.firebaseio.com',
            projectId: 'tadaima-67ba1',
            storageBucket: 'tadaima-67ba1.appspot.com',
            messagingSenderId: '531474266551'
        });
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('LoginScreen');
        }, 200)
    }

    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={Images.spalshBk}  style={styles.image} ></ImageBackground>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        flex: 1
    },
});