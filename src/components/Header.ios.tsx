import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useThemeContext } from '../hooks/theme';

export function Header() {
  const { theme, changeTheme } = useThemeContext();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme?.header?.background,
    },
    header: {
      paddingBottom: 44,
      backgroundColor: theme?.header?.background,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    headerText: {
      fontSize: 24,
      color: '#FFF',
      fontFamily: 'Poppins-Regular',
    },
    buttonText: {
      fontFamily: 'Poppins-Regular',
      color: '#FFF',
    },
    buttonChange: {
      borderWidth: 1,
      borderColor: '#fff',
      padding: 4,
      borderRadius: 4,
      left: '68%',
      top: '10%',
      position: 'absolute'
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        <TouchableOpacity
          onPress={changeTheme}
          style={styles.buttonChange}
        >
          <Text style={styles.buttonText}>
            Change Theme
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

