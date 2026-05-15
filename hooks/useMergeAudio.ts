"use client";

import { useCallback } from "react";
import useLayersStore from "@/store/useLayersStore";

const useMergeAudio = () => {
  const layers = useLayersStore((state: any) => state.layers);

  const mergeAndDownload = useCallback(async () => {
    if (!layers.length) return;

    const audioContext = new AudioContext();
    const audioBuffers = await Promise.all(
      layers.map(async (layer: any) => {
        const response = await fetch(layer.path);

        const arrayBuffer = await response.arrayBuffer();

        return await audioContext.decodeAudioData(arrayBuffer);
      }),
    );
    const maxLength = Math.max(...audioBuffers.map((buffer) => buffer.length));

    const numberOfChannels = 2;

    const outputBuffer = audioContext.createBuffer(
      numberOfChannels,
      maxLength,
      audioContext.sampleRate,
    );
    audioBuffers.forEach((buffer) => {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const outputData = outputBuffer.getChannelData(channel);

        const inputData = buffer.getChannelData(
          Math.min(channel, buffer.numberOfChannels - 1),
        );

        for (let i = 0; i < inputData.length; i++) {
          outputData[i] += inputData[i];
        }
      }
    });
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const outputData = outputBuffer.getChannelData(channel);

      for (let i = 0; i < outputData.length; i++) {
        outputData[i] = Math.max(-1, Math.min(1, outputData[i]));
      }
    }
    const wavBlob = bufferToWave(outputBuffer);
    const url = URL.createObjectURL(wavBlob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "merged-audio.wav";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }, [layers]);

  return {
    mergeAndDownload,
  };
};

export default useMergeAudio;

const bufferToWave = (buffer: AudioBuffer) => {
  const numberOfChannels = buffer.numberOfChannels;

  const sampleRate = buffer.sampleRate;

  const length = buffer.length * numberOfChannels * 2;

  const arrayBuffer = new ArrayBuffer(44 + length);

  const view = new DataView(arrayBuffer);

  const channels = [];

  let offset = 0;
  let pos = 0;

  const writeString = (str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(pos++, str.charCodeAt(i));
    }
  };

  writeString("RIFF");

  view.setUint32(pos, 36 + length, true);

  pos += 4;

  writeString("WAVE");

  writeString("fmt ");

  view.setUint32(pos, 16, true);

  pos += 4;

  view.setUint16(pos, 1, true);

  pos += 2;

  view.setUint16(pos, numberOfChannels, true);

  pos += 2;

  view.setUint32(pos, sampleRate, true);

  pos += 4;

  view.setUint32(pos, sampleRate * numberOfChannels * 2, true);

  pos += 4;

  view.setUint16(pos, numberOfChannels * 2, true);

  pos += 2;

  view.setUint16(pos, 16, true);

  pos += 2;

  writeString("data");

  view.setUint32(pos, length, true);

  pos += 4;

  for (let i = 0; i < numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }

  while (offset < buffer.length) {
    for (let i = 0; i < numberOfChannels; i++) {
      let sample = Math.max(-1, Math.min(1, channels[i][offset]));

      sample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;

      view.setInt16(pos, sample, true);

      pos += 2;
    }

    offset++;
  }

  return new Blob([arrayBuffer], {
    type: "audio/wav",
  });
};
