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
            time: '00:00:02'
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
                                        placeholder='100'
                                        containerStyle={{width: metrics.DEVICE_WIDTH*0.3}}
                                        leftIcon={
                                            <Icon name='flame' size={24} color={colors.primaryColor} style={{width: 20}}/>
                                        }
                                        autoCompleteType={'off'} />
                                    <Text style={{paddingVertical: 12, fontSize: 18, color: colors.darkGray}}>Calories</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20, paddingTop: 40}}>
                                    <TouchableOpacity onPress={() => this.toggleModal()} style={{marginHorizontal: 20}}>
                                        <Text style={{fontWeight: 'bold'}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.toggleModal()} style={{marginHorizontal: 20}}>
                                        <Text style={{fontWeight: 'bold'}}>Save</Text>
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