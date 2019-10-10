import { StyleSheet } from 'react-native'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        resizeMode: 'cover'
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoSize: {
        width: metrics.DEVICE_WIDTH*0.3,
        height: metrics.DEVICE_WIDTH*0.3  
    },
    logoText: {
        color: colors.white,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    }
})