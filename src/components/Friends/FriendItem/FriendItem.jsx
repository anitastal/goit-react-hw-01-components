import css from '../friends.module.css';

export default function FriendItem({ name, isOnline, avatar }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.statusOnline}>{isOnline}</span>
      ) : (
        <span className={css.statusOfline}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
