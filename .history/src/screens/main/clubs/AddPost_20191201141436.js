import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ToastAndroid, ActivityIndicator, Image } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
import { Constant } from '../../../../common'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import ImagePicker from 'react-native-image-picker'
import metrics from '../../../constants/Metric'
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dccjf3l8c/image/upload/"
const CLOUDINARY_UPLOAD_PRESET = 'nssmo9kk'
class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            isShowActionButton: false,
            urlImage: null,
            isUploading: false
        }
    }

    selectedImage = async () => {
        ImagePicker.showImagePicker({ noData: true, mediaType: 'photo', allowsEditing: true, quality: 0.7}, (response) => {
            console.log('Response = ', response)
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                this.uploadImage(response.uri)
                // this.setState({ avatarSource: response.uri })
                // console.log('a')
            }
        })
    }

    uploadImage = async (image_uri) => {
        this.setState({ isUploading: true })
        const formData = new FormData()
        formData.append('submit', 'ok')
        formData.append('file', { type: 'image/jpg', uri: image_uri, name: 'uploadimagetmp.jpg'})
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        await axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData
        }).then(response => {
            this.setState({isUploading: false, urlImage: response.data.url })
            console.log(response)
        })
        .catch(err => {
            this.setState({ isUploading: false })
            console.log(err)
        })
    }

    addPost = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            const post = await axios.post(Constant.rootAPI+'/posts',
            {
                content: this.state.content,
                group_id: this.props.navigation.getParam('groupId'),
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            if(post.data.business_code == 1) {
                console.log(post.data.data)
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
                {
                    this.state.urlImage && <Image source={{ uri: this.state.urlImage }} style={{ width: metrics.DEVICE_WIDTH, height: 300, resizeMode: 'cover', paddingHorizontal: 10 }} />
                }
                {
                    this.state.isUploading && <ActivityIndicator />
                }
                <View style={styles.actionPost}>
                    <View>
                        <TouchableOpacity onPress={this.selectedImage}>
                            <Icon name={'images'} color={colors.primaryColor}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {this.state.isShowActionButton || this.state.content !='' ? 
                        (
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={this.addPost} style={{marginRight: 20}}>
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