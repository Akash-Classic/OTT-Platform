import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import VideoCardWatch from "./VideoCardWatch";

const Videos = ({ videos, direction, type }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {type && type === "profile" ? (
            <VideoCardWatch video={item} />
          ) : (
            <VideoCard video={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
