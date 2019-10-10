import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail, Container, Content } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import metrics from '../../../constants/Metric'
import CardComponent from "../../../components/CardComponent";
class Training extends Component {
    renderSection = () => {
        return[
            {
                id:1,
                title: 'START TO RUN',
                description: 'Learn the basics of running',
                schedule: '(6 - 10 weeks)',
                image: 'https://media.mnn.com/assets/images/2017/09/man-running.jpg.653x0_q80_crop-smart.jpg'
            },
            {
                id:2,
                title: 'SUMMER BODY',
                description: 'Slim down or shape up for summer',
                schedule: '(8 - 12 weeks)',
                image:'https://media.istockphoto.com/photos/dynamic-running-uphill-on-trail-male-athlete-runner-side-view-picture-id862317986?k=6&m=862317986&s=612x612&w=0&h=n88GHaCA-vEKCrKrJK_gbYYV-r4byq9Q60oNWlHGcH0='
            },
            {
                id:3,
                title: 'LOSE WEIGHT',
                description: 'Burn calories and fat with cardio',
                schedule: '(6 - 22 weeks)',
                image:'https://www.runningexcels.com/wp-content/uploads/Running-athlete-man-Male-runn-43000435.jpg'
            },
            {
                id:4,
                title: 'READY TO RACE',
                description: 'Run a 5K, 10K half or full marathon',
                schedule: '(8 - 16 weeks)',
                image: 'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/620/What+is+Maximalist+Running+620.jpg'
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
                            {this.renderSection().map(( item ) => (
                                <TouchableOpacity key={item.id}>
                                <CardItem style={[styles.resetPadding, styles.marginCardItem]}>
                                    <ImageBackground style={styles.imageBackground} source={{uri: item.image}}>
                                        <Text style={styles.titleBig}>{item.title}</Text>
                                        <Text style={styles.titleSmall}>{item.description}</Text>
                                        <Text style={styles.titleSmall}>{item.schedule}</Text>
                                    </ImageBackground>
                                </CardItem>
                                </TouchableOpacity>
                            ))}
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default Training;