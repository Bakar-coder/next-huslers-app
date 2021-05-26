import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ProductDetails = ({ media }) => {
  const router = new useRouter();
  const [readMore, setReadMore] = useState(false);
  const { slug } = router.query;
  if (!slug) return router.push("/");

  let product = slug && media && media.filter((prod) => prod.title === slug);
  if (media) product = product[0];

  const mediaPath = product && `${process.env.BASE_URL}/${product.file}`;
  const mediaCover = product && `${process.env.BASE_URL}/${product.cover}`;
  const date = product && new Date(product.releaseDate);

  const fileType = product && product.type;
  console.log(readMore);
  return product ? (
    <section
      className='section section--details section--bg'
      data-bg='/img/section/details.jpg'
      style={{
        background:
          "url(/img/section/details.jpg) center center / cover no-repeat",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='section__title'>{product.title}</h1>
          </div>

          <div className='col-12 col-lg-6'>
            <div className='card card--details'>
              <div className='row'>
                <div className='col-12 col-sm-5 col-lg-6 col-xl-5'>
                  <div className='card__cover'>
                    <img src={mediaCover} alt={product.title} />
                    {/* <span className="card__rate card__rate--green">8.4</span> */}
                  </div>
                </div>

                <div className='col-12 col-sm-7 col-lg-6 col-xl-7'>
                  <div className='card__content'>
                    <ul className='card__meta'>
                      <li>
                        <span>Artist:</span> {product.artist}
                      </li>
                      {/* <li>
                          <span>Cast:</span> <a href='#'>Brian Cranston</a>{" "}
                          <a href='#'>Jesse Plemons</a>{" "}
                          <a href='#'>Matt Jones</a>{" "}
                          <a href='#'>Jonathan Banks</a>,{" "}
                          <a href='#'>Charles Baker</a>{" "}
                          <a href='#'>Tess Harper</a>
                        </li> */}
                      <li>
                        <span>Genre:</span> <a>{product.genre}</a>
                        {/* <a href='#'></a> */}
                      </li>
                      <li>
                        <span>Release year:</span> {date.getFullYear()}
                      </li>
                    </ul>
                    <div
                      className='b-description_readmore_wrapper js-description_readmore_wrapper'
                      style={{ maxWidth: "352.078px" }}
                    >
                      <div
                        className={
                          readMore
                            ? "card__description b-description_readmore_ellipsis"
                            : "card__description"
                        }
                        style={
                          readMore
                            ? {
                                minHeight: "156px",
                                overflow: "hidden",
                                height: "286px",
                              }
                            : {
                                minHeight: "156px",
                                maxHeight: "156px",
                                overflow: "hidden",
                              }
                        }
                      >
                        {product.description}
                      </div>
                      <div
                        className={
                          readMore
                            ? "b-description_readmore_button"
                            : "b-description_readmore_button b-description_readmore_button_active"
                        }
                        onClick={() => setReadMore(!readMore)}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            {fileType === "Video" ? (
              <div className='plyr'>
                <ReactPlayer url={mediaPath} playing loop controls />
              </div>
            ) : (
              <div className='plyr'>
                <div
                  style={{
                    textAlign: "center",
                    background: "rgba(0,0,0,0.5)",
                    paddingTop: ".2rem",
                  }}
                >
                  <img src={mediaCover} alt='Poster' />
                </div>
                <AudioPlayer
                  autoPlay
                  src={mediaPath}
                  showSkipControls
                  // layout='horizontal'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default ProductDetails;
