import React, { useState, useEffect, useContext } from "react";

import { MainContext } from "../Context/MainContext";
import firebase from "firebase/app";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const CompanyRegister = () => {
  const maincontext = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleCompanyRegister = async (e) => {
    e.preventDefault();
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
      if (password === repeatPassword) {
        if (password.length <= 7) {
          toast("Please enter password more than 8 characters", {
            type: "warning",
          });
        } else {
          await auth
            .createUserWithEmailAndPassword(`${email}`, `${password}`)
            .then((result) => {
              db.collection("Company")
                .doc(`${email}`)
                .set({
                  email: email,
                  companyName: companyName,
                })
                .then((dbResult) => {
                  toast("Company Account Created Successfully..!", {
                    type: "success",
                  });
                  setCompanyName("");
                  setEmail("");
                  setPassword("");
                  setPassword("");
                  setRepeatPassword("");
                });
            })
            .catch((err) => {
              return toast("Company Account Not Created Successfully..!", {
                type: "error",
              });
            });
        }
      } else {
        return toast("Please enter correct password..!", { type: "warning" });
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Create Company account</h3>
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
                <h3>Create Company account</h3>
                <form
                  className="login-form"
                  onSubmit={(e) => handleCompanyRegister(e)}
                >
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Company Name"
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-envelope"></i>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
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
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-unlock"></i>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Retype Password"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        value={repeatPassword}
                        required
                      />
                    </div>
                  </div>
                  <button className="btn btn-common log-btn mt-3" type="submit">
                    Register
                  </button>
                  <p className="text-center">
                    Already have an account?
                    <Link to="/companysignin"> Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompanyRegister;
