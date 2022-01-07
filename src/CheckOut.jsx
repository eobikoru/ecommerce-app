import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import Header from "./Header";
function CheckOut() {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="check0utLeft">
          <img
            src="https://image.shutterstock.com/image-photo/happy-reaction-on-advert-positive-260nw-1666823338.jpg"
            alt=""
            className="checkout__ad"
          />
        </div>
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <CheckOutProduct />
        </div>
        <div className="checkoutRight"></div>
      </div>
    </>
  );
}

export default CheckOut;
