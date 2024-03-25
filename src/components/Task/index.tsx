import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { useState } from "react";

interface TaskProps {
  task: string,
  onRemove: () => void;
  onDoneTask: () => void;
}

export default function Task({ task, onRemove, onDoneTask }: TaskProps) {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.taskBox}
        onPress={() => {
          setChecked(!checked)
          onDoneTask()
        }}
      >
        <View
          style={
            !checked
              ? styles.checkbox
              : [styles.checkbox, { backgroundColor: '#8284FA', borderColor: '#8284fa' }]
          }
        >
          <Feather style={checked ? { opacity: 1 } : { opacity: 0 }} name="check" size={10} color="#fff" />
        </View>

        <Text
          style={
            !checked
              ? styles.taskText
              : [styles.taskText, { textDecorationLine: 'line-through', color: '#808080' }]
          }
          numberOfLines={2}
          lineBreakStrategyIOS="push-out"
        >
          {task}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.textRemoveButton}
        onPress={onRemove}
      >
        <Feather name='trash-2' size={14} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}