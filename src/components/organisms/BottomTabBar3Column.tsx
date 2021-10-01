import React from 'react'
import { Animated, Pressable, Text, View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TabBarStandardButton } from '~/components/molecules/bottom-tabs/TabBarStandardButton'

export const BottomTabBar3Column: React.FC<BottomTabBarProps> = props => {
  return (
    <View>
      <TabBarStandardButton />
    </View>
  )
}
