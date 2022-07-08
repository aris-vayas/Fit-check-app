import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "./Landing";
import CssBaseline from "@mui/material/CssBaseline";
import TopFits from "./TopFits";
import NewUserForm from "./NewUserForm";
import About from "./About";
import UserProfile from "./UserProfile";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Logout from "./Logout";
import Login from "./Login";

const image =
  " https://images.creativemarket.com/0.1.0/ps/1046651/2000/2000/m1/fpnw/wm0/80s-inspired-patterns-2.0-02-.jpg?1456936583&s=d8e1ae51ac718b8fd73306485d9a1170";
const theme = createTheme({
  palette: {
    primary: {
      main: "#7190AD",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#7190AD",
    },
    typography: {
      allVariants: {
        fontFamily: "monospace",
        fontSize: 12,
      },
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [curUser, setCurUser] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setCurUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/photos")
      .then((r) => r.json())
      .then((data) => setImages(data));
  }, []);

  if (!isAuthenticated)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div height="100px">
          <NavBar isAuthenticated={isAuthenticated} />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Landing" />} />
          <Route
            path="/Landing"
            element={
              <Landing
                setIsAuthenticated={setIsAuthenticated}
                curUser={curUser}
                setCurUser={setCurUser}
                image={image}
                isAuthenticated={isAuthenticated}
                images={images}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/about" element={<About image={image} />}></Route>
          <Route path="/NewUserForm" element={<NewUserForm />}></Route>
          <Route
            path="/Profile"
            element={
              <NewUserForm
                setIsAuthenticated={setIsAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
          <Route path="/TopFits" element={<TopFits />}></Route>
          <Route
            path="/Logout"
            element={
              <Logout
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    );
  else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <NavBar isAuthenticated={isAuthenticated} />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Landing" />} />

          <Route
            path="/Landing"
            element={
              <Landing
                images={images}
                image={image}
                setIsAuthenticated={setIsAuthenticated}
                curUser={curUser}
                setCurUser={setCurUser}
                isAuthenticated={isAuthenticated}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/NewUserForm" element={<NewUserForm />}></Route>
          <Route
            path="/Profile"
            element={<UserProfile images={images} />}
          ></Route>
          <Route path="/TopFits" element={<TopFits />}></Route>
          <Route
            path="/Logout"
            element={
              <Logout
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
