import { useState } from "react";

const AddTransaction = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ name, amount });
  };

  return (
    <div className="add-transaction">
      <h3>Add new transaction:</h3>
      <hr />
      <label>Text: </label>

      <div className="input-group mb-3">
        <input
          value={name}
          placeholder="Enter text"
          onChange={handleName}
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>

      <label>Amount</label>

      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          onChange={handleAmount}
          value={amount}
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span class="input-group-text">.00</span>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
