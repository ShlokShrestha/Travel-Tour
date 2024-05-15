import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import ItemCard from "../components/ItemCard";

type HomeProps = NativeStackNavigationProp<RootStackParamList, "Discover">;

const Discover = () => {
  const navigation = useNavigation<HomeProps>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [type, setType] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <ScrollView>
        <View className=" flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotels"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
        </View>
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">
              Top Tips
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">
                Explore
              </Text>
            </TouchableOpacity>
          </View>
          <View className="px-2 py-2 flex-row items-center justify-evenly flex-wrap gap-2">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
