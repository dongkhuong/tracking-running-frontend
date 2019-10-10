import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
class MenuDrawer extends Component{
    render(){
        const { name, color, size, backgroundButton, navigation } = this.props
        return(
            <View style={styles.container}>

            </View>
        )
    }
}
const styles = StyleSheet({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    topLinks: {
        
    }
})
export default MenuDrawer