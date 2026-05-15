import usePlayButtonStore from "@/store/usePlayButtonStore";

export default function usePlayLayers() {
  const { isPlaying } = usePlayButtonStore() as { isPlaying: boolean };
  if (isPlaying) {
    // Logic to play all layers
    console.log("Playing all layers...");
  } else {
    // Logic to pause all layers
    console.log("Pausing all layers...");
  }
}
