import AddTransaction from "./AddTransaction";
import Dashboard from "./Dashboard";
import History from "./History";
import { useState } from "react";
import "./styles.css";

function App() {
  const [transaction, setTransaction] = useState([]);

  const handleSubmit = (newTransaction) => {
    setTransaction([...transaction, newTransaction]);
  };

  return (
    <div className="main-div">
      <h1 className="title">Expense Tracker</h1>
      <br />
      <br />
      {transaction.length > 0 ? <Dashboard transactions={transaction} /> : null}
      <br />
      <br />
      {transaction.length > 0 ? <History transactions={transaction} /> : null}
      <br />
      <br />
      <AddTransaction onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
