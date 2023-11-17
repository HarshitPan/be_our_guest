import React from 'react'

const Details = ({toggle,setToggle,toShow}) => {

  function close(){
    setToggle(false);
  }
  return (
    <>
      <div className='new-window'>
      </div>
      <div className="whiteboard">
        <div className="task-bar">
          <label onClick={close}>X</label>
        </div>
        <div className='details'>
          {console.log(toShow)}
          {Object.keys(toShow).map(key=>{
            return (
              <div className="data">
                <h4 style={{color:'black'}}><b>{key}</b></h4>
                <h3>{toShow[key]}</h3>
              </div>
            )
          })}
          {Object.keys(toShow).map(key=>{
            return (
              <div className="data">
                <h4 style={{color:'black'}}><b>{key}</b></h4>
                <h3>{toShow[key]}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Details
