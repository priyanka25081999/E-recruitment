import React, { useEffect, useState } from "react";

import firebase from "firebase/app";
const CompanyApplicants = ({ jobId, companyEmail }) => {
  const [applicants, setApplicants] = useState([]);
  useEffect(async () => {
    const db = firebase.firestore();
    var applicantArr = [];
    await db
      .collection("Company")
      .doc(`${companyEmail}`)
      .collection("Jobs")
      .doc(`${jobId}`)
      .collection("Applied_Users")
      .get()
      .then((res) => {
        res.docs.map((applicant) => {
          applicantArr.push({
            username: applicant.get("username"),
            email: applicant.get("email"),
          });
        });
        setApplicants([...applicantArr]);
      });
  }, []);
  return (
    <tbody>
      {applicants.map((user, index) => (
        <tr
          key={index}
          style={{
            color: "#333",
            height: "30px",
            backgroundColor: `${index % 2 == 0 ? "#f1f1f1" : "white"}`,
          }}
        >
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default CompanyApplicants;
