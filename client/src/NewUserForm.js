import React, { cloneElement, useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { OutlinedFlagOutlined } from "@material-ui/icons";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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

const NewUserForm = ({ setIsAuthenticated, setCurUser }) => {
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = useState("");
  const classes = useStyles();
  const nav = useNavigate();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
          nav("/landing");
        });
      } else {
        res.json().then((json) => setError(json.errors));
        setOpen(true);
      }
    });
    setEmail("");
    setLastName("");
    setFirstName("");
    setPassword("");
  }
  function handleForgotPassword() {
    fetch(`/welcome_email`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  }
  const handleClose = () => {
    setEmail("");
    setLastName("");
    setFirstName("");
    setPassword("");
    setOpen(false);
  };
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
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Login Failed"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {error}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Try again
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default NewUserForm;
