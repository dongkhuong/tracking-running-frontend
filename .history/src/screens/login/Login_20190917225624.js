import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import styles from './Styles'
import { Button, Header } from 'react-native-elements';
class Login extends Component {
    render() {
        const { backgroundImage } = this.props
        return (
           <Image style={styles.backgroundContainer} source={require(backgroundImage)}>

           </Image>
        );
    }
}
export default Login;