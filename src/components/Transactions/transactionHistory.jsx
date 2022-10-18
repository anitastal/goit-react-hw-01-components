import PropTypes from 'prop-types';
import css from './transaction.module.css';

export default function TransactionHistory({ transactionArr }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionArr.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactionRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};
