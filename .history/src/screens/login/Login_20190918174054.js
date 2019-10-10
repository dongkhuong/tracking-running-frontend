import React, { Component } from "react"
import { View, Text, Image, ImageBackground } from "react-native"
import styles from './Styles'
import FormComponent from "../../components/FormComponent";
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
           </ImageBackground>
        );
    }
}
export default Login;