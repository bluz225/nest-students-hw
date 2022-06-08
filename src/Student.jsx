import React, {Component} from "react"
import Score from "./Score.jsx"

class Student extends Component {
    render(){
        const studentScores = this.props.studentDetails.scores.map((score, index) => {
            return (
                    <Score 
                        key={`score${index}`} 
                        studentScores = {score}
                    />
            )
        })
        return (
            <>
                <h1>{this.props.studentDetails.name}</h1>
                <p>{this.props.studentDetails.bio}</p>
                {studentScores}
            </>
        )
    }
}

export default Student