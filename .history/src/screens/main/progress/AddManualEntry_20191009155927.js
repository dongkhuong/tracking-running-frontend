import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Card, Container, Content, CardItem, Left, Thumbnail, Right, Body }from 'native-base'
import DateTimePicker from "react-native-modal-datetime-picker"
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
                        <Select nameIcon='stopwatch' title="Durian" time="01:00:00"/>
                        <Select nameIcon='bicycle' title="Distance" time="0,00km"/>
                        <Select nameIcon='flame' title="Calories" time="497 cal"/>
                        <Select nameIcon='date' title="Date" time="09/10/2019"/>
                        <Select nameIcon='time' title="Time" time="14:40"/>
                        
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry