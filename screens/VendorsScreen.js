import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../api";

const VendorsScreen = () => {
    const navigation = useNavigation();
    const [vendorsData, setVendorsData] = useState([]);
  
    const fetchData = () => {
      api
        .get("vendors/l1/")
        .then((response) => setVendorsData(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const renderVendorItem = ({ item }) => (
        <View className="bg-white rounded-lg p-4 flex-row items-center shadow-sm my-1">
            <Image
                source={{ uri: item.img_url }}
                className="w-24 h-24 rounded-md"
                style={{ resizeMode: "cover" }}
            />
            <View className="flex-1 pl-4">
                <Text className="text-lg font-semibold text-[#696969]">
                    {item.shop_name}
                </Text>
                <Text className="text-sm text-gray-500">
                    Vendor: {item.vendor_name}
                </Text>
                <Text className="text-sm text-gray-500">
                    Qty Range: {item.min_qty_per_kg}kg ~ {item.max_qty_per_kg}kg
                </Text>
                <View className="flex-row items-center space-x-4 mt-3">
                    <TouchableOpacity onPress={() => alert(`Phone: ${item.phone}`)}>
                        <Ionicons name="call" size={20} color="#208C5A" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            alert(`Address: ${item.address}, ${item.city}, ${item.state}`)
                        }
                    >
                        <Ionicons name="location" size={20} color="#F2A649" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#F3FFFA]">
            <View className="p-6 bg-white rounded-b-3xl">
                <View className="flex flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                        <Ionicons name="arrow-back-circle" size={40} color="#259265" />
                    </TouchableOpacity>
                    <View className="flex flex-row space-x-2 items-center">
                        <Ionicons name="people" size={26} color="#FFBA49" />
                        <Text className="font-semibold text-2xl text-[#696969]">
                            Vendors
                        </Text>
                    </View>
                    <Ionicons name="search" size={30} color="#696969" />
                </View>
            </View>
            {/* Vendors List */}
            <View className="p-2">
                <FlatList
                    data={vendorsData}
                    renderItem={renderVendorItem}
                    keyExtractor={(item) => item.shop_no}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        </SafeAreaView>
    );
}

export default VendorsScreen