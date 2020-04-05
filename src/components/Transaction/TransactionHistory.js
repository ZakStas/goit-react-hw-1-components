import React from 'react';
import PropTypes from 'prop-types';
import style from './Transaction.module.css';

const TransactionHistory = ({items}) => (
  <table className={style.transaction__history}>
    <thead>
      <tr className={style.thead_tr}>
        <th className={style.type}>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={style.tbody}>
      {items.length > 0 &&
        items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.tbody_tr}>
            <td className={style.type_td}>{type}</td>
            <td className={style.amount_td}>{amount}</td>
            <td className={style.currency_td}>{currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;