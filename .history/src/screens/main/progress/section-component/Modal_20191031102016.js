import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import Modal from "react-native-modal"
import metrics from '../../../../constants/Metric'
import colors from '../../../../constants/Color'
import styles from '../Styles'
class Modal extends Component {
    render() {
        return (
            <Modal 
            isVisible={this.state.isModalVisible} 
            animationIn={'slideInUp'}
            style={{backgroundColor: 'transparent'}}
            deviceWidth={metrics.DEVICE_WIDTH}
            deviceHeight={metrics.DEVICE_HEIGHT}
            >
                <View 
                style={styles.modalCalories}>
                    <View>
                        <Text style={{padding: 20, fontWeight: 'bold', fontSize: 20}}>Calories</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Input
                                placeholder='100'
                                containerStyle={{width: metrics.DEVICE_WIDTH*0.3}}
                                leftIcon={
                                    <Icon name='flame' size={24} color={colors.primaryColor} style={{width: 20}}/>
                                }
                                autoCompleteType={'off'}
                                onChangeText={calories => this.setState({ calories: calories })}
                                value={this.state.calories} />
                            <Text style={{paddingVertical: 12, fontSize: 18, color: colors.darkGray}}>Calories</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20, paddingTop: 40}}>
                            <TouchableOpacity onPress={() => this.toggleModal()} style={{marginHorizontal: 20}}>
                                <Text style={{fontWeight: 'bold'}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.hideModalCalories()} style={{marginHorizontal: 20}}>
                                <Text style={{fontWeight: 'bold'}}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
export default Modal