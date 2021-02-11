import React, { useState, useEffect, useContext } from "react";

import { MainContext } from "../Context/MainContext";
import firebase from "firebase/app";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Register = () => {
  const maincontext = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("Users").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => doc.get("username"));
      console.log(data);
    });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = firebase.auth();
    const db = firebase.firestore();

    if (
      email === "" ||
      password === "" ||
      username === "" ||
      repeatPassword === ""
    ) {
      return toast("Please enter correct values..!", { type: "warning" });
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
              db.collection("Users")
                .doc(`${email}`)
                .set({ email: email, username: username })
                .then((dbResult) => {
                  toast("User Created Suucessfully..!", {
                    type: "success",
                  });
                  setEmail("");
                  setPassword("");
                  setRepeatPassword("");
                  setUsername("");
                });
            })
            .catch((err) => {
              return toast("User Not Created..!", { type: "error" });
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
                <h3>Create Your account</h3>
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
                <h3>Create Your account</h3>
                <form
                  className="login-form"
                  onSubmit={(e) => handleRegister(e)}
                >
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button className="btn btn-common log-btn mt-3" type="submit">
                    Register
                  </button>
                  <p className="text-center">
                    Already have an account?<Link to="/signin"> Sign In</Link>
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

export default Register;
