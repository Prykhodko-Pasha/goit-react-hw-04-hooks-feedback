import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={s.stat__list}>
      <li className={s.stat__item}>Good: {good}</li>
      <li className={s.stat__item}>Neutral: {neutral}</li>
      <li className={s.stat__item}>Bad: {bad}</li>
      <li className={s.stat__item}>Total: {total}</li>
      <li className={s.stat__item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
