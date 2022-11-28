// import "./DataAdd.css";
// import { useState } from "react";

// function DataAdd() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [message, setMessage] = useState("");

//     let handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(name);
//         console.log(email);
//         console.log(mobileNumber);


//         try {
//             let res = await fetch("https://jsonplaceholder.typicode.com/users", {
//                 method: "POST",
//                 body: JSON.stringify({
//                     name: name,
//                     email: email,
//                     mobileNumber: mobileNumber,
//                 }),
//             });
//             let resJson = await res.json();
//             if (res.status === 200) {
//                 setName("");
//                 setEmail("");
//                 setMessage("User created successfully");
//             } else {
//                 setMessage("Some error occured");
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={name}
//                     placeholder="Name"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     value={email}
//                     placeholder="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     value={mobileNumber}
//                     placeholder="Mobile Number"
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                 />

//                 <button type="submit">Create</button>

//                 <div className="message">{message ? <p>{message}</p> : null}</div>
//             </form>
//         </div>
//     );
// }

// export default DataAdd;












import './Login.css';
import { useState } from "react";
// import { Axios } from "axios";
// import { Link, useNavigate } from 'react-router-dom';


function DataAdd() {


    const [data, setData] = useState({
        
        name: "",
        email: "",
        password: "",
        

    })

    function submit(e) {
        e.preventDefault();
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify({
                // name: document.getElementById('name').value,
                // email: document.getElementById('email').value,
                // password: document.getElementById('password').value,
                name:data.name,
                email:data.email,
                password:data.password

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        window.location.href="/table";
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    return (
        <div className="App">
       
            <div className="container" id="container">
                <div className="form-container log-in-container">
                    <form onSubmit={(e) => submit(e)}>
                        <h1>Data Add</h1>
                       
                        <span>Register</span>
                        <input onChange={(e) => handle(e)} id="name" name="name" type="text" required/><br></br>
                        <input onChange={(e) => handle(e)} id="email" name="email" type="email" required/><br></br>
                        <input onChange={(e) => handle(e)} id="password" name="password" type="password" required/>

                        {/* <Link to={'/table'}> */}
                        <button type="submit">Submit</button>
                        {/* </Link> */}
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>API Register the Data</h1>
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default DataAdd;