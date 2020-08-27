import React from "react";
import ContactComponent from "../components/contact";

function Contact(props) {
  return (
    <div className='wrapper' style={{  minHeight: "88vh" }}>
      <ContactComponent />
    </div>
  );
}

export default Contact;
