import React from "react";
import ContactComponent from "../components/contact";
import {sendMessage} from '../store/actions';
import { connect } from 'react-redux'

function Contact(props) {
  return (
    <div className='wrapper' style={{  minHeight: "88vh" }}>
      <ContactComponent sendMessage={props.sendMessage} />
    </div>
  );
}

export default connect(null, { sendMessage })(Contact);
