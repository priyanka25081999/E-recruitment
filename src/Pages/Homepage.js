import React, { useContext } from "react";
import Footer from "../Components/Footer";
import BrowseJobs from "../Page_Sections/index/BrowseJobs";
import Category from "../Page_Sections/index/Category";
import Features from "../Page_Sections/index/Features";
import Header from "../Page_Sections/index/Header";
import HowItWorks from "../Page_Sections/index/HowItWorks";
import TestNomials from "../Page_Sections/index/TestNomials";

import { MainContext } from "../Context/MainContext";

const Homepage = () => {
  const Context = useContext(MainContext);
  console.log(Context.isUserLogin);
  return (
    <div>
      <Header />
      <Category />
      <BrowseJobs />
      <Features />
      <HowItWorks />
      <TestNomials />
      <Footer />
      <a href="#" className="back-to-top">
        <i className="lni-arrow-up"></i>
      </a>
    </div>
  );
};

export default Homepage;
