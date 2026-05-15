import React from "react";
import AudioCard from "./AudioCard";
import {
  Bird,
  Bug,
  CloudRain,
  CloudRainWind,
  FlameKindling,
  Headset,
  TreePine,
  WavesHorizontal,
  Wind,
  Zap,
  ZodiacAquarius,
} from "lucide-react";

interface AudioFile {
  name: string;
  path: string;
}

interface AudioCategory {
  category: string;
  audios: AudioFile[];
  icons: React.ReactNode;
}

const HomeAudioList = () => {
  const soundData: AudioCategory[] = [
    {
      category: "birds",
      audios: [
        {
          name: "Bird Sound 1",
          path: "/sound/birds/audio1.mp3",
        },
        {
          name: "Bird Sound 2",
          path: "/sound/birds/audio2.mp3",
        },
        {
          name: "Bird Sound 3",
          path: "/sound/birds/audio3.mp3",
        },
      ],
      icons: <Bird />,
    },

    {
      category: "rain",
      audios: [
        {
          name: "Rain 1",
          path: "/sound/rain/audio1.mp3",
        },
        {
          name: "Rain 2",
          path: "/sound/rain/audio2.mp3",
        },
        {
          name: "Rain 3",
          path: "/sound/rain/audio3.mp3",
        },
      ],
      icons: <CloudRain />,
    },
    {
      category: "ocean",
      audios: [
        {
          name: "Ocean Wave 1",
          path: "/sound/ocean/audio1.mp3",
        },
        {
          name: "Ocean Wave 2",
          path: "/sound/ocean/audio2.mp3",
        },
        {
          name: "Ocean Wave 3",
          path: "/sound/ocean/audio3.mp3",
        },
      ],
      icons: <WavesHorizontal />,
    },
    {
      category: "crickets",
      audios: [
        {
          name: "Cricket Sound 1",
          path: "/sound/crickets/audio1.mp3",
        },
        {
          name: "Cricket Sound 2",
          path: "/sound/crickets/audio2.mp3",
        },
        {
          name: "Cricket Sound 3",
          path: "/sound/crickets/audio3.mp3",
        },
      ],
      icons: <Bug />,
    },
    {
      category: "Fireplace",
      audios: [
        {
          name: "Fireplace Sound 1",
          path: "/sound/fireplace/audio1.mp3",
        },
        {
          name: "Fireplace Sound 2",
          path: "/sound/fireplace/audio2.mp3",
        },
        {
          name: "Fireplace Sound 3",
          path: "/sound/fireplace/audio3.mp3",
        },
      ],
      icons: <FlameKindling />,
    },
    {
      category: "forest",
      audios: [
        {
          name: "Forest Sound 1",
          path: "/sound/forest/audio1.mp3",
        },
        {
          name: "Forest Sound 2",
          path: "/sound/forest/audio2.mp3",
        },
        {
          name: "Forest Sound 3",
          path: "/sound/forest/audio3.mp3",
        },
      ],
      icons: <TreePine />,
    },
    {
      category: "heavy rain",
      audios: [
        {
          name: "Heavy Rain Sound 1",
          path: "/sound/heavy_rain/audio1.mp3",
        },
        {
          name: "Heavy Rain Sound 2",
          path: "/sound/heavy_rain/audio2.mp3",
        },
        {
          name: "Heavy Rain Sound 3",
          path: "/sound/heavy_rain/audio3.mp3",
        },
      ],
      icons: <CloudRainWind />,
    },
    {
      category: "river",
      audios: [
        {
          name: "River Sound 1",
          path: "/sound/river/audio1.mp3",
        },
        {
          name: "River Sound 2",
          path: "/sound/river/audio2.mp3",
        },
        {
          name: "River Sound 3",
          path: "/sound/river/audio3.mp3",
        },
      ],
      icons: <ZodiacAquarius />,
    },
    {
      category: "thunderstorm",
      audios: [
        {
          name: "Thunderstorm Sound 1",
          path: "/sound/thunderstorm/audio1.mp3",
        },
        {
          name: "Thunderstorm Sound 2",
          path: "/sound/thunderstorm/audio2.mp3",
        },
        {
          name: "Thunderstorm Sound 3",
          path: "/sound/thunderstorm/audio3.mp3",
        },
      ],
      icons: <Zap />,
    },
    {
      category: "white noise",
      audios: [
        {
          name: "White Noise Sound 1",
          path: "/sound/white_noise/audio1.mp3",
        },
        {
          name: "White Noise Sound 2",
          path: "/sound/white_noise/audio2.mp3",
        },
        {
          name: "White Noise Sound 3",
          path: "/sound/white_noise/audio3.mp3",
        },
      ],
      icons: <Headset />,
    },
    {
      category: "wind",
      audios: [
        {
          name: "Wind Sound 1",
          path: "/sound/wind/audio1.mp3",
        },
        {
          name: "Wind Sound 2",
          path: "/sound/wind/audio2.mp3",
        },
        {
          name: "Wind Sound 3",
          path: "/sound/wind/audio3.mp3",
        },
      ],
      icons: <Wind />,
    },
  ];

  return (
    <div className="text-white">
      <div className="h-full w-full overflow-y-auto scrollbar-hide">
        <div className="px-6 py-4 space-y-8">
          {soundData.map((category) => (
            <div key={category.category}>
              <div className="mb-6 flex items-center gap-3 pb-2 border-b border-white/10">
                <div className="text-[#00F0FF] text-xl">{category.icons}</div>
                <h2 className="text-2xl font-bold capitalize tracking-wide text-white/90">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-3">
                {category.audios.map((audio) => (
                  <AudioCard
                    key={audio.name}
                    name={audio.name}
                    path={audio.path}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAudioList;
