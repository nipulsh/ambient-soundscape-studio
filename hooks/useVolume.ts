import useLayersStore from "@/store/useLayersStore";

export default function useVolume() {
  const volume = useLayersStore((state: any) => state.volume);
}
