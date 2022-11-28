import React, { useState, useEffect } from "react"
import axios from 'axios';
import './User.css';

const EmployeelistFun = () => {
    const [entries, setentries] = useState(null)


    const getemployees = () => {

        axios.get('https://api.publicapis.org/entries').then(response => response.data).then(
            // https://jsonplaceholder.typicode.com/users
            (result) => {
                console.log(result);
                setentries(result.entries)
            },
            // (error) => {
            //     setemployees(null);
            // }
        )



    }

    useEffect(() => {
        getemployees()
    }, [])

    
    if (!entries) return (<div></div>)
    return (<div className="row col-md-6 col-md-offset-2 custyle">
        <h2 className="text-center">API Data Binding</h2>

        <table className="table table-striped custab">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Api</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Cars</th>

                </tr>
            </thead>
            <tbody>
                {entries.map(emp => (
                    <tr>
                        <td>{emp.Id}</td>
                        <td>{emp.API}</td>
                        <td>{emp.Category}</td>
                        <td>{emp.Description}</td>
                        <td>{emp.Cors}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
export default EmployeelistFun;