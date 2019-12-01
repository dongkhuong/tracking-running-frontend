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
            activities: [],
        }
    }
    // week = (year,month,day) => {
    //     function serial(days) { return 86400000*days; }
    //     function dateserial(year,month,day) { return (new Date(year,month-1,day).valueOf()); }
    //     function weekday(date) { return (new Date(date)).getDay()+1; }
    //     function yearserial(date) { return (new Date(date)).getFullYear(); }
    //     var date = year instanceof Date ? year.valueOf() : typeof year === "string" ? new Date(year).valueOf() : dateserial(year,month,day), 
    //         date2 = dateserial(yearserial(date - serial(weekday(date-serial(1))) + serial(4)),1,3);
    //     return ~~((date - date2 + serial(weekday(date2) + 5))/ serial(7));
    // }
    async componentDidMount () {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const activities = await axios.get(Constant.rootAPI+'/getAllActivities',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            this.setState({activities: activities.data.data.data}) 
        } catch(err) {
            throw new Error(err)
        }
    }
   
    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollContainer}>
                    <Content>
                        {/* <Card>
                            <CardItem>
                                <Left>
                                    <ModalDropdown options={['Week', 'Month', 'Year', 'All']} dropdownTextStyle={{color:colors.primaryColor}} dropdownStyle={{width:metrics.DEVICE_WIDTH*0.3, alignItems: 'stretch'}}/>
                                </Left>
                                <Right>
                                    <Text>All activities</Text>
                                </Right>
                            </CardItem>
                        </Card> */}
                        <Card>
                                <CardItem style={{flexDirection:'row', flex: 1}}>
                                {/* <Left>
                                    <Text style={{fontWeight: 'bold'}}></Text>
                                </Left>  */}
                                <Body style={{alignItems: 'center'}}>
                                    <Text style={{textAlign: 'center', color: colors.primaryColor}}>{this.state.activities.length} activities</Text>               
                                </Body> 
                                </CardItem>
                                {this.state.activities.map((activity,index) => (
                                      <CardItem key={index}>
                                      <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => this.props.navigation.navigate('Detail',{id: activity.id})}>
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