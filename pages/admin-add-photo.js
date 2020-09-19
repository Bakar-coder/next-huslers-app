import React from "react";
import AddPhoto from "../components/admin/add-photo";
import { add_image } from "../store/actions";
import { connect } from "react-redux";
import requireAdmin from "../hocs/requireAdmin";
import requireAuth from "../hocs/requireAuth";
import { Link } from "../routes";

const AdminAddPhoto = ({ add_image }) => {
  return (
    <div style={{ minHeight: "88vh" }}>
      <section
        className='section section--first section--bg'
        data-bg='/img/section/section.jpg'
        style={{
          background:
            "url(/img/section/section.jpg) center center / cover no-repeat",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section__wrap'>
                <h2 className='section__title'>Gallery Photo Section</h2>

                <ul className='breadcrumb'>
                  <li className='breadcrumb__item'>
                    <Link route='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb__item breadcrumb__item--active'>
                    Add Gallery Photo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddPhoto add_image={add_image} />
    </div>
  );
};

export default connect(null, { add_image })(
  requireAuth(requireAdmin(AdminAddPhoto))
);