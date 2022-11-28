
import './App.css';


// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import Home from './components/Home';
// import Add from './components/Add';
// import Edit from './components/Edit';

import DataAdd from './components/DataAdd';
import Datafetch from './components/Datafetch';
import DataUpdate from './components/DataUpdate';
// import Edit from './components/Edit';



function App() {
  return (
    <div className="App">


      {/* <BrowserRouter>
        <Routes>
         
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="login" element={<Login />} />

          {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter>  */}




      {/* <BrowserRouter> */}
        {/* <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Add />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </Router> */}

      {/* </BrowserRouter> */}



      <Router>
          <Routes>
            <Route path='/create' element={<DataAdd />} />
            <Route path='/table' element={<Datafetch />} />
            <Route path='/update' element={<DataUpdate />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
