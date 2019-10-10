import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
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
                    <TextPage color={colors.white} fontSize={fonts.fontIntroProgressLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                </ImageBackground>
                <Card title="RECENT ACTIVITIES" titleStyle={{textAlign:'left'}} >
                    <TouchableOpacity>
                        <TextPage color={colors.blue} fontSize={fonts.fontIntroProgressMedium} fontWeight={'bold'}>ADD AN ACTIVITY MANUALLY</TextPage>
                    </TouchableOpacity>
                </Card>
            </ScrollView>
        )
    }
}
export default Progress;