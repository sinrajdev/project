import React, { useEffect, useState } from 'react';
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';




function Edit() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();


    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);


    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history('/');

    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[])

    return (
        <div>

            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
                <br></br>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <br></br>
                <button onClick={(e) => handleSubmit(e)} type="submit">Update</button>
            </form>

        </div>
    )
}
export default Edit;