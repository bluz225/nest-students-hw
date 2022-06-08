// new component import react
import React, {Component} from "react"

class Score extends Component {
    render(){
        return (
            <>
                <p>Date: {this.props.studentScores.date}</p>
                <p>Score: {this.props.studentScores.score}</p>
            </>
        )
    }
}

export default Score