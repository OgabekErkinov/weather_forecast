import { useEffect, useState } from 'react';
import privateApi from './apis/config';
import { endpoints } from './apis/endpoints';

const apiKey = process.;
console.log('API KEY:', apiKey);


function App() {
  const [weather, setWeather] = useState(null);

  const getData = async () => {
    try {
      const response = await privateApi.get(endpoints.current, {
        params: {
          key: apiKey,  // ✅ API key URL params ichida bo'lishi shart!
          q: 'London',
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
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </>
  );
}

export default App;
