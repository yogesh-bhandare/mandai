import React, {useState} from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";


const ProfileScreen = () => {
  const navigation = useNavigation();
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
            Profile
          </Text>
        </View>
      </View>
      <View className="flex-1">
        <ScrollView>
          <View>
            <View className="bg-white flex items-center justify-center py-2 mt-2">
              <Image
                className=" h-24 w-24 rounded-full"
                source={{
                  uri: "https://img.freepik.com/free-vector/flat-farmer-s-day-celebration-illustration_23-2149835101.jpg?t=st=1712779661~exp=1712783261~hmac=6a37369ff23d0e7d0485591eb7f80c61c00e59951c062e466b05f10780e10f0e&w=740",
                }}
              />
            </View>
            <View className=" bg-white px-4 py-2">
              <Text className="text-lg font-semibold text-[#696969]">About Me</Text>
              <View className="flex items-center justify-center">
                <View className="w-full py-2">
                  <Text className="text-base py-1 text-[#696969]">First Name</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="Enter Here"
                    className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
                <View className="w-full py-2">
                  <Text className="text-base py-1 text-[#696969]">Last Name</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="Enter Here"
                    className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
                <View className="w-full py-2 pb-4">
                  <Text className="text-base py-1 text-[#696969]">Mobile Number</Text>
                  <TextInput
                    keyboardType="default"
                    placeholder="7757997140"
                    className=" pl-4 text-lg font-light h-14 border-gray-300 border-2 rounded-md"
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
