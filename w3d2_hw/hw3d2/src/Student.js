import React from 'react'
import Score from './Score';

export default function Student(props) {
    // console.log(props)
    const scoreArray = props.student.scores.map((score) => {
        
        <Score  score={score.score} />
        // console.log(score.score)
        return score.score
    })
    return (
        <div>
            <h3>Name: {props.student.name}</h3>
            <h3>Bio: {props.student.bio}</h3>
            <h3> Score: {scoreArray[0]}</h3>
            <hr />

           <h3>
    
            {/* <Score scores={scoreArray.score} /> */}
            </h3>
          
        </div>
    )
}
