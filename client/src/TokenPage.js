import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FormGroup, Toolbar } from "@mui/material";
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
  setCount,
}) => {
  const classes = useStyles();
  // create state variables for each input

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      token: token,
      password: password,
    };

    fetch(`/password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("landing", user);
          setPhotos(user.photos);
        });
        setToken("");
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
        {/* <Toolbar>
          <Typography></Typography>
        </Toolbar> */}
        <Card>
          <TextField
            label="newpassword"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="token"
            variant="filled"
            type="token"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              resetPassword
            </Button>
            <Button
              component={Link}
              to="/PasswordReset"
              variant="contained"
              color="primary"
            >
              Resend Token
            </Button>
          </div>
        </Card>
      </Grid>
    </form>
  );
};

export default Login;
