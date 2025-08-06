import privateApi from "./config";
import { endpoints } from "./endpoints";

const apiKey = 'db718c32fe914a9a8bf40756250608'

export const getCurrentWeather = async (country_name) => {
  const response = await privateApi?.get(endpoints?.current, {
    params: {
      key: apiKey,
      q: country_name,
      aqi: 'no',
    },
  });
  return response?.data;
};

export const getForecastWeather = async (country_name) => {
  const response = await privateApi?.get(endpoints?.forecast, {
    params: {
      key: apiKey,
      q: country_name,
      aqi: 'no',
      days : 5
    },
  });
  return response?.data;
};
