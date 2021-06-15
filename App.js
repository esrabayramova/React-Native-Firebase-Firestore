import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetails from './components/BookDetails';
import BookList from './components/BooksList';
import NewBook from './components/NewBook';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name = "BookList" component = {BookList} />
      <Stack.Screen name = "BookDetails" component = {BookDetails} />
      <Stack.Screen name = "NewBook" component = {NewBook} />
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}