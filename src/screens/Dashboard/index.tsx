import { useState } from "react";
import { Alert, FlatList, Image, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";

import TaskInfos from "../../components/TaskInfos";
import ListEmpty from "../../components/ListEmpty";
import logo from '../../assets/Logo.png'
import Task from "../../components/Task";


export default function Dashboard() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskInput, setTaskInput] = useState('')
  const [tasksDone, setTasksDone] = useState<string[]>([])

  function handleAddTask() {
    if (taskInput === '') {
      return Alert.alert('Erro', 'Digite uma tarefa para poder adicioná-la')
    }

    setTasks(prevState => [...prevState, taskInput])
    setTaskInput('')
  }

  function handleRemoveTask(task: string) {
    const newTasks = tasks.filter(item => item !== task)

    setTasks(newTasks)
  }

  function handleDoneTask(task: string) {
    const includes = tasksDone.includes(task)

    if (!includes) {
      setTasksDone(prevState => [...prevState, task])
    } else {
      const newtasks = tasksDone.filter(item => item !== task)
      setTasksDone(newtasks)
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setTaskInput}
          value={taskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor='#808080'
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={handleAddTask}
        >
          <Feather name="plus-circle" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        {/* Componente das informações sobre as tasks */}
        <TaskInfos
          title="Criadas"
          value={tasks.length}
          type="SECONDARY"
        />

        <TaskInfos
          title="Concluídas"
          value={tasksDone.length}
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            task={item}
            onRemove={() => handleRemoveTask(item)}
            onDoneTask={() => handleDoneTask(item)}
          />
        )}

        ListEmptyComponent={() => (
          <ListEmpty />
        )}
      />

    </View>
  )
}