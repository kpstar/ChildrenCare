import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View, 
  Image
} from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default class Splash extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Image></Image>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
});