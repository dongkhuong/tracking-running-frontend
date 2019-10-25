import AsyncStorage from '@react-native-community/async-storage'
export const Constant = {
    rootAPI: 'http://10.0.3.2:8000/api',
    token: 'token',
    currentUser: 'currentUser'
}
export const httpRequest = async () => {
    const asyncStorage = await AsyncStorage.getItem("token")
    if(asyncStorage){
    const instance = axios.create({
        baseURL: Constant.rootAPI,
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+asyncStorage}
    })
    return instance
    } else {
        console.log(" Can not access to routes API")
    }
}