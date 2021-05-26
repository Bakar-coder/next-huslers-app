import React from "react";
import AddMedia from "../components/admin/add-media";
import { add_media } from "../store/actions";
import { connect } from "react-redux";
import requireAuth from "../hocs/requireAuth";
import { Link } from "../routes";

const AdminAddProduct = ({ user, add_media }) => {
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
                <h2 className='section__title'>Add Media Section</h2>

                <ul className='breadcrumb'>
                  <li className='breadcrumb__item'>
                    <Link route='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb__item breadcrumb__item--active'>
                    Add Media
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddMedia add_media={add_media} user={user} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, { add_media })(
  requireAuth(AdminAddProduct)
);
