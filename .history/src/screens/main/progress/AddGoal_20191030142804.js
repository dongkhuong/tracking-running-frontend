import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Goal from './section-component/Goal'
import { Left } from 'native-base'
import styles from './Styles'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
class AddGoal extends Component {
    render() {
        return (
            <View style={styles.addGoalContainer}>
                <View style={{flex: 1, borderBottomWidth:1, borderColor: colors.darkGray, alignItems: 'center', justifyContent: 'center'}}>
                    <Goal radius={70} borderWidth={8}/>
                    <View style={{flex: 1, flexDirection: 'row', paddingVertical: 20}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Icon name="time" color={colors.primaryColor} style={{width: 30}}/>
                            <Text style={{fontWeight: 'bold'}}>1 km</Text>
                            <Text style={{color: colors.darkGray, fontSize: 12}}>Left to Goal</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Icon name="time" color={colors.primaryColor} style={{width: 30}}/>
                            <Text style={{fontWeight: 'bold'}}>09:38</Text>
                            <Text style={{color: colors.darkGray, fontSize: 12}}>Remaining</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, paddingVertical: 20, paddingLeft: 10 }}>GOAL DETAILS</Text>
                    <View style={{flexDirection: 'row',marginBottom: 20}}>
                        <View style={{flex: 1, flexDirection: 'row',paddingLeft: 20}}>
                            <View style={{marginRight: 10}}>
                                <Icon name="time" color={colors.primaryColor} style={{width: 30}}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: 'bold'}}>30/10/2019</Text>
                                <Text style={{color: colors.darkGray, fontSize: 12}}>Goal Started</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20}}>
                            <View style={{marginRight: 10}}>
                                <Icon name="repeat" color={colors.primaryColor} style={{width: 30}}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: 'bold'}}>Per Day</Text>
                                <Text style={{color: colors.darkGray, fontSize: 12}}>Recurring</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'row',paddingLeft: 20}}>
                            <View style={{marginRight: 10}}>
                                <Icon name="walk" color={colors.primaryColor} style={{width: 30}}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: 'bold'}}>-- km</Text>
                                <Text style={{color: colors.darkGray, fontSize: 12}}>Avg per day</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', paddingLeft: 20}}>
                            <View style={{marginRight: 10}}>
                                <Icon name="trophy" color={colors.primaryColor} style={{width: 30}}/>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontWeight: 'bold'}}>0 / 1 days</Text>
                                <Text style={{color: colors.darkGray, fontSize: 12}}>Goal achieved</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default AddGoal