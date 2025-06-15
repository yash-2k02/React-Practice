import './App.css'
import yogaDayImg from './assets/yoga-day.webp'
import waterDayImg from './assets/water-day.jpg'
import cancerDayImg from './assets/cancer-day.jpeg'
import Card from './components/card/Card'

function App() {

  const data = [
    {
      date: new Date(2025, 6, 21),
      title: "World Yoga Day",
      img: yogaDayImg
    },
    {
      date: new Date(2026,2,4),
      title: "World Cancer Day",
      img: cancerDayImg
    },
    {
      date: new Date(2026, 3, 22),
      title: "World Water Day",
      img: waterDayImg
    }
  ]
  return (
    <>
    <div className='card-section'>
      {data.map((day)=>{
      return(
        <div>
        <Card date={day.date} title={day.title} img={day.img} ></Card>
      </div>
      )
    })}
    </div>
    </>
  )
}

export default App
