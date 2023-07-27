import React, { useState,createContext } from 'react'

const ExerciseContext=createContext();

const ExerciseState=(props)=>{
    let [exerciseCount,setExerciseCount]=useState(0);
    const [li,setLi]=useState(0);
    const setExerciseBackground=(i)=>{
        // console.log(i)
        if(i===5){
            i=0
           // console.log("hello")
        }
      //  console.log("hiii")
       // console.log(i)
        setLi(i);
        //console.log('Rannnn')
    }
    const nextExercise=()=>{
        if(exerciseCount===4){
            exerciseCount=-1
        }
        // if user has clicked the next exericse button 
        if(exerciseCount===5){
            exerciseCount=li
        }
        // if user clicks the next button after clicking on try again button
       
        console.log(exerciseCount)
        setExerciseCount(exerciseCount+1);
    }
    const prevExercise=()=>{
        setExerciseCount(exerciseCount-1)
    }
    const changeExercise=(c)=>{       
        setExerciseCount(c);
    }
    return (
        <ExerciseContext.Provider value={{exerciseCount,nextExercise,prevExercise,changeExercise,setExerciseBackground,li}}>
          {props.children}
        </ExerciseContext.Provider>
    )
}
export default ExerciseState;
export {ExerciseContext};