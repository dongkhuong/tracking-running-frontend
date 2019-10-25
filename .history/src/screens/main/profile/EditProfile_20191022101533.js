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
            checked: false,
            userData: {
                firstname: '',
                lastname: '',
                gender: '',
                email: '',
                phone: '',
                birthday: ''
            }
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
                                    <Input label="FIRST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                    <Input label="LAST NAME" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                                        <CheckBox
                                            center
                                            title='MALE'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={false}
                                            containerStyle={{backgroundColor: null, borderWidth: 0}}
                                            textStyle={{color: colors.darkGray}}
                                        />
                                        <CheckBox
                                            center
                                            title='FEMALE'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                            checked={true}
                                            containerStyle={{backgroundColor: null, borderWidth: 0}}
                                            textStyle={{color: colors.darkGray}}
                                        />
                                    </View>
                                </View>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={{flexDirection: 'column', flex: 1}}>
                                <Input label="EMAIL" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                <Input label="PHONE" labelStyle={{fontSize:13}} inputContainerStyle={styles.inputContainer} inputStyle={{fontSize:13}}/>
                                <TouchableOpacity onPress={() => this.showDateTimePicker()} style={{paddingHorizontal: 10}}>
                                    <View style={styles.customBirthDate}>
                                        <Left>
                                            <Text style={{color: colors.darkGray, fontWeight: 'bold', fontSize: 13}}>BIRTHDATE</Text>
                                        </Left>
                                        <Right>
                                            <Text>14 thg 10, 1997</Text>
                                        </Right>
                                    </View>
                                </TouchableOpacity>
                                {/* <Dropdown
                                label='COUNTRY'
                                data={data}
                                value={'Please Choose'}
                                containerStyle={{paddingHorizontal:10, borderBottomColor: 'red'}}
                                baseColor={colors.darkGray}
                                /> */}
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
                        </CardItem>
                        <Text>{this.state.userData.birthday}</Text>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile