import React, { Component } from "react"
import { View, Text, TouchableOpacity, ToastAndroid, ActivityIndicator } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Left, Right } from 'native-base'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import styles from './Styles'
import DateTimePicker from "react-native-modal-datetime-picker"
import metrics from '../../../constants/Metric'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Constant } from '../../../../common'
import ImagePicker from 'react-native-image-picker'
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dccjf3l8c/image/upload/"
const CLOUDINARY_UPLOAD_PRESET = 'nssmo9kk'
class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            genderData: ['FEMALE', 'MALE'],
            genderChecked: 1,
            userData: {
                firstname: '',
                lastname: '',
                gender: '',
                email: '',
                phone: '',
                birthday: '',
                height: '',
                weight: '',
                avatar:''
            },
            datetimepicker: null,
            urlImage: null,
            isUploading: false
        }
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true })
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }
    reverseString = (str) => {
        return str.split("-").reverse().join("-")
    }
    handleDatePicked = date => {
        this.hideDateTimePicker()
        let data = JSON.stringify(date)
        let dataConvert = data.substring(1,11)
        this.setState({datetimepicker: dataConvert})
        if(this.state.datetimepicker!=null) {
            this.setState(prevState => ({userData: {
                ...prevState.userData,
                birthday: this.reverseString(this.state.datetimepicker)
            }
            }))
        }
        console.log(this.state.userData.birthday)
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

    async componentDidMount() {
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage) {
            await axios.get(Constant.rootAPI+'/users/profile',
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            .then(({data}) => {
                let userData = {
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    gender: data.data.gender,
                    email: data.data.email,
                    phone: data.data.phone,
                    birthday: data.data.birthday!=null ? this.reverseString(data.data.birthday): "",
                    height: data.data.height,
                    weight: data.data.weight,
                    avatar: data.data.avatar
                }
                this.setState({ userData: userData })
                console.log(data)
            })
            .catch(err => console.log(err))
        }
        this.setState({genderChecked: this.state.userData.gender})
    }
    updateInfo = async () => {
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage) {
            await axios.patch(Constant.rootAPI+'/users/update',
            {
                firstname: this.state.userData.firstname,
                lastname: this.state.userData.lastname,
                phone: this.state.userData.phone,
                birthday: this.state.userData.birthday,
                gender: this.state.genderChecked,
                height: this.state.userData.height,
                weight: this.state.userData.weight,
                avatar: this.state.urlImage
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})
            .then(({data}) => {
                ToastAndroid.show("Update Successfully!",ToastAndroid.SHORT)
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                {
                                    this.state.urlImage &&
                                    <View style={{width: metrics.DEVICE_WIDTH, paddingLeft: 10, paddingRight: 10}}>
                                        <Thumbnail source={{uri: this.state.userData.avatar}} style={styles.thumbnail}/>
                                    </View>
                                }
                                {
                                    this.state.isUploading && <ActivityIndicator />
                                }
                                <View style={{flexDirection: 'column', flex: 1}}>
                                    <Input 
                                        onChangeText={firstname => this.setState(prevState => ({userData: {
                                            ...prevState.userData,
                                            firstname: firstname
                                        }
                                        }))} 
                                        value={this.state.userData.firstname} 
                                        label="FIRST NAME" 
                                        labelStyle={{fontSize:13}} 
                                        inputContainerStyle={styles.inputContainer} 
                                        inputStyle={{fontSize:13}}/>
                                    <Input 
                                        onChangeText={lastname => this.setState(prevState => ({userData: {
                                            ...prevState.userData,
                                            lastname: lastname
                                        }
                                        }))} 
                                        value={this.state.userData.lastname} 
                                        label="LAST NAME" labelStyle={{fontSize:13}} 
                                        inputContainerStyle={styles.inputContainer} 
                                        inputStyle={{fontSize:13}}/>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                        {this.state.genderData.map((genderData, key) => {
                                            return(
                                                <View style={{flex: 1}} key={key}>
                                                    {this.state.genderChecked == key ?
                                                    <CheckBox
                                                        center
                                                        title={genderData}
                                                        checkedIcon='dot-circle-o'
                                                        uncheckedIcon='circle-o'
                                                        checked={true}
                                                        containerStyle={{backgroundColor: null, borderWidth: 0}}
                                                        textStyle={{color: colors.darkGray}}
                                                    />
                                                    :
                                                    <CheckBox
                                                        center
                                                        title={genderData}
                                                        checkedIcon='dot-circle-o'
                                                        uncheckedIcon='circle-o'
                                                        checked={false}
                                                        containerStyle={{backgroundColor: null, borderWidth: 0}}
                                                        textStyle={{color: colors.darkGray}}
                                                        onPress={() => this.setState({genderChecked: key})}
                                                    />
                                                    }
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Input disabled value={this.state.userData.email} label="EMAIL" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                <Input 
                                    keyboardType={'numeric'}
                                    onChangeText={phone => this.setState(prevState => ({userData: {
                                        ...prevState.userData,
                                        phone: phone
                                    }
                                    }))}
                                    value={this.state.userData.phone} 
                                    label="PHONE" labelStyle={{fontSize:13}} 
                                    inputContainerStyle={styles.inputContainer} 
                                    inputStyle={{fontSize:13}}/>
                                <Input 
                                    keyboardType={'numeric'}
                                    onChangeText={height => this.setState(prevState => ({userData: {
                                        ...prevState.userData,
                                        height: height
                                    }
                                    }))}
                                    value={this.state.userData.height!=null ? this.state.userData.height.toString(): ""} 
                                    label="YOUR HEIGHT" labelStyle={{fontSize:13}} 
                                    inputContainerStyle={styles.inputContainer} 
                                    inputStyle={{fontSize:13}}/>
                                <Input 
                                    keyboardType={'numeric'}
                                    onChangeText={weight => this.setState(prevState => ({userData: {
                                        ...prevState.userData,
                                        weight: weight
                                    }
                                    }))}
                                    value={this.state.userData.weight!=null ? this.state.userData.weight.toString(): ""} 
                                    label="YOUR WEIGHT" labelStyle={{fontSize:13}} 
                                    inputContainerStyle={styles.inputContainer} 
                                    inputStyle={{fontSize:13}}/>
                                <TouchableOpacity onPress={() => this.showDateTimePicker()} style={{paddingHorizontal: 10}}>
                                    <View style={styles.customBirthDate}>
                                        <Left>
                                            <Text style={{color: colors.darkGray, fontWeight: 'bold', fontSize: 13}}>BIRTHDAY</Text>
                                        </Left>
                                        <Right>
                                            <Text>{this.state.userData.birthday}</Text>
                                        </Right>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.selectedImage} style={{paddingHorizontal: 10}}>
                                    <View style={styles.customBirthDate}>
                                        <Left>
                                            <Text style={{color: colors.darkGray, fontWeight: 'bold', fontSize: 13}}>AVATAR</Text>
                                        </Left>
                                    </View>
                                </TouchableOpacity>
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                                datePickerModeAndroid={'calendar'}
                                mode={'date'}
                                />
                            </View>
                        </CardItem>
                        <CardItem style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.updateButton} onPress={this.updateInfo}>
                                <Text style={styles.updateButtonText}>Update</Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile