import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import SearchPanel from '../widgets/searchPanel'
import { getCurrentWeather, getForecastWeather } from '../apis/services'
import Header from '../widgets/Header'

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

  console.log(currentData)

  if (loadingCurrent || loadingForecast) return <div className="text-white text-center mt-10">Yuklanmoqda...</div>
  if (errorCurrent || errorForecast) return <div className="text-red-500 text-center mt-10">Xatolik: ma’lumotlar olinmadi.</div>

  const current = currentData.current;
  const forecast = forecastData.forecast.forecastday;
  const location = currentData.location;

  return (
      <div className="w-[90%] h-[90%] bg-white rounded-2xl shadow-xl p-6">
       <div className='h-full w-full flex flex-col justify-between'>
        
          {/* Header */}
          <Header/>

          {/* Main */}
          <div className="h-[85%] flex flex-col md:flex-row gap-4">
             {/* Left: Current */}
             <div className="w-full md:w-1/2 bg-blue-100 rounded-xl text-blue-900">
                <div className='w-full h-full p-6 flex flex-col items-center justify-center '>
                   <h2 className="text-2xl font-bold">{location.name}, {location.country}</h2>
                   <img src={current.condition.icon} alt="weather icon" className="w-20 mt-4" />
                   <p className="text-xl mt-2">{current.condition.text}</p>
                   <p className="text-4xl font-bold mt-2">{current.temp_c}°C</p>
                   <p className="mt-2 text-sm">Namlik: {current.humidity}% | Shamol: {current.wind_kph} km/h</p>
                   <p className="mt-1 text-xs">So‘nggi yangilanish: {current.last_updated}</p>
                </div>
              </div>

             {/* Right: Forecast */}
             <div className="w-full md:w-1/2 bg-white rounded-xl p-4 overflow-auto">
               <h3 className="text-lg font-semibold text-gray-700 mb-2">5 kunlik prognoz</h3>
               <div className="flex flex-col gap-3">
                 {forecast.map((day) => (
                   <div key={day.date}
                    className="w-[50%] flex items-center gap-4 bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                     <img src={day.day.condition.icon} alt="icon" className="w-12" />
                     <div>
                       <p className="font-semibold">{day.date}</p>
                       <p className="text-sm">{day.day.condition.text}</p>
                       <p className="text-sm">🌡 {day.day.avgtemp_c}°C</p>
                     </div>
                   </div>
                  ))}
               </div>
             </div>
          </div>
       </div>

      </div>
    
  )
}

export default Home
