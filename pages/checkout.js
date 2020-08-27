import React from "react";
import { connect } from "react-redux";
import CheckoutComponent from "../components/shop/checkout";
import { SET_PRODUCTS } from "../store/types";
import axios from "axios";
import { getPaymentMethods } from "../store/actions";
import { Link } from '../routes';

const Checkout = ({
  cart,
  user,
  shipping,
  products,
  total,
  getPaymentMethods,
}) => {
  return (
    <div style={{  minHeight: "88vh" }}>
  <section className="section section--first section--bg" data-bg="/img/section/section.jpg" style={{background: "url(/img/section/section.jpg) center center / cover no-repeat"}}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section__wrap">
						<h2 className="section__title">Checkout Section</h2>

						<ul className="breadcrumb">
							<li className="breadcrumb__item"><Link route="/"><a>Home</a></Link></li>
							<li className="breadcrumb__item breadcrumb__item--active">Checkout</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
      <CheckoutComponent
        user={user}
        cart={cart}
        shipping={shipping}
        products={products}
        total={total}
        getPaymentMethods={getPaymentMethods}
      />
    </div>
  );
};

Checkout.propTypes = {};

Checkout.getInitialProps = async ({ store }) => {
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

function mapState({ auth, products, shop }) {
  return {
    user: auth.user,
    cart: products.cart,
    shipping: shop.shipping,
    products: products.products,
    total: products.total,
  };
}

export default connect(mapState, { getPaymentMethods })(Checkout);
