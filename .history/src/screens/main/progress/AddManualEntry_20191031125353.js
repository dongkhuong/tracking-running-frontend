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
            duration: null,
            distance: null,
            calories: null,
            date: null,
            time: null,
            tempCalories: null,
            tempDuration: null,
            tempDistance: null
        }
    }

    hideModalCalories = () => {
        this.setState({isModalCalories: false})
        if(this.state.tempCalories != 0) {
            this.setState({calories: this.state.tempCalories})
        }
    }

    cancelModalCalories = () => {
        this.setState({ tempCalories : 0 })
        this.setState({isModalCalories: false})
    }

    showModalCalories = () => {
        this.setState({isModalCalories: true})
    }

    hideModalDuration = () => {
        this.setState({isModalDuration: false})
        if(this.state.tempDuration != 0) {
            this.setState({duration: this.state.tempDuration})
        }
    }

    cancelModalDuration = () => {
        this.setState({ tempDuration : 0 })
        this.setState({isModalDuration: false})
    }

    showModalDuration = () => {
        this.setState({isModalDuration: true})
    }

    hideModalDistance = () => {
        this.setState({isModalDistance: false})
        if(this.state.tempDistance != 0) {
            this.setState({distance: this.state.tempDistance})
        }
    }

    cancelModalDistance = () => {
        this.setState({ tempDistance : 0 })
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

    submitActivity = async () => {
        const data = {
            distance: this.state.distance,
            duration: this.state.duration,
            calories: this.state.calories,
            start_time: this.state.time,
            date: this.state.date
        }
        await axios()
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
                        input={calories => this.setState({ tempCalories: calories})}
                    />
                    <CustomModal 
                        isModalVisible={this.state.isModalDistance} 
                        titleModal={'Distance'} 
                        unit={'km'} 
                        cancel={() => this.cancelModalDistance()} 
                        save={() => this.hideModalDistance()}
                        icon={'walk'}
                        placeholder={'01.00'}
                        input={distance => this.setState({ tempDistance: distance})}
                    />
                    <CustomModal 
                        isModalVisible={this.state.isModalDuration} 
                        titleModal={'Duration'} 
                        unit={'hh:mm:ss'} 
                        cancel={() => this.cancelModalDuration()} 
                        save={() => this.hideModalDuration()}
                        icon={'alarm'}
                        placeholder={'00:00:00'}
                        input={duration => this.setState({ tempDuration: duration})}
                    />
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                        <TouchableOpacity style={styles.addManualButton}>
                            <Text style={styles.addManualButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry