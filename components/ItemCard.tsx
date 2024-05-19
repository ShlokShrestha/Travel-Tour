import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Hotels } from "../assets";

type Props = {
  item: any;
};

const ItemCard = (props: Props) => {
  const { item } = props;

  return (
    <TouchableOpacity
      //   onPress={() => navigator.navigate("ItemScreen", { param: data })}
      className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[170px] my-2"
    >
      <Image
        source={{
          uri: item?.photo?.images?.medium?.url
            ? item?.photo?.images?.medium?.url
            : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
        }}
        className="w-full h-40 rounded-md object-cover"
      />

      <>
        <Text className="text-[#428288] text-[18px] font-bold">
          {item.name?.length > 14 ? `${item.name.slice(0, 14)}..` : item.name}
        </Text>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={20} color="#8597A2" />
          <Text className="text-[#428288] text-[14px] font-bold">
            {/* {location?.length > 18 ? `${title.slice(0, 18)}..` : location} */}
            KTM
          </Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default ItemCard;
