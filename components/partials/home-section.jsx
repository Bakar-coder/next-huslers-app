import React, { useState } from "react";
import { Link } from "../../routes";

const HomeSection = ({ media }) => {
  const [state, setState] = useState({
    mixes: false,
    newRelease: true,
    audios: false,
    videos: false,
  });

  const [navOpen, setNav] = useState(false);

  const audz = media && media.filter((item) => item.type === "Audio");
  const vidz = media && media.filter((item) => item.type === "Video");
  const mixtapes = media && media.filter((item) => item.category === "mixtape");

  const handleDropdown = () => setNav(!navOpen);

  return media ? (
    <section className='content'>
      <div className='content__head'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='content__title'>New Hits</h2>

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
                  onClick={handleDropdown}
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
                  className={
                    navOpen
                      ? "content__mobile-tabs-menu dropdown-menu show"
                      : "content__mobile-tabs-menu dropdown-menu"
                  }
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
                        onClick={() => {
                          setState({
                            ...state,
                            mixes: false,
                            newRelease: true,
                            audios: false,
                            videos: false,
                          });
                          setNav(!navOpen);
                        }}
                      >
                        LATEST HITS
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
                        onClick={() => {
                          setState({
                            ...state,
                            mixes: true,
                            newRelease: false,
                            audios: false,
                            videos: false,
                          });
                          setNav(!navOpen);
                        }}
                      >
                        MIX-TAPES
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
                        onClick={() => {
                          setState({
                            ...state,
                            mixes: false,
                            newRelease: false,
                            audios: true,
                            videos: false,
                          });
                          setNav(!navOpen);
                        }}
                      >
                        AUDIOS
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
                        onClick={() => {
                          setState({
                            ...state,
                            mixes: false,
                            newRelease: false,
                            audios: false,
                            videos: true,
                          });
                          setNav(!navOpen);
                        }}
                      >
                        VIDEOS
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
              {state.videos &&
                vidz.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${item.cover}`}
                            alt=''
                          />
                          <a className='card__play'>
                            <Link route={`/product/${item.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a>{item.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a>by {item.artist}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {state.audios &&
                audz.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${item.cover}`}
                            alt=''
                          />
                          <a className='card__play'>
                            <Link route={`/product/${item.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a>{item.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a>by {item.artist}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {state.mixes &&
                mixtapes.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${item.cover}`}
                            alt=''
                          />
                          <a className='card__play'>
                            <Link route={`/product/${item.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a>{item.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a>by {item.artist}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {state.newRelease &&
                media.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className='col-6 col-sm-4 col-md-3 col-xl-2'
                    >
                      <div className='card'>
                        <div className='card__cover'>
                          <img
                            src={`${process.env.BASE_URL}/${item.cover}`}
                            alt=''
                          />
                          <a className='card__play'>
                            <Link route={`/product/${item.title}`}>
                              <i className='icon ion-ios-play' />
                            </Link>
                          </a>
                          {/* <span className="card__rate card__rate--green">8.4</span> */}
                        </div>
                        <div className='card__content'>
                          <h3 className='card__title'>
                            <a>{item.title}</a>
                          </h3>
                          <span className='card__category'>
                            <a>by {item.artist}</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeSection;
