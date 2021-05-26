import React from "react";
import { connect } from "react-redux";
import redirect from "nextjs-redirect";
import { toast } from "react-toastify";

const AdminRoute = (Component) => {
  const mapState = ({ auth }) => ({ auth });
  const Redirect = redirect("/");
  const requireAuth = (props) => {
    const adminUser = props.auth.user && props.auth.user.stuff;
    switch (adminUser) {
      case false:
        {
          toast.error(" Unauthorized Access.");
        }
        return <Redirect />;
      default:
        return <Component {...props} />;
    }
  };

  return connect(mapState, null)(requireAuth);
};

export default AdminRoute;
