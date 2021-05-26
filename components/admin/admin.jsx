import React from "react";
import Slidebar from "./includes/slidebar";
import Main from './includes/main'

const AdminComponent = ({ user }) => {
  return (
    <div>
      <Slidebar user={user} />
      <Main/>
    </div>
  );
};

export default AdminComponent;
