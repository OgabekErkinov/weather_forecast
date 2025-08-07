import { create } from "zustand";


const useLocation = create((set) => ({
  currentLocation: 'Tashkent',
  setCurrentLocation: (payload) => set({ currentLocation: payload }),

  countries: ['London', 'New York', 'Pekin', 'Paris', 'Moskwa', 'Berlin', 'Ankara'],
  setCountries: (payload) => set((state) => ({
                    countries: [...new Set([...state.countries, payload])].slice(-5)  }))
}));

export default useLocation