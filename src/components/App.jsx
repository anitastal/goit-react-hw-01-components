import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './User/UserProfile';
import Statistics from './Statistics/dataStatistics';
import FriendsList from './Friends/friendsList';
import TransactionHistory from './Transactions/transactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />

      <FriendsList friendsArr={friends} />

      <TransactionHistory transactionArr={transactions} />
    </div>
  );
};
export default App;