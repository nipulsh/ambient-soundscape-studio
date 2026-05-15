"use client";

import React, { useEffect } from "react";
import {
  Play,
  MoreVertical,
  Pause,
  CirclePlus,
  CircleMinus,
} from "lucide-react";
import VolumeBar from "./VolumeBar";
import useLayersStore from "@/store/useLayersStore";
import usePlayButtonStore from "@/store/usePlayButtonStore";
import useLoopStore from "@/store/loopStore";

interface AudioCardProps {
  name: string;
  path: string;
}

const AudioCard = ({ name, path }: AudioCardProps) => {
  const masterPlay = usePlayButtonStore((state: any) => state.isPlaying);
  const masterVolume = usePlayButtonStore((state: any) => state.masterVolume);
  const layers = useLayersStore((state: any) => state.layers);
  const { loop } = useLoopStore() as any;
  const togglePlay = usePlayButtonStore((state: any) => state.togglePlay);
  const addLayer = useLayersStore((state: any) => state.addLayer);
  const audioPlayRef = React.useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = React.useState(1);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    if (!audioPlayRef.current) return;
    if (isPlaying) {
      audioPlayRef.current.pause();
      togglePlay();
      setIsPlaying(false);
    } else {
      audioPlayRef.current.play();
      togglePlay();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!audioPlayRef.current) return;

    const isInLayer = layers.some((layer: any) => layer.name === name);

    if (masterPlay && isInLayer) {
      setIsPlaying(true);
      audioPlayRef.current.play().catch(() => {
        // ignore autoplay/restriction errors
      });
    } else {
      audioPlayRef.current.pause();
      setIsPlaying(false);
    }
  }, [masterPlay, layers]);

  useEffect(() => {
    if (audioPlayRef.current) {
      audioPlayRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  }, []);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioPlayRef.current) {
      audioPlayRef.current.volume = newVolume * masterVolume;
    }
  };

  useEffect(() => {
    if (audioPlayRef.current) {
      audioPlayRef.current.volume = volume * masterVolume;
    }
  }, [volume, masterVolume]);

  return (
    <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 transition-all hover:border-[#00F0FF]/30 hover:bg-[#151515]">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00F0FF] text-black transition-all hover:scale-105"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <div>
          <h3 className="text-[16px] font-medium text-white">{name}</h3>
          <p className="text-sm text-white/40">Ambient Soundscape</p>
        </div>
      </div>
      <div className="mx-6 flex-1 ">
        <audio className="w-full opacity-80" ref={audioPlayRef} loop={loop}>
          <source src={path} type="audio/mpeg" />
        </audio>
        <VolumeBar value={volume * 100} onChange={handleVolumeChange} />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => addLayer({ name, path })}
          className="text-white/60 transition-all cursor-pointer hover:text-[#00F0FF] hover:scale-110"
          title="Add to layers"
        >
          <CirclePlus size={20} />
        </button>
      </div>
    </div>
  );
};

export default AudioCard;
