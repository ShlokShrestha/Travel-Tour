import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

type Props = {
  title: string;
  imageSrc: any;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const MenuContainer = (props: Props) => {
  const { title, imageSrc, type, setType } = props;
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
