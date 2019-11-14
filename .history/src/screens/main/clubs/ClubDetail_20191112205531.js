import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Thumbnail } from 'native-base'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
class ClubDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    fetchData = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const group = await axios.get(Constant.rootAPI+'/groups/'+id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            this.setState({data: group.data.data})
        } catch(err) {
            throw new Error(err)
        }
    }
    async componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.4, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{this.state.data.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Icon name={'pin'} style={{marginRight: 10}} color={colors.darkGray}/><Text style={{color: colors.darkGray}}>{this.state.data.address}</Text>
                    </View>
                    <View style={{width: metrics.DEVICE_WIDTH*0.7}}>
                        <Text style={{textAlign: 'center'}}>
                            {this.state.data.description}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderColor: colors.darkGray, justifyContent: 'flex-end', alignItems:'flex-end', paddingBottom: 10}}>
                   <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{textAlign: 'center'}}>{this.state.data.number_runner}</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center'}}>3</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>POSTS</Text>
                        </View>
                   </TouchableOpacity>
               </View>
               </View>
               <View style={{alignItems: 'center', paddingVertical: 10}}>
                   <TouchableOpacity style={{borderRadius:5, paddingVertical: 8, alignItems: 'center', backgroundColor: colors.primaryColor, width: metrics.DEVICE_WIDTH*0.9}}>
                       <Text style={{color: colors.white, fontWeight: 'bold'}}>Join</Text>
                   </TouchableOpacity>
               </View>
               <Text style={{paddingVertical: 5, paddingLeft: 10, fontWeight: 'bold'}}>POSTS</Text>
               <View style={{paddingBottom: 10}}>
                    <Card style={{borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: colors.darkGray}}>
                        <Card.Title
                            title={"Nguyen Huu Tuan"}
                            subtitle={"31/08/2019"}
                            left={(props) => <Avatar.Image size={30} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHRUHH3v22241UVrdpWLXC-_3B8icikYMJFBheeqyCk0itfqN&s"}} />}
                        />
                        <Card.Cover source={{uri: "https://picsum.photos/700"}}/>
                        <Card.Content>
                            <Paragraph>Lorem Ipsum - All the facts - Lipsum generator</Paragraph>    
                        </Card.Content> 
                        <Card.Actions>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderRightColor: colors.darkGray}}>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} >
                                        <Icon name="heart" size={22} color={colors.darkGray}/>
                                        <Text style={{fontSize: 11, marginLeft: 5}}>1 Like</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} >
                                        <Icon name="eye" size={22} color={colors.darkGray}/>
                                        <Text style={{fontSize: 11, marginLeft: 5}}>1 Comment</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Card.Actions>       
                    </Card>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail