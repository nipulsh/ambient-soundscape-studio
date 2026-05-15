"use client";

import {
  AudioLines,
  Layers2,
  WandSparkles,
  Play,
  Pause,
  Repeat,
} from "lucide-react";
import ContinuousSlider from "./VolumeBar";
import usePlayButtonStore from "@/store/usePlayButtonStore";
import useLayersStore from "@/store/useLayersStore";
import useLoopStore from "@/store/loopStore";

const MusicPlayBar = () => {
  const { isPlaying, togglePlay, masterVolume, setMasterVolume } =
    usePlayButtonStore() as any;
  const { loop, toggleLoop } = useLoopStore() as any;
  const layers = useLayersStore((state: any) => state.layers);
  const iconsList = {
    waveform: {
      name: "Waveform",
      icon: <AudioLines />,
    },
    wand: {
      name: "AI Mix",
      icon: <WandSparkles />,
    },
  };

  const handlePlay = () => {
    togglePlay();
  };

  const constHandleLoop = () => {
    toggleLoop();
  };

  return (
    <div className="absolute bottom-[10vh] left-1/2 h-20 w-[80%] -translate-x-1/2 rounded-xs border-2 bg-[#0E0E0E]">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-10">
          <div
            className="cursor-pointer rounded-full bg-[#00F0FF] p-4"
            onClick={handlePlay}
          >
            {isPlaying ? <Pause /> : <Play />}
          </div>

          <div>
            <h5 className="text-[20px] capitalize text-white">Midnight rain</h5>
            <h6 className="text-[12px] uppercase text-[#00F0FF]">
              present active
            </h6>
          </div>
        </div>

        <div>
          <ul className="flex gap-5">
            {Object.values(iconsList).map((item) => (
              <li
                className="flex cursor-pointer flex-col items-center gap-1 text-white"
                key={item.name}
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`cursor-pointer ${loop ? "text-[#00F0FF]" : "text-white"}`}
          onClick={constHandleLoop}
        >
          <Repeat />
        </div>

        <div className="pr-10">
          <ContinuousSlider
            value={masterVolume * 100}
            onChange={setMasterVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayBar;
