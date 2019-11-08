import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Goal from './section-component/Goal'
import styles from './Styles'
import colors from '../../../constants/Color'
class AddGoal extends Component {
    render() {
        return (
            <View style={styles.addGoalContainer}>
                <View style={{flex: 1, borderBottomWidth:1, borderColor: colors.darkGray, width: '100%'}}>
                    <Goal radius={70} borderWidth={8}/>
                </View>
                <View style={{flex: 1}}>

                </View>
            </View>
        );
    }
}
export default AddGoal