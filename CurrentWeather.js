import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
const CurrentWeather = () => {
  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={style.temp}>6</Text>
        <Text style={style.feel}>Feels like 5</Text>
        <View style={style.highLowWrapper}>
          <Text style={style.highLow}>High:8</Text>
          <Text style={style.highLow}>Low:5</Text>
        </View>
      </View>
      <View style={style.bodyWrapper}>
        <Text style={style.description}>Its sunny</Text>
        <Text style={style.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    backgroundColor: "pink",
    flex: 1
  },
  temp: {
    fontSize: 48,
    color: "black"
  },
  feel: {
    fontSize: 30,
    color: "black"
  },
  highLow: {
    fontSize: 20,
    color: "black"
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    paddingLeft: 25,
    marginBottom: 40,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
