import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "../Assets/Styles/Profile.css";
import { useState } from "react";
import axios from "axios";
import React from "react";

function Profile() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (sessionStorage.getItem("login") === "true") {
    axios
      .get("http://localhost:8080/user/get/" + sessionStorage.getItem("id"))
      .then((response) => {
        const body = response.data;
        setValues({
          ...values,
          name: body.name,
          email: body.email,
          password: body.password,
        });
      });
  }

  return (
    <div className="main-container">
      <div className="wrapper-container">
        <div id="profile-header">Profile</div>
        <div className="profile-contents">Name: {values.name}</div>

        <div className="profile-contents">Email: {values.email}</div>
      </div>
    </div>
  );
}

export default Profile;
