import { create } from "zustand";

const usePlayButtonStore = create((set) => ({
  isPlaying: false,
  togglePlay: () =>
    set((state: { isPlaying: any }) => ({ isPlaying: !state.isPlaying })),
  masterVolume: 1,
  setMasterVolume: (volume: number) => set({ masterVolume: volume }),
}));

export default usePlayButtonStore;
``