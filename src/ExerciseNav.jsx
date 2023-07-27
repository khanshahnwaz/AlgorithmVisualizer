
import React, { useEffect,useContext } from 'react';
import { ExerciseContext } from './Context/ExerciseState'
import { Link } from 'react-router-dom';
    

import './RestNav.css';

const ResNav =()=> { 
    
    const context=useContext(ExerciseContext); 

    //    function to check if showButton is displaying HideAnswer or ShowAnswer
 const checkShowButton=()=>{
    const btn=document.getElementById('showButton'); 
    if(btn.innerText=='Hide Answer'){
        // Click on the button to hide all the answers for the newly chosen exercise 
        // console.log("helllo")
        btn.click();
    }
}

useEffect(()=>{
  let burger = document.getElementById('burger'),
          nav    = document.getElementById('main-nav'),
        slowmo = document.getElementById('slowmo');
   
   burger.addEventListener('click', function(e){
       this.classList.toggle('is-open');
       nav.classList.toggle('is-open');
   });
  

},1000)
  
const closeNav=()=>{
  let burger = document.getElementById('burger');
  burger.click();
}
  return ( 
    <div className='block md:hidden'>
        {/* <ScriptTag src='/ResNav.js' type="text/javascript"/> */}
        <button id="slowmo">
            {/* Slow motion <span>mode</span> */}
            </button>  

<div className="device"> 
	<div className="container">
		<button id="burger" className="open-main-nav absolute top-14">
			<span className="burger"></span>
			<span className="burger-text">Exercises</span>  
		</button>       
		<nav className={`main-nav before:bg-gray-400 `} id="main-nav">    
         			<ul className='text-xl' onClick={closeNav} > 
			 	<li className=''  onClick={()=>{
               context.changeExercise(0);
context.setExerciseBackground(0); 
checkShowButton(); 

            }}>
					Exercise 1
				</li>
				<li onClick={()=>{
               context.changeExercise(1)
               context.setExerciseBackground(1);
               checkShowButton();
               
            }}>  
					Exercise 2
				</li>  
				<li  onClick={()=>{
               context.changeExercise(2)
context.setExerciseBackground(2);
checkShowButton();
 
            }}>
					Exercise 3
				</li>
				<li onClick={()=>{
               context.changeExercise(3)
context.setExerciseBackground(3);
checkShowButton();

            }}>
					Exercise 4
				</li> 
				<li onClick={()=>{
               context.changeExercise(4)
               context.setExerciseBackground(4)
               checkShowButton();
              
            }}>
                    Exercise 5
				</li>
                <Link to='/'>
                <li>
					Go Back
				</li></Link>
			</ul>  
		</nav>  
		{/* <p className="notice">Design Copyright <strong>Stéphanie Walter</strong><br/><a href="https://stephaniewalter.design/" target="_blank">StephanieWalter.Design</a></p> */}
	</div>
</div></div>
  )
}

export default ResNav;