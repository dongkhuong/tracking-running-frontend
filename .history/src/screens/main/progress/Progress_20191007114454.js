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
                                <Text style={{fontWeight: 'bold'}}>CHALLENGES</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>RECENT ACTIVITIES</Text>
                            </CardItem> 
                            <CardItem style={styles.cardItemAdd}>
                                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('AddManualEntry')}> */}
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
                            <CardItem>
                                <Body>
                                    <TouchableOpacity>
                                        <TextPage color={colors.blue} fontSize={15} fontWeight={'bold'}>ADD GOAL</TextPage>
                                    </TouchableOpacity>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default Progress;