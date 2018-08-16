import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { strings } from '../services/i18n';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Images, Colors, FontSizes } from '../theme';
import { Container, Content, Button, Text } from 'native-base';

export default class Login extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <Text style={styles.text}>{ strings('login_parent_title.value') }</Text>
                    <TouchableOpacity onPress={ () => this.onPress('ParentLoginScreen')}>
                        <Image
                            style={styles.button}
                            source={Images.parent}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>{ strings('login_children_title.value') }</Text>
                    <TouchableOpacity onPress={ () => this.onPress('ChildrenLoginScreen')}>
                        <Image
                            style={styles.button}
                            source={Images.children}
                        />
                    </TouchableOpacity> 
                </View>                               
            </Container>
        )
    }

    onPress = (option) => {
        this.props.navigation.navigate(option);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Red,
    },
    text: {
        color: Colors.white,
        textAlign: 'center',
        margin: 20,
        fontSize: FontSizes.medium
    },
    button: {
        alignItems: 'center',
    }
});