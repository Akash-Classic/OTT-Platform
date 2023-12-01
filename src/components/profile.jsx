import React from "react";
import { useState, useEffect } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";
import Videos from "./Videos";

const Profile = () => {
  const { user } = useAuth0();
  const [watchHistory, setWatchHistory] = useState([]);
  useEffect(() => {
    setWatchHistory(JSON.parse(localStorage.getItem("Watch_History")) || []);
  }, []);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(195,6,6,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <Box
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "320px" },
            height: "326px",
            margin: "auto",
            marginTop: "-110px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={user?.picture}
              alt={user?.name}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            <Typography variant="h6">
              {user?.name}
              <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
            </Typography>
          </CardContent>
        </Box>
      </Box>
       
      <Typography variant="h5" style={{color: "white", marginBottom: "1rem", marginLeft: "6.5rem"}}><u>Watch History</u></Typography>
      {watchHistory && watchHistory?.length> 0 ? <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={watchHistory} type="profile" />
      </Box> : <Typography variant="h6" style={{color: "white", marginBottom: "1rem", marginLeft: "6.5rem"}}>No Watch History Found</Typography>}
    </Box>
  );
};

export default Profile;
