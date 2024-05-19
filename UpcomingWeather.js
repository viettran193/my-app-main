import React from "react"
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native"
import ListItem from "../src/components/Listitem"

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Clear"
      }
    ]
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Cloud"
      }
    ]
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: "Rain"
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      // condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>UpcomingWeather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#a38400"
  },

  image: {
    flex: 1
  }
})
export default UpcomingWeather
