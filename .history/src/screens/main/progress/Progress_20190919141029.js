import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView } from "react-native"
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
class Progress extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <ScrollView style={styles.scrollContainer}>
                <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                    <TextPage color={colors.blue} fontSize={fonts.fontTitleProgress} alignItems={'center'}>SET A PERSONAL GOAL</TextPage>
                </ImageBackground>
            </ScrollView>
        )
    }
}
export default Progress;