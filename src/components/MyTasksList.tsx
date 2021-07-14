import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { useThemeContext } from '../hooks/theme';



type Task = {
  id: number
  title: string
  done: boolean
}

interface MyTasksListProps {
  tasks: Task[]
  onPress: (id: number) => void
  onLongPress: (id: number) => void
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { theme } = useThemeContext();

  const styles = StyleSheet.create({
    header: {
      color: theme?.taskList?.title,
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold'
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme?.taskList?.borderRadio,
      marginRight: 10
    },
    taskText: {
      color: theme?.taskList?.textColorDone || '#3D3D4D',
    },
    taskButtonDone: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      backgroundColor: theme?.taskList?.backgroundTaskDone || 'rgba(25, 61, 223, 0.1)',
      flexDirection: 'row',
      alignItems: 'center'
    },
    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: theme?.taskList?.backgroundRadioDone || '#273FAD',
      marginRight: 10
    },
    taskTextDone: {
      color: theme?.taskList?.textColorDone || '#A09CB1',
      textDecorationLine: 'line-through'
    }
  });

  function FlatListHeaderComponent() {
    return (
      <View>
        <Text style={styles.header}>Minhas tasks</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={item.done ? styles.taskButtonDone : styles.taskButton}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text 
              style={item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

