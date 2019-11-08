import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Button }from 'native-base'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import DateTimePicker from "react-native-modal-datetime-picker"
import colors from '../../../constants/Color'
import Select from './section-component/Select'
import metrics from '../../../constants/Metric'
import styles from './Styles'
import CustomModal from './section-component/CustomModal'
class AddManualEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            isTimePickerVisible: false,
            isModalCalories: false,
            isModalDuration: false,
            isModalDistance: false,
            duration: '00:00:00',
            distance: '0.00',
            calories: 123,
            date: '01/01/1900',
            time: '00:00:02',
            temp: null
        }
    }

    hideModalCalories = () => {
        this.setState({isModalCalories: false})
        if(this.state.temp != 0) {
            this.setState({calories: this.state.temp})
        }
    }

    cancelModalCalories = () => {
        this.setState({ temp : 0 })
        this.setState({isModalCalories: true})
    }

    showModalCalories = () => {
        this.setState({isModalCalories: true})
    }

    hideModalDuration = () => {
        this.setState({isModalDuration: false})
    }

    showModalDuration = () => {
        this.setState({isModalDuration: true})
    }

    hideModalDistance = () => {
        this.setState({isModalDistance: false})
    }

    showModalDistance = () => {
        this.setState({isModalDistance: true})
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
                        <TouchableOpacity onPress={() => this.showModalDuration()}>
                            <Select nameIcon='stopwatch' title="Durian" value={duration} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showModalDistance()}>
                            <Select nameIcon='bicycle' title="Distance" value={distance + ' km'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showModalCalories()}>
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
                    mode={"date"}
                    />
                    <DateTimePicker
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this.handleTimePicked}
                    onCancel={this.hideTimePicker}
                    mode={"time"}
                    />
                    <CustomModal 
                        isModalVisible={this.state.isModalCalories} 
                        titleModal={'Calories'} 
                        unit={'cal'} 
                        cancel={() => this.cancelModalCalories()} 
                        save={() => this.hideModalCalories()}
                        icon={'flame'}
                        placeholder={'100'}
                        input={calories => this.setState({ temp: calories})}
                    />
                    <CustomModal 
                        isModalVisible={this.state.isModalDistance} 
                        titleModal={'Distance'} 
                        unit={'km'} 
                        cancel={() => this.cancelModalDistance()} 
                        save={() => this.hideModalDistance()}
                        icon={'walk'}
                        placeholder={'01.00'}
                    />
                    <CustomModal 
                        isModalVisible={this.state.isModalDuration} 
                        titleModal={'Duration'} 
                        unit={'hh:mm:ss'} 
                        cancel={() => this.cancelModalDuration()} 
                        save={() => this.hideModalDuration()}
                        icon={'alarm'}
                        placeholder={'00:00:00'}
                    />
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry