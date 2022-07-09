import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FormGroup } from "@mui/material";
import { Card, Grid } from "@mui/material";
import NewUserForm from "./NewUserForm";
import { useNavigate } from "react-router-dom";
import { OutlinedFlagOutlined } from "@material-ui/icons";
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

const Login = ({
  setIsAuthenticated,
  photos,
  setPhotos,
  curUser,
  setCurUser,
}) => {
  const classes = useStyles();
  // create state variables for each input

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };

    fetch(`/Login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurUser(user);
          setIsAuthenticated(true);
          setPhotos(user.photos);
        });
        setUsername("");
        setPassword("");
      } else {
        res.json().then((json) => console.log(json.errors));
      }
      nav("/landing");
    });
  }

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <Grid item>
        <Card>
          <TextField
            label="username"
            variant="filled"
            type="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button variant="contained" component={Link} to="/NewUserForm">
              New? Signup
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signin
            </Button>
            <Button type="submit" variant="contained" color="primary">
              forgotPassword?
            </Button>
          </div>
        </Card>
      </Grid>
    </form>
  );
};

export default Login;
