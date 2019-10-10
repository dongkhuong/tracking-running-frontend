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
    submitButton: {
        paddingVertical: 10, 
        backgroundColor: '#0036BD', 
        width: metrics.DEVICE_WIDTH*0.85, 
        alignItems: 'center', 
        borderRadius: 5, 
        marginTop: 30
    },
    accountArea: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 30
    },
    bigTitle: {
        fontSize: 30, 
        color: '#0036BD', 
        fontWeight: 'bold', 
        marginTop: 10
    }
})