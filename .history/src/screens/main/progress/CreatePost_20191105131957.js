import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            activity_id: null
        }
    }
    onPublish = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const post = await axios.post(Constant.rootAPI+'/posts',
            {
                content: this.state.content,
                activity_id: this.state.activity_id,
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
        const activity_id = this.props.navigation.getParam('activity_id')
        this.setState({activity_id: activity_id})
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
            </View>
        );
    }
}
export default CreatePost