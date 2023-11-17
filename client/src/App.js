import logo from './logo.svg';
import { useState } from 'react';
import './css/MainLayout.css';

import Nav from './Components/Nav';
import Header from './Components/Header';
import Home from './Components/Home';
import Search from './Components/Search';
import Result from './Components/Result';
import Filter from './Components/Filter';

function App() {

  const [option,setOption]=useState("Home");
  const [value,setValue]=useState("");
  var Content;
  function changeOption()
  {
    if(option === "Home")
    {
      Content=Home;
    }
    else if(option === "Search")
    {
      Content=Search;
    }
  }
 changeOption();
  return (
    <div className="container">
      <Header/>
      <Nav option={option} setOption={setOption}/>
      <Content/>
    </div>
  );
}

export default App;
