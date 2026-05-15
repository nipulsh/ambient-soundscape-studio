"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";

interface ContinuousSliderProps {
  onChange?: (value: number) => void;
  value?: number;
}

export default function ContinuousSlider({
  value: initialValue,
  onChange,
}: ContinuousSliderProps) {
  const [value, setValue] = React.useState<number>(initialValue || 100);
  const handleChange = (event: Event, newValue: number) => {
    const decimalValue = newValue / 100;
    setValue(newValue);
    if (onChange) {
      onChange(decimalValue);
    }
  };

  return (
    <Box sx={{ width: 180 }}>
      <Stack
        spacing={2}
        direction="row"
        sx={{ alignItems: "center", mb: 1, color: "white" }}
      >
        <VolumeUp />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
