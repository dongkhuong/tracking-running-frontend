import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import { Constant } from '../../../../common'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            isShowActionButton: false
        }
    }
    addPost = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const post = await axios.post(Constant.rootAPI+'/posts',
            {
                content: this.state.content,
                group_id: this.props.navigation.getParam('id'),
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(post.data.business_code == 1) {
                ToastAndroid.show("Add post successfully!", ToastAndroid.SHORT)
                this.props.navigation.navigate('ClubDetail')   
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    render() {
       return(
           <View style={{flex: 1}}>
                <Input
                multiline = {true}
                numberOfLines={5}
                textAlignVertical="top"
                inputContainerStyle={{borderBottomWidth: 0, paddingTop: 0}}
                placeholder={"What's going on?"}
                placeholderTextColor={colors.lightGrays}
                onChangeText={(content)=> this.setState({content:content})}
                value={this.state.content}
                />
                <View style={styles.actionPost}>
                    <View>
                        <TouchableOpacity>
                            <Icon name={'images'} color={colors.primaryColor}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.state.isShowActionButton || this.state.content !='' ? 
                        (
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => this.addPost} style={{marginRight: 20}}>
                                    <Icon name={'checkmark'} color={colors.primaryColor}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({content: '', isShowActionButton: false})}>
                                <Icon name={'close'} color={colors.red}/>
                                </TouchableOpacity>
                            </View>
                        )
                        : 
                        (
                            <TouchableOpacity onPress={() => this.setState({isShowActionButton: true})}>
                                <Icon name={'chatbubbles'} color={colors.primaryColor}/>
                            </TouchableOpacity>
                        )
                        }
                        
                    </View>
                </View>
           </View>
       ) 
    }
}
export default AddPost