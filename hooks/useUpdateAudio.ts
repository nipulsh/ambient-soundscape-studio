import useLayersStore from "@/store/useLayersStore";
import usePlayButtonStore from "@/store/usePlayButtonStore";

export default function useUpdateAudio() {
  const layers = useLayersStore((state: any) => state.layers);
}
