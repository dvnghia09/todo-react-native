import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import styles from './style';

const Input = (props) => {
  const [text, onChangeText] = React.useState("");

  const handleAddTask = () => {
    if (text.length === 0) {
        alert('Vui lòng nhập công việc của bạn !');
        return false;
    }
    props.onAddTask(text);
    onChangeText('')
    Keyboard.dismiss();
  }

  return (
    <View style={styles.addTask}>
        <TextInput 
            placeholder="Enter task ..." 
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={text}
        />
        <TouchableOpacity
            onPress={handleAddTask}
        >
        <View 
            style={styles.iconWrapper}
        >
            <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Input;