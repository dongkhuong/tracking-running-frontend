import React, { Component } from "react"
import { Text, View, ScrollView, TouchableOpacity, Image, RefreshControl } from "react-native"
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import { Card, CardItem, Container, Content } from 'native-base'
import styles from './Styles'
import Icon from "react-native-ionicons"
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class Clubs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: [],
            refreshing: false,
            countRunners: []
        }
    }
    fetchDataPopularNearYou = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const groups = await axios.get(Constant.rootAPI+'/groups',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = groups.data.data
            this.setState({groups: data})   
            this.countRunners()
        } catch(err) {
            throw new Error(err)
        }
    }

   countRunners = async () => {
        try{
          const asyncStorage = await AsyncStorage.getItem("token")
          const countRunners = await axios.get(Constant.rootAPI+'/countRunners',
          {headers: {'Authorization': `Bearer ${asyncStorage}`}})
          if(countRunners.data.business_code == 1){
            this.setState({countRunners: countRunners.data.count_runners})
            console.log(this.state.countRunners)
          } else if (countRunners.data.business_code == 0) {
            console.log(countRunners.data.message)
          } else {
              console.log('a')
          }

        } catch(err) {
          throw new Error(err)
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchDataPopularNearYou().then(() => this.setState({refreshing: false}))
    }
    async componentDidMount() {
        await this.fetchDataPopularNearYou()
        await this.countRunners()
        await this._onRefresh()
    }
    render() {
        return (
           <ScrollView style={{backgroundColor: '#E7EAED'}}                     
            refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            />   
            }>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <Text style={{marginHorizontal: 10, marginVertical: 5,fontWeight: 'bold', color: colors.darkGray}}>YOUR CLUBS</Text>
                    <ScrollView horizontal={true} style={{backgroundColor: colors.white}} contentContainerStyle={{alignItems: 'center'}}>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{height: metrics.DEVICE_HEIGHT*0.14, width: metrics.DEVICE_HEIGHT*0.14, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                    <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                    <Text style={{fontSize: 11, textAlign: 'center'}}>The Tracking Running Club</Text>
                                </View>
                            </TouchableOpacity>
                        
                    </ScrollView>
               </View>
               <View>
                    <Text style={{marginHorizontal: 10, marginVertical: 5, fontWeight: 'bold', color: colors.darkGray}}>POPULAR NEAR YOU</Text>
                    <ScrollView horizontal={true} style={{backgroundColor: colors.white}}>
                        {this.state.groups.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("ClubDetail",{id: item.id})}>
                                    <View style={{ height: metrics.DEVICE_HEIGHT*0.25, width: metrics.DEVICE_HEIGHT*0.25, alignItems: 'center', borderWidth: 0.5, borderColor: colors.gray, marginHorizontal: 5, marginVertical: 5}}>
                                        <Image source={require('../../../assets/images/mapdemo.jpg')} resizeMode={'cover'} style={{height:'60%', width: '100%'}}/>
                                        <Text style={{fontSize: 15, textAlign: 'center', marginTop: 5}}>{item.name}</Text>
                                        <Text style={{fontSize: 13, textAlign: 'center', position: 'absolute', color: colors.darkGray, bottom: 10}}>{item.number_runner} Runners</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
               </View>
               <View style={{marginVertical: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("MaterialTabClubs")} style={{borderColor: colors.darkGray, backgroundColor: colors.white, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 5, borderBottomWidth: 0.5, borderTopWidth: 0.5}}>
                        <Text>View All Clubs</Text>
                        <Icon name="arrow-forward" color={colors.darkGray}/>
                    </TouchableOpacity>
               </View>
           </ScrollView>
        )
    }
}
export default Clubs