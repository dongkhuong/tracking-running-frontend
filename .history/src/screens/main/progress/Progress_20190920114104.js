import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail } from 'native-base'
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
                    <TextPage color={colors.white} fontSize={fonts.fontCardLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                    <TextPage color={colors.white} fontSize={fonts.fontCardLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                    <TextPage color={colors.white} fontSize={fonts.fontCardLarge} fontWeight={'bold'}>SET A PERSONAL GOAL</TextPage>
                </ImageBackground>
                <Card>
                    <CardItem>
                        <TextPage color={colors.black} fontSize={15} fontWeight={'bold'}>RECENT ACTIVITIES</TextPage>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <TouchableOpacity>
                                <TextPage color={colors.blue} fontSize={15} fontWeight={'bold'}>ADD AN ACTIVITY MANUALLY</TextPage>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={{backgroundColor: colors.darkBlue}}>
                        <Left>
                            <Thumbnail small source={require('../../../assets/images/logoImage.jpg')} />
                            <TouchableOpacity style={{flex: 1, marginLeft:10}}>
                                <TextPage color={colors.white} fontSize={13} fontWeight={'bold'}>Unlock All Features</TextPage>
                                <TextPage color={colors.orange} fontSize={13} fontWeight={'bold'} marginTop={10}>GET PREMIUM</TextPage>
                            </TouchableOpacity>
                        </Left>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <TextPage color={colors.black} fontSize={15} fontWeight={'bold'}>STATISTICS</TextPage>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Thống kê tại đây</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <TextPage color={colors.black} fontSize={15} fontWeight={'bold'}>MY GOALS</TextPage>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <TouchableOpacity>
                                <TextPage color={colors.blue} fontSize={15} fontWeight={'bold'}>ADD GOAL</TextPage>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}
export default Progress;