import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";

export default function ListEmpty() {
  return (
    <View style={styles.container}>
      <Feather name="clipboard" size={56} color="#333" />

      <Text style={styles.content}>
        <Text style={{ fontFamily: 'Inter_700Bold' }}>Você ainda não tem tarefas cadastradas{'\n'}</Text>

        <Text>Crie tarefas e organize seus itens a fazer</Text>
      </Text>
    </View>
  )
}