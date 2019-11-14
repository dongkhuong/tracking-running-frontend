import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }
    render() {
       return(
           <View>
                <Input
                multiline = {true}
                numberOfLines={5}
                textAlignVertical="top"
                inputContainerStyle={{borderBottomWidth: 0, paddingTop: 0}}
                placeholder={"What's going on?"}
                placeholderTextColor={colors.lightGrays}
                onChangeText={(content)=> this.setState({content:content})}
                />
           </View>
       ) 
    }
}
export default AddPost