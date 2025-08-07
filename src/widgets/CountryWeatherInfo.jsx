import useDataStore from "../states/dataState"

const CountryWeatherInfo = () => {

  const { currentData : current} = useDataStore()

  return (
    <div className="w-full md:w-1/2 bg-blue-100 rounded-xl text-blue-900">
        <div className='w-full h-full p-6 flex flex-col items-center justify-center '>
            <h2 className="text-xl sm:text-2xl font-bold">{current?.location?.name}, {current?.location?.country}</h2>
            <img src={current?.current?.condition?.icon} alt="weather icon" className="w-30 sm:w-20 mt-4" />
            <p className="text-xl mt-2">{current?.current?.condition?.text}</p>
            <p className="text-4xl font-bold mt-2">{current?.current?.temp_c}°C</p>
            <p className="mt-2 text-sm">Namlik: {current?.current?.humidity}% | Shamol: {current?.wind_kph} km/h</p>
            <p className="mt-1 text-xs">So‘nggi yangilanish: {current?.current?.last_updated}</p>
        </div>
    </div>
  )
}

export default CountryWeatherInfo