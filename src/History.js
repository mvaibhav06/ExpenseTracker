import React from "react";

const History = ({ transactions }) => {
  const renderedTransactions = transactions.map((transaction) => {
    let content;

    if (transaction.amount > 0) {
      content = (
        <ul class="list-group">
          <li class="list-group-item list-group-item-success">
            {transaction.name}: {transaction.amount}
          </li>
        </ul>
      );
    } else {
      content = (
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">
            {transaction.name}: {transaction.amount}
          </li>
        </ul>
      );
    }

    return <div key={transaction.name}>{content}</div>;
  });

  return (
    <div>
      <br />
      <h4>History</h4>
      <hr />
      {renderedTransactions}
    </div>
  );
};

export default History;
