import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [isLoader, setLoader] = useState(true);

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setLoader(false);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result For:  <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      {isLoader ? (
          <div className="row justify-content-center" sx={{ height: {sx: "auto" , md: "92vh"}}}>
            <div className="col-md-12 loader-cart">
              <Box sx={{ display: "flex" }} justifyContent="center" marginTop="300px">
                <CircularProgress style={{ color: "red" }} />
              </Box>
            </div>
          </div>
        ) :(<Videos videos={videos} />)}
    </Box>
  );
};

export default SearchFeed;
