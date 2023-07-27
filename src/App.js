import './App.css';
import Simulation from './Components/SimulationMainPage/Simulation';
import Header from './Components/Header/Header';
import ExerciseState from './Components/Context/ExerciseState';
// router 
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import UserTest from './Components/TryYourselfSection/UserTest'

// Tippy js
import 'tippy.js/dist/tippy.css'; // optional
// import RestNav from './RestNav.jsx';
function App() {
  return (
    <div className="App check">
      {/* <ResNav/> */}
     
       
      <Router > 
         <ExerciseState>
          <Header/>  
            <Routes>
           

            <Route path='/Test' element={<><UserTest/></>}/>
            <Route path='/' element={<><Simulation/></>}/> 
             
            </Routes>
            </ExerciseState>   
      </Router>
    </div>
  );
}

export default App;
