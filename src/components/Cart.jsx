import React from "react";
import CartItem from "./CartItem";

const Cart = ({ setOpenCart, cart, increasement, decreasement,removeCart }) => {
  const total = cart.reduce((pv, cv) => pv + cv.product.price * cv.quantity, 0);
  return (
    <div className=" w-100 min-vh-100 fixed-top bg-black-05">
      <div className="row min-vh-100 justify-content-end">
        <div className="col-10 col-md-6 col-lg-4 p-3">
          <div className=" h-100 bg-white rounded-3 me-3 p-3 position-relative">
            <h4 className=" d-flex ">
              <span>Cart Item</span>
              <span className=" ms-2 badge bg-dark">{cart.length}</span>
              <i
                onClick={(_) => setOpenCart(false)}
                className=" ms-auto bi bi-x-lg"
              ></i>
            </h4>
            <hr />
            {cart.map((itemInCart) => (
              <CartItem
                increasement={increasement}
                decreasement={decreasement}
                itemInCart={itemInCart}
                removeCart={removeCart}
                key={itemInCart.id}
              />
            ))}

            <div className=" d-flex justify-content-between border-top w-100 position-absolute bottom-0 start-0 p-3">
              <h4>Total</h4>
              <h4>{total}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
