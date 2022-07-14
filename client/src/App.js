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
import ResetPassword from "./ResetPassword";
import TokenPage from "./TokenPage";
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
        fontSize: 18,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
          @font-face {
            font-family: 'monospace';
          }
        `,
        },
      },
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [curUser, setCurUser] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const [score, setScore] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("fired", user);
          setLoggedUser(user);
          setPhotos(user.photos);
          setIsAuthenticated(true);
        });
      }
    });
  }, [curUser]);

  useEffect(() => {
    fetch("/photos")
      .then((r) => r.json())
      .then((data) => setImages(data));
  }, []);

  console.log(photos);
  if (!isAuthenticated)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div height="100px">
          <NavBar isAuthenticated={isAuthenticated} photos={photos} />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Landing" />} />
          <Route path="/password/reset" element={<TokenPage />}></Route>
          <Route
            path="/Landing"
            element={
              <Landing
                count={count}
                setCount={setCount}
                setIsAuthenticated={setIsAuthenticated}
                photos={photos}
                setPhotos={setPhotos}
                image={image}
                isAuthenticated={isAuthenticated}
                images={images}
                setScore={setScore}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                setCount={setCount}
                curUser={curUser}
                setCurUser={setCurUser}
                photos={photos}
                setPhotos={setPhotos}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/about" element={<About image={image} />}></Route>

          <Route
            path="/NewUserForm"
            element={
              <NewUserForm
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
          <Route
            path="/Profile"
            element={
              <NewUserForm
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
          <Route path="/TopFits" element={<TopFits images={images} />}></Route>
          <Route
            path="/Logout"
            element={
              <Logout
                setPhotos={setPhotos}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          ></Route>
          <Route path="/PasswordReset" element={<ResetPassword />}></Route>
        </Routes>
      </ThemeProvider>
    );
  else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <NavBar isAuthenticated={isAuthenticated} photos={photos} />
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/Landing" />} />

          <Route
            path="/Landing"
            element={
              <Landing
                count={count}
                setCount={setCount}
                images={images}
                image={image}
                setIsAuthenticated={setIsAuthenticated}
                photos={photos}
                setPhotos={setPhotos}
                setScore={setScore}
                isAuthenticated={isAuthenticated}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>

          <Route
            path="/Profile"
            element={
              <UserProfile
                photos={photos}
                loggedUser={loggedUser}
                images={images}
                theme={theme}
              />
            }
          ></Route>
          <Route path="/TopFits" element={<TopFits images={images} />}></Route>
          <Route
            path="/Logout"
            element={
              <Logout
                setPhotos={setPhotos}
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
