import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Button }from 'native-base'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import Modal from "react-native-modal"
import DateTimePicker from "react-native-modal-datetime-picker"
import colors from '../../../constants/Color'
import Select from './section-component/Select'
import metrics from '../../../constants/Metric'
import styles from './Styles'
class AddManualEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            isTimePickerVisible: false,
            isModalVisible: false
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true })
    }

    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true })
    }

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }

    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false })
    }

    handleDatePicked = date => {
        this.hideDateTimePicker()
        console.log("A date has been picked: ", date)
    }

    handleTimePicked = time => {
        this.hideTimePicker();
        console.log("A Time has been picked: ", time)
    }

    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <Content>
                    <Card style={{alignItems: 'center'}}>
                        <View style={{paddingVertical: 20}}>
                            <Image source={require('../../../assets/images/runer-silhouette-running-fast.png')}/>
                            <Text>Running</Text>
                        </View>
                    </Card>
                    <Card>
                        <TouchableOpacity>
                            <Select nameIcon='stopwatch' title="Durian" time="01:00:00"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Select nameIcon='bicycle' title="Distance" time="0,00km"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleModal()}>
                            <Select nameIcon='flame' title="Calories" time="497 cal"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
                            <Select nameIcon='calendar' title="Date" time="09/10/2019"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showTimePicker()}>
                            <Select nameIcon='time' title="Time" time="01:00:00"/>
                        </TouchableOpacity>
                    </Card>
                    <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    />
                    <DateTimePicker
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this.handleTimePicked}
                    onCancel={this.hideTimePicker}
                    mode="time"
                    />
                    <Modal 
                    isVisible={this.state.isModalVisible} 
                    animationIn={'slideInUp'}
                    style={{backgroundColor: 'transparent'}}
                    deviceWidth={metrics.DEVICE_WIDTH}
                    deviceHeight={metrics.DEVICE_HEIGHT}
                    >
                        <View 
                        style={styles.modalCalories}>
                            <View>
                                <Text style={{padding: 20, fontWeight: 'bold', fontSize: 20}}>Calories</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <Input
                                        placeholder='Email@address.com'
                                        containerStyle={{width: metrics.DEVICE_WIDTH*0.4}}
                                        leftIcon={
                                            <Icon name='mail' size={20} color={colors.primaryColor} style={{width: 40}}/>
                                        }
                                        autoCompleteType={'off'} />
                                    <Text style={{paddingVertical: 10, fontSize: 20, color: colors.darkGray}}>Calories</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <TouchableOpacity>
                                        <Text>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry