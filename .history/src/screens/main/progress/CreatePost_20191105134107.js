import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import { Constant } from '../../../../common'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'aaaaaa',
            image_route: 'default'
        }
    }
    onPublish = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const post = await axios.post(Constant.rootAPI+'/posts',
            {
                // content: this.state.content,
                // image_route: this.state.image_route,
                // activity_id: this.props.navigation.getParam('activity_id'),
                content: 'abc',
                image_route: 'default',
                activity_id: this.props.navigation.getParam('activity_id'),
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(post) {
                console.log('Successfully!')
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    componentDidMount () {
    }
    render() {
        return (
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
                <TouchableOpacity onPress={this.onPublish}>
                    <Text>Publish</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default CreatePost