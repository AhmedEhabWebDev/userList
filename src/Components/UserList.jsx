import React, { useEffect, useState } from "react";
import "../App.css";

const UserList = ({ transaction, customer }) => {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterAmount, setFilterAmount] = useState("");

  useEffect(() => {
    if (transaction) setTransactions(transaction);
    if (customer) setCustomers(customer);
  }, [transaction, customer]);

  useEffect(() => {
    if (customers && transactions) {
      const filtered = customers.map((customer) => ({
        ...customer,
        transactions: transactions.filter(
          (transaction) =>
            transaction.customer_id === customer.id &&
            (transaction.amount.toString().includes(filterAmount) ||
              filterAmount === "") &&
            (customer.name
              .toLowerCase()
              .includes(filterName.toLowerCase()) || filterName === "")
        ),
      }));
      setFilteredCustomers(filtered);
    }
  }, [customers, transactions, filterName, filterAmount]);

  return (
    <>
     <section className="user-list-container">
      <h1 className="user-list-title">Customers Transactions</h1>
      <section className="user-list-filters">
        <input
          type="text"
          placeholder="Filter by Customer Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
          className="user-list-input"
        />
        <input
          type="number"
          placeholder="Filter by Transaction Amount"
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
          className="user-list-input"
        />
      </section>
      <section>
        <table className="user-list-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Transaction Date</th>
              <th>Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) =>
              customer.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{customer.name}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </section>
    </>
  );
};

export default UserList;
