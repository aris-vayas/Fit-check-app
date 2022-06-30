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
import { Avatar } from "@mui/material";

export default function NavBar() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    console.log("bob");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
        <Box
          color="inherit"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ flexGrow: 1 }}
        >
          Bob
        </Box>
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FitCheck
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  alt="User Profile"
                  src="data:image/jpeg;base64,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"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
