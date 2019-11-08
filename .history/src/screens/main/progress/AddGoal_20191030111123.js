import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Goal from './section-component/Goal'
import styles from './Styles'
class AddGoal extends Component {
    render() {
        return (
            <View style={styles.addGoalContainer}>
                <Goal/>
            </View>
        );
    }
}
export default AddGoal