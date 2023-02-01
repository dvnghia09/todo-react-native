import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 15,
        paddingVertical:10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      even: {
        backgroundColor: '#00ac47'
      },
      square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#53d6f2',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      },
      number: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '700',
      },
      content: {
        width: '60%',
        fontSize: 16,
        fontWeight: 'bold',
      },
      delete: {
        backgroundColor: 'red',
        color: '#fff',
        padding: 5,
        borderRadius: 10
      }
})

export default styles;