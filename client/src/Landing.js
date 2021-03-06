import React from "react";
import { useState, useEffect } from "react";
import Card from "./TinderCard";
import Grid from "@mui/material/Grid";
import Login from "./Login";
import { Button, Paper } from "@mui/material";

function Landing({
  image,
  setIsAuthenticated,
  curUser,
  setCurUser,
  isAuthenticated,
  images,
  setPhotos,
  setScore,
  count,
  setCount,
}) {
  console.log(curUser);
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "120vh",
          backgroundImage: `url(${image})`,
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {count < 10 ? (
            <Card
              count={count}
              setCount={setCount}
              images={images}
              setScore={setScore}
            />
          ) : (
            <Grid item>
              <Login
                setCount={setCount}
                setCurUser={setCurUser}
                setIsAuthenticated={setIsAuthenticated}
                setPhotos={setPhotos}
              />
            </Grid>
          )}
        </Grid>
      </div>
    );
  } else {
    return (
      <div
        style={{
          minHeight: "110vh",
          backgroundImage: `url(${image})`,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          justifyContent="center"
          position="relative"
        >
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            justify="center"
          >
            <Card
              setScore={setScore}
              count={count}
              setCount={setCount}
              images={images}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;
