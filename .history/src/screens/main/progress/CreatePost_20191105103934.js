import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
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
                inputContainerStyle={{borderBottomWidth: 0, paddingTop: 0}}
                placeholder={"What's going on?"}
                placeholderTextColor={colors.lightGrays}
                />
            </View>
        );
    }
}
export default CreatePost