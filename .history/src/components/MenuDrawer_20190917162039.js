import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../constants/Color'
class MenuDrawer extends Component{
    navLink = ( nav, text ) => {
        return(
            <TouchableOpacity onPress={() => alert('123')}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        // const { name, color, size, backgroundButton, navigation } = this.props
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <Text style={{paddingTop: 40, color: colors.white}}>MenuDrawer</Text>
                </View>
                <View style={styles.bottomLink}>
                    {this.navLink('NewsFeed', 'NewsFeed')}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    topLinks: {
        height: 160,
        backgroundColor: colors.blue
    },
    bottomLink: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 10
    },
    link: {
        flex: 1,
        fontSize: 20, 
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    }
})
export default MenuDrawer