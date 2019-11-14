import { StyleSheet }  from 'react-native'
export default StyleSheet.create({
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
        // width: metrics.DEVICE_WIDTH,
        backgroundColor: colors.white,
        position: 'absolute',
        borderTopWidth: 1, 
        borderTopColor: colors.gray,
        bottom: 0,
        paddingHorizontal: 0,
        justifyContent: 'center'
    },
    submitButtonComment: {
        backgroundColor: colors.primaryColor, 
        width: 30, 
        height: 30, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15, 
        right: 10
    },
    closeButtonComment: {
        backgroundColor: colors.primaryColor, 
        width: 30, 
        height: 30, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15, 
        right: 50
    },
})