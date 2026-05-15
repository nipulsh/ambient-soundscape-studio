"use client";

import React from "react";
import { CircleMinus, Layers2 } from "lucide-react";
import useLayersStore from "../store/useLayersStore";

interface layersProps {
  category: string;
  name: string;
  path: string;
}

const VoiceLayersContainer = () => {
  const layers = useLayersStore((state: any) => state.layers);
  const removeLayer = useLayersStore((state: any) => state.removeLayer);
  const layerCount = layers.length;

  return (
    <div className="text-white h-full flex flex-col">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="text-[#00F0FF] text-2xl">
            <Layers2 />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-wide">Active Layers</h2>
            <p className="text-sm text-white/40">
              {layerCount} {layerCount === 1 ? "layer" : "layers"} active
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {layerCount === 0 ? (
          <div className="flex items-center justify-center h-full px-6 py-8">
            <div className="text-center">
              <div className="text-white/40 mb-2 text-4xl">
                <Layers2 size={48} className="mx-auto opacity-20" />
              </div>
              <p className="text-white/50 text-sm">No active layers</p>
              <p className="text-white/30 text-xs mt-1">
                Add sounds to get started
              </p>
            </div>
          </div>
        ) : (
          <ul className="space-y-3 px-6 py-4">
            {layers.map((layer: layersProps) => (
              <li
                key={layer.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#111111] px-4 py-3 transition-all hover:border-[#00F0FF]/30 hover:bg-[#151515]"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white/90 truncate">
                    {layer.name}
                  </p>
                  <p className="text-xs text-white/40 capitalize">
                    {layer.category}
                  </p>
                </div>
                <button
                  onClick={() => removeLayer(layer)}
                  className="ml-3 text-white/60 transition-all cursor-pointer hover:text-red-400 hover:scale-110 flex-shrink-0"
                  title="Remove from layers"
                >
                  <CircleMinus size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VoiceLayersContainer;
