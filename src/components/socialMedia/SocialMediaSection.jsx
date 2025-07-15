import './SocialMediaSection.css'
import facebook from '../../assets/facebook.webp'
import twitter from '../../assets/twitter.png'
import github from '../../assets/github.png'

export default function SocialMediaSection() {
  return (
    <div className='social-media-container'>
        <div>
            <img className='facebook-logo' src={facebook} alt="Facebook Logo" />
        </div>
        <div>
            <img className='twitter-logo' src={twitter} alt="Twitter Logo" />
        </div>
        <div>
            <img className='github-logo' src={github} alt="Github Logo" />
        </div>

    </div>
  )
}
