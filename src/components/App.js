import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json'
import Statistic from './Statistic/Statistics';
import statistic from './Statistic/statistic.json'
import FriendsList from './FriendList/FriendsList';
import friends from './FriendList/friends.json';
import Transaction from './Transaction/TransactionHistory';
import transaction from './Transaction/transaction.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistic title="Upload stats" stats={statistic} />
    <FriendsList friends={friends} />
    <Transaction items={transaction} />
  </>
)

export default App; 