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
class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            checked: 'male'
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
    render() {
        let data = [{
            value: 'Vietnam',
          }, {
            value: 'Yemen',
          }, {
            value: 'Zambia',
          }]
        // const { navigation } = this.props
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
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: colors.darkGray, fontWeight: 'bold', marginRight: 20}}>MALE</Text>
                                                <TouchableOpacity onPress={() => this.setState({checked: 'male'})}>
                                                    <Radio selected={this.state.checked == 'male'? true : false}/>
                                                </TouchableOpacity>           
                                            </View>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: colors.darkGray, fontWeight: 'bold', marginRight: 20}}>FEMALE</Text>
                                                <TouchableOpacity onPress={() => this.setState({checked: 'female'})}>
                                                    <Radio selected={this.state.checked == 'female'? true : false}/>
                                                </TouchableOpacity>
                                            </View>
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
                        <CardItem>
                            <TouchableOpacity >
                                <Text>Update</Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default EditProfile