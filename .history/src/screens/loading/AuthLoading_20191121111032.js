import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import colors from '../../constants/Color'
class AuthLoading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userGender: null
        }
    }
    componentDidMount() {
        this._bootstrapAsync()
    }
    // componentWillMount() {
    //     this._bootstrapAsync()
    // }
      // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token')
    await AsyncStorage.getItem('userGender').then(
        (item) => {
            const userGender = JSON.parse(item)
            this.setState({userGender: userGender})
        }
    )
    if(this.state.userGender != null) {
        this.props.navigation.navigate("MaterialBottomTabNavigator")
    }
    this.props.navigation.navigate(userToken ? 'UserInfo' : 'AuthNavigator')
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