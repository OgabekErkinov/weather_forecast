import { create } from 'zustand'

const useMode = create((set) => ({
  isLight: true,
  bgMode: '#f2f4f8',        // Light mode: body background
  secondBg: '#e2e8f0',      // Light mode: cards, buttons, small boxes
  textMode: '#1c1c1e',      // Light mode: text

  toggleMode: () =>
    set((state) => {
      const isNowLight = !state.isLight
      return {
        isLight: isNowLight,
        bgMode: isNowLight ? '#f2f4f8' : '#0f172a',
        secondBg: isNowLight ? '#fff' : '#1e293b',
        textMode: isNowLight ? '#1e3a8a' : '#fff',
      }
    }),
}))

export default useMode
