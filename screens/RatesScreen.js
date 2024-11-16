import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../api";

const RatesScreen = () => {
  const navigation = useNavigation();
  const [ratesData, setRatesData] = useState([]);

  const fetchData = () => {
    api
      .get("commodities/l1/")
      .then((response) => setRatesData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderShopItem = ({ item }) => (
    <View className="bg-white rounded-lg p-4 flex-row items-center shadow-sm my-1">
      <Image
        source={{ uri: item.img_url }}
        className="w-20 h-20 rounded-md"
        style={{ resizeMode: "cover" }}
      />
      <View className="flex-1 pl-4">
        <Text className="text-lg font-semibold text-[#696969]">
          {item.commodity}
        </Text>
        <View className="flex-row justify-between mt-2">
          <View>
            <Text className="text-gray-500">Price Range</Text>
            <Text className="text-[#208C5A] font-semibold">
              ₹{item.min_price_per_kg} ~ ₹{item.max_price_per_kg}/kg
            </Text>
          </View>
          <View>
            <Text className="text-gray-500">Avg Price</Text>
            <Text className="text-[#208C5A] font-semibold">
              ₹{item.avg_price_per_kg}/kg
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#EBFEF6] ">
      <View className="p-6 bg-white rounded-b-3xl">
        <View className="flex flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Ionicons name="arrow-back-circle" size={40} color="#259265" />
          </TouchableOpacity>
          <View className="flex flex-row space-x-2 items-center">
            <Ionicons name="stats-chart" size={26} color="#FFBA49" />
            <Text className="font-semibold text-2xl text-[#696969]">Rates</Text>
            <Text></Text>
          </View>
          <Ionicons name="search" size={30} color="#696969" />
        </View>
      </View>
      <View className="p-2">
        <FlatList
          data={ratesData}
          renderItem={renderShopItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RatesScreen;
