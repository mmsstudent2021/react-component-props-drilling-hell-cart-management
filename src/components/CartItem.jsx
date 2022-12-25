import React from "react";

const CartItem = ({ itemInCart, increasement, decreasement, removeCart }) => {
  const cost = itemInCart.product.price * itemInCart.quantity;
  const del = (id) => {
    if (confirm("Are U sure to remove item ?")) {
      removeCart(id);
    }
  };
  return (
    <div className=" border border-dark p-3 mb-3 rounded">
      <p className=" small text-truncate">{itemInCart.product.title}</p>
      <div className=" d-flex justify-content-between align-items-center">
        <div className=" input-group " style={{ width: "130px" }}>
          <button
            onClick={(_) => decreasement(itemInCart.id)}
            className=" btn btn-sm btn-outline-dark"
          >
            <i className=" bi bi-dash"></i>
          </button>
          <input
            type="number"
            className=" form-control form-control-sm border-dark text-center"
            value={itemInCart.quantity}
          />
          <button
            onClick={(_) => increasement(itemInCart.id)}
            className=" btn btn-sm btn-outline-dark"
          >
            <i className=" bi bi-plus"></i>
          </button>
        </div>
        <div className="">
          <span className="me-2">$ {cost} </span>
          <button
            onClick={del.bind(null, itemInCart.id)}
            className=" btn btn-sm btn-danger"
          >
            <i className=" bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
