import styles from './App.style';
import { Alert, Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import Input from './components/Form';
import { useEffect, useState } from 'react';

export default function App() {
  const [task, setTask] = useState([])

  const handleAddTak = (text) => {
    setTask([...task, text]);
  }

  const handleDelete = (id) => {
    Alert.alert(
      "Cảnh báo",
      "Bạn có muốn xóa công việc này không ?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          let taskList = [...task];
          taskList.splice(id, 1);
          setTask(taskList);
        }}
      ]
    );
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // })

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
          <ScrollView style={{marginBottom: 30}}>
            {
              task.map((item, index) => {
                return <Task key={index} stt={index} data={item} onDelete={() => handleDelete(index)} />
              })
            }
          </ScrollView>
      </View>
      <Input onAddTask={handleAddTak}/>
    </View>
  );
}
