import React from 'react';
import { Link } from '../../../routes'

function Main(props) {
  return (
    <main className="main">
      <div className="container-fluid">
        <div className="row">

          <div className="col-12">
            <div className="main__title">
              <h2>Dashboard</h2>

              <Link  route="admin-add-product" ><a className="main__title-link"> add Product</a></Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span>Unique views this month</span>
              <p>5 678</p>
              <i className="icon ion-ios-stats"></i>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span>Items added this month</span>
              <p>172</p>
              <i className="icon ion-ios-film"></i>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span>New comments</span>
              <p>2 573</p>
              <i className="icon ion-ios-chatbubbles"></i>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span>New reviews</span>
              <p>1 021</p>
              <i className="icon ion-ios-star-half"></i>
            </div>
          </div>



          <div className="col-12 col-xl-6">
            <div className="dashbox">
              <div className="dashbox__title">
                <h3><i className="icon ion-ios-trophy"></i> Top items</h3>

                <div className="dashbox__wrap">
                  <a className="dashbox__refresh" href="#"><i className="icon ion-ios-refresh"></i></a>
                  <a className="dashbox__more" href="catalog.html">View All</a>
                </div>
              </div>

              <div className="dashbox__table-wrap mCustomScrollbar _mCS_2 mCS_no_scrollbar" style={{overflow: 'visible'}}>
                <div id="mCSB_2" className="mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside" tabIndex="0" style={{maxHeight: '226.667px'}}>
                  <div id="mCSB_2_container" className="mCSB_container mCS_x_hidden mCS_no_scrollbar_x" style={{position: 'relative', top: '0px', left: '0px', width: '501px', minWidth: '100%', overflowX: 'inherit'}} dir="ltr">
                    <table className="main__table main__table--dash">
                      <thead>
                      <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>RATING</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div className="main__table-text">321</div>
                        </td>
                        <td>
                          <div className="main__table-text">I Dream in Another Language</div>
                        </td>
                        <td>
                          <div className="main__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.2</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="main__table-text">54</div>
                        </td>
                        <td>
                          <div className="main__table-text">Benched</div>
                        </td>
                        <td>
                          <div className="main__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.1</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="main__table-text">670</div>
                        </td>
                        <td>
                          <div className="main__table-text">Whitney</div>
                        </td>
                        <td>
                          <div className="main__table-text">TV Series</div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="main__table-text">241</div>
                        </td>
                        <td>
                          <div className="main__table-text">Blindspotting 2</div>
                        </td>
                        <td>
                          <div className="main__table-text">TV Series</div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.9</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="main__table-text">22</div>
                        </td>
                        <td>
                          <div className="main__table-text">Blindspotting</div>
                        </td>
                        <td>
                          <div className="main__table-text">TV Series</div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.9</div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="mCSB_2_scrollbar_horizontal" className="mCSB_scrollTools mCSB_2_scrollbar mCS-custom-bar3 mCSB_scrollTools_horizontal" style={{display: 'none'}}>
                  <div className="mCSB_draggerContainer">
                    <div id="mCSB_2_dragger_horizontal" className="mCSB_dragger" style={{position: 'absolute', minWidth: '30px', width: '0px', left: '0px', display: 'block', maxWidth: '363.889px'}}>
                      <div className="mCSB_dragger_bar"></div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/*<div className="col-12 col-xl-6">*/}
          {/*  <div className="dashbox">*/}
          {/*    <div className="dashbox__title">*/}
          {/*      <h3><i className="icon ion-ios-film"></i> Latest items</h3>*/}

          {/*      <div className="dashbox__wrap">*/}
          {/*        <a className="dashbox__refresh" href="#"><i className="icon ion-ios-refresh"></i></a>*/}
          {/*        <a className="dashbox__more" href="catalog.html">View All</a>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    <div className="dashbox__table-wrap mCustomScrollbar _mCS_3 mCS_no_scrollbar" style="overflow: visible;">*/}
          {/*      <div id="mCSB_3" className="mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside" tabIndex="0" style="max-height: 226.667px;">*/}
          {/*        <div id="mCSB_3_container" className="mCSB_container mCS_x_hidden mCS_no_scrollbar_x" style="position: relative; top: 0px; left: 0px; width: 501px; min-width: 100%; overflow-x: inherit;" dir="ltr">*/}
          {/*          <table className="main__table main__table--dash">*/}
          {/*            <thead>*/}
          {/*            <tr>*/}
          {/*              <th>ID</th>*/}
          {/*              <th>TITLE</th>*/}
          {/*              <th>CATEGORY</th>*/}
          {/*              <th>STATUS</th>*/}
          {/*            </tr>*/}
          {/*            </thead>*/}
          {/*            <tbody>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">26</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">I Dream in Another Language</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Movie</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--green">Visible</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">25</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Benched</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Movie</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--green">Visible</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">24</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Whitney</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">TV Series</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--green">Visible</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Blindspotting 2</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">TV Series</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--green">Visible</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">22</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Blindspotting</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">TV Series</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--green">Visible</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            </tbody>*/}
          {/*          </table>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div id="mCSB_3_scrollbar_horizontal" className="mCSB_scrollTools mCSB_3_scrollbar mCS-custom-bar3 mCSB_scrollTools_horizontal" style="display: none;">*/}
          {/*        <div className="mCSB_draggerContainer">*/}
          {/*          <div id="mCSB_3_dragger_horizontal" className="mCSB_dragger" style="position: absolute; min-width: 30px; width: 0px; left: 0px; display: block; max-width: 363.889px;">*/}
          {/*            <div className="mCSB_dragger_bar"></div>*/}
          {/*            <div className="mCSB_draggerRail"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}



          {/*<div className="col-12 col-xl-6">*/}
          {/*  <div className="dashbox">*/}
          {/*    <div className="dashbox__title">*/}
          {/*      <h3><i className="icon ion-ios-contacts"></i> Latest users</h3>*/}

          {/*      <div className="dashbox__wrap">*/}
          {/*        <a className="dashbox__refresh" href="#"><i className="icon ion-ios-refresh"></i></a>*/}
          {/*        <a className="dashbox__more" href="users.html">View All</a>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    <div className="dashbox__table-wrap mCustomScrollbar _mCS_4 mCS_no_scrollbar" style="overflow: visible;">*/}
          {/*      <div id="mCSB_4" className="mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside" tabIndex="0" style="max-height: 226.667px;">*/}
          {/*        <div id="mCSB_4_container" className="mCSB_container mCS_x_hidden mCS_no_scrollbar_x" style="position: relative; top: 0px; left: 0px; width: 501px; min-width: 100%; overflow-x: inherit;" dir="ltr">*/}
          {/*          <table className="main__table main__table--dash">*/}
          {/*            <thead>*/}
          {/*            <tr>*/}
          {/*              <th>ID</th>*/}
          {/*              <th>FULL NAME</th>*/}
          {/*              <th>EMAIL</th>*/}
          {/*              <th>USERNAME</th>*/}
          {/*            </tr>*/}
          {/*            </thead>*/}
          {/*            <tbody>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--grey">email@email.com</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Username</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--grey">email@email.com</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Username</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--grey">email@email.com</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Username</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--grey">email@email.com</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Username</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--grey">email@email.com</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Username</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            </tbody>*/}
          {/*          </table>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div id="mCSB_4_scrollbar_horizontal" className="mCSB_scrollTools mCSB_4_scrollbar mCS-custom-bar3 mCSB_scrollTools_horizontal" style="display: none;">*/}
          {/*        <div className="mCSB_draggerContainer">*/}
          {/*          <div id="mCSB_4_dragger_horizontal" className="mCSB_dragger" style="position: absolute; min-width: 30px; width: 0px; left: 0px; display: block; max-width: 363.889px;">*/}
          {/*            <div className="mCSB_dragger_bar"></div>*/}
          {/*            <div className="mCSB_draggerRail"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}



          {/*<div className="col-12 col-xl-6">*/}
          {/*  <div className="dashbox">*/}
          {/*    <div className="dashbox__title">*/}
          {/*      <h3><i className="icon ion-ios-star-half"></i> Latest reviews</h3>*/}

          {/*      <div className="dashbox__wrap">*/}
          {/*        <a className="dashbox__refresh" href="#"><i className="icon ion-ios-refresh"></i></a>*/}
          {/*        <a className="dashbox__more" href="reviews.html">View All</a>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*    <div className="dashbox__table-wrap mCustomScrollbar _mCS_5 mCS_no_scrollbar" style="overflow: visible;">*/}
          {/*      <div id="mCSB_5" className="mCustomScrollBox mCS-custom-bar3 mCSB_horizontal mCSB_outside" tabIndex="0" style="max-height: 226.667px;">*/}
          {/*        <div id="mCSB_5_container" className="mCSB_container mCS_x_hidden mCS_no_scrollbar_x" style="position: relative; top: 0px; left: 0px; width: 501px; min-width: 100%; overflow-x: inherit;" dir="ltr">*/}
          {/*          <table className="main__table main__table--dash">*/}
          {/*            <thead>*/}
          {/*            <tr>*/}
          {/*              <th>ID</th>*/}
          {/*              <th>ITEM</th>*/}
          {/*              <th>AUTHOR</th>*/}
          {/*              <th>RATING</th>*/}
          {/*            </tr>*/}
          {/*            </thead>*/}
          {/*            <tbody>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">23</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">I Dream in Another Language</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.2</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">24</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Benched</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.3</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">25</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Whitney</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.4</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">26</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">Blindspotting</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            <tr>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">27</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">I Dream in Another Language</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text">John Doe</div>*/}
          {/*              </td>*/}
          {/*              <td>*/}
          {/*                <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.7</div>*/}
          {/*              </td>*/}
          {/*            </tr>*/}
          {/*            </tbody>*/}
          {/*          </table>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div id="mCSB_5_scrollbar_horizontal" className="mCSB_scrollTools mCSB_5_scrollbar mCS-custom-bar3 mCSB_scrollTools_horizontal" style="display: none;">*/}
          {/*        <div className="mCSB_draggerContainer">*/}
          {/*          <div id="mCSB_5_dragger_horizontal" className="mCSB_dragger" style="position: absolute; min-width: 30px; width: 0px; left: 0px; display: block; max-width: 363.889px;">*/}
          {/*            <div className="mCSB_dragger_bar"></div>*/}
          {/*            <div className="mCSB_draggerRail"></div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
    </main>
  );
}

export default Main;