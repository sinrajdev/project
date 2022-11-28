import { Button } from "bootstrap";
import React, { Fragment } from "react";
// import { Button, Table } from 'react-bootsrab';
// import "bootstrap/dist/css/bootstrap.min.css";

import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';




function Home() {


    let history = useNavigate();


    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }



    const handleDelete = (id) => {
        var data = {
            name: "sinraj",
            age: "20"
        }

        console.log(JSON.stringify(data));
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }




    return (

        // <Fragment>
        //     <div style={{ margin: "10rem" }}>
        //         <table striped borderd hover size="sm">
        //             <thead>
        //                 <tr>
        //                     <th>
        //                         Name
        //                     </th>
        //                     <th>
        //                         Age
        //                     </th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     Employees && Employees.length > 0
        //                         ?
        //                         Employees.map((item) => {

        //                             return (
        //                                 <tr>
        //                                     <td>
        //                                         {item.Name}
        //                                     </td>

        //                                     <td>
        //                                         {item.Age}
        //                                     </td>

        //                                     <td>
        //                                         <Link to={'/edit'}>
        //                                             <button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edite</button>
        //                                         </Link>
        //                                         &nbsp;
        //                                         <button onClick={() => handleDelete(item.id)}>Delete</button>
        //                                     </td>
        //                                 </tr>
        //                             )
        //                         })
        //                         :
        //                         "No data available"
        //                 }
        //             </tbody>
        //         </table>
        //         <br></br>
        //         <Link to={'/create'}>
        //             <button>Create</button>
        //         </Link>
        //     </div>
        // </Fragment>




        <div class="container">
            <div className="row col-md-6 col-md-offset-2 custyle">
                <Link to={'/create'}>
                    <button style={{ backgroundColor: 'lightgreen' }}> Create</button>

                </Link>
                <table className="table table-striped custab">
                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Age</th>

                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {

                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>

                                            <td>
                                                {item.Age}
                                            </td>

                                            <td>

                                                &nbsp;
                                                <Link to={'/edit'}>
                                                    <button onClick={() => handleEdit(item.id, item.Name, item.Age)} style={{ backgroundColor: 'lightblue' }}>Edite</button>
                                                </Link>
                                                &nbsp;
                                                <button onClick={() => handleDelete(item.id)} style={{ backgroundColor: 'red' }}>Delete</button>

                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Home;



//  <div class="container">
//     <div class="row col-md-6 col-md-offset-2 custyle">
//     <table class="table table-striped custab">
//     <thead>
//     <a href="#" class="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a>
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Parent ID</th>
//             <th class="text-center">Action</th>
//         </tr>
//     </thead>
//             <tr>
//                 <td>1</td>
//                 <td>News</td>
//                 <td>News Cate</td>
//                 <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>Products</td>
//                 <td>Main Products</td>
//                 <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
//             </tr>
//             <tr>
//                 <td>3</td>
//                 <td>Blogs</td>
//                 <td>Parent Blogs</td>
//                 <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
//             </tr>
//     </table>
//     </div>
// </div> 