import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
      </div>
      <div className="funds">
        <Button className="btn btn-green">Add funds</Button>
        <Button className="btn btn-blue">Withdraw</Button>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>
          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>Payout</p>
              <p>4064.00</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
