import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Avatar, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar({ isAuthenticated, photos }) {
  //appear at top of each page and be adapative for logged in or regular uusers
  console.log(photos);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const sortedPhoto = photos.sort(function (a, b) {
    const nameA = a.score;
    const nameB = b.score;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  console.log(sortedPhoto);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleOpenNavMenu(event) {
    console.log("nav menu");
    setAnchorEl(event.currentTarget);
  }
  const handleClose = (event) => {
    console.log(event.currentTarget.innerText);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ flexGrow: 12 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <AppBar position="static" elevation={4}>
        <Toolbar style={{ height: "160px" }}>
          {!isAuthenticated && (
            <div>
              <IconButton
                display={{ xs: "none", md: "flex" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon
                  display={{ xs: "flex", md: "none" }}
                  sx={{ width: 60, height: 60 }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: "top",
                //   horizontal: "center",
                // }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/landing" onClick={handleClose}>
                  FitCheck
                </MenuItem>
                <MenuItem component={Link} to="/topfits" onClick={handleClose}>
                  TopFits
                </MenuItem>
                <MenuItem component={Link} to="/about" onClick={handleClose}>
                  About
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/NewUserForm"
                  onClick={handleClose}
                >
                  SignUp
                </MenuItem>
                <MenuItem component={Link} to="/login" onClick={handleClose}>
                  SignIn
                </MenuItem>
              </Menu>
            </div>
          )}

          <Typography
            display={{ xs: "none", md: "flex" }}
            variant="h4"
            component={Link}
            sx={{
              ml: 6,
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/about"
          >
            About
          </Typography>
          <Typography
            display={{ xs: "none", md: "flex" }}
            variant="h4"
            component={Link}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            to="/TopFits"
          >
            TopFits
          </Typography>
          <Typography
            display={{ xs: "none", md: "flex" }}
            variant="h4"
            to="/Landing"
            component={Link}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FitCheck
          </Typography>
          <Typography
            display={{ xs: "none", md: "flex" }}
            variant="h4"
            to="/profile"
            component={Link}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Profile
          </Typography>
          {isAuthenticated && (
            <div>
              <IconButton
                justifyContent="center"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  alt="User Profile"
                  //change src to the top fit from state

                  src={!sortedPhoto[1] ? "default" : sortedPhoto[0].image}

                  //change src to the top fit from state
                />
              </IconButton>
              <Menu
                style={{ width: "600px", height: "600px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: "top",
                //   horizontal: "right",
                // }}
                keepMounted
                // transformOrigin={{
                //   vertical: "top",
                //   horizontal: "right",
                // }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/Profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/landing" onClick={handleClose}>
                  Top Fits
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/Logout">
                  LogOut
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
