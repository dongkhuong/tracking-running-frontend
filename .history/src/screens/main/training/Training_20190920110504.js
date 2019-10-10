import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native"
// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Card, CardItem, Body, Header, Left, Thumbnail, Container, Content } from 'native-base'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
import metrics from '../../../constants/Metric'
class Training extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Content>
                        <Card style={{flex: 1}}>
                            <CardItem style={{paddingLeft:0, paddingRight:0, flexDirection:'row'}}>  
                                <ImageBackground source={require('../../../assets/images/backgroundImage.jpg')} style={{width:metrics.DEVICE_WIDTH, height:metrics.DEVICE_HEIGHT*0.3}}>
                                    {/* <TextPage color={colors.black} fontSize={15} fontWeight={'bold'}>RECENT ACTIVITIES</TextPage> */}
                                </ImageBackground>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default Training;