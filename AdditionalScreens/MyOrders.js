import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const MyOrders = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView className="flex-1 bg-[#F3FFFA]">
        <View className="px-2 py-6 bg-white rounded-b-3xl">
        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("MoreScreen")}
            style={{ position: "absolute", left: 16 }}
          >
            <Ionicons name="arrow-back-circle" size={40} color="#259265" />
          </TouchableOpacity>
          <Text className="font-semibold text-2xl text-[#696969]">
            My Orders
          </Text>
        </View>
      </View>
        <View className="flex-1">
            <View className="flex-1 flex-col items-center justify-center">
              <Image className="h-40 w-40" source={{uri: "https://img.freepik.com/free-vector/flat-worried-woman-have-list-credit-debts-overdue-bills-girl-reading-letter-from-collection-agency-about-financial-problems-loans-unpaid-tax-calculation-payment-expenses-concept_88138-805.jpg?t=st=1709132574~exp=1709136174~hmac=0a66686914b963c3f3dafb98f376d59b3b35b4cd58f097ed77d5f7148bc19d63&w=996"}} />
              <Text className="text-lg font-bold text-[#696969]">No Orders</Text>
              <Text className="text-[#696969]">Looks like there are no orders yet!</Text>
            </View>
          </View>
      </SafeAreaView>
    );
}

export default MyOrders