import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#21a3d0',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    iconWrapper: {
        width: 40,
        height: 40,
        backgroundColor: '#21a3d0',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems:'center'
    },
    icon: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default styles;