import React from "react";

const UserPayPage = () => {
  return (
    <div className="paychecklist">
      <div className="chitems">
        <div>fanta</div>
        <div>2000 x 4ta</div>
      </div>
      <div className="chitems">
        <div>pizza</div>
        <div>57000 x 2ta</div>
      </div>
      <div className="chitems">
        <div>burger</div>
        <div>29000 x 1ta</div>
      </div>
      <h3 className="chitems">
        <div>total:</div>
        <div>106000 so'm</div>
      </h3>
      <span>
        ---------------------------------------------------------------------------
      </span>
      <div className="payuserinfo">
        <div className="chitems">
          <div>
            <i>name:</i>
          </div>
          <div>Abdulloh</div>
        </div>
        <div className="chitems">
          <div>
            <i>tel:</i>
          </div>
          <div>+998933488522</div>
        </div>
        <div className="chitems">
          <div>
            <i>adress:</i>
          </div>
          <div>Suzangaran</div>
        </div>
        <h3>
          <i>payment:</i>
          <select value="cash">
            <option>cash</option>
            <option>click</option>
            <option>payme</option>
          </select>
        </h3>
      </div>
      <button className="plus checkout">Pay</button>
      <h3>
        <i className="far fa-check-circle"></i> Thank you! your delivery is on
        the way.
      </h3>
    </div>
  );
};

export default UserPayPage;
