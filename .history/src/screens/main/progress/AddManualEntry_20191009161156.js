import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body }from 'native-base'
import DateTimePicker from "react-native-modal-datetime-picker"
import TimePicker from "react-native-modal-datetime-picker"
import colors from '../../../constants/Color'
import Select from './section-component/Select'
class AddManualEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDateTimePickerVisible: false,
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
                        <TouchableOpacity>
                            <Select nameIcon='flame' title="Calories" time="497 cal"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
                            <Select nameIcon='calendar' title="Date" time="09/10/2019"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.showDateTimePicker()}>
                            <Select nameIcon='time' title="Time" time="01:00:00"/>
                        </TouchableOpacity>
                    </Card>
                    <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    />
                    <TimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    />
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry