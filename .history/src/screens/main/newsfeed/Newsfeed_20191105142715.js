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
                <CardComponent nickname={'Teo Nguyen'} created_at={'14-10-1995'}/>
                <CardComponent nickname={'Ti Thai'} created_at={'14-10-1995'}/>
                <CardComponent nickname={'Teo Nguyen'} created_at={'14-10-1995'}/>
                <CardComponent nickname={'Teo Nguyen'} created_at={'14-10-1995'}/>
                </Content>
            </Container>
        );
    }
}
export default NewsFeed;