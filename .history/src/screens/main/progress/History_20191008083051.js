import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown'
import styles from './Styles'
class History extends Component {
    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <ModalDropdown options={['option 1', 'option 2']}/>
                                </Left>
                                <Right>
                                    <Text>All activities</Text>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem style={{flexDirection:'row', flex: 1}}>
                                <Left>
                                    <Text style={{fontWeight: 'bold'}}>WEEK 40</Text>
                                </Left>
                                <Right>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{marginRight:10}}>0,02 km</Text>
                                        <Text>3 activities</Text>               
                                    </View>
                                </Right>  
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
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
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
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
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
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
                                        <View style={{marginTop: 0}}>
                                            <Text>Th4, 02/10/2019</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default History