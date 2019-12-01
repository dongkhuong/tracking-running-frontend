import React, { Component } from 'react'
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import Modal from "react-native-modal"
import metrics from '../../../../constants/Metric'
import colors from '../../../../constants/Color'
import styles from '../Styles'
class CustomModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isModalVisible, titleModal, unit, cancel, save, icon, placeholder, input } = this.props
        return (
            <Modal 
            isVisible={isModalVisible} 
            animationIn={'slideInUp'}
            style={{backgroundColor: 'transparent'}}
            deviceWidth={metrics.DEVICE_WIDTH}
            deviceHeight={metrics.DEVICE_HEIGHT}
            >
                <View 
                style={styles.modalCalories}>
                    <View>
                        <Text style={{padding: 20, fontWeight: 'bold', fontSize: 20}}>{titleModal}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Input
                                placeholder={placeholder}
                                containerStyle={{width: metrics.DEVICE_WIDTH*0.35, marginLeft: 0}}
                                leftIcon={
                                    <Icon name={icon} size={22} color={colors.primaryColor} style={{width: 20}}/>
                                }
                                onChangeText={input}
                                autoCompleteType={'off'}
                                
                            />
                            <Text style={{paddingVertical: 12, fontSize: 18, color: colors.darkGray}}>{unit}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20, paddingTop: 40}}>
                            <TouchableOpacity onPress={cancel} style={{marginHorizontal: 20}}>
                                <Text style={{fontWeight: 'bold'}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={save} style={{marginHorizontal: 20}}>
                                <Text style={{fontWeight: 'bold'}}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}
export default CustomModal