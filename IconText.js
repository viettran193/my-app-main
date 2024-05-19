import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const IconText = (props) => {
  const { iconColor, iconName, bodyText, bodyTextStyles } = props
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    frontWeight: "bold"
  }
})

export default IconText
