import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Hotels } from "../assets";
import { useNavigation } from "@react-navigation/native";

type Props = {
  item: any;
};

const ItemCard = (props: Props) => {
  const { item } = props;
  const navigator = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigator.navigate("DetailPage", { param: item })}
      className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[170px] my-2"
    >
      <Image
        source={{
          uri: item?.photo?.images?.medium?.url
            ? item?.photo?.images?.medium?.url
            : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
        }}
        className="w-full h-40 rounded "
      />

      <>
        <Text className="text-[#428288] text-[18px] font-bold">
          {item.name?.length > 14 ? `${item.name.slice(0, 14)}..` : item.name}
        </Text>

        <View className="flex-row items-center space-x-1">
          <FontAwesome name="map-marker" size={20} color="#8597A2" />
          <Text className="text-[#428288] text-[14px] font-bold">
            {item?.location_string?.length > 10
              ? `${item?.location_string.slice(0, 10)}..`
              : item?.location_string}
            KTM
          </Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default ItemCard;
