import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/app";
import { MainContext } from "../Context/MainContext";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import JobContainer from "../Page_Sections/Browse_Job/JobContainer";

const JobPage = () => {
  const maincontext = useContext(MainContext);
  const [isFound, setIsFound] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const [appliedJobList, setAppliedJobList] = useState([]);

  const db = firebase.firestore();

  useEffect(async () => {
    await db
      .collection("Users")
      .doc(`${maincontext.currentUser.email}`)
      .collection("Jobs")
      .onSnapshot((snap) => {
        var appliedJobArr = [];
        snap.docs.map((doc) => {
          // console.log(doc.id);
          appliedJobArr.push({
            jobId: doc.id,
          });
        });

        setAppliedJobList([...appliedJobArr]);
      });

    db.collection("Jobs").onSnapshot((snap) => {
      var arr = [];
      snap.docs.map((doc) => {
        // console.log(doc.id);
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

      setCompanyList([...arr]);
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
                <h3>Browse Job</h3>
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
              ) : companyList.length === 0 ? (
                <p>No Data Found</p>
              ) : (
                companyList.map((item, index) => (
                  <div key={index}>
                    <JobContainer
                      appliedJobPage={false}
                      jobId={item.jobId}
                      jobTitle={item.jobTitle}
                      companyName={item.companyName}
                      location={item.location}
                      category={item.category}
                      employeeCount={item.employeeCount}
                      jobAvailability={item.jobAvailability}
                      closingDate={item.closingDate}
                      description={item.description}
                      alreadyApplied={
                        appliedJobList.some((el) => el.jobId === item.jobId)
                          ? true
                          : false
                      }
                      companyUserEmail={item.companyUserEmail}
                    />
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

export default JobPage;
