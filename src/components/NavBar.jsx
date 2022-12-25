import React, { useState } from "react";
import Cart from "./Cart";

const NavBar = ({ cart, increasement, decreasement,removeCart }) => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <nav className=" d-flex justify-content-between align-items-center border rounded border-dark p-3 mt-3">
        <h3 className=" mb-0 fw-bold">SHOP</h3>
        <div className="">
          <button className=" btn btn-outline-dark me-2">
            <i className=" bi bi-search"></i>
          </button>
          <button
            type="button"
            onClick={(_) => setOpenCart(true)}
            className="btn btn-outline-dark position-relative"
          >
            <i className=" bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
      {openCart && (
        <Cart
          increasement={increasement}
          decreasement={decreasement}
          removeCart={removeCart}
          cart={cart}
          setOpenCart={setOpenCart}
        />
      )}
    </>
  );
};

export default NavBar;
