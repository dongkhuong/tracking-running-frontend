import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
import { Card, CardItem, Container, Content, Left, Right, Body } from 'native-base'
import ModalDropdown from 'react-native-modal-dropdown'
import styles from './Styles'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            week: [],
            fakeData : [
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
    componentDidMount () {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const activities = await axios.get(Constant.rootAPI+'/activities',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = activities.data.data.data
            this.setState({data: data})       
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
                                <Left>
                                    <ModalDropdown options={['Week', 'Month', 'Year', 'All']} dropdownTextStyle={{color:colors.primaryColor}} dropdownStyle={{width:metrics.DEVICE_WIDTH*0.3, alignItems: 'stretch'}}/>
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
                            {this.state.fakeData.map((data) => (
                                <CardItem key={data.id}>
                                    <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('Detail')}>
                                        <Left>
                                            <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                            <View>
                                                <Text>{data.distance} km</Text>
                                                <Text style={{color: colors.darkGray, fontSize: 11}}>{data.duration}</Text>
                                            </View>
                                        </Left>
                                        <Right style={{ flexDirection: 'column'}}>
                                            <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
                                            <View style={{marginTop: 0}}>
                                                <Text style={{color: colors.darkGray, fontSize: 11}}>{data.date}</Text>
                                            </View>
                                        </Right>
                                    </TouchableOpacity>
                                </CardItem>
                                ))}
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
export default History