import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import colors from '../../../constants/Color'
import styles from './Styles'
import Icon from 'react-native-ionicons'
class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }
    render() {
       return(
           <View style={{flex: 1}}>
                <Input
                multiline = {true}
                numberOfLines={5}
                textAlignVertical="top"
                inputContainerStyle={{borderBottomWidth: 0, paddingTop: 0}}
                placeholder={"What's going on?"}
                placeholderTextColor={colors.lightGrays}
                onChangeText={(content)=> this.setState({content:content})}
                />
                <View style={styles.actionPost}>
                    <View>
                        <TouchableOpacity>
                            <Icon name={'images'} color={colors.primaryColor}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Icon name={'add'}/>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
       ) 
    }
}
export default AddPost