import React, { Component } from "react"
import { View, Text } from "react-native"
import { Button } from 'react-native-elements';
class Login extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Button
                    title="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        );
    }
}
export default Login;