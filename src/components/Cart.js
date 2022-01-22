import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div class="cartbody">
      <div class="addedcart">
        <div class="cleft">
          <button class="plus">+</button>
          <span class="name">4</span>
          <button class="plus">-</button>
          <img class="cartimg" src="\photo\pizza7.png" alt="pizzaHut" />
          <div class="cartitemname">Margarita</div>
        </div>
        <div class="cright">
          <div class="cartitemprice">
            <i>4 x 57000 so'm</i>
          </div>
        </div>
      </div>
      <div class="addedcart">
        <div class="cleft">
          <button class="plus">+</button>
          <span class="name">4</span>
          <button class="plus">-</button>
          <img class="cartimg" src="\photo\pizza7.png" alt="pizzaHut" />
          <div class="cartitemname">Margarita</div>
        </div>
        <div class="cright">
          <div class="cartitemprice">
            <i>4 x 57000 so'm</i>
          </div>
        </div>
      </div>
      <div class="total">
        <div class="cartitemprice">total: 104000 so'm</div>
        <p>
          <i class="fas fa-shipping-fast"></i> + 8000
        </p>
        <Link to="/userpay">
          <button class="plus checkout">
            checkout <i class="fas fa-credit-card"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};
