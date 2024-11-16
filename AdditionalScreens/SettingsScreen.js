import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://192.168.142.7:8081/signout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      navigation.navigate("VerifyNumScreen");
    } catch (error) {
      Alert.alert("Error", "Logout failed. Please try again.");
    }
  };

  // const handleDelete = async () => {
  //   try{
  //     const response = await fetch('http://192.168.43.249:8000/delete/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Deletion failed');
  //     }

  //     navigation.navigate('VerifyNumScreen');
  //   } catch (error) {
  //     Alert.alert('Error', 'Account deletion failed. Please try again.');
  //   }
  // };
 
  return (
    <SafeAreaView className="bg-[#F3FFFA] flex-1">
      <View className="px-2 py-6 bg-white rounded-b-3xl">
        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{ position: "absolute", left: 16 }}
          >
            <Ionicons name="arrow-back-circle" size={40} color="#259265" />
          </TouchableOpacity>
          <Text className="font-semibold text-2xl text-[#696969]">
            Settings
          </Text>
        </View>
      </View>
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => navigation.navigate("ChangeLanguageScreen2")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="language" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Change Language</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons
                name="notifications-circle"
                size={30}
                color={"#FFBA49"}
              />
              <Text className=" text-lg text-gray-500">
                Notification Prefernces
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="reader" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Terms of Service</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="shield-checkmark" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Privacy Policy</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="document-text" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Licences</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("CommingSoon")}
          className="mt-1"
        >
          <View className="bg-white flex flex-row justify-between items-center p-6">
            <View className="flex flex-row justify-start items-center space-x-4">
              <Ionicons name="log-out" size={30} color={"#FFBA49"} />
              <Text className=" text-lg text-gray-500">Sign Out</Text>
            </View>
            <Ionicons name="chevron-forward" size={30} color={"#259265"} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
