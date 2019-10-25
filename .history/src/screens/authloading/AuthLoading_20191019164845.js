import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
        retunr(
            <View>
                <Text>
                    Thai Dong Khuong
                </Text>
            </View>
        )
    }
}
export default AuthLoading