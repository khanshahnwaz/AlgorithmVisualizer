import React,{useContext, useEffect} from 'react'
import { ExerciseContext } from '../Context/ExerciseState';
import { Link } from 'react-router-dom';
import ExerciseNav from './ExerciseNav';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const ExerciseBar = () => {
    const context=useContext(ExerciseContext);
    
    useEffect(()=>{
        // change the background color of the current question
        const ele=document.getElementsByClassName('li')[context.li];
        ele.style.backgroundColor='gray';
        // change the bg of not selected exercise
        for(let i=0;i<document.getElementsByClassName('li').length;i++){
            if(i!=context.li){
                document.getElementsByClassName('li')[i].style.backgroundColor="#d1d5db";
            }
        }
    })

    //    function to check if showButton is displaying HideAnswer or ShowAnswer
    const checkShowButton=()=>{
        const btn=document.getElementById('showButton');
        if(btn.innerText=='Hide Answer'){
            // Click on the button to hide all the answers for the newly chosen exercise 
            console.log("helllo")
            btn.click();
        }
    }
    const[menuBar,setMenuBar]=useState('hidden')
  return (
    <>
    {/* <ExerciseNav/>  */}
    <button id='btn' className='absolute bg-[#001E25] md:hidden block p-2  text-white font-semibold left-3 top-6' onClick={()=>[menuBar=='hidden'?setMenuBar('block'):setMenuBar('hidden')]}><FiAlignJustify className=''/></button>
    <div id='menu' className={`md:w-[15%] w-[60%] ${menuBar} md:block ml-4 bg-gray-200 absolute md:static z-10 transition-display ease-in-out duration-700`}>
        <ul className='items-center  text-center ' onClick={()=>setMenuBar('hidden')}>
            <li className='text-base tracking-wide py-2 my-1 bg-gray-300 text-black hover:cursor-pointer font-semibold'>
                Complete all exercises
            </li>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
               context.changeExercise(0);
context.setExerciseBackground(0);
checkShowButton();
            }} >
                Exercise 1
            </li>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
               context.changeExercise(1)
               context.setExerciseBackground(1);
               checkShowButton();
               
            }}>
                Exercise 2
            </li><li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
        context.changeExercise(2)
context.setExerciseBackground(2);
 checkShowButton();
 
            }}>
                Exercise 3
            </li><li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
    context.changeExercise(3)
context.setExerciseBackground(3);
checkShowButton();

            }}>
                Exercise 4
            </li>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:bg-gray-300 hover:cursor-pointer' onClick={()=>{
               context.changeExercise(4)
               context.setExerciseBackground(4)
               checkShowButton();

            }}>
                Exercise 5
            </li>
            <Link to='/'>
            <li className='li text-2xl tracking-wide py-2 my-1 hover:cursor-pointer'>
                Go Back 
            </li></Link>
            
        </ul>
    </div>
    </>
  )
}

export default ExerciseBar