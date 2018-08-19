import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images, Colors, FontSizes } from '../theme';
import { View } from 'native-base';

export default class Backbtn extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress}>
                    <Image
                        source={Images.backBtn}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    onPress = (option) => {
        this.props.navigation.navigate(option);
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        position: 'absolute',
        alignItems: 'left',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: Colors.backgroundPrimary,
    },
});