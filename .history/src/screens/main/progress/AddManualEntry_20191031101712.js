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
            isModalVisible: false,
            duration: '00:00:00',
            distance: '0.00',
            calories: 123,
            date: '01/01/1900',
            time: '00:00:02',
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }

    hideModalCalories = () => {
        this.setState({ isModalVisible: false})
    }

    showModalCalories = () => {
        this.setState({ isModalVisible: true})
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
        const { duration, distance, calories, date, time } = this.state
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
                            <Select nameIcon='stopwatch' title="Durian" value={duration} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Select nameIcon='bicycle' title="Distance" value={distance + ' km'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleModal()}>
                            <Select nameIcon='flame' title="Calories" value={calories + ' cal'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
                            <Select nameIcon='calendar' title="Date" value={date} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showTimePicker()}>
                            <Select nameIcon='time' title="Time" value={time} />
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
                    
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry