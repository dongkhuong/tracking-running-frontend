import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl, Alert } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class ListComment extends Component {
    constructor(props) {
        super(props)
        this.state={
            showTextArea: false,
            showCommentButton: true,
            content: '',
            comments: [],
            refreshing: false,
            userLikes: [],
            sumOfLikes: 0
        }
    }
    async deleteComment(comment_id){
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const comment = await axios.delete(Constant.rootAPI+'/deleteComment/'+comment_id,
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            console.log(comment)
            if(comment.data.business_code == 1){
                ToastAndroid.show('Delete Comment Successfully!',ToastAndroid.SHORT)
                this._onRefresh()
            } else {
                ToastAndroid.show("You can not delete other people's comments",ToastAndroid.SHORT)
            }    
        } catch(err) {
            throw new Error(err)
        }
    }

    async countLikes(){
        try{
          const post_id = this.props.navigation.getParam('comment_id')
          const asyncStorage = await AsyncStorage.getItem("token")
          const countLikes = await axios.post(Constant.rootAPI+'/countLikes',
          {
              post_id: post_id
          },
          {headers: {'Authorization': `Bearer ${asyncStorage}`}})
          if(countLikes.data.business_code == 1){
            await this.setState({userLikes: countLikes.data.userLikes, sumOfLikes: countLikes.data.sumOfLikes})
            console.log(this.state.userLikes)
        } else if (countLikes.data.business_code == 0) {
            ToastAndroid.show(countLikes.data.message,ToastAndroid.SHORT)
          }
        } catch(err) {
          throw new Error(err)
        }
    }

    postComment = async () => {
        try{
            const comment_id = this.props.navigation.getParam('comment_id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const comment = await axios.post(Constant.rootAPI+'/comments',
            {
                content: this.state.content,
                post_id: comment_id
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            this.setState({showCommentButton: true, showTextArea: false, content: ''})
            ToastAndroid.show('Add Comment Successfully!',ToastAndroid.SHORT)
            this._onRefresh()
        } catch(err) {
            throw new Error(err)
        }
    }
    getFormatDay = (day) => {
        return  new Date(day).getDate() + "/" + 
        (new Date(day).getMonth()+1) + "/" + 
        new Date(day).getFullYear() +  " at " + 
        new Date(day).getHours() + ":" + 
        new Date(day).getMinutes()
    }
    fetchData = async () => {
        try{
            const post_id = this.props.navigation.getParam('comment_id')
            const asyncStorage = await AsyncStorage.getItem("token")
            const comments = await axios.post(Constant.rootAPI+'/getAllComments',
            {
                post_id: post_id
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data =  comments.data.data
            this.setState({comments: data})
        } catch(err) {
            throw new Error(err)
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.fetchData().then(() => this.setState({refreshing: false}))
    }
    async componentDidMount(){
        // console.log(this.props.navigation.getParam('comment_id'))
        await this.fetchData()
        await this.countLikes()
        await this._onRefresh()
    }
    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView 
                refreshControl={
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    />   
                }>
                <Card>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{width: metrics.DEVICE_WIDTH*0.9}}>
                            <TouchableOpacity style={{width: '100%', flexDirection: 'row', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('FollowFriend',{userLikes: this.state.userLikes})}>
                                <Thumbnail style={{marginRight:20, width: 20, height: 20}} square source={require('../../../assets/images/icons/like.png')}/>
                                <Text style={{fontSize: 20, marginRight:20, fontSize: 15}}>{this.state.sumOfLikes}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Thumbnail  style={{marginRight:5, width: 25, height: 25}} source={{uri:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg"}}/>
                                    <Thumbnail  style={{marginRight:5, width: 25, height: 25}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zROcvE9mwFbmqhgz2ed34AjqkR_mENY9SAgeGbx9I4cH7S0LPg&s"}}/>
                                    {/* <Thumbnail  style={{marginRight:5}} small source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGQlyw8k3CQWm31kvRPh1fmWoBPu8dRiyyKbcaS4f01uSZGULTA&s"}}/> */}
                                </View>
                                <View style={styles.viewLikeButton}>
                                    <Icon name="arrow-forward" color={colors.black} size={20}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </CardItem>
                    {this.state.comments.map((item, index) => (
                    <CardItem key={index} style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <TouchableOpacity onLongPress={() => Alert.alert(
                            'Delete',
                            'Do you want to delete this comment?',
                            [
                              {text: 'Yes', onPress: () => this.deleteComment(item.id)},
                              {
                                text: 'No',
                                style: 'cancel',
                              },
                            ],
                            {cancelable: false}
                        )}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Thumbnail style={{marginRight: 30}} source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} small/>
                                <View>
                                    <Text style={{color: colors.darkGray, fontSize: 12, marginBottom: 5}}>{item.user.firstname + ' ' + item.user.lastname} . {this.getFormatDay(item.created_at)}</Text>
                                    <View style={{width: '90%'}}><Text>{item.content}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </CardItem>
                    ))}
                </Card>
            </ScrollView>
                {this.state.showCommentButton ? 
                ( <TouchableOpacity style={styles.commentCircleButton} onPress={() => this.setState({showTextArea: true, showCommentButton: false})}>
                        <Icon name="add" color={colors.white}/>
                  </TouchableOpacity>): null
                }
                {this.state.showTextArea ? 
                    (<View style={styles.commentAreaText}>
                        <Input
                        multiline = {true}
                        textAlignVertical="top"
                        inputContainerStyle={{paddingLeft:10, paddingRight: 20, borderBottomWidth: 0}}
                        placeholder={"Add a comment, @ to mention, ..."}
                        placeholderTextColor={colors.lightGrays}
                        containerStyle={{width: metrics.DEVICE_WIDTH}}
                        onChangeText={(content)=> this.setState({content:content})}
                        value={this.state.content}
                        />
                        <TouchableOpacity style={styles.submitButtonComment} onPress={() => this.setState({showCommentButton: true, showTextArea: false})}>
                            <Icon name="close" color={colors.red}/>
                        </TouchableOpacity>
                        {this.state.content != '' ? 
                        (<TouchableOpacity style={styles.closeButtonComment} onPress={() => this.postComment()}>
                            <Icon name="checkmark" color={colors.primaryColor}/>
                        </TouchableOpacity>)
                        : null
                        }
                    </View>) : null 
                }
            </View>
        );
    }
}
export default ListComment