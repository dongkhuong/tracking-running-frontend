import React, { Component } from "react"
import { Text, ScrollView, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class DetailMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Avg. Pace',
                    result: '27:12 min/km'
                },
                {
                    id: 2,
                    title: 'Avg. Speed',
                    result: '2,2 km/h'
                },
                {
                    id: 3,
                    title: 'Max. Speed',
                    result: '16,5 km/h'
                },
                {
                    id: 4,
                    title: 'Start time',
                    result: '15:17'
                },
                {
                    id: 5,
                    title: 'Date',
                    result: '2019-14-10'
                }
            ],
            distance: null,
            duration: null,
            calories: 0,
            average_pace: null,
            average_speed: null,
            max_speed: null,
            start_time: null,
            date: null
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
                            <CardItem style={styles.resetPadding}>
                                <View>
                                    <Image source={require('../../../assets/images/detailmap.png')} style={{width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT*0.3}}/>
                                </View>
                            </CardItem>
                            <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                                <Left style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>0, 02</Text>
                                    <Text style={{color:colors.darkGray}}>Distance (km)</Text>
                                </Left>
                                <Body style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>00:00:34</Text>
                                    <Text style={{color:colors.darkGray}}>Duration</Text>
                                </Body>
                                <Right style={styles.formatDetailArea}>
                                    <Text style={styles.detailBoldText}>0</Text>
                                    <Text style={{color:colors.darkGray}}>Calories</Text>
                                </Right>
                            </CardItem>
                            {
                                this.state.data.map((item) => (
                                <CardItem key={item.id}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Left>
                                            <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                            <View>
                                                <Text style={{color:colors.darkGray}}>{item.title}</Text>
                                            </View>
                                        </Left>
                                        <Right>
                                            <View>
                                                <Text style={{fontWeight: 'bold'}}>{item.result}</Text>
                                            </View>
                                        </Right>
                                    </View>
                                </CardItem>
                                ))
                            }
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default DetailMap