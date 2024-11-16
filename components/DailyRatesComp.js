import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import api from "../api";

const DailyRatesComp = () => {
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
      <View className="mt-4 space-y-2">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center space-x-2">
            <View className="w-2 h-2 bg-white rounded-full " />
            <Text className="text-white">{item.commodity}</Text>
          </View>
          <Text className="text-white">
            ₹{item.min_price_per_kg} ~ ₹{item.max_price_per_kg}/kg
          </Text>
          <Text className="text-white">₹{item.avg_price_per_kg}/kg</Text>
        </View>
      </View>
    );

  return (
    <LinearGradient
          colors={["#62D9A1", "#259265"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          className=" rounded-t-lg px-6 pb-6 flex-1"
        >
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-lg font-semibold">
              Daily Market Rates
            </Text>
          </View>
          <View className="mt-4 space-y-2">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-white">Commodity</Text>
              <Text className="text-white">Price Range</Text>
              <Text className="text-white">Avg Price</Text>
            </View>
          </View>

          <FlatList
            data={ratesData.slice(0, 10)}
            renderItem={renderShopItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </LinearGradient>
  )
}

export default DailyRatesComp