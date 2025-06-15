import CardDate from '../cardDate/CardDate'
import SocialMediaSection from '../socialMedia/SocialMediaSection'
import './Card.css'
export default function Card(props) {

  return (
    <div className='card-container'>
        <div className='card-date-container'>
          <CardDate date={props.date}></CardDate>
        <div className='card-image-container'>
          <img className='card-img' src={props.img} alt="" />
        </div>
        </div>
        <div className='card-title-container'>
          <div className='card-title'>{props.title}</div>
        </div>
        <SocialMediaSection></SocialMediaSection>
    </div>
  )
}
