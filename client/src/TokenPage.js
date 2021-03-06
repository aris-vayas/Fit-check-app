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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSearchParams } from "react-router-dom";
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

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("token"));

  const [open, setOpen] = React.useState(false);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const nav = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    const user = {
      password: password,
      token: searchParams.get("token"),
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
        nav("/login");
      } else {
        res.json().then((json) => setErrors("Invalid Token "));
        setOpen(true);
      }
    });
  }
  const handleClose = () => {
    setToken("");
    setPassword("");
    setOpen(false);
  };
  return (
    <>
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
              {errors}
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

export default Login;
