import React from "react";
import AdminComponent from "../components/admin/admin";
import { connect } from 'react-redux'

const Admin = ({ user }) => {
  return (
    <div className='wrapper'>
      <AdminComponent user={user} />
    </div>
  );
};

const mapState = ({ auth }) => ({ user: auth.user })

export default connect(mapState, null)(Admin);
