import React from "react";
import { Link } from "../routes";
import AddEvent from "../components/admin/add-event";
import { add_event } from "../store/actions";
import { connect } from "react-redux";

function Event(props) {
  const { user, add_event } = props;
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
                <h2 className='section__title'>Events Section</h2>

                <ul className='breadcrumb'>
                  <li className='breadcrumb__item'>
                    <Link route='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className='breadcrumb__item breadcrumb__item--active'>
                    Events
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddEvent add_event={add_event} user={user} />
    </div>
  );
}

const mapState = ({ auth }) => ({ user: auth.user });

export default connect(mapState, { add_event })(Event);
