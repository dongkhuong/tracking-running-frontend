import React, { Component } from 'react';
import { View, Text, Image, Button, ActivityIndicator } from 'react-native'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dccjf3l8c/image/upload"
const CLOUDINARY_UPLOAD_PRESET = 'nssmo9kk'

export default class UploadImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarSource: null,
            isUploading: false
        }
    }
    selectedImage = async () => {
        ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
            console.log('Response = ', response)
            if (response.didCancel) {
              console.log('User cancelled image picker')
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton)
            } else {
            //   this.uploadImage(response.uri)
            this.setState({avatarSource: response.uri})
            console.log('a')
            }
          })
    }
    uploadImage = async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        await axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formData 
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }
  render() {
    return (
        <View style={{flex: 1}}>
            {
                this.state.avatarSource && <Image source={{uri: this.state.avatarSource}} style={{width: '80%', height: 200, resizeMode: 'contain'}}/>
            }
            {
                this.state.isUploading && <ActivityIndicator/>
            }
            <Button title="Select Image" onPress={this.selectedImage}/>
        </View>
    );
  }
}