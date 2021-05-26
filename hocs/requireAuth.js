import React from "react";
import { connect } from "react-redux";
import redirect from "nextjs-redirect";
import { toast } from "react-toastify";

const Authenticate = (Component) => {
  const mapState = ({ auth }) => ({ auth });
  const Redirect = redirect("login");
  const requireAuth = (props) => {
    const { auth } = props;
    switch (auth.isAuthenticated) {
      case false:
        {
          toast.error("Access denied, login to continue.");
        }
        return <Redirect />;
      default:
        return <Component {...props} />;
    }
  };

  return connect(mapState, null)(requireAuth);
};

export default Authenticate;
