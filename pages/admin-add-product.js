import React from "react";
import AddProduct from "../components/admin/add-product";
import { add_Product } from "../store/actions";
import { connect } from "react-redux";
import requireAdmin from "../hocs/requireAdmin";
import requireAuth from "../hocs/requireAuth";

const AdminAddProduct = ({ add_Product }) => {
  return (
    <div className='wrapper'>
      <AddProduct add_Product={add_Product} />
    </div>
  );
};

export default connect(null, { add_Product })(
  requireAuth(requireAdmin(AdminAddProduct))
);
