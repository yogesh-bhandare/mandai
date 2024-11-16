import { View, Text, TouchableOpacity, Share, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InviteFriendScreen = () => {
  const navigation = useNavigation();

  const handleInviteFriends = async () => {
    try {
      const result = await Share.share({
        message:
          "Join me on Mandai! Download the app from https://github.com/gityb8/Mandai",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared successfully
          console.log("Shared successfully");
        } else {
          // Shared
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log("Dismissed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
            Invite Friend
          </Text>
        </View>
      </View>
      <View className="flex-1 px-6">
        <View className=" flex-1">
          <View className="flex-1 flex-col items-center justify-center">
            <Image
              className=" h-20 w-20 rounded-full"
              source={{
                uri: "https://img.freepik.com/free-vector/flat-farmer-s-day-celebration-illustration_23-2149835101.jpg?t=st=1712779661~exp=1712783261~hmac=6a37369ff23d0e7d0485591eb7f80c61c00e59951c062e466b05f10780e10f0e&w=740",
              }}
            />
            <Text className="text-[#696969]">Invite friends to K-Mart</Text>
            <View>
              <Text className="text-[#696969]">It's always too much fun with a friend around</Text>
            </View>
            <View className="p-2 w-full ">
              <TouchableOpacity
                onPress={handleInviteFriends}
                className=" h-14 rounded-lg bg-[#259265] flex justify-center items-center"
              >
                <Text className="text-center text-lg font-semibold text-white">
                  Invite Friends
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InviteFriendScreen;
