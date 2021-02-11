import React, { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import firebase from "firebase/app";
import { toast } from "react-toastify";
import { MainContext } from "../Context/MainContext";

const Contact = () => {
  const maincontext = useContext(MainContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("ContactUs")
      .add({
        name,
        email,
        subject,
        message,
      })
      .then((result) => {
        toast("Contact Form Sent Successfully..!", { type: "success" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        toast("Contact Form Not Sent Successfully..!", { type: "error" });
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
                <h3>Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="section">
        <div className="contact-form">
          <div className="container">
            <div className="row contact-form-area">
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="contact-block">
                  <h2>Contact Form</h2>
                  <form
                    id="contactForm"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            data-error="Please enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            className="form-control"
                            name="name"
                            data-error="Please enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Subject"
                            id="msg_subject"
                            className="form-control"
                            required
                            data-error="Please enter your subject"
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            rows="5"
                            data-error="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="submit-button">
                          <button
                            className="btn btn-common"
                            id="submit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="contact-right-area wow fadeIn">
                  <h2>Contact Address</h2>
                  <div className="contact-info">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-map-marker"></i>
                      </div>
                      <p>
                        Main Office: Sr.No.13 Street Name- Senapati Bapat Road{" "}
                        <br />
                        Customer Center: NO.130-45 Streen Name- Pune,
                        Maharashtra, India
                      </p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-phone-handset"></i>
                      </div>
                      <p>
                        <a href="#">Main Office: +880 123 456 789</a>
                      </p>
                      <p>
                        <a href="#">Customer Supprort: +880 123 456 789</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <a href="#" className="back-to-top">
        <i className="lni-arrow-up"></i>
      </a>
    </div>
  );
};

export default Contact;
