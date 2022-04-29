import "../styles/Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wf9xhsw",
        "template_7ivhia6",
        form.current,
        "3Dafb64jHMManKUW3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("msg send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div class="container">
      <div class="contact-parent">
        <div class="contact-child child1">
          <p>
            <i class="fas fa-map-marker-alt"></i> Address <br />
            <span>
              {" "}
              Hermanplatz 16A
              <br />
              Berlin, Deutschland
            </span>
          </p>
          <p>
            <i class="fas fa-phone-alt"></i> Let's Talk <br />
            <span> 0787878787</span>
          </p>
          <p>
            <i class=" far fa-envelope"></i> General Support <br />
            <span>chrihazakaria@gmail.com</span>
          </p>
        </div>
        <div class="contact-child child2">
          <form ref={form} onSubmit={sendEmail}>
            <div class="inside-contact">
              <h2>Contact Us</h2>
              <h3></h3>
              <p>Name *</p>
              <input
                id="txt_name"
                type="text"
                Required="required"
                name="user_name"
              />
              <br />
              <br />
              <br />

              <p>Email *</p>
              <input
                id="txt_email"
                type="text"
                Required="required"
                name="user_email"
              />
              <br />
              <br />
              <br />

              <p>Message *</p>
              <textarea
                name="message"
                id="txt_message"
                rows="4"
                cols="20"
                Required="required"
              ></textarea>
              <br />
              <br />
              <br />

              <input type="submit" id="btn_send" value="SEND" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;