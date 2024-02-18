import { Box, Stack } from "@mui/material";
import React from "react";
import { ChannelDetail, VideoCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack>
      {videos.map((item, index) => (
        <Box>
          {item.id.videoId && <VideoCard />}
          {item.id.channelId && <ChannelDetail />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
