import React from 'react'
import { View } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TabBarStandardButton } from '~/components/molecules/bottom-tabs/TabBarStandardButton'

export const BottomTabBar3Column: React.FC<BottomTabBarProps> = props => {
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 20, flexDirection: "row",justifyContent: "space-around" }}>
      <TabBarStandardButton />
      <TabBarStandardButton />
      <TabBarStandardButton />
    </View>
  )
}
