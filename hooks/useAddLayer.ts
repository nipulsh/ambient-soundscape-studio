import { layersProps } from "@/types/layers";
import useLayersStore from "../store/useLayersStore";

export default function useAddLayer({ category, name }: layersProps) {
  const addLayer = useLayersStore((state: any) => state.addLayer);
  addLayer({ category, name });
  return null;
}
