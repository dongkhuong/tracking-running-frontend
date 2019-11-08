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
                <Input/>
            </View>
        );
    }
}
export default CreatePost