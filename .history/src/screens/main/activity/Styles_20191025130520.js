import { StyleSheet } from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    circleButton: {
        width: metrics.DEVICE_WIDTH*0.1, 
        height: metrics.DEVICE_WIDTH*0.1, 
        alignItems: 'center', 
        marginTop: metrics.DEVICE_HEIGHT*0.3, 
        backgroundColor: colors.primaryColor, 
        borderRadius: metrics.DEVICE_WIDTH*0.05, 
        marginHorizontal: 20, 
        justifyContent: 'center'
    },
    ovanButton: {
        width: metrics.DEVICE_WIDTH*0.5, 
        alignItems: 'center', 
        marginTop: metrics.DEVICE_HEIGHT*0.3, 
        backgroundColor: colors.primaryColor, 
        borderRadius: metrics.DEVICE_WIDTH*0.25, 
        paddingVertical: 2
    },
    options: {
        container: {
            backgroundColor: 'transparent',
            padding: 0,
            borderRadius: 5,
            width: 100,
        },
        text: {
            fontSize: 20,
            color: '#000',
            fontWeight: 'bold',
        }
    }
})