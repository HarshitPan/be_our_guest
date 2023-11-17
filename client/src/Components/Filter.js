import React from 'react'

const Filter = ({ constraint, setConstraint }) => {

  function changeConstraint_costMIN(event) {
    let temp = event.target.value;
    let temp_obj = { ...constraint };
    temp_obj["minCost"] = Number(temp);
    console.log(temp_obj);

    if (temp_obj["minCost"] > temp_obj["maxCost"] || temp_obj["minCost"] < 0) return;
    setConstraint(temp_obj);
  }
  function changeConstraint_costMAX(event) {
    let temp = event.target.value;
    let temp_obj = { ...constraint };
    temp_obj["maxCost"] = Number(temp);
    if (temp_obj["minCost"] > temp_obj["maxCost"] || temp_obj["minCost"] < 0) return;
    setConstraint(temp_obj)
  }

  return (
    <div className="pos-relative">
      <div id="Filter">
        <div className="filter-option">
          <label>Minimum Budget</label>
          <input type='number' value={constraint["minCost"]} onChange={changeConstraint_costMIN} />
        </div>
        <div className="filter-option">
          <label>Maximums Budget</label>
          <input type='number' value={constraint["maxCost"]} onChange={changeConstraint_costMAX} />
        </div>
      </div>
    </div>
  )
}

export default Filter
