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
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem style={styles.resetPadding}>
                                <ImageBackground style={styles.imageBackground} source={require('../../../assets/images/backgroundImage.jpg')}>
                                    <TextPage color={colors.blue} fontSize={15} fontWeight={'bold'}>ADD AN ACTIVITY MANUALLY</TextPage>
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