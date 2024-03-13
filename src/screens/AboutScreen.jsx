import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <SafeAreaView>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.header}>About Screen</Text>
        <Text>Written by: Shelyn Del Mundo</Text>
        <Text>Date: March 12, 2024</Text>
        <Text style={styles.bodyText}>
          This application allows the user to input their to do list.
        </Text>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  bodyText: {
    fontSize: 18,
    marginVertical: 10,
  },
});
