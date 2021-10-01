import React from 'react'
import { View, Text, Animated, Pressable, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from '~/components/atoms/AppText'
import { FontWeight } from '~/constants/font-weight';
import style from "~/styles/components/molecules/bottom-tabs/TabBarStandardButtonStyles"
import { color } from '~/styles/foundations/color'

export const TabBarStandardButton: React.FC = props => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
  return (
    <Animated.View>
      <AnimatedTouchable onPress={() => console.log("test")}>
        <View style={style.container}>
          <LinearGradient style={style.containerIn} colors={[color.background.yellow.high, color.background.yellow.normal, color.background.yellow.dark, ]}>
            <AppText colorType="primary" fontWeight={FontWeight.Black} style={style.text}>もどる</AppText>
          </LinearGradient>
        </View>
      </AnimatedTouchable>
    </Animated.View>
  )
}