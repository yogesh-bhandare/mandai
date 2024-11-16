import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../api";

const MarketScreen = () => {
    const navigation = useNavigation();
    const [ratesData, setRatesData] = useState([]);
  
    const fetchData = () => {
      api
        .get("market/l1/")
        .then((response) => setRatesData(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const renderShopItem = ({ item }) => (
      <View className="bg-white rounded-lg p-4 flex-row items-center shadow-sm my-1">
        <Image
          source={{ uri: item.commodity.img_url }}
          className="w-20 h-20 rounded-md"
          style={{ resizeMode: "cover" }}
        />
        <View className="flex-1 pl-4">
          <Text className="text-lg font-semibold text-[#696969]">
            {item.commodity.commodity}
          </Text>
          <Text className="text-[#696969] mt-2">
            Exp By: {item.expiry_date}
          </Text>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-500">Price Range</Text>
              <Text className="text-[#208C5A] font-semibold">
                ₹{item.commodity.min_price_per_kg} ~ ₹{item.commodity.max_price_per_kg}/kg
              </Text>
            </View>
            <View>
              <Text className="text-gray-500">Expt Price</Text>
              <Text className="text-[#208C5A] font-semibold">
                ₹{item.expected_price_per_kg}/kg
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  
    return (
      <SafeAreaView className="flex-1 bg-[#F3FFFA] ">
        <View className="p-6 bg-white rounded-b-3xl">
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <Ionicons name="arrow-back-circle" size={40} color="#259265" />
            </TouchableOpacity>
            <View className="flex flex-row space-x-2 items-center">
              <Ionicons name="storefront" size={26} color="#FFBA49" />
              <Text className="font-semibold text-2xl text-[#696969]">Market</Text>
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
  
        <TouchableOpacity
          className="absolute bottom-6 right-6 bg-[#FFBA49] w-16 h-16 rounded-full items-center justify-center shadow-lg"
          onPress={() => console.log("Add New")}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    );
}

export default MarketScreen