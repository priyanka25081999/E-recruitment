import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../Context/MainContext";
import firebase from "firebase/app";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import JobContainer from "../Page_Sections/Browse_Job/JobContainer";
import { useHistory } from "react-router-dom";

const AppliedJob = () => {
  const history = useHistory();

  const maincontext = useContext(MainContext);
  const [isFound, setIsFound] = useState(false);
  const [AppliedJobList, setAppliedJobList] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    if (!maincontext.isUserLogin) {
      history.push("/");
    }

    db.collection("Users")
      .doc(`${maincontext.currentUser.email}`)
      .collection("Jobs")
      .onSnapshot((snap) => {
        var arr = [];
        snap.docs.map((doc) => {
          console.log(doc.id);
          arr.push({
            jobId: doc.id,
            jobTitle: doc.get("jobTitle"),
            companyName: doc.get("companyName"),
            companyUserEmail: doc.get("userEmail"),
            location: doc.get("location"),
            category: doc.get("category"),
            employeeCount: doc.get("employeeCount"),
            jobAvailability: doc.get("jobAvailability"),
            closingDate: doc.get("closingDate"),
            description: doc.get("description"),
          });
        });

        setAppliedJobList([...arr]);
        setIsFound(true);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Manage Applications</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="job-browse section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              {isFound === false ? (
                <p>Loading Data..!</p>
              ) : AppliedJobList.length === 0 ? (
                <p>No Data Found</p>
              ) : (
                AppliedJobList.map((item, index) => (
                  <div key={index}>
                    <JobContainer
                      appliedJobPage={true}
                      jobId={item.jobId}
                      jobTitle={item.jobTitle}
                      companyName={item.companyName}
                      location={item.location}
                      category={item.category}
                      employeeCount={item.employeeCount}
                      jobAvailability={item.jobAvailability}
                      closingDate={item.closingDate}
                      description={item.description}
                      companyUserEmail={item.companyUserEmail}
                      alreadyApplied={true}
                    />
                    {console.log(item)}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppliedJob;
