import { StyleSheet } from 'react-native' 
import colors from '../../../constants/Color'
export default StyleSheet.create({
    container: {
    //     flex: 1,
    //     height: 'auto'
    //     // marginBottom:0
    },
    commentCircleButton: {
        position: 'absolute', 
        borderRadius: 25, 
        width: 50, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: colors.primaryColor
    },
    commentAreaText: {
        width: '100%',
        backgroundColor: colors.white,
        position: 'absolute',
        borderTopWidth: 1, 
        borderTopColor: colors.gray,
        borderTopWidth: 1, 
        borderTopColor: colors.gray, 
        bottom: 0,
        paddingHorizontal: 0
    }
})