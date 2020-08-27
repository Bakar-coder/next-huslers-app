import React, { useEffect } from "react";
import redirect from "nextjs-redirect";
import { withRouter } from "next/router";
import ReactPlayer from "react-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import ReactFlowPlayer from "react-flow-player";

const ProductDetails = ({ products, router, auth, addToCart }) => {
  const { slug } = router.query;

  let product =
    slug && products && products.filter((prod) => prod.title === slug);
  if (products) product = product[0];

  const Redirect = redirect("/");
  const mediaPath = product && `${process.env.BASE_URL}/${product.file}`;
  const mediaCover = product && `${process.env.BASE_URL}/${product.cover}`;

  const audz = products.filter(
    (prod) =>
      prod.file.split(".")[1] === "mp3" || prod.file.split(".")[1] === "m4a"
  );
  const vidz = products.filter(
    (prod) =>
      prod.file.split(".")[1] === "mp4" ||
      prod.file.split(".")[1] === "mkv" ||
      prod.file.split(".")[1] === "mov"
  );

  const fileType = product && product.file.split(".")[1];

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
                        <span>Director:</span> Vince Gilligan
                      </li>
                      <li>
                        <span>Cast:</span> <a href='#'>Brian Cranston</a>{" "}
                        <a href='#'>Jesse Plemons</a> <a href='#'>Matt Jones</a>{" "}
                        <a href='#'>Jonathan Banks</a>,{" "}
                        <a href='#'>Charles Baker</a>{" "}
                        <a href='#'>Tess Harper</a>
                      </li>
                      <li>
                        <span>Genre:</span> <a href='#'>Action</a>
                        <a href='#'>Triler</a>
                      </li>
                      <li>
                        <span>Release year:</span> 2019
                      </li>
                      <li>
                        <span>Running time:</span> 130 min
                      </li>
                      <li>
                        <span>Country:</span> <a href='#'>USA</a>
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
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy.
                      </div>
                      <div className='b-description_readmore_button'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            {fileType === "mp4" || fileType === "mkv" || fileType === "mov" ? (
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
                <ReactJkMusicPlayer
                  audioLists={[
                    {
                      cover: mediaCover,
                      musicSrc: mediaPath,
                      name: product.title,
                    },
                  ]}
                  theme='light'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Redirect />
  );
};

export default withRouter(ProductDetails);
