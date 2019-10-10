import { StyleSheet }  from 'react-native'
import colors from '../../../constants/Color'
export default StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    resetPadding: {
        paddingLeft: 0,
        paddingRight: 0, 
        paddingTop:0, 
        paddingBottom: 0
    },
    cardItemAdd: {
        borderTopWidth: 0.5, 
        borderTopColor: '#B6B6b6'
    },
    touchableTextStyle: {
        color: colors.primaryColor, 
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})