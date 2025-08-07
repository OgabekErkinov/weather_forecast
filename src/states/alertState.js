import { create } from "zustand";


const useAlert = create((set) => ({
  isAlert: true,
  setIsAlert: (payload) => set({ isAlert: payload }),

  message: '',
  setMessage: (payload) => set({ message: payload }),

  404 : false
}));

export default useAlert