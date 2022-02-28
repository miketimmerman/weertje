import axios from "axios";

const weatherApiKey = "6b66563c12b2de33f433b7f4623ce925";

export const weatherService = async (lat: string, lon: string) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    { params: { lat, lon, appid: weatherApiKey } }
  );

  return data;
};
