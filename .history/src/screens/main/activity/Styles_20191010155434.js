import { StyleSheet } from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
export default StyleSheet.create({
    circleButton: {
        width: metrics.DEVICE_WIDTH*0.1, 
        height: metrics.DEVICE_WIDTH*0.1, 
        alignItems: 'center', 
        marginTop: metrics.DEVICE_HEIGHT*0.35, 
        backgroundColor: colors.primaryColor, 
        borderRadius: metrics.DEVICE_WIDTH*0.05, 
        marginHorizontal: 20, 
        justifyContent: 'center'
    },
    ovanButton: {
        width: metrics.DEVICE_WIDTH*0.5, 
        alignItems: 'center', 
        marginTop: metrics.DEVICE_HEIGHT*0.35, 
        backgroundColor: colors.primaryColor, 
        borderRadius: metrics.DEVICE_WIDTH*0.25, 
        paddingVertical: 2
    }
})