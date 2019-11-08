import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Goal from './section-component/Goal'
import { Left } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
class AddGoal extends Component {
    render() {
        return (
            <View style={styles.addGoalContainer}>
                <View style={{flex: 1, borderBottomWidth:1, borderColor: colors.darkGray, alignItems: 'center'}}>
                    <Goal radius={70} borderWidth={8}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, paddingVertical: 10, paddingLeft: 10 }}>GOAL DETAILS</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>30/10/2019</Text>
                            <Text>Goal Started</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>Per Day</Text>
                            <Text>Recurring</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default AddGoal