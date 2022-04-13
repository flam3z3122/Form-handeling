import React from 'react'
import { useState } from 'react'

const Form = () => {
    
    const [name , setName]=useState("");
    const [age , setAge]=useState("");
    const [address , setAddress]=useState("");
    const [data, setData]=useState([])

    const handelSubmit =(event)=>{
      event.preventDefault();

      const newData = {name , age , address}
      if (name && age && address){
        setData((input) => [...input, newData])
        setName("")
        setAge("")
        setAddress("")
      }
    }

  return (
    <div>
        <form>
            <label>Name</label>
            <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>

            <label>Age</label>
            <input type='number' name='age' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
            <br/>

            <label>Address</label>
            <input type='text' name='address' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>

            <br/>
            
            <button className='submit-btn' onClick={handelSubmit}>Submit</button>
        </form>

        <hr/>

        <div>
          {
            data.map((d)=>
            <h2> Name : {d.name} || Age : {d.age} || Address : {d.address}</h2>
            )
          }
        </div>
    </div>
  )
}

export default Form