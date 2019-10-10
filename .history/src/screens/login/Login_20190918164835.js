import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import styles from './Styles'
import InputComponent from '../../components/InputComponent'
import { Button, Header } from 'react-native-elements';
import FormComponent from "../../components/FormComponent";
import SignupSection from "../../components/SignupSection";
class Login extends Component {
    render() {
        // const {  } = this.props
        return (
           <ImageBackground style={styles.backgroundContainer} source={require('../../assets/images/backgroundImage.jpg')}>
               <View style={styles.logoContainer}>
                    <Image source={require('../../assets/images/logoImage.jpg')} style={styles.logoSize} />
                    <Text style={styles.logoText}>REACT NATIVE</Text>
               </View>
               <FormComponent/>
               <SignupSection/>
           </ImageBackground>
        );
    }
}
export default Login;