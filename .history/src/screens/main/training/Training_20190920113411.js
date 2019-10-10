import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail, Container, Content } from 'native-base'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import metrics from '../../../constants/Metric'
import CardComponent from "../../../components/CardComponent";
class Training extends Component {
    renderA = () => {
        return[
            {
                id:1,
                title: 'START TO RUN',
                description: 'Learn the basics of running',
                schedule: '(6 - 10 weeks)'
            },
            {
                id:2,
                title: 'SUMMER BODY',
                description: 'Slim down or shape up for summer',
                schedule: '(8 - 12 weeks)'
            },
            {
                id:3,
                title: 'LOSE WEIGHT',
                description: 'Burn calories and fat with cardio',
                schedule: '(6 - 22 weeks)'
            },
            {
                id:4,
                title: 'READY TO RACE',
                description: 'Run a 5K, 10K half or full marathon',
                schedule: '(8 - 16 weeks)'
            }
        ]
    }
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Content>
                        <Card>
                            {this.renderA().map(( item ) => (
                                <CardItem style={[styles.resetPadding, styles.marginCardItem]} key={item.id}>
                                    <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/backgroundImage.jpg')}>
                                        <TextPage color={colors.white} fontSize={fonts.fontCardLarge} fontWeight={'bold'}>{item.title}</TextPage>
                                        <TextPage color={colors.white} fontSize={fonts.fontCardSmall} fontWeight={'500'}>{item.description}</TextPage>
                                        <TextPage color={colors.white} fontSize={fonts.fontCardSmall} fontWeight={'500'}>{item.schedule}</TextPage>
                                    </ImageBackground>
                                </CardItem>
                            ))}
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default Training;