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
                    <Text style={{fontWeight: 'bold', fontSize: 15, paddingVertical: 10, paddingLeft: 20 }}>GOAL DETAILS</Text>
                </View>
            </View>
        );
    }
}
export default AddGoal