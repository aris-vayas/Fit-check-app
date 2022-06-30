import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "./Landing";
const theme = createTheme({
  palette: {
    primary: {
      main: "#7190AD",
    },
    secondary: {
      main: "#AD8E71",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
