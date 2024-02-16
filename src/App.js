import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
