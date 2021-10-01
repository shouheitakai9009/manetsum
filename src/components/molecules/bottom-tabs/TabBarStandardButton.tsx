import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import style from "~/styles/components/molecules/bottom-tabs/TabBarStandardButtonStyles"

export const TabBarStandardButton: React.FC = props => (
  <View style={style.container}><Text>あいうえお</Text></View>
)
