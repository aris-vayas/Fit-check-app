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

const Login = ({
  setIsAuthenticated,
  photos,
  setPhotos,
  curUser,
  setCurUser,
}) => {
  const classes = useStyles();
  // create state variables for each input
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
    };

    fetch(`/password/forgot`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((r) => setErrors(r));
        nav("/password/reset");
      } else {
        res.json().then((json) => setErrors(json.errors));
        setOpen(true);
      }
    });

    setUsername("");
    setEmail();
  }
  const handleClose = () => {
    setUsername("");
    setEmail("");
    setOpen(false);
  };
  return (
    <>
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
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Send Email Reset
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
