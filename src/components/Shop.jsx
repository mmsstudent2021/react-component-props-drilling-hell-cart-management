import React, { useState } from "react";
import productList from "../data";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProduct] = useState(productList);
  const [cart, setCart] = useState([]);

  console.log(productList);

  const addToCart = (id) => {
    const currentProduct = products.find((product) => product.id === id);
    const newItemforCart = {
      id: Date.now(),
      product: currentProduct,
      quantity: 1,
    };
    setCart([...cart, newItemforCart]);
  };

  const increasement = (cartId) => {
    setCart(
      cart.map((itemInCart) => {
        if (itemInCart.id === cartId) {
          itemInCart.quantity += 1;
        }
        return itemInCart;
      })
    );
  };

  const decreasement = (cartId) => {
    setCart(
      cart.map((itemInCart) => {
        if (itemInCart.id === cartId && itemInCart.quantity > 1) {
          itemInCart.quantity -= 1;
        }
        return itemInCart;
      })
    );
  };

  const removeCart = (cartId) => {
    setCart(cart.filter((itemInCart) => itemInCart.id !== cartId));
  };

  return (
    <div className="">
      <div className=" container">
        <div className=" row g-3">
          <div className=" col-12">
            <NavBar
              increasement={increasement}
              decreasement={decreasement}
              removeCart={removeCart}

              cart={cart}
            />
          </div>
          {products.map((product) => (
            <div key={product.id} className=" col-6 col-md-4 col-xl-3">
              <ProductCard
                cart={cart}
                addToCart={addToCart}
                product={product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
