import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth0Client from "./utils/Auth";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import LogIn from "./pages/LandingPage/LandingPage";
import ViewingRoom from "./pages/ViewingRoom/ViewingRoom";
import Callback from "./components/Callback/Callback";
import SecuredRoute from "./components/SecuredRoute/SecuredRoute";
import API from "./utils/API";

export default () => {
  const [user, setUser] = useState({});

  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    async function checkSession() {
      if (window.location.pathname === "/viewingroom") {
        setCheckingSession(false);
        return;
      }
      try {
        await auth0Client.silentAuth();
        setCheckingSession(false);
      } catch (err) {
        if (err.error !== "login_required") console.log(err.error);
      }

      setCheckingSession(false);
    }

    checkSession().then(() => {
      if (auth0Client.isAuthenticated()) {
        API.getUser(auth0Client.profile.email)
          .then((result) => {
            if (!result.data) {
              let newUser;
              newUser = {
                avatar: auth0Client.getProfile().picture,
                nickname: auth0Client.getProfile().nickname,
                email: auth0Client.getProfile().email,
              };
              console.log("creating");
              API.createUser(newUser).then((result) => {
                console.log(result.data);
                setUser(newUser);
              });
            } else {
              setUser(result.data);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch></Switch>
      </div>
    </Router>
  );
};
