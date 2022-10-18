import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import css from './friends.module.css';

export default function FriendsList({ friendsArr }) {
  return (
    <ul className={css.friendList}>
      {friendsArr.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};
