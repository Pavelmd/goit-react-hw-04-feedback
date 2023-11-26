import css from './Notification.module.css'

export const Notification = ({ message }) => <p className={css.message}>{message}</p>;
