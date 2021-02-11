import React, { useState, useContext, useEffect } from "react";
import { v4 } from "uuid";
import firebase from "firebase/app";
import { MainContext } from "../Context/MainContext";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const PostJob = () => {
  const history = useHistory();
  const maincontext = useContext(MainContext);

  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [description, setDescription] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [jobAvailability, setJobAvailability] = useState("");

  useEffect(() => {
    if (!maincontext.isCompanyLogin) {
      history.push("/");
    }
  }, []);
  const handlePost = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    const uniqueId = v4();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;

    db.collection("Jobs")
      .doc(`${uniqueId}`)
      .set({
        jobTitle,
        companyName,
        userEmail: maincontext.currentCompany.email,
        location,
        category,
        employeeCount,
        jobAvailability,
        closingDate,
        description,
        postDate: today,
      })
      .then((result) => {
        db.collection("Company")
          .doc(`${maincontext.currentCompany.email}`)
          .collection("Jobs")
          .doc(`${uniqueId}`)
          .set({
            jobTitle,
            companyName,
            userEmail: maincontext.currentCompany.email,
            location,
            category,
            employeeCount,
            jobAvailability,
            closingDate,
            description,
            postDate: today,
          })
          .then((compResult) => {
            toast("Job Posted Successfully..!", { type: "success" });
            setJobTitle("");
            setCompanyName("");
            setLocation("");
            setCategory("");
            setEmployeeCount("");
            setJobAvailability("");
            setClosingDate("");
            setDescription("");
          })
          .catch((err) => {
            toast("Job Posted Unsuccessfully..!", { type: "error" });
            db.collection("Jobs").doc(`${uniqueId}`).delete();
          });
      })
      .catch((err) => {
        toast("Job Posted Unsuccessfully..!", { type: "error" });
      });
  };
  return (
    <div>
      <NavBar />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Post A Job</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-xs-12">
              <div className="post-job box">
                <h3 className="job-title">Post a new Job</h3>
                <form className="form-ad" onSubmit={(e) => handlePost(e)}>
                  <div className="form-group">
                    <label className="control-label">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write job title"
                      onChange={(e) => setJobTitle(e.target.value)}
                      value={jobTitle}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write company name"
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g.India"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g.Construction, food service, retial"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Employees Count</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="No of employees"
                      onChange={(e) => setEmployeeCount(e.target.value)}
                      value={employeeCount}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Job Availability</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Part Time/Full Time"
                      onChange={(e) => setJobAvailability(e.target.value)}
                      value={jobAvailability}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Closing Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="yyyy-mm-dd"
                      onChange={(e) => setClosingDate(e.target.value)}
                      value={closingDate}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Briefly describe your job profile"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-common" type="submit">
                      Post a Job
                    </button>
                  </div>
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

export default PostJob;
