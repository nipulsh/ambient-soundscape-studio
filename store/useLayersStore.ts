import { create } from "zustand";

interface Layer {
  [key: string]: any;
}

const useLayersStore = create((set) => ({
  layers: [] as Layer[],

  addLayer: (layer: { path: any }) =>
    set((state: { layers: any[] }) => {
      const alreadyExists = state.layers.some(
        (item: any) => item.path === layer.path,
      );

      if (alreadyExists) {
        return state;
      }

      return {
        layers: [...state.layers, layer],
      };
    }),

  removeLayer: (layer: Layer) =>
    set((state: { layers: any[] }) => ({
      layers: state.layers.filter((l: Layer) => l !== layer),
    })),
}));

export default useLayersStore;
