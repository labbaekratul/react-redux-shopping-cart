import React from "react";
import "./Cart.css";
import { Container } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { removeFromCart } from "../../app/features/cart/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container maxWidth="xl">
      <Navbar />

      <section className="cart-section">
        <h1>🛍️ My Cart</h1>

        <div className="row">
          <div className="col-md-9 col-sm-12 item-col">
            <div className="item-area">
              {cart.map((item) => (
                <div className="single-product" key={item.id}>
                  <div className="product-img">
                    <img src={item.image} alt={item.name} />
                    <small>{item.title.substr(0, 25)}</small>
                  </div>
                  <div>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                  <div className="common">
                    <span>Quntity</span>
                    <Select>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => (
                        <MenuItem value={x}>{x}</MenuItem>
                      ))}
                    </Select>
                  </div>
                  <div className="common">
                    <span>Total</span>
                    <strong>
                      1*{item.price} = {item.price}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-item-price">
              <strong>Items ({cart.length})</strong> <strong>$55.57</strong>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="container">
              <div>
                <small>ENTER PROMO CODE</small>
                <div className="promo-code-area">
                  <input placeholder="Promo Code" />
                  <button>Submit</button>
                </div>

                <div className="price-details">
                  <div className="price-details-single">
                    <small>Shipping cost</small> <small>TBD</small>
                  </div>
                  <div className="price-details-single">
                    <small>Discount</small> <small>-$0</small>
                  </div>
                  <div className="price-details-single">
                    <small>Tax</small> <small>TBD</small>
                  </div>
                  <div className="price-details-single">
                    <strong>Estimated Total</strong> <strong>$39.99</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
