import { StyleSheet }  from 'react-native'
import colors from '../../../constants/Color'
import metrics from '../../../constants/Metric'
export default StyleSheet.create({
    commentCircleButton: {
        position: 'absolute', 
        borderRadius: 25, 
        width: 40, 
        height: 40, 
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
        backgroundColor: 'transparent', 
        width: 30, 
        height: 30, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15, 
        right: 10
    },
    closeButtonComment: {
        backgroundColor: 'transparent', 
        width: 30, 
        height: 30, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 15, 
        right: 50
    },
    viewLikeButton: {
        backgroundColor: 'transparent', 
        width: 40, 
        height: 40, 
        position: 'absolute', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 20, 
        right: 0
    },
    actionPost: {
        position: 'absolute', 
        width: metrics.DEVICE_WIDTH,
        height: 'auto',
        backgroundColor: colors.lightGray,
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: colors.gray,
        paddingVertical: 5,
        flexDirection: 'row', 
        bottom: 0, 
        paddingHorizontal: 20
    },
    
})