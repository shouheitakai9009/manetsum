import React from 'react'
import { Text, TextProps } from 'react-native'
import { color } from '~/styles/foundations/color'

interface IPropsAppText extends TextProps {
  colorType: "primary" | "blue" | "white",
  fontWeight: string
}

export const AppText: React.FC<IPropsAppText> = (props) => {

  const getFontFamilyName = () => `MPLUSRounded1c-${props.fontWeight}`

  const getColor = () => {
    switch (props.colorType) {
      case "primary":
        return color.text.primary.normal
      case "white":
        return color.text.white.normal
    }
  }

  const getShadow = () => {
    switch (props.colorType) {
      case "primary":
        return color.text.primary.shadow
      case "white":
        return color.text.white.shadow
    }
  }

  return (
    <Text 
      {...props}
      style={[
        props.style,
        {
          // fontFamily: getFontFamilyName(),
          color: getColor(),
          shadowColor: getShadow(),
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
          letterSpacing: -2
        }
      ]}
    />
  )
}
