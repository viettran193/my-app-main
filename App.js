import React from "react"
import { View, StyleSheet } from "react-native"
import CurrentWeather from "./screens/CurrentWeather"
import UpcomingWeather from "./screens/UpcomingWeather"
import City from "./screens/city"
const App = () => {
  return (
    <View style={style.container}>
      <City />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
