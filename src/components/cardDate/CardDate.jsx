import './CardDate.css';

export default function CardDate({ date }) {

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <div className='card-date-box'>
      <span className='card-date'>{day}</span>
      <span className='card-month'>{month}</span>
      <span className='card-year'>{year}</span>
    </div>
  );
}
