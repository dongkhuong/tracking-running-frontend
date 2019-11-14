import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid } from 'react-native'
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
            data: {},
            isShowButtonJoin: true,
            posts: []
        }
    }
    async joinEvent(){
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const userOfGroup = await axios.post(Constant.rootAPI+'/addCurrentUserIntoGroup',
            {
                group_id: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(userOfGroup.data.business_code ==1 ) {
                ToastAndroid.show("Join this group successfully!", ToastAndroid.SHORT)
                this.setState({isShowButtonJoin: false})
            } else if(userOfGroup.data.business_code == 0) {
                ToastAndroid.show("Join this group failed!", ToastAndroid.SHORT)
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    
    checkJoinGroup = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const checkJoinGroup = await axios.post(Constant.rootAPI+'/checkJoinIntoGroup',
            {
                group_id: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(checkJoinGroup.data.business_code == 1 ) {
                this.setState({isShowButtonJoin: false})
            } else if(checkJoinGroup.data.business_code == 0) {
                this.setState({isShowButtonJoin: true})
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    deleteJoin = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const deleteJoin = await axios.delete(Constant.rootAPI+'/deleteJoin/'+id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(deleteJoin.data.business_code == 1 ) {
                ToastAndroid.show("Leave group successfully!", ToastAndroid.SHORT)
                this.setState({isShowButtonJoin: true})
            } else if(deleteJoin.data.business_code == 0) {
                this.setState({isShowButtonJoin: false})
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    showPostInGroup = async () => {
        try{
            const id = this.props.navigation.getParam('id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const posts = await axios.post(Constant.rootAPI+'/showPostInGroup',
            {
                group_id: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(posts.data.business_code == 1 ) {
                this.setState({posts: posts.data.data.data})
                console.log(this.state.posts)
            }
        } catch (err) {
            throw new Error(err)
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
       await this.fetchData()
       await this.checkJoinGroup()
       await this.showPostInGroup()
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
                            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{this.props.navigation.getParam('countRunners')}</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}> RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>3</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>POSTS</Text>
                        </View>
                   </TouchableOpacity>
               </View>
               </View>
               {this.state.isShowButtonJoin ? (
                <View style={{alignItems: 'center', paddingVertical: 10, backgroundColor: colors.white}}>
                    <TouchableOpacity onPress={() => this.joinEvent()} style={{borderRadius:2, paddingVertical: 8, alignItems: 'center', backgroundColor: colors.primaryColor, width: metrics.DEVICE_WIDTH*0.9}}>
                        <Text style={{color: colors.white, fontWeight: 'bold'}}>Join</Text>
                    </TouchableOpacity>
                </View>
               ): (<View style={{alignItems: 'center', paddingVertical: 10, backgroundColor: colors.white}}>
                        <TouchableOpacity onPress={() => this.deleteJoin()} style={{borderRadius:2, paddingVertical: 8, alignItems: 'center', backgroundColor: colors.gray, width: metrics.DEVICE_WIDTH*0.9}}>
                            <Text style={{color: colors.primaryColor, fontWeight: 'bold'}}>Leave Group</Text>
                        </TouchableOpacity>
                    </View>) }

               <Text style={{paddingVertical: 5, paddingLeft: 10, fontWeight: 'bold'}}>POSTS</Text>
               <View style={{paddingBottom: 10}}>
                    <Card style={{borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: colors.darkGray}}>
                        <Card.Title
                            titleStyle={{fontSize: 15}}
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