import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { Images, Colors } from '../../theme';
import { responsiveWidth } from 'react-native-responsive-dimensions'
import { Container, Button, View } from 'native-base';
import { strings } from '../../services/i18n';

export default class Children extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={ Images.backBtn }
                            style={ styles.backBtn }></Image>
                    </TouchableOpacity>
                </View>
                <Container style={styles.innerBox}>
                    <Image style={styles.image}
                        source={Images.children}>
                    </Image>
                    <Button block onPress={this.onQRLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('login_button_scanqr_title.value')}</Text></Button>
                    <Button block onPress={this.onLibraryLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('login_button_library_title.value')}</Text></Button>              
                </Container>
            </Container>
        )
    }

    onQRLogin() {
        // this.props.navigation.navigate("QRScreen");
    }

    onLibraryLogin() {
        // this.props.navigation.navigate("LibraryScreen");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        alignSelf: 'stretch',        
        height: 40,
        width: responsiveWidth(100),
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    backBtn: {
        marginLeft: 15,
        height: 25,
        width: 30,
    },
    innerBox: {
        marginTop: 0,
        backgroundColor: Colors.Red,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginBottom: 40
    },
    view: {
        width: responsiveWidth(80),
    },
    button: {
        padding: 20,
        marginTop: 10,
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10),
        backgroundColor: Colors.buttonColor,
    },
    buttonTwo: {
        marginTop: 10,
        marginLeft: 5,
    },
    text: {
        color: Colors.white,
    },
});