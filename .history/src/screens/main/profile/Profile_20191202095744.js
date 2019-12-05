import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
import AsyncStorage from "@react-native-community/async-storage"
import axios from 'axios'
import { Constant } from '../../../../common'
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
    // renderSection = () => {
    //     return [
    //         {
    //             id: 1,
    //             icon: 'contact',
    //             title: '0 Friends',
    //             description: 'Connect with the fitness community'
    //         },
    //         {
    //             id: 2,
    //             icon: 'contacts',
    //             title: 'Groups & Communities',
    //             description: 'Fitness is more fun together'
    //         },
    //         {
    //             id: 3,
    //             icon: 'clipboard',
    //             title: 'Leaderboard',
    //             description: 'See how you match up'
    //         },
    //         {
    //             id: 4,
    //             icon: 'star',
    //             title: 'Records',
    //             description: 'Get Premium to see your personal bests'
    //         },
    //         {
    //             id: 5,
    //             icon: 'leaf',
    //             title: 'Premium Benefits',
    //             description: 'Go further with a Premium Membership'
    //         }
    //     ]
    // }
    async componentDidMount() {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const cUser = await axios.get(Constant.rootAPI+'/users/profile',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            const data = cUser.data.data
            this.setState({user: data}) 
        } catch(err) {
            throw new Error(err)
        }
    }
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body style={{alignItems: 'center'}}>
                                {this.state.user != null ? 
                                    (
                                    <View style={{alignItems: 'center'}}>
                                    <Thumbnail large source={{uri: this.state.user.avatar !=null ? this.state.user.avatar : "https://cdn2.iconfinder.com/data/icons/colored-simple-circle-volume-01/128/circle-flat-general-51851bd79-512.png" }} />
                                        <View>
                                            <TextPage marginTop={10} color={colors.black} fontSize={15} fontWeight={'bold'}>{this.state.user.firstname + " " + this.state.user.lastname}</TextPage>
                                            <TextPage marginTop={5} color={colors.darkGray} fontSize={11} fontWeight={'normal'}>Phone: {this.state.user.phone}</TextPage>
                                        </View>
                                    </View>    
                                    )
                                     : null}
                                    
                                    
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Friend')}>
                            <CardItem  style={{backgroundColor: colors.primaryColor}}>
                                <Left>
                                    <Icon name={'contact'} style={{color:colors.white}}/>
                                    <View style={{marginLeft:10}}>
                                        <TextPage color={colors.white} fontSize={11} fontWeight={'bold'}>Friends</TextPage>
                                        <TextPage color={colors.lightGray} fontSize={11} fontWeight={'normal'}>Connect with the fitness community</TextPage>
                                    </View>
                                </Left> 
                            </CardItem>
                        </TouchableOpacity>
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Profile;