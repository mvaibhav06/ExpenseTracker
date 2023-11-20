import { useState, useEffect } from "react";

const Dashboard = ({ transactions }) => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        totalIncome += +transaction.amount;
      } else {
        totalExpense += +transaction.amount;
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [transactions]);

  return (
    <div className="dashboard-div">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Balance</h5>
              <p class="card-text">
                {income + expense > 0
                  ? `$${income + expense}`
                  : `-$${-1 * (income + expense)}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Income</h5>
              <p class="card-text">{`$${income}`}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Expense</h5>
              <p class="card-text">{`-$${-1 * expense}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
