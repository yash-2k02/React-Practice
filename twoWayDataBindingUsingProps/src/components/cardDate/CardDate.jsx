import './CardDate.css'
export default function CardDate(props) {
    const date = props.date.getDate()
    // const month = props.date.getMonth()
    const month = props.date.toLocaleString('default', { month: 'long' });
    const year = props.date.getFullYear()
  return (
    <div className='date-month-container-wrapper'>
       <div className='date-month-container'>
        <div className='date'>{date}</div>
        <div className='month'>{month}</div>
        </div> 
    </div>
  )
}
