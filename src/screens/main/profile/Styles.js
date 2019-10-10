import { StyleSheet }  from 'react-native'
import metrics from '../../../constants/Metric'
import colors from '../../../constants/Color'
import fonts from '../../../constants/Font'
export default StyleSheet.create({
    inputContainer: {
        height:20, 
        borderBottomWidth: 1, 
        marginBottom: 10,
        marginTop: 2, 
        paddingBottom: 5
    },
    customBirthDate: {
        flex: 1, flexDirection: 'row', 
        borderBottomWidth: 1, 
        paddingBottom: 15, 
        marginTop: 10, 
        borderBottomColor: colors.darkGray
    },
    thumbnail: {
        width: metrics.DEVICE_WIDTH*0.2, 
        height: metrics.DEVICE_WIDTH*0.2, 
        borderRadius: metrics.DEVICE_WIDTH*0.5
    }
})