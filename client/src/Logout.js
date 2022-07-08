import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Logout({ setIsAuthenticated, setCurUser }) {
  const nav = useNavigate();
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    setIsAuthenticated(false);
    setCurUser(null);
  });

  nav("/landing");
}

export default Logout;
