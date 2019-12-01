import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dccjf3l8c/image/upload"
const CLOUDINARY_UPLOAD_PRESET = 'nssmo9kk'

export default class UploadImage extends Component {
    selectedImage = async () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response)
          
            if (response.didCancel) {
              console.log('User cancelled image picker')
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton)
            } else {
              const source = { uri: response.uri }
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              })
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
        <View>
            <Text>abc</Text>
        </View>
    );
  }
}