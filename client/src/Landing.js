import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "./TinderCard";
import FitCard from "./FitCard";
import NewUserForm from "./NewUserForm";
import Grid from "@mui/material/Grid";
import { backdropClasses } from "@mui/material";
import Login from "./Login";
import Paper from "@mui/material/Paper";
function Landing({ image, setIsAuthenticated, curUser, setCurUser }) {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);
  if (!isAuthenticated)
    return (
      //homepage we land on. should route to
      // <div className="App">

      // </div>

      <div
        style={{
          minHeight: "110vh",
          backgroundImage: `url(${image})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
          justifyContent="center"
        >
          <Grid item>
            <TinderCard style={{ padding: 100, minHeight: "200vh" }} />
          </Grid>
          <Grid item>
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setCurUser={setCurUser}
              curUser={curUser}
            />
          </Grid>
        </Grid>
      </div>
    );
}

export default Landing;
