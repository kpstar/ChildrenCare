import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { Images, Colors } from '../../theme';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import { Container, Button, View, Item, Label, Input, Spinner } from 'native-base';
import { strings } from '../../services/i18n';
import firebase from 'firebase';

export default class EmailVerification extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
        }
    }

    render() {
        const {navigation} = this.props;
        const loginStatus = navigation.getParam('loginStatus', false);
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
                        source={Images.parent}>
                    </Image>
                    {   loginStatus ?
                        <View style={styles.view}>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_email_placeholder.value')}</Label>
                                <Input autoCapitalize='none' style={styles.input} autoCorrect={false} value={this.state.email} onChangeText={text=>this.setState({email: text})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_password_placeholder.value')}</Label>
                                <Input secureTextEntry={true} style={styles.input} value={this.state.password} onChangeText={text=>this.setState({password: text})}/>
                            </Item>
                            {this.renderButtonOrSpinner()}                           
                        </View>
                        :
                        <View style={styles.view}>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_email_placeholder.value')}</Label>
                                <Input autoCapitalize='none' autoCorrect={false} style={styles.input} value={this.state.email} onChangeText={text=>this.setState({email: text})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label style={styles.label}>{strings('login_text_password_placeholder.value')}</Label>
                                <Input secureTextEntry={true} style={styles.input} value={this.state.password} onChangeText={text=>this.setState({password: text})}/>
                            </Item>
                            {this.renderButtonOrSpinner()}
                        </View> }                        
                </Container>
            </Container>
        )
    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner color={Colors.White} style={styles.spinner} />;    
        }
        if (this.props.navigation.getParam('loginStatus', false)) {
            return <Button block onPress={this.onLogin.bind(this)} style={styles.button}><Text style={styles.text}>{strings('email_login_button_title.value')}</Text></Button>;
        } else {
            return <Button block onPress={this.onSignup.bind(this)} style={styles.button}><Text style={styles.text}>{strings('email_signup_button_title.value')}</Text></Button>;
        }        
    }

    onLogin() {
        this.setState({ error: '', loading: true, });
        const {email, password} =  this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch((error) => {
                alert(error);
                this.setState({error: error, loading: false});
            });
    }

    onSignup() {
        this.setState({ error: '', loading: true, });
        const {email, password} =  this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch((error) => {
                alert(error);
                this.setState({error: error, loading: false});
            });
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
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(5),
    },
    label: {
        color: Colors.white,
    },
    view: {
        width: responsiveWidth(80),
    },
    spinner: {
        justifyContent: 'center',
    },
    button: {
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.buttonColor,
    },
    buttonTwo: {
        marginTop: 10,
        marginLeft: 5,
    },
    text: {
        color: Colors.white,
    },
    input: {
        color: Colors.white,
    },
});