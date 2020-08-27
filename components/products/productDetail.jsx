import React from "react";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ProductDetails = ({ media }) => {
  const router = new useRouter();
  const { slug } = router.query;
  if (!slug) return router.push("/");

  let product = slug && media && media.filter((prod) => prod.title === slug);
  if (media) product = product[0];

  const mediaPath = product && `${process.env.BASE_URL}/${product.file}`;
  const mediaCover = product && `${process.env.BASE_URL}/${product.cover}`;

  const fileType = product && product.type;
  if (!product) return router.push("/");
  return (
    product && (
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
                      <img
                        src={`${process.env.BASE_URL}/${product.cover}`}
                        alt=''
                      />
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
                          <span>Release year:</span> {product.releaseDate}
                        </li>
                      </ul>
                      <div
                        className='b-description_readmore_wrapper js-description_readmore_wrapper'
                        style={{ maxWidth: "352.078px" }}
                      >
                        <div
                          className='card__description b-description_readmore_ellipsis'
                          style={{
                            minHeight: "156px",
                            maxHeight: "156px",
                            overflow: "hidden",
                          }}
                        >
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy.
                        </div>
                        <div className='b-description_readmore_button'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              {fileType === "Video" ? (
                <div className='plyr'>
                  <ReactPlayer
                    url={mediaPath}
                    playing
                    loop
                    controls
                    playbackRate
                  />
                  {/* <ReactFlowPlayer
                  playerInitScript='/js/flowPlayer.js'
                  playerId='reactFlowPlayer'
                  sources={[
                    {
                      type: "video/mp4",
                      src: `${process.env.BASE_URL}/${product.file}`,
                    },
                  ]}
                  customButton={[
                    {
                      component: <a id='custom-btn'>{product.title}</a>,
                      class: "fp-controls > .fp-volume",
                      id: "custom-btn",
                      place: "before",
                    },
                  ]}
                /> */}
                </div>
              ) : (
                <div className='plyr'>
                  <AudioPlayer
                    autoPlay
                    src={mediaPath}
                    autoPlay
                    showSkipControls
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductDetails;
