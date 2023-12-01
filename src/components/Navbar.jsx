import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SerachBar from "./SearchBar";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SerachBar />
      {isAuthenticated ? (
        <div className="d-flex" style={{display: "flex"}}>
          <span
            className=""
            style={{ cursor: "pointer", marginRight: "1rem" }}
          >
            <Link to="/profile">
              <Avatar alt={user.name} src={user.picture} />
            </Link>
          </span>
          <span className="logout-btn">
            <span
              onClick={() =>{
                localStorage.removeItem("Watch_History");
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              }
            >
              Logout
            </span>
          </span>
        </div>
      ) : (
        <div className="d-flex justify-content-end login-btn">
          <span onClick={() => loginWithRedirect()}>Log In</span>
        </div>
      )}
    </Stack>
  );
};

export default Navbar;
