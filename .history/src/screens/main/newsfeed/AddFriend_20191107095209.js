import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl } from "react-native"
import { Card, CardItem, Container, Content, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import axios from 'axios'
import { Constant } from '../../../../common'
import AsyncStorage from '@react-native-community/async-storage'
class AddFriend extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    avatar: 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/69927291_2260644167579412_7213317914873561088_n.jpg?_nc_cat=108&_nc_oc=AQndKPxkIucWbgeqfW7S3yHg9xX8rRP31lRJTb8T85G12lCistODc7nOaH67picVFj0&_nc_ht=scontent.fdad3-2.fna&oh=64545571f7bc926e635386ccafb6c805&oe=5DFC8DE9',
                    name: 'Thái Đông Khương'
                },
                {
                    id: 2,
                    avatar: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-1/68419002_2628025727260544_737530010247626752_n.jpg?_nc_cat=100&_nc_oc=AQne8bUw5MK13sEB1asn2-C2yHoaObQamcJTpu6VXL1ako8QF4cUxUKct8O8ZQzviLg&_nc_ht=scontent.fdad3-3.fna&oh=a35f852294d01d4ddd7da81fee10a653&oe=5DF25292',
                    name: 'Nguyễn Hữu Ben'
                },
                {
                    id: 3,
                    avatar: 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/58586608_2381031878806724_8495656967476346880_n.jpg?_nc_cat=108&_nc_oc=AQkqB6dbyFsx3TchdR4JAJoNn7T_nFBHeBR5tGTkmW3xkZGPmtL-lYZD1_tKcS41d_w&_nc_ht=scontent.fdad3-2.fna&oh=cd7463400c0134cdd2d2b4ee91b967f9&oe=5DF06729',
                    name: 'Tạ Nhật Shawn'
                },
                {
                    id: 4,
                    avatar: 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-0/p206x206/26112265_1895337947462690_9145318299581799_n.jpg?_nc_cat=104&_nc_oc=AQkurBazTGejVNTh5PY_o6yAMRV_qb8R_AzZ6Xpb7eRMbQ04B2IAPbAI03Fd6tPrBVA&_nc_ht=scontent.fdad3-2.fna&oh=432fc197dbe5c9946653084d1e669fd1&oe=5E03919A',
                    name: 'Lionel Tiến Dũng'
                }
            ],
            friends: [],
            refreshing: false
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true})
        this.addFriend().then(() => this.setState({refreshing: false}))
    }
    async addFriend(id) {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const friend = await axios.post(Constant.rootAPI+'/friends',
            {
                user_two: id,
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(friend) {
                ToastAndroid.show("Add friend successfully!", ToastAndroid.SHORT)
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    fetchData =  async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const friends = await axios.get(Constant.rootAPI+'/listAllUsersYouMightKnow',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = friends.data.data
            this.setState({friends: data})
            console.log(this.state.friends)
        } catch(err) {
            console.log(err)
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        // const { navigation } = this.props
        return (
                <ScrollView 
                refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />
                }>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <TextPage color={colors.black} fontSize={14} fontWeight={'bold'}>USERS YOU MIGHT KNOW</TextPage>
                                </Left>
                            </CardItem>
                            {this.state.friends.map((item, index) => (
                                <CardItem key={index}>
                                    <Left>
                                        {/* <Thumbnail small source={{uri: item.avatar}}/> */}
                                        <Body>
                                            <TextPage color={colors.black} fontSize={12} fontWeight={'normal'}>{item.firstname + " " + item.lastname}</TextPage>
                                        </Body>
                                        <Right>
                                            <TouchableOpacity onPress={() => this.addFriend(item.id)}>
                                                <Icon name='md-person-add' style={{color: colors.primaryColor, fontSize: 20}}/>
                                            </TouchableOpacity>
                                        </Right>
                                    </Left>
                                </CardItem>
                            ))}
                        </Card>
                    </Content>
                </ScrollView>
        );
    }
}
export default AddFriend