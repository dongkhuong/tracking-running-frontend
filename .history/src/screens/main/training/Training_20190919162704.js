import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail } from 'native-base'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
class Training extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <ScrollView style={styles.scrollContainer}>
                <Card>
                    <CardItem style={{paddingHorizontal:0}}>
                        <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                        <TextPage color={colors.white} fontSize={fonts.fontIntroProgressLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                        </ImageBackground>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                        <TextPage color={colors.white} fontSize={fonts.fontIntroProgressLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                        </ImageBackground>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                        <TextPage color={colors.white} fontSize={fonts.fontIntroProgressLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                        </ImageBackground>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <ImageBackground resizeMode={'cover'} style={styles.progressImageHeader} source={require('../../../assets/images/backgroundImage.jpg')}>
                        <TextPage color={colors.white} fontSize={fonts.fontIntroProgressLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                        </ImageBackground>
                    </CardItem>
                </Card>
                
            </ScrollView>
        )
    }
}
export default Training;