import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import styles from './Styles'
import { Button, Header } from 'react-native-elements';
class Login extends Component {
    render() {
        const { backgroundImage, logoImg } = this.props
        return (
           <Image style={styles.backgroundContainer} source={require(backgroundImage)}>
               <View style={styles.backgroundContainer}>
                    <Image source={logoImg} style={styles.logoSize} />
                    <Text style={styles.logoText}>REACT NATIVE</Text>
               </View>
           </Image>
        );
    }
}
export default Login;