import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: 1,
                    distance: '0,00',
                    duration: '00:00:03',
                    date: 'Th4, 02/10/2019',
                },
                {
                    id: 2,
                    distance: '0,1',
                    duration: '00:01:00',
                    date: 'Th5, 03/11/2019',
                },
                {
                    id: 3,
                    distance: '1,00',
                    duration: '00:05:05',
                    date: 'Th6, 09/12/2019',
                },
                {
                    id: 4,
                    distance: '2,00',
                    duration: '00:09:03',
                    date: 'Th2, 10/12/2019',
                },
            ]
        }
    }
    async componentDidMount() {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const activities = await axios.get(Constant.rootAPI+'/activities',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            console.log(activities)
            
        } catch(err) {
            console.log(err)
        }
    }
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
                                <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} onPress={() => this.props.navigation.navigate('History')}>
                                    <Text style={styles.touchableTextStyle}>SHOW MORE</Text>
                                </TouchableOpacity>
                            </CardItem> 
                            {this.state.data.map((item) => (
                            <CardItem key={item.id}>
                                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('Detail')}>
                                    <Left>
                                        <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                        <View>
                                            <Text>{item.distance} km</Text>
                                            <Text style={{color: colors.darkGray, fontSize: 11}}>{item.duration}</Text>
                                        </View>
                                    </Left>
                                    <Right style={{ flexDirection: 'column'}}>
                                        <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
                                        <View style={{marginTop: 0}}>
                                            <Text style={{color: colors.darkGray, fontSize: 11}}>{item.date}</Text>
                                        </View>
                                    </Right>
                                </TouchableOpacity>
                            </CardItem>
                            ))}
                            <CardItem style={styles.cardItemAdd}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddManualEntry')}>
                                    <Text style={styles.touchableTextStyle}>ADD AN ACTIVITY MANUALLY</Text>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text style={{fontWeight: 'bold'}}>STATISTICS</Text>
                            </CardItem>
                            <CardItem>
                                    <Text>Statistics here!</Text>
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