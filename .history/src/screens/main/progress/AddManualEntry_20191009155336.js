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
        const title = [
            {
                id: 1,
                nameIcon: 'stopwatch',
                text: 'Duration',
                time: '01:00:00'
            },
            {
                id: 2,
                nameIcon: 'bicycle',
                text: 'Distance',
                time: '0,00 km'
            },
            {
                id: 3,
                nameIcon: 'flame',
                text: 'Calories',
                time: '497 cal'
            },
            {
                id: 4,
                nameIcon: 'calendar',
                text: 'Date',
                time: '09/10/2019'
            },
            {
                id: 5,
                nameIcon: 'time',
                text: 'time',
                time: '13:52'
            }
        ]
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
                        
                        
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default AddManualEntry