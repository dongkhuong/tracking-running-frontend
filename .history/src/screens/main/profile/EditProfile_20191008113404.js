import React, { Component } from "react"
import { View, Text, Image } from "react-native"
class EditProfile extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <View style={{flex: 1}}>
                <Image source={require('../../../assets/images/map-demo.jpg')} style={{resizeMode: 'cover'}}/>
            </View>
        );
    }
}
export default EditProfile