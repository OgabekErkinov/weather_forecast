import { CiTempHigh } from "react-icons/ci"
import { LiaTemperatureHighSolid } from "react-icons/lia"

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded-xl p-4 md:overflow-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">So'nggi ob-havo ma'lumotlari : </h3>
        <div className="flex flex-wrap justify-evenly sm:flex-col gap-3">
            {forecast?.map(( day, idx ) => (
               <div key={ idx }
                    className="w-[120px] sm:w-full flex flex-col sm:flex-row items-center gap-4
                             bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                     <img src={day?.day?.condition?.icon} alt="icon" className="w-12" />
                     <div className="flex justify-between w-full">
                        
                            <p className="font-semibold">{day?.date}</p>
                            <p className="text-sm hidden sm:block">{day?.day?.condition.text}</p>
                        
                        <div className="w-[30%] hidden sm:flex items-center">
                            <LiaTemperatureHighSolid color="red"/>
                            <p className="text-sm"> {day?.day?.avgtemp_c}°C</p>
                        </div> 
                     </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WeatherForecast