import { StyleSheet } from 'react-native'
import metrics from '../../constants/Metric'
import colors from '../../constants/Color'
export default StyleSheet.create({
    forgotPasswordArea: {
        width: metrics.DEVICE_WIDTH*0.9, 
        alignItems: 'flex-end', 
        marginTop: 20, 
        marginRight: 20
    },
    loginButton: {
        paddingVertical: 10, 
        backgroundColor: '#0036BD', 
        width: metrics.DEVICE_WIDTH*0.85, 
        alignItems: 'center', 
        borderRadius: 5, 
        marginTop: 30
    }
})