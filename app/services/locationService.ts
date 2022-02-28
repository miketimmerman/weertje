import axios from "axios";

const apiKey = "AIzaSyAy1fhy6nX8bWr1OIxTkhXYbTbF6zkETEo";

export const locationService = async (place: string) => {
  const { data } = await axios.get(
    "https://maps.googleapis.com/maps/api/place/textsearch/json",
    { params: { key: apiKey, query: place } }
  );

  return data;
};
