import { Text, View } from "react-native";

import { styles } from "./styles";

interface TaskInfosProps {
  title: string,
  value: number,
  type?: 'PRIMARY' | 'SECONDARY'
}

export default function TaskInfos({ title, value, type = 'PRIMARY' }: TaskInfosProps) {
  return (
    <View style={styles.container}>
      <Text
        style={
          type !== 'PRIMARY'
            ? [styles.infoText, { color: '#4EA8DE' }]
            : styles.infoText
        }
      >
        {title}
      </Text>

      <View style={styles.infoValueContainer}>
        <Text style={styles.infoValue}>
          {value}
        </Text>
      </View>
    </View>
  )
}