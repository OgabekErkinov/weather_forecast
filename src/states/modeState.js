import { create } from "zustand";

const useMode = create((set, get) => ({
  isLight: true,

  toggleMode: () => set((state) => ({ isLight: !state.isLight })),

  get bgMode() {
    return get().isLight ? '#04367d' : '#0EA5E9';
  },

  get textMode() {
    return get().isLight ? '#0EA5E9' : '#04367d';
  }
}));

export default useMode;
