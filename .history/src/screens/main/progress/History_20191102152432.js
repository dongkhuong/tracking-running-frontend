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
            // weeks: [],
            activities: [],
        }
    }
    async componentDidMount () {
        // try{
        //     const asyncStorage = await AsyncStorage.getItem("token")
        //     const weeks = await axios.get(Constant.rootAPI+'/getWeek',
        //     {headers: {'Authorization': `Bearer ${asyncStorage}`}})
        //     this.setState({weeks: weeks.data.data})  
            
        // } catch(err) {
        //     console.log(err)
        // }
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const activities = await axios.get(Constant.rootAPI+'/getAllActivities',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            this.setState({activities: activities.data.data.data}) 
            console.log(this.state.activities) 
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
                                    <Text style={{fontWeight: 'bold'}}></Text>
                                </Left> 
                                <Right>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{marginRight:10}}>0,02 km</Text>
                                        <Text>3 activities</Text>               
                                    </View>
                                </Right> 
                                </CardItem>
                                {this.state.activities.map((activity,index) => (
                                      <CardItem key={index}>
                                      <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('Detail')}>
                                          <Left>
                                              <Image source={require('../../../assets/images/icons/runner.png')} style={{marginRight:20}} />
                                              <View>
                                                  <Text>{activity.distance} km</Text>
                                                  <Text style={{color: colors.darkGray, fontSize: 11}}>{activity.duration}</Text>
                                              </View>
                                          </Left>
                                          <Right style={{ flexDirection: 'column'}}>
                                              <Image source={require('../../../assets/images/icons/clouds.png')} style={styles.iconWeather}/>
                                              <View style={{marginTop: 0}}>
                                                  <Text style={{color: colors.darkGray, fontSize: 11}}>{activity.date}</Text>
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