import React, { Component } from "react";

export default class Scripts extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    const jquery = script;
    const bootstrap = script;
    const carousel = script;
    const mousewheel = script;
    const mCustomScrollbar = script;
    const wNumb = script;
    const nouislider = script;
    const morelines = script;
    const plyr = script;
    const photoswipe = script;
    const ui = script;
    const main = script;
    jquery.src = "/js/jquery-3.5.1.min.js";
    bootstrap.src = "/js/bootstrap.bundle.min.js";
    carousel.src = "/js/owl.carousel.min.js";
    mousewheel.src = "/js/jquery.mousewheel.min.js";
    mCustomScrollbar.src = "/js/jquery.mCustomScrollbar.min.js";
    wNumb.src = "/js/wNumb.js";
    nouislider.src = "/js/nouislider.min.js";
    morelines.src = "/js/jquery.morelines.min.js";
    plyr.src = "/js/plyr.min.js";
    photoswipe.src = "/js/photoswipe.min.js";
    ui.src = "/js/photoswipe-ui-default.min.js";
    main.src = "/js/main.js";

    document.body.appendChild(jquery);
    document.body.appendChild(bootstrap);
    document.body.appendChild(carousel);
    document.body.appendChild(mousewheel);
    document.body.appendChild(mCustomScrollbar);
    document.body.appendChild(wNumb);
    document.body.appendChild(nouislider);
    document.body.appendChild(morelines);
    document.body.appendChild(plyr);
    document.body.appendChild(photoswipe);
    document.body.appendChild(ui);
    document.body.appendChild(main);
  }

  render() {
    return <React.Fragment />;
  }
}
