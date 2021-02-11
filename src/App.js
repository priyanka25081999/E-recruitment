import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import firebase from "firebase/app";
import { FirebaseConfig } from "./Config/FirebaseConfig";
import "firebase/auth";
import "firebase/firestore";

import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import PostJob from "./Pages/PostJob";
import JobPage from "./Pages/JobPage";
import Register from "./Pages/Register";

import { MainContext } from "./Context/MainContext";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CompanyRegister from "./Pages/CompanyRegister";
import CompanySignin from "./Pages/CompanySignin";
import CompanyManageApplications from "./Pages/CompanyManageApplications";
import AppliedJob from "./Pages/AppliedJob";

firebase.initializeApp(FirebaseConfig);

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isCompanyLogin, setIsCompanyLogin] = useState(false);
  const [currentCompany, setCurrentCompany] = useState({});

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("isCompanyLogin")) {
        setIsCompanyLogin(true);
        setCurrentCompany(JSON.parse(localStorage.getItem("currentCompany")));
      } else if (localStorage.getItem("isUserLogin")) {
        setIsUserLogin(true);
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
      }
    }
  }, []);
  return (
    <MainContext.Provider
      value={{
        isUserLogin,
        currentUser,
        isCompanyLogin,
        currentCompany,
        setIsUserLogin,
        setCurrentUser,
        setIsCompanyLogin,
        setCurrentCompany,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/about">
            <div>About</div>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/companysignin">
            <CompanySignin />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/companyregister">
            <CompanyRegister />
          </Route>
          <Route exact path="/jobpage" component={JobPage} />
          <Route exact path="/appliedjob" component={AppliedJob} />
          <Route exact path="/postjob" component={PostJob} />
          <Route
            exact
            path="/manage_applicants"
            component={CompanyManageApplications}
          />
          <Route exact path="/" component={Homepage} />
          <Route>
            <div>Page Not Found..!</div>
          </Route>
        </Switch>
        <ToastContainer />
      </Router>
    </MainContext.Provider>
  );
}

export default App;
