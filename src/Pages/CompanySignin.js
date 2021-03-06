import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import firebase from "firebase/app";

import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { toast } from "react-toastify";

const CompanySignin = () => {
  const history = useHistory();
  const maincontext = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Please enter correct email and password..!", { type: "warning" });
    } else {
      const auth = firebase.auth();
      const db = firebase.firestore();

      var rg = /(?<=@)[^.]+/;
      const email_Id = email.match(rg)[0];
      if (
        email_Id === "gmail" ||
        email_Id === "yahoo" ||
        email_Id === "rediff" ||
        email_Id === "rediffmail" ||
        email_Id === "hotmail"
      ) {
        toast("Please enter correct company email address..!", {
          type: "warning",
        });
      } else {
        auth
          .signInWithEmailAndPassword(`${email}`, `${password}`)
          .then((result) => {
            db.collection("Company")
              .doc(`${email}`)
              .get()
              .then((result) => {
                maincontext.setCurrentCompany({
                  email: email,
                  username: result.get("companyName"),
                });
                maincontext.setIsCompanyLogin(true);
                if (localStorage) {
                  localStorage.setItem("isCompanyLogin", true);
                  localStorage.setItem(
                    "currentCompany",
                    JSON.stringify({
                      email: email,
                      username: result.get("companyName"),
                    })
                  );
                }
                setEmail("");
                setPassword("");
                toast("Authorized Person..!", { type: "success" });
                history.push("/");
              })
              .catch((error) => {
                toast("Something went wrong..!" + error, { type: "error" });
              });
          })
          .catch((err) => {
            toast("Unauthorized..!", { type: "error" });
          });
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-header">
                  <h3>Company Login</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="content" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="page-login-form box">
                <h3>Company Login</h3>
                <form className="login-form" onSubmit={(e) => handleSignIn(e)}>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="email"
                        id="sender-email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                      />
                    </div>
                  </div>

                  <button className="btn btn-common log-btn" type="submit">
                    Submit
                  </button>
                </form>
                <ul className="form-links">
                  <li className="text-center">
                    <Link to="/companyregister">Don't have an account?</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompanySignin;
