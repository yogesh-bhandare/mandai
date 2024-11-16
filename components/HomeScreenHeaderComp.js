import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeScreenHeaderComp = () => {
    const navigation = useNavigation()
  return (
    <View className="p-6">
    <View className="flex flex-row items-center justify-between">
      <TouchableOpacity onPress={() => navigation.navigate("MoreScreen")}>
        <Ionicons name="grid" size={30} color="#259265" />
      </TouchableOpacity>
      <View className="flex flex-row space-x-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("SettingScreen")}
        >
          <Ionicons name="settings" size={30} color="#696969" />
        </TouchableOpacity>
        <Ionicons name="notifications" size={30} color="#FFBA49" />
      </View>
    </View>
  </View>
  )
}

export default HomeScreenHeaderComp