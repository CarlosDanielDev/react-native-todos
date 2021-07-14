import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { useThemeContext } from '../hooks/theme';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { theme } = useThemeContext();

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle) {
      const data = {
        title: newTaskTitle,
        done: false,
        id: new Date().getTime()
      };
      setTasks(prevState => [data, ...prevState]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const updatedTasks = tasks.map(item => {
      if(item.id === id) item.done = !item.done
      return item
    })
    setTasks(updatedTasks)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <View
      style={{
        backgroundColor: theme?.background,
        flex: 1
      }}
    >
      
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  )
}