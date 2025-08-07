import { create } from "zustand";


const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (payload) => set({ isLoading: payload }),

  
}));

export default useLoadingStore