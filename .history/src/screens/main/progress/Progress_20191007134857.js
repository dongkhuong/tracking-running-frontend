import React, { Component } from "react"
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Button } from "react-native"
import { Card, CardItem, Body, Header, Left, Thumbnail, Container, Content } from 'native-base'
import styles from './Styles'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
class Progress extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text style={{ fontFamily: 'Montserrat-Regular'}}>CHALLENGES</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Text style={{ fontFamily: 'Montserrat-Bold'}}>RECENT ACTIVITIES</Text>
                                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                                    <Text style={{color: colors.primaryColor}}>SHOW MORE</Text>
                                </TouchableOpacity>
                            </CardItem> 
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity>
                                    <Text style={{color: colors.primaryColor}}>ADD AN ACTIVITY MANUALLY</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>STATISTICS</Text>
                            </CardItem>
                            <CardItem>
                                    <Text>Thống kê tại đây</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>MY GOALS</Text>
                            </CardItem>
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity>
                                    <Text style={{color: colors.primaryColor}}>ADD GOAL</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default Progress;