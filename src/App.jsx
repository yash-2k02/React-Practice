import "./App.css";
import CardNew from "./components/card/CardNew";
import Form from "./components/form/Form";
import { useState } from "react";
import Header from "./components/header/Header";
import awarenessEvents from "./data/data";
import Filter from "./components/filter/Filter";
import BarChart from "./components/graphs/barchart/BarChart";
import Piechart from "./components/graphs/piechart/Piechart";

export default function App() {

  const [data, setData] = useState(awarenessEvents);
  const [year, setYear] = useState('2023')

  const getFormDetails = (cardInfo) => {
    setData([cardInfo,...data]);
  };

  const getYearFromFilterComponent = (filteredYear)=>{
    setYear(filteredYear)
  }
  
  const filteredDataByYear = data.filter((data) => data.date.getFullYear().toString()===year)

  return (
    <>
      <div className="header-section">
        <Header></Header>
      </div>
      <div className="form-section">
        <Form getFormDetails={getFormDetails}></Form>
      </div>
      <div className="card-section">
        <h1 className="events-title">Campaigns List</h1>
        <Filter setYear={getYearFromFilterComponent} />
        <div className="card-container">
          {filteredDataByYear.map((data, index) => {
          return (
            <div key={index}>
              <CardNew data={data}  />
            </div>
          );
        })}
        </div>
        <div className="chart-section">
          <div className="bar-chart">
          <BarChart data={filteredDataByYear} />
        </div>
        <div className="pie-chart">
          <Piechart data={filteredDataByYear}/>
        </div>
        </div>
      </div>
      {/* <div className="chart-section">
        <div className="bar-chart">
          <BarChart data={filteredDataByYear} />
        </div>
        <div className="pie-chart">
          <Piechart data={filteredDataByYear}/>
        </div>
      </div> */}
    </>
  );
}

