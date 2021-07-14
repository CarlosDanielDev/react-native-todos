import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { useThemeContext } from '../hooks/theme';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const { theme } = useThemeContext();

  function handleAddNewTask(text: string) {
    addTask(text);
    setTask("");
  }


  const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: theme?.input?.inputFieldBackground,
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: theme?.input?.inputFieldBackground,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      color: theme?.input?.textColor
    },
    inputIOSShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84
    },
    inputAndroidShadow: {
      elevation: 5
    },
    addButton: {
      backgroundColor: theme?.input?.confirm,
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={styles.input}
        placeholderTextColor={theme?.input?.textColor}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        onSubmitEditing={() => handleAddNewTask(task)}
        value={task}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles.addButton}
        onPress={() => handleAddNewTask(task)}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

