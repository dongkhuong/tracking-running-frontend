import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
class Progress extends Component {
    render() {
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
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Text style={{fontWeight: 'bold'}}>RECENT ACTIVITIES</Text>
                                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
                                    <Text style={styles.touchableTextStyle}>SHOW MORE</Text>
                                </TouchableOpacity>
                            </CardItem> 
                            <CardItem>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                                    <Left>
                                        <Text>Hello</Text>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/02d.png')}/>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity>
                                    <Text style={styles.touchableTextStyle}>ADD AN ACTIVITY MANUALLY</Text>
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
                                    <Text style={styles.touchableTextStyle}>ADD GOAL</Text>
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