import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ user }) => (
  <div className={style.profile}>
    <div>
      <img src={user.avatar} alt="user avatar" className={style.avatar} />
      <p className={style.name}>{user.sname}</p>
      <p className={style.tag}>{user.tag}</p>
      <p className={style.location}>{user.location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.stats__items}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{user.stats.followers}</span>
      </li>
      <li className={style.stats__items}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{user.stats.views}</span>
      </li>
      <li className={style.stats__items}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  user: {},
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      quantity: PropTypes.number,
    }),
  }),
};

export default Profile;