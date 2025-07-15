import { useState } from 'react'
import './App.css'
import CardNew from './components/card/CardNew'
import data1 from "./data/data"
import ModuleStyleComponent from './components/moduleandstylecomponent/ModuleStyleComponent'

export default function App() {

  const [data, setData] = useState(data1)
  console.log(data);
  // fetch("https://dummyjson.com/products").then((data)=> data.json()).then((data)=>console.log(data.products))
  //  const data = fetch("https://randomuser.me/api/?results=50").then((data)=> data.json()).then((data)=>document.getElementById('root').innerHTML=JSON.stringify(data))
  // console.log("LOg from line 9");
  // document.body.innerHTML(data);

  // const fetchData = async ()=>{
  //   const data = await fetch("https://randomuser.me/api/?results=50")
  //   let f = await data.json()
  //   setUserInfo(f)
  // }
  // fetchData()

  return (

    <div className='main-container'>
      <h1>Practice on module css and Styled Component</h1>
      <ModuleStyleComponent />
    </div>



  )
}