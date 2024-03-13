import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <Text>Copyright &copy; 2024 Shelyn Del Mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default MainLayout;
