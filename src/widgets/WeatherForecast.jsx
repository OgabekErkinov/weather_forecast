import { LiaTemperatureHighSolid } from "react-icons/lia"
import useDataStore from "../states/dataState"
import useMode from "../states/modeState"
import useLocationStore from "../states/locationState"
import { motion } from "framer-motion"

const WeatherForecast = () => {

  const { forecastData : forecast } = useDataStore()
  const { secondBg, textMode } = useMode()
  const { countries, setCurrentLocation, setCountries} = useLocationStore()
  
  const handleClick = (country) => {
    setCurrentLocation(country)
    setCountries(country)
  }

  return (
    <div 
         className="w-full md:w-1/2 bg-blue-100 text-blue-900 rounded-xl p-4 md:overflow-auto
                    sm:shadow-xs sm:shadow-gray-600">
        <h3 className="text-lg font-semibold mb-2">So'nggi ob-havo ma'lumotlari : </h3>
        <div className="flex justify-evenly flex-col gap-3">
            {forecast?.map(( day, idx ) => (
               <div key={ idx }
                    className="w-full flex items-center gap-4
                              p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    style={{ backgroundColor : secondBg, color : textMode }}>
                     <img src={day?.day?.condition?.icon} alt="icon" className="w-12" />
                     <div className="flex justify-between w-full">
                        
                            <div className="w-full flex flex-col justify-between sm:flex-row">
                              <p className="font-semibold">{day?.date}</p>
                              <p className="text-sm ">{day?.day?.condition.text}</p>
                            </div>
                        
                        <div className="w-[30%] flex items-center">
                            <LiaTemperatureHighSolid color="red"/>
                            <p className="text-sm"> {day?.day?.avgtemp_c}°C</p>
                        </div> 
                     </div>
                </div>
            ))}
        </div>
        <div style={{ color : textMode }} className="mt-4 font-bold">
          <p className="text-blue-900">So'nggi qidiruvlar</p>
          <div className="w-full h-auto flex flex-wrap gap-2 mt-4">
          {
            countries?.map((country, idx) => {
              return (
                <motion.span key={ idx } whileTap={{scale : 0.8}}
                             onClick={()=>handleClick(country)}
                             style={{backgroundColor : secondBg, color : textMode}}
                             className="font-bold px-2 py-1 cursor-pointer rounded-xl">
                            {country}
               </motion.span>
              )
            })
          }

        </div>
        </div>
    </div>
  )
}

export default WeatherForecast