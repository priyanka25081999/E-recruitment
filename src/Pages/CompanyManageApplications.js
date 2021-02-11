import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../Context/MainContext";
import firebase from "firebase/app";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CompanyManageApplicationJobPostCard from "../Page_Sections/Company/CompanyManageApplicationJobPostCard";
import CompanyApplicants from "../Page_Sections/Company/CompanyApplicants";
import { useHistory } from "react-router-dom";

const CompanyManageApplications = () => {
  const history = useHistory();

  const maincontext = useContext(MainContext);
  const [isFound, setIsFound] = useState(false);
  const [companyList, setCompanyList] = useState([]);
  const db = firebase.firestore();

  useEffect(async () => {
    if (!maincontext.isCompanyLogin) {
      history.push("/");
    }
    var applicantArr = [];

    await db
      .collection("Company")
      .doc(`${maincontext.currentCompany.email}`)
      .collection("Jobs")
      .onSnapshot((snap) => {
        var arr = [];

        snap.docs.map(async (doc) => {
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
            applicants: [...applicantArr],
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
                    <CompanyManageApplicationJobPostCard
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
                    />

                    {Array.from(item.applicants).map((applicant, index) => (
                      <CompanyManageApplicationJobPostCard
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
                      />
                    ))}
                    <table
                      border={1}
                      cellPadding={10}
                      style={{ margin: "auto auto", width: "60%" }}
                    >
                      <thead>
                        <tr
                          align="center"
                          style={{ color: "#26ae61", fontSize: "16px" }}
                        >
                          <th>Username</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <CompanyApplicants
                        companyEmail={maincontext.currentCompany.email}
                        jobId={item.jobId}
                      />
                    </table>
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

export default CompanyManageApplications;
