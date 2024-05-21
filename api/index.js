import axios from "axios";
import { API_KEY } from "@env";

export const getPlacesData = async (type) => {
  console.log(type, "type")
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          longitude: "85.30748",
          latitude: "27.70462",
          limit: "30",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
