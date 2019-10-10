import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
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
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text>0,00 km</Text>
                                            <Text>00:00:03</Text>
                                        </View>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={{width:32, height: 32, marginTop: -10}}/>
                                        <View style={{marginTop: 0}}>
                                            <Text>Th4, 02/10/2019</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text>0,00 km</Text>
                                            <Text>00:00:03</Text>
                                        </View>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={{width:32, height: 32, marginTop: -10}}/>
                                        <View style={{marginTop: 0}}>
                                            <Text>Th4, 02/10/2019</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text>0,00 km</Text>
                                            <Text>00:00:03</Text>
                                        </View>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={{width:32, height: 10, marginTop: -10}}/>
                                        <View style={{marginTop: 0}}>
                                            <Text>Th4, 02/10/2019</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity>
                                    <Text style={styles.touchableTextStyle}>ADD AN ACTIVITYs MANUALLY</Text>
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