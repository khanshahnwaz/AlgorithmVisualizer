import React, { useEffect } from 'react';
import './RestNav.css';
const ResNav =()=> {
    
    useEffect(()=>{
        let burger = document.getElementById('burger'),
          nav    = document.getElementById('main-nav'),
        slowmo = document.getElementById('slowmo');
   
   burger.addEventListener('click', function(e){
       this.classList.toggle('is-open');
       nav.classList.toggle('is-open');
   });
    
   slowmo.addEventListener('click', function(e){
       this.classList.toggle('is-slowmo');
   });
   
   /* Onload demo - dirty timeout */
   let clickEvent = new Event('click'); 
   
//    window.addEventListener('load', function(e) {
//        slowmo.dispatchEvent(clickEvent);
//        burger.dispatchEvent(clickEvent);
       
//        setTimeout(function(){
//            burger.dispatchEvent(clickEvent);
           
//            setTimeout(function(){
//                slowmo.dispatchEvent(clickEvent);
//            }, 3500);
//        }, 5500);
//    });
    })
      
  return (
    <div className='block md:hidden'>
        <button id="slowmo">
            {/* Slow motion <span>mode</span> */}
            </button>  

<div className="device"> 
	<div className="container">
		<button id="burger" className="open-main-nav absolute top-4">     
			<span className="burger"></span>
			<span className="burger-text">Menu</span>   
		</button>      
		<nav className={`main-nav before:bg-[#001E25]`} id="main-nav">         
			<ul>
				<li className=''>
					<a href="../index.html#aim">Aim</a>
				</li>
				<li>
					<a href="../index.html#theory">Theory</a>
				</li>
				<li>
					<a href="../index.html#procedure">Procedure</a>
				</li>
				<li>
					<a href="../index.html#practice">Working</a>
				</li> 
				<li>
					<a href="../index.html#simulation">Simulation</a>
				</li>
                <li>
					<a href="../index.html#quiz">Quiz</a>
				</li>
			</ul>
		</nav> 
		{/* <p className="notice">Design Copyright <strong>Stéphanie Walter</strong><br/><a href="https://stephaniewalter.design/" target="_blank">StephanieWalter.Design</a></p> */}
	</div>
</div></div>
  )
}

export default ResNav;