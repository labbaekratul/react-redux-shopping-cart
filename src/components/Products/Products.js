import React from "react";
import "./Products.css";
import data from "../../utils/data";
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

function Products() {
  const dispatch = useDispatch();

  return (
    <div className="Product">
      <div className="Product__Search-area mb-3">
        <p>
          <span>0</span> Prodcuts
        </p>

        <input type="text" placeholder="Search product" />
      </div>

      <div className="Product__Cards row gx-3 gy-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="Product__Card col-sm-12 col-md-4 col-xl-3"
          >
            <Card className="Card">
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="des-price-area">
                <div>
                  <small>{item.title.substring(0, 35)}</small>
                  <p>
                    <b>Price : {item.price}</b>
                  </p>
                </div>
              </div>

              <div className="cart-area">
                <span>DETAILS</span>
                <button onClick={() => dispatch(addToCart(item))}>
                  ADD TO CART
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
