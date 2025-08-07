import { create } from "zustand";


const useDataStore = create((set) => ({
  farenheit : false,
  toggleFarenheit : () => set((state) => ({farenheit : state?.farenheit})),
  
  currentData: null,
  setCurrentData: (payload) => set({ currentData: payload }),

  forecastData: null,
  setForecastData: (payload) => set({ forecastData: payload }),
}));

export default useDataStore