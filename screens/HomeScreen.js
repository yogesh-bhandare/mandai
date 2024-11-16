import React from "react";
import {
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenHeaderComp from "../components/HomeScreenHeaderComp";
import GridComponent from "../components/GridComponent";
import DailyRatesComp from "../components/DailyRatesComp";

export default function HomeScreen() {

  return (
    <SafeAreaView className="bg-[#F3FFFA] flex-1">
      <HomeScreenHeaderComp/>
      <View className="flex-1">
        <View className="absolute top-64 -z-10 w-full h-72 rounded-full bg-[#62D9A1]"></View>

        <GridComponent/>

        <DailyRatesComp/>
      </View>
    </SafeAreaView>
  );
}
