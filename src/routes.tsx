import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./domains/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeBackgroundColor: "#000",
        inactiveBackgroundColor: "#000",
        showLabel: false,
        keyboardHidesTabBar: true,
      }}>
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}