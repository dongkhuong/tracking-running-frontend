import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import styles from './Styles'
import { Button, Header } from 'react-native-elements';
class Login extends Component {
    render() {
        // const {  } = this.props
        return (
           <Image style={styles.backgroundContainer} source={require('../../assets/images/backgroundImage.jpg')}>
               <View style={styles.backgroundContainer}>
                    <Image source={require('../../assets/images/logoImage.jpg')} style={styles.logoSize} />
                    <Text style={styles.logoText}>REACT NATIVE</Text>
               </View>
           </Image>
        );
    }
}
export default Login;