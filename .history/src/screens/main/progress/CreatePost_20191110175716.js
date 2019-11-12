import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import { Constant } from '../../../../common'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Styles'
import { StackActions, NavigationActions } from 'react-navigation'
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'NewsFeed' })],
});
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'New My Post',
            image_route: 'default'
        }
    }
    onPublish = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const post = await axios.post(Constant.rootAPI+'/posts',
            {
                content: this.state.content,
                image_route: this.state.image_route,
                activity_id: this.props.navigation.getParam('activity_id'),
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(post) {
                ToastAndroid.show("Add post successfully!", ToastAndroid.SHORT)
                // this.props.navigation.navigate('NewsFeed')
                this.props.navigation.dispatch(resetAction)
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
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <TouchableOpacity style={styles.addManualButton} onPress={this.onPublish}>
                        <Text style={styles.addManualButtonText}>Publish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default CreatePost