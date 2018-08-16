import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { Images, Colors } from '../../theme';
import { Container, Button } from 'native-base';

export default class Parent extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Container style={styles.container}>
                
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Red,
    },
    image: {
        flex: 1
    },
});