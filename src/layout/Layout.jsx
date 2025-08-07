import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather, getForecastWeather } from '../apis/services';
import Loading from '../widgets/Loading';
import useLocationStore from '../states/locationState';
import useDataStore from '../states/dataState';
import Routing from '../routing/Routing';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useMode from '../states/modeState'
import Alert_Window from '../widgets/Alert_Window';

const Layout = () => {
  const { currentLocation, setCurrentLocation } = useLocationStore();
  const {isLight, toggleMode, bgMode, textMode} = useMode()
  const setCurrentData = useDataStore((state) => state.setCurrentData);
  const setForecastData = useDataStore((state) => state.setForecastData);

  const {  data: currentData, isLoading: loadingCurrent, isError : errorCurrent
  } = useQuery({
    queryKey: ['current-weather', currentLocation],
    queryFn: () => getCurrentWeather(currentLocation),
    enabled: !!currentLocation,
    staleTime: 1000 * 60 * 5,
  });

  const { data: forecastData, isLoading: loadingForecast, isError : errorForecast
  } = useQuery({
    queryKey: ['forecast-weather', currentLocation],
    queryFn: () => getForecastWeather(currentLocation),
    enabled: !!currentLocation,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (currentData?.current) {
      setCurrentData(currentData);
      setCurrentLocation(currentData?.location?.name)
    }
  }, [currentData?.current]);

  useEffect(() => {
    if (forecastData?.forecast?.forecastday) {
      setForecastData(forecastData?.forecast?.forecastday);  
    }
  }, [forecastData?.forecast?.forecastday]);

    const navigate = useNavigate()
    if(errorCurrent||errorForecast){
    navigate('/error')
    }

  return (
    <div style={{backgroundColor : bgMode}}
         className={`w-[90%] h-[90%] overflow-y-scroll sm:overflow-hidden rounded-2xl 
                     shadow-xl ${!(loadingCurrent || loadingForecast) && 'p-6'}`}>
      {
        !(loadingCurrent || loadingForecast) ? <Routing /> : <Loading />
      }
      <Alert_Window/>
    </div>
  );
};

export default Layout;
