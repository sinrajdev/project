import { useState, useEffect } from 'react';

const DataUpdate = ({ task, onEdit }) => {
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleOnChange = (e) => {
        setUpdatedTask((oldTask) => {
            return {
                ...oldTask,
                [e.target.name]: e.target.value,
            };
        });
    };

    const editTask = async (event) => {
        event.preventDefault();

        try {
            await fetch(`http://localhost:5000/tasks/${updatedTask.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="App">

            <div className="container" id="container">
                <div className="form-container log-in-container">
                    <form onSubmit={(e) => editTask(e)}>
                        <h1>Data Add</h1>

                        <span>Register</span>
                        <input value={updatedTask.name}
                            onChange={handleOnChange} id="name" name="name" type="text" required /><br></br>

                        <input value={updatedTask.email}
                            onChange={handleOnChange} id="email" name="email" type="email" required /><br></br>                        

                        <input value={updatedTask.password}
                            onChange={handleOnChange} id="password" name="password" type="password" required /><br></br>

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
};

export default DataUpdate;