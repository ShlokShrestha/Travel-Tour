import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HeroImage from "../assets/hero.png";
import * as Animatable from "react-native-animatable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type HomeProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeProps>();
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
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in"
          source={HeroImage}
          className="w-full h-full object-cover"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-24 w-20 h-20 border-2 rounded-full border-[#00BCC9] justify-center items-center "
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-16 h-16 bg-[#00BCC9] rounded-full justify-center items-center"
          >
            <Text className="text-gray-50 font-semibold text-[26px]">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
