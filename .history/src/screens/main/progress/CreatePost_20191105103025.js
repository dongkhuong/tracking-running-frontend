import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'
class CreatePost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Input
                multiline = {true}
                numberOfLines={5}
                containerStyle={{borderBottomWidth: 0}}
                />
            </View>
        );
    }
}
export default CreatePost