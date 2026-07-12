import React, { useState } from "react";
import axios from "axios";

const TransferComponent = ({ type, onclose }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const API =
    type === "DEPOSIT"
      ? process.env.REACT_APP_DEPOSIT
      : process.env.REACT_APP_WITHDRAW;

  const handleTransfer = async () => {
    const value = amount.trim();

    if (!value || Number(value) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    try {
      setLoading(true);

      const { data } = await axios.patch(
        API,
        {
          amount: Number(amount),
        },
        {
          withCredentials: true,
        }
      );

      alert(data.message);

      onclose();

      // Reload to fetch updated balances
      window.location.reload();
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transfer-overlay" onClick={onclose}>
      <div
        className="transfer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={onclose}
        >
          &times;
        </button>

        <h3>
          {type === "DEPOSIT"
            ? "Add Funds"
            : "Withdraw Funds"}
        </h3>

        <input
          type="number"
          placeholder="Enter amount ($)"
          value={amount}
          min={1}
          step = {1}
          onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
            handleTransfer();
            }
          }}
        />

        <div className="transfer-buttons">
          <button
            className="btn btn-secondary"
            onClick={onclose}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary"
            onClick={handleTransfer}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : type === "DEPOSIT"
              ? "Deposit"
              : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferComponent;