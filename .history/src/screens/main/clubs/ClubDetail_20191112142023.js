import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Thumbnail } from 'native-base'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import Icon from 'react-native-ionicons'
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper'
class ClubDetail extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: '#E7EAED'}}>
               <View style={{height: metrics.DEVICE_HEIGHT*0.2}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/backgroundImage.jpg')} style={{height: '100%', width: '100%'}}/>
                    </TouchableOpacity>
               </View>
               <View style={{height: metrics.DEVICE_HEIGHT*0.4, alignItems: 'center', backgroundColor: colors.white}}>
                    <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SACOMBANK KV.BTB Runners Club</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Icon name={'pin'} style={{marginRight: 10}} color={colors.darkGray}/><Text style={{color: colors.darkGray}}>Da Nang</Text>
                    </View>
                    <View style={{width: metrics.DEVICE_WIDTH*0.7}}>
                        <Text style={{textAlign: 'center'}}>
                        Contrary to popular belief, Lorem Ipsum is not simply College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderColor: colors.darkGray, justifyContent: 'flex-end', alignItems:'flex-end', paddingBottom: 10}}>
                   <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{textAlign: 'center'}}>144</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>RUNNERS</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={{flex: 1}}>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center'}}>3</Text>
                            <Text style={{textAlign: 'center', fontSize: 12, color: colors.darkGray}}>POSTS</Text>
                        </View>
                   </TouchableOpacity>
               </View>
               </View>
               <Text style={{paddingVertical: 5, paddingLeft: 10, fontWeight: 'bold'}}>POSTS</Text>
               <View>
                    <Card>
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        />
                        <Card.Cover source={{uri: "https://picsum.photos/700"}}/>
                        <Card.Content>
                            <Paragraph>Lorem Ipsum - All the facts - Lipsum generator</Paragraph>    
                        </Card.Content> 
                        <Card.Actions>
                            <View style={{flex: 1}}>
                                <View s>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} >
                                        <Icon name="heart" size={22} color={colors.darkGray}/>
                                        <Text style={{fontSize: 11, marginLeft: 5}}>1 Like</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} >
                                        <Icon name="heart" size={22} color={colors.darkGray}/>
                                        <Text style={{fontSize: 11, marginLeft: 5}}>1 Like</Text>
                                    </TouchableOpacity>
                                </View>
                            <View>
                        </Card.Actions>       
                    </Card>
               </View>
            </ScrollView>
        )
    }
}
export default ClubDetail