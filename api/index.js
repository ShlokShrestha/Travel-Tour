import axios from "axios";
import { API_KEY } from "@env";

export const getPlacesData = async (type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: "27.6515",
          bl_longitude: " 85.2550",
          tr_longitude: "27.7519",
          tr_latitude: "85.3594",
          limit: "30",
          currency: "USD",
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
