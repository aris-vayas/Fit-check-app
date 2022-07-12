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

const EditProfile = ({ loggedUser }) => {
  const classes = useStyles();
  const nav = useNavigate();
  // create state variables for each input
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  console.log(loggedUser.password);
  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: email,
      password: password,
    };

    fetch(`/users/${loggedUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
        });
      } else {
        res.json().then((json) => console.log(json.errors));
      }
    });
    setEmail("");
    setPassword("");

    nav("/profile");
  }
  //   function handleForgotPassword() {
  //     fetch(`/welcome_email`)
  //       .then((r) => r.json())
  //       .then((data) => console.log(data));
  //   }

  return (
    <>
      <Grid container justifyContent="center">
        <Toolbar justifyContent="center"></Toolbar>
        <Grid item>
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              label="Reeneter password"
              variant="filled"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              label="Username"
              variant="filled"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button component={Link} to="/PasswordReset">
              ForgotPawssword?
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update info
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;
