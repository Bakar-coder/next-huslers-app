import React from "react";
import ShippingForm from "../components/shop/shipping";
import { setShipping } from "../store/actions";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from '../routes';


const Shipping = ({ setShipping, user, shipping }) => (
  <div style={{  minHeight: "88vh" }}>
  <section className="section section--first section--bg" data-bg="/img/section/section.jpg" style={{background: "url(/img/section/section.jpg) center center / cover no-repeat"}}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section__wrap">
						<h2 className="section__title">Billing Section</h2>

						<ul className="breadcrumb">
							<li className="breadcrumb__item"><Link route="/"><a>Home</a></Link></li>
							<li className="breadcrumb__item breadcrumb__item--active">Billing</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
  <ShippingForm setShipping={setShipping} user={user} shipping={shipping} />
  </div>
);

Shipping.getInitialProps = async ({ store }) => {
  try {
    const url = `${process.env.BASE_URL}/api/products`;
    const { dispatch } = store;
    const { data } = await axios.get(url);
    if (data.products.length > 0) {
      const products = data.products;
      dispatch({ type: SET_PRODUCTS, payload: products });
      return { products };
    }
  } catch (ex) {
    console.log(ex);
  }
};

const mapState = ({ auth, shop }) => ({
  user: auth.user,
  shipping: shop.shipping,
});
export default connect(mapState, { setShipping })(Shipping);
