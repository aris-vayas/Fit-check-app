import React, { cloneElement, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Toolbar, Typography } from "@mui/material";
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

const NewUserForm = ({ handleClose, setIsAuthenticated, setCurUser }) => {
  const classes = useStyles();
  const nav = useNavigate();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: email,
      email,
      password: password,
      full_name: `${firstName} ${lastName}`,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => console.log(json.errors));
      }
    });
    setEmail("");
    setLastName("");
    setFirstName("");
    setPassword("");

    nav("/landing");
  }
  function handleForgotPassword() {
    fetch(`/welcome_email`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <Toolbar justifyContent="center"></Toolbar>

      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={console.log("click")}
          component={Link}
          to="/Login"
        >
          Already a user? Sign in now
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </form>
    </>
  );
};

export default NewUserForm;
