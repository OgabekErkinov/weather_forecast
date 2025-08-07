import Header from '../widgets/Header'
import CountryWeatherInfo from '../widgets/CountryWeatherInfo'
import WeatherForecast from '../widgets/WeatherForecast'

const Home = () => {

  return (
          <div className='h-[80vh] sm:h-full w-full flex flex-col justify-between'>
                <Header/>

                {/* Main */}
                <div className="h-[85%] flex flex-col md:flex-row gap-4">
                   {/* Left: Current */}
                   <CountryWeatherInfo/>

                   {/* Right: Forecast */}
                   <WeatherForecast/> 
                </div>
          </div>   
  )
}

export default Home
