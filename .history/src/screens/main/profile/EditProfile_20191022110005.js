import React, { Component } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Left, Radio, ListItem, Right } from 'native-base'
import { Input } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'
import colors from '../../../constants/Color'
import styles from './Styles'
import DateTimePicker from "react-native-modal-datetime-picker"
import metrics from '../../../constants/Metric'
import { RadioButton } from 'react-native-paper'
import { CheckBox } from 'react-native-elements'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Constant } from '../../../../common'
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
                birthday: ''
            },
            datetimepicker: null
        }
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }

    handleDatePicked = date => {
        this.hideDateTimePicker();
        console.log("A date has been picked: ", date);
        this.setState({datetimepicker:date})
        console.log(this.state.datetimepicker)
    }
    async componentDidMount() {
        const asyncStorage = await AsyncStorage.getItem("token")
        if(asyncStorage) {
            await axios.get(Constant.rootAPI+'/users/profile', {headers: {'Authorization': `Bearer ${asyncStorage}`}}).then(({data}) => {
                let userData = {
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    gender: data.data.gender,
                    email: data.data.email,
                    phone: data.data.phone,
                    birthday: data.data.birthday
                }
                this.setState({ userData: userData })
            })
        }
        this.setState({genderChecked: this.state.userData.gender})
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../../assets/images/logoImage.jpg')} style={styles.thumbnail}/>
                                <View style={{flexDirection: 'column', flex: 1}}>
                                    <Input value={this.state.userData.firstname} label="FIRST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                    <Input value={this.state.userData.lastname} label="LAST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
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
                                <Input value={this.state.userData.email} label="EMAIL" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                <Input value={this.state.userData.phone} label="PHONE" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                <TouchableOpacity onPress={() => this.showDateTimePicker()} style={{paddingHorizontal: 10}}>
                                    <View style={styles.customBirthDate}>
                                        <Left>
                                            <Text style={{color: colors.darkGray, fontWeight: 'bold', fontSize: 13}}>BIRTHDATE</Text>
                                        </Left>
                                        <Right>
                                            <Text>{this.state.userData.birthday}</Text>
                                        </Right>
                                    </View>
                                </TouchableOpacity>
                                <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDateTimePicker}
                                />
                            </View>
                        </CardItem>
                        <CardItem style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity style={styles.updateButton}>
                                <Text style={styles.updateButtonText}>Update</Text>
                            </TouchableOpacity>
                            <Text>{JSON.stringify(this.state.datetimepicker)}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile