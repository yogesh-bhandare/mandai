import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MyAccountComp from "../components/MyAccountComp";

function MoreScreen() {
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
            More
          </Text>
        </View>
      </View>
      <View className="flex-1">
          <View className="p-4 mt-2 flex flex-row justify-start items-center bg-white">
            <Image
            className=" h-20 w-20 rounded-full"
            source={{
              uri: "https://img.freepik.com/free-vector/flat-farmer-s-day-celebration-illustration_23-2149835101.jpg?t=st=1712779661~exp=1712783261~hmac=6a37369ff23d0e7d0485591eb7f80c61c00e59951c062e466b05f10780e10f0e&w=740",
            }}
          />
            <View className="pl-4">
              <Text className="text-base text-[#696969]">Yogesh Bhandare</Text>
              <TouchableOpacity
                className="flex flex-row justify-start items-center"
                onPress={() => navigation.navigate("ProfileScreen")}
              >
                <Ionicons
                  name="pencil"
                  size={16}
                  color={"#259265"}
                />
                <Text className="text-[#259265] font-bold px-0.5">
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <MyAccountComp />
      </View>
    </SafeAreaView>
  );
}

export default MoreScreen;
