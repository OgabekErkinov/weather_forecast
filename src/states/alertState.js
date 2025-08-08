import { create } from "zustand";


const useAlert = create((set) => ({
  isAlert: false,
  setIsAlert: (payload) => set({ isAlert: payload }),

  message: '',
  setMessage: (payload) => set({ message: payload }),

}));

export default useAlert