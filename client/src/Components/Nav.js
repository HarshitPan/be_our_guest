import React,{useState} from 'react'

const Nav = ({option,setOption}) => {
    function setSelected(opt){
        let prev=document.getElementById(option)
        let next=document.getElementById(opt)
        prev.style.removeProperty("background-color");
        prev.style.removeProperty("color");
        next.style.backgroundColor='skyblue'
        next.style.color='black'
        setOption(opt)
    }
    return (
        <>
            <div className='Nav'>

                <label style={{backgroundColor:'skyblue',color:'black'}} id="Home" onClick={() => setSelected("Home")}>Home</label>
                <label id="Search" onClick={() => setSelected("Search")}>Search</label>
               
            </div>
        </>
    )
}

export default Nav
