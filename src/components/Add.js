
import React, { useState } from 'react';
 import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
//  import './Add.css';


function Add() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
            b = age;

        Employees.push({ id: uniqueId, Name: a, Age: b })
        history('/');

    }


    return (
        // <div>
        //     <form>
        //         <input type="text" onChange={(e) => setName(e.target.value)} /><br></br>
        //         <br></br>
        //         <input type="text" onChange={(e) => setAge(e.target.value)} />
        //         <br></br>
        //         <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
        //     </form>
        // </div>


        <form>
  <label>
    <p className="label-txt">ENTER YOUR EMAIL</p>
    <input type="text" class="input" onChange={(e) => setName(e.target.value)}  ></input>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label><br></br>
  <label>
    <p className="label-txt">ENTER YOUR AGE</p>
    <input type="text" class="input"onChange={(e) => setAge(e.target.value)}></input>
    <div className="line-box">
      <div className="line"></div>
    </div>
  </label>
 
  <button onClick={(e) => handleSubmit(e)} type="submit">submit</button>
</form> 
    )

}
export default Add;



//  <form>
//   <label>
//     <p class="label-txt">ENTER YOUR EMAIL</p>
//     <input type="text" class="input" onChange={(e) => setName(e.target.value)}  ></input>
//     <div class="line-box">
//       <div class="line"></div>
//     </div>
//   </label>
//   <label>
//     <p class="label-txt">ENTER YOUR AGE</p>
//     <input type="text" class="input"onChange={(e) => setAge(e.target.value)}></input>
//     <div class="line-box">
//       <div class="line"></div>
//     </div>
//   </label>
 
//   <button onClick={(e) => handleSubmit(e)} type="submit">submit</button>
// </form> 