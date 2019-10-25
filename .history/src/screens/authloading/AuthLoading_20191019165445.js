import React, { Component } from 'react'
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native'
import colors from '../../constants/Color'
class AuthLoading extends Component {
    componentDidMount() {
        this._bootstrapAsync()
    }
      // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'MaterialBottomTabNavigator' : 'AuthNavigator');
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