import React from "react";
import Payment from "../components/shop/payment-method";
import { connect } from "react-redux";
import { createOrder } from "../store/actions";
import { Link } from '../routes';

const PaymentMethod = ({ total, createOrder, shipping }) => {
  return (
    <div  style={{  minHeight: "88vh" }}>
  <section className="section section--first section--bg" data-bg="/img/section/section.jpg" style={{background: "url(/img/section/section.jpg) center center / cover no-repeat"}}>
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section__wrap">
						<h2 className="section__title">Payment Methods</h2>

						<ul className="breadcrumb">
							<li className="breadcrumb__item"><Link route="/"><a>Home</a></Link></li>
							<li className="breadcrumb__item breadcrumb__item--active">Payment</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    <Payment total={total} createOrder={createOrder} shipping={shipping} />
    </div>
  );
};

function mapState({ products, shop }) {
  return {
    total: products.total,
    shipping: shop.shipping,
  };
}

export default connect(mapState, { createOrder })(PaymentMethod);
