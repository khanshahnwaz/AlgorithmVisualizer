
// router 
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

import UserTest from './UserTest';
import Simulation from "./Simulation";
import Header from "./Header/Header";
import Checking from "./Checking";
const Landing =()=>{
    return (
        
        <Router >    
          <Header/>  
            <Routes>
           

            <Route path='/Test' element={<><UserTest/></>}/>
            <Route path='/' element={<><Simulation/></>}/> 
             {/* <Route path="/" element={<Checking/>}/> */}
            </Routes>
      </Router>
    );
}

export default Landing;