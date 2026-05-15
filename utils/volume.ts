export default function volume(master_volume: number, volume: number) {
  return Math.floor(master_volume * volume * 100);
}
