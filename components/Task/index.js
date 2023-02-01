import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Task = (props) => {
    const bg = props.stt % 2 === 0 ? styles.even : '';
  return (
    <View >
      <View style={styles.item}>
        <View style={[styles.square, bg]}>
          <Text style={styles.number}>{props.stt + 1}</Text>
        </View>
        <Text style={styles.content}>{props.data}</Text>
        <TouchableOpacity
            onPress={props.onDelete}
        >
            <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Task;