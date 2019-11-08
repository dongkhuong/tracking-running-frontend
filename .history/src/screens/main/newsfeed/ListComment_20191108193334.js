import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Left, Body, Right, Card, CardItem, Thumbnail} from 'native-base'
import { Input } from 'react-native-elements'
import Icon from 'react-native-ionicons'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
import styles from './Styles'
class ListComment extends Component {
    constructor(props) {
        super(props)
        this.state={
            showTextArea: false,
            showCommentButton: true
        }
    }
    componentDidMount(){
        console.log(this.props.navigation.getParam('comment_id'))
    }
    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView>
                <Card>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', width: metrics.DEVICE_WIDTH*0.9}}>
                            <Thumbnail style={{marginRight:20}} small source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <Text style={{fontSize: 20, marginRight:20}}>10</Text>
                            <Thumbnail small source={{uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"}}/>
                            <TouchableOpacity style={styles.viewLikeButton}>
                                <Icon name="arrow-dropright" color={colors.primaryColor}/>
                            </TouchableOpacity>
                        </View>
                    </CardItem>
                    <CardItem style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Thumbnail style={{marginRight: 30}} source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} small/>
                            <View>
                                <Text style={{color: colors.darkGray, fontSize: 12, marginBottom: 5}}>RolandThai . 21/10/1997</Text>
                                <View style={{width: '90%'}}><Text>NativeBase Toast can be used to display quick warning or error messages. For Toast to work, you need to wrap your topmost component inside from native-base.</Text>
                                </View>
                            </View>
                        </View>
                    </CardItem>
                </Card>
            </ScrollView>
                {this.state.showCommentButton ? 
                ( <TouchableOpacity style={styles.commentCircleButton} onPress={() => this.setState({showTextArea: true, showCommentButton: false})}>
                        <Icon name="keypad" color={colors.white}/>
                  </TouchableOpacity>): null
                }
                {this.state.showTextArea ? 
                    (<View style={styles.commentAreaText}>
                        <Input
                        multiline = {true}
                        textAlignVertical="top"
                        inputContainerStyle={{paddingLeft:10}}
                        placeholder={"Add a comment, @ to mention, ..."}
                        placeholderTextColor={colors.lightGrays}
                        containerStyle={{width: metrics.DEVICE_WIDTH}}
                        // onChangeText={(content)=> this.setState({content:content})}
                        />
                        <TouchableOpacity style={styles.submitButtonComment} onPress={() => this.setState({showCommentButton: true, showTextArea: false})}>
                            <Icon name="close" color={colors.white}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButtonComment} onPress={() => this.setState({showCommentButton: true, showTextArea: false})}>
                            <Icon name="checkmark" color={colors.white}/>
                        </TouchableOpacity>
                    </View>) : null 
                }
            </View>
        );
    }
}
export default ListComment