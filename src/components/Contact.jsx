import React from "react";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
function Contact() {
  return (
    <>
      <div className="mt-max container contact">
        <div className="row">
          <div className="col-md-4">
            <div data-aos="fade-right">
              <h2>Our Location</h2>
              <p className="w-70">
                Sadguru Gardens, Mithbunder Rd, near Kopri, Valmiki Nagar, Thane
              </p>
              <p>
                <Phone /> +022 2532 7100
              </p>
            </div>
            <div className="mt-5" data-aos="fade-right">
              <h2>Say Hello</h2>
              <p className="w-70">K.C. Ecell a team of student developers</p>
              <p>
                <Email /> kcecell@kccemsr.edu.in
              </p>
            </div>
          </div>
          <form data-aos="fade-out" className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <input
                  pattern=".+@gmail\.com"
                  className="form-control my-4 my-md-0"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="form-control my-4"
                  type="text"
                  placeholder="Subject"
                />
                <textarea placeholder="Your Comment"></textarea>
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
