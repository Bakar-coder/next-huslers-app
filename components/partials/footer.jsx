import React from "react";
import { Link } from "../../routes";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='footer__content'>
              <a href='index.html' className='footer__logo'>
                <img src='img/logo.svg' alt='' />
              </a>

              <span className='footer__copyright'>
                © {year} Ghetto Hustlers
                <br /> Create by{" "}
                <a href='#' target='_blank'>
                  Wabomba Bakar
                </a>
              </span>

              <nav className='footer__nav'>
                <Link route='/'>
                  <a>Home</a>
                </Link>
               
                <Link route='/gallery'>
                  <a>Gallery</a>
                </Link>
                <Link route='/contact'>
                  <a>Contact Us</a>
                </Link>
              </nav>

              <button className='footer__back' type='button'>
                <i className='icon ion-ios-arrow-round-up'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
