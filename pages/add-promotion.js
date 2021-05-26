import React from "react";
import AddPromotion from "../components/admin/add-promo";
import { add_promo } from "../store/actions";
import { connect } from "react-redux";
import requireAuth from "../hocs/requireAuth";
import { Link } from "../routes";

const AdminAddProduct = ({ user, add_promo }) => {
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
                <h2 className='section__title'>Add Promotion Section</h2>

                <ul className='breadcrumb'>
                  <li className='breadcrumb__item'>
                    <Link route='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb__item breadcrumb__item--active'>
                    Add Promotion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddPromotion add_promo={add_promo} user={user} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });

export default connect(mapStateToProps, { add_promo })(
  requireAuth(AdminAddProduct)
);
