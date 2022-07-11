import React, { cloneElement, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const EditProfile = ({ loggedUser, setProfile }) => {
  const [imageUrl, setImageUrl] = useState("");
  const classes = useStyles();
  const nav = useNavigate();
  // create state variables for each input

  function handleSubmit(e) {
    e.preventDefault();

    const image = {
      image: imageUrl,
      user_id: loggedUser.id,
      score: 0,
    };

    fetch(`/photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setProfile("Myfits");
        });
      } else {
        res.json().then((json) => console.log(json.errors));
      }
    });
    setImageUrl("");

    nav("/profile");
  }

  return (
    <>
      <Grid container justifyContent="center">
        <Toolbar justifyContent="center"></Toolbar>
        <Grid item>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Enter URL"
              variant="filled"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary">
              Submit Image
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;
