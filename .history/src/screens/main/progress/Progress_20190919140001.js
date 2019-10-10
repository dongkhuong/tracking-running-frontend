import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView } from "react-native"
import styles from './Styles'
class Progress extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <ScrollView style={styles.scrollContainer}>
                <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                   
                </ImageBackground>
            </ScrollView>
        )
    }
}
export default Progress;