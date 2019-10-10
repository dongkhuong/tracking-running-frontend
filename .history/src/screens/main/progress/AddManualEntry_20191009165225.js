import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Button }from 'native-base'
import Modal from "react-native-modal"
import DateTimePicker from "react-native-modal-datetime-picker"
import colors from '../../../constants/Color'
import Select from './section-component/Select'
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
                    <Modal isVisible={this.state.isModalVisible} style={{backgroundColor: 'white', width: 50}}>
                        <View style={{ flex: 1 }}>
                            <Text>Hello!</Text>
                            <Button title="Hide modal" onPress={() => this.toggleModal()} />
                        </View>
                    </Modal>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry