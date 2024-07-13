import React from 'react';
import UserList from './UserList.jsx';
import useFetch from '../useFetch.jsx';
import TransactionGraph from './TransactionGraph.jsx';

const Home = () => {
    const { data: transactions, isPending, error } = useFetch('http://localhost:8000/transactions');
    const { data: customers} = useFetch('http://localhost:8000/customers');

    return (<>
        <section>
            {error && <p>{error}</p>}
            {isPending && <p>Loading users...</p>}
            {transactions && <UserList transaction={transactions} customer={customers}/>}
        </section>
        <section>
          <TransactionGraph data={transactions}/>
        </section>
        </>
    );
};

export default Home;
