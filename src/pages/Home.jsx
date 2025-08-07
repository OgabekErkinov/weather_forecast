import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getCurrentWeather, getForecastWeather } from '../apis/services'
import Header from '../widgets/Header'
import CountryWeatherInfo from '../widgets/CountryWeatherInfo'
import WeatherForecast from '../widgets/WeatherForecast'

const Home = () => {
  const [searchCountry, setSearchCountry] = useState('Berlin')

  const { data: currentData, isLoading: loadingCurrent, error: errorCurrent } = useQuery({
    queryKey: ['current-weather', searchCountry],
    queryFn: () => getCurrentWeather(searchCountry),
    enabled: !!searchCountry,
    staleTime: 1000 * 60 * 5,
  });

  const { data: forecastData, isLoading: loadingForecast, error: errorForecast } = useQuery({
    queryKey: ['forecast-weather', searchCountry],
    queryFn: () => getForecastWeather(searchCountry),
    enabled: !!searchCountry,
    staleTime: 1000 * 60 * 10,
  });

  if (loadingCurrent || loadingForecast) return <div className="text-white text-center mt-10">Yuklanmoqda...</div>
  if (errorCurrent || errorForecast) return <div className="text-red-500 text-center mt-10">Xatolik: ma’lumotlar olinmadi.</div>

  const current = currentData.current;
  const forecast = forecastData.forecast.forecastday;
  const location = currentData.location;

  return (
      <div className="w-[90%] h-[90%] overflow-y-scroll bg-white rounded-2xl shadow-xl p-6">
         <div className='h-[80vh] sm:h-full w-full flex flex-col justify-between'>
        
           {/* Header */}
           <Header/>

           {/* Main */}
           <div className="h-[85%] flex flex-col md:flex-row gap-4">
              {/* Left: Current */}
              <CountryWeatherInfo current={ current } location={ location }/>

              {/* Right: Forecast */}
              <WeatherForecast forecast={ forecast }/> 
           </div>
         </div>
      </div>
    
  )
}

export default Home
