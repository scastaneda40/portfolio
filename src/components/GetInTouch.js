import emailjs from "emailjs-com";
import { memo, useState } from "react";
import SectionContainer from "./SectionContainer";

const GetInTouch = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null); // Controls error or confirmation messages

  // Handle input changes
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  // Clear the error or confirmation message after a timeout
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000); // Message disappears after 3 seconds
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", mailData);

    if (!name || !email || !message) {
      setError("Please fill out all fields."); // Error message
      clearError();
      return;
    }

    const templateParams = {
      name: mailData.name,
      email: mailData.email,
      message: mailData.message,
    };

    emailjs
      .send(
        "service_uck1hkq", // Replace with your service ID
        "template_ztn11aq", // Replace with your template ID
        templateParams,
        "SrCPeEA5iPN4pvUND" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setError("Your message has been sent successfully!"); // Success message
          setMailData({ name: "", email: "", message: "" }); // Clear form
          clearError();
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send your message. Please try again."); // Error message
          clearError();
        }
      );
  };

  return (
    <SectionContainer
      sectionName="Contact"
      title={{ first: "get", last: "in touch" }}
    >
      <div className="bl-content">
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="get">get </span>
            <span data-hover="in touch">in touch</span>
          </h2>
        </div>
        <div className="container">
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-envelope-open" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row contact section-padding">
            {/* Left Section */}
            <div className="col s12 m5 l5 xl4 leftside">
              <h6 className="font-weight-700 uppercase">Phone</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-phone" /> 310-901-9100
              </span>
              <h6 className="font-weight-700 uppercase">Email</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-envelope" /> stephen.castaneda40@gmail.com
              </span>
              <h6 className="font-weight-700 uppercase">Location</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-home" /> Los Angeles, California
              </span>
            </div>
            {/* Right Section */}
            <div className="col s12 m7 l7 xl8 rightside">
              <h6 className="uppercase m-none font-weight-700">
                Feel free to drop me a line
              </h6>
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                <div className="input-field second-font">
                  <i className="fa fa-user prefix" />
                  <input
                    id="name"
                    name="name"
                    onChange={onChange}
                    value={name}
                    type="text"
                    className="validate"
                  />
                  <label className="font-weight-400" htmlFor="name">
                    Your Name
                  </label>
                </div>
                <div className="input-field second-font">
                  <i className="fa fa-envelope prefix" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={email}
                    className="validate"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="input-field second-font">
                  <i className="fa fa-comments prefix" />
                  <textarea
                    id="message"
                    name="message"
                    onChange={onChange}
                    value={message}
                    className="materialize-textarea"
                  />
                  <label htmlFor="message">Your Message</label>
                </div>
                <div className="col s12 m12 l9 xl8 submit-form">
                  <button
                    className="btn font-weight-700"
                    type="submit"
                    name="send"
                  >
                    Send Message <i className="fa fa-send" />
                  </button>
                </div>
                <div className="col s12 m12 l8 xl8 form-message">
                  {error && (
                    <div className={error.includes("successfully") ? "green-text" : "red-text"}>
                      <span>{error}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default memo(GetInTouch);
