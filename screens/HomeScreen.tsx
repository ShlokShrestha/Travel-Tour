import { SafeAreaView, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HeroImage from "../assets/hero.png";
type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row px-6 mt-8 items-center gap-x-2">
        <View className="bg-black w-16 h-16 rounded-full items-center justify-center ">
          <Text className="text-white text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-6 space-y-2">
        <Text className="text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[38px] font-bold text-blue-400">
          Good Moments
        </Text>
        <Text className=" text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae
          eum nisi?
        </Text>
      </View>
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      <View className="flex-1 relative items-center justify-center">
        <Image source={HeroImage} className="w-full h-full object-cover" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
