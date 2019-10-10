import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Card, Container, Content, CardItem, Thumbnail, Body, Left, Icon } from 'native-base'
import TextPage from "../../../components/TextPage"
import colors from '../../../constants/Color'
class Profile extends Component {
    renderSection = () => {
        return [
            {
                id: 1,
                icon: 'contact',
                title: '0 Friends',
                description: 'Connect with the fitness community'
            },
            {
                id: 2,
                icon: 'contacts',
                title: 'Groups & Communities',
                description: 'Fitness is more fun together'
            },
            {
                id: 3,
                icon: 'clipboard',
                title: 'Leaderboard',
                description: 'See how you match up'
            },
            {
                id: 4,
                icon: 'star',
                title: 'Records',
                description: 'Get Premium to see your personal bests'
            },
            {
                id: 5,
                icon: 'leaf',
                title: 'Premium Benefits',
                description: 'Go further with a Premium Membership'
            }
        ]
    }
    render() {
        // const { navigation } = this.props
        return (
            <Container>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body style={{alignItems: 'center'}}>
                                    <Thumbnail large source={{uri: "https://images.pexels.com/photos/2948260/pexels-photo-2948260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}} />
                                    <TextPage marginTop={10} color={colors.black} fontSize={15} fontWeight={'bold'}>KHƯƠNG THÁI</TextPage>
                                    <TextPage marginTop={5} color={colors.black} fontSize={11} fontWeight={'normal'}>Running user since 15 thg 8, 2019</TextPage>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            {this.renderSection().map(( item ) => (
                                 <CardItem key={item.id}>
                                    <TouchableOpacity>
                                        <Left>
                                            <Icon name={item.icon} style={{color:colors.white}}/>
                                            <TouchableOpacity style={{marginLeft:10}}>
                                                <TextPage color={colors.white} fontSize={11} fontWeight={'bold'}>{item.title}</TextPage>
                                                <TextPage color={colors.lightGray} fontSize={11} fontWeight={'normal'}>{item.description}</TextPage>
                                            </TouchableOpacity>
                                        </Left>
                                    </TouchableOpacity>
                                </CardItem>
                            ))}
                        </Card>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}
export default Profile;