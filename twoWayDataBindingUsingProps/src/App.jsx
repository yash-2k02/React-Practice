import "./App.css";
import yogaDayImg from "./assets/yoga-day.webp";
import waterDayImg from "./assets/water-day.jpg";
import cancerDayImg from "./assets/cancer-day.jpeg";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [data, setData] = useState([
    {
      date: new Date(2025, 6, 21),
      title: "World Yoga Day",
      category: "Health",
      img: yogaDayImg,
    },
    {
      date: new Date(2026, 2, 4),
      title: "World Cancer Day",
      category: "Health",
      img: cancerDayImg,
    },
    {
      date: new Date(2026, 3, 22),
      title: "World Water Day",
      category: "Environment",
      img: waterDayImg,
    },
  ]);

  const getFormDetails = (cardInfo) => {
    setData([cardInfo,...data]);
  };

  return (
    <>
      <div className="header-section">
        <Header></Header>
      </div>
      <div className="form-section">
        <Form getFormDetails={getFormDetails}></Form>
      </div>
      <div className="card-section">
        <h1 className="events-title">All Upcoming events</h1>
        {data.map((day, index) => {
          return (
            <div key={index}>
              <Card date={day.date} title={day.title} img={day.img} category={day.category}></Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
