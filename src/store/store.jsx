import { create } from 'zustand'
import eng from "../utils/english.json"

export const useStore = create((set) => ({
  language: eng, // Establece el idioma predeterminado
  setLanguage: (newLanguage) => set({ language: newLanguage }),
}))

console.log(useStore.getState());