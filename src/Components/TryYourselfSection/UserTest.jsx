import React from 'react'
import ExerciseBar from './ExerciseBar'
import ExerciseQuestions from './ExerciseQuestions'

const UserTest = () => {
  return (
    <div className='md:flex justify-start my-5'>
    <ExerciseBar/>
    <ExerciseQuestions/>
    </div>
    
  )
}

export default UserTest