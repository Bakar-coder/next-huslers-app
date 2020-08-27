import React, { useState } from "react";
import { Link } from "../../routes";

const HomeSection = ({ products }) => {
  const [state, setState] = useState({
    mixes: false,
    newRelease: true,
    audios: false,
    videos: false,
  });

  const audz =
    products &&
    products.filter(
      (prod) =>
        prod.file.split(".")[1] === "mp3" || prod.file.split(".")[1] === "m4a"
    );
  const vidz =
    products &&
    products.filter(
      (prod) =>
        prod.file.split(".")[1] === "mp4" ||
        prod.file.split(".")[1] === "mkv" ||
        prod.file.split(".")[1] === "mov"
    );

  return products ? (
    <section className='content'>
      <div className='content__head'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='content__title'>New items</h2>

              <ul
                className='nav nav-tabs content__tabs'
                id='content__tabs'
                role='tablist'
              >
                <li className='nav-item'>
                  <a
                    className={
                      state.newRelease ? "nav-link active" : "nav-link"
                    }
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-1'
                    aria-selected='true'
                    onClick={() =>
                      setState({
                        ...state,
                        mixes: false,
                        newRelease: true,
                        audios: false,
                        videos: false,
                      })
                    }
                  >
                    NEW RELEASES
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className={state.mixes ? "nav-link active" : "nav-link"}
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-2'
                    aria-selected='false'
                    onClick={() =>
                      setState({
                        ...state,
                        mixes: true,
                        newRelease: false,
                        audios: false,
                        videos: false,
                      })
                    }
                  >
                    MIX-TAPES
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className={state.audios ? "nav-link active" : "nav-link"}
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-3'
                    aria-selected='false'
                    onClick={() =>
                      setState({
                        ...state,
                        mixes: false,
                        newRelease: false,
                        audios: true,
                        videos: false,
                      })
                    }
                  >
                    AUDIOS
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className={state.videos ? "nav-link active" : "nav-link"}
                    data-toggle='tab'
                    role='tab'
                    aria-controls='tab-4'
                    aria-selected='false'
                    onClick={() =>
                      setState({
                        ...state,
                        mixes: false,
                        newRelease: false,
                        audios: false,
                        videos: true,
                      })
                    }
                  >
                    VIDEOS
                  </a>
                </li>
              </ul>

              <div className='content__mobile-tabs' id='content__mobile-tabs'>
                <div
                  className='content__mobile-tabs-btn dropdown-toggle'
                  role='navigation'
                  id='mobile-tabs'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <input type='button' value='New releases' />
                  <span></span>
                </div>

                <div
                  className='content__mobile-tabs-menu dropdown-menu'
                  aria-labelledby='mobile-tabs'
                >
                  <ul className='nav nav-tabs' role='tablist'>
                    <li className='nav-item' data-value='new releases'>
                      <a
                        className='nav-link active'
                        id='1-tab'
                        data-toggle='tab'
                        role='tab'
                        aria-controls='tab-1'
                        aria-selected='true'
                      >
                        NEW RELEASES
                      </a>
                    </li>

                    <li className='nav-item' data-value='movies'>
                      <a
                        className='nav-link'
                        id='2-tab'
                        data-toggle='tab'
                        role='tab'
                        aria-controls='tab-2'
                        aria-selected='false'
                      >
                        MOVIES
                      </a>
                    </li>

                    <li className='nav-item' data-value='tv series'>
                      <a
                        className='nav-link'
                        id='3-tab'
                        data-toggle='tab'
                        role='tab'
                        aria-controls='tab-3'
                        aria-selected='false'
                      >
                        TV SERIES
                      </a>
                    </li>

                    <li className='nav-item' data-value='cartoons'>
                      <a
                        className='nav-link'
                        id='4-tab'
                        data-toggle='tab'
                        role='tab'
                        aria-controls='tab-4'
                        aria-selected='false'
                      >
                        CARTOONS
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='tab-content'>
          <div
            className='tab-pane fade show active'
            id='tab-1'
            role='tabpanel'
            aria-labelledby='1-tab'
          >
            <div className='row'>
              {state.newRelease
                ? products.map((product) => (
                    <div
                      key={product._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${product.cover}`}
                            alt=''
                          />
                          <a href='#' className='card__play'>
                            <Link route={`/product/${product.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a href='#'>{product.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a href='#'>Action</a>
                            <a href='#'>Triler</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : state.audios
                ? audz.map((product) => (
                    <div
                      key={product._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${product.cover}`}
                            alt=''
                          />
                          <a href='#' className='card__play'>
                            <Link route={`/product/${product.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a href='#'>{product.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a href='#'>Action</a>
                            <a href='#'>Triler</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : state.videos
                ? vidz.map((product) => (
                    <div
                      key={product._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${product.cover}`}
                            alt=''
                          />
                          <a href='#' className='card__play'>
                            <Link route={`/product/${product.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a href='#'>{product.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a href='#'>Action</a>
                            <a href='#'>Triler</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeSection;

{
  /* <div className='tab-content'>

  <div
    className='tab-pane fade show active'
    id='tab-1'
    role='tabpanel'
    aria-labelledby='1-tab'
   >
    <div className='row'>
      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    className='tab-pane fade'
    id='tab-2'
    role='tabpanel'
    aria-labelledby='2-tab'
  >
    <div className='row'>
      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    className='tab-pane fade'
    id='tab-3'
    role='tabpanel'
    aria-labelledby='3-tab'
  >
    <div className='row'>
      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    className='tab-pane fade'
    id='tab-4'
    role='tabpanel'
    aria-labelledby='4-tab'
  >
    <div className='row'>
      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover2.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover3.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--red'>6.3</span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Whitney</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Romance</a>
              <a href='#'>Drama</a>
              <a href='#'>Music</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover4.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.9
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Blindspotting</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
              <a href='#'>Drama</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover5.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              8.4
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>I Dream in Another Language</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Action</a>
              <a href='#'>Triler</a>
            </span>
          </div>
        </div>
      </div>

      <div className='col-6 col-sm-4 col-md-3 col-xl-2'>
        <div className='card'>
          <div className='card__cover'>
            <img src='/img/covers/cover6.jpg' alt='' />
            <a href='#' className='card__play'>
              <i className='icon ion-ios-play'></i>
            </a>
            <span className='card__rate card__rate--green'>
              7.1
                        </span>
          </div>
          <div className='card__content'>
            <h3 className='card__title'>
              <a href='#'>Benched</a>
            </h3>
            <span className='card__category'>
              <a href='#'>Comedy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}