/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography, CircularProgress } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items);
      setLoader(false);
    })
  }, [selectedCategory])
  return (
    <>
    {isLoader ? (
          <div className="row justify-content-center" sx={{ height: {sx: "auto" , md: "92vh"}}}>
            <div className="col-md-12 loader-cart">
              <Box justifyContent="center" marginTop="350px" marginLeft="950px" sx={{ display: "flex", height: {sx: "auto" , md: "92vh"}, borderRight: "1px solid #3d3d3d"}}>
                <CircularProgress style={{ color: "red" }} />
              </Box>
            </div>
          </div>
        ) :(
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}}}>
     <Box sx={{ height: {sx: "auto" , md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff"}}>
        Copyright 2024
      </Typography>
     </Box>
     <Box p={2} sx={{overflowY: "auto" , height: "90vh", flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
        {selectedCategory} <span style={{color: "#F31503"}}>videos</span>
      </Typography>
      <Videos videos={videos}/>
     </Box>
    </Stack>)}
    </>
  )
}

export default Feed