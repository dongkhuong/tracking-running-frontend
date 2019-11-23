import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image, TouchableHighlight, ToastAndroid, Alert } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body, Button }from 'native-base'
import DateTimePicker from "react-native-modal-datetime-picker"
import Select from './section-component/Select'
import styles from './Styles'
import CustomModal from './section-component/CustomModal'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { Constant } from '../../../../common'
import moment from "moment"
class AddManualEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
            isTimePickerVisible: false,
            isModalCalories: false,
            isModalDuration: false,
            isModalDistance: false,
            activity_id: null,
            duration: null,
            distance: null,
            calories: null,
            averagePace: null,
            averageSpeed: null,
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
        console.log(date)
        const dateFormat = new Date(date)
        let day = parseInt(dateFormat.getDate())
        if(day < 10){
            day = "0" + day
        }
        let month = parseInt(dateFormat.getMonth()) + 1
        if(month < 10){
            month = "0" + month
        }
        const year = dateFormat.getFullYear().toString()
        const start_date = "" + year + "-" + month + "-" + day
        this.setState({date: start_date})
    }

    handleTimePicked = time => {
        this.hideTimePicker();
        const start_time = String(time).substring(16,24)
        this.setState({time: start_time})
    }
    buttonClickded = () => {
        Alert.alert(
          "",
          "Do you want to share this activity?",
          [
            { text: "Share Now", onPress: () => this.props.navigation.navigate('CreatePost',{activity_id: this.state.activity_id})},
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );
      };    
    submitActivity = async () => {
        try{
            const asyncStorage = await AsyncStorage.getItem("token")
            if(this.state.distance != null && this.state.duration !=null) 
            {
            let time= String(this.state.duration).split(":")
            for(let i=0; i < time.length; i++) {
                time[i] = parseInt(time[i])
            }
            let timeDecimal = (time[0]*60 + time[1] + time[2]/60)
            let distance = parseFloat(this.state.distance).toFixed(2)
            const averagePaceDecimal = parseFloat(timeDecimal/distance).toFixed(2)
            const averageSpeed = parseFloat(60/averagePaceDecimal)
            const averagePace = moment().startOf('day').add(averagePaceDecimal, 'hours').format('HH:mm')
            await this.setState({averagePace: averagePace, averageSpeed: averageSpeed})
            }
            const activity = await axios.post(Constant.rootAPI+'/activities',
            {
                distance: this.state.distance,
                duration: this.state.duration,
                calories: this.state.calories,
                start_time:  this.state.time,
                date: this.state.date,
                average_pace: this.state.averagePace,
                average_speed: this.state.averageSpeed
            },
            {headers: {'Authorization': `Bearer ${asyncStorage}`}})

            if(activity.data.business_code == 1) {
                this.setState({activity_id: activity.data.data.id})
                ToastAndroid.show("Add activity successfully!", ToastAndroid.SHORT)
                this.buttonClickded()
            } else {
                ToastAndroid.show("Failed to add activity, please fill out all fields in this form!", ToastAndroid.SHORT)
                throw new Error("Failed to add activity!")
            }
            
            } catch (err) {
                ToastAndroid.show("Failed to add activity, please fill out all fields in this form!", ToastAndroid.SHORT)
                throw new Error(err)
        }
    }

    render() {
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
                            <Select nameIcon='stopwatch' title="Duration" value={duration ? duration : '00:00:00'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showModalDistance()}>
                            <Select nameIcon='bicycle' title="Distance" value={distance ? distance + ' km' : '0.00 km'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showModalCalories()}>
                            <Select nameIcon='flame' title="Calories" value={calories ? calories + ' cal' : '0 cal'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
                            <Select nameIcon='calendar' title="Date" value={date ? date : new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showTimePicker()}>
                            <Select nameIcon='time' title="Time" value={time? time: "00:00:00"} />
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
                        <TouchableOpacity style={styles.addManualButton} onPress={this.submitActivity}>
                            <Text style={styles.addManualButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry