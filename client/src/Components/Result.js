import React, { useState } from 'react'
import Details from './Details';
import Planners from './../json/planners.json';

const Result = ({data,contraint}) => {
  const [toShow,setToShow] = useState({});
  const [toggle,setToggle] = useState(false);
  function selectData(a)
  {
    setToShow({...a});
    setToggle(true);
    
  }

  return (
    <div className='result'>
      {toggle && <Details setToggle={setToggle} toShow={{...toShow}} />}
      {Planners.map((record) => {
        if(record.Name.toLowerCase().includes(data.toLowerCase()))
          return (
            <div className='Databox' onClick={()=> selectData(record)}>
              <h3>{record.Name}</h3>
              <p>{record.Desc}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Result
