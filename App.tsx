import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from "./src/routes";

export default function App() {
  return (
    <>
    <StatusBar 
      backgroundColor="#000"
      barStyle="light-content"
    />
    <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
