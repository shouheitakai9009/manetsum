/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'

import React from 'react'

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { BottomTabBar3Column } from '~/components/organisms/BottomTabBar3Column'

import { Home } from '~/components/pages/Home'
import { Card } from '~/components/pages/Card'

const App = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props: BottomTabBarProps) => <BottomTabBar3Column {...props} />}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Card" component={Card} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
