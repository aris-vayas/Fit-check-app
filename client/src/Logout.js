import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Logout({ setIsAuthenticated, setPhotos }) {
  const nav = useNavigate();
  fetch("/logout", {
    method: "DELETE",
  }).then(() => {
    setIsAuthenticated(false);
    setPhotos([]);
  });

  nav("/landing");
}

export default Logout;
