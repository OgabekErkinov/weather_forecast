import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather, getForecastWeather } from '../apis/services';
import Loading from '../widgets/Loading';
import useLocationStore from '../states/locationState';
import useDataStore from '../states/dataState';
import Routing from '../routing/Routing';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMode from '../states/modeState';
import AlertWindow from '../widgets/AlertWindow';

const Layout = () => {
  const { currentLocation, setCurrentLocation } = useLocationStore();
  const { isLight, toggleMode, bgMode, textMode } = useMode();
  const setCurrentData = useDataStore((state) => state.setCurrentData);
  const setForecastData = useDataStore((state) => state.setForecastData);

  const { data: currentData, isLoading: loadingCurrent, isError: errorCurrent } =
    useQuery({
      queryKey: ['current-weather', currentLocation],
      queryFn: () => getCurrentWeather(currentLocation),
      enabled: !!currentLocation,
      staleTime: 1000 * 60 * 5,
    });

  const { data: forecastData, isLoading: loadingForecast, isError: errorForecast } =
    useQuery({
      queryKey: ['forecast-weather', currentLocation],
      queryFn: () => getForecastWeather(currentLocation),
      enabled: !!currentLocation,
      staleTime: 1000 * 60 * 10,
    });

  useEffect(() => {
    if (currentData && currentData.current) {
      setCurrentData(currentData);
      
      const name = currentData.location?.name;
      if (name && name !== currentLocation) {
        setCurrentLocation(name);
      }
    }
  }, [currentData]);

  useEffect(() => {
    if (forecastData && forecastData.forecast?.forecastday) {
      setForecastData(forecastData.forecast.forecastday);
    }
  }, [forecastData]);

  const navigate = useNavigate();

  // agar hozirgi yo'l error bo'lmasa navigatsiya qil
  useEffect(() => {
    if (errorCurrent || errorForecast) {
      if (window.location.pathname !== '/error') {
        navigate('/error');
      }
    }
  }, [errorCurrent, errorForecast, navigate]);

  return (
    <div
      style={{ backgroundColor: bgMode }}
      className={`w-[90%] h-[90%] overflow-y-scroll md:overflow-hidden rounded-2xl 
                 shadow-xl ${!(loadingCurrent || loadingForecast) && 'p-6'} relative`}
    >
      {!(loadingCurrent || loadingForecast) ? <Routing /> : <Loading />}
      <AlertWindow />
    </div>
  );
};

export default Layout;
