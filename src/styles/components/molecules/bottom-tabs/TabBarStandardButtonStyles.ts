import { StyleSheet } from 'react-native'
import { color } from '~/styles/foundations/color'

const TabBarStandardButtonStyles = StyleSheet.create({
  container: {
    width: 100,
    height: 76,
    borderRadius: 20,
    paddingHorizontal: 2,
    paddingVertical: 2,
    backgroundColor: color.border.yellow.outline,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  containerIn: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.border.yellow.dotted,
  },
  text: {
    fontSize: 24,
    fontWeight: "900",
  }
})

export default TabBarStandardButtonStyles