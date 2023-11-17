import React,{useState} from 'react'
import Filter  from './Filter';
import Result from './Result';
const Search = () => {
  const [toggleFilter,setToggleFilter]=useState(false);
  const [value,setValue]=useState("");
  const [constraint,setConstraint]=useState({
    minCost:1,
    maxCost:1
  });

  function toSearch(event)
  {
    let temp=event.target.value;
    console.log(temp);
    setValue(temp);

  }
  function tofilter()
  {
    let filter=document.getElementById("Filter");
    if(!toggleFilter) 
    {
      filter.style.height="fit-content";
    }
    else {
      filter.style.height=0;
    }
    setToggleFilter(!toggleFilter);
  }
  // function toResult(){
  //   setValue("");
  // }
  return (
    <>
      <div className="Search">
        <div className="search-bar">
          <input type='search' value={value} onChange={toSearch}></input>
          {/* <label className='search-button' onClick={toResult}> Enter</label> */}
          <label className='filter-button' onClick={tofilter}> Filter</label>
        </div>
      </div>
      <Filter constraint={constraint} setConstraint={setConstraint}/> 
      <Result data={value} constraint={constraint}/>
    </>
  )
}

export default Search
