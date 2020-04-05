import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';


const FriendsList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={styles.items} key={id}>
        <span className={isOnline ? styles.onLine : styles.offLine} />
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;