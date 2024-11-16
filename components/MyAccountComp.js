import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MyAccountComp = () => {
    const navigation = useNavigation();
  return (
            <View className="flex-1">
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="analytics" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Manage Trade</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyOrderScreen")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons
                name="cart"
                size={30}
                color={"#FFBA49"}
              />
              <Text className=" text-lg text-gray-500">
              My Orders
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("InviteFriendScreen")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="chatbox-ellipses" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Invite Friends</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>


      </View>

  );
};

export default MyAccountComp;
