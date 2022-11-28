import React, { useState, useEffect } from "react"
import axios, { Axios } from 'axios';
import './User.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';


const Datafetch = () => {
    const [entries, setentries] = useState(null)


    const getemployees = () => {

        axios.get('http://localhost:3001/posts').then(response => response.data).then(
            // https://jsonplaceholder.typicode.com/users
            (result) => {
                console.log(result);
                setentries(result)
            },
            // (error) => {
            //     setemployees(null);
            // }
        )



    }


    //     fetch('http://127.0.0.1:8000/api/' + id,
    //     {
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'content-Type': 'application/json'
    //         }
    //     })

    //     .then(console.log("Deleted"))
    //     .catch(err => console.log(err));
    // }


    // const handleRemoveClick = (id) => {

    //     axios.delete('http://localhost:3001/posts/'+id,)
    //         .then(() => this.setentries({ status: 'Delete successful' }));
    // }
    const url = 'http://localhost:3001/posts/'


    const removeData = (id) => {
        axios.delete(`${url}/${id}`).then(() => {
            const del = entries.filter((item) => id !== item.id)
            setentries(del)
        })
    }

    // return { data, removeData }



    useEffect(() => {
        getemployees()
    }, [])




    if (!entries) return (<div></div>)
    return (<div>
        <h2 className="text-center">API Data Binding</h2>
        <Link to={'/create'}>
            <button className="center">create</button><br></br>
        </Link>

        <table className="table table-striped custab">

            <thead>
                <tr>
                    <th className="center">ID</th>
                    <th className="center">name</th>
                    <th className="center">email</th>
                    <th className="center">password</th>
                    <th className="center">Action</th>
                    {/* <th>Cars</th> */}

                </tr>
            </thead>
            <tbody>
                {entries.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.password}</td>
                        <Link to={'/update'}>
                            <button className="center">Update</button>
                        </Link>
                        &nbsp;
                        {/* <button onClick={handleRemoveClick} className="center">Delete</button> */}
                        <button onClick={() => removeData(emp.id)} className="center">Delete</button>



                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
export default Datafetch;