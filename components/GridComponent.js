import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const GridComponent = () => {
    const navigation = useNavigation()
  return (
    <View className="flex-1 justify-center pt-6">
      <View className="flex-row justify-center space-x-1 p-1">
        <TouchableOpacity className="bg-white w-36 h-36 rounded-tr-3xl rounded-bl-3xl items-center justify-center shadow-lg shadow-[#7ff1c2]">
        <Ionicons name="analytics" size={40} color="#259265" />
            <Text className="font-bold text-base text-[#696969]">Trade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RatesScreen")}
          className="bg-white w-36 h-36 rounded-br-3xl rounded-tl-3xl items-center justify-center shadow-lg shadow-[#7ff1c2]"
        >
          <Ionicons name="stats-chart" size={40} color="#259265" />
          <Text className="font-bold text-base text-[#696969]">Rates</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center space-x-1">
        <TouchableOpacity onPress={() => navigation.navigate("VendorsScreen")} className="bg-white w-36 h-36 rounded-br-3xl rounded-tl-3xl items-center justify-center shadow-lg shadow-[#7ff1c2]">
          <Ionicons name="people" size={40} color="#259265" />
          <Text className="font-bold text-base text-[#696969]">Vendors</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MarketScreen")} className="bg-white w-36 h-36 rounded-tr-3xl rounded-bl-3xl items-center justify-center shadow-lg shadow-[#7ff1c2]">
          <Ionicons name="storefront" size={40} color="#259265" />
          <Text className="font-bold text-base text-[#696969]">Market</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GridComponent;
