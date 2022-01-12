import React, { useEffect, useState } from "react";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const sendMsg = (e) => {
    e.preventDefault();
    if (
      name.trim().length > 5 &&
      mail.trim().length > 5 &&
      subject.trim().length > 8 &&
      message.trim().length > 8 &&
      name.trim() !== "" &&
      mail.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    ) {
      emailjs
        .sendForm(
          "service_7xpd9xf",
          "template_pfo5s8f",
          e.target,
          "user_qiN1BppQ1Rvr3ZgzXGCVR"
        )
        .then(
          (result) => {
            setMsgSent(true);
            console.log(result.text);
            setMail("");
            setMessage("");
            setName("");
            setSubject("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMsgSent(false);
    }, 5000);
  }, [msgSent]);

  return (
    <>
      <div id="contact" className="mt-max container contact">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h2>Our Location</h2>
              <p className="w-70">
                Mith Bunder Road, Near Sadguru Garden, Kopri, Thane (E) 400603.
              </p>
            </div>
            <div className="mt-5">
              <h2>Say Hello</h2>
              <p className="w-70">K.C. Ecell a team of student developers</p>
              <p>
                <Phone /> +91 77108 48662
              </p>
              <p>
                <Email /> kcecell@kccemsr.edu.in
              </p>
            </div>
          </div>
          <form className="col-md-8" onSubmit={sendMsg}>
            <div className="row">
              <div className="col-md-6">
                <input
                  value={name}
                  minLength="5"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="form-control my-4 my-md-0"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  value={mail}
                  minLength="5"
                  onChange={(e) => setMail(e.target.value)}
                  name="mail"
                  pattern=".+@gmail\.com"
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  value={subject}
                  minLength="8"
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  className="form-control my-4"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  value={message}
                  minLength="8"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  placeholder="Your Comment"
                ></textarea>
                {msgSent && (
                  <div class="alert alert-success" role="alert">
                    Message Sent!
                  </div>
                )}
                <button className="my-btn mt-4" type="submit">
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
