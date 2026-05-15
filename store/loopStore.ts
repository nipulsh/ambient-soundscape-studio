import { create } from "zustand";

interface LoopState {
  loop: boolean;
  toggleLoop: () => void;
}

const useLoopStore = create<LoopState>((set) => ({
  loop: false,
  toggleLoop: () => set((state) => ({ loop: !state.loop })),
}));

export default useLoopStore;
