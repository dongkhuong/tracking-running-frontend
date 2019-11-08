import React, { Component } from "react"
import { View, Text } from "react-native"
import styles from './Styles'
import { Container, Content } from 'native-base'
import CardComponent from '../../../components/CardComponent'
class NewsFeed extends Component {
    render() {
        // const { navigation } = this.props
        return (
            <Container style={styles.container}>
                <Content>
                <CardComponent 
                    nickname={'Teo Nguyen'} 
                    created_at={'14-10-1995'}
                    distance={'0.78'}
                    pace={'10:20'}
                    time={'10:02:01'}
                    content={'Afternoon ride'}/>
                <CardComponent 
                    nickname={'Ti Thai'} 
                    created_at={'14-10-1995'}
                    distance={'0.78'}
                    pace={'10:20'}
                    time={'10:02:01'}
                    content={'Afternoon ride'}/>
                </Content>
            </Container>
        );
    }
}
export default NewsFeed;