import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Video } from "./";
import { Box, Stack } from "@mui/material";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(data);

      console.log("hop", data);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
