import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import firebase from "firebase/app";
import { MainContext } from "../../Context/MainContext";
const JobContainer = ({
  appliedJobPage,
  jobId,
  jobTitle,
  companyName,
  location,
  category,
  employeeCount,
  jobAvailability,
  closingDate,
  description,
  companyUserEmail,
  alreadyApplied,
}) => {
  const db = firebase.firestore();
  const maincontext = useContext(MainContext);

  const handleApply = (e) => {
    if (maincontext.isUserLogin === true) {
      db.collection("Company")
        .doc(`${companyUserEmail}`)
        .collection("Jobs")
        .doc(`${jobId}`)
        .collection("Applied_Users")
        .doc(`${maincontext.currentUser.email}`)
        .set({
          email: maincontext.currentUser.email,
          username: maincontext.currentUser.username,
        })
        .then((result) => {
          db.collection("Users")
            .doc(`${maincontext.currentUser.email}`)
            .collection("Jobs")
            .doc(`${jobId}`)
            .set({
              jobId,
              jobTitle,
              companyName,
              location,
              category,
              employeeCount,
              jobAvailability,
              closingDate,
              description,
              companyUserEmail,
            })
            .then((result) => {
              toast("Thanks for applying..!", { type: "success" });
            })
            .catch((err) => {
              toast("Not applied for job..!", { type: "error" });
            });
        })
        .catch((err) => {
          toast("Not applied for job..!", { type: "error" });
        });
    } else {
      toast("Please first login into user account..!", { type: "error" });
    }
  };
  return (
    <a className="job-listings">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-xs-12">
          <div className="job-company-logo">
            <img src="assets/img/features/img2.png" alt="" />
          </div>
          <div className="job-details">
            <h3>{jobTitle}</h3>
            <span className="company-neme">{companyName}</span>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-xs-12 text-center">
          <span className="btn-open">{employeeCount} Open Jobs </span>
        </div>
        <div className="col-lg-2 col-md-2 col-xs-12 text-right">
          <div className="location">
            <i className="lni-map-marker"></i>
            {location}
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-xs-12 text-right">
          <span className="btn-full-time" style={{ color: "green" }}>
            {jobAvailability}
          </span>
        </div>
        <div className="col-lg-2 col-md-2 col-xs-12 text-right">
          {appliedJobPage === true ? (
            <span className="btn-apply" style={{ cursor: "pointer" }}>
              Applied
            </span>
          ) : (
            <>
              {alreadyApplied ? (
                <span className="btn-apply" style={{ cursor: "pointer" }}>
                  Applied
                </span>
              ) : (
                <span
                  className="btn-apply"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleApply(e)}
                >
                  Apply Now {console.log(alreadyApplied)}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default JobContainer;
