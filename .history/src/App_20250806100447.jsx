import { useEffect, useState } from 'react';
import privateApi from './apis/config';
import { endpoints } from './apis/endpoints';

function App() {
  const [weather, setWeather] = useState(null);

  const getData = async () => {
    try {
      const response = await privateApi.get(endpoints.current, {
        params: {
          q: 'London', // kerakli shahar
          aqi: 'no'
        }
      });

      setWeather(response.data);
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {weather ? (
        <div>
          <h2>{weather.location.name} ob-havosi</h2>
          <p>Temperatura: {weather.current.temp_c} °C</p>
          <p>Shamol: {weather.current.wind_kph} km/h</p>
          <p>Namlik: {weather.current.humidity} %</p>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </>
  );
}

export default App;
