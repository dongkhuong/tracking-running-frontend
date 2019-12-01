import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { Constant } from '../../../common'
import colors from '../../constants/Color'
class AuthLoading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGender: null,
            userBirthDay: null
        }
    }
    async componentDidMount() {
        await this._bootstrapAsync()
    }
    _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token')
    await axios.get(Constant.rootAPI+'/users/profile',
    {headers: {'Authorization': `Bearer ${userToken}`}})
    .then(({data}) => {
        this.setState({ userGender: data.data.gender, userBirthDay: data.data.birthday })
    })
    .catch(err => console.log(err))
    // if(this.state.userBirthDay != null) {
    //     this.props.navigation.navigate(userToken ? 'updateInfo': 'AuthNavigator')
    // }else {
        this.props.navigation.navigate(userToken ? 'MaterialBottomTabNavigator' : 'AuthNavigator')
    // }
    // console.log(this.state.userGender)
    }
    render() {
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color={colors.primaryColor}/>
        </View>
        )
    }
}
export default AuthLoading