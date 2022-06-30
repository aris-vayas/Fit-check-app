import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "./TinderCard";
import FitCard from "./FitCard";
import NewUserForm from "./NewUserForm";
import Grid from "@mui/material/Grid";
function Landing() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <TinderCard />
        <NewUserForm />
        <h1>Page Count!: {count} dollhairs</h1>
      </Grid>
    </div>
  );
}

export default Landing;
