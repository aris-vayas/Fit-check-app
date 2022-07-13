import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import NavBar from "./NavBar";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ProfileBestFit from "./ProfileBestFits";
import UserProfLanding from "./UserProfLanding";
import ProfileBestFits from "./ProfileBestFits";
import AddAFit from "./AddAFit";
import { Add } from "@material-ui/icons";
import WorstFits from "./WorstFits";
import ResetPassword from "./ResetPassword";
import EditProfile from "./EditProfile";
import { ThemeProvider } from "@mui/styles";
const drawerWidth = 240;

export default function ClippedDrawer({ images, loggedUser, photos, theme }) {
  console.log(loggedUser);
  //uiseEffect to fecth user.photos.all
  //on click changes state of the order of the photos with sort funcitoins
  //add a fit is a page direct to
  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));
  const [myPics, setMyPics] = useState([]);
  const [profile, setProfile] = useState("landing");
  useEffect(() => {
    fetch(`/user_photos`)
      .then((r) => r.json())
      .then((data) => setMyPics(data));
  }, []);
  console.log(myPics);
  function handleClick() {
    console.log("click");
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Drawer
            PaperProps={{
              style: { height: "45vh", marginTop: 160, elevation: 4 },
            }}
            variant="permanent"
            sx={{
              fontFamily: "monospace",
              color: "primary",
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem key={0} disablePadding>
                  <ListItemButton
                    fontFamily="monospace"
                    onClick={() => setProfile("bestFits")}
                  >
                    <ListItemIcon>
                      <VerticalAlignTopIcon />
                    </ListItemIcon>
                    <ListItemText fontFamily="monospace" primary={"BestFits"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={1} disablePadding>
                  <ListItemButton onClick={() => setProfile("Myfits")}>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Myfits"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={2} disablePadding>
                  <ListItemButton onClick={() => setProfile("worstFits")}>
                    <ListItemIcon>
                      <VerticalAlignBottomIcon />
                    </ListItemIcon>
                    <ListItemText primary={"WorstFits"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={3} disablePadding>
                  <ListItemButton onClick={() => setProfile("addafit")}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Add a fit"} />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setProfile(`Reset Password`)}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reset Password" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setProfile(`Edit Profile`)}>
                    <ListItemIcon>
                      <EditIcon />
                    </ListItemIcon>
                    <ListItemText primary="Edit Profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>

          {profile === "Myfits" ? (
            <UserProfLanding
              myPics={myPics}
              loggedUser={loggedUser}
              photos={photos}
            />
          ) : profile === "addafit" ? (
            <AddAFit setProfile={setProfile} loggedUser={loggedUser} />
          ) : profile === "bestFits" ? (
            <ProfileBestFit photos={photos} />
          ) : profile === "worstFits" ? (
            <WorstFits photos={photos} />
          ) : profile === "Reset Password" ? (
            <ResetPassword />
          ) : profile === "Edit Profile" ? (
            <EditProfile loggedUser={loggedUser} />
          ) : (
            <UserProfLanding
              myPics={myPics}
              loggedUser={loggedUser}
              photos={photos}
            />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
}
