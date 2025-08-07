
const CountryWeatherInfo = ({ current, location }) => {
  return (
    <div className="w-full md:w-1/2 bg-blue-100 rounded-xl text-blue-900">
        <div className='w-full h-full p-6 flex flex-col items-center justify-center '>
            <h2 className="text-xl sm:text-2xl font-bold">{location?.name}, {location?.country}</h2>
            <img src={current?.condition?.icon} alt="weather icon" className="w-30 sm:w-20 mt-4" />
            <p className="text-xl mt-2">{current?.condition?.text}</p>
            <p className="text-4xl font-bold mt-2">{current?.temp_c}°C</p>
            <p className="mt-2 text-sm">Namlik: {current?.humidity}% | Shamol: {current?.wind_kph} km/h</p>
            <p className="mt-1 text-xs">So‘nggi yangilanish: {current?.last_updated}</p>
        </div>
    </div>
  )
}

export default CountryWeatherInfo