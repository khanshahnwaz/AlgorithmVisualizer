import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { CommentText } from 'semantic-ui-react';
import {ExerciseContext} from './Context/ExerciseState'
const ExerciseQuestions = (props) => {
  // import the useContext
  const count=useContext(ExerciseContext);

  // First question code
  const que0=<pre>for(i=0;i&#60; <input maxLength='1' className='w-4 mb-1' id='res' ></input>; i++)<br/>
  <input maxLength='14' className='w-34 ml-8' id='res1'/></pre>

  // second question code 
  const que1=<pre><input maxLength='4' className='w-12' id='res'/> = <input maxLength='6' className='w-16 ' id='res1'></input>;</pre>
// third question code 
  const que2=<pre>temp        =<input maxLength='6' className='w-24 res' id='res' ></input><br/>
  <input maxLength='6' className='w-24 my-1 ' id='res_' ></input>   =<input maxLength='6' className='w-24 res1 my-1'></input><br/>
  <input maxLength='6' className='w-24 res1' ></input>   =<input maxLength='4' className='w-24 ' id='res2'></input>
  </pre>

  // Fourth question code
  const que3=<pre>Sum    =<input maxLength='6' className='w-16 ml-2' id='res' ></input> + <input maxLength='6' className='w-16 ml-2 ' id='res1' ></input></pre>

  // Fifith question code 
  const que4=<pre> int i=0; <br/>while<input maxLength='5' className='w-16 ' id='res' ></input>&#123;
  <br/><input maxLength='13' className='w-[128px] ml-16 mt-1' id='res1' ></input>
  <br/>     i++; &#125;</pre>

   const question=[
        {
            question:"Complete for loop to display 'Hello' five times.",
            code:que0,
            answer:5,
            answer1:'cout<<"Hello";'
        },
        {
          question:"Store the third element of array arr[]={3,1,2,5,4} in a variable 'temp'.",
          code:que1,
          answer:'temp',
          answer1:'arr[2]'
      },
      {
        question:"Swap first and second element of the array arr[]={3,1,2,4,5}.",
        code:que2,
        answer:'arr[0]',
        answer1:'arr[1]',
        answer2:'temp'
    },
    {
      question:"Store sum of maximum and minimum elements of the array arr[]={3,1,2,4,5}.",
      code:que3,
      answer:'arr[1]',
      answer1:'arr[4]'
  },
  {
    question:"Print all elements of the array arr[]={3,1,2,4,5} Using while loop.",
    code:que4,
    answer:'(i<5)',
    answer1:'cout<<arr[i];'
}
    ]

    // change the button text when answer is modified
    // useEffect(()=>{
    //   document.getElementsByTagName('input').addEventListener('change',()=>{
    //     document.getElementById('answerButton').innerText='Submit Answer'
    //   })
    // },[])
    
    // function to check answer
    // store the default html
    let defaultHTML='';
    const handleSubmit=()=>{
    
     
      // fill in the blank box 
         const ele=document.getElementById('res');
        //  access the first input box with id =res1
        const ele1=document.getElementById('res1')
        //  access submit button
        const submitBtn=document.getElementById('answerButton');


        // function to make changes when correct answer is selected
        const correct=()=>{
       
          document.getElementById('right').classList.remove('hidden');
          setTimeout(()=>{
            document.getElementById('right').classList.add('hidden');
          },1500)
          document.getElementById('answerButton').innerText='Next Exercise'
        }
        // function to make changes when wrong answer is selected
        const inCorrect=()=>{
        
          document.getElementById('wrong').classList.remove('hidden');
          setTimeout(()=>{
            document.getElementById('wrong').classList.add('hidden');
          },1500)
          // document.getElementById('answerButton').innerText='Try Again'
        }
        // case 1: user submits the answer
        
        if(submitBtn.innerText=='Submit Answer'){
          
              
           //  validate answer

          //  validate answer for all exercise, except exercise 3
         if(count.exerciseCount!=2){
          if(ele.value==question[count.exerciseCount].answer && ele1.value==question[count.exerciseCount].answer1){
            correct();
          }else inCorrect();
         }else{// validate anser for exercise 3, it has 4 input box
            const ele_=document.getElementById('res_');
            const ele2=document.getElementsByClassName('res1');
            const ele3=document.getElementById('res2');
           if((ele.value && ele_.value)==question[count.exerciseCount].answer &&((ele2[0].value&& ele2[1].value)==question[count.exerciseCount].answer1) && ele3.value==question[count.exerciseCount].answer2 ){
            correct();
           }else inCorrect();
         }

        //  case 2: User clicks Try Again

      

        }
        // case 3: If user clicks on next exercise 
        else if(submitBtn.innerText=='Next Exercise'){
          count.nextExercise();
          count.setExerciseBackground(count.li+1)
        
          // set the button text 
          submitBtn.innerText='Submit Answer'

        }
        
         
  
    }

    
    // function to show answer to the user
    const [buttonText,setButtonText]=useState('Show Answer')
    const showAnswer=()=>{
      // console.log("Show answer button.")
      // access the button 
      const btn=document.getElementById('showButton');
      // console.log("Show answer button ",btn)
      // access both the input box 
      let ele=document.getElementById('res');
      let ele1=document.getElementById('res1');
      if(buttonText=='Show Answer'){ //show answer for first exercise 
        setButtonText('Hide Answer');

     
       if(count.exerciseCount==2){ // show answer for third exercise
          const q3e1=document.getElementsByClassName('res');
          q3e1[0].value=question[count.exerciseCount].answer;
          // I can access the second input using class name. But currently different answer is getting displayed even I am assigning the same value. So, did a different approach.
          document.getElementById('res_').value=question[count.exerciseCount].answer;

          const q3e2=document.getElementsByClassName('res1');
          q3e2[0].value=question[count.exerciseCount].answer1;
          q3e2[1].value=question[count.exerciseCount].answer1;

          const ele3=document.getElementById('res2');
          ele3.value=question[count.exerciseCount].answer2;
          document.getElementsByClassName('res')[1].value=question[count.exerciseCount].answer1;
      }else { // show answer in the both input box.
        ele.value=question[count.exerciseCount].answer;
        ele1.value=question[count.exerciseCount].answer1;
      }

       
      //  disable the submit button
      document.getElementById('answerButton').style.visibility='hidden';

    } 
       else{ 
        // btn.innerText='Show Answer';
        setButtonText('Show Answer')
       if(count.exerciseCount==2){
          // erase value from third exercise
          const q3e1=document.getElementsByClassName('res');
          q3e1[0].value='';
          document.getElementById('res_').value='';


          const q3e2=document.getElementsByClassName('res1');
          q3e2[0].value='';
          q3e2[1].value='';

          document.getElementById('res2').value='';

        }else { //erase value from the input box.
          ele.value='';
          ele1.value='';
        }
        // enable the submit button
        document.getElementById('answerButton').style.visibility='visible';
       }
     
    }
    
    
  return (
    <div className='md:bg-gray-400 w-[84%] relative  h-max py-5 text-left'>
  
        <h1 className=' text-lg md:text-3xl tracking-wider font-semibold md:pl-10'>Try Yourself with exercises.</h1>
        <div className='md:bg-white md:h-[500px] md:mx-1 md:my-2 md:mt-5 md:pl-10 md:mr-5'>
        <div className=' text-lg md:text-3xl tracking-wide md:my-3 mt-3 font-semibold'>Exercise:{count.exerciseCount+1}</div>
        {/* Bootstrap alert boxes */} 
        {/* wrong alert box */}
                <div className="alert alert-danger hidden absolute z-10 inset-x-1 md:inset-x-5 " role="alert" id='wrong'>
          Incorrect answer! Please try again.
        </div>

        {/* Sucess alert box. Visible on correct submission */}
        <div className="alert alert-success hidden absolute z-10 inset-x-1 md:inset-x-5" role="alert" id='right'>
          Correct answer! Click on Next Exercise to move to next exercise.
        </div>  
{/* bootstrap alert box to show exercise feedback */}
        <div className='md:my-2  text-lg md:text-xl tracking-wide font-semibold'>{question[count.exerciseCount].question}</div>
       
        <div className='bg-gray-200 py-4 px-4 md:mr-4 h-[200px] relative rounded-md pr-5' id=''>
          <div className='text-lg md:text-xl tracking-wide'> {question[count.exerciseCount].code}</div>
        <button className='hidden md:block bg-black  text-white py-2 px-2 text-xl tracking-wider float-right rounded-xl  absolute bottom-2 right-1'id='showButton' onClick={showAnswer}>Show Answer</button>
        </div> 
        <div className='md:block flex justify-between'>   
        <button className='bg-green-400 text-white py-2 md:px-2 md:text-xl md:tracking-wider  py-1 px-1 text-sm tracking-wide rounded-xl relative top-4' onClick={handleSubmit} id='answerButton' >Submit Answer</button>
        <button className='md:hidden block bg-black  text-white py-1 px-1 text-sm tracking-wide rounded-xl relative top-4 'id='showButton' onClick={showAnswer}>{buttonText}</button> 
        </div> 
    
        </div> 
        

    </div>
  )
}

export default ExerciseQuestions